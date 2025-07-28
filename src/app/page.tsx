'use client';

import WaitlistForm from './components/waitlistForm';
import Image from 'next/image';


export default function Home() {

  return (
    // style={{ backgroundImage: "url('/bg1.jpg')" }}
     <div className="min-h-screen bg-cover bg-center bg-no-repeat">
      <section className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-25 flex flex-col lg:flex-row items-center lg:justify-between">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1 max-w-2xl text-center lg:text-left flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Meals made simple. <br />
                <span className="text-[#66afb5]">Savings made easy.</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
                Eat better, spend smarter, and stay on track. Without the hassle.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 mt-10 lg:mt-0 lg:ml-1 flex justify-center max-w-sm">
            <Image src="/app-mockup.jpg" alt={''} width={250} height={500} />
          </div>
        </div>
        {/* OPTIONAL BACKGROUND ACCENT */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-gray-50 to-[#f0fafa]" />
      </section>
    </div>
  );
};
