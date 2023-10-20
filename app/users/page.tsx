import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // caching is only available with fetch function...
    // cache: "no-store", // refetch everytime 
    next: { revalidate: 10 }, // refetch every 10 seconds 
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Below is the list of users</h1>
      <br />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
