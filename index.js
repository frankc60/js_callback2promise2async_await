const https = require("https");

var url = "https://www.jsonfeed.org/feed.json";

const frank = (url) => {
  //RETURN A PROMISE FROM AN WRAPPER FUNCTION
  return new Promise((resolve, reject) => {
    //RUN A CALLBACK FUNCTION, AS IS.
    //REPLACE ALL THE OUTPUTS/RETURNS WITH "RESOLVE" OR "REJECT"
    https
      .get(url, function (res) {
        var body = "";

        res.on("data", function (chunk) {
          body += chunk;
          //  console.log(chunk);
        });

        res.on("end", function () {
          var jsondata = JSON.parse(body);
          //console.log("Got a response: ", jsondata);
          resolve(jsondata);
        });

        res.on("error", function (er) {
          //console.error("error " + er)
          reject(er);
        });
      })
      .on("error", function (e) {
        //console.error("error " + er)
        reject("Got an error: ", e);
      });
  });
};

//USE AN ASYNC FUNCTION WITH AWAIT
const init = (async (url) => {
  //init IFFF
  let f = await frank(url);
  console.log("\nreturned from frank() after await:\n\n" + JSON.stringify(f));
  console.log("\n\nNOW - the end!!!!");
})(url);

//OR USE PROMISES THEN().THEN().CATCH()
/*frank(url)
  .then((a) => {
    console.log("first then() with data:\n" + JSON.stringify(a));
    return "the end";
  })
  .then((x) => console.log("\n\n2nd then(), data:\n" + x))
  .catch((e) => {
    console.error(e);
  });
*/
