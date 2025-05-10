import React, { useState } from 'react';
import { Upload, X, ArrowLeft } from 'lucide-react';

interface Video {
  id: string;
  url: string;
  title: string;
}

interface VideoGalleryProps {
  onClose: () => void;
}

export function VideoGallery({ onClose }: VideoGalleryProps) {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
      title: 'Ocean waves'
    },
    {
      id: '2',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
      title: 'Yellow flowers'
    }
  ]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // Simulate file upload
      const newVideo: Video = {
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        title: file.name
      };
      setVideos([newVideo, ...videos]);
    } finally {
      setIsUploading(false);
    }
  };

  const removeVideo = (id: string) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="flex items-center text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back
          </button>
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-lomokino-camera-765557.svg"
              alt="Videos" 
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Video Gallery</h1>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <label className="block">
            <div className="relative">
              <input
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
                disabled={isUploading}
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className={`flex items-center justify-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 cursor-pointer transition-colors ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Upload className="h-6 w-6 mr-2" />
                {isUploading ? 'Uploading...' : 'Add New Video'}
              </label>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative group">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
              <video
                src={video.url}
                className="w-full h-full object-cover"
                controls
              />
            </div>
            <button
              onClick={() => removeVideo(video.id)}
              className="absolute top-2 right-2 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <p className="mt-2 text-sm text-white">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}