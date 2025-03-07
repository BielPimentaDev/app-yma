import React, { useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { router } from "expo-router";
import { User } from "@/models/User";

const AuthContext = React.createContext<{
  signOut: () => Promise<void>;
  user: User | null;
  isLoading: boolean;
  refreshToken: () => Promise<void>;
}>({
  signOut: async () => {
    return;
  },
  user: null,
  isLoading: true,
  refreshToken: async () => {
    return;
  },
});

export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useAuth must be wrapped in a <AuthProvider />");
    }
  }

  return value;
}

export function AuthProvider(props: React.PropsWithChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const onAuthStateChanged = (user: User | null) => {
    console.log("onAuthStateChanged called");
    setUser(user);
    if (isLoading) setIsLoading(false);
    if (router.canDismiss()) router.dismissAll();
    router.replace("/");
  };

  const onUserChanged = (user: User | null) => {
    console.log("onUserChanged called");
    setUser(user);
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      console.log("Sign out successful");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const refreshToken = async () => {
    try {
      await auth().currentUser?.getIdToken(true);
      await auth().currentUser?.reload();
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    console.log("Setting up onAuthStateChanged subscriber");
    const subscriber = auth().onAuthStateChanged((user: User | null) => {
      console.log("Auth state changed:", user);
      onAuthStateChanged(user);
    });

    return () => {
      console.log("Cleaning up onAuthStateChanged subscriber");
      subscriber();
    };
  }, []);

  useEffect(() => {
    console.log("Setting up onUserStateChanged subscriber");
    const subscriber = auth().onUserChanged((user: User | null) => {
      onUserChanged(user);
    });

    return () => {
      console.log("Cleaning up onUserStateChanged subscriber");
      subscriber();
    };
  }, []);

  if (isLoading) {
    console.log("Loading state...");
  }

  return (
    <AuthContext.Provider value={{ signOut, user, isLoading, refreshToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}
