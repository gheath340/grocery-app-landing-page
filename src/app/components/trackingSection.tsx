import Image from 'next/image';

export default function TrackingSection() {

    return (
        <section id="tracking" className="relative w-full bg-[#66AFB5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-15 lg:py-30 flex flex-col lg:flex-row items-center lg:justify-between gap-12">

                {/* Left COLUMN – Desktop mockup only */}
                <div className="hidden lg:flex flex-1 justify-center max-w-sm">
                    <Image src="/Tracking.png" alt="App Mockup" width={250} height={500} unoptimized />
                </div>
                {/* Right COLUMN – Text */}
                <div className="w-full lg:w-[620px] flex flex-col justify-center lg:items-start text-center lg:text-left lg:h-[500px]">
                    <div className='lg:translate-x-32'>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Effortless Tracking.<br />
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white font-medium">
                            Fast, frictionless food logging.
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside marker:text-white text-white text-base md:text-lg">
                            <li>Track macros and calories with zero distractions</li>
                            <li>No adds, no bloat, just clean tracking</li>
                            <li>Built to help you stay focused and consistent</li>
                        </ul>
                    </div>

                    {/* Mobile mockup – stacked under text */}
                    <div className="order-2 lg:hidden w-full flex justify-center mt-6">
                        <Image src="/Tracking.png" alt="App Mockup" width={200} height={500} />
                    </div>
                </div>
            </div>
        </section>
)
}