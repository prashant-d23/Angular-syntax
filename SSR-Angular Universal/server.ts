// run this command : ng add @nguniversal/express-engine

// server.ts
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

enableProdMode();

const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist/my-ssr-app/browser');

const indexHtml = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(4000, () => {
  console.log(`Node Express server listening on http://localhost:4000`);
});



// modify the root module 

// app.module.ts


import { ServerModule } from '@angular/platform-server';
@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}


//ng build --prod
//node server.ts

