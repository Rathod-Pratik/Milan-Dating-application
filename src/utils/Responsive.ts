import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size :number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// Use this for Width, Margin Left/Right, Padding Left/Right, Font Size
const widthPixel = (size:number) => {
  return normalize(size, 'width');
};

// Use this for Height, Margin Top/Bottom, Padding Top/Bottom
const heightPixel = (size:number) => {
  return normalize(size, 'height');
};

// Use this for Font Size (scales slightly less aggressively)
const fontPixel = (size:number) => {
  return heightPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  SCREEN_WIDTH,
  SCREEN_HEIGHT
};