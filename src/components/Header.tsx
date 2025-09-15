"use client";

import { 
  Home, 
  Image, 
  Video, 
  PenTool, 
  Pencil, 
  Type, 
  Square, 
  GalleryVertical, 
  Headphones, 
  Bell, 
  ChevronDown,
  User
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-background text-foreground border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 h-auto sm:h-16 py-2 sm:py-0">
          
          {/* Left side - Logo and user profile */}
          <div className="flex items-center justify-between sm:justify-start space-x-3 sm:space-x-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs sm:text-sm font-medium text-foreground">
                benevolentnimblebat
              </span>
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
            </div>
          </div>

          {/* Center - Navigation icons */}
          <div className="flex items-center justify-center flex-wrap gap-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-1">
            <button className="p-1.5 sm:p-2 rounded-lg bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            {[Image, Video, PenTool, Pencil, Type, Square].map((Icon, idx) => (
              <button
                key={idx}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            ))}
          </div>

          {/* Right side - Gallery, Support, Notifications, Theme toggle, User avatar */}
          <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-2 text-foreground cursor-pointer transition-colors">
              <GalleryVertical className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">Gallery</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-foreground cursor-pointer transition-colors">
              <Headphones className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">Support</span>
            </div>
            <button className="p-1.5 sm:p-2 rounded-lg text-foreground transition-colors">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <ThemeToggle />
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
