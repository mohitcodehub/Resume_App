import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import VoiceInput from "./VoiceInput";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const handleVoiceInput = (index, fieldName, transcript) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][fieldName] = transcript;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <VoiceInput onTranscript={(transcript) => handleVoiceInput(index, 'name', transcript)}>
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              className="w-full other-input pr-12"
              value={project.name}
              onChange={(e) => handleProjects(e, index)}
            />
          </VoiceInput>
          <VoiceInput onTranscript={(transcript) => handleVoiceInput(index, 'link', transcript)}>
            <input
              type="text"
              placeholder="Link"
              name="link"
              className="w-full other-input pr-12"
              value={project.link}
              onChange={(e) => handleProjects(e, index)}
            />
          </VoiceInput>
          <VoiceInput onTranscript={(transcript) => handleVoiceInput(index, 'description', transcript)}>
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-full other-input h-32 pr-12"
              value={project.description}
              maxLength="250"
              onChange={(e) => handleProjects(e, index)}
            />
          </VoiceInput>
          <VoiceInput onTranscript={(transcript) => handleVoiceInput(index, 'keyAchievements', transcript)}>
            <textarea
              type="text"
              placeholder="Key Achievements"
              name="keyAchievements"
              className="w-full other-input h-40 pr-12"
              value={project.keyAchievements}
              onChange={(e) => handleProjects(e, index)}
            />
          </VoiceInput>
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={removeProjects}
      />
    </div>
  );
};

export default Projects;
