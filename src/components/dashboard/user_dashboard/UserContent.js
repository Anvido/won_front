import { Switch, Route, Redirect } from "react-router-dom"
import Catalogue from "../catalogue/Catalogue"
import Logout from "../Logout"

const UserContent = () => {
  return (
    <>
      <Switch>
        <Route exact path='/dashboard'>
          <Redirect to='/dashboard/catalogo' />
        </Route>
        <Route exact path='/dashboard/oficina'>
          <div>oficina</div>
        </Route>
        <Route exact path='/dashboard/catalogo'>
          <Catalogue />
        </Route>
        <Route exact path='/dashboard/bonos'>
          <div>bonos</div>
        </Route>
        <Route exact path='/dashboard/red'>
          <div>red</div>
        </Route>
        <Route exact path='/dashboard/invitar'>
          <div>invitar</div>
        </Route>
        <Route exact path='/dashboard/wonedero'>
          <div>wonedero</div>
        </Route>
        <Route exact path='/dashboard/notificaciones'>
          <div>notificaciones</div>
        </Route>
        <Route exact path='/dashboard/recursos'>
          <div>recursos</div>
        </Route>
        <Route exact path='/dashboard/legal'>
          <div>legal</div>
        </Route>
        <Route exact path='/dashboard/cuentanos'>
          <div>cuentanos</div>
        </Route>
        <Route exact path='/dashboard/historial'>
          <div>historial</div>
        </Route>
        <Route exact path='/dashboard/cerrar'>
          <Logout />
        </Route>
        <Redirect to='/404'/>  
      </Switch>  
    </>
  )
}

export default UserContent