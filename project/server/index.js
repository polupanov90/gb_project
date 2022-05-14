import { writeFile, readFile } from 'fs/promises'
import express from 'express';
import cors from 'cors';

const GOODS_PATH = './static/goods.json'
const BASKET_GOODS_PATH = './static/basket-goods.json'

function getGoods() {
  return readFile(GOODS_PATH, 'utf-8').then((file) => JSON.parse(file))
}
function getBasketGoods() {
  return readFile(BASKET_GOODS_PATH, 'utf-8').then((file) => JSON.parse(file))
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

app.get('/basketgoods', (res, req) => {
  Promise.all([
    getBasketGoods(),
    getGoods()
  ]).then(([ basketGoods, goods ]) => {
    const result = basketGoods.map((_basketGood) => {
      const _good = goods.find(({ id }) => id === _basketGood.id);
      return {
        ..._basketGood,
        data: _good,
        total: _good.price * _basketGood.count
      }
    })
    req.send(JSON.stringify(result))
  })
  
});
app.post('/basketgoods', (res, req) => {
  console.log(res.body);
  getBasketGoods().then((basketGoods) => {
    let hasGod = false;
    const result = basketGoods.map((basketGood) => {
      if (basketGood.id === res.body.id) {
        hasGod = true;
        return {
          ...basketGood,
          count: basketGood.count + 1
        }
      } else {
        return basketGood
      }
    })
    if (!hasGod) {
      result.push({
        id: res.body.id,
        count: 1
      })
    }
    
    const stringResult = JSON.stringify(result);
    writeFile(BASKET_GOODS_PATH, stringResult).then(() => {
      req.send(stringResult)
    })
  })
});

// app.delete('/basketgoods/:id', (res, req) => {
//
// })

app.listen('8000', () => {
  console.log('server is starting!')
})