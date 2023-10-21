import Link from "next/link";
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
      <Link href="/users/new" className="btn btn-secondary">
        New User
      </Link>
      <br />
      <br />
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
