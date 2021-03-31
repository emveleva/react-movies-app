const registerUser = (username, password, rePassword) => {
    return fetch('http://localhost:4003/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, rePassword})
    }).then(res => res.json())
}
const loginUser = (username, password) => {
    return fetch(`http://localhost:4003/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
}).then(res => res.json())
}
export  {registerUser, loginUser}