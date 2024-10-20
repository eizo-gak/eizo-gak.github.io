---
title: '2024/10/18 ブログを破壊して週報を加える'
description: 'Build & Scrap などと言っている場合ではない.'
date: 2024-10-18
tags: ['週報']
image: './1200x630.png'
authors: ['setsugen-tetra']
draft: false
---
## 1. ブログを破壊した。Astroを手に入れた。

いやーやらかしました。

eizo-gak.comのブログは従来よりWordpressで運用していたのですが、モバイル環境のトップページがやたら重かったのが難点でした。これどうにかできないかなーと思って、PHPファイルを弄りまくっていたら、普通にWordPress壊しました。

症状としては、URL末尾のトレイリングスラッシュがないとページが真っ白になるのと、サイト上で修正のきかなくなった箇所が発生しています。みなさんWordPressのテーマエディターをいじる時は、バックアップをどうかお忘れなく。

　

![img](/images/blog/2024-10-18/キャプチャ2.PNG)

　

カスタムしまくっていたテーマを直すのは面倒なので、思い切ってブログのシステムを乗り換えようと思います。

実はかねてから 「**静的サイト**」 というものに興味がありました。これは端的に言うと、「すべての来訪者にただ同じ画面を表示することに特化したWebサイト」 です。エンジニアとかオタクとかがたまに公開している、HugoやAstroといった静的サイトジェネレータで構築されたブログって、真の意味でミニマルだなぁ*と思っており、個人的に憧れがありました。



いかにも趣味道楽の個人サイトらしい天邪鬼なやり方ですが、AstroでWebサイトを構築 → Github Pagesでホスティング → github.ioでしばらく運用 → 従来通りの独自ドメインに移行、というのを考えています。

　

[![img](/images/blog/2024-10-18/キャプチャ1.PNG)](/images/blog/2024-10-18/キャプチャ1.PNG)

<p style="font-size: 14px; text-align: center; color: gray;">Visual Studio Codeってやっぱり便利</p>
<br/>

## 2. FUJIFILM X-M5が出た

FUJIFILMの新型Xマウントカメラ「X-M5」が発表されました。

個人的に驚いたのは **ボディ 13万円台** という価格です。6Kや4K60pの載っているカメラとしては破格といってもよく、近年 「ライカをめざす」 発言などでいろいろ言われがちだったXマウントに新しい風を吹かせたと思います。

ボディの前後にそれぞれダイヤルが付いています。これを上位機と同等にカスタマイズできるということであれば、まさに「ミニX-T3」と言えます。IBISは非搭載、1.18倍クロップの所までそっくりです。

SONYのZV-E10iiとの勝負になるでしょう。私ならX-M5を選びます。APS-Cならではのレンズラインナップが豊富なXマウントは本当に心強いです。(いくらレンズが多彩とはいえ、X-M5とXF500mmを同時に発表して、タッチアンドトライで2つを組み合わせるのはどうかと思いますが笑）

[![img](/images/blog/2024-10-18/thum_01_2.jpg)](/images/blog/2024-10-18/thum_01_2.jpg)

 →　[『ミラーレスデジタルカメラ「FUJIFILM X-M5」新発売』　(FUJIFILM) ](https://www.fujifilm.com/jp/ja/news/list/11804)

　

## 3. 今週の音楽 「同盟 - V.W.P」

だいたい一週間に1曲くらい、ドハマリする曲を発掘したり紹介してもらったりするので、この場で記録してみることにします。興味があれば聴いていってください。就活していたとき、ヰ世界情緒さんの歌にかなり元気づけられたことがきっかけで、V.W.PというかKAMITSUBAKIというかTHINKRというか、とにかくこういった世界観がかなり好きになりました。

　

<div style="display: flex; justify-content: center;">
        <iframe
          width="90%"
          height="auto"
          style="max-width: 1200px; aspect-ratio: 16/9; border: none;"
          src="https://www.youtube.com/embed/lAM3diipp7Y"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

　

---

<p style="font-size: 12px;">*1  整ったデザインやうわべだけの"ミニマリズム"でないという意味。静的サイトのコンテンツはHTMLで保存され、機能に無駄もなく、中身はシンプルな構造をしている。</p>
