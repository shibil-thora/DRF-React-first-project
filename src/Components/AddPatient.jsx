import React, { useState } from 'react'
import { addPatient } from '../Services/ApiService'

function AddPatient(props) {
     
  return (
   <>
   <h3>Add FORM: </h3>
   <form onSubmit={(e) => {
    addPatient(e.target).then((res)=>{
        props.setPatients(res);
    })
   }}>

    First Name : <input type='text' name='first_name' />
    Last Name : <input type='text' name='last_name' />
    Blood Group : <input type='text' name='blood' />
    <button type='submit'>Add</button>
   </form>
   </>
  )
}

export default AddPatient