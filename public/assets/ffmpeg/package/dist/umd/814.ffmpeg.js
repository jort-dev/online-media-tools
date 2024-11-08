!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FFmpegWASM=t():e.FFmpegWASM=t()}(self,(()=>(()=>{var e={454:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=454,e.exports=t}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}return r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e;!function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"}(e||(e={}));const t=new Error("unknown message type"),a=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),o=(new Error("called FFmpeg.terminate()"),new Error("failed to import ffmpeg-core.js"));let s;self.onmessage=async({data:{id:n,type:E,data:i}})=>{const c=[];let p;try{if(E!==e.LOAD&&!s)throw a;switch(E){case e.LOAD:p=await(async({coreURL:t="https://unpkg.com/@ffmpeg/core@0.12.1/dist/umd/ffmpeg-core.js",wasmURL:a,workerURL:n})=>{const E=!s,i=t,c=a||t.replace(/.js$/g,".wasm"),p=n||t.replace(/.js$/g,".worker.js");try{importScripts(i)}catch{if(self.createFFmpegCore=(await r(454)(i)).default,!self.createFFmpegCore)throw o}return s=await self.createFFmpegCore({mainScriptUrlOrBlob:`${i}#${btoa(JSON.stringify({wasmURL:c,workerURL:p}))}`}),s.setLogger((t=>self.postMessage({type:e.LOG,data:t}))),s.setProgress((t=>self.postMessage({type:e.PROGRESS,data:t}))),E})(i);break;case e.EXEC:p=(({args:e,timeout:t=-1})=>{s.setTimeout(t),s.exec(...e);const r=s.ret;return s.reset(),r})(i);break;case e.WRITE_FILE:p=(({path:e,data:t})=>(s.FS.writeFile(e,t),!0))(i);break;case e.READ_FILE:p=(({path:e,encoding:t})=>s.FS.readFile(e,{encoding:t}))(i);break;case e.DELETE_FILE:p=(({path:e})=>(s.FS.unlink(e),!0))(i);break;case e.RENAME:p=(({oldPath:e,newPath:t})=>(s.FS.rename(e,t),!0))(i);break;case e.CREATE_DIR:p=(({path:e})=>(s.FS.mkdir(e),!0))(i);break;case e.LIST_DIR:p=(({path:e})=>{const t=s.FS.readdir(e),r=[];for(const a of t){const t=s.FS.stat(`${e}/${a}`),o=s.FS.isDir(t.mode);r.push({name:a,isDir:o})}return r})(i);break;case e.DELETE_DIR:p=(({path:e})=>(s.FS.rmdir(e),!0))(i);break;case e.MOUNT:p=(({fsType:e,options:t,mountPoint:r})=>{let a=e,o=s.FS.filesystems[a];return!!o&&(s.FS.mount(o,t,r),!0)})(i);break;case e.UNMOUNT:p=(({mountPoint:e})=>(s.FS.unmount(e),!0))(i);break;default:throw t}}catch(t){return void self.postMessage({id:n,type:e.ERROR,data:t.toString()})}p instanceof Uint8Array&&c.push(p.buffer),self.postMessage({id:n,type:E,data:p},c)}})(),{}})()));
//# sourceMappingURL=814.ffmpeg.js.map