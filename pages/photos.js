import Dashboard from "../containers/Dashboard";
import PhotosData from "../containers/Photos/PhotosData";

const Users = () => {
  return (
    <div>
      <Dashboard menu={"photos"}>
        <PhotosData />
      </Dashboard>
    </div>
  );
};

export default Users;
