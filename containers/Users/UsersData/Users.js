import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setUsers } from "../../../redux/actions";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersWraper from "./UsersWraper";
const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch);
  }, []);

  // const Users = () => {
  //   const { menu } = useParams();
  //   console.log("todoni ichida", menu);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     setUsers(dispatch);
  //   }, []);

  const data = useSelector((state) => state.users);
  console.log(data);
  return (
    <UsersWraper>
      <div className="row">
        <h1>Users</h1>

        {data.map((v, i) => (
          <div key={v.to} className=" text-center mt-4 col-md-4 main">
            <Slide className="p-4  mt-2 main1 h-100  ">
              <div className="user ">
                <p className="name">{v.name}</p>
                <h5 className="h1name">{v.username}</h5>
                <div className="div">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <p href="#" className="text-center">
                    {v.email}
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </UsersWraper>
  );
};

export default Users;
