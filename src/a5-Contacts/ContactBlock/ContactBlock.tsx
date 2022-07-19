import {faGithub, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faMapMarkedAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FC} from 'react';
import s from './ContactBlock.module.scss';
import {ContactFormBlock} from './ContactFormBlock/ContactFormBlock';

const contact = [
    {title: 'phone', text: '+995 595 004 283', icon: faPhoneAlt},
    {title: 'telegram', text: '@heyalexey', icon: faTelegramPlane},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'location', text: 'Tbilisi, Georgia', icon: faMapMarkedAlt},
]

type ContactBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}

export const ContactBlock: FC<ContactBlockPropsType> = ({setStatusResult, showModal}) => {


    const contactInfo = contact.map((el, index) => {
        return <li key={index} className={s.contactItem}>
            <h3 className={s.contactTitle}>{el.title}</h3>
            <span className={s.contactIcon}><FontAwesomeIcon icon={el.icon}/></span>
            {el.text === 'Go to github' ?
                <a className={s.contactText} target='_blank'
                   href='https://github.com/heyaleksej'>{el.text}</a> : el.text === '@heyalexey' ?
                    <a className={s.contactText} target='_blank' href='https://t.me/heyalexey'>{el.text}</a> :
                    <span className={s.contactText}>{el.text}</span>
            }
        </li>
    })
    return (
        <div className={s.contactBox}>
            <ul className={s.contactList}>{contactInfo}</ul>
            <ContactFormBlock setStatusResult={setStatusResult} showModal={showModal}/>

        </div>
    )
}