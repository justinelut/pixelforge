import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="pt-24 md:mt-0 md:h-screen flex flex-col md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100 py-16 px-4">
            {/* Description */}
            <div className="max-w-md text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Justine Gichana</h1>
                <p className="text-lg font-medium mb-4">
                    Hi, I'm a web developer based in [your location]. I specialize in building beautiful and functional websites using modern technologies like React and Next.js.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">View CV</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-full">Contact Me</button>
                </div>
            </div>
            {/* Image */}
            <div className="max-w-md md:ml-12 mt-8 md:mt-0">
                <Image src="https://justinedev.verixr.com/media/word-design-written-top-colorful-geometric-3d-shapes_2227-1663-1.jpg" alt="Justine Gichana" width={600} height={400} className="rounded-lg" />
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
