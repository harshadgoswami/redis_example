import { createClient } from 'redis';

const client = createClient({ url: "redis://default:redispw@localhost:32768" });

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'YOUR_VALUE');
const value = await client.get('key');

console.log(value);

await client.disconnect();