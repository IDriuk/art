export const isProd = process.env.NODE_ENV === 'production'
export const apiUrl = `${isProd ? '' : 'http://localhost:5000'}/api`
export const defaultVideoLink = `https://drive.google.com/uc?export=download&id=1QDvlHH6WjjkwU2oKSdvI4BZcrLwGF2S6`