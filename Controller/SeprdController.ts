import { Path, Get, Post, Delete, Param } from '@cs/koa-decorate';

import { SeprdDao } from '../Model';
import { getSeprdInfo } from '../common';


@Path('/api/seprd')
export default class SeprdController {

  @Get
  @Path('/:seprdKey')
  async getSeprd(@Param('seprdKey') seprdKey: string) {
    const info = await SeprdDao.findSeprd(seprdKey).catch(error => error.message);

    return {
      data: {
        seprdId: isNaN(Number(seprdKey)) && seprdKey.indexOf('SEPRD-') > -1 ? seprdKey : `SEPRD-${seprdKey}`,
        info: info.length ? JSON.parse(info[0].info) : info
      },
      message: 'ok'
    }
  }

  @Post
  @Path('/:seprdKey')
  async addSeprd(@Param('seprdKey') seprdKey: string) {
    const data = await getSeprdInfo(seprdKey);
    const info = await SeprdDao.addSeprd(seprdKey, JSON.stringify(data)).catch(error => error.message);

    return {
      data: {
        seprdId: isNaN(Number(seprdKey)) && seprdKey.indexOf('SEPRD-') > -1 ? seprdKey : `SEPRD-${seprdKey}`,
        info: typeof info === 'string' ? info : data 
      },
      message: 'ok'
    }
  }

  @Delete
  @Path('/:seprdKey')
  async delSeprd(@Param('seprdKey') seprdKey: string) {
    const info = await SeprdDao.delSeprd(seprdKey).catch(error => error.message);
    
    return {
      data: {
        seprdId: isNaN(Number(seprdKey)) && seprdKey.indexOf('SEPRD-') > -1 ? seprdKey : `SEPRD-${seprdKey}`,
        info
      },
      message: 'ok'
    }
  }
  
}
