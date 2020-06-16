import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./Home/home";
import Login from "./Auth/login";
import UserTours from "./UserTours/userTours";
import ImageUpload from "./tourCreator/imageUpload/imageUpload";
import CreatephotoAlbum from "./tourCreator/createTour/tourCreator";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  const userId = 1;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <HomePage setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/tours"
        render={(props) => {
          return <UserTours setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/tours/:userId(\d+)/"
        render={(props) => {
          return <UserTours setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/createphotoAlbum"
        render={(props) => {
          return (
            <CreatephotoAlbum setUser={setUser} userId={userId} {...props} />
          );
        }}
      />

      <Route
        path="/imageUpload/:photoAlbumId(\d+)/"
        render={(props) => {
          if (hasUser) {
            return (
              <ImageUpload
                photoAlbumId={parseInt(props.match.params.photoAlbumId)}
                userId={userId}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
