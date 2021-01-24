import store from '../js/store'
import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

const RedirectRoute = ({ children, path, redirect, protect, exact }) => {

  const [user, setUser] = useState(store.getState().user)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setUser(store.getState().user)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  var component = null
  // protect true redirect whitout user, false redirect with user
  if (protect) {
    if (user) component = children
    else component = <Redirect to={ redirect }/>
  } else {
    if (user) component = <Redirect to={ redirect }/> 
    else component = children
  }
  return (
    <Route exact={ exact } path={ path }>
      { component }
    </Route>
  )
}

export default RedirectRoute