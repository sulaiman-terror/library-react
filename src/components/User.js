import React from 'react';

function Users() {
const users = [
{ id: 1, name: 'User A' },
{ id: 2, name: 'User B' },
];

return (
<div>
  <h2>Users</h2>
    <ul>
      {users.map(user => (
      <li key={user.id}>{user.name}</li>
      ))}
  </ul>
</div>
);
}

export default Users;
