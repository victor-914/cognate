// form changes

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [236],
  {
    2186: function () {},
    2769: function () {},
    9616: function () {},
    8317: function () {},
    2735: function () {},
    6654: function () {},
    7891: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return f;
        },
      });
      var a = l(1844),
        n = l(9876),
        s = l(1664),
        i = l.n(s),
        r = l(9945),
        c = l(7573),
        o = l(1163),
        d = l(5784),
        x = l(6491),
        u = l(8986),
        m = l(6038),
        p = l(7946);
      function f(e) {
        let { onlyBar: t } = e,
          l = (0, o.useRouter)(),
          [s, f] = (0, d.useState)(!1);
        (0, d.useEffect)(() => {
          window.matchMedia("(min-height: 850px) and (min-width: 1080px")
            .matches && f(!0);
        }, []);
        let { playHoverSound: h } = (0, x.Z)(u.Q.HOVER, u.Q.CLICK_1);
        return (
          m.p8.registerPlugin(p.ScrambleTextPlugin),
          (0, a.jsxs)("div", {
            className: "relative hidden xl:block short:hidden w-full",
            children: [
              !t &&
                (0, a.jsx)(r.Z, {
                  className: "absolute -top-5 left-1/2 -translate-x-1/2",
                }),
              (0, a.jsxs)("div", {
                className:
                  "bg-pri justify-between mx-5 gap-3 items-center flex",
                children: [
                  s && (0, a.jsx)(c.Z, {}),
                  (0, a.jsx)("div", {
                    className: "flex gap-3 items-center",
                    children: n.Py.map((e, t) => {
                      let { title: n, href: s } = e,
                        r = "/" === l.pathname,
                        c = 0 === t ? (r ? "Case Studies" : "Home") : n;
                      return (0, a.jsx)(
                        i(),
                        {
                          href: 0 === t ? (r ? s : "/") : s,
                          "data-original-text": c,
                          onMouseEnter: (e) => {
                            (function (e, t) {
                              let l = e.currentTarget.children[0],
                                a =
                                  e.currentTarget.getAttribute(
                                    "data-original-text"
                                  );
                              m.p8.fromTo(
                                l,
                                {
                                  scrambleText: {
                                    text: l.textContent,
                                    chars: "COGNATE",
                                    speed: 0.3,
                                  },
                                },
                                {
                                  duration: 0.75,
                                  scrambleText: {
                                    text: a,
                                    chars: "COGNATE",
                                    speed: 0.3,
                                  },
                                }
                              );
                            })(e),
                              h();
                          },
                          target: "_blank",
                          className:
                            "duration-200 truncate hover:text-accent ease-in-out hover:bg-opacity-30 hover:bg-gray text-sm uppercase rounded-lg px-2 py-1 lg:mb-1",
                          children: (0, a.jsx)("span", {
                            className: "text-xs leading-[23px]",
                            children: c,
                          }),
                        },
                        n
                      );
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    5105: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = l(1844),
        n = l(2039),
        s = l(7005),
        i = l(9945);
      let r = Array.from({ length: 5 }, (e, t) => t);
      function c() {
        return (0, a.jsxs)("div", {
          className: "relative mb-4",
          children: [
            (0, a.jsx)(i.Z, {
              className: "absolute left-1/2 top-0 -translate-x-1/2",
            }),
            (0, a.jsx)("div", {
              className: "xl:hidden short:block ",
              children: (0, a.jsx)(i.Z, {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2",
              }),
            }),
            (0, a.jsx)("div", {
              className: "relative",
              children: (0, a.jsx)("div", {
                className: "w-full overflow-x-scroll px-5 py-5 pb-5 ",
                children: (0, a.jsx)(s.Z, {
                  gradientColor: [0, 0, 0],
                  speed: 10,
                  children: (0, a.jsx)("div", {
                    className: "w-full mr-5 flex gap-5 items-center mx-[2.5]",
                    children: r.map((e) =>
                      n.Eo.map((t) => {
                        let { title: l, text: n } = t;
                        return (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "border-[1px] border-gray bg-black border-opacity-40 rounded-xl px-4 py-6 xl:min-w-[300px] flex flex-col gap-4",
                            children: [
                              (0, a.jsx)("h4", {
                                className:
                                  "uppercase text-xs font-semibold leading-[13px] tracking-[1.5px]",
                                children: l,
                              }),
                              (0, a.jsx)("p", {
                                className: "text-xs",
                                children: n,
                              }),
                            ],
                          },
                          "".concat(l, "-").concat(e)
                        );
                      })
                    ),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var o = l(9239),
        d = l(1664),
        x = l.n(d),
        u = l(6491),
        m = l(8986);
      function p(e) {
        let { onlyBar: t } = e,
          { playHoverSound: l, playClickSound: r } = (0, u.Z)(
            m.Q.ICONHOVER,
            m.Q.CLICK_1
          );
        return (0, a.jsxs)("div", {
          className: "w-full",
          children: [
            !t && (0, a.jsx)(c, {}),
            (0, a.jsxs)("div", {
              className:
                "xl:flex flex-col short:hidden relative w-full hidden py-[22px]",
              children: [
                !t &&
                  (0, a.jsx)(i.Z, {
                    className: "absolute left-1/2 -translate-x-1/2 top-[0px]",
                  }),
                (0, a.jsxs)("div", {
                  className:
                    "justify-between relative w-full h-full base:flex items-center px-5 z-lg",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "w-1/2 max-w-[450px] py-3 rounded-full bg-[#0D0D0D] z-lg px-5 font-outer",
                      children: (0, a.jsx)(s.Z, {
                        gradient: !0,
                        gradientWidth: 40,
                        gradientColor: [13, 13, 13],
                        direction: -1,
                        speed: 5,
                        children: (0, a.jsx)("span", {
                          className:
                            "tracking-[.162229px] uppercase text-xs mx-2 leading-[22px]",
                          children: n.Ej.text,
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: n.LN.map((e) => {
                        let { icon: t, link: n } = e;
                        return (0, a.jsx)(
                          x(),
                          {
                            href: n,
                            target: "_blank",
                            role: "button",
                            className: "opacity-30 hover:opacity-80 transition",
                            onMouseEnter: l,
                            onClick: r,
                            children: t,
                          },
                          e.name
                        );
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "",
                      children: (0, a.jsx)(o.Z, {}),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    8852: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return j;
        },
      });
      var a = l(1844),
        n = l(5784);
      function s(e) {
        let { optionField: t, selectedOption: l, handleChange: s } = e,
          { data: i, title: r, id: c } = t,
          o = (0, n.useRef)(null),
          [d, x] = (0, n.useState)(!1),
          [u, m] = (0, n.useState)(0),
          [p, f] = (0, n.useState)(0),
          h = (e) => {
            x(!0), m(e.pageX - o.current.offsetLeft), f(o.current.scrollLeft);
          },
          g = () => {
            x(!1);
          },
          v = (e) => {
            if (!d) return;
            e.preventDefault();
            let t = e.pageX - o.current.offsetLeft;
            o.current.scrollLeft = p - (t - u) * 1;
          };
        return (0, a.jsxs)("div", {
          className: "w-full flex flex-col gap-2 mt-4",
          children: [
            (0, a.jsx)("div", {
              className:
                "flex gap-2 px-5 items-center group relative w-full max-w-xs",
              children: (0, a.jsx)("p", {
                className:
                  "text-accent font-outer font-extralight group-hover:translate-x-1 transition-all text-[16px] uppercase",
                children: r,
              }),
            }),
            (0, a.jsxs)("div", {
              className: "relative w-full",
              children: [
                (0, a.jsx)("div", {
                  ref: o,
                  onMouseDown: h,
                  onMouseUp: g,
                  onMouseLeave: g,
                  onMouseMove: v,
                  className:
                    "flex gap-3 px-5 mt-2 overflow-x-scroll w-full items-center relative scroll-p-9",
                  children: i.map((e) =>
                    (0, a.jsx)(
                      "button",
                      {
                        className:
                          "rounded-xl font-normal border text-sm  min-w-fit py-2 px-4 ".concat(
                            l.includes(e.title)
                              ? "border-accent text-accent"
                              : "border-gray text-white"
                          ),
                        type: "button",
                        onClick: () => {
                          let t = l;
                          switch (c) {
                            case "projectbudget":
                              t = [e.title];
                              break;
                            case "servicesneeded":
                              t = t.includes(e.title)
                                ? t.filter((t) => t !== e.title)
                                : [...t, e.title];
                          }
                          s(t, c);
                        },
                        children: e.title,
                      },
                      c
                    )
                  ),
                }),
                (0, a.jsx)("div", {
                  className:
                    "overlay-left -translate-x-10 flex items-center justify-end to-black lg:hidden",
                }),
                (0, a.jsx)("div", {
                  className:
                    "overlay-right flex items-center justify-end to-black lg:hidden",
                }),
              ],
            }),
          ],
        });
      }
      function i(e) {
        return e.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      }
      function r(e) {
        let {
          label: t,
          name: l,
          value: n,
          inputType: s,
          formType: r,
          handleChange: c,
        } = e;
        return (0, a.jsx)("div", {
          className: ""
            .concat(s, " relative ")
            .concat("textarea" === s && "col-span-2"),
          children: (0, a.jsx)(s, {
            type: r,
            name: l,
            value: n,
            onChange: (e) => c(e.target.name, e.target.value),
            placeholder: t,
            rows: "textarea" === s ? 3 : null,
            className: "\n            ".concat(
              i(n) && "email" === r
                ? "border-accent"
                : i(n) || 0 === n.length || "email" !== r
                ? n.length > 1 && "email" !== r
                  ? "border-accent"
                  : n.length < 2 && 0 !== n.length && "email" !== r
                  ? "border-red"
                  : "border-gray"
                : "border-red",
              "\n            "
            ),
          }),
        });
      }
      l(2769), l(6654), l(2186);
      var c = l(9718),
        o = l(6154);
      async function d(e, t, l, a) {
        let n = e.get("firstName"),
          s = e.get("email"),
          i = e.get("message"),
          r = e.get("companyName"),
          c = e.get("timelineExpectation"),
          d = e.get("howYouFoundUs");
        try {
          let e = await o.Z.post("/api/contact", {
            userName: n,
            userEmail: s,
            userMessage: i,
            companyName: r,
            timelineExpectation: c,
            howYouFoundUs: d,
            budgetInString: t,
            serviceType: l,
          });
          a(e.data.message);
        } catch (e) {
          a(e.data.message);
        }
      }
      var x = l(9537);
      function u(e) {
        let { progress: t } = e;
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, a.jsxs)("div", {
              className:
                "font-bold uppercase flex justify-between items-end font-outer text-2xl ",
              children: [
                (0, a.jsx)("span", {
                  className: "text-lg md:text-2xl",
                  children: "Every Detail Matters",
                }),
                (0, a.jsxs)("span", { children: [t.toFixed(), "%"] }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "border-[0.5px] border-opacity-25 overflow-hidden border-accent h-2 rounded-full",
              children: (0, a.jsx)(x.E.div, {
                initial: { width: 0 },
                animate: { width: "".concat(t, "%") },
                className: "loader",
              }),
            }),
          ],
        });
      }
      let m = [
          {
            label: "Name*",
            inputType: "input",
            formType: "text",
            id: "firstName",
          },
          {
            label: "Email*",
            inputType: "input",
            formType: "email",
            id: "email",
          },
          {
            label: "Company Name*",
            inputType: "input",
            formType: "text",
            id: "companyName",
          },
          {
            label: "Timeline Expectation*",
            inputType: "input",
            formType: "text",
            id: "timelineExpectation",
          },
          {
            label: "How You Found Us*",
            inputType: "input",
            formType: "text",
            id: "howYouFoundUs",
          },
          {
            label: "Your Message*",
            inputType: "textarea",
            formType: "textarea",
            id: "message",
          },
        ],
        p = [
          {
            data: [
              { id: 1, title: "$1k-10k" },
              { id: 2, title: "$10-20k" },
              { id: 3, title: "$20-30k" },
              { id: 4, title: "$30-50k" },
              { id: 5, title: "More than $50k" },
            ],
            id: "projectbudget",
            title: "Project budget (usd)",
          },
          // CHANGE DATA FOR CONTACT SERVICES
          {
            data: [
              { id: 1, title: "Training" },
              { id: 2, title: "Web Development" },
              { id: 3, title: "Web Application" },
              { id: 4, title: "Web Redesign" },
              { id: 5, title: "Blockchain" },
            ],
            id: "servicesneeded",
            title: "Services Needed",
            multiple: !0,
          },
        ];
      var f = l(3879);
      function h() {
        return (0, a.jsx)("div", {
          className:
            "w-5 h-5 border-2 border-gray border-t-accent rounded-full animate-spin",
        });
      }
      function g() {
        let { showToast: e, showErrorToast: t } = (0, c.pm)(),
          [l, o] = (0, n.useState)(!1),
          { setErrorMessage: x, setEmailMessage: g } = (0, c.qW)(),
          [v, b] = (0, n.useState)({}),
          [j, N] = (0, n.useState)([]),
          [w, y] = (0, n.useState)([]),
          [k, E] = (0, n.useState)([]),
          T = k.length <= 8 ? (k.length / 8) * 100 : 100,
          Z = (0, n.useRef)();
        async function S(l) {
          l.preventDefault(), o(!0);
          let a = localStorage.getItem("isSent"),
            n = new FormData(Z.current);
          !(function (e, t, l, a, n) {
            let s = e.get("firstName"),
              i = e.get("email"),
              r = e.get("message"),
              c = e.get("companyName"),
              o = e.get("timelineExpectation"),
              d = e.get("howYouFoundUs");
            n(
              "\n  Username: "
                .concat(s, "\n  Email: ")
                .concat(i, "\n  Message:  ")
                .concat(r, "\n  Company Name: ")
                .concat(c, "\n  Timeline Expectation: ")
                .concat(o, "\n  How You Found Us: ")
                .concat(d, "\n  Budget: ")
                .concat(t, "\n  Service Type: ")
                .concat(l)
            );
          })(
            n,
            w,
            j.join(","),
            (e) => x(e),
            (e) => g(e)
          ),
            a
              ? t()
              : await d(n, w, j.join(","))
                  .then(() => {
                    e(), localStorage.setItem("isSent", !0);
                  })
                  .catch(() => {
                    t();
                  }),
            o(!1),
            y([]),
            b({}),
            N([]),
            E([]),
            (T = 0),
            Z.current.reset();
        }
        return (0, a.jsx)("div", {
          className: " text-sm h-full",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col gap-2 h-full",
            children: [
              (0, a.jsx)("h1", {
                className:
                  "font-outer font-normal text-lg w-full whitespace-nowrap sm:whitespace-normal sm:text-4xl 3xl:text-6xl p-5 pb-0 xxs:text-lg sm:max-w-[20ch] tracking-wide uppercase z-max",
                children: "Tell Us about your project",
              }),
              (0, a.jsxs)("form", {
                ref: Z,
                onSubmit: S,
                autoComplete: "off",
                className: "flex flex-col gap-6 ",
                children: [
                  p.map((e, t) =>
                    (0, a.jsx)(
                      s,
                      {
                        multiple: e.multiple,
                        optionField: e,
                        selectedOption: "projectbudget" === e.id ? w : j,
                        handleChange: (e, t) => {
                          let l;
                          "projectbudget" === t ? y(e) : N(e),
                            !(l = k).includes(t) && e.length > 0
                              ? (l = l.concat([t]))
                              : 0 === e.length &&
                                (l = l.filter((e) => e !== t)),
                            E(l);
                        },
                      },
                      t
                    )
                  ),
                  (0, a.jsx)("div", {
                    className:
                      "flex flex-col p-5 sm:grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:gap-x-5 gap-3 sm:gap-y-3",
                    children: m.map((e, t) =>
                      (0, a.jsx)(
                        r,
                        {
                          label: e.label,
                          name: e.id,
                          value: v["".concat(e.id)] || "",
                          inputType: e.inputType,
                          formType: e.formType,
                          handleChange: (t, l) => {
                            var a, n;
                            let s;
                            b((e) => ({ ...e, [t]: l })),
                              (a = "email" === e.formType),
                              (n = e.id),
                              !(s = k).includes(n) && l.length > 1
                                ? a && i(l)
                                  ? (s = s.concat([n]))
                                  : a || (s = s.concat([n]))
                                : a && !i(l)
                                ? (s = s.filter((e) => e !== n))
                                : !a &&
                                  l.length < 2 &&
                                  (s = s.filter((e) => e !== n)),
                              E(s);
                          },
                        },
                        t
                      )
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "sticky bottom-16 px-5 xl:px-0 left-5 bg-black mt-auto mb-5 right-5",
                    children: (0, a.jsxs)("div", {
                      className: "relative flex flex-col mb-5 gap-4",
                      children: [
                        (0, a.jsx)("div", { className: "overlay-fade" }),
                        (0, a.jsx)(u, { progress: T }),
                        (0, a.jsx)(f.Z, {
                          button: !0,
                          disabled: 100 !== T,
                          buttonType: f.O.pri,
                          children: l ? (0, a.jsx)(h, {}) : "Submit Request",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var v = l(2346),
        b = l(1163),
        j = function () {
          let e = (0, b.useRouter)(),
            t = "/case-studies/[slug]" === e.pathname;
          return (0, a.jsx)(x.E.div, {
            "data-lenis-prevent": !0,
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" },
            transition: { x: { duration: 0.4 } },
            className:
              "fixed short:fixed short:top-16 xl:absolute left-0 right-0 bottom-0 top-16 xl:top-2 z-xxl short:max-w-none xl:max-w-[50vw] bg-black overflow-y-scroll overflow-hidden h-full overflow-x-hidden",
            children: (0, a.jsxs)("div", {
              className: "relative xl:p-0 flex xl:mt-10 ",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "lg:p-6 mt-3 relative flex flex-col gap-5 w-full mx-auto z-xl xl:gap-10 ",
                  children: (0, a.jsx)(g, {}),
                }),
                t &&
                  (0, a.jsx)("div", {
                    className: "bg-black z-max px-2 h-full overflow-hidden",
                    children: (0, a.jsx)(v.Z, { contact: !0 }),
                  }),
              ],
            }),
          });
        };
    },
    2346: function (e, t, l) {
      "use strict";
      var a = l(1844),
        n = l(8282),
        s = l(4833);
      l(9616),
        (t.Z = function () {
          return (0, a.jsxs)("div", {
            className:
              "relative hidden h-full z-max xl:block short:hidden min-h-screen min-w-[75px]",
            children: [
              (0, a.jsx)(n.Z, {
                type: "single",
                className: "absolute top-[50%] left-1 translate-y-[-50%] z-max",
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute max-w-[100vh] pointer-events-none bottom-0 left-[15px] -rotate-90 h-full",
                children: (0, a.jsx)(s.Z, {}),
              }),
              (0, a.jsx)(n.Z, {
                type: "single",
                className:
                  "absolute top-[50%] right-2 rotate-180 translate-y-[-50%]",
              }),
            ],
          });
        });
    },
    4833: function (e, t, l) {
      "use strict";
      var a = l(1844),
        n = l(5784),
        s = l(7005);
      l(8317),
        (t.Z = function () {
          let [e, t] = (0, n.useState)(window.innerWidth),
            [l, i] = (0, n.useState)(10);
          (0, n.useEffect)(() => {
            function e() {
              t(window.innerWidth);
            }
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
            (0, n.useEffect)(() => {
              e >= 1280 ? i(0.25) : e >= 768 ? i(4) : i(6);
            }, [e]);
          let r = Array.from({ length: 10 }, (e, t) => t);
          return (0, a.jsx)("div", {
            className: "select-none",
            children: (0, a.jsx)(s.Z, {
              direction: -1,
              speed: l,
              gradient: !0,
              gradientWidth: 150,
              gradientColor: [0, 0, 0],
              children: (0, a.jsx)("div", {
                className: "mx-2 w-full flex h-full items-center gap-8 ",
                children: r.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      children: (0, a.jsxs)("h2", {
                        className:
                          "font-outer flex items text-white/70 -center gap-4 uppercase font-bold text-3xl",
                        children: [
                          (0, a.jsx)("span", { children: "Digital" }),
                          (0, a.jsx)("span", { children: "Design" }),
                        ],
                      }),
                    },
                    e
                  )
                ),
              }),
            }),
          });
        });
    },
    3879: function (e, t, l) {
      "use strict";
      l.d(t, {
        O: function () {
          return n;
        },
        Z: function () {
          return s;
        },
      });
      var a = l(1844);
      l(2735);
      let n = {
        pri: "pri",
        sec: "sec",
        contact: "contact",
        uiux: "uiux",
        front: "front",
        back: "back",
        filter: "filter",
      };
      function s(e) {
        let { button: t, children: l, buttonType: n, ...s } = e;
        return t
          ? (0, a.jsx)("button", { className: "".concat(n), ...s, children: l })
          : (0, a.jsx)("div", { className: "".concat(n), children: l });
      }
    },
    5388: function (e, t, l) {
      "use strict";
      var a = l(5784);
      let n = () => {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = () => {
              t(window.innerWidth >= 1468 || window.innerHeight <= 850);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          e
        );
      };
      t.Z = n;
    },
  },
]);
