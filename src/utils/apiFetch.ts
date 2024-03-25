export type strapiResponseType = {
  data: any;
  meta: any;
};
export const baseUrl = "https://admin.associationabaa.org";

export function apiFetch(url: string, options: any) {
  const apiUrl = "https://admin.associationabaa.org/api";

  const token = "Bearer" + localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };
  return fetch(apiUrl + url, { ...options, headers });
}
