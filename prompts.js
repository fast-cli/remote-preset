module.exports = [{
    name: 'templateName',
    message: 'Choose a project template',
    type: 'list',
    choices: [{
        name: 'pc-admin',
        value: 'pc-admin',
      },
      {
        name: 'uniapp',
        value: 'uniapp',
      },
    ],
  },
  {
    // 项目部署在子路径上,需要指定一个路径
    name: 'publicPath',
    when: answers => answers.templateName.includes('pc-admin'),
    message: 'The base URL your application bundle will be deployed at',
    type: 'input'
  },
  {
    // 项目的中文名称
    name: 'name',
    when: answers => answers.templateName.includes('pc-admin'),
    message: 'The Chinese name of the project',
    type: 'input'
  }
];