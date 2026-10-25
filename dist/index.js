import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('server is up');
});
app.get();
app.listen(3000);
