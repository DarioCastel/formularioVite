import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
const [data, setData] = useState(null)
const [err, setErr] = useState(null)
const [loading, setLoding] = useState(null)


useEffect(()=>{
    const abortController = new abortController();
    const signal = abortController.signal;

    const fetchData= async ()=>{
        setLoding(true);
        try {
            const res = await fetch(url);
            if(!res.ok){
                let err= new Error("error en la petición fetch")
                err.status= err.status || "00";
                err.statusText= err.status || "se te rompio la wea";
                throw err;
            }
            const json = await res.json()

            if(!signal.abort){
                setData(json)
                setErr(null)
            }
        } catch (error) {
            if(!signal.abort){
                setData(null)
                setErr(err)
            }
        } finally {
            if(!signal.abort){
                setLoding(false)
                setErr(err)

        }
    }}
    fetchData();

    return()=>abortController.abort();
},[url])
  return ({data,err,loading}
  )
}
