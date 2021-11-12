const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
const s3 = new AWS.S3();
const fs = require("fs");
var dynamoClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context) => {
  console.log("Star getImage data from bucket");
  var getParams = {
    Bucket: "tutorialakbucket", // your bucket name,
    Key: "Test-lambda2.txt", // path to the object you're looking for
  };

  let objectData = "";

  let getBucketInfo = () => {
    s3.getObject(getParams, function (err, results) {
      if (err) {
        console.log("Error obtain from Bucket");
        console.log(err);
        return err;
      } else {
        console.log("Success obtain data from Bucket");
        return results.Body.toString("utf-8");
      }
    });
  };

  

  let uploadDynamoInfo = () => {
    objectData = getBucketInfo();
    console.log('Data obtain: ',objectData);
    let params = {
        TableName: "TutorialImage",
        Item: {
          TimeStamp: new Date().toString(),
          base64image: objectData,
        },
      };
    dynamoClient.put(params, async function (err, data) {
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
