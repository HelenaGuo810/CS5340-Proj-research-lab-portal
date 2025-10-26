import React, { useState } from 'react';
import { CheckCircle, Clock, Mail, MessageSquare, Github, FileText, Calendar, AlertCircle, Users, ChevronRight, ChevronDown } from 'lucide-react';

export default function OnboardingPortal({ trialMembers }) {
  const member = trialMembers[0];
  const [expandedSection, setExpandedSection] = useState('week1');

  const tasks = {
    setup: [
      { id: 1, title: 'Slack workspace joined', complete: true },
      { id: 2, title: 'GitHub organization access granted', complete: true },
      { id: 3, title: 'Google Drive folder shared', complete: true },
      { id: 4, title: 'Lab calendar added', complete: true },
    ],
    week1: [
      { id: 5, title: 'Read lab handbook', complete: true },
      { id: 6, title: 'Complete safety training', complete: true },
      { id: 7, title: 'Meet with mentor', complete: true },
      { id: 8, title: 'Set up development environment', complete: false },
      { id: 9, title: 'Review current project documentation', complete: false },
    ],
    week2: [
      { id: 10, title: 'Attend lab meeting', complete: false },
      { id: 11, title: 'Complete first coding task', complete: false },
      { id: 12, title: 'Set up experiment tracking', complete: false },
      { id: 13, title: 'Review related papers', complete: false },
    ],
    week34: [
      { id: 14, title: 'Present progress at lab meeting', complete: false },
      { id: 15, title: 'Submit first pull request', complete: false },
      { id: 16, title: 'Complete mini-project milestone', complete: false },
      { id: 17, title: 'Peer review session', complete: false },
      { id: 18, title: 'Mid-trial check-in with professor', complete: false },
      { id: 19, title: 'Document learnings and challenges', complete: false },
    ],
  };

  const allTasks = [...tasks.setup, ...tasks.week1, ...tasks.week2, ...tasks.week34];
  const completedCount = allTasks.filter(t => t.complete).length;
  const progressPercent = (completedCount / allTasks.length) * 100;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to the Lab, {member.name}! 🎉</h1>
          <div className="flex items-center gap-4">
            <div className="text-lg">Trial Period Progress</div>
            <div className="flex-1 bg-white/20 rounded-full h-3">
              <div 
                className="bg-teal-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(member.day / 30) * 100}%` }}
              />
            </div>
            <div className="text-lg font-semibold">Day {member.day} of 30</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Onboarding Progress</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{completedCount} of {allTasks.length} tasks complete</span>
                  <span className="font-medium">{Math.round(progressPercent)}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Checklist Sections */}
            <div className="space-y-4">
              {/* Account Setup */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'setup' ? null : 'setup')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h3 className="font-semibold text-lg">Account Setup</h3>
                    <span className="text-sm text-gray-500">(Complete)</span>
                  </div>
                  {expandedSection === 'setup' ? <ChevronDown /> : <ChevronRight />}
                </button>
                {expandedSection === 'setup' && (
                  <div className="px-6 pb-4 space-y-2">
                    {tasks.setup.map(task => (
                      <div key={task.id} className="flex items-center gap-3 py-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{task.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Week 1 */}
              <div className="bg-white rounded-lg shadow overflow-hidden border-2 border-blue-500">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'week1' ? null : 'week1')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600 animate-pulse" />
                    <h3 className="font-semibold text-lg">Week 1 Tasks</h3>
                    <span className="text-sm text-gray-500">(3 of 5 complete)</span>
                  </div>
                  {expandedSection === 'week1' ? <ChevronDown /> : <ChevronRight />}
                </button>
                {expandedSection === 'week1' && (
                  <div className="px-6 pb-4 space-y-2">
                    {tasks.week1.map(task => (
                      <div key={task.id} className="flex items-center gap-3 py-2">
                        {task.complete ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span className={task.complete ? 'text-gray-700' : 'text-gray-900 font-medium'}>
                          {task.title}
                        </span>
                        {!task.complete && (
                          <button className="ml-auto text-blue-600 text-sm hover:text-blue-700">
                            Start →
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Week 2 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'week2' ? null : 'week2')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    <h3 className="font-semibold text-lg">Week 2 Tasks</h3>
                    <span className="text-sm text-gray-500">(0 of 4 complete)</span>
                  </div>
                  {expandedSection === 'week2' ? <ChevronDown /> : <ChevronRight />}
                </button>
                {expandedSection === 'week2' && (
                  <div className="px-6 pb-4 space-y-2">
                    {tasks.week2.map(task => (
                      <div key={task.id} className="flex items-center gap-3 py-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        <span className="text-gray-600">{task.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Week 3-4 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'week34' ? null : 'week34')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    <h3 className="font-semibold text-lg">Week 3-4 Tasks</h3>
                    <span className="text-sm text-gray-500">(0 of 6 complete)</span>
                  </div>
                  {expandedSection === 'week34' ? <ChevronDown /> : <ChevronRight />}
                </button>
                {expandedSection === 'week34' && (
                  <div className="px-6 pb-4 space-y-2">
                    {tasks.week34.map(task => (
                      <div key={task.id} className="flex items-center gap-3 py-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        <span className="text-gray-600">{task.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Access */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Quick Access
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-50 transition">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm">Slack</div>
                    <div className="text-xs text-gray-500">3 unread</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition">
                  <Github className="w-5 h-5 text-gray-800" />
                  <div>
                    <div className="font-medium text-sm">GitHub</div>
                    <div className="text-xs text-gray-500">nlp-project</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm">Shared Drive</div>
                    <div className="text-xs text-gray-500">Lab resources</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-medium text-sm">Lab Calendar</div>
                    <div className="text-xs text-gray-500">Next: Mon 2pm</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Mentor Card */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg shadow p-6 border border-teal-200">
              <h3 className="font-semibold mb-4">Your Mentor</h3>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  JL
                </div>
                <div>
                  <div className="font-semibold">Jordan Lee</div>
                  <div className="text-sm text-gray-600">3rd Year PhD</div>
                  <div className="text-xs text-gray-500 mt-1">Neural Architecture Search</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span>jordan.lee@university.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span>@jordan on Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span>Office Hours: Tues/Thurs 2-3pm</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded font-medium transition">
                Schedule Meeting
              </button>
            </div>

            {/* Upcoming Milestones */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Milestones
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3 py-2">
                  <div className="font-medium text-sm">Lab Meeting</div>
                  <div className="text-xs text-gray-600">Monday, 2:00 PM</div>
                </div>
                <div className="border-l-4 border-amber-500 pl-3 py-2">
                  <div className="font-medium text-sm">First Project Milestone</div>
                  <div className="text-xs text-gray-600">Due in 10 days</div>
                </div>
                <div className="border-l-4 border-red-500 pl-3 py-2">
                  <div className="font-medium text-sm">Trial Decision</div>
                  <div className="text-xs text-gray-600">Day 30 - Feb 28</div>
                </div>
              </div>
            </div>

            {/* Trial Period Alert */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 text-sm mb-1">Trial Period Active</h4>
                  <p className="text-xs text-amber-800">
                    You have {30 - member.day} days remaining in your trial period. 
                    Complete your tasks and demonstrate your contributions to secure a permanent position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}