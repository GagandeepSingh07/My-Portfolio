import SectionTitle from "@/components/section-title";
import { CheckIcon, PackageIcon, SparklesIcon, CrownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ServicePackages() {
    const ref = useRef([]);
    const data = [
        {
            icon: PackageIcon,
            title: 'Essential',
            description: 'Perfect for small projects and startups',
            price: '$299',
            buttonText: 'Get Started',
            features: [
                'Logo design or refresh',
                'Basic brand color palette',
                'Up to 5 social media graphics',
                'Business card design',
                '2 revision rounds',
                '5-7 day delivery'
            ],
        },
        {
            icon: SparklesIcon,
            title: 'Professional',
            description: 'Ideal for growing brands and businesses',
            price: '$799',
            mostPopular: true,
            buttonText: 'Get Started',
            features: [
                'Complete brand identity package',
                'Video editing (up to 3 min)',
                'Motion graphics & transitions',
                '15 custom social media templates',
                'Print & digital assets',
                '3 revision rounds',
                'Priority support',
                '10-14 day delivery'
            ],
        },
        {
            icon: CrownIcon,
            title: 'Premium',
            description: 'Comprehensive solution for enterprises',
            price: '$1,999',
            buttonText: 'Contact Me',
            features: [
                'Full brand strategy & guidelines',
                'Video production (up to 10 min)',
                'Advanced motion graphics & VFX',
                'Unlimited social media designs',
                'Website UI/UX design',
                'Unlimited revisions',
                'Dedicated project manager',
                '24/7 support',
                'Custom timeline'
            ],
        },
    ];

    return (
        <section className="mt-32" id="pricing">
            <SectionTitle
                title="Service Packages"
                description="Flexible packages designed to meet your creative needs, from essential branding to comprehensive multimedia solutions."
            />

            <div className='mt-12 flex flex-wrap items-stretch justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className='group w-full max-w-80 glass p-6 rounded-xl hover:-translate-y-0.5 flex flex-col'
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
                        <h3 className='mt-4 text-2xl font-semibold'>
                            {item.price} <span className='text-sm font-normal'>/project</span>
                        </h3>
                        <p className='text-gray-200 mt-3 min-h-12'>{item.description}</p>
                        <button className={`mt-7 rounded-md w-full btn ${item.mostPopular ? 'bg-white text-gray-800' : 'glass'}`}>
                            {item.buttonText}
                        </button>
                        <div className='mt-6 flex flex-col flex-grow'>
                            {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className='flex items-start gap-2 py-2'>
                                    <div className='rounded-full glass border-0 p-1 mt-0.5 shrink-0'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={3} />
                                    </div>
                                    <p className="text-sm leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
