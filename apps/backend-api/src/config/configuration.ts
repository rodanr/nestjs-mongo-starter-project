export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    dsn: process.env.DB_DSN,
  },
});
