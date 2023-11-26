import React from 'react';
import IntroPage from '../intropage/page';
import VideoPage from '../videopage/page';
import ZimaTeamPage from '../zimateampage/page';
import ZimaAI from '../zimaai/page';
import ScateredPage from '../scateredpage/page';
import ZimoMeet from '../zimomeet/page';
import ZimaGamingStudio from '../zimagamingstudio/page';
import Zdoc from '../zdoc/pages';
import ZimaCareer from '../zimacareer/pages';
import ZimaInternship from '../zimainternship/pages';
import VerySadMusicPage from '../verysadmusicpage/page';
import JoinOurTeam from '../joinourteam/page';
import Application from '../application/page';


const HomePage = () => {


  return (
    <div>
        <IntroPage/>
        <VideoPage/>
        <ZimaTeamPage/>
        <ZimaAI/>
        <ScateredPage/>
        <ZimoMeet/>
        <ZimaGamingStudio/>
        <Zdoc/>
        <ZimaCareer/>
        <ZimaInternship/>
        <VerySadMusicPage/>
        <JoinOurTeam/>
        <Application/>
    </div>
  );
};

export default HomePage;
