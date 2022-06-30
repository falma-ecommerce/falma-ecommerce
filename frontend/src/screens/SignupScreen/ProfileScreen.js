import { useEffect, useState } from "react";
import axios from "../../components/Utility/axiosInstance";

export default function Profile() {
  //state
  const [profileInfo, setProfileInfo] = useState(null);
 
  //methods
  const getProfileInfo = async () => {
    try {
      const res = await axios.get("/api/users/profile");

      setProfileInfo(res.data.profile);
      console.log(res.data.profile);
    } catch (error) {
      console.error("An error happened", error);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      {profileInfo != null ? (
        <>
          <h6>
            {profileInfo.firstname} {profileInfo.lastname}
          </h6>
          <p>Username: {profileInfo.username}</p>
          <p>Email: {profileInfo.email}</p>
        </>
      ) : (
        <p>No user found</p>
      )}
    </>
  );
}
