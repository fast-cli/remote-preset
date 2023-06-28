// const prompt = require('prompts');
// let public = require('./public/public')//导入公共package
module.exports = async (api, options, rootOptions) => {
  console.log('api', api);
  console.log('options', options);
  // pc端项目模板
  if (options.templateName === 'pc-admin') {
    console.log('渲染##########################################');
    api.render('./template/pc-admin')
  }

  // 移动端项目模板
  if (options.templateName === 'pc-admin') {
    api.render('./template/uniapp')
  }

  // // 修改 `package.json` 里的字段
  // let response,publicResponse
  // // 公共配置问话
  // publicResponse = await prompt(require('./prompts.js'))
  // // 移动端项目模板
  // if (options.selectTemplate == 'uniapp') {
  //   response = await prompt(require('./uniapp/prompts'));
  //   // 加载项目模板,生成src
  //   api.render('../template/uniapp')
  //   // 加载项目配置文件，生成package.json,根据配置文件加载依赖
  //   api.extendPackage(require('./uniapp/uniapp'))
  //   api.postProcessFiles((files) => {
  //       // rename only main file to main.ts
  //       delete files[api.entryFile]
  //   })
  // }
  // // pc项目模板
  // if (options.selectTemplate == 'fant-pc') {
  //   // 获取配置问话
  //   response = await prompt(require('./fant-pc/prompts'));
  //   if (response.elementUI == '是') {
  //     api.extendPackage({
  //       devDependencies: {
  //         "element-ui": "^2.13.0"
  //       }
  //     })
  //   }
  //   // 加载项目模板
  //   api.render('../template/fant-pc')
  //   // 加载项目配置文件，生成package.json,根据配置文件加载依赖
  //   api.extendPackage(require('./fant-pc/fant-pc'))
  // }

  // // end all if
  // options.response = response //template里只能拿到options,所以要把response挂载到options
  // api.extendPackage(public)//导入公共package
}