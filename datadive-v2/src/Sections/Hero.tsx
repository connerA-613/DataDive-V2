import Image from "next/image";

const Hero = () => {
    return (
        <div className=" max-w-screen-xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 mt-24">
            <div className="col-span-1 flex-col justify-center items-start p-8">
                <h1 className="text-6xl font-bold leading-tight">Ace Your Data Analyst Interviews with AI</h1>
                <p className="mt-2 text-lg py-2">Practice technical and behavioral questions tailored for success</p>
                <div className="flex gap-4 mt-4">
                    <button className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-500 hover:border text-white rounded">Generate a Question</button>
                    <button className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-500 hover:border text-white rounded">Sign Up</button>
                </div>
            </div>
            <div className="col-span-1 justify-center flex items-center">
                <Image className="flex w-full min-w-[500px] max-w-[750px]" src="/hero-image.png" alt="Hero Image" width={500} height={500} />
            </div>
        </div>
    );
}

export default Hero;