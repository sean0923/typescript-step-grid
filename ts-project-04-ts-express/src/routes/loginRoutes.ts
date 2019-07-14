import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
	res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email && password && email === 'test' && password === 'test') {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.send('Invalid email or password');
	}
});

export { router };
