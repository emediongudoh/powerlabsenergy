function ContactMap() {
    return (
        <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127184.0884888676!2d7.846981562069854!3d5.021881543323547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067f8721160c8a3%3A0xb0b138b7a481f289!2sAkwa%20Ibom%20State%20House%20of%20Assembly!5e0!3m2!1sen!2sng!4v1720530306216!5m2!1sen!2sng'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='h-96 w-full border-none'
        ></iframe>
    );
}

export default ContactMap;
