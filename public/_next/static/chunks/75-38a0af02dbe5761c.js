"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [75],
  {
    6267: function (t, e, i) {
      function n(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function o(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t;
      }
      function r(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(i), !0).forEach(function (e) {
                var n, s;
                (n = t),
                  (s = i[e]),
                  e in n
                    ? Object.defineProperty(n, e, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[e] = s);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && h(t, e);
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function d(t) {
        var e = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var i,
            n,
            s = c(t);
          if (e) {
            var o = c(this).constructor;
            n = Reflect.construct(s, arguments, o);
          } else n = s.apply(this, arguments);
          return (i = n) && ("object" == typeof i || "function" == typeof i)
            ? i
            : u(this);
        };
      }
      function f(t, e, i) {
        return (f =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, i) {
                var n = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = c(t));

                  );
                  return t;
                })(t, e);
                if (n) {
                  var s = Object.getOwnPropertyDescriptor(n, e);
                  return s.get ? s.get.call(i) : s.value;
                }
              })(t, e, i || t);
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var i = [],
                n = !0,
                s = !1,
                o = void 0;
              try {
                for (
                  var r, l = t[Symbol.iterator]();
                  !(n = (r = l.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  n = !0
                );
              } catch (t) {
                (s = !0), (o = t);
              } finally {
                try {
                  n || null == l.return || l.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          v(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(t, e) {
        if (t) {
          if ("string" == typeof t) return m(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i)
          )
            return Array.from(t);
          if (
            "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return m(t, e);
        }
      }
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      i.r(e),
        i.d(e, {
          Native: function () {
            return K;
          },
          Smooth: function () {
            return q;
          },
        });
      var y = {
          el: document,
          name: "scroll",
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: { x: 0, y: 0 },
          direction: "vertical",
          gestureDirection: "vertical",
          reloadOnContextChange: !1,
          lerp: 0.1,
          class: "is-inview",
          scrollbarContainer: !1,
          scrollbarClass: "c-scrollbar",
          scrollingClass: "has-scroll-scrolling",
          draggingClass: "has-scroll-dragging",
          smoothClass: "has-scroll-smooth",
          initClass: "has-scroll-init",
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024,
          },
          smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
          },
        },
        g = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            n(this, t),
              Object.assign(this, y, e),
              (this.smartphone = y.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = y.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              (this.namespace = "locomotive"),
              (this.html = document.documentElement),
              (this.windowHeight = window.innerHeight),
              (this.windowWidth = window.innerWidth),
              (this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2,
              }),
              (this.els = {}),
              (this.currentElements = {}),
              (this.listeners = {}),
              (this.hasScrollTicking = !1),
              (this.hasCallEventSet = !1),
              (this.checkScroll = this.checkScroll.bind(this)),
              (this.checkResize = this.checkResize.bind(this)),
              (this.checkEvent = this.checkEvent.bind(this)),
              (this.instance = {
                scroll: { x: 0, y: 0 },
                limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
                currentElements: this.currentElements,
              }),
              this.isMobile
                ? this.isTablet
                  ? (this.context = "tablet")
                  : (this.context = "smartphone")
                : (this.context = "desktop"),
              this.isMobile && (this.direction = this[this.context].direction),
              "horizontal" === this.direction
                ? (this.directionAxis = "x")
                : (this.directionAxis = "y"),
              this.getDirection && (this.instance.direction = null),
              this.getDirection && (this.instance.speed = 0),
              this.html.classList.add(this.initClass),
              window.addEventListener("resize", this.checkResize, !1);
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  this.initEvents();
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  this.dispatchScroll();
                },
              },
              {
                key: "checkResize",
                value: function () {
                  var t = this;
                  this.resizeTick ||
                    ((this.resizeTick = !0),
                    requestAnimationFrame(function () {
                      t.resize(), (t.resizeTick = !1);
                    }));
                },
              },
              { key: "resize", value: function () {} },
              {
                key: "checkContext",
                value: function () {
                  if (this.reloadOnContextChange) {
                    (this.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      this.windowWidth < this.tablet.breakpoint),
                      (this.isTablet =
                        this.isMobile &&
                        this.windowWidth >= this.tablet.breakpoint);
                    var t = this.context;
                    this.isMobile
                      ? this.isTablet
                        ? (this.context = "tablet")
                        : (this.context = "smartphone")
                      : (this.context = "desktop"),
                      t != this.context &&
                        ("desktop" == t ? this.smooth : this[t].smooth) !=
                          ("desktop" == this.context
                            ? this.smooth
                            : this[this.context].smooth) &&
                        window.location.reload();
                  }
                },
              },
              {
                key: "initEvents",
                value: function () {
                  var t = this;
                  (this.scrollToEls = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-to]")
                  )),
                    (this.setScrollTo = this.setScrollTo.bind(this)),
                    this.scrollToEls.forEach(function (e) {
                      e.addEventListener("click", t.setScrollTo, !1);
                    });
                },
              },
              {
                key: "setScrollTo",
                value: function (t) {
                  t.preventDefault(),
                    this.scrollTo(
                      t.currentTarget.getAttribute(
                        "data-".concat(this.name, "-href")
                      ) || t.currentTarget.getAttribute("href"),
                      {
                        offset: t.currentTarget.getAttribute(
                          "data-".concat(this.name, "-offset")
                        ),
                      }
                    );
                },
              },
              { key: "addElements", value: function () {} },
              {
                key: "detectElements",
                value: function (t) {
                  var e = this,
                    i = this.instance.scroll.y,
                    n = i + this.windowHeight,
                    s = this.instance.scroll.x,
                    o = s + this.windowWidth;
                  Object.entries(this.els).forEach(function (r) {
                    var l = p(r, 2),
                      a = l[0],
                      c = l[1];
                    if (
                      (c &&
                        (!c.inView || t) &&
                        ("horizontal" === e.direction
                          ? o >= c.left && s < c.right && e.setInView(c, a)
                          : n >= c.top && i < c.bottom && e.setInView(c, a)),
                      c && c.inView)
                    ) {
                      if ("horizontal" === e.direction) {
                        var h = c.right - c.left;
                        (c.progress =
                          (e.instance.scroll.x - (c.left - e.windowWidth)) /
                          (h + e.windowWidth)),
                          (o < c.left || s > c.right) && e.setOutOfView(c, a);
                      } else {
                        var u = c.bottom - c.top;
                        (c.progress =
                          (e.instance.scroll.y - (c.top - e.windowHeight)) /
                          (u + e.windowHeight)),
                          (n < c.top || i > c.bottom) && e.setOutOfView(c, a);
                      }
                    }
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "setInView",
                value: function (t, e) {
                  (this.els[e].inView = !0),
                    t.el.classList.add(t.class),
                    (this.currentElements[e] = t),
                    t.call &&
                      this.hasCallEventSet &&
                      (this.dispatchCall(t, "enter"),
                      t.repeat || (this.els[e].call = !1));
                },
              },
              {
                key: "setOutOfView",
                value: function (t, e) {
                  var i = this;
                  (this.els[e].inView = !1),
                    Object.keys(this.currentElements).forEach(function (t) {
                      t === e && delete i.currentElements[t];
                    }),
                    t.call &&
                      this.hasCallEventSet &&
                      this.dispatchCall(t, "exit"),
                    t.repeat && t.el.classList.remove(t.class);
                },
              },
              {
                key: "dispatchCall",
                value: function (t, e) {
                  (this.callWay = e),
                    (this.callValue = t.call.split(",").map(function (t) {
                      return t.trim();
                    })),
                    (this.callObj = t),
                    1 == this.callValue.length &&
                      (this.callValue = this.callValue[0]);
                  var i = new Event(this.namespace + "call");
                  this.el.dispatchEvent(i);
                },
              },
              {
                key: "dispatchScroll",
                value: function () {
                  var t = new Event(this.namespace + "scroll");
                  this.el.dispatchEvent(t);
                },
              },
              {
                key: "setEvents",
                value: function (t, e) {
                  this.listeners[t] || (this.listeners[t] = []);
                  var i = this.listeners[t];
                  i.push(e),
                    1 === i.length &&
                      this.el.addEventListener(
                        this.namespace + t,
                        this.checkEvent,
                        !1
                      ),
                    "call" === t &&
                      ((this.hasCallEventSet = !0), this.detectElements(!0));
                },
              },
              {
                key: "unsetEvents",
                value: function (t, e) {
                  if (this.listeners[t]) {
                    var i = this.listeners[t],
                      n = i.indexOf(e);
                    n < 0 ||
                      (i.splice(n, 1),
                      0 === i.index &&
                        this.el.removeEventListener(
                          this.namespace + t,
                          this.checkEvent,
                          !1
                        ));
                  }
                },
              },
              {
                key: "checkEvent",
                value: function (t) {
                  var e = this,
                    i = t.type.replace(this.namespace, ""),
                    n = this.listeners[i];
                  n &&
                    0 !== n.length &&
                    n.forEach(function (t) {
                      switch (i) {
                        case "scroll":
                          return t(e.instance);
                        case "call":
                          return t(e.callValue, e.callWay, e.callObj);
                        default:
                          return t();
                      }
                    });
                },
              },
              { key: "startScroll", value: function () {} },
              { key: "stopScroll", value: function () {} },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance.scroll = { x: 0, y: 0 };
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = this;
                  window.removeEventListener("resize", this.checkResize, !1),
                    Object.keys(this.listeners).forEach(function (e) {
                      t.el.removeEventListener(
                        t.namespace + e,
                        t.checkEvent,
                        !1
                      );
                    }),
                    (this.listeners = {}),
                    this.scrollToEls.forEach(function (e) {
                      e.removeEventListener("click", t.setScrollTo, !1);
                    }),
                    this.html.classList.remove(this.initClass);
                },
              },
            ]),
            t
          );
        })(),
        b =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== i.g
            ? i.g
            : "undefined" != typeof self
            ? self
            : {};
      function w(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var S = w(function (t, e) {
        t.exports = {
          polyfill: function () {
            var t,
              e = window,
              i = document;
            if (
              !("scrollBehavior" in i.documentElement.style) ||
              !0 === e.__forceSmoothScrollPolyfill__
            ) {
              var n = e.HTMLElement || e.Element,
                s = {
                  scroll: e.scroll || e.scrollTo,
                  scrollBy: e.scrollBy,
                  elementScroll: n.prototype.scroll || l,
                  scrollIntoView: n.prototype.scrollIntoView,
                },
                o =
                  e.performance && e.performance.now
                    ? e.performance.now.bind(e.performance)
                    : Date.now,
                r = ((t = e.navigator.userAgent),
                RegExp("MSIE |Trident/|Edge/").test(t))
                  ? 1
                  : 0;
              (e.scroll = e.scrollTo =
                function () {
                  if (void 0 !== arguments[0]) {
                    if (!0 === a(arguments[0])) {
                      s.scroll.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : e.scrollX || e.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : e.scrollY || e.pageYOffset
                      );
                      return;
                    }
                    u.call(
                      e,
                      i.body,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : e.scrollX || e.pageXOffset,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : e.scrollY || e.pageYOffset
                    );
                  }
                }),
                (e.scrollBy = function () {
                  if (void 0 !== arguments[0]) {
                    if (a(arguments[0])) {
                      s.scrollBy.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      );
                      return;
                    }
                    u.call(
                      e,
                      i.body,
                      ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                      ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                    );
                  }
                }),
                (n.prototype.scroll = n.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0]) {
                      if (!0 === a(arguments[0])) {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw SyntaxError("Value could not be converted");
                        s.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                        return;
                      }
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      u.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    }
                  }),
                (n.prototype.scrollBy = function () {
                  if (void 0 !== arguments[0]) {
                    if (!0 === a(arguments[0])) {
                      s.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      );
                      return;
                    }
                    this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    });
                  }
                }),
                (n.prototype.scrollIntoView = function () {
                  if (!0 === a(arguments[0])) {
                    s.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                    return;
                  }
                  var t = (function (t) {
                      for (
                        var e, n, s;
                        t !== i.body &&
                        !1 ===
                          ((n = c((e = t), "Y") && h(e, "Y")),
                          (s = c(e, "X") && h(e, "X")),
                          n || s);

                      )
                        t = t.parentNode || t.host;
                      return t;
                    })(this),
                    n = t.getBoundingClientRect(),
                    o = this.getBoundingClientRect();
                  t !== i.body
                    ? (u.call(
                        this,
                        t,
                        t.scrollLeft + o.left - n.left,
                        t.scrollTop + o.top - n.top
                      ),
                      "fixed" !== e.getComputedStyle(t).position &&
                        e.scrollBy({
                          left: n.left,
                          top: n.top,
                          behavior: "smooth",
                        }))
                    : e.scrollBy({
                        left: o.left,
                        top: o.top,
                        behavior: "smooth",
                      });
                });
            }
            function l(t, e) {
              (this.scrollLeft = t), (this.scrollTop = e);
            }
            function a(t) {
              if (
                null === t ||
                "object" != typeof t ||
                void 0 === t.behavior ||
                "auto" === t.behavior ||
                "instant" === t.behavior
              )
                return !0;
              if ("object" == typeof t && "smooth" === t.behavior) return !1;
              throw TypeError(
                "behavior member of ScrollOptions " +
                  t.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function c(t, e) {
              return "Y" === e
                ? t.clientHeight + r < t.scrollHeight
                : "X" === e
                ? t.clientWidth + r < t.scrollWidth
                : void 0;
            }
            function h(t, i) {
              var n = e.getComputedStyle(t, null)["overflow" + i];
              return "auto" === n || "scroll" === n;
            }
            function u(t, n, r) {
              var a,
                c,
                h,
                u,
                d = o();
              t === i.body
                ? ((a = e),
                  (c = e.scrollX || e.pageXOffset),
                  (h = e.scrollY || e.pageYOffset),
                  (u = s.scroll))
                : ((a = t), (c = t.scrollLeft), (h = t.scrollTop), (u = l)),
                (function t(i) {
                  var n,
                    s,
                    r,
                    l = (o() - i.startTime) / 468;
                  (n = 0.5 * (1 - Math.cos(Math.PI * (l = l > 1 ? 1 : l)))),
                    (s = i.startX + (i.x - i.startX) * n),
                    (r = i.startY + (i.y - i.startY) * n),
                    i.method.call(i.scrollable, s, r),
                    (s !== i.x || r !== i.y) &&
                      e.requestAnimationFrame(t.bind(e, i));
                })({
                  scrollable: a,
                  method: u,
                  startTime: d,
                  startX: c,
                  startY: h,
                  x: n,
                  y: r,
                });
            }
          },
        };
      });
      S.polyfill;
      var x = (function (t) {
          a(i, t);
          var e = d(i);
          function i() {
            var t,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              n(this, i),
              (t = e.call(this, s)).resetNativeScroll &&
                (history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0)),
              window.addEventListener("scroll", t.checkScroll, !1),
              void 0 === window.smoothscrollPolyfill &&
                ((window.smoothscrollPolyfill = S),
                window.smoothscrollPolyfill.polyfill()),
              t
            );
          }
          return (
            o(i, [
              {
                key: "init",
                value: function () {
                  (this.instance.scroll.y = window.pageYOffset),
                    this.addElements(),
                    this.detectElements(),
                    f(c(i.prototype), "init", this).call(this);
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this;
                  f(c(i.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed &&
                      (this.addSpeed(), (this.speedTs = Date.now())),
                    (this.instance.scroll.y = window.pageYOffset),
                    Object.entries(this.els).length &&
                      !this.hasScrollTicking &&
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0));
                },
              },
              {
                key: "addDirection",
                value: function () {
                  window.pageYOffset > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : window.pageYOffset < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  window.pageYOffset != this.instance.scroll.y
                    ? (this.instance.speed =
                        (window.pageYOffset - this.instance.scroll.y) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "resize",
                value: function () {
                  Object.entries(this.els).length &&
                    ((this.windowHeight = window.innerHeight),
                    this.updateElements());
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    this.el
                      .querySelectorAll("[data-" + this.name + "]")
                      .forEach(function (e, i) {
                        e.getBoundingClientRect();
                        var n,
                          s,
                          o,
                          r = e.dataset[t.name + "Class"] || t.class,
                          l =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : i,
                          a =
                            "string" == typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          c = e.dataset[t.name + "Repeat"],
                          h = e.dataset[t.name + "Call"],
                          u = e.dataset[t.name + "Target"],
                          d = (o =
                            void 0 !== u
                              ? document.querySelector("".concat(u))
                              : e).getBoundingClientRect();
                        (n = d.top + t.instance.scroll.y),
                          (s = d.left + t.instance.scroll.x);
                        var f = n + o.offsetHeight,
                          p = s + o.offsetWidth;
                        c = "false" != c && (void 0 != c || t.repeat);
                        var v = t.getRelativeOffset(a),
                          m = {
                            el: e,
                            targetEl: o,
                            id: l,
                            class: r,
                            top: (n += v[0]),
                            bottom: (f -= v[1]),
                            left: s,
                            right: p,
                            offset: a,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: h,
                          };
                        (t.els[l] = m),
                          e.classList.contains(r) && t.setInView(t.els[l], l);
                      });
                },
              },
              {
                key: "updateElements",
                value: function () {
                  var t = this;
                  Object.entries(this.els).forEach(function (e) {
                    var i = p(e, 2),
                      n = i[0],
                      s = i[1],
                      o =
                        s.targetEl.getBoundingClientRect().top +
                        t.instance.scroll.y,
                      r = o + s.targetEl.offsetHeight,
                      l = t.getRelativeOffset(s.offset);
                    (t.els[n].top = o + l[0]), (t.els[n].bottom = r - l[1]);
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "getRelativeOffset",
                value: function (t) {
                  var e = [0, 0];
                  if (t)
                    for (var i = 0; i < t.length; i++)
                      "string" == typeof t[i]
                        ? t[i].includes("%")
                          ? (e[i] = parseInt(
                              (t[i].replace("%", "") * this.windowHeight) / 100
                            ))
                          : (e[i] = parseInt(t[i]))
                        : (e[i] = t[i]);
                  return e;
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = parseInt(e.offset) || 0,
                    n = !!e.callback && e.callback;
                  if ("string" == typeof t) {
                    if ("top" === t) t = this.html;
                    else if ("bottom" === t)
                      t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" == typeof t) t = parseInt(t);
                  else if (t && t.tagName);
                  else {
                    console.warn("`target` parameter is not valid");
                    return;
                  }
                  i =
                    "number" != typeof t
                      ? t.getBoundingClientRect().top +
                        i +
                        this.instance.scroll.y
                      : t + i;
                  var s = function () {
                    return parseInt(window.pageYOffset) === parseInt(i);
                  };
                  if (n) {
                    if (s()) {
                      n();
                      return;
                    }
                    window.addEventListener("scroll", function t() {
                      s() && (window.removeEventListener("scroll", t), n());
                    });
                  }
                  window.scrollTo({
                    top: i,
                    behavior: 0 === e.duration ? "auto" : "smooth",
                  });
                },
              },
              {
                key: "update",
                value: function () {
                  this.addElements(), this.detectElements();
                },
              },
              {
                key: "destroy",
                value: function () {
                  f(c(i.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1);
                },
              },
            ]),
            i
          );
        })(g),
        k = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        A = !(function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, i = 0; i < 10; i++)
              e["_" + String.fromCharCode(i)] = i;
            var n = Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
            if ("0123456789" !== n.join("")) return !1;
            var s = {};
            if (
              ("abcdefghijklmnopqrst".split("").forEach(function (t) {
                s[t] = t;
              }),
              "abcdefghijklmnopqrst" !==
                Object.keys(Object.assign({}, s)).join(""))
            )
              return !1;
            return !0;
          } catch (t) {
            return !1;
          }
        })()
          ? function (t, e) {
              for (
                var i,
                  n,
                  s = (function (t) {
                    if (null == t)
                      throw TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(t);
                  })(t),
                  o = 1;
                o < arguments.length;
                o++
              ) {
                for (var r in (i = Object(arguments[o])))
                  E.call(i, r) && (s[r] = i[r]);
                if (k) {
                  n = k(i);
                  for (var l = 0; l < n.length; l++)
                    T.call(i, n[l]) && (s[n[l]] = i[n[l]]);
                }
              }
              return s;
            }
          : Object.assign;
      function O() {}
      O.prototype = {
        on: function (t, e, i) {
          var n = this.e || (this.e = {});
          return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
        },
        once: function (t, e, i) {
          var n = this;
          function s() {
            n.off(t, s), e.apply(i, arguments);
          }
          return (s._ = e), this.on(t, s, i);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              i = ((this.e || (this.e = {}))[t] || []).slice(),
              n = 0,
              s = i.length;
            n < s;
            n++
          )
            i[n].fn.apply(i[n].ctx, e);
          return this;
        },
        off: function (t, e) {
          var i = this.e || (this.e = {}),
            n = i[t],
            s = [];
          if (n && e)
            for (var o = 0, r = n.length; o < r; o++)
              n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
          return s.length ? (i[t] = s) : delete i[t], this;
        },
      };
      var C = w(function (t, e) {
          (function () {
            (null !== e ? e : this).Lethargy = (function () {
              function t(t, e, i, n) {
                (this.stability = null != t ? Math.abs(t) : 8),
                  (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                  (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                  (this.delay = null != n ? n : 150),
                  (this.lastUpDeltas = function () {
                    var t, e, i;
                    for (
                      t = 1, i = [], e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      i.push(null);
                    return i;
                  }.call(this)),
                  (this.lastDownDeltas = function () {
                    var t, e, i;
                    for (
                      t = 1, i = [], e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      i.push(null);
                    return i;
                  }.call(this)),
                  (this.deltasTimestamp = function () {
                    var t, e, i;
                    for (
                      t = 1, i = [], e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      i.push(null);
                    return i;
                  }.call(this));
              }
              return (
                (t.prototype.check = function (t) {
                  var e;
                  return (null != (t = t.originalEvent || t).wheelDelta
                    ? (e = t.wheelDelta)
                    : null != t.deltaY
                    ? (e = -40 * t.deltaY)
                    : (null != t.detail || 0 === t.detail) &&
                      (e = -40 * t.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  e > 0)
                    ? (this.lastUpDeltas.push(e),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(e),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1));
                }),
                (t.prototype.isInertia = function (t) {
                  var e, i, n, s, o, r;
                  return null ===
                    (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                    ? t
                    : (!(
                        this.deltasTimestamp[2 * this.stability - 2] +
                          this.delay >
                        Date.now()
                      ) ||
                        e[0] !== e[2 * this.stability - 1]) &&
                        ((n = e.slice(0, this.stability)),
                        (i = e.slice(this.stability, 2 * this.stability)),
                        (r = n.reduce(function (t, e) {
                          return t + e;
                        })),
                        (o = i.reduce(function (t, e) {
                          return t + e;
                        })),
                        !!(
                          Math.abs(r / n.length) <
                            Math.abs((s = o / i.length) * this.tolerance) &&
                          this.sensitivity < Math.abs(s)
                        ) && t);
                }),
                (t.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas;
                }),
                (t.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas;
                }),
                t
              );
            })();
          }).call(b);
        }),
        D = {
          hasWheelEvent: "onwheel" in document,
          hasMouseWheelEvent: "onmousewheel" in document,
          hasTouch:
            "ontouchstart" in window ||
            window.TouchEvent ||
            (window.DocumentTouch && document instanceof DocumentTouch),
          hasTouchWin:
            navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
          hasPointer: !!window.navigator.msPointerEnabled,
          hasKeyDown: "onkeydown" in document,
          isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
        },
        L = Object.prototype.toString,
        M = Object.prototype.hasOwnProperty,
        _ = function (t) {
          if (!t)
            return console.warn("bindAll requires at least one argument.");
          var e = Array.prototype.slice.call(arguments, 1);
          if (0 === e.length)
            for (var i in t)
              M.call(t, i) &&
                "function" == typeof t[i] &&
                "[object Function]" == L.call(t[i]) &&
                e.push(i);
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            t[s] = (function (t, e) {
              return function () {
                return t.apply(e, arguments);
              };
            })(t[s], t);
          }
        },
        j = C.Lethargy,
        P = "virtualscroll",
        R = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
      function W(t) {
        _(
          this,
          "_onWheel",
          "_onMouseWheel",
          "_onTouchStart",
          "_onTouchMove",
          "_onKeyDown"
        ),
          (this.el = window),
          t && t.el && ((this.el = t.el), delete t.el),
          (this.options = A(
            {
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: !1,
              unpreventTouchClass: "vs-touchmove-allowed",
              limitInertia: !1,
              useKeyboard: !0,
              useTouch: !0,
            },
            t
          )),
          this.options.limitInertia && (this._lethargy = new j()),
          (this._emitter = new O()),
          (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
          (this.touchStartX = null),
          (this.touchStartY = null),
          (this.bodyTouchAction = null),
          void 0 !== this.options.passive &&
            (this.listenerOptions = { passive: this.options.passive });
      }
      function B(t) {
        var e = {};
        if (window.getComputedStyle) {
          var i = getComputedStyle(t),
            n = i.transform || i.webkitTransform || i.mozTransform,
            s = n.match(/^matrix3d\((.+)\)$/);
          return (
            s
              ? ((e.x = s ? parseFloat(s[1].split(", ")[12]) : 0),
                (e.y = s ? parseFloat(s[1].split(", ")[13]) : 0))
              : ((s = n.match(/^matrix\((.+)\)$/)),
                (e.x = s ? parseFloat(s[1].split(", ")[4]) : 0),
                (e.y = s ? parseFloat(s[1].split(", ")[5]) : 0)),
            e
          );
        }
      }
      function H(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e;
      }
      (W.prototype._notify = function (t) {
        var e = this._event;
        (e.x += e.deltaX),
          (e.y += e.deltaY),
          this._emitter.emit(P, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t,
          });
      }),
        (W.prototype._onWheel = function (t) {
          var e = this.options;
          if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
              (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
              D.isFirefox &&
                1 == t.deltaMode &&
                ((i.deltaX *= e.firefoxMultiplier),
                (i.deltaY *= e.firefoxMultiplier)),
              (i.deltaX *= e.mouseMultiplier),
              (i.deltaY *= e.mouseMultiplier),
              this._notify(t);
          }
        }),
        (W.prototype._onMouseWheel = function (t) {
          if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
              (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
              this._notify(t);
          }
        }),
        (W.prototype._onTouchStart = function (t) {
          var e = t.targetTouches ? t.targetTouches[0] : t;
          (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
        }),
        (W.prototype._onTouchMove = function (t) {
          var e = this.options;
          e.preventTouch &&
            !t.target.classList.contains(e.unpreventTouchClass) &&
            t.preventDefault();
          var i = this._event,
            n = t.targetTouches ? t.targetTouches[0] : t;
          (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
            (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
            (this.touchStartX = n.pageX),
            (this.touchStartY = n.pageY),
            this._notify(t);
        }),
        (W.prototype._onKeyDown = function (t) {
          var e = this._event;
          e.deltaX = e.deltaY = 0;
          var i = window.innerHeight - 40;
          switch (t.keyCode) {
            case R.LEFT:
            case R.UP:
              e.deltaY = this.options.keyStep;
              break;
            case R.RIGHT:
            case R.DOWN:
              e.deltaY = -this.options.keyStep;
              break;
            case t.shiftKey:
              e.deltaY = i;
              break;
            case R.SPACE:
              e.deltaY = -i;
              break;
            default:
              return;
          }
          this._notify(t);
        }),
        (W.prototype._bind = function () {
          D.hasWheelEvent &&
            this.el.addEventListener(
              "wheel",
              this._onWheel,
              this.listenerOptions
            ),
            D.hasMouseWheelEvent &&
              this.el.addEventListener(
                "mousewheel",
                this._onMouseWheel,
                this.listenerOptions
              ),
            D.hasTouch &&
              this.options.useTouch &&
              (this.el.addEventListener(
                "touchstart",
                this._onTouchStart,
                this.listenerOptions
              ),
              this.el.addEventListener(
                "touchmove",
                this._onTouchMove,
                this.listenerOptions
              )),
            D.hasPointer &&
              D.hasTouchWin &&
              ((this.bodyTouchAction = document.body.style.msTouchAction),
              (document.body.style.msTouchAction = "none"),
              this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
              this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            D.hasKeyDown &&
              this.options.useKeyboard &&
              document.addEventListener("keydown", this._onKeyDown);
        }),
        (W.prototype._unbind = function () {
          D.hasWheelEvent &&
            this.el.removeEventListener("wheel", this._onWheel),
            D.hasMouseWheelEvent &&
              this.el.removeEventListener("mousewheel", this._onMouseWheel),
            D.hasTouch &&
              (this.el.removeEventListener("touchstart", this._onTouchStart),
              this.el.removeEventListener("touchmove", this._onTouchMove)),
            D.hasPointer &&
              D.hasTouchWin &&
              ((document.body.style.msTouchAction = this.bodyTouchAction),
              this.el.removeEventListener(
                "MSPointerDown",
                this._onTouchStart,
                !0
              ),
              this.el.removeEventListener(
                "MSPointerMove",
                this._onTouchMove,
                !0
              )),
            D.hasKeyDown &&
              this.options.useKeyboard &&
              document.removeEventListener("keydown", this._onKeyDown);
        }),
        (W.prototype.on = function (t, e) {
          this._emitter.on(P, t, e);
          var i = this._emitter.e;
          i && i[P] && 1 === i[P].length && this._bind();
        }),
        (W.prototype.off = function (t, e) {
          this._emitter.off(P, t, e);
          var i = this._emitter.e;
          (!i[P] || i[P].length <= 0) && this._unbind();
        }),
        (W.prototype.reset = function () {
          var t = this._event;
          (t.x = 0), (t.y = 0);
        }),
        (W.prototype.destroy = function () {
          this._emitter.off(), this._unbind();
        });
      var Y = "function" == typeof Float32Array;
      function I(t, e, i) {
        return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      }
      function z(t, e, i) {
        return (
          3 * (1 - 3 * i + 3 * e) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e
        );
      }
      function X(t) {
        return t;
      }
      var F = function (t, e, i, n) {
          if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
            throw Error("bezier x values must be in [0, 1] range");
          if (t === e && i === n) return X;
          for (var s = Y ? new Float32Array(11) : Array(11), o = 0; o < 11; ++o)
            s[o] = I(0.1 * o, t, i);
          return function (o) {
            return 0 === o
              ? 0
              : 1 === o
              ? 1
              : I(
                  (function (e) {
                    for (var n = 0, o = 1; 10 !== o && s[o] <= e; ++o) n += 0.1;
                    var r = n + ((e - s[--o]) / (s[o + 1] - s[o])) * 0.1,
                      l = z(r, t, i);
                    return l >= 0.001
                      ? (function (t, e, i, n) {
                          for (var s = 0; s < 4; ++s) {
                            var o = z(e, i, n);
                            if (0 === o) break;
                            var r = I(e, i, n) - t;
                            e -= r / o;
                          }
                          return e;
                        })(e, r, t, i)
                      : 0 === l
                      ? r
                      : (function (t, e, i, n, s) {
                          var o,
                            r,
                            l = 0;
                          do
                            (o = I((r = e + (i - e) / 2), n, s) - t) > 0
                              ? (i = r)
                              : (e = r);
                          while (Math.abs(o) > 1e-7 && ++l < 10);
                          return r;
                        })(e, n, n + 0.1, t, i);
                  })(o),
                  e,
                  n
                );
          };
        },
        V = {
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          SPACE: 32,
          TAB: 9,
          PAGEUP: 33,
          PAGEDOWN: 34,
          HOME: 36,
          END: 35,
        },
        N = (function (t) {
          a(i, t);
          var e = d(i);
          function i() {
            var t,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              n(this, i),
              history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0),
              (t = e.call(this, s)).inertia && (t.lerp = 0.1 * t.inertia),
              (t.isScrolling = !1),
              (t.isDraggingScrollbar = !1),
              (t.isTicking = !1),
              (t.hasScrollTicking = !1),
              (t.parallaxElements = {}),
              (t.stop = !1),
              (t.scrollbarContainer = s.scrollbarContainer),
              (t.checkKey = t.checkKey.bind(u(t))),
              window.addEventListener("keydown", t.checkKey, !1),
              t
            );
          }
          return (
            o(i, [
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.html.classList.add(this.smoothClass),
                    this.html.setAttribute(
                      "data-".concat(this.name, "-direction"),
                      this.direction
                    ),
                    (this.instance = l(
                      {
                        delta: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                        scroll: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                      },
                      this.instance
                    )),
                    (this.vs = new W({
                      el: this.scrollFromAnywhere ? document : this.el,
                      mouseMultiplier:
                        navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                      firefoxMultiplier: this.firefoxMultiplier,
                      touchMultiplier: this.touchMultiplier,
                      useKeyboard: !1,
                      passive: !0,
                    })),
                    this.vs.on(function (e) {
                      !t.stop &&
                        (t.isDraggingScrollbar ||
                          requestAnimationFrame(function () {
                            t.updateDelta(e),
                              t.isScrolling || t.startScrolling();
                          }));
                    }),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    f(c(i.prototype), "init", this).call(this);
                },
              },
              {
                key: "setScrollLimit",
                value: function () {
                  if (
                    ((this.instance.limit.y =
                      this.el.offsetHeight - this.windowHeight),
                    "horizontal" === this.direction)
                  ) {
                    for (
                      var t = 0, e = this.el.children, i = 0;
                      i < e.length;
                      i++
                    )
                      t += e[i].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth;
                  }
                },
              },
              {
                key: "startScrolling",
                value: function () {
                  (this.startScrollTs = Date.now()),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                },
              },
              {
                key: "stopScrolling",
                value: function () {
                  cancelAnimationFrame(this.checkScrollRaf),
                    (this.startScrollTs = void 0),
                    this.scrollToRaf &&
                      (cancelAnimationFrame(this.scrollToRaf),
                      (this.scrollToRaf = null)),
                    (this.isScrolling = !1),
                    (this.instance.scroll.y = Math.round(
                      this.instance.scroll.y
                    )),
                    this.html.classList.remove(this.scrollingClass);
                },
              },
              {
                key: "checkKey",
                value: function (t) {
                  var e = this;
                  if (this.stop) {
                    t.keyCode == V.TAB &&
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0);
                      });
                    return;
                  }
                  switch (t.keyCode) {
                    case V.TAB:
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0),
                          e.scrollTo(document.activeElement, {
                            offset: -window.innerHeight / 2,
                          });
                      });
                      break;
                    case V.UP:
                      this.isActiveElementScrollSensitive() &&
                        (this.instance.delta[this.directionAxis] -= 240);
                      break;
                    case V.DOWN:
                      this.isActiveElementScrollSensitive() &&
                        (this.instance.delta[this.directionAxis] += 240);
                      break;
                    case V.PAGEUP:
                      this.instance.delta[this.directionAxis] -=
                        window.innerHeight;
                      break;
                    case V.PAGEDOWN:
                      this.instance.delta[this.directionAxis] +=
                        window.innerHeight;
                      break;
                    case V.HOME:
                      this.instance.delta[this.directionAxis] -=
                        this.instance.limit[this.directionAxis];
                      break;
                    case V.END:
                      this.instance.delta[this.directionAxis] +=
                        this.instance.limit[this.directionAxis];
                      break;
                    case V.SPACE:
                      this.isActiveElementScrollSensitive() &&
                        (t.shiftKey
                          ? (this.instance.delta[this.directionAxis] -=
                              window.innerHeight)
                          : (this.instance.delta[this.directionAxis] +=
                              window.innerHeight));
                      break;
                    default:
                      return;
                  }
                  this.instance.delta[this.directionAxis] < 0 &&
                    (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                },
              },
              {
                key: "isActiveElementScrollSensitive",
                value: function () {
                  return (
                    !(document.activeElement instanceof HTMLInputElement) &&
                    !(document.activeElement instanceof HTMLTextAreaElement) &&
                    !(document.activeElement instanceof HTMLButtonElement) &&
                    !(document.activeElement instanceof HTMLSelectElement)
                  );
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (e || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking ||
                      ((this.checkScrollRaf = requestAnimationFrame(
                        function () {
                          return t.checkScroll();
                        }
                      )),
                      (this.hasScrollTicking = !0)),
                      this.updateScroll();
                    var n = Math.abs(
                        this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]
                      ),
                      s = Date.now() - this.startScrollTs;
                    if (
                      (!this.animatingScroll &&
                        s > 100 &&
                        ((n < 0.5 &&
                          0 != this.instance.delta[this.directionAxis]) ||
                          (n < 0.5 &&
                            0 == this.instance.delta[this.directionAxis])) &&
                        this.stopScrolling(),
                      Object.entries(this.sections).forEach(function (i) {
                        var n = p(i, 2),
                          s = (n[0], n[1]);
                        s.persistent ||
                        (t.instance.scroll[t.directionAxis] >
                          s.offset[t.directionAxis] &&
                          t.instance.scroll[t.directionAxis] <
                            s.limit[t.directionAxis])
                          ? ("horizontal" === t.direction
                              ? t.transform(
                                  s.el,
                                  -t.instance.scroll[t.directionAxis],
                                  0
                                )
                              : t.transform(
                                  s.el,
                                  0,
                                  -t.instance.scroll[t.directionAxis]
                                ),
                            s.inView ||
                              ((s.inView = !0),
                              (s.el.style.opacity = 1),
                              (s.el.style.pointerEvents = "all"),
                              s.el.setAttribute(
                                "data-".concat(t.name, "-section-inview"),
                                ""
                              )))
                          : ((s.inView || e) &&
                              ((s.inView = !1),
                              (s.el.style.opacity = 0),
                              (s.el.style.pointerEvents = "none"),
                              s.el.removeAttribute(
                                "data-".concat(t.name, "-section-inview")
                              )),
                            t.transform(s.el, 0, 0));
                      }),
                      this.getDirection && this.addDirection(),
                      this.getSpeed &&
                        (this.addSpeed(), (this.speedTs = Date.now())),
                      this.detectElements(),
                      this.transformElements(),
                      this.hasScrollbar)
                    ) {
                      var o =
                        (this.instance.scroll[this.directionAxis] /
                          this.instance.limit[this.directionAxis]) *
                        this.scrollBarLimit[this.directionAxis];
                      "horizontal" === this.direction
                        ? this.transform(this.scrollbarThumb, o, 0)
                        : this.transform(this.scrollbarThumb, 0, o);
                    }
                    f(c(i.prototype), "checkScroll", this).call(this),
                      (this.hasScrollTicking = !1);
                  }
                },
              },
              {
                key: "resize",
                value: function () {
                  (this.windowHeight = window.innerHeight),
                    (this.windowWidth = window.innerWidth),
                    this.checkContext(),
                    (this.windowMiddle = {
                      x: this.windowWidth / 2,
                      y: this.windowHeight / 2,
                    }),
                    this.update();
                },
              },
              {
                key: "updateDelta",
                value: function (t) {
                  var e,
                    i =
                      this[this.context] && this[this.context].gestureDirection
                        ? this[this.context].gestureDirection
                        : this.gestureDirection;
                  (e =
                    "both" === i
                      ? t.deltaX + t.deltaY
                      : "vertical" === i
                      ? t.deltaY
                      : "horizontal" === i
                      ? t.deltaX
                      : t.deltaY),
                    (this.instance.delta[this.directionAxis] -=
                      e * this.multiplier),
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]);
                },
              },
              {
                key: "updateScroll",
                value: function (t) {
                  if (this.isScrolling || this.isDraggingScrollbar) {
                    var e, i, n;
                    this.instance.scroll[this.directionAxis] =
                      ((e = this.instance.scroll[this.directionAxis]),
                      (i = this.instance.delta[this.directionAxis]),
                      (1 - (n = this.lerp)) * e + n * i);
                  } else
                    this.instance.scroll[this.directionAxis] >
                    this.instance.limit[this.directionAxis]
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.limit[this.directionAxis]
                        )
                      : this.instance.scroll.y < 0
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          0
                        )
                      : this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.delta[this.directionAxis]
                        );
                },
              },
              {
                key: "addDirection",
                value: function () {
                  this.instance.delta.y > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : this.instance.delta.y < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up"),
                    this.instance.delta.x > this.instance.scroll.x
                      ? "right" !== this.instance.direction &&
                        (this.instance.direction = "right")
                      : this.instance.delta.x < this.instance.scroll.x &&
                        "left" !== this.instance.direction &&
                        (this.instance.direction = "left");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  this.instance.delta[this.directionAxis] !=
                  this.instance.scroll[this.directionAxis]
                    ? (this.instance.speed =
                        (this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "initScrollBar",
                value: function () {
                  if (
                    ((this.scrollbar = document.createElement("span")),
                    (this.scrollbarThumb = document.createElement("span")),
                    this.scrollbar.classList.add(
                      "".concat(this.scrollbarClass)
                    ),
                    this.scrollbarThumb.classList.add(
                      "".concat(this.scrollbarClass, "_thumb")
                    ),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer
                      ? this.scrollbarContainer.append(this.scrollbar)
                      : document.body.append(this.scrollbar),
                    (this.getScrollBar = this.getScrollBar.bind(this)),
                    (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                    (this.moveScrollBar = this.moveScrollBar.bind(this)),
                    this.scrollbarThumb.addEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                    window.addEventListener("mouseup", this.releaseScrollBar),
                    window.addEventListener("mousemove", this.moveScrollBar),
                    (this.hasScrollbar = !1),
                    "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "reinitScrollBar",
                value: function () {
                  if (
                    ((this.hasScrollbar = !1), "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "destroyScrollBar",
                value: function () {
                  this.scrollbarThumb.removeEventListener(
                    "mousedown",
                    this.getScrollBar
                  ),
                    window.removeEventListener(
                      "mouseup",
                      this.releaseScrollBar
                    ),
                    window.removeEventListener("mousemove", this.moveScrollBar),
                    this.scrollbar.remove();
                },
              },
              {
                key: "getScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !0),
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass);
                },
              },
              {
                key: "releaseScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !1),
                    this.isScrolling &&
                      this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass);
                },
              },
              {
                key: "moveScrollBar",
                value: function (t) {
                  var e = this;
                  this.isDraggingScrollbar &&
                    requestAnimationFrame(function () {
                      var i =
                          ((((t.clientX - e.scrollbarBCR.left) * 100) /
                            e.scrollbarWidth) *
                            e.instance.limit.x) /
                          100,
                        n =
                          ((((t.clientY - e.scrollbarBCR.top) * 100) /
                            e.scrollbarHeight) *
                            e.instance.limit.y) /
                          100;
                      n > 0 &&
                        n < e.instance.limit.y &&
                        (e.instance.delta.y = n),
                        i > 0 &&
                          i < e.instance.limit.x &&
                          (e.instance.delta.x = i);
                    });
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    (this.parallaxElements = {}),
                    this.el
                      .querySelectorAll("[data-".concat(this.name, "]"))
                      .forEach(function (e, i) {
                        var n,
                          s,
                          o,
                          r = H(e),
                          l = Object.entries(t.sections)
                            .map(function (t) {
                              var e = p(t, 2);
                              return e[0], e[1];
                            })
                            .find(function (t) {
                              return r.includes(t.el);
                            }),
                          a = e.dataset[t.name + "Class"] || t.class,
                          c =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : "el" + i,
                          h = e.dataset[t.name + "Repeat"],
                          u = e.dataset[t.name + "Call"],
                          d = e.dataset[t.name + "Position"],
                          f = e.dataset[t.name + "Delay"],
                          v = e.dataset[t.name + "Direction"],
                          m = "string" == typeof e.dataset[t.name + "Sticky"],
                          y =
                            !!e.dataset[t.name + "Speed"] &&
                            parseFloat(e.dataset[t.name + "Speed"]) / 10,
                          g =
                            "string" == typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          b = e.dataset[t.name + "Target"],
                          w = (o =
                            void 0 !== b
                              ? document.querySelector("".concat(b))
                              : e).getBoundingClientRect();
                        null === l
                          ? ((n = w.top + t.instance.scroll.y - B(o).y),
                            (s = w.left + t.instance.scroll.x - B(o).x))
                          : l.inView
                          ? ((n = w.top + t.instance.scroll.y - B(o).y),
                            (s = w.left + t.instance.scroll.x - B(o).x))
                          : ((n = w.top - B(l.el).y - B(o).y),
                            (s = w.left - B(l.el).x - B(o).x));
                        var S = n + o.offsetHeight,
                          x = s + o.offsetWidth,
                          k = { x: (x - s) / 2 + s, y: (S - n) / 2 + n };
                        if (m) {
                          var E = e.getBoundingClientRect(),
                            T = E.top,
                            A = E.left,
                            O = { x: A - s, y: T - n };
                          (n += window.innerHeight),
                            (s += window.innerWidth),
                            (S =
                              T +
                              o.offsetHeight -
                              e.offsetHeight -
                              O[t.directionAxis]),
                            (k = {
                              x:
                                ((x =
                                  A +
                                  o.offsetWidth -
                                  e.offsetWidth -
                                  O[t.directionAxis]) -
                                  s) /
                                  2 +
                                s,
                              y: (S - n) / 2 + n,
                            });
                        }
                        h = "false" != h && (void 0 != h || t.repeat);
                        var C = [0, 0];
                        if (g) {
                          if ("horizontal" === t.direction) {
                            for (var D = 0; D < g.length; D++)
                              "string" == typeof g[D]
                                ? g[D].includes("%")
                                  ? (C[D] = parseInt(
                                      (g[D].replace("%", "") * t.windowWidth) /
                                        100
                                    ))
                                  : (C[D] = parseInt(g[D]))
                                : (C[D] = g[D]);
                            (s += C[0]), (x -= C[1]);
                          } else {
                            for (var D = 0; D < g.length; D++)
                              "string" == typeof g[D]
                                ? g[D].includes("%")
                                  ? (C[D] = parseInt(
                                      (g[D].replace("%", "") * t.windowHeight) /
                                        100
                                    ))
                                  : (C[D] = parseInt(g[D]))
                                : (C[D] = g[D]);
                            (n += C[0]), (S -= C[1]);
                          }
                        }
                        var L = {
                          el: e,
                          id: c,
                          class: a,
                          section: l,
                          top: n,
                          middle: k,
                          bottom: S,
                          left: s,
                          right: x,
                          offset: g,
                          progress: 0,
                          repeat: h,
                          inView: !1,
                          call: u,
                          speed: y,
                          delay: f,
                          position: d,
                          target: o,
                          direction: v,
                          sticky: m,
                        };
                        (t.els[c] = L),
                          e.classList.contains(a) && t.setInView(t.els[c], c),
                          (!1 !== y || m) && (t.parallaxElements[c] = L);
                      });
                },
              },
              {
                key: "addSections",
                value: function () {
                  var t = this;
                  this.sections = {};
                  var e = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-section]")
                  );
                  0 === e.length && (e = [this.el]),
                    e.forEach(function (e, i) {
                      var n =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : "section" + i,
                        s = e.getBoundingClientRect(),
                        o = {
                          x: s.left - 1.5 * window.innerWidth - B(e).x,
                          y: s.top - 1.5 * window.innerHeight - B(e).y,
                        },
                        r = {
                          x: o.x + s.width + 2 * window.innerWidth,
                          y: o.y + s.height + 2 * window.innerHeight,
                        },
                        l = "string" == typeof e.dataset[t.name + "Persistent"];
                      e.setAttribute("data-scroll-section-id", n),
                        (t.sections[n] = {
                          el: e,
                          offset: o,
                          limit: r,
                          inView: !1,
                          persistent: l,
                          id: n,
                        });
                    });
                },
              },
              {
                key: "transform",
                value: function (t, e, i, n) {
                  var s;
                  if (n) {
                    var o = B(t),
                      r = (1 - n) * o.x + n * e,
                      l = (1 - n) * o.y + n * i;
                    s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(r, ",")
                      .concat(l, ",0,1)");
                  } else
                    s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(e, ",")
                      .concat(i, ",0,1)");
                  (t.style.webkitTransform = s),
                    (t.style.msTransform = s),
                    (t.style.transform = s);
                },
              },
              {
                key: "transformElements",
                value: function (t) {
                  var e = this,
                    i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = this.instance.scroll.x + this.windowWidth,
                    s = this.instance.scroll.y + this.windowHeight,
                    o = {
                      x: this.instance.scroll.x + this.windowMiddle.x,
                      y: this.instance.scroll.y + this.windowMiddle.y,
                    };
                  Object.entries(this.parallaxElements).forEach(function (r) {
                    var l = p(r, 2),
                      a = (l[0], l[1]),
                      c = !1;
                    if ((t && (c = 0), a.inView || i))
                      switch (a.position) {
                        case "top":
                        case "left":
                          c = -(e.instance.scroll[e.directionAxis] * a.speed);
                          break;
                        case "elementTop":
                          c = -((s - a.top) * a.speed);
                          break;
                        case "bottom":
                          c =
                            (e.instance.limit[e.directionAxis] -
                              s +
                              e.windowHeight) *
                            a.speed;
                          break;
                        case "elementLeft":
                          c = -((n - a.left) * a.speed);
                          break;
                        case "right":
                          c =
                            (e.instance.limit[e.directionAxis] -
                              n +
                              e.windowHeight) *
                            a.speed;
                          break;
                        default:
                          c = -(
                            (o[e.directionAxis] - a.middle[e.directionAxis]) *
                            a.speed
                          );
                      }
                    a.sticky &&
                      (c = a.inView
                        ? "horizontal" === e.direction
                          ? e.instance.scroll.x - a.left + window.innerWidth
                          : e.instance.scroll.y - a.top + window.innerHeight
                        : "horizontal" === e.direction
                        ? e.instance.scroll.x < a.left - window.innerWidth &&
                          e.instance.scroll.x < a.left - window.innerWidth / 2
                          ? 0
                          : e.instance.scroll.x > a.right &&
                            e.instance.scroll.x > a.right + 100 &&
                            a.right - a.left + window.innerWidth
                        : e.instance.scroll.y < a.top - window.innerHeight &&
                          e.instance.scroll.y < a.top - window.innerHeight / 2
                        ? 0
                        : e.instance.scroll.y > a.bottom &&
                          e.instance.scroll.y > a.bottom + 100 &&
                          a.bottom - a.top + window.innerHeight),
                      !1 !== c &&
                        ("horizontal" === a.direction ||
                        ("horizontal" === e.direction &&
                          "vertical" !== a.direction)
                          ? e.transform(a.el, c, 0, !t && a.delay)
                          : e.transform(a.el, 0, c, !t && a.delay));
                  });
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e,
                    i = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    s = parseInt(n.offset) || 0,
                    o = isNaN(parseInt(n.duration))
                      ? 1e3
                      : parseInt(n.duration),
                    r = n.easing || [0.25, 0, 0.35, 1],
                    l = !!n.disableLerp,
                    a = !!n.callback && n.callback;
                  if (
                    ((r = F.apply(
                      void 0,
                      (function (t) {
                        if (Array.isArray(t)) return m(t);
                      })((e = r)) ||
                        (function (t) {
                          if (
                            "undefined" != typeof Symbol &&
                            Symbol.iterator in Object(t)
                          )
                            return Array.from(t);
                        })(e) ||
                        v(e) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                    )),
                    "string" == typeof t)
                  ) {
                    if ("top" === t) t = 0;
                    else if ("bottom" === t) t = this.instance.limit.y;
                    else if ("left" === t) t = 0;
                    else if ("right" === t) t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" == typeof t) t = parseInt(t);
                  else if (t && t.tagName);
                  else {
                    console.warn("`target` parameter is not valid");
                    return;
                  }
                  if ("number" != typeof t) {
                    if (!H(t).includes(this.el)) return;
                    var c = t.getBoundingClientRect(),
                      h = c.top,
                      u = c.left,
                      d = H(t).find(function (t) {
                        return Object.entries(i.sections)
                          .map(function (t) {
                            var e = p(t, 2);
                            return e[0], e[1];
                          })
                          .find(function (e) {
                            return e.el == t;
                          });
                      }),
                      f = 0;
                    (f = d
                      ? B(d)[this.directionAxis]
                      : -this.instance.scroll[this.directionAxis]),
                      (s =
                        "horizontal" === this.direction
                          ? u + s - f
                          : h + s - f);
                  } else s = t + s;
                  var y = parseFloat(this.instance.delta[this.directionAxis]),
                    g =
                      Math.max(
                        0,
                        Math.min(s, this.instance.limit[this.directionAxis])
                      ) - y,
                    b = function (t) {
                      l
                        ? "horizontal" === i.direction
                          ? i.setScroll(y + g * t, i.instance.delta.y)
                          : i.setScroll(i.instance.delta.x, y + g * t)
                        : (i.instance.delta[i.directionAxis] = y + g * t);
                    };
                  (this.animatingScroll = !0),
                    this.stopScrolling(),
                    this.startScrolling();
                  var w = Date.now();
                  !(function t() {
                    var e = (Date.now() - w) / o;
                    e > 1
                      ? (b(1),
                        (i.animatingScroll = !1),
                        0 == o && i.update(),
                        a && a())
                      : ((i.scrollToRaf = requestAnimationFrame(t)), b(r(e)));
                  })();
                },
              },
              {
                key: "update",
                value: function () {
                  this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0);
                },
              },
              {
                key: "startScroll",
                value: function () {
                  this.stop = !1;
                },
              },
              {
                key: "stopScroll",
                value: function () {
                  this.stop = !0;
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance = l(
                    l({}, this.instance),
                    {},
                    { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  f(c(i.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1);
                },
              },
            ]),
            i
          );
        })(g),
        q = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            n(this, t),
              (this.options = e),
              Object.assign(this, y, e),
              (this.smartphone = y.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = y.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.smooth ||
                "horizontal" != this.direction ||
                console.warn(
                  "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible"
                ),
              this.tablet.smooth ||
                "horizontal" != this.tablet.direction ||
                console.warn(
                  "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
                ),
              this.smartphone.smooth ||
                "horizontal" != this.smartphone.direction ||
                console.warn(
                  "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
                ),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.options.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      window.innerWidth < this.tablet.breakpoint),
                    (this.options.isTablet =
                      this.options.isMobile &&
                      window.innerWidth >= this.tablet.breakpoint),
                    (this.smooth && !this.options.isMobile) ||
                    (this.tablet.smooth && this.options.isTablet) ||
                    (this.smartphone.smooth &&
                      this.options.isMobile &&
                      !this.options.isTablet)
                      ? (this.scroll = new N(this.options))
                      : (this.scroll = new x(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })(),
        K = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            n(this, t),
              (this.options = e),
              Object.assign(this, y, e),
              (this.smartphone = y.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = y.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.scroll = new x(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })();
      e.default = q;
    },
    8992: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LocomotiveScrollProvider = e.LocomotiveScrollContext = void 0);
      let n = i(655),
        s = i(1844),
        o = i(5784),
        r = i(9428),
        l = n.__importDefault(i(6388));
      function a({
        children: t,
        options: a,
        containerRef: c,
        watch: h,
        onUpdate: u,
        location: d,
        onLocationChange: f,
      }) {
        let { height: p } = (0, l.default)({ ref: c }),
          [v, m] = (0, o.useState)(!1),
          y = (0, o.useRef)(null),
          [g] = (0, r.useDebounce)(p, 100);
        return (
          h ||
            console.warn(
              "react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes"
            ),
          (0, o.useEffect)(
            () => (
              n.__awaiter(this, void 0, void 0, function* () {
                try {
                  let t = (yield Promise.resolve().then(() =>
                      n.__importStar(i(6267))
                    )).default,
                    e = document.querySelector("[data-scroll-container]");
                  e ||
                    console.warn(
                      "react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work."
                    ),
                    (y.current = new t(
                      Object.assign({ el: null != e ? e : void 0 }, a)
                    )),
                    m(!0);
                } catch (t) {
                  throw Error(`react-locomotive-scroll: ${t}`);
                }
              }),
              () => {
                var t;
                null === (t = y.current) || void 0 === t || t.destroy(), m(!1);
              }
            ),
            []
          ),
          (0, o.useEffect)(
            () => {
              y.current && (y.current.update(), u && u(y.current));
            },
            h ? [...h, g] : [g]
          ),
          (0, o.useEffect)(() => {
            y.current && d && (y.current.update(), f && f(y.current));
          }, [d]),
          (0, s.jsx)(
            e.LocomotiveScrollContext.Provider,
            Object.assign(
              { value: { scroll: y.current, isReady: v } },
              { children: t }
            )
          )
        );
      }
      (e.LocomotiveScrollContext = (0, o.createContext)({
        scroll: null,
        isReady: !1,
      })),
        (e.LocomotiveScrollProvider = a),
        (e.LocomotiveScrollContext.displayName = "LocomotiveScrollContext"),
        (a.displayName = "LocomotiveScrollProvider");
    },
    8075: function (t, e, i) {
      i(8992), i(6781);
    },
    6781: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useLocomotiveScroll = void 0);
      let n = i(5784),
        s = i(8992);
      function o() {
        let t = (0, n.useContext)(s.LocomotiveScrollContext);
        return (
          void 0 === t &&
            console.warn(
              "react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider."
            ),
          t
        );
      }
      (e.useLocomotiveScroll = o), (o.displayName = "useLocomotiveScroll");
    },
    9428: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(8440);
      e.useDebounce = n.default;
      var s = i(3443);
      e.useDebouncedCallback = s.default;
      var o = i(8523);
      e.useThrottledCallback = o.default;
    },
    8440: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(5784),
        s = i(3443);
      function o(t, e) {
        return t === e;
      }
      function r(t) {
        return "function" == typeof t
          ? function () {
              return t;
            }
          : t;
      }
      e.default = function (t, e, i) {
        var l,
          a,
          c,
          h = (i && i.equalityFn) || o,
          u =
            ((a = (l = n.useState(r(t)))[0]),
            (c = l[1]),
            [
              a,
              n.useCallback(function (t) {
                return c(r(t));
              }, []),
            ]),
          d = u[0],
          f = u[1],
          p = s.default(
            n.useCallback(
              function (t) {
                return f(t);
              },
              [f]
            ),
            e,
            i
          ),
          v = n.useRef(t);
        return (
          n.useEffect(
            function () {
              h(v.current, t) || (p(t), (v.current = t));
            },
            [t, p, h]
          ),
          [d, { cancel: p.cancel, isPending: p.isPending, flush: p.flush }]
        );
      };
    },
    3443: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(5784);
      e.default = function (t, e, i) {
        var s = this,
          o = n.useRef(null),
          r = n.useRef(0),
          l = n.useRef(null),
          a = n.useRef([]),
          c = n.useRef(),
          h = n.useRef(),
          u = n.useRef(t),
          d = n.useRef(!0);
        u.current = t;
        var f = !e && 0 !== e && "undefined" != typeof window;
        if ("function" != typeof t) throw TypeError("Expected a function");
        e = +e || 0;
        var p = !!(i = i || {}).leading,
          v = !("trailing" in i) || !!i.trailing,
          m = "maxWait" in i,
          y = m ? Math.max(+i.maxWait || 0, e) : null;
        return (
          n.useEffect(function () {
            return (
              (d.current = !0),
              function () {
                d.current = !1;
              }
            );
          }, []),
          n.useMemo(
            function () {
              var t = function (t) {
                  var e = a.current,
                    i = c.current;
                  return (
                    (a.current = c.current = null),
                    (r.current = t),
                    (h.current = u.current.apply(i, e))
                  );
                },
                i = function (t, e) {
                  f && cancelAnimationFrame(l.current),
                    (l.current = f
                      ? requestAnimationFrame(t)
                      : setTimeout(t, e));
                },
                n = function (t) {
                  if (!d.current) return !1;
                  var i = t - o.current,
                    n = t - r.current;
                  return !o.current || i >= e || i < 0 || (m && n >= y);
                },
                g = function (e) {
                  return ((l.current = null), v && a.current)
                    ? t(e)
                    : ((a.current = c.current = null), h.current);
                },
                b = function () {
                  var t = Date.now();
                  if (n(t)) return g(t);
                  if (d.current) {
                    var s = t - o.current,
                      l = t - r.current,
                      a = e - s;
                    i(b, m ? Math.min(a, y - l) : a);
                  }
                },
                w = function () {
                  for (var u = [], f = 0; f < arguments.length; f++)
                    u[f] = arguments[f];
                  var v = Date.now(),
                    y = n(v);
                  if (((a.current = u), (c.current = s), (o.current = v), y)) {
                    if (!l.current && d.current)
                      return (
                        (r.current = o.current),
                        i(b, e),
                        p ? t(o.current) : h.current
                      );
                    if (m) return i(b, e), t(o.current);
                  }
                  return l.current || i(b, e), h.current;
                };
              return (
                (w.cancel = function () {
                  l.current &&
                    (f
                      ? cancelAnimationFrame(l.current)
                      : clearTimeout(l.current)),
                    (r.current = 0),
                    (a.current = o.current = c.current = l.current = null);
                }),
                (w.isPending = function () {
                  return !!l.current;
                }),
                (w.flush = function () {
                  return l.current ? g(Date.now()) : h.current;
                }),
                w
              );
            },
            [p, m, e, y, v, f]
          )
        );
      };
    },
    8523: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(3443);
      e.default = function (t, e, i) {
        var s = void 0 === i ? {} : i,
          o = s.leading,
          r = s.trailing;
        return n.default(t, e, {
          maxWait: e,
          leading: void 0 === o || o,
          trailing: void 0 === r || r,
        });
      };
    },
    6388: function (t, e, i) {
      i.r(e);
      var n = i(5784);
      e.default = function (t) {
        void 0 === t && (t = {});
        var e = (0, n.useRef)(null),
          i = t.onResize,
          s = (0, n.useRef)(void 0);
        s.current = i;
        var o = (0, n.useRef)(),
          r = t.ref || e,
          l = (0, n.useState)({ width: void 0, height: void 0 }),
          a = l[0],
          c = l[1],
          h = (0, n.useRef)({ width: void 0, height: void 0 });
        return (
          (0, n.useEffect)(function () {
            o.current ||
              (o.current = new ResizeObserver(function (t) {
                if (Array.isArray(t) && t.length) {
                  var e = t[0],
                    i = Math.round(e.contentRect.width),
                    n = Math.round(e.contentRect.height);
                  if (h.current.width !== i || h.current.height !== n) {
                    var o = { width: i, height: n };
                    s.current
                      ? s.current(o)
                      : ((h.current.width = i), (h.current.height = n), c(o));
                  }
                }
              }));
          }, []),
          (0, n.useEffect)(
            function () {
              if (
                "object" == typeof r &&
                null !== r &&
                r.current instanceof Element
              ) {
                var t = r.current;
                return (
                  o.current.observe(t),
                  function () {
                    return o.current.unobserve(t);
                  }
                );
              }
            },
            [r]
          ),
          (0, n.useMemo)(
            function () {
              return { ref: r, width: a.width, height: a.height };
            },
            [r, a ? a.width : null, a ? a.height : null]
          )
        );
      };
    },
  },
]);
