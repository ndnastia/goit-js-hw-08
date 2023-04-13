import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

player.on('play', function () {
  console.log('played the video!');
});


const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('play', onPlay);

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
