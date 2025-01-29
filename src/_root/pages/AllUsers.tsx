import GridAllUsersList from "@/components/shared/GridAllUsersList";
import Loader from "@/components/shared/Loader";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

const AllUsers = () => {
  const { data: users, isPending } = useGetUsers();

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full ">
          <img
            src="/assets/icons/people.svg"
            className="invert-white"
            alt="add"
            width={36}
            height={36}
          />

          <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        </div>

        {isPending ? (
          <div className="mt-20">
            <Loader />
          </div>
        ) : (
          <GridAllUsersList users={users.documents} />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
