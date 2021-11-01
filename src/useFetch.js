import { useState,useEffect } from "react";
const useFetch=(url)=>
{
    const [data, setData] = useState([
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
           ]);
           const [isPending,setIsPending]=useState(true);
           const [error,setError]=useState([]);
    useEffect(()=>{
        const abortCont= new AbortController();
        setTimeout(()=>{fetch(url, {signal:abortCont.signal})
        .then(res=>{
            if(!res.ok)
            {
                throw Error('Could not fetch the data for that resource.');
            }
          return res.json()})
        .then(data=>{  
          setData(data) 
          setIsPending(false);
          setError(null);
      })   
      .catch(err=>
          {
              if(err.name==="AbortError")
              {
                  console.log("fetch aborted!");
              }
              else{
                    setIsPending(false);
                    setError(err.message);
                    setData(null);
              }
          })
      },1000)
      return ()=>abortCont.abort();
  },[url]);
  return {data,isPending,error,setData}
}
export default useFetch;