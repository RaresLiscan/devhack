const API_PATH = "http://localhost:8080";

const HTTPService = {
  get: async (path) => {
    try {
      return await fetch(API_PATH + path);
    } catch (error) {
      return error;
    }
  },
  post: async (path, body) => {
    try {
      return await fetch(API_PATH + path, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          /** @todo show a toast with a message that something went wrong  */
          return error;
        });
    } catch (error) {
      return error;
    }
  },
};

export default HTTPService;
