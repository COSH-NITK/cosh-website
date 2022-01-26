const http = require('http');
const axios = require('axios');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const hostname = '127.0.0.1';
const port = 3000;

function getTweets(){
    var config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/1445712731282104335/tweets?expansions=author_id&max_results=5&tweet.fields=created_at,attachments,referenced_tweets,text&user.fields=profile_image_url',
        headers: { 
          'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALrHXQEAAAAAy4et9HV5kuUlO7ZtS0tTJRKP5lU%3DQUwo4EE9Kzi0gaxMWvSWuacIO2A02EGWXQExfQX8j7eAfK8zWn', 
          'Cookie': 'guest_id=v1%3A164053606425563203; guest_id_ads=v1%3A164053606425563203; guest_id_marketing=v1%3A164053606425563203; personalization_id="v1_NDaLWU36iRhVHLJ/yH/A1g=="'
        }
      };

      return new Promise((resolve)=>{
        axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response));
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        }); 
      })
}
function getTweet(id){
    var config = {
        method: 'get',
        url: `https://api.twitter.com/2/tweets/${id}?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,referenced_tweets,source,text,withheld&=user.fields=profile_image_url`,
        headers: { 
          'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALrHXQEAAAAAy4et9HV5kuUlO7ZtS0tTJRKP5lU%3DQUwo4EE9Kzi0gaxMWvSWuacIO2A02EGWXQExfQX8j7eAfK8zWn', 
          'Cookie': 'guest_id=v1%3A164053606425563203; guest_id_ads=v1%3A164053606425563203; guest_id_marketing=v1%3A164053606425563203; personalization_id="v1_NDaLWU36iRhVHLJ/yH/A1g=="'
        }
      };

      return new Promise((resolve)=>{
        axios(config)
        .then(function (response) {
          // console.log(response);
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        }); 
      })
}

function getUserDetails(id){
  var config = {
    method: 'get',
    url: 'https://api.twitter.com/2/users/850079111657779205?user.fields=profile_image_url',
    headers: { 
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALrHXQEAAAAAy4et9HV5kuUlO7ZtS0tTJRKP5lU%3DQUwo4EE9Kzi0gaxMWvSWuacIO2A02EGWXQExfQX8j7eAfK8zWn', 
      'Cookie': 'guest_id=v1%3A164053606425563203; guest_id_ads=v1%3A164053606425563203; guest_id_marketing=v1%3A164053606425563203; personalization_id="v1_NDaLWU36iRhVHLJ/yH/A1g=="'
    }
  };

      return new Promise((resolve)=>{
        axios(config)
        .then(function (response) {
          // console.log(response);
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        }); 
      })
}

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    var tweets = {};
    getTweets().then(async (response)=>{
        tweets = JSON.parse(response);
        var promises = [];
        tweets.data.forEach(function(tweet) {    
            if(tweet.referenced_tweets) promises.push(getTweet(tweet.referenced_tweets[0].id));
        });
        // console.log(promises);
        return Promise.all(promises);
    })
    .then(function (response) {
        var x = 0;
        var promises = [];
        tweets.data.map((tweet, i)=>{
            if (!tweet.referenced_tweets) return tweet;
            tweet.referenced_tweets[0] = {...tweet.referenced_tweets[0], data: JSON.parse(response[x++]).data};
            promises.push(getUserDetails(tweet.referenced_tweets[0].id));
            return tweet;
        })
        return Promise.all(promises);
        // res.end(JSON.stringify(tweets));
        // res.end(JSON.stringify(response[1]));
        // res.end(JSON.stringify(JSON.parse(response[1])));
    })
    .then(function (response) {
        var x = 0;
        tweets.data.map((tweet, i)=>{
            if (!tweet.referenced_tweets) return tweet;
            tweet.referenced_tweets[0] = {...tweet.referenced_tweets[0], user: JSON.parse(response[x++]).data};
            return tweet;
        })
        var fs = require('fs');
        // fs.writeFile('./tweets.json', JSON.stringify(tweets), 'utf8', callback);
        fs.writeFile('tweets.json', JSON.stringify(tweets), (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
        res.end(JSON.stringify(tweets));
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});