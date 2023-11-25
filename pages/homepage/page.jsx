import React from 'react';
import IntroPage from '../intropage/page';
import VideoPage from '../videopage/page';
import ZimaTeamPage from '../zimateampage/page';
import ZimaAI from '../zimaai/page';
import ScateredPage from '../scateredpage/page';
import ZimoMeet from '../zimomeet/page';
import ZimaGamingStudio from '../zimagamingstudio/page';


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
    </div>
  );
};

export default HomePage;
