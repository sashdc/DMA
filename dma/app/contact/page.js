import ContactForm from "@/components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="page-body d-flex flex-column ">
      <h1>Contact Us</h1>
      <div id="contact-details" className="d-flex justify-content-around">
        <div id="contact-info" className="d-flex flex-column p-5">
          <p>
            Email:
            <a
              href="mailto:HamiltonDMA@gmail.com
                    "
            >
              HamiltonDMA@gmail.com
            </a>
          </p>
          <p>Phone: (123) 456-7890</p>
          <p>1360 Main St E, Hamilton</p>
          <p>ON L8K 1B7</p>
        </div>
        <div id="map" className="d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.453141464971!2d-79.8118116845196!3d43.24176897913616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a5d2a2c6d0f%3A0x8c1f1f8d2b1a2f2b!2s1360%20Main%20St%20E%2C%20Hamilton%2C%20ON%20L8K%201B7!5e0!3m2!1sen!2sca!4v1634177749322!5m2!1sen!2sca"
            width="600"
            height="400"
            title="gmap"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <h2 className="mt-4">
        Or fill out the form below and we will get back to you as soon as we can
        :
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
