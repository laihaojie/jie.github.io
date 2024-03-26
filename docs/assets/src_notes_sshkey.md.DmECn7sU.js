import{_ as s,f as i,e as a,a7 as e}from"./chunks/framework.D_M7IPCw.js";const b=JSON.parse('{"title":"生成ssh key","description":"","frontmatter":{},"headers":[],"relativePath":"src/notes/sshkey.md","filePath":"src/notes/sshkey.md","lastUpdated":1711437483000}'),t={name:"src/notes/sshkey.md"},n=e(`<h1 id="生成ssh-key" tabindex="-1">生成ssh key <a class="header-anchor" href="#生成ssh-key" aria-label="Permalink to &quot;生成ssh key&quot;">​</a></h1><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxxx@xx.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 按照提示输入回车</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入密码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>id_rsa.pub</code>是公钥<br><code>id_rsa</code> 是私钥</p><h2 id="在github中添加公钥" tabindex="-1">在github中添加公钥 <a class="header-anchor" href="#在github中添加公钥" aria-label="Permalink to &quot;在github中添加公钥&quot;">​</a></h2><ul><li>查看公钥</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>然后添加到github的ssh key中</li></ul><h2 id="测试公钥是否有用" tabindex="-1">测试公钥是否有用 <a class="header-anchor" href="#测试公钥是否有用" aria-label="Permalink to &quot;测试公钥是否有用&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -T</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">输入密码验证</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>若返回 Hi XXX! You’ve successfully authenticated, but Gitee.com does not provide shell access. 内容，则证明添加成功。</p>`,10),h=[n];function l(p,r,d,k,c,o){return a(),i("div",null,h)}const g=s(t,[["render",l]]);export{b as __pageData,g as default};
