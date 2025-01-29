import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";

type GridAllUsersListProps = {
  users: Models.Document[];
};

const GridAllUsersList = ({ users }: GridAllUsersListProps) => {
  const handleFollow = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("e");

    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  };

  return (
    <ul className="grid-container">
      {users.map((user) => (
        <li
          key={user.$id}
          className="relative min-w-80 lg:h-70 h-50 border rounded-3xl p-10 border-dark-4"
        >
          <Link
            to={`/profile/${user.$id}`}
            className="flex lg:flex-col flex-between gap-5"
          >
            <div className="flex lg:flex-col gap-5 items-center justify-center">
              <img
                src={user.imageUrl}
                alt="user"
                className="w-16 h-16 rounded-full lg:w-24 lg:h-24"
              />

              <div className="flex flex-col lg:items-center ">
                <h2 className="h3-bold">{user.name}</h2>
                <p className="base-light text-light-3">@{user.username}</p>
              </div>
            </div>
            <Button
              onClick={handleFollow}
              className="shad-button_primary whitespace-nowrap px-8"
            >
              Follow
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GridAllUsersList;
