import { H1, H5,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import {DemoCard} from "../../components/Card";
import { SceneDemo } from "../../components/Scene";

export default function Tab1() {
  return (
    <>
    <H1  style={styles.dashText}>FILM1</H1>
    <H5  style={styles.dashText}>SCENES</H5>
  
    <ScrollView>
    <MyStack>
      <SceneDemo/>
    </MyStack>
    </ScrollView>
    </>
  );
};

const styles = {
  dashText:{
    marginBottom:8,
    paddingLeft:18
  },

  };