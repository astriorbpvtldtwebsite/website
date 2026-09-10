import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '../useMediaQuery';

describe('useMediaQuery', () => {
  let listeners = [];

  beforeEach(() => {
    listeners = [];
    window.matchMedia = vi.fn().mockImplementation((query) => {
      let currentMatches = query.includes('max-width: 768px');
      return {
        matches: currentMatches,
        media: query,
        onchange: null,
        addEventListener: vi.fn((event, callback) => {
          listeners.push(callback);
        }),
        removeEventListener: vi.fn((event, callback) => {
          listeners = listeners.filter((l) => l !== callback);
        }),
        addListener: vi.fn((callback) => {
          listeners.push(callback);
        }),
        removeListener: vi.fn((callback) => {
          listeners = listeners.filter((l) => l !== callback);
        }),
        dispatchEvent: vi.fn((event) => {
          listeners.forEach((callback) => callback(event));
        }),
      };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return initial match correctly based on matchMedia', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(true);

    const { result: desktopResult } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(desktopResult.current).toBe(false);
  });

  it('should update value when media query change event triggers', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(true);

    act(() => {
      listeners.forEach((cb) => cb({ matches: false }));
    });

    expect(result.current).toBe(false);
  });
});
