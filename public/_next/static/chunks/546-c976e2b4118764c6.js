(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [546],
  {
    6546: function (e, t) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        /*!
         * Observer 3.11.4
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n,
          r,
          o,
          i,
          a,
          s,
          l,
          c,
          u,
          f,
          p,
          d,
          h,
          g = function () {
            return (
              n ||
              ("undefined" != typeof window &&
                (n = window.gsap) &&
                n.registerPlugin &&
                n)
            );
          },
          v = 1,
          m = [],
          y = [],
          x = [],
          b = Date.now,
          w = function (e, t) {
            return t;
          },
          _ = function () {
            var e = u.core,
              t = e.bridge || {},
              n = e._scrollers,
              r = e._proxies;
            n.push.apply(n, y),
              r.push.apply(r, x),
              (y = n),
              (x = r),
              (w = function (e, n) {
                return t[e](n);
              });
          },
          k = function (e, t) {
            return ~x.indexOf(e) && x[x.indexOf(e) + 1][t];
          },
          S = function (e) {
            return !!~f.indexOf(e);
          },
          E = function (e, t, n, r, o) {
            return e.addEventListener(t, n, { passive: !r, capture: !!o });
          },
          T = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          P = "scrollLeft",
          M = "scrollTop",
          C = function () {
            return (p && p.isPressed) || y.cache++;
          },
          O = function (e, t) {
            var n = function n(r) {
              if (r || 0 === r) {
                v && (o.history.scrollRestoration = "manual");
                var i = p && p.isPressed;
                (r = n.v = Math.round(r) || (p && p.iOS ? 1 : 0)),
                  e(r),
                  (n.cacheID = y.cache),
                  i && w("ss", r);
              } else
                (t || y.cache !== n.cacheID || w("ref")) &&
                  ((n.cacheID = y.cache), (n.v = e()));
              return n.v + n.offset;
            };
            return (n.offset = 0), e && n;
          },
          A = {
            s: P,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: O(function (e) {
              return arguments.length
                ? o.scrollTo(e, D.sc())
                : o.pageXOffset || i[P] || a[P] || s[P] || 0;
            }),
          },
          D = {
            s: M,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: A,
            sc: O(function (e) {
              return arguments.length
                ? o.scrollTo(A.sc(), e)
                : o.pageYOffset || i[M] || a[M] || s[M] || 0;
            }),
          },
          R = function (e) {
            return (
              n.utils.toArray(e)[0] ||
              ("string" == typeof e && !1 !== n.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          Y = function (e, t) {
            var r = t.s,
              o = t.sc;
            S(e) && (e = i.scrollingElement || a);
            var s = y.indexOf(e),
              l = o === D.sc ? 1 : 2;
            ~s || (s = y.push(e) - 1),
              y[s + l] || e.addEventListener("scroll", C);
            var c = y[s + l],
              u =
                c ||
                (y[s + l] =
                  O(k(e, r), !0) ||
                  (S(e)
                    ? o
                    : O(function (t) {
                        return arguments.length ? (e[r] = t) : e[r];
                      })));
            return (
              (u.target = e),
              c || (u.smooth = "smooth" === n.getProperty(e, "scrollBehavior")),
              u
            );
          },
          I = function (e, t, n) {
            var r = e,
              o = e,
              i = b(),
              a = i,
              s = t || 50,
              l = Math.max(500, 3 * s),
              c = function (e, t) {
                var l = b();
                t || l - i > s
                  ? ((o = r), (r = e), (a = i), (i = l))
                  : n
                  ? (r += e)
                  : (r = o + ((e - o) / (l - a)) * (i - a));
              };
            return {
              update: c,
              reset: function () {
                (o = r = n ? 0 : r), (a = i = 0);
              },
              getVelocity: function (e) {
                var t = a,
                  s = o,
                  u = b();
                return (
                  (e || 0 === e) && e !== r && c(e),
                  i === a || u - a > l
                    ? 0
                    : ((r + (n ? s : -s)) / ((n ? u : i) - t)) * 1e3
                );
              },
            };
          },
          X = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          z = function (e) {
            var t = Math.max.apply(Math, e),
              n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n;
          },
          B = function () {
            (u = n.core.globals().ScrollTrigger) && u.core && _();
          },
          F = function (e) {
            return (
              (n = e || g()) &&
                "undefined" != typeof document &&
                document.body &&
                ((o = window),
                (a = (i = document).documentElement),
                (s = i.body),
                (f = [o, i, a, s]),
                n.utils.clamp,
                (h = n.core.context || function () {}),
                (c = "onpointerenter" in s ? "pointer" : "mouse"),
                (l = N.isTouch =
                  o.matchMedia &&
                  o.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in o ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (d = N.eventTypes =
                  (
                    "ontouchstart" in a
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in a
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (v = 0);
                }, 500),
                B(),
                (r = 1)),
              r
            );
          };
        (A.op = D), (y.cache = 0);
        var N = (function () {
          var e;
          function f(e) {
            this.init(e);
          }
          return (
            (f.prototype.init = function (e) {
              r || F(n) || console.warn("Please gsap.registerPlugin(Observer)"),
                u || B();
              var t = e.tolerance,
                f = e.dragMinimum,
                g = e.type,
                v = e.target,
                y = e.lineHeight,
                x = e.debounce,
                w = e.preventDefault,
                _ = e.onStop,
                k = e.onStopDelay,
                P = e.ignore,
                M = e.wheelSpeed,
                O = e.event,
                N = e.onDragStart,
                L = e.onDragEnd,
                W = e.onDrag,
                H = e.onPress,
                q = e.onRelease,
                V = e.onRight,
                U = e.onLeft,
                G = e.onUp,
                j = e.onDown,
                K = e.onChangeX,
                Z = e.onChangeY,
                $ = e.onChange,
                J = e.onToggleX,
                Q = e.onToggleY,
                ee = e.onHover,
                et = e.onHoverEnd,
                en = e.onMove,
                er = e.ignoreCheck,
                eo = e.isNormalizer,
                ei = e.onGestureStart,
                ea = e.onGestureEnd,
                es = e.onWheel,
                el = e.onEnable,
                ec = e.onDisable,
                eu = e.onClick,
                ef = e.scrollSpeed,
                ep = e.capture,
                ed = e.allowClicks,
                eh = e.lockAxis,
                eg = e.onLockAxis;
              (this.target = v = R(v) || a),
                (this.vars = e),
                P && (P = n.utils.toArray(P)),
                (t = t || 1e-9),
                (f = f || 0),
                (M = M || 1),
                (ef = ef || 1),
                (g = g || "wheel,touch,pointer"),
                (x = !1 !== x),
                y || (y = parseFloat(o.getComputedStyle(s).lineHeight) || 22);
              var ev,
                em,
                ey,
                ex,
                eb,
                ew,
                e_,
                ek = this,
                eS = 0,
                eE = 0,
                eT = Y(v, A),
                eP = Y(v, D),
                eM = eT(),
                eC = eP(),
                eO =
                  ~g.indexOf("touch") &&
                  !~g.indexOf("pointer") &&
                  "pointerdown" === d[0],
                eA = S(v),
                eD = v.ownerDocument || i,
                eR = [0, 0, 0],
                eY = [0, 0, 0],
                eI = 0,
                eX = function () {
                  return (eI = b());
                },
                ez = function (e, t) {
                  return (
                    ((ek.event = e) && P && ~P.indexOf(e.target)) ||
                    (t && eO && "touch" !== e.pointerType) ||
                    (er && er(e, t))
                  );
                },
                eB = function () {
                  var e = (ek.deltaX = z(eR)),
                    n = (ek.deltaY = z(eY)),
                    r = Math.abs(e) >= t,
                    o = Math.abs(n) >= t;
                  $ && (r || o) && $(ek, e, n, eR, eY),
                    r &&
                      (V && ek.deltaX > 0 && V(ek),
                      U && ek.deltaX < 0 && U(ek),
                      K && K(ek),
                      J && ek.deltaX < 0 != eS < 0 && J(ek),
                      (eS = ek.deltaX),
                      (eR[0] = eR[1] = eR[2] = 0)),
                    o &&
                      (j && ek.deltaY > 0 && j(ek),
                      G && ek.deltaY < 0 && G(ek),
                      Z && Z(ek),
                      Q && ek.deltaY < 0 != eE < 0 && Q(ek),
                      (eE = ek.deltaY),
                      (eY[0] = eY[1] = eY[2] = 0)),
                    (ex || ey) &&
                      (en && en(ek), ey && (W(ek), (ey = !1)), (ex = !1)),
                    ew && ((ew = !1), 1) && eg && eg(ek),
                    eb && (es(ek), (eb = !1)),
                    (ev = 0);
                },
                eF = function (e, t, n) {
                  (eR[n] += e),
                    (eY[n] += t),
                    ek._vx.update(e),
                    ek._vy.update(t),
                    x ? ev || (ev = requestAnimationFrame(eB)) : eB();
                },
                eN = function (e, t) {
                  eh &&
                    !e_ &&
                    ((ek.axis = e_ = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ew = !0)),
                    "y" !== e_ && ((eR[2] += e), ek._vx.update(e, !0)),
                    "x" !== e_ && ((eY[2] += t), ek._vy.update(t, !0)),
                    x ? ev || (ev = requestAnimationFrame(eB)) : eB();
                },
                eL = function (e) {
                  if (!ez(e, 1)) {
                    var t = (e = X(e, w)).clientX,
                      n = e.clientY,
                      r = t - ek.x,
                      o = n - ek.y,
                      i = ek.isDragging;
                    (ek.x = t),
                      (ek.y = n),
                      (i ||
                        Math.abs(ek.startX - t) >= f ||
                        Math.abs(ek.startY - n) >= f) &&
                        (W && (ey = !0),
                        i || (ek.isDragging = !0),
                        eN(r, o),
                        i || (N && N(ek)));
                  }
                },
                eW = (ek.onPress = function (e) {
                  !ez(e, 1) &&
                    ((ek.axis = e_ = null),
                    em.pause(),
                    (ek.isPressed = !0),
                    (e = X(e)),
                    (eS = eE = 0),
                    (ek.startX = ek.x = e.clientX),
                    (ek.startY = ek.y = e.clientY),
                    ek._vx.reset(),
                    ek._vy.reset(),
                    E(eo ? v : eD, d[1], eL, w, !0),
                    (ek.deltaX = ek.deltaY = 0),
                    H && H(ek));
                }),
                eH = function (e) {
                  if (!ez(e, 1)) {
                    T(eo ? v : eD, d[1], eL, !0);
                    var t = !isNaN(ek.y - ek.startY),
                      r =
                        ek.isDragging &&
                        (Math.abs(ek.x - ek.startX) > 3 ||
                          Math.abs(ek.y - ek.startY) > 3),
                      i = X(e);
                    !r &&
                      t &&
                      (ek._vx.reset(),
                      ek._vy.reset(),
                      w &&
                        ed &&
                        n.delayedCall(0.08, function () {
                          if (b() - eI > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (eD.createEvent) {
                              var t = eD.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                o,
                                1,
                                i.screenX,
                                i.screenY,
                                i.clientX,
                                i.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                          }
                        })),
                      (ek.isDragging = ek.isGesturing = ek.isPressed = !1),
                      _ && !eo && em.restart(!0),
                      L && r && L(ek),
                      q && q(ek, r);
                  }
                },
                eq = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (ek.isGesturing = !0) &&
                    ei(e, ek.isDragging)
                  );
                },
                eV = function () {
                  return (ek.isGesturing = !1), ea(ek);
                },
                eU = function (e) {
                  if (!ez(e)) {
                    var t = eT(),
                      n = eP();
                    eF((t - eM) * ef, (n - eC) * ef, 1),
                      (eM = t),
                      (eC = n),
                      _ && em.restart(!0);
                  }
                },
                eG = function (e) {
                  if (!ez(e)) {
                    (e = X(e, w)), es && (eb = !0);
                    var t =
                      (1 === e.deltaMode
                        ? y
                        : 2 === e.deltaMode
                        ? o.innerHeight
                        : 1) * M;
                    eF(e.deltaX * t, e.deltaY * t, 0),
                      _ && !eo && em.restart(!0);
                  }
                },
                ej = function (e) {
                  if (!ez(e)) {
                    var t = e.clientX,
                      n = e.clientY,
                      r = t - ek.x,
                      o = n - ek.y;
                    (ek.x = t), (ek.y = n), (ex = !0), (r || o) && eN(r, o);
                  }
                },
                eK = function (e) {
                  (ek.event = e), ee(ek);
                },
                eZ = function (e) {
                  (ek.event = e), et(ek);
                },
                e$ = function (e) {
                  return ez(e) || (X(e, w) && eu(ek));
                };
              (em = ek._dc =
                n
                  .delayedCall(k || 0.25, function () {
                    ek._vx.reset(), ek._vy.reset(), em.pause(), _ && _(ek);
                  })
                  .pause()),
                (ek.deltaX = ek.deltaY = 0),
                (ek._vx = I(0, 50, !0)),
                (ek._vy = I(0, 50, !0)),
                (ek.scrollX = eT),
                (ek.scrollY = eP),
                (ek.isDragging = ek.isGesturing = ek.isPressed = !1),
                h(this),
                (ek.enable = function (e) {
                  return (
                    !ek.isEnabled &&
                      (E(eA ? eD : v, "scroll", C),
                      g.indexOf("scroll") >= 0 &&
                        E(eA ? eD : v, "scroll", eU, w, ep),
                      g.indexOf("wheel") >= 0 && E(v, "wheel", eG, w, ep),
                      ((g.indexOf("touch") >= 0 && l) ||
                        g.indexOf("pointer") >= 0) &&
                        (E(v, d[0], eW, w, ep),
                        E(eD, d[2], eH),
                        E(eD, d[3], eH),
                        ed && E(v, "click", eX, !1, !0),
                        eu && E(v, "click", e$),
                        ei && E(eD, "gesturestart", eq),
                        ea && E(eD, "gestureend", eV),
                        ee && E(v, c + "enter", eK),
                        et && E(v, c + "leave", eZ),
                        en && E(v, c + "move", ej)),
                      (ek.isEnabled = !0),
                      e && e.type && eW(e),
                      el && el(ek)),
                    ek
                  );
                }),
                (ek.disable = function () {
                  ek.isEnabled &&
                    (m.filter(function (e) {
                      return e !== ek && S(e.target);
                    }).length || T(eA ? eD : v, "scroll", C),
                    ek.isPressed &&
                      (ek._vx.reset(),
                      ek._vy.reset(),
                      T(eo ? v : eD, d[1], eL, !0)),
                    T(eA ? eD : v, "scroll", eU, ep),
                    T(v, "wheel", eG, ep),
                    T(v, d[0], eW, ep),
                    T(eD, d[2], eH),
                    T(eD, d[3], eH),
                    T(v, "click", eX, !0),
                    T(v, "click", e$),
                    T(eD, "gesturestart", eq),
                    T(eD, "gestureend", eV),
                    T(v, c + "enter", eK),
                    T(v, c + "leave", eZ),
                    T(v, c + "move", ej),
                    (ek.isEnabled = ek.isPressed = ek.isDragging = !1),
                    ec && ec(ek));
                }),
                (ek.kill = ek.revert =
                  function () {
                    ek.disable();
                    var e = m.indexOf(ek);
                    e >= 0 && m.splice(e, 1), p === ek && (p = 0);
                  }),
                m.push(ek),
                eo && S(v) && (p = ek),
                ek.enable(O);
            }),
            t(f.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e && t(f, e),
            f
          );
        })();
        (N.version = "3.11.4"),
          (N.create = function (e) {
            return new N(e);
          }),
          (N.register = F),
          (N.getAll = function () {
            return m.slice();
          }),
          (N.getById = function (e) {
            return m.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          g() && n.registerPlugin(N);
        /*!
         * ScrollTrigger 3.11.4
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var L,
          W,
          H,
          q,
          V,
          U,
          G,
          j,
          K,
          Z,
          $,
          J,
          Q,
          ee,
          et,
          en,
          er,
          eo,
          ei,
          ea,
          es,
          el,
          ec,
          eu,
          ef,
          ep,
          ed,
          eh,
          eg,
          ev,
          em,
          ey,
          ex,
          eb,
          ew = 1,
          e_ = Date.now,
          ek = e_(),
          eS = 0,
          eE = 0,
          eT = function () {
            return (ee = 1);
          },
          eP = function () {
            return (ee = 0);
          },
          eM = function (e) {
            return e;
          },
          eC = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          eO = function () {
            return "undefined" != typeof window;
          },
          eA = function () {
            return L || (eO() && (L = window.gsap) && L.registerPlugin && L);
          },
          eD = function (e) {
            return !!~G.indexOf(e);
          },
          eR = function (e) {
            return (
              k(e, "getBoundingClientRect") ||
              (eD(e)
                ? function () {
                    return (
                      (tz.width = H.innerWidth), (tz.height = H.innerHeight), tz
                    );
                  }
                : function () {
                    return e4(e);
                  })
            );
          },
          eY = function (e, t, n) {
            var r = n.d,
              o = n.d2,
              i = n.a;
            return (i = k(e, "getBoundingClientRect"))
              ? function () {
                  return i()[r];
                }
              : function () {
                  return (t ? H["inner" + o] : e["client" + o]) || 0;
                };
          },
          eI = function (e, t) {
            var n = t.s,
              r = t.d2,
              o = t.d,
              i = t.a;
            return (i = k(e, (n = "scroll" + r)))
              ? i() - eR(e)()[o]
              : eD(e)
              ? (V[n] || U[n]) -
                (H["inner" + r] || V["client" + r] || U["client" + r])
              : e[n] - e["offset" + r];
          },
          eX = function (e, t) {
            for (var n = 0; n < ei.length; n += 3)
              (!t || ~t.indexOf(ei[n + 1])) && e(ei[n], ei[n + 1], ei[n + 2]);
          },
          ez = function (e) {
            return "string" == typeof e;
          },
          eB = function (e) {
            return "function" == typeof e;
          },
          eF = function (e) {
            return "number" == typeof e;
          },
          eN = function (e) {
            return "object" == typeof e;
          },
          eL = function (e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause();
          },
          eW = function (e, t) {
            if (e.enabled) {
              var n = t(e);
              n && n.totalTime && (e.callbackAnimation = n);
            }
          },
          eH = Math.abs,
          eq = "left",
          eV = "right",
          eU = "bottom",
          eG = "width",
          ej = "height",
          eK = "Right",
          eZ = "Left",
          e$ = "Bottom",
          eJ = "padding",
          eQ = "margin",
          e0 = "Width",
          e1 = "Height",
          e2 = function (e) {
            return H.getComputedStyle(e);
          },
          e3 = function (e) {
            var t = e2(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          e5 = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          e4 = function (e, t) {
            var n =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== e2(e)[et] &&
                L.to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              r = e.getBoundingClientRect();
            return n && n.progress(0).kill(), r;
          },
          e6 = function (e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0;
          },
          e8 = function (e) {
            var t,
              n = [],
              r = e.labels,
              o = e.duration();
            for (t in r) n.push(r[t] / o);
            return n;
          },
          e9 = function (e) {
            var t = L.utils.snap(e),
              n =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return n
              ? function (e, r, o) {
                  var i;
                  if ((void 0 === o && (o = 0.001), !r)) return t(e);
                  if (r > 0) {
                    for (e -= o, i = 0; i < n.length; i++)
                      if (n[i] >= e) return n[i];
                    return n[i - 1];
                  }
                  for (i = n.length, e += o; i--; ) if (n[i] <= e) return n[i];
                  return n[0];
                }
              : function (n, r, o) {
                  void 0 === o && (o = 0.001);
                  var i = t(n);
                  return !r || Math.abs(i - n) < o || i - n < 0 == r < 0
                    ? i
                    : t(r < 0 ? n - e : n + e);
                };
          },
          e7 = function (e, t, n, r) {
            return n.split(",").forEach(function (n) {
              return e(t, n, r);
            });
          },
          te = function (e, t, n, r, o) {
            return e.addEventListener(t, n, { passive: !r, capture: !!o });
          },
          tt = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          tn = function (e, t, n) {
            return n && n.wheelHandler && e(t, "wheel", n);
          },
          tr = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          to = { toggleActions: "play", anticipatePin: 0 },
          ti = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          ta = function (e, t) {
            if (ez(e)) {
              var n = e.indexOf("="),
                r = ~n
                  ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1))
                  : 0;
              ~n &&
                (e.indexOf("%") > n && (r *= t / 100),
                (e = e.substr(0, n - 1))),
                (e =
                  r +
                  (e in ti
                    ? ti[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          ts = function (e, t, n, r, o, i, a, s) {
            var l = o.startColor,
              c = o.endColor,
              u = o.fontSize,
              f = o.indent,
              p = o.fontWeight,
              d = q.createElement("div"),
              h = eD(n) || "fixed" === k(n, "pinType"),
              g = -1 !== e.indexOf("scroller"),
              v = h ? U : n,
              m = -1 !== e.indexOf("start"),
              y = m ? l : c,
              x =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                p +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (x += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
              (g || s || !h) &&
                (x += (r === D ? eV : eU) + ":" + (i + parseFloat(f)) + "px;"),
              a &&
                (x +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (d._isStart = m),
              d.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (d.style.cssText = x),
              (d.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(d, v.children[0])
                : v.appendChild(d),
              (d._offset = d["offset" + r.op.d2]),
              tl(d, 0, r, m),
              d
            );
          },
          tl = function (e, t, n, r) {
            var o = { display: "block" },
              i = n[r ? "os2" : "p2"],
              a = n[r ? "p2" : "os2"];
            (e._isFlipped = r),
              (o[n.a + "Percent"] = r ? -100 : 0),
              (o[n.a] = r ? "1px" : 0),
              (o["border" + i + e0] = 1),
              (o["border" + a + e0] = 0),
              (o[n.p] = t + "px"),
              L.set(e, o);
          },
          tc = [],
          tu = {},
          tf = function () {
            return e_() - eS > 34 && (em || (em = requestAnimationFrame(tM)));
          },
          tp = function () {
            (ec && ec.isPressed && !(ec.startX > U.clientWidth)) ||
              (y.cache++,
              ec ? em || (em = requestAnimationFrame(tM)) : tM(),
              eS || ty("scrollStart"),
              (eS = e_()));
          },
          td = function () {
            (ep = H.innerWidth), (ef = H.innerHeight);
          },
          th = function () {
            y.cache++,
              !(
                !Q &&
                !el &&
                !q.fullscreenElement &&
                !q.webkitFullscreenElement &&
                (!eu ||
                  ep !== H.innerWidth ||
                  Math.abs(H.innerHeight - ef) > 0.25 * H.innerHeight)
              ) || j.restart(!0);
          },
          tg = {},
          tv = [],
          tm = function e() {
            return tt(tW, "scrollEnd", e) || tE(!0);
          },
          ty = function (e) {
            return (
              (tg[e] &&
                tg[e].map(function (e) {
                  return e();
                })) ||
              tv
            );
          },
          tx = [],
          tb = function (e) {
            for (var t = 0; t < tx.length; t += 5)
              (!e || (tx[t + 4] && tx[t + 4].query === e)) &&
                ((tx[t].style.cssText = tx[t + 1]),
                tx[t].getBBox &&
                  tx[t].setAttribute("transform", tx[t + 2] || ""),
                (tx[t + 3].uncache = 1));
          },
          tw = function (e, t) {
            var n;
            for (en = 0; en < tc.length; en++)
              (n = tc[en]) &&
                (!t || n._ctx === t) &&
                (e ? n.kill(1) : n.revert(!0, !0));
            t && tb(t), t || ty("revert");
          },
          t_ = function (e, t) {
            y.cache++,
              (t || !ey) &&
                y.forEach(function (e) {
                  return eB(e) && e.cacheID++ && (e.rec = 0);
                }),
              ez(e) && (H.history.scrollRestoration = eg = e);
          },
          tk = 0,
          tS = function () {
            if (ex !== tk) {
              var e = (ex = tk);
              requestAnimationFrame(function () {
                return e === tk && tE(!0);
              });
            }
          },
          tE = function (e, t) {
            if (eS && !e) {
              te(tW, "scrollEnd", tm);
              return;
            }
            (ey = tW.isRefreshing = !0),
              y.forEach(function (e) {
                return eB(e) && e.cacheID++ && (e.rec = e());
              });
            var n = ty("refreshInit");
            ea && tW.sort(),
              t || tw(),
              y.forEach(function (e) {
                eB(e) &&
                  (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
              }),
              tc.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              tc.forEach(function (e, t) {
                if (e._subPinOffset && e.pin) {
                  var n = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    r = e.pin[n];
                  e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[n] - r),
                    e.revert(!1, 1);
                }
              }),
              tc.forEach(function (e) {
                return (
                  "max" === e.vars.end &&
                  e.setPositions(
                    e.start,
                    Math.max(e.start + 1, eI(e.scroller, e._dir))
                  )
                );
              }),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              y.forEach(function (e) {
                eB(e) &&
                  (e.smooth &&
                    requestAnimationFrame(function () {
                      return (e.target.style.scrollBehavior = "smooth");
                    }),
                  e.rec && e(e.rec));
              }),
              t_(eg, 1),
              j.pause(),
              tk++,
              tM(2),
              tc.forEach(function (e) {
                return eB(e.vars.onRefresh) && e.vars.onRefresh(e);
              }),
              (ey = tW.isRefreshing = !1),
              ty("refresh");
          },
          tT = 0,
          tP = 1,
          tM = function (e) {
            if (!ey || 2 === e) {
              (tW.isUpdating = !0), eb && eb.update(0);
              var t = tc.length,
                n = e_(),
                r = n - ek >= 50,
                o = t && tc[0].scroll();
              if (
                ((tP = tT > o ? -1 : 1),
                (tT = o),
                r &&
                  (eS && !ee && n - eS > 200 && ((eS = 0), ty("scrollEnd")),
                  ($ = ek),
                  (ek = n)),
                tP < 0)
              ) {
                for (en = t; en-- > 0; ) tc[en] && tc[en].update(0, r);
                tP = 1;
              } else for (en = 0; en < t; en++) tc[en] && tc[en].update(0, r);
              tW.isUpdating = !1;
            }
            em = 0;
          },
          tC = [
            eq,
            "top",
            eU,
            eV,
            eQ + e$,
            eQ + eK,
            eQ + "Top",
            eQ + eZ,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          tO = tC.concat([
            eG,
            ej,
            "boxSizing",
            "max" + e0,
            "max" + e1,
            "position",
            eQ,
            eJ,
            eJ + "Top",
            eJ + eK,
            eJ + e$,
            eJ + eZ,
          ]),
          tA = function (e, t, n) {
            tY(n);
            var r = e._gsap;
            if (r.spacerIsNative) tY(r.spacerState);
            else if (e._gsap.swappedIn) {
              var o = t.parentNode;
              o && (o.insertBefore(e, t), o.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          tD = function (e, t, n, r) {
            if (!e._gsap.swappedIn) {
              for (var o, i = tC.length, a = t.style, s = e.style; i--; )
                a[(o = tC[i])] = n[o];
              (a.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (a.display = "inline-block"),
                (s[eU] = s[eV] = "auto"),
                (a.flexBasis = n.flexBasis || "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[eG] = e6(e, A) + "px"),
                (a[ej] = e6(e, D) + "px"),
                (a[eJ] = s[eQ] = s.top = s[eq] = "0"),
                tY(r),
                (s[eG] = s["max" + e0] = n[eG]),
                (s[ej] = s["max" + e1] = n[ej]),
                (s[eJ] = n[eJ]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          tR = /([A-Z])/g,
          tY = function (e) {
            if (e) {
              var t,
                n,
                r = e.t.style,
                o = e.length,
                i = 0;
              for (
                (e.t._gsap || L.core.getCache(e.t)).uncache = 1;
                i < o;
                i += 2
              )
                (n = e[i + 1]),
                  (t = e[i]),
                  n
                    ? (r[t] = n)
                    : r[t] &&
                      r.removeProperty(t.replace(tR, "-$1").toLowerCase());
            }
          },
          tI = function (e) {
            for (var t = tO.length, n = e.style, r = [], o = 0; o < t; o++)
              r.push(tO[o], n[tO[o]]);
            return (r.t = e), r;
          },
          tX = function (e, t, n) {
            for (var r, o = [], i = e.length, a = n ? 8 : 0; a < i; a += 2)
              (r = e[a]), o.push(r, r in t ? t[r] : e[a + 1]);
            return (o.t = e.t), o;
          },
          tz = { left: 0, top: 0 },
          tB = function (e, t, n, r, o, i, a, s, l, c, u, f, p) {
            eB(e) && (e = e(s)),
              ez(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? ta("0" + e.substr(3), n) : 0));
            var d,
              h,
              g,
              v = p ? p.time() : 0;
            if ((p && p.seek(0), eF(e))) a && tl(a, n, r, !0);
            else {
              eB(t) && (t = t(s));
              var m,
                y,
                x,
                b,
                w = (e || "0").split(" ");
              (m = e4((g = R(t) || U)) || {}).left ||
                m.top ||
                "none" !== e2(g).display ||
                ((b = g.style.display),
                (g.style.display = "block"),
                (m = e4(g)),
                b ? (g.style.display = b) : g.style.removeProperty("display")),
                (y = ta(w[0], m[r.d])),
                (x = ta(w[1] || "0", n)),
                (e = m[r.p] - l[r.p] - c + y + o - x),
                a && tl(a, x, r, n - x < 20 || (a._isStart && x > 20)),
                (n -= n - x);
            }
            if (i) {
              var _ = e + n,
                k = i._isStart;
              (d = "scroll" + r.d2),
                tl(
                  i,
                  _,
                  r,
                  (k && _ > 20) ||
                    (!k &&
                      (u ? Math.max(U[d], V[d]) : i.parentNode[d]) <= _ + 1)
                ),
                u &&
                  ((l = e4(a)),
                  u &&
                    (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + "px"));
            }
            return (
              p &&
                g &&
                ((d = e4(g)),
                p.seek(f),
                (h = e4(g)),
                (p._caScrollDist = d[r.p] - h[r.p]),
                (e = (e / p._caScrollDist) * f)),
              p && p.seek(v),
              p ? e : Math.round(e)
            );
          },
          tF = /(webkit|moz|length|cssText|inset)/i,
          tN = function (e, t, n, r) {
            if (e.parentNode !== t) {
              var o,
                i,
                a = e.style;
              if (t === U) {
                for (o in ((e._stOrig = a.cssText), (i = e2(e))))
                  +o ||
                    tF.test(o) ||
                    !i[o] ||
                    "string" != typeof a[o] ||
                    "0" === o ||
                    (a[o] = i[o]);
                (a.top = n), (a.left = r);
              } else a.cssText = e._stOrig;
              (L.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          tL = function (e, t) {
            var n,
              r,
              o = Y(e, t),
              i = "_scroll" + t.p2,
              a = function t(a, s, l, c, u) {
                var f = t.tween,
                  p = s.onComplete,
                  d = {};
                return (
                  (l = l || o()),
                  (u = (c && u) || 0),
                  (c = c || a - l),
                  f && f.kill(),
                  (n = Math.round(l)),
                  (s[i] = a),
                  (s.modifiers = d),
                  (d[i] = function (e) {
                    return (
                      (e = Math.round(o())) !== n &&
                      e !== r &&
                      Math.abs(e - n) > 3 &&
                      Math.abs(e - r) > 3
                        ? (f.kill(), (t.tween = 0))
                        : (e = l + c * f.ratio + u * f.ratio * f.ratio),
                      (r = n),
                      (n = Math.round(e))
                    );
                  }),
                  (s.onUpdate = function () {
                    y.cache++, tM();
                  }),
                  (s.onComplete = function () {
                    (t.tween = 0), p && p.call(f);
                  }),
                  (f = t.tween = L.to(e, s))
                );
              };
            return (
              (e[i] = o),
              (o.wheelHandler = function () {
                return a.tween && a.tween.kill() && (a.tween = 0);
              }),
              te(e, "wheel", o.wheelHandler),
              a
            );
          },
          tW = (function () {
            function e(t, n) {
              W ||
                e.register(L) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(t, n);
            }
            return (
              (e.prototype.init = function (t, n) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !eE)
                ) {
                  this.update = this.refresh = this.kill = eM;
                  return;
                }
                var r,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u,
                  f,
                  p,
                  d,
                  h,
                  g,
                  v,
                  m,
                  b,
                  w,
                  _,
                  S,
                  E,
                  T,
                  P,
                  M,
                  C,
                  O,
                  I,
                  X,
                  z,
                  B,
                  F,
                  N,
                  W,
                  G,
                  j,
                  J,
                  et,
                  er,
                  eo,
                  ei,
                  el,
                  ec,
                  eu = (t = e5(
                    ez(t) || eF(t) || t.nodeType ? { trigger: t } : t,
                    to
                  )),
                  ef = eu.onUpdate,
                  ep = eu.toggleClass,
                  ed = eu.id,
                  eg = eu.onToggle,
                  em = eu.onRefresh,
                  ex = eu.scrub,
                  ek = eu.trigger,
                  eT = eu.pin,
                  eP = eu.pinSpacing,
                  eO = eu.invalidateOnRefresh,
                  eA = eu.anticipatePin,
                  eX = eu.onScrubComplete,
                  eq = eu.onSnapComplete,
                  eV = eu.once,
                  eU = eu.snap,
                  e7 = eu.pinReparent,
                  tn = eu.pinSpacer,
                  ti = eu.containerAnimation,
                  tl = eu.fastScrollEnd,
                  tf = eu.preventOverlaps,
                  td =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? A
                      : D,
                  tg = !ex && 0 !== ex,
                  tv = R(t.scroller || H),
                  ty = L.core.getCache(tv),
                  tx = eD(tv),
                  tb =
                    ("pinType" in t
                      ? t.pinType
                      : k(tv, "pinType") || (tx && "fixed")) === "fixed",
                  tw = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  t_ = tg && t.toggleActions.split(" "),
                  tk = "markers" in t ? t.markers : to.markers,
                  tE = tx ? 0 : parseFloat(e2(tv)["border" + td.p2 + e0]) || 0,
                  tT = this,
                  tM =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(tT);
                    },
                  tC = eY(tv, tx, td),
                  tO =
                    !tx || ~x.indexOf(tv)
                      ? eR(tv)
                      : function () {
                          return tz;
                        },
                  tR = 0,
                  tF = 0,
                  tW = Y(tv, td);
                if (
                  (eh(tT),
                  (tT._dir = td),
                  (eA *= 45),
                  (tT.scroller = tv),
                  (tT.scroll = ti ? ti.time.bind(ti) : tW),
                  (l = tW()),
                  (tT.vars = t),
                  (n = n || t.animation),
                  "refreshPriority" in t &&
                    ((ea = 1), -9999 === t.refreshPriority && (eb = tT)),
                  (ty.tweenScroll = ty.tweenScroll || {
                    top: tL(tv, D),
                    left: tL(tv, A),
                  }),
                  (tT.tweenTo = i = ty.tweenScroll[td.p]),
                  (tT.scrubDuration = function (e) {
                    (j = eF(e) && e)
                      ? G
                        ? G.duration(e)
                        : (G = L.to(n, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: j,
                            paused: !0,
                            onComplete: function () {
                              return eX && eX(tT);
                            },
                          }))
                      : (G && G.progress(1).kill(), (G = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    n._initted ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        n.duration() &&
                        n.render(0, !0, !0)),
                    (tT.animation = n.pause()),
                    (n.scrollTrigger = tT),
                    tT.scrubDuration(ex),
                    (N = 0),
                    ed || (ed = n.vars.id)),
                  tc.push(tT),
                  eU &&
                    ((!eN(eU) || eU.push) && (eU = { snapTo: eU }),
                    "scrollBehavior" in U.style &&
                      L.set(tx ? [U, V] : tv, { scrollBehavior: "auto" }),
                    y.forEach(function (e) {
                      return (
                        eB(e) &&
                        e.target === (tx ? q.scrollingElement || V : tv) &&
                        (e.smooth = !1)
                      );
                    }),
                    (s = eB(eU.snapTo)
                      ? eU.snapTo
                      : "labels" === eU.snapTo
                      ? ((r = n),
                        function (e) {
                          return L.utils.snap(e8(r), e);
                        })
                      : "labelsDirectional" === eU.snapTo
                      ? ((o = n),
                        function (e, t) {
                          return e9(e8(o))(e, t.direction);
                        })
                      : !1 !== eU.directional
                      ? function (e, t) {
                          return e9(eU.snapTo)(
                            e,
                            e_() - tF < 500 ? 0 : t.direction
                          );
                        }
                      : L.utils.snap(eU.snapTo)),
                    (J = eN((J = eU.duration || { min: 0.1, max: 2 }))
                      ? Z(J.min, J.max)
                      : Z(J, J)),
                    (et = L.delayedCall(eU.delay || j / 2 || 0.1, function () {
                      var e = tW(),
                        t = e_() - tF < 500,
                        r = i.tween;
                      if (
                        (t || 10 > Math.abs(tT.getVelocity())) &&
                        !r &&
                        !ee &&
                        tR !== e
                      ) {
                        var o = (e - u) / m,
                          a = n && !tg ? n.totalProgress() : o,
                          l = t ? 0 : ((a - W) / (e_() - $)) * 1e3 || 0,
                          c = L.utils.clamp(-o, 1 - o, (eH(l / 2) * l) / 0.185),
                          p = o + (!1 === eU.inertia ? 0 : c),
                          d = Z(0, 1, s(p, tT)),
                          h = Math.round(u + d * m),
                          g = eU,
                          v = g.onStart,
                          y = g.onInterrupt,
                          x = g.onComplete;
                        if (e <= f && e >= u && h !== e) {
                          if (r && !r._initted && r.data <= eH(h - e)) return;
                          !1 === eU.inertia && (c = d - o),
                            i(
                              h,
                              {
                                duration: J(
                                  eH(
                                    (0.185 * Math.max(eH(p - a), eH(d - a))) /
                                      l /
                                      0.05 || 0
                                  )
                                ),
                                ease: eU.ease || "power3",
                                data: eH(h - e),
                                onInterrupt: function () {
                                  return et.restart(!0) && y && y(tT);
                                },
                                onComplete: function () {
                                  tT.update(),
                                    (tR = tW()),
                                    (N = W =
                                      n && !tg
                                        ? n.totalProgress()
                                        : tT.progress),
                                    eq && eq(tT),
                                    x && x(tT);
                                },
                              },
                              e,
                              c * m,
                              h - e - c * m
                            ),
                            v && v(tT, i.tween);
                        }
                      } else tT.isActive && tR !== e && et.restart(!0);
                    }).pause())),
                  ed && (tu[ed] = tT),
                  (ec =
                    (ek = tT.trigger = R(ek || eT)) &&
                    ek._gsap &&
                    ek._gsap.stRevert) && (ec = ec(tT)),
                  (eT = !0 === eT ? ek : R(eT)),
                  ez(ep) && (ep = { targets: ek, className: ep }),
                  eT &&
                    (!1 === eP ||
                      eP === eQ ||
                      (eP =
                        (!!eP ||
                          !eT.parentNode ||
                          !eT.parentNode.style ||
                          "flex" !== e2(eT.parentNode).display) &&
                        eJ),
                    (tT.pin = eT),
                    (a = L.core.getCache(eT)).spacer
                      ? (b = a.pinState)
                      : (tn &&
                          ((tn = R(tn)) &&
                            !tn.nodeType &&
                            (tn = tn.current || tn.nativeElement),
                          (a.spacerIsNative = !!tn),
                          tn && (a.spacerState = tI(tn))),
                        (a.spacer = S = tn || q.createElement("div")),
                        S.classList.add("pin-spacer"),
                        ed && S.classList.add("pin-spacer-" + ed),
                        (a.pinState = b = tI(eT))),
                    !1 !== t.force3D && L.set(eT, { force3D: !0 }),
                    (tT.spacer = S = a.spacer),
                    (O = (F = e2(eT))[eP + td.os2]),
                    (T = L.getProperty(eT)),
                    (P = L.quickSetter(eT, td.a, "px")),
                    tD(eT, S, F),
                    (_ = tI(eT))),
                  tk)
                ) {
                  (h = ts(
                    "scroller-start",
                    ed,
                    tv,
                    td,
                    (v = eN(tk) ? e5(tk, tr) : tr),
                    0
                  )),
                    (g = ts("scroller-end", ed, tv, td, v, 0, h)),
                    (E = h["offset" + td.op.d2]);
                  var tH = R(k(tv, "content") || tv);
                  (p = this.markerStart = ts("start", ed, tH, td, v, E, 0, ti)),
                    (d = this.markerEnd = ts("end", ed, tH, td, v, E, 0, ti)),
                    ti && (el = L.quickSetter([p, d], td.a, "px")),
                    tb ||
                      (x.length && !0 === k(tv, "fixedMarkers")) ||
                      (e3(tx ? U : tv),
                      L.set([h, g], { force3D: !0 }),
                      (X = L.quickSetter(h, td.a, "px")),
                      (B = L.quickSetter(g, td.a, "px")));
                }
                if (ti) {
                  var tq = ti.vars.onUpdate,
                    tV = ti.vars.onUpdateParams;
                  ti.eventCallback("onUpdate", function () {
                    tT.update(0, 0, 1), tq && tq.apply(tV || []);
                  });
                }
                (tT.previous = function () {
                  return tc[tc.indexOf(tT) - 1];
                }),
                  (tT.next = function () {
                    return tc[tc.indexOf(tT) + 1];
                  }),
                  (tT.revert = function (e, t) {
                    if (!t) return tT.kill(!0);
                    var r = !1 !== e || !tT.enabled,
                      o = Q;
                    r !== tT.isReverted &&
                      (r &&
                        ((eo = Math.max(tW(), tT.scroll.rec || 0)),
                        (er = tT.progress),
                        (ei = n && n.progress())),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return (e.style.display = r ? "none" : "block");
                        }),
                      r && ((Q = 1), tT.update(r)),
                      !eT ||
                        (e7 && tT.isActive) ||
                        (r ? tA(eT, S, b) : tD(eT, S, e2(eT), I)),
                      r || tT.update(r),
                      (Q = o),
                      (tT.isReverted = r));
                  }),
                  (tT.refresh = function (r, o) {
                    if ((!Q && tT.enabled) || o) {
                      if (eT && r && eS) {
                        te(e, "scrollEnd", tm);
                        return;
                      }
                      !ey && tM && tM(tT),
                        (Q = 1),
                        (tF = e_()),
                        i.tween && (i.tween.kill(), (i.tween = 0)),
                        G && G.pause(),
                        eO && n && n.revert({ kill: !1 }).invalidate(),
                        tT.isReverted || tT.revert(!0, !0),
                        (tT._subPinOffset = !1);
                      for (
                        var a,
                          s,
                          v,
                          y,
                          x,
                          k,
                          E,
                          P,
                          O,
                          X,
                          B,
                          F = tC(),
                          N = tO(),
                          W = ti ? ti.duration() : eI(tv, td),
                          H = 0,
                          j = 0,
                          K = t.end,
                          Z = t.endTrigger || ek,
                          $ =
                            t.start ||
                            (0 !== t.start && ek ? (eT ? "0 0" : "0 100%") : 0),
                          J = (tT.pinnedContainer =
                            t.pinnedContainer && R(t.pinnedContainer)),
                          ee = (ek && Math.max(0, tc.indexOf(tT))) || 0,
                          en = ee;
                        en--;

                      )
                        (k = tc[en]).end || k.refresh(0, 1) || (Q = 1),
                          (E = k.pin) &&
                            (E === ek || E === eT) &&
                            !k.isReverted &&
                            (X || (X = []), X.unshift(k), k.revert(!0, !0)),
                          k !== tc[en] && (ee--, en--);
                      for (
                        eB($) && ($ = $(tT)),
                          u =
                            tB(
                              $,
                              ek,
                              F,
                              td,
                              tW(),
                              p,
                              h,
                              tT,
                              N,
                              tE,
                              tb,
                              W,
                              ti
                            ) || (eT ? -0.001 : 0),
                          eB(K) && (K = K(tT)),
                          ez(K) &&
                            !K.indexOf("+=") &&
                            (~K.indexOf(" ")
                              ? (K = (ez($) ? $.split(" ")[0] : "") + K)
                              : ((H = ta(K.substr(2), F)),
                                (K = ez($) ? $ : u + H),
                                (Z = ek))),
                          m =
                            (f =
                              Math.max(
                                u,
                                tB(
                                  K || (Z ? "100% 0" : W),
                                  Z,
                                  F,
                                  td,
                                  tW() + H,
                                  d,
                                  g,
                                  tT,
                                  N,
                                  tE,
                                  tb,
                                  W,
                                  ti
                                )
                              ) || -0.001) - u ||
                            ((u -= 0.01) && 0.001),
                          H = 0,
                          en = ee;
                        en--;

                      )
                        (E = (k = tc[en]).pin) &&
                          k.start - k._pinPush <= u &&
                          !ti &&
                          k.end > 0 &&
                          ((a = k.end - k.start),
                          ((E === ek && k.start - k._pinPush < u) || E === J) &&
                            !eF($) &&
                            (H += a * (1 - k.progress)),
                          E === eT && (j += a));
                      if (
                        ((u += H),
                        (f += H),
                        (tT._pinPush = j),
                        p &&
                          H &&
                          (((a = {})[td.a] = "+=" + H),
                          J && (a[td.p] = "-=" + tW()),
                          L.set([p, d], a)),
                        eT)
                      )
                        (a = e2(eT)),
                          (y = td === D),
                          (v = tW()),
                          (M = parseFloat(T(td.a)) + j),
                          !W &&
                            f > 1 &&
                            ((B = {
                              style: (B = (tx ? q.scrollingElement || V : tv)
                                .style),
                              value: B["overflow" + td.a.toUpperCase()],
                            })["overflow" + td.a.toUpperCase()] = "scroll"),
                          tD(eT, S, a),
                          (_ = tI(eT)),
                          (s = e4(eT, !0)),
                          (P = tb && Y(tv, y ? A : D)()),
                          eP &&
                            (((I = [eP + td.os2, m + j + "px"]).t = S),
                            (en = eP === eJ ? e6(eT, td) + m + j : 0) &&
                              I.push(td.d, en + "px"),
                            tY(I),
                            J &&
                              tc.forEach(function (e) {
                                e.pin === J &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            tb && tW(eo)),
                          tb &&
                            (((x = {
                              top: s.top + (y ? v - u : P) + "px",
                              left: s.left + (y ? P : v - u) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[eG] = x["max" + e0] =
                              Math.ceil(s.width) + "px"),
                            (x[ej] = x["max" + e1] =
                              Math.ceil(s.height) + "px"),
                            (x[eQ] =
                              x[eQ + "Top"] =
                              x[eQ + eK] =
                              x[eQ + e$] =
                              x[eQ + eZ] =
                                "0"),
                            (x[eJ] = a[eJ]),
                            (x[eJ + "Top"] = a[eJ + "Top"]),
                            (x[eJ + eK] = a[eJ + eK]),
                            (x[eJ + e$] = a[eJ + e$]),
                            (x[eJ + eZ] = a[eJ + eZ]),
                            (w = tX(b, x, e7)),
                            ey && tW(0)),
                          n
                            ? ((O = n._initted),
                              es(1),
                              n.render(n.duration(), !0, !0),
                              (C = T(td.a) - M + m + j),
                              (z = Math.abs(m - C) > 1),
                              tb && z && w.splice(w.length - 2, 2),
                              n.render(0, !0, !0),
                              O || n.invalidate(!0),
                              n.parent || n.totalTime(n.totalTime()),
                              es(0))
                            : (C = m),
                          B &&
                            (B.value
                              ? (B.style["overflow" + td.a.toUpperCase()] =
                                  B.value)
                              : B.style.removeProperty("overflow-" + td.a));
                      else if (ek && tW() && !ti)
                        for (s = ek.parentNode; s && s !== U; )
                          s._pinOffset &&
                            ((u -= s._pinOffset), (f -= s._pinOffset)),
                            (s = s.parentNode);
                      X &&
                        X.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (tT.start = u),
                        (tT.end = f),
                        (l = c = ey ? eo : tW()),
                        ti || ey || (l < eo && tW(eo), (tT.scroll.rec = 0)),
                        tT.revert(!1, !0),
                        et &&
                          ((tR = -1),
                          tT.isActive && tW(u + m * er),
                          et.restart(!0)),
                        (Q = 0),
                        n &&
                          tg &&
                          (n._initted || ei) &&
                          n.progress() !== ei &&
                          n.progress(ei, !0).render(n.time(), !0, !0),
                        (er !== tT.progress || ti) &&
                          (n && !tg && n.totalProgress(er, !0),
                          (tT.progress = (l - u) / m === er ? 0 : er)),
                        eT &&
                          eP &&
                          (S._pinOffset = Math.round(tT.progress * C)),
                        em && !ey && em(tT);
                    }
                  }),
                  (tT.getVelocity = function () {
                    return ((tW() - c) / (e_() - $)) * 1e3 || 0;
                  }),
                  (tT.endAnimation = function () {
                    eL(tT.callbackAnimation),
                      n &&
                        (G
                          ? G.progress(1)
                          : n.paused()
                          ? tg || eL(n, tT.direction < 0, 1)
                          : eL(n, n.reversed()));
                  }),
                  (tT.labelToScroll = function (e) {
                    return (
                      (n &&
                        n.labels &&
                        (u || tT.refresh() || u) +
                          (n.labels[e] / n.duration()) * m) ||
                      0
                    );
                  }),
                  (tT.getTrailing = function (e) {
                    var t = tc.indexOf(tT),
                      n =
                        tT.direction > 0
                          ? tc.slice(0, t).reverse()
                          : tc.slice(t + 1);
                    return (
                      ez(e)
                        ? n.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : n
                    ).filter(function (e) {
                      return tT.direction > 0 ? e.end <= u : e.start >= f;
                    });
                  }),
                  (tT.update = function (e, t, r) {
                    if (!ti || r || e) {
                      var o,
                        a,
                        s,
                        p,
                        d,
                        g,
                        v,
                        y = ey ? eo : tT.scroll(),
                        x = e ? 0 : (y - u) / m,
                        b = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                        k = tT.progress;
                      if (
                        (t &&
                          ((c = l),
                          (l = ti ? tW() : y),
                          eU &&
                            ((W = N), (N = n && !tg ? n.totalProgress() : b))),
                        eA &&
                          !b &&
                          eT &&
                          !Q &&
                          !ew &&
                          eS &&
                          u < y + ((y - c) / (e_() - $)) * eA &&
                          (b = 1e-4),
                        b !== k && tT.enabled)
                      ) {
                        if (
                          ((p =
                            (d =
                              (o = tT.isActive = !!b && b < 1) !=
                              (!!k && k < 1)) || !!b != !!k),
                          (tT.direction = b > k ? 1 : -1),
                          (tT.progress = b),
                          p &&
                            !Q &&
                            ((a = b && !k ? 0 : 1 === b ? 1 : 1 === k ? 2 : 3),
                            tg &&
                              ((s =
                                (!d && "none" !== t_[a + 1] && t_[a + 1]) ||
                                t_[a]),
                              (v =
                                n &&
                                ("complete" === s ||
                                  "reset" === s ||
                                  s in n)))),
                          tf &&
                            (d || v) &&
                            (v || ex || !n) &&
                            (eB(tf)
                              ? tf(tT)
                              : tT.getTrailing(tf).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          !tg &&
                            (!G || Q || ew
                              ? n && n.totalProgress(b, !!Q)
                              : (G._dp._time - G._start !== G._time &&
                                  G.render(G._dp._time - G._start),
                                G.resetTo
                                  ? G.resetTo(
                                      "totalProgress",
                                      b,
                                      n._tTime / n._tDur
                                    )
                                  : ((G.vars.totalProgress = b),
                                    G.invalidate().restart()))),
                          eT)
                        ) {
                          if ((e && eP && (S.style[eP + td.os2] = O), tb)) {
                            if (p) {
                              if (
                                ((g =
                                  !e &&
                                  b > k &&
                                  f + 1 > y &&
                                  y + 1 >= eI(tv, td)),
                                e7)
                              ) {
                                if (!e && (o || g)) {
                                  var E = e4(eT, !0),
                                    T = y - u;
                                  tN(
                                    eT,
                                    U,
                                    E.top + (td === D ? T : 0) + "px",
                                    E.left + (td === D ? 0 : T) + "px"
                                  );
                                } else tN(eT, S);
                              }
                              tY(o || g ? w : _),
                                (z && b < 1 && o) ||
                                  P(M + (1 !== b || g ? 0 : C));
                            }
                          } else P(eC(M + C * b));
                        }
                        !eU || i.tween || Q || ew || et.restart(!0),
                          ep &&
                            (d || (eV && b && (b < 1 || !ev))) &&
                            K(ep.targets).forEach(function (e) {
                              return e.classList[o || eV ? "add" : "remove"](
                                ep.className
                              );
                            }),
                          !ef || tg || e || ef(tT),
                          p && !Q
                            ? (tg &&
                                (v &&
                                  ("complete" === s
                                    ? n.pause().totalProgress(1)
                                    : "reset" === s
                                    ? n.restart(!0).pause()
                                    : "restart" === s
                                    ? n.restart(!0)
                                    : n[s]()),
                                ef && ef(tT)),
                              (d || !ev) &&
                                (eg && d && eW(tT, eg),
                                tw[a] && eW(tT, tw[a]),
                                eV && (1 === b ? tT.kill(!1, 1) : (tw[a] = 0)),
                                !d &&
                                  tw[(a = 1 === b ? 1 : 3)] &&
                                  eW(tT, tw[a])),
                              tl &&
                                !o &&
                                Math.abs(tT.getVelocity()) >
                                  (eF(tl) ? tl : 2500) &&
                                (eL(tT.callbackAnimation),
                                G
                                  ? G.progress(1)
                                  : eL(n, "reverse" === s ? 1 : !b, 1)))
                            : tg && ef && !Q && ef(tT);
                      }
                      if (B) {
                        var A = ti
                          ? (y / ti.duration()) * (ti._caScrollDist || 0)
                          : y;
                        X(A + (h._isFlipped ? 1 : 0)), B(A);
                      }
                      el && el((-y / ti.duration()) * (ti._caScrollDist || 0));
                    }
                  }),
                  (tT.enable = function (t, n) {
                    tT.enabled ||
                      ((tT.enabled = !0),
                      te(tv, "resize", th),
                      te(tx ? q : tv, "scroll", tp),
                      tM && te(e, "refreshInit", tM),
                      !1 !== t && ((tT.progress = er = 0), (l = c = tR = tW())),
                      !1 !== n && tT.refresh());
                  }),
                  (tT.getTween = function (e) {
                    return e && i ? i.tween : G;
                  }),
                  (tT.setPositions = function (e, t) {
                    eT &&
                      ((M += e - u),
                      (C += t - e - m),
                      eP === eJ && tT.adjustPinSpacing(t - e - m)),
                      (tT.start = u = e),
                      (tT.end = f = t),
                      (m = t - e),
                      tT.update();
                  }),
                  (tT.adjustPinSpacing = function (e) {
                    if (I) {
                      var t = I.indexOf(td.d) + 1;
                      (I[t] = parseFloat(I[t]) + e + "px"),
                        (I[1] = parseFloat(I[1]) + e + "px"),
                        tY(I);
                    }
                  }),
                  (tT.disable = function (t, n) {
                    if (
                      tT.enabled &&
                      (!1 !== t && tT.revert(!0, !0),
                      (tT.enabled = tT.isActive = !1),
                      n || (G && G.pause()),
                      (eo = 0),
                      a && (a.uncache = 1),
                      tM && tt(e, "refreshInit", tM),
                      et &&
                        (et.pause(),
                        i.tween && i.tween.kill() && (i.tween = 0)),
                      !tx)
                    ) {
                      for (var r = tc.length; r--; )
                        if (tc[r].scroller === tv && tc[r] !== tT) return;
                      tt(tv, "resize", th), tt(tv, "scroll", tp);
                    }
                  }),
                  (tT.kill = function (e, r) {
                    tT.disable(e, r), G && !r && G.kill(), ed && delete tu[ed];
                    var o = tc.indexOf(tT);
                    o >= 0 && tc.splice(o, 1),
                      o === en && tP > 0 && en--,
                      (o = 0),
                      tc.forEach(function (e) {
                        return e.scroller === tT.scroller && (o = 1);
                      }),
                      o || ey || (tT.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        e && n.revert({ kill: !1 }),
                        r || n.kill()),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      eb === tT && (eb = 0),
                      eT &&
                        (a && (a.uncache = 1),
                        (o = 0),
                        tc.forEach(function (e) {
                          return e.pin === eT && o++;
                        }),
                        o || (a.spacer = 0)),
                      t.onKill && t.onKill(tT);
                  }),
                  tT.enable(!1, !1),
                  ec && ec(tT),
                  n && n.add && !m
                    ? L.delayedCall(0.01, function () {
                        return u || f || tT.refresh();
                      }) &&
                      (m = 0.01) &&
                      (u = f = 0)
                    : tT.refresh(),
                  eT && tS();
              }),
              (e.register = function (t) {
                return (
                  W ||
                    ((L = t || eA()),
                    eO() && window.document && e.enable(),
                    (W = eE)),
                  W
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) to[t] = e[t];
                return to;
              }),
              (e.disable = function (e, t) {
                (eE = 0),
                  tc.forEach(function (n) {
                    return n[t ? "kill" : "disable"](e);
                  }),
                  tt(H, "wheel", tp),
                  tt(q, "scroll", tp),
                  clearInterval(J),
                  tt(q, "touchcancel", eM),
                  tt(U, "touchstart", eM),
                  e7(tt, q, "pointerdown,touchstart,mousedown", eT),
                  e7(tt, q, "pointerup,touchend,mouseup", eP),
                  j.kill(),
                  eX(tt);
                for (var n = 0; n < y.length; n += 3)
                  tn(tt, y[n], y[n + 1]), tn(tt, y[n], y[n + 2]);
              }),
              (e.enable = function () {
                if (
                  ((H = window),
                  (V = (q = document).documentElement),
                  (U = q.body),
                  L &&
                    ((K = L.utils.toArray),
                    (Z = L.utils.clamp),
                    (eh = L.core.context || eM),
                    (es = L.core.suppressOverwrites || eM),
                    (eg = H.history.scrollRestoration || "auto"),
                    L.core.globals("ScrollTrigger", e),
                    U))
                ) {
                  (eE = 1),
                    N.register(L),
                    (e.isTouch = N.isTouch),
                    (ed =
                      N.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    te(H, "wheel", tp),
                    (G = [H, q, V, U]),
                    L.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var t,
                            n = L.matchMedia();
                          for (t in e) n.add(t, e[t]);
                          return n;
                        }),
                        L.addEventListener("matchMediaInit", function () {
                          return tw();
                        }),
                        L.addEventListener("matchMediaRevert", function () {
                          return tb();
                        }),
                        L.addEventListener("matchMedia", function () {
                          tE(0, 1), ty("matchMedia");
                        }),
                        L.matchMedia("(orientation: portrait)", function () {
                          return td(), td;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    td(),
                    te(q, "scroll", tp);
                  var t,
                    n,
                    r = U.style,
                    o = r.borderTopStyle,
                    i = L.core.Animation.prototype;
                  for (
                    i.revert ||
                      Object.defineProperty(i, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      r.borderTopStyle = "solid",
                      t = e4(U),
                      D.m = Math.round(t.top + D.sc()) || 0,
                      A.m = Math.round(t.left + A.sc()) || 0,
                      o
                        ? (r.borderTopStyle = o)
                        : r.removeProperty("border-top-style"),
                      J = setInterval(tf, 250),
                      L.delayedCall(0.5, function () {
                        return (ew = 0);
                      }),
                      te(q, "touchcancel", eM),
                      te(U, "touchstart", eM),
                      e7(te, q, "pointerdown,touchstart,mousedown", eT),
                      e7(te, q, "pointerup,touchend,mouseup", eP),
                      et = L.utils.checkPrefix("transform"),
                      tO.push(et),
                      W = e_(),
                      j = L.delayedCall(0.2, tE).pause(),
                      ei = [
                        q,
                        "visibilitychange",
                        function () {
                          var e = H.innerWidth,
                            t = H.innerHeight;
                          q.hidden
                            ? ((er = e), (eo = t))
                            : (er !== e || eo !== t) && th();
                        },
                        q,
                        "DOMContentLoaded",
                        tE,
                        H,
                        "load",
                        tE,
                        H,
                        "resize",
                        th,
                      ],
                      eX(te),
                      tc.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      n = 0;
                    n < y.length;
                    n += 3
                  )
                    tn(tt, y[n], y[n + 1]), tn(tt, y[n], y[n + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (ev = !!t.limitCallbacks);
                var n = t.syncInterval;
                (n && clearInterval(J)) || ((J = n) && setInterval(tf, n)),
                  "ignoreMobileResize" in t &&
                    (eu = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (eX(tt) || eX(te, t.autoRefreshEvents || "none"),
                    (el = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var n = R(e),
                  r = y.indexOf(n),
                  o = eD(n);
                ~r && y.splice(r, o ? 6 : 2),
                  t && (o ? x.unshift(H, t, U, t, V, t) : x.unshift(n, t));
              }),
              (e.clearMatchMedia = function (e) {
                tc.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (e, t, n) {
                var r = (ez(e) ? R(e) : e).getBoundingClientRect(),
                  o = r[n ? eG : ej] * t || 0;
                return n
                  ? r.right - o > 0 && r.left + o < H.innerWidth
                  : r.bottom - o > 0 && r.top + o < H.innerHeight;
              }),
              (e.positionInViewport = function (e, t, n) {
                ez(e) && (e = R(e));
                var r = e.getBoundingClientRect(),
                  o = r[n ? eG : ej],
                  i =
                    null == t
                      ? o / 2
                      : t in ti
                      ? ti[t] * o
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * o) / 100
                      : parseFloat(t) || 0;
                return n
                  ? (r.left + i) / H.innerWidth
                  : (r.top + i) / H.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (tc.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = tg.killAll || [];
                  (tg = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (tW.version = "3.11.4"),
          (tW.saveStyles = function (e) {
            return e
              ? K(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = tx.indexOf(e);
                    t >= 0 && tx.splice(t, 5),
                      tx.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        L.core.getCache(e),
                        eh()
                      );
                  }
                })
              : tx;
          }),
          (tW.revert = function (e, t) {
            return tw(!e, t);
          }),
          (tW.create = function (e, t) {
            return new tW(e, t);
          }),
          (tW.refresh = function (e) {
            return e ? th() : (W || tW.register()) && tE(!0);
          }),
          (tW.update = function (e) {
            return ++y.cache && tM(!0 === e ? 2 : 0);
          }),
          (tW.clearScrollMemory = t_),
          (tW.maxScroll = function (e, t) {
            return eI(e, t ? A : D);
          }),
          (tW.getScrollFunc = function (e, t) {
            return Y(R(e), t ? A : D);
          }),
          (tW.getById = function (e) {
            return tu[e];
          }),
          (tW.getAll = function () {
            return tc.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (tW.isScrolling = function () {
            return !!eS;
          }),
          (tW.snapDirectional = e9),
          (tW.addEventListener = function (e, t) {
            var n = tg[e] || (tg[e] = []);
            ~n.indexOf(t) || n.push(t);
          }),
          (tW.removeEventListener = function (e, t) {
            var n = tg[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          }),
          (tW.batch = function (e, t) {
            var n,
              r = [],
              o = {},
              i = t.interval || 0.016,
              a = t.batchMax || 1e9,
              s = function (e, t) {
                var n = [],
                  r = [],
                  o = L.delayedCall(i, function () {
                    t(n, r), (n = []), (r = []);
                  }).pause();
                return function (e) {
                  n.length || o.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    a <= n.length && o.progress(1);
                };
              };
            for (n in t)
              o[n] =
                "on" === n.substr(0, 2) && eB(t[n]) && "onRefreshInit" !== n
                  ? s(n, t[n])
                  : t[n];
            return (
              eB(a) &&
                ((a = a()),
                te(tW, "refresh", function () {
                  return (a = t.batchMax());
                })),
              K(e).forEach(function (e) {
                var t = {};
                for (n in o) t[n] = o[n];
                (t.trigger = e), r.push(tW.create(t));
              }),
              r
            );
          });
        var tH,
          tq = function (e, t, n, r) {
            return (
              t > r ? e(r) : t < 0 && e(0),
              n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
            );
          },
          tV = function e(t, n) {
            !0 === n
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === n
                    ? "auto"
                    : n
                    ? "pan-" + n + (N.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === V && e(U, n);
          },
          tU = { auto: 1, scroll: 1 },
          tG = function (e) {
            var t,
              n = e.event,
              r = e.target,
              o = e.axis,
              i = (n.changedTouches ? n.changedTouches[0] : n).target,
              a = i._gsap || L.core.getCache(i),
              s = e_();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
              for (
                ;
                i &&
                i !== U &&
                ((i.scrollHeight <= i.clientHeight &&
                  i.scrollWidth <= i.clientWidth) ||
                  !(tU[(t = e2(i)).overflowY] || tU[t.overflowX]));

              )
                i = i.parentNode;
              (a._isScroll =
                i &&
                i !== r &&
                !eD(i) &&
                (tU[(t = e2(i)).overflowY] || tU[t.overflowX])),
                (a._isScrollT = s);
            }
            (a._isScroll || "x" === o) &&
              (n.stopPropagation(), (n._gsapAllow = !0));
          },
          tj = function (e, t, n, r) {
            return N.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (r = r && tG),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && te(q, N.eventTypes[0], tZ, !1, !0);
              },
              onDisable: function () {
                return tt(q, N.eventTypes[0], tZ, !0);
              },
            });
          },
          tK = /(input|label|select|textarea)/i,
          tZ = function (e) {
            var t = tK.test(e.target.tagName);
            (t || tH) && ((e._gsapAllow = !0), (tH = t));
          },
          t$ = function (e) {
            eN(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              l,
              c = e,
              u = c.normalizeScrollX,
              f = c.momentum,
              p = c.allowNestedScroll,
              d = R(e.target) || V,
              h = L.core.globals().ScrollSmoother,
              g = h && h.get(),
              v =
                ed &&
                ((e.content && R(e.content)) ||
                  (g && !1 !== e.content && !g.smooth() && g.content())),
              m = Y(d, D),
              x = Y(d, A),
              b = 1,
              w =
                (N.isTouch && H.visualViewport
                  ? H.visualViewport.scale * H.visualViewport.width
                  : H.outerWidth) / H.innerWidth,
              _ = 0,
              k = eB(f)
                ? function () {
                    return f(t);
                  }
                : function () {
                    return f || 2.8;
                  },
              S = tj(d, e.type, !0, p),
              E = function () {
                return (o = !1);
              },
              T = eM,
              P = eM,
              M = function () {
                (P = Z(ed ? 1 : 0, (n = eI(d, D)))),
                  u && (T = Z(0, eI(d, A))),
                  (r = tk);
              },
              C = function () {
                (v._gsap.y = eC(parseFloat(v._gsap.y) + m.offset) + "px"),
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(v._gsap.y) +
                    ", 0, 1)"),
                  (m.offset = m.cacheID = 0);
              },
              O = function () {
                if (o) {
                  requestAnimationFrame(E);
                  var e = eC(t.deltaY / 2),
                    n = P(m.v - e);
                  if (v && n !== m.v + m.offset) {
                    m.offset = n - m.v;
                    var r = eC((parseFloat(v && v._gsap.y) || 0) - m.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (v._gsap.y = r + "px"),
                      (m.cacheID = y.cache),
                      tM();
                  }
                  return !0;
                }
                m.offset && C(), (o = !0);
              },
              I = function () {
                M(),
                  i.isActive() &&
                    i.vars.scrollY > n &&
                    (m() > n ? i.progress(1) && m(n) : i.resetTo("scrollY", n));
              };
            return (
              v && L.set(v, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (ed && "touchmove" === e.type && O()) ||
                  (b > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                var e = b;
                (b = eC(
                  ((H.visualViewport && H.visualViewport.scale) || 1) / w
                )),
                  i.pause(),
                  e !== b && tV(d, b > 1.01 || (!u && "x")),
                  (a = x()),
                  (s = m()),
                  M(),
                  (r = tk);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((m.offset && C(), t)) {
                    y.cache++;
                    var r,
                      o,
                      a = k();
                    u &&
                      ((o = (r = x()) + -(0.05 * a * e.velocityX) / 0.227),
                      (a *= tq(x, r, o, eI(d, A))),
                      (i.vars.scrollX = T(o))),
                      (o = (r = m()) + -(0.05 * a * e.velocityY) / 0.227),
                      (a *= tq(m, r, o, eI(d, D))),
                      (i.vars.scrollY = P(o)),
                      i.invalidate().duration(a).play(0.01),
                      ((ed && i.vars.scrollY >= n) || r >= n - 1) &&
                        L.to({}, { onUpdate: I, duration: a });
                  } else l.restart(!0);
                }),
              (e.onWheel = function () {
                i._ts && i.pause(), e_() - _ > 1e3 && ((r = 0), (_ = e_()));
              }),
              (e.onChange = function (e, t, n, o, i) {
                if (
                  (tk !== r && M(),
                  t &&
                    u &&
                    x(T(o[2] === t ? a + (e.startX - e.x) : x() + t - o[1])),
                  n)
                ) {
                  m.offset && C();
                  var l = i[2] === n,
                    c = l ? s + e.startY - e.y : m() + n - i[1],
                    f = P(c);
                  l && c !== f && (s += f - c), m(f);
                }
                (n || t) && tM();
              }),
              (e.onEnable = function () {
                tV(d, !u && "x"),
                  tW.addEventListener("refresh", I),
                  te(H, "resize", I),
                  m.smooth &&
                    ((m.target.style.scrollBehavior = "auto"),
                    (m.smooth = x.smooth = !1)),
                  S.enable();
              }),
              (e.onDisable = function () {
                tV(d, !0),
                  tt(H, "resize", I),
                  tW.removeEventListener("refresh", I),
                  S.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new N(e)).iOS = ed),
              ed && !m() && m(1),
              ed && L.ticker.add(eM),
              (l = t._dc),
              (i = L.to(t, {
                ease: "power4",
                paused: !0,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                onComplete: l.vars.onComplete,
              })),
              t
            );
          };
        (tW.sort = function (e) {
          return tc.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (tW.observe = function (e) {
            return new N(e);
          }),
          (tW.normalizeScroll = function (e) {
            if (void 0 === e) return ec;
            if (!0 === e && ec) return ec.enable();
            if (!1 === e) return ec && ec.kill();
            var t = e instanceof N ? e : t$(e);
            return (
              ec && ec.target === t.target && ec.kill(),
              eD(t.target) && (ec = t),
              t
            );
          }),
          (tW.core = {
            _getVelocityProp: I,
            _inputObserver: tj,
            _scrollers: y,
            _proxies: x,
            bridge: {
              ss: function () {
                eS || ty("scrollStart"), (eS = e_());
              },
              ref: function () {
                return Q;
              },
            },
          }),
          eA() && L.registerPlugin(tW),
          (e.ScrollTrigger = tW),
          (e.default = tW),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default;
      })(t);
    },
  },
]);
