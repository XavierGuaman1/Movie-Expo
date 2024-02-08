import { ScrollView } from "react-native";  // Importa ScrollView desde "react-native"
import { FilmDemo } from "../components/Film";

export default function Film() {
  return (
    <>
      <ScrollView>
        <FilmDemo />
      </ScrollView>
    </>
  );
};
