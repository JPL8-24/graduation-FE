export default {
 genID:function(){
     let r1=parseInt(Math.random()*10).toString()
     let r2=parseInt(Math.random()*10).toString()
     let time=new Date().getTime().toString()
     return r1+time+r2
 }
}