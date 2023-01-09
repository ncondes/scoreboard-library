import { FC, useRef } from 'react';

interface Props {
   editMatch: (matchId: string, score: [number, number]) => void;
}

export const EditMatch: FC<Props> = ({ editMatch }) => {
   const matchIdRef = useRef<HTMLInputElement>(null);
   const homeTeamScoreRef = useRef<HTMLInputElement>(null);
   const awayTeamScoreRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      console.log(homeTeamScoreRef);

      const matchId = matchIdRef.current!.value;
      const homeTeamScore = homeTeamScoreRef.current!.value;
      const awayTeamScore = awayTeamScoreRef.current!.value;

      const score: [number, number] = [
         Number(homeTeamScore),
         Number(awayTeamScore),
      ];

      editMatch(matchId, score);

      // reset input
      matchIdRef.current!.value = '';
      homeTeamScoreRef.current!.value = '';
      awayTeamScoreRef.current!.value = '';
   };

   return (
      <div className="form">
         <input placeholder="Match ID" ref={matchIdRef} type="text" />
         <input
            placeholder="New home team score"
            ref={homeTeamScoreRef}
            type="number"
         />
         <input
            placeholder="New away team score"
            ref={awayTeamScoreRef}
            type="number"
         />
         <button type="button" onClick={handleClick}>
            Edit Match
         </button>
      </div>
   );
};
