import React, { useState } from 'react';
import { Filter, Eye, Check, X, Star } from 'lucide-react';

export default function ProfessorDashboard({ applications }) {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('score');

  const filteredApplications = applications
    .filter(a => filterStatus === 'all' || a.status === filterStatus)
    .sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score;
      if (sortBy === 'gpa') return b.gpa - a.gpa;
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const stats = {
    total: applications.length,
    screened: applications.filter(a => a.status === 'rejected').length,
    awaiting: applications.filter(a => a.status === 'awaiting_review').length,
    interview: applications.filter(a => a.status === 'interview').length,
    offers: applications.filter(a => a.status === 'accepted').length,
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Application Review Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-500">{stats.screened}</div>
            <div className="text-sm text-gray-600">Auto-Screened Out</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-amber-600">{stats.awaiting}</div>
            <div className="text-sm text-gray-600">Awaiting Review</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">{stats.interview}</div>
            <div className="text-sm text-gray-600">Interviewed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">{stats.offers}</div>
            <div className="text-sm text-gray-600">Offers Extended</div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <select 
              className="border rounded px-3 py-1.5 text-sm"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="awaiting_review">Awaiting Review</option>
              <option value="under_review">Under Review</option>
              <option value="interview">Interview</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              className="border rounded px-3 py-1.5 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="score">Score (High to Low)</option>
              <option value="gpa">GPA (High to Low)</option>
              <option value="date">Date (Newest First)</option>
            </select>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="px-4 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700">
              Accept Selected
            </button>
            <button className="px-4 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700">
              Reject Selected
            </button>
          </div>
        </div>

        {/* Applicants Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{app.name}</div>
                    <div className="text-xs text-gray-500">{app.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className={`w-4 h-4 ${app.score >= 90 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                      <span className="font-semibold">{app.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{app.gpa}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700 max-w-xs truncate">{app.experience}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                      app.status === 'interview' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'under_review' ? 'bg-yellow-100 text-yellow-800' :
                      app.status === 'awaiting_review' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {app.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedApplicant(app)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-800" title="Accept">
                        <Check className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800" title="Reject">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicant Detail Panel */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedApplicant.name}</h2>
              <button onClick={() => setSelectedApplicant(null)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">AI Score</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-blue-900">{selectedApplicant.score}</div>
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">GPA</h3>
                  <div className="text-3xl font-bold text-gray-900">{selectedApplicant.gpa}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Position Applied</h3>
                <p className="text-gray-700">{selectedApplicant.position}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Experience & Skills</h3>
                <p className="text-gray-700 bg-yellow-50 p-3 rounded border border-yellow-200">
                  {selectedApplicant.experience}
                </p>
                <p className="text-xs text-gray-500 mt-1">Keywords highlighted by auto-screener</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Research Interest Statement</h3>
                <p className="text-gray-700">
                  I am deeply interested in natural language processing and have been fascinated by 
                  recent developments in transformer architectures. Through my coursework and 
                  independent projects, I have gained hands-on experience with PyTorch and have 
                  implemented several NLP models from scratch...
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Professor Notes</h3>
                <textarea 
                  className="w-full border rounded px-3 py-2 h-24"
                  placeholder="Add private notes about this candidate..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Accept & Schedule Interview
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold">
                  Maybe - Review Later
                </button>
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <X className="w-5 h-5" />
                  Reject
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-medium text-blue-900 mb-2">Automated Actions Preview</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ Accepting will automatically send interview scheduling email</li>
                  <li>✓ System will sync with your calendar for availability</li>
                  <li>✓ Candidate will receive status update within 5 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
