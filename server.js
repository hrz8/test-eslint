const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.error('helo');
  res.json({
    ok: true,
    foo: 'bar',
  });
});

app.listen(3456);
