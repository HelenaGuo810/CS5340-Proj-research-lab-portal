import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import PositionPage from './components/PositionPage.js';
import ApplicationPage from './components/ApplicationPage.js';
import ApplicantDashboard from './components/ApplicationDashboard.js';
import ProfessorDashboard from './components/ProfessorDashboard.js';
import OnboardingPortal from './components/OnboardingPortal.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userRole, setUserRole] = useState('student');
  const [applicationId, setApplicationId] = useState(null);

  // Mock data for applications
  const [applications] = useState([
    { id: 1, name: 'Alex Chen', score: 92, gpa: 3.8, experience: 'ML Research Assistant, 2 publications', date: '2025-02-01', status: 'under_review', position: 'NLP Research Assistant' },
    { id: 2, name: 'Sarah Johnson', score: 88, gpa: 3.9, experience: 'Computer Vision project, GitHub contributions', date: '2025-02-02', status: 'interview', position: 'Computer Vision RA' },
    { id: 3, name: 'Michael Park', score: 85, gpa: 3.7, experience: 'Data Science internship, Python proficiency', date: '2025-02-03', status: 'awaiting_review', position: 'NLP Research Assistant' },
    { id: 4, name: 'Emma Wilson', score: 78, gpa: 3.6, experience: 'CS coursework, eager to learn', date: '2025-02-04', status: 'awaiting_review', position: 'Computer Vision RA' },
  ]);

  const [trialMembers] = useState([
    { id: 1, name: 'Jordan Lee', day: 3, progress: 60, mentor: 'Dr. Smith', tasksComplete: 8, tasksTotal: 13 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        userRole={userRole}
        setUserRole={setUserRole}
        applicationId={applicationId}
      />
      {currentScreen === 'home' && <HomePage setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'positions' && <PositionPage setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'application' && <ApplicationPage setCurrentScreen={setCurrentScreen} setApplicationId={setApplicationId} applications={applications} />}
      {currentScreen === 'dashboard' && <ApplicantDashboard applicationId={applicationId} />}
      {currentScreen === 'professor' && <ProfessorDashboard applications={applications} />}
      {currentScreen === 'onboarding' && <OnboardingPortal trialMembers={trialMembers} />}
    </div>
  );
}


