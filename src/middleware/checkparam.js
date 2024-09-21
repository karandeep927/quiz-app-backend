const validParams = ['javascript', 'react', 'html', 'css'];

exports.validateParams = (req, res, next) => {
  const param = req.params.topic;
  if (validParams.includes(param)) {
    next();
  } else {
    res.status(404).json({ error: 'Not found' }); 
  }
};

