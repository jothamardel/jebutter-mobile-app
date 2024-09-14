import { Pressable, Text, TextInput, View } from "react-native";
import { Link, router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useContext, useState } from "react";
import { OrderContext } from "@/context/order.context";

export default function ModalCheckout() {
  const { value } = useContext(OrderContext);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const isPresented = router.canGoBack();

  function totalSum() {
    const result = value.reduce((acc, val) => {
      // @ts-ignore
      return acc + val.price * val.qty;
    }, 0);

    return result;
  }
  return (
    <View className="flex-1 i bg-white mt-10">
      <View className="bg-[#f1b265]/50 w-full p-2">
        <Text className="text-2xl font-bold text-center">Checkout</Text>
      </View>
      <View className=" w-full p-2">
        <Text className="text-lg font-bold text-center">
          Total: ₦{totalSum()}
        </Text>
      </View>

      <View className="p-2 px-4 space-y-2">
        <Text className="font-bold">Select existing business:</Text>
        <View className="border border-gray-300 rounded-md">
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 32, 45, 68, 456, 345, 67].map(
              (item, index) => (
                <Picker.Item
                  label={`Business ${index + 1}`}
                  value={`Business ${index + 1}`}
                  key={index}
                />
              )
            )}
          </Picker>
        </View>
      </View>

      <View className="px-4 my-4">
        <View className="border-t border-gray-300" />
      </View>

      <View className="p-4 space-y-4">
        <Text className="font-bold">Add New Business:</Text>
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
          Pay
        </Link>
        <Link
          href="../"
          className="w-full bg-[#f1b265]/50 p-2 font-bold  text-center rounded-md text-lg"
        >
          Back
        </Link>
      </View>
    </View>
  );
}
