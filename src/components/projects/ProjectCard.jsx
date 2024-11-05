import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectCard({ title, image, slug }) {
    return (
        <Link
            to={`/projects/${slug.current}`}
            className='brandTransition relative flex flex-col gap-4 bg-brand_gray hover:bg-brand_color hover:text-white'
        >
            <img
                src={image.asset.url}
                alt={title}
                loading='lazy'
                className='h-80 object-cover'
            />

            <div className='absolute bottom-0 w-full bg-black/50 p-4'>
                <p className='font-semibold text-brand_color'>{title}</p>
            </div>
        </Link>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    slug: PropTypes.object.isRequired,
};

export default ProjectCard;
