import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

const InfiniteScroll = ({ children, hasNextPage, searchRequest, containerClass }) => {  

  const [loading, setLoading] = useState(false)

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => searchRequest(setLoading)
  })

  return (
    <div className={ containerClass }  ref={infiniteRef}>
      { children }
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default InfiniteScroll