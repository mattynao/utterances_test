---
layout: default
title: home
has_children: true
permalink: /
---

# GitHub Pagesに見やすいサイトを公開し、読んだ人のフィードバックをIssueとして取得したい!

## GitHub Pagesでページを作る

### どんなページを作ろうか?

[GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)は、GitHub上に置いたMarkdownファイルやHTMLファイルを自動的にWebサイトとして公開してくれる便利なツールです。
ただし、ただページを公開しただけだと素のHTML、古のインターネットでもみないような殺風景なページができてきます。
GitHub Pagesは[Jekyll](https://jekyllrb.com/)という静的サイト生成ツールを利用しており、ページにいろいろなカスタマイズを行うことができます。色々なテーマが公開されて使用できるようになっているので、わざわざ自分で作らなくても、既存のものから良さそうなものを選んでキレイで使いやすいサイトをつくることができます。

### フィードバックをもらいたいけど…

GitHub Pagesに公開したページを見た人から、意見・修正依頼などのフィードバックがある場合、なにも用意がなければ…

1. 意見のある人が、いちいちリポジトリにIssueを立てて
2. わざわざどこのページに意見があるかを説明して
3. サイトの管理者がそれを確認して
4. やっとサイトが更新される

なんて手順を踏むことになっちゃいます。読む方も作る方もめんどくさい。

## つーことで!!

- **サイトは閲覧しやすく、資料として役に立つ形に**
- **フィードバック取得をかんたんに、自動的にできるように**

したいですね!! あとは子文書へ。

<!-- do not change below -->

<script src="https://utteranc.es/client.js"
        repo="mattynao/utterances_test"
        issue-term="pathname"
        label="Feedback"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
