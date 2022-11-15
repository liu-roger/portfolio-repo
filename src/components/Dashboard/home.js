import { auth } from "../../firebase"

const Home = () => {
    return (
        <div className="dashboard">
            <form>
                <p>
                    <input type='text' placeholder='Name'/>
                </p>

                <p>
                    <textarea placeholder='Description'/>
                </p>

                <p>
                    <input type='text' placeholder='URL'/>
                </p>

                <p>
                    <input type='file' placeholder='Image'/>
                </p>

                <button type="submit"> Submit</button>
                <button onClick={()=>auth.signOut()}> Sign Out</button>
            </form>
        </div>
    )
}
export default Home