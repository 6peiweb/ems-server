import {createConnection} from 'typeorm';

import {StaffDao} from './Dao/Staff';
import {SeprdDao} from './Dao/Seprd';
import {RapidViewDao} from './Dao/RapidView'

const info = console.info;

export const DbConnection = async (applicationInit: any) => {
  createConnection().then(() => {
    info(`\nDATABASE: \x1b[32m Database connection succeeded... \x1b[0m`);
    applicationInit();
  }).catch((error) => {
    info(`\nDATABASE: \x1b[31m Database connection failed... \x1b[0m`);
    info(`ERROR:    \x1b[34m ${error} \x1b[0m`);
  });
}

export {
  StaffDao,
  SeprdDao,
  RapidViewDao
}
