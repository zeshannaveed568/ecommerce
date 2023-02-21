import React, { useEffect } from "react";
import { getAuth, User } from "firebase/auth";

const auth = getAuth();

export default function userAuth() {

    const [user, setUser] = React.useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
        });
        return unsubscribe;
    }, []);

  return (
    user
  )
}
