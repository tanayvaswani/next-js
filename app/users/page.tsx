import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";
import Loading from "../loading";

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
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
