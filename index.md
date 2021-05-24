---
layout: default
title: home
has_children: true
permalink: /
---

# Utterances test - GitHub PagesからのフィードバックをIssueとして取得

使用するApp。

- [utterances](https://utteranc.es/)

> how it works
> When Utterances loads, the GitHub issue search API is used to find the issue associated with the page based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.

<script src="https://utteranc.es/client.js"
        repo="[ENTER REPO HERE]"
        issue-term="pathname"
        label="Feedback"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
