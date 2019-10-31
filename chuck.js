var config = {
        container: "#basic-example",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    luis = {
        text: {
          name: "Luis Charles \"Chuck\" Miller / Daanax.ils’eik",
          desc: "_________________"
        }
    },

    edward = {
        parent: luis,
        text:{
            name: "Edward David Charles Miller / Keich’Eesh, Yaanjindul.hein",
            desc: "______"
        }
    },


    chart_config = [
        config,
        luis,
        edward
    ];
