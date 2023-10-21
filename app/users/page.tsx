import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <br />
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
