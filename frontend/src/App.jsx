import React, { useState, useEffect } from 'react';
import Header from './core/Header';
import WorkspaceBar, { DOMAIN_PERSONA_MAP } from './core/WorkspaceBar';
import PersonaHero from './core/PersonaHero';
import NavigationTabs from './core/NavigationTabs';

// Domain Modules
import AmsDashboard from './domains/ai-for-ams/pages/AmsDashboard';
import WorkflowInbox from './domains/ai-for-ams/pages/WorkflowInbox';
import ExperienceZone from './domains/ai-for-ams/pages/ExperienceZone';
import EngineeringLeadersDomain from './domains/engineering-leaders/index';
import AiForAdDomain from './domains/ai-for-ad/index';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [selectedDomain, setSelectedDomain] = useState('AI for AMS');
  const [selectedRole, setSelectedRole] = useState('Head of AMS');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Toggle theme and update data-theme attribute on document root
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // When domain changes, automatically sync default role
  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
    const persona = DOMAIN_PERSONA_MAP[domain];
    if (persona) {
      setSelectedRole(persona.role);
    }
  };

  const currentPersona = DOMAIN_PERSONA_MAP[selectedDomain] || DOMAIN_PERSONA_MAP['AI for AMS'];

  return (
    <div className="app-container">
      {/* Universal Stellantis Brand Header */}
      <Header
        currentTheme={theme}
        toggleTheme={toggleTheme}
        activePersona={currentPersona}
        onPersonaChange={handleDomainChange}
      />

      <main className="main-content">
        {/* Workspace Active Status & Domain/Role Dropdowns */}
        <WorkspaceBar
          selectedDomain={selectedDomain}
          onDomainChange={handleDomainChange}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />

        {/* Persona Hero Context Banner & High-Level KPIs */}
        <PersonaHero
          selectedDomain={selectedDomain}
          selectedRole={selectedRole}
        />

        {/* Page Tabs */}
        <NavigationTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          inboxCount={selectedDomain === 'AI for AMS' ? 7 : 3}
        />

        {/* DOMAIN ROUTING WITH BOUNDARY ISOLATION */}
        {selectedDomain === 'AI for AMS' && (
          <>
            {activeTab === 'dashboard' && (
              <AmsDashboard
                onNavigateToInbox={() => setActiveTab('inbox')}
                onNavigateToExperience={() => setActiveTab('experience')}
              />
            )}
            {activeTab === 'inbox' && <WorkflowInbox />}
            {activeTab === 'experience' && <ExperienceZone />}
          </>
        )}

        {selectedDomain === 'Engineering leaders' && (
          <EngineeringLeadersDomain activeTab={activeTab} />
        )}

        {selectedDomain === 'AI for AD' && (
          <AiForAdDomain activeTab={activeTab} />
        )}
      </main>

      {/* SEL Nexus and AI Assistant removed as per product requirements */}

    </div>
  );
}
