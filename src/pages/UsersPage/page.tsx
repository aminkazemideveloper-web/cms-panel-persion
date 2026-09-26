import useTitle from "../../hooks/useTitle";

import { useGetAllUsers } from "../../services/hooks/users/useGetAllUsers";

import Users from "../../components/templates/Users/Users";

import UsersSkeleton from "../../skeletons/UsersSkeleton/UsersSkeleton";
import Load from "../../components/shared/Load/Load";

function UsersPage() {
  const { data: users, isPending, isFetching } = useGetAllUsers();
  useTitle("کاربران");

  if (isPending) {
    return <UsersSkeleton />;
  }

  return (
    <>
      {isFetching && <Load />}
      <Users users={users!} loading={isFetching} />
    </>
  );
}

export default UsersPage;
