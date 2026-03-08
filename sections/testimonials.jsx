import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);
    const data = [
        {
            review: 'Working with this designer was an absolute game-changer. The branding visuals exceeded our expectations and perfectly captured our vision!',
            name: 'Sarah Mitchell',
            about: 'CEO, TechFlow Inc.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
        },
        {
            review: 'The video editing was phenomenal! Professional, creative, and delivered exactly on time. Our promotional video has been a huge hit with our audience.',
            name: 'James Rodriguez',
            about: 'Marketing Director, Stellar Media',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
        },
        {
            review: 'Incredible attention to detail and a true understanding of our brand identity. The social media graphics have significantly boosted our engagement.',
            name: 'Emily Chen',
            about: 'Founder, Bloom Organics',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
        },
        {
            review: 'From concept to final delivery, the process was seamless. The motion graphics added exactly the dynamic touch our project needed!',
            name: 'Michael Thompson',
            about: 'Creative Director, Pixel Studios',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
        },
        {
            review: "Exceptional talent and creativity. The designs were fresh, modern, and perfectly aligned with our brand's aesthetic. Highly recommend!",
            name: 'Lisa Anderson',
            about: 'Brand Manager, Urban Trends',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
        },
        {
            review: 'Professional, responsive, and talented. The video content produced has become a cornerstone of our marketing strategy. Outstanding work!',
            name: 'David Park',
            about: 'VP of Marketing, NexGen Solutions',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
        },
    ];
    return (
        <section className="mt-32 flex flex-col items-center" id="testimonials">
            <SectionTitle
                title="What Clients Say"
                description="Feedback from brands and businesses I've had the pleasure of collaborating with."
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium text-sm">{item.about}</p>
                            <img className='size-10 rounded-full object-cover' src={item.image} alt={item.name} />
                        </div>
                        <p className='line-clamp-3'>"{item.review}"</p>
                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
