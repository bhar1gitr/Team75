import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { BASE_URL } from '../../services/api';

export default function ReportsScreen() {
  const [loading, setLoading] = useState(false);
  const currentMonth = new Date().getMonth() + 1;

  const downloadExcel = (month: number) => {
    const year = 2026;
    // Replace with your actual server IP/Domain
    const url = `https://your-api.com/api/export-monthly-notes?month=${month}&year=${year}`;
    
    Alert.alert("Downloading", `Starting download for Month ${month}...`);
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download Monthly Notes</Text>
      
      {[1, 2, 3].map((m) => (
        <TouchableOpacity 
          key={m} 
          style={styles.downloadBtn}
          onPress={() => downloadExcel(m)}
        >
          <Ionicons name="document-text" size={20} color="white" />
          <Text style={styles.btnText}>Export Notes (Month {m}/2026)</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  downloadBtn: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  btnText: { color: 'white', marginLeft: 10, fontWeight: '600' }
});