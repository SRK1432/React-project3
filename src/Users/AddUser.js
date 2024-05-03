// import React, { useState } from "react";
// import UserList from "./UserList";
// import "./AddUser.css";
// const AddUser=()=>{
//     const [username, setUsername] = useState([]);
//     const [age, setAge] = useState([])
//     const [clgname, setClgname] = useState([])
//     const [user,setUser]=useState([])
    
//     const userHandler=(event)=>{
//         setUsername(event.target.value);          
//     }
//     const ageHandler=(event)=>{
//         setAge(event.target.value);
//     }
//     const clgHandler=(event)=>{
//         setClgname(event.target.value);
        
//     }
//     const newUser={
//         age,
//         username,
//         clgname
//     }
//     const clickHandler=(event)=>{
//         event.preventDefault();
//         if(username === 0 || age === 0){
//             return;
//         }
//         if(age<1)
//         {
//             return;
//         }
//         console.log(username,age);
//         setUsername('');
//         setAge('');
//         setClgname('');
//         setUser([...user,newUser])
//     }
//     return(
//         <div className="Parent">
//         <form className="user-age" onSubmit={clickHandler}>
//             <div>
//                 <label htmlFor="username">Username</label>
//             </div>
//             <div className="input">
//                 <input type="text" value={username} onChange={userHandler}/>
//             </div>
//             <div>
//                 <label htmlFor="age">Age(Years)</label>
//             </div>
//             <div>
//                 <input type="number" value={age} onChange={ageHandler}/>
//             </div>
//             <div>
//                 <label htmlFor="clgname">College Name</label>
//             </div>
//             <div>
//                 <input type="text" value={clgname} onChange={clgHandler}/>
//             </div>
//             <div>
//                 <button type="submit">Add User</button>
//             </div>
//             <UserList users={user}/>
//             </form>
//         </div>
//     )
// }
// export default AddUser;

import React,{useState} from "react";
import UserList from "./UserList";
import "./AddUser.css"
import ErrorModel from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUser=()=>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const textHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const numberHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const formHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername==0 || enteredAge==0){
           setError({
            title:"Invalid Username and Age!!",
            message:"Plz enter valid Username and Age"
           })
            return;
        }
        if(enteredAge < 1){
            setError({
                title:"Invalid Age!!",
                message:"Plz enter valid Age (>0)"
               })
            return;
        }
        const newUser={
            enteredUsername,enteredAge
        }
        // setUser([...user, newUser]);//....always use[]bracket for spread(since we useconst [user, setUser] = useState([]);)
       setUser((prevState)=>{
        return [...prevState,newUser]
       })
       console.log( enteredUsername,enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }
    const errorHandler=()=>{
        setError(null);
    }
    
    return(
        <div className="add-user-container" >
        <div className="add-user">
        <form className="add-user-form" onSubmit={formHandler}>
            <div className="form-group" >
                <label htmlFor="username">Username</label>
                <div>
                    <input type="text" value={enteredUsername} onChange={textHandler}/>
                </div>
            </div>
            <div>
                <label htmlFor="age">Age(Years)</label>
                <div>
                    <input type="number" value={enteredAge} onChange={numberHandler}/>
                </div>
            </div>
            <div>
                <Button type="submit" >Add User</Button>
            </div>
        </form>
        <UserList users={user}/>
        </div>
        {error && (<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        </div>
    )
}
export default AddUser;