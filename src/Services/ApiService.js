import axios from 'axios';

export const backendURL = 'http://127.0.0.1:8000' 

export function getPatient() {
    return axios.get(`${backendURL}/patient/`).then((res) => {
        return res.data
    })
}

export function addPatient(patient) {
    return axios.post(`${backendURL}/patient/`, {
        patient_id: null, 
        first_name: patient.first_name.value, 
        last_name: patient.last_name.value, 
        blood: patient.blood.value, 
    }).then((res) => {
        return res.data
    })
}