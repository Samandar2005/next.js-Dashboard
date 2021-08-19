import React from "react";
import { Slide } from "react-awesome-reveal";
import CardsContainerWrapper from "./CardsContainerWrapper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItem } from "@material-ui/core";
import {
  faHome,
  faUsers,
  faTasks,
  faVideo,
  faImages,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  { to: "/", title: "Home", icon: faHome },
  { to: "/users", title: "Users", icon: faUsers },
  { to: "/todos", title: "Todos", icon: faTasks },
  { to: "/albums", title: "Albums", icon: faVideo },
  { to: "/photos", title: "Pohotos", icon: faImages },
  { to: "/posts", title: "Posts", icon: faNewspaper },
];

const CardsContainer = () => {
  return (
    <CardsContainerWrapper>
      <div className="row">
        <h1>Home</h1>
        {menus.map((v, i) => (
          <div key={v.to} className="col-md-4 main mb-3 ">
            <Slide delay={i * 30}>
              <Link href={`${v.to}`}>
                <a>
                  <ListItem button className="main1 fw-bold">
                    <FontAwesomeIcon icon={v.icon} className="me-2 " />
                    <div>{v.title}</div>
                  </ListItem>
                </a>
              </Link>
            </Slide>
          </div>
        ))}
      </div>
      {/* <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Slide>
                </div>
            </div> */}
    </CardsContainerWrapper>
  );
};

export default CardsContainer;
