const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='center-cropp'>
        <img src={ product.image_url } alt={ product.name } />
      </div>
      <label className='subtitle truncate' title={ product.name } >{ product.name }</label>
      <span className='subtitle'>$ { product.value }</span>
      <span className='card-footer'>Obtienes x puntos</span>
    </div>
  )
}

export default ProductCard