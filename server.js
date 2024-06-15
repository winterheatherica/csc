const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.use(cors());

app.get('/history', async (req, res) => {
  try {
    const histories = await prisma.history.findMany({
      select: {
        date: true,
        method: true,
        alternatif: true,
      },
    });
    res.json(histories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
