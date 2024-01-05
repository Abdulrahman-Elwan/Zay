import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'
import { Container, Row, Col } from 'react-bootstrap';
const FormCon = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_90lbi7d', 'template_5w21551', form.current, '3gUIxBk1fE5bV8sNQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <Container>
            <div className="firstco">
                <Row>
                    <Col>
                        <div className='formcon'>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Your Name :</label>
                                <input type="text" name="name" />
                                <label>Email :</label>
                                <input type="email" name="email" />
                                <label>Phone :</label>
                                <input type="text" name="Phone" />
                                <label>Message :</label>
                                <textarea name="message" />
                                <input className='sub' type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <h2>
                            Contact <span>US</span>
                        </h2>
                        <p className='ptext'>
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day 
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="scco">
                <Row>
                    <Col>
                        <h2>
                            Contact <span>US</span>
                        </h2>
                        <p className='ptext'>
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day
                            We are always waiting for your inquiry. A full team is available to answer your inquiries throughout the day 
                        </p>
                    </Col>
                    <Col>
                        <div className='formcon'>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Your Name :</label>
                                <input type="text" name="name" />
                                <label>Email :</label>
                                <input type="email" name="email" />
                                <label>Phone :</label>
                                <input type="text" name="Phone" />
                                <label>Message :</label>
                                <textarea name="message" />
                                <input className='sub' type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default FormCon
