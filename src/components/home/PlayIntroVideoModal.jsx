function PlayIntroVideoModal() {
    return (
        <div className='aspect-video'>
            <iframe
                src='https://www.youtube.com/embed/Voq1Wq4Exjs'
                title='Powerlabs intro video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='h-full w-full'
            ></iframe>
        </div>
    );
}

export default PlayIntroVideoModal;
