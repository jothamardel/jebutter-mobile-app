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
import { useState } from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
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
          <Text className="text-lg ">3</Text>
        </View>
      </View>
      <View className="flex-1 bg-white rounded-t-3xl px-2">
        <View className="my-4" />
        <View>
          <Text className="text-lg text-center">Total Sales:</Text>
          <Text className="text-3xl font-bold text-center">₦100,000.00</Text>
        </View>
        <View className="items-center space-x-4 justify-center flex-row">
          {!showSearch && (
            <>
              <Link href="/modal-items">
                <View className="w-10 h-10 border rounded-md justify-center items-center bg-[#f1b265]/50">
                  <CashSVG />
                </View>
              </Link>
              <View className="w-10 h-10 border rounded-md mx-2 justify-center items-center bg-[#f1b265]/50">
                <StoreSVG />
              </View>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23].map((item, index) => (
            <View
              key={index}
              className="p-2 border rounded-md bg-[#f1b265]/50 shadow-md"
            >
              <Link href="/modal-transaction">
                <View>
                  <Text className="font-bold text-lg">Business Name</Text>
                  <Text>Amount: ₦10,000</Text>
                  <Text>Quantity: 24</Text>
                  <Text>Type: Credit | Transfer | POS | Cash</Text>
                </View>
              </Link>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
