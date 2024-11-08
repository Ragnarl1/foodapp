import React, { useState } from 'react'
import './Navbar.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovered(e);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div className="navbar d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-between w-100">
                        <div className="col-sm-3 part-1 d-flex align-items-center">
                            <button className="btn btn-success d-flex align-items-center ">
                                <CiGrid41 className="me-1" /> Browse All Categories <MdKeyboardArrowDown className="ms-1" />
                            </button>
                        </div>
                        <div className="col-sm-7 part-2">
                            <ul className='nav-list d-flex align-items-center m-0  '>
                                <li><Link to='/'>Home</Link></li>
                                <li onMouseOver={() => handleMouseOver('fashion')} onMouseOut={handleMouseOut}>Fashion <MdKeyboardArrowDown />
                                    {isHovered === "fashion" && (
                                        <ul className='big-menu'>
                                            <li>Men</li>
                                            <li>Women</li>
                                        </ul>
                                    )}
                                </li>
                                <li onMouseOver={() => handleMouseOver("Electronics")} onMouseOut={handleMouseOut}>Electronics <MdKeyboardArrowDown />
                                    {isHovered === "Electronics" && (
                                        <ul className='big-menu'>
                                            <li>Computer And Accessories</li>
                                            <li>Smart Watch Accessories</li>
                                            <li>Mobiles</li>
                                        </ul>
                                    )}
                                </li>
                                <li>Bags</li>
                                <li onMouseOver={() => handleMouseOver('footware')} onMouseOut={handleMouseOut}>Footware <MdKeyboardArrowDown />
                                    {
                                        isHovered === "footware" && (
                                            <ul className='big-menu'>
                                                <li>Man Footware</li>
                                                <li>Women Footware</li>
                                            </ul>
                                        )
                                    }
                                </li>
                                <li onMouseOver={() => handleMouseOver("groceries")} onMouseOut={handleMouseOut}>Groceries <MdKeyboardArrowDown />
                                    {
                                        isHovered === "groceries" && (
                                            <ul className='big-menu'>
                                                <li>Cooking Essentials</li>
                                                <li>Home Care</li>

                                            </ul>
                                        )
                                    }
                                </li>
                                <li>Beauty</li>
                                <li onMouseOver={() => handleMouseOver("Shop")} onMouseOut={handleMouseOut}>Shop <MdKeyboardArrowDown />
                                    {
                                        isHovered === "Shop" && (
                                            <ul className='dropDownMenu w-100 d-flex align-items-center justify-content-start unique '>
                                                <div className="row align-items-stretch justify-content-start">
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Fashion</span>
                                                        <ul className='list-unstyled dropDown_1 '>
                                                            <li className='fs-6 fw-lighter '>Men</li>
                                                            <li className='fs-6 fw-lighter '>Women</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Electronics</span>
                                                        <ul className='list-unstyled  dropDown_1'>
                                                            <li className='fs-6 fw-lighter'>Computer And Accessories</li>
                                                            <li className='fs-6 fw-lighter'>Smart Watch Accessories</li>
                                                            <li className='fs-6 fw-lighter'>Mobiles</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Bags</span>
                                                        <ul className='list-unstyled dropDown_1'>

                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>FootWare</span>
                                                        <ul className='list-unstyled dropDown_1'>
                                                            <li className='fs-6 fw-lighter'>Man Footware</li>
                                                            <li className='fs-6 fw-lighter'>Women Footware</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                    <span style={{ color: '#198754' }} className='mb-4'>groceries</span>
                                                        <ul className='list-unstyled dropDown_1'>
                                                        <li className='fs-6 fw-lighter'>Cooking Essentials</li>
                                                        <li className='fs-6 fw-lighter'>Home Care</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2 part-3 d-flex align-items-center justify-content-between">
                            <span><FaHeadphonesAlt className='fs-3 text' /></span>
                            <div className="info">
                                <h3 className='fs-6 text m-0 text-success fw-bold'>1900 - 888</h3>
                                <p className='m-0 text-secondary'>24/7 Support Center</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar