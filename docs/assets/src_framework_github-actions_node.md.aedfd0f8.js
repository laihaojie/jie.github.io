import{_ as s,o as n,c as a,O as e}from"./chunks/framework.12bd0347.js";const y=JSON.parse('{"title":"部署node服务","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/github-actions/node.md","filePath":"src/framework/github-actions/node.md","lastUpdated":1696899580000}'),p={name:"src/framework/github-actions/node.md"},l=e(`<h1 id="部署node服务" tabindex="-1">部署node服务 <a class="header-anchor" href="#部署node服务" aria-label="Permalink to &quot;部署node服务&quot;">​</a></h1><h2 id="部署node服务到阿里云esc" tabindex="-1">部署node服务到阿里云ESC <a class="header-anchor" href="#部署node服务到阿里云esc" aria-label="Permalink to &quot;部署node服务到阿里云ESC&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">name: Deploy</span></span>
<span class="line"><span style="color:#babed8;">on: push</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  build:</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#babed8;">      - name: Deploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        # 复制代码到服务器</span></span>
<span class="line"><span style="color:#babed8;">        uses: cross-the-world/scp-pipeline@master</span></span>
<span class="line"><span style="color:#babed8;">        env:</span></span>
<span class="line"><span style="color:#babed8;">          WELCOME: &quot;ssh scp ssh pipelines&quot;</span></span>
<span class="line"><span style="color:#babed8;">          LASTSSH: &quot;Doing something after copying&quot;</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          host: \${{ secrets.TG_HOST }}</span></span>
<span class="line"><span style="color:#babed8;">          user: \${{ secrets.TG_USER }}</span></span>
<span class="line"><span style="color:#babed8;">          pass: \${{ secrets.TG_PASS }}</span></span>
<span class="line"><span style="color:#babed8;">          connect_timeout: 10s</span></span>
<span class="line"><span style="color:#babed8;">          local: &quot;./*&quot;</span></span>
<span class="line"><span style="color:#babed8;">          remote: /app/nodejs/admin</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 登录到远程服务器并安装依赖</span></span>
<span class="line"><span style="color:#babed8;">      - name: Deploy2</span></span>
<span class="line"><span style="color:#babed8;">        uses: appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          host: \${{ secrets.TG_HOST }}</span></span>
<span class="line"><span style="color:#babed8;">          username: \${{ secrets.TG_USER }}</span></span>
<span class="line"><span style="color:#babed8;">          password: \${{ secrets.TG_PASS }}</span></span>
<span class="line"><span style="color:#babed8;">          script: |</span></span>
<span class="line"><span style="color:#babed8;">            cd /app/nodejs/admin</span></span>
<span class="line"><span style="color:#babed8;">            pnpm install &amp;&amp; pnpm build</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  send:</span></span>
<span class="line"><span style="color:#babed8;">    needs: build</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - name: Send success message</span></span>
<span class="line"><span style="color:#babed8;">        if: success()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#babed8;">        if: failure()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="部署node服务到亚马逊ec2" tabindex="-1">部署node服务到亚马逊EC2 <a class="header-anchor" href="#部署node服务到亚马逊ec2" aria-label="Permalink to &quot;部署node服务到亚马逊EC2&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">name: Deploy</span></span>
<span class="line"><span style="color:#babed8;">on:</span></span>
<span class="line"><span style="color:#babed8;">  push:</span></span>
<span class="line"><span style="color:#babed8;">    branches:</span></span>
<span class="line"><span style="color:#babed8;">      - main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">env:</span></span>
<span class="line"><span style="color:#babed8;">  failed_url: https://api-lmapp.lingman.tech/api/Public/ppublishfail</span></span>
<span class="line"><span style="color:#babed8;">  success_url: https://api-lmapp.lingman.tech/api/Public/ppublish</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  Copy:</span></span>
<span class="line"><span style="color:#babed8;">    name: Copy</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    environment: production</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - name: Checkout</span></span>
<span class="line"><span style="color:#babed8;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Copy to my EC2 instance</span></span>
<span class="line"><span style="color:#babed8;">        uses: easingthemes/ssh-deploy@v2.1.5</span></span>
<span class="line"><span style="color:#babed8;">        env:</span></span>
<span class="line"><span style="color:#babed8;">          SSH_PRIVATE_KEY: \${{ secrets.EC2_SSH_KEY }}</span></span>
<span class="line"><span style="color:#babed8;">          SOURCE: ./</span></span>
<span class="line"><span style="color:#babed8;">          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}</span></span>
<span class="line"><span style="color:#babed8;">          REMOTE_USER: \${{ secrets.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#babed8;">          TARGET: \${{ secrets.TARGET }}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  Deploy:</span></span>
<span class="line"><span style="color:#babed8;">    needs: Copy</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#babed8;">      - name: Deploy in EC2</span></span>
<span class="line"><span style="color:#babed8;">        env:</span></span>
<span class="line"><span style="color:#babed8;">          SSH_PRIVATE_KEY: \${{ secrets.EC2_SSH_KEY  }}</span></span>
<span class="line"><span style="color:#babed8;">          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}</span></span>
<span class="line"><span style="color:#babed8;">          REMOTE_USER: \${{ secrets.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        run: |</span></span>
<span class="line"><span style="color:#babed8;">          echo &quot;$SSH_PRIVATE_KEY&quot; &gt; private_key &amp;&amp; chmod 600 private_key</span></span>
<span class="line"><span style="color:#babed8;">          ssh -o StrictHostKeyChecking=no -i private_key \${REMOTE_USER}@\${REMOTE_HOST} &#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">            #Now we have got the access of EC2 and we will start the deploy .</span></span>
<span class="line"><span style="color:#babed8;">            cd \${{ secrets.TARGET }} &amp;&amp;</span></span>
<span class="line"><span style="color:#babed8;">            pnpm i &amp;&amp;</span></span>
<span class="line"><span style="color:#babed8;">            pnpm build &amp;&amp;</span></span>
<span class="line"><span style="color:#babed8;">            pm2 restart api-ball</span></span>
<span class="line"><span style="color:#babed8;">          &#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send success message</span></span>
<span class="line"><span style="color:#babed8;">        if: success()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#babed8;">        if: failure()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>`,5),b=[l];function c(r,o,i,t,d,u){return n(),a("div",null,b)}const h=s(p,[["render",c]]);export{y as __pageData,h as default};