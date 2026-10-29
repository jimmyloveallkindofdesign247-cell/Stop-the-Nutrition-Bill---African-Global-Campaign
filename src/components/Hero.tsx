import React from 'react';
import { Mail, Share2, AlertTriangle, ArrowRight, Sparkles, ShieldX, Users } from 'lucide-react';

interface HeroProps {
  onOpenLetterWriter: () => void;
  onOpenSocialHub: () => void;
  onOpenPromptKit: () => void;
  signatureCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLetterWriter,
  onOpenSocialHub,
  onOpenPromptKit,
  signatureCount,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-white/10">
      {/* Dynamic background: monochrome black to off-white gradient backdrop with subtle atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-neutral-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/15 blur-[130px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top urgency tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-xs font-semibold text-red-200 mb-6 backdrop-blur-md shadow-lg shadow-red-950/50">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span className="tracking-wider uppercase text-[11px] text-red-300 font-bold">Pan-African Civic Mobilization</span>
            <span className="text-white/30">/</span>
            <span className="text-white font-medium">Global Health Freedom Alliance</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[0.95] font-display">
            <span className="block text-white drop-shadow-sm">STOP THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
              NUTRITION BILL
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed">
            Defending African Food Sovereignty, Ancestral Dietary Wisdom, and the Inalienable Right to Natural Wholesome Nutrition.
          </p>

          {/* Hashtags display */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-red-300 tracking-wide">
              #FreeAfrica
            </span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-red-200 tracking-wide">
              #StoptheNutritionBill
            </span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 tracking-wide">
              #NoToHB2659
            </span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-400 tracking-wide hidden sm:inline">
              #AfricanFoodSovereignty
            </span>
          </div>

          {/* Urgent Legislative Callout: Nigeria HB 2659 */}
          <div className="mt-8 max-w-4xl w-full bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border border-red-500/50 rounded-2xl p-5 sm:p-7 text-left shadow-2xl shadow-red-950/60 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-400 via-red-500 to-red-700" />
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-900/70 border border-red-400/50 flex items-center justify-center shrink-0 shadow-inner">
                <AlertTriangle className="w-6 h-6 text-red-300" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 bg-red-900/60 px-2.5 py-0.5 rounded border border-red-500/40">
                    Active Legislation in Review
                  </span>
                  <span className="text-xs text-slate-400">National Assembly of Nigeria</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
                  Nigeria’s National Assembly is currently pushing HB 2659: The Nutritionists Registration Council of Nigeria Bill
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Under the guise of standardizing healthcare, <strong className="text-white font-semibold">HB 2659</strong> grants a statutory board an exclusive monopoly over dietary speech and wellness consultation. Penalties include fines of up to <strong className="text-red-300 font-semibold">₦500,000</strong> and <strong className="text-red-300 font-semibold">2 years imprisonment</strong> for unlicensed citizens who share holistic dietary guidance or promote native botanicals.
                </p>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldX className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Threatens traditional herbalists, street food vendors, holistic coaches & consumer rights</span>
                  </div>
                  <a
                    href="#bill-breakdown"
                    className="inline-flex items-center gap-1.5 text-red-300 hover:text-white font-bold transition-colors cursor-pointer"
                  >
                    Examine clause breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none">
            <button
              onClick={onOpenLetterWriter}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-900/50 hover:shadow-red-800/60 transition-all border border-red-400/50 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-5 h-5 text-red-100" />
              <span>Write Automated Letter to Representatives</span>
            </button>

            <button
              onClick={onOpenSocialHub}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Share2 className="w-5 h-5 text-red-400" />
              <span>Broadcast on 12+ Social Media</span>
            </button>

            <button
              onClick={onOpenPromptKit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Campaign Prompt Kit</span>
            </button>
          </div>

          {/* Impact Stats Grid */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl text-left">
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-red-400" />
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Signatures</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-display block mt-1">
                {signatureCount.toLocaleString()}+
              </span>
              <p className="text-xs text-red-300 font-semibold mt-0.5">Demands Delivered</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Across Nigeria & Global Diaspora</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">HB 2659 Sanction</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-display block mt-1">
                ₦500,000
              </span>
              <p className="text-xs text-red-300 font-semibold mt-0.5">Proposed Criminal Fine</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Plus 2-Year Prison Sentences</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Civic Reach</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-display block mt-1">
                12+ Networks
              </span>
              <p className="text-xs text-red-300 font-semibold mt-0.5">Global Media Platforms</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Using #FreeAfrica & #StoptheNutritionBill</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Governance</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-display block mt-1">
                100% Civic
              </span>
              <p className="text-xs text-red-300 font-semibold mt-0.5">Grassroots Powered</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Defending Food Sovereignty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
