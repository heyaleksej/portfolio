import React, {FC, useState} from 'react';
import s from './ContactFormBlock.module.scss';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser'
import {Loader} from '../../../Common/Loader/Loader';
import mark from './../../../assets/image/exclamation-mark-svgrepo-com.svg'
import refresh from './../../../assets/image/refresh-svgrepo-com.svg'
import send from './../../../assets/image/send-svgrepo-com.svg'
type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

type ContactFormBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}


export const ContactFormBlock: FC<ContactFormBlockPropsType> = ({setStatusResult, showModal}) => {

    return (
        <div className={s.contactBox}>
            <div>
                <p className={s.formText}>If you have any suggestion, project or even you want to say something.. Please
                    fill out
                    the form below and I will
                    reply you shortly.</p>
            </div>
            <ContactForm setStatusResult={setStatusResult} showModal={showModal}/>
        </div>
    )
}

type ContactFormPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}


export const ContactForm: FC<ContactFormPropsType> = ({setStatusResult, showModal}) => {
    const [status, setStatus] = useState('')


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length > 2000) {
                errors.message = 'Message must be 2000 characters or less';
            }

            return errors;
        },
        onSubmit: values => {
            setStatus('loading')

            emailjs.send('service_ruolmcm', 'template_5m2ypga', values, 'VP6vzl-b91s-BHeC7')
                .then(() => {
                    setStatusResult(true)
                })
                .catch(() => setStatusResult(false))
                .finally(() => {
                        setStatus('success')
                        showModal(true)
                        formik.resetForm()
                    }
                );
        },

    });


    return (
        <form onSubmit={formik.handleSubmit}  className={status === 'loading' ? s.formLoading : ''}>
            <div className={s.formBox}>
                <div className={s.group}>
                    <input type="text"
                           required
                           className={s.input} {...formik.getFieldProps('name')}/>

                    <label className={s.label}>Your Name</label>
                    {formik.errors.name && formik.touched.name
                        ? <div className={s.arrow}>
                            <span className={s.arrowForm}>
                                {formik.errors.name}
                                <img src={mark} className={s.mark} alt={"!"}/>
                            </span>
                    </div>
                        : null}
                    {/*<TextField className={s.input}*/}
                    {/*           InputLabelProps={{className: s.label}}*/}
                    {/*           id="custom-css-outlined-input"*/}
                    {/*           label="Name"*/}
                    {/*           margin="normal"*/}
                    {/*           helperText={formik.errors.name}*/}
                    {/*           error={!!formik.errors.name}*/}


                    {/*           {...formik.getFieldProps('name')}/>*/}
                </div>

                <div className={s.group}>
                    <input
                        type="text"
                        required
                        className={s.input} {...formik.getFieldProps('email')}/>
                    <label className={s.label}>Email Address</label>
                    {formik.errors.email && formik.touched.email
                        ? <div className={s.arrow}>
                            <span className={s.arrowForm}>
                                {formik.errors.email}
                                <img src={mark} className={s.mark} alt={"!"}/>
                            </span>
                        </div>
                        : null}
                    {/*<TextField className={s.input}*/}
                    {/*           InputLabelProps={{className: s.label}}*/}
                    {/*           id="custom-css-outlined-input"*/}
                    {/*           label="Email"*/}
                    {/*           margin="normal"*/}
                    {/*           error={!!formik.errors.email}*/}
                    {/*           helperText={formik.errors.email}*/}

                    {/*           {...formik.getFieldProps('email')}/>*/}

                </div>


                <div className={s.group}>
                    <textarea  required className={s.input} {...formik.getFieldProps('message')}/>
                    <label className={s.label}>Your Message</label>
                    {formik.errors.message && formik.touched.message
                        ? <div className={s.arrow}>
                            <span className={s.arrowForm}>
                                {formik.errors.message}
                                <img src={mark} className={s.mark} alt={"!"}/>
                            </span>

                        </div>
                        : null}
                    {/*<TextField className={s.input}*/}
                    {/*           InputLabelProps={{className: s.label}}*/}
                    {/*           id="custom-css-outlined-input"*/}
                    {/*           label="Message"*/}
                    {/*           margin="normal"*/}
                    {/*           helperText={formik.errors.message}*/}

                    {/*           {...formik.getFieldProps('message')}/>*/}

                </div>

                {status === 'loading' ? <Loader/> : null}

                <span className={s.btnBlock}>
                    <button className={s.refreshBtn} disabled={status === 'loading'} onClick={()=>{formik.resetForm()}}><img src={refresh} className={s.refreshLogo} alt={'refresh'}/></button>
                    <button type={"submit"} className={s.formBtn} disabled={status === 'loading'}>Send <img src={send} className={s.refreshLogo} alt={'send'}/></button>
                </span>
            </div>
        </form>
    );
}