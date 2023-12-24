// AdminPanel.js

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useEffect,useState} from 'react';
import axios from 'axios';
const AdminPanel = () => {
  const { role } = useAuth();
  const Role = JSON.parse(role);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    // Fetch all users when the component mounts
    
    fetchUsers();
},[]);
const handleRoleUpdate = async (username, newRole) => {
    try {
      // Send a PUT request to update the user's role
      await axios.put(`http://localhost:5000/users/users/${username}/update-role`, {newRole});

      // Fetch the updated list of users
      fetchUsers();
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  const handleUserDelete = async (username) => {
    try {
      // Send a DELETE request to delete the user
      await axios.delete(`http://localhost:5000/users/users/${username}/delete`);

      // Fetch the updated list of users
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  if (Role !== "admin") {
    // If the user is not an admin, you can redirect them or show an error message.
    return <p>You do not have access to the Admin Panel.</p>;
  };
  

  

  return (
    <div>
      <h2><center>Admin Panel</center></h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              
              <td>
                <select
                  onChange={(e) => handleRoleUpdate(user.username, e.target.value)}
                  value={user.role}
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUserDelete(user.username)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
