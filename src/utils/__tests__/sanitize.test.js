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
