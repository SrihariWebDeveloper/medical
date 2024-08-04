import React, { useState } from 'react'
import '../problems/Problem.css'
import firstImages from '../../assets/images/medicen.js'


const Problem = ({category,setCategory}) => {
  return (
    <div className='problem' id='problem'>
        <h2>Common issues</h2>
        <p>Postman is a comprehensive API
           platform that simplifies each step.</p>
      <div className="prob">
        {firstImages.map((iteam,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===iteam.name?"All":iteam.name)} key={index} className='problems'>
                    <img className={category===iteam.name?"active":""} src={iteam.image} alt=""/>
                    <p>{iteam.name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Problem
