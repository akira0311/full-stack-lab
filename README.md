
# RepoVault: 全栈技术栈演示项目

<div align="center">

**一个仓库，多种实现：通过对比学习全栈开发**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

## 📖 项目概述

RepoVault 是一个个人 GitHub 仓库收藏夹应用。但它的真正目的不是成为一个产品，而是**一个用于学习和比较不同全栈技术栈的演示项目**。

我们通过实现一个功能相同、但技术栈完全不同的应用，来直观地感受不同技术在开发效率、性能、生态系统和开发体验上的差异。

**核心理念**：在“解决同一个问题”的前提下，做出最合适的技术选型。

## 🌳 核心理念

1.  **统一问题域**: 所有技术栈实现都遵循同一份[需求文档](./docs/requirements.md)和[API 设计](./docs/openapi.yaml)，确保对比的公平性。
2.  **隔离技术实现**: 每个技术栈都在一个独立的 Git 分支（如 `tech/react-express-mongo`）中进行开发，互不干扰。
3.  **工程化标准**: 所有分支都遵循统一的[项目完备性规范](./docs/project-completeness-spec.md)，包括编码规范、测试策略、CI/CD 等，确保高质量的交付。

## 🚀 技术栈一览

每个分支都是一个可以独立运行的全栈应用。选择一个你感兴趣的，开始探索吧！

| 分支 | 前端 | 后端 | 数据库 | 亮点 |
| :--- | :--- | :--- | :--- | :--- |
| `tech/react-express-mongo` | React | Express.js | MongoDB | 经典 MERN-like 栈，生态成熟，社区庞大。 |
| `tech/sveltekit-fastify-prisma` | SvelteKit | Fastify | PostgreSQL | **类型安全**与高性能的完美结合，开发体验极佳。 |
| `tech/vue3-go-gin-postgres` | Vue 3 | Go + Gin | PostgreSQL | 跨语言组合，体验 Go 的高并发性能和简洁语法。 |
| `tech/htmx-fastapi-sqlite` | HTMX | FastAPI | SQLite | **后端渲染**思路，用极简的 JS 实现动态交互。 |
| `tech/t3-stack` | Next.js | tRPC | PostgreSQL | 高度一体化、**端到端类型安全**的全栈“全家桶”。 |

## 👉 快速开始

1.  **克隆仓库**
    ```bash
    git clone https://github.com/your-username/RepoVault.git
    cd RepoVault
    ```

2.  **查看所有可用的技术栈分支**
    ```bash
    git branch -a
    ```

3.  **切换到你感兴趣的技术栈分支** (例如，SvelteKit + Fastify)
    ```bash
    git checkout tech/sveltekit-fastify-prisma
    ```

4.  **阅读并运行**
    每个技术栈分支都有自己的 `README.md` 文件，其中包含了详细的安装、配置和运行指南。**请务必先阅读它！**

## 📚 学习路径建议

这个项目不仅是代码库，更是一个学习平台。我们建议你从以下角度进行对比学习：

*   **前端框架对比**: 比较 `tech/react-express-mongo` 和 `tech/sveltekit-fastify-prisma` 的 `frontend` 目录，感受 React 和 Svelte 在组件化、状态管理和响应式编程上的不同哲学。
*   **后端语言对比**: 对比 `tech/react-express-mongo` (Node.js) 和 `tech/vue3-go-gin-postgres` (Go) 的 `backend` 目录，理解事件循环与协程的并发模型差异。
*   **API 设计实现**: 所有分支都应遵循 `docs/api-design.md` 中的规范。你可以用 Postman 等工具测试不同后端实现的 API 行为是否一致。
*   **数据库与 ORM 对比**: 对比 Mongoose (MongoDB) 和 Prisma (PostgreSQL) 的数据建模、迁移和查询方式，感受 SQL 与 NoSQL 的区别。
*   **开发体验 (DX) 对比**: 亲自尝试在不同分支中添加一个小功能（如“显示仓库的 License”），感受它们的开发工具链、调试体验和开发效率。

## 📜 项目规范

为了保证所有技术栈实现的质量和一致性，本项目遵循一套严格的规范。详情请参阅：

➡️ **[RepoVault 项目完备性规范](./docs/project-completeness-spec.md)**

该规范涵盖了技术选型、测试策略、API 管理、工作流和 CI/CD 等各个方面。

## 🤝 贡献

我们欢迎任何形式的贡献！

*   提出新的技术栈实现建议。
*   发现现有实现中的 Bug 或不足。
*   改进项目文档或规范。

请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何参与。

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

**开始你的全栈探索之旅吧！** 🎉