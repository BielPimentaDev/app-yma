import { View, Text, StyleSheet } from "react-native";
import Avatar from "@/components/Avatar";

interface UserInfoProps {
  photoURL?: string | null;
  displayName?: string | null;
  email?: string | null;
}

export function UserInfo({ photoURL, displayName, email }: UserInfoProps) {
  return (
    <View style={styles.container}>
      <Avatar photoUrl={photoURL} />
      <View style={styles.idContainer}>
        {displayName && <Text style={styles.name}>{displayName}</Text>}
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: "center",
    gap: 8,
  },
  idContainer: {
    gap: 4,
  },
  name: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  email: {
    fontSize: 14,
    color: "#A5A5A5",
  },
});
