import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

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

export default function TabTwoScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#f1b265]/20 w-full p-2 mt-10">
        <Text className="text-2xl font-bold text-center">Transactions</Text>
      </View>
      <View className="my-4 p-2">
        <Text>Filter: </Text>
      </View>
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
  );
}
