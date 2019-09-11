import r_tool from "./r_tool.vue"

const Tool={}
Tool.install=function (Vue) {
  const toolConstructor=Vue.extend(r_tool);
  const instance=new toolConstructor();
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
}

export default Tool
