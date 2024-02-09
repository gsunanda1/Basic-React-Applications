import { useState } from "react";

const RegistrationForm=()=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [batch,setBatch]=useState('');
    const handleUserNameChange=(e)=>{
        setUserName(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handlePhoneChange=(e)=>{
        setPhone(e.target.value);
    }
    const handleBatchChange=(e)=>{
        setBatch(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({
            userName,password,phone,batch        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Registration form</h3>
            <div>
                <label>UserName</label>
                <input type="text" placeholder="Enter UserName" onChange={handleUserNameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" onChange={handlePasswordChange}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="number" placeholder="Enter Phone Number" onChange={handlePhoneChange}/>
            </div>
            <div>
                <label>Select Batch</label>
                <select onChange={handleBatchChange}>
                    <option>DSA</option>
                    <option>FE</option>
                    <option>LLD</option>
                    <option>BE</option>
                </select>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm;