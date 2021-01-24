const login = (token, user) => {
  localStorage.setItem('token', token)
  return { type: 'LOG_IN', user }
}

const logout = () => {
  localStorage.removeItem('token')
  return { type: 'LOG_OUT' }
}

export { login, logout } 