const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  console.log("Upload start!");
  const params = {
    ACL: "public-read",
    Body: event.base64String,
    ContentType: "text/html",
    Bucket: "tutorialakbucket",
    Key: event.imageName,
  };

  return await new Promise((resolver, reject) => {
    s3.putObject(params, (err, results) => {
      if (err) {
        console.log("Error in Upload");
        reject(err);
      } else {
        resolver(results);
        console.log("Upload Finish success");
      }
    });
  });
};
