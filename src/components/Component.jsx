import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from './ui/button';

export function Component() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-20 flex items-center bg-black text-white">
                <Link to="#top" className="flex items-center justify-center">
                    <img src="/Luxor-logo.png" alt="Luxor Logo" className="h-10 w-auto sm:h-12 md:h-14 lg:h-12"/>
                    <span className="sr-only">Parc Luxor</span>
                </Link>
                <nav className="ml-auto hidden md:flex gap-6 sm:gap-8 lg:gap-10">
                    <Link smooth to="#about" className="text-sm font-medium text-white hover:underline underline-offset-4">
                        ABOUT
                    </Link>
                    <Link smooth to="#services" className="text-sm font-medium text-white hover:underline underline-offset-4">
                        SERVICES
                    </Link>
                    <Link smooth to="#approach" className="text-sm font-medium text-white hover:underline underline-offset-4">
                        APPROACH
                    </Link>
                    <Link smooth to="#contact" className="text-sm font-medium text-white hover:underline underline-offset-4">
                        CONTACT
                    </Link>
                </nav>
                <button
                    className="md:hidden ml-auto text-white"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Mobile Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </header>
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-black text-white p-4">
                    <Link
                        smooth to="#about"
                        className="block py-2 text-sm font-medium text-white hover:underline underline-offset-4"
                        onClick={toggleMobileMenu}
                    >
                        ABOUT
                    </Link>
                    <Link
                        smooth to="#services"
                        className="block py-2 text-sm font-medium text-white hover:underline underline-offset-4"
                        onClick={toggleMobileMenu}
                    >
                        SERVICES
                    </Link>
                    <Link
                        smooth to="#approach"
                        className="block py-2 text-sm font-medium text-white hover:underline underline-offset-4"
                        onClick={toggleMobileMenu}
                    >
                        APPROACH
                    </Link>
                    <Link
                        smooth to="#contact"
                        className="block py-2 text-sm font-medium text-white hover:underline underline-offset-4"
                        onClick={toggleMobileMenu}
                    >
                        CONTACT
                    </Link>
                </nav>
            )}
            <main className="flex-1 relative">
                <section id="top" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
                    {/*<video className="absolute top-0 left-0 w-full h-full object-cover brightness-50" autoPlay loop muted>*/}
                    {/*    <source src="/jumbotron-background.mp4" type="video/mp4"/>*/}
                    {/*    Your browser does not support the video tag.*/}
                    {/*</video>*/}
                    <div className="relative z-10 container mx-auto text-center px-4 md:px-6 max-w-2xl">
                        <div className="text-white">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading">
                                    SUSTAINABLE SOIL SOLUTIONS
                                </h1>
                                <p className="text-lg md:text-xl">
                                    At Parc Luxor, we are currently enhancing soil health through specialized treatments,
                                    preparing to expand our focus to include comprehensive agricultural development.
                                </p>
                                <Link
                                    smooth to="#contact"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-custom-gold-opaque hover:bg-custom-gold-hover px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    GET IN TOUCH
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="order-1 lg:order-2">
                                <img
                                    src="/who-we-are.png"
                                    width="550"
                                    height="310"
                                    alt="Parc Luxor Approach"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                            <div className="order-2 lg:order-1 space-y-4">
                                <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">ABOUT US</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    WHO WE ARE
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    At Parc Luxor, we specialize in receiving fine soils (clay, silt) that are
                                    non-contaminated and meet the strictest quality criteria, specifically those smaller
                                    than A, with a reception capacity of up to 300,000 tons.
                                </p>
                                <p className="text-muted-foreground md:text-xl">
                                    Located in an environment conducive to agriculture, our land offers ideal conditions
                                    for future agricultural activities. While our service focuses on receiving these
                                    non-contaminated soils, we envision a future where these lands can be used for
                                    innovative and sustainable agricultural projects.
                                </p>
                                <p className="text-muted-foreground md:text-xl">
                                    Join us in our mission of soil enhancement and responsible land management.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-light-grey">
                    <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">OUR SERVICES
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    TAILORED SOIL TREATMENT SOLUTIONS
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    We offer a range of soil treatment services to address your unique agricultural
                                    needs, from nutrient
                                    balancing to microbial inoculation and more.
                                </p>
                            </div>
                            <div className="grid gap-4">
                            <div className="bg-card p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold">Nutrient Balancing</h3>
                                    <p className="text-muted-foreground">
                                        Our experts analyze your soils composition and develop a customized plan to
                                        optimize nutrient
                                        levels for improved plant growth and yield.
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold">Microbial Inoculation</h3>
                                    <p className="text-muted-foreground">
                                        We introduce beneficial microorganisms to your soil, enhancing its overall
                                        health and promoting
                                        natural nutrient cycling.
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold">Soil Remediation</h3>
                                    <p className="text-muted-foreground">
                                        Our advanced techniques help restore degraded or contaminated soils,
                                        revitalizing their structure
                                        and fertility.
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold">Erosion Control</h3>
                                    <p className="text-muted-foreground">
                                        We implement sustainable solutions to prevent soil erosion, preserving your
                                        lands integrity and
                                        productivity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/approach.jpg"
                                    width="550"
                                    height="310"
                                    alt="Parc Luxor Approach"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                            <div className="order-1 lg:order-2 space-y-4">
                                <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">OUR APPROACH
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    DATA-DRIVEN, SUSTAINABLE SOLUTIONS
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    At Parc Luxor, we take a comprehensive, data-driven approach to soil treatment.
                                    By analyzing the
                                    unique characteristics of your land, we develop tailored solutions that promote
                                    long-term soil health
                                    and environmental sustainability.
                                </p>
                                <ul className="grid gap-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary"/>
                                        Detailed soil testing and analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary"/>
                                        Customized treatment plans
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary"/>
                                        Eco-friendly, sustainable practices
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary"/>
                                        Ongoing monitoring and optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-light-grey">
                    <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
                        <div className="space-y-4 text-center">
                            <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">FAQ</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FREQUENTLY ASKED
                                QUESTIONS</h2>
                            <div className="space-y-6">
                                <details className="bg-white p-4 rounded-lg shadow-lg">
                                    <summary className="font-medium text-lg cursor-pointer relative">What services do
                                        you offer?
                                    </summary>
                                    <p className="text-muted-foreground mt-2">
                                        We offer a range of soil treatment services including nutrient balancing,
                                        microbial inoculation, soil remediation, and erosion control.
                                    </p>
                                </details>
                                <details className="bg-white p-4 rounded-lg shadow-lg">
                                    <summary className="font-medium text-lg cursor-pointer relative">How do you analyze
                                        soil health?
                                    </summary>
                                    <p className="text-muted-foreground mt-2">
                                        Our experts conduct detailed soil testing and analysis to understand the unique
                                        characteristics of your soil and develop tailored treatment plans.
                                    </p>
                                </details>
                                <details className="bg-white p-4 rounded-lg shadow-lg">
                                    <summary className="font-medium text-lg cursor-pointer relative">What is microbial
                                        inoculation?
                                    </summary>
                                    <p className="text-muted-foreground mt-2">
                                        Microbial inoculation involves introducing beneficial microorganisms to the soil
                                        to enhance its overall health and promote natural nutrient cycling.
                                    </p>
                                </details>
                                <details className="bg-white p-4 rounded-lg shadow-lg">
                                    <summary className="font-medium text-lg cursor-pointer relative">How do you ensure
                                        sustainable practices?
                                    </summary>
                                    <p className="text-muted-foreground mt-2">
                                        We use eco-friendly and sustainable practices in all our soil treatment
                                        solutions to promote long-term soil health and environmental sustainability.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4 lg:order-1">
                                <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">GET IN TOUCH
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    HAVE A QUESTION? LET'S TALK.
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    Contact us today, and one of our soil experts will reach out to you shortly.
                                </p>
                                <p className="text-muted-foreground md:text-xl">
                    <span className="inline-flex items-center">
                        <i className="fa-solid fa-phone mr-4 text-grey text-3xl"></i>
                        <span className="flex flex-col">
                            <span className="text-base md:text-lg font-semibold">Phone</span>
                            <span className="text-sm md:text-base">+1 (123) 456-7890</span>
                        </span>
                    </span>
                                </p>
                                <p className="text-muted-foreground md:text-xl">
                    <span className="inline-flex items-center">
                        <i className="fa-solid fa-envelope mr-4 text-grey text-3xl"></i>
                        <span className="flex flex-col">
                            <span className="text-base md:text-lg font-semibold">Email</span>
                            <span className="text-sm md:text-base">contact@soil.com</span>
                        </span>
                    </span>
                                </p>
                                <p className="text-muted-foreground md:text-xl">
                    <span className="inline-flex items-center">
                        <i className="fa-solid fa-location-dot mr-4 text-grey text-3xl"></i>
                        <span className="flex flex-col">
                            <span className="text-base md:text-lg font-semibold">Location</span>
                            <span className="text-sm md:text-base">675-399 Rue Hervé S, Marguerite-D'Youville, QC J0L 1N0, Canada</span>
                        </span>
                    </span>
                                </p>
                                <Button
                                    type="submit"
                                    className="w-full inline-flex h-10 items-center justify-center rounded-md bg-custom-gold-opaque hover:bg-custom-gold-hover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    onClick={() => window.location.href = 'mailto:example@email.com?subject=Parc Luxor Enquiry'}
                                >
                                    Email us
                                </Button>
                            </div>
                            <div className="lg:order-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d865358.7522720977!2d-73.93523111948274!3d45.71948994653322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDM5JzU3LjciTiA3M8KwMTYnNDYuNiJX!5e0!3m2!1sfr!2sma!4v1723132280489!5m2!1sfr!2sma"
                                    width="100%"
                                    height="400"
                                    style={{border: 0, borderRadius: '8px'}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-black text-white p-6 md:py-12 w-full shrink-0 flex justify-center">
                <div className="text-center max-w-7xl flex justify-center gap-16 text-sm">
                    <div className="grid gap-1 text-center">
                        <h3 className="font-semibold">Company</h3>
                        <Link smooth to="#about" className="text-white">About Us</Link>
                        <Link smooth to="#approach" className="text-white">Our Team</Link>
                        <Link smooth to="#contact" className="text-white">Careers</Link>
                        <Link smooth to="#news" className="text-white">News</Link>
                    </div>
                    <div className="grid gap-1 text-center">
                        <h3 className="font-semibold">Services</h3>
                        <Link smooth to="#services" className="text-white">Nutrient Balancing</Link>
                        <Link smooth to="#services" className="text-white">Microbial Inoculation</Link>
                        <Link smooth to="#services" className="text-white">Soil Remediation</Link>
                        <Link smooth to="#services" className="text-white">Erosion Control</Link>
                    </div>
                    <div className="grid gap-1 text-center">
                        <h3 className="font-semibold">Legal</h3>
                        <Link smooth to="#privacy-policy" className="text-white">Privacy Policy</Link>
                        <Link smooth to="#terms-of-service" className="text-white">Terms of Service</Link>
                        <Link smooth to="#cookie-policy" className="text-white">Cookie Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c7a64c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    );
}
