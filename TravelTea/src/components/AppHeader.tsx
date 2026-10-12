import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CircleUserRound } from 'lucide-react-native';

type AppHeaderProps = {
  onPressProfile: () => void;
};

export function AppHeader({ onPressProfile }: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.brandName}>TravelTea</Text>
      <Pressable
        accessibilityLabel="Open profile"
        accessibilityRole="button"
        onPress={onPressProfile}
        style={({ pressed }) => [styles.profileButton, pressed && styles.pressed]}>
        <CircleUserRound color="#183B35" size={23} strokeWidth={1.9} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  brandName: {
    color: '#183B35',
    fontSize: 19,
    fontWeight: '800',
  },
  profileButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F1B29B',
  },
  pressed: {
    opacity: 0.75,
  },
});
