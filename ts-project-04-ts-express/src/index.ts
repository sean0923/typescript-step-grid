import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ 'some secret' ] }));

app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`listening to ${PORT}`);
});
