import{aK as d,ba as i,t as m,aM as l}from"./app-Bo8qm1DI.js";import"./vendor-DdwtnZzh.js";const p=l('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"></svg>');function g(a,s){const o=d(p);o.innerHTML=i,a.append(o);const e=document.createElement("span");e.classList.add("vds-google-cast-info"),a.append(e);const n=document.createElement("span");n.classList.add("vds-google-cast-device-name"),m(()=>{const{remotePlaybackInfo:c}=s,t=c();return t!=null&&t.deviceName&&(n.textContent=t.deviceName,e.append("Google Cast on ",n)),()=>{e.textContent=""}})}export{g as insertContent};
