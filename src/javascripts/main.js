import '../styles/main.scss';
import getJoke from './components/app';
import setupButton from './components/buttons';
import clickHandler from './components/clickHandler';

const init = () => {
  getJoke.getJoke();
  setupButton.setupButton();
  clickHandler.clickHandler();
};

init();
