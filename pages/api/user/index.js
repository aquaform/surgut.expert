import nextConnect from 'next-connect';
const models = require('../../../db/models/index');
import middleware from '../../../middleware/auth';

const handler = nextConnect()
  // Middleware
  // .use(middleware)
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
    } = req;

    const users = await models.users.findAll({ raw: true });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: users,
    });
  })

export default handler;
