import React, { useState } from 'react';
import { Upload, X, ArrowLeft } from 'lucide-react';

interface TextFile {
  id: string;
  content: string;
  title: string;
}

interface TextGalleryProps {
  onClose: () => void;
}

export function TextGallery({ onClose }: TextGalleryProps) {
  const [textFiles, setTextFiles] = useState<TextFile[]>([
    {
      id: '1',
      content: 'The old typewriter sat quietly in the corner, its keys holding countless untold stories.',
      title: 'The Typewriter'
    },
    {
      id: '2',
      content: 'Analog photography captures more than just light - it captures the essence of time itself.',
      title: 'Thoughts on Film'
    }
  ]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const text = await file.text();
      const newTextFile: TextFile = {
        id: Date.now().toString(),
        content: text,
        title: file.name
      };
      setTextFiles([newTextFile, ...textFiles]);
    } finally {
      setIsUploading(false);
    }
  };

  const removeTextFile = (id: string) => {
    setTextFiles(textFiles.filter(file => file.id !== id));
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
              src="https://raw.githubusercontent.com/absullivan/kalligrm/refs/heads/main/public/noun-typewriter-942314.svg"
              alt="Texts" 
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Text Gallery</h1>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <label className="block">
            <div className="relative">
              <input
                type="file"
                className="hidden"
                accept=".txt,.md"
                onChange={handleFileChange}
                disabled={isUploading}
                id="text-upload"
              />
              <label
                htmlFor="text-upload"
                className={`flex items-center justify-center px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white/10 cursor-pointer transition-colors ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Upload className="h-6 w-6 mr-2" />
                {isUploading ? 'Uploading...' : 'Add New Text'}
              </label>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {textFiles.map((file) => (
          <div key={file.id} className="relative group bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <button
              onClick={() => removeTextFile(file.id)}
              className="absolute top-2 right-2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <h3 className="text-lg font-semibold text-white mb-2">{file.title}</h3>
            <div className="prose prose-sm">
              <p className="text-white whitespace-pre-wrap">{file.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}