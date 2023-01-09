import { IMatch } from '../interfaces';

export const swap = (arr: IMatch[], index: number) => {
   [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
};

export const getPoints = (score: [number, number]) => score[0] + score[1];

export const sortByScore = (scoreboard: IMatch[]): IMatch[] => {
   // order scoreboard by points
   const sortedScoreboard: IMatch[] = scoreboard.sort(
      (a, b) => getPoints(b.score) - getPoints(a.score)
   );

   for (let i = 1; i < sortedScoreboard.length; i++) {
      const prev = sortedScoreboard[i - 1];
      const curr = sortedScoreboard[i];

      if (
         getPoints(curr.score) === getPoints(prev.score) &&
         curr.dateCreated > prev.dateCreated
      ) {
         swap(sortedScoreboard, i);
      }
   }

   return sortedScoreboard;
};
