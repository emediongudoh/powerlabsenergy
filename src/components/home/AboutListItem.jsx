import { CheckCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function AboutListItem({ text }) {
    return (
        <li className='flex items-center gap-2.5'>
            <CheckCircleIcon className='size-7 text-brand_color' />
            <span className='leading-loose'>{text}</span>
        </li>
    );
}

AboutListItem.propTypes = {
    text: PropTypes.string.isRequired,
};

export default AboutListItem;
