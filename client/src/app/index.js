import { NavBar, Stream } from '../components';

function App() {
  return (
    <div className='nl-app__container'>
      <NavBar />
      <div className='nl-app__content'>
        <div className='nl-video-player__container'>
          VIDEO HERE
          <Stream />
        </div>
        <div>
          CHAT
        </div>
      </div>
      <footer className='nl-footer__container'>
        FOOTER HERE
      </footer>
    </div>
  );
}

export default App;
