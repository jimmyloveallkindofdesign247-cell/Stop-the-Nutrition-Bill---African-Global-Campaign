import React, { useState } from 'react';
import { Newspaper, Calendar, MapPin, AlertCircle, ChevronDown, ChevronUp, Share2, Search, Check, FileText } from 'lucide-react';
import { NEWS_UPDATES } from '../data/campaignData';
import { NewsUpdate } from '../types/campaign';

interface NewsTrackerProps {
  onOpenLetterWriter: () => void;
}

export const NewsTracker: React.FC<NewsTrackerProps> = ({ onOpenLetterWriter }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('news-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredNews = NEWS_UPDATES.filter((item) => {
    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'nigeria' && item.title.includes('HB 2659')) ||
      (selectedFilter === 'grassroots' && item.status === 'grassroots') ||
      (selectedFilter === 'legal' && item.status === 'analysis') ||
      (selectedFilter === 'continental' && item.location.includes('Ghana'));

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.legislativeRef.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleShareNews = async (item: NewsUpdate) => {
    const text = `🚨 UPDATE ON AFRICA NUTRITION BILL: ${item.title}\nLegislative Ref: ${item.legislativeRef}\nDemand lawmakers reject HB 2659! #FreeAfrica #StoptheNutritionBill`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="news-section" className="py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              <Newspaper className="w-4 h-4 text-red-400" />
              <span>Legislative Intelligence & Resistance Dispatches</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              News Updates: The Push for HB 2659
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl font-light">
              Real-time monitoring of legislative readings, committee filings, and grassroots mobilization across Nigeria and the African continent.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLetterWriter}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md shadow-red-950/60 border border-red-400/40 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Petition Lawmakers on These Findings</span>
            </button>
          </div>
        </div>

        {/* Filter controls and Search bar */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
            {[
              { id: 'all', label: 'All Updates' },
              { id: 'nigeria', label: 'Nigeria HB 2659' },
              { id: 'legal', label: 'Legal & Penalties' },
              { id: 'grassroots', label: 'Grassroots Action' },
              { id: 'continental', label: 'Pan-African Alerts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search updates by keyword, bill section, or city..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400/60 transition-all"
            />
          </div>
        </div>

        {/* News List */}
        <div className="mt-8 space-y-4">
          {filteredNews.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10">
              <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-300">No updates matched your criteria</p>
              <p className="text-xs text-slate-500 mt-1">Try resetting the filter or clear your search term.</p>
            </div>
          ) : (
            filteredNews.map((item) => {
              const isExpanded = expandedId === item.id;
              const isCritical = item.status === 'critical';

              return (
                <article
                  key={item.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isCritical
                      ? 'bg-gradient-to-r from-red-950/40 via-black to-zinc-950 border-red-500/40 shadow-lg shadow-red-950/30'
                      : 'bg-zinc-950/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-red-400" />
                          <span>{item.date}</span>
                        </span>
                        <span aria-hidden="true" className="text-white/20">·</span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-red-400" />
                          <span>{item.location}</span>
                        </span>
                        <span aria-hidden="true" className="text-white/20">·</span>
                        <span className="text-slate-400">{item.readTime}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            isCritical
                              ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className="text-[11px] font-mono text-red-300/80 hidden sm:inline">
                          {item.legislativeRef}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Expanded Content Drawer */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-red-300 mb-2">
                            Key Legislative Objections & Ramifications:
                          </h4>
                          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {item.keyConcerns.map((concern, idx) => (
                              <li
                                key={idx}
                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-normal flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                <span>{concern}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs">
                          <span className="font-mono text-slate-400 text-[11px]">
                            Official Docket Record: <strong className="text-slate-200">{item.legislativeRef}</strong>
                          </span>
                          <button
                            onClick={() => handleShareNews(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copied Share Text!</span>
                              </>
                            ) : (
                              <>
                                <Share2 className="w-3.5 h-3.5 text-red-300" />
                                <span>Copy Share Summary</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Toggle expand button */}
                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/5">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Detailed Analysis' : 'Expand Full Legislative Breakdown'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-slate-400 font-semibold">
                          Tags: #FreeAfrica #StoptheNutritionBill
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
