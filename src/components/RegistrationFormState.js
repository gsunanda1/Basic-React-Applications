import { useState } from "react";

const RegistrationFormState=()=>{
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        phone:'',
        batch:''
    });

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
        
    // const handleUserNameChange=(e)=>{
    //     setFormData({...formData,username:e.target.value});
    // }
    // const handlePasswordChange=(e)=>{
    //     setFormData({...formData,password:e.target.value});
    // }
    // const handlePhoneChange=(e)=>{
    //     setFormData({...formData,phone:e.target.value});
    // }
    // const handleBatchChange=(e)=>{
    //     setFormData({...formData,batch:e.target.value});
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Registration form</h3>
            <div>
                <label>UserName</label>
                <input type="text" placeholder="Enter UserName" name="username" onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="password" onChange={handleChange}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="number" placeholder="Enter Phone Number" name="phone" onChange={handleChange}/>
            </div>
            <div>
                <label>Select Batch</label>
                <select name="batch" onChange={handleChange}>
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
export default RegistrationFormState;