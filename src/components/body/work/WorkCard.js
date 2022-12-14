import React from 'react';
import './workcard.css';

function WorkCard({item}) {
    return <div className='work-card'>           
            <a href={item.link}>
                <img src={item.companyLogo} className='work-logo' />
            </a>      
        <div className='work-info'>
            <label className='company-name'>{item.company}</label>

            <div className='work-dates'>
                <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
            </div>
            <div className='work-description'>
                <p>{item.work}</p>
            </div>
        </div>          
        </div>
}

export default WorkCard
