const express = require('express');
const filmsRouter = require('./routes/films');

const app = express();

app.use(express.json());
app.use('/films', filmsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
