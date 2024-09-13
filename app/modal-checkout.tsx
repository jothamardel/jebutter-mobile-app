import { Pressable, Text, TextInput, View,  } from "react-native";
import { Link, router } from "expo-router";

export default function ModalCheckout() {
  const isPresented = router.canGoBack();
  return (
    <View className="flex-1 i bg-white mt-10">
      <View className="bg-[#f1b265]/50 w-full p-2">
        <Text className="text-2xl font-bold text-center">Checkout</Text>
      </View>
      <View className=" w-full p-2">
        <Text className="text-lg font-bold text-center">Total: ₦0.00</Text>
      </View>

      <View className="p-4 space-y-4">
        <View>
          <Text>Name: </Text>
          <View className="border border-gray-300 p-2 rounded-md">
            <TextInput className="" placeholder="Enter customer fullname" />
          </View>
        </View>
        <View>
          <Text>Business name: </Text>
          <View className="border border-gray-300 p-2 rounded-md">
            <TextInput className="" placeholder="Enter business name" />
          </View>
        </View>
        <View>
          <Text>Phone No.: </Text>
          <View className="border border-gray-300 p-2 rounded-md">
            <TextInput className="" placeholder="Enter customer phone no." />
          </View>
        </View>
      </View>

      <View className="p-4 space-y-4">
        <Link
          href="../"
          className="w-full bg-green-800 p-2 text-white text-center rounded-md text-lg"
        >
          Back
        </Link>
      </View>
    </View>
  );
}
