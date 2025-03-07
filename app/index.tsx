import { useCallback, useEffect, useRef } from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useAuth } from "@/contexts/auth";

import CenteredContainer from "@/components/CenteredContainer";
import Logo from "@/components/Logo";

export default function SplashScreen() {
  const { isLoading, user, refreshToken } = useAuth();
  const hasNavigated = useRef(false);

  const getUserConnectedProviders = useCallback(() => {
    const providers: string[] = [];

    if (user) {
      const { providerData } = user;
      providerData.forEach((provider) => {
        providers.push(provider.providerId);
      });
    }

    return providers;
  }, [user]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isLoading && !hasNavigated.current) {
      timeout = setTimeout(async () => {
        await refreshToken();

        if (!user) {
          hasNavigated.current = true;
          return router.replace("/login");
        }

        const providers = getUserConnectedProviders();

        if (providers.includes("password") === false) {
          hasNavigated.current = true;
          return router.replace("/register");
        }

        hasNavigated.current = true;
        return router.replace("/create_pincode");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [isLoading, user, getUserConnectedProviders]);

  return (
    <CenteredContainer>
      <StatusBar style="light" />
      <Logo color="white" height={59} width={214} />
    </CenteredContainer>
  );
}
