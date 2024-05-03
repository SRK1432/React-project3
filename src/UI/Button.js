import React from "react";
const Button=(props)=>{
    return(
        <React.Fragment> 
            <button 
            className="add-user-button"
           >
                {props.children}
                </button>
         </React.Fragment>   /*...or<></> or <div></div>,but fragment allow us to write cleaner code to end up wih less unnecessary html components */
    )

}
export default Button;