"use client";

import { FileText, DollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and brand */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            </div>
            <span className="text-white font-medium">Krea AI</span>
          </div>

          {/* Center-Right - Legal and Pricing */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Legal</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Pricing</span>
            </div>
          </div>

          {/* Right side - Curated by Mobbin */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">curated by</span>
            <span className="text-white font-medium">Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
