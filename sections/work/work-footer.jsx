'use client';

import { ChevronUp } from 'lucide-react';

export default function WorkFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="email-container w-full py-4 flex justify-between items-center px-4 md:px-8">
                <p className="text-white text-lg md:text-xl font-medium cursor-pointer transition-opacity duration-300 hover:opacity-70">
                    Let's Work Together!
                </p>

                <button
                    onClick={scrollToTop}
                    className="scrolltotop hidden md:flex items-center gap-2 text-white transition-all duration-300 hover:text-cyan-400"
                >
                    <span className="text-sm">Scroll To Top</span>
                    <ChevronUp size={20} />
                </button>

                <form className="emailButton relative hidden md:flex gap-1">
                    <input
                        type="email"
                        id="emailInput"
                        placeholder="your-email@gmail.com"
                        className="h-10 rounded-full bg-white/5 w-80 outline-none border-none text-white px-8 placeholder:text-white/40"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-1 right-1.5 bg-purple-500 text-black text-xs font-medium px-6 py-2 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-70"
                    >
                        SUBMIT
                    </button>
                </form>

                <button
                    onClick={scrollToTop}
                    className="scrolltotopsvg md:hidden text-white hover:text-cyan-400"
                >
                    <ChevronUp size={24} />
                </button>
            </div>

            <div className="rectangle w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
        </>
    );
}
