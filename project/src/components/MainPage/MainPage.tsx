import React from 'react';
import MainPageFull from './MainPageFull/MainPageFull';

type MainPageProps = {
  offersCount: number;
}

function MainPage({offersCount}: MainPageProps) {
  return (
    /*<MainPageEmpty/>*/
    <MainPageFull offersCount={offersCount}/>

  );
}


export default MainPage;
