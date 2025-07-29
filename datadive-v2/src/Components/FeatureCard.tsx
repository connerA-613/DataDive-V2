

type FeatureCardProps = {
    title: string;
    description: string;
    imageSrc: string;
};

const FeatureCard = ({ title, description, imageSrc }: FeatureCardProps) => {
    return (
        <div className="bg-white border-4 border-black rounded-lg p-6 flex flex-col items-center">
            <img src={imageSrc} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
            <p className="text-gray-500 text-center">{description}</p>
        </div>
    );
}

export default FeatureCard;
