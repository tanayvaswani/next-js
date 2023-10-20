import UserTable from "./UserTable";

const UsersPage = () => {
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <br />
      <UserTable />
    </>
  );
};

export default UsersPage;
