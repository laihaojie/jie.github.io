import{_ as s,o as n,c as a,O as e}from"./chunks/framework.12bd0347.js";const y=JSON.parse('{"title":"部署web项目","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/github-actions/index.md","filePath":"src/framework/github-actions/index.md","lastUpdated":1696899548000}'),l={name:"src/framework/github-actions/index.md"},p=e(`<h1 id="部署web项目" tabindex="-1">部署web项目 <a class="header-anchor" href="#部署web项目" aria-label="Permalink to &quot;部署web项目&quot;">​</a></h1><h2 id="部署到阿里云oss" tabindex="-1">部署到阿里云OSS <a class="header-anchor" href="#部署到阿里云oss" aria-label="Permalink to &quot;部署到阿里云OSS&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">name: Deploy to Aliyun OSS</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">on:</span></span>
<span class="line"><span style="color:#babed8;">  push:</span></span>
<span class="line"><span style="color:#babed8;">    branches:</span></span>
<span class="line"><span style="color:#babed8;">      - main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  build:</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/setup-node@v2</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          node-version: 16.x</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 安装pnpm</span></span>
<span class="line"><span style="color:#babed8;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#babed8;">        uses: pnpm/action-setup@v2.2.2</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          version: 7.3.0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 安装依赖</span></span>
<span class="line"><span style="color:#babed8;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#babed8;">        run: pnpm install</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 打包</span></span>
<span class="line"><span style="color:#babed8;">      - name: Build</span></span>
<span class="line"><span style="color:#babed8;">        run: pnpm build</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 打包到阿里云oss</span></span>
<span class="line"><span style="color:#babed8;">      - uses: manyuanrong/setup-ossutil@v2.0</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          endpoint: oss-cn-shanghai.aliyuncs.com</span></span>
<span class="line"><span style="color:#babed8;">          access-key-id: \${{ secrets.ACCESSKEYID }}</span></span>
<span class="line"><span style="color:#babed8;">          access-key-secret: \${{ secrets.ACCESSKEYSECRET }}</span></span>
<span class="line"><span style="color:#babed8;">      - run: ossutil cp -rf ./dist/ oss://admin-laihaojie-top/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send success message</span></span>
<span class="line"><span style="color:#babed8;">        if: success()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#babed8;">        if: failure()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="部署到亚马逊s3" tabindex="-1">部署到亚马逊S3 <a class="header-anchor" href="#部署到亚马逊s3" aria-label="Permalink to &quot;部署到亚马逊S3&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">name: Deploy to Amazon S3</span></span>
<span class="line"><span style="color:#babed8;">on:</span></span>
<span class="line"><span style="color:#babed8;">  push:</span></span>
<span class="line"><span style="color:#babed8;">    branches:</span></span>
<span class="line"><span style="color:#babed8;">      - main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  build:</span></span>
<span class="line"><span style="color:#babed8;">   runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    strategy:</span></span>
<span class="line"><span style="color:#babed8;">      matrix:</span></span>
<span class="line"><span style="color:#babed8;">        node: [16.x]</span></span>
<span class="line"><span style="color:#babed8;">        name: [name]</span></span>
<span class="line"><span style="color:#babed8;">      fail-fast: false</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#babed8;">        uses: pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Set node version to \${{ matrix.node }}</span></span>
<span class="line"><span style="color:#babed8;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          node-version: \${{ matrix.node }}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Install</span></span>
<span class="line"><span style="color:#babed8;">        run: pnpm i</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Build \${{ matrix.name }}</span></span>
<span class="line"><span style="color:#babed8;">        run: pnpm build</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Configure AWS Credentials</span></span>
<span class="line"><span style="color:#babed8;">        uses: aws-actions/configure-aws-credentials@v1</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}</span></span>
<span class="line"><span style="color:#babed8;">          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}</span></span>
<span class="line"><span style="color:#babed8;">          aws-region: \${{ secrets.AWS_REGION }}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Deploy static site to S3 bucket</span></span>
<span class="line"><span style="color:#babed8;">        run: aws s3 sync ./dist/ s3://\${{ secrets.AWS_S3_BUCKET }} --delete</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send success message</span></span>
<span class="line"><span style="color:#babed8;">        if: success()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#babed8;">        if: failure()</span></span>
<span class="line"><span style="color:#babed8;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#babed8;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>`,5),b=[p];function r(c,i,o,t,u,d){return n(),a("div",null,b)}const h=s(l,[["render",r]]);export{y as __pageData,h as default};
