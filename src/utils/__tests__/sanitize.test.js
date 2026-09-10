import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '../sanitize';

describe('sanitizeInput', () => {
  it('should escape HTML tags', () => {
    const input = '<script>alert("xss")</script>Hello';
    const result = sanitizeInput(input);
    expect(result).toContain('&lt;');
    expect(result).toContain('&gt;');
    expect(result).not.toContain('<script>');
  });

  it('should trim whitespace', () => {
    const input = '  Hello World  ';
    const result = sanitizeInput(input);
    expect(result).toBe('Hello World');
  });

  it('should handle empty strings', () => {
    expect(sanitizeInput('')).toBe('');
    expect(sanitizeInput('   ')).toBe('');
  });

  it('should handle null and undefined', () => {
    expect(sanitizeInput(null)).toBe('');
    expect(sanitizeInput(undefined)).toBe('');
  });

  it('should preserve safe text', () => {
    const input = 'Hello World 123';
    const result = sanitizeInput(input);
    expect(result).toBe(input);
  });

  it('should handle special characters safely', () => {
    const input = 'Test & <test> "quotes"';
    const result = sanitizeInput(input);
    expect(result).toContain('&amp;');
    expect(result).toContain('&lt;');
    expect(result).toContain('&gt;');
    expect(result).toContain('&quot;');
  });
});

describe('sanitizeEmail', () => {
  it('should validate and normalize correct email addresses', async () => {
    const { sanitizeEmail } = await import('../sanitize');
    expect(sanitizeEmail(' USER@Example.COM ')).toBe('user@example.com');
  });

  it('should reject invalid email formats', async () => {
    const { sanitizeEmail } = await import('../sanitize');
    expect(sanitizeEmail('invalid-email')).toBe('');
    expect(sanitizeEmail('@example.com')).toBe('');
    expect(sanitizeEmail(null)).toBe('');
  });
});

describe('sanitizeFormData', () => {
  it('should sanitize both general inputs and email fields', async () => {
    const { sanitizeFormData } = await import('../sanitize');
    const data = {
      from_name: '<b>John</b>',
      from_email: ' TEST@Domain.COM ',
      message: 'Hello <world>',
    };
    const sanitized = sanitizeFormData(data);
    expect(sanitized.from_name).toBe('&lt;b&gt;John&lt;&#x2F;b&gt;');
    expect(sanitized.from_email).toBe('test@domain.com');
    expect(sanitized.message).toContain('&lt;world&gt;');
  });
});
