import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../data/data'
import Skills from './Skills'

const Tabs = () => {
    const [info, setInfo] = useState(data);
    const [value, setValue] = useState(0)

    const renderData = () => {
        if(value === info[0]){
            return <Skills info={info} />
        }
    }



    return (
        <TabsStyled>
            <div className="tabs-container">
                <div className="btn-container">
                    {
                        info.map((item, index) => {
                            return <button 
                                        key={item.id}
                                        className={`tabs-btn ${info[index] === value && 'active-btn'} `}
                                        onClick={() => setValue(info[index])}>
                                {item.tab}
                            </button>
                        })
                    }
                </div>
                {renderData()}
            </div>
        </TabsStyled>
    )
}

export default Tabs


const TabsStyled = styled.div`
    background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
    backdrop-filter: blur(9px);
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.02);
    grid-column: 4 / -1; // starts from column 4 to the end
    margin-bottom: 30px;
    border: 2px solid #fff;

    .tabs-container {
        padding: 2.5rem 2rem;
        .btn-container{
            padding-bottom: 2rem;
            .tabs-btn{
                background: transparent;
                font-family: inherit;
                font-size: inherit;
                outline: none;
                border: none;
                cursor: pointer;
                padding: 1rem 0;
                transition: all .2s ease-in-out;
                opacity:  .5;
                &:not(:last-child){
                    margin-right: 2.5rem;
                }
                &:hover{
                    transition: all .2s ease-in-out;
                    border-bottom: 2px solid #000;
                    opacity: 1;
                }
            }
            .active-btn {
                opacity: 1;
                border-bottom: 2px solid #000;
            }
        }
    }

`