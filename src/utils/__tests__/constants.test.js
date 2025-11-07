import { describe, it, expect } from 'vitest';
import {
  PRELOADER_DURATION,
  SUCCESS_MESSAGE_DURATION,
  ANIMATION_DURATION,
  PARTICLE_COUNT,
  EMAIL_CONFIG,
} from '../constants';

describe('Constants', () => {
  it('should have correct preloader duration', () => {
    expect(PRELOADER_DURATION).toBe(2500);
    expect(typeof PRELOADER_DURATION).toBe('number');
  });

  it('should have correct success message duration', () => {
    expect(SUCCESS_MESSAGE_DURATION).toBe(3000);
    expect(typeof SUCCESS_MESSAGE_DURATION).toBe('number');
  });

  it('should have animation duration object with correct values', () => {
    expect(ANIMATION_DURATION).toHaveProperty('fast');
    expect(ANIMATION_DURATION).toHaveProperty('normal');
    expect(ANIMATION_DURATION).toHaveProperty('slow');
    expect(ANIMATION_DURATION).toHaveProperty('verySlow');
    expect(ANIMATION_DURATION.fast).toBeLessThan(ANIMATION_DURATION.normal);
    expect(ANIMATION_DURATION.normal).toBeLessThan(ANIMATION_DURATION.slow);
  });

  it('should have particle count with mobile optimization', () => {
    expect(PARTICLE_COUNT.mobile).toBeLessThan(PARTICLE_COUNT.hero);
    expect(PARTICLE_COUNT.mobile).toBe(5);
  });

  it('should have email configuration', () => {
    expect(EMAIL_CONFIG).toHaveProperty('companyName');
    expect(EMAIL_CONFIG).toHaveProperty('companyEmail');
    expect(EMAIL_CONFIG.companyName).toBe('AstriOrb');
    expect(EMAIL_CONFIG.companyEmail).toContain('@');
  });
});
