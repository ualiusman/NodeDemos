import Head from "next/head";
import { useState,useEffect } from "react"; 
const [data, setData] = useState("")

function IndexPage(){


    let data:any = "none";
    const fetchTodos = async () => {
        debugger
        const response = await fetch("/api")
         data = await response.json();
         setData(data);
      };

      useEffect(() => {
        fetchTodos();
    }, []);

    return <div>{data}</div>
}

export default IndexPage