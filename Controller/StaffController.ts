import { Path, Get, Param, Query } from '@cs/koa-decorate';

import {StaffDao} from '../Model';


@Path('/api')
export default class StaffController {

  @Get
  @Path('/staff')
  async eatMeat(@Query('query') query: any) {
    const promise = await StaffDao.addStaff(query.name, query.mis);
    
    return promise;
  }
  
}
