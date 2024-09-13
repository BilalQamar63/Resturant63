import React from 'react'
import AboutImg from '../assets/images/about.jpeg'


const About = () => {
  return (
    <>
      <section className="about" id='about'>
            <h1 className='heading'>
                <span>about</span> us
            </h1>
            <div className="row">
                <div className="image">
                    <img src={AboutImg} alt="" />
                </div>
                <div className='content'>
                    <h3>What Makes Our Food Special ?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus, atque magnam laudantium labore sequi saepe libero consectetur</p>
                    
                    <p>Lorem ipsum exercitationem cum ratione maxime ex tempora deleniti ab delectus, quos sunt aspernatur reiciendis? Voluptate sit nesciunt possimus labore sequi saepe libero consectetur </p>
                    <a href="#" className='btn'>Learn More</a>
                </div>
            </div>
      </section>
    </>
  )
}

export default About
