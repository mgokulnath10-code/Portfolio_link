import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [selectedProject, setSelectedProject] = useState(null);

  const value = {
    loading,
    setLoading,

    sidebarOpen,
    setSidebarOpen,

    activeSection,
    setActiveSection,

    selectedProject,
    setSelectedProject,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}