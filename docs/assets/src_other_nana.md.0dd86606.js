import{_ as s,o as a,c as n,O as l}from"./chunks/framework.12bd0347.js";const p="/imags/other/kebiao.jpg",b=JSON.parse('{"title":"娜娜","description":"","frontmatter":{},"headers":[],"relativePath":"src/other/nana.md","filePath":"src/other/nana.md","lastUpdated":1693386752000}'),o={name:"src/other/nana.md"},e=l('<h1 id="娜娜" tabindex="-1">娜娜 <a class="header-anchor" href="#娜娜" aria-label="Permalink to &quot;娜娜&quot;">​</a></h1><h2 id="基本信息" tabindex="-1">基本信息 <a class="header-anchor" href="#基本信息" aria-label="Permalink to &quot;基本信息&quot;">​</a></h2><ul><li>生日 2003年02月21日</li></ul><h2 id="喜好" tabindex="-1">喜好 <a class="header-anchor" href="#喜好" aria-label="Permalink to &quot;喜好&quot;">​</a></h2><ul><li>不喜欢吃鱼</li><li>不喜欢吃会生寄生虫的食物</li><li>不喜欢海鲜里面带沙子的食物</li><li>喜欢酸的食物</li><li>喜欢吃葡萄</li></ul><h2 id="课表" tabindex="-1">课表 <a class="header-anchor" href="#课表" aria-label="Permalink to &quot;课表&quot;">​</a></h2><img src="'+p+`" alt="图片替换文本" width="700"><h2 id="学校" tabindex="-1">学校 <a class="header-anchor" href="#学校" aria-label="Permalink to &quot;学校&quot;">​</a></h2><ul><li>周1,周3,周4查寝</li></ul><h2 id="爱心代码" tabindex="-1">爱心代码 <a class="header-anchor" href="#爱心代码" aria-label="Permalink to &quot;爱心代码&quot;">​</a></h2><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打印爱心图案</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print_love</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    myData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">na wa zi I LOVE YOU</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> char </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> myData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        allChar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            lst </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">            lst_con </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">                formula </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.05</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.05</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> formula </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    lst_con </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> char</span><span style="color:#89DDFF;">[(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">char</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    lst_con </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            lst</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">lst_con</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            allChar </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> lst</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">allChar</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">        time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print_love</span><span style="color:#89DDFF;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,11),r=[e];function t(c,D,F,y,C,A){return a(),n("div",null,r)}const u=s(o,[["render",t]]);export{b as __pageData,u as default};