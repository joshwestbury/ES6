/* you can ignore global variables by adding a comment to the top of your code
for example: if we wanted to disable eslint for google analytics function ga.track()
and the twitter function twttr.trackConversion(), we would
add the following to the top of our code */

/* NOTE: this is also how we can ignore specific rules in a particular file.
For example: we would add a block comment */

/* eslint-disable ENTER RULE NAME HERE */

/* globals  twttr ga */
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then((responses) => { Promise.all(responses.map(res => res.json())); })
  .then((responses) => {
    console.log(responses);
  });


/* We can also disable a rule for just one line */

/* eslint-disable ENTER RULE NAME HERE */
ga.track();
/* eslint-enable ENTER RULE NAME HERE */
twttr.trackConversion();
