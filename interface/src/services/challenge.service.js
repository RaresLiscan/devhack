import HTTPService from "./http.service";

const ChallengeService = {
  get: async (id) => {
    return await HTTPService.get(`/api/challenges/${id}`).then((response) =>
      response.json()
    );
  },
  getAll: async () => {
    return await HTTPService.get("/api/challenges").then((response) =>
      response.json()
    );
  },
};

export default ChallengeService;
