import { Dimensions } from 'react-native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const hp = (percentage: number) => {
  const height = Dimensions.get('window').height;
  return (percentage * height) / 100;
}
const wp = (percentage: number) => {
  const width = Dimensions.get('window').width;
  return (percentage * width) / 100;
}
export { deviceWidth, deviceHeight, hp, wp };