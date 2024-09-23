import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Hàm lấy danh sách người dùng từ back-end
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Hàm thêm người dùng mới vào MongoDB
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};
