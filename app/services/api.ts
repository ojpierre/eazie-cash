import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error: any) {
    console.error('API error in registerUser:', error.response?.data || error.message);
    throw error; // Ensure the error is thrown for handling in the UI
  }
};




export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;
  } catch (error: any) {
    console.error('API error in loginUser:', error.response?.data || error.message);
    throw new Error(error.response?.data.error || 'Login failed');
  }
};



export const confirmPayment = async (paymentData: any) => {
  const response = await api.post('/confirm-payment', paymentData)
  return response.data
}

export const getUserProfile = async () => {
  const response = await api.get('/user-profile')
  return response.data
}

export const logoutUser = async () => {
  localStorage.removeItem('token')
}