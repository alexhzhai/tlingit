var config = {
        container: "#basic-example",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    cecilia = {
        text: {
          name: "Cecilia Kunz / Stan Tlaa",
          desc: "Janet's adopted Naa Tlaa (clan mother)"
        },
        link: {
          href: "javascript:showCeciliaInfo();"
        },
        image: "images/small/cecilia.jpg"
    },

    janet = {
        parent: cecilia,
        text:{
            name: "Janet Lee Ketchum Steinbright / Stan Tlaa"
        },
        link: {
          href: "javascript:showJanInfo();showMarriageInfo();"
        },
        image: "images/small/jan.jpg"
    },

    dixon = {
        parent: janet,
        text:{
            name: "Dixon Scott Steinbright / Skeenya",
            desc: "Janet's son"
        },
        link: {
          href: "javascript:showDixonInfo();"
        },
        image: "images/small/dixon.jpg"
    },


    chart_config = [
        config,
        cecilia,
        janet,
        dixon
    ];

function showCeciliaInfo() {
  var x = document.getElementById("ceciliaInfo");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else {
    x.style.display = 'none';
  }
}

function showJanInfo() {
  var x = document.getElementById("janInfo");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else {
    x.style.display = 'none';
  }
}

function showDixonInfo() {
  var x = document.getElementById("dixonInfo");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else {
    x.style.display = 'none';
  }
}

function showMarriageInfo() {
  var x = document.getElementById("marriageInfo");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else {
    x.style.display = 'none';
  }
}

function playWord1() {
  var snd = new Audio("audios/word1.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord2() {
  var snd = new Audio("audios/word2.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord3() {
  var snd = new Audio("audios/word3.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord4() {
  var snd = new Audio("audios/word4.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord5() {
  var snd = new Audio("audios/word5.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord6() {
  var snd = new Audio("audios/word6.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord7() {
  var snd = new Audio("audios/word7.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord8() {
  var snd = new Audio("audios/word8.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord9() {
  var snd = new Audio("audios/word9.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord10() {
  var snd = new Audio("audios/word10.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord11() {
  var snd = new Audio("audios/word11.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord12() {
  var snd = new Audio("audios/word12.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord13() {
  var snd = new Audio("audios/word13.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord14() {
  var snd = new Audio("audios/word14.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord15() {
  var snd = new Audio("audios/word15.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord16() {
  var snd = new Audio("audios/word16.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord17() {
  var snd = new Audio("audios/word17.m4a");
  snd.play();
  snd.currentTime=0;
}

function playWord18() {
  var snd = new Audio("audios/word18.m4a");
  snd.play();
  snd.currentTime=0;
}
