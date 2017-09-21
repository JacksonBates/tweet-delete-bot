const Twit = require( 'twit' );
const config = require( './config' );

const bot = new Twit( config );

// bot.post( 'statuses/destroy/:id', {
//           id: '885766060053495800'
//         }, (err, postData, response) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log('JIMMYRUSTLE')
//             console.log(postData)
//           }
//         });

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

// bot.post( 'statuses/update', {
//   status: 'Firing up my code editor for the first time since my son was born, to write a Tweet delete bot'
// }, ( err, data, response ) => {
//   if ( err ) {
//     console.log( err )
//   } else {
//     console.log( `${data.text} tweeted!` )
//   }
// })

// var result = [];

bot.get('statuses/user_timeline', {
  count: 40 // gets most recent 200 statuses
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    // checks date of status
    var now = Date.now();
    var ten_days_ago = now - 864000000;
    var id = '';
    for ( var i = 0; i < data.length; i++ ) {
      // note the following does not mean 'less than 10 days ago'
      // if the created at date is smaller than the 10 days ago date...
      // i.e. more than 10 days ago!
      if ( Date.parse( data[i].created_at) < ten_days_ago ) {
        id = data[i].id;
        console.log('found tweet: ', id)
        console.log('waiting')
        wait(10000)
        console.log('attempting to delete: ', id)
        bot.post( 'statuses/destroy/:id', {
          id: id
        }, (err, postData, response) => {
          if (err) {
            console.log(err)
          } else {
            console.log('JIMMYRUSTLE')
            console.log(postData)
          }
        });
      }
    }
  }
})