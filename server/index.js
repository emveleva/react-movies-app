const express = require('express');
const { PORT } = require('./config/config');
const errorHandler = require('./middlewares/errorHandler')
const routes = require('./routes')
const app = express();

require('./config/mongoose');
require('./config/express')(app);

app.use(routes);

app.use(errorHandler)




app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));