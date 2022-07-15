const axios = require('axios')

 export async function getUsers() {
    const res = await axios.get("http://localhost:8000/users");
    return res.data;
  }

 export async function getSingleUser(userId) {
    let res = await axios.get("http://localhost:8000/users/" + userId);
    return res.data;
  }
