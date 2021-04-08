const userToWatch = (userId) => {
return fetch(`http://localhost:4003/dashboard/${userId}`)
.then((res) => res.json())
}
const userWatched = (userId) => {
return fetch(`http://localhost:4003/dashboard/${userId}`)
.then((res) => res.json())
}

export { userToWatch, userWatched };
    