## 1.require
### 1.1模块类型
Node.js的模块有好几种类型，前面我们使用的其实都是文件模块，总结下来，主要有这两种类型：
- 内置模块：就是Node.js原生提供的功能，比如fs，http等等，这些模块在Node.js进程起来时就加载了。
- 文件模块：我们前面写的几个模块，还有第三方模块，即node_modules下面的模块都是文件模块。
### 1.2加载顺序
- 1.优先加载内置模块，即使有同名文件，也会优先使用内置模块。
- 2.不是内置模块，先去缓存找。
- 3.缓存没有就去找对应路径的文件。
- 4.不存在对应的文件，就将这个路径作为文件夹加载。
- 5.对应的文件和文件夹都找不到就去node_modules下面找。
- 6.还找不到就报错了。
### 1.3加载文件夹
- 1.先看看这个文件夹下面有没有package.json，如果有就找里面的main字段，main字段有值就加载对应的文件。所以如果大家在看一些第三方库源码时找不到入口就看看他package.json里面的main字段吧，比如jquery的main字段就是这样："main": "dist/jquery.js"。
- 2.如果没有package.json或者package.json里面没有main就找index文件。
- 3.如果这两步都找不到就报错了。
### 1.4支持文件类型
.js .json .node

### 1.5手写require
```
function Module(id=''){
  this.id=id;
  this.path=path.file.dirname(id);
  this.exports={};
  this.filename=null;
  this.loaded=false;
}


Module.prototype.require=function(id){
  return Module._load(id)
}


Module._cache=Object.create(null)
Module._load=function(request){
  const filename=Module._resolveFilename(request);
  const cacheModule=Module._cache[filename]
  if(cacheModule!=undefined){
    return cacheModule.exports
  }
  const module=new Module(filename)
  Module._cache[filename]=module
  module.load(filename)
  reutrn module.exports
}

Module._resolveFilename=function(request){
  const filename=path.resolve(request)
  const extname=path.extname(request)
  if(!extname){
    const exts=Object.keys(Module._extensions)
    for(let i=0;i<exts.length;i++>){
      const currentPath=`${filename}${exts[i]}`
      if(fs.existSyns(currentPath)){
        return currentPath
      }
    }
  }
 return filename
}


Module.prototype.load=function(filename){
  const extname=path.extname(filename)
  Module._extensions[extname](this,filename)
  this.loaded=true
}


Module._extensions['.js']=function(module,filename){
  const content=fs.readFileSync(filename,'utf8')
  module._compile(content,filename)
}

Module.prototype._compile=function(content,filename){
  const wrapper= '(function (exports, require, module, __filename, __dirname) { '+content+'\n});'
  const compileWrapper=vm.runInThisContext(wrapper,{filename,lineoffset:0,displayErrors:true})
  const dirname=path.dirname(filename)
  compiledWrapper.call(this.exports,this.exports,this.require,this,filename,dirname)
}


Module._extensions['.json']=function(module,filename){
  const content=fs.readFileSync(filename,'utf8')
  module.exports=JSON.parse(content)
}
```