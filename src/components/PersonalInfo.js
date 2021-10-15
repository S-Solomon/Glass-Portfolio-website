import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.svg'
import location from '../images/location.svg'
import age from '../images/age.svg'
import contact from '../images/contact.svg'
import email from '../images/email.svg'

const PersonalInfo = () => {
    return (
        <PersonalInfoStyled>
            <div className="wrapper">
                <div className="avatar-container">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="right-avatar">
                        <h4>John Doe</h4>
                        <p>Web Developer - Software Engineer - Lead Designer</p>
                        <div className="contact-btn">Contact</div>
                    </div>
                </div>
                <p className="about-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ullam sint eveniet quia repellendus deleniti quae cum quasi. Minus illo aperiam ducimus quisquam sapiente et voluptatem dolor dolorem magni? Fugiat!
                </p>
                <div className="icon-text">
                    <div className="icons">
                        <div className="icon">
                            <img src={location} alt="" />
                            <p>London, United Kingdom</p>
                        </div>
                        <div className="icon">
                            <img src={age} alt="" />
                            <p>21 Years old</p>
                        </div>
                        <div className="icon">
                            <img src={contact} alt="" />
                            <p>07734511234</p>
                        </div>
                        <div className="icon">
                            <img src={email} alt="" />
                            <p>johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </PersonalInfoStyled>
    )
}

export default PersonalInfo


const PersonalInfoStyled = styled.div`
    background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
    backdrop-filter: blur(9px);
    border-radius: 8px;
    margin-bottom: 30px;
    border: 2px solid #fff;
    box-shadow: 0 10px 20px 0 rgba(0,0,0, 0.02);
    grid-column: 1 / 4; // spans 4 of the available 8 colums

    .wrapper {
        padding: 2.5rem 2rem;
        .avatar-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .avatar{
                width: 100%;
                border-radius: 10px;
                margin-right: 2rem;
                padding-right: 3rem;
                display: flex;
                align-items: center;
                img{
                    width: 100%;
                    border-radius: 10px;
                }
            }
            .right-avatar{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                p{
                    padding: 1rem 0;
                }
                .contact-btn{
                    background-color: #6BBE92;
                    color: #fff;
                    padding: .6rem .9rem;
                    text-align: center;
                    border-radius: 7px;
                }    
            }
        }
        .about-text {
            padding: 1.5rem 0;
        }
        .icon-text{
            .icons{
                .icon{
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    p{
                        padding-left: 1rem;
                    }
                }
            }
        }
    }
`