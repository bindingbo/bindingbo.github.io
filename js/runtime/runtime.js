var now=new Date;function createtime(){var e=new Date("07/21/2023 00:00:00");now.setTime(now.getTime()+250);var t=(now-e)/1e3/60/60/24,n=Math.floor(t),a=(now-e)/1e3/60/60-24*n,r=Math.floor(a);1==String(r).length&&(r="0"+r);var o=(now-e)/1e3/60-1440*n-60*r,i=Math.floor(o);1==String(i).length&&(i="0"+i);var l=(now-e)/1e3-86400*n-3600*r-60*i,s=Math.round(l);1==String(s).length&&(s="0"+s);let w="";w=`<span class="textTip"> <br> 本站居然运行了 ${n} 天</span><span id="runtime"> ${r} 小时 ${i} 分 ${s} 秒 </span> <i class="fas fa-heartbeat" style="color:red"></i>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=w)}setInterval((()=>{createtime()}),250);