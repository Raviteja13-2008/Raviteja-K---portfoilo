import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, UserCheck, AlertCircle } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const EditProfileModal: React.FC = () => {
  const { profile, updateProfile, resetProfile, isEditModalOpen, setIsEditModalOpen } = useProfile();

  const [formData, setFormData] = useState({
    name: profile.name,
    role: profile.role,
    collegeName: profile.collegeName,
    registrationNo: profile.registrationNo,
    graduationYear: profile.graduationYear,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github
  });

  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (isEditModalOpen) {
      setFormData({
        name: profile.name,
        role: profile.role,
        collegeName: profile.collegeName,
        registrationNo: profile.registrationNo,
        graduationYear: profile.graduationYear,
        email: profile.email,
        linkedin: profile.linkedin,
        github: profile.github
      });
      setSavedNotice(false);
    }
  }, [isEditModalOpen, profile]);

  if (!isEditModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setIsEditModalOpen(false);
    }, 800);
  };

  const handleReset = () => {
    resetProfile();
    setIsEditModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-blue-400" />
              Customize Portfolio Details
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Update editable placeholders anytime. All changes are saved locally.
            </p>
          </div>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-blue-400 mt-0.5" />
            <span>
              Per your instructions, real details are never fabricated. You can customize your college name,
              email address, registration number, and LinkedIn handle right here whenever you wish.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Headline / Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                College / University (Placeholder)
              </label>
              <input
                type="text"
                value={formData.collegeName}
                onChange={e => setFormData({ ...formData, collegeName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                placeholder="[Your College Name]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Roll / Registration No. (Placeholder)
              </label>
              <input
                type="text"
                value={formData.registrationNo}
                onChange={e => setFormData({ ...formData, registrationNo: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                placeholder="[Your Reg No]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Expected Graduation Year
              </label>
              <input
                type="text"
                value={formData.graduationYear}
                onChange={e => setFormData({ ...formData, graduationYear: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address (Placeholder)
              </label>
              <input
                type="text"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                placeholder="[your.email@example.com]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              LinkedIn Profile Link (Placeholder)
            </label>
            <input
              type="text"
              value={formData.linkedin}
              onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
              placeholder="[https://linkedin.com/in/your-profile]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              GitHub Profile Link
            </label>
            <input
              type="text"
              value={formData.github}
              onChange={e => setFormData({ ...formData, github: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
            />
          </div>

          {savedNotice && (
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 text-center font-medium">
              Profile details successfully updated!
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Placeholders
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-blue-500/20 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
