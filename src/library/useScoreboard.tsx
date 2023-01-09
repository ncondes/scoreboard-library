import { useState } from 'react';
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

   const finishMatch = () => {};

   const editMatch = () => {};

   const summary: IMatch[] = [];

   return {
      scoreboard,
      createMatch,
      finishMatch,
      editMatch,
      summary,
   };
};
