import { writeFile, readFile } from 'fs/promises'
import express from 'express';
import cors from 'cors';

const FILE_PATH = './file.txt'
const JSON_PATH = './object.json'

/* ToDo Запись в файл */
const writeFileTemplate = () => {
  const text = 'Hello world!'
  fsPromises.writeFile(FILE_PATH, text)
  .then((res) => {
    console.log('Write done \n', res)
  })
  .catch((err) => {
    console.log('Write error \n', err)
  })
}

// writeTemplate();

/* ToDo Чтение из файла */
const readFileTemplate = () => {
  readFile(FILE_PATH, 'utf-8')
  .then((file) => {
    console.log('Read done \n', file)
  })
  .catch((err) => {
    console.log('Read error \n', err)
  })
}
// readFileTemplate();

/* ToDo Работа с json */
const jsonWorkTemplate = () => {
  readFile(JSON_PATH, 'utf-8')
  .then((file) => {
    return JSON.parse(file)
  })
  .then((object) => {
    console.log('object \n', object);
    return object
  })
  .then((object) => {
    const resultObject = {
      ...object,
      type: 'User'
    }
    return writeFile(JSON_PATH, JSON.stringify(resultObject))
  })
  .then((e) => {
    console.log('json work done \n', e);
  })
  .catch((err) => {
    console.log('json work error \n', err);
  })
}

// jsonWorkTemplate();


/* ToDo Создание сервера на express */
const serverTemplate = () => {
  const app = express();
  
  app.use(express.static('public'))
  app.use(cors());
  
  app.get('/', (res, req) => {
    req.send('hello world!');
  });
  
  app.listen('8000', () => {
    console.log('server is starting!')
  })
}
// serverTemplate();


/* ToDo Обработка POST запросов */
const postResponseTemplate = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  
  app.post('/', (req, res) => {
    console.log('request body - \n', req.body);
    res.send(`hello ${req.body.name}`);
  });
  
  app.listen('8000', () => {
    console.log('server is starting!');
  });
}
postResponseTemplate()