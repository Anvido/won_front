import Won from '../../../assets/img/won.svg'
import { Link, useRouteMatch } from 'react-router-dom'
import { logout } from '../../../js/actions'
import store from '../../../js/store'

const UserSidebar = ({ setShowSide }) => {

  const { params: { section } } = useRouteMatch('/dashboard/:section')

  const links = {
    oficina: { path: '/dashboard/oficina', text: 'Oficina', active: false },
    catalogo: { path: '/dashboard/catalogo', text: 'Catálogo', active: false },
    bonos: { path: '/dashboard/bonos', text: 'Bonos', active: false },
    red: { path: '/dashboard/red', text: 'Red', active: false },
    invitar: { path: '/dashboard/invitar', text: 'Invitar', active: false },
    wonedero: { path: '/dashboard/wonedero', text: 'Wonedero', active: false },
    notificaciones: { path: '/dashboard/notificaciones', text: 'Notificaciones', active: false },
    recursos: { path: '/dashboard/recursos', text: 'Recursos', active: false },
    legal: { path: '/dashboard/legal', text: 'Legal', active: false },
    cuentanos: { path: '/dashboard/cuentanos', text: 'Cuéntanos', active: false },
    historial: { path: '/dashboard/historial', text: 'Historial', active: false }
  }

  links[section].active = true

  return (
    <>
      <img className='won_logo d-sm-none' src={ Won } alt='won_logo'/>
      { Object.keys(links).map((s, index) => (
          <Link 
            key={ index } 
            to={ links[s].path } 
            onClick={ () => setShowSide(false) }
            className={`icon ${ s } ${ links[s].active ? 'active' : '' }`} >
            { links[s].text }
          </Link>
      ))}
      <Link className={`icon logout`} to='#!' onClick={ () => store.dispatch(logout()) }>
        Cerrar sesión
      </Link>
    </>
  )
}

export default UserSidebar