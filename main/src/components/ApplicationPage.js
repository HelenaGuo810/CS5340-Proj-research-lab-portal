import React, { useState } from 'react';
import { CheckCircle, FileText } from 'lucide-react';

export default function ApplicationPage({ setCurrentScreen, setApplicationId, applications }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', studentId: '', major: '', year: '',
    gpa: '', courses: '', experience: '', github: '',
    interest: '', position: 'NLP Research Assistant',
    availability: '', references: [{ name: '', email: '' }, { name: '', email: '' }]
  });

  const totalSteps = 5;

  const handleSubmit = () => {
    const newId = Math.max(...applications.map(a => a.id)) + 1;
    setApplicationId(newId);
    setCurrentScreen('dashboard');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Assistant Application</h1>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className={`flex-1 h-2 mx-1 rounded ${s <= step ? 'bg-blue-900' : 'bg-gray-200'}`} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Basic Info</span>
              <span>Academic</span>
              <span>Experience</span>
              <span>Interest</span>
              <span>References</span>
            </div>
          </div>

          {/* Auto-save indicator */}
          <div className="mb-6 flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span>Auto-saved</span>
          </div>

          {/* Form Steps */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input 
                  type="email" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john.doe@university.edu"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Student ID *</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={formData.studentId}
                    onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Year *</label>
                  <select 
                    className="w-full border rounded px-3 py-2"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="">Select year</option>
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Graduate</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Major *</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.major}
                  onChange={(e) => setFormData({...formData, major: e.target.value})}
                  placeholder="Computer Science"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Academic Background</h2>
              <div>
                <label className="block text-sm font-medium mb-1">GPA *</label>
                <input 
                  type="number" 
                  step="0.01" 
                  min="0" 
                  max="4" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.gpa}
                  onChange={(e) => setFormData({...formData, gpa: e.target.value})}
                  placeholder="3.80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Relevant Courses *</label>
                <textarea 
                  className="w-full border rounded px-3 py-2 h-24"
                  value={formData.courses}
                  onChange={(e) => setFormData({...formData, courses: e.target.value})}
                  placeholder="Machine Learning, Data Structures, Algorithms..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Upload Transcript (PDF)</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center cursor-pointer hover:border-blue-500 transition">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Previous Research/Projects</label>
                <textarea 
                  className="w-full border rounded px-3 py-2 h-32"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="Describe any research experience, relevant projects, publications..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GitHub Profile (Optional)</label>
                <input 
                  type="url" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.github}
                  onChange={(e) => setFormData({...formData, github: e.target.value})}
                  placeholder="https://github.com/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Technical Skills *</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  placeholder="Python, PyTorch, TensorFlow, Git..."
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Research Interest & Fit</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Position *</label>
                <select 
                  className="w-full border rounded px-3 py-2"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                >
                  <option>NLP Research Assistant</option>
                  <option>Computer Vision Research Assistant</option>
                  <option>Reinforcement Learning Research Assistant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Why this position? (200 words) *</label>
                <textarea 
                  className="w-full border rounded px-3 py-2 h-40"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  placeholder="Explain your interest in this research area and why you'd be a good fit..."
                  maxLength={1200}
                />
                <p className="text-xs text-gray-500 mt-1">{formData.interest.length}/1200 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time Commitment *</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>10-15 hours/week</option>
                  <option>15-20 hours/week</option>
                  <option>20+ hours/week</option>
                </select>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">References</h2>
              <p className="text-sm text-gray-600 mb-4">We'll automatically request references via email</p>
              {[0, 1].map((i) => (
                <div key={i} className="border rounded p-4 space-y-3">
                  <h3 className="font-medium">Reference {i + 1}</h3>
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input 
                      type="text" 
                      className="w-full border rounded px-3 py-2"
                      placeholder="Professor Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input 
                      type="email" 
                      className="w-full border rounded px-3 py-2"
                      placeholder="jane.smith@university.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Relationship</label>
                    <input 
                      type="text" 
                      className="w-full border rounded px-3 py-2"
                      placeholder="Course instructor, Research advisor..."
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {step < totalSteps ? (
              <button
                onClick={() => setStep(Math.min(totalSteps, step + 1))}
                className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}