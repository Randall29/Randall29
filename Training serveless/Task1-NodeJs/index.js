const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
var sqs = new AWS.SQS();

exports.handler = async (event, context) => {

  var params = {
     // Remove DelaySeconds parameter and value for FIFO queues
    DelaySeconds: 10,
    MessageAttributes: {
      "Title": {
        DataType: "String",
        StringValue: "The Whistler"
      },
      "Author": {
        DataType: "String",
        StringValue: "John Grisham"
      },
      "WeeksOn": {
        DataType: "Number",
        StringValue: "6"
      }
    },
    MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
    // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
    // MessageGroupId: "Group1",  // Required for FIFO queues
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/148259750838/TutorialAKQueue"
  };
  
  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });
};
