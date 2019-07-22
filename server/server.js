require('dotenv').config();
const app =  require('./');

const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));