import React, {FC, useState} from 'react';
import s from './ContactFormBlock.module.scss';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser'
import {Loader} from '../../../Common/Loader/Loader';

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
        // onSubmit: async values => {
        // 	console.log(JSON.stringify(values));
        // 	setStatus('loading')
        // 	const {name, email, message} = values;
        // 	try {
        // 		const res = await feedbackApi.sendMessage({name, email, message})
        // 		if (res.data === 'ok') {
        // 			console.log('я тут')
        // 			setStatusResult(true)
        // 		}
        // 	}
        // 	catch (e) {
        // 		setStatusResult(false)
        // 		console.log(e)
        // 	}
        // 	setStatus('success')
        // 	showModal(true)
        // 	formik.resetForm()
        // },
    });


    return (
        <form onSubmit={formik.handleSubmit} className={status === 'loading' ? s.formLoading : ''}>
            <div className={s.formBox}>
                <div className={s.group}>
                    <input type="text" required className={s.input} {...formik.getFieldProps('name')}/>

                    <label className={s.label}>Your Name</label>
                    {formik.errors.name && formik.touched.name
                        ? <div className={s.formError}>{formik.errors.name}</div>
                        : null}
                </div>

                <div className={s.group}>
                    <input
                        type="text"
                        required
                        className={s.input} {...formik.getFieldProps('email')}/>
                    <label className={s.label}>Email Address</label>
                    {formik.errors.email && formik.touched.email
                        ? <div className={s.formError}>{formik.errors.email}</div>
                        : null}
                </div>


                <div className={s.group}>
                    <textarea required className={s.input} {...formik.getFieldProps('message')}/>
                    <label className={s.label}>Your Message</label>
                    {formik.errors.message && formik.touched.message
                        ? <div className={s.formError}>{formik.errors.message}</div>
                        : null}
                </div>

                {status === 'loading' ? <Loader/> : null}

                <button type="submit" className={s.formBtn} disabled={status === 'loading'}>Send Message</button>
            </div>
        </form>
    );
}