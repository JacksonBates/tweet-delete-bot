const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

const screen_name = 'JacksonBates';

const now = Date.now();
const ten_days = 864000000;

// helper functions
function olderThanTenDays(check_date) {
    return check_date < now - ten_days
};

function getUserLikes(user, done) {
  let data = [];
  search();

  function search(lastId) {
    let args = {
      screen_name: screen_name,
      count: 200
    };
    if (lastId) args.max_id = lastId;
  

    bot.get('favorites/list', args, onTimeline);

    function onTimeline(err, chunk) {
      if (err) {
        console.log('Twitter search failed!');
        return done(err);
      }

      // if (!chunk.length) {
      //   console.log('No favourites found!');
      //   // return done(undefined, data);
      // }

      //Get rid of the first element of each iteration (not the first time)
      if (data.length) {
        var popped = chunk.shift();
      }

      data = data.concat(popped, chunk);

      if (chunk.length) {
        var thisId = parseInt(data[data.length - 1].id);
        return search(thisId);
      }
      console.log(data.length + ' tweets imported');
      return done(undefined, data);    
  }
}}

getUserLikes(screen_name, (undefined, data) => {
  data.shift();
  // console.log(data[90]);
  for (var i = 0; i < data.length -1; i++) {
    if (olderThanTenDays(Date.parse(data[i].created_at)) && data[i].user.screen_name !== screen_name) {
      bot.post('favorites/destroy', {
        id: data[i].id_str.toString()
      }, (e, d, r) => {
        if (e) console.log(e);
      })
    }
  }
})

