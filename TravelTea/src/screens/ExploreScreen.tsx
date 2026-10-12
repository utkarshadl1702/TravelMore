import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader } from '../components/AppHeader';

type ExploreScreenProps = {
  onPressProfile: () => void;
};

export function ExploreScreen({ onPressProfile }: ExploreScreenProps) {
  const [requestSent, setRequestSent] = useState(false);

  return (
    <SafeAreaView edges={['top']} style={styles.page}>
      <AppHeader onPressProfile={onPressProfile} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>YOUR NEXT CHAPTER</Text>
          <Text style={styles.title}>Go farther, together.</Text>
          <Text style={styles.description}>
            Find a trip that feels like you, and people excited to go.
          </Text>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Open trip plans</Text>
          <Text style={styles.sectionMeta}>A good place to start</Text>
        </View>

        <View style={styles.tripCard}>
          <View style={styles.tripTopRow}>
            <Text style={styles.tripRegion}>ARGENTINA · CHILE</Text>
            <View style={styles.openBadge}>
              <Text style={styles.openBadgeText}>OPEN</Text>
            </View>
          </View>
          <Text style={styles.tripTitle}>{'Patagonia\ntrail days'}</Text>
          <Text style={styles.tripDescription}>
            Glaciers, long hikes, and slow evenings in the south.
          </Text>

          <View style={styles.tripDetails}>
            <View style={styles.detailPill}>
              <Text style={styles.detailText}>12–21 Nov</Text>
            </View>
            <View style={styles.detailPill}>
              <Text style={styles.detailText}>3 travelers</Text>
            </View>
          </View>

          <View style={styles.tripFooter}>
            <View style={styles.people}>
              <View style={[styles.person, styles.personOne]}>
                <Text style={styles.personText}>M</Text>
              </View>
              <View style={[styles.person, styles.personTwo]}>
                <Text style={styles.personText}>J</Text>
              </View>
              <View style={[styles.person, styles.personThree]}>
                <Text style={styles.personText}>A</Text>
              </View>
              <Text style={styles.peopleLabel}>3 going</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => setRequestSent(!requestSent)}
              style={({ pressed }) => [
                styles.joinButton,
                pressed && styles.joinButtonPressed,
                requestSent && styles.joinButtonSent,
              ]}>
              <Text style={styles.joinButtonText}>
                {requestSent ? 'Request sent' : 'Request to join'}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.note}>
          <View style={styles.noteAccent} />
          <Text style={styles.noteText}>
            The best stories usually start with a shared plan.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#F4F6F0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 24,
  },
  intro: {
    marginBottom: 30,
  },
  eyebrow: {
    marginBottom: 10,
    color: '#71817A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  title: {
    color: '#183B35',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 39,
  },
  description: {
    maxWidth: 300,
    marginTop: 10,
    color: '#64746D',
    fontSize: 15,
    lineHeight: 22,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  sectionTitle: {
    color: '#183B35',
    fontSize: 18,
    fontWeight: '800',
  },
  sectionMeta: {
    color: '#71817A',
    fontSize: 11,
  },
  tripCard: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#183B35',
  },
  tripTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tripRegion: {
    color: '#D4E2D7',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  openBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: '#D9E96C',
  },
  openBadgeText: {
    color: '#183B35',
    fontSize: 9,
    fontWeight: '900',
  },
  tripTitle: {
    marginTop: 22,
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 34,
  },
  tripDescription: {
    maxWidth: 270,
    marginTop: 9,
    color: '#D4E2D7',
    fontSize: 13,
    lineHeight: 19,
  },
  tripDetails: {
    flexDirection: 'row',
    marginTop: 18,
  },
  detailPill: {
    marginRight: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 4,
    backgroundColor: '#31534C',
  },
  detailText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  tripFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#42635C',
  },
  people: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  person: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -6,
    borderWidth: 2,
    borderColor: '#183B35',
    borderRadius: 13,
  },
  personOne: {
    backgroundColor: '#F1B29B',
  },
  personTwo: {
    backgroundColor: '#E4C875',
  },
  personThree: {
    backgroundColor: '#A9C9B4',
    marginRight: 7,
  },
  personText: {
    color: '#183B35',
    fontSize: 9,
    fontWeight: '800',
  },
  peopleLabel: {
    color: '#FFFFFF',
    fontSize: 11,
  },
  joinButton: {
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: 13,
    borderRadius: 5,
    backgroundColor: '#D9E96C',
  },
  joinButtonPressed: {
    opacity: 0.8,
  },
  joinButtonSent: {
    backgroundColor: '#F1B29B',
  },
  joinButtonText: {
    color: '#183B35',
    fontSize: 11,
    fontWeight: '800',
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
    paddingHorizontal: 2,
  },
  noteAccent: {
    width: 4,
    height: 34,
    marginRight: 12,
    borderRadius: 2,
    backgroundColor: '#E88A70',
  },
  noteText: {
    maxWidth: 260,
    color: '#52645D',
    fontSize: 13,
    lineHeight: 19,
  },
});
