import React, { useState } from 'react'
import '../add/Add.css'
import AddImages from '../../assets/upload_area.png'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [image, setImage] = useState(false)

  const datas = {
    name: '',
    age1: '',
    age2: '',
    age3: '',
    category: "fever"
  }
  const [data, setData] = useState(datas)

  const onchangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('age1', data.age1);
    formData.append('age2', data.age2);
    formData.append('age3', data.age3);
    formData.append('category', data.category);
    formData.append('image',image)

    const respone = await axios.post(`${url}/api/medicen/add`, formData)

    if (respone.data.success) {
      setData({
        name: "",
        age1: "",
        age2: "",
        age3: "",
        category: "fever"
      })
      setImage(false)
      toast.success(respone.data.message)
    }
    else{
      toast.error(respone.data.message)
    }
  }

  return (
    <div className='add'>
      <form onSubmit={onSubmitForm}>
        <div className="add-list">
          <h3>Add Iteams Below :-</h3>
          <div className="image-pic">
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : AddImages} alt="" required />
              <input type="file" id='image' hidden onChange={(e) => setImage(e.target.files[0])} />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Medicen Name</label>
            <input type="text" name="name" placeholder='type here..' className='form-control' autoComplete='off' required onChange={onchangeHandle} />
          </div>
          <div className="form-check">
            <label htmlFor="">Select Age Group's</label>
            <div className="form-check">
              <label htmlFor="child">Children's</label>
              <input type="checkbox" className='form-check-input' name="age1" id="" value='children' onChange={onchangeHandle} />
            </div>
            <div className="form-check">
              <label htmlFor="child">Tennager's</label>
              <input type="checkbox" className='form-check-input' name="age2" id="" value='Tennage' onChange={onchangeHandle} />
            </div>
            <div className="form-check">
              <label htmlFor="child">Adult's</label>
              <input type="checkbox" className='form-check-input' name="age3" id="" value='Adult' onChange={onchangeHandle} />
            </div>
          </div>
          <div className="category">
            <label htmlFor="category">Select Category</label>
            <select name="category" id="" className="form-select" required onChange={onchangeHandle}>
              <option value="fever">Fever</option>
              <option value="Cough">Cough</option>
              <option value="Headache">Headache</option>
              <option value="Cold">Cold</option>
              <option value="StomachPain">StomachPain</option>
              <option value="BackPain">BackPain</option>
              <option value="BodyRashes">BodyRashes</option>
              <option value="Vomiting">Vomiting</option>
              <option value="LegPain">LegPain</option>
              <option value="Asthama">Asthama</option>
            </select>
          </div>
          <div className="submit-btn">
            <button type="submit" className='btn btn-primary'>Add Iteam</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
