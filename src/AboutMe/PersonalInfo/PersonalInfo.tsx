import s from './PersonalInfo.module.scss';
import React from 'react';
import {NavLink} from "react-router-dom";
import {ButtonX} from '../../Common/Button/ButtonX';
// @ts-ignore
import Cv from './cv/CV_Aleksey_Rogozhnikov.pdf'

const personalInfo = [
    {title: 'Date of birth: ', content: '21 May 1994'},
    {title: 'English level: ', content: 'B1'},
    {title: 'Current location : ', content: 'Tbilisi, Georgia'},
    {title: 'Email: ', content: 'heyalexey78@gmail.com'},
]

export const PersonalInfo = () => {

    const info = personalInfo.map((el, index) => {
        return <li className={s.personalInfoItem} key={index}>
            <span className={s.title}>{el.title}</span>
            <span className={s.content}>{el.content}</span>
        </li>
    })
    return (
        <div className={s.personalBox}>
            <div className={s.personalInfo}>
                <div className={s.personalInfoTitle}>
                </div>
                <div className={s.personalDesc}>
                    I'm skilled and highly motivated frontend developer who has a results-focused attitude to creating SPA, using React(JS/TS),
                    Redux. My free time is dedicated to programming tutorials, improving my English, and becoming familiar with NodeJS and React Native.
                    <p className={s.subPersonalDesc}>Ready to consider project work and full-time employment.</p>
                </div>
                <span className={s.infoWrapper}>
                    <div className={s.personalInfoInner}>
                        <ul className={s.personalInfoList}>
                            {info}
                        </ul>
                    </div>
                    <span className={s.BtnWrapper}>
					<NavLink to="/contacts" style={{textDecoration: "none"}}>
				       	<ButtonX name= {'Contact Me'} type={"button"} onClick={() => {
                        }}/>
                    </NavLink>
					<a style={{textDecoration: "none"}}
                       href={Cv}
                       target={"_blank"}
                       rel="noreferrer">
                        <ButtonX name={'Download CV'} type={"button"}/>
                    </a>
				</span></span>
            </div>
        </div>
    )
}
