function OurProject() {
    return (
        <section
            className='relative min-h-[80vh] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply'
            style={{
                backgroundImage: `linear-gradient(90deg, #2a514c 0, rgba(47, 90, 84, .76) 38.87%), url(gallery/gallery_4.jpg)`,
            }}
        >
            <div className='pageWrapper flex flex-col gap-7 px-4 py-14'>
                <div className='flex flex-col gap-2.5'>
                    <p className='text-xl font-semibold uppercase text-brand_color'>
                        Our project
                    </p>
                    <h2 className='text-4xl font-medium text-white'>
                        Sunlight to power your life
                    </h2>
                </div>

                <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3'>
                    <div className='brandTransition relative flex flex-col gap-3.5 bg-brand_gray hover:bg-brand_color hover:text-white'>
                        <img
                            src='projects/project_1.jpg'
                            alt=''
                            loading='lazy'
                            className='h-80 object-cover'
                        />

                        <div className='absolute bottom-0 w-full bg-black/50 p-3.5'>
                            <p className='font-semibold text-brand_color'>
                                Our Evolve Solar Generator
                            </p>
                            <h2 className='text-xl text-white'>
                                Intelligent Technology (IntellTech) Pure Sine
                                Wave (PSW)
                            </h2>
                        </div>
                    </div>

                    <div className='brandTransition relative flex flex-col gap-3.5 bg-brand_gray hover:bg-brand_color hover:text-white'>
                        <img
                            src='projects/project_2.jpg'
                            alt=''
                            loading='lazy'
                            className='h-80 object-cover'
                        />

                        <div className='absolute bottom-0 w-full bg-black/50 p-3.5'>
                            <p className='font-semibold text-brand_color'>
                                Our Project Green Akwa-Ibom
                            </p>
                            <h2 className='text-xl text-white'>Biomass</h2>
                        </div>
                    </div>

                    <div className='brandTransition relative flex flex-col gap-3.5 bg-brand_gray hover:bg-brand_color hover:text-white'>
                        <img
                            src='projects/project_1.jpg'
                            alt=''
                            loading='lazy'
                            className='h-80 object-cover'
                        />

                        <div className='absolute bottom-0 w-full bg-black/50 p-3.5'>
                            <p className='font-semibold text-brand_color'>
                                Our Mini-grid projects
                            </p>
                            <h2 className='text-xl text-white'>
                                The Evolve Mini-grid
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurProject;
