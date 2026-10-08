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


  // SNS登録がある場合
  if (
    author.sns &&
    author.sns.length > 0
  ) {

    author.sns.forEach(
      (sns, index) => {

        // 2個目以降の前に「 / 」を表示
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

  // SNS登録なし
  else {

    snsArea.textContent =
      "―";

  }



  // --------------------------------------
  // 本文
  // --------------------------------------

  document.getElementById(
    "story-body"
  ).innerHTML =
    story.body;

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

      // 現在表示中の作品を除外
      const otherStories =
        stories.filter(
          item =>
            item.id !== storyId
        );


      // ランダム抽選
      const randomIndex =
        Math.floor(
          Math.random()
          * otherStories.length
        );


      const selectedStory =
        otherStories[
          randomIndex
        ];


      // 選ばれた作品へ移動
      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}
