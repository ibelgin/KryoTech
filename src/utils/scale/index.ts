import {Constants} from 'configs';
const widthDesign = 375;
const heightDesign = 812;
const scale = (size: number, accordingHeight?: boolean) => {
  if (accordingHeight) {
    return (size * Constants.height) / heightDesign;
  }
  return (size * Constants.width) / widthDesign;
};

export default scale;
