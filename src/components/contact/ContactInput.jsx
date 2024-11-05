import PropTypes from 'prop-types';

function ContactInput({ placeholder, type, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className='border-none bg-brand_gray p-4 shadow-[3px_3px_0px_black] outline-none focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none'
            value={value}
            onChange={onChange}
        />
    );
}

ContactInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default ContactInput;
