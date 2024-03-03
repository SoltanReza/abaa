export type strapiResponseType = {
  data: any;
  meta: any;
};
export const baseUrl = "http://localhost:1337";

export function apiFetch(url: string, options: any) {
  const apiUrl = "http://localhost:1337/api";

  const token = "Bearer" + localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };
  return fetch(apiUrl + url, { ...options, headers });
}
