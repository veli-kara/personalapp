const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const DocumentClient = new AWS.DynamoDB.DocumentClient();

const getAllItems = async (employees) => {
    const params = {
        TableName: employees,
    };
    return await DocumentClient.scan.para
}