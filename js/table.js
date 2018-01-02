// GRID
function tableGrid() {
  if (!document.querySelectorAll(".myJs_TABLE_wrapper .myJs_TD")) {
    return;
  }
  var AAA = document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE");

  var RRR = 0
  for (var i = 0; i < AAA[0].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD").length; i++) {
    if (!AAA[0].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD")[i]) {
      return;
    }
    var WWW = 0
    for (var j = 0; j < AAA.length; j++) {
      if (!AAA[j].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD")[i]) {
        return
      }
      var QQQ = AAA[j].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD")[i].offsetWidth
      if (QQQ > WWW) {
        WWW = QQQ
      }
    }
    for (var x = 0; x < AAA.length; x++) {
      if (!AAA[x].querySelectorAll(".myJs_THEAD .myJs_TR .myJs_TD")[i] || !AAA[x].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD")[i]) {
        return
      }
      AAA[x].querySelectorAll(".myJs_THEAD .myJs_TR .myJs_TD")[i].style.width = WWW + "px"
      AAA[x].querySelectorAll(".myJs_TBODY .myJs_TR .myJs_TD")[i].style.width = WWW + "px"
      AAA[x].querySelectorAll(".myJs_THEAD")[0].style.width = AAA[x].offsetWidth + "px"
    }
  }
}
// SCROLL
function tableScroll() {
  if (!document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE") || !document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE_scroll")[0]) {
    return
  }
  var TTT = document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE_scroll");
  for (var i = 0; i < TTT.length; i++) {
    TTT[i].getBoundingClientRect().top;
    if (TTT[i].getBoundingClientRect().top < 2 && TTT[i].getBoundingClientRect().bottom > TTT[i].querySelectorAll(".myJs_THEAD")[0].offsetHeight) {
      TTT[i].querySelectorAll(".myJs_THEAD")[0].style.position = "fixed";
      TTT[i].querySelectorAll(".myJs_THEAD")[0].style.top = "0px";
      // them tr
      if (TTT[i].querySelectorAll(".myJs_TBODY")[0].querySelectorAll(".myJs_newTR")[0]) {
        TTT[i].querySelectorAll(".myJs_TBODY")[0].querySelectorAll(".myJs_newTR")[0].style.display = "block";
      }

    } else {
      TTT[i].querySelectorAll(".myJs_THEAD")[0].style.position = "relative";
      // them tr
      if (TTT[i].querySelectorAll(".myJs_TBODY")[0].querySelectorAll(".myJs_newTR")[0]) {
        TTT[i].querySelectorAll(".myJs_TBODY")[0].querySelectorAll(".myJs_newTR")[0].style.display = "none";
      }
    }
  }
}
function createTR() {
  if (!document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE") || !document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE_scroll")[0]) {
    return
  }
  var TTT = document.querySelectorAll(".myJs_TABLE_wrapper")[0].querySelectorAll(".myJs_TABLE_scroll");
  for (var i = 0; i < TTT.length; i++) {
    var UUU = TTT[i].querySelectorAll(".myJs_TBODY")[0]
    // them tr
    var ntr = document.createElement("tr")
    ntr.className = "myJs_newTR"
    ntr.style.display = "none";
    var ntd = document.createElement("td")
    ntd.style.height = TTT[i].querySelectorAll(".myJs_THEAD")[0].offsetHeight + "px";
    ntr.appendChild(ntd)
    if (UUU.querySelectorAll(".myJs_newTR")[0]) {
      return
    }
    UUU.insertBefore(ntr, UUU.childNodes[0])
  }
}

window.addEventListener('load', tableGrid, false);
window.addEventListener('resize', tableGrid, false);

window.addEventListener('load', tableScroll, false);
window.addEventListener('scroll', tableScroll, false);

window.addEventListener('load', createTR, false);
window.addEventListener('resize', createTR, false);