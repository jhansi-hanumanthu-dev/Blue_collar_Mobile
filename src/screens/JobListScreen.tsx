import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore } from "../store/useStore";
import { jobs as allJobs } from "../data/jobs";
import { SafeAreaView } from "react-native-safe-area-context";
import { translations } from "../data/translations";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Jobs">;

export default function JobListScreen({ navigation }: Props) {
  const category = useStore(state => state.category);
  const language = useStore(state => state.language);
  const t = translations[language];

  const filteredJobs = allJobs.filter(job => job.category === category);
  const categoryName = t.categories[category];
  const heading = `${categoryName} ${t.jobsTitle}`;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{heading}</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Jobs List */}
      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Detail", { job: item })}
          >
            <View style={styles.card}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={styles.title}>{item.title[language]}</Text>
                {item.verified && <Text>✔️</Text>}
              </View>
              <Text style={styles.salary}>{item.salary}</Text>
              <Text style={styles.location}>
                {t.location}: {item.location[language]} • {t.distance}: {item.distance}
              </Text>
              <Text style={styles.rating}>{t.rating}: {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={{ marginTop: 30 }}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>{t.noJobs}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FC" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  backBtn: { width: 40, justifyContent: "center", alignItems: "center" },
  backArrow: { fontSize: 40, fontWeight: "bold", bottom: 5 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: '#2E7D32' },

  card: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },
  title: { fontSize: 16, fontWeight: "700" },
  salary: { fontSize: 14, color: "#444", marginVertical: 4 },
  location: { fontSize: 13, color: "#777" },
  rating: { fontSize: 13, color: "#555", marginTop: 4 },
});
