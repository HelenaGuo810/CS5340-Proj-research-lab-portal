import React from 'react';
import { CheckCircle, Clock, Mail, Eye } from 'lucide-react';

export default function ApplicantDashboard({ applicationId }) {
  const stages = [
    { name: 'Application Received', date: 'Feb 1', status: 'complete' },
    { name: 'Under Review', date: 'Feb 8', status: 'current' },
    { name: 'Interview Scheduling', date: 'Est. Feb 15', status: 'pending' },
    { name: 'Final Decision', date: 'Est. Feb 28', status: 'pending' },
    { name: 'Onboarding', date: 'TBD', status: 'pending' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Status</h1>
          <p className="text-gray-600">Application ID: #{applicationId || '12345'} - NLP Research Assistant</p>
        </div>

        {/* Status Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">Application Progress</h2>
          <div className="relative">
            {stages.map((stage, i) => (
              <div key={i} className="flex items-start mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    stage.status === 'complete' ? 'bg-green-500' :
                    stage.status === 'current' ? 'bg-blue-600 animate-pulse' :
                    'bg-gray-300'
                  }`}>
                    {stage.status === 'complete' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : stage.status === 'current' ? (
                      <Clock className="w-6 h-6 text-white" />
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  {i < stages.length - 1 && (
                    <div className={`w-0.5 h-16 ${stage.status === 'complete' ? 'bg-green-500' : 'bg-gray-300'}`} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${stage.status === 'current' ? 'text-blue-600' : 'text-gray-900'}`}>
                    {stage.name}
                  </h3>
                  <p className="text-sm text-gray-600">{stage.date}</p>
                  {stage.status === 'current' && (
                    <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-sm text-blue-900">
                        Your application is being reviewed by Professor Smith. We'll notify you when a decision is made.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status Card */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Under Review</h2>
              <p className="mb-4">Your application is being carefully evaluated by our team.</p>
              <p className="text-sm opacity-90">Next update expected: February 15-20</p>
            </div>
            <Clock className="w-12 h-12 opacity-50" />
          </div>
        </div>

        {/* Application Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Application Details</h2>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm">
              <Eye className="w-4 h-4" />
              View Full Application
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-sm text-gray-600 mb-1">Position Applied</h3>
              <p className="text-gray-900">NLP Research Assistant</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-600 mb-1">Application Date</h3>
              <p className="text-gray-900">February 1, 2025</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-600 mb-1">GPA</h3>
              <p className="text-gray-900">3.80</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-600 mb-1">Time Commitment</h3>
              <p className="text-gray-900">10-15 hours/week</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Messages
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Application Received</h3>
                <span className="text-xs text-gray-500">Feb 1, 2025</span>
              </div>
              <p className="text-sm text-gray-700">
                Thank you for applying! Your application has been received and will be reviewed shortly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Screening Complete</h3>
                <span className="text-xs text-gray-500">Feb 8, 2025</span>
              </div>
              <p className="text-sm text-gray-700">
                Great news! You've passed our initial screening. Professor Smith is now reviewing your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}