import { Link } from "react-router-dom"

const CatalogueNavBar = ({ view, setView }) => {

  const sections = { 1: 'top10', 2: 'apps', 3: 'bonus', 4: 'packages', 5: 'recharge'  }
  const active = { top10: false, apps: false, bonus: false, packages: false, recharge: false}
  active[sections[view]] = true

  return (
    <div className='nav'>
      <ul>
        <li onClick={() => setView(1)}>
          <Link className={`nav-link ${ active.top10  ? 'active' : ''}` } to='#!'>
            TOP 10
          </Link>
        </li>
        <li onClick={() => setView(2)}>
          <Link className={`nav-link ${ active.apps  ? 'active' : ''}` } to='#!'>
            APPS
          </Link>
        </li>
        <li onClick={() => setView(3)}>
          <Link className={`nav-link ${ active.bonus  ? 'active' : ''}` } to='#!'>
            BONOS
          </Link>
        </li>
        <li onClick={() => setView(4)}>
          <Link className={`nav-link ${ active.packages  ? 'active' : ''}` } to='#!'>
            PAQUETES
          </Link>
        </li>
        <li onClick={() => setView(5)}>
          <Link className={`nav-link ${ active.recharge  ? 'active' : ''}` } to='#!'>
            RECARGAS
          </Link>
        </li>
        <li className='nav-right d-sm-none'>
          <div>
            <Link className='won-wallet-button wonedero' to='#!'>$ 100.000</Link>
            <div className='search-field'>
              <input id='search' type='search' />
              <span className='icon-search'></span>
            </div>
          </div>
        </li>
      </ul> 
    </div>
  )
}

export default CatalogueNavBar