import React, { useState } from 'react';
import { Sparkles, Copy, Check, MessageSquareCode, FileText, Share2, Layers } from 'lucide-react';
import { CAMPAIGN_PROMPTS } from '../data/campaignData';
import { PromptTemplate } from '../types/campaign';

interface CampaignPromptKitProps {
  isOpen?: boolean;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const CampaignPromptKit: React.FC<CampaignPromptKitProps> = ({
  isOpen = false,
  onClose,
  isEmbedded = false,
}) => {
  const [selectedPromptId, setSelectedPromptId] = useState<string>(CAMPAIGN_PROMPTS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activePrompt = CAMPAIGN_PROMPTS.find((p) => p.id === selectedPromptId) || CAMPAIGN_PROMPTS[0];

  const handleCopyPrompt = async (prompt: PromptTemplate) => {
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // fallback
    }
  };

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Advocate & Creator Prompt Generator</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-white font-display">
          Campaign Prompt & Copy Toolkit
        </h3>
        <p className="mt-2 text-sm text-slate-300 font-light">
          Use these ready-to-use prompts with AI models, social media schedulers, or media outlets to amplify the #FreeAfrica and #StoptheNutritionBill message.
        </p>
      </div>

      {/* Template Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CAMPAIGN_PROMPTS.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => setSelectedPromptId(prompt.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
              selectedPromptId === prompt.id
                ? 'bg-red-600 text-white border-red-400/50 shadow-md'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            {prompt.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Active Prompt Card */}
      <div className="rounded-2xl border border-white/15 bg-zinc-950 p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <MessageSquareCode className="w-5 h-5 text-red-400" />
            <h4 className="text-base font-bold text-white font-display">
              {activePrompt.title}
            </h4>
          </div>

          <button
            onClick={() => handleCopyPrompt(activePrompt)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            {copiedId === activePrompt.id ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Entire Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt Content Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-black/80 border border-white/10 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed max-h-[300px] overflow-y-auto whitespace-pre-wrap select-all">
          {activePrompt.promptText}
        </div>

        {/* Suggested hashtags footer */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-slate-400 font-semibold">Recommended Hashtags:</span>
          {activePrompt.suggestedHashtags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-red-300 font-mono text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isEmbedded) {
    return (
      <section className="py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-8 p-6">
        <div className="flex justify-end pb-2">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 text-xs font-semibold cursor-pointer"
          >
            Close ✕
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};
