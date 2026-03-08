import SectionTitle from "@/components/section-title";
import { CheckIcon, CrownIcon, RocketIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
    const ref = useRef([]);
    const data = [
        {
            icon: RocketIcon,
            title: 'Starter',
            description: 'For individuals and small teams',
            price: '$19',
            buttonText: 'Get Started',
            features: [
                'Up to 10 projects',
                '10 AI tasks/month',
                'Basic text generation',
                'Simple chatbot access',
                'Email support only',
                'Community resources'
            ],
        },
        {
            icon: ZapIcon,
            title: 'Professional',
            description: 'For growing teams and startups',
            price: '$49',
            mostPopular: true,
            buttonText: 'Upgrade Now',
            features: [
                'Unlimited AI tasks',
                'API integration',
                'Text & image outputs',
                'Priority chat & email support',
                'Detailed analytics',
                'Team collaboration'
            ],
        },
        {
            icon: CrownIcon,
            title: 'Enterprise',
            description: 'For enterprises and agencies',
            price: '$149',
            buttonText: 'Contact Sales',
            features: [
                'Custom AI models',
                'Team access control',
                'Dedicated account manager',
                'Secure private API',
                'SLA uptime guarantee',
                '24/7 premium support'
            ],
        },
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Our Pricing Plans"
                description="A visual collection of our most recent works - each piece crafted with intention, emotion and style."
            />

            <div className='mt-12 flex flex-wrap items-stretch justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div key={index} className='group max-w-80 glass p-5 rounded-xl hover:-translate-y-0.5 transition duration-300 flex flex-col'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        ref={(el) => (ref.current[index] = el)}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                            <item.icon className='size-3.5' />
                            <span>{item.title}</span>
                        </div>
                        <h3 className='mt-4 text-3xl font-semibold'>
                            {item.price} <span className='text-base font-normal'>/month</span>
                        </h3>
                        <p className='text-gray-200 mt-2 text-sm'>{item.description}</p>
                        <button className={`mt-6 rounded-md w-full py-2.5 font-medium transition ${item.mostPopular ? 'bg-white text-gray-800 hover:bg-gray-100' : 'glass hover:bg-white hover:bg-opacity-20'}`}>
                            {item.buttonText}
                        </button>
                        <div className='mt-5 flex flex-col gap-1 flex-1'>
                            {item.features.map((feature, index) => (
                                <div key={index} className='flex items-start gap-2.5 py-1.5'>
                                    <div className='rounded-full glass border-0 p-1 flex-shrink-0 mt-0.5'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={3} />
                                    </div>
                                    <p className='text-xs text-gray-100'>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}