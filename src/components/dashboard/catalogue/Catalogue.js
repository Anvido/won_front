import { useEffect, useState, useRef } from "react"
import { auth_get } from "../../../js/request"
// components
import InfiniteScroll from "../../utils/InfiniteScroll"
import CatalogueNavBar from "./CatalogueNavBar"
import ProductCard from "./ProductCard"

const Catalogue = () => {

  const views = { top10: 1, apps: 2, bonus: 3, packages: 4, recharge: 5 }
  const [view, setView] = useState(views.top10)
  const [req, setReq] = useState({ items: [], hasNextPage: true })
  const pagination = useRef({ per_page: 10, page: 1 })

  const categories = useRef({
    2: 11,
    3: 6,
    4: 2,
    5: 1
  })

  // useEffect(() => {
  //   console.log(pagination.current)
  //   console.log(`items: ${req.items.length}`)
  // })

  const searchRequest = setLoading => {
    const { per_page, page } = pagination.current
    const url = view === 1  ? 
      'top' : 
      `search?page=${ page }&per_page=${ per_page }&category=${categories.current[view]}`
    setLoading(true)
    // to check
    // console.log(url)
    auth_get(`/products/${ url }`).then(res => {
      setReq({ 
        items: [ ...req.items, ...res.data.data], 
        hasNextPage: res.data.hasOwnProperty('meta') ?  !!res.data.meta.next_page : false })
      pagination.current.page = pagination.current.page + 1
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    pagination.current.page = 1
    setReq({ items: [], hasNextPage: true })
  }, [view])
  

  return (
    <>
      <CatalogueNavBar view={ view } setView={ setView } /> 
      <InfiniteScroll 
        containerClass='product-grid' 
        hasNextPage={ req.hasNextPage }
        searchRequest={ searchRequest }>
        { req.items.map(( item, key ) => (
          <ProductCard key={ key } product={ item } />
        ))} 
      </InfiniteScroll> 
    </>
  )
}

export default Catalogue