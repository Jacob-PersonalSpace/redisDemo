import { createClient } from 'then-redis';

const client = createClient({
    host: 'localhost',
    port: '6379',
});

// client.hmset('users', 'name', 'Jacob', 'age', 26, 'sex', 'male');
client.hmset('users', { name: 'Jacob', age: 27, sex: 'male' })
    .then(data => {
        console.log('0 ', data);

        return client.hgetall('users');
    })
    .then(data => {
        console.log('6 ', data);

        return client.hset('users', 'age', 25);
    })
    .then(data => {
        console.log('7 ', data);

        return client.hgetall('users');
    })
    .then(data => {
        console.log('8 ', data);

        return client.hset('users', 'school', 'ShanTou');
    })
    .then(data => {
        console.log('9 ', data);

        return client.hgetall('users');
    })
    .then(data => {
        console.log('1 ', data);

        return client.hdel('users', 'sex');
    })
    .then(data => {
        console.log('2 ', data);

        return client.hgetall('users');
    })
    .then(data => {
        console.log('3 ', data);

        return client.del('users');
    })
    .then(data => {
        console.log('4 ', data);

        return client.hgetall('users')
    })
    .then(data => console.log('5 ', data))
    .catch(error => console.log(error));

client.on('connect', () => {
    console.log('Redis connection open to ' + 'localhost:6379');
});

client.on('error', err => {
    console.log('Redis occurs error ' + err);
});

client.on('end', () => {
    console.log('Redis connection end')
});