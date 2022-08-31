import React, {useState} from 'react';
import s from './Contacts.module.scss'
import app from './../App.module.scss';
import {Title} from '../Common/Title/Title';
import {ContactBlock} from './ContactBlock/ContactBlock';
import {Modal} from '../Common/Modal/Modal';
import m from './ModalForm.module.scss';
import common from '../assets/sass/CommonStyles.module.scss'
import xxx from "../assets/image/xxx.png";


export const Contacts = () => {
    const [modal, setModal] = useState(false)
    const [statusResult, setStatusResult] = useState<null | boolean>(null)

    const hideModal = () => setModal(false)
    const showModal = () => setModal(true)

    return (
        <div className={`${common.infoBox} ${s.animation}`}>
            <div className={common.infoWrapper}>
                <div className={`${common.infoInner} ${app.container}`}>
                    <Title title='contact' accentTitle='me'/>
                    <ContactBlock setStatusResult={setStatusResult} showModal={showModal}/>
                    <Modal active={modal}>
                 		<img onClick={hideModal} className={m.close} src={xxx} alt={'X'}/>
                        {statusResult
                            ? <>
                                <p className={m.modalSuccessTitle}>Message was successfully sent</p>
                                <p className={m.modalSuccessTexts}>
                                    I’ll try to reply soon
                                    <span role="img" aria-label="smile">&#128578;</span>
                                </p>
                             </>
                            : <>
                                <p className={m.modalErrorTitle}>Ops,something wrong</p>
                                <p className={m.modalErrorTexts}>Unfortunately, your letter has not been sent.
                                    To contact me, please use telegram.</p>
                                <p className={m.modalError}>Thank you for understanding
                                    <span role="img" aria-label="smile">&#128578;</span>
                                </p>
                              </>
                        }
                    </Modal>
                </div>
            </div>
        </div>
    );
}

