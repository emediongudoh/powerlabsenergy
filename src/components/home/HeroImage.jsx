import { useState } from 'react';

// Third-party imports
import {
    ArrowRightCircleIcon,
    PlayCircleIcon,
} from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// Custom imports
import CounterSection from './CounterSection';
import PlayIntroVideoModal from './PlayIntroVideoModal';
import Modal from '../common/Modal';

function HeroImage() {
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 500px)',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = content => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalOpen(null);
    };

    return (
        <section
            className='relative min-h-[80vh] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply'
            style={{
                backgroundImage: `linear-gradient(90deg, #2a514c 0, rgba(47, 90, 84, .76) 38.87%), url(hero_image.jpg)`,
            }}
        >
            {/* Hero content */}
            <div className='pageWrapper flex min-h-[80vh] flex-col justify-center gap-5 p-4'>
                {/* Hero text */}
                <p className='text-xl font-semibold text-brand_color'>
                    Africa&apos;s Conservable Future
                </p>
                {!isSmallScreen && (
                    <h2 className='flex flex-col gap-3 text-3xl font-medium text-white sm:text-6xl'>
                        <span>
                            Fostering{' '}
                            <span className='font-semibold text-brand_color'>
                                Development
                            </span>{' '}
                            and{' '}
                            <span className='font-semibold text-brand_color'>
                                Sustainability
                            </span>
                        </span>{' '}
                        <span>
                            {' '}
                            Lighting up{' '}
                            <span className='font-semibold text-brand_color'>
                                Africa
                            </span>{' '}
                            one home at a time
                        </span>
                    </h2>
                )}
                {isSmallScreen && (
                    <h2 className='text-3xl font-medium text-white sm:text-6xl'>
                        Fostering{' '}
                        <span className='font-semibold text-brand_color'>
                            Development
                        </span>{' '}
                        and{' '}
                        <span className='font-semibold text-brand_color'>
                            Sustainability
                        </span>
                        <br />
                        Lighting up{' '}
                        <span className='font-semibold text-brand_color'>
                            Africa
                        </span>{' '}
                        one home at a time
                    </h2>
                )}

                {/* Hero call to action buttons */}
                <div className='flex flex-wrap items-center gap-4'>
                    {/* Learn more button */}
                    <Link
                        to='/about'
                        className='flex w-fit items-center gap-3 rounded-full bg-white px-6 py-2.5 font-medium shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-white/50 hover:shadow-none'
                    >
                        Learn more{' '}
                        <ArrowRightCircleIcon className='size-7 -rotate-45' />
                    </Link>

                    {/* Get a quote button */}
                    <button
                        type='button'
                        className='flex w-fit items-center gap-3 rounded-full bg-brand_color px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand_color/50 hover:shadow-none'
                        onClick={() =>
                            openModal(
                                <PlayIntroVideoModal onClose={closeModal} />
                            )
                        }
                    >
                        Play intro video <PlayCircleIcon className='size-7' />
                    </button>
                </div>
            </div>

            {/* Counter container */}
            <CounterSection />

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                {modalContent}
            </Modal>
        </section>
    );
}

export default HeroImage;
