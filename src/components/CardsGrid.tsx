import React from "react";
import { UserCard } from "./UserCard";

type User = {
  id: number;
  who: string;
  lookingFor: string;
  telegram: string;
};

export const CardsGrid: React.FC<{ users: User[] }> = ({ users }) => (
  <div className="grid">
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
); 