// ========================================
// URLから作品IDを取得
// ========================================

const params =
  new URLSearchParams(
    window.location.search
  );


const storyId =
  params.get("id");



// ========================================
// 該当する作品を探す
// ========================================

const story =
  stories.find(
    item => item.id === storyId
  );



// ========================================
// 作品が見つからない場合
// ========================================

if (!story) {

  document.querySelector(
    ".story-main"
  ).innerHTML = `

    <div class="story-error">

      <p>
        作品が見つかりませんでした。
      </p>

      <p>
        <a href="index.html">
          トップに戻る
        </a>
      </p>

    </div>

  `;

}



// ========================================
// 作品が見つかった場合
// ========================================

else {

  // 作者データを取得
  const author =
    authors[story.author];



  // --------------------------------------
  // ブラウザのタブタイトル
  // --------------------------------------

  document.title =
    `${story.title} | SSガチャ`;



  // --------------------------------------
  // 作品タイトル
  // --------------------------------------

  document.getElementById(
    "story-title"
  ).textContent =
    story.title;



  // --------------------------------------
  // テーマ
  // --------------------------------------

  document.getElementById(
    "story-theme"
  ).textContent =
    story.theme;



  // --------------------------------------
  // 作者名
  // --------------------------------------

  document.getElementById(
    "story-author"
  ).textContent =
    author.name;



  // --------------------------------------
  // SNS
  // --------------------------------------

  const snsArea =
    document.getElementById(
      "story-sns"
    );


  if (
    author.sns &&
    author.sns.length > 0
  ) {

    author.sns.forEach(
      (sns, index) => {


        // 2個目以降の前に「 / 」
        if (index > 0) {

          const separator =
            document.createTextNode(
              " / "
            );


          snsArea.appendChild(
            separator
          );

        }



        // SNSリンク作成
        const link =
          document.createElement(
            "a"
          );


        link.textContent =
          sns.name;


        link.href =
          sns.url;


        link.target =
          "_blank";


        link.rel =
          "noopener noreferrer";


        snsArea.appendChild(
          link
        );

      }
    );

  }


  else {

    snsArea.textContent =
      "―";

  }



  // --------------------------------------
  // 本文
  // --------------------------------------

  /*
    data.jsでは

    body: `
    　本文……
    `

    のように書く。

    最初の改行だけ削除し、
    本文冒頭の全角スペースは残す。

    trim()を使うと
    最初の全角スペースまで消えるため
    使用しない。
  */

  document.getElementById(
    "story-body"
  ).textContent =
    story.body
      .replace(/^\r?\n/, "")
      .trimEnd();



  // --------------------------------------
  // 現在の作品を
  // 「引いた作品」として記録
  // --------------------------------------

  let drawnStories =
    JSON.parse(
      sessionStorage.getItem(
        "drawnStories"
      )
    ) || [];


  if (
    !drawnStories.includes(
      storyId
    )
  ) {

    drawnStories.push(
      storyId
    );


    sessionStorage.setItem(
      "drawnStories",
      JSON.stringify(
        drawnStories
      )
    );

  }

}



// ========================================
// 「もう一度引く」
// ========================================

const retryButton =
  document.getElementById(
    "retry-button"
  );


if (
  retryButton &&
  story
) {

  retryButton.addEventListener(
    "click",
    function () {


      // ------------------------------------
      // すでに引いた作品を取得
      // ------------------------------------

      let drawnStories =
        JSON.parse(
          sessionStorage.getItem(
            "drawnStories"
          )
        ) || [];



      // ------------------------------------
      // 現在の作品も履歴に入れる
      // ------------------------------------

      if (
        !drawnStories.includes(
          storyId
        )
      ) {

        drawnStories.push(
          storyId
        );

      }



      // ------------------------------------
      // 未抽選作品だけを取得
      // ------------------------------------

      let availableStories =
        stories.filter(
          item =>
            !drawnStories.includes(
              item.id
            )
        );



      // ------------------------------------
      // 全作品引き終わった場合
      // 履歴をリセット
      // ------------------------------------

      if (
        availableStories.length === 0
      ) {

        drawnStories = [];


        /*
          リセット直後に
          今読んでいる作品が
          連続して出るのを防ぐ
        */

        availableStories =
          stories.filter(
            item =>
              item.id !== storyId
          );

      }



      // ------------------------------------
      // ランダム抽選
      // ------------------------------------

      const randomIndex =
        Math.floor(
          Math.random()
          * availableStories.length
        );


      const selectedStory =
        availableStories[
          randomIndex
        ];



      // ------------------------------------
      // 新しく引いた作品を履歴に追加
      // ------------------------------------

      drawnStories.push(
        selectedStory.id
      );


      sessionStorage.setItem(
        "drawnStories",
        JSON.stringify(
          drawnStories
        )
      );



      // ------------------------------------
      // 選ばれた作品へ移動
      // ------------------------------------

      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}
