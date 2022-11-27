import HTTPService from "./http.service";

const UsersService = {
  get: async (id) => {
    return await HTTPService.get(`/api/users/u/${id}`).then((response) =>
      response.json()
    );
  },
  login: async (email, password) => {
    return await HTTPService.post("/api/users/login", {
      email,
      password,
    });
  },
  register: async (user) => {
    return await HTTPService.post("/api/users/register", {
      ...user,
    });
  },
};

export default UsersService;
