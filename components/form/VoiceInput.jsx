import React, { useEffect } from 'react';
import useSpeechToText from '../../hooks/useSpeechToText';
import MicrophoneButton from './MicrophoneButton';

const VoiceInput = ({ children, onTranscript, inputRef }) => {
  const { isListening, transcript, isSupported, startListening, stopListening, resetTranscript } = useSpeechToText();

  useEffect(() => {
    if (transcript && onTranscript) {
      onTranscript(transcript);
      resetTranscript();
    }
  }, [transcript, onTranscript, resetTranscript]);

  const handleMicrophoneClick = () => {
    if (isListening) {
      stopListening();
    } else {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
      startListening();
    }
  };

  return (
    <div className="relative">
      {children}
      <MicrophoneButton
        isListening={isListening}
        onClick={handleMicrophoneClick}
        isSupported={isSupported}
      />
    </div>
  );
};

export default VoiceInput;