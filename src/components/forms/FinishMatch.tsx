import { FC, useRef } from 'react';

interface Props {
   finishMatch: (matchId: string) => void;
}

export const FinishMatch: FC<Props> = ({ finishMatch }) => {
   const matchIdRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      const matchId = matchIdRef.current!.value;

      if (!matchId) return;

      finishMatch(matchId);

      // reset input
      matchIdRef.current!.value = '';
   };

   return (
      <div className="form">
         <input placeholder="Match ID" ref={matchIdRef} type="text" />
         <button type="button" onClick={handleClick}>
            Finish Match
         </button>
      </div>
   );
};
