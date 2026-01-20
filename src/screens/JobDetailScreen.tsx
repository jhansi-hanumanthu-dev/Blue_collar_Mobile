import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "../store/useStore";
import { translations } from "../data/translations";
import { useState } from "react";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function JobDetailScreen({ route, navigation }: Props) {
  const { job } = route.params;
  const { language } = useStore();
  const t = translations[language];

  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    Alert.alert(
      t.appliedSuccessfully,
      undefined,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{job.title[language]}</Text>
          <View style={{ width: 40 }} />
        </View>

        {job.verified && (
          <Text style={styles.verified}>✅ {t.verified}</Text>
        )}

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>💰</Text>
            <Text style={styles.label}>{t.salary}:</Text>
            <Text style={styles.value}>{job.salary}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.label}>{t.location}:</Text>
            <Text style={styles.value}>{job.location[language]}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>⭐</Text>
            <Text style={styles.label}>{t.rating}:</Text>
            <Text style={styles.value}>{job.rating}</Text>
          </View>

          {job.distance && (
            <View style={styles.infoRow}>
              <Text style={styles.icon}>🛣</Text>
              <Text style={styles.label}>{t.distance}:</Text>
              <Text style={styles.value}>{job.distance}</Text>
            </View>
          )}
        </View>

        {job.description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.jobDetails}</Text>
            <Text style={styles.sectionContent}>{job.description[language]}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.applyBtn, applied && styles.appliedBtn]}
          activeOpacity={0.85}
          onPress={handleApply}
          disabled={applied}
        >
          <Text style={styles.applyText}>
            {applied ? t.applied : t.applyNow}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F7F9FC" },
  container: { flexGrow: 1, padding: 16 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    padding: 10,
    borderRadius: 12,

  },
  backBtn: { width: 40, justifyContent: "center", alignItems: "center", borderRadius: 20 },
  backArrow: { fontSize: 40, color: "#111", fontWeight: "bold", bottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#2E7D32", flex: 1, textAlign: "center" },

  verified: { fontSize: 14, color: "#2E7D32", fontWeight: "600", marginBottom: 12 },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  icon: { fontSize: 18, marginRight: 6 },
  label: { fontSize: 16, fontWeight: "600", color: "#555", marginRight: 6 },
  value: { fontSize: 16, color: "#111", flexShrink: 1 },

  section: {
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8, color: "#111" },
  sectionContent: { fontSize: 15, color: "#555", lineHeight: 22 },

  applyBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  appliedBtn: {
    backgroundColor: "#888", // gray after applied
  },
  applyText: { color: "white", fontSize: 18, fontWeight: "700" },
});
