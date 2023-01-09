import { useState } from 'react';

export const useScoreboard = () => {
   const [scoreboard, setScoreboard] = useState([]);

   return {
      scoreboard,
   };
};
