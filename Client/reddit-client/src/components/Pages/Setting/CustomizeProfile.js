import React from "react";
import ColoredLine from "../../Layouts/ColoredLine";
import UploadImage from "../../Layouts/UploadImage";


const CustomizeProfile = () => {
  return (
    <>
      <h4 className="mt-5">Customize Profile</h4>
      <p className="text-muted mt-4">PROFILE INFORMATION</p>
      <ColoredLine color={"gray"} />

      <div className="row mt-5">
        <h5>Display Name</h5>
        <p className="f-small text-muted">
          set a display name. This doesn't change your username.
        </p>
        <input
          type="text"
          className="ms-2 form-control"
          placeholder="Display Name"
        />
      </div>

      <div className="row mt-5">
        <h5>About (optional)</h5>
        <p className="f-small text-muted">
          A brief description of yourself shown on your profile.
        </p>
        <textarea
          className="ms-2 form-control"
          placeholder="About (optional)"
        />
      </div>

      <div className="row mt-5">
        <h5>Avatar Image</h5>
        <p className="f-small text-muted">Images must be .png or .jpg format</p>
        <div className="row">
          <div className="col-4">
            <UploadImage />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </>
  );
};

export default CustomizeProfile;
