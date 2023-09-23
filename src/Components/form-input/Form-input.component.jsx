import React from "react";
import './Form-input.style.scss';

const Forminput =({handlechange, label, ...otherprops}) =>{
    return(
        <div className="group">
            <input className="form-input" onChange={handlechange} {...otherprops}/>
            {
                label ? (<lable className={`${otherprops.value.length ? 'shrink' :''} form-input-label`} >
                    {label}
                </lable>) : null
            }
        </div>
    );
}

export default Forminput;