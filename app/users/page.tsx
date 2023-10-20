import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // caching is only available with fetch function...
    cache: "no-store", // refetch everytime
    // next: { revalidate: 10 }, // refetch every 10 seconds
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Below is the list of users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
