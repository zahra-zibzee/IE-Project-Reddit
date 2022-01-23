import React, { useState } from "react";
import ColoredLine from "../../Layouts/ColoredLine";
import { Dropdown, Modal, Button } from "react-bootstrap";
import email from "./../../../assets/media/mail.png";
import pass from "./../../../assets/media/password.png";
import PasswordField from "../../Layouts/PasswordField";

const AccountSetting = () => {
  const [genderValue, setGenderValue] = useState("select");
  const [showEmail, setShowEmail] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <h4 className="mt-5">Account Settings</h4>
      <p className="text-muted mt-4">ACCOUNT PREFERENCES</p>
      <ColoredLine color={"gray"} />

      <div className="row mt-5">
        <div className="col-8">
          <h5>Email Address</h5>
          <p className="f-small text-muted">niloo.ast@gmail.com</p>
        </div>
        <div className="col-4">
          <Button
            variant="outline-primary"
            className="rounded-pill"
            onClick={() => setShowEmail(true)}
          >
            change
          </Button>
        </div>

        <Modal show={showEmail} onHide={() => setShowEmail(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={email} width="65" />
              {" Update your Email"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Update your email below. There will be a new verification email
              sent that you will need to use to verify this new email.
            </p>
            <input
              type="password"
              className="form-control fw-bold mb-3 f-smaller p-3"
              placeholder="CURRENT PASSWORD"
            ></input>
            <input
              type="email"
              className="form-control fw-bold mb-3 f-smaller p-3"
              placeholder="NEW EMAIL"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-primary"
              className="rounded-pill"
              onClick={() => setShowEmail(false)}
            >
              Save email
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row mt-5">
        <div className="col-8">
          <h5>Change Password</h5>
          <p className="f-small text-muted">
            password must be at least 8 characters
          </p>
        </div>
        <div className="col-4">
          <Button
            variant="outline-primary"
            className="rounded-pill"
            onClick={() => setShowPass(true)}
          >
            change
          </Button>
        </div>

        <Modal show={showPass} onHide={() => setShowPass(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={pass} width="65" />
              Update your password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="password"
              className="form-control fw-bold mb-3 f-smaller p-3"
              placeholder="CURRENT PASSWORD"
            ></input>
            <input
              type="password"
              className="form-control fw-bold mb-3 f-smaller p-3"
              placeholder="NEW PASSWORD"
            ></input>
            <input
              type="password"
              className="form-control fw-bold mb-3 f-smaller p-3"
              placeholder="CONFIRM NEW PASSWORD"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-primary"
              className="rounded-pill"
              onClick={() => setShowPass(false)}
            >
             save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row mt-5">
        <div className="col-8">
          <h5>Gender</h5>
          <p className="f-small text-muted">
            Reddit will never share this information and only uses it to improve
            what content you see.
          </p>
        </div>
        <div className="col-4">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <button className="text-primary no-border fw-bold">
                {" "}
                {genderValue}
              </button>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setGenderValue("Woman")}>
                Woman
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setGenderValue("Man")}>
                Man
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setGenderValue("Non-Binary")}>
                Non-Binary
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setGenderValue("Else")}>
                Prefer not to say
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
