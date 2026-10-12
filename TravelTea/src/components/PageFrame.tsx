import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from './AppHeader';

type PageFrameProps = {
  title: string;
  onPressProfile: () => void;
  children?: ReactNode;
};

export function PageFrame({ title, onPressProfile, children }: PageFrameProps) {
  return (
    <View style={styles.page}>
      <AppHeader onPressProfile={onPressProfile} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 32,
  },
  title: {
    color: '#183B35',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
});
