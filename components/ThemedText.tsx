import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '../hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const getTypeStyles = () => {
    switch (type) {
      case 'default':
        return 'text-base leading-6';
      case 'title':
        return 'text-3xl font-bold leading-8';
      case 'defaultSemiBold':
        return 'text-base leading-6 font-semibold';
      case 'subtitle':
        return 'text-xl font-bold';
      case 'link':
        return 'leading-8 text-base text-blue-600';
      default:
        return 'text-base leading-6';
    }
  };

  return (
    <Text
      style={[{ color }, style]}
      className={`${getTypeStyles()} ${className || ''}`}
      {...rest}
    />
  );
}
