"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

// Import your assets here
import heroImage from "../assets/THero.png";
import html from "../assets/htmlT.svg";
import css from "../assets/cssT.svg";
import js from "../assets/jsT.svg";
import react from "../assets/reactT.svg";
import tailwind from "../assets/tailwindT.svg";
import nodejs from "../assets/nodejsT.svg";
import wordpress from "../assets/wordpress-tile.svg";
import woocommerce from "../assets/woocommerce.svg";
import project1 from "../assets/witssdasm.png";
import project3 from "../assets/phapano.png";
import project2 from "../assets/fat-guys.jpg";
import commongrounds from "../assets/commongrounds.png";
import testimonial1 from "../assets/profile.jpg";
import testimonial2 from "../assets/profile.jpg";
import testimonial3 from "../assets/profile.jpg";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("wordpress");
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Refs for scroll animations
  const sectionRefs = {
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.keys(sectionRefs).forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      Object.keys(sectionRefs).forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Skills data
  const skills = [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: js, name: "JavaScript" },
    { icon: react, name: "React" },
    { icon: tailwind, name: "Tailwind CSS" },
    { icon: nodejs, name: "Node.js" },
    { icon: wordpress, name: "WordPress" },
  ];

  // Portfolio projects data
  const projects = {
    wordpress: [
      {
        title: "Wits SDASM Website",
        image: project1,
        description:
          "Wits SDASM Website is a dynamic and purpose-driven platform designed to serve the Seventh-day Adventist Student Movement at the University of the Witwatersrand.",
        technologies: ["WordPress", "Elementor", "Custom CSS"],
        link: "https://witssdasm.org.za/",
        target: "_blank", // This will make the link open in a new tab
      },
      {
        title: "Phapano NPO Website",
        image: project3,
        description:
          "hapano is a non-profit organisation founded in 2024 to support psychology students in South Africa through mentorship, community, and access to information and opportunities",
        technologies: ["WordPress", "ACF", "Elementor", "Custom Fields"],
        link: "https://phapano.com/",
        target: "_blank", // This will make the link open in a new tab
        rel: "noopener noreferrer", // Recommended for security with _blank
      },
    ],
    custom: [
      {
        title: "Campus Safety App",
        image: testimonial3,
        description:
          "Real-time campus security application with incident reporting.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://campus-safety.azurewebsites.net/",
        target: "_blank", // This will make the link open in a new tab
        rel: "noopener noreferrer", // Recommended for security with _blank
      },
      {
        title: "Residential Management",
        image: commongrounds,
        description:
          "Property management platform for sectional title bodies corporate.",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        link: "https://common-grounds-app.onrender.com/",
        target: "_blank", // This will make the link open in a new tab
      },
      {
        title: "3D Game Platform",
        image: project2,
        description:
          "Interactive 3D platformer game with physics and animations.",
        technologies: ["Three.js", "JavaScript", "HTML5", "CSS3"],
        link: "https://lamp.ms.wits.ac.za/~schickentendies/",
        target: "_blank", // This will make the link open in a new tab
      },
    ],
  };

  // Services data
  const services = [
    {
      title: "Starter Website",
      platform: "WordPress",
      description:
        "Perfect for blogs, portfolios, or personal brands looking to establish an online presence.",
      deliveryTime: "1-2 weeks",
      startingPrice: "R1,500",
      features: [
        "1-3 pages",
        "Responsive design",
        "Contact form",
        "Social media integration",
      ],
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "Business Website",
      platform: "WordPress",
      description:
        "Comprehensive solution for small businesses or services requiring more functionality.",
      deliveryTime: "2-3 weeks",
      startingPrice: "R3,000",
      features: [
        "5+ pages",
        "Blog functionality",
        "SEO optimization",
        "Google Analytics",
        "Content management",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Custom Code Website",
      platform: "HTML/CSS/JS",
      description:
        "Fully tailored website with complete design control and custom functionality.",
      deliveryTime: "3-4 weeks",
      startingPrice: "R4,500",
      features: [
        "Custom UI/UX design",
        "Advanced animations",
        "Performance optimization",
        "Custom functionality",
      ],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  // Pricing packages data
  const pricingPackages = [
    {
      name: "Starter",
      platform: "WordPress",
      features: ["1-3 pages", "Responsive design", "Contact form", "Basic SEO"],
      price: "R1,500",
      color: "border-teal-500",
      recommended: false,
    },
    {
      name: "Standard",
      platform: "WordPress",
      features: [
        "5+ pages",
        "Responsive design",
        "Contact form",
        "Blog functionality",
        "SEO optimization",
        "Google Analytics",
        "Content management",
      ],
      price: "R3,000",
      color: "border-blue-500",
      recommended: true,
    },
    {
      name: "Custom",
      platform: "HTML/CSS/JS",
      features: [
        "Fully custom design",
        "Responsive design",
        "Advanced animations",
        "Performance optimization",
        "Custom functionality",
        "SEO optimization",
      ],
      price: "R4,500",
      color: "border-purple-500",
      recommended: false,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: testimonial1,
      quote:
        "Thendo created a beautiful website for my business that perfectly captures our brand. The process was smooth, and he was always responsive to my feedback. I've received so many compliments on the design!",
    },
    {
      name: "Michael Ndlovu",
      role: "Photographer",
      image: testimonial2,
      quote:
        "As a photographer, I needed a portfolio that would showcase my work in the best light. Thendo delivered exactly what I needed - a clean, elegant site that puts my photos front and center. Highly recommended!",
    },
    {
      name: "Lerato Molefe",
      role: "Online Store Owner",
      image: testimonial3,
      quote:
        "Setting up my online store seemed daunting until I found Thendo. He made the entire process simple and created a professional eCommerce site that's easy to manage and has helped increase my sales significantly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2f1fd]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-xl font-bold text-gray-900 flex items-center gap-2 no-underline"
            >
              <p className="text-teal-500 no-underline">TR</p>
              <p className="hidden sm:inline no-underline">Thendo Ravhengani</p>
            </a>

            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection("home")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Services & Pricing 
              </button>
              {/* <button
                onClick={() => scrollToSection("pricing")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Pricing
              </button> */}
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Previous Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-2 px-4 py-2 text-sm font-medium bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              >
                Contact Me
              </button>
            </nav>

            {/* Mobile menu button - would need implementation */}
            <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-emerald-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-50 rounded-full">
                    Web Developer & Designer
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Building Beautiful, Functional Websites — Powered by Passion
                    & Code
                  </h1>
                  <p className="text-lg text-gray-700 max-w-[600px] leading-relaxed">
                    Hi, I'm Thendo Ravhengani. A Computer Science graduate and
                    freelance web developer. I create custom websites using
                    WordPress and JavaScript — let's build your online presence
                    together.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="/"
                      className="px-6 py-3 text-base no-underline font-medium bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2"
                    >
                      View My Portfolio
                      <ChevronRight size={18} />
                    </a>
                    <a
                      href="#services"
                      className="px-6 py-3 text-base no-underline font-medium bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      Get a Website
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto lg:ml-auto"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-white p-2 rounded-full shadow-xl">
                    <div className="rounded-full overflow-hidden border-4 border-white shadow-inner">
                      <img
                        src={
                          heroImage || "/placeholder.svg?height=400&width=400"
                        }
                        alt="Thendo Ravhengani"
                        width={400}
                        height={400}
                        className="rounded-full object-cover aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          ref={sectionRefs.about}
          className={`py-20 bg-white ${
            isVisible.about ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Who I Am
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a Computer Science graduate from the University of
                  Witwatersrand with a passion for creating beautiful,
                  functional websites. Currently pursuing my honours degree, I
                  balance my academic pursuits with freelance web development
                  projects.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey in web development began during my undergraduate
                  studies, where I discovered my love for turning ideas into
                  interactive digital experiences. I specialize in WordPress
                  development for businesses looking for professional websites,
                  as well as custom code solutions using modern JavaScript
                  frameworks like React.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What sets me apart is my commitment to clean code, attention
                  to detail, and focus on creating websites that not only look
                  great but also perform exceptionally well, and deliver a
                  product that my clients love. I believe in building long-term
                  relationships with my clients, providing ongoing support and
                  guidance.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Technical Skills
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="grid grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-2">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/#education" className=" block no-underline mt-3">
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                    <p className="text-gray-700">
                      <span className="font-medium">BSc Honors in Computer Science</span>
                      <br />
                      University of Witwatersrand
                      <br />
                      2025 -  (Current)
                    </p>
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          ref={sectionRefs.services}
          className={`py-20 bg-gray-50 ${
            isVisible.services ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Website Services I Provide
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[800px] text-gray-700 text-lg">
                From simple portfolio sites to full-featured eCommerce
                platforms, I offer a range of web development services tailored
                to your specific needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${service.color}`}
                  ></div>  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      Platform: {service.platform}
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700 mr-2">
                          Delivery:
                        </span>
                        <span className="text-sm text-gray-600">
                          {service.deliveryTime}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700 mr-2">
                          Starting at:
                        </span>
                        <span className="text-sm font-bold text-teal-600">
                          {service.startingPrice}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <svg
                              className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className={`w-full py-2 text-sm font-medium text-white bg-gradient-to-r ${service.color} rounded-lg hover:opacity-90 transition-opacity`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              * Prices exclude domain registration and hosting fees.
            </p>
          </div>
        </section>
        {/* Pricing Section */}
        {/* <section
          id="pricing"
          ref={sectionRefs.pricing}
          className={`py-20 bg-gray-50 ${
            isVisible.pricing ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Website Packages & Pricing
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[800px] text-gray-700 text-lg">
                Transparent pricing with no hidden fees. Choose the package that
                best suits your needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {pricingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                    pkg.color
                  } overflow-hidden flex flex-col ${
                    pkg.recommended ? "md:-translate-y-4" : ""
                  }`}
                >
                  {pkg.recommended && (
                    <div className="bg-teal-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {pkg.name}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      Platform: {pkg.platform}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-6">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className={`w-full py-3 text-sm font-medium ${
                        pkg.recommended
                          ? "text-white bg-teal-500 hover:bg-teal-600"
                          : "text-teal-600 bg-white border border-teal-500 hover:bg-teal-50"
                      } rounded-lg transition-colors`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 italic">
                Need a custom solution? Contact me for eCommerce, redesigns, or
                custom features.
              </p>
            </div>
          </div>
        </section> */}

        {/* Previous Work Section */}
        <section
          id="portfolio"
          ref={sectionRefs.portfolio}
          className={`py-20 bg-white ${
            isVisible.portfolio ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Previous Work
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[800px] text-gray-700 text-lg">
                Browse through my recent projects to see examples of my work and
                the range of websites I've created.
              </p>
            </div>

            {/* Previous Work Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("wordpress")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === "wordpress"
                      ? "bg-white text-teal-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  WordPress Projects
                </button>
                <button
                  onClick={() => setActiveTab("custom")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === "custom"
                      ? "bg-white text-teal-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Custom Code Projects
                </button>
              </div>
            </div>

            {/* Previous Work */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {projects[activeTab].map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={
                        project.image || "/placeholder.svg?height=200&width=400"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/"
                className="inline-flex items-center no-underline gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                View All Projects
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          ref={sectionRefs.testimonials}
          className={`py-20 bg-white ${
            isVisible.testimonials ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  What My Clients Say
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 p-8 md:p-12 shadow-sm">
                <div className="absolute top-0 left-0 w-20 h-20 text-teal-200 opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-20 h-20"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>

                <div className="relative z-10">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${
                        activeTestimonial === index
                          ? "block opacity-100"
                          : "hidden opacity-0"
                      }`}
                    >
                      <blockquote className="text-xl text-gray-700 italic mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white">
                          <img
                            src={
                              testimonial.image ||
                              "/placeholder.svg?height=50&width=50"
                            }
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index
                        ? "bg-teal-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    } transition-colors`}
                    aria-label={`View testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={sectionRefs.contact}
          className={`py-20 bg-gray-50 ${
            isVisible.contact ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Let's Work Together
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[800px] text-gray-700 text-lg">
                Ready to start your project? Get in touch and let's discuss how
                I can help bring your vision to life.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 mt-12">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email Me</h3>
                    <a
                      href="mailto:thendorav@gmail.com"
                      className="text-teal-600 hover:underline"
                    >
                      thendorav@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/27622154782"
                      className="text-teal-600 hover:underline"
                    >
                      +27 62 215 4782
                    </a>
                  </div>
                </div>

                {/* <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Schedule a Call
                    </h3>
                    <a href="#" className="text-teal-600 hover:underline">
                      Book a 30-minute consultation
                    </a>
                  </div>
                </div> */}

                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/thendo-ravhengani-b170982bb/"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  <a
                    href="https://github.com/ThendoRavi"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* <div className="md:col-span-3">
                <form className="bg-white rounded-xl shadow-md p-6">
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="budget"
                        className="text-sm font-medium text-gray-700"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="">Select your budget</option>
                        <option value="1000-3000">R1,000 - R3,000</option>
                        <option value="3000-5000">R3,000 - R5,000</option>
                        <option value="5000-10000">R5,000 - R10,000</option>
                        <option value="10000+">R10,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div> */}

              
            <ContactForm />

              
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-teal-400 mr-2">TR</span>
                Thendo Ravhengani
              </div>
              <p className="text-gray-400 max-w-md">
                Building beautiful, functional websites powered by passion and
                code. Let's create something amazing together.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    Services & Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    Previous Work
                  </button>
                </li>
                <li>
                  {/* <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    Pricing
                  </button> */}
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-teal-400"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/thendo-ravhengani-b170982bb/"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ThendoRavi"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:thendorav@gmail.com"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Thendo Ravhengani. All rights
              reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-teal-400">
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-600">•</span>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
