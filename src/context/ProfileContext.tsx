import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileData, MilestoneItem } from '../types/portfolio';

const DEFAULT_PROFILE: ProfileData = {
  name: "Raviteja K",
  role: "Aspiring AI Engineer",
  academicStatus: "First-Year B.Tech Computer Science Student",
  degree: "B.Tech in Computer Science & Engineering",
  collegeName: "[Your College / University Name]",
  registrationNo: "[Your Roll / Reg. Number]",
  graduationYear: "2028",
  email: "[your.email@example.com]",
  linkedin: "[https://linkedin.com/in/your-profile]",
  github: "https://github.com/Raviteja13-2008",
  bio: "First-year Computer Science undergraduate focused on foundational algorithms, Python development, and applied Artificial Intelligence.",
  aboutBio: "I am a first-year B.Tech Computer Science & Engineering student driven by genuine curiosity about how computational systems and artificial intelligence operate. My current journey is rooted in disciplined fundamentals—mastering Python, understanding data structures, building small robust utilities, and demystifying generative AI.",
  careerGoals: [
    "Build practical, high-leverage AI applications that solve tangible computational and educational challenges.",
    "Master mathematical foundations including linear algebra, discrete mathematics, and statistical machine learning.",
    "Contribute meaningfully to open-source developer ecosystems and collaborative software projects.",
    "Evolve into a full-fledged AI Engineer capable of deploying reliable, scalable machine learning systems."
  ],
  interests: [
    {
      title: "Python Programming",
      description: "Developing clean, structured code, exploring algorithmic problem solving, and building command-line and interactive utilities.",
      icon: "Code2",
      tags: ["Object-Oriented", "Scripting", "Automation", "Clean Code"]
    },
    {
      title: "Artificial Intelligence & ML",
      description: "Exploring core concepts behind modern machine learning, mathematical intuition, model architectures, and data-driven pipelines.",
      icon: "BrainCircuit",
      tags: ["Model Foundations", "Neural Networks", "Applied ML", "AI Ethics"]
    },
    {
      title: "Generative AI",
      description: "Understanding prompt engineering patterns, large language model mechanics, context handling, and developer API integrations.",
      icon: "Sparkles",
      tags: ["LLM Fundamentals", "Prompt Systems", "API Integration", "Context Windows"]
    },
    {
      title: "Modern Web Development",
      description: "Crafting responsive, clean user interfaces with HTML5, CSS3, and modern frontend concepts to interface with backend scripts.",
      icon: "Monitor",
      tags: ["HTML5 Semantics", "CSS3 Layouts", "Responsive Design", "Modern UI"]
    }
  ]
};

const DEFAULT_CERTIFICATE_PLACEHOLDERS: MilestoneItem[] = [
  {
    id: "cert-placeholder-1",
    category: "certificate-placeholder",
    title: "[Python Certification - In Progress / Upcoming]",
    timeframe: "Target: 2025 - 2026",
    statusText: "Planned / In Preparation",
    isPlaceholder: true,
    description: "Coursework and hands-on preparation focusing on Python data structures, standard library modules, and problem-solving.",
    details: [
      "Targeting verified foundational certification (e.g. Cisco/Python Institute or University Course)",
      "Focusing on algorithms, modular programming, and debugging"
    ]
  },
  {
    id: "cert-placeholder-2",
    category: "certificate-placeholder",
    title: "[Machine Learning & AI Foundations - Planned]",
    timeframe: "Target: 2025 - 2026",
    statusText: "Planned Track",
    isPlaceholder: true,
    description: "Curriculum roadmap covering introductory machine learning theory, supervised learning algorithms, and model evaluation.",
    details: [
      "Structured self-study along with academic coursework",
      "Mathematical focus: Linear Algebra, Probability, Calculus"
    ]
  },
  {
    id: "cert-placeholder-3",
    category: "certificate-placeholder",
    title: "[Collegiate Hackathon & Coding Contest - Upcoming]",
    timeframe: "Semester 2 / Year 2",
    statusText: "Upcoming Participation",
    isPlaceholder: true,
    description: "Aiming to participate in first inter-college coding sprint and project showcase once foundational projects are solidified.",
    details: [
      "Collaborative project development under time constraints",
      "Real-world application of Python and web tooling"
    ]
  }
];

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (updated: Partial<ProfileData>) => void;
  resetProfile: () => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  certificatePlaceholders: MilestoneItem[];
  addCertificatePlaceholder: (item: Omit<MilestoneItem, 'id' | 'category' | 'isPlaceholder'>) => void;
  updateCertificatePlaceholder: (id: string, item: Partial<MilestoneItem>) => void;
  removeCertificatePlaceholder: (id: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('raviteja_portfolio_profile');
      if (saved) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_PROFILE;
  });

  const [certificatePlaceholders, setCertificatePlaceholders] = useState<MilestoneItem[]>(() => {
    try {
      const saved = localStorage.getItem('raviteja_portfolio_certificates');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_CERTIFICATE_PLACEHOLDERS;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('raviteja_portfolio_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('raviteja_portfolio_certificates', JSON.stringify(certificatePlaceholders));
    } catch {
      // ignore
    }
  }, [certificatePlaceholders]);

  const updateProfile = (updated: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    setCertificatePlaceholders(DEFAULT_CERTIFICATE_PLACEHOLDERS);
    localStorage.removeItem('raviteja_portfolio_profile');
    localStorage.removeItem('raviteja_portfolio_certificates');
  };

  const addCertificatePlaceholder = (item: Omit<MilestoneItem, 'id' | 'category' | 'isPlaceholder'>) => {
    const newItem: MilestoneItem = {
      id: `cert-placeholder-${Date.now()}`,
      category: 'certificate-placeholder',
      isPlaceholder: true,
      ...item
    };
    setCertificatePlaceholders(prev => [newItem, ...prev]);
  };

  const updateCertificatePlaceholder = (id: string, item: Partial<MilestoneItem>) => {
    setCertificatePlaceholders(prev => prev.map(p => p.id === id ? { ...p, ...item } : p));
  };

  const removeCertificatePlaceholder = (id: string) => {
    setCertificatePlaceholders(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        resetProfile,
        isEditModalOpen,
        setIsEditModalOpen,
        certificatePlaceholders,
        addCertificatePlaceholder,
        updateCertificatePlaceholder,
        removeCertificatePlaceholder
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
