import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send(`
    <div>
      <h1>Yeah ~~</h1>
    </div>
  `);
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`listening to ${PORT}`);
});
