import express from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`listening to ${PORT}`);
});
