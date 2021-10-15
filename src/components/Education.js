import React from 'react'
import Timeline from './Timeline'

const Education = () => {
    return (
        <div>
            <div className="timelineCon">
                <Timeline year={'September, 2021'} text={'University of Birmingham'} qualification={'PhD of Science in computer Science'} />
                <Timeline year={'June, 1994'} text={'London Metropolitan University'} qualification={'Bachelors Science in computer Science'} />
                <Timeline year={'August, 1990'} text={'Hull City School'} qualification={'High School Diploma'} />
                <Timeline year={'January, 2006'} text={'University of Manchester'} qualification={'Masters in Mathematics'} />
            </div>
        </div>
    )
}

export default Education
