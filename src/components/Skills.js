import React from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const Skills = ({info}) => {
    const { description, progressImages } = info[0]
    return (
        <SkillsStyled>
            <p className="description">{description}</p>
            <div className="skills-con">
                <ProgressBar name={'CSS3'} image={progressImages[0]} progress={'89%'} bg={'#F56692'} desc={description}/>
                <ProgressBar name={'Adobe Cloud'} image={progressImages[1]} progress={'80%'} bg={'#6BBE92'} desc={description} />
                <ProgressBar name={'Github'} image={progressImages[2]} progress={'91%'} bg={'#545496'} desc={description} />
                <ProgressBar name={'Linux OS'} image={progressImages[3]} progress={'89%'} bg={'#f74839'} desc={description} />
                <ProgressBar name={'Javscript'} image={progressImages[4]} progress={'86%'} bg={'#640211'} desc={description} />
                <ProgressBar name={'Python'} image={progressImages[5]} progress={'70%'} bg={'slateblue'} desc={description} />
            </div>
        </SkillsStyled>
    )
}

export default Skills


const SkillsStyled = styled.div`
    .description {
        padding-bottom: 2rem;
    }
    .skills-con {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
`