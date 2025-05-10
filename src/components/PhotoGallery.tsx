import React, { useState } from 'react';
import { Upload, X, ArrowLeft } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  caption: string;
}

interface PhotoGalleryProps {
  onClose: () => void;
}

export function PhotoGallery({ onClose }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
      caption: 'Vintage camera'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
      caption: 'Film photography'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg',
      caption: 'Analog memories'
    }
  ]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // Simulate file upload
      const newPhoto: Photo = {
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        caption: file.name
      };
      setPhotos([newPhoto, ...photos]);
    } finally {
      setIsUploading(false);
    }
  };

  const removePhoto = (id: string) => {
    setPhotos(photos.filter(photo => photo.id !== id));
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
              src="/noun-lomo-lc-a-70634.svg"
              alt="Photos" 
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Photo Gallery</h1>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <label className="block">
            <div className="relative">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading}
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className={`flex items-center justify-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 cursor-pointer transition-colors ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Upload className="h-6 w-6 mr-2" />
                {isUploading ? 'Uploading...' : 'Add New Photo'}
              </label>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <button
              onClick={() => removePhoto(photo.id)}
              className="absolute top-2 right-2 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <p className="mt-2 text-sm text-white">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}