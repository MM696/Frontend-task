"use client";

import { 
  Mountain, 
  Video, 
  PenTool, 
  Zap, 
  Type, 
  Mic, 
  User, 
  Brain,
  ChevronDown
} from "lucide-react";

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  isNew?: boolean;
}

const features: FeatureCard[] = [
  {
    id: 1,
    icon: <Mountain className="w-6 h-6 text-white" />,
    iconBg: "bg-gray-400",
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    isNew: true
  },
  {
    id: 2,
    icon: <Video className="w-6 h-6 text-white" />,
    iconBg: "bg-yellow-500",
    title: "Video",
    description: "Generate videos with Halluo, Pika, Runway Luma, and more."
  },
  {
    id: 3,
    icon: <PenTool className="w-6 h-6 text-white" />,
    iconBg: "bg-blue-500",
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops."
  },
  {
    id: 4,
    icon: <Zap className="w-6 h-6 text-white" />,
    iconBg: "bg-gray-700",
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    isNew: true
  },
  {
    id: 5,
    icon: <Type className="w-6 h-6 text-white" />,
    iconBg: "bg-purple-500",
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    isNew: true
  },
  {
    id: 6,
    icon: <Mic className="w-6 h-6 text-white" />,
    iconBg: "bg-teal-500",
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    isNew: true
  },
  {
    id: 7,
    icon: <User className="w-6 h-6 text-white" />,
    iconBg: "bg-black",
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    isNew: true
  },
  {
    id: 8,
    icon: <Brain className="w-6 h-6 text-white" />,
    iconBg: "bg-orange-500",
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters."
  }
];

export default function GenerateSection() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Generate</h2>
        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <span className="text-sm font-medium">Show all</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 group "
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 mr-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 ${feature.iconBg} rounded-xl`}>
                    {feature.icon}
                  </div>
                  {feature.isNew && (
                    <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 mr-25 rounded-full font-semibold">
                      New
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 flex-shrink-0">
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
