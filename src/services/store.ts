import { Edges } from '@pages/Trending';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@teste', jsonValue);
  } catch (err) {
    console.error(err);
  }
};
