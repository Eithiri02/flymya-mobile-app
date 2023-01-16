import { View, ScrollView, StyleSheet } from 'react-native';

import Navigation from './components/Navigation';
import Tabs from './components/Tabs';
import NationSelector from './components/NationSelector';
import WaySelector from './components/WaySelector';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Navigation />
        <Tabs />
        <NationSelector />
        <WaySelector />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fafafa"
  },
});
