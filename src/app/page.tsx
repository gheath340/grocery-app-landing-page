'use client';

import WaitlistForm from './components/waitlistForm';
import Image from 'next/image';


export default function Home() {

  return (
     <div className="min-h-screen bg-white bg-cover bg-center bg-no-repeat">
      <section className="relative w-full pt-20 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
          {/* LEFT COLUMN – Hero Text and Waitlist Form */}
          <div className="w-full lg:w-[570px] lg:pt-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Hero Text */}
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Meals made simple. <br />
                <span className="text-[#66afb5]">Savings made easy.</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
                Eat better, spend smarter, and stay on track without the hassle.
              </p>
            </div>

            {/* App mockup image – shown below hero on mobile, floats right on desktop */}
            <div className="order-2 lg:order-2 w-full flex justify-center mt-6 lg:hidden">
              <Image src="/app-mockup.jpg" alt="App Mockup" width={200} height={500} />
            </div>

            {/* Waitlist Form */}
            <div className="order-3 lg:order-1 w-full flex justify-center lg:pr-8">
              <WaitlistForm />
            </div>
          </div>

          {/* RIGHT COLUMN – App image only shown on desktop */}
          <div className="hidden lg:flex flex-1 justify-center max-w-sm order-2">
            <Image src="/app-mockup.jpg" alt="App Mockup" width={250} height={500} />
          </div>
        </div>
      </section>
    </div>
  );
};
