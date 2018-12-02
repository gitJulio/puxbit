const { Client } = require('pg')
const connectionData = 'postgresql://puxbit:N1lointentes2018@puxbit.cw2n3i6utgwc.us-east-2.rds.amazonaws.com:5432/puxbit'
const client = new Client(connectionData);
client.connect()

module.exports= client;
