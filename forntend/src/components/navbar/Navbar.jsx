import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../navbar/Navbar.css'
import search from '../../assets/images/search_icon.png'
import Logo from '../../assets/images/medical-logo.png'
import MeanuBar from '../../assets/images/menu-bars-icon-7.jpg'
import CrossIcon from '../../assets/images/cross.jpg'




const Navbar = () => {
    const [active,setactive] = useState("home")
    const [click,setClick] = useState(true)

    const eventChange = () =>{
        if(click){
            setClick(false)
        }else{
            setClick(true)
        }
    }

  return (
    <div className={click===true?"navbar":"navbar active"} id='nav'>
        <div className="nav-right">
            <img src={Logo} alt="" />
        </div>
        <div className="nav-center">
            <div className="input-find">
                <input type="text" name="" id="" />
                <img src={search} alt="" />
            </div>
        </div>
        <div className="nav-left">
            <ul>
            <li onClick={eventChange}>{click?<img src={MeanuBar} alt=""/>:<img id='cross' src={CrossIcon} alt=""/>}</li>
                <Link to='/' onClick={()=>setactive("home")} className={active=="home"?"active":""}>Home</Link>
                <a href='#problem' onClick={()=>setactive("servce")} className={active=="servce"?"active":""}>Medicien</a>
                <a href='#service' onClick={()=>setactive("aboutUs")} className={active=="aboutUs"?"active":""}>Service's</a>
                <a href='#footer' onClick={()=>setactive("contactUs")} className={active=="contactUs"?"active":""}>Contact Us</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
