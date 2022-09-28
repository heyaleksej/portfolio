import React, { memo } from 'react';
import {faMapMarkedAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faTelegramPlane, faWhatsapp, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
import s from "../ContactBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const contacts = [
    {title: 'Phone', text: '+995 595 004 283', icon: faPhoneAlt},
    {title: 'Telegram', text: '@heyalexey', icon: faTelegramPlane},
    {title: 'WhatsApp', text: '@wa.me/79226442144', icon: faWhatsappSquare},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'location', text: `Tbilisi, Georgia`, icon: faMapMarkedAlt},

]

const contactInfo = contacts.map((el, index) => {
    return <li key={index} style={{paddingBottom:'2.2vh'}}>
        <h3 className={s.contactTitle}>{el.title}</h3>
        <span className={s.contactIcon}><FontAwesomeIcon icon={el.icon}/></span>
        {el.text === 'Go to github'
            ? <a className={s.contactText} target='_blank'
                 href='https://github.com/heyaleksej'>{el.text}</a>
            : el.text === '@heyalexey'
                ? <a className={s.contactText} target='_blank' href='https://t.me/heyalexey'>{el.text}</a>
                : el.text === '@wa.me/79226442144'
                     ? <a className={s.contactText} target='_blank' href='https://wa.me/79226442144'>{el.text}</a>
                     : <span className={s.contactText}>{el.text}</span>
        }
    </li>
})


export const ContactList = memo(()=>{
    console.log('cont list render')
    return <ul className={s.contactList}>{contactInfo}</ul>
})