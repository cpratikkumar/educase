import React from "react";
import { styled } from "@mui/material/styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import "./Profilescreen.css";

function Profilescreen() {
  return (
    <div className="profilescreen-body">
      <div className="profilescreen-innerbody">
        <div className="top-section">
          <h1>Account Settings</h1>
        </div>
        <div className="profile-image-body">
          <div className="image-section">
            <span className="avtar-body">
              <img
                src="https://images.pexels.com/photos/3756964/pexels-photo-3756964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avtar"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "100px",
                }}
              />
              <span className="camera-body">
                <PhotoCameraIcon
                  className="camera"
                  style={{
                    fontSize: "12px",
                    color: "white",
                  }}
                />
              </span>
            </span>
            <div className="text-section">
              <h5>Marry Doe</h5>
              <p>Marry@Gmail.Com</p>
            </div>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing
            <br />
            Elitr,Sed Diam Nonumy Eirmod tempor Invidunt Ut <br />
            Labore Et Dolore Magna Aliquyam Erat,Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profilescreen;
