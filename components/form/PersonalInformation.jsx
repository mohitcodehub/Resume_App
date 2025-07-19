import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import VoiceInput from "./VoiceInput";

const PersonalInformation = ({}) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);

  const handleVoiceInput = (fieldName, transcript) => {
    setResumeData({ ...resumeData, [fieldName]: transcript });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      <div className="grid-4">
        <VoiceInput onTranscript={(transcript) => handleVoiceInput('name', transcript)}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="pi pr-12"
            value={resumeData.name}
            onChange={handleChange}
          />
        </VoiceInput>
        <VoiceInput onTranscript={(transcript) => handleVoiceInput('position', transcript)}>
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            className="pi pr-12"
            value={resumeData.position}
            onChange={handleChange}
          />
        </VoiceInput>
        <VoiceInput onTranscript={(transcript) => handleVoiceInput('contactInformation', transcript)}>
          <input
            type="text"
            placeholder="Contact Information"
            name="contactInformation"
            className="pi pr-12"
            value={resumeData.contactInformation}
            onChange={handleChange}
            minLength="10"
            maxLength="15"
          />
        </VoiceInput>
        <VoiceInput onTranscript={(transcript) => handleVoiceInput('email', transcript)}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="pi pr-12"
            value={resumeData.email}
            onChange={handleChange}
          />
        </VoiceInput>
        <VoiceInput onTranscript={(transcript) => handleVoiceInput('address', transcript)}>
          <input
            type="text"
            placeholder="Address"
            name="address"
            className="pi pr-12"
            value={resumeData.address}
            onChange={handleChange}
          />
        </VoiceInput>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
