// ========================================
// ガチャ
// ========================================

const gachaButton =
  document.getElementById("gacha-button");


if (gachaButton) {

  gachaButton.addEventListener(
    "click",
    function () {

      // ------------------------------------
      // すでに引いた作品を取得
      // ------------------------------------

      const drawnStories =
        JSON.parse(
          sessionStorage.getItem("drawnStories")
        ) || [];


      // ------------------------------------
      // まだ引いていない作品だけにする
      // ------------------------------------

      let availableStories =
        stories.filter(
          story =>
            !drawnStories.includes(story.id)
        );


      // ------------------------------------
      // 全作品引き終わっていた場合
      // 履歴をリセット
      // ------------------------------------

      if (availableStories.length === 0) {

        sessionStorage.removeItem(
          "drawnStories"
        );

        availableStories = stories;
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
        availableStories[randomIndex];


      // ------------------------------------
      // 引いた作品を履歴に追加
      // ------------------------------------

      drawnStories.push(
        selectedStory.id
      );


      sessionStorage.setItem(
        "drawnStories",
        JSON.stringify(drawnStories)
      );


      // ------------------------------------
      // 作品ページへ
      // ------------------------------------

      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}


// ========================================
// 書き手一覧
// ========================================

const writersList =
  document.getElementById("writers-list");


if (writersList) {

  Object.values(authors).forEach(
    author => {

      const writerItem =
        document.createElement("div");

      writerItem.className =
        "writer-item";


      // 書き手名

      const writerName =
        document.createElement("p");

      writerName.className =
        "writer-name";

      writerName.textContent =
        author.name;

      writerItem.appendChild(
        writerName
      );


      // SNS

      const snsArea =
        document.createElement("div");

      snsArea.className =
        "writer-sns";


      if (
        author.sns &&
        author.sns.length > 0
      ) {

        author.sns.forEach(
          (sns, index) => {

            if (index > 0) {

              snsArea.appendChild(
                document.createTextNode(" / ")
              );

            }


            const link =
              document.createElement("a");

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


      writerItem.appendChild(
        snsArea
      );

      writersList.appendChild(
        writerItem
      );

    }
  );

}
