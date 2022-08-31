import React, {FC, memo} from 'react';
import s from './ContactBlock.module.scss';
import {ContactFormBlock} from './ContactFormBlock/ContactFormBlock';
import {ContactList} from "./ContactFormBlock/ContactList";


type ContactBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}

export const ContactBlock: FC<ContactBlockPropsType> = memo(({setStatusResult, showModal}) => {

    return (
        <div className={s.contactBox}>
            <ContactList/>
            <ContactFormBlock setStatusResult={setStatusResult} showModal={showModal}/>
        </div>
    )
})