import{_ as s,o as a,c as n,O as l}from"./chunks/framework.12bd0347.js";const b=JSON.parse('{"title":"打包","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/flutter/index.md","filePath":"src/framework/flutter/index.md","lastUpdated":1696899580000}'),p={name:"src/framework/flutter/index.md"},e=l(`<h1 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h1><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建项目</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">create</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--org</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.xxxx</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">-i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">swift</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">java</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">project_name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打包 apk</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打包 aab</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">appbundle</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 根据不同的 abi 架构配置不同的 apk</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apk</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--split-per-abi</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 按abi分包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># android 混淆 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 文档 https://www.jianshu.com/p/4dd5e5977f36</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apk</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--obfuscate</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--split-debug-info=/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">project-name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apk</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--obfuscate</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--split-debug-info=./symbols</span></span>
<span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">appbundle</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--obfuscate</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--split-debug-info=./symbols</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清理全局缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clean</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3),o=[e];function t(r,c,i,y,B,D){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};