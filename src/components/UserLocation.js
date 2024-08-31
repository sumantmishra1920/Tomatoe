import axios from 'axios';

const API_KEY = '626c486c26e8440c81d40a5b73392839'; // AbstractAPI key

export const fetchUserLocation = async () => {
  try {
    const response = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null;
  }
};
