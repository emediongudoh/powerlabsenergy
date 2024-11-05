function MissionAndVision() {
    return (
        <section className='miniPageWrapper mt-7 grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:gap-16'>
            {/* Vision statement */}
            <div className='flex flex-col items-center gap-4 bg-brand_gray p-7'>
                <img
                    src='icons/binoculars.png'
                    alt='Vision'
                    loading='lazy'
                    className='h-28 object-contain'
                />
                <span className='w-fit rounded-full bg-brand_color px-4 py-1 text-center text-white shadow-[3px_3px_0px_black]'>
                    Vision
                </span>
                <p className='mt-4 leading-normal'>
                    To be Africa&apos;s largest clean energy provider
                </p>
            </div>

            {/* Mission statement */}
            <div className='flex flex-col items-center gap-4 bg-brand_gray p-7'>
                <img
                    src='icons/target.png'
                    alt='Mission'
                    loading='lazy'
                    className='h-28 object-contain'
                />
                <span className='w-fit rounded-full bg-brand_color px-4 py-1 text-center text-white shadow-[3px_3px_0px_black]'>
                    Mission
                </span>
                <p className='mt-4 leading-normal'>
                    Fostering development across Africa&apos;s energy sector,
                    changing lives by providing sustainable, high-quality, and
                    affordable energy solutions through innovation and
                    responsible resource management
                </p>
            </div>
        </section>
    );
}

export default MissionAndVision;
