import React, { useState } from 'react';
import { ShieldAlert, Share2, Mail, Check, Copy, Flame, Menu, X as CloseIcon } from 'lucide-react';
import { CAMPAIGN_TAGS } from '../data/campaignData';

interface HeaderProps {
  onOpenLetterWriter: () => void;
  onOpenSocialHub: () => void;
  onOpenPromptKit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLetterWriter,
  onOpenSocialHub,
  onOpenPromptKit,
}) => {
  const [copiedTags, setCopiedTags] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyTags = async () => {
    try {
      await navigator.clipboard.writeText(CAMPAIGN_TAGS.join(' '));
      setCopiedTags(true);
      setTimeout(() => setCopiedTags(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/85 backdrop-blur-md">
      {/* Urgent mobilization bar */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-black px-4 py-2 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-red-200">
            <span className="flex h-2 w-2 rounded-full bg-red-400 animate-ping" />
            <Flame className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="font-semibold text-white tracking-wide">URGENT LEGISLATIVE ALERT:</span>
            <span className="hidden sm:inline text-red-200/90">
              Nigeria’s National Assembly is pushing HB 2659 (Nutritionists Council Bill). Mobilize now!
            </span>
            <span className="sm:hidden text-red-200/90">Nigeria pushing HB 2659</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleCopyTags}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium bg-red-500/20 text-red-100 hover:bg-red-500/30 transition-colors border border-red-500/40 cursor-pointer"
              aria-label="Copy official campaign hashtags"
            >
              {copiedTags ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Hashtags Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-red-300" />
                  <span>#FreeAfrica #StoptheNutritionBill</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center border border-red-400/40 shadow-lg shadow-red-900/30">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 font-display">
                STOP THE NUTRITION BILL
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-300 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/30">
                  AFRICA
                </span>
              </span>
              <span className="text-[11px] text-slate-400 hidden xs:inline tracking-wide">
                African Global Movement for Food & Health Sovereignty
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#news-section" className="hover:text-white transition-colors">
              News Updates
            </a>
            <a href="#bill-breakdown" className="hover:text-white transition-colors">
              Inside HB 2659
            </a>
            <a href="#social-hub" className="hover:text-white transition-colors">
              Social Media Action
            </a>
            <button
              onClick={onOpenPromptKit}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Campaign Prompt Kit
            </button>
            <a href="#petition-section" className="hover:text-white transition-colors">
              Sign Petition
            </a>
          </nav>

          {/* Desktop action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSocialHub}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-red-300" />
              <span>Share & Spread</span>
            </button>
            <button
              onClick={onOpenLetterWriter}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-md shadow-red-900/40 hover:shadow-red-700/50 transition-all cursor-pointer border border-red-400/50"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Write Representative</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenLetterWriter}
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-md bg-red-600 text-white"
            >
              Write Rep
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-black/95 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#news-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/5"
          >
            News Updates & HB 2659
          </a>
          <a
            href="#bill-breakdown"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/5"
          >
            Inside HB 2659 Breakdown
          </a>
          <a
            href="#social-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/5"
          >
            Social Media Hub (#FreeAfrica)
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPromptKit();
            }}
            className="w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/5 cursor-pointer"
          >
            Campaign Prompt & Press Kit
          </button>
          <a
            href="#petition-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/5"
          >
            Sign Global Petition
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLetterWriter();
              }}
              className="w-full py-2.5 text-center text-xs font-bold rounded-lg bg-red-600 text-white"
            >
              Automated Letter to Representative
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSocialHub();
              }}
              className="w-full py-2.5 text-center text-xs font-medium rounded-lg bg-white/10 text-white border border-white/20"
            >
              Open Social Media Sharing Hub
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
