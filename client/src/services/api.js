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

export const getPhrases = async (email, password) => {
  
  try {
    const res = await fetch(`${apiUrl}/vocabulary`);

    return await res.json();
  } catch (e) {
    return e
  }
}

export const addPhrase = async ({ phrase, link, description }) => {

  let token = localStorage.getItem('auth-token')
  
  try {
    const res = await fetch(`${apiUrl}/vocabulary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": token
      },
      body: JSON.stringify({ phrase, link, description }),
    });
  
    return await res.json();
  } catch (e) {
    return e
  }
}