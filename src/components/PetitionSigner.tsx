import React, { useState } from 'react';
import { PenTool, CheckCircle, Globe, Shield, HeartHandshake, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_SIGNATURES } from '../data/campaignData';
import { PetitionSignature } from '../types/campaign';

interface PetitionSignerProps {
  signatureCount: number;
  onAddSignature: (sig: PetitionSignature) => void;
}

export const PetitionSigner: React.FC<PetitionSignerProps> = ({
  signatureCount,
  onAddSignature,
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('Citizen & Food Sovereignty Advocate');
  const [hasSigned, setHasSigned] = useState(false);
  const [signaturesList, setSignaturesList] = useState<PetitionSignature[]>(INITIAL_SIGNATURES);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newSig: PetitionSignature = {
      id: `sig-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Global Supporter',
      role,
      timestamp: 'Just now',
    };

    setSignaturesList([newSig, ...signaturesList]);
    onAddSignature(newSig);
    setHasSigned(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f87171', '#ffffff', '#dc2626'],
      });
    } catch {
      // ignore
    }
  };

  const targetGoal = 200000;
  const progressPercent = Math.min(100, Math.round((signatureCount / targetGoal) * 100));

  return (
    <section id="petition-section" className="py-16 sm:py-24 border-b border-white/10 bg-zinc-950 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Live Progress */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
              <PenTool className="w-4 h-4 text-red-400" />
              <span>Pan-African Public Injunction</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Add Your Name: Demand an Immediate Halt to HB 2659
            </h2>

            <p className="text-base text-slate-300 font-light leading-relaxed">
              Every signature is compiled into our bi-weekly civic memorandum delivered to the Speaker of the House of Representatives, the Nigerian Senate President, and the African Union Commission on Human Rights.
            </p>

            {/* Progress Bar Card */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-red-400" />
                  <span>{signatureCount.toLocaleString()} Verified Signers</span>
                </span>
                <span className="text-red-300 font-mono">Goal: {targetGoal.toLocaleString()}</span>
              </div>

              {/* Bar */}
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{progressPercent}% towards next parliamentary filing</span>
                <span>Updated in real-time</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero spam, 100% encrypted & privacy-protected</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <HeartHandshake className="w-4 h-4 text-red-400 shrink-0" />
                <span>Delivered directly to legislative docket</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sign Form or Signed Confirmation */}
          <div className="lg:col-span-6 bg-black/80 border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            {hasSigned ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Thank You, {name}!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your pledge has been registered and counted in our global petition to stop HB 2659.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="#social-hub"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors"
                  >
                    Share on Social Media (#FreeAfrica)
                  </a>
                  <a
                    href="#letter-writer-section"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors"
                  >
                    Send Direct Email to Lawmakers
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-display">
                  Sign the Official Injunction
                </h3>
                <p className="text-xs text-slate-400">
                  Join over 160,000 citizens demanding the preservation of African food freedom.
                </p>

                <div>
                  <label htmlFor="sig-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="sig-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Ngozi Achebe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="sig-location" className="block text-xs font-semibold text-slate-300 mb-1">
                      City, Country *
                    </label>
                    <input
                      id="sig-location"
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Lagos, Nigeria"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="sig-role" className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Affiliation
                    </label>
                    <select
                      id="sig-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                    >
                      <option value="Citizen & Food Sovereignty Advocate" className="bg-zinc-900">Citizen & Food Advocate</option>
                      <option value="Traditional Herbal Practitioner" className="bg-zinc-900">Traditional Herbal Practitioner</option>
                      <option value="African Diaspora Ally" className="bg-zinc-900">African Diaspora Ally</option>
                      <option value="Farmer / Agricultural Producer" className="bg-zinc-900">Farmer / Food Producer</option>
                      <option value="Medical / Holistic Professional" className="bg-zinc-900">Health Professional</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-950/60 transition-all border border-red-400/50 cursor-pointer"
                >
                  Sign & Submit Formal Injunction
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  By signing, you agree to have your name appended to the public petition to Nigeria's National Assembly.
                </p>
              </form>
            )}

            {/* Live Signers Ticker */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Recent Signatures Across Africa & Diaspora:
              </span>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {signaturesList.slice(0, 6).map((sig) => (
                  <div
                    key={sig.id}
                    className="flex items-center justify-between text-xs py-1 border-b border-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-200">{sig.name}</span>
                      <span className="text-[11px] text-slate-500">({sig.role})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-red-300/80">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{sig.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
