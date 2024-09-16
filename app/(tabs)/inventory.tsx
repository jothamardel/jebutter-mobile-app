import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  AddSVG,
  CashSVG,
  CheckoutSVG,
  CloseSVG,
  SearchSVG,
  StoreSVG,
} from "@/components/svg/svg";
import { useContext, useState } from "react";
import { Link } from "expo-router";
import { OrderContext } from "@/context/order.context";
import Svg, { Path } from "react-native-svg";

const data = [
  {
    businessName: "Shopcity",
    owner: "Mr. Daniel Uba",
    qty: 24,
    amount: 10000,
    type: "cash",
    id: 1,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-344553",
    date: "12th September, 2024",
  },
  {
    businessName: "Casandi Shop",
    owner: "Mr. Fom Bot",
    qty: 14,
    amount: 7000,
    type: "transfer",
    id: 2,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-378647",
    date: "12th September, 2024",
  },
  {
    businessName: "Kcee Supermarket",
    owner: "Mrs. Mary Dewan",
    qty: 34,
    amount: 17000,
    type: "pos",
    id: 3,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-288739",
    date: "12th September, 2024",
  },
  {
    businessName: "Exclusive shopping mall",
    owner: "Mrs. Lar Dung",
    qty: 37,
    amount: 27000,
    type: "pos",
    id: 4,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-237828",
    date: "12th September, 2024",
  },
  {
    businessName: "Shopcity",
    owner: "Mr. Daniel Uba",
    qty: 24,
    amount: 10000,
    type: "cash",
    id: 1,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-344553",
    date: "12th September, 2024",
  },
  {
    businessName: "Casandi Shop",
    owner: "Mr. Fom Bot",
    qty: 14,
    amount: 7000,
    type: "transfer",
    id: 2,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-378647",
    date: "12th September, 2024",
  },
  {
    businessName: "Kcee Supermarket",
    owner: "Mrs. Mary Dewan",
    qty: 34,
    amount: 17000,
    type: "pos",
    id: 3,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-288739",
    date: "12th September, 2024",
  },
  {
    businessName: "Exclusive shopping mall",
    owner: "Mrs. Lar Dung",
    qty: 37,
    amount: 27000,
    type: "pos",
    id: 4,
    staff: "Sarah T.",
    businessLocation: "Jos Plateau",
    ref: "jb-237828",
    date: "12th September, 2024",
  },
];

export default function HomeScreen() {
  const { value } = useContext(OrderContext);
  const [showSearch, setShowSearch] = useState(false);

  function totalSum() {
    return data.reduce((acc, val) => {
      return acc + val.amount;
    }, 0);
  }
  return (
    <ScrollView className="flex-1 bg-[#f1b265] ">
      <View className="h-20 mt-8 p-4 flex-row justify-between">
        <View className="">
          <Text className="text-3xl font-bold text-white">Inventory</Text>
        </View>
      </View>
      <View className="flex-1 bg-white h-screen rounded-t-3xl p-4">
        <View className="flex-row justify-between items-center py-2">
          <Text className="my-2 font-bold">Stock</Text>
          <Pressable className="border rounded-md bg-[#f1b265]/30">
            <Svg width={32} height={32} viewBox="0 0 256 256">
              <Path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
            </Svg>
          </Pressable>
        </View>
        <View className="" />
        <View className="border-t border-gray-300" />

        <ScrollView className="p-2 flex-1">
          <View className=" flex-row flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View className="p-2 border border-gray-200 w-1/2">
                <Link href="/modal-transaction">
                  <View>
                    <Text className="font-bold text-lg">{"Item"}</Text>
                    <Text>Quantity: 23</Text>
                  </View>
                </Link>
              </View>
            ))}
          </View>
        </ScrollView>

        <View className="flex-row justify-between items-center py-2">
          <Text className="my-2 font-bold">Product/Bread</Text>
          <Pressable className="border rounded-md bg-[#f1b265]/30">
            <Svg width={32} height={32} viewBox="0 0 256 256">
              <Path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
            </Svg>
          </Pressable>
        </View>
        <View className="" />
        <View className="border-t border-gray-300" />

        <ScrollView className="p-2 pb-4 flex-1">
          <View className=" flex-row flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View className="p-2 border border-gray-200 w-1/2">
                <Link href="/modal-transaction">
                  <View>
                    <Text className="font-bold text-lg">{"Item"}</Text>
                    <Text>Quantity: 23</Text>
                  </View>
                </Link>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* <ScrollView className="space-y-2 p-2 pb-4">
          {data.map((item: any, index) => (
            <View
              key={index}
              className="p-2 border rounded-md bg-[#f1b265]/50 shadow-md"
            >
              <Link href="/modal-transaction">
                <View>
                  <Text className="font-bold text-lg">{item.businessName}</Text>
                  <Text>Amount: ₦{item.amount}</Text>
                  <Text>Quantity: {item.qty}</Text>
                  <Text>Type: {item.type}</Text>
                </View>
              </Link>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </ScrollView>
  );
}
