/**
 * @transparencytech/constants
 *
 * SINGLE SOURCE OF TRUTH for all Transparency Technologies products.
 *
 * Used by:
 *   - transparency-app       (React/Vite — user-facing app)
 *   - transparency-marketing (React/Vite — marketing site)
 *   - Future: mobile app, admin dashboard, etc.
 *
 * DO NOT hardcode any of these values anywhere else.
 * Change here → push → all products stay in sync automatically.
 *
 * Patent references:
 *   Patent 1 — RTI Framework (PROVISIONAL_PATENT_APPLICATION.pdf)
 *   Patent 2 — GPS/NLP Extensions (Pro. Patent 2add Transparency App.pdf)
 */

// ─────────────────────────────────────────────────────────────────────────────
// URLS
// ─────────────────────────────────────────────────────────────────────────────

export const APP_URL         = 'https://app.transparencytechnologies.ai';
export const MARKETING_URL   = 'https://transparencytechnologies.ai';
export const CONTACT_URL     = 'https://transparencytechnologies.ai/contact';

export const SUBSCRIBE_GOLD_WEEKLY_URL      = 'https://buy.stripe.com/test_14AbJ3a5H4h35n2brZdby00';
export const SUBSCRIBE_GOLD_MONTHLY_URL     = 'https://buy.stripe.com/test_cNi4gB4Ln8xjbLq67Fdby01';
export const SUBSCRIBE_PLATINUM_WEEKLY_URL  = 'https://buy.stripe.com/test_9B6fZj7XzeVH4iY67Fdby02';
export const SUBSCRIBE_PLATINUM_MONTHLY_URL = 'https://buy.stripe.com/test_bJe14pdhTdRDbLq3Zxdby03';
export const SUBSCRIBE_ORG_URL              = 'https://transparencytechnologies.ai/contact';

// Stripe Price IDs — used by webhook to map payment to tier
// These are not secret — safe to store in constants
export const STRIPE_PRICE_ID_GOLD_WEEKLY      = 'price_1TGfZmQhWjyg3XLgQ3NcfE4g';
export const STRIPE_PRICE_ID_GOLD_MONTHLY     = 'price_1TGfdhQhWjyg3XLgiosZJapS';
export const STRIPE_PRICE_ID_PLATINUM_WEEKLY  = 'price_1TGfelQhWjyg3XLgeeRXP52o';
export const STRIPE_PRICE_ID_PLATINUM_MONTHLY = 'price_1TGffTQhWjyg3XLghgz8lrYY';

// Apple In-App Purchase Product IDs — must match App Store Connect
// Create these as Auto-Renewable Subscriptions in App Store Connect
export const APPLE_PRODUCT_ID_GOLD_WEEKLY      = 'gold_weekly';
export const APPLE_PRODUCT_ID_GOLD_MONTHLY     = 'gold_monthly';
export const APPLE_PRODUCT_ID_PLATINUM_WEEKLY  = 'platinum_weekly';
export const APPLE_PRODUCT_ID_PLATINUM_MONTHLY = 'platinum_monthly';

// Map Apple product IDs → tier (used by server-side receipt validation)
export const APPLE_PRODUCT_TIER_MAP = {
  gold_weekly: 'gold',
  gold_monthly: 'gold',
  platinum_weekly: 'platinum',
  platinum_monthly: 'platinum',
};

// ─────────────────────────────────────────────────────────────────────────────
// PRICING — Patent 2 § 5A
// All prices are strings for display. Change here to update everywhere.
// ─────────────────────────────────────────────────────────────────────────────

// Gold — Individual
export const GOLD_PRICE_WEEKLY_WEBSITE  = '$4.99';
export const GOLD_PRICE_WEEKLY_INAPP    = '$6.99';
export const GOLD_PRICE_MONTHLY_WEBSITE = '$16.99';
export const GOLD_PRICE_MONTHLY_INAPP   = '$24.99';

// Platinum — Individual
export const PLATINUM_PRICE_WEEKLY_WEBSITE  = '$6.99';
export const PLATINUM_PRICE_WEEKLY_INAPP    = '$8.99';
export const PLATINUM_PRICE_MONTHLY_WEBSITE = '$24.99';
export const PLATINUM_PRICE_MONTHLY_INAPP   = '$34.99';

// Organization
export const ORG_PRICE_BASE_MONTHLY_WEBSITE     = '$39.99';
export const ORG_PRICE_BASE_MONTHLY_INAPP       = '$46.99';
export const ORG_PRICE_PER_MEMBER_MONTHLY_WEBSITE = '$14.99';
export const ORG_PRICE_PER_MEMBER_MONTHLY_INAPP   = '$17.99';

// Monthly savings labels (shown on billing toggle)
export const GOLD_MONTHLY_SAVINGS_PCT     = '20%';
export const PLATINUM_MONTHLY_SAVINGS_PCT = '17%';

// ─────────────────────────────────────────────────────────────────────────────
// TIER FEATURE FLAGS — Patent 2 § 5A / Claims 16, 18
// What each tier unlocks. Controls UI feature lock icons and paywall prompts.
// ─────────────────────────────────────────────────────────────────────────────

export const TIER_FEATURES = {
  free: {
    name: 'Free',
    allowJournalAI:      false,
    allowCheckinAI:      true,
    allowAssessmentAI:   true,
    allowFourthStepAI:   false,
    allowServiceSearch:  false,
    allowMessageScoring: false,
    maxConnections:      1,
    maxUserGroups:       0,
    maxGroupMembers:     0,
    messageScoringInterval: 0,
    messageScoringDailyMax: 0,
  },
  gold: {
    name: 'Gold',
    allowJournalAI:      true,
    allowCheckinAI:      true,
    allowAssessmentAI:   true,
    allowFourthStepAI:   true,
    allowServiceSearch:  true,
    allowMessageScoring: true,
    maxConnections:      10,
    maxUserGroups:       1,
    maxGroupMembers:     15,
    messageScoringInterval: 5,   // every 5th message
    messageScoringDailyMax: 20,
  },
  platinum: {
    name: 'Platinum',
    allowJournalAI:      true,
    allowCheckinAI:      true,
    allowAssessmentAI:   true,
    allowFourthStepAI:   true,
    allowServiceSearch:  true,
    allowMessageScoring: true,
    maxConnections:      -1,     // unlimited
    maxUserGroups:       2,
    maxGroupMembers:     20,
    messageScoringInterval: 3,   // every 3rd message
    messageScoringDailyMax: 40,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PATENT TAXONOMY — Patent 1 § 2 / Claims 1, 8, 30
// 12 character defects and 12 spiritual principles in fixed one-to-one pairs.
// Fear↔Faith is the root pair.
// ─────────────────────────────────────────────────────────────────────────────

export const CHARACTER_DEFECTS = [
  'Pride', 'Greed', 'Lust', 'Anger', 'Gluttony',
  'Envy', 'Sloth', 'Fear', 'Self-pity', 'Guilt', 'Shame', 'Dishonesty',
];

export const SPIRITUAL_PRINCIPLES = [
  'Honesty', 'Hope', 'Faith', 'Courage', 'Integrity',
  'Willingness', 'Humility', 'Love', 'Patience', 'Tolerance',
  'Compassion', 'Perseverance',
];

export const DEFECT_PRINCIPLE_PAIRS = [
  { pair: 1,  defect: 'Fear',        principle: 'Faith',       note: 'ROOT PAIR' },
  { pair: 2,  defect: 'Pride',       principle: 'Humility'     },
  { pair: 3,  defect: 'Dishonesty',  principle: 'Honesty'      },
  { pair: 4,  defect: 'Selfishness', principle: 'Selflessness' },
  { pair: 5,  defect: 'Anger',       principle: 'Patience'     },
  { pair: 6,  defect: 'Lust',        principle: 'Purity'       },
  { pair: 7,  defect: 'Greed',       principle: 'Generosity'   },
  { pair: 8,  defect: 'Envy',        principle: 'Gratitude'    },
  { pair: 9,  defect: 'Sloth',       principle: 'Diligence'    },
  { pair: 10, defect: 'Self-pity',   principle: 'Acceptance'   },
  { pair: 11, defect: 'Guilt',       principle: 'Forgiveness'  },
  { pair: 12, defect: 'Shame',       principle: 'Grace'        },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT THRESHOLDS — Patent 1 § 9E / Claim 44
// ─────────────────────────────────────────────────────────────────────────────

export const MIN_WORD_COUNT = 133; // Minimum words for journal/gratitude submissions

// ─────────────────────────────────────────────────────────────────────────────
// INVITE & ORG CODE SPECS — Patent 1 § 11 / Claims 19, 20
// ─────────────────────────────────────────────────────────────────────────────

export const INVITE_CODE_CHARSET     = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no I, O, L, 0, 1
export const INVITE_CODE_LENGTH      = 6;
export const ORG_CODE_LENGTH         = 8;
export const INVITE_CODE_MAX_ATTEMPTS = 10;

// ─────────────────────────────────────────────────────────────────────────────
// AI LANGUAGE GUARDRAILS — Patent 1 § 18 / Claim 38
// All AI output must use these substitutions.
// ─────────────────────────────────────────────────────────────────────────────

export const AI_LANGUAGE_SUBSTITUTIONS = [
  { original: 'Higher Power',                          replacement: 'a power greater than themselves' },
  { original: "turn will and life over to God's care", replacement: 'surrendering self-will'          },
  { original: 'conscious contact with a Higher Power', replacement: 'deep spiritual alignment'        },
  { original: 'played God',                            replacement: 'tried to control outcomes'       },
];

export const AI_ADDRESS_STYLE = 'second-person'; // Always "you/your", never "they/their"
