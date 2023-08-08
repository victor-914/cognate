(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [510],
  {
    5310: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case-studies/[slug]",
        function () {
          return a(8342);
        },
      ]);
    },
    9121: function () {},
    8342: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return $;
          },
        });
      var s,
        n,
        r,
        l,
        i = a(1844),
        o = a(1163),
        c = a(5499),
        x = a(7005),
        d = a(7294);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a)
                  Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      var m = function (e) {
          return d.createElement(
            "svg",
            u(
              {
                width: 400,
                height: 75,
                viewBox: "0 0 670 94",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            s ||
              (s = d.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.84.872h16.883v41.954h17.151v-.003h43.077c6.386 0 11.395-1.378 15.027-3.882 3.631-2.505 5.51-5.26 5.51-9.643v-1.502c0-4.508-1.879-7.388-5.385-9.768-3.631-2.504-8.766-3.631-15.277-3.631H34.874V.873H79.33c6.26 0 11.77.751 16.654 2.128 4.884 1.503 8.891 3.632 12.022 6.262 2.755 2.379 4.758 5.009 6.136 8.14 1.502 3.005 2.128 5.885 2.128 9.516v1.503c-.125 7.012-2.254 11.896-6.636 16.154-4.258 4.257-10.018 7.263-17.03 8.89l34.654 39.915H106.72L74.534 56.839h-2.306v.003H.84V.872Zm73.694 79.52H.84v13.445h85.443l-.258-.31-11.492-13.134Z",
                fill: "#fff",
                fillOpacity: 0.1,
              })),
            n ||
              (n = d.createElement("path", {
                d: "M239.652 93.59V78.378h-87.691v-26.32h79.888V36.847h-79.888V16.083h87.691V1.005H135.825v92.584h103.827ZM269.63 53.117h78.829V38.038H269.63V16.083h87.823V1.005h-103.96v92.584h16.137V53.117ZM406.208 78.379V16.083h23.411V1.005h-62.957v15.078h23.41v62.296h-23.41v15.21h62.957V78.38h-23.411ZM443.493 93.59h16.136V21.637l70.497 71.951h17.194V.872h-16.136v71.82L460.82.872h-17.327V93.59ZM669.638 93.59V78.378h-87.69v-26.32h79.887V36.847h-79.887V16.083h87.69V1.005H565.811v92.584h103.827Z",
                fill: "#fff",
                fillOpacity: 0.1,
              }))
          );
        },
        h = function (e) {
          let { splitted: t } = e;
          return (0, i.jsx)("div", {
            id: "case",
            className: "w-full",
            children: (0, i.jsx)(x.Z, {
              className: "h-full overflow-hidden",
              pauseOnHover: !0,
              gradientWidth: 100,
              gradientColor: [0, 0, 0],
              children: (0, i.jsxs)("div", {
                className:
                  "flex items-center w-full select-none gap-4 uppercase",
                children: [
                  t.map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex items-center justify-center gap-4 overflow-hidden",
                        children: [
                          (0, i.jsx)("h2", {
                            className:
                              "font-outer text-[4.85rem] h-full leading-0 font-black",
                            children: e,
                          }),
                          (0, i.jsx)(m, {}),
                        ],
                      },
                      t
                    )
                  ),
                  t.map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex items-center justify-center gap-4 overflow-hidden",
                        children: [
                          (0, i.jsx)("h2", {
                            className:
                              "font-outer text-[4.85rem] h-full leading-0 font-black",
                            children: e,
                          }),
                          (0, i.jsx)(m, {}),
                        ],
                      },
                      t
                    )
                  ),
                ],
              }),
            }),
          });
        },
        f = a(2039),
        p = a(1459),
        g = a(6491),
        j = a(8986),
        b = a(1664),
        v = a.n(b),
        w = a(6038),
        y = a(7946);
      function N(e) {
        let { handleNext: t, data: a } = e,
          { playHoverSound: s, playClickSound: n } = (0, g.Z)(j.Q.HOVER),
          { link: r } = a;
        return (
          w.p8.registerPlugin(y.ScrambleTextPlugin),
          (0, i.jsxs)("div", {
            className:
              "w-full md:p-3.5 z-md px-3.5 mb-3 xl:mb-0 xxs:px-5 flex items-center justify-between",
            children: [
              (0, i.jsx)("h2", {
                className:
                  "text-text font-bold bg-clip-text uppercase text-xl xxs:text-2xl whitespace-nowrap font-outer",
                children: "Case Study",
              }),
              (0, i.jsxs)("div", {
                className: "flex xxs:gap-2",
                children: [
                  r &&
                    (0, i.jsx)(v(), {
                      type: "button",
                      "data-original-text": "Visit",
                      onMouseEnter: s,
                      onMouseDown: n,
                      target: "_blank",
                      href: r,
                      className:
                        "md:hidden flex items-center xxs:gap-1 duration-200 hover:text-accent ease-in-out hover:bg-opacity-30 hover:bg-gray text-sm uppercase rounded-lg px-2 py-1 lg:mb-1 hover:scale-[102.5%]",
                      children: (0, i.jsx)("span", {
                        className: "uppercase flex font-thin",
                        children: "Visit",
                      }),
                    }),
                  (0, i.jsxs)("button", {
                    type: "button",
                    onClick: () => {
                      t();
                    },
                    "data-original-text": "Next",
                    onMouseEnter: (e) => {
                      (function (e, t) {
                        let a = e.currentTarget.children[0],
                          s =
                            e.currentTarget.getAttribute("data-original-text");
                        w.p8.fromTo(
                          a,
                          {
                            scrambleText: {
                              text: a.textContent,
                              chars: "REFINE",
                              speed: 0.3,
                            },
                          },
                          {
                            duration: 0.75,
                            scrambleText: {
                              text: s,
                              chars: "REFINE",
                              speed: 0.3,
                            },
                          }
                        );
                      })(e),
                        s();
                    },
                    onMouseDown: n,
                    className:
                      "flex items-center xxs:gap-1 duration-200 hover:text-accent ease-in-out hover:bg-opacity-30 hover:bg-gray text-sm uppercase rounded-lg px-2 py-1 lg:mb-1 hover:scale-[102.5%]",
                    children: [
                      (0, i.jsx)("span", {
                        className: "uppercase flex font-thin",
                        children: "Next",
                      }),
                      (0, i.jsx)(p.Z, {}),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var k = a(5675),
        E = a.n(k),
        Z = a(5784),
        V = a(3879);
      function T(e) {
        let { data: t, currentIndex: a, changeTypeIndex: s } = e;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex justify-between items-center font-bold uppercase text-text text-base leading-6 tracking-[0.01em]",
              children: [
                (0, i.jsx)("h3", { children: "TYPE" }),
                (0, i.jsx)("h3", { children: "YEAR" }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "flex justify-between items-center text-white mt-3",
              children: [
                (0, i.jsx)("div", {
                  className: "flex justify-start items-center gap-2",
                  children: t.caseInfo.map((e, t) =>
                    (0, i.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => s(t),
                        className:
                          "border-dashed border uppercase text-center py-1 px-2 rounded-md text-xs font-semibold hover:border-accent hover:text-accent ".concat(
                            a === t
                              ? "border-accent text-accent"
                              : "border-white/40 text-white/40"
                          ),
                        children: (0, i.jsx)("p", { children: e.type }),
                      },
                      "i".concat(t)
                    )
                  ),
                }),
                (0, i.jsx)("p", {
                  className: "tracking-[0.01em]",
                  children: t.date.getFullYear(),
                }),
              ],
            }),
          ],
        });
      }
      var M = function (e) {
        let { data: t } = e,
          [a, s] = (0, Z.useState)(0),
          { playHoverSound: n } = (0, g.Z)(j.Q.HOVER, j.Q.CLICK_1);
        w.p8.registerPlugin(y.ScrambleTextPlugin);
        let { link: r } = t;
        return (0, i.jsxs)("div", {
          className:
            "w-full ml-auto flex flex-col h-full sticky top-10 left-0 right-0 justify-between gap-5",
          children: [
            (0, i.jsxs)("div", {
              className: "flex flex-col gap-8",
              children: [
                (0, i.jsx)("div", {
                  className: "mx-auto w-full",
                  children: (0, i.jsx)(T, {
                    data: t,
                    currentIndex: a,
                    changeTypeIndex: function (e) {
                      s(e);
                    },
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "mt-auto",
                  children: (0, i.jsx)("div", {
                    className:
                      "flex flex-col overflow-y-scroll gap-5 mx-auto w-full",
                    children: t.caseInfo[a].content.map((e, t) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className: "flex flex-col mt-3",
                          children: [
                            (0, i.jsx)("h3", {
                              className:
                                "font-inter font-bold uppercase text-text text-base leading-6 tracking-[0.01em]",
                              children: e.title,
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "font-inter font-normal text-sm leading-6 tracking-[0.01em] text-white",
                              children: e.body,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "mt-auto",
              children: r
                ? (0, i.jsx)(v(), {
                    "data-original-text": "View Website",
                    href: r,
                    onMouseEnter: (e) => {
                      !(function (e, t) {
                        let a = e.currentTarget.children[0],
                          s =
                            e.currentTarget.getAttribute("data-original-text");
                        w.p8.fromTo(
                          a,
                          {
                            scrambleText: {
                              text: a.textContent,
                              chars: "REFINE",
                              speed: 0.3,
                            },
                          },
                          {
                            duration: 0.75,
                            scrambleText: {
                              text: s,
                              chars: "REFINE",
                              speed: 0.3,
                            },
                          }
                        );
                      })(e),
                        n();
                    },
                    target: "_blank",
                    className:
                      "font-bold uppercase text-[0.75rem] leading-6 tracking-[0.01em] text-center",
                    children: (0, i.jsx)(V.Z, {
                      button: !0,
                      buttonType: "".concat(V.O.pri),
                      children: "View Website",
                    }),
                  })
                : (0, i.jsx)(V.Z, {
                    disabled: !0,
                    button: !0,
                    buttonType: "".concat(V.O.pri),
                    children: (0, i.jsx)("span", {
                      className:
                        "font-bold uppercase text-[0.75rem] leading-6 tracking-[0.01em] text-center",
                      children: "Coming Soon",
                    }),
                  }),
            }),
          ],
        });
      };
      function O(e) {
        let { data: t } = e;
        return (0, i.jsx)("div", {
          className: "hidden md:flex w-full h-full max-w-[27rem]",
          children: (0, i.jsx)(M, { data: t }),
        });
      }
      function I(e) {
        let { data: t, activeImage: a } = e,
          { images: s } = t;
        return (0, i.jsx)("div", {
          className:
            "base:w-full h-full bg-gray bg-opacity-20 base:bg-opacity-0 rounded-full p-1 base:px-0 px-7 xl:px-9 xl:py-0 mx-auto flex base:flex-col-reverse items-center base:justify-center w-fit justify-between gap-8",
          children: s.map(
            (e, t) => (
              console.log(t),
              (0, i.jsxs)(
                "div",
                {
                  className:
                    "flex base:flex-col items-center base:gap-0 gap-4 justify-between w-fit base:justify-center",
                  children: [
                    t !== s.length - 1 &&
                      0 !== t &&
                      a === t &&
                      (0, i.jsx)("div", {
                        className:
                          "base:h-[100px] h-[2px] base:w-[2px] relative",
                        children: (0, i.jsx)("span", {
                          className:
                            "absolute inset-0 origin-bottom study-progress transition-all bg-gradient-to-t from-accent to-cyan rounded-full",
                        }),
                      }),
                    t === s.length - 1 &&
                      0 === t &&
                      (0, i.jsx)("div", {
                        className:
                          "base:h-[100px] h-[2px] base:w-[2px] relative",
                        children: (0, i.jsx)("span", {
                          className:
                            "absolute inset-0 origin-bottom study-progress transition-all bg-gradient-to-t from-accent to-cyan rounded-full",
                        }),
                      }),
                    (0, i.jsx)("span", {
                      className: "verticalWritingMode font-bold ".concat(
                        a === t
                          ? "text-accent text-lg xs:text-3xl"
                          : "text-white/50 text-base xs:text-lg"
                      ),
                      children: "0".concat(t + 1),
                    }),
                  ],
                },
                e + t
              )
            )
          ),
        });
      }
      var R = a(9521),
        P = a(6546);
      function _(e) {
        let { data: t, activeImage: a, setActiveImage: s, selector: n } = e,
          { images: r } = t,
          [l] = (0, Z.useState)(null);
        return (0, i.jsxs)("div", {
          className:
            "xl:h-full flex border-t border-gray border-opacity-10 overflow-hidden relative base:border-opacity-100",
          style: { maxHeight: "".concat(l) },
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex flex-col-reverse gap-7 mt-5 xl:mt-0 base:flex-row w-full",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "base:flex justify-center items-center border-r border-gray border-opacity-50 z-xl",
                  children: (0, i.jsx)(I, {
                    initial: 0,
                    activeImage: a,
                    data: t,
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "w-full overflow-y-scroll pb-20 short:flex-row short:overflow-y-hidden short:overflow-x-scroll flex flex-col gap-3 md:gap-4 relative p-5 xl:pb-10 xl:h-full overflow-hidden",
                  children: r.map((e, t) =>
                    (0, i.jsx)(
                      S,
                      {
                        activeImage: a,
                        setActiveImage: s,
                        image: e,
                        index: t,
                        selector: n,
                        images: r,
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "hidden base:flex p-4 border-l short:hidden border-gray border-opacity-50 w-full max-w-[27rem]",
              children: (0, i.jsx)(O, { data: t }),
            }),
            (0, i.jsxs)("div", {
              className: "xl:max-w-[27rem] short:hidden overflow-hidden",
              children: [
                (0, i.jsx)("div", { className: "overlay-fade-story" }),
                (0, i.jsx)("div", {
                  className: "overlay-fade-top -translate-y-7",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "hidden short:block",
              children: [
                (0, i.jsx)("div", { className: "overlay-fade-right" }),
                (0, i.jsx)("div", { className: "overlay-fade-left" }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        let {
            image: t,
            images: a,
            index: s,
            activeImage: n,
            setActiveImage: r,
            selector: l,
          } = e,
          o = (0, Z.useRef)(null),
          c = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "0px",
              [a, s] = (0, Z.useState)(!1);
            return (
              (0, Z.useEffect)(() => {
                let a = new IntersectionObserver(
                    (e) => {
                      var t;
                      let [a] = e;
                      s(
                        null !== (t = null == a ? void 0 : a.isIntersecting) &&
                          void 0 !== t &&
                          t
                      );
                    },
                    { rootMargin: t, threshold: 0.9 }
                  ),
                  n = e.current;
                return (
                  n && a.observe(n),
                  () => {
                    n && a.unobserve(n);
                  }
                );
              }, [e, t]),
              a
            );
          })(o);
        return (
          (0, Z.useEffect)(() => {
            c && (s !== a.length - 1 ? r(s) : r(a.length - 1)), console.log(n);
          }, [c]),
          (0, Z.useEffect)(() => {
            R.gsap.registerPlugin(P.ScrollTrigger),
              R.gsap.from(l(".study-progress"), {
                scaleY: 0,
                scrollTrigger: { trigger: o.current, scrub: 0.5 },
              });
          }, []),
          (0, i.jsx)("div", {
            ref: o,
            className:
              "flex flex-col xl:gap-3 xl:pt-5 short:min-w-[800px] short:flex-shrink-0 flex-1",
            children: (0, i.jsx)("div", {
              className: "max-w-[1000px] mx-auto",
              children: (0, i.jsx)(E(), {
                alt: t,
                draggable: !1,
                className:
                  "h-full mx-auto w-full min-w-[275px] xl:w-full static xxs:min-w-[325px] sm:min-w-[475px] base:min-w-[340px] xs:min-w-[375px] rounded-[1.5555555556vw]",
                src: t,
                width: "1000",
                height: "1000",
              }),
            }),
          })
        );
      }
      a(9121);
      var C = a(5388);
      function H(e) {
        let { data: t, container: a } = e,
          s = (0, o.useRouter)(),
          n = (0, C.Z)(),
          [r, l] = (0, Z.useState)(0),
          c = () => {
            let e = f.ZP.indexOf(t),
              n = f.ZP.length,
              r = e !== n - 1 ? f.ZP[e + 1].slug : f.ZP[0].slug;
            R.gsap.to(a.current, { opacity: 0, duration: 0.5 }),
              setTimeout(() => {
                s.replace("/case-studies/".concat(r));
              }, 500);
          },
          x = (0, Z.useRef)(null),
          d = R.gsap.utils.selector(x);
        return (0, i.jsx)("section", {
          ref: x,
          ...(n ? { "data-lenis-prevent": !0 } : {}),
          className: "h-full base:px-10 flex items-center",
          children: (0, i.jsxs)("div", {
            className:
              "flex flex-col base:border my-auto max-h-[600px] max-w-[1700px] h1:max-h-[800px] relative border-gray border-opacity-50 rounded-2xl w-full xl:mx-auto h-full",
            children: [
              (0, i.jsx)(N, { handleNext: c, activeImage: r, data: t }),
              (0, i.jsx)(_, {
                selector: d,
                activeImage: r,
                setActiveImage: l,
                parentRef: x,
                data: t,
              }),
            ],
          }),
        });
      }
      var F = a(9945),
        A = a(7891),
        L = a(5105),
        W = function () {
          return (0, i.jsxs)("div", {
            className: "relative bg-black hidden xl:block short:hidden",
            children: [
              (0, i.jsx)(F.Z, {
                double: !0,
                className: "z-max left-1/2 -translate-x-1/2 -top-1 absolute",
              }),
              (0, i.jsxs)("div", {
                className: "w-full flex items-center justify-between relative ",
                children: [
                  (0, i.jsx)(A.Z, { onlyBar: !0 }),
                  (0, i.jsx)(L.Z, { onlyBar: !0 }),
                ],
              }),
            ],
          });
        },
        z = a(9537),
        Y = a(1526);
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a)
                  Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      var D = function (e) {
          return d.createElement(
            "svg",
            B(
              {
                width: 19,
                height: 17,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            r ||
              (r = d.createElement("path", {
                d: "M1.017 15.694 9.5 7.211l8.483 8.483",
                stroke: "#00FF6A",
                strokeWidth: 1.818,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })),
            l ||
              (l = d.createElement("path", {
                d: "M1.017 9.483 9.5 1l8.483 8.483",
                stroke: "#00FF6A",
                strokeWidth: 1.818,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }))
          );
        },
        Q = a(46);
      function q(e) {
        let { data: t } = e,
          [a, s] = (0, Z.useState)(!1),
          n = (0, Z.useRef)(null),
          r = (0, Q.Z)(0);
        return (
          (0, Z.useEffect)(() => {
            "bottom" === r &&
              w.ZP.to(n.current, {
                bottom: "-100%",
                duration: 1,
                ease: "power2.in",
              }),
              "top" === r &&
                w.ZP.to(n.current, { bottom: 0, ease: "power2.out" });
          }, [r]),
          (0, i.jsxs)(z.E.div, {
            drag: "y",
            ref: n,
            dragConstraints: { top: a ? 0 : 50, bottom: 0 },
            dragElastic: 0.2,
            dragPropagation: !0,
            onDragEnd: () => {
              s(!a), (n.current.style.transform = "none");
            },
            className:
              "flex fixed max-w-[600px] z-xl mx-auto base:hidden short:flex -bottom-2 left-0 right-0 bg-black flex-col border-t border-gray rounded-t-[34px]",
            children: [
              (0, i.jsx)("button", {
                type: "button",
                onClick: () => s(!a),
                tabIndex: "0",
                className: "w-full p-4 py-5 flex items-center justify-center",
                children: (0, i.jsx)("span", {
                  className: "max-w-fit max-h-fit ".concat(
                    a ? "rotate-180" : "rotate-0",
                    " transition"
                  ),
                  children: (0, i.jsx)(D, {}),
                }),
              }),
              (0, i.jsx)(Y.M, {
                children:
                  a &&
                  (0, i.jsx)(z.E.div, {
                    initial: { height: 0 },
                    className: "py-2 px-6",
                    animate: {
                      height: "auto",
                      transition: { duration: 0.5, ease: "easeIn" },
                    },
                    exit: {
                      height: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                    children: (0, i.jsx)(M, { data: t }),
                  }),
              }),
            ],
          })
        );
      }
      function U(e) {
        let { title: t, url: a, imgUrl: s } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("title", { children: t }),
            (0, i.jsx)("meta", {
              content: "width=device-width, initial-scale=1",
              name: "viewport",
            }),
            (0, i.jsx)("meta", {
              name: "description",
              content: "Made by Refine Studio",
            }),
            (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, i.jsx)("meta", { property: "og:title", content: t }),
            (0, i.jsx)("meta", {
              property: "og:description",
              content: "Made by Refine Studio",
            }),
            (0, i.jsx)("meta", { property: "og:url", content: a }),
            (0, i.jsx)("meta", { property: "og:site_name", content: t }),
            (0, i.jsx)("meta", { property: "og:locale", content: "en-US" }),
            (0, i.jsx)("meta", { property: "og:image:url", content: s }),
            (0, i.jsx)("meta", { property: "og:image:width", content: "800" }),
            (0, i.jsx)("meta", { property: "og:image:height", content: "600" }),
            (0, i.jsx)("meta", { property: "og:image:url", content: s }),
            (0, i.jsx)("meta", { property: "og:image:width", content: "1800" }),
            (0, i.jsx)("meta", {
              property: "og:image:height",
              content: "1600",
            }),
            (0, i.jsx)("meta", { property: "og:image:alt", content: t }),
            (0, i.jsx)("meta", { property: "og:type", content: "website" }),
            (0, i.jsx)("meta", {
              name: "robots",
              content: "noindex, follow, nocache",
            }),
            (0, i.jsx)("meta", {
              name: "googlebot",
              content:
                "index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:creator",
              content: "@refinewebstudio",
            }),
            (0, i.jsx)("meta", { name: "twitter:title", content: t }),
            (0, i.jsx)("meta", {
              name: "twitter:description",
              content: "Made by Refine Studio",
            }),
            (0, i.jsx)("meta", { name: "twitter:image", content: s }),
            (0, i.jsx)("meta", {
              name: "category",
              content: "software development",
            }),
          ],
        });
      }
      function X() {
        return (0, i.jsx)("div", {
          className:
            "fixed left-1/2 top-1/2 -translate-x-1/2 z-xxl translate-y-1/2",
          children: (0, i.jsx)("div", {
            className: "bg-black min-w-[1000px] w-[90%]",
            children: (0, i.jsx)("div", { className: "" }),
          }),
        });
      }
      var K = a(8852),
        G = a(9718);
      function J() {
        let { showContact: e, setContact: t } = (0, G.AW)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(Y.M, {
              children:
                e &&
                (0, i.jsx)(z.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { x: { duration: 0.5, delay: 0.2 } },
                  onClick: () => t(!1),
                  className:
                    "absolute inset-0 backdrop-blur-md bg-black/10 z-xl w-[49%] ml-auto hidden lg:flex",
                }),
            }),
            (0, i.jsx)(Y.M, { children: e && (0, i.jsx)(K.Z, {}) }),
          ],
        });
      }
      function $() {
        let e = (0, o.useRouter)(),
          { slug: t } = e.query,
          a = (0, Z.useRef)(null),
          s = f.ZP.filter((e) => e.slug === t)[0];
        if (
          ((0, Z.useEffect)(() => {
            window.scrollTo(0, 0),
              R.gsap.fromTo(
                a.current,
                { duration: 0.025, autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.025 }
              );
          }, [t]),
          s)
        )
          return (0, i.jsxs)("div", {
            ref: a,
            className: "relative",
            children: [
              (0, i.jsx)(U, {
                title: s.title,
                url: "https://refine.agency/case-studies/".concat(s.slug),
                imgUrl: "https://refine.agency".concat(s.cover),
              }),
              (0, i.jsx)(J, {}),
              (0, i.jsxs)("div", {
                className: "relative w-full xl:h-screen flex flex-col",
                children: [
                  (0, i.jsx)(c.Z, { study: !0 }),
                  (0, i.jsx)(h, {
                    title: s.title,
                    splitted: s.marqueeNameSplit,
                  }),
                  (0, i.jsx)(H, { container: a, data: s }),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsx)(X, { data: s }),
              (0, i.jsx)(q, { data: s }),
            ],
          });
      }
    },
  },
  function (e) {
    e.O(0, [433, 764, 154, 546, 236, 774, 888, 179], function () {
      return e((e.s = 5310));
    }),
      (_N_E = e.O());
  },
]);
