import { FC, useRef } from 'react';

interface Props {
   createMatch: (homeTeam: string, awayTeam: string) => void;
}

export const CreateMatch: FC<Props> = ({ createMatch }) => {
   const homeTeamRef = useRef<HTMLInputElement>(null);
   const awayTeamRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      const homeTeam = homeTeamRef.current!.value;
      const awayTeam = awayTeamRef.current!.value;

      if (!homeTeam || !awayTeam) return;

      createMatch(homeTeam, awayTeam);

      // reset input
      homeTeamRef.current!.value = '';
      awayTeamRef.current!.value = '';
   };

   return (
      <div className="form">
         <input placeholder="Home Team" ref={homeTeamRef} type="text" />
         <input placeholder="Away Team" ref={awayTeamRef} type="text" />
         <button type="button" onClick={handleClick}>
            Create Match
         </button>
      </div>
   );
};
