import React from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const MicrophoneButton = ({ isListening, onClick, isSupported }) => {
  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
        isListening 
          ? 'bg-red-500 text-white animate-pulse shadow-lg' 
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
      aria-label={isListening ? 'Stop recording' : 'Start voice input'}
      title={isListening ? 'Stop recording' : 'Click to speak'}
    >
      {isListening ? (
        <FaMicrophone className="w-4 h-4" />
      ) : (
        <FaMicrophone className="w-4 h-4" />
      )}
    </button>
  );
};

export default MicrophoneButton;