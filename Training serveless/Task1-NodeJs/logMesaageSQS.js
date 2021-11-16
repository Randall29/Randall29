console.log('Loading function');

exports.handler = async (event) => {
    
    for (const { messageId, body } of event.Records) {
        console.log('SQS message %s: %j', messageId, body);
    }
    console.log("Message sended correctly to SQS");
    return `Successfully processed ${event.Records.length} messages.`;
};
