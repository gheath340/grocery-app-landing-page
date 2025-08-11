import Image from 'next/image';

export default function BudgetSection() {

    return (
        <section id="budget" className="relative w-full bg-[#66AFB5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-15 lg:py-30 flex flex-col lg:flex-row items-center lg:justify-between">

                {/* Left COLUMN – Desktop mockup only */}
                <div className="hidden lg:flex flex-1 justify-center max-w-sm">
                    <Image src="/Budget.png" alt="App Mockup" width={250} height={500} unoptimized />
                </div>
                {/* Right COLUMN – Text */}
                <div className="w-full lg:w-[620px] flex flex-col justify-center text-center lg:text-left lg:h-[500px]">
                    <div className='lg:translate-x-32'>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Budget Smarter. <br />
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white font-medium">
                            Take control of your spending without sacrificing your health or goals.
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside marker:text-white text-white text-base md:text-lg">
                            <li>Set a weekly budget that fits your needs</li>
                            <li>Get smart grocery lists tailored to your needs</li>
                            <li>Shop with purpose and skip the waste</li>
                        </ul>
                    </div>

                    {/* Mobile mockup – stacked under text */}
                    <div className="order-2 lg:hidden w-full flex justify-center mt-6">
                        <Image src="/Budget.png" alt="App Mockup" width={200} height={500} />
                    </div>
                </div>
            </div>
        </section>
)
}