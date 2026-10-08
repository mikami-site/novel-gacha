const ageGate =
  document.getElementById("age-gate");

const specialContent =
  document.getElementById("special-content");

const confirmButton =
  document.getElementById("age-confirm");

const declineButton =
  document.getElementById("age-decline");


// ========================================
// すでに年齢確認済みの場合
// ========================================

if (
  sessionStorage.getItem("ageConfirmed")
  === "yes"
) {

  ageGate.style.display = "none";

  specialContent.classList.remove(
    "special-hidden"
  );

}


// ========================================
// 18歳以上
// ========================================

confirmButton.addEventListener(
  "click",
  function () {

    sessionStorage.setItem(
      "ageConfirmed",
      "yes"
    );

    ageGate.style.display =
      "none";

    specialContent.classList.remove(
      "special-hidden"
    );

  }
);


// ========================================
// 18歳未満
// ========================================

declineButton.addEventListener(
  "click",
  function () {

    window.location.href =
      "index.html";

  }
);
