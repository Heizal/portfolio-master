import React from 'react'
import SocialContent from '../../common/social content/SocialContent'
import './about.css'

function About() {
    return <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there👋🏾. I am 
                    <br/> <span className='info-name'>Patricia Heizal Nagginda.</span>
                    <br/>I create beautiful products for the web.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png').default} 
                    className="picture" 
                    />
                </div>

            </div>
            <SocialContent/>
        </div>
}

export default About
