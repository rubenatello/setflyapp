// app/(tabs)/_layout.tsx
import TabBarBackground from '@/components/ui/TabBarBackground';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="create"
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.text,
        headerShown: false,
        // REMOVE HapticTab!
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
  ios: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    borderRadius: 15,
    backgroundColor: '#191919',
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 65,
    borderWidth: 0,
    borderColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
  default: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    borderRadius: 15,
    backgroundColor: '#191919',
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 65,
    borderWidth: 0,
    borderColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
}),

        tabBarLabelStyle: {
          fontSize: 12,
          paddingTop: 4,
        },
      }}>
      
      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="setlists"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-circle-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perform"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="play-circle-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
