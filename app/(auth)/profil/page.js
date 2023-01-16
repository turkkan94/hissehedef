"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
function UserPage() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const res = await fetch(`${process.env.MAIN_API}/me/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.access}`,
          },
        });
        const data = await res.json();
        setUser(data);
      }
    };
    getUser();
  }, [session]);

  return <div>{user?.first_name}</div>;
}

export default UserPage;
