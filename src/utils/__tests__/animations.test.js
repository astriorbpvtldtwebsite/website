import { describe, it, expect } from 'vitest';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../animations';

describe('Animation Variants', () => {
  it('should define valid staggerContainer variants', () => {
    expect(staggerContainer).toHaveProperty('hidden');
    expect(staggerContainer).toHaveProperty('show');
    expect(staggerContainer.hidden.opacity).toBe(0);
    expect(staggerContainer.show.opacity).toBe(1);
    expect(staggerContainer.show.transition.staggerChildren).toBe(0.2);
  });

  it('should define valid fadeInUp variants with spring physics', () => {
    expect(fadeInUp.hidden.y).toBe(30);
    expect(fadeInUp.hidden.opacity).toBe(0);
    expect(fadeInUp.show.y).toBe(0);
    expect(fadeInUp.show.opacity).toBe(1);
    expect(fadeInUp.show.transition.type).toBe('spring');
  });

  it('should define valid fadeInLeft and fadeInRight directional variants', () => {
    expect(fadeInLeft.hidden.x).toBe(-50);
    expect(fadeInLeft.show.x).toBe(0);
    expect(fadeInRight.hidden.x).toBe(50);
    expect(fadeInRight.show.x).toBe(0);
  });
});
