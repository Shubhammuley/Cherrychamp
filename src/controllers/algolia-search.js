module.exports = function makeGetSearchAction({
    getSearch,
}) {
  return async function getSearchAction(httpRequest) {
    const toSearch = {
        searchString: httpRequest.params.search,
    };
    const message = getSearch(toSearch);
    return {
      statusCode: 200,
      body: message,
    };
  };
};
