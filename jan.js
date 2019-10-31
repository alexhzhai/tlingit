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
            name: "Janet Lee Ketchum Steinbright / Stan Tlaa"
        },
        image: "images/jan.jpg"
    },

    dixon = {
        parent: janet,
        text:{
            name: "Dixon Scott Steinbright / Skeenya",
            desc: "Janet's son"
        }
    },


    chart_config = [
        config,
        cecilia,
        janet,
        dixon
    ];
