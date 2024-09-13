import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default () => (
  <View className="flex-1   bg-[#f1b265] relative">
    <View className="justify-center items-center  border-none rounded-md shadow-md space-y-0 w-full flex-1">
      <View className="w-full h-1/2  ">
        <Image
          source={require("@/assets/images/bread.png")}
          className=" m-0 p-0  w-full h-full"
        />
      </View>
    </View>
    <View className="absolute top-0 left-0 bg-black/90 w-full h-full justify-center items-center ">
      <View>
        <Image source={require("@/assets/images/jebutter.png")} />
      </View>
      {/* <Text className="text-7xl font-bold leading-none text-white">
        Jebutter
      </Text> */}
      <Text className="text-5xl font-extralight leading-none text-white my-2">
        Bakery
      </Text>
      <View className="w-full px-6">
        <Link
          href="/login"
          className="w-full text-xl text-white bg-green-900 text-center p-4 rounded-md"
        >
          Get started
        </Link>
      </View>
    </View>
  </View>
);

// #fd981e
// e7d0a4
// bg-[#f1b265]
