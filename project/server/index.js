import { writeFile, readFile } from 'fs/promises'
import express from 'express';
import cors from 'cors';

const GOODS_PATH = './static/goods.json'

function getGoods() {
  return readFile(GOODS_PATH, 'utf-8').then((file) => JSON.parse(file))
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/goods', (res, req) => {
  getGoods().then((goods) => {
    req.send(JSON.stringify(goods));
  })
});

app.listen('8000', () => {
  console.log('server is starting!')
})