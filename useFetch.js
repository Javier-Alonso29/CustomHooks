import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState({
        data: null,
        loading: true,
        error: null
    })

    const isMounted = useRef(true)

    useEffect(() => {
      
        //Para cuando se desmonte
        return () =>{
            isMounted.current = false
        }

    }, [])
    

    useEffect(() => {

        setData({data: null, loading: true, error: null})

        fetch(url).then(resp => resp.json()).then(data =>{
            
            if(isMounted.current){
                setData({
                    loading: false,
                    error: null,
                    data
                })
            }else{
                console.log("Set state no se llamo");
            }
            
        })
    }, [url])
    
    return data

}
