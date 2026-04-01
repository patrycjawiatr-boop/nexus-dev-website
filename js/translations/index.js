import { common } from './common.js';
import { home } from './home.js';
import { pricing } from './pricing.js';
import { checklistPage } from './checklist.js';
import { services } from './services.js';
import { portfolio } from './portfolio.js';
import { faq } from './faq.js';

/**
 * Combined translations object for heritage/backward compatibility
 * This will be available globally as window.translations
 */
const translations = {
  ...common,
  ...home,
  ...pricing,
  ...checklistPage,
  ...services,
  ...portfolio,
  ...faq
};

// Expose to global window object
window.translations = translations;

export default translations;
