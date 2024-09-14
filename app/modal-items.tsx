import { Pressable, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { ArrowLeftSVG, ArrowRightSVG } from "@/components/svg/svg";
import CheckoutComponent from "@/components/checkout/checkout.component";
import { useContext } from "react";
import { OrderContext } from "@/context/order.context";

const data = [
  {
    title: "Sliced Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/homemade-crunchy-bread-with-grains_144627-362.jpg?t=st=1726184441~exp=1726188041~hmac=6fcf83d64a5f715c5428bf883f9b580a285ffa070b8247dcb86e78cebf0cd3e6&w=2000",
    price: 1500,
    id: 1,
  },
  {
    title: "Bread Bums",
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-black-bread-slices-black-board-mixed-colors-distressed-background_179666-47472.jpg?t=st=1726267038~exp=1726270638~hmac=fc985b615d0a70c870ae8ed47d3d24cceb6d8a229f5644a2ae48c64176191556&w=2000",
    price: 1000,
    id: 2,
  },
  {
    title: "Butter Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/delicious-bread-made-from-good-wheat_144627-8616.jpg?t=st=1726267119~exp=1726270719~hmac=be7e287a318ae867a2713906e1ba5f92b26008e655b2fdab1d49310923266f2b&w=2000",
    price: 1200,
    id: 3,
  },
  {
    title: "Wheat Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-sliced-bread_144627-14630.jpg?t=st=1726267153~exp=1726270753~hmac=3df9de91571935a97f7b6066ff4c4123ab0f009a586414e81bccbd0ac921b7c9&w=2000",
    price: 1500,
    id: 4,
  },
  {
    title: "Sliced Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-black-bread-slices-black-board-mixed-colors-distressed-background_179666-47472.jpg?t=st=1726267038~exp=1726270638~hmac=fc985b615d0a70c870ae8ed47d3d24cceb6d8a229f5644a2ae48c64176191556&w=2000",
    price: 1500,
    id: 5,
  },
  {
    title: "Bread Bums",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-sliced-bread_144627-14630.jpg?t=st=1726267153~exp=1726270753~hmac=3df9de91571935a97f7b6066ff4c4123ab0f009a586414e81bccbd0ac921b7c9&w=2000",
    price: 1000,
    id: 6,
  },
  {
    title: "Butter Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-black-bread-slices-black-board-mixed-colors-distressed-background_179666-47472.jpg?t=st=1726267038~exp=1726270638~hmac=fc985b615d0a70c870ae8ed47d3d24cceb6d8a229f5644a2ae48c64176191556&w=2000",
    price: 1200,
    id: 7,
  },
  {
    title: "Wheat Bread",
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-black-bread-slices-black-board-mixed-colors-distressed-background_179666-47472.jpg?t=st=1726267038~exp=1726270638~hmac=fc985b615d0a70c870ae8ed47d3d24cceb6d8a229f5644a2ae48c64176191556&w=2000",
    price: 1500,
    id: 8,
  },
];

export default function ModalItems() {
  const { value, setValue } = useContext(OrderContext);
  const isPresented = router.canGoBack();

  function totalSum() {
    const result = value.reduce((acc, val) => {
      // @ts-ignore
      return acc + val.price * val.qty;
    }, 0);

    return result;
  }

  function addItem(val: any) {
    const findItem = value.find((item: any) => item.title === val.title);
    if (!findItem) {
      setValue([...value, { ...val, qty: 1 }]);
      return;
    }
    // @ts-ignore
    findItem.qty = findItem.qty + 1;
  }

  function removeItem() {}
  return (
    <View className="flex-1 i bg-white mt-10">
      <View className="bg-[#f1b265]/50 w-full p-2">
        <Text className="text-2xl font-bold text-center">Select Product</Text>
      </View>
      <View className=" w-full p-2">
        <Text className="text-lg font-bold text-center">
          Total: ₦{totalSum()}
        </Text>
      </View>

      <ScrollView>
        {data?.map((item) => (
          <CheckoutComponent {...item} key={item.id} />
        ))}
      </ScrollView>

      <View className="p-4 space-y-4">
        <Link
          href="/modal-checkout"
          className="w-full bg-green-800 p-2 text-white text-center rounded-md text-lg"
        >
          Proceed to checkout
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
