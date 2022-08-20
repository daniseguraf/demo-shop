import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'User1',
    email: 'user1@user.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'User2',
    email: 'user2@user.com',
    password: bcrypt.hashSync('1234', 10),
  },
];

export default users;
