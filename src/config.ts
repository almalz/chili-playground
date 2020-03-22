import { Sequelize } from 'sequelize'


export const sequelize = new Sequelize(process.env.PSQL_CONNEXION_STRING);

