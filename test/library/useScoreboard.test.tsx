import { describe, expect, it } from 'vitest';
import { useScoreboard } from '../../src/library';
import { renderHook } from '@testing-library/react';

describe('useScoreboard', () => {
   it('should be a function', () => {
      expect(useScoreboard).toBeTypeOf('function');
   });

   it('should return an object with the request operations and data', () => {
      const { result } = renderHook(() => useScoreboard());
      const { scoreboard, createMatch, finishMatch, editMatch, summary } =
         result.current;

      expect(scoreboard).toEqual(expect.any(Array));
      expect(createMatch).toEqual(expect.any(Function));
      expect(finishMatch).toEqual(expect.any(Function));
      expect(editMatch).toEqual(expect.any(Function));
      expect(summary).toEqual(expect.any(Array));
   });
});
