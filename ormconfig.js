module.exports = {
  /* Common connection options */
  type: "mariadb",
  entities: process.argv[1] === "dist/index.js" ? ["dist/models/**/*.js"] : ["src/models/**/*.ts"],
  logging: ["error"],
  synchronize: process.argv[1] === "dist/index.js" ? false : true,
  /* mariadb connection options */
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};