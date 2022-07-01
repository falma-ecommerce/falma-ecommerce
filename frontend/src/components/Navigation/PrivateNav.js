import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileScreen from "../../screens/SignupScreen/ProfileScreen";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
export default function PrivateNav() {
  const { username } = useContext(AuthContext);

  console.log(username);

  return (
    <div className="text-center">
      <OverlayTrigger
        trigger={["hover", "focus"]}
        key={"bottom"}
        placement={"bottom"}
        overlay={
          <Popover id={`popover-positioned-${"bottom"}`}>
            <Popover.Header as="h3">{`User Profile`}</Popover.Header>
            <Popover.Body>
              <ProfileScreen />
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="link"> {username}</Button>
      </OverlayTrigger>

      <Link className="btn btn-outline-primary" to="/signout">
        Sign out
      </Link>
    </div>
  );
}
