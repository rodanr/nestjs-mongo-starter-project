export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    mongodb_uri: process.env.MONGODB_URI,
  },
});
