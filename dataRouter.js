
module.exports  = {
  data: function() {
    var dataRouter = require('express').Router();

    dataRouter.route('/')

      .get(function (req, res, next) {
        res.end();
      });

    return dataRouter;
  }
};
