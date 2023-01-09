import { FC } from 'react';
import { IMatch } from '../../interfaces';

export const Match: FC<IMatch> = ({ id, homeTeam, awayTeam, score }) => {
   return (
      <li>
         <div className="match">
            <span>{id}</span>
            <div>
               <span>{homeTeam}</span>
               <span>{` ${score[0]} - ${score[1]} `}</span>
               <span>{awayTeam}</span>
            </div>
         </div>
      </li>
   );
};
