import app from './app';

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`I am here, friend in port ${PORT}`));
