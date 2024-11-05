import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/'>
            <img
                src='logo.png'
                alt='Powerlabs logo'
                loading='lazy'
                className='h-14'
            />
        </Link>
    );
}

export default Logo;
