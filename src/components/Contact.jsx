// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] w-full items-center justify-center py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-6 p-8 max-w-2xl mx-auto"
      >
        <h1 className="text-center text-4xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        
        <p className="text-center text-lg text-gray-400 leading-relaxed">
          Have a project in mind or want to discuss opportunities?
          Feel free to reach out—I'm always open to interesting conversations
          and new challenges.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <a
            href="mailto:paraschamoli2592002@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2"
          >
            Send Email
          </a>
          
          <a
            href="https://www.linkedin.com/in/paras-chamoli-87b89528b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-xl font-medium hover:bg-[#112240] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-2"
          >
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 w-full">
          <p className="text-center text-gray-500 text-sm">
           <br /> © {new Date().getFullYear()} Paras Chamoli. All rights reserved.
            <br />
          
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;