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
        image: "images/cecilia.jpg"
    },

    janet = {
        parent: cecilia,
        text:{
            name: "Janet Lee Ketchum Steinbright / Stan Tlaa"
        },
        link: {
          href: "javascript:showJanInfo();"
        },
        image: "images/jan.jpg"
    },

    dixon = {
        parent: janet,
        text:{
            name: "Dixon Scott Steinbright / Skeenya",
            desc: "Janet's son"
        },
        image: "images/dixon.jpg"
    },


    chart_config = [
        config,
        cecilia,
        janet,
        dixon
    ];


function showJanInfo() {
  var x = document.getElementById("janInfo");
  if (x.style.display !== "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showCeciliaInfo() {
  var x = document.getElementById("ceciliaInfo");
  if (x.style.display !== "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
