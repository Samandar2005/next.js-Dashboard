import Dashboard from "../containers/Dashboard";
import PostsData from "../containers/Posts/PostsData";

const Posts = () => {
  return (
    <div>
      <Dashboard menu={"posts"}>
        <PostsData />
      </Dashboard>
    </div>
  );
};

export default Posts;
