import React from "react";

interface Props {
  params: {
    id: number;
  };
}
 
const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      UserDetailPage
      <h3>ID: {id}</h3>
    </div>
  );
};

export default UserDetailPage;
