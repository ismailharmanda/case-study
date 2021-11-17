import React from "react";
import { msToMinutesAndSeconds } from "../utils/functions";

const DetailCard = ({ type, name, duration, owner, img, description }) => {
  const calculatedDuration = msToMinutesAndSeconds(duration);
  const ownersArray = owner?.map((item) => item.name);
  const formattedOwners = ownersArray?.join(", ");

  return type === "album" ? (
    <div className="card my-3">
      <div className="row g-0 text-center text-sm-start">
        <div className="col-sm-3">
          <img
            style={{ height: "200px", width: "200px" }}
            src={
              "https://i.scdn.co/image/ab67616d00001e02660ee24281a547103f466ff5"
            }
            className="img-fluid rounded-start"
            alt="song"
          />
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <hr />

            <h6>{formattedOwners}</h6>
            <div>
              <span className="fs-6 me-1">
                <i className="far fa-play-circle"></i>
              </span>
              <span className="fs-7">{calculatedDuration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card my-3 col-12">
      <div className="row g-0 text-center text-sm-start">
        <div className="col-sm-3">
          <img
            style={{ height: "200px", width: "200px" }}
            src={img}
            className="img-fluid rounded-start"
            alt="song"
          />
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h3 className="card-title">Podcast Name</h3>
            <hr />

            <h6>Podcast Description</h6>
            <div>
              <span className="fs-6 me-5">sembol</span>
              <span className="fs-7">13 min 21 sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
