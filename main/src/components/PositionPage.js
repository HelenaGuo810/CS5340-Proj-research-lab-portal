import React from 'react';
import { Filter, Clock } from 'lucide-react';

export default function PositionsPage({ setCurrentScreen }) {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Open Positions</h1>
          <p className="text-gray-600">Join our research team - Applications close March 15, 2026</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Research Area</label>
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>All Areas</option>
                    <option>NLP</option>
                    <option>Computer Vision</option>
                    <option>Reinforcement Learning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time Commitment</label>
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>Any</option>
                    <option>10-15 hrs/week</option>
                    <option>15-20 hrs/week</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Position Listings */}
          <div className="md:col-span-3 space-y-6">
            {[
              {
                title: 'Research Assistant - Natural Language Processing',
                commitment: '10-15 hrs/week | Flexible schedule | Spring 2026',
                requirements: ['Python proficiency', 'ML coursework completed', 'Strong mathematical background'],
                responsibilities: 'Work on transformer models and language understanding tasks',
                gain: 'Hands-on NLP experience, potential co-authorship, conference attendance',
                applicants: 28
              },
              {
                title: 'Research Assistant - Computer Vision',
                commitment: '15-20 hrs/week | Flexible schedule | Spring 2026',
                requirements: ['PyTorch/TensorFlow experience', 'Computer Vision coursework', 'Strong coding skills'],
                responsibilities: 'Develop and test novel image recognition architectures',
                gain: 'Publication opportunities, GPU cluster access, mentorship',
                applicants: 15
              },
              {
                title: 'Research Assistant - Reinforcement Learning',
                commitment: '10-15 hrs/week | Flexible schedule | Spring 2026',
                requirements: ['Algorithms background', 'Interest in game theory', 'Programming experience'],
                responsibilities: 'Implement and evaluate RL algorithms for game environments',
                gain: 'Cutting-edge RL experience, collaboration with PhD students',
                applicants: 9
              }
            ].map((position, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {position.commitment}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {position.applicants} applications
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Requirements</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {position.requirements.map((req, j) => (
                      <li key={j}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Responsibilities</h4>
                  <p className="text-sm text-gray-700">{position.responsibilities}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">What You'll Gain</h4>
                  <p className="text-sm text-gray-700">{position.gain}</p>
                </div>

                <button 
                  onClick={() => setCurrentScreen('application')}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}