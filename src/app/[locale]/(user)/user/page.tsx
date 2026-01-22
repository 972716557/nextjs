import React from "react";

interface User {
  id: string;
  name: string;
  age: number;
  address: { city: string };
  email: string;
}
export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);
  return (
    <div>
      {users.map((item) => (
        <div className="rounded-sm border  mb-[10px]" key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.address.city}</p>
        </div>
      ))}
    </div>
  );
}
