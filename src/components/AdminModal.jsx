import React, { useState } from 'react';
import { X, Lock, CheckCircle, Plus, Edit2, Trash2, LayoutDashboard, FileText, FolderKanban, Image as ImageIcon } from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('news');
  const [demoNotice, setDemoNotice] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleDemoAction = (action) => {
    setDemoNotice(`Content item successfully ${action}! (Demo Mode)`);
    setTimeout(() => setDemoNotice(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col font-sans">
        {/* Modal Header */}
        <div className="bg-rlhp-darkgreen text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock size={18} className="text-rlhp-orange" />
            <h3 className="text-base font-bold">RLHP Content Management Portal (CMS)</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {!loggedIn ? (
          <div className="p-8 max-w-md mx-auto w-full space-y-5 my-auto text-sm">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-rlhp-lightgreen text-rlhp-green rounded-full flex items-center justify-center mx-auto mb-2">
                <Lock size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Admin Login</h4>
              <p className="text-xs text-gray-500">Sign in to manage news, projects, audit reports & success stories.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Username / Email</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="admin@rlhp.org" 
                  required 
                  className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••••" 
                  required 
                  className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold py-2.5 rounded-lg text-xs shadow-md transition-colors"
              >
                Log In to Dashboard
              </button>
              <p className="text-[11px] text-center text-gray-400">Demo Login: Click button with any credentials to test CMS features.</p>
            </form>
          </div>
        ) : (
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-52 bg-gray-50 border-r border-gray-200 p-3 space-y-1 text-xs">
              <div className="px-3 py-2 font-bold text-gray-400 uppercase text-[10px] tracking-wider">CMS Modules</div>
              <button 
                onClick={() => setActiveTab('news')}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${activeTab === 'news' ? 'bg-rlhp-green text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <FileText size={14} />
                <span>Manage News & Articles</span>
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${activeTab === 'projects' ? 'bg-rlhp-green text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <FolderKanban size={14} />
                <span>Manage Projects</span>
              </button>
              <button 
                onClick={() => setActiveTab('gallery')}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${activeTab === 'gallery' ? 'bg-rlhp-green text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <ImageIcon size={14} />
                <span>Manage Gallery</span>
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setLoggedIn(false)}
                  className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-semibold"
                >
                  Log Out
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 text-xs">
              {demoNotice && (
                <div className="p-3 bg-green-100 border border-green-300 text-green-800 rounded-lg flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle size={14} />
                  <span>{demoNotice}</span>
                </div>
              )}

              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h4 className="text-base font-bold text-gray-800 capitalize">Manage {activeTab}</h4>
                <button 
                  onClick={() => handleDemoAction('added')}
                  className="bg-rlhp-orange hover:bg-rlhp-darkorange text-white font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1"
                >
                  <Plus size={14} />
                  <span>Add New {activeTab.slice(0, -1)}</span>
                </button>
              </div>

              {activeTab === 'news' && (
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between bg-white shadow-sm">
                    <div>
                      <h5 className="font-bold text-gray-800">Child Rights Clubs Meet Organized in Mysuru</h5>
                      <p className="text-[11px] text-gray-500">May 18, 2025 • Category: News</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleDemoAction('updated')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit2 size={14} /></button>
                      <button onClick={() => handleDemoAction('deleted')} className="p-1.5 text-red-600 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between bg-white shadow-sm">
                    <div>
                      <h5 className="font-bold text-gray-800">Empowering Women Through Self Help Groups</h5>
                      <p className="text-[11px] text-gray-500">May 05, 2025 • Category: Article</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleDemoAction('updated')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit2 size={14} /></button>
                      <button onClick={() => handleDemoAction('deleted')} className="p-1.5 text-red-600 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between bg-white shadow-sm">
                    <div>
                      <h5 className="font-bold text-gray-800">AshaKirana — Boys Shelter Home (Mysuru)</h5>
                      <p className="text-[11px] text-gray-500">Established 1993 • Active Beneficiaries: 120+</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleDemoAction('updated')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit2 size={14} /></button>
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between bg-white shadow-sm">
                    <div>
                      <h5 className="font-bold text-gray-800">AshaBhavana — Girls Shelter Home (Mysuru)</h5>
                      <p className="text-[11px] text-gray-500">Established 1999 • Active Beneficiaries: 100+</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleDemoAction('updated')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit2 size={14} /></button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-200 rounded-lg p-2 bg-white">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" alt="Gallery preview" className="w-full h-24 object-cover rounded" />
                    <p className="font-bold text-[11px] mt-1">Child Rights Gathering</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-2 bg-white">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Gallery preview" className="w-full h-24 object-cover rounded" />
                    <p className="font-bold text-[11px] mt-1">Women Sangha Meet</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
