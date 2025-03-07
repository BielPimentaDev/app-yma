import auth from "@react-native-firebase/auth";

interface updateUserEmailProps {
  email: string;
}

export async function updateUserEmail({
  email,
}: updateUserEmailProps): Promise<void> {
  try {
    await auth().currentUser?.verifyBeforeUpdateEmail(email);
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      if ("code" in error) {
        console.log(error.code);
      }
    }
  }
}
