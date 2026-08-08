# Bridal + Hijab 国际品牌官网

这是一个基于 Next.js、TypeScript 和 Tailwind CSS 的品牌展示型官网，面向海外客户展示 Bridal、Hijab、Modest Fashion 和公司信息。第一版不包含购物车、支付、登录、订单或复杂后台。

## 如何运行网站

在项目目录打开终端：

```bash
npm install
npm run dev
```

然后访问 http://localhost:3000。

## 如何关闭服务器

在运行开发服务器的终端按 `Ctrl + C`。

## 修改品牌信息

打开 `src/config/site.ts`，可以修改品牌名称、公司名称、Email、WhatsApp、地址和社交媒体链接。网站其他位置会自动读取这里的配置。

## 修改 Logo

当前 Logo 是文字 Logo，位于 `src/components/layout/Header.tsx` 和 `src/components/layout/Footer.tsx`，内容来自 `siteConfig.name`。以后有正式 Logo 时，可以在这两个位置替换为图片或 SVG。

## 替换图片

目前产品图片和 editorial 图片使用 Unsplash 占位图片。产品图片路径集中在 `src/data/products.ts`，首页图片集中在 `src/lib/images.ts`。

建议后续把真实图片放入以下目录，并将对应 URL 改为本地路径：

```text
public/images/hero/
public/images/bridal/
public/images/hijab/
public/images/about/
```

Hero 图片在 `src/lib/images.ts` 的 `editorialImages.hero`。Bridal 和 Hijab 产品图片在 `src/data/products.ts` 每个产品的 `images` 数组中。

## 增加 Bridal 或 Hijab 产品

打开 `src/data/products.ts`，复制一个现有产品对象并修改：

- `slug`：URL 中使用的唯一英文标识
- `name`：产品名称
- `category`：筛选分类
- `collection`：只能是 `bridal` 或 `hijab`
- `description`、`images`、`material`、`colors`、`sizes`

保存后产品会自动出现在对应集合页，并生成 `/products/[slug]` 详情页。

## 修改 About 文案

首页 About 模块位于 `src/app/page.tsx`，完整 About 页面位于 `src/app/about/page.tsx`。当前文案是占位内容，正式上线前请替换为真实公司资料。

## 联系方式

当前网站通过 Email、WhatsApp 和 WeChat 直接联系，不需要配置第三方表单服务。Web3Forms 表单代码暂时保留，未来需要时可以重新启用。

## GitHub 上传

```bash
git init
git add .
git commit -m "Initial bridal hijab website"
git branch -M main
git remote add origin 你的GitHub仓库地址
git push -u origin main
```

`.gitignore` 已经忽略 `.env.local`、`node_modules` 和 Next.js 构建目录。

## Vercel 部署

1. 登录 Vercel，选择 `Add New Project`。
2. 导入 GitHub 仓库。
3. Framework 选择 Next.js，默认构建设置即可。
4. 在项目 `Settings > Environment Variables` 添加 `WEB3FORMS_ACCESS_KEY`。
5. 点击 Deploy。

## 本地检查

```bash
npm run lint
npm run build
```

## 当前需要替换的占位内容

- 社交媒体链接
- 所有占位图片
- Privacy 和 Terms 页面中的法律文案（已标记 `TODO: Legal review before production use`）
