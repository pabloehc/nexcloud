"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[4221],{84221:function(e,t,l){l.r(t),l.d(t,{confirm:function(){return y},filepicker:function(){return c}});var a=l(62520),i=l(41861),o=(l(52442),l(20144)),n=l(30050),s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJtZGktZm9sZGVyLW11bHRpcGxlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0yMiw0SDE0TDEyLDJINkEyLDIgMCAwLDAgNCw0VjE2QTIsMiAwIDAsMCA2LDE4SDIyQTIsMiAwIDAsMCAyNCwxNlY2QTIsMiAwIDAsMCAyMiw0TTIsNkgwVjExSDBWMjBBMiwyIDAgMCwwIDIsMjJIMjBWMjBIMlY2WiIgLz48L3N2Zz4=",u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJtZGktZm9sZGVyLW1vdmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDE4VjE1SDEwVjExSDE0VjhMMTksMTNNMjAsNkgxMkwxMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjhDMjIsNi44OSAyMS4xLDYgMjAsNloiIC8+PC9zdmc+";const r=(e,t,l=(()=>{}))=>{const a=document.createElement("div");(document.querySelector(null==t?void 0:t.container)||document.body).appendChild(a);const i=new o.default({el:a,name:"VueDialogHelper",render:a=>a(e,{props:t,on:{close:()=>{l(),i.$destroy()}}})})};async function c(e,t,l=!1,o,n,c,y,m){const d=(e,t)=>{const a=e=>{const t=(null==e?void 0:e.root)||"";let l=(null==e?void 0:e.path)||"";return l.startsWith(t)&&(l=l.slice(t.length)||"/"),l};return l?l=>e(l.map(a),t):l=>e(a(l[0]),t)};let M;c===i.a.Custom?(M=[],(m.buttons||[]).forEach((e=>{M.push({callback:d(t,e.type),label:e.text,type:e.defaultButton?"primary":"secondary"})}))):M=(e,o)=>{var n,r,y;const m=[],M=(null==(r=null==(n=null==e?void 0:e[0])?void 0:n.attributes)?void 0:r.displayName)||(null==(y=null==e?void 0:e[0])?void 0:y.basename),p=M||(0,a.basename)(o);return c===i.a.Choose&&m.push({callback:d(t,i.a.Choose),label:M&&!l?(0,i.t)("Choose {file}",{file:M}):(0,i.t)("Choose"),type:"primary"}),(c===i.a.CopyMove||c===i.a.Copy)&&m.push({callback:d(t,i.a.Copy),label:p?(0,i.t)("Copy to {target}",{target:p}):(0,i.t)("Copy"),type:"primary",icon:s}),(c===i.a.Move||c===i.a.CopyMove)&&m.push({callback:d(t,i.a.Move),label:p?(0,i.t)("Move to {target}",{target:p}):(0,i.t)("Move"),type:c===i.a.Move?"primary":"secondary",icon:u}),m};const p={};"function"==typeof(null==m?void 0:m.filter)&&(p.filterFn=e=>m.filter((e=>{var t,l,a,i,o,n;return{id:e.fileid||null,path:e.path,mimetype:e.mime||null,mtime:(null==(t=e.mtime)?void 0:t.getTime())||null,permissions:e.permissions,name:(null==(l=e.attributes)?void 0:l.displayname)||e.basename,etag:(null==(a=e.attributes)?void 0:a.etag)||null,hasPreview:(null==(i=e.attributes)?void 0:i.hasPreview)||null,mountType:(null==(o=e.attributes)?void 0:o.mountType)||null,quotaAvailableBytes:(null==(n=e.attributes)?void 0:n.quotaAvailableBytes)||null,icon:null,sharePermissions:null}})(e)));const v="string"==typeof o?[o]:o||[];r(i.c,{...p,name:e,buttons:M,multiselect:l,path:y,mimetypeFilter:v,allowPickDirectory:!0===(null==m?void 0:m.allowDirectoryChooser)||v.includes("httpd/unix-directory")})}async function y(e,t,l,a){r(n.D,{name:t,message:e,buttons:[{label:"No",callback:()=>l(!1)},{label:"Yes",type:"primary",callback:()=>l(!0)}],size:"small"},(()=>l(!1)))}}}]);
//# sourceMappingURL=4221-4221.js.map?v=8176a71aa66260e1e1b2