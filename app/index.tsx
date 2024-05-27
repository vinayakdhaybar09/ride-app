import { Button, ButtonText } from "@gluestack-ui/themed";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen. ok</Text>
      <Button variant="solid" action="primary">
        <ButtonText>Add </ButtonText> 
      </Button>
    </View>
  );
}
