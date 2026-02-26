import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-deep-ocean pt-20 pb-10 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
                    {/* Branding */}
                    <div className="flex flex-col items-start">
                        <Link
                            href="/"
                            className="font-serif text-3xl text-white tracking-wide mb-4"
                        >
                            Lauren <em className="italic text-champagne">Strelau</em>
                        </Link>
                        <p className="font-sans text-sm text-white/40 max-w-xs leading-relaxed">
                            Artistic portraiture and timeless underwater photography, creating
                            museum-quality heirlooms for the bold and the beautiful.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-champagne/60 mb-2">
                            Navigate
                        </span>
                        {[
                            { href: "/", label: "Home" },
                            { href: "/portfolio", label: "Portfolio" },
                            { href: "/offerings", label: "Offerings" },
                            { href: "/contact", label: "Contact" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-sans text-sm text-white/60 hover:text-champagne transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-4">
                        <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-champagne/60 mb-2">
                            Connect
                        </span>
                        <a
                            href="https://www.instagram.com/laurenstrelau"
                            target="_blank"
                            rel="noopener"
                            className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-champagne transition-colors duration-300"
                        >
                            <Instagram size={16} />
                            @laurenstrelau
                        </a>
                        <a
                            href="mailto:hello@laurenstrelau.com"
                            className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-champagne transition-colors duration-300"
                        >
                            <Mail size={16} />
                            hello@laurenstrelau.com
                        </a>
                        <span className="flex items-center gap-3 font-sans text-sm text-white/40">
                            <MapPin size={16} />
                            Aspen, Colorado · Available Worldwide
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/20 to-transparent mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-xs text-white/30 tracking-wider">
                        © {new Date().getFullYear()} Lauren Strelau Photography. All rights
                        reserved.
                    </p>
                    <p className="font-sans text-xs text-white/20 tracking-wider">
                        Crafted with intention
                    </p>
                </div>
            </div>
        </footer>
    );
}
