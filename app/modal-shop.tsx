import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useContext, useState } from "react";
import { OrderContext } from "@/context/order.context";
import { CloseSVG } from "@/components/svg/svg";

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

export default function ModalCheckout() {
  const [toggle, setToggle] = useState(false);
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
        <Text className="text-2xl font-bold text-center">
          Manage Businesses
        </Text>
      </View>
      {/* <View className=" w-full p-2">
        <Text className="text-lg font-bold text-center">
          Total: ₦{totalSum()}
        </Text>
      </View> */}

      {/* <View className="p-2 px-4 space-y-2">
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
      </View> */}

      <View className="flex-row justify-center space-x-4 my-4">
        <Pressable
          className={`border p-2 rounded-md ${
            toggle ? "bg-[#f1b265]/50" : "bg-green-700"
          }`}
          onPress={() => setToggle(false)}
        >
          <Text className={`${toggle ? "text-black" : "text-white"}`}>
            View Businesses
          </Text>
        </Pressable>
        <Pressable
          className={`border p-2 rounded-md ${
            !toggle ? "bg-[#f1b265]/50" : "bg-green-700"
          }`}
          onPress={() => setToggle(true)}
        >
          <Text className={`${!toggle ? "text-black" : "text-white"}`}>
            Add Business
          </Text>
        </Pressable>
      </View>

      <View className="px-4 my-4">
        {!toggle && (
          <View className="w-full p-1.5 rounded-md flex-row items-center justify-center border">
            <TextInput className="  flex-1" placeholder="search..." />
            <TouchableOpacity onPress={() => {}}>
              <CloseSVG />
            </TouchableOpacity>
          </View>
        )}
        <View className="border-t border-gray-300" />
      </View>

      {toggle && (
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
          <View>
            <Pressable className="w-full bg-green-800 p-4 font-bold  text-center rounded-md text-lg">
              <Text className="text-white text-center">Save</Text>
            </Pressable>
          </View>
        </View>
      )}

      {!toggle && (
        <ScrollView className="space-y-2 p-2 pb-4">
          {data.map((item: any, index) => (
            <View
              key={index}
              className="p-2 border rounded-md bg-[#f1b265]/50 shadow-md"
            >
              <Link href="/modal-shop">
                <View>
                  <Text className="font-bold text-lg">{item.businessName}</Text>
                  <Text>Owner: {item.owner}</Text>
                  {/* <Text>Quantity: {item.qty}</Text>
                  <Text>Type: {item.type}</Text> */}
                </View>
              </Link>
            </View>
          ))}
        </ScrollView>
      )}

      <View className="p-4 space-y-4">
        {/* <Link
          href="../"
          className="w-full bg-green-800 p-2 text-white text-center rounded-md text-lg"
        >
          Pay
        </Link> */}
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
