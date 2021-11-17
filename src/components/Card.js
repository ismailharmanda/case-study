import React from "react";
import Details from "./Details";
import { Route, useHistory } from "react-router-dom";
import {
  typeRecognizer,
  getOwner,
  getRelatedItemsCount,
  pathFinder,
} from "../utils/functions";

const Card = ({ item, token }) => {
  const history = useHistory();

  const { height, url, width } = item.images[1];
  const { id, name } = item;
  const type = typeRecognizer(item);
  const owner = getOwner(item);
  const totalItem = getRelatedItemsCount(item);

  const { pathname } = history.location;
  const mainPath = pathFinder(pathname);

  return (
    <>
      <div
        onClick={() => {
          if (pathname.includes("details")) {
            history.push(`/${mainPath}`);
          } else {
            history.push(`/${mainPath}/details/${id}/${type.toLowerCase()}`);
          }
        }}
        className="card"
      >
        <div className="row g-0 text-center text-sm-start">
          <div className="col-sm-3">
            <img
              style={{ height: "200px", width: "200px" }}
              src={url}
              className="img-fluid rounded-start"
              alt={type}
            />
          </div>
          <div className="col-sm-9">
            <div className="card-body">
              <h3 className="card-title">{type}</h3>
              <hr />

              <h5>{name}</h5>
              <div>
                <span className="fs-6 me-5">{owner}</span>
                <span className="fs-7">{totalItem}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Route path="*/details/:id/:type">
        <Details token={token} />
      </Route>
    </>
  );
};

export default Card;
