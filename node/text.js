const Koa=reuire('koa')
const fs=require('fs')
const app=new Koa()
app.use(async(ctx,next)=>{
  await next()

})

app.use(async(ctx,next)=>{
  const path=ctx.request.path
  const basePath
  const file=fs.readdir(basePath+path,function(err,data){
    if(err){
      console.log('没有找到文件')
    }else{
      return data
    }
  })
  let newfile=fs.readFileSync(file,function(err,data){
    if(err){
      console.log('读文件失败')
    }else{
      return data.toString('utf8')
    }
  })
  ctx.body=newfile
})
app.listen(3000)