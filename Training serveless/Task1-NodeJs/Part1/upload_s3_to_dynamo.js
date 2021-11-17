const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
const s3 = new AWS.S3();
const fs = require("fs");
var dynamoClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context) => {
  console.log("Star getImage data from bucket");
  console.log("image name: ",event.Records[0].s3.object.key);
  var getParams = {
    Bucket: "tutorialakbucket",
    Key: event.Records[0].s3.object.key 
  };

  let objectData = "";

  let getBucketInfo = new Promise( (resolve,reject) => {
    s3.getObject(getParams, function (err, results) {
      if (err) {
        console.log("Error obtain from Bucket");
        reject(err);
      } else {
        console.log("Success obtain data from Bucket");
        resolve(results.Body.toString('utf-8'));
      }
    });
  });

  let uploadDynamoInfo = async () => {
    objectData = await getBucketInfo;
    let params = {
        TableName: "TutorialImage",
        Item: {
          TimeStamp: new Date().toString(),
          base64image: objectData,
        },
      };
    dynamoClient.put(params,  function (err, data) {
      console.log("Upload to dynamoDB start!");
      
      if (err) {
        console.error(
          "Unable to add image",
          objectData,
          ". Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log("Success adding image to dynamoDB: ", objectData);
      }
    });
  };
  uploadDynamoInfo();
  return objectData;
};
