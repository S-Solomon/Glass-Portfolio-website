import React from 'react'
import styled from 'styled-components'
import Awards from './Awards'
import Language from './Language'
import SkillButton from './SkillButton'
import ig from '../images/socials/ig.svg'
import git from '../images/socials/git.svg'
import yt from '../images/socials/yt.svg'


const Personal = () => {
    return (
        <PersonalStyled>
            <div className="skill-con">
                <h4>Personal Skill</h4>
                <SkillButton name={'Creative'} number={'1.'} bg={'#6BBE92'}/>
                <SkillButton name={'Problem Solver'} number={'2.'} bg={'#F44E77'} />
                <SkillButton name={'Fast Learner'} number={'3.'} bg={'#16194F'} />
                <SkillButton name={'Team Player'} number={'4.'} bg={'#554DDE'} />
                <SkillButton name={'Professional'} number={'5.'} bg={'#9A94FF'} />
            </div>
            <div className="awards-con">
                <Awards />
                <div className="socials-con">
                <Language icon={git} icon2={ig} icon3={yt} text1={'English'} text2={'French'} text3={'Spanish'} title={'Languages'} />
                    <Language icon={git} icon2={ig} icon3={yt} text1={'@maclinz'} text2={'@testingdata'} text3={'@MacLinzUniversal'} title={'Socials'} />
                </div>
            </div>
        </PersonalStyled>
    )
}

export default Personal


const PersonalStyled = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    .skill-con {
        background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
        backdrop-filter: blur(8px);
        padding: 2.5rem 2rem;
        border-radius: 15px;
        h4 {
            padding-bottom: 2rem;
        }
        .skill {
            padding: .8rem 1rem ;
            color: white;
            border-radius: 15px;
            margin: 1.4rem 0;
            .skills-btn{
                display: grid;
                grid-template-columns: 20px 200px;
                span:first-child{
                    width: 10%;
                }
            }
        }
    }

    .awards-con{
        padding-left: 2rem;
        .socials-con{
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
`