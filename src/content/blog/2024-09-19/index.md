---
title: 'Discordで記事を書く上での最良フォーマット'
description: 'Timeline layout for Discord.'
date: 2024-09-19
tags: ['Essay']
image: './samune1200.png'
authors: ['setsugen-tetra']
draft: false
---

　
## はじめに

イギリスに滞在している間、「せっかくなら普段入り浸っているDiscord鯖のメンバーに、現地での体験を逐一送り付けてみよう」と思いました。その際、どんな文字装飾や構文のチャットが良いか研究したので共有します。今回提案するフォーマットを利用すれば、時刻・タイトル・本文の揃った記事をデスクトップ・モバイル問わず見やすく表示できます。更新時はコピペで済むことから執筆にかかる負担が少なく、旅行中の更新も容易です。**何かを分刻みでDiscordで発信したいときにぜひお使いください。**

　
## コード例・表示例

 ```Markdown title="Discord Chat" //caption="" //showLineNumbers
↓
## ・16:00 アフタヌーンティーを嗜む```下段よりサラダ→スコーン→スイーツ。サラダがとても美味しい。やや甘味が多すぎるので持ち帰った```
  ```

[![img](/images/blog/2024-09-19/image-2.webp)](/images/blog/2024-09-19/image-2.webp)

　
## 工夫したところ

タイムスタンプとタイトルは、Markdown記法のH2タイトルです。PCでもモバイルでもサイズ感よく見えるのは、H1でもH3でもなくH2でした。冒頭の「・」はこの行がタイトルであることを際立たせるために付けています。

本文は通常のテキストだとフォントサイズが大きくアンバランスだったので、コードブロックとして表示しています。各記事の間に一定の余白を空けたかったのですが、Discordのチャットは先頭や末尾に打ち込んだ改行を無視してしまうため、小さな「↓」のテキストで代用しています。

画像も添付できます。

[![img](/images/blog/2024-09-19/image-1.webp)](/images/blog/2024-09-19/image-1.webp)
<p style="font-size: 14px; text-align: center; color: gray;">黄点線＝各投稿の境界</p>

　
## 時系列に外れる投稿をするとき
タイムスタンプを「N/A」にして対応しました。
　
<div style="width: 70%; margin: 0 auto; display: flex; justify-content: space-between;">
    <a href="/images/blog/2024-09-19/image-3.webp">
      <img src="/images/blog/2024-09-19/image-3.webp" alt="img" style="width: 100%;" />
    </a>
</div>

　
## 参考にしたもの

参考にしたのは、イギリス公共放送BBCの 「**Live Reporting**」 というWEBニュース形式です。

これは刻一刻と状況が変化する緊急ニュース(Breaking News)が入ってきたときに、記事を乱発するのではなく、タイムライン形式ののページを何度も更新し、時系列で表示するものです。最近の日本関連のニュースだと、2024年1月の羽田空港地上衝突事故の際にLive形式でニュースが更新されていたのをよく覚えています。



　→　[こういう感じのレイアウト　(画像)](/images/blog/2024-09-19/image-4.webp)

　→　[『Live Now』　(BBC)](https://www.bbc.com/live)

　
## 参考にした文献
　
 →　[『マークダウンテキスト101』　(Discord Support)](https://support.discord.com/hc/ja/articles/210298617-%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%80%E3%82%A6%E3%83%B3-%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-101-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88-%E5%A4%AA%E5%AD%97-%E6%96%9C%E4%BD%93-%E4%B8%8B%E7%B7%9A)
　
<br/>

　
