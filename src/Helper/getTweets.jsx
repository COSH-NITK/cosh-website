const getTweets=(setTweetData)=>{
    // var url = 'FLxda4batzZ4e39ESKcNKV6Y/tweets.json';
    var url = 'https://cosh.nitk.ac.in/tweets.json';
    if(window.location.hostname==="localhost") url = 'tweets.json';
    fetch(url
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        setTweetData(myJson);
        return myJson;
      });
  }

export default getTweets;