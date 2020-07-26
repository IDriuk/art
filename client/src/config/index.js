export const isProd = process.env.NODE_ENV === 'production'
export const apiUrl = `${isProd ? '' : 'http://localhost:5000'}/api`