import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore } from "../store/useStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Language">;

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
];

export default function LanguageScreen({ navigation }: Props) {
  const setLanguage = useStore(state => state.setLanguage);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>JobMitra</Text>
        <Text style={styles.tagline}>Find work near you</Text>
      </View>

<Text style={styles.title}>Choose your language</Text>
<Text style={styles.subtitle}>अपनी भाषा चुनें</Text>
<Text style={styles.subtitle}>మీ భాషను ఎంచుకోండి</Text>

      <View style={styles.list}>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang.code}
            style={styles.languageCard}
            onPress={() => {
              setLanguage(lang.code as "en" | "hi" | "te");
              navigation.navigate("Category");
            }}
            activeOpacity={0.8}
          >
            <View>
              <Text style={styles.langMain}>{lang.native}</Text>
              <Text style={styles.langSub}>{lang.label}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 40,
    alignItems: "center",
  },
  logo: {
    fontSize: 34,
    fontWeight: "800",
    color: "#2E7D32",
  },
  tagline: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 40,
    textAlign: "center",
    color: "#111",
  },

  list: {
    marginTop: 30,
  },

  languageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  langMain: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  langSub: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },

  arrow: {
    fontSize: 32,
    color: "#2E7D32",
    fontWeight: "700",
  },

  footer: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 30,
    color: "#999",
    fontSize: 13,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 6,
    color: "#666",
  },
  
});
