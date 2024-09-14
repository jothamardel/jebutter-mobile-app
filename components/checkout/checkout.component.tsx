import { View, Text, Pressable, TextInput, Image } from "react-native";
import { ArrowLeftSVG, ArrowRightSVG } from "../svg/svg";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "@/context/order.context";

interface Props {
  title: string;
  price: number;
  imageUrl: string;
}

export default ({ title, price, imageUrl }: Props) => {
  const [qty, setQty] = useState(0);
  const { value, setValue } = useContext(OrderContext);

  function addItem(val: any) {
    const findItem = value.find((item: any) => item.title === val.title);
    if (!findItem) {
      setValue([...value, { ...val, qty: 1 }]);
      return;
    }

    // console.log(findItem)

    // @ts-ignore
    findItem.qty = findItem.qty + 1;
    const updateOrder = value.map((item) => {
      // @ts-ignore
      if (item.id === findItem.id) {
        return findItem;
      }
      return item;
    });
    setValue(updateOrder);
  }

  function removeItem(val: any) {
    // @ts-ignore
    const findItem = value.find((item: any) => item.title === val.title);
    if (!findItem) {
      return;
    }

    // @ts-ignore
    findItem.qty = findItem.qty - 1;
    const updateOrder = value.map((item) => {
      // @ts-ignore
      if (item.id === findItem.id) {
        return findItem;
      }
      return item;
    });
    setValue(updateOrder);
  }

  function updateQty() {
    // @ts-ignore
    return value.find((item) => item.title === title)?.qty ?? 0;
  }

  // useEffect(() => {
  //   updateQty();
  // }, [qty]);

  return (
    <View className="p-4 space-y-4">
      <View className="flex-row space-x-2">
        <View className="w-16 h-16 border rounded-md overflow-hidden">
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
            className="w-full h-full"
          />
        </View>
        <View className="flex-row justify-between flex-1">
          <View>
            <Text className="text-lg font-bold">{title}</Text>
            <Text className="text-md">₦{price}</Text>
          </View>
          <View className=" w-1/2 flex-row justify-evenly items-center">
            <Pressable
              onPress={() => {
                if (!updateQty()) return;
                // setQty(qty - 1);
                removeItem({ title, price, imageUrl, qty });
              }}
            >
              <ArrowLeftSVG />
            </Pressable>
            {/* <Text className="border p-2 rounded-md">{qty}</Text> */}
            <TextInput
              value={`${updateQty()}`}
              className="border p-2 rounded-md text-center"
              // onChangeText={(val) => setQty(Number(val))}
            />
            <Pressable
              onPress={() => {
                // setQty(qty + 1);
                addItem({ title, price, imageUrl });
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
