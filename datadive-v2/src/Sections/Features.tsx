import FeatureCard from "../Components/FeatureCard";

const features_list = [
    {
        title: "Targeted Practice",
        description: "Focus on technical, behavioral, or case-based questions to sharpen your skills.",
        imageSrc: "/targeted-practice.svg"
    },
    {
        title: "AI-Powered Feedback",
        description: "Receive instant feedback on your answers to improve your performance.",
        imageSrc: "/ai-feedback.svg"
    },
    {
        title: "Progress Tracking",
        description: "Monitor your improvement over time with detailed analytics.",
        imageSrc: "/progress-tracking.svg"
    },
    {
        title: "Real Interview Simulation Scenarios",
        description: "Simulate real interview conditions to build confidence and reduce anxiety.",
        imageSrc: "/interview-simulation.svg"
    },
]

const Features = () => {
    return (
        <section className="py-16 px-6 max-w-screen-xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Features</h2>
            <p className="text-gray-600 text-center mb-12">
                Explore the powerful features designed to help you ace your data analyst interviews.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features_list.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        imageSrc={feature.imageSrc}
                    />
                ))}
            </div>
        </section>
    );
}

export default Features;