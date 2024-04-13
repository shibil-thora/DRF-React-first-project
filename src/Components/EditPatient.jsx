import React from 'react'

function EditPatient() {
  return (
    <>
   <h3>Edit FORM: </h3>
   <form >

    First Name : <input type='text' name='first_name' />
    Last Name : <input type='text' name='last_name' />
    Blood Group : <input type='text' name='blood' />
    <button type='submit'>Add</button>
   </form>
   </>
  )
}

export default EditPatient