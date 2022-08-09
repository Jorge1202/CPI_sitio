import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import Title from './Title';


import './styles/Contact.css';
import Mapa from '../components/Map';

const Contact = () => {
    // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.190214661428!2d-99.2270042134041!3d18.86802091620546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfa498a67787%3A0x585980e5d092ab7e!2sCP%20Infraestructura%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1635997038690!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    // const urlMap = 'https://www.google.com/maps/place/CP+Infraestructura,+S.A.+de+C.V./@18.8679824,-99.2248294,15z/data=!4m5!3m4!1s0x0:0x585980e5d092ab7e!8m2!3d18.8679824!4d-99.2248294?hl=es';
    const urlMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.190214661428!2d-99.2270042134041!3d18.86802091620546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfa498a67787%3A0x585980e5d092ab7e!2sCP%20Infraestructura%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1635997038690!5m2!1ses-419!2smx';
    const frmContact = { from_name:'', from_country:'', phone:'', email:'', subject:'', message:'' };
    const [contact,setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   //https://www.emailjs.com/
		emailjs.send('service_n1k6nps','template_6y8m9pc', contact, 'user_PxXVcYrFccsVZFZgRuIzl')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
        console.log('form enviado');
   }

    // const handleClick = e => {
    //     console.log('form click');
    // }
        

    return (
        <React.Fragment>   
            <section id="contacto" className="contact">
                <div className="container">
                    <Title
                        title="CONTACTO"
                    /> 

                    <Mapa url={urlMap} />

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bi bi-map"></i>
                                        <h3>Dirección</h3>
                                        <p> Aut. Cuernavaca - Acapulco 
                                            KM. 7 Col. Adolfo López Mateos, 
                                            Cuernavaca, Morelos, México. 
                                            CP 62076
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Email</h3>
                                        <p>contacto@cpinfraestructura.com.mx</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bi bi-phone-vibrate"></i>
                                        <h3>Teléfono</h3>
                                        <p>777 326 0707</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input value={contact.from_name} onChange={handleChange} type="text" name="from_name" className="form-control" id="name" placeholder="Nombre (obligatorio)" required/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input value={contact.from_country} onChange={handleChange} type="text" className="form-control" name="from_country" id="pais" placeholder="Ciudad / País (obligatorio)" required/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 form-group">
                                        <input value={contact.phone} onChange={handleChange} type="text" name="phone" className="form-control" id="phone" placeholder="Teléfono (obligatorio)" required/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input value={contact.email} onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Correo (obligatorio)" required/>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input value={contact.subject} onChange={handleChange} type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea value={contact.message} onChange={handleChange} className="form-control" name="message" rows="3" placeholder="Comentarios" required></textarea>
                                </div>
                                <div className="my-3">
                                    { showMessage ? <div className="loading">Enviando mensaje</div> : ``}
                                    
                                    <div className="error-message"></div>
                                    <div className="sent-message">Tu mensaje ha sido enviado. ¡Gracias!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar mensaje</button></div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Contact;