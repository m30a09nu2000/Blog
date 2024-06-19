import React, { useEffect } from "react";
import { userService } from "../apiUrls";

function Home() {
  const fetchUser = async () => {
    try {
      const res = await userService.userData();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return <div>Home</div>;
}

export default Home;
