import React from 'react'
import './index.css';

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + 3 + ',' + 1 + 'fr)',
  };
  return loading ? (
    <div id="load" align="center">
      <img src="http://pa1.narvii.com/7491/d8b2fb62d9bc8d6c042da4fd6ad5be92a8d97825r1-200-200_00.gif" alt="Loading.." className="loader" />
    </div>
  ) :
    (
      <div id="load" style={mainstyle}>

        {users.map(user =>
          <div className="profile" key={user.id}>
            {
              console.log(user)
            }

            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="Name">{user.first_name} {user.last_name}</h1>
            <p className="Email">{user.email}</p>
           
          </div>
        )
        }
      </div>
    )
}

export default Users;