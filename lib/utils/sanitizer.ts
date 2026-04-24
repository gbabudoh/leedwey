/**
 * Sanitizes communication by redacting phone numbers, emails, and URLs.
 * This is a core part of Leadway's "Closed-Loop" trust system.
 */
export function sanitizeCommunication(text: string): string {
  if (!text) return text;

  // Matches international & local phone formats
  const phonePattern = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
  
  // Matches typical URL structures (.com, .net, etc.)
  const urlPattern = /(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?/g;
  
  // Matches standard email formats
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  return text
    .replace(phonePattern, "[PROTECTED_CONTACT]")
    .replace(urlPattern, "[PROTECTED_LINK]")
    .replace(emailPattern, "[PROTECTED_EMAIL]");
}

/**
 * Checks if a text contains protected content.
 */
export function hasProtectedContent(text: string): boolean {
  if (!text) return false;
  const sanitized = sanitizeCommunication(text);
  return sanitized.includes("[PROTECTED_");
}
