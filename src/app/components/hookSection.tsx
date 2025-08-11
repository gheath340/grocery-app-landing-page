import Image from 'next/image';
import WaitlistForm from './waitlistForm';

export default function HookSection() {

    return (
        <section className="relative pt-10 lg:pt-0 w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-30 flex flex-col lg:flex-row items-center lg:justify-between gap-12">

                {/* LEFT COLUMN – Hero Text and Waitlist Form */}
                <div className="w-full lg:w-[570px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:h-[500px]">
                
                    {/* Hero Text */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Meals made simple. <br />
                            <span className="text-[#66afb5]">Savings made easy.</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
                            Eat better, spend smarter, and stay on track without the hassle.
                        </p>
                    </div>

                    {/* Mobile mockup – above form on mobile, hidden on desktop */}
                    <div className="order-2 lg:hidden w-full flex justify-center mt-6">
                        <Image src="/Home.jpg" alt="App Mockup" width={200} height={500} />
                    </div>

                    {/* Waitlist Form – under mockup on mobile, under text on desktop */}
                    <div className="order-3 lg:order-2 mt-6 w-full flex justify-center lg:justify-start lg:pr-8">
                        <WaitlistForm />
                    </div>
                </div>

                {/* RIGHT COLUMN – App image only shown on desktop */}
                <div className="hidden lg:flex flex-1 justify-center max-w-sm">
                    <Image src="/Home.jpg" alt="App Mockup" width={250} height={500} unoptimized />
                </div>
            </div>
        </section>
)

}