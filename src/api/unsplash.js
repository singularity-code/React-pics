import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 84141cf0034e44a3abfc5c3310b51b47075e9759d7e8a2f8a0bc26c39302d878"
  }
});
