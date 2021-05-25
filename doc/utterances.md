---
layout: page
title: utterances
grand_parent: home
parent: solutions
nav_order: 2
---

# utterances

## なにこれ?

>[utterances](https://utteranc.es/)  
> **how it works**   
>> When Utterances loads, the GitHub issue search API is used to find the issue associated with the page based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.

### どういうこと?

つまり、

- ページ内にコメント欄を埋め込める
- コメントからIssueを自動的に作ってくれる

アプリです。GitHub Marketplaceで公開されてます。

### どうやるの?

まず、対象とするリポジトリにインストールします。

その後上記のページの中で、各種パラメータを選ぶとコピペ用のスクリプトを自動で作ってくれます。

それをページ内の埋め込みたい場所にコピペすればOK!!

例えばこのページには(他のページも同じ)、下記のようなscriptタグが入っており、コメント欄を生成しています。

```html
<script src="https://utteranc.es/client.js"
        repo="mattynao/utterances_test"
        issue-term="pathname"
        label="Feedback"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

設定次第ですが、**コメントの入ったファイルのパス名をIssueのタイトルとして自動で設定** してくれるのでどこのファイルを直せばいいかすぐに分かる!! 修正ファイルがすぐに特定できるので、修正作業もすぐにとりかかれるようになります。

↓↓ 各ページにコメント欄があるので試してみてください。↓↓

<!-- 以下の部分はコメント欄セット用の記述。削除しないこと -->
<script src="https://utteranc.es/client.js"
        repo="mattynao/utterances_test"
        issue-term="pathname"
        label="Feedback"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
