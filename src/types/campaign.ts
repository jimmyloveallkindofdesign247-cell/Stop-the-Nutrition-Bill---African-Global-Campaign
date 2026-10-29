export interface NewsUpdate {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'critical' | 'legislative' | 'grassroots' | 'analysis';
  summary: string;
  legislativeRef: string;
  keyConcerns: string[];
  readTime: string;
}

export interface BillClause {
  id: string;
  clause: string;
  legalText: string;
  laymanMeaning: string;
  dangerLevel: 'severe' | 'critical' | 'high';
  impactOnSociety: string;
}

export interface Representative {
  id: string;
  name: string;
  role: string;
  chamber: string;
  body: string;
  country: string;
  email: string;
  twitterHandle: string;
  office: string;
}

export interface LetterOptions {
  representativeId: string;
  constituentRole: string;
  primaryObjection: string;
  senderName: string;
  senderEmail: string;
  senderCity: string;
  senderCountry: string;
  customMessage?: string;
}

export interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  category: 'global' | 'messaging' | 'video' | 'regional';
  color: string;
  shareUrl: (text: string, url: string, hashtags: string[]) => string;
  actionType: 'link' | 'copy' | 'modal';
  description: string;
  instructions?: string;
}

export interface PetitionSignature {
  id: string;
  name: string;
  location: string;
  role: string;
  timestamp: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: 'social_thread' | 'press_release' | 'speech' | 'ai_deep_dive' | 'community_flyer';
  promptText: string;
  suggestedHashtags: string[];
}
