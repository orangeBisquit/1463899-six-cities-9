import {BeatLoader} from 'react-spinners';

function LoadingScreen() {
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <BeatLoader color={'rgb(68, 129, 195)'} loading size={150}/>
    </div>
  );
}

export default LoadingScreen;
