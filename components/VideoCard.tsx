"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Calendar } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  duration: string;
  views: string;
  timeAgo: string;
  thumbnail: string;
  category?: string;
}

export function VideoCard({ title, duration, views, timeAgo, thumbnail, category }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className={`aspect-video bg-gradient-to-br ${thumbnail} flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="text-center text-white relative z-10">
              <div className={`transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                <Play className="w-16 h-16 mx-auto mb-2 opacity-90 drop-shadow-lg" />
              </div>
              <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {duration}
              </Badge>
            </div>
          </div>
          <div className={`absolute inset-0 bg-black/0 transition-all duration-300 ${isHovered ? 'bg-black/20' : ''}`}></div>
          
          {category && (
            <Badge className="absolute top-3 right-3 bg-red-600 text-white text-xs">
              {category}
            </Badge>
          )}
          
          <div className={`absolute bottom-3 left-3 right-3 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            <div className="flex items-center gap-2 text-white text-xs bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
              <Calendar className="w-3 h-3 mr-1" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className={`font-bold text-gray-900 mb-2 text-sm leading-tight transition-all duration-300 ${isHovered ? 'text-red-600' : ''}`}>
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
            <span>{timeAgo}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}