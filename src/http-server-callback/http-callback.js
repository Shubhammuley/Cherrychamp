module.exports = function makeHttpCallback({ controller }) {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: req.headers,
      app: req.app,
      logger: req.logger,
      uuid: req.uuid,
      files: req.files,
    };
    try {
      const httpResponse = await controller(httpRequest);
      if (httpResponse.headers) {
        Object.keys(httpResponse.headers).forEach((header) => {
          res.setHeader(header, httpResponse.headers[header]);
        });
      }
      res.sendResponse(httpResponse.body, httpResponse.statusCode);
    } catch (e) {
      req.logger.error(e);
      res.sendError(e);
    }
  };
};
