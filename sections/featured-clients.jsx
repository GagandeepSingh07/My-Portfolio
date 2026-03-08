import { motion } from "framer-motion";

export default function FeaturedClients() {
    const logos = [
        '/assets/company-logo-1.svg',
        '/assets/company-logo-2.svg',
        '/assets/company-logo-3.svg',
        '/assets/company-logo-4.svg',
        '/assets/company-logo-5.svg',
    ]

    return (
        <motion.section className="mt-14" id="clients">
            <p className="py-6 mt-14 text-center">Trusted by amazing brands and creative studios —</p>

            <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4" id="logo-container">
                {logos.map((logo, index) => <img key={index} src={logo} alt="client logo" className="h-7 w-auto max-w-xs opacity-70 hover:opacity-100 transition-opacity" />)}
            </div>
        </motion.section>
    )
}
