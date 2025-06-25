// constants/GlobalStyles.ts
import Colors from './Colors';

const GlobalStyles = {
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  text: {
    color: Colors.text,
    fontSize: 16,
  },
  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  accentText: {
    color: Colors.accent,
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default GlobalStyles;
