import axios from 'axios';


export function addContact(form) {
    console.log(form)
    return axios.post('http://localhost:3000/api/contact', form)
}