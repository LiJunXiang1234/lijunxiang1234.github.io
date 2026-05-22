# 个人主页实现说明

## 当前目标

这个版本用于求职场景的最小可用首页：

- 展示姓名、目标岗位和个人定位
- 强调「工业设计背景 + 前端工程实现」的特点
- 提供简历下载入口
- 通过 GitHub Pages 部署为可访问网页

## 文件结构

```text
app/
  app.vue                 # 首页页面和样式
public/
  resume.pdf              # 简历文件，网页中通过 /resume.pdf 访问
.github/
  workflows/
    deploy.yml            # GitHub Pages 自动部署配置
nuxt.config.ts            # Nuxt 配置和页面标题信息
```

## 首页实现

首页暂时直接写在 `app/app.vue` 中，没有拆分组件。这样做是为了让第一版足够简单，方便快速上线。

页面包含：

- 顶部品牌区：图形标识、英文姓名、Portfolio
- 首屏介绍：`Hello, I'm 李俊祥`
- 右侧定位：前端开发工程师
- 个人简介：教育背景、技术栈和项目能力概述
- 技术标签：Vue3、Nuxt、React、TypeScript、Element Plus、Figma
- 简历按钮：点击下载 `public/resume.pdf`

## 简历下载

Nuxt 会把 `public` 目录下的文件直接暴露到站点根路径。

因此这个文件：

```text
public/resume.pdf
```

在线访问路径是：

```text
/resume.pdf
```

页面中的下载按钮写法：

```html
<a href="/resume.pdf" download>下载简历</a>
```

## 本地开发

```powershell
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 构建检查

```powershell
npm run build
```

## 部署说明

`.github/workflows/deploy.yml` 会在推送到 `main` 或 `master` 分支时自动构建并部署到 GitHub Pages。

你还需要在 GitHub 仓库中设置：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

如果仓库名称是：

```text
lijunxiang1234.github.io
```

部署成功后默认访问地址是：

```text
https://lijunxiang1234.github.io
```
