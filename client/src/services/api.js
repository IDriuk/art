import { apiUrl } from '../config'

export const register = async (email, password) => {
  
  try {
    const res = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const { token } = await res.json();
    return token
  } catch (e) {
    return e
  }
}
