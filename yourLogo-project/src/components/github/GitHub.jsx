import React,{useEffect ,useState} from 'react'

const GitHub = () => {
    const [data, setData] =useState([])
    useEffect(() => {
      
   fetch("https://api.github.com/users/sneha-tripathi202")

   .then(response => response.json())
   .then(data=>{
    console.log(data);
    
    setData(data)
   })
      
    
     
     
    }, [])
    
  return (
    <div >
<div className='flex gap-3 text-2xl bg-gray-700 m-7 rounded-b-xl text-white '>
      <img  classname="m-3" src={data.avatar_url} alt='Git picture' width={300}/>
      github userName: {data.name}<br/>
     Bio : {data.bio}<br/>


       
    </div>    </div>
  )
}

export default GitHub
