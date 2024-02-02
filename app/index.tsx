import { Link, useRouter } from "expo-router";
import { Button, H1, Image, Paragraph, Separator, YGroup, YStack } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
          flex={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <YStack space="$2">
            <Image
              source={{
                uri: require("../assets/IndianaJones.jpeg"),
                width: 350,
                height: 450,
              }}
              resizeMode="cover"
              borderRadius={10}
            />
          </YStack>

          <YStack>
            <H1 textAlign="center">Indiana Jones.</H1>
            <Paragraph textAlign="center">
              Indiana Jones is a fictional character created by filmmaker George Lucas and starred by actor Harrison Ford in the famous adventure film saga.
            </Paragraph>
          </YStack>

          <YStack space="$2.5">
          <Button
  onPress={() => router.push("/tabs")}
  style={{
    backgroundColor: "#FF9700", 
    padding: 10, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: "#FEFEFE", 
    width: 200,
   
  }}
  textStyle={{
    color: "red", 
    fontWeight: "bold", 
  }}
>
  Begin
</Button>

          </YStack>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
