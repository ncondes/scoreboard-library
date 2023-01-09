import { useState } from 'react';
import { sortByScore } from '../helpers';
import { IMatch } from '../interfaces';

export const useScoreboard = () => {
   const [scoreboard, setScoreboard] = useState<IMatch[]>([]);

   const createMatch = (homeTeam: string, awayTeam: string) => {
      if (!homeTeam || !awayTeam)
         throw new Error('team names were not provided');

      const match: IMatch = {
         awayTeam,
         dateCreated: Date.now(),
         homeTeam,
         id: crypto.randomUUID().split('-')[0],
         score: [0, 0],
      };

      setScoreboard((curr) => [...curr, match]);
   };

   const finishMatch = (matchId: string) => {
      if (!matchId) throw new Error('id was not provided');

      setScoreboard((curr) => curr.filter(({ id }) => id !== matchId));
   };

   const editMatch = (matchId: string, score: [number, number]) => {
      if (!matchId) throw new Error('id was not provided');

      setScoreboard((curr) =>
         curr.map((match) =>
            match.id === matchId ? { ...match, score } : match
         )
      );
   };

   const summary: IMatch[] = sortByScore(scoreboard);

   return {
      scoreboard,
      createMatch,
      finishMatch,
      editMatch,
      summary,
   };
};
