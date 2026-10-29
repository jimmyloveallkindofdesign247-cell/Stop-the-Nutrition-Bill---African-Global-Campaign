/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsTracker } from './components/NewsTracker';
import { BillBreakdown } from './components/BillBreakdown';
import { LetterWriterSection } from './components/LetterWriterSection';
import { LetterWriterModal } from './components/LetterWriterModal';
import { SocialHub } from './components/SocialHub';
import { CampaignPromptKit } from './components/CampaignPromptKit';
import { PetitionSigner } from './components/PetitionSigner';
import { Footer } from './components/Footer';
import { PetitionSignature } from './types/campaign';

export default function App() {
  const [signatureCount, setSignatureCount] = useState<number>(164890);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState<boolean>(false);
  const [isPromptKitModalOpen, setIsPromptKitModalOpen] = useState<boolean>(false);

  const handleAddSignature = (sig: PetitionSignature) => {
    setSignatureCount((prev) => prev + 1);
  };

  const handleOpenLetterWriter = () => {
    // If on a device with smooth scroll, we can both scroll to section or open modal
    const section = document.getElementById('letter-writer-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsLetterModalOpen(true);
    }
  };

  const handleOpenSocialHub = () => {
    const section = document.getElementById('social-hub');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPromptKit = () => {
    setIsPromptKitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-red-500 selection:text-white">
      {/* Sticky Header with Urgent Alerts & Fast Actions */}
      <Header
        onOpenLetterWriter={handleOpenLetterWriter}
        onOpenSocialHub={handleOpenSocialHub}
        onOpenPromptKit={handleOpenPromptKit}
      />

      {/* Main Campaign Landing Flow */}
      <main className="flex-1">
        {/* Hero Section: High Contrast Black/White Backdrop with Light Red Glow */}
        <Hero
          onOpenLetterWriter={handleOpenLetterWriter}
          onOpenSocialHub={handleOpenSocialHub}
          onOpenPromptKit={handleOpenPromptKit}
          signatureCount={signatureCount}
        />

        {/* Real-time Legislative News Updates: Nigeria HB 2659 & Pan-African Watch */}
        <NewsTracker onOpenLetterWriter={handleOpenLetterWriter} />

        {/* In-Depth Clause-by-Clause Legal Deconstruction */}
        <BillBreakdown />

        {/* Automated Representative Letter Writing Tool */}
        <LetterWriterSection />

        {/* Global Social Media Action Hub (Facebook, X, Instagram, TikTok, WeChat, Telegram, Reddit, Threads, LINE, Bilibili...) */}
        <SocialHub onOpenLetterWriter={handleOpenLetterWriter} />

        {/* Interactive Campaign Prompt & Advocacy Copy Toolkit */}
        <CampaignPromptKit isEmbedded={true} />

        {/* Live Public Injunction Petition & Real-Time Signers Ticker */}
        <PetitionSigner
          signatureCount={signatureCount}
          onAddSignature={handleAddSignature}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLetterWriter={handleOpenLetterWriter}
        onOpenSocialHub={handleOpenSocialHub}
        onOpenPromptKit={handleOpenPromptKit}
      />

      {/* Interactive Modals */}
      <LetterWriterModal
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />

      <CampaignPromptKit
        isOpen={isPromptKitModalOpen}
        onClose={() => setIsPromptKitModalOpen(false)}
      />
    </div>
  );
}
