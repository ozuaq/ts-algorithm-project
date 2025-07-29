# アルゴリズム学習

## プロジェクトのセットアップ

vscode の Dev Containers 拡張機能を用いる。

コンテナをビルドして、開くには、Ctrl + Shift + P で 「Dev Containers: Reopen in Container」を実行する。

コンテナ内で git push などでリモートリポジトリとやりとりする必要があるとき、ローカルの ssh キーを使うように設定している。

.devcontainer/devcontainer.json

```
  "features": {
    "ghcr.io/devcontainers/features/common-utils:2": {
      // SSHエージェントフォワーディングを有効にする
      "configureSshAgentForwarding": true,
    }
  },
```

git push などのコマンドを実行した際に、Permission denied になることがあるが、次のコマンドを実行すると有効になることを確認できた。

```
ssh -T git@github.com

// 以下のように出力される
// Hi 〇〇! You've successfully authenticated, but GitHub does not provide shell access.
```

## カテゴリ別

### 動的計画法

#### [Educational DP Contest / DP まとめコンテスト](https://atcoder.jp/contests/dp/tasks)

src/at-coder/education-dp-contest/\*

### 貪欲法

#### [AtCoder Grand Contest 009 A - Multiple Array](https://atcoder.jp/contests/agc009/tasks/agc009_a)

src/at-coder/grand-contest-009-a.ts
