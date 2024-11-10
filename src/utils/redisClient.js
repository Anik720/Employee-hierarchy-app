const redis = require('redis');

const redisClient = redis.createClient();

redisClient.on('error', (error) => {
  console.error('Redis Client Error:', error);
});

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
