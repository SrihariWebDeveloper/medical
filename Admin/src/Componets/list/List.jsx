import React, { useEffect, useState } from 'react'
import '../list/List.css'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list,setList] = useState([])
   
  const fetchData = async() =>{
    const responce = await axios.get(`${url}/api/medicen/list`)
    
    if(responce.data.success){
      setList(responce.data.Date)
    }
    else{
      toast.error("error Occured")
    }
  }
  const deletData = async(iteamid)=>{
    const responce = await axios.post(`${url}/api/medicen/remove`,{id:iteamid})
    await fetchData();
    if(responce.data.success){
      toast.success(responce.data.message)
    }else{
      toast.error(responce.data.message)
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='list'>
      <p>All the Medicien List</p>
      <div className="table-list">
        <div className="table-list-head">
          <b>Image</b>
          <b>Name</b>
          <b>Age Group's</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((iteam,index)=>{
          return (
            <div className='list-data' key={index}>
              <div className="iamge">
                <img src={`${url}/images/`+iteam.image} alt="" />
              </div>
              <div className="list-info">
                <h4>{iteam.name}</h4>
              </div>
              <div className="list-array">
                <p>{iteam.age1},</p>
                <p>{iteam.age2},</p>
                <p>{iteam.age3}</p>
              </div>
              <div className="list-category">
                <h4>{iteam.category}</h4>
              </div>
              <div className="list-action">
                <h4 onClick={()=>deletData(iteam._id)}>X</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
