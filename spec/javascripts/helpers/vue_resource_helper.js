// eslint-disable-next-line import/prefer-default-export
export const headersInterceptor = (request, next) => {
  next((response) => {
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    response.headers = headers;
  });
};
