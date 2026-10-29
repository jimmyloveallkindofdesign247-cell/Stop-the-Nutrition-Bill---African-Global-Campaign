import test from 'node:test';
import assert from 'node:assert/strict';
import { generateOfficialLetter, validateLetterInputs } from './letterGenerator';
import { Representative, LetterOptions } from '../types/campaign';

const mockRep: Representative = {
  id: 'rep-speaker-abbas',
  name: 'Rt. Hon. Abbas Tajudeen',
  role: 'Speaker of the House of Representatives',
  chamber: 'House of Representatives',
  body: 'National Assembly of Nigeria',
  country: 'Nigeria',
  email: 'speaker@nass.gov.ng',
  twitterHandle: 'Speaker_Abbas',
  office: 'National Assembly Complex, Three Arms Zone, Abuja',
};

const mockOptions: LetterOptions = {
  representativeId: 'rep-speaker-abbas',
  constituentRole: 'Traditional Herbalist & Food Researcher',
  primaryObjection: 'criminalization',
  senderName: 'Amara Okafor',
  senderEmail: 'amara.okafor@example.org',
  senderCity: 'Enugu',
  senderCountry: 'Nigeria',
  customMessage: 'Our ancestral healing remedies have supported our people for over 600 years.',
};

test('generateOfficialLetter constructs correct subject and includes key HB 2659 reference', () => {
  const result = generateOfficialLetter(mockOptions, mockRep);

  assert.ok(result.subject.includes('HB 2659'), 'Subject should mention HB 2659');
  assert.equal(result.recipientEmail, 'speaker@nass.gov.ng');
  assert.ok(result.body.includes('Amara Okafor'), 'Body should contain sender name');
  assert.ok(result.body.includes('Enugu, Nigeria'), 'Body should contain city and country');
  assert.ok(result.body.includes('Traditional Herbalist & Food Researcher'), 'Body should contain constituent role');
  assert.ok(result.body.includes('600 years'), 'Body should contain custom message testimony');
  assert.ok(result.body.includes('#StoptheNutritionBill'), 'Body should reference campaign hashtag');
  assert.ok(result.body.includes('#FreeAfrica'), 'Body should reference FreeAfrica hashtag');
});

test('generateOfficialLetter builds valid mailto URI and tweet snippet', () => {
  const result = generateOfficialLetter(mockOptions, mockRep);

  assert.ok(result.mailtoUrl.startsWith('mailto:speaker@nass.gov.ng?subject='), 'mailto url must start properly');
  assert.ok(result.tweetText.includes('@Speaker_Abbas'), 'Tweet must mention Twitter handle');
  assert.ok(result.tweetText.includes('#StoptheNutritionBill'), 'Tweet must include #StoptheNutritionBill');
  assert.ok(result.tweetText.includes('#FreeAfrica'), 'Tweet must include #FreeAfrica');
});

test('validateLetterInputs checks mandatory fields correctly', () => {
  const valid = validateLetterInputs({
    senderName: 'Kofi Mensah',
    senderEmail: 'kofi@example.com',
    senderCity: 'Accra',
    representativeId: 'rep-1',
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.errors.length, 0);

  const invalid = validateLetterInputs({
    senderName: '',
    senderEmail: 'invalid-email',
    senderCity: '',
    representativeId: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.length >= 3);
});
