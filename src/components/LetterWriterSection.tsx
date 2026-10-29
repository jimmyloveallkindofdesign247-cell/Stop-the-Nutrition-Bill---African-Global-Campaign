import React, { useState, useMemo } from 'react';
import { Mail, Send, Copy, Download, Twitter, Check, AlertCircle, Building2, User, HelpCircle, FileCheck } from 'lucide-react';
import { REPRESENTATIVES } from '../data/campaignData';
import { generateOfficialLetter, validateLetterInputs } from '../utils/letterGenerator';
import { LetterOptions } from '../types/campaign';

interface LetterWriterSectionProps {
  initialRepId?: string;
}

export const LetterWriterSection: React.FC<LetterWriterSectionProps> = ({ initialRepId }) => {
  const [formData, setFormData] = useState<LetterOptions>({
    representativeId: initialRepId || REPRESENTATIVES[0].id,
    constituentRole: 'Nigerian Citizen & Healthcare Advocate',
    primaryObjection: 'criminalization',
    senderName: '',
    senderEmail: '',
    senderCity: 'Abuja',
    senderCountry: 'Nigeria',
    customMessage: '',
  });

  const [copiedLetter, setCopiedLetter] = useState(false);
  const [copiedTweet, setCopiedTweet] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const selectedRep = useMemo(() => {
    return REPRESENTATIVES.find((r) => r.id === formData.representativeId) || REPRESENTATIVES[0];
  }, [formData.representativeId]);

  const generated = useMemo(() => {
    return generateOfficialLetter(formData, selectedRep);
  }, [formData, selectedRep]);

  const validation = useMemo(() => {
    return validateLetterInputs(formData);
  }, [formData]);

  const handleCopyLetter = async () => {
    try {
      await navigator.clipboard.writeText(generated.body);
      setCopiedLetter(true);
      setStatusMessage('Official letter copied to clipboard!');
      setTimeout(() => {
        setCopiedLetter(false);
        setStatusMessage(null);
      }, 3000);
    } catch {
      setStatusMessage('Failed to copy. Please manually select and copy.');
    }
  };

  const handleCopyTweet = async () => {
    try {
      await navigator.clipboard.writeText(generated.tweetText);
      setCopiedTweet(true);
      setTimeout(() => setCopiedTweet(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generated.body], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Petition_Reject_HB2659_${selectedRep.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setStatusMessage('Formal petition downloaded as text file.');
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleOpenEmail = () => {
    window.location.href = generated.mailtoUrl;
  };

  const handleOpenTweet = () => {
    const tweetIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(generated.tweetText)}`;
    window.open(tweetIntent, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="letter-writer-section" className="py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            <Mail className="w-4 h-4 text-red-400" />
            <span>Civic Action Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Automated Letter Writer to Representatives
          </h2>
          <p className="mt-3 text-base text-slate-300 font-light">
            Demand immediate withdrawal of HB 2659. Use this tool to generate a legally sound, customized civic petition and send it directly to key Nigerian lawmakers and Pan-African delegates.
          </p>
        </div>

        {/* Two-column layout: Configuration on left, Live generated preview on right */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950/90 border border-white/15 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-red-400" />
                Step 1: Target Official
              </span>
              <span className="text-[11px] text-slate-400">Direct legislative desk</span>
            </div>

            {/* Representative Selector */}
            <div>
              <label htmlFor="rep-select" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Select Lawmaker or Body
              </label>
              <select
                id="rep-select"
                value={formData.representativeId}
                onChange={(e) => setFormData({ ...formData, representativeId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                {REPRESENTATIVES.map((rep) => (
                  <option key={rep.id} value={rep.id} className="bg-zinc-900 text-white">
                    {rep.name} — {rep.role} ({rep.country})
                  </option>
                ))}
              </select>

              {/* Rep mini card */}
              <div className="mt-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{selectedRep.name}</span>
                  <span className="font-mono text-red-300 text-[11px]">@{selectedRep.twitterHandle}</span>
                </div>
                <p className="text-slate-400 text-[11px]">{selectedRep.role} · {selectedRep.chamber}</p>
                <p className="text-slate-400 text-[11px] font-mono truncate">{selectedRep.email}</p>
              </div>
            </div>

            {/* Constituent Role / Voice */}
            <div className="pt-2 border-t border-white/10">
              <label htmlFor="role-select" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Step 2: Your Role / Voice
              </label>
              <select
                id="role-select"
                value={formData.constituentRole}
                onChange={(e) => setFormData({ ...formData, constituentRole: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="Nigerian Citizen & Voter" className="bg-zinc-900">Nigerian Citizen & Voter</option>
                <option value="Traditional Herbalist & Indigenous Healer" className="bg-zinc-900">Traditional Herbalist & Indigenous Healer</option>
                <option value="African Diaspora Health Advocate" className="bg-zinc-900">African Diaspora Health Advocate</option>
                <option value="Smallholder Farmer & Food Vendor" className="bg-zinc-900">Smallholder Farmer & Food Vendor</option>
                <option value="Holistic Nutritionist & Health Coach" className="bg-zinc-900">Holistic Nutritionist & Health Coach</option>
                <option value="Global Ally for Food Sovereignty" className="bg-zinc-900">Global Ally for Food Sovereignty</option>
              </select>
            </div>

            {/* Primary Objection Focus */}
            <div className="pt-2 border-t border-white/10">
              <label htmlFor="objection-select" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Step 3: Primary Objection Angle
              </label>
              <select
                id="objection-select"
                value={formData.primaryObjection}
                onChange={(e) => setFormData({ ...formData, primaryObjection: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="criminalization" className="bg-zinc-900">
                  Criminalization of Ancestral & Traditional Healing
                </option>
                <option value="monopoly" className="bg-zinc-900">
                  Exclusive Statutory Monopoly & Corporate Gatekeeping
                </option>
                <option value="economic_burden" className="bg-zinc-900">
                  Destruction of Market Women & Street Food Vendors
                </option>
                <option value="constitutional_rights" className="bg-zinc-900">
                  Violation of Free Speech & Bodily Health Autonomy
                </option>
              </select>
            </div>

            {/* Sender personal info */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-300 block">
                Step 4: Your Information
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="sender-name" className="block text-[11px] text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="e.g. Amara Okafor"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block text-[11px] text-slate-400 mb-1">
                    Your Email (Optional)
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="sender-city" className="block text-[11px] text-slate-400 mb-1">
                    City / State *
                  </label>
                  <input
                    id="sender-city"
                    type="text"
                    value={formData.senderCity}
                    onChange={(e) => setFormData({ ...formData, senderCity: e.target.value })}
                    placeholder="e.g. Lagos / Abuja"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="sender-country" className="block text-[11px] text-slate-400 mb-1">
                    Country *
                  </label>
                  <input
                    id="sender-country"
                    type="text"
                    value={formData.senderCountry}
                    onChange={(e) => setFormData({ ...formData, senderCountry: e.target.value })}
                    placeholder="e.g. Nigeria"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="custom-notes" className="block text-[11px] text-slate-400 mb-1">
                  Personal Testimony / Specific Note (Optional)
                </label>
                <textarea
                  id="custom-notes"
                  rows={2}
                  value={formData.customMessage}
                  onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                  placeholder="e.g. Traditional herbs cured my father when pharmaceuticals failed..."
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Validation errors if any */}
            {!validation.isValid && (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Please complete required fields:</span>
                </div>
                <ul className="list-disc list-inside text-[11px] space-y-0.5">
                  {validation.errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Letter Output Column (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950/90 border border-white/15 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      Official Petition Preview
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Target: {selectedRep.email} · {generated.charCount} characters
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLetter}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedLetter ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-red-300" />}
                    <span>{copiedLetter ? 'Copied!' : 'Copy Letter'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    title="Download as official .txt petition"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-300" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Status Alert */}
              {statusMessage && (
                <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Letter Scrollable Body */}
              <div className="mt-4 p-5 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-slate-200 leading-relaxed max-h-[380px] overflow-y-auto whitespace-pre-wrap select-all">
                {generated.body}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleOpenEmail}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-950/60 transition-all border border-red-400/50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client (mailto:)</span>
                </button>

                <button
                  onClick={handleOpenTweet}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-black hover:bg-zinc-900 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4 text-sky-400" />
                  <span>Tweet @{selectedRep.twitterHandle}</span>
                </button>
              </div>

              {/* Tweet preview bar */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs">
                <p className="text-slate-300 text-[11px] truncate">
                  <strong className="text-sky-400">Tweet snippet: </strong>
                  {generated.tweetText}
                </p>
                <button
                  onClick={handleCopyTweet}
                  className="shrink-0 text-red-300 hover:text-white font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  {copiedTweet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTweet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
