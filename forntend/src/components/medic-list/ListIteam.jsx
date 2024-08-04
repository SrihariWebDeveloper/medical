import React ,{useContext} from 'react'
import '../medic-list/ListIteam.css'
import { StoreContext } from '../context/context.jsx'

const ListIteam = ({ id, name, age1,age2,age3, image}) => {
  const { url } = useContext(StoreContext)
  return (
    <div className="main-list">
      <div className='list-iteams' key={id}>
        <img src={`${url}/images/`+image} alt="" />
        <h4>{name}</h4>
        <span className='badge rounded-pill text-bg-success'>{age1}</span>
        <span className='badge rounded-pill text-bg-warning'>{age2}</span>
        <span className='badge rounded-pill text-bg-info'>{age3}</span>
      </div>
    </div>
  )
}

export default ListIteam
