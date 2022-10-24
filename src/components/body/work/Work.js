import React from 'react'
import Separator from '../../common/separator/Separator'
import { WorkData } from '../../data/work'
import './work.css'
import WorkCard from './WorkCard';

function Work() {
    const data= WorkData;
    return <div className='work'>
            <Separator/>
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {data.map((item) =>{
                    return (
                        <WorkCard item={item}/>
                    )
                })}

            </div>

        </div>
}

export default Work
