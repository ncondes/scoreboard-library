import { describe, expect, it } from 'vitest';
import { getPoints, sortByScore } from '../../src/helpers';
import { IMatch } from '../../src/interfaces';

const data: IMatch[] = [
   {
      awayTeam: 'Mexico',
      homeTeam: 'Canada',
      dateCreated: 0,
      id: '0',
      score: [0, 5],
   },
   {
      awayTeam: 'Spain',
      homeTeam: 'Brazil',
      dateCreated: 1,
      id: '1',
      score: [10, 2],
   },
   {
      awayTeam: 'Germany',
      homeTeam: 'France',
      dateCreated: 2,
      id: '2',
      score: [2, 2],
   },
   {
      awayTeam: 'Uruguay',
      homeTeam: 'Italy',
      dateCreated: 3,
      id: '3',
      score: [6, 6],
   },
   {
      awayTeam: 'Argentina',
      homeTeam: 'Australia',
      dateCreated: 4,
      id: '4',
      score: [3, 1],
   },
];

const expected: IMatch[] = [
   {
      awayTeam: 'Uruguay',
      homeTeam: 'Italy',
      dateCreated: 3,
      id: '3',
      score: [6, 6],
   },
   {
      awayTeam: 'Spain',
      homeTeam: 'Brazil',
      dateCreated: 1,
      id: '1',
      score: [10, 2],
   },
   {
      awayTeam: 'Mexico',
      homeTeam: 'Canada',
      dateCreated: 0,
      id: '0',
      score: [0, 5],
   },
   {
      awayTeam: 'Argentina',
      homeTeam: 'Australia',
      dateCreated: 4,
      id: '4',
      score: [3, 1],
   },
   {
      awayTeam: 'Germany',
      homeTeam: 'France',
      dateCreated: 2,
      id: '2',
      score: [2, 2],
   },
];

describe('orderByScore', () => {
   it('should return an array sorted by total score', () => {
      const result = sortByScore(data);

      const points = result
         .map((match) => match.score)
         .map((score) => getPoints(score))
         .sort((a, b) => b - a);

      result.forEach((match, index) => {
         expect(getPoints(match.score)).toEqual(points[index]);
      });
   });

   it('should return the matches ordered by the most recently added if the score is the same', () => {
      const result = sortByScore(data);

      for (let i = 1; i < result.length; i++) {
         const prev = result[i - 1];
         const curr = result[i];

         if (getPoints(curr.score) === getPoints(prev.score)) {
            expect(curr.dateCreated).toBeLessThan(prev.dateCreated);
         }
      }
   });

   it('should return the result expected', () => {
      const result = sortByScore(data);
      expect(result).toEqual(expected);
   });
});
