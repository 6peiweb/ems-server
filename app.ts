/// <reference path="types/global.d.ts" />

import path from 'path';

import 'reflect-metadata';
import Koa from 'koa';
import Logger from 'koa-logger';
import Static from 'koa-static';
import BodyParser from 'koa-bodyparser';
import Decorator from '@cs/koa-decorate';

import Controller from './Controller';
import {DbConnection} from './Model';

const KoaSSO = require('@mtfe/sso-client').KoaSSO;
const ssoConfig = require('./common/config/sso.json');

const app = new Koa();
const PORT = 3005;
const routes = new Decorator({controllers: Controller}).routes();

DbConnection(() => {
  // app.use(KoaSSO(Object.assign({
  //   onRedirectingToOriginalUrl: async (req: any, res: any,ssoid: any) => {
  //     let setCookieStrArr = [];
  //     let yourCostomeCookieName = 'custome_cookie_name';
  //     let yourCostomeCookieStr = `${yourCostomeCookieName}=${ssoid}; path=/;`
  //     setCookieStrArr.push(yourCostomeCookieStr);
  //     res.setHeader('Set-Cookie', setCookieStrArr);
  //   }
  // }, ssoConfig)));  
  // app.use(async (ctx, next) => {
  //   console.log('_ssoClient');
  //   console.log(ctx._ssoClient);
  // });

  // app.use(async (ctx, next) => {
  //   ctx.set('Access-Control-Allow-Origin', '*');
  //   next();
  // });

  app.use(BodyParser());
  app.use(Logger());

  app.use(routes);
  app.use(Static(path.join(__dirname, './static')));
  app.use(async ctx => ctx.body = 'Not found');

  app.listen(PORT);
  console.info(`\nADDRESS: \x1b[35m(Please open in chrome) \x1b[32mhttp://localhost:${PORT} \x1b[0m\n`);

});