"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
import { useState } from "react";

interface SocialCardProps {
  platform: string;
  followers: string;
  username: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  growth?: string;
}

export function SocialCard({ platform, followers, username, icon, color, bgColor, growth }: SocialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 text-center relative overflow-hidden">
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${bgColor}`}></div>
        
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          <div className={`${color} transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {icon}
          </div>
        </div>
        
        <h3 className={`font-bold text-gray-900 text-sm transition-colors duration-300 ${isHovered ? color.replace('text-', 'text-') : ''}`}>
          {platform}
        </h3>
        
        <div className="text-lg font-bold text-gray-800 mb-1">
          {followers}
        </div>
        
        <p className="text-xs text-gray-600 mb-2">@{username}</p>
        
        {growth && (
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
            <TrendingUp className="w-3 h-3 mr-1" />
            {growth}
          </Badge>
        )}
        
        <div className={`absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          <ExternalLink className="w-4 h-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
}