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
    <View className="flex-1 bg-[#f1b265] ">
      <View className="h-1/6 mt-8 p-4 flex-row justify-between">
        <View className="">
          <View className="flex-row">
            <Text className="text-lg font-bold">Hi, Sarah</Text>
            <HelloWave />
          </View>
          <Text className="text-3xl font-bold text-white">Dashboard</Text>
        </View>
        <View className="flex-row  justify-end">
          <CheckoutSVG />
          <Text className="text-lg ">{value?.length}</Text>
        </View>
      </View>
      <View className="flex-1 bg-white rounded-t-3xl px-2">
        <View className="my-4" />
        <View>
          <Text className="text-lg text-center">Total Sales:</Text>
          <Text className="text-3xl font-bold text-center">₦{totalSum()}</Text>
        </View>
        <View className="items-center space-x-4 justify-center flex-row">
          {!showSearch && (
            <>
              <Link href="/modal-items">
                <View className="w-10 h-10 border rounded-md justify-center items-center bg-[#f1b265]/50">
                  <CashSVG />
                </View>
              </Link>
              <Link href="/modal-shop" className="mx-2">
                <View className="w-10 h-10 border rounded-md mx-2 justify-center items-center bg-[#f1b265]/50">
                  <StoreSVG />
                </View>
              </Link>
              <TouchableOpacity
                onPress={() => {
                  setShowSearch(true);
                }}
                className="w-10 h-10 border rounded-md justify-center items-center bg-[#f1b265]/50"
              >
                <SearchSVG />
              </TouchableOpacity>
            </>
          )}
          {showSearch && (
            <View className="w-full p-1.5 rounded-md flex-row items-center justify-center border">
              <TextInput className="  flex-1" placeholder="search..." />
              <TouchableOpacity
                onPress={() => {
                  setShowSearch(false);
                }}
              >
                <CloseSVG />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View className="my-2" />
        <View className="border-t border-gray-300" />

        <ScrollView className="space-y-2 p-2 pb-4">
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
        </ScrollView>
      </View>
    </View>
  );
}
