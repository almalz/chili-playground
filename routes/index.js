import express from 'express'
import formidable from 'formidable'
import * as fileController from './../controllers/fileController.js'
import { __dirname } from './../config.js'

const router = express.Router();

router.get("/", (req, res) => {
  res.render('index.hbs', {
    value: 'World'
  });
});

router.post('/file', async (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req);

  form.on('fileBegin', async (name, file) => {
    file.path = __dirname + '/resources/' + file.name
    try {
      const fileResponse = await fileController.uploadFile(file);
      res.send(fileResponse)
    } catch (err) {
      console.log(err)
      res.send("fail");
    }
    res.redirect('/')
  })

});

export default router;