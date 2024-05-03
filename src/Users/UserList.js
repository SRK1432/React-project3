// import React from "react";
// import "./UserList.css"
// const UserList=({users})=>{
//     console.log(users)
//     return(
//         <>
//         <ul>
//             {users.map((e)=>(
//                 <li>{e.username} ({e.age }Years Old) {e.clgname}</li> //or  <li>{e.username} {e.age} Years Old</li>
//             ))}
//         </ul>
//         </>
//     )

// }
// export default UserList;

import React from "react";
import "./UserList.css"
const UserList= (props) =>{
    return(
        <div className="user-list-container" >
        <div className="user-list" >
        <ul className="user-list-ul"> 
            {props.users.map((user,index)=>(
                <li key={index} >{user.enteredUsername} ({user.enteredAge}years old)</li>
            ))}
        </ul>
        </div>
        </div>
    )

}
export default UserList;