# 贡献指南 (CONTRIBUTING.md)

感谢您对 RepoVault 项目的关注！我们非常欢迎任何形式的贡献。

## 📇 贡献方式

您可以从以下几个方面为项目做出贡献：

1.  **提出新的技术栈实现建议**：如果您熟悉某个技术栈并且希望看到它在这个项目中实现，请创建一个 Issue 来讨论。
2.  **发现并修复 Bug**：如果您在使用或研究某个技术栈分支时发现了 Bug，请创建一个 Issue 并附上详细的复现步骤，或者直接提交一个 PR 来修复它。
3.  **改进文档或规范**：如果您觉得我们的文档、规范或代码示例不够清晰或存在错误，请随时提出修改意见或直接提交 PR。
4.  **实现新的功能**：如果您想为某个技术栈分支添加新功能，请先在 Issue 中讨论，确保它符合项目方向后再开始实施。

## 🛠️ 开发流程

RepoVault 采用独特的"宪法分支"模型进行开发。请在开始贡献前仔细阅读 [项目完备性规范](./docs/project-completeness-spec.md) 中的 [Git 工作流](./docs/project-completeness-spec.md#4-git-工作流) 部分。

### 1. Fork & Clone

1.  Fork 本仓库到您的 GitHub 账户。
2.  将您的 Fork 克隆到本地开发环境。
    ```bash
    git clone https://github.com/your-username/RepoVault.git
    cd RepoVault
    ```

### 2. 选择分支

*   **改进规范或文档**：请在 `main` 分支上进行修改。
*   **为特定技术栈贡献代码**：请切换到对应的技术栈分支（如 `tech/react-express-mongo`）进行开发。

### 3. 创建功能分支

从目标分支创建一个新的功能分支：
```bash
git checkout -b feature/your-feature-name
```

### 4. 开发与提交

1.  遵循项目规范进行编码和测试。
2.  遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范编写提交信息。
3.  确保所有测试通过。

### 5. 提交 Pull Request

1.  将您的功能分支推送到您的 Fork 仓库。
2.  在原仓库中创建一个 Pull Request，将您的功能分支合并回原始的目标分支（`main` 或某个 `tech/xxx`）。
3.  清晰地描述您的改动内容、解决的问题以及测试方法。
4.  等待项目维护者审查和合并。

## 📜 代码规范

请确保您的代码符合 [项目完备性规范](./docs/project-completeness-spec.md) 中的各项要求，特别是：

*   [编码规范](./docs/project-completeness-spec.md#11-编码规范)
*   [Git 提交规范](./docs/project-completeness-spec.md#12-git-提交规范)
*   [测试策略](./docs/project-completeness-spec.md#2-测试策略)

## 🧪 测试

在提交 PR 前，请确保您的改动已通过所有相关测试，并且不会破坏现有功能。

---

再次感谢您的贡献！🎉