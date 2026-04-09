import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

const ProfilePhotoGuide = () => {
  const [showGuide, setShowGuide] = useState(true);

  if (!showGuide) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 max-w-sm bg-white rounded-lg shadow-xl p-6 border-2 border-blue-600 z-50"
    >
      <button
        onClick={() => setShowGuide(false)}
        className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <X size={20} className="text-gray-500" />
      </button>

      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
        <Upload size={20} className="text-blue-600" />
        Add Your Profile Photo
      </h3>

      <div className="space-y-3 text-sm text-gray-700">
        <p className="font-semibold">To add your profile picture:</p>

        <ol className="list-decimal list-inside space-y-2">
          <li>Find your best professional headshot photo</li>
          <li>Save it as <code className="bg-gray-100 px-2 py-1 rounded text-xs">profile.jpg</code></li>
          <li>Place it in: <code className="bg-gray-100 px-2 py-1 rounded text-xs block mt-1">public/profile.jpg</code></li>
          <li>Or create a <code className="bg-gray-100 px-2 py-1 rounded text-xs">public</code> folder if it doesn't exist</li>
        </ol>

        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="font-semibold text-blue-900 mb-2">Photo Tips:</p>
          <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
            <li>Use professional headshot (shoulders & face)</li>
            <li>Good lighting, clean background</li>
            <li>Square format works best (500x500px+)</li>
            <li>JPG or PNG format</li>
          </ul>
        </div>

        <p className="text-gray-600 italic">
          Your photo will appear in the Hero section for a professional touch!
        </p>
      </div>
    </motion.div>
  );
};

export default ProfilePhotoGuide;
