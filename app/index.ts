const express = require('express');

const app: any = express();
const port: number = +process.env.APP_PORT || 3000;

app.use(express.json({limit: '50MB'}));

app.post('/ping', (req: any, res: any): void => res.send({ok: 'true'}));
app.listen(port, (): void => console.log('Server is running...'));
