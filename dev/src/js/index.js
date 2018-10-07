
import '../sass/main.scss';
require.context('../', true, /\.html$/);
const js = require.context('../js/', false, /\.js$/);




js.keys().forEach(key => js(key));