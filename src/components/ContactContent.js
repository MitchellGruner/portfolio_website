import React from 'react';
import CardItem from './CardItem';

function ContactContent() {
    return (
        <div className="contact-content">
            <h1 className="contact">CONTACT</h1>
            <section classname="actual-contact-section">
            <div className="cards">
            <div className="cards__container__1">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <div className="child1">
                            <CardItem 
                            src="images/main.jpg"
                            />
                        </div>
                        <div className="child2">
                            <p className="marginPushDown">My time at Electronic Express has been nothing short of wonderful; from my relationships with my coworkers, upper-management, and the work I do on a daily basis, I am extremely grateful and privileged to work here. With that being said, I am always open to new opportunities and experiences, and would gladly communicate with anyone that thinks I am a good fit for their company. I am truly passionate about keeping up with the latest technologies, and I enjoy coding both professionaly and recreationally. 
                            </p>

                            <h1 className="marginPushDown title">Skills</h1>

                            <ul>
                              <li>Strong HTML, CSS, and JavaScript skills</li>
                              <li>Experience communicating one-on-one and working with clients</li>
                              <li>UI and UX framework knowledge (BootStrap, React.js, React Native)</li>
                              <li>Professional experience with jQuery and AJAX calls.</li>
                              <li>Back-end programming experience using MongoDB, SQL, Express.js, and Node.js</li>
                              <li>Git and GitHub experience</li>
                              <li>Working knowledge of Wordpress and Shopify</li>
                            </ul>
                        </div>
                    </ul>
                  </div>
                </div>
              </div>
              <center><div className='rows'>
                <div className='row'><i class="fas fa-map-marker-alt"></i>
                  <p><a href="https://www.google.com/maps/place/Nashville,+TN/@36.186314,-87.065433,10z/data=!3m1!4b1!4m5!3m4!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!8m2!3d36.1626638!4d-86.7816016" className="no_text_decoration_2">
                    Nashville, TN 37215</a></p>
                </div>
                <div className='row'><i class="fas fa-phone"></i>
                  <p><a href="tel:5309065979" className="no_text_decoration_2">(530) 906-5979</a></p>
                </div>
                <div className='row'><i class="far fa-envelope"></i>
                  <p><a href="mailto:mit.gruner@gmail.com" className="no_text_decoration_2">mit.gruner@gmail.com</a></p>
                </div>
              </div></center>
            </section>
        </div>
    )
}

export default ContactContent;
