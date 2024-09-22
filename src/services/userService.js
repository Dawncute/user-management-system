import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Hàm lấy danh sách người dùng
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Hàm thêm người dùng mới (đây là API giả lập nên POST sẽ không thay đổi dữ liệu)
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};
