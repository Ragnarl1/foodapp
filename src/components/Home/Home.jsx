import React, { useState, useEffect } from 'react';
import './Home.css';
import banner1 from '../../assest/banner1.jpg';
import banner2 from '../../assest/banner2.jpg';
import banner3 from '../../assest/banner3.jpg';
import banner4 from '../../assest/banner4.jpg';
import banner5 from '../../assest/banner5.jpg';
import banner6 from '../../assest/banner6.jpg';
import { data } from '../Data';
import { list } from '../Data';
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const Banner = {
    image1: banner1,
    image2: banner2,
    image3: banner3,
    image4: banner4,
    image5: banner5,
    image6: banner6,
  };
  const colors = [
    "rgb(236, 255, 236)",
    "rgb(254, 239, 234)",
    "rgb(253, 240, 255)",
    "rgb(222, 243, 255)",
    "rgb(255, 232, 248)",
    "rgb(227, 255, 250)",
    "rgb(255, 243, 255)"]


  // product tab 
  const productTab = [
    { id: 1, text: 'All', category: 'all' },
    { id: 2, text: 'Milks & Dairies', category: 'all' },
    { id: 3, text: 'Coffes & Teas', category: 'all' },
    { id: 4, text: 'Pet Food', category: 'all' },
    { id: 5, text: 'Meats', category: 'all' },
    { id: 6, text: 'Vegetables', category: 'all' },
    { id: 7, text: 'Fruits', category: 'all' },
  ]
  const [activeColor, setActiveColor] = useState(null)

  const handleButtonClick = (category) => {
    console.log("im here");
    setActiveColor(category)
  }

  //

  // Get all images as an array
  const bannerImages = Object.values(Banner);

  // Set up state to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [bannerImages.length]);

  return (
    <>
      <div className="container-fluid home">
        <div className="image-holder">
          {/* Display the current image */}
          <img
            src={bannerImages[currentIndex]}
            alt={`banner${currentIndex + 1}`}
            className="w-100 rounded-4"
          />
        </div>
      </div>

      {/* home part  2 start here */}
      <div className="container-fluid items">
        <div className="col-12">
          <h2 className='mb-2 fs-4 fw-medium mb-4' style={{ color: ' #212529' }}>Featured Categories</h2>
        </div>
        <div className="container m-0">
          <div className="row d-flex " style={{ width: "1140px" }}>
            {
              data.map((item, index) => {
                return (
                  <div className="col d-flex flex-column align-items-center judtify-content-center p-0 ">
                    <div className="img-custom d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: colors[index % colors.length] }}>
                      <img src={item.image} alt={item.alt} />
                    </div>

                    <h5 className='pt-3 fs-5.5'>{item.name}</h5>
                  </div>
                )
              })
            }

          </div>
        </div>

      </div>

      <section className='banners mb-4 mt-4'>
        <div className="container-fluid">
          <div className="row">
            {
              list.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 round-2 ">
                    <div className="banner_img position-relative">
                      <img src={item.img} alt={item.index} className='w-100 rounded-5' />
                      <div className="banner-text">
                        <h4 className='title'>{item.title}</h4>
                        <button
                          type='submit'
                          className='btn-1 border-0 px-2 py-1  text-white fs-6 fw-normal rounded-2'>
                          <span className="">{item.btnTitle}</span> <FaArrowRight className='fs-6 btn-text' />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

      </section>

      <section className='product-tab pt-5 pb-5'>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 fs-3 ">Popular Products</div>
            <div className="col-md-8 d-flex justify-content-end">
              {
                productTab.map((item, index) => {
                  return (
                    <button type='button'
                      key={item.index}
                      className={`border-0 gap-5 mx-2 bg-light-subtle fe-medium fs-5 ${activeColor === item.id ? 'star' : ''}`}
                      onClick={() => handleButtonClick(item.category)}
                    >
                      {item.text}

                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Home;
