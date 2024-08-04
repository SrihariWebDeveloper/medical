import React from 'react'
import '../services/Service.css'
import serviceOne from '../../assets/images/tablets.jpg'
import serviceTwo from '../../assets/images/online_consultaion.jpg'
import serviceThree from '../../assets/images/online_coaching.jpg'
import serviceFore from '../../assets/images/lab_results.jpg'


const Service = () => {
    return (
        <div className='service' id='service'>
            <h3>Our Service's</h3>
            <div className="card-main">
                <div className="card-image">
                    <img src={serviceOne} alt="" />
                    <div className="card-info">
                        <h4>Medication's</h4>
                        <p>Online Medicien Avlability</p>
                    </div>
                </div>
                <div className="card-image">
                    <img src={serviceTwo} alt="" />
                    <div className="card-info">
                        <h4>Online Consultation</h4>
                        <p>Contact the Doctor Online</p>
                    </div>
                </div>
                <div className="card-image">
                    <img src={serviceThree} alt="" />
                    <div className="card-info">
                        <h4>Health Coaching</h4>
                        <p>Online health Coaching centers</p>
                    </div>
                </div>
                <div className="card-image">
                    <img src={serviceFore} alt="" />
                    <div className="card-info">
                        <h4>Medical LAB'S Test's</h4>
                        <p>Medical labs tests and results</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Service
