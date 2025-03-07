import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import { randomUUID } from "expo-crypto";

interface updateUserPhotoURLProps {
  photoURL: string;
}

const PROFILE_PHOTOS_DIRECTORY = "/profile-photos";

export async function updateUserPhotoURL({
  photoURL,
}: updateUserPhotoURLProps): Promise<void> {
  const reference = storage().ref(
    `${PROFILE_PHOTOS_DIRECTORY}/${randomUUID()}`
  );

  await reference.putFile(photoURL);
  const uploadUrl = await reference.getDownloadURL();

  console.log({ uploadUrl });

  await auth().currentUser?.updateProfile({
    photoURL: uploadUrl,
  });
}
