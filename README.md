# Twitter Delete and Unlike Bot

## Warning

Tweet deletion is irreversible. 

If you accidentally delete tweets you did not intend, that's your own silly fault for running code you got from a stranger on the internet. 

_This code is provided as is, you are encouraged to review it carefully before running it to ensure it does what you think it will do._

**I take no responsibility for erroneously deleted tweets!**

My personal Twitter profile uses this bot every day. If you want to see what it looks like when I eat my own dog food, my timeline is here: [@JacksonBates](https://twitter.com/JacksonBates). I've tweeted thousands of times, but there is most likely around 100 or fewer tweets in my timeline at any given point.

## Features

Designed to be run on a schedule, or simply from the command line.

`npm start` triggers two bot actions:

1. Tweets older than 10 days will be deleted;

2. Liked / Favourited tweets older than 10 days will be unliked / unfaved.

You can 'save' tweets from being deleted by liking your own tweets. Yes, this is a little like smelling your own toots, but it is the price of preserving your wittiest tweets. Once you no longer want to save them, unlike them again and they will be deleted the next time the script runs.  

## Setup

1. Create your own Twitter App at [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)

2. Obtain the API keys: `API Key`, `API Secret`, `Access Token` and `Access Token Secret`

3. If you are planning on keeping your code on a public repo like GitHub, then store these keys in a `.env` file and remember to add the file to your `.gitignore` file. You can also use the `.env` file to manage your environment variables via the `dotenv` npm package include in the `package.json`.

    `.env` file formatting:
```
CONSUMER_KEY=U************************o
CONSUMER_SECRET=U*******************************************S
ACCESS_TOKEN=2******5-T************************************e
ACCESS_TOKEN_SECRET=K*******************************************k
```

4. If you are hosting via Heroku, remember to set the variables manually for your app.

5. To customise for your own Twitter account, change the value exported by the `screen_name.js`  file in the `src` folder to **your** screen name. For obvious reasons, you can only delete your own tweets!

6. Schedule! On a Linux machine, you may want to set up a cronjob. Windows users can use Task Scheduler. Alternatively, you can host this for free on Heroku and have the Heroku Scheduler add-on run it for you remotely.


