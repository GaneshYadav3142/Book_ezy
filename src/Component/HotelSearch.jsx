"use client"
import { useEffect, useState } from "react";

// const  Amadeus = require("amadeus");

// export async function getServerSideProps() {
//   try {
    
//     const res = await fetch('http://localhost:3000/api/HotelSearch')
//     console.log(res)
//   const repo = res
//   // Pass data to the page via props
//   return { props: { repo } }
   
//   } catch (error) {
//     console.error(error);
//     return { props: { repo: null } }
//   }
// }

const HotelSearch = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const fetchApi= async ()=>{
    try {
      const res= await fetch(`http://localhost:3000/api/HotelSearch`)
      const resp1 =await res.json()
      console.log(resp1)
      setData(resp1)
      setLoading(false)
    } catch (error) {
        setData(null)
        setLoading(true)
    }
  }
 
  useEffect(() => {
    // fetch('http://localhost:3000/api/HotelSearch')
    //   .then((res) =>{
    //     console.log(res.body)
        
        
    //      }).then((res)=>{
    //       console.log(res,"res")
    //       setData(res)
    //       setLoading(false)
    //      })
      fetchApi()
  }, [])
 
  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>
 
  return (
    <div>
      {
        data?.map((el)=>{
          return (
            <div>
              <p>{el?.name}</p>
              </div>
          )
        })
      }
      
    </div>)
 
}

export default HotelSearch




