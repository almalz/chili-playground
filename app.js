import express from 'express'
import router from './routes/index.js'

const app = express();

app.set('view engine', 'hbs');

const port = process.env.PORT || "8000";
app.use(express.urlencoded());
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

export default app