import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProprs = {
  offersCount: number;
};

function App({offersCount}: AppScreenProprs): JSX.Element {
  return (
    <MainScreen offersCount={offersCount}/>
  );
}

export default App;
