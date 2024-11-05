import PropTypes from 'prop-types';

function Overlay({ closeSidenav }) {
    return (
        <div
            className='fixed left-full top-0 z-50 h-full w-full bg-black/50 sm:left-64 md:hidden'
            onClick={closeSidenav}
        ></div>
    );
}

Overlay.propTypes = {
    closeSidenav: PropTypes.func.isRequired,
};

export default Overlay;
