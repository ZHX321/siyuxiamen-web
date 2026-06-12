# 网站部署与域名绑定指南

此项目采用了“内容与代码分离”的设计方案。老板只需修改 `data/content.json` 中的文本，即可实时更新网站内容。

## 1. 部署到 Vercel (推荐)

Vercel 是目前最简单、高效的部署平台。

### 部署步骤：
1. **上传代码**：将代码上传至 GitHub 仓库。
2. **连接 Vercel**：登录 [Vercel](https://vercel.com/)，点击 "Add New" -> "Project"。
3. **导入仓库**：选择刚才上传的 GitHub 仓库，点击 "Import"。
4. **一键部署**：点击 "Deploy"。Vercel 会自动识别并生成一个预览域名。

---

## 2. 绑定老板的现有域名

如果您已经拥有域名（如 `www.siyuxiamen.cn`），请按照以下步骤绑定：

### 在 Vercel 中设置：
1. 进入 Vercel 项目面板，点击 **Settings** -> **Domains**。
2. 在输入框中输入您的域名，点击 **Add**。
3. 系统会提示您需要配置的 DNS 记录。

### 在域名注册商（如阿里云、腾讯云、GoDaddy）配置 DNS：

#### 方案 A：配置 A 记录 (适用于根域名 siyuxiamen.cn)
- **记录类型**：`A`
- **主机记录**：`@`
- **记录值**：`76.76.21.21` (Vercel 标准 IP)

#### 方案 B：配置 CNAME 记录 (适用于子域名 www.siyuxiamen.cn)
- **记录类型**：`CNAME`
- **主机记录**：`www`
- **记录值**：`cname.vercel-dns.com`

> **注意**：DNS 更改可能需要 10 分钟到 48 小时才能在全球范围内生效。

---

## 3. 如何维护内容
老板以后想改文案，只需打开 GitHub 上的 `data/content.json` 文件：
1. 点击文件右上角的“编辑”图标（铅笔）。
2. 修改对应的文字内容。
3. 点击 **Commit changes**。
4. 网站会在 1 分钟内自动完成更新，无需触碰任何 HTML 代码。
