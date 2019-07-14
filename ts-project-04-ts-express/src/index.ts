import express from 'express';

import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`listening to ${PORT}`);
});
