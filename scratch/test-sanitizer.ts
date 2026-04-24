import { sanitizeCommunication, hasProtectedContent } from './lib/utils/sanitizer';

const testCases = [
  "Hello, call me at +1 234 567 8900",
  "My email is test@example.com",
  "Check out my site: https://google.com",
  "Just a normal message about manufacturing",
  "Contact me at 555-123-4567 for a deal",
  "Send mail to business.reg@factory.net",
  "Visit www.scamsite.org/steal-money",
];

console.log("--- Sanitization Test ---");
testCases.forEach(text => {
  const sanitized = sanitizeCommunication(text);
  const flagged = hasProtectedContent(text);
  console.log(`Original: ${text}`);
  console.log(`Sanitized: ${sanitized}`);
  console.log(`Flagged: ${flagged}`);
  console.log("-------------------------");
});
