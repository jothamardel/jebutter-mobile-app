import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#f1b265] relative">
      <View className="w-full h-1/2 justify-center items-center">
        <Text className="text-black text-4xl font-bold">Login</Text>
        <Text>Enter your credentials</Text>
      </View>

      <View className="p-10 space-y-4 bg-white flex-1 rounded-3xl absolute w-full h-full top-60">
        <TextInput className="border p-4 rounded-md" placeholder="username" />
        <TextInput className="border p-4 rounded-md" placeholder="password" />
        <TouchableOpacity
          className="w-full  bg-green-900  p-4 rounded-md"
          onPress={() => router.push("/(tabs)")}
        >
          <Text className="text-white text-center text-xl ">Login</Text>
        </TouchableOpacity>
        <View>
          <Text>forgot password?</Text>
        </View>
      </View>
    </View>
  );
};
