import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotesScreen = ({ route }) => {
  const { audioPath, transcription, summary } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Audio Path:</Text>
      <Text style={styles.text}>{audioPath}</Text>
      <Text style={styles.header}>Transcription:</Text>
      <Text style={styles.text}>{transcription}</Text>
      <Text style={styles.header}>Summary:</Text>
      <Text style={styles.text}>{summary}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default NotesScreen;
//have to use useeffect hook to fetch the data from the database and create a new note component for each one