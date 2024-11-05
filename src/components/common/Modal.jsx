import { useEffect } from 'react';

// Third-party imports
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/outline';

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        // Function to close the modal on Escape key press
        const handleEscape = event => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // Add event listener for Escape key when the modal is open
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        // Clean up the event listener when the modal closes
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Brand color
    const brandColor = `#4AAB3D`;
    const scrollbarTrack = `#000`;

    return (
        <div
            className='fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-white/50'
            onClick={handleOverlayClick}
        >
            <div className='w-full max-w-lg border border-brand_black bg-white p-3 shadow-[3px_3px_0px_black]'>
                <div className='flex justify-between'>
                    <div className='flex-grow'></div>

                    <button
                        type='button'
                        className='ml-auto'
                        onClick={onClose}
                    >
                        <XCircleIcon className='size-10' />
                    </button>
                </div>

                <div
                    className='max-h-[70vh] overflow-y-auto p-1'
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: `${brandColor} ${scrollbarTrack}`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;
