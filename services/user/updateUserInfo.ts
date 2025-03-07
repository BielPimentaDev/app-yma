import auth from "@react-native-firebase/auth";

interface updateUserDisplayNameProps {
  displayName: string;
}

export async function updateUserDisplayName({
  displayName,
}: updateUserDisplayNameProps): Promise<void> {
  await auth().currentUser?.updateProfile({
    displayName,
  });
}
