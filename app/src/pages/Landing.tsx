import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Layers,
  Key,
  Image,
  History,
  FileText,
  LockOpen,
  Brain,
  Cpu,
  Search,
  Zap,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Feature card data                                                  */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: Layers,
    title: 'Multi-Model AI',
    desc: 'Switch between GPT-4o, Claude, Perplexity, and Kimi AI on the fly.',
  },
  {
    icon: Key,
    title: 'Secure API Keys',
    desc: 'Your API keys are encrypted and stored locally. We never see them.',
  },
  {
    icon: Image,
    title: 'Image Upload',
    desc: 'Upload images directly to vision-enabled models for AI analysis.',
  },
  {
    icon: History,
    title: 'Chat History',
    desc: 'All conversations saved locally. Search and revisit anytime.',
  },
  {
    icon: FileText,
    title: 'Markdown Support',
    desc: 'Full markdown rendering with syntax-highlighted code blocks.',
  },
  {
    icon: LockOpen,
    title: 'Free & Open Source',
    desc: 'No subscriptions. Free forever. Bring your own API keys.',
  },
];

/* ------------------------------------------------------------------ */
/*  Model card data                                                    */
/* ------------------------------------------------------------------ */
const models = [
  {
    icon: Brain,
    color: '#10A37F',
    name: 'GPT-4o',
    provider: 'openai',
    desc: 'Most capable multimodal model. Excels at reasoning, coding, and creative tasks.',
    badge: { text: 'Most Popular', bg: 'bg-[#00D68F]/15', textColor: 'text-[#00D68F]' },
  },
  {
    icon: Cpu,
    color: '#D4A574',
    name: 'Claude 3.5 Sonnet',
    provider: 'claude',
    desc: 'Exceptional at analysis, writing, and following complex instructions.',
    badge: { text: 'Great for Writing', bg: 'bg-[#FF7A00]/15', textColor: 'text-[#FF7A00]' },
  },
  {
    icon: Search,
    color: '#1DB954',
    name: 'Perplexity Sonar',
    provider: 'perplexity',
    desc: 'Real-time web search with cited sources. Perfect for research.',
    badge: { text: 'Web Search', bg: 'bg-[#60A5FA]/15', textColor: 'text-[#60A5FA]' },
  },
  {
    icon: Zap,
    color: '#FF7A00',
    name: 'Kimi AI',
    provider: 'kimi',
    desc: 'Advanced long-context understanding and multilingual capabilities.',
    badge: { text: 'Long Context', bg: 'bg-[#A78BFA]/15', textColor: 'text-[#A78BFA]' },
  },
];

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook                                         */
/* ------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
          <span className="text-xs text-[#FF9A44] font-medium uppercase tracking-wider">
            AI-Powered Multi-Model Platform
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          One Platform,
          <br />
          <span className="text-gradient">Infinite AI</span> Possibilities
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-base md:text-lg text-white/60 max-w-[560px] mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Access GPT-4o, Claude, Perplexity, and Kimi AI in a single, unified
          dashboard. No subscriptions. Just bring your API keys.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#"
            className="flex items-center gap-2 gradient-orange text-white font-semibold px-7 py-3 rounded-full hover:shadow-orange hover:scale-[1.02] transition-all duration-200"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 text-white/80 hover:bg-white/5 hover:border-[#FF7A00]/30 transition-all duration-200"
          >
            View Documentation
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 md:gap-12 mt-12 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { value: '4', label: 'AI Models' },
            { value: '100%', label: 'Client-Side' },
            { value: 'Free', label: 'Forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#FF7A00]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Chat Preview                                              */
/* ------------------------------------------------------------------ */
function ChatPreviewSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">
            Intelligent Dashboard
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Chat with Multiple AI Models
          </h2>
          <p className="mt-4 text-white/50 max-w-[600px] mx-auto">
            Switch between GPT-4o, Claude, Perplexity, and Kimi AI seamlessly.
            Upload images, manage API keys, and access your chat history.
          </p>
        </div>

        {/* Mock Chat UI */}
        <div
          className={`relative rounded-2xl border border-white/10 overflow-hidden shadow-card bg-dark-card transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-6">
            {/* Window controls */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <div className="flex-1 ml-4 h-6 bg-white/5 rounded-lg" />
            </div>

            {/* Chat content */}
            <div className="flex gap-4">
              {/* Sidebar placeholder */}
              <div className="w-48 h-[300px] bg-white/5 rounded-xl hidden md:block" />

              {/* Messages */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-end">
                  <div className="max-w-[70%] bg-[#FF7A00]/20 border border-[#FF7A00]/30 rounded-2xl rounded-br-sm px-4 py-3">
                    <p className="text-sm text-white">
                      Explain quantum computing in simple terms
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-dark-inner border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <p className="text-sm text-white/70">
                      Quantum computing is a type of computing that uses
                      quantum mechanics principles...
                    </p>
                  </div>
                </div>
                {/* Input placeholder */}
                <div className="h-10 bg-white/5 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Features                                                  */
/* ------------------------------------------------------------------ */
function FeaturesSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="features" className="py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Everything You Need
          </h2>
          <p className="mt-4 text-white/50">
            A complete AI toolkit built for developers and power users
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group bg-gradient-to-br from-[#1C1F26] to-dark-inner border border-white/10 rounded-2xl p-6 hover:border-[#FF7A00]/20 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="text-[#FF7A00] mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Models                                                    */
/* ------------------------------------------------------------------ */
function ModelsSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="models" className="py-16 md:py-24 px-4 bg-dark-card" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">
            Supported Models
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Choose Your AI
          </h2>
          <p className="mt-4 text-white/50">
            Connect with the world's leading AI models
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model, i) => (
            <div
              key={model.name}
              className={`group bg-gradient-to-br from-[#1C1F26] to-dark-inner border border-white/10 rounded-2xl p-6 hover:border-[#FF7A00]/20 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="mb-4" style={{ color: model.color }}>
                <model.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {model.name}
              </h3>
              <p className="text-xs text-white/40 mt-1 capitalize">
                {model.provider}
              </p>
              <p className="text-sm text-white/50 mt-3 leading-relaxed">
                {model.desc}
              </p>
              <span
                className={`inline-block mt-4 text-[10px] font-semibold px-3 py-1 rounded-full ${model.badge.bg} ${model.badge.textColor}`}
              >
                {model.badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: CTA                                                       */
/* ------------------------------------------------------------------ */
function CTASection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 md:py-24 px-4 border-t border-white/5" ref={ref}>
      <div className="max-w-[800px] mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/50">
            Join thousands of developers using AIVOLKS to access multiple AI
            models.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 gradient-orange text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-orange hover:scale-[1.02] transition-all duration-200 mt-8"
          >
            Launch Dashboard
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing Page                                                       */
/* ------------------------------------------------------------------ */
export default function Landing() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ChatPreviewSection />
      <FeaturesSection />
      <ModelsSection />
      <CTASection />
    </div>
  );
}
