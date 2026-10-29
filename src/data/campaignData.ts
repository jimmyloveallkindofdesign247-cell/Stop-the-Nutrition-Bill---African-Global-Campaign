import { NewsUpdate, BillClause, Representative, SocialPlatform, PromptTemplate, PetitionSignature } from '../types/campaign';

export const CAMPAIGN_TAGS = ['#FreeAfrica', '#StoptheNutritionBill', '#NoToHB2659', '#AfricanFoodSovereignty'];

export const NEWS_UPDATES: NewsUpdate[] = [
  {
    id: 'news-1',
    title: "Nigeria’s National Assembly Pushes HB 2659: The Nutritionists Registration Council of Nigeria Bill",
    date: "October 28, 2026",
    location: "Abuja, Nigeria",
    status: "critical",
    summary: "Lawmakers in Nigeria's House of Representatives are actively advancing HB 2659. The bill proposes an all-powerful statutory council that would establish a monopoly over who is legally permitted to give nutrition, diet, or food-based wellness advice across the federation.",
    legislativeRef: "House Bill HB 2659 / 10th National Assembly",
    keyConcerns: [
      "Mandates mandatory council registration under threat of criminal prosecution for dietary guidance",
      "Omits recognition of ancestral African herbalists and traditional community wellness practitioners",
      "Imposes hefty registration and recertification fees, pricing out grassroots wellness advocates"
    ],
    readTime: "3 min read"
  },
  {
    id: 'news-2',
    title: "Civil Society & Herbal Practitioners Demand Immediate Scrapping of Punitive Clauses",
    date: "October 24, 2026",
    location: "Lagos / Ibadan, Nigeria",
    status: "legislative",
    summary: "A coalition representing traditional medicine practitioners, natural food researchers, and holistic dietitians held an emergency summit in Lagos, calling HB 2659 an assault on African heritage that attempts to medicalize and patent everyday dietary wisdom.",
    legislativeRef: "Petitions Committee File REF: NASS/CSO/2026/089",
    keyConcerns: [
      "Traditional Nigerian staple diets like sorghum, moringa, tigernut, and fermented locust beans risk being gatekept",
      "Threatens natural food vendors and small-scale processors with bureaucratic intimidation",
      "Demands an immediate halt until full civic public hearings are convened across all 36 states"
    ],
    readTime: "4 min read"
  },
  {
    id: 'news-3',
    title: "Alarm Raised Over Continental Diffusion to ECOWAS and East African Legislative Bodies",
    date: "October 19, 2026",
    location: "Accra, Ghana & Nairobi, Kenya",
    status: "analysis",
    summary: "Pan-African food sovereignty watchdogs caution that HB 2659 is not an isolated bill, but part of a coordinated continental push influenced by multinational food corporations aiming to sideline indigenous natural farming and nutrition systems.",
    legislativeRef: "Pan-African Civic Watch Bulletin No. 44",
    keyConcerns: [
      "Similar draft frameworks identified in preliminary stages in Ghana, Kenya, and Uganda",
      "Prioritizes industrial processed fortification mandates over native nutrient-dense bio-diverse crops",
      "Activists mobilize across borders under the unified banners #FreeAfrica and #StoptheNutritionBill"
    ],
    readTime: "5 min read"
  },
  {
    id: 'news-4',
    title: "Legal Breakdown: Analysis of Proposed Fines and Prison Terms for Unlicensed Dietary Advice",
    date: "October 12, 2026",
    location: "Abuja, Nigeria",
    status: "analysis",
    summary: "Senior constitutional attorneys publish a red-line critique of HB 2659's enforcement mechanisms, warning that vague statutory definitions could make sharing cooking advice, herbal remedies, or diet tips on social media a punishable criminal offense.",
    legislativeRef: "HB 2659 Part IV, Sections 18-22",
    keyConcerns: [
      "Fines ranging up to ₦500,000 ($350+) or imprisonment for up to two years for unauthorized counseling",
      "Vaguely defined 'practice of nutrition' which encompasses everyday traditional botanical usage",
      "Violation of Section 39 of the 1999 Constitution (Right to Freedom of Expression)"
    ],
    readTime: "6 min read"
  },
  {
    id: 'news-5',
    title: "Market Women & Natural Beverage Makers Pledge Mass Petitions Across Southern & Northern States",
    date: "October 5, 2026",
    location: "Kano & Onitsha, Nigeria",
    status: "grassroots",
    summary: "Unions of herbal spice vendors, zobo makers, and raw food sellers announce grassroots town halls, declaring they will reject any government agency attempting to dictate how African mothers prepare healing tonics and natural foods.",
    legislativeRef: "Grassroots Coalition Communiqué 2026-B",
    keyConcerns: [
      "Protects the informal food economy that feeds over 70% of urban working-class families",
      "Rejects corporate licensing fees that create artificial barriers to livelihood",
      "Demands sovereign recognition of indigenous nutrition sciences"
    ],
    readTime: "3 min read"
  }
];

export const BILL_CLAUSES: BillClause[] = [
  {
    id: 'clause-1',
    clause: "Section 15: Monopoly Over Dietary Practice",
    legalText: "No individual or corporate entity shall practice as a nutritionist, offer nutritional counseling, or administer dietary therapeutic advice for remuneration or in public dissemination without valid certification from the Council.",
    laymanMeaning: "Makes it illegal for anyone without formal council licensing—including traditional herbalists, elders, fitness coaches, and natural wellness educators—to give advice on what foods to eat.",
    dangerLevel: "severe",
    impactOnSociety: "Silences grassroots health advocates and destroys ancestral botanical healthcare."
  },
  {
    id: 'clause-2',
    clause: "Section 19: Penalties and Criminalization",
    legalText: "Any person who contravenes the provisions of Section 15 commits an offence and is liable on conviction to a fine not exceeding ₦500,000 or imprisonment for a term of two years, or both.",
    laymanMeaning: "Imposes prison sentences and heavy fines on ordinary citizens, bloggers, and natural health practitioners for sharing nutritional truths.",
    dangerLevel: "critical",
    impactOnSociety: "Criminalizes free speech and normalizes the persecution of holistic health professionals."
  },
  {
    id: 'clause-3',
    clause: "Section 24: Exclusion of Traditional & Indigenous Systems",
    legalText: "The Council shall establish the exclusive curriculum, accrediting bodies, and standard methodologies for all recognized nutritional practices in the federation.",
    laymanMeaning: "Adopts Western-industrial pharmaceutical models of nutrition while completely excluding African indigenous culinary and herbal sciences.",
    dangerLevel: "high",
    impactOnSociety: "Accelerates cultural erasure and leaves African nutrition dependent on multinational conglomerates."
  }
];

export const REPRESENTATIVES: Representative[] = [
  {
    id: 'rep-abbas',
    name: "Rt. Hon. Abbas Tajudeen, PhD",
    role: "Speaker of the House of Representatives",
    chamber: "House of Representatives",
    body: "National Assembly of the Federal Republic of Nigeria",
    country: "Nigeria",
    email: "speaker@nass.gov.ng",
    twitterHandle: "Speaker_Abbas",
    office: "National Assembly Complex, Three Arms Zone, PMB 141, Abuja, Nigeria"
  },
  {
    id: 'rep-akpabio',
    name: "Senator Godswill Obot Akpabio, GCON",
    role: "President of the Senate",
    chamber: "Senate of Nigeria",
    body: "National Assembly of the Federal Republic of Nigeria",
    country: "Nigeria",
    email: "senatepresident@nass.gov.ng",
    twitterHandle: "Senator_Akpabio",
    office: "Office of the Senate President, National Assembly, Abuja, Nigeria"
  },
  {
    id: 'rep-gbamgwam',
    name: "Hon. Amos Gbamgwam",
    role: "Chairman, House Committee on Health Institutions",
    chamber: "House of Representatives",
    body: "Federal Republic of Nigeria",
    country: "Nigeria",
    email: "healthcommittee@nass.gov.ng",
    twitterHandle: "NGRHouse",
    office: "House Committee on Health Institutions, Suite 3.42, House Wing, Abuja"
  },
  {
    id: 'rep-pate',
    name: "Prof. Muhammad Ali Pate",
    role: "Coordinating Minister of Health & Social Welfare",
    chamber: "Federal Executive Council",
    body: "Federal Ministry of Health and Social Welfare",
    country: "Nigeria",
    email: "info@health.gov.ng",
    twitterHandle: "muhammadpate",
    office: "Federal Secretariat Complex, Phase III, Shehu Shagari Way, Maitama, Abuja"
  },
  {
    id: 'rep-pap',
    name: "Hon. Chief Fortune Charumbira",
    role: "President of the Pan-African Parliament",
    chamber: "Pan-African Parliament",
    body: "African Union",
    country: "Continental (African Union)",
    email: "secretariat@panafricanparliament.org",
    twitterHandle: "AfrikParliament",
    office: "Gallagher Convention Centre, Midrand, Johannesburg, South Africa"
  },
  {
    id: 'rep-ecowas',
    name: "Dr. Omar Alieu Touray",
    role: "President of the ECOWAS Commission",
    chamber: "Executive Commission",
    body: "Economic Community of West African States",
    country: "West Africa (ECOWAS)",
    email: "commission@ecowas.int",
    twitterHandle: "ecowas_cedeao",
    office: "101 Yakubu Gowon Crescent, Asokoro District, Abuja, Nigeria"
  }
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'x-twitter',
    name: "X (Twitter)",
    icon: "x",
    category: "global",
    color: "#000000",
    shareUrl: (text, url, hashtags) => {
      const tags = hashtags.map(h => h.replace('#', '')).join(',');
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(tags)}`;
    },
    actionType: 'link',
    description: "Launch targeted campaign tweets directly at Nigerian lawmakers and AU representatives."
  },
  {
    id: 'facebook',
    name: "Facebook",
    icon: "facebook",
    category: "global",
    color: "#1877F2",
    shareUrl: (text, url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
    actionType: 'link',
    description: "Post to African community groups, civic forums, and diaspora family networks."
  },
  {
    id: 'instagram',
    name: "Instagram",
    icon: "instagram",
    category: "video",
    color: "#E4405F",
    shareUrl: () => `https://www.instagram.com/`,
    actionType: 'copy',
    description: "Copy verified campaign caption and high-impact protest graphics for Stories, Carousels & Reels."
  },
  {
    id: 'tiktok',
    name: "TikTok",
    icon: "tiktok",
    category: "video",
    color: "#000000",
    shareUrl: () => `https://www.tiktok.com/`,
    actionType: 'copy',
    description: "Get the viral #StoptheNutritionBill audio script and description for your TikTok video."
  },
  {
    id: 'telegram',
    name: "Telegram",
    icon: "telegram",
    category: "messaging",
    color: "#229ED9",
    shareUrl: (text, url) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    actionType: 'link',
    description: "Blast into public broadcast channels, health sovereignty forums, and regional discussion groups."
  },
  {
    id: 'reddit',
    name: "Reddit",
    icon: "reddit",
    category: "global",
    color: "#FF4500",
    shareUrl: (text, url) => `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent("STOP THE NUTRITION BILL (Nigeria HB 2659) - Urgent African Food Sovereignty Alert! #FreeAfrica")}`,
    actionType: 'link',
    description: "Engage discussions on r/Nigeria, r/Africa, r/HolisticHealth, and global activist subreddits."
  },
  {
    id: 'threads',
    name: "Threads",
    icon: "threads",
    category: "global",
    color: "#000000",
    shareUrl: (text, url) => `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`,
    actionType: 'link',
    description: "Broadcast the civic bulletin and tag continental thought leaders on Threads."
  },
  {
    id: 'wechat',
    name: "WeChat",
    icon: "wechat",
    category: "regional",
    color: "#07C160",
    shareUrl: () => ``,
    actionType: 'modal',
    description: "Generate WeChat Moments shareable card and QR code for African-Asian diaspora alliances."
  },
  {
    id: 'line',
    name: "LINE",
    icon: "line",
    category: "regional",
    color: "#06C755",
    shareUrl: (text, url) => `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    actionType: 'link',
    description: "Share instantly with international health networks and partner circles on LINE."
  },
  {
    id: 'bilibili',
    name: "Bilibili",
    icon: "bilibili",
    category: "video",
    color: "#00A1D6",
    shareUrl: () => `https://www.bilibili.com/`,
    actionType: 'copy',
    description: "Copy bilingual documentary notes and metadata to publish video exposes on Bilibili."
  },
  {
    id: 'whatsapp',
    name: "WhatsApp",
    icon: "whatsapp",
    category: "messaging",
    color: "#25D366",
    shareUrl: (text, url) => `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} Read the full breakdown & send your letter: ${url}`)}`,
    actionType: 'link',
    description: "Forward urgent campaign bulletins directly to family, church, mosque, and town union chats."
  },
  {
    id: 'bluesky',
    name: "Bluesky",
    icon: "bluesky",
    category: "global",
    color: "#1185FE",
    shareUrl: (text, url) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${text} ${url}`)}`,
    actionType: 'link',
    description: "Post to the open decentralized web with real-time civic tagging."
  },
  {
    id: 'linkedin',
    name: "LinkedIn",
    icon: "linkedin",
    category: "global",
    color: "#0A66C2",
    shareUrl: (text, url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    actionType: 'link',
    description: "Present policy briefs and economic critiques to African legal, business, and healthcare leaders."
  }
];

export const CAMPAIGN_PROMPTS: PromptTemplate[] = [
  {
    id: 'prompt-1',
    title: "AI Analysis Prompt: Deconstruct HB 2659's Constitutional & Human Rights Flaws",
    category: "ai_deep_dive",
    suggestedHashtags: ["#StoptheNutritionBill", "#FreeAfrica", "#NoToHB2659"],
    promptText: `Act as a senior constitutional attorney and African human rights policy expert. Conduct an objective legal and socio-economic critique of Nigeria's proposed House Bill 2659 (the Nutritionists Registration Council of Nigeria Bill). Analyze how criminalizing unauthorized dietary counseling violates Section 39 of the 1999 Constitution (Freedom of Expression) and undermines Article 16 of the African Charter on Human and Peoples' Rights (Right to Health). Contrast statutory licensing monopolies with traditional African botanical knowledge systems, and draft five concrete amendments to safeguard indigenous dietary freedom.`
  },
  {
    id: 'prompt-2',
    title: "Social Media Mega-Thread: Why Africans Must Say No to the Nutrition Council Bill",
    category: "social_thread",
    suggestedHashtags: ["#FreeAfrica", "#StoptheNutritionBill", "#FoodSovereignty"],
    promptText: `THREAD: 7 reasons why Nigeria's HB 2659 (Nutritionists Registration Council Bill) is an existential threat to our food freedom across Africa.

1/7 🚨 The National Assembly is advancing HB 2659. If passed, sharing basic advice about indigenous African food, herbs, or healthy natural diets without a government council license could land you 2 years in prison or a massive fine.

2/7 🌿 For thousands of years, our grandmothers and herbal healers preserved our health with moringa, bitter leaf, hibiscus (zobo), and fermented grains. This bill aims to criminalize ancestral wisdom unless you pay an elite regulatory cartel.

3/7 🏢 Who benefits? Ultra-processed food monopolies that want to replace local whole foods with certified, fortified chemical formulas.

4/7 👩🏾‍🌾 Our market women, street food vendors, and herbal drink makers face harassment, intimidation, and extortion under these proposed inspections.

5/7 📜 Health is a fundamental human right. Nutrition belongs to every citizen, not a government-appointed monopoly.

6/7 🌍 This is not just Nigeria. Continental lobbyists are watching. If HB 2659 passes, expect copycat bills across ECOWAS and the African Union.

7/7 ✊🏾 Take action right now: Write directly to your representatives in 1 click and sign the global pledge. 
🔗 [Campaign Link]
#FreeAfrica #StoptheNutritionBill #NoToHB2659`
  },
  {
    id: 'prompt-3',
    title: "Press Release & Media Advisory for Investigative Journalists",
    category: "press_release",
    suggestedHashtags: ["#PressRelease", "#StoptheNutritionBill", "#NigeriaDecides"],
    promptText: `FOR IMMEDIATE RELEASE
AFRICAN GLOBAL CITIZENS COALITION DEMANDS TOTAL WITHDRAWAL OF HB 2659 (NUTRITIONISTS REGISTRATION COUNCIL BILL)

ABUJA / GLOBAL — Civil society organizations, traditional medicine coalitions, and health sovereignty advocates across 28 nations have united to issue an urgent memorandum to the Nigerian National Assembly demanding the immediate withdrawal of House Bill 2659.

The coalition warns that the bill transforms dietary advice into a state-sanctioned monopoly, carrying criminal sanctions of up to two years' imprisonment for citizens promoting natural, non-industrialized nutrition.

"Nutrition is cultural heritage and life itself," declared the coalition. "We will not allow our native culinary medicine to be patented, censored, or restricted by bureaucratic gatekeepers."

Sign the petition and write to lawmakers at: [Campaign Link]
Media Contact: press@stopnutritionbill.africa | #StoptheNutritionBill #FreeAfrica`
  },
  {
    id: 'prompt-4',
    title: "Community Town Hall Speech for Grassroots Activists",
    category: "speech",
    suggestedHashtags: ["#FreeAfrica", "#CommunityAction", "#TraditionalMedicine"],
    promptText: `Good people of Africa, brothers and sisters:

Look at what feeds us. Look at our soil, our trees, our market stalls filled with yams, millets, ginger, turmeric, and garlic. Today, politicians inside air-conditioned chambers in Abuja and regional capitals are debating whether ordinary citizens have the legal right to speak about healthy food without a government license.

Under HB 2659, if you recommend herbal tea to your neighbor, or coach a friend on natural weight loss using traditional herbs, you could be treated as a criminal.

We say NO. Our food is our medicine. Our health belongs to our people. Tell your representative today: Drop HB 2659. Hands off our food! #FreeAfrica #StoptheNutritionBill`
  }
];

export const INITIAL_SIGNATURES: PetitionSignature[] = [
  { id: 'sig-1', name: 'Dr. Chidi Okonkwo', location: 'Lagos, Nigeria', role: 'Integrative Physician', timestamp: '2 minutes ago' },
  { id: 'sig-2', name: 'Fatima Al-Hassan', location: 'Kano, Nigeria', role: 'Botanical Researcher', timestamp: '7 minutes ago' },
  { id: 'sig-3', name: 'Kwame Mensah', location: 'Accra, Ghana', role: 'Food Sovereignty Advocate', timestamp: '14 minutes ago' },
  { id: 'sig-4', name: 'Ngozi Eze', location: 'London, UK', role: 'African Diaspora Healthcare Coalition', timestamp: '22 minutes ago' },
  { id: 'sig-5', name: 'Moussa Diop', location: 'Dakar, Senegal', role: 'Organic Agriculture Union', timestamp: '31 minutes ago' },
  { id: 'sig-6', name: 'Babatunde Adeleke', location: 'Ibadan, Nigeria', role: 'Traditional Herbal Medicine Guild', timestamp: '45 minutes ago' },
  { id: 'sig-7', name: 'Thabo Mokoena', location: 'Johannesburg, South Africa', role: 'Pan-African Health Alliance', timestamp: '1 hour ago' },
  { id: 'sig-8', name: 'Amina Bello', location: 'Abuja, Nigeria', role: 'Market Food Vendors Association', timestamp: '1 hour ago' }
];
