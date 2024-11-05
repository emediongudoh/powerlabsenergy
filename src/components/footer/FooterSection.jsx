import PropTypes from 'prop-types';

function FooterSection({ title, children }) {
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='relative h-fit w-fit text-2xl font-medium'>
                {title}{' '}
                <span className='absolute -bottom-2 -left-0 -right-2 h-1 w-16 origin-left rounded-full bg-brand_color'></span>
            </h2>
            {children}
        </div>
    );
}

FooterSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FooterSection;
