const profile = {
  name: 'Pueblo Master',
  tag: 'sdsd',
  location: 'Jamaica',
  avatar: 'http://sdsdsdsdsd',
  stats: {
    followers: 5603,
    views: 2345,
    likes: 1235,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&psig=AOvVaw2gGZ2MF_gkQZr2izSxphyK&ust=1682444037623000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiWicyGw_4CFQAAAAAdAAAAABAE',
    name,
    tag,
    location = 'Ukraine',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
  <img src='${avatar}' alt="user avatar"/>
  <p>${name} <span>@${tag}</span></p>
  <p>Location: ${location}</p>
  <ul>
  <li>Followers: ${followers}</li>
  <li>Views: ${views}</li>
  <li>Likes: ${likes}</li>
  </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);
document.body.insertAdjacentHTML('afterbegin', markup);
