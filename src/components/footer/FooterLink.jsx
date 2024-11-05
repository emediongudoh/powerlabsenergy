import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FooterLinks({ links }) {
    return (
        <ul className='mt-4 flex flex-col gap-4 text-slate-300'>
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        className='brandTransition hover:text-brand_color'
                        to={link.href}
                    >
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

FooterLinks.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FooterLinks;
