'use client';

import React, { useRef, useState } from 'react';
import { Image as ImageIcon, Upload, Loader2 } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

interface ImagePreviewProps {
  url: string;
  label?: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  url,
  label = 'Image URL',
  onChange,
  placeholder = 'https://images.unsplash.com/...'
}) => {
  const { siteSettings } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!siteSettings.imgbbApiKey) {
      alert("Please configure your ImgBB API Key in Global Settings first to enable image uploads.");
      return;
    }

    setIsUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${siteSettings.imgbbApiKey}`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        onChange(data.data.url);
      } else {
        throw new Error(data.error?.message || "Upload failed");
      }
    } catch (error: any) {
      alert("Failed to upload image: " + error.message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider">
          {label}
        </label>
        
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="text-[10px] flex items-center gap-1.5 bg-[#C8A45D]/10 hover:bg-[#C8A45D]/20 text-[#C8A45D] px-2 py-1 rounded transition-colors disabled:opacity-50"
        >
          {isUploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          className="hidden" 
        />
      </div>
      
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-lg bg-[#122848] border border-[#C8A45D]/30 flex items-center justify-center overflow-hidden shrink-0 group relative">
          {url ? (
            <img src={url} alt="Preview" className="w-full h-full object-cover" onError={(e) => {
              (e.target as HTMLImageElement).src = '';
            }} />
          ) : (
            <ImageIcon className="w-6 h-6 text-gray-500" />
          )}
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
        />
      </div>
    </div>
  );
};
