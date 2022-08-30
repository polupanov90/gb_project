const express = require('express');
const cors = require('cors');
const { writeFile, readFile } = require('fs/promises');

const BASKET_GOODS = "./static/basket-goods.json"
const GOODS = "./static/goods.json"




function getRawBasketGoods() {
  return readFile(BASKET_GOODS, 'utf-8').then((text) => {
    return JSON.parse(text);
  });
}
function getGoods() {
  return readFile(GOODS, 'utf-8').then((text) => {
    return JSON.parse(text);
  });
}

function getBasketGoods() {
  return Promise.all([
    getRawBasketGoods(),
    getGoods()
  ]).then(([ rawBasketGoods, goods ]) => {
    return rawBasketGoods.map((rawBasketGood) => {
      const { id, count } = rawBasketGood;
      const good = goods.find(({ id: goodsId }) => {
        return goodsId === id
      });
      return {
        ...rawBasketGood,
        data: good,
        total: count * good.price
      }
    })
  })
}

function addBasketGood(_id) {
  return getRawBasketGoods().then((basketGoods) => {
    if (basketGoods.find(({ id }) => id === _id)) {
      const result = basketGoods.map((basketGood) => {
        if (basketGood.id === _id) {
          return {
            ...basketGood,
            count: basketGood.count + 1
          }
        } else {
          return basketGood
        }
      });
      return result;
    } else {
      return [
        ...basketGoods,
        {
          id: _id,
          count: 1
        }
      ];
    }
  })
  .then((result) => {
    return writeFile(BASKET_GOODS, JSON.stringify(result)).then(() => {
      return result;
    })
  })
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));


app.get('/basket_goods', (req, res) => {
  getBasketGoods().then((data) => {
    res.send(data)
  });
});

app.put('/basket_goods', (req, res) => {
  addBasketGood(req.body.id).then((basketGoods) => {
    res.send(JSON.stringify(basketGoods))
  })
});

app.listen('8000', () => {
  console.log('server is starting!');
});
