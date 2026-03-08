import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Gagandeep Singh - Graphic Designer & Visual Storyteller',
    description: 'Portfolio of Gagandeep Singh - Entry-level graphic designer specializing in video editing, motion graphics, animation, and web design.',
    appleWebApp: {
        title: 'Gagandeep Singh Portfolio',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
