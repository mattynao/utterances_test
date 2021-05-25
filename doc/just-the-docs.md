---
layout: page
title: just-the-docs
grand_parent: home
parent: solutions
nav_order: 1
---

# Just-the-Docs

## これなに?

> [Just-the-Docs](https://pmarsceill.github.io/just-the-docs/)
>> A modern, highly customizable, and responsive Jekyll theme for documentation with built-in search.
>> Easily hosted on GitHub Pages with few dependencies.

Jekyllテーマの一種で、特徴は主に以下の2つ:

- ページを階層構造で表示できる
- 標準で検索機能が利用できる(**日本語には未対応**)

### サイトの設定

サイトの設定は、下記2つの設定パラメータで行います:

- `_config.yml` (サイト全体の設定。リポジトリのルートディレクトリに入ってるやつ)
- **_Front matter_** (ページごとの設定。ファイルの一番上に書く)

設定が間違っていると、サイトの表示がヘンになります。きちんと表示されるように注意して設定! 本リポジトリが実例となります

例えば、このページには下のようなFront matterがセットされてます(設定項目については、JekyllやJust the Docsに説明があるので確認してみてください)。細かい階層構造もこの形式で各ページごとに設定可能です。

```
---
layout: page
title: just-the-docs
grand_parent: home
parent: solutions
nav_order: 1
---
```

※もちろん、実際に生成されたwebサイトからは見えない

---

### 検索について

先述の通り検索機能は現状日本語に対応してないです。Watson Discovery等に頼る必要あり。

<!-- 以下の部分はコメント欄セット用の記述。削除しないこと -->
<script src="https://utteranc.es/client.js"
        repo="mattynao/utterances_test"
        issue-term="pathname"
        label="Feedback"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
