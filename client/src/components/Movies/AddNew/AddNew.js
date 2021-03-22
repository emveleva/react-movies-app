import style from './AddNew.module.css'

function AddNew() {
    return (
        <main className='form'>
            <h1>Add New Movie</h1>
            <div className={style.addnew}>
            <form action="/#register" method="POST">
                <div>
                    <p>Title:</p>
                    <input type="title" placeholder="Title" name="title" />
                </div>
                <div>
                    <p>Year:</p>
                    <input type="year" placeholder="2021" name="year" />
                </div>
                <div>
                    <p>Description:</p>
                    <input type="description" placeholder="Once upon a time..." name="description" />
                </div>
                <div>
                    <p>Actors:</p>
                    <input type="actors" placeholder="Brad Pitt" name="actors" />
                </div>
                <div>
                    <p>Poster URL:</p>
                    <input type="posterURL" placeholder="https://" name="posterURL" />
                </div>
                <div>
                    <p>Genre:</p>
                    <input type="genre" placeholder="Action" name="genre" />
                </div>
                <div>
                    <p class="message"></p>
                    <button>Add</button>
                </div>
            </form>
            </div>
        </main>
    );
    }
    
    export default AddNew

