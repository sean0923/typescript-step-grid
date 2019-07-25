import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
	if (req.session && req.session.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('<h1>Protected route, Please login</h1>');
};

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

router.get('/', (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn) {
		res.send(`
      <h2>You are logged in</h2>
      <a href="/logout">Logout</a>
    `);
	} else {
		res.send(`
      <h2>You are NOT logged in</h2>
      <a href="/login">Login</a>
    `);
	}
});

router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('<h1>Welcome to protected route</h1>');
});

export { router };
