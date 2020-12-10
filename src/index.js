import grapesjs from 'grapesjs';
import 'grapesjs-blocks-basic';

const editor = grapesjs.init({
  container: '#gjs',
  fromElement: 1,
  storageManager: { type: 0 },
  plugins: ['gjs-blocks-basic']
});
