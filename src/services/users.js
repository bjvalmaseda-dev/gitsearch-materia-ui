import { urlFetch } from "../constants";

export const getGitHubUsers = async (user) => {
  const response = await fetch(`${urlFetch}${user}`, {
    method: "GET",
  });
  const payload = response.json();
  return payload;
};
