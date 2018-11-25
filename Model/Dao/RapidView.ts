import RapidView from '../Entity/RapidView';

import {getManager} from 'typeorm';

export const RapidViewDao = {
  addRapidView: async (rapidViewId: string, info: string) => {
    const entityManager = getManager();
    let rapidView = new RapidView();
    rapidView.rapid_view_id = rapidViewId;
    rapidView.info = info;
    return await entityManager.save(RapidView, rapidView);
  },
  delRapidView: async (rapidViewId: string) => {
    const entityManager = getManager();
    return await entityManager.delete(RapidView, {rapid_view_id: rapidViewId});
  },
  updateRapidView: async (rapidViewId: string, info: string) => {
    const entityManager = getManager();
    return await entityManager.update(RapidView, {rapid_view_id: rapidViewId}, {info});
  },
  findRapidView: async (rapidViewId: string) => {
    const entityManager = getManager();
    return await entityManager.find(RapidView, {rapid_view_id: rapidViewId});
  }
}
