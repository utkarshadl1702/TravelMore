/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CircleUserRound,
  Compass,
  Map,
  UsersRound,
} from 'lucide-react-native';

const tabs = [
  { label: 'Explore', Icon: Compass },
  { label: 'Community', Icon: UsersRound },
  { label: 'Maps', Icon: Map },
  { label: 'Profile', Icon: CircleUserRound },
];

function App() {
  const [requestSent, setRequestSent] = useState(false);
  const [activeTab, setActiveTab] = useState('Explore');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>T</Text>
          </View>
          <View style={styles.brandCopy}>
            <Text style={styles.brandName}>TravelTea</Text>
            <Text style={styles.brandSubtitle}>TRAVEL, SHARED</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>
        </View>

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
          <Text style={styles.tripTitle}>Patagonia{ '\n' }trail days</Text>
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
      <View style={styles.tabBar}>
        {tabs.map(({ label, Icon }) => {
          const isActive = activeTab === label;
          const color = isActive ? '#183B35' : '#71817A';

          return (
            <Pressable
              key={label}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              onPress={() => setActiveTab(label)}
              style={styles.tab}>
              <Icon
                color={color}
                size={21}
                strokeWidth={isActive ? 2.4 : 1.8}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {label}
              </Text>
              <View
                style={[
                  styles.tabIndicator,
                  isActive && styles.tabIndicatorActive,
                ]}
              />
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
  },
  brandMark: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#D9E96C',
  },
  brandMarkText: {
    color: '#183B35',
    fontSize: 22,
    fontWeight: '800',
  },
  brandCopy: {
    flex: 1,
    marginLeft: 11,
  },
  brandName: {
    color: '#183B35',
    fontSize: 17,
    fontWeight: '800',
  },
  brandSubtitle: {
    marginTop: 2,
    color: '#71817A',
    fontSize: 9,
    fontWeight: '700',
  },
  avatar: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
    backgroundColor: '#F1B29B',
  },
  avatarText: {
    color: '#593A32',
    fontSize: 14,
    fontWeight: '800',
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
  tabBar: {
    minHeight: 68,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DCE3DA',
    backgroundColor: '#F4F6F0',
    paddingHorizontal: 6,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    minWidth: 0,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    marginTop: 3,
    color: '#71817A',
    fontSize: 10,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#183B35',
    fontWeight: '800',
  },
  tabIndicator: {
    width: 14,
    height: 3,
    marginTop: 4,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  tabIndicatorActive: {
    backgroundColor: '#D9E96C',
  },
});

export default App;
