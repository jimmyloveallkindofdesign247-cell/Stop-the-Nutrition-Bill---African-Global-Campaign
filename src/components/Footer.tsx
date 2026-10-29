import React from 'react';
import { ShieldAlert, Mail, Heart, ExternalLink } from 'lucide-react';
import { CAMPAIGN_TAGS } from '../data/campaignData';

interface FooterProps {
  onOpenLetterWriter: () => void;
  onOpenSocialHub: () => void;
  onOpenPromptKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLetterWriter,
  onOpenSocialHub,
  onOpenPromptKit,
}) => {
  return (
    <footer className="border-t border-white/10 bg-black text-slate-400 py-12 sm:py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-base font-black text-white tracking-tight font-display">
                STOP THE NUTRITION BILL
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed font-light text-xs sm:text-sm">
              The African Global Campaign is an independent, non-partisan coalition of civil society organizations, traditional botanical healers, smallholder agriculturalists, and health rights advocates defending food sovereignty and bodily autonomy against restrictive legislative monopolies like Nigeria's HB 2659.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {CAMPAIGN_TAGS.map((tag) => (
                <span key={tag} className="text-red-300 font-mono font-bold text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campaign Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#news-section" className="hover:text-white transition-colors">
                  News Updates & HB 2659
                </a>
              </li>
              <li>
                <a href="#bill-breakdown" className="hover:text-white transition-colors">
                  Legal Clause Analysis (Sections 15–24)
                </a>
              </li>
              <li>
                <button onClick={onOpenLetterWriter} className="hover:text-white transition-colors text-left cursor-pointer">
                  Automated Representative Letter
                </button>
              </li>
              <li>
                <button onClick={onOpenSocialHub} className="hover:text-white transition-colors text-left cursor-pointer">
                  12+ Social Media Sharing Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenPromptKit} className="hover:text-white transition-colors text-left cursor-pointer">
                  Advocacy Prompt & Press Kit
                </button>
              </li>
              <li>
                <a href="#petition-section" className="hover:text-white transition-colors">
                  Sign Global Injunction
                </a>
              </li>
            </ul>
          </div>

          {/* Key Targets & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Target Legislative Assemblies
            </h4>
            <p className="text-slate-300 leading-normal">
              Petitions actively submitted to:
            </p>
            <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
              <li>• National Assembly of the Federal Republic of Nigeria</li>
              <li>• Senate Committee on Health & Social Welfare</li>
              <li>• House of Representatives Committee on Health Institutions</li>
              <li>• Pan-African Parliament (African Union)</li>
              <li>• ECOWAS Health & Humanitarian Commission</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenLetterWriter}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold hover:bg-red-500 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Dispatch Official Petition</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & constitutional footnote */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            Operating under civic rights protected by Section 39 & Section 40 of the 1999 Constitution of Nigeria, and Article 9 of the African Charter on Human and Peoples' Rights.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>#FreeAfrica</span>
            <span>·</span>
            <span>#StoptheNutritionBill</span>
            <span>·</span>
            <span>Stand for Health Freedom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
