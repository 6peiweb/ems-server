import Seprd from '../Entity/Seprd';

import {getManager} from 'typeorm';

export const SeprdDao = {
  addSeprd: async (seprdId: string, info: string) => {
    const entityManager = getManager();
    let seprd = new Seprd();
    seprd.seprd_id = seprdId;
    seprd.info = info;
    return await entityManager.save(Seprd, seprd);
  },
  delSeprd: async (seprdId: string) => {
    const entityManager = getManager();
    return await entityManager.delete(Seprd, {seprd_id: seprdId});
  },
  updateSeprd: async (seprdId: string, info: string) => {
    const entityManager = getManager();
    return await entityManager.update(Seprd, {seprd_id: seprdId}, {info});
  },
  findSeprd: async (seprdId: string) => {
    const entityManager = getManager();
    return await entityManager.find(Seprd, {seprd_id: seprdId});
  }
}
