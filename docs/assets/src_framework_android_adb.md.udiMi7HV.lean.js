import{_ as a,c as i,a2 as n,o as l}from"./chunks/framework.BdvVDhzQ.js";const c=JSON.parse('{"title":"ADB","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/android/adb.md","filePath":"src/framework/android/adb.md","lastUpdated":1725954378000}'),p={name:"src/framework/android/adb.md"};function e(h,s,k,t,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="adb" tabindex="-1">ADB <a class="header-anchor" href="#adb" aria-label="Permalink to &quot;ADB&quot;">​</a></h1><p><a href="https://blog.csdn.net/Next_Second/article/details/73648754" target="_blank" rel="noreferrer">命令文章</a></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出所有设备</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> devices</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装APK</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.apk</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 覆盖安装(保留缓存和数据)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.apk</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载APK</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载时保留数据和缓存目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看设备所有应用包名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出指定包名对应的apk路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your.package.name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出指定包名对应的apk路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your.package.name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清空指定包名对应的应用的数据和缓存文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clear</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your.package.name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出进程列表及其pid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 杀死指定pid的进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看指定进程信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正常重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将电脑文件复制到设备sd卡上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 电脑文件路径</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sdcard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设备文件复制到电脑上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sdcard/text.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 电脑文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sdcard/text.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -f 强制删除文件不需要确认</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -r 递归删除文件夹内文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -i 删除文件前需要确认</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="连接手机" tabindex="-1">连接手机 <a class="header-anchor" href="#连接手机" aria-label="Permalink to &quot;连接手机&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手机连接USB数据线 打开USB调试 在同一局域网下可以使用无线连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cmd环境执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置adb服务的端口号为 5555 会自动重启设备端的adb服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcpip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5555</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 连接手机 手机ip地址:5555   （手机的IP地址可以在设置里面看到）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.1.136:5555</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,6)]))}const b=a(p,[["render",e]]);export{c as __pageData,b as default};
