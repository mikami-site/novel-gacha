const authors = {

  author01: {
    name: "書き手A",
    sns: "https://x.com/XXXXXXXX"
  },

  author02: {
    name: "書き手B",
    sns: "https://x.com/YYYYYYYY"
  },

  author03: {
    name: "書き手C",
    sns: "https://example.com/"
  }

};

const stories = [

  {
    id: "01",

    title: "雨の日",

    theme: "雨",

    author: "author01",

    body: `
      <p>
        雨は朝から降り続いていた。
      </p>

      <p>
        窓の外を眺めながら、彼は小さく息を吐く。
      </p>

      <p>
        「今日は止みそうにないな」
      </p>

      <p>
        そんな声だけが、静かな部屋に響いた。
      </p>
    `
  },


  {
    id: "02",

    title: "休日",

    theme: "休日",

    author: "author02",

    body: `
      <p>
        その日は、珍しく何の予定もなかった。
      </p>

      <p>
        だからこそ、何をすればいいのかわからない。
      </p>
    `
  },


  {
    id: "03",

    title: "夜更かし",

    theme: "夜",

    author: "author01",

    body: `
      <p>
        時計を見ると、すでに日付が変わっていた。
      </p>

      <p>
        「まだ起きてたの？」
      </p>
    `
  },


  {
    id: "04",

    title: "小話タイトル4",

    theme: "テーマ4",

    author: "author03",

    body: `
      <p>
        ここに本文を入れます。
      </p>
    `
  }

];
