import "./Users.css";

import useTitle from "../../hooks/useTitle";

import { useGetAllUsers } from "../../servises/hooks/users/useGetAllUsers";

import Users from "../../Components/Users/Users";

import UsersSkeleton from "../../skeletons/UsersSkeleton/UsersSkeleton";
import Load from "../../Components/Load/Load";

function UsersPage() {
  const { data: users, isPending, isFetching } = useGetAllUsers();
  useTitle("کاربران");

  if (isPending) {
    return <UsersSkeleton />;
  }

  return (
    <>
      {isFetching && <Load />}
      <Users users={users} />
    </>
  );
}

export default UsersPage;
