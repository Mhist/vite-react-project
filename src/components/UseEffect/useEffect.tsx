import {useEffect, useState, type ChangeEvent} from "react";
import { Input } from "antd";
const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    useEffect(() => {
        console.log("useEffect");
        return () => {
            console.log("cleanup");
        }
    },[count,name]);
    return (
        <div>
            <h1>useEffect</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>count</button>
            <Input value={name} onChange={(e)=>{handleNameChange(e)}}></Input>
        </div>
    );
};
export default UseEffect;