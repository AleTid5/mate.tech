(this["webpackJsonpblog-michroma"] =
  this["webpackJsonpblog-michroma"] || []).push([
  [0],
  {
    44: function (a, e, o) {
      a.exports = o(72);
    },
    49: function (a, e, o) {},
    50: function (a, e, o) {},
    71: function (a, e, o) {
      a.exports = o.p + "static/media/michroma.a73e8635.jpg";
    },
    72: function (a, e, o) {
      "use strict";
      o.r(e);
      var r = o(0),
        t = o.n(r),
        n = o(16),
        i = o.n(n),
        c = (o(49), o(91)),
        l = o(96),
        p = o(98),
        d = (o(50), o(2)),
        s = o(8),
        g = o.n(s),
        m = o(5),
        x = function (a) {
          a = (a += "").replace("#", "");
          if (!/[0-9A-Fa-f]/g.test(a) || (3 !== a.length && 6 !== a.length))
            throw new Error("input is not a valid hex color.");
          if (3 === a.length) {
            var e = a[0],
              o = a[1],
              r = a[2];
            a = e + e + o + o + r + r;
          }
          var t = (a = a.toUpperCase(a))[0] + a[1],
            n = a[2] + a[3],
            i = a[4] + a[5];
          return (
            parseInt(t, 16) + ", " + parseInt(n, 16) + ", " + parseInt(i, 16)
          );
        },
        b = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"],
        h = ["#fafafa"],
        u = [
          "#ff9800",
          "#ffa726",
          "#fb8c00",
          "#ffa21a",
          "#fcf8e3",
          "#faf2cc",
          "#ffe0b2",
          "#ffb74d",
        ],
        f = [
          "#f44336",
          "#ef5350",
          "#e53935",
          "#f55a4e",
          "#f2dede",
          "#ebcccc",
          "ef9a9a",
          "#ef5350",
        ],
        w = [
          "#4caf50",
          "#66bb6a",
          "#43a047",
          "#5cb860",
          "#dff0d8",
          "#d0e9c6",
          "#a5d6a7",
          "#66bb6a",
        ],
        v = [
          "#00acc1",
          "#26c6da",
          "#00acc1",
          "#00d3ee",
          "#d9edf7",
          "#c4e3f3",
          "#b2ebf2",
          "#4dd0e1",
        ],
        A = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"],
        C = [
          "#999",
          "#3C4858",
          "#eee",
          "#343434",
          "#585858",
          "#232323",
          "#ddd",
          "#6c757d",
          "#333",
          "#212121",
          "#777",
          "#D2D2D2",
          "#AAA",
          "#495057",
          "#e5e5e5",
          "#555",
          "#f9f9f9",
          "#ccc",
          "#444",
          "#f2f2f2",
          "#89229b",
          "#c0c1c2",
          "#9a9a9a",
          "#f5f5f5",
          "#505050",
          "#1f1f1f",
        ],
        F = Object(m.a)(
          Object(m.a)(
            {},
            {
              paddingRight: "15px",
              paddingLeft: "15px",
              marginRight: "auto",
              marginLeft: "auto",
              width: "100%",
            }
          ),
          {},
          {
            "@media (min-width: 576px)": { maxWidth: "540px" },
            "@media (min-width: 768px)": { maxWidth: "720px" },
            "@media (min-width: 992px)": { maxWidth: "960px" },
            "@media (min-width: 1200px)": { maxWidth: "1140px" },
          }
        ),
        E =
          (x("#000"),
          x("#000"),
          x("#000"),
          x("#000"),
          x("#000"),
          {
            boxShadow:
              "0 12px 20px -10px rgba(" +
              x(b[0]) +
              ", 0.28), 0 4px 20px 0px rgba(" +
              x("#000") +
              ", 0.12), 0 7px 8px -5px rgba(" +
              x(b[0]) +
              ", 0.2)",
          }),
        k = {
          boxShadow:
            "0 12px 20px -10px rgba(" +
            x(v[0]) +
            ", 0.28), 0 4px 20px 0px rgba(" +
            x("#000") +
            ", 0.12), 0 7px 8px -5px rgba(" +
            x(v[0]) +
            ", 0.2)",
        },
        O = {
          boxShadow:
            "0 12px 20px -10px rgba(" +
            x(w[0]) +
            ", 0.28), 0 4px 20px 0px rgba(" +
            x("#000") +
            ", 0.12), 0 7px 8px -5px rgba(" +
            x(w[0]) +
            ", 0.2)",
        },
        S = {
          boxShadow:
            "0 12px 20px -10px rgba(" +
            x(u[0]) +
            ", 0.28), 0 4px 20px 0px rgba(" +
            x("#000") +
            ", 0.12), 0 7px 8px -5px rgba(" +
            x(u[0]) +
            ", 0.2)",
        },
        R = {
          boxShadow:
            "0 12px 20px -10px rgba(" +
            x(f[0]) +
            ", 0.28), 0 4px 20px 0px rgba(" +
            x("#000") +
            ", 0.12), 0 7px 8px -5px rgba(" +
            x(f[0]) +
            ", 0.2)",
        },
        I = {
          boxShadow:
            "0 4px 20px 0px rgba(" +
            x("#000") +
            ", 0.14), 0 7px 10px -5px rgba(" +
            x(A[0]) +
            ", 0.4)",
        },
        j = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + u[1] + ", " + u[2] + ")",
          },
          S
        ),
        y = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + w[1] + ", " + w[2] + ")",
          },
          O
        ),
        N = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + f[1] + ", " + f[2] + ")",
          },
          R
        ),
        B = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + v[1] + ", " + v[2] + ")",
          },
          k
        ),
        M = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + b[1] + ", " + b[2] + ")",
          },
          E
        ),
        T = Object(m.a)(
          {
            color: "#FFF",
            background: "linear-gradient(60deg, " + A[1] + ", " + A[2] + ")",
          },
          I
        ),
        z =
          (Object(m.a)(
            {
              margin: "0 20px 10px",
              paddingTop: "10px",
              borderTop: "1px solid  " + C[2],
              height: "auto",
            },
            {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: "300",
              lineHeight: "1.5em",
            }
          ),
          x("#000"),
          x("#000"),
          x("#000"),
          {
            color: C[1],
            textDecoration: "none",
            fontWeight: "700",
            marginTop: "30px",
            marginBottom: "25px",
            minHeight: "32px",
            fontFamily: '"Roboto Slab", "Times New Roman", serif',
          }),
        D = {
          "&, & a": Object(m.a)(
            Object(m.a)({}, z),
            {},
            { marginTop: ".625rem", marginBottom: "0.75rem", minHeight: "auto" }
          ),
        },
        L = { background: "#FFF", position: "relative", zIndex: "3" },
        W = {
          "@media (max-width: 576px)": { marginTop: "-30px" },
          "@media (max-width: 830px)": {
            marginLeft: "10px",
            marginRight: "10px",
          },
          margin: "-60px 30px 0px",
          borderRadius: "6px",
          boxShadow:
            "0 16px 24px 2px rgba(" +
            x("#000") +
            ", 0.14), 0 6px 30px 5px rgba(" +
            x("#000") +
            ", 0.12), 0 8px 10px -5px rgba(" +
            x("#000") +
            ", 0.2)",
        },
        H = {
          backgroundColor: "transparent",
          boxShdow: "none",
          marginTop: "5px",
          marginBottom: "5px",
        },
        P = {
          left: { float: "left!important", display: "block" },
          right: { padding: "15px 0", margin: "0", float: "right" },
          rightLinks: {
            float: "right!important",
            "& ul": {
              marginBottom: 0,
              marginTop: 10,
              padding: 0,
              listStyle: "none",
              height: 38,
              "& li": { display: "inline-block" },
            },
            "& i": { fontSize: "20px" },
          },
          footer: {
            padding: "0.9375rem 0",
            textAlign: "center",
            display: "flex",
            zIndex: "2",
            position: "relative",
            "& ul": { marginBottom: "0", padding: 0, listStyle: "none" },
          },
          big: {
            padding: "1.875rem 0",
            "& h5, & h4": {
              fontWeight: 700,
              fontFamily: "Roboto Slab,Times New Roman,serif",
              marginBottom: "15px",
            },
            "& p": { color: C[0] },
          },
          content: { textAlign: "left" },
          a: {
            color: b[0],
            textDecoration: "none",
            backgroundColor: "transparent",
          },
          dark: {
            background:
              "radial-gradient(ellipse at center," +
              C[4] +
              " 0," +
              C[5] +
              " 100%)",
            backgroundSize: "550% 450%",
            color: "#FFF",
            "& p": { color: C[0] },
            "& i": { color: "#FFF" },
            "& a": {
              color: "#FFF",
              opacity: ".86",
              "&:visited": { color: "#FFF" },
              "&:focus, &:hover": { opacity: 1 },
            },
            "& hr": { borderColor: "rgba(" + x("#FFF") + ",0.2)" },
            "& $btnTwitter, & $btnDribbble, & $btnInstagram": { color: "#FFF" },
          },
          white: {
            backgroundColor: "#FFF",
            color: C[1],
            textDecoration: "none",
            "& a": {
              "&:visited": { color: C[1] },
              "&:hover, &:focus": { color: C[20] },
            },
          },
          container: F,
          list: { marginBottom: "0", padding: "0", marginTop: "0" },
          inlineBlock: {
            display: "inline-block",
            padding: "0px",
            width: "auto",
          },
          icon: {
            width: "18px",
            height: "18px",
            position: "relative",
            top: "3px",
          },
          iconSocial: {
            width: "41px",
            height: "41px",
            fontSize: "24px",
            minWidth: "41px",
            padding: 0,
            overflow: "hidden",
            position: "relative",
          },
          btnTwitter: Object(m.a)(Object(m.a)({}, H), {}, { color: "#55acee" }),
          btnDribbble: Object(m.a)(
            Object(m.a)({}, H),
            {},
            { color: "#ea4c89" }
          ),
          btnInstagram: Object(m.a)(
            Object(m.a)({}, H),
            {},
            { color: "#125688" }
          ),
          footerBrand: {
            height: "50px",
            padding: "15px 15px",
            fontSize: "18px",
            lineHeight: "50px",
            marginLeft: "-15px",
            color: C[1],
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: "Roboto Slab,Times New Roman,serif",
          },
          pullCenter: { display: "inline-block", float: "none" },
          clearFix: { clear: "both" },
        },
        K = Object(c.a)(P);
      function X(a) {
        var e,
          o = a.children,
          r = a.content,
          n = a.theme,
          i = a.big,
          c = a.className,
          l = K(),
          p = "transparent" !== n && void 0 != n,
          s = g()(
            ((e = {}),
            Object(d.a)(e, l.footer, !0),
            Object(d.a)(e, l[n], p),
            Object(d.a)(e, l.big, i || void 0 !== o),
            Object(d.a)(e, c, void 0 !== c),
            e)
          );
        g()(Object(d.a)({}, l.a, !0));
        return t.a.createElement(
          "footer",
          { className: s },
          t.a.createElement(
            "div",
            { className: l.container },
            void 0 !== o
              ? t.a.createElement(
                  "div",
                  null,
                  t.a.createElement("div", { className: l.content }, o),
                  t.a.createElement("hr", null)
                )
              : " ",
            r,
            t.a.createElement("div", { className: l.clearFix })
          )
        );
      }
      var U = o(10),
        Y = o(93),
        q = Object(c.a)({
          grid: { marginRight: "-15px", marginLeft: "-15px", width: "auto" },
        });
      function G(a) {
        var e = a.children,
          o = a.className,
          r = Object(U.a)(a, ["children", "className"]),
          n = q();
        return t.a.createElement(
          Y.a,
          Object.assign({ container: !0 }, r, { className: n.grid + " " + o }),
          e
        );
      }
      G.defaultProps = { className: "" };
      var V = Object(c.a)({
        grid: {
          position: "relative",
          width: "100%",
          minHeight: "1px",
          paddingRight: "15px",
          paddingLeft: "15px",
        },
      });
      function Q(a) {
        var e = a.children,
          o = a.className,
          r = Object(U.a)(a, ["children", "className"]),
          n = V();
        return t.a.createElement(
          Y.a,
          Object.assign({ item: !0 }, r, { className: n.grid + " " + o }),
          e
        );
      }
      Q.defaultProps = { className: "" };
      var J = o(28),
        Z = {
          parallax: {
            height: "100vh",
            maxHeight: "1600px",
            overflow: "hidden",
            position: "relative",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
            display: "flex",
            alignItems: "center",
          },
          filter: {},
          primaryColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(b[4]) +
                ",.56),rgba(" +
                x(b[5]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          roseColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(A[3]) +
                ",.56),rgba(" +
                x(A[4]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          darkColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          infoColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(v[6]) +
                ",.56),rgba(" +
                x(v[7]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          successColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(w[6]) +
                ",.56),rgba(" +
                x(w[7]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          warningColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(u[6]) +
                ",.56),rgba(" +
                x(u[7]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          dangerColor: {
            "&:before": { background: "rgba(" + x("#000") + ", 0.5)" },
            "&:after": {
              background:
                "linear-gradient(60deg,rgba(" +
                x(f[6]) +
                ",.56),rgba(" +
                x(f[7]) +
                ",.95))",
            },
            "&:after,&:before": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: "''",
            },
          },
          small: { height: "65vh", minHeight: "65vh", maxHeight: "650px" },
        },
        _ = Object(c.a)(Z);
      function $(a) {
        var e, o;
        o = window.innerWidth >= 768 ? window.pageYOffset / 3 : 0;
        var r = t.a.useState("translate3d(0," + o + "px,0)"),
          n = Object(J.a)(r, 2),
          i = n[0],
          c = n[1];
        t.a.useEffect(function () {
          return (
            window.innerWidth >= 768 && window.addEventListener("scroll", l),
            function () {
              window.innerWidth >= 768 &&
                window.removeEventListener("scroll", l);
            }
          );
        });
        var l = function () {
            var a = window.pageYOffset / 3;
            c("translate3d(0," + a + "px,0)");
          },
          p = a.filter,
          s = a.className,
          x = a.children,
          b = a.style,
          h = a.image,
          u = a.small,
          f = _(),
          w = g()(
            ((e = {}),
            Object(d.a)(e, f.parallax, !0),
            Object(d.a)(e, f[p + "Color"], void 0 !== p),
            Object(d.a)(e, f.small, u),
            Object(d.a)(e, s, void 0 !== s),
            e)
          );
        return t.a.createElement(
          "div",
          {
            className: w,
            style: Object(m.a)(
              Object(m.a)({}, b),
              {},
              { backgroundImage: "url(" + h + ")", transform: i }
            ),
          },
          x
        );
      }
      var aa = o(37),
        ea = o.n(aa),
        oa = o(94),
        ra = o(97),
        ta = function (a) {
          return {
            root: {
              marginTop: "20px",
              paddingLeft: "0",
              marginBottom: "0",
              overflow: "visible !important",
            },
            flexContainer: Object(d.a)({}, a.breakpoints.down("xs"), {
              display: "flex",
              flexWrap: "wrap",
            }),
            displayNone: { display: "none !important" },
            fixed: { overflow: "visible !important" },
            horizontalDisplay: { display: "block" },
            pills: {
              float: "left",
              position: "relative",
              display: "block",
              borderRadius: "30px",
              minWidth: "100px",
              textAlign: "center",
              transition: "all .3s",
              padding: "10px 15px",
              color: C[15],
              height: "auto",
              opacity: "1",
              maxWidth: "100%",
              margin: "0 5px",
              minHeight: "unset",
              lineHeight: "24px",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "500",
            },
            pillsWithIcons: { borderRadius: "4px" },
            tabIcon: {
              width: "30px",
              height: "30px",
              display: "block",
              margin: "15px 0 !important",
            },
            horizontalPills: {
              width: "100%",
              float: "none !important",
              "& + button": { margin: "10px 0" },
            },
            contentWrapper: {
              marginTop: "20px",
              "& .react-swipeable-view-container > div > div": {
                paddingLeft: "15px",
                paddingRight: "15px",
              },
            },
            primary: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: b[0],
                boxShadow:
                  "0 4px 20px 0px rgba(" +
                  x("#000") +
                  ", 0.14), 0 7px 10px -5px rgba(" +
                  x(b[0]) +
                  ", 0.4)",
              },
            },
            info: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: v[0],
                boxShadow:
                  "0 4px 20px 0px rgba(" +
                  x("#000") +
                  ", 0.14), 0 7px 10px -5px rgba(" +
                  x(w[0]) +
                  ", 0.4)",
              },
            },
            success: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: w[0],
                boxShadow:
                  "0 2px 2px 0 rgba(" +
                  x(w[0]) +
                  ", 0.14), 0 3px 1px -2px rgba(" +
                  x(w[0]) +
                  ", 0.2), 0 1px 5px 0 rgba(" +
                  x(w[0]) +
                  ", 0.12)",
              },
            },
            warning: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: u[0],
                boxShadow:
                  "0 4px 20px 0px rgba(" +
                  x("#000") +
                  ", 0.14), 0 7px 10px -5px rgba(" +
                  x(u[0]) +
                  ", 0.4)",
              },
            },
            danger: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: f[0],
                boxShadow:
                  "0 4px 20px 0px rgba(" +
                  x("#000") +
                  ", 0.14), 0 7px 10px -5px rgba(" +
                  x(u[0]) +
                  ", 0.4)",
              },
            },
            rose: {
              "&,&:hover": {
                color: "#FFF",
                backgroundColor: A[0],
                boxShadow:
                  "0 4px 20px 0px rgba(" +
                  x("#000") +
                  ", 0.14), 0 7px 10px -5px rgba(" +
                  x(A[0]) +
                  ", 0.4)",
              },
            },
            alignCenter: { alignItems: "center", justifyContent: "center" },
            tabLabelContainer: { padding: "unset !important" },
          };
        },
        na = Object(c.a)(ta);
      function ia(a) {
        var e,
          o = t.a.useState(a.active),
          r = Object(J.a)(o, 2),
          n = r[0],
          i = r[1],
          c = a.tabs,
          l = a.direction,
          p = a.color,
          s = a.horizontal,
          m = a.alignCenter,
          x = na(),
          b = g()(
            ((e = {}),
            Object(d.a)(e, x.flexContainer, !0),
            Object(d.a)(e, x.horizontalDisplay, void 0 !== s),
            e)
          ),
          h = t.a.createElement(
            ra.a,
            {
              classes: {
                root: x.root,
                fixed: x.fixed,
                flexContainer: b,
                indicator: x.displayNone,
              },
              value: n,
              onChange: function (a, e) {
                i(e);
              },
              centered: m,
            },
            c.map(function (a, e) {
              var o,
                r = {};
              void 0 !== a.tabIcon &&
                (r.icon = t.a.createElement(a.tabIcon, {
                  className: x.tabIcon,
                }));
              var n = g()(
                ((o = {}),
                Object(d.a)(o, x.pills, !0),
                Object(d.a)(o, x.horizontalPills, void 0 !== s),
                Object(d.a)(o, x.pillsWithIcons, void 0 !== a.tabIcon),
                o)
              );
              return t.a.createElement(
                oa.a,
                Object.assign({ label: a.tabButton, key: e }, r, {
                  classes: { root: n, label: x.label, selected: x[p] },
                })
              );
            })
          ),
          u = t.a.createElement(
            "div",
            { className: x.contentWrapper },
            t.a.createElement(
              ea.a,
              {
                axis: "rtl" === l ? "x-reverse" : "x",
                index: n,
                onChangeIndex: function (a) {
                  i(a);
                },
              },
              c.map(function (a, e) {
                return t.a.createElement(
                  "div",
                  { className: x.tabContent, key: e },
                  a.tabContent
                );
              })
            )
          );
        return void 0 !== s
          ? t.a.createElement(
              G,
              null,
              t.a.createElement(Q, s.tabsGrid, h),
              t.a.createElement(Q, s.contentGrid, u)
            )
          : t.a.createElement("div", null, h, u);
      }
      ia.defaultProps = { active: 0, color: "primary" };
      var ca = {
          MICHROMA: {
            name: "MICHROMA",
            url: "https://michroma.co/",
            color: "rose",
          },
          FEEDVAX: {
            name: "FEEDVAX",
            url: "https://www.feedvax.com/",
            color: "warning",
          },
          MICROGENESIS: {
            name: "MICROG\xc9NESIS",
            url: null,
            color: "success",
          },
          TOMORROW_FOODS: {
            name: "TOMORROW FOODS",
            url: "https://tomorrowfoods.com.ar/",
            color: "info",
          },
          GRIDX: {
            name: "GRIDX",
            url: "https://gridexponential.com/",
            color: "rose",
          },
          STAMM: {
            name: "ST\xc4MM",
            url: "http://www.stamm.bio/",
            color: "warning",
          },
          BEEFLOW: {
            name: "BEEFLOW",
            url: "https://www.beeflow.com/",
            color: "success",
          },
          BITGENIA: {
            name: "BITGENIA",
            url: "https://www.bitgenia.com/",
            color: "info",
          },
          ALYTIX: {
            name: "ALYTIX",
            url: "http://alytixbiotech.com/",
            color: "rose",
          },
          APLIFE: {
            name: "APLIFE",
            url: "https://www.aplifebiotech.com/",
            color: "warning",
          },
          ZEV_BIOTECH: {
            name: "ZEV BIOTECH",
            url: "http://zevbiotech.com/",
            color: "success",
          },
          CASPR: { name: "CASPR", url: "https://caspr.bio/", color: "info" },
          ALGAEBIO: {
            name: "ALGAEBIO+",
            url: "http://algaebiomas.com/",
            color: "rose",
          },
          CELL_FARM: {
            name: "CELL FARM",
            url: "https://cellfarmfoodtech.com/",
            color: "warning",
          },
          MZP: { name: "MZP", url: "http://www.mzptec.com/", color: "success" },
          FECUNDIS: {
            name: "FECUNDIS",
            url: "https://www.terrafecundis.com/",
            color: "info",
          },
          SYOCIN: { name: "SYOCIN", url: "http://syocin.com/", color: "rose" },
          HIAMET: {
            name: "HIAMET",
            url: "https://www.hiamet.com/",
            color: "warning",
          },
          EINSTED: { name: "EINSTED", url: null, color: "success" },
          CRYOSMETICS: {
            name: "CRYOSMETICS",
            url: "https://www.cryosmetics.com/",
            color: "info",
          },
          ENTERIA: { name: "ENTERIA", url: null, color: "rose" },
        },
        la = {
          bioemprendiendo: {
            name: "bioemprendiendo",
            image:
              "https://pbs.twimg.com/profile_images/1191401273616039937/1WxJPgVA.jpg",
          },
          innovacion: {
            name: "WOW Innovaci\xf3n - Telef\xe9",
            image:
              "data:image/png;base64,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",
          },
          salmon: {
            name: "Salmon Expert",
            image:
              "https://d178ivhysawugh.cloudfront.net/media/l/920x561/1519467146/logo-sv-web.jpg",
          },
          radioAndina: {
            name: "Radio Andina",
            image:
              "data:image/png;base64,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",
          },
          uniCuyo: {
            name: "UC Cuyo",
            image: "https://www.uccuyo.edu.ar/images/fixed/san-juan.png",
          },
          laNacion: {
            name: "La Naci\xf3n",
            image:
              "https://media-exp1.licdn.com/dms/image/C4E0BAQF65eofEn7W_A/company-logo_200_200/0?e=2159024400&v=beta&t=Kz1n3spP2gTA6KdeIhp3PkUCRXJ-WRz1xGT-nMX2GYM",
          },
          clarin: {
            name: "Clar\xedn",
            image:
              "https://www.clarin.com/static/CLAClarin/images/Clarin-sahreing-fbk.jpg",
          },
          medium: {
            name: "Medium",
            image:
              "https://cdn-images-1.medium.com/max/1200/1*6_fgYnisCa9V21mymySIvA.png",
          },
          foodNavigator: {
            name: "Food Navigator",
            image:
              "https://pbs.twimg.com/profile_images/997052533037248512/f8Bss2mO.jpg",
          },
          synbiobeta: {
            name: "Synbiobeta",
            image:
              "https://media-exp1.licdn.com/dms/image/C4E0BAQHvlTY4wW_ADA/company-logo_200_200/0?e=2159024400&v=beta&t=PDH9FAcLPsgimBSADhdQqdvgWvq63f31gOD68gty4b0",
          },
          pymes: {
            name: "Revista Pymes",
            image:
              "data:image/png;base64,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",
          },
          theSpoon: {
            name: "The Spoon",
            image:
              "https://i2.wp.com/thespoon.tech/wp-content/uploads/2019/11/TheSpoon_tech.png?fit=1024%2C1024&ssl=1",
          },
          contxto: {
            name: "Contxto",
            image:
              "https://www.contxto.com/wp-content/uploads/2019/04/272X90-03.png",
          },
          bcr: {
            name: "BCR News",
            image:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQEJ29VAUiLTHQ/company-logo_200_200/0?e=2159024400&v=beta&t=YPIgznzm6kcjqDyEugPGFBgSjrpkoUZoY45ToTVlSfM",
          },
          aperturaNegocios: {
            name: "Apertura Negocios",
            image:
              "https://www.cronista.com/arte/v2/verticales/ap_negocios_header.svg",
          },
          agrofy: {
            name: "Agrefy News",
            image:
              "https://pbs.twimg.com/profile_images/1235569225588240384/Q8T_y6zA_400x400.jpg",
          },
          argentina: {
            name: "Argentina.gob.ar",
            image:
              "https://media-exp1.licdn.com/dms/image/C4E0BAQFqOs_7VD1XOg/company-logo_200_200/0?e=2159024400&v=beta&t=zPzO5a4DgKNk8QCANnCir2_IvbVHM7RLdeskbng1gxU",
          },
        },
        pa = [
          {
            id: 1,
            people: ["Ricardo Cassini", "Mauricio Braia"],
            startups: [ca.MICHROMA],
            media: la.bioemprendiendo,
            author: "Hector Garza Avelar",
            name:
              "Emprende para innovar, emprende con ganas con Ricky Cassini y Mauricio Braia de Michroma",
            date: new Date("06/07/2020"),
            link:
              "https://anchor.fm/bioemprendiendo/episodes/025---Emprende-para-innovar--emprende-con-ganas-con-Ricky-Cassini-y-Mauricio-Braia-de-Michroma-eel192/a-a2ah0pq",
            lang: "spanish",
          },
          {
            id: 2,
            people: ["Ricardo Cassini", "Mauricio Braia"],
            startups: [ca.MICHROMA],
            media: la.innovacion,
            author: "Antonela Losada",
            name: "Michroma | Wow Innovaci\xf3n - Micro 102",
            date: new Date("05/14/2020"),
            link: "https://www.youtube.com/watch?v=dZRQ4CNvgPw",
            isVideo: !0,
            lang: "spanish",
          },
          {
            id: 3,
            people: ["Ricardo Cassini", "Mauricio Braia"],
            startups: [ca.MICHROMA],
            media: la.salmon,
            author: "Daniella Balin",
            name:
              "Desarrollan colorante natural que podr\xe1 ser incluido en dietas de salm\xf3nidos",
            date: new Date("05/05/2020"),
            link:
              "https://www.salmonexpert.cl/article/desarrollan-colorante-natural-en-base-a-hongos-para-ser-incluido-en-dietas-de-salmnidos/",
            lang: "spanish",
          },
          {
            id: 4,
            people: ["Ricardo Cassini"],
            startups: [ca.MICHROMA],
            media: la.radioAndina,
            author: null,
            name: "Todo por la Tarde - Ricky Cassini - Michroma",
            date: new Date("04/16/2020"),
            link:
              "https://soundcloud.com/mediosandinosmza/todo-por-la-tarde-ricky-cassini-michroma-16-04-20",
            lang: "spanish",
          },
          {
            id: 5,
            people: ["Ricardo Cassini"],
            startups: [ca.MICHROMA],
            media: la.uniCuyo,
            author: "Leandro Fr\xedas",
            name:
              "Webinar: Impulsan el emprendedurismo y la investigaci\xf3n en la UCCuyo con un encuentro virtual",
            date: new Date("03/31/2020"),
            link:
              "http://www.uccuyosj.edu.ar/index.php/la-universidad/institucional/noticias/1305-webinar-impulsan-el-emprendedurismo-y-la-investigacion-en-la-uccuyo-con-un-encuentro-virtual",
            lang: "spanish",
          },
          {
            id: 6,
            people: [
              "Luis Barletta",
              "Ricardo Cassini",
              "Gabriela Guti\xe9rrez",
            ],
            startups: [ca.FEEDVAX, ca.MICHROMA, ca.MICROGENESIS],
            media: la.laNacion,
            author: "Jes\xfas Allende",
            name:
              "Del laboratorio a la empresa: los cient\xedficos se ponen el traje de emprendedores",
            date: new Date("02/22/2020"),
            link:
              "https://www.lanacion.com.ar/economia/del-laboratorio-a-la-empresa-los-cientificos-se-ponen-el-traje-de-emprendedores-nid2335674",
            lang: "spanish",
          },
          {
            id: 7,
            people: ["Gonzalo Segovia", "Ricardo Cassini"],
            startups: [ca.MICHROMA, ca.TOMORROW_FOODS],
            media: la.clarin,
            author: "Hern\xe1n Mur\xfaa",
            name:
              "5 startups que 'levantaron' US$ 2 millones antes de facturar un solo centavo",
            date: new Date("02/20/2020"),
            link:
              "https://www.clarin.com/economia/5-startups-levantaron-us-2-millones-facturar-solo-centavo_0_EsWhJ4or.html",
            lang: "spanish",
          },
          {
            id: 8,
            people: ["Ricardo Cassini"],
            startups: [ca.MICHROMA],
            media: la.medium,
            author: "Po Bronson",
            name: "Michroma: Reinventing Food Colors",
            date: new Date("02/11/2020"),
            link:
              "https://medium.com/indiebio-sf/michroma-reinventing-food-colors-3cc5ee99f92f",
            lang: "english",
          },
          {
            id: 9,
            people: ["Ricardo Cassini"],
            startups: [ca.MICHROMA],
            media: la.foodNavigator,
            author: "Niamh Michail",
            name:
              "Argentinian startup develops 'novel compounds' food colors from fungi",
            date: new Date("02/06/2020"),
            link:
              "https://www.foodnavigator-latam.com/Article/2020/02/06/Novel-and-natural-food-coloring-developed-from-fungi-by-Silicon-Valley-start-up",
            lang: "english",
          },
          {
            id: 10,
            people: null,
            startups: [ca.MICHROMA],
            media: la.synbiobeta,
            author: "Desiree Ho",
            name:
              "IndieBio\u2019s Class Nine: Archetypes of Engineering Biology",
            date: new Date("02/06/2020"),
            link:
              "https://synbiobeta.com/indiebios-class-nine-archetypes-of-engineering-biology/",
            lang: "english",
          },
          {
            id: 11,
            people: [
              "Agust\xedn Belloso",
              "Ricardo Cassini",
              "Mat\xedas Peire",
            ],
            startups: [ca.MICHROMA, ca.TOMORROW_FOODS, ca.GRIDX],
            media: la.pymes,
            author: "Hern\xe1n Mur\xfaa",
            name: "Startups de las que se va a hablar en el 2020",
            date: new Date("02/01/2020"),
            link:
              "https://drive.google.com/open?id=1kG3zGM9alWWLIuqx0GxkRCPdP1xB9qwC",
            lang: "spanish",
          },
          {
            id: 12,
            people: ["Ricardo Cassini"],
            startups: [ca.MICHROMA],
            media: la.theSpoon,
            author: "Catherine Lamb",
            name:
              "Dye Another Day: Michroma Makes Sustainable Food Coloring through Fungi Fermentation",
            date: new Date("01/23/2020"),
            link:
              "https://thespoon.tech/dye-another-day-michroma-makes-sustainable-food-coloring-through-funghi-fermentation/",
            lang: "english",
          },
          {
            id: 13,
            people: null,
            startups: [
              ca.GRIDX,
              ca.STAMM,
              ca.BEEFLOW,
              ca.BITGENIA,
              ca.ALYTIX,
              ca.APLIFE,
              ca.ZEV_BIOTECH,
              ca.CASPR,
              ca.ALGAEBIO,
              ca.FEEDVAX,
              ca.CELL_FARM,
              ca.MZP,
              ca.MICHROMA,
              ca.TOMORROW_FOODS,
            ],
            media: la.contxto,
            author: "Mariana L\xf3pez",
            name: "14 biotechs rewriting Argentina\u2019s startup DNA",
            date: new Date("01/15/2020"),
            link:
              "https://www.contxto.com/en/argentina/14-biotechs-rewriting-argentinas-startup-dna/",
            lang: "english",
          },
          {
            id: 14,
            people: null,
            startups: [
              ca.GRIDX,
              ca.STAMM,
              ca.BEEFLOW,
              ca.BITGENIA,
              ca.ALYTIX,
              ca.APLIFE,
              ca.ZEV_BIOTECH,
              ca.CASPR,
              ca.ALGAEBIO,
              ca.FEEDVAX,
              ca.CELL_FARM,
              ca.MZP,
              ca.MICHROMA,
              ca.TOMORROW_FOODS,
            ],
            media: la.contxto,
            author: "Mariana L\xf3pez",
            name: "14 biotechs rewriting Argentina\u2019s startup DNA",
            date: new Date("01/15/2020"),
            link:
              "https://www.contxto.com/en/argentina/14-biotechs-rewriting-argentinas-startup-dna/",
            lang: "english",
          },
          {
            id: 15,
            people: null,
            startups: [
              ca.GRIDX,
              ca.STAMM,
              ca.BEEFLOW,
              ca.BITGENIA,
              ca.ALYTIX,
              ca.APLIFE,
              ca.ZEV_BIOTECH,
              ca.CASPR,
              ca.ALGAEBIO,
              ca.FEEDVAX,
              ca.CELL_FARM,
              ca.MZP,
              ca.MICHROMA,
              ca.TOMORROW_FOODS,
            ],
            media: la.contxto,
            author: "Mariana L\xf3pez",
            name: "14 biotechs reescribiendo el ADN de startups argentinas",
            date: new Date("01/15/2020"),
            link:
              "https://www.contxto.com/es/startups-es/14-biotechs-reescribiendo-adn-startups-argentino/",
            lang: "spanish",
          },
          {
            id: 16,
            people: ["Mat\xedas Peire"],
            startups: [ca.GRIDX, ca.MICHROMA, ca.FECUNDIS, ca.SYOCIN],
            media: la.bcr,
            author: null,
            name:
              "Llega un nuevo Workshop para emprendedores a la Bolsa de Comercio de Rosario",
            date: new Date("10/28/2019"),
            link:
              "https://bcrnews.com.ar/innovacion/llega-un-nuevo-workshop-para-emprendedores-a-la-bolsa-de-comercio-de-rosario/",
            lang: "spanish",
          },
          {
            id: 17,
            people: ["Arvind Gupta"],
            startups: [ca.GRIDX, ca.STAMM, ca.BEEFLOW, ca.CASPR, ca.MICHROMA],
            media: la.aperturaNegocios,
            author: "Ricardo Quesada",
            name:
              "El mayor fondo de biotecnolog\xeda del mundo, a la caza de unicornios argentinos",
            date: new Date("10/07/2019"),
            link:
              "https://www.cronista.com/apertura-negocio/emprendedores/El-mayor-fondo-de-biotecnologia-del-mundo-a-la-caza-de-unicornios-argentinos-20191007-0007.html",
            lang: "spanish",
          },
          {
            id: 18,
            people: ["Mat\xedas Peire"],
            startups: [
              ca.GRIDX,
              ca.STAMM,
              ca.BEEFLOW,
              ca.BITGENIA,
              ca.ALYTIX,
              ca.ZEV_BIOTECH,
              ca.CASPR,
              ca.ALGAEBIO,
              ca.FEEDVAX,
              ca.CELL_FARM,
              ca.MZP,
              ca.MICHROMA,
              ca.TOMORROW_FOODS,
              ca.HIAMET,
            ],
            media: la.agrofy,
            author: "Nicol\xe1s Degano",
            name:
              "Biotecnolog\xeda: proyectos argentinos que pueden cambiar la forma de producir",
            date: new Date("10/01/2019"),
            link:
              "https://news.agrofy.com.ar/noticia/183317/biotecnologia-proyectos-argentinos-que-pueden-cambiar-forma-producir",
            lang: "spanish",
          },
          {
            id: 19,
            people: null,
            startups: [
              ca.GRIDX,
              ca.MICHROMA,
              ca.TOMORROW_FOODS,
              ca.SYOCIN,
              ca.EINSTED,
              ca.MICROGENESIS,
              ca.CRYOSMETICS,
              ca.FECUNDIS,
              ca.ENTERIA,
              ca.HIAMET,
            ],
            media: la.argentina,
            author: null,
            name:
              "Proyectos de base biotecnol\xf3gica de impacto global en el planetario",
            date: new Date("06/14/2019"),
            link: "https://www.argentina.gob.ar/ciencia/reuniones/planetario",
            lang: "spanish",
          },
          {
            id: 20,
            people: null,
            startups: [ca.MICHROMA],
            media: la.argentina,
            author: null,
            name:
              "Quince nuevos ganadores del Concurso Nacional PROESUS para emprendimientos sustentables",
            date: new Date("06/14/2019"),
            link:
              "https://www.argentina.gob.ar/noticias/quince-nuevos-ganadores-del-concurso-nacional-proesus-para-emprendimientos-sustentables",
            lang: "spanish",
          },
        ],
        da = {
          tooltip: {
            padding: "10px 15px",
            minWidth: "130px",
            color: "#FFF",
            lineHeight: "1.7em",
            background: "rgba(" + x(C[15]) + ",0.9)",
            border: "none",
            borderRadius: "3px",
            boxShadow:
              "0 8px 10px 1px rgba(" +
              x("#000") +
              ", 0.14), 0 3px 14px 2px rgba(" +
              x("#000") +
              ", 0.12), 0 5px 5px -3px rgba(" +
              x("#000") +
              ", 0.2)",
            maxWidth: "200px",
            textAlign: "center",
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: "0.875em",
            fontStyle: "normal",
            fontWeight: "400",
            textShadow: "none",
            textTransform: "none",
            letterSpacing: "normal",
            wordBreak: "normal",
            wordSpacing: "normal",
            wordWrap: "normal",
            whiteSpace: "normal",
            lineBreak: "auto",
          },
        },
        sa = Object(m.a)(
          Object(m.a)({}, da),
          {},
          {
            section: {
              backgroundPosition: "50%",
              backgroundSize: "cover",
              padding: "70px 0",
            },
            textCenter: { textAlign: "center" },
            category: {
              color: "rgba(" + x("#FFF") + ", 0.7) !important",
              marginTop: "10px",
            },
            cardTitle: Object(m.a)(
              Object(m.a)({}, D),
              {},
              { color: "#FFF  !important" }
            ),
            icons: {
              width: "1.1rem",
              height: "1.1rem",
              position: "relative",
              display: "inline-block",
              top: "0",
              marginTop: "-1em",
              marginBottom: "-1em",
              marginRight: "4px",
              verticalAlign: "middle",
            },
            tabSpace: { padding: "20px 0 50px" },
            maxWidthImage: { width: "70px !important" },
            textMuted: { color: C[7] + " !important" },
            middleAlign: {
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            },
          }
        ),
        ga = {
          card: {
            border: "0",
            marginBottom: "30px",
            marginTop: "30px",
            borderRadius: "6px",
            color: "rgba(" + x("#000") + ", 0.87)",
            background: "#FFF",
            width: "100%",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#000") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#000") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#000") +
              ", 0.12)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            minWidth: "0",
            wordWrap: "break-word",
            fontSize: ".875rem",
            "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
              display: "inline-block !important",
            },
          },
          cardPlain: { background: "transparent", boxShadow: "none" },
          cardProfile: { marginTop: "30px", textAlign: "center" },
          cardBlog: { marginTop: "60px" },
          cardRaised: {
            boxShadow:
              "0 16px 38px -12px rgba(" +
              x("#000") +
              ", 0.56), 0 4px 25px 0px rgba(" +
              x("#000") +
              ", 0.12), 0 8px 10px -5px rgba(" +
              x("#000") +
              ", 0.2)",
          },
          cardBackground: {
            backgroundPosition: "50%",
            backgroundSize: "cover",
            textAlign: "center",
            color: "#FFF",
            "& h3": { color: "#FFF !important" },
            "& p": { color: "rgba(" + x("#FFF") + ",0.7)!important" },
            "&:after": {
              position: "absolute",
              zIndex: "1",
              width: "100%",
              height: "100%",
              display: "block",
              left: "0",
              top: "0",
              content: '""',
              backgroundColor: "rgba(" + x("#000") + ", 0.56)",
              borderRadius: "6px",
            },
            "& small": { color: "rgba(" + x("#FFF") + ", 0.7) !important" },
          },
          cardPricing: {
            textAlign: "center",
            "&:after": {
              backgroundColor: "rgba(" + x("#000") + ", 0.7) !important",
            },
            "& ul": {
              listStyle: "none",
              padding: 0,
              maxWidth: "240px",
              margin: "10px auto",
            },
            "& ul li": {
              color: C[0],
              textAlign: "center",
              padding: "12px 0px",
              borderBottom: "1px solid rgba(" + x(C[0]) + ",0.3)",
            },
            "& ul li:last-child": { border: 0 },
            "& ul li b": { color: C[1] },
            "& h1": { marginTop: "30px" },
            "& h1 small": {
              display: "inline-flex",
              height: 0,
              fontSize: "18px",
            },
            "& h1 small:first-child": {
              position: "relative",
              top: "-17px",
              fontSize: "26px",
            },
            "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
              position: "relative",
              top: "7px",
            },
          },
          cardPricingColor: {
            "& ul li": {
              color: "#FFF",
              borderColor: "rgba(" + x("#FFF") + ",0.3)",
              "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
                color: "#FFF",
                fontWeight: "700",
              },
            },
          },
          cardProduct: { marginTop: "30px" },
          primary: {
            background: "linear-gradient(60deg," + b[1] + ", " + b[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
          info: {
            background: "linear-gradient(60deg," + v[1] + "," + v[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
          success: {
            background: "linear-gradient(60deg," + w[1] + "," + w[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
          warning: {
            background: "linear-gradient(60deg," + u[1] + "," + u[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
          danger: {
            background: "linear-gradient(60deg," + f[1] + "," + f[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
          rose: {
            background: "linear-gradient(60deg," + A[1] + "," + A[2] + ")",
            "& h1 small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            color: "#FFF",
          },
        },
        ma = Object(c.a)(ga);
      function xa(a) {
        var e,
          o = a.className,
          r = a.children,
          n = a.plain,
          i = a.profile,
          c = a.blog,
          l = a.raised,
          p = a.background,
          s = a.pricing,
          m = a.color,
          x = a.product,
          b = a.testimonial,
          h = Object(U.a)(a, [
            "className",
            "children",
            "plain",
            "profile",
            "blog",
            "raised",
            "background",
            "pricing",
            "color",
            "product",
            "testimonial",
          ]),
          u = ma(),
          f = g()(
            ((e = {}),
            Object(d.a)(e, u.card, !0),
            Object(d.a)(e, u.cardPlain, n),
            Object(d.a)(e, u.cardProfile, i || b),
            Object(d.a)(e, u.cardBlog, c),
            Object(d.a)(e, u.cardRaised, l),
            Object(d.a)(e, u.cardBackground, p),
            Object(d.a)(
              e,
              u.cardPricingColor,
              (s && void 0 !== m) || (s && void 0 !== p)
            ),
            Object(d.a)(e, u[m], m),
            Object(d.a)(e, u.cardPricing, s),
            Object(d.a)(e, u.cardProduct, x),
            Object(d.a)(e, o, void 0 !== o),
            e)
          );
        return t.a.createElement("div", Object.assign({ className: f }, h), r);
      }
      var ba = {
          cardHeader: {
            borderRadius: "3px",
            padding: "1rem 15px",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "-30px",
            border: "0",
            marginBottom: "0",
          },
          cardHeaderPlain: {
            marginLeft: "0px",
            marginRight: "0px",
            "&$cardHeaderImage": { margin: "0 !important" },
          },
          cardHeaderImage: {
            position: "relative",
            padding: "0",
            zIndex: "1",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "-30px",
            borderRadius: "6px",
            "& img": {
              width: "100%",
              borderRadius: "6px",
              pointerEvents: "none",
              boxShadow:
                "0 5px 15px -8px rgba(" +
                x("#000") +
                ", 0.24), 0 8px 10px -5px rgba(" +
                x("#000") +
                ", 0.2)",
            },
            "& a": { display: "block" },
          },
          noShadow: { "& img": { boxShadow: "none !important" } },
          cardHeaderContact: { margin: "0 15px", marginTop: "-20px" },
          cardHeaderSignup: {
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "-40px",
            padding: "20px 0",
            width: "100%",
            marginBottom: "15px",
          },
          warningCardHeader: j,
          successCardHeader: y,
          dangerCardHeader: N,
          infoCardHeader: B,
          primaryCardHeader: M,
          roseCardHeader: T,
        },
        ha = Object(c.a)(ba);
      function ua(a) {
        var e,
          o = a.className,
          r = a.children,
          n = a.color,
          i = a.plain,
          c = a.image,
          l = a.contact,
          p = a.signup,
          s = a.noShadow,
          m = Object(U.a)(a, [
            "className",
            "children",
            "color",
            "plain",
            "image",
            "contact",
            "signup",
            "noShadow",
          ]),
          x = ha(),
          b = g()(
            ((e = {}),
            Object(d.a)(e, x.cardHeader, !0),
            Object(d.a)(e, x[n + "CardHeader"], n),
            Object(d.a)(e, x.cardHeaderPlain, i),
            Object(d.a)(e, x.cardHeaderImage, c),
            Object(d.a)(e, x.cardHeaderContact, l),
            Object(d.a)(e, x.cardHeaderSignup, p),
            Object(d.a)(e, x.noShadow, s),
            Object(d.a)(e, o, void 0 !== o),
            e)
          );
        return t.a.createElement("div", Object.assign({ className: b }, m), r);
      }
      var fa = {
          cardBody: {
            padding: "0.9375rem 1.875rem",
            flex: "1 1 auto",
            WebkitBoxFlex: "1",
          },
          cardBodyBackground: {
            position: "relative",
            zIndex: "2",
            minHeight: "280px",
            paddingTop: "40px",
            paddingBottom: "40px",
            maxWidth: "440px",
            margin: "0 auto",
          },
          cardBodyPlain: { paddingLeft: "5px", paddingRight: "5px" },
          cardBodyFormHorizontal: {
            paddingLeft: "15px",
            paddingRight: "15px",
            "& form": { margin: "0" },
          },
          cardPricing: { padding: "15px!important", margin: "0px!important" },
          cardSignup: { padding: "0px 30px 0px 30px" },
          cardBodyColor: {
            borderRadius: "6px",
            "& h1,& h2,& h3": {
              "& small": { color: "rgba(" + x("#FFF") + ", 0.8)" },
            },
          },
        },
        wa = Object(c.a)(fa);
      function va(a) {
        var e,
          o = a.className,
          r = a.children,
          n = a.background,
          i = a.plain,
          c = a.formHorizontal,
          l = a.pricing,
          p = a.signup,
          s = a.color,
          m = Object(U.a)(a, [
            "className",
            "children",
            "background",
            "plain",
            "formHorizontal",
            "pricing",
            "signup",
            "color",
          ]),
          x = wa(),
          b = g()(
            ((e = {}),
            Object(d.a)(e, x.cardBody, !0),
            Object(d.a)(e, x.cardBodyBackground, n),
            Object(d.a)(e, x.cardBodyPlain, i),
            Object(d.a)(e, x.cardBodyFormHorizontal, c),
            Object(d.a)(e, x.cardPricing, l),
            Object(d.a)(e, x.cardSignup, p),
            Object(d.a)(e, x.cardBodyColor, s),
            Object(d.a)(e, o, void 0 !== o),
            e)
          );
        return t.a.createElement("div", Object.assign({ className: b }, m), r);
      }
      var Aa = {
          cardAvatar: {
            "&$cardAvatarProfile img,&$cardAvatarTestimonial img": {
              width: "100%",
              height: "auto",
            },
          },
          cardAvatarProfile: {
            maxWidth: "130px",
            maxHeight: "130px",
            margin: "-50px auto 0",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "0",
            boxShadow:
              "0 16px 38px -12px rgba(" +
              x("#000") +
              ", 0.56), 0 4px 25px 0px rgba(" +
              x("#000") +
              ", 0.12), 0 8px 10px -5px rgba(" +
              x("#000") +
              ", 0.2)",
            "&$cardAvatarPlain": { marginTop: "0" },
          },
          cardAvatarPlain: {},
          cardAvatarTestimonial: {
            margin: "-50px auto 0",
            maxWidth: "100px",
            maxHeight: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "0",
            boxShadow:
              "0 16px 38px -12px rgba(" +
              x("#000") +
              ", 0.56), 0 4px 25px 0px rgba(" +
              x("#000") +
              ", 0.12), 0 8px 10px -5px rgba(" +
              x("#000") +
              ", 0.2)",
            "&$cardAvatarPlain": { marginTop: "0" },
          },
          cardAvatarTestimonialFooter: {
            marginBottom: "-50px",
            marginTop: "10px",
          },
        },
        Ca = Object(c.a)(Aa);
      function Fa(a) {
        var e,
          o = a.children,
          r = a.className,
          n = a.plain,
          i = a.profile,
          c = a.testimonial,
          l = a.testimonialFooter,
          p = Object(U.a)(a, [
            "children",
            "className",
            "plain",
            "profile",
            "testimonial",
            "testimonialFooter",
          ]),
          s = Ca(),
          m = g()(
            ((e = {}),
            Object(d.a)(e, s.cardAvatar, !0),
            Object(d.a)(e, s.cardAvatarProfile, i),
            Object(d.a)(e, s.cardAvatarPlain, n),
            Object(d.a)(e, s.cardAvatarTestimonial, c),
            Object(d.a)(e, s.cardAvatarTestimonialFooter, l),
            Object(d.a)(e, r, void 0 !== r),
            e)
          );
        return t.a.createElement("div", Object.assign({ className: m }, p), o);
      }
      var Ea = Object(c.a)(sa);
      function ka() {
        var a = Ea(),
          e = pa.filter(function (a) {
            return "spanish" === a.lang;
          }),
          o = pa.filter(function (a) {
            return "english" === a.lang;
          }),
          r = function (a) {
            return a > 9 ? a : "0".concat(a);
          };
        return t.a.createElement(
          "div",
          { className: a.section },
          t.a.createElement(
            G,
            { justify: "center" },
            t.a.createElement(
              Q,
              { xs: 12, sm: 12, className: a.textCenter },
              t.a.createElement(ia, {
                alignCenter: !0,
                color: "rose",
                tabs: [
                  {
                    tabButton: "Spanish",
                    tabContent: t.a.createElement(
                      G,
                      null,
                      e.map(function (e, o) {
                        return t.a.createElement(
                          Q,
                          { xs: 12, sm: 4, md: 4, lg: 4, xl: 4, key: o },
                          t.a.createElement(
                            xa,
                            { blog: !0 },
                            t.a.createElement(
                              ua,
                              { image: !0 },
                              t.a.createElement(
                                Fa,
                                {
                                  profile: !0,
                                  plain: !0,
                                  className: a.maxWidthImage,
                                },
                                t.a.createElement(
                                  "a",
                                  { href: "#pablo", title: e.media.name },
                                  t.a.createElement("img", {
                                    src: e.media.image,
                                    alt: "profile-pic",
                                    className: a.img,
                                    style: { height: "70px" },
                                  })
                                )
                              )
                            ),
                            t.a.createElement(
                              va,
                              null,
                              t.a.createElement(
                                "h6",
                                { className: a.textMuted },
                                ""
                                  .concat(r(e.date.getDate()), "/")
                                  .concat(r(e.date.getMonth() + 1), "/")
                                  .concat(e.date.getFullYear())
                              ),
                              t.a.createElement(
                                "h4",
                                { className: a.cardTitle },
                                t.a.createElement("a", { href: e.link }, e.name)
                              ),
                              t.a.createElement(
                                "p",
                                { className: a.description },
                                t.a.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: e.link,
                                    style: { color: "#ff1e64" },
                                  },
                                  e.author
                                    ? "Ver nota hecha por ".concat(e.author)
                                    : "Ver nota"
                                )
                              )
                            )
                          )
                        );
                      })
                    ),
                  },
                  {
                    tabButton: "English",
                    tabContent: t.a.createElement(
                      G,
                      null,
                      o.map(function (e, o) {
                        return t.a.createElement(
                          Q,
                          { xs: 12, sm: 4, md: 4, lg: 4, xl: 4, key: o },
                          t.a.createElement(
                            xa,
                            { blog: !0 },
                            t.a.createElement(
                              ua,
                              { image: !0 },
                              t.a.createElement(
                                Fa,
                                {
                                  profile: !0,
                                  plain: !0,
                                  className: a.maxWidthImage,
                                },
                                t.a.createElement(
                                  "a",
                                  { href: "#pablo", title: e.media.name },
                                  t.a.createElement("img", {
                                    src: e.media.image,
                                    alt: "profile-pic",
                                    className: a.img,
                                    style: { height: "70px" },
                                  })
                                )
                              )
                            ),
                            t.a.createElement(
                              va,
                              null,
                              t.a.createElement(
                                "h6",
                                { className: a.textMuted },
                                ""
                                  .concat(r(e.date.getDate()), "/")
                                  .concat(r(e.date.getMonth() + 1), "/")
                                  .concat(e.date.getFullYear())
                              ),
                              t.a.createElement(
                                "h4",
                                { className: a.cardTitle },
                                t.a.createElement("a", { href: e.link }, e.name)
                              ),
                              t.a.createElement(
                                "p",
                                { className: a.description },
                                t.a.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: e.link,
                                    style: { color: "#ff1e64" },
                                  },
                                  e.author
                                    ? "Read note written by ".concat(e.author)
                                    : "Read note"
                                )
                              )
                            )
                          )
                        );
                      })
                    ),
                  },
                ],
              })
            )
          )
        );
      }
      var Oa = o(95),
        Sa = {
          button: {
            minHeight: "auto",
            minWidth: "auto",
            backgroundColor: C[0],
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(C[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(C[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(C[0]) +
              ", 0.12)",
            border: "none",
            borderRadius: "3px",
            position: "relative",
            padding: "12px 30px",
            margin: ".3125rem 1px",
            fontSize: "12px",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "0",
            willChange: "box-shadow, transform",
            transition:
              "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            "&:hover,&:focus": {
              color: "#FFF",
              backgroundColor: C[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(C[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(C[0]) +
                ", 0.2)",
            },
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
              position: "relative",
              display: "inline-block",
              top: "0",
              marginTop: "-1em",
              marginBottom: "-1em",
              fontSize: "1.1rem",
              marginRight: "4px",
              verticalAlign: "middle",
            },
            "& svg": {
              position: "relative",
              display: "inline-block",
              top: "0",
              width: "18px",
              height: "18px",
              marginRight: "4px",
              verticalAlign: "middle",
            },
            "&$justIcon": {
              "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginTop: "0px",
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px",
              },
            },
          },
          fullWidth: { width: "100%" },
          primary: {
            backgroundColor: b[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(b[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(b[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(b[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: b[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(b[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(b[0]) +
                ", 0.2)",
            },
          },
          secondary: {
            color: "rgba(" + x("#000") + ",.87)",
            backgroundColor: h[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(h[0]) +
              ",.14), 0 3px 1px -2px rgba(" +
              x(h[0]) +
              ",.2), 0 1px 5px 0 rgba(" +
              x(h[0]) +
              ",.12)",
            "&:hover,&:focus": {
              boxShdow:
                "0 14px 26px -12px rgba(" +
                x(h[0]) +
                ",.42), 0 4px 23px 0 rgba(" +
                x("#000") +
                ",.12), 0 8px 10px -5px rgba(" +
                x(h[0]) +
                ",.2)",
              color: "rgba(" + x("#000") + ",.87)",
              backgroundColor: C[19],
            },
          },
          info: {
            backgroundColor: v[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(v[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(v[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(v[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: v[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(v[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(v[0]) +
                ", 0.2)",
            },
          },
          success: {
            backgroundColor: w[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(w[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(w[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(w[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: w[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(w[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(w[0]) +
                ", 0.2)",
            },
          },
          warning: {
            backgroundColor: u[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(u[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(u[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(u[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: u[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(u[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(u[0]) +
                ", 0.2)",
            },
          },
          danger: {
            backgroundColor: f[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(f[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(f[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(f[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: f[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(f[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(f[0]) +
                ", 0.2)",
            },
          },
          rose: {
            backgroundColor: A[0],
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(A[0]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(A[0]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(A[0]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: A[0],
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(A[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(A[0]) +
                ", 0.2)",
            },
          },
          white: {
            "&,&:focus,&:hover": { backgroundColor: "#FFF", color: C[0] },
          },
          twitter: {
            backgroundColor: "#55acee",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#55acee") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#55acee") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#55acee") +
              ", 0.12)",
            "&:hover,&:focus,&:visited": {
              backgroundColor: "#55acee",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#55acee") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#55acee") +
                ", 0.2)",
            },
          },
          facebook: {
            backgroundColor: "#3b5998",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#3b5998") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#3b5998") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#3b5998") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#3b5998",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#3b5998") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#3b5998") +
                ", 0.2)",
            },
          },
          google: {
            backgroundColor: "#dd4b39",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#dd4b39") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#dd4b39") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#dd4b39") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#dd4b39",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#dd4b39") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#dd4b39") +
                ", 0.2)",
            },
          },
          linkedin: {
            backgroundColor: "#0976b4",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#0976b4") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#0976b4") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#0976b4") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#0976b4",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#0976b4") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#0976b4") +
                ", 0.2)",
            },
          },
          pinterest: {
            backgroundColor: "#cc2127",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#cc2127") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#cc2127") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#cc2127") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#cc2127",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#cc2127") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#cc2127") +
                ", 0.2)",
            },
          },
          youtube: {
            backgroundColor: "#e52d27",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#e52d27") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#e52d27") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#e52d27") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#e52d27",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#e52d27") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#e52d27") +
                ", 0.2)",
            },
          },
          tumblr: {
            backgroundColor: "#35465c",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#35465c") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#35465c") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#35465c") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#35465c",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#35465c") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#35465c") +
                ", 0.2)",
            },
          },
          github: {
            backgroundColor: C[8],
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x(C[8]) +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x(C[8]) +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x(C[8]) +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: C[8],
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x(C[8]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x(C[8]) +
                ", 0.2)",
            },
          },
          behance: {
            backgroundColor: "#1769ff",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#1769ff") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#1769ff") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#1769ff") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#1769ff",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#1769ff") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#1769ff") +
                ", 0.2)",
            },
          },
          dribbble: {
            backgroundColor: "#ea4c89",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#ea4c89") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#ea4c89") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#ea4c89") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#ea4c89",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#ea4c89") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#ea4c89") +
                ", 0.2)",
            },
          },
          reddit: {
            backgroundColor: "#ff4500",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#ff4500") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#ff4500") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#ff4500") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#ff4500",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#ff4500") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#ff4500") +
                ", 0.2)",
            },
          },
          instagram: {
            backgroundColor: "#125688",
            color: "#FFF",
            boxShadow:
              "0 2px 2px 0 rgba(" +
              x("#125688") +
              ", 0.14), 0 3px 1px -2px rgba(" +
              x("#125688") +
              ", 0.2), 0 1px 5px 0 rgba(" +
              x("#125688") +
              ", 0.12)",
            "&:hover,&:focus": {
              backgroundColor: "#125688",
              color: "#FFF",
              boxShadow:
                "0 14px 26px -12px rgba(" +
                x("#125688") +
                ", 0.42), 0 4px 23px 0px rgba(" +
                x("#000") +
                ", 0.12), 0 8px 10px -5px rgba(" +
                x("#125688") +
                ", 0.2)",
            },
          },
          simple: {
            "&,&:focus,&:hover": {
              color: "#FFF",
              background: "transparent",
              boxShadow: "none",
            },
            "&$primary": { "&,&:focus,&:hover,&:visited": { color: b[0] } },
            "&$info": { "&,&:focus,&:hover,&:visited": { color: v[0] } },
            "&$success": { "&,&:focus,&:hover,&:visited": { color: w[0] } },
            "&$warning": { "&,&:focus,&:hover,&:visited": { color: u[0] } },
            "&$rose": { "&,&:focus,&:hover,&:visited": { color: A[0] } },
            "&$danger": { "&,&:focus,&:hover,&:visited": { color: f[0] } },
            "&$twitter": {
              "&,&:focus,&:hover,&:visited": { color: "#55acee" },
            },
            "&$facebook": {
              "&,&:focus,&:hover,&:visited": { color: "#3b5998" },
            },
            "&$google": { "&,&:focus,&:hover,&:visited": { color: "#dd4b39" } },
            "&$linkedin": {
              "&,&:focus,&:hover,&:visited": { color: "#0976b4" },
            },
            "&$pinterest": {
              "&,&:focus,&:hover,&:visited": { color: "#cc2127" },
            },
            "&$youtube": {
              "&,&:focus,&:hover,&:visited": { color: "#e52d27" },
            },
            "&$tumblr": { "&,&:focus,&:hover,&:visited": { color: "#35465c" } },
            "&$github": { "&,&:focus,&:hover,&:visited": { color: C[8] } },
            "&$behance": {
              "&,&:focus,&:hover,&:visited": { color: "#1769ff" },
            },
            "&$dribbble": {
              "&,&:focus,&:hover,&:visited": { color: "#ea4c89" },
            },
            "&$reddit": { "&,&:focus,&:hover,&:visited": { color: "#ff4500" } },
            "&$instagram": {
              "&,&:focus,&:hover,&:visited": { color: "#125688" },
            },
          },
          transparent: {
            "&,&:focus,&:hover": {
              color: "inherit",
              background: "transparent",
              boxShadow: "none",
            },
          },
          disabled: { opacity: "0.65", pointerEvents: "none" },
          lg: {
            "&$justIcon": {
              "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "-4px",
              },
            },
            padding: "1.125rem 2.25rem",
            fontSize: "0.875rem",
            lineHeight: "1.333333",
            borderRadius: "0.2rem",
          },
          sm: {
            "&$justIcon": {
              "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "1px",
              },
            },
            padding: "0.40625rem 1.25rem",
            fontSize: "0.6875rem",
            lineHeight: "1.5",
            borderRadius: "0.2rem",
          },
          round: { borderRadius: "30px" },
          block: { width: "100% !important" },
          link: {
            "&,&:hover,&:focus": {
              backgroundColor: "transparent",
              color: C[0],
              boxShadow: "none",
            },
          },
          justIcon: {
            paddingLeft: "12px",
            paddingRight: "12px",
            fontSize: "20px",
            height: "41px",
            minWidth: "41px",
            width: "41px",
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
              marginRight: "0px",
            },
            "&$lg": {
              height: "57px",
              minWidth: "57px",
              width: "57px",
              lineHeight: "56px",
              "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "32px",
                lineHeight: "56px",
              },
              "& svg": { width: "32px", height: "32px" },
            },
            "&$sm": {
              height: "30px",
              minWidth: "30px",
              width: "30px",
              "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "17px",
                lineHeight: "29px",
              },
              "& svg": { width: "17px", height: "17px" },
            },
          },
          fileButton: {},
        },
        Ra = Object(c.a)(Sa),
        Ia = t.a.forwardRef(function (a, e) {
          var o,
            r = a.color,
            n = a.round,
            i = a.children,
            c = a.fullWidth,
            l = a.disabled,
            p = a.simple,
            s = a.size,
            m = a.block,
            x = a.link,
            b = a.justIcon,
            h = a.fileButton,
            u = a.className,
            f = Object(U.a)(a, [
              "color",
              "round",
              "children",
              "fullWidth",
              "disabled",
              "simple",
              "size",
              "block",
              "link",
              "justIcon",
              "fileButton",
              "className",
            ]),
            w = Ra(),
            v = g()(
              ((o = {}),
              Object(d.a)(o, w.button, !0),
              Object(d.a)(o, w[s], s),
              Object(d.a)(o, w[r], r),
              Object(d.a)(o, w.round, n),
              Object(d.a)(o, w.fullWidth, c),
              Object(d.a)(o, w.disabled, l),
              Object(d.a)(o, w.simple, p),
              Object(d.a)(o, w.block, m),
              Object(d.a)(o, w.link, x),
              Object(d.a)(o, w.justIcon, b),
              Object(d.a)(o, w.fileButton, h),
              Object(d.a)(o, u, u),
              o)
            );
          return t.a.createElement(
            Oa.a,
            Object.assign({}, f, { ref: e, className: v }),
            i
          );
        }),
        ja = {
          container: Object(m.a)(
            Object(m.a)({}, F),
            {},
            { zIndex: "2", position: "relative" }
          ),
          textCenter: { textAlign: "center" },
          title: Object(m.a)(
            Object(m.a)({}, z),
            {},
            { color: "#FFF", fontSize: "60px" }
          ),
          main: Object(m.a)(Object(m.a)({}, L), W),
          block: {
            color: "inherit",
            padding: "0.9375rem",
            fontWeight: "500",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            textDecoration: "none",
            position: "relative",
            display: "block",
          },
          inlineBlock: {
            display: "inline-block",
            padding: "0px",
            width: "auto",
          },
          list: { marginBottom: "0", padding: "0", marginTop: "0" },
          left: { float: "left!important", display: "block" },
          right: { padding: "15px 0", margin: "0", float: "right" },
          icon: {
            width: "18px",
            height: "18px",
            top: "3px",
            position: "relative",
          },
          greyBtn: { backgroundColor: "#f4f4f4", color: "black" },
          monserratFont: {
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
          },
          fs16: { fontSize: "16px !important" },
          w28: { width: "28px !important", minWidth: "28px !important" },
          hideOnMobile: {
            "@media only screen and (max-width: 600px)": { display: "none" },
          },
          t40Negative: { top: "-40px" },
        },
        ya = Object(c.a)(ja),
        Na = function () {
          var a = ya();
          return t.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                paddingTop: "20px",
                paddingLeft: "40px",
              },
            },
            t.a.createElement(
              "div",
              { style: { flex: "50%" } },
              t.a.createElement("img", {
                src:
                  "https://michroma.co/wp-content/uploads/2019/10/RGB-17.png",
                alt: "michroma",
                width: "200",
                itemProp: "logo",
                "data-pagespeed-url-hash": "281226273",
              })
            ),
            t.a.createElement(
              "div",
              {
                style: {
                  float: "right",
                  marginTop: "13px",
                  marginRight: "38px",
                },
                className: a.hideOnMobile,
              },
              t.a.createElement(
                l.a,
                { className: a.list },
                t.a.createElement(
                  p.a,
                  { className: a.inlineBlock },
                  t.a.createElement(
                    Ia,
                    {
                      color: "white",
                      className: a.w28,
                      round: !0,
                      justIcon: !0,
                      simple: !0,
                      onClick: function () {
                        return window.open(
                          "https://www.linkedin.com/company/michroma/"
                        );
                      },
                    },
                    t.a.createElement("i", {
                      className: "fab fa-linkedin-in ".concat(a.fs16),
                    })
                  )
                ),
                t.a.createElement(
                  p.a,
                  { className: a.inlineBlock },
                  t.a.createElement(
                    Ia,
                    {
                      color: "white",
                      className: a.w28,
                      round: !0,
                      justIcon: !0,
                      simple: !0,
                      onClick: function () {
                        return window.open(
                          "https://www.instagram.com/michroma.co/"
                        );
                      },
                    },
                    t.a.createElement("i", {
                      className: "fab fa-instagram ".concat(a.fs16),
                    })
                  )
                ),
                t.a.createElement(
                  p.a,
                  { className: a.inlineBlock },
                  t.a.createElement(
                    Ia,
                    {
                      color: "white",
                      className: a.w28,
                      round: !0,
                      justIcon: !0,
                      simple: !0,
                      onClick: function () {
                        return window.open(
                          "https://www.facebook.com/michroma.co/"
                        );
                      },
                    },
                    t.a.createElement("i", {
                      className: "fab fa-facebook-f ".concat(a.fs16),
                    })
                  )
                ),
                t.a.createElement(
                  p.a,
                  { className: a.inlineBlock },
                  t.a.createElement(
                    Ia,
                    {
                      color: "white",
                      className: a.w28,
                      round: !0,
                      justIcon: !0,
                      simple: !0,
                      onClick: function () {
                        return window.open("https://twitter.com/michroma_co");
                      },
                    },
                    t.a.createElement("i", {
                      className: "fab fa-twitter ".concat(a.fs16),
                    })
                  )
                ),
                t.a.createElement(
                  p.a,
                  { className: a.inlineBlock },
                  t.a.createElement(
                    Ia,
                    {
                      color: "white",
                      className: a.w28,
                      round: !0,
                      justIcon: !0,
                      simple: !0,
                      onClick: function () {
                        return window.open(
                          "mailto:ricky@michroma.co?subject=Introduce%20me%20to%20MICHROMA"
                        );
                      },
                    },
                    t.a.createElement("i", {
                      className: "far fa-envelope ".concat(a.fs16),
                    })
                  )
                )
              )
            )
          );
        },
        Ba = Object(c.a)(ja);
      function Ma() {
        t.a.useEffect(function () {
          window.scrollTo(0, 0), (document.body.scrollTop = 0);
        });
        var a = Ba();
        return t.a.createElement(
          "div",
          { style: { backgroundImage: "url(".concat(o(71), ")") } },
          t.a.createElement(Na, null),
          t.a.createElement(
            $,
            { small: !0 },
            t.a.createElement(
              "div",
              { className: "".concat(a.container, " ").concat(a.t40Negative) },
              t.a.createElement(
                G,
                { justify: "center" },
                t.a.createElement(
                  Q,
                  { xs: 12, sm: 12, md: 8, className: a.textCenter },
                  t.a.createElement(
                    "h2",
                    {
                      className: ""
                        .concat(a.title, " ")
                        .concat(a.monserratFont),
                    },
                    "PRESS"
                  )
                )
              )
            )
          ),
          t.a.createElement(
            "div",
            { className: a.main },
            t.a.createElement(
              "div",
              { className: a.container },
              t.a.createElement(ka, null)
            )
          ),
          t.a.createElement(X, {
            content: t.a.createElement(
              "div",
              null,
              t.a.createElement(
                "div",
                { className: a.left },
                t.a.createElement(
                  l.a,
                  { className: a.list },
                  t.a.createElement(
                    p.a,
                    { className: a.inlineBlock },
                    t.a.createElement(
                      Ia,
                      {
                        color: "white",
                        round: !0,
                        justIcon: !0,
                        simple: !0,
                        onClick: function () {
                          return window.open(
                            "https://www.linkedin.com/company/michroma/"
                          );
                        },
                      },
                      t.a.createElement("i", {
                        className: "fab fa-linkedin-in",
                      })
                    )
                  ),
                  t.a.createElement(
                    p.a,
                    { className: a.inlineBlock },
                    t.a.createElement(
                      Ia,
                      {
                        color: "white",
                        round: !0,
                        justIcon: !0,
                        simple: !0,
                        onClick: function () {
                          return window.open(
                            "https://www.instagram.com/michroma.co/"
                          );
                        },
                      },
                      t.a.createElement("i", { className: "fab fa-instagram" })
                    )
                  ),
                  t.a.createElement(
                    p.a,
                    { className: a.inlineBlock },
                    t.a.createElement(
                      Ia,
                      {
                        color: "white",
                        round: !0,
                        justIcon: !0,
                        simple: !0,
                        onClick: function () {
                          return window.open(
                            "https://www.facebook.com/michroma.co/"
                          );
                        },
                      },
                      t.a.createElement("i", { className: "fab fa-facebook-f" })
                    )
                  ),
                  t.a.createElement(
                    p.a,
                    { className: a.inlineBlock },
                    t.a.createElement(
                      Ia,
                      {
                        color: "white",
                        round: !0,
                        justIcon: !0,
                        simple: !0,
                        onClick: function () {
                          return window.open("https://twitter.com/michroma_co");
                        },
                      },
                      t.a.createElement("i", { className: "fab fa-twitter" })
                    )
                  ),
                  t.a.createElement(
                    p.a,
                    { className: a.inlineBlock },
                    t.a.createElement(
                      Ia,
                      {
                        color: "white",
                        round: !0,
                        justIcon: !0,
                        simple: !0,
                        onClick: function () {
                          return window.open(
                            "mailto:ricky@michroma.co?subject=Introduce%20me%20to%20MICHROMA"
                          );
                        },
                      },
                      t.a.createElement("i", { className: "far fa-envelope" })
                    )
                  )
                )
              ),
              t.a.createElement(
                "div",
                { className: a.right, style: { color: "white" } },
                "\xa9 ",
                1900 + new Date().getYear(),
                " Michroma"
              )
            ),
          })
        );
      }
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(
        t.a.createElement(t.a.StrictMode, null, t.a.createElement(Ma, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (a) {
              a.unregister();
            })
            .catch(function (a) {
              console.error(a.message);
            });
    },
  },
  [[44, 1, 2]],
]);
//# sourceMappingURL=main.00bb9c43.chunk.js.map
