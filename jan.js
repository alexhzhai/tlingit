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
        }
    },

    janet = {
        parent: cecilia,
        text:{
            name: "Janet Lee Ketchum Steinbright / Stan Tlaa",
            desc: "______"
        },
        image: "../headshots/1.jpg"
    },

    paul = {
      parent: cecilia,
      text: {
        name: "Paul Manson Jackson / Gax Tlein",
        desc: "Janet's husband"
      }
    },

    dixon = {
        parent: janet,
        text:{
            name: "Dixon Scott Steinbright / Skeenya",
            desc: "______"
        }
    },


    chart_config = [
        config,
        cecilia,
        janet,
        paul,
        dixon
    ];
