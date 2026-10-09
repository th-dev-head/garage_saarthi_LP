export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_URL = `${API_BASE_URL}/api`;

export const getApiBaseUrl = () => API_URL;