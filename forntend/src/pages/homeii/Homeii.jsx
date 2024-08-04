import React, { useState } from 'react'
import '../homeii/Homeii.css'
import Home from '../../components/home/Home.jsx'
import Problems from '../../components/problems/Problem.jsx'
import Medicien from '../../components/medicien/Medicien.jsx'
import Service from '../../components/services/Service.jsx'

const Homeii = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Home />
      <Problems category={category} setCategory={setCategory} />
      <Medicien category={category} />
      <Service />
    </div>
  )
}

export default Homeii
