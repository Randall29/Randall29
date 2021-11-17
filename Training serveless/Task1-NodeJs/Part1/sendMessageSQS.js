const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
var sqs = new AWS.SQS();

exports.handler = async (event, context) => {
  console.log("Start sending message to Queue");
  var params = {
    DelaySeconds: 10,
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: "Tuto Test",
      },
      Author: {
        DataType: "String",
        StringValue: "Randall Moya",
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody: "Hi! this message its a Test from Lambda",
    QueueUrl:
      "https://sqs.us-east-1.amazonaws.com/148259750838/TutorialAKQueue",
  };

  return await new Promise((resolve, reject) => {
    sqs.sendMessage(params, (err, data) => {
      if (err) {
        console.log("Error ocurred sending message to Queue")
        console.log("Error: ", err);
        reject(err);
      } else {
        console.log("Message Sended successfully to Queue");
        resolve(data);
      }
    });
  });
};
