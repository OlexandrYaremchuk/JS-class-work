/*
 * Методи об'єкта та this при звернені до властивостей в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playList = {
  name: 'Мій супер плйлист',
  rating: 5,
  tracks: ['track-1', 'track-2, track-3', 'track-4', 'track-5'],
  showInfo() {
    console.log(this);
  },
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playList.showInfo();
playList.changeName('Мій новий плейлист');
playList.addTrack('track-6');
playList.addTrack('track-7');
playList.addTrack('track-8');
playList.updateRating(10);
console.log(playList.getTrackCount());
playList.showInfo();
