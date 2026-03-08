import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import CustomCursor from '@/components/custom-cursor';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});

export const metadata = {
    title: 'Gagandeep Singh - Graphic Designer & Visual Storyteller',
    description: 'Portfolio showcasing graphic design, video editing, motion graphics, and web design work by Gagandeep Singh.',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={poppins.variable} suppressHydrationWarning>
                <LenisScroll />
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
