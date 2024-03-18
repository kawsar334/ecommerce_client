import { useState } from "react";
import axios from "axios";






const Test = () => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [products, setProducts] = useState([]);


    const a= 5;
    const b= 5;

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.get("/product/")
            setProducts(res.data.products)

        }catch(err){
            console.log(err)
            setError(true)
        }
        
    }

    return (
        <div>



            <ul>
                <li>home</li>
                <li>contact</li>
                <li>register</li>
            </ul>
            <p data-testid="testId">kawsar firoz</p>
            <span title="sum">{a+b}</span>
            <input type="text" name="username"  placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
            <input type="passowrd" name="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <form role="form">
                kdajlksdjf;as
                <button disabled>login</button>
                <button role="buttonElement" onClick={handleSubmit}>login</button>
                <span data-testid="error" style={{ color: "red", visibility: error ? "visible" : "hidden" }}>something went wrong</span>

            </form>
            {products && products.map((item, i)=>(
                <h1>{i+1}</h1>
            ))}

        </div>
    )
}


export default Test;