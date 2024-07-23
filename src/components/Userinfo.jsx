import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function Userinfo({name, username, email, phone, company,}) {
  return (
    
    
    
    <div className='User'>
      <div className='iconwrapper'>
        <FontAwesomeIcon icon={faUser}
        style={{
          fontSize: '24px',
        
        }}/>
      <h2>Name: {name}</h2>
      <small>{email}</small>
      <div>User<i>{username}</i></div>
      <p>Phone: {phone}</p>
      <p>Works at: {company.name} </p>
    </div>
    </div>
      
    


  )
}

export default Userinfo