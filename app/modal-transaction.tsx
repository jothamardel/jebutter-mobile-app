import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View className="flex-1 i bg-white mt-10">
      <View className="bg-[#f1b265]/50 w-full p-2">
        <Text className="text-2xl font-bold text-center">Receipt</Text>
      </View>

      <View className="p-4 space-y-4">
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Business Name:</Text>
          <Text className="text-lg">Business 1</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Quantity:</Text>
          <Text className="text-lg">10</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Amount:</Text>
          <Text className="text-lg">₦10,000</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Staff:</Text>
          <Text className="text-lg">Sarah T.</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Location:</Text>
          <Text className="text-lg">Jos, Plateau</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Reference:</Text>
          <Text className="text-lg">jb-34566k</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-300 pb-2">
          <Text className="text-lg font-bold">Date:</Text>
          <Text className="text-lg">12th September, 2024</Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="font-bold text-center">Jebutter Ltd</Text>
        <Text className=" text-center">
          No. 23 Mining Qtrs Rantya, Jos Nigeria
        </Text>
        <Text className=" text-center">0709000000</Text>
      </View>
      <View className="p-4 space-y-4">
        <Link
          href="../"
          className="w-full bg-green-800 p-2 text-white text-center rounded-md text-lg"
        >
          Back
        </Link>
        <Pressable className="w-full bg-green-800   rounded-md p-2">
          <Text className="text-white text-center text-lg">Download</Text>
        </Pressable>
      </View>
    </View>
  );
}
