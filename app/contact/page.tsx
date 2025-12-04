"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";

const ContactPage: React.FC = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = React.useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    script.onload = () => {
      // Give it a small delay to ensure widget renders
      setTimeout(() => setIsCalendlyLoaded(true), 500);
    };
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
            Let's Connect
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Ready to bring your vision to life? Book a call or send me an email
          </p>
        </motion.div>
      </section>

      {/* Content - Stacked Layout */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-accent/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-primary-accent" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                Book a Meeting
              </h2>
            </div>

            <p className="text-text-secondary mb-6">
              Schedule a 30-minute call to discuss your project
            </p>

            {/* Calendly Embed - Wider container for split view */}
            <div className="relative">
              {/* Loading Spinner */}
              {!isCalendlyLoaded && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ height: "700px" }}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary-accent/30 border-t-primary-accent rounded-full animate-spin"></div>
                    <p className="text-text-secondary">Loading calendar...</p>
                  </div>
                </div>
              )}
              
              {/* Calendly Widget */}
              <div
                className={`calendly-inline-widget transition-opacity duration-300 ${
                  isCalendlyLoaded ? "opacity-100" : "opacity-0"
                }`}
                data-url="https://calendly.com/omotolatomi01/30min"
                style={{ minWidth: "100%", height: "700px" }}
              />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-text-secondary font-medium">
                OR
              </span>
            </div>
          </div>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-primary-accent/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary-accent" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                Email Me
              </h2>
            </div>

            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Prefer to send an email directly? Click the button below to open your email client
            </p>

            {/* Email Button */}
            <motion.a
              href="mailto:omotolatomi01@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-button-bg hover:bg-hover text-button-text font-heading font-semibold py-5 px-10 rounded-xl transition-colors"
            >
              <Mail className="w-6 h-6" />
              omotolatomi01@gmail.com
            </motion.a>

            {/* <p className="mt-6 text-sm text-text-secondary">
              This will open your default email application
            </p> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;