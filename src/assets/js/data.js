
const categories = [
  { name: 'All', title: '所有项目', subTitle: 'all' },
  { name: 'Vuejs', title: 'Vuejs项目', subTitle: 'vuejs' },
  { name: 'Angularjs', title: 'Angularjs项目', subTitle: 'Angularjs' },
  { name: 'Reactjs', title: 'Reactjs项目', subTitle: 'Reactjs' },
  { name: 'Leaflet', title: 'Leaflet项目', subTitle: 'leaflet' },
  { name: 'Nodejs', title: 'Nodejs项目', subTitle: 'Nodejs' },
  { name: 'Python', title: 'Python项目', subTitle: 'Python' },
  { name: 'Web3D', title: 'Web3D项目', subTitle: 'Web3D' },
  { name: 'Visualization', title: '数据可视化项目', subTitle: 'visualization' },
  { name: 'Other', title: '其他项目', subTitle: 'other' }
];

const projects = [
  {
    category: 'Leaflet',
    name: '海上气象信息可视化',
    description: '基于 leaflet + canvas 实现的海上气象信息可视化',
    demoUrl: 'https://linghuam.github.io/ocean-weather/dist/',
    githubUrl: 'https://github.com/linghuam/ocean-weather',
    details: 'https://github.com/linghuam/ocean-weather' // string or object
  },
  {
    category: 'Leaflet',
    name: '船舶轨迹回放',
    description: '基于 leaflet + canvas 构建的高性能船舶轨迹回放插件',
    demoUrl: 'https://linghuam.github.io/TrackPlayback/',
    githubUrl: 'https://github.com/linghuam/TrackPlayback',
    details: 'https://github.com/linghuam/TrackPlayback' // string or object
  },
  {
    category: 'Visualization',
    name: 'echarts 知识图谱',
    description: '基于 echarts 的图表 demo，有词云图、折线图、柱状图、关系图、雷达图等',
    demoUrl: 'https://linghuam.github.io/echarts_demo/',
    githubUrl: 'https://github.com/linghuam/echarts_demo',
    details: 'https://github.com/linghuam/echarts_demo' // string or object
  },
  {
    category: 'Web3D',
    name: 'webgl、threejs学习demo',
    description: 'webgl、threejs学习demo',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/webgl-threejs-study',
    details: 'https://github.com/linghuam/webgl-threejs-study' // string or object
  },
  {
    category: 'Nodejs',
    name: '在线聊天系统',
    description: '基于 socket.io 实现的在线聊天系统',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/socket.io-chat',
    details: 'https://github.com/linghuadm/socket.io-chat' // string or object
  },
  {
    category: 'Angularjs',
    name: '移动端管线巡检系统',
    description: `基于 Angularjs2 + ionic3 实现的移动端管线巡检系统，
    包括地图展示、实时定位、区域上传、图层管理、任务管理、隐患点拍照上传等功能`,
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/ionicTest4',
    details: 'https://github.com/linghuam/ionicTest4' // string or object
  },
  {
    category: 'Vuejs',
    name: '船舶信息展示系统',
    description: `基于 Vuejs + ElementUI + ES6 + Leaflet + Webpack 实现的船舶信息系统，
    包括地图展示、船舶动态位置展示、船舶信息查询、过滤显示、历史轨迹查询与回放、排放量统计等功能`,
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/vue-sky',
    details: 'https://github.com/linghuam/vue-sky' // string or object
  },
  {
    category: 'Web3D',
    name: '计算机图形学学习demo',
    description: '一些图形学学习算法的 js 实现',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/CG-Study',
    details: 'https://github.com/linghuam/CG-Study' // string or object
  },
  {
    category: 'Reactjs',
    name: 'React学习笔记',
    description: 'React学习笔记',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/react-study',
    details: 'https://github.com/linghuam/react-study' // string or object
  },
  {
    category: 'Python',
    name: 'Python学习Demo',
    description: `一些用 python 脚本实现的功能，用 python 连接 mysql 数据库处理数据；
    用 arcpy 完成空间分析；`,
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/python-study',
    details: 'https://github.com/linghuam/python-study' // string or object
  },
  {
    category: 'Other',
    name: 'Webpack学习笔记',
    description: '学习 webpack 官方文档的一些例子和笔记',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/webpack-demos',
    details: 'https://github.com/linghuam/webpack-demos' // string or object
  },
  {
    category: 'Visualization',
    name: 'canvas、svg 学习笔记',
    description: '学习原生 canvas、svg 的一些例子和笔记',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/canvas-svg',
    details: 'https://github.com/linghuam/canvas-svg' // string or object
  },
  {
    category: 'Nodejs',
    name: 'Nodejs爬虫程序',
    description: `基于 nodejs 和 bagpipe 实现的批量爬取图片程序，
    支持上十万张图片的爬取。 该库实现了一个网络地图切片数据的爬取，一共爬取了12个级别数据。`,
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/getTileImg',
    details: 'https://github.com/linghuam/getTileImg' // string or object
  },
  {
    category: 'Web3D',
    name: 'threejs模仿微信跳一跳程序',
    description: '用 threejs 模仿的一个简易的微信跳一跳程序',
    demoUrl: 'https://linghuam.github.io/threejs-jump/index.html',
    githubUrl: 'https://github.com/linghuam/threejs-jump',
    details: 'https://github.com/linghuam/threejs-jump' // string or object
  }
];

export { categories as Categories, projects as Projets };
