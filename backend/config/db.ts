import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config({path:'../.env'});

const {
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} = process.env;

export const sequelize = new Sequelize(DB_DATABASE!, DB_USER!, DB_PASSWORD!, {
    host: DB_HOST,
    database: DB_DATABASE,
    dialect: 'mysql',
    logging: false,
})


//연결 테스트
sequelize.authenticate().then(() => {
    console.log('Database connection established successfully.');
});