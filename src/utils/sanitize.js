/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Sanitize email to ensure it's valid format
 * @param {string} email - The email to validate
 * @returns {string} - Sanitized email
 */
export const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return '';
  
  const sanitized = email.toLowerCase().trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

/**
 * Sanitize form data object
 * @param {Object} formData - Form data object
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (key === 'from_email' || key.includes('email')) {
      sanitized[key] = sanitizeEmail(value);
    } else {
      sanitized[key] = sanitizeInput(value);
    }
  }
  
  return sanitized;
};
