import React from 'react'
import Separator from '../../common/separator/Separator'
import SocialContent from '../../common/social content/SocialContent'
import './contact.css'

function Contact() {
    return <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of these platforms.</p>
                    <SocialContent/>
                </div>
                {/* <div className='download'>
                    <a download href={require('../../../assets/resume.pdf').default}>
                        <i class="fi-rr-cloud-download download-icon"></i>
                        Download Resume
                    </a>
                </div> */}
            </div>
        </div>
}

export default Contact
