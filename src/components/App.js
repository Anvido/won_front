import { Switch, Route, Redirect } from "react-router-dom"
import RedirectRoute from './RedirectRoute'
import SingIn from './sign/SignIn' 
import Dashboard from './dashboard/Dashboard'

const App = () => {
  return (
    <Switch>
      <Route exact path='/404'>
        <div>404 Not Found</div>
      </Route>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <RedirectRoute exact path='/login' redirect='/dashboard/catalogo'>
        <SingIn />  
      </RedirectRoute>
      <RedirectRoute path='/dashboard' redirect='/login' protect>
        <Dashboard />  
      </RedirectRoute>
      <Redirect to='/404' />
    </Switch> 
  )
}

export default App