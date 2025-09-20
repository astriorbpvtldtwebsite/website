import React, { createContext, useContext, useState } from 'react';
import ProjectProgressModal from '../components/ProjectProgressModal';

const ProjectModalContext = createContext();

export const ProjectModalProvider = ({ children }) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <ProjectModalContext.Provider value={{ openProjectModal, closeProjectModal }}>
      {children}
      <ProjectProgressModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
      />
    </ProjectModalContext.Provider>
  );
};

export const useProjectModal = () => {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error('useProjectModal must be used within a ProjectModalProvider');
  }
  return context;
};