import musicData from './data/music.js';

{
  /* <article>
    <h1>Назва треку</h1>
    <h3>Artist name</h3>
    <h3>Album name</h3>
    <audio src=""></audio>
</article> */
}

const musicCart = document.querySelector('.musicList');

const createMusicList = function ({ name, artistName, albumName, previewURL }) {
  const musicBox = document.createElement('articl');
  musicBox.classList.add('musicBox');
  const track_Name = document.createElement('h1');
  track_Name.classList.add('trackStyle');
  track_Name.textContent = name;
  const artist_Name = document.createElement('h3');
  artist_Name.classList.add('nameStyle');
  artist_Name.textContent = artistName;
  const album_Name = document.createElement('h3');
  album_Name.classList.add('albumStyle');
  album_Name.textContent = albumName;
  const play = document.createElement('audio');
  play.src = { previewURL };

  musicBox.append(track_Name, artist_Name, album_Name, play);
  return musicBox;
};

const musicElements = musicData.map(createMusicList);
musicCart.append(...musicElements);
