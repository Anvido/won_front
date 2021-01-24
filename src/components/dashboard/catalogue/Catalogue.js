import { useEffect, useState } from "react"
import { auth_get } from "../../../js/request"
import CatalogueNavBar from "./CatalogueNavBar"
import ProductCard from "./ProductCard"

const Catalogue = () => {

  const views = { top10: 1, apps: 2, bonus: 3, packages: 4, recharge: 5 }
  const [view, setView] = useState(views.top10)
  const [req, setReq] = useState({ items: [], loaded: false })
  
  useEffect(() => {
    const urls = {
      1: 'top',
      2: 'search?page=1&per_page=10&category=11',
      3: 'search?page=1&per_page=20&category=6',
      4: 'search?page=1&per_page=10&category=2',
      5: 'search?page=1&per_page=10&category=1'
    }
    setReq({ items: [], loaded: false })
    auth_get(`/products/${ urls[view] }`).then(res => {
      // console.log(res.data.data)
      setReq({ items: res.data.data, loaded: true })
    }).catch(err => {
      console.log(err.response)
    })
  }, [view])

  return (
    <>
      <CatalogueNavBar view={ view } setView={ setView } />
      { req.loaded ? 
        <div className='product-grid'>
          { req.items.map(( item, key ) => (
            <ProductCard key={ key } product={ item } />
          )) } 
        </div>
        : <div>Loading...</div>
      }
    </>
    
  )
}

export default Catalogue