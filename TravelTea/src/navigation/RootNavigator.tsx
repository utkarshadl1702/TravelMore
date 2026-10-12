import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  CircleUserRound,
  Compass,
  Map,
  UsersRound,
} from 'lucide-react-native';
import { ExploreScreen } from '../screens/ExploreScreen';
import { CommunityScreen } from '../screens/CommunityScreen';
import { MapsScreen } from '../screens/MapsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type RootTabParamList = {
  Explore: undefined;
  Community: undefined;
  Maps: undefined;
  Profile: undefined;
};

type TabIconProps = {
  color: string;
  focused: boolean;
  size: number;
};

function ExploreTabIcon({ color, focused, size }: TabIconProps) {
  return <Compass color={color} size={size} strokeWidth={focused ? 2.4 : 1.8} />;
}

function CommunityTabIcon({ color, focused, size }: TabIconProps) {
  return (
    <UsersRound color={color} size={size} strokeWidth={focused ? 2.4 : 1.8} />
  );
}

function MapsTabIcon({ color, focused, size }: TabIconProps) {
  return <Map color={color} size={size} strokeWidth={focused ? 2.4 : 1.8} />;
}

function ProfileTabIcon({ color, focused, size }: TabIconProps) {
  return (
    <CircleUserRound
      color={color}
      size={size}
      strokeWidth={focused ? 2.4 : 1.8}
    />
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#183B35',
          tabBarInactiveTintColor: '#71817A',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name="Explore"
          options={{
            tabBarButtonTestID: 'tab-Explore',
            tabBarIcon: ExploreTabIcon,
          }}>
          {({ navigation }) => (
            <ExploreScreen
              onPressProfile={() => navigation.navigate('Profile')}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Community"
          options={{
            tabBarButtonTestID: 'tab-Community',
            tabBarIcon: CommunityTabIcon,
          }}>
          {({ navigation }) => (
            <CommunityScreen
              onPressProfile={() => navigation.navigate('Profile')}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Maps"
          options={{ tabBarButtonTestID: 'tab-Maps', tabBarIcon: MapsTabIcon }}>
          {({ navigation }) => (
            <MapsScreen onPressProfile={() => navigation.navigate('Profile')} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{
            tabBarButtonTestID: 'tab-Profile',
            tabBarIcon: ProfileTabIcon,
          }}>
          {({ navigation }) => (
            <ProfileScreen
              onPressProfile={() => navigation.navigate('Profile')}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  tabBar: {
    minHeight: 68,
    paddingTop: 8,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: '#DCE3DA',
    backgroundColor: '#F4F6F0',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600' as const,
  },
};
