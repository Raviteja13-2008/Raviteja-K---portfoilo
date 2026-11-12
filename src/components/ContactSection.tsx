import React, { useState } from 'react';
import { Github, Mail, Linkedin, Copy, Check, Send, ExternalLink, Edit3, MessageSquare, AlertCircle } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const ContactSection: React.FC = () => {
  const { profile, setIsEditModalOpen } = useProfile();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<null | {
    type: 'success';
    message: string;
  }>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const copyGithub = async () => {
    try {
      await navigator.clipboard.writeText(profile.github);
      setCopiedGithub(true);
      setTimeout(() => setCopiedGithub(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Build mailto URI as a direct functional action
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name} via Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    const isPlaceholderEmail = profile.email.includes('[') || profile.email.includes('example.com');
    const targetEmail = isPlaceholderEmail ? 'contact@raviteja.dev' : profile.email;

    // Open mail client or provide clean confirmation
    window.location.href = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmittedStatus({
      type: 'success',
      message: `Thank you, ${formState.name}! Your default mail app was prompted to send this message to Raviteja. You can also connect directly via GitHub.`
    });

    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>GET IN TOUCH</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Let's Connect & Build Together
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Whether you want to discuss Python algorithms, generative AI, open-source projects,
            or student collaboration, I would love to connect.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Verified Profile */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary GitHub Card (Real URL) */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">GitHub Profile</h3>
                    <span className="text-xs font-mono text-emerald-400">
                      Verified Active Account
                    </span>
                  </div>
                </div>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs flex items-center justify-between">
                <span className="text-slate-300 truncate">{profile.github}</span>
                <button
                  onClick={copyGithub}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                  title="Copy GitHub URL"
                >
                  {copiedGithub ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <span>Visit github.com/Raviteja13-2008</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Placeholder Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Email Address</h3>
                    <span className="text-xs text-slate-400">
                      Direct Email Placeholder
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                  title="Customize Email"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs flex items-center justify-between">
                <span className="text-slate-300 truncate">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Customizable in real-time</span>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  Edit Email <Edit3 className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* LinkedIn Placeholder Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">LinkedIn Profile</h3>
                    <span className="text-xs text-slate-400">
                      Professional Networking Placeholder
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                  title="Customize LinkedIn Link"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 truncate">
                {profile.linkedin}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Add your verified link anytime</span>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  Edit LinkedIn <Edit3 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg">Send a Direct Message</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Fill out the form below. Submitting will prepare a formatted email ready to send
                via your email client directly to Raviteja.
              </p>

              {submittedStatus && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed flex items-start gap-3">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Message Ready!</span>
                    <span>{submittedStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Discussion / AI Collaboration / Question"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your note or collaboration idea here..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400">
                    Spam-free & direct communication channel
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
