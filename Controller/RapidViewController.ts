import { Path, Get, Post, Delete, Param } from '@cs/koa-decorate';

import { RapidViewDao } from '../Model/Dao/RapidView';
import { getRapidViewInfo } from '../common';

@Path('/api/rapidView')
export default class RapidViewController {

  @Get
  @Path('/:rapidViewId')
  async getRapidView(@Param('rapidViewId') rapidViewId: string) {
    const info = await RapidViewDao.findRapidView(rapidViewId).catch(error => error.message);

    return {
      data: {
        rapidViewId,
        info: info.length ? JSON.parse(info[0].info) : info
      },
      message: 'ok'
    }
  }

  @Post
  @Path('/:rapidViewId')
  async addRapidView(@Param('rapidViewId') rapidViewId: string) {
    const data = await getRapidViewInfo(rapidViewId).catch((error: any) => error);
    const info = data.statusCode !== 404 && await RapidViewDao.addRapidView(rapidViewId, data).catch(error => error.message);
    console.log(info);
    return {
      data: {
        rapidViewId,
        info: data.statusCode !== 404 ? typeof info === 'string' ? info : 'added rapidView_information successfully...' : data
      },
      message: 'ok'
    }
  }

  @Delete
  @Path('/:rapidViewId')
  async delRapidView(@Param('rapidViewId') rapidViewId: string) {
    const info = await RapidViewDao.delRapidView(rapidViewId).catch(error => error.message);

    return {
      data: {
        rapidViewId,
        info
      },
      message: 'ok'
    }
  }

}