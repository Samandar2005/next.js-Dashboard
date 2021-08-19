import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAlbums } from "../../../redux/actions";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumsWraper from "./AlbumsWraper";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.albums);
  console.log(data);
  return (
    <AlbumsWraper>
      <div className="row">
        {data.map((v, i) => (
          <div key={v.to} className="text-center col-md-4 mt-3 main">
            <Slide className="p-3  mt-2 main1 h-100  ">
              <div className="user ">
                <p className="name">{v.title}</p>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </AlbumsWraper>
  );
};

export default Albums;
