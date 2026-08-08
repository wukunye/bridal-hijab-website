# 自定义 .com 域名设置

## 1. 购买域名

在可靠的域名服务商购买，例如 `yourbrand.com`。域名就是访客输入浏览器后访问你网站的地址。

## 2. 在 Vercel 添加域名

打开 Vercel 项目：

```text
Project → Settings → Domains → Add Domain
```

添加：

```text
yourbrand.com
www.yourbrand.com
```

Vercel 会显示需要配置的 DNS 记录。

## 3. DNS、A Record 和 CNAME 是什么

- DNS：把域名翻译成服务器地址的系统。
- A Record：把域名指向一个 IP 地址。
- CNAME：把一个域名指向另一个域名。`www` 通常使用 CNAME 指向 Vercel 提供的目标地址。

在你的域名服务商后台按 Vercel 页面显示的记录填写即可。不同服务商界面名称略有不同，但记录类型和目标值以 Vercel 显示为准。

## 4. 验证

DNS 生效后，Vercel 会自动签发 HTTPS 证书。最终访问地址应为：

```text
https://yourbrand.com
```

`yourbrand.vercel.app` 仍然是技术备用地址，不是必须展示给客户的主地址。

如果域名服务商提供 Cloudflare DNS，也可以使用 Cloudflare 管理 DNS。添加记录时遵循 Vercel 显示的目标值，并确保没有冲突的旧记录。
