import axios from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

export const userLogin = async ({ email, password }: LoginCredentials) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  try {
    const response = await axios.post('https://ahs-clone-api.onrender.com/auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
