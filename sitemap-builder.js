require("babel-register")({
    presets: ["es2015", "react"]
  });
//   import fetch from "node-fetch";
  
  const router = require('./sitemap-routes').default;
  const Sitemap = require('react-router-sitemap').default;

  const fs = require('firebase-admin');
    const serviceAccount = require('./server/key.json');

    fs.initializeApp({
        credential: fs.credential.cert(serviceAccount),
        databaseURL: "https://cosh-website-default-rtdb.firebaseio.com"
    });

    const db = fs.firestore(); 

  var paramsConfig = {};

  async function main() {
    var blogSlugs = await getBlogs();
    var projects = await getProjectIds();
    projects = [].concat(...projects);
    var events = await getEventIds();
    // console.log(events);


    paramsConfig = {
        '/blog/:slug': blogSlugs,
        '/events/:id': [
            { id: events },
        ],
        '/project/:id': [
            { id: projects },
        ],
    };

    (
        new Sitemap(router)
            .applyParams(paramsConfig)
            .build('https://cosh.nitk.ac.in/')
            .save('./public/sitemap.xml')
    );
  }

  main();



async function getBlogs(){
    var axios = require('axios');

    return new Promise((resolve, reject) => {

        var config = {
            method: 'get',
            url: 'https://cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/?key=740bb3f520006dca9d07cdf0f5&fields=slug',
            headers: { }
        };

        axios(config)
            .then(function (response) {
            resolve(response.data.posts);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}

async function getProjectIds(){

    async function getProjects(id) {

        var list = await db.collection('domains/' + id + '/projects').get();
        list = await list.docs.map(async doc => {
            // console.log(doc.id);
            return doc.id;
        });
        // console.log(list);
        return Promise.all(list);
  }
    var list = await db.collection('domains').get();
    var ids = await list.docs.map(async doc => {
        return getProjects(doc.id);
    });
    return Promise.all(ids);
}
async function getEventIds(){

    var list = await db.collection('events').get();
    var ids = await list.docs.map(async doc => {
        return doc.id;
    });
    return Promise.all(ids);
}