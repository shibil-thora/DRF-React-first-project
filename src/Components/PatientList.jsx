import React, { useEffect, useState } from 'react'
import {getPatient, addPatient} from '../Services/ApiService.js'
import AddPatient from './AddPatient.jsx'

function PatientList() {
  const [patients, setPatients] = useState([])
  const [showFormAdd, setShowFormAdd] = useState(false)

  useEffect(() => {
    getPatient().then((res) => setPatients(res))
  }, [])

  return (
    <>
    <table border={1} cellPadding={'10px'}> 
    <tbody>
      <tr>
        <th>first_name</th>
        <th>last_name</th>
        <th>blood group</th>
        <th>Action</th>

      </tr>
      {patients.map((patient) => 
      <tr key={patient.patient_id}>
      <td>{patient.first_name}</td>
      <td>{patient.last_name}</td>
      <td>{patient.blood}</td>
      <td><button>Edit</button> &nbsp;
          <button>Delete</button>
      </td>
      </tr>
      )}
      </tbody>
    </table>

     <button onClick={() => setShowFormAdd(!showFormAdd)}>{!showFormAdd ? 'Add new +' : 'close X'} </button>
     {showFormAdd && <AddPatient setPatients={setPatients}/>}
    </>
  )
}

export default PatientList