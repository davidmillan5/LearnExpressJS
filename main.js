'use strict';

// Starting a Server

const express = require('express');
const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

//Writing your First Route

/**
 *
 * To tell our server how to deal with any given request, we register a series of routes. Routes define the control
 * flow for requests based on the request’s path and HTTP verb.
 *
 *
 */
