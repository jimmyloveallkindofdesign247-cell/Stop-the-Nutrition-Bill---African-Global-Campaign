import React, { useState } from 'react';
import { Share2, Copy, Check, ExternalLink, QrCode, MessageSquare, Download, Sparkles, Hash } from 'lucide-react';
import { SOCIAL_PLATFORMS, CAMPAIGN_TAGS } from '../data/campaignData';
import { SocialPlatform } from '../types/campaign';

interface SocialHubProps {
  onOpenLetterWriter: () => void;
}

export const SocialHub: React.FC<SocialHubProps> = ({ onOpenLetterWriter }) => {
  const [copiedPlatformId, setCopiedPlatformId] = useState<string | null>(null);
  const [copiedAllTags, setCopiedAllTags] = useState(false);
  const [weChatModalOpen, setWeChatModalOpen] = useState(false);
  const [selectedPlacardStyle, setSelectedPlacardStyle] = useState<'crimson' | 'stark_white' | 'dark_gradient'>('crimson');

  const appUrl = typeof window !== 'undefined' ? window.location.href : 'https://stopnutritionbill.africa';
  const shareMessage = `Stop Nigeria's HB 2659 (Nutritionists Registration Council Bill)! Criminalizing dietary advice and traditional African food wisdom must end now. Demand your representative vote NO! #FreeAfrica #StoptheNutritionBill #NoToHB2659`;

  const handleCopyTags = async () => {
    try {
      await navigator.clipboard.writeText(CAMPAIGN_TAGS.join(' '));
      setCopiedAllTags(true);
      setTimeout(() => setCopiedAllTags(false), 2500);
    } catch {
      // fallback
    }
  };

  const handlePlatformAction = async (platform: SocialPlatform) => {
    if (platform.id === 'wechat') {
      setWeChatModalOpen(true);
      return;
    }

    if (platform.actionType === 'copy') {
      const copyText = `${shareMessage}\n\nLearn more and write your official letter here:\n${appUrl}\n\n${CAMPAIGN_TAGS.join(' ')}`;
      try {
        await navigator.clipboard.writeText(copyText);
        setCopiedPlatformId(platform.id);
        setTimeout(() => setCopiedPlatformId(null), 2500);
      } catch {
        // fallback
      }
    } else {
      const url = platform.shareUrl(shareMessage, appUrl, CAMPAIGN_TAGS);
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="social-hub" className="py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              <Share2 className="w-4 h-4 text-red-400" />
              <span>Continental & Global Broadcast Network</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Spread on Every Social Platform
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl font-light">
              We are mobilizing across 12+ international networks to demand an immediate end to the African Nutrition Bill. Use <strong className="text-red-300 font-semibold">#FreeAfrica</strong> and <strong className="text-red-300 font-semibold">#StoptheNutritionBill</strong> everywhere.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyTags}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/70 hover:bg-red-900 text-red-200 border border-red-500/40 text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              {copiedAllTags ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedAllTags ? 'Hashtags Copied to Clipboard!' : 'Copy All 4 Campaign Hashtags'}</span>
            </button>
            <button
              onClick={onOpenLetterWriter}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors shadow-md shadow-red-950 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Write Representative Letter</span>
            </button>
          </div>
        </div>

        {/* Universal Hashtags Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-red-950/70 via-black to-red-950/70 border border-red-500/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-red-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Official Tags:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CAMPAIGN_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-extrabold text-white font-mono hover:text-red-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-400">Add these to every post, story, video, and tweet!</span>
        </div>

        {/* Platforms Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SOCIAL_PLATFORMS.map((platform) => {
            const isCopied = copiedPlatformId === platform.id;

            return (
              <div
                key={platform.id}
                className="rounded-2xl border border-white/10 bg-zinc-950/70 hover:border-red-500/40 transition-all p-5 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-xs border border-white/10 shadow-sm"
                        style={{ backgroundColor: platform.color || '#27272a' }}
                      >
                        {platform.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                          {platform.name}
                        </h3>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                          {platform.category}
                        </span>
                      </div>
                    </div>

                    {platform.id === 'wechat' ? (
                      <QrCode className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Share2 className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {platform.description}
                  </p>
                </div>

                {/* Platform Action Button */}
                <div className="mt-5 pt-3 border-t border-white/5">
                  <button
                    onClick={() => handlePlatformAction(platform)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ready to Paste!</span>
                      </>
                    ) : platform.actionType === 'copy' ? (
                      <>
                        <Copy className="w-3.5 h-3.5 text-red-300" />
                        <span>Copy Caption & Tags</span>
                      </>
                    ) : platform.id === 'wechat' ? (
                      <>
                        <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Open WeChat Card & QR</span>
                      </>
                    ) : (
                      <>
                        <span>Share on {platform.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Digital Protest Placard Generator / Visual Preview */}
        <div className="mt-14 rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Digital Protest Asset Generator
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white font-display mt-1">
                Campaign Placards for Instagram, TikTok & Telegram
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Download or take a screenshot of these placards to post on social feeds and profile avatars.
              </p>
            </div>

            {/* Placard style selector */}
            <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setSelectedPlacardStyle('crimson')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedPlacardStyle === 'crimson' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Light Red
              </button>
              <button
                onClick={() => setSelectedPlacardStyle('stark_white')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedPlacardStyle === 'stark_white' ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                White & Black
              </button>
              <button
                onClick={() => setSelectedPlacardStyle('dark_gradient')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedPlacardStyle === 'dark_gradient' ? 'bg-zinc-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Carbon Gradient
              </button>
            </div>
          </div>

          {/* Interactive Placard Card */}
          <div className="mt-8 flex justify-center">
            <div
              className={`max-w-xl w-full rounded-2xl p-8 sm:p-10 border transition-all shadow-2xl text-center relative overflow-hidden ${
                selectedPlacardStyle === 'crimson'
                  ? 'bg-gradient-to-br from-red-600 via-red-700 to-black border-red-400/50 text-white'
                  : selectedPlacardStyle === 'stark_white'
                  ? 'bg-white border-slate-300 text-black'
                  : 'bg-gradient-to-b from-black via-zinc-900 to-zinc-950 border-white/20 text-white'
              }`}
            >
              <div className="text-[11px] font-mono uppercase tracking-widest font-black opacity-80 mb-3">
                AFRICAN GLOBAL RESISTANCE · 2026
              </div>

              <h4 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none font-display">
                STOP THE NUTRITION BILL
              </h4>

              <div
                className={`w-16 h-1 mx-auto my-4 rounded-full ${
                  selectedPlacardStyle === 'stark_white' ? 'bg-red-600' : 'bg-white'
                }`}
              />

              <p className="text-sm sm:text-base font-semibold max-w-md mx-auto leading-normal">
                OUR FOOD IS NOT A CRIME. OUR ANCESTRAL MEDICINE IS NOT FOR SALE.
              </p>

              <div className="mt-6 pt-5 border-t border-current/20 flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-bold">
                <span>#FreeAfrica</span>
                <span>·</span>
                <span>#StoptheNutritionBill</span>
                <span>·</span>
                <span>#NoToHB2659</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WeChat Modal */}
      {weChatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-zinc-950 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <QrCode className="w-4 h-4" />
                <span>WeChat Share Card · 微信分享</span>
              </div>
              <button
                onClick={() => setWeChatModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-black border border-white/10 text-center space-y-3">
              {/* Simulated QR Code box */}
              <div className="w-36 h-36 mx-auto bg-white p-3 rounded-lg flex flex-col items-center justify-center border border-slate-300">
                <div className="w-28 h-28 grid grid-cols-6 gap-1 bg-black p-1">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${(i % 2 === 0 || i % 5 === 0) ? 'bg-white' : 'bg-transparent'} rounded-[1px]`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Scan or screenshot to share on WeChat Moments
              </p>
              <p className="text-[11px] text-slate-400">
                #FreeAfrica #StoptheNutritionBill 非洲食品主权运动
              </p>
            </div>

            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`STOP THE NUTRITION BILL (Africa) #FreeAfrica #StoptheNutritionBill: ${appUrl}`);
                } catch {
                  // clipboard denied in headless/iframe
                }
                setWeChatModalOpen(false);
              }}
              className="mt-4 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Copy WeChat Post Text & Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
