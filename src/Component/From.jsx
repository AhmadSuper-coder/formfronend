import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

var fData={
    name:"",
    dob:"",
    email:"",
    phone:"",
}

function From() {
    const [formData,setFormData]=useState(fData);
    const {name,dob,email,phone}=useState(fData);
    const Navigate=useNavigate();
    const url="https://formbackend-rpyp.onrender.com"

    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    const submitForm=async (event)=>{
        try{
            event.preventDefault();
            const today = new Date();
            const enteredDate = new Date(formData.dob);
            const ageDiff = today.getTime() - enteredDate.getTime();
            const ageDate = new Date(ageDiff);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            
            // check if date is empty or not 
            if (!formData.dob){
                alert("Please fill the DOB ");
                return;
            }
            
            // check user is eligble or not 
            if (age<=18){
                alert("Sorry your are not eligible")
                return;
                }

            // Check if the email is valid
            if (!formData.email || !formData.email.includes('@') || !formData.email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            const response=await axios.post(`${url}/user`,formData);
            
            console.log(response);
            if (response.data==="created"){
                setFormData(fData);
                Navigate("/allform")
                console.log("submited")
            }else{
                alert("Please enter a valid mobile number ");
                console.log("Not subbmited");
            }
            

        }
        catch(e){
            console.log("error")
        }
  
    }

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 m-auto text-center mt-3 mb-4 p-2">
                    <h1>FORM APPLICATION</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-6 col-8 m-auto">
                    <form onSubmit={submitForm} noValidate>
                        <div className="mb-3">
                        <label className="form-label">Enter Your Name </label>
                        <input type="text" name="name" value={formData.name} className="form-control" placeholder="Name" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Enter Your Age </label>
                        <input type="date" name="dob" value={formData.dob} className="form-control" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Enter Your Email </label>
                        <input type="email" name="email" value={formData.email} className="form-control" placeholder="Email" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Enter Your Phone </label>
                        <input type="text" name="phone" value={formData.phone}  className="form-control" id="formGroupExampleInput2" placeholder="Phone" onChange={handleChange} />
                        </div>


                        <input type="submit" className='btn btn-success btn-sm' value="submit" />

                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default From