import { apiUrl } from '../config'

export const register = async (email, password) => {
  const res = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  console.log('json =======', json)
}
