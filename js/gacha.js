const gachaButton = document.getElementById("gacha-button");

gachaButton.addEventListener("click", function () {

  const randomIndex = Math.floor(
    Math.random() * stories.length
  );

  const selectedStory = stories[randomIndex];

  window.location.href =
    `story.html?id=${selectedStory.id}`;

});
// ========================================
// ガチャ
// ========================================

const gachaButton =
  document.getElementById(
    "gacha-button"
  );


if (gachaButton) {

  gachaButton.addEventListener(
    "click",
    function () {

      const randomIndex =
        Math.floor(
          Math.random()
          * stories.length
        );


      const selectedStory =
        stories[randomIndex];


      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}



// ========================================
// 書き手一覧
// ========================================

const writersList =
  document.getElementById(
    "writers-list"
  );


if (writersList) {

  // authorsの中身を順番に取得
  Object.values(authors).forEach(
    author => {

      // ----------------------------
      // 書き手1人分
      // ----------------------------

      const writerItem =
        document.createElement(
          "div"
        );

      writerItem.className =
        "writer-item";


      // ----------------------------
      // 書き手名
      // ----------------------------

      const writerName =
        document.createElement(
          "p"
        );

      writerName.className =
        "writer-name";

      writerName.textContent =
        author.name;


      writerItem.appendChild(
        writerName
      );


      // ----------------------------
      // SNS
      // ----------------------------

      const snsArea =
        document.createElement(
          "div"
        );

      snsArea.className =
        "writer-sns";


      if (
        author.sns &&
        author.sns.length > 0
      ) {

        author.sns.forEach(
          (sns, index) => {

            // 2つ目以降の前に区切り
            if (index > 0) {

              const separator =
                document.createTextNode(
                  " / "
                );

              snsArea.appendChild(
                separator
              );

            }


            // SNSリンク
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


      writerItem.appendChild(
        snsArea
      );


      writersList.appendChild(
        writerItem
      );

    }
  );

}
