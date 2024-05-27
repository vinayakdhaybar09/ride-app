import { Stack, Tabs } from "expo-router";
import { GluestackUIProvider, Text, Box, View, Button, Image } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <Tabs
        screenOptions={{
          tabBarStyle:{ height:60},
          tabBarActiveTintColor: Colors.black,
          tabBarInactiveTintColor:Colors.gray,
          tabBarShowLabel: false,
          // headerShown: false,
          headerLeft: () => (
            <Button onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </Button>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "index",
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "create",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  backgroundColor: Colors.black,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderRadius: 10,
                  // height: 50,
                }}
              >
                <AntDesign name="plus" size={24} color={Colors.bgColor} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "rides",
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="book" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
