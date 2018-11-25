import Staff from '../Entity/Staff';

import {getManager} from 'typeorm';

export const StaffDao = {
  addStaff: async (name: string, mis: string) => {
    const entityManager = getManager();
    let staff = new Staff();
    staff.name = name;
    staff.mis = mis;
    return await entityManager.save(Staff, staff);
  },
  delStaff: async () => {
    const entityManager = getManager();
    return await entityManager.delete(Staff, {name: 'admin'});
  },
  updateStaff: async () => {
    const entityManager = getManager();
    return await entityManager.update(Staff, {name: 'admin'}, {mis: 'admin'});
  },
  findStaff: async () => {
    const entityManager = getManager();
    return await entityManager.find(Staff, {name: '刘培'});
  }
}
