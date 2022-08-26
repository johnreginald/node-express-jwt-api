module.exports = (schema) => {
  return (req, res, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false});
    
    if (error) {
      const errors = error.details.map(detail => ({
        [detail.context.label]: detail.message
      }));
    
      res.status(400).json({
        errors
      });
    } else {
      next();
    }
  }
}