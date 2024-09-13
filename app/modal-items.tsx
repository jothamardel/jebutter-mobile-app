import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { ArrowLeftSVG, ArrowRightSVG } from "@/components/svg/svg";
import CheckoutComponent from "@/components/checkout/checkout.component";

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View className="flex-1 i bg-white mt-10">
      <View className="bg-[#f1b265]/50 w-full p-2">
        <Text className="text-2xl font-bold text-center">Select Product</Text>
      </View>
      <View className=" w-full p-2">
        <Text className="text-lg font-bold text-center">Total: ₦0.00</Text>
      </View>

      <CheckoutComponent />
      <CheckoutComponent />
      <CheckoutComponent />
      <CheckoutComponent />
      <CheckoutComponent />

      <View className="p-4 space-y-4">
        <Pressable className="w-full bg-green-800   rounded-md p-2">
          <Text className="text-white text-center text-lg">
            Proceed to checkout
          </Text>
        </Pressable>
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
