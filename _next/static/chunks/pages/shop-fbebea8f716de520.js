(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{3276:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return i(8688)}])},8688:function(e,t,i){"use strict";i.r(t);var o=i(5893),l=i(1163),n=i(7294);let r=[{title:"diditupe industries v1",img:"https://i.imgur.com/EFmaCQS.jpeg",category:"clothing",price:20},{title:"diditupe industries v2",img:"https://i.imgur.com/VkQaTLX.jpeg",category:"clothing",price:20},{title:"whale",img:"https://i.imgur.com/svK7uuM.jpeg",category:"crochet",price:15},{title:"hanging spiderman",img:"https://i.imgur.com/7M2p0KJ.jpeg",category:"crochet",price:20}],s={clothing:"All t-shirts are screenprinted by hand - please note I'm still figuring out a good t-shirt supplier, but i",crochet:"All crochet items are made by me! I"},c=e=>{let{title:t,img:i,price:l,setHighlight:n}=e;return(0,o.jsxs)("div",{className:"clickable",style:{position:"relative",width:"100%",color:"#000",borderRadius:"0px",overflow:"hidden"},onClick:()=>n(t),children:[(0,o.jsx)("div",{style:{height:"0",width:"100%",paddingBottom:"100%",position:"relative"},children:(0,o.jsx)("img",{style:{height:"100%",width:"100%",position:"absolute",objectFit:"cover",borderRadius:"0px",filter:"grayscale(1)"},src:i})}),(0,o.jsxs)("div",{style:{color:"#fff",padding:"10px",background:"none",marginTop:"5px",borderRadius:"0px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)("p",{style:{fontSize:"16px",fontWeight:"bold",textShadow:"#a7a7a7 0px 0px 6px"},children:t}),(0,o.jsx)("p",{style:{fontSize:"14px",marginTop:"4px",fontWeight:"bold",color:"#9f9f9f"},children:"$"+l})]})]},t)},a=e=>{var t;let{setHighlight:i}=e,n=(0,l.useRouter)(),s=(null===(t=n.query)||void 0===t?void 0:t.category)||"all";return(0,o.jsx)("div",{style:{flex:"1",marginTop:"30px"},children:(0,o.jsx)("div",{style:{margin:"0 auto",height:"100%",boxSizing:"border-box",display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",flex:"1"},children:r.map(e=>"all"===s||s===e.category?(0,o.jsx)(c,{title:e.title,img:e.img,price:e.price,setHighlight:i},"Product"+e.title):null)})})},d=e=>{let t,{highlight:i,exit:l}=e;if(null!==i){for(let e of r)e.title===i&&(t=e);return(0,o.jsx)("div",{id:"clickout",style:{zIndex:"10",borderRadius:"10px",overflow:"hidden",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#000000e8",boxSizing:"border-box"},children:(0,o.jsxs)("div",{style:{background:"#0a0a0ae6",boxSizing:"border-box",width:"600px",position:"relative"},children:[(0,o.jsxs)("div",{style:{height:"60vh",backgroundImage:"url("+(null==t?void 0:t.img)+")",backgroundSize:"cover",backgroundPosition:"center"},children:[(0,o.jsx)("img",{src:null==t?void 0:t.img,style:{height:"100%",width:"100%",objectFit:"contain",backdropFilter:"blur(5px) brightness(.5)"}}),(0,o.jsx)("div",{onClick:l,style:{height:"30px",width:"30px",borderRadius:"30px",position:"absolute",top:"20px",right:"20px",fontSize:"12px",background:"#2d2d2db5",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsx)("span",{children:"X"})})]}),(0,o.jsxs)("div",{style:{color:"#FFF",padding:"40px",minWidth:"180px"},children:[(0,o.jsx)("h2",{style:{fontWeight:"bold",fontSize:"22px"},children:t.title}),(0,o.jsxs)("p",{style:{color:"#9f9f9f",margin:"2px 0"},children:["$".concat(t.price),(0,o.jsx)("span",{style:{fontSize:"12px"},children:" (excludes shipping)"})]}),(0,o.jsx)("p",{style:{color:"#9f9f9f"},children:t.category}),(0,o.jsx)("p",{style:{marginTop:"20px",fontSize:"14px"},children:s[t.category]+"f you're interested in buying this item, please send an email to ksucpea@gmail.com."})]})]})})}},p=e=>{let{title:t,active:i,changeCat:l}=e;return(0,o.jsx)("div",{className:"clickable",onClick:()=>l(t),style:{fontSize:"14px",fontWeight:"bold",color:i?"#000":"#fff",padding:"3px 10px",background:i?"#fff":"none"},children:t})};t.default=()=>{var e;let[t,i]=(0,n.useState)(null),r=(0,n.useRef)(null),s=e=>{"clickout"===e.target.id&&i(null)};(0,n.useEffect)(()=>{null!==t?document&&document.addEventListener("click",s):document&&document.removeEventListener("click",s)},[t]);let c=(0,l.useRouter)();console.log(c.query);let g=(null===(e=c.query)||void 0===e?void 0:e.category)||"all",h=e=>{"all"===e&&(e=""),c.push({pathname:"/shop",query:""===e?{}:{category:e}},void 0,{shallow:!0})};return(0,n.useEffect)(()=>{setTimeout(()=>{r.current.style.opacity=1},300)},[]),(0,o.jsxs)("div",{style:{minHeight:"100vh",width:"100%",backgroundColor:"#000"},children:[(0,o.jsx)("div",{className:"shop-landing",style:{display:"flex",justifyContent:"center",width:"100%",margin:"0 auto",position:"fixed",top:"0",left:"0",zIndex:"0",background:"#000"},children:(0,o.jsx)("div",{ref:r,style:{transition:".5s opacity",opacity:"0",width:"min(90vw, 1000px)",maskImage:"url(/shop/industries.png)",maskRepeat:"no-repeat",maskPosition:"center",maskSize:"contain",backgroundImage:"url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover",filter:"brightness(2.5)"}})}),(0,o.jsxs)("div",{style:{padding:"30px",width:"100%",maxWidth:"1200px",margin:"0 auto",boxSizing:"border-box",position:"relative",zIndex:"1",background:"#000",marginTop:"85vh"},children:[(0,o.jsxs)("section",{style:{display:"flex",alignItems:"center",gap:"5px",justifyContent:"center",margin:"60px 0"},children:[(0,o.jsx)(p,{title:"all",active:"all"===g,changeCat:h}),(0,o.jsx)(p,{title:"clothing",active:"clothing"===g,changeCat:h}),(0,o.jsx)(p,{title:"crochet",active:"crochet"===g,changeCat:h})]}),(0,o.jsx)("h1",{style:{fontSize:"20px",color:"#fff",fontWeight:"bold"},children:"clothing"===g?"Clothing":"crochet"===g?"Crochet":"All items"}),(0,o.jsx)("p",{style:{color:"#878787",fontSize:"14px",fontStyle:"italic"},children:"Email ksucpea@gmail.com to place an order :)"}),(0,o.jsx)(a,{setHighlight:i})]}),(0,o.jsx)(d,{highlight:t,exit:()=>i(null)})]})}},1163:function(e,t,i){e.exports=i(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3276)}),_N_E=e.O()}]);