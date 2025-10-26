import React from 'react';
import { FileText, Eye, Users, Search, AlertCircle, Github } from 'lucide-react';

export default function HomePage({ setCurrentScreen }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Advancing AI Research</h1>
          <p className="text-xl mb-8">Join our team pushing the boundaries of artificial intelligence</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">Active Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">25</div>
              <div className="text-sm">Publications</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm">Lab Members</div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentScreen('positions')}
            className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            We're Hiring! 3 Positions Available
          </button>
        </div>
      </div>

      {/* Research Topics */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Natural Language Processing', desc: 'Building next-generation language models and understanding systems', icon: FileText },
            { title: 'Computer Vision', desc: 'Advanced image recognition and visual understanding systems', icon: Eye },
            { title: 'Reinforcement Learning', desc: 'Developing intelligent agents that learn from interaction', icon: Users },
            { title: 'Neural Architecture Search', desc: 'Automated design of optimal neural network structures', icon: Search },
            { title: 'Explainable AI', desc: 'Making AI decisions transparent and interpretable', icon: AlertCircle },
            { title: 'Multi-Modal Learning', desc: 'Integrating vision, language, and other data modalities', icon: Github },
          ].map((topic, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100">
              <topic.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.desc}</p>
              <span className="text-teal-600 font-medium hover:text-teal-700">Learn More →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Publications */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Publications</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow min-w-[280px]">
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-40 rounded mb-3 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-blue-900" />
                </div>
                <h4 className="font-semibold text-sm mb-2">Advanced Attention Mechanisms in NLP</h4>
                <p className="text-xs text-gray-600">Published in NeurIPS 2024</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}