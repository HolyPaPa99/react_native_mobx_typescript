import {createIconSet} from 'react-native-vector-icons';

const glyphMap = require('./iconfont.json');

const Iconfont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

export default Iconfont;
