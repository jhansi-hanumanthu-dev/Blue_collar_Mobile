import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore } from "../store/useStore";
import { translations } from "../data/translations";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Category">;

const categories = [
  { id: "maid", icon: "🧹" },
  { id: "driver", icon: "🚗" },
  { id: "guard", icon: "🛡" },
  { id: "plumber", icon: "🔧" },
  { id: "delivery", icon: "📦" },
  { id: "cook", icon: "🍳" },
  { id: "babysitter", icon: "👶" },
  { id: "electrician", icon: "💡" },
  { id: "carpenter", icon: "🪚" },
  { id: "tutor", icon: "📚" },
];

export default function CategoryScreen({ navigation }: Props) {
  const setCategory = useStore(state => state.setCategory);
  const language = useStore(state => state.language);
  
  const t = translations[language];

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
  
      <Text style={styles.headerTitle}>
        {t?.categoryTitle ? String(t.categoryTitle) : "Select Work"}
      </Text>
  
      <View style={{ width: 40 }} />
    </View>
  
    <ScrollView contentContainerStyle={styles.grid}>
      {categories.map(cat => (
        <TouchableOpacity
          key={cat.id}
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => {
            setCategory(cat.id);
            navigation.navigate("Jobs");
          }}
        >
          <Text style={styles.icon}>{cat.icon}</Text>
          <Text style={styles.label}>
            {t?.categories?.[cat.id] ? String(t.categories[cat.id]) : cat.id}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </SafeAreaView>
  
  
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FC", paddingHorizontal: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  backBtn: { width: 40,justifyContent: "center", alignItems: "center",bottom:4 },
  backArrow: { fontSize: 44, fontWeight: "bold", color: "#111" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#2E7D32" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingBottom: 20 },
  card: { width: "48%", backgroundColor: "#FFFFFF", borderRadius: 16, paddingVertical: 28, marginBottom: 16, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 10, elevation: 4 },
  icon: { fontSize: 42, marginBottom: 10 },
  label: { fontSize: 18, fontWeight: "700", color: "#111", textAlign: "center" },
});
