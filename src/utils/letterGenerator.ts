import { LetterOptions, Representative } from '../types/campaign';

export interface GeneratedLetter {
  subject: string;
  body: string;
  recipientEmail: string;
  recipientName: string;
  mailtoUrl: string;
  tweetText: string;
  charCount: number;
}

export function generateOfficialLetter(
  options: LetterOptions,
  representative: Representative
): GeneratedLetter {
  const senderName = options.senderName.trim() || '[Your Name]';
  const senderCity = options.senderCity.trim() || 'Lagos';
  const senderCountry = options.senderCountry.trim() || 'Nigeria';
  const role = options.constituentRole || 'Concerned African Citizen';

  let objectionHeading = '';
  let objectionBody = '';

  switch (options.primaryObjection) {
    case 'criminalization':
      objectionHeading = 'Criminalization of Indigenous Dietary Knowledge & Traditional Herbalists';
      objectionBody = `Section provisions within HB 2659 propose draconian criminal penalties and fines for individuals sharing nutritional advice, health diet guidance, or traditional dietary practices without membership in this centralized statutory council. This unlawfully penalizes centuries of indigenous African nutritional wisdom, natural healers, elders, and grassroots food advocates who have nourished our communities for generations.`;
      break;

    case 'monopoly':
      objectionHeading = 'Unchecked Institutional Monopoly and Anti-Competitive Gatekeeping';
      objectionBody = `HB 2659 effectively establishes an exclusive statutory monopoly over the broad and fundamental human domain of human nutrition. By granting sweeping licensing and censorship authority to a narrow council, it risks commercial capture by ultra-processed food conglomerates while locking out indigenous farmers, independent researchers, holistic practitioners, and small-scale natural producers.`;
      break;

    case 'economic_burden':
      objectionHeading = 'Economic Devastation for African Market Vendors and Micro-Enterprises';
      objectionBody = `Millions of Africans sustain their livelihoods as street food vendors, market herbal sellers, natural beverage preparers (such as zobo, kunu, and hibiscus tonics), and community cooks. Subjecting ordinary citizens and dietary counselors to regulatory intimidation and licensure extortion will decimate micro-economies and inflate the cost of wholesome native meals amidst economic hardship.`;
      break;

    case 'constitutional_rights':
    default:
      objectionHeading = 'Infringement on Constitutional Freedoms and Bodily Health Sovereignty';
      objectionBody = `Every human being possesses an inalienable right to choose what they consume, how they nourish their family, and to freely speak and share empirical knowledge regarding wholesome food. HB 2659 breaches constitutional guarantees of freedom of expression and bodily autonomy by criminalizing open discourse around food, herbs, and natural nutrition.`;
      break;
  }

  const customSection = options.customMessage?.trim()
    ? `\nPersonal Testimony & Additional Demands:\n"${options.customMessage.trim()}"\n`
    : '';

  const subject = `URGENT: Halt HB 2659 (Nutritionists Council Bill) – Protect Food Sovereignty & African Rights`;

  const body = `To: The Honorable ${representative.name}
Office of: ${representative.role}, ${representative.chamber}
${representative.body}
Jurisdiction: ${representative.country}

Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

SUBJECT: FORMAL PETITION TO REJECT HB 2659 (NUTRITIONISTS REGISTRATION COUNCIL OF NIGERIA BILL)

Honorable Representative ${representative.name},

I write to you today in my capacity as a ${role} residing in ${senderCity}, ${senderCountry}, alongside millions of voices in the global African community united under the #FreeAfrica and #StoptheNutritionBill movement.

I register my absolute and unequivocal opposition to House Bill 2659 (HB 2659)—the proposed legislation seeking to establish the "Nutritionists Registration Council of Nigeria"—and any corresponding continental models that restrict our people's fundamental health freedom.

KEY GROUNDS OF OBJECTION:
1. ${objectionHeading}
${objectionBody}

2. Threat to Pan-African Food Heritage
Africa's rich biodiversity of millets, sorghum, cassava, moringa, bitter leaf, baobab, and wild edible botanicals was not invented in a corporate laboratory. Restricting public dietary discourse under Western-industrial bureaucratic frameworks destroys our heritage and deepens dependency on imported processed commodities.

3. Failure of Broad Public Consultation
Legislation with such vast ramifications on public health, traditional institutions, smallholder agriculturalists, and consumer choice has proceeded without comprehensive public hearings across grassroots constituencies.
${customSection}
OUR URGENT DEMANDS:
1. Immediately halt all legislative readings and committee passage of HB 2659 in the National Assembly.
2. Subject the bill to open public hearings featuring traditional practitioners, consumer rights leagues, smallholder farming unions, and independent health scholars.
3. Champion statutory safeguards that explicitly protect indigenous dietary practices, ancestral nutrition, and unrestricted public discussion of natural wellness.

The eyes of the African continent and the worldwide diaspora are upon this legislative chamber. We urge you to stand with your constituents, defend our food sovereignty, and soundly reject HB 2659.

Respectfully submitted,

${senderName}
${role}
Location: ${senderCity}, ${senderCountry}
Email: ${options.senderEmail || 'Not provided'}
Campaign Coalition: #StoptheNutritionBill & #FreeAfrica Global Action`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const mailtoUrl = `mailto:${representative.email}?subject=${encodedSubject}&body=${encodedBody}`;

  const tweetText = `.@${representative.twitterHandle} As your constituent, I urge you to immediately VOTE NO on HB 2659 (Nutritionists Council Bill). Defend African food sovereignty & stop criminalizing traditional diets! #StoptheNutritionBill #FreeAfrica`;

  return {
    subject,
    body,
    recipientEmail: representative.email,
    recipientName: representative.name,
    mailtoUrl,
    tweetText,
    charCount: body.length,
  };
}

export function validateLetterInputs(options: Partial<LetterOptions>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!options.senderName || options.senderName.trim().length < 2) {
    errors.push('Please enter your full name (at least 2 characters).');
  }

  if (options.senderEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(options.senderEmail)) {
    errors.push('Please enter a valid email address.');
  }

  if (!options.senderCity || options.senderCity.trim().length === 0) {
    errors.push('Please provide your city or state.');
  }

  if (!options.representativeId) {
    errors.push('Please select a target representative.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
