import { useEffect } from 'react'
import store from '../../js/store'
import { logout } from '../../js/actions'
// assets
import logout_img from '../../assets/img/logout.png'
import logout_mobile from '../../assets/img/logout_mobile.svg'

const Logout = () => {

  useEffect(() => {
    if (window.innerWidth > 767) {
      setTimeout(() => {
        store.dispatch(logout())
      }, 2000)
    }
  }, [])
  
  return (
    <div className='v-center'>
      <div className='logout d-sm-none'>
        <img src={ logout_img } alt='logout_img' />
        <p className='title'>Sesión cerrada</p>
        <p className='subtitle'>Te extrañamos vuelve pronto</p>
      </div>
      <div className='logout-mobile d-md-none'>
        <img src={ logout_mobile } alt='logout_img' />
        <p className='title'>¿Estas seguro de cerrar tu sesión actual?</p>
        <button onClick={() => store.dispatch(logout()) } className='signin-button'>
          si, cerrar sesión
        </button>
      </div>
    </div>

  )
}

export default Logout