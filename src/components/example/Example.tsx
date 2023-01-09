import { useScoreboard } from '../../library';
import { CreateMatch, EditMatch, FinishMatch } from '../forms';
import { Scoreboard } from '../scoreboard';
import '../../styles/Example.css';

export const Example = () => {
   const { createMatch, finishMatch, editMatch, summary } = useScoreboard();

   return (
      <div className="container">
         <div className="forms">
            <CreateMatch createMatch={createMatch} />
            <FinishMatch finishMatch={finishMatch} />
            <EditMatch editMatch={editMatch} />
         </div>
         <Scoreboard data={summary} />
      </div>
   );
};
