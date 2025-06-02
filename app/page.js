// app/page.js
'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Shield, Clock, Wrench, Sparkles, Building, Home, Menu, X } from 'lucide-react'; // Import Menu and X icons

// At the top of your HomePage component, or even outside if it's a static value
const svgBackground = `data:image/svg+xml,${encodeURIComponent(
  `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%2334d399" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></g></svg>`
)}`;

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    property: '',
    message: '',
    date: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    setIsLoading(true);

    // In a real application, you would send formData to your backend here
    // Example: const response = await fetch('/api/book-service', { method: 'POST', body: JSON.stringify(formData) });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        property: '',
        message: '',
        date: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  La Verde FM
                </h1>
                <p className="text-xs text-gray-500">Facility Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</button>
              <button
                onClick={() => scrollToSection('booking-form')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-green-100 py-4 pb-6 animate-fade-in-down">
            <nav className="flex flex-col items-center space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg"
              >
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">Contact</button>
              <button
                onClick={() => scrollToSection('booking-form')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold mt-2"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${svgBackground}")`, opacity: '0.3' }}></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block">
                    Facility Management
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Comprehensive maintenance and cleaning services for residential and commercial properties.
                  Your trusted partner for all facility management needs in Abu Dhabi.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm text-sm md:text-base">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  <span className="font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm text-sm md:text-base">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  <span className="font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm text-sm md:text-base">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  <span className="font-medium">24/7 Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('booking-form')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Quote
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-green-500 text-green-600 px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 md:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto lg:max-w-none">
                <div className="bg-white rounded-2xl p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Quick Stats</h3>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600">500+</div>
                      <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600">1000+</div>
                      <div className="text-xs md:text-sm text-gray-600">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600">5+</div>
                      <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-xs md:text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Wrench className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Maintenance Services",
                description: "Complete maintenance solutions including plumbing, electrical, HVAC, and general repairs for all types of properties.",
                features: ["Preventive Maintenance", "Emergency Repairs", "Equipment Servicing", "System Upgrades"]
              },
              {
                icon: <Sparkles className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Cleaning Services",
                description: "Professional cleaning services for residential and commercial spaces with eco-friendly products and modern equipment.",
                features: ["Deep Cleaning", "Regular Maintenance", "Sanitization", "Specialized Cleaning"]
              },
              {
                icon: <Building className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Commercial Solutions",
                description: "Comprehensive facility management for offices, retail spaces, and commercial buildings.",
                features: ["Office Maintenance", "Retail Cleaning", "Building Management", "Vendor Coordination"]
              },
              {
                icon: <Home className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Residential Services",
                description: "Tailored solutions for homes, apartments, and residential complexes with personalized care.",
                features: ["Home Maintenance", "Apartment Cleaning", "Garden Care", "Property Upkeep"]
              },
              {
                icon: <Shield className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Emergency Response",
                description: "24/7 emergency services for urgent maintenance and cleaning needs with rapid response times.",
                features: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "Crisis Management"]
              },
              {
                icon: <Users className="w-7 h-7 md:w-8 md:h-8" />,
                title: "Consultation",
                description: "Expert consultation services to optimize your facility management strategies and reduce costs.",
                features: ["Facility Assessment", "Cost Optimization", "Maintenance Planning", "Quality Control"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{service.description}</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Book Your Service</h2>
              <p className="text-lg md:text-xl text-gray-600">Get a free quote for your facility management needs</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              {isSubmitted && (
                <div className="mb-6 md:mb-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800 text-base md:text-lg">Booking Request Submitted!</h4>
                    <p className="text-green-600 text-sm md:text-base">We'll contact you within 24 hours to confirm your service.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-700">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Type *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="maintenance">Maintenance Services</option>
                      <option value="cleaning">Cleaning Services</option>
                      <option value="commercial">Commercial Solutions</option>
                      <option value="residential">Residential Services</option>
                      <option value="emergency">Emergency Response</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="property" className="text-sm font-semibold text-gray-700">Property Type *</label>
                    <select
                      id="property"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 text-base"
                    >
                      <option value="">Select property type</option>
                      <option value="residential-home">Residential - House</option>
                      <option value="residential-apartment">Residential - Apartment</option>
                      <option value="commercial-office">Commercial - Office</option>
                      <option value="commercial-retail">Commercial - Retail</option>
                      <option value="commercial-warehouse">Commercial - Warehouse</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 resize-none text-base"
                    placeholder="Describe your requirements in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 md:py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Get In Touch</h2>
              <p className="text-lg md:text-xl text-gray-600">Ready to transform your facility management experience?</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Baniyas Tower<br />
                  Office 02<br />
                  Abu Dhabi, UAE
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  +971 XX XXX XXXX<br />
                  <span className="text-xs md:text-sm text-green-600 font-medium">24/7 Emergency Line</span>
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  info@laverde-fm.ae<br />
                  <span className="text-xs md:text-sm text-green-600 font-medium">Quick Response</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  La Verde FM
                </h3>
                <p className="text-xs md:text-sm text-gray-400">Facility Management</p>
              </div>
            </div>
            <p className="text-gray-400 mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Your trusted partner for comprehensive facility management solutions.
              We maintain, we clean, we care for your spaces with excellence.
            </p>
            <div className="border-t border-gray-800 pt-5 md:pt-6">
              <p className="text-gray-500 text-xs md:text-sm">
                © 2025 La Verde Facility Management. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}