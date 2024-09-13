import { View, Text, Pressable, TextInput } from "react-native";
import { ArrowLeftSVG, ArrowRightSVG } from "../svg/svg";
import { useState } from "react";

export default () => {
  const [qty, setQty] = useState(0);
  return (
    <View className="p-4 space-y-4">
      <View className="flex-row space-x-2">
        <View className="w-16 h-16 border rounded-md"></View>
        <View className="flex-row justify-between flex-1">
          <View>
            <Text className="text-lg font-bold">Sliced Bread</Text>
            <Text className="text-md">₦1,500.00</Text>
          </View>
          <View className=" w-1/2 flex-row justify-evenly items-center">
            <Pressable
              onPress={() => {
                if (!qty) return;
                setQty(qty - 1);
              }}
            >
              <ArrowLeftSVG />
            </Pressable>
            {/* <Text className="border p-2 rounded-md">{qty}</Text> */}
            <TextInput
              value={`${qty}`}
              className="border p-2 rounded-md text-center"
              onChangeText={(val) => setQty(Number(val))}
            />
            <Pressable
              onPress={() => {
                setQty(qty + 1);
              }}
            >
              <ArrowRightSVG />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
