import React from 'react';
import { Scale, AlertTriangle, ShieldX, CheckCircle2, XCircle } from 'lucide-react';
import { BILL_CLAUSES } from '../data/campaignData';

export const BillBreakdown: React.FC = () => {
  return (
    <section id="bill-breakdown" className="py-16 sm:py-24 border-b border-white/10 bg-black/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            <Scale className="w-4 h-4 text-red-400" />
            <span>Legal Deconstruction of HB 2659</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Inside the Bill: What Lawmakers Aren't Saying
          </h2>
          <p className="mt-3 text-base text-slate-300 font-light">
            Behind benign bureaucratic terminology lies an aggressive move to monopolize human nutrition, silence indigenous health practitioners, and impose criminal sanctions on everyday speech.
          </p>
        </div>

        {/* Clauses Comparison Cards */}
        <div className="mt-12 space-y-8">
          {BILL_CLAUSES.map((clause, index) => (
            <div
              key={clause.id}
              className="rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-900 to-black overflow-hidden shadow-xl"
            >
              {/* Card Header */}
              <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold flex items-center justify-center font-mono">
                    0{index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {clause.clause}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-500/40">
                    <AlertTriangle className="w-3 h-3 text-red-400" />
                    Danger Level: {clause.dangerLevel}
                  </span>
                </div>
              </div>

              {/* Grid: Statutory Text vs Actual Civic Reality */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Left: Statutory bill text */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span>Proposed Statutory Clause (HB 2659)</span>
                  </div>
                  <blockquote className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-slate-300 italic font-serif leading-relaxed">
                    "{clause.legalText}"
                  </blockquote>
                  <p className="mt-3 text-xs text-slate-400 leading-normal">
                    This clause provides statutory basis for policing wellness discourse, licensing non-medical food preparations, and establishing disciplinary tribunal powers.
                  </p>
                </div>

                {/* Right: What it means for African families & healers */}
                <div className="p-6 bg-red-950/15">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-300 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Real-World Impact on African Citizens</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                    {clause.laymanMeaning}
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-red-900/30 border border-red-500/30 text-xs text-red-200 flex items-start gap-2.5">
                    <ShieldX className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-white mb-0.5">Societal Consequence:</strong>
                      <span>{clause.impactOnSociety}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why this is a continental issue callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-red-950/60 via-zinc-950 to-red-950/60 border border-red-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-black text-white font-display">
              Why Nigeria’s HB 2659 Threatens All of Africa
            </h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
              Multinational industrial food cartels use pilot nations to pass blueprint legislation. If HB 2659 passes unchecked in Africa's largest democracy, it will be replicated across ECOWAS, the East African Community, and the African Union to suppress native whole foods and indigenous botanical wellness.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
            <a
              href="#social-hub"
              className="text-center px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors shadow-lg shadow-red-950"
            >
              Spread the Warning Across Africa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
