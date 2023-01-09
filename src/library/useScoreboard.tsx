import { useState } from 'react';
import { IMatch } from '../interfaces';

export const useScoreboard = () => {
   const [scoreboard, setScoreboard] = useState<IMatch[]>([]);

   const createMatch = () => {};
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
