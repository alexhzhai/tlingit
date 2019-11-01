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
        image: "images/cecilia.jpg"
    },

    janet = {
        parent: cecilia,
        HTMLclass: 'tan',
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
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
