import 'firebase/firestore';
import app from "../config/config";

const url = ""

const DB = app.firestore();

export const getAll = async (genre = '') => {
    const moviesDB = DB.collection('movies');
    const data = await moviesDB.get();

    }



export const getOne = (movieID) => {
    return fetch(`${url}/${movieID}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}


// const fetchBlogs=async()=>{
//     const response=db.collection('Blogs');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
// }