import React from 'react'
import './about.scss'
import profilePic from '../../assets/images/profile-pic.jpg';

export default function About() {
    return (
        <div className='about'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>About My Self</h2>
                    </div>
                    <div className="about-details">
                        <div className="profile-pic">
                            <img src={profilePic} alt="profile-pic" />
                        </div>
                        <div className="details">
                            <p>
                                As a full-stack developer, I bring expertise in both front-end and back-end development, seamlessly integrating user interfaces with robust server-side logic. With a keen eye for design and a knack for problem-solving, I craft intuitive, responsive web applications that enhance user experiences. Proficient in a variety of programming languages and frameworks, I specialize in creating dynamic, scalable solutions tailored to meet client needs.Let's build something extraordinary together.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
