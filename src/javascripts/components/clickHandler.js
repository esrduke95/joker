import getJoke from './app';

const clickHandler = () => {
  $('body').on('click', '.btn', (e) => {
    console.warn(e.currentTarget.id);
    getJoke.getJoke();
  });
};

export default { clickHandler };
