import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CashSVG, HomeSVG, ProfileSVG, StoreSVG } from "@/components/svg/svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeSVG fill={color} />
            // <TabBarIcon
            //   name={focused ? "home" : "home-outline"}
            //   color={color}
            // />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, focused }) => <CashSVG fill={color} />,
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "Inventory",
          tabBarIcon: ({ color, focused }) => <StoreSVG fill={color} />,
        }}
      />
      <Tabs.Screen
        name="staff"
        options={{
          title: "Staff",
          tabBarIcon: ({ color, focused }) => <ProfileSVG fill={color} />,
        }}
      />
    </Tabs>
  );
}
