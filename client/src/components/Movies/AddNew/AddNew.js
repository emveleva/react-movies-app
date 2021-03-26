import style from './AddNew.module.css'

function AddNew() {
    return (
        <main className='form addnew'>
            <h1>Add New Movie</h1>
            <div className={style.addnew}>
            <form action="/#register" method="POST">
                <div className={style.leftSide}>
                    <p>Title:</p>
                    <input type="title" placeholder="Title" name="title" required />
                    <p>Year:</p>
                    <input type="year" placeholder="2021" name="year" required />
                    <p>Description:</p>
                    <input type="description" placeholder="Once upon a time..." name="description" required/>
                </div>
                <div className={style.rightSide}>
                    <p>Actors:</p>
                    <input type="actors" placeholder="Brad Pitt" name="actors" required />

                    <p>Poster URL:</p>
                    <input type="posterURL" placeholder="https://" name="posterURL" required />
            
                    <p>Genre:</p>
                    {/* <input type="genre" placeholder="Action" name="genre" /> */}
                    <select name="genre" id="genre" form="carform" placeholder="Select genre..." required>
                        <option value="Select genre..." selected disabled hidden>Select genre...</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="TV-Series">TV-Series</option>
                    </select>
                </div>
                <div className={style.center}>
                    <p class="message"></p>
                    <button>Add</button>
                </div>
            </form>
            </div>
        </main>
    );
    }
    
    export default AddNew

