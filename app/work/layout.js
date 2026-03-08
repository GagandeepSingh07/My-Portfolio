import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'My Work - Gagandeep Singh Portfolio',
    description: 'Explore my portfolio of graphic design, video editing, motion graphics, 3D work, and more.',
    appleWebApp: {
        title: 'Work Portfolio',
    },
};

export default function WorkLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
