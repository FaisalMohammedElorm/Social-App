import { Dimensions } from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const hp = (percentage: number) => {
  const height = Dimensions.get('window').height;
  return (percentage * height) / 100;
}

export const wp = (percentage: number) => {
  const width = Dimensions.get('window').width;
  return (percentage * width) / 100;
}

export { deviceHeight, deviceWidth };
