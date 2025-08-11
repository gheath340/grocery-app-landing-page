import Image from 'next/image';

export default function RecipesSection() {

    return (
        <section id="recipes" className="relative w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-15 lg:py-30 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
            
            {/* LEFT COLUMN – Text */}
            <div className="w-full lg:w-[620px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:h-[500px] lg:pl-[calc((100%-1120px)/2px)]">

                <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#66afb5] leading-tight">
                    Curated Recipes. <br />
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-900 font-medium">
                    Affordable meals that keep you and your wallet happy.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside marker:text-gray-900 text-gray-900 text-base md:text-lg">
                            <li>Cook without overthinking, simple meals you'll actually enjoy</li>
                            <li>Discover simple, healthly recipes aligned with your goals</li>
                            <li>Skip the planning. Just pick, shop, and cook</li>
                </ul>
                </div>

                {/* Mobile mockup – stacked under text */}
                <div className="order-2 lg:hidden w-full flex justify-center mt-6">
                <Image src="/Recipes.jpg" alt="App Mockup" width={200} height={500} />
                </div>
            </div>

            {/* RIGHT COLUMN – Desktop mockup only */}
            <div className="hidden lg:flex flex-1 justify-center max-w-sm">
                <Image src="/Recipes.jpg" alt="App Mockup" width={250} height={500} unoptimized />
            </div>
            </div>
        </section>
)
}