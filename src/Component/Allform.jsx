import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../message/Loader';

function Allform() {
  const [userData,setUserData]=useState([]);
  const [loading, setLoading] = useState();
  // const [error, setError] = useState();
  const url="https://formbackend-rpyp.onrender.com"

  useEffect(()=>{
    async function fetchData(){
      try{
        setLoading(true);
        const userD= await axios.get(`${url}/alldata`);
        const response=userD.data
        setUserData(response);
        console.log(userData);
        console.log("Hellow");
        setLoading(false);
      }catch(e){

      }

    }
    fetchData();
  
  },[]);


  
  return (
    <>
      <div className="container-fluid">
        <div className="row m-auto">
          <div className="col-md-12 m-auto text-center mt-3 mb-4 p-2">
            <h1>SUBMITTED FORM</h1>
          </div>
        </div>


        <div className="row">
          {
            loading?(<Loader />):(
              <div className="col-md-10 text-center m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">UID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">DOB(YYYY,MM,DD)</th>
                  <th scope="col">EMAIL</th>
                </tr>
              </thead>
              <tbody>

                 {
                  userData.map((value,index)=>(
                    <tr key={value._id}>
                    <th scope="row">{index+1}</th>
                    <td>{value.name}</td>
                    <td>{value.dob.substring(0,10)}</td>
                    <td>{value.email}</td>
                  </tr>
                  ))
                 }

              </tbody>
            </table>
          </div>
            )
          }
        </div>


      </div>
    </>
  )
}

export default Allform