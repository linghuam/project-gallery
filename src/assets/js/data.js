
const categories = [
  {name:'All', title:'所有项目', subTitle:'all'},
  {name:'Vuejs', title:'Vuejs项目', subTitle:'vuejs'},
  {name:'Reactjs', title:'Reactjs项目', subTitle:'Reactjs'},
  {name:'Angularjs', title:'Angularjs项目', subTitle:'Angularjs'},
  {name:'Leaflet', title:'Leaflet项目', subTitle:'leaflet'},
  {name:'Nodejs', title:'Nodejs项目', subTitle:'Nodejs'},
  {name:'Python', title:'Python项目', subTitle:'Python'},
  {name:'Web3D', title:'Web3D项目', subTitle:'Web3D'},
  {name:'Visualization', title:'数据可视化项目', subTitle:'visualization'},
  {name:'Other', title:'其他项目', subTitle:'other'}
];

const projects = [
  {
    category: 'Leaflet',
    name: '海上气象信息可视化',
    description: '基于leaflet的海上气象信息可视化',
    demoUrl: 'https://linghuam.github.io/ocean-weather/dist/',
    githubUrl: 'https://github.com/linghuam/ocean-weather',
    details: {} // string or object
  },
  {
    category: 'Leaflet',
    name: '船舶轨迹回放',
    description: '基于leaflet、canvas构建的船舶轨迹回放插件',
    demoUrl: 'https://linghuam.github.io/TrackPlayback/',
    githubUrl: 'https://github.com/linghuam/TrackPlayback',
    details: {} // string or object
  },
  {
    category: 'Visualization',
    name: '基于echarts做的知识图谱',
    description: 'echarts图表demo，有云图、折线图、柱状图、关系图、雷达图等',
    demoUrl: 'https://linghuam.github.io/echarts_demo/',
    githubUrl: 'https://github.com/linghuam/echarts_demo',
    details: {} // string or object
  },
  {
    category: 'Web3D',
    name: 'webgl、threejs学习demo',
    description: 'webgl、threejs学习demo',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/webgl-threejs-study',
    details: {} // string or object
  },
  {
    category: 'Nodejs',
    name: '在线聊天系统',
    description: '基于 socket.io 实现的在线聊天系统',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/socket.io-chat',
    details: {} // string or object
  },
  {
    category: 'Angularjs',
    name: '管线巡检系统',
    description: '基于 ionic3 实现的管线巡检系统',
    demoUrl: '',
    githubUrl: 'https://github.com/linghuam/ionicTest4',
    details: {} // string or object
  }
];

export { categories as Categories, projects as Projets };
