import React from 'react';
import { X as CloseIcon } from 'lucide-react';
import { LetterWriterSection } from './LetterWriterSection';

interface LetterWriterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterWriterModal: React.FC<LetterWriterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-red-500/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Top close bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-950 to-black border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-200">
              Official Representative Letter Generator
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close letter writer modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <LetterWriterSection />
        </div>
      </div>
    </div>
  );
};
