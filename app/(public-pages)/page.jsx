'use client';

import HeroSection from '@/sections/hero-section';
import AboutSection from '@/sections/about-section';
import EducationSection from '@/sections/education-section';
import ExperienceSection from '@/sections/experience-section';
import Services from '@/sections/services';
import SkillsSection from '@/sections/skills-section';
import ProgrammingSection from '@/sections/programming-section';
import PortfolioSection from '@/sections/portfolio-section';
import ServicePackages from '@/sections/service-packages';
import Testimonials from '@/sections/testimonials';
import FaqSection from '@/sections/faq-section';
import CallToAction from '@/sections/call-to-action';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <AboutSection />
            <Services />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProgrammingSection />
            <PortfolioSection />
            {/* <Testimonials /> */}
            {/* <ServicePackages /> */}
            <FaqSection />
            <CallToAction />
        </main>
    );
}
