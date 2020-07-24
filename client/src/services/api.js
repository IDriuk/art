import { apiUrl } from '../config'

export const register = async () => {
  const res = await fetch(`${isProd ? '' : 'http://localhost:5000'}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
}
