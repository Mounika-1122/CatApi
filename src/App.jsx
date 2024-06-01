import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState([]);
  const [error,setError]=useState("");

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10",{
          headers:{
            'x-api-key':"live_lPHRycO40GcW2T87peJjxXd2F4THO7YLysIZYmBL8gGOHISo7Abmj3HgxlvTR35J"
          }
        });
        console.log(response);
        setData(response.data)
      }
      catch(e){
        console.log(e);
        setError("Error Occured while fetching the data")
      }
    }
    fetchData()
  },[])

  return (
    <div className='py-12 px-5 flex flex-col min-h-screen bg-[#F3F4F1]'>
      <div className='text-center'>
       <p className='text-4xl font-semibold text-[#0C0C0C] '>Admire the <span className='text-[#8039C5]' >beauty of cats</span></p>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 flex-wrap mt-24'>
         { error==="" &&
          data.map((item,index)=>(
            <div key={index} >
              <img src={item.url} className='rounded-md' />
            </div>
          ))
         }
      </div>
      {
          error!=="" &&
          <p className='mx-auto px-4 text-red-600 text-lg'>{error}, Refresh the page!</p>

         }
    </div>
  )
}

export default App
