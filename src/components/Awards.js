import React from 'react'
import styled from 'styled-components'
import AwardItem from './AwardItem'
import award from '../images/skills/award.svg'
import calender from '../images/skills/calender.svg'
import heads from '../images/skills/heads.svg'

const Awards = () => {
    return (
        <AwardsStyled>
            <AwardItem icon={award} number={'+51'} text={'Awards'} />
            <AwardItem icon={calender} number={'+21'} text={'On Schedule'} />
            <AwardItem icon={heads} number={'+90'} text={'Git Repos'} />
            <AwardItem icon={award} number={'+21'} text={'Awards'} />
        </AwardsStyled>
    )
}

export default Awards


const AwardsStyled = styled.div`
    background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
    backdrop-filter: blur(9px);
    padding: 2.5rem 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
`