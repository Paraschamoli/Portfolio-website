// App.js
import React, { Suspense, lazy, useEffect } from 'react';
import LoadingSkeleton from "./components/LoadingSkeleton";

// Lazy load components for code splitting
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Tech = lazy(() => import("./components/Tech"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Security headers for production
const setSecurityHeaders = () => {
  if (process.env.NODE_ENV === 'production') {
    // Add security meta tags dynamically
    const metaTags = [
      { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https: data:; connect-src 'self' https:" },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
    ];
    
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([attr, value]) => {
        meta.setAttribute(attr, value);
      });
      document.head.appendChild(meta);
    });
  }
};

function App() {
  useEffect(() => {
    // Set security headers
    setSecurityHeaders();
    
    // Preload critical assets
    const preloadAssets = () => {
      const links = [
        { rel: 'preload', href: './image.jpg', as: 'image' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
      ];
      
      links.forEach(link => {
        const el = document.createElement('link');
        Object.entries(link).forEach(([key, value]) => {
          el.setAttribute(key, value);
        });
        document.head.appendChild(el);
      });
    };
    
    preloadAssets();
  }, []);

  return (
    <>
      {/* Deep Blue Gradient with performance optimized */}
      <div className="fixed -z-20 min-h-screen w-full bg-[#0a192f]"></div>
      <div className="fixed -z-10 min-h-screen w-full 
           bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f]
           will-change-transform">
      </div>
      
      {/* Optimized Stars Effect - Reduced number for performance */}
      <div className="fixed -z-10 min-h-screen w-full">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 4 + 2}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
              willChange: 'opacity'
            }}
          />
        ))}
      </div>
      
      <Suspense fallback={<LoadingSkeleton />}>
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </Suspense>
    </>
  );
}

// Export with memo for performance
export default React.memo(App);