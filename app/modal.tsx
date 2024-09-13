import { Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Modal() {
   const isPresented = router.canGoBack();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Modal screen</Text>
      <Link href="../">Back</Link>
    </View>
  );
}
