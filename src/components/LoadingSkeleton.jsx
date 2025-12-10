// components/LoadingSkeleton.js
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen w-full px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f]">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Navbar Skeleton */}
        <div className="h-16 bg-[#112240]/50 rounded-lg animate-pulse"></div>
        
        {/* Hero Skeleton */}
        <div className="flex flex-col items-center gap-8 py-12">
          <div className="w-64 h-64 bg-[#112240]/50 rounded-full animate-pulse"></div>
          <div className="space-y-4 w-full max-w-2xl">
            <div className="h-12 bg-[#112240]/50 rounded-lg animate-pulse"></div>
            <div className="h-8 bg-[#112240]/50 rounded-lg animate-pulse w-48 mx-auto"></div>
            <div className="h-24 bg-[#112240]/50 rounded-lg animate-pulse"></div>
          </div>
        </div>
        
        {/* Tech Skeleton */}
        <div className="space-y-8 py-12">
          <div className="h-12 bg-[#112240]/50 rounded-lg w-48 mx-auto animate-pulse"></div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-24 bg-[#112240]/50 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
        
        {/* Projects Skeleton */}
        <div className="space-y-8 py-12">
          <div className="h-12 bg-[#112240]/50 rounded-lg w-48 animate-pulse"></div>
          <div className="space-y-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 h-64 bg-[#112240]/50 rounded-xl animate-pulse"></div>
                <div className="md:w-1/2 space-y-4">
                  <div className="h-8 bg-[#112240]/50 rounded-lg animate-pulse"></div>
                  <div className="h-20 bg-[#112240]/50 rounded-lg animate-pulse"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="h-8 w-20 bg-[#112240]/50 rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                  <div className="h-10 bg-[#112240]/50 rounded-lg animate-pulse w-32 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Skeleton */}
        <div className="flex flex-col items-center justify-center gap-8 py-12">
          <div className="h-12 bg-[#112240]/50 rounded-lg w-64 animate-pulse"></div>
          <div className="h-20 bg-[#112240]/50 rounded-lg w-full max-w-2xl animate-pulse"></div>
          <div className="h-12 bg-[#112240]/50 rounded-lg w-48 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;