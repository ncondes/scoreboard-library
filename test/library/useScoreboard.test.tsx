import { describe, expect, it } from 'vitest';
import { useScoreboard } from '../../src/library';
import { renderHook, act } from '@testing-library/react';

describe('useScoreboard', () => {
   // useScoreboard
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

   // createMatch
   it('should increment the length of the scoreboard by 1 upon creating a match', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch } = result.current;

      const initialLength = result.current.scoreboard.length;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const newLength = result.current.scoreboard.length;

      expect(initialLength + 1).toBe(newLength);
   });

   it('shosuld add a new match with the names provided in the function as parameters', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const { homeTeam, awayTeam } = result.current.scoreboard[0];

      expect(homeTeam).toBe('Colombia');
      expect(awayTeam).toBe('Peru');
   });

   it('should add a new match with a default score of [0,0] upon creating a match', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const { score } = result.current.scoreboard[0];
      expect(score).toEqual([0, 0]);
   });

   it('should have an id property', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const { id } = result.current.scoreboard[0];
      expect(Boolean(id)).toBe(true);
   });

   it('if there is match already stored in the scoreboard and we create a new one, length should increase again', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const lengthAfterAddOneMatch = result.current.scoreboard.length;

      act(() => {
         createMatch('Venezuela', 'Bolivia');
      });

      const lengthAfterAddAnotherMatch = result.current.scoreboard.length;

      expect(lengthAfterAddOneMatch + 1).toBe(lengthAfterAddAnotherMatch);
   });

   // finishMatch
   it('should remove a match from scoreboard', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch, finishMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
         createMatch('Venezuela', 'Bolivia');
      });

      const { id } = result.current.scoreboard[0];

      act(() => {
         finishMatch(id);
      });

      expect(result.current.scoreboard.length).toBe(1);
   });

   it('should keep the same length if the id provided does not exist in the scoreboard', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch, finishMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
         createMatch('Venezuela', 'Bolivia');
      });

      act(() => {
         finishMatch('ID');
      });

      expect(result.current.scoreboard.length).toBe(2);
   });

   // editMatch
   it('should update the score of a match with the newScore', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch, editMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
      });

      const { id } = result.current.scoreboard[0];
      const newScore: [number, number] = [0, 3];

      act(() => {
         editMatch(id, newScore);
      });

      const { score } = result.current.scoreboard[0];

      expect(score).toEqual(newScore);
   });

   it('should keep the same length if the id provided does not exist in the scoreboard', () => {
      const { result } = renderHook(() => useScoreboard());
      const { createMatch, editMatch } = result.current;

      act(() => {
         createMatch('Colombia', 'Peru');
         createMatch('Venezuela', 'Bolivia');
      });

      const newScore: [number, number] = [0, 3];

      act(() => {
         editMatch('ID', newScore);
      });

      expect(result.current.scoreboard.length).toBe(2);
   });
});
