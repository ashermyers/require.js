    /*! Require.JS V2.1 */
    (window.define = function(a, b) {
        console.log("(Require.JS) - Definition '" + a + "' Created. -"),
            (window.definitions = window.definitions || []),
            window.definitions.push({
                a: a,
                b: b
            });
    }),
    (window.execute = function(a) {
        try {
            return window.definitions.filter((b) => b.a === a)[0].b;
        } catch (b) {
            console.error("(Require.JS) - No Definition found for '" + a + "'. - ");
        }
    });
