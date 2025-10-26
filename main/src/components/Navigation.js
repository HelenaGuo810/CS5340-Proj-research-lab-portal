import React from 'react';
import { Bell } from 'lucide-react';

export default function Navigation({ currentScreen, setCurrentScreen, userRole, setUserRole, applicationId }) {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => setCurrentScreen('home')}>
              AI Research Lab
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => setCurrentScreen('home')} className="hover:text-teal-300 transition">
                Research
              </button>
              <button onClick={() => setCurrentScreen('positions')} className="hover:text-teal-300 transition">
                Positions
              </button>
              {userRole === 'student' && applicationId && (
                <button onClick={() => setCurrentScreen('dashboard')} className="hover:text-teal-300 transition">
                  My Application
                </button>
              )}
              {userRole === 'professor' && (
                <button onClick={() => setCurrentScreen('professor')} className="hover:text-teal-300 transition">
                  Review
                </button>
              )}
              {userRole === 'member' && (
                <button onClick={() => setCurrentScreen('onboarding')} className="hover:text-teal-300 transition">
                  Onboarding
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 cursor-pointer hover:text-teal-300" />
            <div className="flex gap-2">
              <button 
                onClick={() => setUserRole('student')} 
                className={`px-3 py-1 rounded text-sm ${userRole === 'student' ? 'bg-teal-600' : 'bg-blue-800'}`}
              >
                Student
              </button>
              <button 
                onClick={() => setUserRole('professor')} 
                className={`px-3 py-1 rounded text-sm ${userRole === 'professor' ? 'bg-teal-600' : 'bg-blue-800'}`}
              >
                Professor
              </button>
              <button 
                onClick={() => setUserRole('member')} 
                className={`px-3 py-1 rounded text-sm ${userRole === 'member' ? 'bg-teal-600' : 'bg-blue-800'}`}
              >
                Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}