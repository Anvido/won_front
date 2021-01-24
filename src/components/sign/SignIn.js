import $ from 'jquery'
import { useState } from 'react'
import store from '../../js/store'
import { post } from '../../js/request'
import { Link } from 'react-router-dom'
import { login } from '../../js/actions'
// assets
import Won from '../../assets/img/won.svg'
import Red_won from '../../assets/img/red_won.svg'

const SignIn = () => {

  const [alert, setAlert] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      authentication: {
        type: 'User',
        email: $('#email').val(),
        password: $('#password').val()
      }
    }

    post('/login', data).then(res => {
      const { token, id, type } = res.data.data
      store.dispatch(login(token, { id, type }))
    }).catch(err => {
      if (err.response.status === 401) setAlert('Contraseña incorrecta')
      console.log(err.response)
    })
  }

  return (
    <div className='signin'>
      <img className='won d-sm-none' src={ Won } alt='won_logo'/>
      <img className='red_won d-md-none' src={ Red_won } alt='won_logo'/>
      <form className='signin-form' onSubmit={ e => handleSubmit(e) }>
        <span className='title'>Iniciar Sesión</span>
        <input className='signin-input' id='email' type='email' placeholder='Correo electrónico' />
        <input className='signin-input' id='password' type='password' placeholder='Contraseña' /> 
        <Link to='#!'>Olvidé la contraseña</Link>
        <button className='signin-button' type='submit'>INGRESAR</button>
        <span className='alert'>{ alert }</span>
        <hr />
        <Link className='signup-button' to='#!'>Crear cuenta</Link>    
      </form>
    </div>
  )
}

export default SignIn