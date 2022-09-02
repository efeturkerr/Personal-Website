import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [res, setRes] = useState()
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRes({status: false, msg: "Mail Gönderilemiyor."})
        /*emailjs.sendForm('service_x8pr9sc', 'template_schi3wg', formRef.current, 'q6GTKhv1cApPfmkoH')
        .then((result) => {
            setRes({status: true ,msg: "Mail başarıyla gönderildi."})
        }, (error) => {
            setRes({status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı."})
        });*/
    }

    return (
        <div className='d-flex align-items-center flex-column mb-5'>
            <div className='text-center d-flex flex-column gap-3'>
                <h1 className='fw-bold'>Contact me! 📨</h1>
                <div>
                    <form ref={formRef} onSubmit={handleSubmit} className="rounded-3 p-3" style={{width:"350px",backgroundColor:"#2d3238"}}>
                        {
                            res && (
                                res.status ? 
                                <div className='bg-success mb-3 rounded w-100 p-2 d-flex justify-content-center align-items-center'>
                                    {res.msg}
                                </div>  
                                :
                                <div className='bg-danger mb-3 rounded w-100 p-2 d-flex justify-content-center align-items-center'>
                                    {res.msg}
                                </div>
                            )
                        }
                        <label htmlFor="nameInput1" className="form-label">Name</label>
                        <input required type="text" name="user_name" className="form-control text-light" id="nameInput1" style={{backgroundColor:"#393E46"}}/>
                        <label htmlFor="emailInput1" className="form-label mt-3">Email address</label>
                        <input required type="email" name="user_email" className="form-control text-light" id="emailInput1" style={{backgroundColor:"#393E46"}}/>
                        <label htmlFor="messageInput1" className="form-label mt-3">Your message</label>
                        <textarea required name="message" className="form-control text-light" id="messageInput1" style={{minHeight:"75px", maxHeight:"275px", backgroundColor:"#393E46"}}></textarea>
                        <button type='submit' className="btn float-right btn-outline-light mt-4 w-100">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}