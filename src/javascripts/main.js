import '../styles/main.scss';
import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    const singleJoke = response.data;
    resolve(singleJoke);
  }).catch((error) => reject(error));
});

const clickHandler = () => {
  $('body').on('click', '.btn', (e) => {
    console.warn(e.currentTarget.id);
    getJoke().then((response) => {
      const data = response;
      $('#joke-text').html(data.setup);
    });
  });
};

const setupButton = () => {
  $('#app').html('<button type="button" id="setup" class="btn btn-primary">click 4 funnies</button>');
};

const init = () => {
  clickHandler();
  setupButton();
  getJoke();
};

init();
