import React, { useContext, useEffect, useState } from 'react'
import '../medicien/Medicien.css'
import List from '../medic-list/ListIteam.jsx'
import { StoreContext } from '../context/context.jsx'
import axios from "axios"

const Medicien = ({category}) => {
        
  const { url } = useContext(StoreContext)

  const [list,setList] = useState([])

  const fetchData = async() =>{
    const responce = await axios.get(`${url}/api/medicen/list`)
    
    if(responce.data.success){
      setList(responce.data.Date)
    }
    else{
      console.log('error occured')
    }
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div className="medicien" id='medicien'>
      <div className="head">
        <h3>Medicine's</h3>
      </div>
      <div className="comp">
        {list.map((iteam,index)=>{
          if(category==="All" || category===iteam.category){
            return <List key={index} id={iteam._id} name={iteam.name} age1={iteam.age1} age2={iteam.age2} age3={iteam.age3} image={iteam.image}/>
          }
        })}
      </div>
      <hr />
    </div>
  )
}

export default Medicien
