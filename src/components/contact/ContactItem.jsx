import PropTypes from 'prop-types';

function ContactItem({ Icon, title, text, href }) {
    return (
        <li className='flex gap-4'>
            {href ? (
                <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4'
                >
                    <Icon className='size-10 rounded-full bg-white p-1.5' />
                    <div>
                        <h2 className='font-semibold uppercase'>{title}</h2>
                        <p>{text}</p>
                    </div>
                </a>
            ) : (
                <>
                    <Icon className='size-10 rounded-full bg-white p-1.5' />
                    <div>
                        <h2 className='font-semibold uppercase'>{title}</h2>
                        <p>{text}</p>
                    </div>
                </>
            )}
        </li>
    );
}

ContactItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
};

export default ContactItem;
