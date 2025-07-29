import Image from 'next/image';

const HowItWorks = () => {
    return (
        <section className="py-16 px-6 max-w-screen-xl mx-auto text-center mt-24">
            <h2 className="text-3xl font-bold mb-4">How DataDive Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Practice real data interview questions, get AI feedback, and track your progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <Image src="/questions.svg" alt="Choose Question Type" width={100} height={100} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1. Choose a Question Type</h3>
                    <p className="text-gray-500">Pick from technical, behavioral, or case-based questions.</p>
                </div>
                <div>
                    <Image src="/practice.svg" alt="Practice Answer" width={100} height={100} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2. Practice & Answer</h3>
                    <p className="text-gray-500">Type or speak your response to simulate real interviews.</p>
                </div>
                <div>
                    <Image src="/feedback.svg" alt="AI Feedback" width={100} height={100} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3. Get AI Feedback</h3>
                    <p className="text-gray-500">Receive instant feedback and track your improvements.</p>
                </div>
            </div>
            <div className="mt-12">
                <button className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-500">
                    Start Practicing Now
                </button>
            </div>
        </section>

    )
}

export default HowItWorks;