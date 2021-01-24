import { useState } from "react"
import UserContent from "./user_dashboard/UserContent"
import UserSidebar from './user_dashboard/UserSidebar'

const Dashboard = () => {

  const [showSide, setShowSide] = useState(false)

  return (
    <>
      <div className='mobile-nav d-md-none'>
        <span onClick={() => setShowSide(!showSide)} className='icon-menu'></span> 
      </div>
      { showSide && <div className={`overlay d-md-none`} /> }
      <div className={ `sidebar d-sm-none ${ showSide ? 'right-sidebar': ''}` }> 
        <UserSidebar setShowSide={ setShowSide } />
      </div>
      <div className='content'> 
        <UserContent />
      </div>
    </>
  )
}

export default Dashboard