/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-safe-area-context', () => {
  const ReactModule = jest.requireActual('react');
  const { View } = jest.requireActual('react-native');
  const insets = { top: 0, right: 0, bottom: 0, left: 0 };
  const frame = { x: 0, y: 0, width: 400, height: 800 };
  const renderChildren = ({ children }: { children: React.ReactNode }) =>
    ReactModule.createElement(View, null, children);

  return {
    SafeAreaProvider: renderChildren,
    SafeAreaView: renderChildren,
    SafeAreaInsetsContext: ReactModule.createContext(insets),
    SafeAreaFrameContext: ReactModule.createContext(frame),
    useSafeAreaInsets: () => insets,
    useSafeAreaFrame: () => frame,
  };
});

test('renders all four bottom tabs', async () => {
  let renderer!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
    await Promise.resolve();
  });

  expect(renderer.root.findByProps({ testID: 'tab-Explore' })).toBeDefined();
  expect(renderer.root.findByProps({ testID: 'tab-Community' })).toBeDefined();
  expect(renderer.root.findByProps({ testID: 'tab-Maps' })).toBeDefined();
  expect(renderer.root.findByProps({ testID: 'tab-Profile' })).toBeDefined();

  await ReactTestRenderer.act(() => renderer.unmount());
});

test('opens the page selected from the bottom tabs', async () => {
  let renderer!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
    await Promise.resolve();
  });

  const communityTab = renderer.root.findByProps({ testID: 'tab-Community' });
  await ReactTestRenderer.act(() => {
    communityTab.props.onPress();
  });

  expect(renderer.root.findByProps({ accessibilityRole: 'header' }).props.children).toBe(
    'Community',
  );

  await ReactTestRenderer.act(() => renderer.unmount());
});
