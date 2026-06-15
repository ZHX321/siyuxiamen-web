# 项目档案：思域厦门官网 (siyuxiamen.cn)

## 基础信息
- **官网地址**: [siyuxiamen.cn](https://siyuxiamen.cn)
- **源码仓库**: [ZHX321/siyuxiamen-web](https://github.com/ZHX321/siyuxiamen-web.git)
- **主要媒体资产**: `assets/images`

## 技术架构
- **核心模式**: 基于 Section 的模块化动态渲染架构。
- **路由机制**: 支持 1-2-3 级 Hash 路由，确保深度内容的定位与导航。
- **内容管理**: 集成 **Decap CMS**，后台路径为 `/admin`。
- **身份验证**: 采用 GitHub OAuth Proxy 方案。
  - 接口: `api/auth`, `api/callback`

## 业务集成
- **获客系统 (Lead Gen)**: 使用 **Formspree**。
  - 项目 ID: `xpqeyega`
  - 接收邮箱: `3418946722@qq.com`

---
*最后更新日期: 2026-06-13*
