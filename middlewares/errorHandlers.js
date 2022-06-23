const errorHandler = (err, req, res, next) => {
  const { name, errors } = err
  let statusCode
  let message
  
  switch (name) {
    case 'SequelizeUniqueConstraintError':
      statusCode = 401
      message = errors.map(el => el.message)[0]
      break;
    case 'SequelizeValidationError':
      statusCode = 401
      message = errors.map(el => el.message)[0]
      break;

    default:
      statusCode = 500
      message = err
      break;
  }
  console.log(err);
  res.status(statusCode).json({
    message
  })
}

module.exports = { errorHandler }