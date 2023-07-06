(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1459: function (e, n, r) {
      "use strict";
      var i,
        s = r(7294);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.Z = function (e) {
        return s.createElement(
          "svg",
          o(
            {
              width: 20,
              height: 20,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i ||
            (i = s.createElement("path", {
              d: "m5.833 14.167 8.333-8.334M5.833 5.833h8.333v8.334",
              stroke: "#00FF6A",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
    },
    2350: function () {},
    7946: function (e, n) {
      !(function (e) {
        "use strict";
        var n = /(?:^\s+|\s+$)/g,
          r =
            /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function i(e) {
          var n = e.nodeType,
            r = "";
          if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) r += i(e);
          } else if (3 === n || 4 === n) return e.nodeValue;
          return r;
        }
        function s(e, i, s, o) {
          if (
            ((e += ""),
            s && (e = e.trim ? e.trim() : e.replace(n, "")),
            i && "" !== i)
          )
            return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(i);
          for (var a, u, l = [], c = e.length, h = 0; h < c; h++)
            (((u = e.charAt(h)).charCodeAt(0) >= 55296 &&
              56319 >= u.charCodeAt(0)) ||
              (e.charCodeAt(h + 1) >= 65024 && 65039 >= e.charCodeAt(h + 1))) &&
              ((a = ((e.substr(h, 12).split(r) || [])[1] || "").length || 2),
              (u = e.substr(h, a)),
              (l.emoji = 1),
              (h += a - 1)),
              l.push(
                ">" === u
                  ? "&gt;"
                  : "<" === u
                  ? "&lt;"
                  : o &&
                    " " === u &&
                    (" " === e.charAt(h - 1) || " " === e.charAt(h + 1))
                  ? "&nbsp;"
                  : u
              );
          return l;
        }
        /*!
         * ScrambleTextPlugin 3.11.4
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var o,
          a,
          u = (function () {
            function e(e) {
              (this.chars = s(e)), (this.sets = []), (this.length = 50);
              for (var n = 0; n < 20; n++) this.sets[n] = h(80, this.chars);
            }
            return (
              (e.prototype.grow = function (e) {
                for (var n = 0; n < 20; n++)
                  this.sets[n] += h(e - this.length, this.chars);
                this.length = e;
              }),
              e
            );
          })(),
          l = function () {
            return (
              o ||
              ("undefined" != typeof window &&
                (o = window.gsap) &&
                o.registerPlugin &&
                o)
            );
          },
          c = /\s+/g,
          h = function (e, n) {
            for (var r = n.length, i = ""; --e > -1; )
              i += n[~~(Math.random() * r)];
            return i;
          },
          d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          f = d.toLowerCase(),
          p = {
            upperCase: new u(d),
            lowerCase: new u(f),
            upperAndLowerCase: new u(d + f),
          },
          D = function () {
            a = o = l();
          },
          m = {
            version: "3.11.4",
            name: "scrambleText",
            register: function (e, n, r) {
              (o = e), D();
            },
            init: function (e, n, r, o, l) {
              if (
                (a || D(),
                (this.prop =
                  "innerHTML" in e
                    ? "innerHTML"
                    : "textContent" in e
                    ? "textContent"
                    : 0),
                this.prop)
              ) {
                (this.target = e), "object" != typeof n && (n = { text: n });
                var h,
                  d,
                  f,
                  m,
                  g = n.text || n.value || "",
                  v = !1 !== n.trim,
                  y = this;
                return (
                  (y.delimiter = h = n.delimiter || ""),
                  (y.original = s(
                    i(e).replace(c, " ").split("&nbsp;").join(""),
                    h,
                    v
                  )),
                  ("{original}" === g || !0 === g || null == g) &&
                    (g = y.original.join(h)),
                  (y.text = s((g || "").replace(c, " "), h, v)),
                  (y.hasClass = !!(n.newClass || n.oldClass)),
                  (y.newClass = n.newClass),
                  (y.oldClass = n.oldClass),
                  (m = "" === h),
                  (y.textHasEmoji = m && !!y.text.emoji),
                  (y.charsHaveEmoji = !!n.chars && !!s(n.chars).emoji),
                  (y.length = m
                    ? y.original.length
                    : y.original.join(h).length),
                  (y.lengthDif =
                    (m ? y.text.length : y.text.join(h).length) - y.length),
                  (y.fillChar =
                    n.fillChar || (n.chars && ~n.chars.indexOf(" "))
                      ? "&nbsp;"
                      : ""),
                  (y.charSet = f = p[n.chars || "upperCase"] || new u(n.chars)),
                  (y.speed = 0.05 / (n.speed || 1)),
                  (y.prevScrambleTime = 0),
                  (y.setIndex = (20 * Math.random()) | 0),
                  (d = y.length + Math.max(y.lengthDif, 0)) > f.length &&
                    f.grow(d),
                  (y.chars = f.sets[y.setIndex]),
                  (y.revealDelay = n.revealDelay || 0),
                  (y.tweenLength = !1 !== n.tweenLength),
                  (y.tween = r),
                  (y.rightToLeft = !!n.rightToLeft),
                  y._props.push("scrambleText", "text"),
                  1
                );
              }
            },
            render: function (e, n) {
              var r,
                i,
                o,
                a,
                u,
                l,
                c,
                h,
                d,
                f,
                p,
                D = n.target,
                m = n.prop,
                g = n.text,
                v = n.delimiter,
                y = n.tween,
                _ = n.prevScrambleTime,
                x = n.revealDelay,
                C = n.setIndex,
                E = n.chars,
                F = n.charSet,
                b = n.length,
                w = n.textHasEmoji,
                A = n.charsHaveEmoji,
                T = n.lengthDif,
                S = n.tweenLength,
                j = n.oldClass,
                P = n.newClass,
                B = n.rightToLeft,
                k = n.fillChar,
                M = n.speed,
                O = n.original,
                R = n.hasClass,
                L = g.length,
                N = y._time,
                V = N - _;
              x &&
                (y._from && (N = y._dur - N),
                (e =
                  0 === N
                    ? 0
                    : N < x
                    ? 1e-6
                    : N === y._dur
                    ? 1
                    : y._ease((N - x) / (y._dur - x)))),
                e < 0 ? (e = 0) : e > 1 && (e = 1),
                B && (e = 1 - e),
                (r = ~~(e * L + 0.5)),
                e
                  ? ((V > M || V < -M) &&
                      ((n.setIndex = C = (C + ((19 * Math.random()) | 0)) % 20),
                      (n.chars = F.sets[C]),
                      (n.prevScrambleTime += V)),
                    (a = E))
                  : (a = O.join(v)),
                (p = y._from ? e : 1 - e),
                (f = b + (S ? (y._from ? p * p * p : 1 - p * p * p) : 1) * T),
                B
                  ? 1 === e && (y._from || "isFromStart" === y.data)
                    ? ((o = ""), (a = O.join(v)))
                    : ((c = g.slice(r).join(v)),
                      (o = A
                        ? s(a)
                            .slice(0, (f - (w ? s(c) : c).length + 0.5) | 0)
                            .join("")
                        : a.substr(0, (f - (w ? s(c) : c).length + 0.5) | 0)),
                      (a = c))
                  : ((o = g.slice(0, r).join(v)),
                    (i = (w ? s(o) : o).length),
                    (a = A
                      ? s(a)
                          .slice(i, (f + 0.5) | 0)
                          .join("")
                      : a.substr(i, (f - i + 0.5) | 0))),
                R
                  ? ((h = B ? j : P),
                    (d = B ? P : j),
                    (c =
                      ((u = h && 0 !== r) ? "<span class='" + h + "'>" : "") +
                      o +
                      (u ? "</span>" : "") +
                      ((l = d && r !== L) ? "<span class='" + d + "'>" : "") +
                      v +
                      a +
                      (l ? "</span>" : "")))
                  : (c = o + v + a),
                (D[m] =
                  "&nbsp;" === k && ~c.indexOf("  ")
                    ? c.split("  ").join("&nbsp;&nbsp;")
                    : c);
            },
          };
        (m.emojiSafeSplit = s),
          (m.getText = i),
          l() && o.registerPlugin(m),
          (e.ScrambleTextPlugin = m),
          (e.default = m),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(n);
    },
    2757: function (e, n) {
      var r,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        D,
        m,
        g,
        v,
        y,
        _,
        x,
        C,
        E,
        F,
        b,
        w;
      (r = n),
        (i =
          /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/),
        (h = /(?:\r|\n|\t\t)/g),
        (d = /(?:\s\s+)/g),
        (f = function (e) {
          (s = document),
            (o = window),
            (u =
              u ||
              e ||
              o.gsap ||
              console.warn("Please gsap.registerPlugin(SplitText)")) &&
              ((c = u.utils.toArray),
              (l = u.core.context || function () {}),
              (a = 1));
        }),
        (p = function (e) {
          return o.getComputedStyle(e);
        }),
        (D = function (e) {
          return "absolute" === e.position || !0 === e.absolute;
        }),
        (m = function (e, n) {
          for (var r, i = n.length; --i > -1; )
            if (((r = n[i]), e.substr(0, r.length) === r)) return r.length;
        }),
        (g = function (e, n) {
          void 0 === e && (e = "");
          var r = ~e.indexOf("++"),
            i = 1;
          return (
            r && (e = e.split("++").join("")),
            function () {
              return (
                "<" +
                n +
                " style='position:relative;display:inline-block;'" +
                (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
              );
            }
          );
        }),
        (v = function e(n, r, i) {
          var s = n.nodeType;
          if (1 === s || 9 === s || 11 === s)
            for (n = n.firstChild; n; n = n.nextSibling) e(n, r, i);
          else
            (3 === s || 4 === s) &&
              (n.nodeValue = n.nodeValue.split(r).join(i));
        }),
        (y = function (e, n) {
          for (var r = n.length; --r > -1; ) e.push(n[r]);
        }),
        (_ = function (e, n, r) {
          for (var i; e && e !== n; ) {
            if ((i = e._next || e.nextSibling))
              return i.textContent.charAt(0) === r;
            e = e.parentNode || e._parent;
          }
        }),
        (x = function e(n) {
          var r,
            i,
            s = c(n.childNodes),
            o = s.length;
          for (r = 0; r < o; r++)
            (i = s[r])._isSplit
              ? e(i)
              : r && i.previousSibling && 3 === i.previousSibling.nodeType
              ? ((i.previousSibling.nodeValue +=
                  3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue),
                n.removeChild(i))
              : 3 !== i.nodeType &&
                (n.insertBefore(i.firstChild, i), n.removeChild(i));
        }),
        (C = function (e, n) {
          return parseFloat(n[e]) || 0;
        }),
        (E = function (e, n, r, i, o, a, u) {
          var l,
            c,
            h,
            d,
            f,
            m,
            g,
            E,
            F,
            b,
            w,
            A,
            T = p(e),
            S = C("paddingLeft", T),
            j = -999,
            P = C("borderBottomWidth", T) + C("borderTopWidth", T),
            B = C("borderLeftWidth", T) + C("borderRightWidth", T),
            k = C("paddingTop", T) + C("paddingBottom", T),
            M = C("paddingLeft", T) + C("paddingRight", T),
            O = C("fontSize", T) * (n.lineThreshold || 0.2),
            R = T.textAlign,
            L = [],
            N = [],
            V = [],
            I = n.wordDelimiter || " ",
            z = n.tag ? n.tag : n.span ? "span" : "div",
            U = n.type || n.split || "chars,words,lines",
            Z = o && ~U.indexOf("lines") ? [] : null,
            W = ~U.indexOf("words"),
            H = ~U.indexOf("chars"),
            q = D(n),
            Y = n.linesClass,
            $ = ~(Y || "").indexOf("++"),
            X = [],
            G = "flex" === T.display,
            K = e.style.display;
          for (
            $ && (Y = Y.split("++").join("")),
              G && (e.style.display = "block"),
              h = (c = e.getElementsByTagName("*")).length,
              f = [],
              l = 0;
            l < h;
            l++
          )
            f[l] = c[l];
          if (Z || q)
            for (l = 0; l < h; l++)
              ((m = (d = f[l]).parentNode === e) || q || (H && !W)) &&
                ((A = d.offsetTop),
                Z &&
                  m &&
                  Math.abs(A - j) > O &&
                  ("BR" !== d.nodeName || 0 === l) &&
                  ((g = []), Z.push(g), (j = A)),
                q &&
                  ((d._x = d.offsetLeft),
                  (d._y = A),
                  (d._w = d.offsetWidth),
                  (d._h = d.offsetHeight)),
                Z &&
                  (((d._isSplit && m) ||
                    (!H && m) ||
                    (W && m) ||
                    (!W &&
                      d.parentNode.parentNode === e &&
                      !d.parentNode._isSplit)) &&
                    (g.push(d), (d._x -= S), _(d, e, I) && (d._wordEnd = !0)),
                  "BR" === d.nodeName &&
                    ((d.nextSibling && "BR" === d.nextSibling.nodeName) ||
                      0 === l) &&
                    Z.push([])));
          for (l = 0; l < h; l++) {
            if (((m = (d = f[l]).parentNode === e), "BR" === d.nodeName)) {
              Z || q
                ? (d.parentNode && d.parentNode.removeChild(d),
                  f.splice(l--, 1),
                  h--)
                : W || e.appendChild(d);
              continue;
            }
            if (
              (q &&
                ((F = d.style),
                W ||
                  m ||
                  ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
                (F.left = d._x + "px"),
                (F.top = d._y + "px"),
                (F.position = "absolute"),
                (F.display = "block"),
                (F.width = d._w + 1 + "px"),
                (F.height = d._h + "px")),
              !W && H)
            ) {
              if (d._isSplit)
                for (
                  d._next = c = d.nextSibling, d.parentNode.appendChild(d);
                  c && 3 === c.nodeType && " " === c.textContent;

                )
                  (d._next = c.nextSibling),
                    d.parentNode.appendChild(c),
                    (c = c.nextSibling);
              else
                d.parentNode._isSplit
                  ? ((d._parent = d.parentNode),
                    !d.previousSibling &&
                      d.firstChild &&
                      (d.firstChild._isFirst = !0),
                    d.nextSibling &&
                      " " === d.nextSibling.textContent &&
                      !d.nextSibling.nextSibling &&
                      X.push(d.nextSibling),
                    (d._next =
                      d.nextSibling && d.nextSibling._isFirst
                        ? null
                        : d.nextSibling),
                    d.parentNode.removeChild(d),
                    f.splice(l--, 1),
                    h--)
                  : m ||
                    ((A = !d.nextSibling && _(d.parentNode, e, I)),
                    d.parentNode._parent && d.parentNode._parent.appendChild(d),
                    A && d.parentNode.appendChild(s.createTextNode(" ")),
                    "span" === z && (d.style.display = "inline"),
                    L.push(d));
            } else
              d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
                ? N.push(d)
                : H &&
                  !d._isSplit &&
                  ("span" === z && (d.style.display = "inline"), L.push(d));
          }
          for (l = X.length; --l > -1; ) X[l].parentNode.removeChild(X[l]);
          if (Z) {
            for (
              q &&
                ((b = s.createElement(z)),
                e.appendChild(b),
                (w = b.offsetWidth + "px"),
                (A = b.offsetParent === e ? 0 : e.offsetLeft),
                e.removeChild(b)),
                F = e.style.cssText,
                e.style.cssText = "display:none;";
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (
              l = 0, E = " " === I && (!q || (!W && !H));
              l < Z.length;
              l++
            ) {
              for (
                g = Z[l],
                  (b = s.createElement(z)).style.cssText =
                    "display:block;text-align:" +
                    R +
                    ";position:" +
                    (q ? "absolute;" : "relative;"),
                  Y && (b.className = Y + ($ ? l + 1 : "")),
                  V.push(b),
                  h = g.length,
                  c = 0;
                c < h;
                c++
              )
                "BR" !== g[c].nodeName &&
                  ((d = g[c]),
                  b.appendChild(d),
                  E && d._wordEnd && b.appendChild(s.createTextNode(" ")),
                  q &&
                    (0 === c &&
                      ((b.style.top = d._y + "px"),
                      (b.style.left = S + A + "px")),
                    (d.style.top = "0px"),
                    A && (d.style.left = d._x - A + "px")));
              0 === h
                ? (b.innerHTML = "&nbsp;")
                : W || H || (x(b), v(b, String.fromCharCode(160), " ")),
                q && ((b.style.width = w), (b.style.height = d._h + "px")),
                e.appendChild(b);
            }
            e.style.cssText = F;
          }
          q &&
            (u > e.clientHeight &&
              ((e.style.height = u - k + "px"),
              e.clientHeight < u && (e.style.height = u + P + "px")),
            a > e.clientWidth &&
              ((e.style.width = a - M + "px"),
              e.clientWidth < a && (e.style.width = a + B + "px"))),
            G &&
              (K ? (e.style.display = K) : e.style.removeProperty("display")),
            y(r, L),
            W && y(i, N),
            y(o, V);
        }),
        (F = function (e, n, r, o) {
          var a,
            u,
            l,
            c,
            f,
            p,
            g,
            y,
            _ = n.tag ? n.tag : n.span ? "span" : "div",
            x = ~(n.type || n.split || "chars,words,lines").indexOf("chars"),
            C = D(n),
            E = n.wordDelimiter || " ",
            F = " " !== E ? "" : C ? "&#173; " : " ",
            b = "</" + _ + ">",
            w = 1,
            A = n.specialChars
              ? "function" == typeof n.specialChars
                ? n.specialChars
                : m
              : null,
            T = s.createElement("div"),
            S = e.parentNode;
          for (
            S.insertBefore(T, e),
              T.textContent = e.nodeValue,
              S.removeChild(e),
              g =
                -1 !==
                (a = (function e(n) {
                  var r = n.nodeType,
                    i = "";
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += e(n);
                  } else if (3 === r || 4 === r) return n.nodeValue;
                  return i;
                })((e = T))).indexOf("<"),
              !1 !== n.reduceWhiteSpace &&
                (a = a.replace(d, " ").replace(h, "")),
              g && (a = a.split("<").join("{{LT}}")),
              f = a.length,
              u = (" " === a.charAt(0) ? F : "") + r(),
              l = 0;
            l < f;
            l++
          )
            if (((p = a.charAt(l)), A && (y = A(a.substr(l), n.specialChars))))
              (p = a.substr(l, y || 1)),
                (u += x && " " !== p ? o() + p + "</" + _ + ">" : p),
                (l += y - 1);
            else if (p === E && a.charAt(l - 1) !== E && l) {
              for (u += w ? b : "", w = 0; a.charAt(l + 1) === E; )
                (u += F), l++;
              l === f - 1
                ? (u += F)
                : ")" !== a.charAt(l + 1) && ((u += F + r()), (w = 1));
            } else
              "{" === p && "{{LT}}" === a.substr(l, 6)
                ? ((u += x ? o() + "{{LT}}</" + _ + ">" : "{{LT}}"), (l += 5))
                : (p.charCodeAt(0) >= 55296 && 56319 >= p.charCodeAt(0)) ||
                  (a.charCodeAt(l + 1) >= 65024 && 65039 >= a.charCodeAt(l + 1))
                ? ((c =
                    ((a.substr(l, 12).split(i) || [])[1] || "").length || 2),
                  (u +=
                    x && " " !== p
                      ? o() + a.substr(l, c) + "</" + _ + ">"
                      : a.substr(l, c)),
                  (l += c - 1))
                : (u += x && " " !== p ? o() + p + "</" + _ + ">" : p);
          (e.outerHTML = u + (w ? b : "")), g && v(S, "{{LT}}", "<");
        }),
        (b = function e(n, r, i, s) {
          var o,
            a,
            u = c(n.childNodes),
            l = u.length,
            h = D(r);
          if (3 !== n.nodeType || l > 1) {
            for (o = 0, r.absolute = !1; o < l; o++)
              ((a = u[o])._next = a._isFirst = a._parent = a._wordEnd = null),
                (3 !== a.nodeType || /\S+/.test(a.nodeValue)) &&
                  (h &&
                    3 !== a.nodeType &&
                    "inline" === p(a).display &&
                    ((a.style.display = "inline-block"),
                    (a.style.position = "relative")),
                  (a._isSplit = !0),
                  e(a, r, i, s));
            (r.absolute = h), (n._isSplit = !0);
            return;
          }
          F(n, r, i, s);
        }),
        ((w = (function () {
          function e(e, n) {
            a || f(),
              (this.elements = c(e)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = n || {}),
              l(this),
              this.split(n);
          }
          var n = e.prototype;
          return (
            (n.split = function (e) {
              this.isSplit && this.revert(),
                (this.vars = e = e || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var n,
                  r,
                  i,
                  s = this.elements.length,
                  o = e.tag ? e.tag : e.span ? "span" : "div",
                  a = g(e.wordsClass, o),
                  u = g(e.charsClass, o);
                --s > -1;

              )
                (i = this.elements[s]),
                  (this._originals[s] = i.innerHTML),
                  (n = i.clientHeight),
                  (r = i.clientWidth),
                  b(i, e, a, u),
                  E(i, e, this.chars, this.words, this.lines, r, n);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (n.revert = function () {
              var e = this._originals;
              if (!e) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (n, r) {
                  return (n.innerHTML = e[r]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (e.create = function (n, r) {
              return new e(n, r);
            }),
            e
          );
        })()).version = "3.11.4"),
        (w.register = f),
        (r.SplitText = w),
        (r.default = w),
        Object.defineProperty(r, "__esModule", { value: !0 });
    },
    6038: function (e, n, r) {
      "use strict";
      function i(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e, n) {
        (e.prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
      }
      r.d(n, {
        ZP: function () {
          return rM;
        },
        p8: function () {
          return rM;
        },
      });
      /*!
       * GSAP 3.11.4
       * https://greensock.com
       *
       * @license Copyright 2008-2022, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var o,
        a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        D,
        m,
        g,
        v,
        y,
        _,
        x,
        C,
        E,
        F,
        b,
        w,
        A,
        T,
        S,
        j,
        P,
        B,
        k,
        M,
        O = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        R = { duration: 0.5, overwrite: !1, delay: 0 },
        L = 2 * Math.PI,
        N = L / 4,
        V = 0,
        I = Math.sqrt,
        z = Math.cos,
        U = Math.sin,
        Z = function (e) {
          return "string" == typeof e;
        },
        W = function (e) {
          return "function" == typeof e;
        },
        H = function (e) {
          return "number" == typeof e;
        },
        q = function (e) {
          return void 0 === e;
        },
        Y = function (e) {
          return "object" == typeof e;
        },
        $ = function (e) {
          return !1 !== e;
        },
        X = function () {
          return "undefined" != typeof window;
        },
        G = function (e) {
          return W(e) || Z(e);
        },
        K =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        J = Array.isArray,
        Q = /(?:-?\.?\d|\.)+/gi,
        tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        tn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        tr = /[+-]=-?[.\d]+/,
        ti = /[^,'"\[\]\s]+/gi,
        ts = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        to = {},
        ta = {},
        tu = function (e) {
          return (ta = tL(e, to)) && nA;
        },
        tl = function (e, n) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            n,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        tc = function (e, n) {
          return !n && console.warn(e);
        },
        th = function (e, n) {
          return (e && (to[e] = n) && ta && (ta[e] = n)) || to;
        },
        td = function () {
          return 0;
        },
        tf = { suppressEvents: !0, isStart: !0, kill: !1 },
        tp = { suppressEvents: !0, kill: !1 },
        tD = { suppressEvents: !0 },
        tm = {},
        tg = [],
        tv = {},
        ty = {},
        t_ = {},
        tx = 30,
        tC = [],
        tE = "",
        tF = function (e) {
          var n,
            r,
            i = e[0];
          if ((Y(i) || W(i) || (e = [e]), !(n = (i._gsap || {}).harness))) {
            for (r = tC.length; r-- && !tC[r].targetTest(i); );
            n = tC[r];
          }
          for (r = e.length; r--; )
            (e[r] && (e[r]._gsap || (e[r]._gsap = new eW(e[r], n)))) ||
              e.splice(r, 1);
          return e;
        },
        tb = function (e) {
          return e._gsap || tF(ea(e))[0]._gsap;
        },
        tw = function (e, n, r) {
          return (r = e[n]) && W(r)
            ? e[n]()
            : (q(r) && e.getAttribute && e.getAttribute(n)) || r;
        },
        tA = function (e, n) {
          return (e = e.split(",")).forEach(n) || e;
        },
        tT = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        tS = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        tj = function (e, n) {
          var r = n.charAt(0),
            i = parseFloat(n.substr(2));
          return (
            (e = parseFloat(e)),
            "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
          );
        },
        tP = function (e, n) {
          for (var r = n.length, i = 0; 0 > e.indexOf(n[i]) && ++i < r; );
          return i < r;
        },
        tB = function () {
          var e,
            n,
            r = tg.length,
            i = tg.slice(0);
          for (e = 0, tv = {}, tg.length = 0; e < r; e++)
            (n = i[e]) &&
              n._lazy &&
              (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
        },
        tk = function (e, n, r, i) {
          tg.length && !b && tB(),
            e.render(n, r, i || (b && n < 0 && (e._initted || e._startAt))),
            tg.length && !b && tB();
        },
        tM = function (e) {
          var n = parseFloat(e);
          return (n || 0 === n) && (e + "").match(ti).length < 2
            ? n
            : Z(e)
            ? e.trim()
            : e;
        },
        tO = function (e) {
          return e;
        },
        tR = function (e, n) {
          for (var r in n) r in e || (e[r] = n[r]);
          return e;
        },
        tL = function (e, n) {
          for (var r in n) e[r] = n[r];
          return e;
        },
        tN = function e(n, r) {
          for (var i in r)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (n[i] = Y(r[i]) ? e(n[i] || (n[i] = {}), r[i]) : r[i]);
          return n;
        },
        tV = function (e, n) {
          var r,
            i = {};
          for (r in e) r in n || (i[r] = e[r]);
          return i;
        },
        tI = function (e) {
          var n,
            r = e.parent || A,
            i = e.keyframes
              ? ((n = J(e.keyframes)),
                function (e, r) {
                  for (var i in r)
                    i in e ||
                      ("duration" === i && n) ||
                      "ease" === i ||
                      (e[i] = r[i]);
                })
              : tR;
          if ($(e.inherit))
            for (; r; ) i(e, r.vars.defaults), (r = r.parent || r._dp);
          return e;
        },
        tz = function (e, n) {
          for (
            var r = e.length, i = r === n.length;
            i && r-- && e[r] === n[r];

          );
          return r < 0;
        },
        tU = function (e, n, r, i, s) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var o,
            a = e[i];
          if (s) for (o = n[s]; a && a[s] > o; ) a = a._prev;
          return (
            a
              ? ((n._next = a._next), (a._next = n))
              : ((n._next = e[r]), (e[r] = n)),
            n._next ? (n._next._prev = n) : (e[i] = n),
            (n._prev = a),
            (n.parent = n._dp = e),
            n
          );
        },
        tZ = function (e, n, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s = n._prev,
            o = n._next;
          s ? (s._next = o) : e[r] === n && (e[r] = o),
            o ? (o._prev = s) : e[i] === n && (e[i] = s),
            (n._next = n._prev = n.parent = null);
        },
        tW = function (e, n) {
          e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
            (e._act = 0);
        },
        tH = function (e, n) {
          if (e && (!n || n._end > e._dur || n._start < 0))
            for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
          return e;
        },
        tq = function (e) {
          for (var n = e.parent; n && n.parent; )
            (n._dirty = 1), n.totalDuration(), (n = n.parent);
          return e;
        },
        tY = function (e, n, r, i) {
          return (
            e._startAt &&
            (b
              ? e._startAt.revert(tp)
              : (e.vars.immediateRender && !e.vars.autoRevert) ||
                e._startAt.render(n, !0, i))
          );
        },
        t$ = function (e) {
          return e._repeat
            ? tX(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        tX = function (e, n) {
          var r = Math.floor((e /= n));
          return e && r === e ? r - 1 : r;
        },
        tG = function (e, n) {
          return (
            (e - n._start) * n._ts +
            (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
          );
        },
        tK = function (e) {
          return (e._end = tS(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
          ));
        },
        tJ = function (e, n) {
          var r = e._dp;
          return (
            r &&
              r.smoothChildTiming &&
              e._ts &&
              ((e._start = tS(
                r._time -
                  (e._ts > 0
                    ? n / e._ts
                    : -(((e._dirty ? e.totalDuration() : e._tDur) - n) / e._ts))
              )),
              tK(e),
              r._dirty || tH(r, e)),
            e
          );
        },
        tQ = function (e, n) {
          var r;
          if (
            ((n._time || (n._initted && !n._dur)) &&
              ((r = tG(e.rawTime(), n)),
              (!n._dur || er(0, n.totalDuration(), r) - n._tTime > 1e-8) &&
                n.render(r, !0)),
            tH(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            e._zTime = -0.00000001;
          }
        },
        t0 = function (e, n, r, i) {
          return (
            n.parent && tW(n),
            (n._start = tS(
              (H(r) ? r : r || e !== A ? et(e, r, n) : e._time) + n._delay
            )),
            (n._end = tS(
              n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
            )),
            tU(e, n, "_first", "_last", e._sort ? "_start" : 0),
            t6(n) || (e._recent = n),
            i || tQ(e, n),
            e._ts < 0 && tJ(e, e._tTime),
            e
          );
        },
        t1 = function (e, n) {
          return (
            (to.ScrollTrigger || tl("scrollTrigger", n)) &&
            to.ScrollTrigger.create(n, e)
          );
        },
        t2 = function (e, n, r, i, s) {
          return (e3(e, n, s), e._initted)
            ? !r &&
              e._pt &&
              !b &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              B !== eS.frame
              ? (tg.push(e), (e._lazy = [s, i]), 1)
              : void 0
            : 1;
        },
        t3 = function e(n) {
          var r = n.parent;
          return (
            r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || e(r))
          );
        },
        t6 = function (e) {
          var n = e.data;
          return "isFromStart" === n || "isStart" === n;
        },
        t8 = function (e, n, r, i) {
          var s,
            o,
            a,
            u = e.ratio,
            l =
              n < 0 ||
              (!n &&
                ((!e._start && t3(e) && !(!e._initted && t6(e))) ||
                  ((e._ts < 0 || e._dp._ts < 0) && !t6(e))))
                ? 0
                : 1,
            c = e._rDelay,
            h = 0;
          if (
            (c &&
              e._repeat &&
              ((o = tX((h = er(0, e._tDur, n)), c)),
              e._yoyo && 1 & o && (l = 1 - l),
              o !== tX(e._tTime, c) &&
                ((u = 1 - l),
                e.vars.repeatRefresh && e._initted && e.invalidate())),
            l !== u || b || i || 1e-8 === e._zTime || (!n && e._zTime))
          ) {
            if (!e._initted && t2(e, n, i, r, h)) return;
            for (
              a = e._zTime,
                e._zTime = n || (r ? 1e-8 : 0),
                r || (r = n && !a),
                e.ratio = l,
                e._from && (l = 1 - l),
                e._time = 0,
                e._tTime = h,
                s = e._pt;
              s;

            )
              s.r(l, s.d), (s = s._next);
            n < 0 && tY(e, n, r, !0),
              e._onUpdate && !r && ev(e, "onUpdate"),
              h && e._repeat && !r && e.parent && ev(e, "onRepeat"),
              (n >= e._tDur || n < 0) &&
                e.ratio === l &&
                (l && tW(e, 1),
                r ||
                  b ||
                  (ev(e, l ? "onComplete" : "onReverseComplete", !0),
                  e._prom && e._prom()));
          } else e._zTime || (e._zTime = n);
        },
        t5 = function (e, n, r) {
          var i;
          if (r > n)
            for (i = e._first; i && i._start <= r; ) {
              if ("isPause" === i.data && i._start > n) return i;
              i = i._next;
            }
          else
            for (i = e._last; i && i._start >= r; ) {
              if ("isPause" === i.data && i._start < n) return i;
              i = i._prev;
            }
        },
        t4 = function (e, n, r, i) {
          var s = e._repeat,
            o = tS(n) || 0,
            a = e._tTime / e._tDur;
          return (
            a && !i && (e._time *= o / e._dur),
            (e._dur = o),
            (e._tDur = s
              ? s < 0
                ? 1e10
                : tS(o * (s + 1) + e._rDelay * s)
              : o),
            a > 0 && !i && tJ(e, (e._tTime = e._tDur * a)),
            e.parent && tK(e),
            r || tH(e.parent, e),
            e
          );
        },
        t7 = function (e) {
          return e instanceof eq ? tH(e) : t4(e, e._dur);
        },
        t9 = { _start: 0, endTime: td, totalDuration: td },
        et = function e(n, r, i) {
          var s,
            o,
            a,
            u = n.labels,
            l = n._recent || t9,
            c = n.duration() >= 1e8 ? l.endTime(!1) : n._dur;
          return Z(r) && (isNaN(r) || r in u)
            ? ((o = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (s = r.indexOf("=")),
              "<" === o || ">" === o)
              ? (s >= 0 && (r = r.replace(/=/, "")),
                ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (a ? (s < 0 ? l : i).totalDuration() / 100 : 1))
              : s < 0
              ? (r in u || (u[r] = c), u[r])
              : ((o = parseFloat(r.charAt(s - 1) + r.substr(s + 1))),
                a && i && (o = (o / 100) * (J(i) ? i[0] : i).totalDuration()),
                s > 1 ? e(n, r.substr(0, s - 1), i) + o : c + o)
            : null == r
            ? c
            : +r;
        },
        ee = function (e, n, r) {
          var i,
            s,
            o = H(n[1]),
            a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
            u = n[a];
          if ((o && (u.duration = n[1]), (u.parent = r), e)) {
            for (i = u, s = r; s && !("immediateRender" in i); )
              (i = s.vars.defaults || {}), (s = $(s.vars.inherit) && s.parent);
            (u.immediateRender = $(i.immediateRender)),
              e < 2 ? (u.runBackwards = 1) : (u.startAt = n[a - 1]);
          }
          return new nt(n[0], u, n[a + 1]);
        },
        en = function (e, n) {
          return e || 0 === e ? n(e) : n;
        },
        er = function (e, n, r) {
          return r < e ? e : r > n ? n : r;
        },
        ei = function (e, n) {
          return Z(e) && (n = ts.exec(e)) ? n[1] : "";
        },
        es = [].slice,
        eo = function (e, n) {
          return (
            e &&
            Y(e) &&
            "length" in e &&
            ((!n && !e.length) || (e.length - 1 in e && Y(e[0]))) &&
            !e.nodeType &&
            e !== T
          );
        },
        ea = function (e, n, r) {
          var i;
          return w && !n && w.selector
            ? w.selector(e)
            : Z(e) && !r && (S || !ej())
            ? es.call((n || j).querySelectorAll(e), 0)
            : J(e)
            ? (void 0 === i && (i = []),
              e.forEach(function (e) {
                var n;
                return (Z(e) && !r) || eo(e, 1)
                  ? (n = i).push.apply(n, ea(e))
                  : i.push(e);
              }) || i)
            : eo(e)
            ? es.call(e, 0)
            : e
            ? [e]
            : [];
        },
        eu = function (e) {
          return (
            (e = ea(e)[0] || tc("Invalid scope") || {}),
            function (n) {
              var r = e.current || e.nativeElement || e;
              return ea(
                n,
                r.querySelectorAll
                  ? r
                  : r === e
                  ? tc("Invalid scope") || j.createElement("div")
                  : e
              );
            }
          );
        },
        el = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ec = function (e) {
          if (W(e)) return e;
          var n = Y(e) ? e : { each: e },
            r = eV(n.ease),
            i = n.from || 0,
            s = parseFloat(n.base) || 0,
            o = {},
            a = i > 0 && i < 1,
            u = isNaN(i) || a,
            l = n.axis,
            c = i,
            h = i;
          return (
            Z(i)
              ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !a && u && ((c = i[0]), (h = i[1])),
            function (e, a, d) {
              var f,
                p,
                D,
                m,
                g,
                v,
                y,
                _,
                x,
                C = (d || n).length,
                E = o[C];
              if (!E) {
                if (!(x = "auto" === n.grid ? 0 : (n.grid || [1, 1e8])[1])) {
                  for (
                    y = -1e8;
                    y < (y = d[x++].getBoundingClientRect().left) && x < C;

                  );
                  x--;
                }
                for (
                  v = 0,
                    E = o[C] = [],
                    f = u ? Math.min(x, C) * c - 0.5 : i % x,
                    p = 1e8 === x ? 0 : u ? (C * h) / x - 0.5 : (i / x) | 0,
                    y = 0,
                    _ = 1e8;
                  v < C;
                  v++
                )
                  (D = (v % x) - f),
                    (m = p - ((v / x) | 0)),
                    (E[v] = g =
                      l ? Math.abs("y" === l ? m : D) : I(D * D + m * m)),
                    g > y && (y = g),
                    g < _ && (_ = g);
                "random" === i && el(E),
                  (E.max = y - _),
                  (E.min = _),
                  (E.v = C =
                    (parseFloat(n.amount) ||
                      parseFloat(n.each) *
                        (x > C
                          ? C - 1
                          : l
                          ? "y" === l
                            ? C / x
                            : x
                          : Math.max(x, C / x)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (E.b = C < 0 ? s - C : s),
                  (E.u = ei(n.amount || n.each) || 0),
                  (r = r && C < 0 ? eL(r) : r);
              }
              return (
                (C = (E[e] - E.min) / E.max || 0),
                tS(E.b + (r ? r(C) : C) * E.v) + E.u
              );
            }
          );
        },
        eh = function (e) {
          var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function (r) {
            var i = tS(Math.round(parseFloat(r) / e) * e * n);
            return (i - (i % 1)) / n + (H(r) ? 0 : ei(r));
          };
        },
        ed = function (e, n) {
          var r,
            i,
            s = J(e);
          return (
            !s &&
              Y(e) &&
              ((r = s = e.radius || 1e8),
              e.values
                ? (i = !H((e = ea(e.values))[0])) && (r *= r)
                : (e = eh(e.increment))),
            en(
              n,
              s
                ? W(e)
                  ? function (n) {
                      return Math.abs((i = e(n)) - n) <= r ? i : n;
                    }
                  : function (n) {
                      for (
                        var s,
                          o,
                          a = parseFloat(i ? n.x : n),
                          u = parseFloat(i ? n.y : 0),
                          l = 1e8,
                          c = 0,
                          h = e.length;
                        h--;

                      )
                        (s = i
                          ? (s = e[h].x - a) * s + (o = e[h].y - u) * o
                          : Math.abs(e[h] - a)) < l && ((l = s), (c = h));
                      return (
                        (c = !r || l <= r ? e[c] : n),
                        i || c === n || H(n) ? c : c + ei(n)
                      );
                    }
                : eh(e)
            )
          );
        },
        ef = function (e, n, r, i) {
          return en(J(e) ? !n : !0 === r ? ((r = 0), !1) : !i, function () {
            return J(e)
              ? e[~~(Math.random() * e.length)]
              : (i =
                  (r = r || 1e-5) < 1
                    ? Math.pow(10, (r + "").length - 2)
                    : 1) &&
                  Math.floor(
                    Math.round(
                      (e - r / 2 + Math.random() * (n - e + 0.99 * r)) / r
                    ) *
                      r *
                      i
                  ) / i;
          });
        },
        ep = function (e, n, r) {
          return en(r, function (r) {
            return e[~~n(r)];
          });
        },
        eD = function (e) {
          for (var n, r, i, s, o = 0, a = ""; ~(n = e.indexOf("random(", o)); )
            (i = e.indexOf(")", n)),
              (s = "[" === e.charAt(n + 7)),
              (r = e.substr(n + 7, i - n - 7).match(s ? ti : Q)),
              (a +=
                e.substr(o, n - o) +
                ef(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5)),
              (o = i + 1);
          return a + e.substr(o, e.length - o);
        },
        em = function (e, n, r, i, s) {
          var o = n - e,
            a = i - r;
          return en(s, function (n) {
            return r + (((n - e) / o) * a || 0);
          });
        },
        eg = function (e, n, r) {
          var i,
            s,
            o,
            a = e.labels,
            u = 1e8;
          for (i in a)
            (s = a[i] - n) < 0 == !!r &&
              s &&
              u > (s = Math.abs(s)) &&
              ((o = i), (u = s));
          return o;
        },
        ev = function (e, n, r) {
          var i,
            s,
            o,
            a = e.vars,
            u = a[n],
            l = w,
            c = e._ctx;
          if (u)
            return (
              (i = a[n + "Params"]),
              (s = a.callbackScope || e),
              r && tg.length && tB(),
              c && (w = c),
              (o = i ? u.apply(s, i) : u.call(s)),
              (w = l),
              o
            );
        },
        ey = function (e) {
          return (
            tW(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!b),
            1 > e.progress() && ev(e, "onInterrupt"),
            e
          );
        },
        e_ = function (e) {
          var n = (e = (!e.name && e.default) || e).name,
            r = W(e),
            i =
              n && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: td,
              render: nl,
              add: e0,
              kill: nh,
              modifier: nc,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: ns,
              aliases: {},
              register: 0,
            };
          if ((ej(), e !== i)) {
            if (ty[n]) return;
            tR(i, tR(tV(e, s), o)),
              tL(i.prototype, tL(s, tV(e, o))),
              (ty[(i.prop = n)] = i),
              e.targetTest && (tC.push(i), (tm[n] = 1)),
              (n =
                ("css" === n
                  ? "CSS"
                  : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
          }
          th(n, i), e.register && e.register(nA, i, np);
        },
        ex = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        eC = function (e, n, r) {
          return (
            ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? n + (r - n) * e * 6
              : e < 0.5
              ? r
              : 3 * e < 2
              ? n + (r - n) * (2 / 3 - e) * 6
              : n) *
              255 +
              0.5) |
            0
          );
        },
        eE = function (e, n, r) {
          var i,
            s,
            o,
            a,
            u,
            l,
            c,
            h,
            d,
            f,
            p = e ? (H(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : ex.black;
          if (!p) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ex[e])
            )
              p = ex[e];
            else if ("#" === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  (e =
                    "#" +
                    (i = e.charAt(1)) +
                    i +
                    (s = e.charAt(2)) +
                    s +
                    (o = e.charAt(3)) +
                    o +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                9 === e.length)
              )
                return [
                  (p = parseInt(e.substr(1, 6), 16)) >> 16,
                  (p >> 8) & 255,
                  255 & p,
                  parseInt(e.substr(7), 16) / 255,
                ];
              p = [
                (e = parseInt(e.substr(1), 16)) >> 16,
                (e >> 8) & 255,
                255 & e,
              ];
            } else if ("hsl" === e.substr(0, 3)) {
              if (((p = f = e.match(Q)), n)) {
                if (~e.indexOf("="))
                  return (p = e.match(tt)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (u = +p[1] / 100),
                  (s = (l = +p[2] / 100) <= 0.5 ? l * (u + 1) : l + u - l * u),
                  (i = 2 * l - s),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = eC(a + 1 / 3, i, s)),
                  (p[1] = eC(a, i, s)),
                  (p[2] = eC(a - 1 / 3, i, s));
            } else p = e.match(Q) || ex.transparent;
            p = p.map(Number);
          }
          return (
            n &&
              !f &&
              ((i = p[0] / 255),
              (s = p[1] / 255),
              (o = p[2] / 255),
              (l = ((c = Math.max(i, s, o)) + (h = Math.min(i, s, o))) / 2),
              c === h
                ? (a = u = 0)
                : ((d = c - h),
                  (u = l > 0.5 ? d / (2 - c - h) : d / (c + h)),
                  (a =
                    (c === i
                      ? (s - o) / d + (s < o ? 6 : 0)
                      : c === s
                      ? (o - i) / d + 2
                      : (i - s) / d + 4) * 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * u + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        eF = function (e) {
          var n = [],
            r = [],
            i = -1;
          return (
            e.split(ew).forEach(function (e) {
              var s = e.match(te) || [];
              n.push.apply(n, s), r.push((i += s.length + 1));
            }),
            (n.c = r),
            n
          );
        },
        eb = function (e, n, r) {
          var i,
            s,
            o,
            a,
            u = "",
            l = (e + u).match(ew),
            c = n ? "hsla(" : "rgba(",
            h = 0;
          if (!l) return e;
          if (
            ((l = l.map(function (e) {
              return (
                (e = eE(e, n, 1)) &&
                c +
                  (n
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            r && ((o = eF(e)), (i = r.c).join(u) !== o.c.join(u)))
          )
            for (a = (s = e.replace(ew, "1").split(te)).length - 1; h < a; h++)
              u +=
                s[h] +
                (~i.indexOf(h)
                  ? l.shift() || c + "0,0,0,0)"
                  : (o.length ? o : l.length ? l : r).shift());
          if (!s)
            for (a = (s = e.split(ew)).length - 1; h < a; h++) u += s[h] + l[h];
          return u + s[a];
        },
        ew = (function () {
          var e,
            n =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ex) n += "|" + e + "\\b";
          return RegExp(n + ")", "gi");
        })(),
        eA = /hsl[a]?\(/,
        eT = function (e) {
          var n,
            r = e.join(" ");
          if (((ew.lastIndex = 0), ew.test(r)))
            return (
              (n = eA.test(r)),
              (e[1] = eb(e[1], n)),
              (e[0] = eb(e[0], n, eF(e[1]))),
              !0
            );
        },
        eS =
          ((m = 500),
          (g = 33),
          (y = v = (D = Date.now)()),
          (_ = 1e3 / 240),
          (x = 1e3 / 240),
          (C = []),
          (E = function e(n) {
            var r,
              i,
              s,
              o,
              a = D() - y,
              u = !0 === n;
            if (
              (a > m && (v += a - g),
              (y += a),
              ((r = (s = y - v) - x) > 0 || u) &&
                ((o = ++d.frame),
                (f = s - 1e3 * d.time),
                (d.time = s /= 1e3),
                (x += r + (r >= _ ? 4 : _ - r)),
                (i = 1)),
              u || (l = c(e)),
              i)
            )
              for (p = 0; p < C.length; p++) C[p](s, f, o, n);
          }),
          (d = {
            time: 0,
            frame: 0,
            tick: function () {
              E(!0);
            },
            deltaRatio: function (e) {
              return f / (1e3 / (e || 60));
            },
            wake: function () {
              P &&
                (!S &&
                  X() &&
                  ((j = (T = S = window).document || {}),
                  (to.gsap = nA),
                  (T.gsapVersions || (T.gsapVersions = [])).push(nA.version),
                  tu(ta || T.GreenSockGlobals || (!T.gsap && T) || {}),
                  (h = T.requestAnimationFrame)),
                l && d.sleep(),
                (c =
                  h ||
                  function (e) {
                    return setTimeout(e, (x - 1e3 * d.time + 1) | 0);
                  }),
                (M = 1),
                E(2));
            },
            sleep: function () {
              (h ? T.cancelAnimationFrame : clearTimeout)(l), (M = 0), (c = td);
            },
            lagSmoothing: function (e, n) {
              g = Math.min(n || 33, (m = e || 1 / 0));
            },
            fps: function (e) {
              (_ = 1e3 / (e || 240)), (x = 1e3 * d.time + _);
            },
            add: function (e, n, r) {
              var i = n
                ? function (n, r, s, o) {
                    e(n, r, s, o), d.remove(i);
                  }
                : e;
              return d.remove(e), C[r ? "unshift" : "push"](i), ej(), i;
            },
            remove: function (e, n) {
              ~(n = C.indexOf(e)) && C.splice(n, 1) && p >= n && p--;
            },
            _listeners: C,
          })),
        ej = function () {
          return !M && eS.wake();
        },
        eP = {},
        eB = /^[\d.\-M][\d.\-,\s]/,
        ek = /["']/g,
        eM = function (e) {
          for (
            var n,
              r,
              i,
              s = {},
              o = e.substr(1, e.length - 3).split(":"),
              a = o[0],
              u = 1,
              l = o.length;
            u < l;
            u++
          )
            (r = o[u]),
              (n = u !== l - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, n)),
              (s[a] = isNaN(i) ? i.replace(ek, "").trim() : +i),
              (a = r.substr(n + 1).trim());
          return s;
        },
        eO = function (e) {
          var n = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            i = e.indexOf("(", n);
          return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
        },
        eR = function (e) {
          var n = (e + "").split("("),
            r = eP[n[0]];
          return r && n.length > 1 && r.config
            ? r.config.apply(
                null,
                ~e.indexOf("{") ? [eM(n[1])] : eO(e).split(",").map(tM)
              )
            : eP._CE && eB.test(e)
            ? eP._CE("", e)
            : r;
        },
        eL = function (e) {
          return function (n) {
            return 1 - e(1 - n);
          };
        },
        eN = function e(n, r) {
          for (var i, s = n._first; s; )
            s instanceof eq
              ? e(s, r)
              : !s.vars.yoyoEase ||
                (s._yoyo && s._repeat) ||
                s._yoyo === r ||
                (s.timeline
                  ? e(s.timeline, r)
                  : ((i = s._ease),
                    (s._ease = s._yEase),
                    (s._yEase = i),
                    (s._yoyo = r))),
              (s = s._next);
        },
        eV = function (e, n) {
          return (e && (W(e) ? e : eP[e] || eR(e))) || n;
        },
        eI = function (e, n, r, i) {
          void 0 === r &&
            (r = function (e) {
              return 1 - n(1 - e);
            }),
            void 0 === i &&
              (i = function (e) {
                return e < 0.5 ? n(2 * e) / 2 : 1 - n((1 - e) * 2) / 2;
              });
          var s,
            o = { easeIn: n, easeOut: r, easeInOut: i };
          return (
            tA(e, function (e) {
              for (var n in ((eP[e] = to[e] = o),
              (eP[(s = e.toLowerCase())] = r),
              o))
                eP[
                  s +
                    ("easeIn" === n
                      ? ".in"
                      : "easeOut" === n
                      ? ".out"
                      : ".inOut")
                ] = eP[e + "." + n] = o[n];
            }),
            o
          );
        },
        ez = function (e) {
          return function (n) {
            return n < 0.5
              ? (1 - e(1 - 2 * n)) / 2
              : 0.5 + e((n - 0.5) * 2) / 2;
          };
        },
        eU = function e(n, r, i) {
          var s = r >= 1 ? r : 1,
            o = (i || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (o / L) * (Math.asin(1 / s) || 0),
            u = function (e) {
              return 1 === e
                ? 1
                : s * Math.pow(2, -10 * e) * U((e - a) * o) + 1;
            },
            l =
              "out" === n
                ? u
                : "in" === n
                ? function (e) {
                    return 1 - u(1 - e);
                  }
                : ez(u);
          return (
            (o = L / o),
            (l.config = function (r, i) {
              return e(n, r, i);
            }),
            l
          );
        },
        eZ = function e(n, r) {
          void 0 === r && (r = 1.70158);
          var i = function (e) {
              return e ? --e * e * ((r + 1) * e + r) + 1 : 0;
            },
            s =
              "out" === n
                ? i
                : "in" === n
                ? function (e) {
                    return 1 - i(1 - e);
                  }
                : ez(i);
          return (
            (s.config = function (r) {
              return e(n, r);
            }),
            s
          );
        };
      tA("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, n) {
        var r = n < 5 ? n + 1 : n;
        eI(
          e + ",Power" + (r - 1),
          n
            ? function (e) {
                return Math.pow(e, r);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, r);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, r) / 2
              : 1 - Math.pow((1 - e) * 2, r) / 2;
          }
        );
      }),
        (eP.Linear.easeNone = eP.none = eP.Linear.easeIn),
        eI("Elastic", eU("in"), eU("out"), eU()),
        (e$ = 2 * (eY = 1 / 2.75)),
        (eX = 2.5 * eY),
        eI(
          "Bounce",
          function (e) {
            return 1 - eG(1 - e);
          },
          (eG = function (e) {
            return e < eY
              ? 7.5625 * e * e
              : e < e$
              ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + 0.75
              : e < eX
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
          })
        ),
        eI("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        eI("Circ", function (e) {
          return -(I(1 - e * e) - 1);
        }),
        eI("Sine", function (e) {
          return 1 === e ? 1 : -z(e * N) + 1;
        }),
        eI("Back", eZ("in"), eZ("out"), eZ()),
        (eP.SteppedEase =
          eP.steps =
          to.SteppedEase =
            {
              config: function (e, n) {
                void 0 === e && (e = 1);
                var r = 1 / e,
                  i = e + (n ? 0 : 1),
                  s = n ? 1 : 0;
                return function (e) {
                  return (((i * er(0, 0.99999999, e)) | 0) + s) * r;
                };
              },
            }),
        (R.ease = eP["quad.out"]),
        tA(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (tE += e + "," + e + "Params,");
          }
        );
      var eW = function (e, n) {
          (this.id = V++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = n),
            (this.get = n ? n.get : tw),
            (this.set = n ? n.getSetter : ns);
        },
        eH = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              t4(this, +e.duration, 1, 1),
              (this.data = e.data),
              w && ((this._ctx = w), w.data.push(this)),
              M || eS.wake();
          }
          var n = e.prototype;
          return (
            (n.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (n.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (n.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  t4(
                    this,
                    this._repeat < 0
                      ? e
                      : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (n.totalTime = function (e, n) {
              if ((ej(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  tJ(this, e), !r._dp || r.parent || tQ(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : -((r.totalDuration() - r._tTime) / r._ts)) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  t0(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime === e &&
                  (this._dur || n) &&
                  (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                  (e || this._initted || (!this.add && !this._ptLookup))) ||
                  (this._ts || (this._pTime = e), tk(this, e, n)),
                this
              );
            }),
            (n.time = function (e, n) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + t$(this)) %
                      (this._dur + this._rDelay) || (e ? this._dur : 0),
                    n
                  )
                : this._time;
            }),
            (n.totalProgress = function (e, n) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, n)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (n.progress = function (e, n) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) +
                      t$(this),
                    n
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (n.iteration = function (e, n) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * r, n)
                : this._repeat
                ? tX(this._tTime, r) + 1
                : 1;
            }),
            (n.timeScale = function (e) {
              if (!arguments.length)
                return -0.00000001 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var n =
                this.parent && this._ts
                  ? tG(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -0.00000001 === e ? 0 : this._rts),
                this.totalTime(er(-this._delay, this._tDur, n), !0),
                tK(this),
                tq(this)
              );
            }),
            (n.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (ej(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (n.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var n = this.parent || this._dp;
                return (
                  n &&
                    (n._sort || !this.parent) &&
                    t0(n, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (n.endTime = function (e) {
              return (
                this._start +
                ($(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (n.rawTime = function (e) {
              var n = this.parent || this._dp;
              return n
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && 1 > this.totalProgress()))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? tG(n.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (n.revert = function (e) {
              void 0 === e && (e = tD);
              var n = b;
              return (
                (b = e),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(e),
                  this.totalTime(-0.01, e.suppressEvents)),
                "nested" !== this.data && !1 !== e.kill && this.kill(),
                (b = n),
                this
              );
            }),
            (n.globalTime = function (e) {
              for (var n = this, r = arguments.length ? e : n.rawTime(); n; )
                (r = n._start + r / (n._ts || 1)), (n = n._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1
                  : this._sat.globalTime(e)
                : r;
            }),
            (n.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), t7(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (n.repeatDelay = function (e) {
              if (arguments.length) {
                var n = this._time;
                return (this._rDelay = e), t7(this), n ? this.time(n) : this;
              }
              return this._rDelay;
            }),
            (n.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (n.seek = function (e, n) {
              return this.totalTime(et(this, e), $(n));
            }),
            (n.restart = function (e, n) {
              return this.play().totalTime(e ? -this._delay : 0, $(n));
            }),
            (n.play = function (e, n) {
              return null != e && this.seek(e, n), this.reversed(!1).paused(!1);
            }),
            (n.reverse = function (e, n) {
              return (
                null != e && this.seek(e || this.totalDuration(), n),
                this.reversed(!0).paused(!1)
              );
            }),
            (n.pause = function (e, n) {
              return null != e && this.seek(e, n), this.paused(!0);
            }),
            (n.resume = function () {
              return this.paused(!1);
            }),
            (n.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -0.00000001 : 0)),
                  this)
                : this._rts < 0;
            }),
            (n.invalidate = function () {
              return (
                (this._initted = this._act = 0),
                (this._zTime = -0.00000001),
                this
              );
            }),
            (n.isActive = function () {
              var e,
                n = this.parent || this._dp,
                r = this._start;
              return !!(
                !n ||
                (this._ts &&
                  this._initted &&
                  n.isActive() &&
                  (e = n.rawTime(!0)) >= r &&
                  e < this.endTime(!0) - 1e-8)
              );
            }),
            (n.eventCallback = function (e, n, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (n
                    ? ((i[e] = n),
                      r && (i[e + "Params"] = r),
                      "onUpdate" === e && (this._onUpdate = n))
                    : delete i[e],
                  this)
                : i[e];
            }),
            (n.then = function (e) {
              var n = this;
              return new Promise(function (r) {
                var i = W(e) ? e : tO,
                  s = function () {
                    var e = n.then;
                    (n.then = null),
                      W(i) && (i = i(n)) && (i.then || i === n) && (n.then = e),
                      r(i),
                      (n.then = e);
                  };
                (n._initted && 1 === n.totalProgress() && n._ts >= 0) ||
                (!n._tTime && n._ts < 0)
                  ? s()
                  : (n._prom = s);
              });
            }),
            (n.kill = function () {
              ey(this);
            }),
            e
          );
        })();
      tR(eH.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -0.00000001,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var eq = (function (e) {
        function n(n, r) {
          var s;
          return (
            void 0 === n && (n = {}),
            ((s = e.call(this, n) || this).labels = {}),
            (s.smoothChildTiming = !!n.smoothChildTiming),
            (s.autoRemoveChildren = !!n.autoRemoveChildren),
            (s._sort = $(n.sortChildren)),
            A && t0(n.parent || A, i(s), r),
            n.reversed && s.reverse(),
            n.paused && s.paused(!0),
            n.scrollTrigger && t1(i(s), n.scrollTrigger),
            s
          );
        }
        s(n, e);
        var r = n.prototype;
        return (
          (r.to = function (e, n, r) {
            return ee(0, arguments, this), this;
          }),
          (r.from = function (e, n, r) {
            return ee(1, arguments, this), this;
          }),
          (r.fromTo = function (e, n, r, i) {
            return ee(2, arguments, this), this;
          }),
          (r.set = function (e, n, r) {
            return (
              (n.duration = 0),
              (n.parent = this),
              tI(n).repeatDelay || (n.repeat = 0),
              (n.immediateRender = !!n.immediateRender),
              new nt(e, n, et(this, r), 1),
              this
            );
          }),
          (r.call = function (e, n, r) {
            return t0(this, nt.delayedCall(0, e, n), r);
          }),
          (r.staggerTo = function (e, n, r, i, s, o, a) {
            return (
              (r.duration = n),
              (r.stagger = r.stagger || i),
              (r.onComplete = o),
              (r.onCompleteParams = a),
              (r.parent = this),
              new nt(e, r, et(this, s)),
              this
            );
          }),
          (r.staggerFrom = function (e, n, r, i, s, o, a) {
            return (
              (r.runBackwards = 1),
              (tI(r).immediateRender = $(r.immediateRender)),
              this.staggerTo(e, n, r, i, s, o, a)
            );
          }),
          (r.staggerFromTo = function (e, n, r, i, s, o, a, u) {
            return (
              (i.startAt = r),
              (tI(i).immediateRender = $(i.immediateRender)),
              this.staggerTo(e, n, i, s, o, a, u)
            );
          }),
          (r.render = function (e, n, r) {
            var i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              d,
              f,
              p,
              D,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = e <= 0 ? 0 : tS(e),
              _ = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (
              (this !== A && y > g && e >= 0 && (y = g),
              y !== this._tTime || r || _)
            ) {
              if (
                (m !== this._time &&
                  v &&
                  ((y += this._time - m), (e += this._time - m)),
                (i = y),
                (d = this._start),
                (l = !(h = this._ts)),
                _ && (v || (m = this._zTime), (e || !n) && (this._zTime = e)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (u = v + this._rDelay),
                  this._repeat < -1 && e < 0)
                )
                  return this.totalTime(100 * u + e, n, r);
                if (
                  ((i = tS(y % u)),
                  y === g
                    ? ((a = this._repeat), (i = v))
                    : ((a = ~~(y / u)) && a === y / u && ((i = v), a--),
                      i > v && (i = v)),
                  (f = tX(this._tTime, u)),
                  !m && this._tTime && f !== a && (f = a),
                  p && 1 & a && ((i = v - i), (D = 1)),
                  a !== f && !this._lock)
                ) {
                  var x = p && 1 & f,
                    C = x === (p && 1 & a);
                  if (
                    (a < f && (x = !x),
                    (m = x ? 0 : v),
                    (this._lock = 1),
                    (this.render(m || (D ? 0 : tS(a * u)), n, !v)._lock = 0),
                    (this._tTime = y),
                    !n && this.parent && ev(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !D &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      !this._ts !== l ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((v = this._dur),
                      (g = this._tDur),
                      C &&
                        ((this._lock = 2),
                        (m = x ? v : -0.0001),
                        this.render(m, !0),
                        this.vars.repeatRefresh && !D && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !l))
                  )
                    return this;
                  eN(this, D);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (c = t5(this, tS(m), tS(i))) &&
                  (y -= i - (i = c._start)),
                (this._tTime = y),
                (this._time = i),
                (this._act = !h),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (m = 0)),
                !m && i && !n && (ev(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (i >= m && e >= 0)
                for (s = this._first; s; ) {
                  if (
                    ((o = s._next),
                    (s._act || i >= s._start) && s._ts && c !== s)
                  ) {
                    if (s.parent !== this) return this.render(e, n, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (i - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (i - s._start) * s._ts,
                        n,
                        r
                      ),
                      i !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), o && (y += this._zTime = -0.00000001);
                      break;
                    }
                  }
                  s = o;
                }
              else {
                s = this._last;
                for (var E = e < 0 ? e : i; s; ) {
                  if (
                    ((o = s._prev), (s._act || E <= s._end) && s._ts && c !== s)
                  ) {
                    if (s.parent !== this) return this.render(e, n, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (E - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (E - s._start) * s._ts,
                        n,
                        r || (b && (s._initted || s._startAt))
                      ),
                      i !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), o && (y += this._zTime = E ? -0.00000001 : 1e-8);
                      break;
                    }
                  }
                  s = o;
                }
              }
              if (
                c &&
                !n &&
                (this.pause(),
                (c.render(i >= m ? 0 : -0.00000001)._zTime = i >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = d), tK(this), this.render(e, n, r);
              this._onUpdate && !n && ev(this, "onUpdate", !0),
                ((y === g && this._tTime >= this.totalDuration()) ||
                  (!y && m)) &&
                  (d === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((e || !v) &&
                    ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                    tW(this, 1),
                  n ||
                    (e < 0 && !m) ||
                    (!y && !m && g) ||
                    (ev(
                      this,
                      y === g && e >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(y < g && this.timeScale() > 0) &&
                      this._prom()));
            }
            return this;
          }),
          (r.add = function (e, n) {
            var r = this;
            if ((H(n) || (n = et(this, n, e)), !(e instanceof eH))) {
              if (J(e))
                return (
                  e.forEach(function (e) {
                    return r.add(e, n);
                  }),
                  this
                );
              if (Z(e)) return this.addLabel(e, n);
              if (!W(e)) return this;
              e = nt.delayedCall(0, e);
            }
            return this !== e ? t0(this, e, n) : this;
          }),
          (r.getChildren = function (e, n, r, i) {
            void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -1e8);
            for (var s = [], o = this._first; o; )
              o._start >= i &&
                (o instanceof nt
                  ? n && s.push(o)
                  : (r && s.push(o),
                    e && s.push.apply(s, o.getChildren(!0, n, r)))),
                (o = o._next);
            return s;
          }),
          (r.getById = function (e) {
            for (var n = this.getChildren(1, 1, 1), r = n.length; r--; )
              if (n[r].vars.id === e) return n[r];
          }),
          (r.remove = function (e) {
            return Z(e)
              ? this.removeLabel(e)
              : W(e)
              ? this.killTweensOf(e)
              : (tZ(this, e),
                e === this._recent && (this._recent = this._last),
                tH(this));
          }),
          (r.totalTime = function (n, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = tS(
                    eS.time -
                      (this._ts > 0
                        ? n / this._ts
                        : -((this.totalDuration() - n) / this._ts))
                  )),
                e.prototype.totalTime.call(this, n, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (e, n) {
            return (this.labels[e] = et(this, n)), this;
          }),
          (r.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (r.addPause = function (e, n, r) {
            var i = nt.delayedCall(0, n || td, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              t0(this, i, et(this, e))
            );
          }),
          (r.removePause = function (e) {
            var n = this._first;
            for (e = et(this, e); n; )
              n._start === e && "isPause" === n.data && tW(n), (n = n._next);
          }),
          (r.killTweensOf = function (e, n, r) {
            for (var i = this.getTweensOf(e, r), s = i.length; s--; )
              eK !== i[s] && i[s].kill(e, n);
            return this;
          }),
          (r.getTweensOf = function (e, n) {
            for (var r, i = [], s = ea(e), o = this._first, a = H(n); o; )
              o instanceof nt
                ? tP(o._targets, s) &&
                  (a
                    ? (!eK || (o._initted && o._ts)) &&
                      o.globalTime(0) <= n &&
                      o.globalTime(o.totalDuration()) > n
                    : !n || o.isActive()) &&
                  i.push(o)
                : (r = o.getTweensOf(s, n)).length && i.push.apply(i, r),
                (o = o._next);
            return i;
          }),
          (r.tweenTo = function (e, n) {
            n = n || {};
            var r,
              i = this,
              s = et(i, e),
              o = n,
              a = o.startAt,
              u = o.onStart,
              l = o.onStartParams,
              c = o.immediateRender,
              h = nt.to(
                i,
                tR(
                  {
                    ease: n.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: s,
                    overwrite: "auto",
                    duration:
                      n.duration ||
                      Math.abs(
                        (s - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((i.pause(), !r)) {
                        var e =
                          n.duration ||
                          Math.abs(
                            (s - (a && "time" in a ? a.time : i._time)) /
                              i.timeScale()
                          );
                        h._dur !== e && t4(h, e, 0, 1).render(h._time, !0, !0),
                          (r = 1);
                      }
                      u && u.apply(h, l || []);
                    },
                  },
                  n
                )
              );
            return c ? h.render(0) : h;
          }),
          (r.tweenFromTo = function (e, n, r) {
            return this.tweenTo(n, tR({ startAt: { time: et(this, e) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (e) {
            return void 0 === e && (e = this._time), eg(this, et(this, e));
          }),
          (r.previousLabel = function (e) {
            return void 0 === e && (e = this._time), eg(this, et(this, e), 1);
          }),
          (r.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (e, n, r) {
            void 0 === r && (r = 0);
            for (var i, s = this._first, o = this.labels; s; )
              s._start >= r && ((s._start += e), (s._end += e)), (s = s._next);
            if (n) for (i in o) o[i] >= r && (o[i] += e);
            return tH(this);
          }),
          (r.invalidate = function (n) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(n), (r = r._next);
            return e.prototype.invalidate.call(this, n);
          }),
          (r.clear = function (e) {
            void 0 === e && (e = !0);
            for (var n, r = this._first; r; )
              (n = r._next), this.remove(r), (r = n);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              tH(this)
            );
          }),
          (r.totalDuration = function (e) {
            var n,
              r,
              i,
              s = 0,
              o = this,
              a = o._last,
              u = 1e8;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -e : e)
              );
            if (o._dirty) {
              for (i = o.parent; a; )
                (n = a._prev),
                  a._dirty && a.totalDuration(),
                  (r = a._start) > u && o._sort && a._ts && !o._lock
                    ? ((o._lock = 1), (t0(o, a, r - a._delay, 1)._lock = 0))
                    : (u = r),
                  r < 0 &&
                    a._ts &&
                    ((s -= r),
                    ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                      ((o._start += r / o._ts),
                      (o._time -= r),
                      (o._tTime -= r)),
                    o.shiftChildren(-r, !1, -Infinity),
                    (u = 0)),
                  a._end > s && a._ts && (s = a._end),
                  (a = n);
              t4(o, o === A && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (n.updateRoot = function (e) {
            if ((A._ts && (tk(A, tG(e, A)), (B = eS.frame)), eS.frame >= tx)) {
              tx += O.autoSleep || 120;
              var n = A._first;
              if ((!n || !n._ts) && O.autoSleep && eS._listeners.length < 2) {
                for (; n && !n._ts; ) n = n._next;
                n || eS.sleep();
              }
            }
          }),
          n
        );
      })(eH);
      tR(eq.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var eY,
        e$,
        eX,
        eG,
        eK,
        eJ,
        eQ = function (e, n, r, i, s, o, a) {
          var u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m = new np(this._pt, e, n, 0, 1, nu, null, s),
            g = 0,
            v = 0;
          for (
            m.b = r,
              m.e = i,
              r += "",
              i += "",
              (p = ~i.indexOf("random(")) && (i = eD(i)),
              o && (o((D = [r, i]), e, n), (r = D[0]), (i = D[1])),
              l = r.match(tn) || [];
            (u = tn.exec(i));

          )
            (h = u[0]),
              (d = i.substring(g, u.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
              h !== l[v++] &&
                ((f = parseFloat(l[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === v ? d : ",",
                  s: f,
                  c: "=" === h.charAt(1) ? tj(f, h) - f : parseFloat(h) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = tn.lastIndex));
          return (
            (m.c = g < i.length ? i.substring(g, i.length) : ""),
            (m.fp = a),
            (tr.test(i) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        e0 = function (e, n, r, i, s, o, a, u, l, c) {
          W(i) && (i = i(s || 0, e, o));
          var h,
            d = e[n],
            f =
              "get" !== r
                ? r
                : W(d)
                ? l
                  ? e[
                      n.indexOf("set") || !W(e["get" + n.substr(3)])
                        ? n
                        : "get" + n.substr(3)
                    ](l)
                  : e[n]()
                : d,
            p = W(d) ? (l ? nr : nn) : ne;
          if (
            (Z(i) &&
              (~i.indexOf("random(") && (i = eD(i)),
              "=" === i.charAt(1) &&
                ((h = tj(f, i) + (ei(f) || 0)) || 0 === h) &&
                (i = h)),
            !c || f !== i || eJ)
          )
            return isNaN(f * i) || "" === i
              ? (d || n in e || tl(n, i),
                eQ.call(this, e, n, f, i, p, u || O.stringFilter, l))
              : ((h = new np(
                  this._pt,
                  e,
                  n,
                  +f || 0,
                  i - (f || 0),
                  "boolean" == typeof d ? na : no,
                  0,
                  p
                )),
                l && (h.fp = l),
                a && h.modifier(a, this, e),
                (this._pt = h));
        },
        e1 = function (e, n, r, i, s) {
          if (
            (W(e) && (e = e4(e, s, n, r, i)),
            !Y(e) || (e.style && e.nodeType) || J(e) || K(e))
          )
            return Z(e) ? e4(e, s, n, r, i) : e;
          var o,
            a = {};
          for (o in e) a[o] = e4(e[o], s, n, r, i);
          return a;
        },
        e2 = function (e, n, r, i, s, o) {
          var a, u, l, c;
          if (
            ty[e] &&
            !1 !==
              (a = new ty[e]()).init(
                s,
                a.rawVars ? n[e] : e1(n[e], i, s, o, r),
                r,
                i,
                o
              ) &&
            ((r._pt = u =
              new np(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
            r !== k)
          )
            for (
              l = r._ptLookup[r._targets.indexOf(s)], c = a._props.length;
              c--;

            )
              l[a._props[c]] = u;
          return a;
        },
        e3 = function e(n, r, i) {
          var s,
            o,
            a,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m,
            g,
            v = n.vars,
            y = v.ease,
            _ = v.startAt,
            x = v.immediateRender,
            C = v.lazy,
            E = v.onUpdate,
            w = v.onUpdateParams,
            T = v.callbackScope,
            S = v.runBackwards,
            j = v.yoyoEase,
            P = v.keyframes,
            B = v.autoRevert,
            k = n._dur,
            M = n._startAt,
            O = n._targets,
            L = n.parent,
            N = L && "nested" === L.data ? L.vars.targets : O,
            V = "auto" === n._overwrite && !F,
            I = n.timeline;
          if (
            (!I || (P && y) || (y = "none"),
            (n._ease = eV(y, R.ease)),
            (n._yEase = j ? eL(eV(!0 === j ? y : j, R.ease)) : 0),
            j &&
              n._yoyo &&
              !n._repeat &&
              ((j = n._yEase), (n._yEase = n._ease), (n._ease = j)),
            (n._from = !I && !!v.runBackwards),
            !I || (P && !v.stagger))
          ) {
            if (
              ((m = (d = O[0] ? tb(O[0]).harness : 0) && v[d.prop]),
              (s = tV(v, tm)),
              M &&
                (M._zTime < 0 && M.progress(1),
                r < 0 && S && x && !B
                  ? M.render(-1, !0)
                  : M.revert(S && k ? tp : tf),
                (M._lazy = 0)),
              _)
            ) {
              if (
                (tW(
                  (n._startAt = nt.set(
                    O,
                    tR(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: L,
                        immediateRender: !0,
                        lazy: !M && $(C),
                        startAt: null,
                        delay: 0,
                        onUpdate: E,
                        onUpdateParams: w,
                        callbackScope: T,
                        stagger: 0,
                      },
                      _
                    )
                  ))
                ),
                (n._startAt._dp = 0),
                (n._startAt._sat = n),
                r < 0 && (b || (!x && !B)) && n._startAt.revert(tp),
                x && k && r <= 0 && i <= 0)
              ) {
                r && (n._zTime = r);
                return;
              }
            } else if (S && k && !M) {
              if (
                (r && (x = !1),
                (a = tR(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: x && !M && $(C),
                    immediateRender: x,
                    stagger: 0,
                    parent: L,
                  },
                  s
                )),
                m && (a[d.prop] = m),
                tW((n._startAt = nt.set(O, a))),
                (n._startAt._dp = 0),
                (n._startAt._sat = n),
                r < 0 &&
                  (b ? n._startAt.revert(tp) : n._startAt.render(-1, !0)),
                (n._zTime = r),
                x)
              ) {
                if (!r) return;
              } else e(n._startAt, 1e-8, 1e-8);
            }
            for (
              o = 0, n._pt = n._ptCache = 0, C = (k && $(C)) || (C && !k);
              o < O.length;
              o++
            ) {
              if (
                ((h = (l = O[o])._gsap || tF(O)[o]._gsap),
                (n._ptLookup[o] = p = {}),
                tv[h.id] && tg.length && tB(),
                (D = N === O ? o : N.indexOf(l)),
                d &&
                  !1 !== (f = new d()).init(l, m || s, n, D, N) &&
                  ((n._pt = u =
                    new np(n._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (e) {
                    p[e] = u;
                  }),
                  f.priority && (c = 1)),
                !d || m)
              )
                for (a in s)
                  ty[a] && (f = e2(a, s, n, D, l, N))
                    ? f.priority && (c = 1)
                    : (p[a] = u =
                        e0.call(n, l, a, "get", s[a], D, N, 0, v.stringFilter));
              n._op && n._op[o] && n.kill(l, n._op[o]),
                V &&
                  n._pt &&
                  ((eK = n),
                  A.killTweensOf(l, p, n.globalTime(r)),
                  (g = !n.parent),
                  (eK = 0)),
                n._pt && C && (tv[h.id] = 1);
            }
            c && nf(n), n._onInit && n._onInit(n);
          }
          (n._onUpdate = E),
            (n._initted = (!n._op || n._pt) && !g),
            P && r <= 0 && I.render(1e8, !0, !0);
        },
        e6 = function (e, n, r, i, s, o, a) {
          var u,
            l,
            c,
            h,
            d = ((e._pt && e._ptCache) || (e._ptCache = {}))[n];
          if (!d)
            for (
              d = e._ptCache[n] = [], c = e._ptLookup, h = e._targets.length;
              h--;

            ) {
              if ((u = c[h][n]) && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
              if (!u)
                return (eJ = 1), (e.vars[n] = "+=0"), e3(e, a), (eJ = 0), 1;
              d.push(u);
            }
          for (h = d.length; h--; )
            ((u = (l = d[h])._pt || l).s =
              (i || 0 === i) && !s ? i : u.s + (i || 0) + o * u.c),
              (u.c = r - u.s),
              l.e && (l.e = tT(r) + ei(l.e)),
              l.b && (l.b = u.s + ei(l.b));
        },
        e8 = function (e, n) {
          var r,
            i,
            s,
            o,
            a = e[0] ? tb(e[0]).harness : 0,
            u = a && a.aliases;
          if (!u) return n;
          for (i in ((r = tL({}, n)), u))
            if (i in r)
              for (s = (o = u[i].split(",")).length; s--; ) r[o[s]] = r[i];
          return r;
        },
        e5 = function (e, n, r, i) {
          var s,
            o,
            a = n.ease || i || "power1.inOut";
          if (J(n))
            (o = r[e] || (r[e] = [])),
              n.forEach(function (e, r) {
                return o.push({ t: (r / (n.length - 1)) * 100, v: e, e: a });
              });
          else
            for (s in n)
              (o = r[s] || (r[s] = [])),
                "ease" === s || o.push({ t: parseFloat(e), v: n[s], e: a });
        },
        e4 = function (e, n, r, i, s) {
          return W(e)
            ? e.call(n, r, i, s)
            : Z(e) && ~e.indexOf("random(")
            ? eD(e)
            : e;
        },
        e7 = tE + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        e9 = {};
      tA(e7 + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
        return (e9[e] = 1);
      });
      var nt = (function (e) {
        function n(n, r, s, o) {
          "number" == typeof r && ((s.duration = r), (r = s), (s = null));
          var a,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m = (a = e.call(this, o ? r : tI(r)) || this).vars,
            g = m.duration,
            v = m.delay,
            y = m.immediateRender,
            _ = m.stagger,
            x = m.overwrite,
            C = m.keyframes,
            E = m.defaults,
            b = m.scrollTrigger,
            w = m.yoyoEase,
            T = r.parent || A,
            S = (J(n) || K(n) ? H(n[0]) : "length" in r) ? [n] : ea(n);
          if (
            ((a._targets = S.length
              ? tF(S)
              : tc(
                  "GSAP target " + n + " not found. https://greensock.com",
                  !O.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = x),
            C || _ || G(g) || G(v))
          ) {
            if (
              ((r = a.vars),
              (u = a.timeline =
                new eq({
                  data: "nested",
                  defaults: E || {},
                  targets: T && "nested" === T.data ? T.vars.targets : S,
                })).kill(),
              (u.parent = u._dp = i(a)),
              (u._start = 0),
              _ || G(g) || G(v))
            ) {
              if (((h = S.length), (p = _ && ec(_)), Y(_)))
                for (d in _) ~e7.indexOf(d) && (D || (D = {}), (D[d] = _[d]));
              for (l = 0; l < h; l++)
                ((c = tV(r, e9)).stagger = 0),
                  w && (c.yoyoEase = w),
                  D && tL(c, D),
                  (f = S[l]),
                  (c.duration = +e4(g, i(a), l, f, S)),
                  (c.delay = (+e4(v, i(a), l, f, S) || 0) - a._delay),
                  !_ &&
                    1 === h &&
                    c.delay &&
                    ((a._delay = v = c.delay), (a._start += v), (c.delay = 0)),
                  u.to(f, c, p ? p(l, f, S) : 0),
                  (u._ease = eP.none);
              u.duration() ? (g = v = 0) : (a.timeline = 0);
            } else if (C) {
              tI(tR(u.vars.defaults, { ease: "none" })),
                (u._ease = eV(C.ease || r.ease || "none"));
              var j,
                P,
                B,
                k = 0;
              if (J(C))
                C.forEach(function (e) {
                  return u.to(S, e, ">");
                }),
                  u.duration();
              else {
                for (d in ((c = {}), C))
                  "ease" === d ||
                    "easeEach" === d ||
                    e5(d, C[d], c, C.easeEach);
                for (d in c)
                  for (
                    l = 0,
                      j = c[d].sort(function (e, n) {
                        return e.t - n.t;
                      }),
                      k = 0;
                    l < j.length;
                    l++
                  )
                    ((B = {
                      ease: (P = j[l]).e,
                      duration: ((P.t - (l ? j[l - 1].t : 0)) / 100) * g,
                    })[d] = P.v),
                      u.to(S, B, k),
                      (k += B.duration);
                u.duration() < g && u.to({}, { duration: g - u.duration() });
              }
            }
            g || a.duration((g = u.duration()));
          } else a.timeline = 0;
          return (
            !0 !== x || F || ((eK = i(a)), A.killTweensOf(S), (eK = 0)),
            t0(T, i(a), s),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (y ||
              (!g &&
                !C &&
                a._start === tS(T._time) &&
                $(y) &&
                (function e(n) {
                  return !n || (n._ts && e(n.parent));
                })(i(a)) &&
                "nested" !== T.data)) &&
              ((a._tTime = -0.00000001), a.render(Math.max(0, -v) || 0)),
            b && t1(i(a), b),
            a
          );
        }
        s(n, e);
        var r = n.prototype;
        return (
          (r.render = function (e, n, r) {
            var i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              d,
              f = this._time,
              p = this._tDur,
              D = this._dur,
              m = e < 0,
              g = e > p - 1e-8 && !m ? p : e < 1e-8 ? 0 : e;
            if (D) {
              if (
                g !== this._tTime ||
                !e ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((i = g), (h = this.timeline), this._repeat)) {
                  if (((a = D + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * a + e, n, r);
                  if (
                    ((i = tS(g % a)),
                    g === p
                      ? ((o = this._repeat), (i = D))
                      : ((o = ~~(g / a)) && o === g / a && ((i = D), o--),
                        i > D && (i = D)),
                    (l = this._yoyo && 1 & o) &&
                      ((d = this._yEase), (i = D - i)),
                    (u = tX(this._tTime, a)),
                    i === f && !r && this._initted)
                  )
                    return (this._tTime = g), this;
                  o === u ||
                    (h && this._yEase && eN(h, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(tS(a * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (t2(this, m ? e : i, r, n, g))
                    return (this._tTime = 0), this;
                  if (f !== this._time) return this;
                  if (D !== this._dur) return this.render(e, n, r);
                }
                if (
                  ((this._tTime = g),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (d || this._ease)(i / D)),
                  this._from && (this.ratio = c = 1 - c),
                  i && !f && !n && (ev(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (s = this._pt; s; ) s.r(c, s.d), (s = s._next);
                (h &&
                  h.render(
                    e < 0
                      ? e
                      : !i && l
                      ? -0.00000001
                      : h._dur * h._ease(i / this._dur),
                    n,
                    r
                  )) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate &&
                    !n &&
                    (m && tY(this, e, n, r), ev(this, "onUpdate")),
                  this._repeat &&
                    o !== u &&
                    this.vars.onRepeat &&
                    !n &&
                    this.parent &&
                    ev(this, "onRepeat"),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (m && !this._onUpdate && tY(this, e, !0, !0),
                    (e || !D) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      tW(this, 1),
                    !n &&
                      !(m && !f) &&
                      (g || f || l) &&
                      (ev(
                        this,
                        g === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else t8(this, e, n, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (n) {
            return (
              (n && this.vars.runBackwards) || (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(n),
              e.prototype.invalidate.call(this, n)
            );
          }),
          (r.resetTo = function (e, n, r, i) {
            M || eS.wake(), this._ts || this.play();
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (this._initted || e3(this, s),
            e6(this, e, n, r, i, this._ease(s / this._dur), s))
              ? this.resetTo(e, n, r, i)
              : (tJ(this, 0),
                this.parent ||
                  tU(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0));
          }),
          (r.kill = function (e, n) {
            if ((void 0 === n && (n = "all"), !e && (!n || "all" === n)))
              return (this._lazy = this._pt = 0), this.parent ? ey(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, n, eK && !0 !== eK.vars.overwrite)
                  ._first || ey(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  t4(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var i,
              s,
              o,
              a,
              u,
              l,
              c,
              h = this._targets,
              d = e ? ea(e) : h,
              f = this._ptLookup,
              p = this._pt;
            if ((!n || "all" === n) && tz(h, d))
              return "all" === n && (this._pt = 0), ey(this);
            for (
              i = this._op = this._op || [],
                "all" !== n &&
                  (Z(n) &&
                    ((u = {}),
                    tA(n, function (e) {
                      return (u[e] = 1);
                    }),
                    (n = u)),
                  (n = e8(h, n))),
                c = h.length;
              c--;

            )
              if (~d.indexOf(h[c]))
                for (u in ((s = f[c]),
                "all" === n
                  ? ((i[c] = n), (a = s), (o = {}))
                  : ((o = i[c] = i[c] || {}), (a = n)),
                a))
                  (l = s && s[u]) &&
                    (("kill" in l.d && !0 !== l.d.kill(u)) ||
                      tZ(this, l, "_pt"),
                    delete s[u]),
                    "all" !== o && (o[u] = 1);
            return this._initted && !this._pt && p && ey(this), this;
          }),
          (n.to = function (e, r) {
            return new n(e, r, arguments[2]);
          }),
          (n.from = function (e, n) {
            return ee(1, arguments);
          }),
          (n.delayedCall = function (e, r, i, s) {
            return new n(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: s,
            });
          }),
          (n.fromTo = function (e, n, r) {
            return ee(2, arguments);
          }),
          (n.set = function (e, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new n(e, r)
            );
          }),
          (n.killTweensOf = function (e, n, r) {
            return A.killTweensOf(e, n, r);
          }),
          n
        );
      })(eH);
      tR(nt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        tA("staggerTo,staggerFrom,staggerFromTo", function (e) {
          nt[e] = function () {
            var n = new eq(),
              r = es.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), n[e].apply(n, r)
            );
          };
        });
      var ne = function (e, n, r) {
          return (e[n] = r);
        },
        nn = function (e, n, r) {
          return e[n](r);
        },
        nr = function (e, n, r, i) {
          return e[n](i.fp, r);
        },
        ni = function (e, n, r) {
          return e.setAttribute(n, r);
        },
        ns = function (e, n) {
          return W(e[n]) ? nn : q(e[n]) && e.setAttribute ? ni : ne;
        },
        no = function (e, n) {
          return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
        },
        na = function (e, n) {
          return n.set(n.t, n.p, !!(n.s + n.c * e), n);
        },
        nu = function (e, n) {
          var r = n._pt,
            i = "";
          if (!e && n.b) i = n.b;
          else if (1 === e && n.e) i = n.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * e)
                  : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
                i),
                (r = r._next);
            i += n.c;
          }
          n.set(n.t, n.p, i, n);
        },
        nl = function (e, n) {
          for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
        },
        nc = function (e, n, r, i) {
          for (var s, o = this._pt; o; )
            (s = o._next), o.p === i && o.modifier(e, n, r), (o = s);
        },
        nh = function (e) {
          for (var n, r, i = this._pt; i; )
            (r = i._next),
              (i.p !== e || i.op) && i.op !== e
                ? i.dep || (n = 1)
                : tZ(this, i, "_pt"),
              (i = r);
          return !n;
        },
        nd = function (e, n, r, i) {
          i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
        },
        nf = function (e) {
          for (var n, r, i, s, o = e._pt; o; ) {
            for (n = o._next, r = i; r && r.pr > o.pr; ) r = r._next;
            (o._prev = r ? r._prev : s) ? (o._prev._next = o) : (i = o),
              (o._next = r) ? (r._prev = o) : (s = o),
              (o = n);
          }
          e._pt = i;
        },
        np = (function () {
          function e(e, n, r, i, s, o, a, u, l) {
            (this.t = n),
              (this.s = i),
              (this.c = s),
              (this.p = r),
              (this.r = o || no),
              (this.d = a || this),
              (this.set = u || ne),
              (this.pr = l || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, n, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = nd),
                (this.m = e),
                (this.mt = r),
                (this.tween = n);
            }),
            e
          );
        })();
      tA(
        tE +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (tm[e] = 1);
        }
      ),
        (to.TweenMax = to.TweenLite = nt),
        (to.TimelineLite = to.TimelineMax = eq),
        (A = new eq({
          sortChildren: !1,
          defaults: R,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (O.stringFilter = eT);
      var nD = [],
        nm = {},
        ng = [],
        nv = 0,
        ny = function (e) {
          return (nm[e] || ng).map(function (e) {
            return e();
          });
        },
        n_ = function () {
          var e = Date.now(),
            n = [];
          e - nv > 2 &&
            (ny("matchMediaInit"),
            nD.forEach(function (e) {
              var r,
                i,
                s,
                o,
                a = e.queries,
                u = e.conditions;
              for (i in a)
                (r = T.matchMedia(a[i]).matches) && (s = 1),
                  r !== u[i] && ((u[i] = r), (o = 1));
              o && (e.revert(), s && n.push(e));
            }),
            ny("matchMediaRevert"),
            n.forEach(function (e) {
              return e.onMatch(e);
            }),
            (nv = e),
            ny("matchMedia"));
        },
        nx = (function () {
          function e(e, n) {
            (this.selector = n && eu(n)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              e && this.add(e);
          }
          var n = e.prototype;
          return (
            (n.add = function (e, n, r) {
              W(e) && ((r = n), (n = e), (e = W));
              var i = this,
                s = function () {
                  var e,
                    s = w,
                    o = i.selector;
                  return (
                    s && s !== i && s.data.push(i),
                    r && (i.selector = eu(r)),
                    (w = i),
                    (e = n.apply(i, arguments)),
                    W(e) && i._r.push(e),
                    (w = s),
                    (i.selector = o),
                    (i.isReverted = !1),
                    e
                  );
                };
              return (i.last = s), e === W ? s(i) : e ? (i[e] = s) : s;
            }),
            (n.ignore = function (e) {
              var n = w;
              (w = null), e(this), (w = n);
            }),
            (n.getTweens = function () {
              var n = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof e
                    ? n.push.apply(n, r.getTweens())
                    : r instanceof nt &&
                        !(r.parent && "nested" === r.parent.data) &&
                        n.push(r);
                }),
                n
              );
            }),
            (n.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (n.kill = function (e, n) {
              var r = this;
              if (e) {
                var i = this.getTweens();
                this.data.forEach(function (e) {
                  "isFlip" === e.data &&
                    (e.revert(),
                    e.getChildren(!0, !0, !1).forEach(function (e) {
                      return i.splice(i.indexOf(e), 1);
                    }));
                }),
                  i
                    .map(function (e) {
                      return { g: e.globalTime(0), t: e };
                    })
                    .sort(function (e, n) {
                      return n.g - e.g || -1;
                    })
                    .forEach(function (n) {
                      return n.t.revert(e);
                    }),
                  this.data.forEach(function (n) {
                    return !(n instanceof eH) && n.revert && n.revert(e);
                  }),
                  this._r.forEach(function (n) {
                    return n(e, r);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (e) {
                  return e.kill && e.kill();
                });
              if ((this.clear(), n)) {
                var s = nD.indexOf(this);
                ~s && nD.splice(s, 1);
              }
            }),
            (n.revert = function (e) {
              this.kill(e || {});
            }),
            e
          );
        })(),
        nC = (function () {
          function e(e) {
            (this.contexts = []), (this.scope = e);
          }
          var n = e.prototype;
          return (
            (n.add = function (e, n, r) {
              Y(e) || (e = { matches: e });
              var i,
                s,
                o,
                a = new nx(0, r || this.scope),
                u = (a.conditions = {});
              for (s in (this.contexts.push(a),
              (n = a.add("onMatch", n)),
              (a.queries = e),
              e))
                "all" === s
                  ? (o = 1)
                  : (i = T.matchMedia(e[s])) &&
                    (0 > nD.indexOf(a) && nD.push(a),
                    (u[s] = i.matches) && (o = 1),
                    i.addListener
                      ? i.addListener(n_)
                      : i.addEventListener("change", n_));
              return o && n(a), this;
            }),
            (n.revert = function (e) {
              this.kill(e || {});
            }),
            (n.kill = function (e) {
              this.contexts.forEach(function (n) {
                return n.kill(e, !0);
              });
            }),
            e
          );
        })(),
        nE = {
          registerPlugin: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            n.forEach(function (e) {
              return e_(e);
            });
          },
          timeline: function (e) {
            return new eq(e);
          },
          getTweensOf: function (e, n) {
            return A.getTweensOf(e, n);
          },
          getProperty: function (e, n, r, i) {
            Z(e) && (e = ea(e)[0]);
            var s = tb(e || {}).get,
              o = r ? tO : tM;
            return (
              "native" === r && (r = ""),
              e
                ? n
                  ? o(((ty[n] && ty[n].get) || s)(e, n, r, i))
                  : function (n, r, i) {
                      return o(((ty[n] && ty[n].get) || s)(e, n, r, i));
                    }
                : e
            );
          },
          quickSetter: function (e, n, r) {
            if ((e = ea(e)).length > 1) {
              var i = e.map(function (e) {
                  return nA.quickSetter(e, n, r);
                }),
                s = i.length;
              return function (e) {
                for (var n = s; n--; ) i[n](e);
              };
            }
            e = e[0] || {};
            var o = ty[n],
              a = tb(e),
              u = (a.harness && (a.harness.aliases || {})[n]) || n,
              l = o
                ? function (n) {
                    var i = new o();
                    (k._pt = 0),
                      i.init(e, r ? n + r : n, k, 0, [e]),
                      i.render(1, i),
                      k._pt && nl(1, k);
                  }
                : a.set(e, u);
            return o
              ? l
              : function (n) {
                  return l(e, u, r ? n + r : n, a, 1);
                };
          },
          quickTo: function (e, n, r) {
            var i,
              s = nA.to(
                e,
                tL((((i = {})[n] = "+=0.1"), (i.paused = !0), i), r || {})
              ),
              o = function (e, r, i) {
                return s.resetTo(n, e, r, i);
              };
            return (o.tween = s), o;
          },
          isTweening: function (e) {
            return A.getTweensOf(e, !0).length > 0;
          },
          defaults: function (e) {
            return e && e.ease && (e.ease = eV(e.ease, R.ease)), tN(R, e || {});
          },
          config: function (e) {
            return tN(O, e || {});
          },
          registerEffect: function (e) {
            var n = e.name,
              r = e.effect,
              i = e.plugins,
              s = e.defaults,
              o = e.extendTimeline;
            (i || "").split(",").forEach(function (e) {
              return (
                e &&
                !ty[e] &&
                !to[e] &&
                tc(n + " effect requires " + e + " plugin.")
              );
            }),
              (t_[n] = function (e, n, i) {
                return r(ea(e), tR(n || {}, s), i);
              }),
              o &&
                (eq.prototype[n] = function (e, r, i) {
                  return this.add(t_[n](e, Y(r) ? r : (i = r) && {}, this), i);
                });
          },
          registerEase: function (e, n) {
            eP[e] = eV(n);
          },
          parseEase: function (e, n) {
            return arguments.length ? eV(e, n) : eP;
          },
          getById: function (e) {
            return A.getById(e);
          },
          exportRoot: function (e, n) {
            void 0 === e && (e = {});
            var r,
              i,
              s = new eq(e);
            for (
              s.smoothChildTiming = $(e.smoothChildTiming),
                A.remove(s),
                s._dp = 0,
                s._time = s._tTime = A._time,
                r = A._first;
              r;

            )
              (i = r._next),
                (n ||
                  !(
                    !r._dur &&
                    r instanceof nt &&
                    r.vars.onComplete === r._targets[0]
                  )) &&
                  t0(s, r, r._start - r._delay),
                (r = i);
            return t0(A, s, 0), s;
          },
          context: function (e, n) {
            return e ? new nx(e, n) : w;
          },
          matchMedia: function (e) {
            return new nC(e);
          },
          matchMediaRefresh: function () {
            return (
              nD.forEach(function (e) {
                var n,
                  r,
                  i = e.conditions;
                for (r in i) i[r] && ((i[r] = !1), (n = 1));
                n && e.revert();
              }) || n_()
            );
          },
          addEventListener: function (e, n) {
            var r = nm[e] || (nm[e] = []);
            ~r.indexOf(n) || r.push(n);
          },
          removeEventListener: function (e, n) {
            var r = nm[e],
              i = r && r.indexOf(n);
            i >= 0 && r.splice(i, 1);
          },
          utils: {
            wrap: function e(n, r, i) {
              var s = r - n;
              return J(n)
                ? ep(n, e(0, n.length), r)
                : en(i, function (e) {
                    return ((s + ((e - n) % s)) % s) + n;
                  });
            },
            wrapYoyo: function e(n, r, i) {
              var s = r - n,
                o = 2 * s;
              return J(n)
                ? ep(n, e(0, n.length - 1), r)
                : en(i, function (e) {
                    return (
                      (e = (o + ((e - n) % o)) % o || 0),
                      n + (e > s ? o - e : e)
                    );
                  });
            },
            distribute: ec,
            random: ef,
            snap: ed,
            normalize: function (e, n, r) {
              return em(e, n, 0, 1, r);
            },
            getUnit: ei,
            clamp: function (e, n, r) {
              return en(r, function (r) {
                return er(e, n, r);
              });
            },
            splitColor: eE,
            toArray: ea,
            selector: eu,
            mapRange: em,
            pipe: function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              return function (e) {
                return n.reduce(function (e, n) {
                  return n(e);
                }, e);
              };
            },
            unitize: function (e, n) {
              return function (r) {
                return e(parseFloat(r)) + (n || ei(r));
              };
            },
            interpolate: function e(n, r, i, s) {
              var o = isNaN(n + r)
                ? 0
                : function (e) {
                    return (1 - e) * n + e * r;
                  };
              if (!o) {
                var a,
                  u,
                  l,
                  c,
                  h,
                  d = Z(n),
                  f = {};
                if ((!0 === i && (s = 1) && (i = null), d))
                  (n = { p: n }), (r = { p: r });
                else if (J(n) && !J(r)) {
                  for (u = 1, l = [], h = (c = n.length) - 2; u < c; u++)
                    l.push(e(n[u - 1], n[u]));
                  c--,
                    (o = function (e) {
                      var n = Math.min(h, ~~(e *= c));
                      return l[n](e - n);
                    }),
                    (i = r);
                } else s || (n = tL(J(n) ? [] : {}, n));
                if (!l) {
                  for (a in r) e0.call(f, n, a, "get", r[a]);
                  o = function (e) {
                    return nl(e, f) || (d ? n.p : n);
                  };
                }
              }
              return en(i, o);
            },
            shuffle: el,
          },
          install: tu,
          effects: t_,
          ticker: eS,
          updateRoot: eq.updateRoot,
          plugins: ty,
          globalTimeline: A,
          core: {
            PropTween: np,
            globals: th,
            Tween: nt,
            Timeline: eq,
            Animation: eH,
            getCache: tb,
            _removeLinkedListItem: tZ,
            reverting: function () {
              return b;
            },
            context: function (e) {
              return e && w && (w.data.push(e), (e._ctx = w)), w;
            },
            suppressOverwrites: function (e) {
              return (F = e);
            },
          },
        };
      tA("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (nE[e] = nt[e]);
      }),
        eS.add(eq.updateRoot),
        (k = nE.to({}, { duration: 0 }));
      var nF = function (e, n) {
          for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
            r = r._next;
          return r;
        },
        nb = function (e, n) {
          var r,
            i,
            s,
            o = e._targets;
          for (r in n)
            for (i = o.length; i--; )
              (s = e._ptLookup[i][r]) &&
                (s = s.d) &&
                (s._pt && (s = nF(s, r)),
                s && s.modifier && s.modifier(n[r], e, o[i], r));
        },
        nw = function (e, n) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, r, i) {
              i._onInit = function (e) {
                var i, s;
                if (
                  (Z(r) &&
                    ((i = {}),
                    tA(r, function (e) {
                      return (i[e] = 1);
                    }),
                    (r = i)),
                  n)
                ) {
                  for (s in ((i = {}), r)) i[s] = n(r[s]);
                  r = i;
                }
                nb(e, r);
              };
            },
          };
        },
        nA =
          nE.registerPlugin(
            {
              name: "attr",
              init: function (e, n, r, i, s) {
                var o, a, u;
                for (o in ((this.tween = r), n))
                  (u = e.getAttribute(o) || ""),
                    ((a = this.add(
                      e,
                      "setAttribute",
                      (u || 0) + "",
                      n[o],
                      i,
                      s,
                      0,
                      0,
                      o
                    )).op = o),
                    (a.b = u),
                    this._props.push(o);
              },
              render: function (e, n) {
                for (var r = n._pt; r; )
                  b ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (e, n) {
                for (var r = n.length; r--; )
                  this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
              },
            },
            nw("roundProps", eh),
            nw("modifiers"),
            nw("snap", ed)
          ) || nE;
      (nt.version = eq.version = nA.version = "3.11.4"),
        (P = 1),
        X() && ej(),
        eP.Power0,
        eP.Power1,
        eP.Power2,
        eP.Power3,
        eP.Power4,
        eP.Linear,
        eP.Quad,
        eP.Cubic,
        eP.Quart,
        eP.Quint,
        eP.Strong,
        eP.Elastic,
        eP.Back,
        eP.SteppedEase,
        eP.Bounce,
        eP.Sine,
        eP.Expo,
        eP.Circ;
      /*!
       * CSSPlugin 3.11.4
       * https://greensock.com
       *
       * Copyright 2008-2022, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var nT,
        nS,
        nj,
        nP,
        nB,
        nk,
        nM,
        nO = {},
        nR = 180 / Math.PI,
        nL = Math.PI / 180,
        nN = Math.atan2,
        nV = /([A-Z])/g,
        nI = /(left|right|width|margin|padding|x)/i,
        nz = /[\s,\(]\S/,
        nU = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        nZ = function (e, n) {
          return n.set(
            n.t,
            n.p,
            Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
            n
          );
        },
        nW = function (e, n) {
          return n.set(
            n.t,
            n.p,
            1 === e ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
            n
          );
        },
        nH = function (e, n) {
          return n.set(
            n.t,
            n.p,
            e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
            n
          );
        },
        nq = function (e, n) {
          var r = n.s + n.c * e;
          n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
        },
        nY = function (e, n) {
          return n.set(n.t, n.p, e ? n.e : n.b, n);
        },
        n$ = function (e, n) {
          return n.set(n.t, n.p, 1 !== e ? n.b : n.e, n);
        },
        nX = function (e, n, r) {
          return (e.style[n] = r);
        },
        nG = function (e, n, r) {
          return e.style.setProperty(n, r);
        },
        nK = function (e, n, r) {
          return (e._gsap[n] = r);
        },
        nJ = function (e, n, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        nQ = function (e, n, r, i, s) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
        },
        n0 = function (e, n, r, i, s) {
          var o = e._gsap;
          (o[n] = r), o.renderTransform(s, o);
        },
        n1 = "transform",
        n2 = n1 + "Origin",
        n3 = function (e, n) {
          var r = this,
            i = this.target,
            s = i.style;
          if (e in nO) {
            if (
              ((this.tfm = this.tfm || {}),
              "transform" !== e &&
                (~(e = nU[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (e) {
                      return (r.tfm[e] = rh(i, e));
                    })
                  : (this.tfm[e] = i._gsap.x ? i._gsap[e] : rh(i, e))),
              this.props.indexOf(n1) >= 0)
            )
              return;
            i._gsap.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(n2, n, "")),
              (e = n1);
          }
          (s || n) && this.props.push(e, n, s[e]);
        },
        n6 = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        n8 = function () {
          var e,
            n,
            r = this.props,
            i = this.target,
            s = i.style,
            o = i._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (i[r[e]] = r[e + 2])
              : r[e + 2]
              ? (s[r[e]] = r[e + 2])
              : s.removeProperty(r[e].replace(nV, "-$1").toLowerCase());
          if (this.tfm) {
            for (n in this.tfm) o[n] = this.tfm[n];
            o.svg &&
              (o.renderTransform(),
              i.setAttribute("data-svg-origin", this.svgo || "")),
              (e = nk()) && !e.isStart && !s[n1] && (n6(s), (o.uncache = 1));
          }
        },
        n5 = function (e, n) {
          var r = { target: e, props: [], revert: n8, save: n3 };
          return (
            n &&
              n.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        n4 = function (e, n) {
          var r = nT.createElementNS
            ? nT.createElementNS(
                (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : nT.createElement(e);
          return r.style ? r : nT.createElement(e);
        },
        n7 = function e(n, r, i) {
          var s = getComputedStyle(n);
          return (
            s[r] ||
            s.getPropertyValue(r.replace(nV, "-$1").toLowerCase()) ||
            s.getPropertyValue(r) ||
            (!i && e(n, rt(r) || r, 1)) ||
            ""
          );
        },
        n9 = "O,Moz,ms,Ms,Webkit".split(","),
        rt = function (e, n, r) {
          var i = (n || nP).style,
            s = 5;
          if (e in i && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            s-- && !(n9[s] + e in i);

          );
          return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? n9[s] : "") + e;
        },
        re = function () {
          "undefined" != typeof window &&
            window.document &&
            ((nS = (nT = window.document).documentElement),
            (nP = n4("div") || { style: {} }),
            n4("div"),
            (n2 = (n1 = rt(n1)) + "Origin"),
            (nP.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (nM = !!rt("perspective")),
            (nk = nA.core.reverting),
            (nj = 1));
        },
        rn = function e(n) {
          var r,
            i = n4(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            s = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (nS.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            n)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            s && (o ? s.insertBefore(this, o) : s.appendChild(this)),
            nS.removeChild(i),
            (this.style.cssText = a),
            r
          );
        },
        rr = function (e, n) {
          for (var r = n.length; r--; )
            if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
        },
        ri = function (e) {
          var n;
          try {
            n = e.getBBox();
          } catch (r) {
            n = rn.call(e, !0);
          }
          return (
            (n && (n.width || n.height)) ||
              e.getBBox === rn ||
              (n = rn.call(e, !0)),
            !n || n.width || n.x || n.y
              ? n
              : {
                  x: +rr(e, ["x", "cx", "x1"]) || 0,
                  y: +rr(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        rs = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ri(e));
        },
        ro = function (e, n) {
          if (n) {
            var r = e.style;
            n in nO && n !== n2 && (n = n1),
              r.removeProperty
                ? (("ms" === n.substr(0, 2) || "webkit" === n.substr(0, 6)) &&
                    (n = "-" + n),
                  r.removeProperty(n.replace(nV, "-$1").toLowerCase()))
                : r.removeAttribute(n);
          }
        },
        ra = function (e, n, r, i, s, o) {
          var a = new np(e._pt, n, r, 0, 1, o ? n$ : nY);
          return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a;
        },
        ru = { deg: 1, rad: 1, turn: 1 },
        rl = { grid: 1, flex: 1 },
        rc = function e(n, r, i, s) {
          var o,
            a,
            u,
            l,
            c = parseFloat(i) || 0,
            h = (i + "").trim().substr((c + "").length) || "px",
            d = nP.style,
            f = nI.test(r),
            p = "svg" === n.tagName.toLowerCase(),
            D = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = "px" === s,
            g = "%" === s;
          return s === h || !c || ru[s] || ru[h]
            ? c
            : ("px" === h || m || (c = e(n, r, i, "px")),
              (l = n.getCTM && rs(n)),
              (g || "%" === h) && (nO[r] || ~r.indexOf("adius")))
            ? ((o = l ? n.getBBox()[f ? "width" : "height"] : n[D]),
              tT(g ? (c / o) * 100 : (c / 100) * o))
            : ((d[f ? "width" : "height"] = 100 + (m ? h : s)),
              (a =
                ~r.indexOf("adius") || ("em" === s && n.appendChild && !p)
                  ? n
                  : n.parentNode),
              l && (a = (n.ownerSVGElement || {}).parentNode),
              (a && a !== nT && a.appendChild) || (a = nT.body),
              (u = a._gsap) &&
                g &&
                u.width &&
                f &&
                u.time === eS.time &&
                !u.uncache)
            ? tT((c / u.width) * 100)
            : ((g || "%" === h) &&
                !rl[n7(a, "display")] &&
                (d.position = n7(n, "position")),
              a === n && (d.position = "static"),
              a.appendChild(nP),
              (o = nP[D]),
              a.removeChild(nP),
              (d.position = "absolute"),
              f && g && (((u = tb(a)).time = eS.time), (u.width = a[D])),
              tT(m ? (o * c) / 100 : o && c ? (100 / o) * c : 0));
        },
        rh = function (e, n, r, i) {
          var s;
          return (
            nj || re(),
            n in nU &&
              "transform" !== n &&
              ~(n = nU[n]).indexOf(",") &&
              (n = n.split(",")[0]),
            nO[n] && "transform" !== n
              ? ((s = rE(e, i)),
                (s =
                  "transformOrigin" !== n
                    ? s[n]
                    : s.svg
                    ? s.origin
                    : rF(n7(e, n2)) + " " + s.zOrigin + "px"))
              : (!(s = e.style[n]) ||
                  "auto" === s ||
                  i ||
                  ~(s + "").indexOf("calc(")) &&
                (s =
                  (rm[n] && rm[n](e, n, r)) ||
                  n7(e, n) ||
                  tw(e, n) ||
                  ("opacity" === n ? 1 : 0)),
            r && !~(s + "").trim().indexOf(" ") ? rc(e, n, s, r) + r : s
          );
        },
        rd = function (e, n, r, i) {
          if (!r || "none" === r) {
            var s = rt(n, e, 1),
              o = s && n7(e, s, 1);
            o && o !== r
              ? ((n = s), (r = o))
              : "borderColor" === n && (r = n7(e, "borderTopColor"));
          }
          var a,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m,
            g,
            v = new np(this._pt, e.style, n, 0, 1, nu),
            y = 0,
            _ = 0;
          if (
            ((v.b = r),
            (v.e = i),
            (r += ""),
            "auto" == (i += "") &&
              ((e.style[n] = i), (i = n7(e, n) || i), (e.style[n] = r)),
            eT((a = [r, i])),
            (r = a[0]),
            (i = a[1]),
            (l = r.match(te) || []),
            (i.match(te) || []).length)
          ) {
            for (; (u = te.exec(i)); )
              (f = u[0]),
                (D = i.substring(y, u.index)),
                h
                  ? (h = (h + 1) % 5)
                  : ("rgba(" === D.substr(-5) || "hsla(" === D.substr(-5)) &&
                    (h = 1),
                f !== (d = l[_++] || "") &&
                  ((c = parseFloat(d) || 0),
                  (g = d.substr((c + "").length)),
                  "=" === f.charAt(1) && (f = tj(c, f) + g),
                  (p = parseFloat(f)),
                  (m = f.substr((p + "").length)),
                  (y = te.lastIndex - m.length),
                  m ||
                    ((m = m || O.units[n] || g),
                    y !== i.length || ((i += m), (v.e += m))),
                  g !== m && (c = rc(e, n, d, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: D || 1 === _ ? D : ",",
                    s: c,
                    c: p - c,
                    m: (h && h < 4) || "zIndex" === n ? Math.round : 0,
                  }));
            v.c = y < i.length ? i.substring(y, i.length) : "";
          } else v.r = "display" === n && "none" === i ? n$ : nY;
          return tr.test(i) && (v.e = 0), (this._pt = v), v;
        },
        rf = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        rp = function (e) {
          var n = e.split(" "),
            r = n[0],
            i = n[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
              ((e = r), (r = i), (i = e)),
            (n[0] = rf[r] || r),
            (n[1] = rf[i] || i),
            n.join(" ")
          );
        },
        rD = function (e, n) {
          if (n.tween && n.tween._time === n.tween._dur) {
            var r,
              i,
              s,
              o = n.t,
              a = o.style,
              u = n.u,
              l = o._gsap;
            if ("all" === u || !0 === u) (a.cssText = ""), (i = 1);
            else
              for (s = (u = u.split(",")).length; --s > -1; )
                nO[(r = u[s])] &&
                  ((i = 1), (r = "transformOrigin" === r ? n2 : n1)),
                  ro(o, r);
            i &&
              (ro(o, n1),
              l &&
                (l.svg && o.removeAttribute("transform"),
                rE(o, 1),
                (l.uncache = 1),
                n6(a)));
          }
        },
        rm = {
          clearProps: function (e, n, r, i, s) {
            if ("isFromStart" !== s.data) {
              var o = (e._pt = new np(e._pt, n, r, 0, 0, rD));
              return (
                (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1
              );
            }
          },
        },
        rg = [1, 0, 0, 1, 0, 0],
        rv = {},
        ry = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        r_ = function (e) {
          var n = n7(e, n1);
          return ry(n) ? rg : n.substr(7).match(tt).map(tT);
        },
        rx = function (e, n) {
          var r,
            i,
            s,
            o,
            a = e._gsap || tb(e),
            u = e.style,
            l = r_(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                (s = e.transform.baseVal.consolidate().matrix).a,
                s.b,
                s.c,
                s.d,
                s.e,
                s.f,
              ]).join(",")
              ? rg
              : l
            : (l !== rg ||
                e.offsetParent ||
                e === nS ||
                a.svg ||
                ((s = u.display),
                (u.display = "block"),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (i = e.nextElementSibling), nS.appendChild(e)),
                (l = r_(e)),
                s ? (u.display = s) : ro(e, "display"),
                o &&
                  (i
                    ? r.insertBefore(e, i)
                    : r
                    ? r.appendChild(e)
                    : nS.removeChild(e))),
              n && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        rC = function (e, n, r, i, s, o) {
          var a,
            u,
            l,
            c,
            h = e._gsap,
            d = s || rx(e, !0),
            f = h.xOrigin || 0,
            p = h.yOrigin || 0,
            D = h.xOffset || 0,
            m = h.yOffset || 0,
            g = d[0],
            v = d[1],
            y = d[2],
            _ = d[3],
            x = d[4],
            C = d[5],
            E = n.split(" "),
            F = parseFloat(E[0]) || 0,
            b = parseFloat(E[1]) || 0;
          r
            ? d !== rg &&
              (u = g * _ - v * y) &&
              ((l = F * (_ / u) + b * (-y / u) + (y * C - _ * x) / u),
              (c = F * (-v / u) + b * (g / u) - (g * C - v * x) / u),
              (F = l),
              (b = c))
            : ((F =
                (a = ri(e)).x + (~E[0].indexOf("%") ? (F / 100) * a.width : F)),
              (b =
                a.y +
                (~(E[1] || E[0]).indexOf("%") ? (b / 100) * a.height : b))),
            i || (!1 !== i && h.smooth)
              ? ((x = F - f),
                (C = b - p),
                (h.xOffset = D + (x * g + C * y) - x),
                (h.yOffset = m + (x * v + C * _) - C))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = F),
            (h.yOrigin = b),
            (h.smooth = !!i),
            (h.origin = n),
            (h.originIsAbsolute = !!r),
            (e.style[n2] = "0px 0px"),
            o &&
              (ra(o, h, "xOrigin", f, F),
              ra(o, h, "yOrigin", p, b),
              ra(o, h, "xOffset", D, h.xOffset),
              ra(o, h, "yOffset", m, h.yOffset)),
            e.setAttribute("data-svg-origin", F + " " + b);
        },
        rE = function (e, n) {
          var r = e._gsap || new eW(e);
          if ("x" in r && !n && !r.uncache) return r;
          var i,
            s,
            o,
            a,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m,
            g,
            v,
            y,
            _,
            x,
            C,
            E,
            F,
            b,
            w,
            A,
            T,
            S,
            j,
            P,
            B,
            k,
            M,
            R,
            L = e.style,
            N = r.scaleX < 0,
            V = getComputedStyle(e),
            I = n7(e, n2) || "0";
          return (
            (i = s = o = l = c = h = d = f = p = 0),
            (a = u = 1),
            (r.svg = !!(e.getCTM && rs(e))),
            V.translate &&
              (("none" !== V.translate ||
                "none" !== V.scale ||
                "none" !== V.rotate) &&
                (L[n1] =
                  ("none" !== V.translate
                    ? "translate3d(" +
                      (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") +
                  ("none" !== V.scale
                    ? "scale(" + V.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== V[n1] ? V[n1] : "")),
              (L.scale = L.rotate = L.translate = "none")),
            (g = rx(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((T = e.getBBox()),
                  (I = r.xOrigin - T.x + "px " + (r.yOrigin - T.y) + "px"),
                  (A = ""))
                : (A = !n && e.getAttribute("data-svg-origin")),
              rC(e, A || I, !!A || r.originIsAbsolute, !1 !== r.smooth, g)),
            (D = r.xOrigin || 0),
            (m = r.yOrigin || 0),
            g !== rg &&
              ((x = g[0]),
              (C = g[1]),
              (E = g[2]),
              (F = g[3]),
              (i = b = g[4]),
              (s = w = g[5]),
              6 === g.length
                ? ((a = Math.sqrt(x * x + C * C)),
                  (u = Math.sqrt(F * F + E * E)),
                  (l = x || C ? nN(C, x) * nR : 0),
                  (d = E || F ? nN(E, F) * nR + l : 0) &&
                    (u *= Math.abs(Math.cos(d * nL))),
                  r.svg &&
                    ((i -= D - (D * x + m * E)), (s -= m - (D * C + m * F))))
                : ((R = g[6]),
                  (k = g[7]),
                  (j = g[8]),
                  (P = g[9]),
                  (B = g[10]),
                  (M = g[11]),
                  (i = g[12]),
                  (s = g[13]),
                  (o = g[14]),
                  (c = (v = nN(R, B)) * nR),
                  v &&
                    ((A = b * (y = Math.cos(-v)) + j * (_ = Math.sin(-v))),
                    (T = w * y + P * _),
                    (S = R * y + B * _),
                    (j = -(b * _) + j * y),
                    (P = -(w * _) + P * y),
                    (B = -(R * _) + B * y),
                    (M = -(k * _) + M * y),
                    (b = A),
                    (w = T),
                    (R = S)),
                  (h = (v = nN(-E, B)) * nR),
                  v &&
                    ((A = x * (y = Math.cos(-v)) - j * (_ = Math.sin(-v))),
                    (T = C * y - P * _),
                    (S = E * y - B * _),
                    (M = F * _ + M * y),
                    (x = A),
                    (C = T),
                    (E = S)),
                  (l = (v = nN(C, x)) * nR),
                  v &&
                    ((y = Math.cos(v)),
                    (_ = Math.sin(v)),
                    (A = x * y + C * _),
                    (T = b * y + w * _),
                    (C = C * y - x * _),
                    (w = w * y - b * _),
                    (x = A),
                    (b = T)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (h = 180 - h)),
                  (a = tT(Math.sqrt(x * x + C * C + E * E))),
                  (u = tT(Math.sqrt(w * w + R * R))),
                  (d = Math.abs((v = nN(b, w))) > 2e-4 ? v * nR : 0),
                  (p = M ? 1 / (M < 0 ? -M : M) : 0)),
              r.svg &&
                ((A = e.getAttribute("transform")),
                (r.forceCSS =
                  e.setAttribute("transform", "") || !ry(n7(e, n1))),
                A && e.setAttribute("transform", A))),
            Math.abs(d) > 90 &&
              270 > Math.abs(d) &&
              (N
                ? ((a *= -1),
                  (d += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((u *= -1), (d += d <= 0 ? 180 : -180))),
            (n = n || r.uncache),
            (r.x =
              i -
              ((r.xPercent =
                i &&
                ((!n && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              s -
              ((r.yPercent =
                s &&
                ((!n && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-s)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = tT(a)),
            (r.scaleY = tT(u)),
            (r.rotation = tT(l) + "deg"),
            (r.rotationX = tT(c) + "deg"),
            (r.rotationY = tT(h) + "deg"),
            (r.skewX = d + "deg"),
            (r.skewY = f + "deg"),
            (r.transformPerspective = p + "px"),
            (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (L[n2] = rF(I)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = O.force3D),
            (r.renderTransform = r.svg ? rS : nM ? rT : rw),
            (r.uncache = 0),
            r
          );
        },
        rF = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        rb = function (e, n, r) {
          var i = ei(n);
          return tT(parseFloat(n) + parseFloat(rc(e, "x", r + "px", i))) + i;
        },
        rw = function (e, n) {
          (n.z = "0px"),
            (n.rotationY = n.rotationX = "0deg"),
            (n.force3D = 0),
            rT(e, n);
        },
        rA = "0deg",
        rT = function (e, n) {
          var r = n || this,
            i = r.xPercent,
            s = r.yPercent,
            o = r.x,
            a = r.y,
            u = r.z,
            l = r.rotation,
            c = r.rotationY,
            h = r.rotationX,
            d = r.skewX,
            f = r.skewY,
            p = r.scaleX,
            D = r.scaleY,
            m = r.transformPerspective,
            g = r.force3D,
            v = r.target,
            y = r.zOrigin,
            _ = "",
            x = ("auto" === g && e && 1 !== e) || !0 === g;
          if (y && (h !== rA || c !== rA)) {
            var C,
              E = parseFloat(c) * nL,
              F = Math.sin(E),
              b = Math.cos(E);
            (o = rb(v, o, -(F * (C = Math.cos((E = parseFloat(h) * nL))) * y))),
              (a = rb(v, a, -(-Math.sin(E) * y))),
              (u = rb(v, u, -(b * C * y) + y));
          }
          "0px" !== m && (_ += "perspective(" + m + ") "),
            (i || s) && (_ += "translate(" + i + "%, " + s + "%) "),
            (x || "0px" !== o || "0px" !== a || "0px" !== u) &&
              (_ +=
                "0px" !== u || x
                  ? "translate3d(" + o + ", " + a + ", " + u + ") "
                  : "translate(" + o + ", " + a + ") "),
            l !== rA && (_ += "rotate(" + l + ") "),
            c !== rA && (_ += "rotateY(" + c + ") "),
            h !== rA && (_ += "rotateX(" + h + ") "),
            (d !== rA || f !== rA) && (_ += "skew(" + d + ", " + f + ") "),
            (1 !== p || 1 !== D) && (_ += "scale(" + p + ", " + D + ") "),
            (v.style[n1] = _ || "translate(0, 0)");
        },
        rS = function (e, n) {
          var r,
            i,
            s,
            o,
            a,
            u = n || this,
            l = u.xPercent,
            c = u.yPercent,
            h = u.x,
            d = u.y,
            f = u.rotation,
            p = u.skewX,
            D = u.skewY,
            m = u.scaleX,
            g = u.scaleY,
            v = u.target,
            y = u.xOrigin,
            _ = u.yOrigin,
            x = u.xOffset,
            C = u.yOffset,
            E = u.forceCSS,
            F = parseFloat(h),
            b = parseFloat(d);
          (f = parseFloat(f)),
            (p = parseFloat(p)),
            (D = parseFloat(D)) && ((p += D = parseFloat(D)), (f += D)),
            f || p
              ? ((f *= nL),
                (p *= nL),
                (r = Math.cos(f) * m),
                (i = Math.sin(f) * m),
                (s = -(Math.sin(f - p) * g)),
                (o = Math.cos(f - p) * g),
                p &&
                  ((D *= nL),
                  (s *= a = Math.sqrt(1 + (a = Math.tan(p - D)) * a)),
                  (o *= a),
                  D &&
                    ((r *= a = Math.sqrt(1 + (a = Math.tan(D)) * a)),
                    (i *= a))),
                (r = tT(r)),
                (i = tT(i)),
                (s = tT(s)),
                (o = tT(o)))
              : ((r = m), (o = g), (i = s = 0)),
            ((F && !~(h + "").indexOf("px")) ||
              (b && !~(d + "").indexOf("px"))) &&
              ((F = rc(v, "x", h, "px")), (b = rc(v, "y", d, "px"))),
            (y || _ || x || C) &&
              ((F = tT(F + y - (y * r + _ * s) + x)),
              (b = tT(b + _ - (y * i + _ * o) + C))),
            (l || c) &&
              ((F = tT(F + (l / 100) * (a = v.getBBox()).width)),
              (b = tT(b + (c / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              i +
              "," +
              s +
              "," +
              o +
              "," +
              F +
              "," +
              b +
              ")"),
            v.setAttribute("transform", a),
            E && (v.style[n1] = a);
        },
        rj = function (e, n, r, i, s) {
          var o,
            a,
            u = Z(s),
            l = parseFloat(s) * (u && ~s.indexOf("rad") ? nR : 1) - i,
            c = i + l + "deg";
          return (
            u &&
              ("short" === (o = s.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = a = new np(e._pt, n, r, i, l, nW)),
            (a.e = c),
            (a.u = "deg"),
            e._props.push(r),
            a
          );
        },
        rP = function (e, n) {
          for (var r in n) e[r] = n[r];
          return e;
        },
        rB = function (e, n, r) {
          var i,
            s,
            o,
            a,
            u,
            l,
            c,
            h = rP({}, r._gsap),
            d = r.style;
          for (s in (h.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (d[n1] = n),
              (i = rE(r, 1)),
              ro(r, n1),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[n1]),
              (d[n1] = n),
              (i = rE(r, 1)),
              (d[n1] = o)),
          nO))
            (o = h[s]) !== (a = i[s]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) &&
              ((u = ei(o) !== (c = ei(a)) ? rc(r, s, o, c) : parseFloat(o)),
              (l = parseFloat(a)),
              (e._pt = new np(e._pt, i, s, u, l - u, nZ)),
              (e._pt.u = c || 0),
              e._props.push(s));
          rP(i, h);
        };
      tA("padding,margin,Width,Radius", function (e, n) {
        var r = "Right",
          i = "Bottom",
          s = "Left",
          o = (
            n < 3 ? ["Top", r, i, s] : ["Top" + s, "Top" + r, i + r, i + s]
          ).map(function (r) {
            return n < 2 ? e + r : "border" + r + e;
          });
        rm[n > 1 ? "border" + e : e] = function (e, n, r, i, s) {
          var a, u;
          if (arguments.length < 4)
            return 5 ===
              (u = (a = o.map(function (n) {
                return rh(e, n, r);
              })).join(" ")).split(a[0]).length
              ? a[0]
              : u;
          (a = (i + "").split(" ")),
            (u = {}),
            o.forEach(function (e, n) {
              return (u[e] = a[n] = a[n] || a[((n - 1) / 2) | 0]);
            }),
            e.init(n, u, s);
        };
      });
      var rk = {
        name: "css",
        register: re,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, n, r, i, s) {
          var o,
            a,
            u,
            l,
            c,
            h,
            d,
            f,
            p,
            D,
            m,
            g,
            v,
            y,
            _,
            x,
            C = this._props,
            E = e.style,
            F = r.vars.startAt;
          for (d in (nj || re(),
          (this.styles = this.styles || n5(e)),
          (x = this.styles.props),
          (this.tween = r),
          n))
            if (
              "autoRound" !== d &&
              ((a = n[d]), !(ty[d] && e2(d, n, r, i, e, s)))
            ) {
              if (
                ((c = typeof a),
                (h = rm[d]),
                "function" === c && (c = typeof (a = a.call(r, i, e, s))),
                "string" === c && ~a.indexOf("random(") && (a = eD(a)),
                h)
              )
                h(this, e, d, a, r) && (_ = 1);
              else if ("--" === d.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (a += ""),
                  (ew.lastIndex = 0),
                  ew.test(o) || ((f = ei(o)), (p = ei(a))),
                  p ? f !== p && (o = rc(e, d, o, p) + p) : f && (a += f),
                  this.add(E, "setProperty", o, a, i, s, 0, 0, d),
                  C.push(d),
                  x.push(d, 0, E[d]);
              else if ("undefined" !== c) {
                if (
                  (F && d in F
                    ? (Z(
                        (o =
                          "function" == typeof F[d]
                            ? F[d].call(r, i, e, s)
                            : F[d])
                      ) &&
                        ~o.indexOf("random(") &&
                        (o = eD(o)),
                      ei(o + "") || (o += O.units[d] || ei(rh(e, d)) || ""),
                      "=" === (o + "").charAt(1) && (o = rh(e, d)))
                    : (o = rh(e, d)),
                  (l = parseFloat(o)),
                  (D =
                    "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (u = parseFloat(a)),
                  d in nU &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === rh(e, "visibility") &&
                        u &&
                        (l = 0),
                      x.push("visibility", 0, E.visibility),
                      ra(
                        this,
                        E,
                        "visibility",
                        l ? "inherit" : "hidden",
                        u ? "inherit" : "hidden",
                        !u
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = nU[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (m = d in nO))
                ) {
                  if (
                    (this.styles.save(d),
                    g ||
                      (((v = e._gsap).renderTransform && !n.parseTransform) ||
                        rE(e, n.parseTransform),
                      (y = !1 !== n.smoothOrigin && v.smooth),
                      ((g = this._pt =
                        new np(
                          this._pt,
                          E,
                          n1,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new np(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      (D ? tj(v.scaleY, D + u) : u) - v.scaleY || 0,
                      nZ
                    )),
                      (this._pt.u = 0),
                      C.push("scaleY", d),
                      (d += "X");
                  else if ("transformOrigin" === d) {
                    x.push(n2, 0, E[n2]),
                      (a = rp(a)),
                      v.svg
                        ? rC(e, a, 0, y, 0, this)
                        : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                            v.zOrigin && ra(this, v, "zOrigin", v.zOrigin, p),
                          ra(this, E, d, rF(o), rF(a)));
                    continue;
                  } else if ("svgOrigin" === d) {
                    rC(e, a, 1, y, 0, this);
                    continue;
                  } else if (d in rv) {
                    rj(this, v, d, l, D ? tj(l, D + a) : a);
                    continue;
                  } else if ("smoothOrigin" === d) {
                    ra(this, v, "smooth", v.smooth, a);
                    continue;
                  } else if ("force3D" === d) {
                    v[d] = a;
                    continue;
                  } else if ("transform" === d) {
                    rB(this, a, e);
                    continue;
                  }
                } else d in E || (d = rt(d) || d);
                if (
                  m ||
                  ((u || 0 === u) && (l || 0 === l) && !nz.test(a) && d in E)
                )
                  (f = (o + "").substr((l + "").length)),
                    u || (u = 0),
                    (p = ei(a) || (d in O.units ? O.units[d] : f)),
                    f !== p && (l = rc(e, d, o, p)),
                    (this._pt = new np(
                      this._pt,
                      m ? v : E,
                      d,
                      l,
                      (D ? tj(l, D + u) : u) - l,
                      m || ("px" !== p && "zIndex" !== d) || !1 === n.autoRound
                        ? nZ
                        : nq
                    )),
                    (this._pt.u = p || 0),
                    f !== p &&
                      "%" !== p &&
                      ((this._pt.b = o), (this._pt.r = nH));
                else if (d in E) rd.call(this, e, d, o, D ? D + a : a);
                else if (d in e) this.add(e, d, o || e[d], D ? D + a : a, i, s);
                else if ("parseTransform" !== d) {
                  tl(d, a);
                  continue;
                }
                m || (d in E ? x.push(d, 0, E[d]) : x.push(d, 1, o || e[d])),
                  C.push(d);
              }
            }
          _ && nf(this);
        },
        render: function (e, n) {
          if (n.tween._time || !nk())
            for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
          else n.styles.revert();
        },
        get: rh,
        aliases: nU,
        getSetter: function (e, n, r) {
          var i = nU[n];
          return (
            i && 0 > i.indexOf(",") && (n = i),
            n in nO && n !== n2 && (e._gsap.x || rh(e, "x"))
              ? r && nB === r
                ? "scale" === n
                  ? nJ
                  : nK
                : ((nB = r || {}), "scale" === n ? nQ : n0)
              : e.style && !q(e.style[n])
              ? nX
              : ~n.indexOf("-")
              ? nG
              : ns(e, n)
          );
        },
        core: { _removeProperty: ro, _getMatrix: rx },
      };
      (nA.utils.checkPrefix = rt),
        (nA.core.getStyleSaver = n5),
        (u = tA(
          (o = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
            "," +
            (a = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            nO[e] = 1;
          }
        )),
        tA(a, function (e) {
          (O.units[e] = "deg"), (rv[e] = 1);
        }),
        (nU[u[13]] = o + "," + a),
        tA(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var n = e.split(":");
            nU[n[1]] = u[n[0]];
          }
        ),
        tA(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            O.units[e] = "px";
          }
        ),
        nA.registerPlugin(rk);
      var rM = nA.registerPlugin(rk) || nA;
      rM.core.Tween;
    },
    4394: function (e, n, r) {
      "use strict";
      r.d(n, {
        K: function () {
          return i;
        },
        k: function () {
          return s;
        },
      });
      var i = function () {},
        s = function () {};
    },
    3454: function (e, n, r) {
      "use strict";
      var i, s;
      e.exports =
        (null == (i = r.g.process) ? void 0 : i.env) &&
        "object" == typeof (null == (s = r.g.process) ? void 0 : s.env)
          ? r.g.process
          : r(7663);
    },
    3837: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(3979);
        },
      ]);
    },
    431: function () {},
    3486: function () {},
    3557: function () {},
    5863: function () {},
    4891: function () {},
    2473: function () {},
    194: function () {},
    5435: function () {},
    4588: function (e) {
      e.exports = {
        glitchLoader: "loader_glitchLoader__sbSc5",
        "animate-glitch-loader": "loader_animate-glitch-loader__yNlhA",
      };
    },
    9644: function (e) {
      e.exports = { canvas: "noise_canvas__ruE67" };
    },
    9959: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getDomainLocale = function (e, n, r, i) {
          return !1;
        }),
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (e.exports = n.default));
    },
    30: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = r(6495).Z,
        s = r(2648).Z,
        o = r(1598).Z,
        a = r(7273).Z,
        u = o(r(5784)),
        l = s(r(5322)),
        c = r(9642),
        h = r(931),
        d = r(601);
      r(2437);
      var f = s(r(7112));
      let p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function D(e) {
        return void 0 !== e.default;
      }
      function m(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function g(e, n, r, s, o, a, u) {
        if (!e || e["data-loaded-src"] === n) return;
        e["data-loaded-src"] = n;
        let l = "decode" in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (("blur" === r && a(!0), null == s ? void 0 : s.current)) {
              let n = new Event("load");
              Object.defineProperty(n, "target", { writable: !1, value: e });
              let r = !1,
                o = !1;
              s.current(
                i({}, n, {
                  nativeEvent: n,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), n.preventDefault();
                  },
                  stopPropagation: () => {
                    (o = !0), n.stopPropagation();
                  },
                })
              );
            }
            (null == o ? void 0 : o.current) && o.current(e);
          }
        });
      }
      let v = u.forwardRef((e, n) => {
          var {
              imgAttributes: r,
              heightInt: s,
              widthInt: o,
              qualityInt: l,
              className: c,
              imgStyle: h,
              blurStyle: d,
              isLazy: f,
              fill: p,
              placeholder: D,
              loading: m,
              srcString: v,
              config: y,
              unoptimized: _,
              loader: x,
              onLoadRef: C,
              onLoadingCompleteRef: E,
              setBlurComplete: F,
              setShowAltText: b,
              onLoad: w,
              onError: A,
            } = e,
            T = a(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (m = f ? "lazy" : m),
            u.default.createElement(
              u.default.Fragment,
              null,
              u.default.createElement(
                "img",
                Object.assign({}, T, r, {
                  width: o,
                  height: s,
                  decoding: "async",
                  "data-nimg": p ? "fill" : "1",
                  className: c,
                  loading: m,
                  style: i({}, h, d),
                  ref: u.useCallback(
                    (e) => {
                      n &&
                        ("function" == typeof n
                          ? n(e)
                          : "object" == typeof n && (n.current = e)),
                        e &&
                          (A && (e.src = e.src),
                          e.complete && g(e, v, D, C, E, F, _));
                    },
                    [v, D, C, E, F, A, _, n]
                  ),
                  onLoad: (e) => {
                    let n = e.currentTarget;
                    g(n, v, D, C, E, F, _);
                  },
                  onError: (e) => {
                    b(!0), "blur" === D && F(!0), A && A(e);
                  },
                })
              )
            )
          );
        }),
        y = u.forwardRef((e, n) => {
          let r, s;
          var o,
            {
              src: g,
              sizes: y,
              unoptimized: _ = !1,
              priority: x = !1,
              loading: C,
              className: E,
              quality: F,
              width: b,
              height: w,
              fill: A,
              style: T,
              onLoad: S,
              onLoadingComplete: j,
              placeholder: P = "empty",
              blurDataURL: B,
              layout: k,
              objectFit: M,
              objectPosition: O,
              lazyBoundary: R,
              lazyRoot: L,
            } = e,
            N = a(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let V = u.useContext(d.ImageConfigContext),
            I = u.useMemo(() => {
              let e = p || V || h.imageConfigDefault,
                n = [...e.deviceSizes, ...e.imageSizes].sort((e, n) => e - n),
                r = e.deviceSizes.sort((e, n) => e - n);
              return i({}, e, { allSizes: n, deviceSizes: r });
            }, [V]),
            z = N,
            U = z.loader || f.default;
          delete z.loader;
          let Z = "__next_img_default" in U;
          if (Z) {
            if ("custom" === I.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let e = U;
            U = (n) => {
              let { config: r } = n,
                i = a(n, ["config"]);
              return e(i);
            };
          }
          if (k) {
            "fill" === k && (A = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[k];
            e && (T = i({}, T, e));
            let n = { responsive: "100vw", fill: "100vw" }[k];
            n && !y && (y = n);
          }
          let W = "",
            H = m(b),
            q = m(w);
          if ("object" == typeof (o = g) && (D(o) || void 0 !== o.src)) {
            let e = D(g) ? g.default : g;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (
              ((r = e.blurWidth),
              (s = e.blurHeight),
              (B = B || e.blurDataURL),
              (W = e.src),
              !A)
            ) {
              if (H || q) {
                if (H && !q) {
                  let n = H / e.width;
                  q = Math.round(e.height * n);
                } else if (!H && q) {
                  let n = q / e.height;
                  H = Math.round(e.width * n);
                }
              } else (H = e.width), (q = e.height);
            }
          }
          let Y = !x && ("lazy" === C || void 0 === C);
          ((g = "string" == typeof g ? g : W).startsWith("data:") ||
            g.startsWith("blob:")) &&
            ((_ = !0), (Y = !1)),
            I.unoptimized && (_ = !0),
            Z && g.endsWith(".svg") && !I.dangerouslyAllowSVG && (_ = !0);
          let [$, X] = u.useState(!1),
            [G, K] = u.useState(!1),
            J = m(F),
            Q = Object.assign(
              A
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: M,
                    objectPosition: O,
                  }
                : {},
              G ? {} : { color: "transparent" },
              T
            ),
            tt =
              "blur" === P && B && !$
                ? {
                    backgroundSize: Q.objectFit || "cover",
                    backgroundPosition: Q.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: H,
                          heightInt: q,
                          blurWidth: r,
                          blurHeight: s,
                          blurDataURL: B,
                        }),
                        '")'
                      ),
                  }
                : {},
            te = (function (e) {
              let {
                config: n,
                src: r,
                unoptimized: i,
                width: s,
                quality: o,
                sizes: a,
                loader: u,
              } = e;
              if (i) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: c } = (function (e, n, r) {
                  let { deviceSizes: i, allSizes: s } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      n = [];
                    for (let i; (i = e.exec(r)); i) n.push(parseInt(i[2]));
                    if (n.length) {
                      let e = 0.01 * Math.min(...n);
                      return {
                        widths: s.filter((n) => n >= i[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: s, kind: "w" };
                  }
                  if ("number" != typeof n) return { widths: i, kind: "w" };
                  let o = [
                    ...new Set(
                      [n, 2 * n].map(
                        (e) => s.find((n) => n >= e) || s[s.length - 1]
                      )
                    ),
                  ];
                  return { widths: o, kind: "x" };
                })(n, s, a),
                h = l.length - 1;
              return {
                sizes: a || "w" !== c ? a : "100vw",
                srcSet: l
                  .map((e, i) =>
                    ""
                      .concat(
                        u({ config: n, src: r, quality: o, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : i + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: u({ config: n, src: r, quality: o, width: l[h] }),
              };
            })({
              config: I,
              src: g,
              unoptimized: _,
              width: H,
              quality: J,
              sizes: y,
              loader: U,
            }),
            tn = g,
            tr = {
              imageSrcSet: te.srcSet,
              imageSizes: te.sizes,
              crossOrigin: z.crossOrigin,
            },
            ti = u.useRef(S);
          u.useEffect(() => {
            ti.current = S;
          }, [S]);
          let ts = u.useRef(j);
          u.useEffect(() => {
            ts.current = j;
          }, [j]);
          let to = i(
            {
              isLazy: Y,
              imgAttributes: te,
              heightInt: q,
              widthInt: H,
              qualityInt: J,
              className: E,
              imgStyle: Q,
              blurStyle: tt,
              loading: C,
              config: I,
              fill: A,
              unoptimized: _,
              placeholder: P,
              loader: U,
              srcString: tn,
              onLoadRef: ti,
              onLoadingCompleteRef: ts,
              setBlurComplete: X,
              setShowAltText: K,
            },
            z
          );
          return u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement(v, Object.assign({}, to, { ref: n })),
            x
              ? u.default.createElement(
                  l.default,
                  null,
                  u.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + te.src + te.srcSet + te.sizes,
                        rel: "preload",
                        as: "image",
                        href: te.srcSet ? void 0 : te.src,
                      },
                      tr
                    )
                  )
                )
              : null
          );
        });
      (n.default = y),
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (e.exports = n.default));
    },
    4090: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = r(2648).Z,
        s = r(7273).Z,
        o = i(r(5784)),
        a = r(3777),
        u = r(2962),
        l = r(5463),
        c = r(4825),
        h = r(2568),
        d = r(2127),
        f = r(9959),
        p = r(3795);
      let D = new Set();
      function m(e, n, r, i) {
        if (a.isLocalURL(n)) {
          if (!i.bypassPrefetchedCheck) {
            let s =
                void 0 !== i.locale
                  ? i.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              o = n + "%" + r + "%" + s;
            if (D.has(o)) return;
            D.add(o);
          }
          Promise.resolve(e.prefetch(n, r, i)).catch((e) => {});
        }
      }
      function g(e) {
        return "string" == typeof e ? e : u.formatUrl(e);
      }
      let v = o.default.forwardRef(function (e, n) {
        let r, i;
        let {
            href: u,
            as: D,
            children: v,
            prefetch: y,
            passHref: _,
            replace: x,
            shallow: C,
            scroll: E,
            locale: F,
            onClick: b,
            onMouseEnter: w,
            onTouchStart: A,
            legacyBehavior: T = !1,
          } = e,
          S = s(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = v),
          T &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = o.default.createElement("a", null, r));
        let j = !1 !== y,
          P = o.default.useContext(c.RouterContext),
          B = o.default.useContext(h.AppRouterContext),
          k = null != P ? P : B,
          M = !P,
          { href: O, as: R } = o.default.useMemo(() => {
            if (!P) {
              let e = g(u);
              return { href: e, as: D ? g(D) : e };
            }
            let [e, n] = a.resolveHref(P, u, !0);
            return { href: e, as: D ? a.resolveHref(P, D) : n || e };
          }, [P, u, D]),
          L = o.default.useRef(O),
          N = o.default.useRef(R);
        T && (i = o.default.Children.only(r));
        let V = T ? i && "object" == typeof i && i.ref : n,
          [I, z, U] = d.useIntersection({ rootMargin: "200px" }),
          Z = o.default.useCallback(
            (e) => {
              (N.current !== R || L.current !== O) &&
                (U(), (N.current = R), (L.current = O)),
                I(e),
                V &&
                  ("function" == typeof V
                    ? V(e)
                    : "object" == typeof V && (V.current = e));
            },
            [R, V, O, U, I]
          );
        o.default.useEffect(() => {
          k && z && j && m(k, O, R, { locale: F });
        }, [R, O, z, F, j, null == P ? void 0 : P.locale, k]);
        let W = {
          ref: Z,
          onClick(e) {
            T || "function" != typeof b || b(e),
              T &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              k &&
                !e.defaultPrevented &&
                (function (e, n, r, i, s, u, l, c, h, d) {
                  let { nodeName: f } = e.currentTarget,
                    p = "A" === f.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let { target: n } = e.currentTarget;
                      return (
                        (n && "_self" !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !a.isLocalURL(r))
                  )
                    return;
                  e.preventDefault();
                  let D = () => {
                    "beforePopState" in n
                      ? n[s ? "replace" : "push"](r, i, {
                          shallow: u,
                          locale: c,
                          scroll: l,
                        })
                      : n[s ? "replace" : "push"](i || r, {
                          forceOptimisticNavigation: !d,
                        });
                  };
                  h ? o.default.startTransition(D) : D();
                })(e, k, O, R, x, C, E, F, M, j);
          },
          onMouseEnter(e) {
            T || "function" != typeof w || w(e),
              T &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              k &&
                (j || !M) &&
                m(k, O, R, {
                  locale: F,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            T || "function" != typeof A || A(e),
              T &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              k &&
                (j || !M) &&
                m(k, O, R, {
                  locale: F,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!T || _ || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== F ? F : null == P ? void 0 : P.locale,
            n =
              (null == P ? void 0 : P.isLocaleDomain) &&
              f.getDomainLocale(
                R,
                e,
                null == P ? void 0 : P.locales,
                null == P ? void 0 : P.domainLocales
              );
          W.href =
            n ||
            p.addBasePath(
              l.addLocale(R, e, null == P ? void 0 : P.defaultLocale)
            );
        }
        return T
          ? o.default.cloneElement(i, W)
          : o.default.createElement("a", Object.assign({}, S, W), r);
      });
      (n.default = v),
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (e.exports = n.default));
    },
    2127: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.useIntersection = function (e) {
          let { rootRef: n, rootMargin: r, disabled: l } = e,
            c = l || !o,
            [h, d] = i.useState(!1),
            f = i.useRef(null),
            p = i.useCallback((e) => {
              f.current = e;
            }, []);
          i.useEffect(() => {
            if (o) {
              if (c || h) return;
              let e = f.current;
              if (e && e.tagName) {
                let i = (function (e, n, r) {
                  let {
                    id: i,
                    observer: s,
                    elements: o,
                  } = (function (e) {
                    let n;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      i = u.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (i && (n = a.get(i))) return n;
                    let s = new Map(),
                      o = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let n = s.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          n && r && n(r);
                        });
                      }, e);
                    return (
                      (n = { id: r, observer: o, elements: s }),
                      u.push(r),
                      a.set(r, n),
                      n
                    );
                  })(r);
                  return (
                    o.set(e, n),
                    s.observe(e),
                    function () {
                      if ((o.delete(e), s.unobserve(e), 0 === o.size)) {
                        s.disconnect(), a.delete(i);
                        let e = u.findIndex(
                          (e) => e.root === i.root && e.margin === i.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == n ? void 0 : n.current,
                  rootMargin: r,
                });
                return i;
              }
            } else if (!h) {
              let e = s.requestIdleCallback(() => d(!0));
              return () => s.cancelIdleCallback(e);
            }
          }, [c, r, n, h, f.current]);
          let D = i.useCallback(() => {
            d(!1);
          }, []);
          return [p, h, D];
        });
      var i = r(5784),
        s = r(672);
      let o = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
    7572: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.suspense = function () {
          let e = Error(i.NEXT_DYNAMIC_NO_SSR_CODE);
          throw ((e.digest = i.NEXT_DYNAMIC_NO_SSR_CODE), e);
        }),
        (n.NoSSR = function (e) {
          let { children: n } = e;
          return n;
        }),
        (0, r(2648).Z)(r(5784));
      var i = r(6580);
    },
    7062: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e, n) {
          let r = o.default,
            s = {
              loading: (e) => {
                let { error: n, isLoading: r, pastDelay: i } = e;
                return null;
              },
            };
          e instanceof Promise
            ? (s.loader = () => e)
            : "function" == typeof e
            ? (s.loader = e)
            : "object" == typeof e && (s = i({}, s, e)),
            (s = i({}, s, n));
          let u = s.loader,
            l = () =>
              null != u ? u().then(a) : Promise.resolve(a(() => null));
          return (
            s.loadableGenerated &&
              delete (s = i({}, s, s.loadableGenerated)).loadableGenerated,
            "boolean" != typeof s.ssr ||
              s.ssr ||
              (delete s.webpack, delete s.modules),
            r(i({}, s, { loader: l }))
          );
        });
      var i = r(6495).Z,
        s = r(2648).Z;
      s(r(5784));
      var o = s(r(4654));
      function a(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
    9642: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getImageBlurSvg = function (e) {
          let {
              widthInt: n,
              heightInt: r,
              blurWidth: i,
              blurHeight: s,
              blurDataURL: o,
            } = e,
            a = i || n,
            u = s || r,
            l = o.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return a && u
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(a, " ")
                .concat(
                  u,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(i && s ? "1" : "20", "'/%3E")
                .concat(
                  l,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(o, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                o,
                "'/%3E%3C/svg%3E"
              );
        });
    },
    7112: function (e, n) {
      "use strict";
      function r(e) {
        let { config: n, src: r, width: i, quality: s } = e;
        return ""
          .concat(n.path, "?url=")
          .concat(encodeURIComponent(r), "&w=")
          .concat(i, "&q=")
          .concat(s || 75);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        (r.__next_img_default = !0),
        (n.default = r);
    },
    699: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LoadableContext = void 0);
      var i = (0, r(2648).Z)(r(5784));
      let s = i.default.createContext(null);
      n.LoadableContext = s;
    },
    4654: function (e, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = r(932).Z,
        s = r(6495).Z,
        o = (0, r(2648).Z)(r(5784)),
        a = r(7572),
        u = r(699);
      let l = [],
        c = [],
        h = !1;
      function d(e) {
        let n = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = n
            .then((e) => ((r.loading = !1), (r.loaded = e), e))
            .catch((e) => {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      class f {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: n } = this;
          e.loading &&
            ("number" == typeof n.delay &&
              (0 === n.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, n.delay))),
            "number" == typeof n.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, n.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = s(
            {},
            this._state,
            {
              error: this._res.error,
              loaded: this._res.loaded,
              loading: this._res.loading,
            },
            e
          )),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, n) {
          (this._loadFn = e),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function p(e) {
        return (function (e, n) {
          let r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                ssr: !0,
              },
              n
            ),
            s = null;
          function l() {
            if (!s) {
              let n = new f(e, r);
              s = {
                getCurrentValue: n.getCurrentValue.bind(n),
                subscribe: n.subscribe.bind(n),
                retry: n.retry.bind(n),
                promise: n.promise.bind(n),
              };
            }
            return s.promise();
          }
          if (
            ((r.lazy = o.default.lazy(
              i(function* () {
                if (r.ssr && s) {
                  let e = s.getCurrentValue(),
                    n = yield e.loaded;
                  if (n) return n;
                }
                return yield r.loader();
              })
            )),
            !h)
          ) {
            let e = r.webpack ? r.webpack() : r.modules;
            e &&
              c.push((n) => {
                for (let r of e) if (-1 !== n.indexOf(r)) return l();
              });
          }
          function d(e) {
            !(function () {
              l();
              let e = o.default.useContext(u.LoadableContext);
              e &&
                Array.isArray(r.modules) &&
                r.modules.forEach((n) => {
                  e(n);
                });
            })();
            let n = r.loading,
              i = o.default.createElement(n, {
                isLoading: !0,
                pastDelay: !0,
                error: null,
              }),
              s = r.ssr ? o.default.Fragment : a.NoSSR,
              c = r.lazy;
            return o.default.createElement(
              o.default.Suspense,
              { fallback: i },
              o.default.createElement(
                s,
                null,
                o.default.createElement(c, Object.assign({}, e))
              )
            );
          }
          return (
            (d.preload = () => l()), (d.displayName = "LoadableComponent"), d
          );
        })(d, e);
      }
      function D(e, n) {
        let r = [];
        for (; e.length; ) {
          let i = e.pop();
          r.push(i(n));
        }
        return Promise.all(r).then(() => {
          if (e.length) return D(e, n);
        });
      }
      (p.preloadAll = () =>
        new Promise((e, n) => {
          D(l).then(e, n);
        })),
        (p.preloadReady = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((n) => {
            let r = () => ((h = !0), n());
            D(c, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = p.preloadReady),
        (n.default = p);
    },
    7649: function (e, n, r) {
      var i = r(3454);
      r(2350);
      var s = r(5784),
        o = s && "object" == typeof s && "default" in s ? s : { default: s };
      function a(e, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var u = void 0 !== i && i.env && !0,
        l = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        c = (function () {
          function e(e) {
            var n = void 0 === e ? {} : e,
              r = n.name,
              i = void 0 === r ? "stylesheet" : r,
              s = n.optimizeForSpeed,
              o = void 0 === s ? u : s;
            h(l(i), "`name` must be a string"),
              (this._name = i),
              (this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}"),
              h("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = o),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var a = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = a ? a.getAttribute("content") : null;
          }
          var n,
            r = e.prototype;
          return (
            (r.setOptimizeForSpeed = function (e) {
              h(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                h(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (r.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (r.inject = function () {
              var e = this;
              if (
                (h(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (u ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (n, r) {
                  return (
                    "number" == typeof r
                      ? (e._serverSheet.cssRules[r] = { cssText: n })
                      : e._serverSheet.cssRules.push({ cssText: n }),
                    r
                  );
                },
                deleteRule: function (n) {
                  e._serverSheet.cssRules[n] = null;
                },
              };
            }),
            (r.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var n = 0; n < document.styleSheets.length; n++)
                if (document.styleSheets[n].ownerNode === e)
                  return document.styleSheets[n];
            }),
            (r.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (r.insertRule = function (e, n) {
              if (
                (h(l(e), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var r = this.getSheet();
                "number" != typeof n && (n = r.cssRules.length);
                try {
                  r.insertRule(e, n);
                } catch (n) {
                  return (
                    u ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var i = this._tags[n];
                this._tags.push(this.makeStyleTag(this._name, e, i));
              }
              return this._rulesCount++;
            }),
            (r.replaceRule = function (e, n) {
              if (this._optimizeForSpeed) {
                var r = this.getSheet();
                if (
                  (n.trim() || (n = this._deletedRulePlaceholder),
                  !r.cssRules[e])
                )
                  return e;
                r.deleteRule(e);
                try {
                  r.insertRule(n, e);
                } catch (i) {
                  u ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        n +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    r.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var i = this._tags[e];
                h(i, "old rule at index `" + e + "` not found"),
                  (i.textContent = n);
              }
              return e;
            }),
            (r.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var n = this._tags[e];
                h(n, "rule at index `" + e + "` not found"),
                  n.parentNode.removeChild(n),
                  (this._tags[e] = null);
              }
            }),
            (r.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (r.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (n, r) {
                return (
                  r
                    ? (n = n.concat(
                        Array.prototype.map.call(
                          e.getSheetForTag(r).cssRules,
                          function (n) {
                            return n.cssText === e._deletedRulePlaceholder
                              ? null
                              : n;
                          }
                        )
                      ))
                    : n.push(null),
                  n
                );
              }, []);
            }),
            (r.makeStyleTag = function (e, n, r) {
              n &&
                h(
                  l(n),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var i = document.createElement("style");
              this._nonce && i.setAttribute("nonce", this._nonce),
                (i.type = "text/css"),
                i.setAttribute("data-" + e, ""),
                n && i.appendChild(document.createTextNode(n));
              var s = document.head || document.getElementsByTagName("head")[0];
              return r ? s.insertBefore(i, r) : s.appendChild(i), i;
            }),
            a(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            n && a(e, n),
            e
          );
        })();
      function h(e, n) {
        if (!e) throw Error("StyleSheet: " + n + ".");
      }
      var d = function (e) {
          for (var n = 5381, r = e.length; r; )
            n = (33 * n) ^ e.charCodeAt(--r);
          return n >>> 0;
        },
        f = {};
      function p(e, n) {
        if (!n) return "jsx-" + e;
        var r = String(n),
          i = e + r;
        return f[i] || (f[i] = "jsx-" + d(e + "-" + r)), f[i];
      }
      function D(e, n) {
        var r = e + n;
        return (
          f[r] || (f[r] = n.replace(/__jsx-style-dynamic-selector/g, e)), f[r]
        );
      }
      var m = (function () {
          function e(e) {
            var n = void 0 === e ? {} : e,
              r = n.styleSheet,
              i = void 0 === r ? null : r,
              s = n.optimizeForSpeed,
              o = void 0 !== s && s;
            (this._sheet =
              i || new c({ name: "styled-jsx", optimizeForSpeed: o })),
              this._sheet.inject(),
              i &&
                "boolean" == typeof o &&
                (this._sheet.setOptimizeForSpeed(o),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var n = e.prototype;
          return (
            (n.add = function (e) {
              var n = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, n) {
                      return (e[n] = 0), e;
                    },
                    {}
                  )));
              var r = this.getIdAndRules(e),
                i = r.styleId,
                s = r.rules;
              if (i in this._instancesCounts) {
                this._instancesCounts[i] += 1;
                return;
              }
              var o = s
                .map(function (e) {
                  return n._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[i] = o), (this._instancesCounts[i] = 1);
            }),
            (n.remove = function (e) {
              var n = this,
                r = this.getIdAndRules(e).styleId;
              if (
                ((function (e, n) {
                  if (!e) throw Error("StyleSheetRegistry: " + n + ".");
                })(
                  r in this._instancesCounts,
                  "styleId: `" + r + "` not found"
                ),
                (this._instancesCounts[r] -= 1),
                this._instancesCounts[r] < 1)
              ) {
                var i = this._fromServer && this._fromServer[r];
                i
                  ? (i.parentNode.removeChild(i), delete this._fromServer[r])
                  : (this._indices[r].forEach(function (e) {
                      return n._sheet.deleteRule(e);
                    }),
                    delete this._indices[r]),
                  delete this._instancesCounts[r];
              }
            }),
            (n.update = function (e, n) {
              this.add(n), this.remove(e);
            }),
            (n.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (n.cssRules = function () {
              var e = this,
                n = this._fromServer
                  ? Object.keys(this._fromServer).map(function (n) {
                      return [n, e._fromServer[n]];
                    })
                  : [],
                r = this._sheet.cssRules();
              return n.concat(
                Object.keys(this._indices)
                  .map(function (n) {
                    return [
                      n,
                      e._indices[n]
                        .map(function (e) {
                          return r[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return Boolean(e[1]);
                  })
              );
            }),
            (n.styles = function (e) {
              var n, r;
              return (
                (n = this.cssRules()),
                void 0 === (r = e) && (r = {}),
                n.map(function (e) {
                  var n = e[0],
                    i = e[1];
                  return o.default.createElement("style", {
                    id: "__" + n,
                    key: "__" + n,
                    nonce: r.nonce ? r.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: i },
                  });
                })
              );
            }),
            (n.getIdAndRules = function (e) {
              var n = e.children,
                r = e.dynamic,
                i = e.id;
              if (r) {
                var s = p(i, r);
                return {
                  styleId: s,
                  rules: Array.isArray(n)
                    ? n.map(function (e) {
                        return D(s, e);
                      })
                    : [D(s, n)],
                };
              }
              return { styleId: p(i), rules: Array.isArray(n) ? n : [n] };
            }),
            (n.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, n) {
                  return (e[n.id.slice(2)] = n), e;
                }, {});
            }),
            e
          );
        })(),
        g = s.createContext(null);
      g.displayName = "StyleSheetContext";
      var v = o.default.useInsertionEffect || o.default.useLayoutEffect,
        y = new m();
      function _(e) {
        var n = y || s.useContext(g);
        return (
          n &&
            v(
              function () {
                return (
                  n.add(e),
                  function () {
                    n.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)]
            ),
          null
        );
      }
      (_.dynamic = function (e) {
        return e
          .map(function (e) {
            return p(e[0], e[1]);
          })
          .join(" ");
      }),
        (n.style = _);
    },
    7928: function (e, n, r) {
      "use strict";
      e.exports = r(7649).style;
    },
    2199: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = r(1844);
      function s() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("title", { children: "Refine Studio" }),
            (0, i.jsx)("meta", {
              content: "width=device-width, initial-scale=1",
              name: "viewport",
            }),
            (0, i.jsx)("meta", {
              name: "description",
              content:
                "We Design, Develop & Refine digital products for daring and innovative enterprises that refuse to accept mediocrity",
            }),
            (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, i.jsx)("meta", {
              property: "og:title",
              content: "Cognate Studio",
            }),
            (0, i.jsx)("meta", {
              property: "og:description",
              content:
                "We Design, Develop & Refine digital products for daring and innovative enterprises that refuse to accept mediocrity",
            }),
            (0, i.jsx)("meta", {
              property: "og:url",
              content: "https://refine.agency",
            }),
            (0, i.jsx)("meta", {
              property: "og:site_name",
              content: "Refine Studio",
            }),
            (0, i.jsx)("meta", { property: "og:locale", content: "en-US" }),
            (0, i.jsx)("meta", {
              property: "og:image:url",
              content: "https://refine.agency/assets/images/refine-banner.png",
            }),
            (0, i.jsx)("meta", { property: "og:image:width", content: "800" }),
            (0, i.jsx)("meta", { property: "og:image:height", content: "600" }),
            (0, i.jsx)("meta", {
              property: "og:image:url",
              content: "https://refine.agency/assets/images/refine-banner.png",
            }),
            (0, i.jsx)("meta", { property: "og:image:width", content: "1800" }),
            (0, i.jsx)("meta", {
              property: "og:image:height",
              content: "1600",
            }),
            (0, i.jsx)("meta", {
              property: "og:image:alt",
              content: "Refine Studio",
            }),
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
            (0, i.jsx)("meta", {
              name: "twitter:title",
              content: "Refine Studio",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:description",
              content:
                "We Design, Develop & Refine digital products for daring and innovative enterprises that refuse to accept mediocrity",
            }),
            (0, i.jsx)("meta", {
              name: "twitter:image",
              content: "https://refine.agency/assets/images/refine-banner.png",
            }),
            (0, i.jsx)("meta", {
              name: "category",
              content: "software development",
            }),
          ],
        });
      }
    },
    9814: function (e, n, r) {
      "use strict";
      var i = r(1844),
        s = r(9718),
        o = r(5784),
        a = r(3627);
      r(3486);
      var u = r(8986),
        l = r(6491);
      n.Z = function (e) {
        let { rotate: n } = e,
          { toggleContact: r, showContact: c } = (0, s.AW)(),
          { toggleStatusBar: h } = (0, s.AW)(),
          [d, f] = (0, o.useState)(!1),
          { playHoverSound: p } = (0, l.Z)(u.Q.MENU);
        function D() {
          p(), r(), f(!d), h();
        }
        return ((0, o.useEffect)(() => {
          c ? (0, a.w)() : (0, a.h)();
        }, [c]),
        c)
          ? (0, i.jsx)("button", {
              type: "button",
              onClick: () => D((e) => !e),
              className: "new-button "
                .concat(n && "translate-y-5", " hover:border-accent ")
                .concat(d ? "clicked" : ""),
              children: (0, i.jsx)("svg", {
                width: "15",
                height: "12",
                viewBox: "0 0 15 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "hover-color",
                children: (0, i.jsx)("path", {
                  d: "M9.07669 2.87729H3.12587L4.07476 1.92839C4.19527 1.78768 4.25824 1.60667 4.25109 1.42154C4.24394 1.23642 4.16719 1.0608 4.03619 0.929802C3.90519 0.7988 3.72958 0.722055 3.54445 0.714904C3.35932 0.707753 3.17831 0.770724 3.0376 0.891231L0.830864 3.09796C0.761919 3.16634 0.707197 3.2477 0.669852 3.33734C0.632508 3.42697 0.613281 3.52312 0.613281 3.62022C0.613281 3.71733 0.632508 3.81347 0.669852 3.90311C0.707197 3.99275 0.761919 4.0741 0.830864 4.14248L3.0376 6.34921C3.17831 6.46972 3.35932 6.53269 3.54445 6.52554C3.72958 6.51839 3.90519 6.44165 4.03619 6.31064C4.16719 6.17964 4.24394 6.00403 4.25109 5.8189C4.25824 5.63378 4.19527 5.45277 4.07476 5.31205L3.12587 4.34844H9.07669C9.56441 4.34844 10.0321 4.54219 10.377 4.88706C10.7219 5.23193 10.9156 5.69967 10.9156 6.18739C10.9156 6.67511 10.7219 7.14285 10.377 7.48772C10.0321 7.83259 9.56441 8.02633 9.07669 8.02633H5.76659C5.5715 8.02633 5.3844 8.10383 5.24646 8.24178C5.10851 8.37972 5.03101 8.56682 5.03101 8.76191C5.03101 8.957 5.10851 9.14409 5.24646 9.28204C5.3844 9.41999 5.5715 9.49749 5.76659 9.49749H9.07669C9.95458 9.49749 10.7965 9.14874 11.4173 8.52798C12.038 7.90722 12.3868 7.06528 12.3868 6.18739C12.3868 5.30949 12.038 4.46756 11.4173 3.8468C10.7965 3.22603 9.95458 2.87729 9.07669 2.87729Z",
                  fill: "currentColor",
                }),
              }),
            })
          : (0, i.jsx)("button", {
              type: "button",
              onClick: () => D((e) => !e),
              className: "button hover:scale-[102.5%] ease-in-out "
                .concat(n && "rotate-[-90deg] -translate-y-5", " ")
                .concat(d ? "clicked" : ""),
              children: "Contact",
            });
      };
    },
    9239: function (e, n, r) {
      "use strict";
      var i = r(1844),
        s = r(9718),
        o = r(5784);
      r(3557),
        (n.Z = function (e) {
          let { disable: n } = e,
            [r] = (0, o.useState)(Array.from({ length: 5 }, (e, n) => n)),
            { isPlaying: a, setIsPlaying: u } = (0, s.u7)();
          return (0, i.jsx)("button", {
            type: "button",
            onClick: () => (n ? null : u(!a)),
            className:
              "w-[50px] h-[25px] flex items-center justify-center bar-wrapper gap-[3.5px]",
            children: r.map((e, n) =>
              (0, i.jsx)(
                "span",
                {
                  style: { animationPlayState: a ? "running" : "paused" },
                  className: "bars bars-"
                    .concat(e, " transition-all !w-[1px] ")
                    .concat(!a && "!h-[5px] !bg-darkGray !scale-100"),
                },
                n
              )
            ),
          });
        });
    },
    46: function (e, n, r) {
      "use strict";
      var i = r(5784);
      n.Z = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          [s, o] = (0, i.useState)(null),
          a = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              let e = window.pageYOffset,
                i = Math.abs(e - a.current),
                s =
                  window.innerHeight + window.scrollY + r >=
                  document.body.offsetHeight,
                u =
                  window.innerHeight + window.scrollY >=
                  document.body.offsetHeight;
              u
                ? o("bottom")
                : 0 === e
                ? o("top")
                : e > a.current && i >= n
                ? o("down")
                : e < a.current && i >= n
                ? o("up")
                : s && !u && o("near-bottom"),
                (a.current = e);
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, [e, n, r]),
          s
        );
      };
    },
    7573: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return C;
        },
      });
      var i = r(1844),
        s = r(5784),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = s.createContext && s.createContext(o),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var n, r = 1, i = arguments.length; r < i; r++)
                for (var s in (n = arguments[r]))
                  Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, n) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > n.indexOf(i) &&
              (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var s = 0, i = Object.getOwnPropertySymbols(e);
              s < i.length;
              s++
            )
              0 > n.indexOf(i[s]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
                (r[i[s]] = e[i[s]]);
          return r;
        };
      function c(e) {
        return function (n) {
          return s.createElement(
            h,
            u({ attr: u({}, e.attr) }, n),
            (function e(n) {
              return (
                n &&
                n.map(function (n, r) {
                  return s.createElement(
                    n.tag,
                    u({ key: r }, n.attr),
                    e(n.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function h(e) {
        var n = function (n) {
          var r,
            i = e.attr,
            o = e.size,
            a = e.title,
            c = l(e, ["attr", "size", "title"]),
            h = o || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            s.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                i,
                c,
                {
                  className: r,
                  style: u(u({ color: e.color || n.color }, n.style), e.style),
                  height: h,
                  width: h,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              a && s.createElement("title", null, a),
              e.children
            )
          );
        };
        return void 0 !== a
          ? s.createElement(a.Consumer, null, function (e) {
              return n(e);
            })
          : n(o);
      }
      function d(e) {
        return c({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            { tag: "path", attr: { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" } },
          ],
        })(e);
      }
      function f(e) {
        return c({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            { tag: "path", attr: { d: "M8 5v14l11-7z" } },
          ],
        })(e);
      }
      function p(e) {
        return c({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            { tag: "path", attr: { d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" } },
          ],
        })(e);
      }
      function D(e) {
        return c({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            { tag: "path", attr: { d: "M6 6h2v12H6zm3.5 6l8.5 6V6z" } },
          ],
        })(e);
      }
      let m = [
        {
          title: "Me & U",
          artist: "Cassie ",
          path: "/assets/songs/Me-n-U.mp3",
        },
        {
          title: "Volumes",
          artist: "Lane-8",
          path: "/assets/songs/Volumes.mp3",
        },
        {
          title: "Nuclear Lethargy",
          artist: "Lane-8",
          path: "/assets/songs/Nuclear Lethargy.mp3",
        },
        {
          title: "After Hours",
          artist: "The Weeknd",
          path: "/assets/songs/After Hours.mp3",
        },
        {
          title: "Trance",
          artist: "Travis Scott & Young Thug",
          path: "/assets/songs/Trance.mp3",
        },
        {
          title: "Drive Slow",
          artist: "Kanye West",
          path: "/assets/songs/Drive Slow.mp3",
        },
        {
          title: "No Chances",
          artist: "Twenty One Pilots",
          path: "/assets/songs/nochances.mp3",
        },
        {
          title: "Long Night",
          artist: "JPB",
          path: "/assets/songs/longnight.mp3",
        },
        {
          title: "Fresh Outta Japan",
          artist: "Yasko",
          path: "/assets/songs/fresh_japan.mp3",
        },
        {
          title: "Came For The Low",
          artist: "ZHU & partywithray",
          path: "/assets/songs/cmfordlow.m4a",
        },
        {
          title: "Shift Up",
          artist: "Alden Tyrell",
          path: "/assets/songs/shftup.m4a",
        },
        {
          title: "Run It",
          artist: "Dj Snake, Rick Ross & Rich Brian",
          path: "/assets/songs/runit.mp3",
        },
      ];
      r(5863);
      var g = r(9718),
        v = r(7005),
        y = r(7294);
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var x = function (e) {
        return y.createElement(
          "svg",
          _(
            {
              height: 50,
              width: 50,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 492.8 492.8",
              xmlSpace: "preserve",
            },
            e
          ),
          y.createElement("circle", {
            style: { fill: "#4c5254" },
            cx: 246.4,
            cy: 246.4,
            r: 246.4,
          }),
          y.createElement("path", {
            style: { fill: "#2f423f" },
            d: "M420 72.8c96 96 96 252 0 348s-252 96-348 0",
          }),
          y.createElement("circle", {
            style: { fill: "#32ba7c" },
            cx: 246.4,
            cy: 246.4,
            r: 120.8,
          }),
          y.createElement("path", {
            style: { fill: "#0aa06e" },
            d: "M246.4 125.6c67.2 0 120.8 54.4 120.8 120.8 0 67.2-54.4 120.8-120.8 120.8",
          }),
          y.createElement("circle", {
            style: { fill: "#4c5254" },
            cx: 246.4,
            cy: 246.4,
            r: 72,
          }),
          y.createElement("path", {
            style: { fill: "#2f423f" },
            d: "M195.2 297.6c-28-28-28-73.6 0-102.4 28-28 73.6-28 102.4 0",
          }),
          y.createElement("path", {
            style: { fill: "#818587" },
            d: "M91.2 91.2c-37.6 37.6-58.4 83.2-58.4 139.2h32c0-48 18.4-84.8 48.8-116 31.2-31.2 68.8-48 116.8-48v-32c-56-.8-102.4 20-139.2 56.8z",
          }),
          y.createElement("path", {
            style: { fill: "#818587" },
            d: "M125.6 125.6c-26.4 26.4-39.2 64-41.6 99.2l21.6-1.6c2.4-29.6 16-57.6 38.4-80s51.2-36 80-38.4l1.6-21.6c-35.2 2.4-73.6 15.2-100 42.4zM398.4 401.6c40-36.8 59.2-83.2 59.2-139.2h-32c0 48-16.8 84.8-48 116s-75.2 48-115.2 48v32c48 .8 104-20 136-56.8z",
          }),
          y.createElement("path", {
            style: { fill: "#818587" },
            d: "M363.2 367.2c32-26.4 40-64 42.4-99.2l-20.8 1.6c-2.4 29.6-15.2 57.6-37.6 80s-50.4 36-80 38.4l-3.2 21.6c34.4-2.4 75.2-15.2 99.2-42.4z",
          })
        );
      };
      r(6491), r(8986);
      var C = function () {
        let e =
            "duration-200 ease-in-out hover:scale-[102.5%] hover:bg-opacity-30 hover:bg-gray text-sm uppercase rounded-lg p-1",
          n = (0, s.useRef)(null),
          {
            isPlaying: r,
            setIsPlaying: o,
            currentTime: a,
            setCurrentTime: u,
            activeMusicIndex: l,
            setActiveMusicIndex: c,
          } = (0, g.u7)(),
          [h, y] = (0, s.useState)(0),
          [_, C] = (0, s.useState)(m[l]);
        function E() {
          o(!1), l < m.length - 1 ? c(l + 1) : c(0);
        }
        (0, s.useEffect)(() => {
          n.current.currentTime = a;
        }, []),
          (0, s.useEffect)(() => {
            r ? n.current.play() : n.current.pause();
          }, [r]),
          (0, s.useEffect)(() => {
            C(m[l]);
          }, [l]);
        let F = Array.from({ length: 30 }, (e, n) => n),
          b = (e) => {
            let n = (e.target.currentTime / e.target.duration) * 100;
            y(n), u(e.target.currentTime);
          };
        return (0, i.jsxs)("div", {
          title: "".concat(_.title, " by ").concat(_.artist),
          className: "flex h-full items-center justify-between xl: gap-4 ",
          children: [
            (0, i.jsxs)("div", {
              className: "relative flex gap-5 items-center justify-center",
              children: [
                (0, i.jsx)("span", {
                  style: {
                    animationPlayState: r ? "running" : "paused",
                    transitionDuration: r ? "0ms" : "1000ms",
                  },
                  className:
                    "w-fit xxs:flex h-fit animate-spin transition vinyl",
                  children: (0, i.jsx)(x, {}),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col max-w-[150px] xl:max-w-[100px] items-start gap-1 ",
                  children: [
                    (0, i.jsx)("span", {
                      className:
                        "text-sm tracking-wide text-white font-bold uppercase w-full truncate",
                      children: _.title,
                    }),
                    (0, i.jsx)("span", {
                      className: "timeframe",
                      children: (0, i.jsx)("span", {
                        className: "line",
                        style: { width: "".concat(h, "%") },
                      }),
                    }),
                    (0, i.jsx)(v.Z, {
                      pauseOnHover: !0,
                      speed: 15,
                      gradient: !0,
                      gradientWidth: "30%",
                      gradientColor: [0, 0, 0],
                      children: (0, i.jsx)("div", {
                        className: "flex items-start gap-3",
                        children: F.map((e) =>
                          (0, i.jsx)(
                            "span",
                            {
                              className: "text-xs text-lightGray mt-1 truncate",
                              children: _.artist,
                            },
                            e
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("audio", {
                  onTimeUpdate: b,
                  preload: "true",
                  volume: 0.5,
                  onLoadedData: () => 0 !== l && o(!0),
                  ref: n,
                  onEnded: E,
                  src: _.path,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "grid grid-cols-3 min-w-[100px]",
              children: [
                (0, i.jsx)("button", {
                  onClick: function () {
                    o(!1), 0 === l ? c(m.length - 1) : c(l - 1);
                  },
                  type: "button",
                  className: "music-icon-btn ".concat(e),
                  children: (0, i.jsx)(D, {}),
                }),
                (0, i.jsx)("button", {
                  onClick: () => o(!r),
                  type: "button",
                  className: "music-icon-btn ".concat(e),
                  children: r ? (0, i.jsx)(d, {}) : (0, i.jsx)(f, {}),
                }),
                (0, i.jsx)("button", {
                  onClick: E,
                  type: "button",
                  className: "music-icon-btn ".concat(e),
                  children: (0, i.jsx)(p, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    3292: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          Noise: function () {
            return p;
          },
        });
      var i = r(1844),
        s = r(5784);
      let o = new (class {
        constructor() {
          (this.raf = (e) => {
            requestAnimationFrame(this.raf);
            let n = e - this.now;
            this.now = e;
            for (let r = 0; r < this.callbacks.length; r++)
              this.callbacks[r].callback(e, n);
          }),
            "undefined" != typeof window &&
              ((this.callbacks = []),
              (this.now = performance.now()),
              requestAnimationFrame(this.raf));
        }
        add(e, n = 0) {
          return (
            this.callbacks.push({ callback: e, priority: n }),
            this.callbacks.sort((e, n) => e.priority - n.priority),
            () => this.remove(e)
          );
        }
        remove(e) {
          this.callbacks = this.callbacks.filter(({ callback: n }) => e !== n);
        }
      })();
      var a = function (e) {
          (0, s.useEffect)(e, []);
        },
        u = function (e) {
          var n = (0, s.useRef)(e);
          (n.current = e),
            a(function () {
              return function () {
                return n.current();
              };
            });
        },
        l = function (e) {
          var n = (0, s.useRef)(0),
            r = (0, s.useState)(e),
            i = r[0],
            o = r[1],
            a = (0, s.useCallback)(function (e) {
              cancelAnimationFrame(n.current),
                (n.current = requestAnimationFrame(function () {
                  o(e);
                }));
            }, []);
          return (
            u(function () {
              cancelAnimationFrame(n.current);
            }),
            [i, a]
          );
        },
        c = "undefined" != typeof window,
        h = function (e, n) {
          void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0);
          var r = l({
              width: c ? window.innerWidth : e,
              height: c ? window.innerHeight : n,
            }),
            i = r[0],
            o = r[1];
          return (
            (0, s.useEffect)(function () {
              if (c) {
                var e = function () {
                  o({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  (function (e) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                      n[r - 1] = arguments[r];
                    e && e.addEventListener && e.addEventListener.apply(e, n);
                  })(window, "resize", e),
                  function () {
                    !(function (e) {
                      for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                      e &&
                        e.removeEventListener &&
                        e.removeEventListener.apply(e, n);
                    })(window, "resize", e);
                  }
                );
              }
            }, []),
            i
          );
        },
        d = r(9644),
        f = r.n(d);
      function p() {
        let e = (0, s.useRef)(),
          { width: n, height: r } = h(),
          a = (0, s.useMemo)(() => document.createElement("canvas"), []),
          u = (0, s.useMemo)(() => document.createElement("canvas"), []),
          l = (0, s.useMemo)(() => a.getContext("2d"), []);
        return (
          (0, s.useEffect)(
            () => (
              e.current.appendChild(a),
              () => {
                a.remove();
              }
            ),
            [a]
          ),
          (0, s.useEffect)(() => {
            let e = Math.min(window.devicePixelRatio, 2);
            (a.width = n), (a.height = r);
            let i = l.createImageData(n * e, r * e),
              s = new Uint32Array(i.data.buffer);
            for (let e = 0; e < s.length; e++)
              0.5 > Math.random() && (s[e] = 4294967295);
            (u.width = n),
              (u.height = r),
              u.getContext("2d").putImageData(i, 0, 0);
          }, [u, n, r]),
          !(function (e, n = 0) {
            (0, s.useEffect)(() => {
              if (e) return o.add(e, n), () => o.remove(e);
            }, [e, n]);
          })(() => {
            l.clearRect(0, 0, a.width, a.height),
              l.drawImage(
                u,
                -(200 * Math.random()),
                -(200 * Math.random()),
                a.width + 200,
                a.height + 200
              );
          }),
          (0, i.jsx)("div", { ref: e, className: f().canvas })
        );
      }
    },
    5066: function (e, n, r) {
      "use strict";
      var i = r(1844),
        s = r(5675),
        o = r.n(s),
        a = r(1664),
        u = r.n(a),
        l = r(5784),
        c = r(9814),
        h = r(9239),
        d = r(9718),
        f = r(3707),
        p = r(521),
        D = r(1163);
      n.Z = function (e) {
        let { short: n } = e,
          { setIsControlsVisible: r, isControlsVisible: s } = (0, d.u7)(),
          { showContact: a } = (0, d.AW)(),
          { scrollY: m } = (0, p.v)(),
          g = (0, D.useRouter)(),
          { pathname: v } = g,
          y = () => {
            r(!s);
          };
        return (
          (0, l.useEffect)(() => {
            y();
          }, []),
          (0, i.jsx)("header", {
            className: "flex ".concat(
              n && "short:block",
              " xl:hidden flex-col w-full gap-4 sticky top-0 left-0 right-0 z-xxl backdrop-blur bg-black"
            ),
            children: (0, i.jsxs)("div", {
              className: "",
              children: [
                0 === m &&
                  !a &&
                  (0, i.jsxs)("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      (0, i.jsx)("span", {
                        className: "w-3 h-3 rounded-full bg-accent relative",
                        children: (0, i.jsx)("span", {
                          className:
                            "absolute inset-0 bg-accent animate-ping rounded-full",
                        }),
                      }),
                      (0, i.jsx)("p", {
                        className: "uppercase text-accent font-bold",
                        children: f.Z.tag,
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: "p-4 w-full",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center justify-between w-full",
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex items-center justify-between w-full",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, i.jsx)(u(), {
                              href: "/",
                              children: (0, i.jsx)(o(), {
                                src: "/logo.svg",
                                width: "30",
                                height: "30",
                                alt: "Refine Studios",
                              }),
                            }),
                            (0, i.jsx)(h.Z, {}),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          !v.startsWith("/case-studies") &&
                            (0, i.jsx)(u(), {
                              href: "https://calendly.com/refinestudio/free",
                              type: "button",
                              target: "_blank",
                              className:
                                "text-lightGray whitespace-nowrap duration-200 text-xs ease-in-out border-opacity-40 uppercase flex items-center justify-center gap-2",
                              onClick: y,
                              children: "Redesign Demo",
                            }),
                          (0, i.jsx)("div", {
                            className: "xl:translate-x-2 text-[0.65rem]",
                            children: (0, i.jsx)(c.Z, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    5499: function (e, n, r) {
      "use strict";
      var i = r(1844),
        s = r(5784),
        o = r(9718),
        a = r(3707);
      r(2473),
        (n.Z = function (e) {
          let { study: n } = e,
            [r, u] = (0, s.useState)(""),
            { statusBar: l } = (0, o.AW)();
          return (
            (0, s.useEffect)(() => {
              let e = setInterval(() => {
                let e = new Date(),
                  n = e.toLocaleTimeString("en-US", { hour12: !1 });
                u("".concat(n, " GMT"));
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, []),
            (0, i.jsx)("header", {
              className: "mt-3 "
                .concat(
                  n && "hidden xl:block",
                  " xl:mb-0 mb-3 short:mb-0 xl:mt-0 short:mt-5 px-5 md:px-8 lg:mr-3 relative flex flex-col gap-5 z-xxl bg-black "
                )
                .concat(l && "hidden"),
              children: (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-center status sm:justify-between relative",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, i.jsx)("span", {
                        className: "w-3 h-3 rounded-full bg-accent relative",
                        children: (0, i.jsx)("span", {
                          className:
                            "absolute inset-0 bg-accent animate-ping rounded-full",
                        }),
                      }),
                      (0, i.jsx)("p", {
                        className: "uppercase text-accent font-bold",
                        children: a.Z.tag,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "left-1/2 hidden sm:block absolute -translate-x-1/2",
                    children: (0, i.jsx)("span", {
                      className: "font-bold uppercase",
                      children: r,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)("span", {
                      className:
                        "text-accent hidden short:block sm:block lg:block uppercase",
                      children: a.Z.formattedOffset,
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    2039: function (e, n, r) {
      "use strict";
      r.d(n, {
        LN: function () {
          return v;
        },
        Ej: function () {
          return y;
        },
        Eo: function () {
          return g;
        },
        ZP: function () {
          return _;
        },
      });
      var i,
        s,
        o,
        a = r(1844),
        u = r(7294);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function h() {
        return (h = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var d = r(7839);
      let { UIUX: f, FRONT: p, BACK: D } = d.bx,
        m = [
          {
            slug: "metavmonkeys",
            title: "metavmonkeys",
            type: "UI/UX & Full Stack",
            cover: "/assets/images/metav/cover.png",
            date: new Date(2022, 12, 25),
            labels: [f, p, D],
            marqueeNameSplit: ["METAVERSE", "MONKEYS"],
            images: [
              "/assets/images/metav/01.png",
              "/assets/images/metav/02.png",
              "/assets/images/metav/05.png",
              "/assets/images/metav/03.png",
              "/assets/images/metav/04.png",
            ],
            link: "https://metavmonkeys.refine.agency",
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "Brought to you by Tier 7, each MM acts as a permanent pass into a network that has helped it's members make millions & is principally designed to provide resources that heavily outweighs the mint cost to every holder over time. Access to exclusive IDO'S, world class training, investment ideas, research & access to a network full of wealthy professional investors.",
                  },
                  {
                    title: "Stack & Services",
                    body: "Figma, Adobe Photoshop, Strategy, Visual Identity",
                  },
                ],
              },
              {
                type: p,
                content: [
                  {
                    title: "Front End",
                    body: "For front end development our team utilised ReactJS in order to create a reactive user interface. For this aspect of development we created custom hooks in order to add subtle animations that emphasise the premium feel for the project.",
                  },
                  {
                    title: "Stack & Services",
                    body: "Web design, ReactJS, Typescript, TailwindCSS",
                  },
                ],
              },
              {
                type: D,
                content: [
                  {
                    title: "BACK END",
                    body: "To facilitate the project's expansion, a backend data store has been established, enabling the web app to scale seamlessly as the project progresses and develops.",
                  },
                  { title: "Stack & Services", body: "NodeJS and GraphQL" },
                ],
              },
            ],
          },
          {
            slug: "mutariuum",
            title: "Mutariuum",
            type: "UI/UX",
            cover: "/assets/images/mutariuum/cover.png",
            date: new Date(2022, 12, 23),
            labels: [f, p],
            marqueeNameSplit: ["ULTI", "VERSE"],
            images: [
              "/assets/images/mutariuum/01.png",
              "/assets/images/mutariuum/02.png",
              "/assets/images/mutariuum/03.png",
              "/assets/images/mutariuum/04.png",
            ],
            link: null,
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "\n            Mutariuum Universe is a groundbreaking gaming experience that combines play, earn, and invest. It consists of two projects – Mutariuum Universe play-to-earn game and the MU DAO Accelerator – set to launch in 2023. This innovative ecosystem offers players a unique opportunity to benefit financially from their gaming experience. This design is purely a conceptual upgrade optimised for user experience and heightened branding.\n              ",
                  },
                  {
                    title: "Stack & Services",
                    body: "\n              Figma, Adobe Photoshop, Web design.\n              ",
                  },
                ],
              },
            ],
          },
          {
            slug: "ultiverse",
            title: "Ultiverse",
            type: "UI/UX",
            cover: "/assets/images/ultiverse/cover.png",
            date: new Date(2022, 12, 23),
            labels: [f, p],
            marqueeNameSplit: ["ULTI", "VERSE"],
            images: [
              "/assets/images/ultiverse/01.png",
              "/assets/images/ultiverse/02.png",
            ],
            link: null,
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "\n                Ultiverse is an integrated platform combining AAA social gaming, NFTs, DeFi and DEXs all in one. Ultiverse aims at building the next-generation Metaverse connecting Web3 with an immersive VR-compatible virtual world.\n              ",
                  },
                  {
                    title: "Stack & Services",
                    body: "\n              Figma, Adobe Photoshop, Branding, Web design.\n              ",
                  },
                ],
              },
            ],
          },
          {
            slug: "arete",
            title: "Arete Alpha",
            type: "UI/UX & Front End",
            cover: "/assets/images/arete/cover.png",
            date: new Date(2022, 12, 22),
            labels: [p, f],
            marqueeNameSplit: ["ARETE", "ALPHA"],
            images: [
              "/assets/images/arete/01.png",
              "/assets/images/arete/02.png",
              "/assets/images/arete/03.png",
            ],
            link: null,
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "Arete Alpha is described as an exclusive ALPHA club that aims to assist other NFT enthusiasts, collectors, and traders in discovering upcoming major projects to maximize profits. The club has a goal of introducing as many individuals from the Web2 community to Web3 and becoming the leading Web3 education brand. Arete Alpha's members, on the other hand, will earn passive income each month from the earnings generated by their Web3 education brand. This plan is intended solely for conceptual purposes.",
                  },
                  { title: "Stack & Services", body: "Figma, Web design." },
                ],
              },
            ],
          },
          {
            slug: "hibiki",
            title: "Hibiki Run",
            type: "UI/UX",
            cover: "/assets/images/hibiki/cover.png",
            date: new Date(2022, 12, 23),
            labels: [f],
            marqueeNameSplit: ["HIBIKI", "RUN"],
            images: [
              "/assets/images/hibiki/01.png",
              "/assets/images/hibiki/02.png",
            ],
            link: null,
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "Hibiki Run awards users tokens to move outdoors while enjoying music composed by Web3 artists. NFT, in the form of artistically-illustrated headphones, made it possible to unleash the full potential in terms of user scenarios and technical possibilities, as well as maximize the combined-firepower of NFT and music.",
                  },
                  {
                    title: "Stack & Services",
                    body: "Figma, Strategy, Visual Identity, UX Optimisation.",
                  },
                ],
              },
            ],
          },
          {
            slug: "agency",
            title: "Agency NFT",
            type: "UI/UX & Front End",
            cover: "/assets/images/agency/cover.png",
            date: new Date(2022, 12, 22),
            labels: [p, f],
            marqueeNameSplit: ["AGENCY", "NFT"],
            images: [
              "/assets/images/agency/01.png",
              "/assets/images/agency/02.png",
            ],
            link: null,
            caseInfo: [
              {
                type: f,
                content: [
                  {
                    title: "PROJECT DETAIL",
                    body: "Agency NFT is a result-based Web3 Marketing Agency that specialises in WEB3 marketing for NFT projects across the globe. As this is a rebranding we have curated two distinct unusal layout designs one of which will make it as the final design for development.",
                  },
                  {
                    title: "Stack & Services",
                    body: "Figma, Strategy, Visual Identity, Web design, UX Research.",
                  },
                ],
              },
            ],
          },
        ],
        g = [
          { title: "our motto", text: "Your success, our mission." },
          {
            title: "our vision",
            text: "Empowering growth through tailored innovation.",
          },
          {
            title: "Process",
            text: "Accelerating innovation. Results-driven.",
          },
        ],
        v = [
          {
            name: "twitter",
            link: "https://twitter.com/refinewebstudio",
            icon: (0, a.jsx)(function (e) {
              return u.createElement(
                "svg",
                l(
                  {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 23 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e
                ),
                i ||
                  (i = u.createElement("path", {
                    d: "M21.278 3.674a10.084 10.084 0 0 1-2.905 1.415A4.144 4.144 0 0 0 11.1 7.865v.925a9.862 9.862 0 0 1-8.326-4.191s-3.7 8.326 4.626 12.027a10.768 10.768 0 0 1-6.476 1.85c8.326 4.626 18.502 0 18.502-10.64 0-.257-.025-.514-.074-.767a7.142 7.142 0 0 0 1.925-3.395Z",
                  }))
              );
            }, {}),
          },
          {
            name: "discord",
            link: "https://discordapp.com/users/1076267831798268064",
            icon: (0, a.jsx)(function (e) {
              return u.createElement(
                "svg",
                c(
                  {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 25 18",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e
                ),
                s ||
                  (s = u.createElement("path", {
                    d: "M21.845 2.406C18.897.148 16.074.212 16.074.212l-.289.337c3.504 1.076 5.132 2.659 5.132 2.659C15.904.382 9.52.402 4.304 3.208c0 0 1.69-1.667 5.4-2.743L9.498.21S6.695.148 3.728 2.406c0 0-2.969 5.465-2.969 12.197 0 0 1.732 3.038 6.287 3.186 0 0 .763-.929 1.38-1.73-2.617-.802-3.606-2.47-3.606-2.47 1.644 1.054 3.307 1.714 5.38 2.132 3.371.71 7.565-.02 10.697-2.131 0 0-1.03 1.709-3.73 2.49.617.78 1.36 1.688 1.36 1.688 4.554-.148 6.286-3.186 6.286-3.165 0-6.732-2.968-12.197-2.968-12.197ZM8.942 12.64c-1.154 0-2.102-1.034-2.102-2.32.084-3.083 4.141-3.074 4.204 0 0 1.287-.927 2.32-2.102 2.32Zm7.523 0c-1.154 0-2.102-1.034-2.102-2.32.093-3.077 4.099-3.079 4.205 0 0 1.287-.928 2.32-2.103 2.32Z",
                  }))
              );
            }, {}),
          },
          {
            name: "telegram",
            link: "https://t.me/refinestudio",
            icon: (0, a.jsx)(function (e) {
              return u.createElement(
                "svg",
                h(
                  {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 23 18",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e
                ),
                o ||
                  (o = u.createElement("path", {
                    d: "M16.863 5.738c.668-.668 1.33-2.227-1.453-.334-2.6 1.79-5.218 3.553-7.853 5.29a3.269 3.269 0 0 1-2.562.056c-1.67-.5-3.62-1.169-3.62-1.169s-1.33-.836.948-1.727c0 0 9.635-3.953 12.976-5.346C16.579 1.95 20.923.17 20.923.17s2.005-.78 1.838 1.113c-.056.78-.501 3.51-.946 6.46-.67 4.176-1.393 8.744-1.393 8.744s-.112 1.28-1.058 1.503a4.584 4.584 0 0 1-2.784-1.002c-.222-.167-4.176-2.674-5.624-3.898a1.054 1.054 0 0 1 .055-1.783 204.692 204.692 0 0 0 5.852-5.57Z",
                  }))
              );
            }, {}),
          },
        ],
        y = { text: "Designing & Developing the future one pixel at a time" };
      var _ = m;
    },
    9876: function (e, n, r) {
      "use strict";
      r.d(n, {
        Py: function () {
          return s;
        },
        Sd: function () {
          return i;
        },
        b8: function () {
          return o;
        },
      });
      let i = [
          { name: "Email", url: "mailto:hello@refine.agency" },
          { name: "Calendly", url: "https://calendly.com/refinestudio/" },
        ],
        s = [
          { title: "Case studies", href: "/case-studies/metavmonkeys" },
          {
            title: "Design Demo",
            href: "https://calendly.com/refinestudio/free",
          },
        ],
        o = [
          { title: "Home", href: "home" },
          { title: "About", href: "about" },
          // {
          //   title: "Casestudies",
          //   href: "/case-studies/metavmonkeys",
          //   external: !0,
          // },
          { title: "process", href: "process" },
          { title: "expertise", href: "expertise" },
        ];
    },
    8986: function (e, n, r) {
      "use strict";
      r.d(n, {
        Q: function () {
          return i;
        },
      });
      let i = {
        HOVER: "/assets/songs/text-hover.mp3",
        ICONHOVER: "/assets/songs/icon-hover.mp3",
        MENU: "/assets/songs/menu-open.mp3",
        CLICK_1: "/assets/songs/Menu-click.mp3",
      };
    },
    3707: function (e, n) {
      "use strict";
      let r = new Date(),
        i = r.getTimezoneOffset() / 60,
        s = "GMT/UTC "
          .concat(i <= 0 ? "+" : "-")
          .concat(Math.abs(i).toString().padStart(2, "0"), ":")
          .concat(
            Math.abs((i % 1) * 60)
              .toString()
              .padStart(2, "0")
          );
      n.Z = { tag: "We're Online now", formattedOffset: s };
    },
    3979: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return ty;
          },
        });
      var i,
        s,
        o,
        a,
        u,
        l = r(1844),
        c = r(7928),
        h = r.n(c);
      r(431);
      var d = r(2199),
        f = r(5784),
        p = () => {
          window.va ||
            (window.va = function (...e) {
              (window.vaq = window.vaq || []).push(e);
            });
        },
        D = (e = { debug: !0 }) => {
          var n;
          if (!("undefined" != typeof window)) return;
          let r = (function (e = "auto") {
            return "auto" === e
              ? !(function () {
                  try {
                    return !1;
                  } catch (e) {
                    return !1;
                  }
                })()
                ? "production"
                : "development"
              : e;
          })(e.mode);
          p(),
            e.beforeSend &&
              (null == (n = window.va) ||
                n.call(window, "beforeSend", e.beforeSend));
          let i =
            "development" === r
              ? "https://cdn.vercel-insights.com/v1/script.debug.js"
              : "/_vercel/insights/script.js";
          if (document.head.querySelector(`script[src*="${i}"]`)) return;
          let s = document.createElement("script");
          (s.src = i),
            (s.defer = !0),
            s.setAttribute("data-sdkn", "@vercel/analytics"),
            s.setAttribute("data-sdkv", "0.1.11"),
            "development" === r &&
              !1 === e.debug &&
              s.setAttribute("data-debug", "false"),
            document.head.appendChild(s);
        };
      function m({ beforeSend: e, debug: n = !0, mode: r = "auto" }) {
        return (
          (0, f.useEffect)(() => {
            D({ beforeSend: e, debug: n, mode: r });
          }, [e, n, r]),
          null
        );
      }
      var g = r(7294);
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var y = function (e) {
        return g.createElement(
          "svg",
          v(
            {
              width: 141,
              height: 34,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i ||
            (i = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M.379 0h3.836v9.534h3.898v-.001h9.789c1.45 0 2.59-.313 3.414-.882.826-.57 1.253-1.195 1.253-2.191v-.342c0-1.024-.427-1.679-1.224-2.22-.825-.569-1.992-.825-3.472-.825h-9.76V0h10.102c1.422 0 2.675.17 3.784.484 1.11.341 2.02.825 2.732 1.423.626.54 1.081 1.138 1.394 1.85.342.682.484 1.337.484 2.162v.341c-.028 1.594-.512 2.704-1.508 3.671-.967.968-2.276 1.65-3.87 2.02l7.875 9.07H24.44l-7.314-8.303H.379V0Zm16.746 18.07H.38v3.056H19.795l-.058-.07-2.612-2.986Z",
              fill: "#fff",
            })),
          s ||
            (s = g.createElement("path", {
              d: "m37.316 17.82-2.188 3.313h18.758V17.82h-16.57Zm0-9.004v3.314h16.57V8.816h-16.57ZM35.128 0l2.188 3.376 16.57-.062V0H35.128ZM62.563 3.314h13.203L78.64 0H60.132l2.431 3.314Zm-2.43 17.82h4.376v-8.598h11.952L78.64 9.13H60.132v12.004ZM84.892 21.133h4.377V0h-4.377v21.133ZM95.516 21.133H99.8V6.096l13.756 15.037h3.657V0h-4.314v14.6L99.549 0h-4.033v21.133ZM124.051 17.82l-2.187 3.313h18.757V17.82h-16.57Zm0-9.004v3.314h16.57V8.816h-16.57ZM121.864 0l2.187 3.376 16.57-.062V0h-18.757Z",
              fill: "#fff",
            })),
          o ||
            (o = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M98.005 33.752c.319.162.69.244 1.111.247a2.53 2.53 0 0 0 1.116-.247 2.04 2.04 0 0 0 .757-.648c.082-.124.146-.254.191-.39h-.787a1.208 1.208 0 0 1-.546.554 1.23 1.23 0 0 1-.335.13c-.12.023-.248.037-.386.04a1.639 1.639 0 0 1-.72-.17 1.278 1.278 0 0 1-.553-.553h-.793c.045.137.11.27.194.394.182.271.432.486.751.643Zm-1.023-1.5v-.053c0-.333.092-.633.277-.9.178-.271.429-.487.751-.648a2.559 2.559 0 0 1 1.116-.253c.426.007.798.09 1.117.247.315.158.564.372.746.643.181.275.272.575.272.9v.01l-.001.053h-.752l.002-.042v-.01a1.246 1.246 0 0 0-.18-.622 1.298 1.298 0 0 0-.489-.443c-.209-.11-.45-.168-.725-.175a1.639 1.639 0 0 0-.72.17 1.21 1.21 0 0 0-.664 1.06v.01c0 .018.002.035.003.053h-.753Zm-8.565 0h-.72v-1.73h.72v1.73Zm-.72.463h.72v1.284h-.72v-1.284Zm-8.565-.464a1.575 1.575 0 0 0-.277-.885 1.955 1.955 0 0 0-.762-.618 2.724 2.724 0 0 0-1.137-.226H75.43v1.73h.72v-1.175h.807c.43.004.774.115 1.034.335.249.214.377.494.386.84h.756Zm-.845.464h.777a1.56 1.56 0 0 1-.21.43c-.185.261-.438.468-.76.623-.33.15-.709.228-1.138.231H75.43v-1.284h.72v.729h.807c.43-.004.774-.115 1.034-.335.134-.111.233-.243.297-.394Zm-11.423-.464v-1.786h-.72v1.787h.72Zm-.74.464h.721c-.051.386-.204.683-.46.893-.311.261-.738.391-1.28.391-.538 0-.962-.128-1.27-.386-.257-.21-.41-.51-.457-.898h.727c.038.195.121.35.249.466.189.172.442.258.761.258.323 0 .575-.083.757-.247a.806.806 0 0 0 .251-.477Zm-2.043-.464v-1.786h-.72v1.787h.72Zm-10.585 0v-1.163h1.302v-.566h-3.323v.566h1.296v1.163h.725Zm-11.034 0h-.002a1.579 1.579 0 0 0-.427-.201 3.563 3.563 0 0 0-.442-.119l-.185-.036-.217-.051a3.823 3.823 0 0 1-.21-.067.922.922 0 0 1-.165-.077.475.475 0 0 1-.15-.129.321.321 0 0 1-.046-.185c0-.069.016-.127.047-.175a.553.553 0 0 1 .37-.221c.09-.017.173-.027.252-.03.2 0 .393.034.581.102.19.065.366.15.53.257l.386-.463a2.31 2.31 0 0 0-.674-.324 2.793 2.793 0 0 0-.93-.108c-.162.01-.32.038-.474.082-.155.045-.292.11-.412.196-.123.09-.22.187-.288.293a.69.69 0 0 0-.103.391c0 .22.057.395.17.525a1.256 1.256 0 0 0 .485.34h1.904Zm-.442.464h.84a.863.863 0 0 1 .048.297.763.763 0 0 1-.103.411c-.069.11-.17.211-.304.304-.13.089-.28.156-.447.2a2.514 2.514 0 0 1-.515.072 3.372 3.372 0 0 1-.525-.03 2.663 2.663 0 0 1-.473-.108 3.24 3.24 0 0 1-.422-.175 3.116 3.116 0 0 1-.38-.242l.432-.438a2.169 2.169 0 0 0 .885.417c.11.02.22.033.334.036a1.66 1.66 0 0 0 .324-.02.834.834 0 0 0 .278-.103.454.454 0 0 0 .144-.134.335.335 0 0 0 .051-.19.329.329 0 0 0-.167-.297Zm10.75 0h.726v1.284h-.725v-1.284Z",
              fill: "#fff",
            }))
        );
      };
      function _() {
        return (0, l.jsxs)("div", {
          className:
            "flex flex-col justify-center items-center gap-4 text-center ",
          children: [
            (0, l.jsx)(y, {}),
            (0, l.jsx)("span", {
              className:
                "uppercase font-light font-outer text-xs text-white text-opacity-50 max-w-[32ch]",
              children: "Designing & Developing The Future One Pixel At A Time",
            }),
          ],
        });
      }
      var x = r(9876),
        C = r(1664),
        E = r.n(C),
        F = r(1459),
        b = r(1163);
      function w() {
        let e = (0, b.useRouter)(),
          { pathname: n } = e,
          r = window.location.origin ? window.location.origin : "";
        return (0, l.jsx)("div", {
          className: "px-5 mt-5 divide-y divide-gray divide-opacity-20",
          children: x.b8.map((e) => {
            let { title: i, href: s, external: o } = e;
            return !0 === o || "/" !== n
              ? (0, l.jsxs)(
                  E(),
                  {
                    href: o ? s : "".concat(r, "#").concat(s),
                    scroll: !0,
                    className: "p-4 flex justify-between items-center w-full",
                    children: [
                      (0, l.jsx)("div", {
                        className: "uppercase text-xs",
                        children: i,
                      }),
                      (0, l.jsx)(F.Z, {}),
                    ],
                  },
                  i
                )
              : (0, l.jsxs)(
                  E(),
                  {
                    href: "#".concat(s),
                    scroll: !0,
                    className: "p-4 flex justify-between items-center w-full",
                    children: [
                      (0, l.jsx)("div", {
                        className: "uppercase text-xs",
                        children: i,
                      }),
                      (0, l.jsx)(F.Z, {}),
                    ],
                  },
                  i
                );
          }),
        });
      }
      var A = r(2039);
      function T() {
        return (0, l.jsx)("div", {
          className:
            "flex items-center gap-2 justify-center py-3 border-t border-gray border-opacity-20 bottom-0 sticky right-0 left-0 bg-black",
          children: A.LN.map((e) => {
            let { icon: n, link: r } = e;
            return (0, l.jsx)(
              E(),
              {
                href: r,
                target: "_blank",
                className: "opacity-30 hover:opacity-80 transition",
                children: n,
              },
              e.name
            );
          }),
        });
      }
      function S() {
        return (0, l.jsxs)("div", {
          className:
            "flex xl:hidden short:pt-10 short:border-gray border-opacity-10 short:flex flex-col mt-10 justify-center gap-5",
          children: [(0, l.jsx)(_, {}), (0, l.jsx)(w, {}), (0, l.jsx)(T, {})],
        });
      }
      var j = r(6038),
        P = r(2757),
        B = r(4588),
        k = r.n(B),
        M = r(9945);
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var R = function (e) {
        return g.createElement(
          "svg",
          O(
            {
              width: 31,
              height: 23,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          a ||
            (a = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0 0h4.14v10.288h4.206v-.001H18.91c1.566 0 2.795-.338 3.685-.952.89-.614 1.351-1.29 1.351-2.365v-.368c0-1.105-.46-1.812-1.32-2.395-.89-.614-2.15-.89-3.746-.89H8.346V0h10.901c1.535 0 2.887.184 4.084.522 1.198.369 2.18.89 2.948 1.535.675.584 1.167 1.229 1.505 1.996.368.737.521 1.444.521 2.334v.368c-.03 1.72-.552 2.918-1.627 3.962-1.044 1.044-2.457 1.78-4.176 2.18L31 22.684h-5.036l-7.893-8.96H0V0Zm18.07 19.5H0v3.296h20.952l-.063-.076-2.819-3.22Z",
              fill: "#fff",
            }))
        );
      };
      function L() {
        return (L = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var N = function (e) {
        return g.createElement(
          "svg",
          L(
            {
              width: 17,
              height: 17,
              viewBox: "0 0 23 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          u ||
            (u = g.createElement(
              "g",
              { opacity: 0.3, stroke: "#fff", strokeWidth: 2 },
              g.createElement("path", {
                d: "M22 19.5v-9C22 5.253 17.023 1 11.5 1S1 5.253 1 10.5v9",
              }),
              g.createElement("path", {
                d: "M4 14a1.5 1.5 0 0 0-1.5-1.5H1v8h1.5A1.5 1.5 0 0 0 4 19v-5ZM19 14a1.5 1.5 0 0 1 1.5-1.5H22v8h-1.5A1.5 1.5 0 0 1 19 19v-5Z",
              })
            ))
        );
      };
      function V() {
        return (0, l.jsxs)("div", {
          id: "loader-body",
          className:
            "md:w-1/3 hidden w-full flex justify-center items-center flex-col gap-4 md:gap-7 ".concat(
              k().loaderBody
            ),
          children: [
            (0, l.jsx)("div", {
              className:
                "text-white font-medium text-center font-outer uppercase text-xl xxs:text-xl md:text-2xl",
              children: (0, l.jsx)("p", {
                "data-text": "With every pixel",
                className: "whitespace-nowrap ".concat(k().glitchLoader),
                children: (0, l.jsx)("span", {
                  id: "loader-text",
                  className: "glitch-loader ",
                  children: "Designing your future",
                }),
              }),
            }),
            (0, l.jsxs)("div", {
              className:
                "w-full relative max-w-xl flex items-center justify-center ",
              children: [
                (0, l.jsx)(M.Z, {
                  className: "h-[2px] w-0",
                  lax: !0,
                  none: !0,
                }),
                (0, l.jsx)("span", {
                  id: "progress",
                  className:
                    "absolute rounded-full top-[50%] translate-y-[-50%] max-w-[100%] h-[3px] left-0 w-0 right-0 bg-gradient-to-r from-[#80FF72] to-[#7EE8FA]",
                }),
              ],
            }),
            (0, l.jsx)("span", {
              id: "logo",
              className:
                "uppercase flex flex-col-reverse justify-center font-light text-[10px] gap-3 items-center absolute left-1/2 -translate-x-1/2 bottom-20 font-white ".concat(
                  k().fontOuter
                ),
              children: (0, l.jsxs)("div", {
                className: "flex flex-col items-center gap-5",
                children: [
                  (0, l.jsx)(R, {}),
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-2 w-full",
                    children: [
                      (0, l.jsx)("span", {
                        className:
                          "text-white text-opacity-60 w-full whitespace-nowrap",
                        children: "Use headphones for the best experience",
                      }),
                      (0, l.jsx)(N, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var I = r(3627),
        z = r(9718);
      let U = f.useLayoutEffect,
        Z = (e, n) => {
          let { setIsPlaying: r } = (0, z.u7)(),
            [i, s] = (0, f.useState)("0%"),
            [o, a] = (0, f.useState)("Tap to enter"),
            u = () => {},
            l = () => {
              {
                let e = window.matchMedia("(pointer: coarse)").matches,
                  n = window.innerWidth < 968;
                a(e || n ? "Tap to enter" : "Click to enter");
              }
            };
          return (
            U(
              () => (
                l(),
                window.addEventListener("resize", l),
                () => {
                  window.removeEventListener("resize", l);
                }
              ),
              []
            ),
            (0, f.useEffect)(() => {
              (0, I.w)();
              let i = j.p8.utils.selector(e.current),
                a = i("#border")[0],
                l = i("#loader-body")[0],
                c = i("#loader-text")[0],
                h = i("#progress")[0],
                d = i("#svg");
              j.p8.set([a, h], { width: "0%" });
              let f = j.p8.timeline({
                onUpdate: () => {
                  s("".concat(Math.round(100 * f.progress()), "%"));
                },
                onComplete: () => {
                  (0, I.h)();
                },
              });
              return (
                f
                  .set(l, { display: "flex", delay: 0.15 })
                  .to(a, { width: "100%", ease: "power4.in", duration: 0.5 })
                  .to(h, { width: "100%", delay: 0.15, duration: 1 }, ">")
                  .to([a, h], { autoAlpha: 0 }, ">+0.15")
                  .to(
                    c,
                    {
                      scrambleText: {
                        text: o,
                        chars: "REFINESTUDIO",
                        revealDelay: 0.25,
                        speed: 1.5,
                      },
                      duration: 0.75,
                    },
                    ">"
                  )
                  .then(() => {
                    (document.body.style.cursor = "pointer"),
                      (u = () => {
                        r(!0),
                          f
                            .to(
                              ["#loader-body", "#logo"],
                              {
                                zIndex: -1,
                                autoAlpha: 0,
                                duration: 0.75,
                                ease: "power3.out",
                              },
                              ">+=0.25"
                            )
                            .to(
                              [d, ".loader-wrap"],
                              {
                                duration: 0.3,
                                attr: {
                                  d: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
                                },
                                ease: "power2.easeIn",
                              },
                              ">-=0.5"
                            )
                            .to(
                              [d, ".loader-wrap"],
                              {
                                duration: 0.3,
                                attr: {
                                  d: "M0 2S175 1 500 1s500 1 500 1V0H0Z",
                                },
                                ease: "power2.easeOut",
                              },
                              "<+0.2"
                            )
                            .then(() => {
                              n && n();
                            }),
                          window.removeEventListener("click", u),
                          (document.body.style.cursor = "auto");
                      }),
                      window.addEventListener("click", u);
                  }),
                () => {
                  f.kill(),
                    window.removeEventListener("click", u),
                    (document.body.style.cursor = "auto");
                }
              );
            }, [e, n]),
            { percentage: i }
          );
        };
      function W(e) {
        let { setLoadingComplete: n } = e,
          r = (0, f.useRef)(null),
          { percentage: i } = Z(r, n),
          [s] = (0, f.useState)(!0);
        return (0, l.jsx)("div", {
          ref: r,
          id: "loader",
          s: !0,
          className: "w-full h-full ".concat(
            k().loaderWrap,
            " fixed px-5 top-0 left-0 z-loader"
          ),
          children: (0, l.jsxs)("div", {
            className:
              "relative h-full w-full flex justify-center items-center",
            children: [
              (0, l.jsx)("svg", {
                viewBox: "0 0 990 990",
                className: "fixed bottom-0 left-0 right-0 top-0 w-full h-full",
                fill: "#000",
                preserveAspectRatio: "none",
                children: (0, l.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, l.jsx)(V, { percentage: i, setLoading: s }),
            ],
          }),
        });
      }
      j.p8.registerPlugin(P.SplitText);
      var H = r(5675),
        q = r.n(H),
        Y = r(9814);
      r(4891);
      var $ = r(8282),
        X = r(6491),
        G = r(8986),
        K = r(7946);
      function J() {
        let e = (0, f.useRef)(),
          { playHoverSound: n } = (0, X.Z)(G.Q.HOVER, G.Q.CLICK_1);
        return (
          j.p8.registerPlugin(K.ScrambleTextPlugin),
          (0, l.jsxs)("aside", {
            ref: e,
            className:
              "py-16 z-xxl short:hidden px-0 hidden xl:flex max-w-[100px] pt-9 h-screen my-auto mx-3 relative",
            children: [
              (0, l.jsx)($.Z, {
                type: "double",
                className: "absolute z-max right-0 ",
              }),
              (0, l.jsxs)("div", {
                className:
                  "hidden md:flex h-full justify-between items-center flex-col",
                children: [
                  (0, l.jsx)(E(), {
                    href: "/",
                    className: "",
                    children: (0, l.jsx)(q(), {
                      src: "/logo.svg",
                      width: "30",
                      height: "30",
                      alt: "Refine Studios",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "flex flex-col rotate-180 gap-3",
                    children: x.Sd.map((e) =>
                      (0, l.jsx)(
                        E(),
                        {
                          href: e.url,
                          target: "_blank",
                          style: { writingMode: "vertical-rl" },
                          "data-original-text": e.name,
                          className:
                            "duration-200 hover:bg-opacity-30 hover:text-accent px-1 py-3.5 rounded-lg hover:bg-gray",
                          onMouseEnter: (e) => {
                            (function (e, n) {
                              let r = e.currentTarget.children[0],
                                i =
                                  e.currentTarget.getAttribute(
                                    "data-original-text"
                                  );
                              j.p8.fromTo(
                                r,
                                {
                                  scrambleText: {
                                    text: r.textContent,
                                    chars: "REFINE",
                                    speed: 0.3,
                                  },
                                },
                                {
                                  duration: 0.75,
                                  scrambleText: {
                                    text: i,
                                    chars: "REFINE",
                                    speed: 0.3,
                                  },
                                }
                              );
                            })(e),
                              n();
                          },
                          children: (0, l.jsx)("span", {
                            className: "text-sm uppercase",
                            children: e.name,
                          }),
                        },
                        e.name
                      )
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: "w-16 flex justify-center items-center",
                    style: { writingMode: "vertical-rl" },
                    children: (0, l.jsx)(Y.Z, { rotate: !0 }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var Q = r(1526),
        tt = r(9537);
      function te(e) {
        let { children: n } = e,
          { route: r } = (0, b.useRouter)();
        return (0, l.jsx)("div", {
          className: "w-full overflow-hidden relative",
          children: (0, l.jsx)(Q.M, {
            initial: !1,
            mode: "wait",
            children: (0, l.jsx)(
              tt.E.div,
              {
                className: "flex flex-col lg:flex-row w-full bg-black",
                variants: {
                  out: { opacity: 0, transition: { duration: 0 } },
                  in: {
                    opacity: 1,
                    transition: { duration: 0.95, delay: 1.25 },
                  },
                },
                animate: "in",
                initial: "out",
                exit: "out",
                children: n,
              },
              r.asPath
            ),
          }),
        });
      }
      var tn = r(5066),
        tr = r(7573),
        ti = r(46);
      function ts() {
        let e = (0, f.useRef)(),
          n = (0, ti.Z)(10),
          { isControlsVisible: r, setIsControlsVisible: i } = (0, z.u7)(),
          { pathname: s } = (0, b.useRouter)();
        return (
          (0, f.useEffect)(() => {
            r &&
              !s.startsWith("/case-studies") &&
              ("up" === n
                ? j.ZP.to(e.current, { bottom: "0%", duration: 0.75 })
                : "bottom" === n
                ? j.ZP.to(e.current, {
                    bottom: "-100%",
                    duration: 0.75,
                    ease: "power2.out",
                  })
                : ("down" === n || "bottom" === n) &&
                  j.ZP.to(e.current, {
                    bottom: "-100%",
                    duration: 0.75,
                    ease: "power2.out",
                  })),
              s.startsWith("/case-studies") ? i(!1) : i(!0),
              r ||
                j.ZP.to(e.current, {
                  bottom: "-100%",
                  duration: 0.75,
                  ease: "power2.out",
                });
          }, [n, r, s, r]),
          (0, l.jsxs)("div", {
            ref: e,
            role: "button",
            "aria-label": "music player controls",
            className:
              " fixed flex flex-col p-6 z-xl bg-black border-gray short:flex bottom-0 xl:hidden left-1/2 !translate-x-[-50%] w-[100%] transition-all",
            children: [
              (0, l.jsx)("div", { className: "overlay-fade" }),
              (0, l.jsx)(tr.Z, {}),
            ],
          })
        );
      }
      var to = r(5499),
        ta = r(1112),
        tu = r.n(ta),
        tl = r(6613),
        tc = r.n(tl),
        th = r(7334),
        td = r.n(th);
      r(3292);
      var tf = r(8868),
        tp = r(521),
        tD = r(5152),
        tm = r.n(tD);
      function tg(e, n, r) {
        return Math.max(e, Math.min(n, r));
      }
      let tv = () => ({
        events: {},
        emit(e, ...n) {
          let r = this.events[e] || [];
          for (let e = 0, i = r.length; e < i; e++) r[e](...n);
        },
        on(e, n) {
          var r;
          return (
            (null == (r = this.events[e]) ? void 0 : r.push(n)) ||
              (this.events[e] = [n]),
            () => {
              var r;
              this.events[e] =
                null == (r = this.events[e])
                  ? void 0
                  : r.filter((e) => n !== e);
            }
          );
        },
      });
      var ty = function (e) {
        let { Component: n } = e,
          i = tm()(
            () =>
              Promise.resolve()
                .then(r.bind(r, 3292))
                .then((e) => {
                  let { Noise: n } = e;
                  return n;
                }),
            { loadableGenerated: { webpack: () => [3292] }, ssr: !1 }
          ),
          { setContact: s } = (0, z.AW)(),
          o = (0, b.useRouter)(),
          { pathname: a } = o,
          { isLoading: u, setIsLoading: c } = (0, z.U2)(),
          [p, D] = (0, f.useState)(!1),
          { scrollYProgress: g } = (0, tp.v)();
        (0, tf.L)(() => {}, []),
          (0, f.useEffect)(() => {
            window.matchMedia("(min-height: 850px) and (min-width: 1080px")
              .matches && D(!0);
          }, []),
          (0, f.useEffect)(() => {
            s(!1);
          }, [a]);
        let v = () => {
          c(!1);
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(d.Z, {}),
            (0, l.jsx)(h(), {
              id: "e6d25953589be001",
              dynamic: [
                td().style.fontFamily,
                tu().style.fontFamily,
                tc().style.fontFamily,
              ],
              children: ":root{--inter-font:"
                .concat(td().style.fontFamily, ";--mbf-font:")
                .concat(tu().style.fontFamily, ";--font-outer:")
                .concat(tc().style.fontFamily, "}"),
            }),
            (0, l.jsxs)("div", {
              className:
                h().dynamic([
                  [
                    "e6d25953589be001",
                    [
                      td().style.fontFamily,
                      tu().style.fontFamily,
                      tc().style.fontFamily,
                    ],
                  ],
                ]) +
                " bg-pri text-white w-full relative short:h-full xl:min-h-screen flex flex-col",
              children: [
                u &&
                  !a.startsWith("/case-studies") &&
                  (0, l.jsx)(W, { setLoadingComplete: v }),
                (0, l.jsxs)("div", {
                  className:
                    h().dynamic([
                      [
                        "e6d25953589be001",
                        [
                          td().style.fontFamily,
                          tu().style.fontFamily,
                          tc().style.fontFamily,
                        ],
                      ],
                    ]) + " relative w-full flex flex-col xl:flex-row ",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        h().dynamic([
                          [
                            "e6d25953589be001",
                            [
                              td().style.fontFamily,
                              tu().style.fontFamily,
                              tc().style.fontFamily,
                            ],
                          ],
                        ]) + " xl:hidden h-full",
                      children: (0, l.jsx)(to.Z, {}),
                    }),
                    (0, l.jsx)(tn.Z, {}),
                    (0, l.jsx)(J, {}),
                    (0, l.jsx)(te, {
                      children: (0, l.jsxs)("div", {
                        className:
                          h().dynamic([
                            [
                              "e6d25953589be001",
                              [
                                td().style.fontFamily,
                                tu().style.fontFamily,
                                tc().style.fontFamily,
                              ],
                            ],
                          ]) + " flex flex-col overflow-x-hidden relative",
                        children: [
                          0 !== g &&
                            (0, l.jsx)(tt.E.span, {
                              style: { scaleX: g },
                              className:
                                "xl:hidden short:block origin-left h-[1px] z-xxl fixed top-0 left-0 right-0 rounded-full bg-accent",
                            }),
                          (0, l.jsx)(n, {
                            className: h().dynamic([
                              [
                                "e6d25953589be001",
                                [
                                  td().style.fontFamily,
                                  tu().style.fontFamily,
                                  tc().style.fontFamily,
                                ],
                              ],
                            ]),
                          }),
                          (0, l.jsx)(S, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(Q.M, { children: !p && (0, l.jsx)(ts, {}) }),
            (0, l.jsx)(m, {}),
            (0, l.jsx)(i, {
              className: h().dynamic([
                [
                  "e6d25953589be001",
                  [
                    td().style.fontFamily,
                    tu().style.fontFamily,
                    tc().style.fontFamily,
                  ],
                ],
              ]),
            }),
          ],
        });
      };
    },
    8282: function (e, n, r) {
      "use strict";
      var i = r(1844);
      r(194),
        (n.Z = function (e) {
          let { type: n = "double", className: r = "relative z-xxl" } = e;
          return (0, i.jsxs)("div", {
            className: "fancyBorder z-max ".concat(r),
            children: [
              (0, i.jsx)("span", { className: "inner top" }),
              (0, i.jsx)("span", {
                className: "inner bottom ".concat("single" === n && "hidden"),
              }),
            ],
          });
        });
    },
    9945: function (e, n, r) {
      "use strict";
      var i = r(1844);
      r(5435),
        (n.Z = function (e) {
          let { type: n = "double", className: r, lax: s, none: o } = e;
          return (0, i.jsx)("div", {
            id: "border",
            className: "horizontal-fancy-border ".concat(r || "relative"),
            children: s
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "".concat(
                        o ? "hidden" : "inner",
                        " -left-8 sm:left"
                      ),
                    }),
                    (0, i.jsx)("span", {
                      className: ""
                        .concat(o ? "hidden" : "inner", " -right-8 sm:right  ")
                        .concat("single" === n && "hidden"),
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", { className: "inner left-0 left" }),
                    (0, i.jsx)("span", {
                      className: "inner right-0 right  ".concat(
                        "single" === n && "hidden"
                      ),
                    }),
                  ],
                }),
          });
        });
    },
    6491: function (e, n, r) {
      "use strict";
      var i = r(5784);
      let s = (e, n) => {
        let r = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          o = () => {
            (r.current = new Audio(e)), r.current.play();
          },
          a = () => {
            (s.current = new Audio(n)), s.current.play();
          };
        return { playHoverSound: o, playClickSound: a };
      };
      n.Z = s;
    },
    3627: function (e, n, r) {
      "use strict";
      let i;
      r.d(n, {
        h: function () {
          return o;
        },
        w: function () {
          return s;
        },
      }),
        "undefined" != typeof document && (i = document.querySelector("body"));
      let s = () => {
          (i.style.overflow = "hidden"),
            (i.style.position = "fixed"),
            (i.style.width = "100%");
        },
        o = () => {
          i.style.removeProperty("overflow"),
            i.style.removeProperty("position"),
            i.style.removeProperty("width");
        };
    },
    7839: function (e, n, r) {
      "use strict";
      r.d(n, {
        ZP: function () {
          return o;
        },
        bi: function () {
          return s;
        },
        bx: function () {
          return i;
        },
      });
      let i = {
          UIUX: "uiux",
          FRONT: "frontend",
          BACK: "backend",
          CONCEPT: "concept",
        },
        s = { LATEST: "Latest --> Oldest", OLDEST: "Oldest --> Latest" },
        o = { ORDER: "Ordering", MAIN: "Main", LABEL: "Label" };
    },
    9718: function (e, n, r) {
      "use strict";
      r.d(n, {
        AW: function () {
          return d;
        },
        qW: function () {
          return m;
        },
        U2: function () {
          return g;
        },
        u7: function () {
          return f;
        },
        BS: function () {
          return p;
        },
        pm: function () {
          return D;
        },
      });
      let i = (e) => {
          let n;
          let r = new Set(),
            i = (e, i) => {
              let s = "function" == typeof e ? e(n) : e;
              if (!Object.is(s, n)) {
                let e = n;
                (n = (null != i ? i : "object" != typeof s)
                  ? s
                  : Object.assign({}, n, s)),
                  r.forEach((r) => r(n, e));
              }
            },
            s = () => n,
            o = (e) => (r.add(e), () => r.delete(e)),
            a = () => {
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
              ),
                r.clear();
            },
            u = { setState: i, getState: s, subscribe: o, destroy: a };
          return (n = e(i, s, u)), u;
        },
        s = (e) => (e ? i(e) : i);
      var o = r(5784),
        a = r(2798);
      let { useSyncExternalStoreWithSelector: u } = a,
        l = (e) => {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let n = "function" == typeof e ? s(e) : e,
            r = (e, r) =>
              (function (e, n = e.getState, r) {
                let i = u(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getState,
                  n,
                  r
                );
                return (0, o.useDebugValue)(i), i;
              })(n, e, r);
          return Object.assign(r, n), r;
        },
        c = (e) => (e ? l(e) : l);
      var h = r(7839);
      let d = c((e) => ({
          showContact: !1,
          statusBar: !1,
          valuesArr: [],
          activeBudget: "",
          services: "",
          toggleContact: () => e((e) => ({ showContact: !e.showContact })),
          setContact: (n) => e(() => ({ showContact: n })),
          hideContact: () => e((e) => ({ hideContact: !e.hideContact })),
          toggleStatusBar: () => e((e) => ({ statusBar: !e.statusBar })),
          toggleContactButton: () =>
            e((e) => ({ toggleContactButton: !e.toggleContactButton })),
          addToValue: (n) => e(() => ({ valuesArr: n })),
          setActiveBudget: (n) => e(() => ({ activeBudget: n })),
          setServices: (n) => e(() => ({ services: n })),
        })),
        f = c((e) => ({
          isPlaying: !1,
          isControlsVisible: !1,
          activeMusicIndex: 0,
          currentTime: 0,
          setCurrentTime: (n) => e(() => ({ currentTime: n })),
          setActiveMusicIndex: (n) => e(() => ({ activeMusicIndex: n })),
          setIsPlaying: (n) => e(() => ({ isPlaying: n })),
          setIsControlsVisible: (n) => e(() => ({ isControlsVisible: n })),
        })),
        p = c((e) => ({
          orderingFilter: h.bi.LATEST,
          labelFilters: Object.values(h.bx),
          isOrderingModalActive: !1,
          isLabelModalActive: !1,
          setOrderingFilter: (n) => e(() => ({ orderingFilter: n })),
          setLabelFilters: (n) => e(() => ({ labelFilters: n })),
          setIsOrderingModalActive: (n) =>
            e(() => ({ isOrderingModalActive: n })),
          setIsLabelModalActive: (n) => e(() => ({ isLabelModalActive: n })),
        }));
      c((e) => ({
        isMenuVisible: !1,
        setIsMenuVisible: (n) => e(() => ({ isMenuVisible: n })),
      }));
      let D = c((e) => ({
          toast: !1,
          toastError: !1,
          messageCopiedToast: !1,
          showToast: () => {
            e(() => ({ toast: !0 })),
              setTimeout(() => {
                e(() => ({ toast: !1 }));
              }, 5e3);
          },
          showMessageCopiedToast: () => {
            e(() => ({ messageCopiedToast: !0 })),
              setTimeout(() => {
                e(() => ({ messageCopiedToast: !1 }));
              }, 5e3);
          },
          showErrorToast: () => {
            e(() => ({ toastError: !0 }));
          },
          removeErrorToast: () => {
            setTimeout(() => {
              e(() => ({ toastError: !1 }));
            }, 5e3);
          },
        })),
        m = c((e) => ({
          errorMessage: "",
          emailMessage: "",
          setErrorMessage: (n) => e(() => ({ errorMessage: n })),
          setEmailMessage: (n) => e(() => ({ emailMessage: n })),
        })),
        g = c((e) => ({
          isLoading: !0,
          setIsLoading: (n) => e(() => ({ isLoading: n })),
        }));
    },
    7334: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Bai_Jamjuree_903832', '__Bai_Jamjuree_Fallback_903832'",
          fontStyle: "normal",
        },
        className: "__className_903832",
      };
    },
    6613: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__outerFont_c2e0e6', '__outerFont_Fallback_c2e0e6'",
        },
        className: "__className_c2e0e6",
      };
    },
    1112: function (e) {
      e.exports = {
        style: { fontFamily: "'__mbf_c3939c', '__mbf_Fallback_c3939c'" },
        className: "__className_c3939c",
      };
    },
    7663: function (e) {
      !(function () {
        var n = {
            229: function (e) {
              var n,
                r,
                i,
                s = (e.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function u(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout)
                  return (n = setTimeout), setTimeout(e, 0);
                try {
                  return n(e, 0);
                } catch (r) {
                  try {
                    return n.call(null, e, 0);
                  } catch (r) {
                    return n.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  n = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  n = o;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  r = a;
                }
              })();
              var l = [],
                c = !1,
                h = -1;
              function d() {
                c &&
                  i &&
                  ((c = !1),
                  i.length ? (l = i.concat(l)) : (h = -1),
                  l.length && f());
              }
              function f() {
                if (!c) {
                  var e = u(d);
                  c = !0;
                  for (var n = l.length; n; ) {
                    for (i = l, l = []; ++h < n; ) i && i[h].run();
                    (h = -1), (n = l.length);
                  }
                  (i = null),
                    (c = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === a || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (n) {
                        try {
                          return r.call(null, e);
                        } catch (n) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, n) {
                (this.fun = e), (this.array = n);
              }
              function D() {}
              (s.nextTick = function (e) {
                var n = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                l.push(new p(e, n)), 1 !== l.length || c || u(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (s.title = "browser"),
                (s.browser = !0),
                (s.env = {}),
                (s.argv = []),
                (s.version = ""),
                (s.versions = {}),
                (s.on = D),
                (s.addListener = D),
                (s.once = D),
                (s.off = D),
                (s.removeListener = D),
                (s.removeAllListeners = D),
                (s.emit = D),
                (s.prependListener = D),
                (s.prependOnceListener = D),
                (s.listeners = function (e) {
                  return [];
                }),
                (s.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (s.cwd = function () {
                  return "/";
                }),
                (s.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (s.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function i(e) {
          var s = r[e];
          if (void 0 !== s) return s.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            n[e](o, o.exports, i), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        i.ab = "//";
        var s = i(229);
        e.exports = s;
      })();
    },
    9803: function (e, n, r) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = r(5784),
        s = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, n, r) {
        var i,
          o = {},
          c = null,
          h = null;
        for (i in (void 0 !== r && (c = "" + r),
        void 0 !== n.key && (c = "" + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          a.call(n, i) && !l.hasOwnProperty(i) && (o[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: h,
          props: o,
          _owner: u.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    1844: function (e, n, r) {
      "use strict";
      e.exports = r(9803);
    },
    5152: function (e, n, r) {
      e.exports = r(7062);
    },
    5675: function (e, n, r) {
      e.exports = r(30);
    },
    1664: function (e, n, r) {
      e.exports = r(4090);
    },
    1163: function (e, n, r) {
      e.exports = r(5337);
    },
    7005: function (e, n, r) {
      var i = r(5784),
        s = i && "object" == typeof i && "default" in i ? i : { default: i },
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var n, r = 1, i = arguments.length; r < i; r++)
                for (var s in (n = arguments[r]))
                  Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
              return e;
            }).apply(this, arguments);
        };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let n = document.createElement("style");
        n.setAttribute("type", "text/css"),
          (n.innerHTML = e),
          document.head.appendChild(n);
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      ),
        (n.Z = function (e) {
          var n,
            r,
            a,
            u,
            l = e.style,
            c = e.className,
            h = e.play,
            d = void 0 === h || h,
            f = e.pauseOnHover,
            p = void 0 !== f && f,
            D = e.pauseOnClick,
            m = void 0 !== D && D,
            g = e.direction,
            v = void 0 === g ? "left" : g,
            y = e.speed,
            _ = void 0 === y ? 20 : y,
            x = e.delay,
            C = void 0 === x ? 0 : x,
            E = e.loop,
            F = void 0 === E ? 0 : E,
            b = e.gradient,
            w = e.gradientColor,
            A = void 0 === w ? [255, 255, 255] : w,
            T = e.gradientWidth,
            S = void 0 === T ? 200 : T,
            j = e.onFinish,
            P = e.onCycleComplete,
            B = e.children,
            k = i.useState(0),
            M = k[0],
            O = k[1],
            R = i.useState(0),
            L = R[0],
            N = R[1],
            V = i.useState(!1),
            I = V[0],
            z = V[1],
            U = i.useRef(null),
            Z = i.useRef(null);
          i.useEffect(
            function () {
              if (I) {
                var e = function () {
                  Z.current &&
                    U.current &&
                    (O(U.current.getBoundingClientRect().width),
                    N(Z.current.getBoundingClientRect().width));
                };
                return (
                  e(),
                  window.addEventListener("resize", e),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              }
            },
            [I]
          ),
            i.useEffect(function () {
              z(!0);
            }, []);
          var W = "rgba(" + A[0] + ", " + A[1] + ", " + A[2],
            H = L < M ? M / _ : L / _;
          return s.default.createElement(
            i.Fragment,
            null,
            I
              ? s.default.createElement(
                  "div",
                  {
                    ref: U,
                    style: o(
                      o({}, void 0 === l ? {} : l),
                      (((n = {})["--pause-on-hover"] =
                        !d || p ? "paused" : "running"),
                      (n["--pause-on-click"] =
                        !d || (p && !m) || m ? "paused" : "running"),
                      n)
                    ),
                    className: (void 0 === c ? "" : c) + " marquee-container",
                  },
                  (void 0 === b || b) &&
                    s.default.createElement("div", {
                      style:
                        (((r = {})["--gradient-color"] =
                          W + ", 1), " + W + ", 0)"),
                        (r["--gradient-width"] =
                          "number" == typeof S ? S + "px" : S),
                        r),
                      className: "overlay",
                    }),
                  s.default.createElement(
                    "div",
                    {
                      ref: Z,
                      style:
                        (((a = {})["--play"] = d ? "running" : "paused"),
                        (a["--direction"] =
                          "left" === v ? "normal" : "reverse"),
                        (a["--duration"] = H + "s"),
                        (a["--delay"] = C + "s"),
                        (a["--iteration-count"] = F ? "" + F : "infinite"),
                        a),
                      className: "marquee",
                      onAnimationIteration: P,
                      onAnimationEnd: j,
                    },
                    B
                  ),
                  s.default.createElement(
                    "div",
                    {
                      style:
                        (((u = {})["--play"] = d ? "running" : "paused"),
                        (u["--direction"] =
                          "left" === v ? "normal" : "reverse"),
                        (u["--duration"] = H + "s"),
                        (u["--delay"] = C + "s"),
                        (u["--iteration-count"] = F ? "" + F : "infinite"),
                        u),
                      className: "marquee",
                      "aria-hidden": "true",
                    },
                    B
                  )
                )
              : null
          );
        });
    },
    655: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __assign: function () {
            return o;
          },
          __asyncDelegator: function () {
            return w;
          },
          __asyncGenerator: function () {
            return b;
          },
          __asyncValues: function () {
            return A;
          },
          __await: function () {
            return F;
          },
          __awaiter: function () {
            return D;
          },
          __classPrivateFieldGet: function () {
            return B;
          },
          __classPrivateFieldIn: function () {
            return M;
          },
          __classPrivateFieldSet: function () {
            return k;
          },
          __createBinding: function () {
            return g;
          },
          __decorate: function () {
            return u;
          },
          __esDecorate: function () {
            return c;
          },
          __exportStar: function () {
            return v;
          },
          __extends: function () {
            return s;
          },
          __generator: function () {
            return m;
          },
          __importDefault: function () {
            return P;
          },
          __importStar: function () {
            return j;
          },
          __makeTemplateObject: function () {
            return T;
          },
          __metadata: function () {
            return p;
          },
          __param: function () {
            return l;
          },
          __propKey: function () {
            return d;
          },
          __read: function () {
            return _;
          },
          __rest: function () {
            return a;
          },
          __runInitializers: function () {
            return h;
          },
          __setFunctionName: function () {
            return f;
          },
          __spread: function () {
            return x;
          },
          __spreadArray: function () {
            return E;
          },
          __spreadArrays: function () {
            return C;
          },
          __values: function () {
            return y;
          },
        });
      var i = function (e, n) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, n) {
              e.__proto__ = n;
            }) ||
          function (e, n) {
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          })(e, n);
      };
      function s(e, n) {
        if ("function" != typeof n && null !== n)
          throw TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        i(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var n, r = 1, i = arguments.length; r < i; r++)
              for (var s in (n = arguments[r]))
                Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, n) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > n.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > n.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function u(e, n, r, i) {
        var s,
          o = arguments.length,
          a =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, n, r, i);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (s = e[u]) &&
              (a = (o < 3 ? s(a) : o > 3 ? s(n, r, a) : s(n, r)) || a);
        return o > 3 && a && Object.defineProperty(n, r, a), a;
      }
      function l(e, n) {
        return function (r, i) {
          n(r, i, e);
        };
      }
      function c(e, n, r, i, s, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var u,
            l = i.kind,
            c = "getter" === l ? "get" : "setter" === l ? "set" : "value",
            h = !n && e ? (i.static ? e : e.prototype) : null,
            d = n || (h ? Object.getOwnPropertyDescriptor(h, i.name) : {}),
            f = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var D = {};
          for (var m in i) D[m] = "access" === m ? {} : i[m];
          for (var m in i.access) D.access[m] = i.access[m];
          D.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(e || null));
          };
          var g = (0, r[p])(
            "accessor" === l ? { get: d.get, set: d.set } : d[c],
            D
          );
          if ("accessor" === l) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g)
              throw TypeError("Object expected");
            (u = a(g.get)) && (d.get = u),
              (u = a(g.set)) && (d.set = u),
              (u = a(g.init)) && s.push(u);
          } else (u = a(g)) && ("field" === l ? s.push(u) : (d[c] = u));
        }
        h && Object.defineProperty(h, i.name, d), (f = !0);
      }
      function h(e, n, r) {
        for (var i = arguments.length > 2, s = 0; s < n.length; s++)
          r = i ? n[s].call(e, r) : n[s].call(e);
        return i ? r : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, n, r) {
        return (
          "symbol" == typeof n &&
            (n = n.description ? "[".concat(n.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", n) : n,
          })
        );
      }
      function p(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, n);
      }
      function D(e, n, r, i) {
        return new (r || (r = Promise))(function (s, o) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var n;
            e.done
              ? s(e.value)
              : ((n = e.value) instanceof r
                  ? n
                  : new r(function (e) {
                      e(n);
                    })
                ).then(a, u);
          }
          l((i = i.apply(e, n || [])).next());
        });
      }
      function m(e, n) {
        var r,
          i,
          s,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return function (l) {
            return (function (u) {
              if (r) throw TypeError("Generator is already executing.");
              for (; o && ((o = 0), u[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & u[0]
                          ? i.return
                          : u[0]
                          ? i.throw || ((s = i.return) && s.call(i), 0)
                          : i.next) &&
                      !(s = s.call(i, u[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (u = [2 & u[0], s.value]), u[0])) {
                    case 0:
                    case 1:
                      s = u;
                      break;
                    case 4:
                      return a.label++, { value: u[1], done: !1 };
                    case 5:
                      a.label++, (i = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = a.trys).length > 0 && s[s.length - 1]) &&
                        (6 === u[0] || 2 === u[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === u[0] && (!s || (u[1] > s[0] && u[1] < s[3]))) {
                        a.label = u[1];
                        break;
                      }
                      if (6 === u[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = u);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(u);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  u = n.call(e, a);
                } catch (e) {
                  (u = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
          };
        }
      }
      var g = Object.create
        ? function (e, n, r, i) {
            void 0 === i && (i = r);
            var s = Object.getOwnPropertyDescriptor(n, r);
            (!s ||
              ("get" in s ? !n.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return n[r];
                },
              }),
              Object.defineProperty(e, i, s);
          }
        : function (e, n, r, i) {
            void 0 === i && (i = r), (e[i] = n[r]);
          };
      function v(e, n) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(n, r) ||
            g(n, e, r);
      }
      function y(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          r = n && e[n],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          n ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function _(e, n) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          o = r.call(e),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(i = o.next()).done; )
            a.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (s) throw s.error;
          }
        }
        return a;
      }
      function x() {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(_(arguments[n]));
        return e;
      }
      function C() {
        for (var e = 0, n = 0, r = arguments.length; n < r; n++)
          e += arguments[n].length;
        for (var i = Array(e), s = 0, n = 0; n < r; n++)
          for (var o = arguments[n], a = 0, u = o.length; a < u; a++, s++)
            i[s] = o[a];
        return i;
      }
      function E(e, n, r) {
        if (r || 2 == arguments.length)
          for (var i, s = 0, o = n.length; s < o; s++)
            (!i && s in n) ||
              (i || (i = Array.prototype.slice.call(n, 0, s)), (i[s] = n[s]));
        return e.concat(i || Array.prototype.slice.call(n));
      }
      function F(e) {
        return this instanceof F ? ((this.v = e), this) : new F(e);
      }
      function b(e, n, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          s = r.apply(e, n || []),
          o = [];
        return (
          (i = {}),
          a("next"),
          a("throw"),
          a("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function a(e) {
          s[e] &&
            (i[e] = function (n) {
              return new Promise(function (r, i) {
                o.push([e, n, r, i]) > 1 || u(e, n);
              });
            });
        }
        function u(e, n) {
          try {
            var r;
            (r = s[e](n)).value instanceof F
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
        }
        function l(e) {
          u("next", e);
        }
        function c(e) {
          u("throw", e);
        }
        function h(e, n) {
          e(n), o.shift(), o.length && u(o[0][0], o[0][1]);
        }
      }
      function w(e) {
        var n, r;
        return (
          (n = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (n[Symbol.iterator] = function () {
            return this;
          }),
          n
        );
        function i(i, s) {
          n[i] = e[i]
            ? function (n) {
                return (r = !r)
                  ? { value: F(e[i](n)), done: !1 }
                  : s
                  ? s(n)
                  : n;
              }
            : s;
        }
      }
      function A(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = y(e)),
            (n = {}),
            i("next"),
            i("throw"),
            i("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function i(r) {
          n[r] =
            e[r] &&
            function (n) {
              return new Promise(function (i, s) {
                !(function (e, n, r, i) {
                  Promise.resolve(i).then(function (n) {
                    e({ value: n, done: r });
                  }, n);
                })(i, s, (n = e[r](n)).done, n.value);
              });
            };
        }
      }
      function T(e, n) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: n })
            : (e.raw = n),
          e
        );
      }
      var S = Object.create
        ? function (e, n) {
            Object.defineProperty(e, "default", { enumerable: !0, value: n });
          }
        : function (e, n) {
            e.default = n;
          };
      function j(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              g(n, e, r);
        return S(n, e), n;
      }
      function P(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function B(e, n, r, i) {
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !i : !n.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : n.get(e);
      }
      function k(e, n, r, i, s) {
        if ("m" === i) throw TypeError("Private method is not writable");
        if ("a" === i && !s)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !s : !n.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === i ? s.call(e, r) : s ? (s.value = r) : n.set(e, r), r;
      }
      function M(e, n) {
        if (null === n || ("object" != typeof n && "function" != typeof n))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? n === e : e.has(n);
      }
    },
    3250: function (e, n, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = r(5784),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
                );
              },
        o = i.useState,
        a = i.useEffect,
        u = i.useLayoutEffect,
        l = i.useDebugValue;
      function c(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var r = n();
          return !s(e, r);
        } catch (e) {
          return !0;
        }
      }
      var h =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, n) {
              return n();
            }
          : function (e, n) {
              var r = n(),
                i = o({ inst: { value: r, getSnapshot: n } }),
                s = i[0].inst,
                h = i[1];
              return (
                u(
                  function () {
                    (s.value = r), (s.getSnapshot = n), c(s) && h({ inst: s });
                  },
                  [e, r, n]
                ),
                a(
                  function () {
                    return (
                      c(s) && h({ inst: s }),
                      e(function () {
                        c(s) && h({ inst: s });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      n.useSyncExternalStore =
        void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h;
    },
    139: function (e, n, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = r(5784),
        s = r(1688),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
                );
              },
        a = s.useSyncExternalStore,
        u = i.useRef,
        l = i.useEffect,
        c = i.useMemo,
        h = i.useDebugValue;
      n.useSyncExternalStoreWithSelector = function (e, n, r, i, s) {
        var d = u(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        d = c(
          function () {
            function e(e) {
              if (!l) {
                if (
                  ((l = !0), (a = e), (e = i(e)), void 0 !== s && f.hasValue)
                ) {
                  var n = f.value;
                  if (s(n, e)) return (u = n);
                }
                return (u = e);
              }
              if (((n = u), o(a, e))) return n;
              var r = i(e);
              return void 0 !== s && s(n, r) ? n : ((a = e), (u = r));
            }
            var a,
              u,
              l = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return e(n());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [n, r, i, s]
        );
        var p = a(e, d[0], d[1]);
        return (
          l(
            function () {
              (f.hasValue = !0), (f.value = p);
            },
            [p]
          ),
          h(p),
          p
        );
      };
    },
    1688: function (e, n, r) {
      "use strict";
      e.exports = r(3250);
    },
    2798: function (e, n, r) {
      "use strict";
      e.exports = r(139);
    },
    1526: function (e, n, r) {
      "use strict";
      r.d(n, {
        M: function () {
          return m;
        },
      });
      var i = r(5784),
        s = r(404),
        o = r(8868);
      function a() {
        let e = (0, i.useRef)(!1);
        return (
          (0, o.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var u = r(240),
        l = r(6681);
      class c extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let n = this.props.childRef.current;
          if (n && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = n.offsetHeight || 0),
              (e.width = n.offsetWidth || 0),
              (e.top = n.offsetTop),
              (e.left = n.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({ children: e, isPresent: n }) {
        let r = (0, i.useId)(),
          s = (0, i.useRef)(null),
          o = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: i, top: a, left: u } = o.current;
            if (n || !s.current || !e || !i) return;
            s.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [n]),
          i.createElement(
            c,
            { isPresent: n, childRef: s, sizeRef: o },
            i.cloneElement(e, { ref: s })
          )
        );
      }
      let d = ({
        children: e,
        initial: n,
        isPresent: r,
        onExitComplete: s,
        custom: o,
        presenceAffectsLayout: a,
        mode: c,
      }) => {
        let d = (0, l.h)(f),
          p = (0, i.useId)(),
          D = (0, i.useMemo)(
            () => ({
              id: p,
              initial: n,
              isPresent: r,
              custom: o,
              onExitComplete: (e) => {
                for (let n of (d.set(e, !0), d.values())) if (!n) return;
                s && s();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            a ? void 0 : [r]
          );
        return (
          (0, i.useMemo)(() => {
            d.forEach((e, n) => d.set(n, !1));
          }, [r]),
          i.useEffect(() => {
            r || d.size || !s || s();
          }, [r]),
          "popLayout" === c && (e = i.createElement(h, { isPresent: r }, e)),
          i.createElement(u.O.Provider, { value: D }, e)
        );
      };
      function f() {
        return new Map();
      }
      var p = r(5364);
      let D = (e) => e.key || "",
        m = ({
          children: e,
          custom: n,
          initial: r = !0,
          onExitComplete: u,
          exitBeforeEnter: l,
          presenceAffectsLayout: c = !0,
          mode: h = "sync",
        }) => {
          var f;
          l && (h = "wait");
          let [m] = (function () {
              let e = a(),
                [n, r] = (0, i.useState)(0),
                o = (0, i.useCallback)(() => {
                  e.current && r(n + 1);
                }, [n]),
                u = (0, i.useCallback)(() => s.Z_.postRender(o), [o]);
              return [u, n];
            })(),
            g = (0, i.useContext)(p.p).forceRender;
          g && (m = g);
          let v = a(),
            y = (function (e) {
              let n = [];
              return (
                i.Children.forEach(e, (e) => {
                  (0, i.isValidElement)(e) && n.push(e);
                }),
                n
              );
            })(e),
            _ = y,
            x = new Set(),
            C = (0, i.useRef)(_),
            E = (0, i.useRef)(new Map()).current,
            F = (0, i.useRef)(!0);
          if (
            ((0, o.L)(() => {
              (F.current = !1),
                (function (e, n) {
                  e.forEach((e) => {
                    let r = D(e);
                    n.set(r, e);
                  });
                })(y, E),
                (C.current = _);
            }),
            (f = () => {
              (F.current = !0), E.clear(), x.clear();
            }),
            (0, i.useEffect)(() => () => f(), []),
            F.current)
          )
            return i.createElement(
              i.Fragment,
              null,
              _.map((e) =>
                i.createElement(
                  d,
                  {
                    key: D(e),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: c,
                    mode: h,
                  },
                  e
                )
              )
            );
          _ = [..._];
          let b = C.current.map(D),
            w = y.map(D),
            A = b.length;
          for (let e = 0; e < A; e++) {
            let n = b[e];
            -1 === w.indexOf(n) && x.add(n);
          }
          return (
            "wait" === h && x.size && (_ = []),
            x.forEach((e) => {
              if (-1 !== w.indexOf(e)) return;
              let r = E.get(e);
              if (!r) return;
              let s = b.indexOf(e),
                o = () => {
                  E.delete(e), x.delete(e);
                  let n = C.current.findIndex((n) => n.key === e);
                  if ((C.current.splice(n, 1), !x.size)) {
                    if (((C.current = y), !1 === v.current)) return;
                    m(), u && u();
                  }
                };
              _.splice(
                s,
                0,
                i.createElement(
                  d,
                  {
                    key: D(r),
                    isPresent: !1,
                    onExitComplete: o,
                    custom: n,
                    presenceAffectsLayout: c,
                    mode: h,
                  },
                  r
                )
              );
            }),
            (_ = _.map((e) => {
              let n = e.key;
              return x.has(n)
                ? e
                : i.createElement(
                    d,
                    {
                      key: D(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: h,
                    },
                    e
                  );
            })),
            i.createElement(
              i.Fragment,
              null,
              x.size ? _ : _.map((e) => (0, i.cloneElement)(e))
            )
          );
        };
    },
    5364: function (e, n, r) {
      "use strict";
      r.d(n, {
        p: function () {
          return s;
        },
      });
      var i = r(5784);
      let s = (0, i.createContext)({});
    },
    240: function (e, n, r) {
      "use strict";
      r.d(n, {
        O: function () {
          return s;
        },
      });
      var i = r(5784);
      let s = (0, i.createContext)(null);
    },
    7367: function (e, n, r) {
      "use strict";
      r.d(n, {
        w: function () {
          return i;
        },
      });
      let i = { delta: 0, timestamp: 0 };
    },
    404: function (e, n, r) {
      "use strict";
      r.d(n, {
        qY: function () {
          return p;
        },
        iW: function () {
          return D;
        },
        Z_: function () {
          return f;
        },
      });
      let i = (1 / 60) * 1e3,
        s =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(s()), i);
      var a = r(7367);
      let u = !0,
        l = !1,
        c = !1,
        h = ["read", "update", "preRender", "render", "postRender"],
        d = h.reduce(
          (e, n) => (
            (e[n] = (function (e) {
              let n = [],
                r = [],
                i = 0,
                s = !1,
                o = !1,
                a = new WeakSet(),
                u = {
                  schedule: (e, o = !1, u = !1) => {
                    let l = u && s,
                      c = l ? n : r;
                    return (
                      o && a.add(e),
                      -1 === c.indexOf(e) &&
                        (c.push(e), l && s && (i = n.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    let n = r.indexOf(e);
                    -1 !== n && r.splice(n, 1), a.delete(e);
                  },
                  process: (l) => {
                    if (s) {
                      o = !0;
                      return;
                    }
                    if (
                      ((s = !0),
                      ([n, r] = [r, n]),
                      (r.length = 0),
                      (i = n.length))
                    )
                      for (let r = 0; r < i; r++) {
                        let i = n[r];
                        i(l), a.has(i) && (u.schedule(i), e());
                      }
                    (s = !1), o && ((o = !1), u.process(l));
                  },
                };
              return u;
            })(() => (l = !0))),
            e
          ),
          {}
        ),
        f = h.reduce((e, n) => {
          let r = d[n];
          return (
            (e[n] = (e, n = !1, i = !1) => (l || v(), r.schedule(e, n, i))), e
          );
        }, {}),
        p = h.reduce((e, n) => ((e[n] = d[n].cancel), e), {}),
        D = h.reduce((e, n) => ((e[n] = () => d[n].process(a.w)), e), {}),
        m = (e) => d[e].process(a.w),
        g = (e) => {
          (l = !1),
            (a.w.delta = u ? i : Math.max(Math.min(e - a.w.timestamp, 40), 1)),
            (a.w.timestamp = e),
            (c = !0),
            h.forEach(m),
            (c = !1),
            l && ((u = !1), o(g));
        },
        v = () => {
          (l = !0), (u = !0), c || o(g);
        };
    },
    9537: function (e, n, r) {
      "use strict";
      r.d(n, {
        E: function () {
          return iM;
        },
      });
      var i,
        s,
        o,
        a,
        u,
        l = r(5784);
      let c = (0, l.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        h = (0, l.createContext)({});
      var d = r(240),
        f = r(8868);
      let p = (0, l.createContext)({ strict: !1 });
      function D(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function m(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function g(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let v = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function y(e) {
        return g(e.animate) || v.some((n) => m(e[n]));
      }
      function _(e) {
        return Boolean(y(e) || e.variants);
      }
      function x(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let C = {
          animation: [
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        E = {};
      for (let e in C) E[e] = { isEnabled: (n) => C[e].some((e) => !!n[e]) };
      var F = r(1741),
        b = r(6681);
      let w = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        A = 1;
      var T = r(5364);
      let S = (0, l.createContext)({}),
        j = Symbol.for("motionComponentSymbol"),
        P = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function B(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (P.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let k = {},
        M = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        O = new Set(M);
      function R(e, { layout: n, layoutId: r }) {
        return (
          O.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!k[e] || "opacity" === e))
        );
      }
      let L = (e) => Boolean(e && e.getVelocity),
        N = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        V = M.length;
      function I(e) {
        return e.startsWith("--");
      }
      let z = (e, n) => (n && "number" == typeof e ? n.transform(e) : e),
        U = (e, n, r) => Math.min(Math.max(r, e), n),
        Z = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        W = { ...Z, transform: (e) => U(0, 1, e) },
        H = { ...Z, default: 1 },
        q = (e) => Math.round(1e5 * e) / 1e5,
        Y = /(-)?([\d]*\.?[\d])+/g,
        $ =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        X =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function G(e) {
        return "string" == typeof e;
      }
      let K = (e) => ({
          test: (n) => G(n) && n.endsWith(e) && 1 === n.split(" ").length,
          parse: parseFloat,
          transform: (n) => `${n}${e}`,
        }),
        J = K("deg"),
        Q = K("%"),
        tt = K("px"),
        te = K("vh"),
        tn = K("vw"),
        tr = {
          ...Q,
          parse: (e) => Q.parse(e) / 100,
          transform: (e) => Q.transform(100 * e),
        },
        ti = { ...Z, transform: Math.round },
        ts = {
          borderWidth: tt,
          borderTopWidth: tt,
          borderRightWidth: tt,
          borderBottomWidth: tt,
          borderLeftWidth: tt,
          borderRadius: tt,
          radius: tt,
          borderTopLeftRadius: tt,
          borderTopRightRadius: tt,
          borderBottomRightRadius: tt,
          borderBottomLeftRadius: tt,
          width: tt,
          maxWidth: tt,
          height: tt,
          maxHeight: tt,
          size: tt,
          top: tt,
          right: tt,
          bottom: tt,
          left: tt,
          padding: tt,
          paddingTop: tt,
          paddingRight: tt,
          paddingBottom: tt,
          paddingLeft: tt,
          margin: tt,
          marginTop: tt,
          marginRight: tt,
          marginBottom: tt,
          marginLeft: tt,
          rotate: J,
          rotateX: J,
          rotateY: J,
          rotateZ: J,
          scale: H,
          scaleX: H,
          scaleY: H,
          scaleZ: H,
          skew: J,
          skewX: J,
          skewY: J,
          distance: tt,
          translateX: tt,
          translateY: tt,
          translateZ: tt,
          x: tt,
          y: tt,
          z: tt,
          perspective: tt,
          transformPerspective: tt,
          opacity: W,
          originX: tr,
          originY: tr,
          originZ: tt,
          zIndex: ti,
          fillOpacity: W,
          strokeOpacity: W,
          numOctaves: ti,
        };
      function to(e, n, r, i) {
        let { style: s, vars: o, transform: a, transformOrigin: u } = e,
          l = !1,
          c = !1,
          h = !0;
        for (let e in n) {
          let r = n[e];
          if (I(e)) {
            o[e] = r;
            continue;
          }
          let i = ts[e],
            d = z(r, i);
          if (O.has(e)) {
            if (((l = !0), (a[e] = d), !h)) continue;
            r !== (i.default || 0) && (h = !1);
          } else e.startsWith("origin") ? ((c = !0), (u[e] = d)) : (s[e] = d);
        }
        if (
          (!n.transform &&
            (l || i
              ? (s.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: r = !0,
                  },
                  i,
                  s
                ) {
                  let o = "";
                  for (let n = 0; n < V; n++) {
                    let r = M[n];
                    if (void 0 !== e[r]) {
                      let n = N[r] || r;
                      o += `${n}(${e[r]}) `;
                    }
                  }
                  return (
                    n && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    s ? (o = s(e, i ? "" : o)) : r && i && (o = "none"),
                    o
                  );
                })(e.transform, r, h, i))
              : s.transform && (s.transform = "none")),
          c)
        ) {
          let { originX: e = "50%", originY: n = "50%", originZ: r = 0 } = u;
          s.transformOrigin = `${e} ${n} ${r}`;
        }
      }
      let ta = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tu(e, n, r) {
        for (let i in n) L(n[i]) || R(i, r) || (e[i] = n[i]);
      }
      function tl(e, n, r) {
        let i = {},
          s = (function (e, n, r) {
            let i = e.style || {},
              s = {};
            return (
              tu(s, i, e),
              Object.assign(
                s,
                (function ({ transformTemplate: e }, n, r) {
                  return (0, l.useMemo)(() => {
                    let i = ta();
                    return (
                      to(i, n, { enableHardwareAcceleration: !r }, e),
                      Object.assign({}, i.vars, i.style)
                    );
                  }, [n]);
                })(e, n, r)
              ),
              e.transformValues ? e.transformValues(s) : s
            );
          })(e, n, r);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((i.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (i.tabIndex = 0),
          (i.style = s),
          i
        );
      }
      let tc = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function th(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          tc.has(e)
        );
      }
      let td = (e) => !th(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (td = (e) => (e.startsWith("on") ? !th(e) : i(e)));
      } catch (e) {}
      function tf(e, n, r) {
        return "string" == typeof e ? e : tt.transform(n + r * e);
      }
      let tp = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tD = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tm(
        e,
        {
          attrX: n,
          attrY: r,
          originX: i,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: u = 0,
          ...l
        },
        c,
        h,
        d
      ) {
        if ((to(e, l, c, d), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: p, dimensions: D } = e;
        f.transform && (D && (p.transform = f.transform), delete f.transform),
          D &&
            (void 0 !== i || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (e, n, r) {
              let i = tf(n, e.x, e.width),
                s = tf(r, e.y, e.height);
              return `${i} ${s}`;
            })(D, void 0 !== i ? i : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== n && (f.x = n),
          void 0 !== r && (f.y = r),
          void 0 !== o &&
            (function (e, n, r = 1, i = 0, s = !0) {
              e.pathLength = 1;
              let o = s ? tp : tD;
              e[o.offset] = tt.transform(-i);
              let a = tt.transform(n),
                u = tt.transform(r);
              e[o.array] = `${a} ${u}`;
            })(f, o, a, u, !1);
      }
      let tg = () => ({ ...ta(), attrs: {} }),
        tv = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function ty(e, n, r, i) {
        let s = (0, l.useMemo)(() => {
          let r = tg();
          return (
            tm(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              tv(i),
              e.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [n]);
        if (e.style) {
          let n = {};
          tu(n, e.style, e), (s.style = { ...n, ...s.style });
        }
        return s;
      }
      let t_ = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tx(e, { style: n, vars: r }, i, s) {
        for (let o in (Object.assign(e.style, n, s && s.getProjectionStyles(i)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let tC = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tE(e, n, r, i) {
        for (let r in (tx(e, n, void 0, i), n.attrs))
          e.setAttribute(tC.has(r) ? r : t_(r), n.attrs[r]);
      }
      function tF(e, n) {
        let { style: r } = e,
          i = {};
        for (let s in r)
          (L(r[s]) || (n.style && L(n.style[s])) || R(s, e)) && (i[s] = r[s]);
        return i;
      }
      function tb(e, n) {
        let r = tF(e, n);
        for (let i in e)
          if (L(e[i]) || L(n[i])) {
            let n = "x" === i || "y" === i ? "attr" + i.toUpperCase() : i;
            r[n] = e[i];
          }
        return r;
      }
      function tw(e, n, r, i = {}, s = {}) {
        return (
          "function" == typeof n && (n = n(void 0 !== r ? r : e.custom, i, s)),
          "string" == typeof n && (n = e.variants && e.variants[n]),
          "function" == typeof n && (n = n(void 0 !== r ? r : e.custom, i, s)),
          n
        );
      }
      let tA = (e) => Array.isArray(e),
        tT = (e) => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        tS = (e) => (tA(e) ? e[e.length - 1] || 0 : e);
      function tj(e) {
        let n = L(e) ? e.get() : e;
        return tT(n) ? n.toValue() : n;
      }
      let tP = (e) => (n, r) => {
          let i = (0, l.useContext)(h),
            s = (0, l.useContext)(d.O),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: n,
                  onMount: r,
                },
                i,
                s,
                o
              ) {
                let a = {
                  latestValues: (function (e, n, r, i) {
                    let s = {},
                      o = i(e, {});
                    for (let e in o) s[e] = tj(o[e]);
                    let { initial: a, animate: u } = e,
                      l = y(e),
                      c = _(e);
                    n &&
                      c &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === a && (a = n.initial),
                      void 0 === u && (u = n.animate));
                    let h = !!r && !1 === r.initial;
                    h = h || !1 === a;
                    let d = h ? u : a;
                    if (d && "boolean" != typeof d && !g(d)) {
                      let n = Array.isArray(d) ? d : [d];
                      n.forEach((n) => {
                        let r = tw(e, n);
                        if (!r) return;
                        let { transitionEnd: i, transition: o, ...a } = r;
                        for (let e in a) {
                          let n = a[e];
                          if (Array.isArray(n)) {
                            let e = h ? n.length - 1 : 0;
                            n = n[e];
                          }
                          null !== n && (s[e] = n);
                        }
                        for (let e in i) s[e] = i[e];
                      });
                    }
                    return s;
                  })(i, s, o, e),
                  renderState: n(),
                };
                return r && (a.mount = (e) => r(i, e, a)), a;
              })(e, n, i, s);
          return r ? o() : (0, b.h)(o);
        },
        tB = {
          useVisualState: tP({
            scrapeMotionValuesFromProps: tb,
            createRenderState: tg,
            onMount: (e, n, { renderState: r, latestValues: i }) => {
              try {
                r.dimensions =
                  "function" == typeof n.getBBox
                    ? n.getBBox()
                    : n.getBoundingClientRect();
              } catch (e) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tm(
                r,
                i,
                { enableHardwareAcceleration: !1 },
                tv(n.tagName),
                e.transformTemplate
              ),
                tE(n, r);
            },
          }),
        },
        tk = {
          useVisualState: tP({
            scrapeMotionValuesFromProps: tF,
            createRenderState: ta,
          }),
        };
      function tM(e, n, r, i = { passive: !0 }) {
        return e.addEventListener(n, r, i), () => e.removeEventListener(n, r);
      }
      let tO = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function tR(e, n = "page") {
        return { point: { x: e[n + "X"], y: e[n + "Y"] } };
      }
      let tL = (e) => (n) => tO(n) && e(n, tR(n));
      function tN(e, n, r, i) {
        return tM(e, n, tL(r), i);
      }
      ((s = a || (a = {})).Animate = "animate"),
        (s.Hover = "whileHover"),
        (s.Tap = "whileTap"),
        (s.Drag = "whileDrag"),
        (s.Focus = "whileFocus"),
        (s.InView = "whileInView"),
        (s.Exit = "exit");
      let tV = (e, n) => (r) => n(e(r)),
        tI = (...e) => e.reduce(tV);
      function tz(e) {
        let n = null;
        return () => {
          let r = () => {
            n = null;
          };
          return null === n && ((n = e), r);
        };
      }
      let tU = tz("dragHorizontal"),
        tZ = tz("dragVertical");
      function tW(e) {
        let n = !1;
        if ("y" === e) n = tZ();
        else if ("x" === e) n = tU();
        else {
          let e = tU(),
            r = tZ();
          e && r
            ? (n = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return n;
      }
      function tH() {
        let e = tW(!0);
        return !e || (e(), !1);
      }
      class tq {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function tY(e, n) {
        let r = "onHover" + (n ? "Start" : "End"),
          i = (i, s) => {
            if ("touch" === i.type || tH()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive(a.Hover, n),
              o[r] && o[r](i, s);
          };
        return tN(e.current, "pointer" + (n ? "enter" : "leave"), i, {
          passive: !e.getProps()[r],
        });
      }
      let t$ = (e, n) => !!n && (e === n || t$(e, n.parentElement)),
        tX = (e) => e;
      function tG(e, n) {
        if (!n) return;
        let r = new PointerEvent("pointer" + e);
        n(r, tR(r));
      }
      let tK = new WeakMap(),
        tJ = new WeakMap(),
        tQ = (e) => {
          let n = tK.get(e.target);
          n && n(e);
        },
        t0 = (e) => {
          e.forEach(tQ);
        },
        t1 = { some: 0, all: 1 };
      function t2(e, n) {
        if (!Array.isArray(n)) return !1;
        let r = n.length;
        if (r !== e.length) return !1;
        for (let i = 0; i < r; i++) if (n[i] !== e[i]) return !1;
        return !0;
      }
      let t3 = (e) => /^\-?\d*\.?\d+$/.test(e),
        t6 = (e) => /^0[^.\s]+$/.test(e);
      var t8 = r(3234);
      let t5 = (e, n) => (r) =>
          Boolean(
            (G(r) && X.test(r) && r.startsWith(e)) ||
              (n && Object.prototype.hasOwnProperty.call(r, n))
          ),
        t4 = (e, n, r) => (i) => {
          if (!G(i)) return i;
          let [s, o, a, u] = i.match(Y);
          return {
            [e]: parseFloat(s),
            [n]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== u ? parseFloat(u) : 1,
          };
        },
        t7 = (e) => U(0, 255, e),
        t9 = { ...Z, transform: (e) => Math.round(t7(e)) },
        et = {
          test: t5("rgb", "red"),
          parse: t4("red", "green", "blue"),
          transform: ({ red: e, green: n, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            t9.transform(e) +
            ", " +
            t9.transform(n) +
            ", " +
            t9.transform(r) +
            ", " +
            q(W.transform(i)) +
            ")",
        },
        ee = {
          test: t5("#"),
          parse: function (e) {
            let n = "",
              r = "",
              i = "",
              s = "";
            return (
              e.length > 5
                ? ((n = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (s = e.substring(7, 9)))
                : ((n = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (s = e.substring(4, 5)),
                  (n += n),
                  (r += r),
                  (i += i),
                  (s += s)),
              {
                red: parseInt(n, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: et.transform,
        },
        en = {
          test: t5("hsl", "hue"),
          parse: t4("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: n, lightness: r, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            Q.transform(q(n)) +
            ", " +
            Q.transform(q(r)) +
            ", " +
            q(W.transform(i)) +
            ")",
        },
        er = {
          test: (e) => et.test(e) || ee.test(e) || en.test(e),
          parse: (e) =>
            et.test(e) ? et.parse(e) : en.test(e) ? en.parse(e) : ee.parse(e),
          transform: (e) =>
            G(e)
              ? e
              : e.hasOwnProperty("red")
              ? et.transform(e)
              : en.transform(e),
        },
        ei = "${c}",
        es = "${n}";
      function eo(e) {
        "number" == typeof e && (e = `${e}`);
        let n = [],
          r = 0,
          i = 0,
          s = e.match($);
        s &&
          ((r = s.length), (e = e.replace($, ei)), n.push(...s.map(er.parse)));
        let o = e.match(Y);
        return (
          o &&
            ((i = o.length), (e = e.replace(Y, es)), n.push(...o.map(Z.parse))),
          { values: n, numColors: r, numNumbers: i, tokenised: e }
        );
      }
      function ea(e) {
        return eo(e).values;
      }
      function eu(e) {
        let { values: n, numColors: r, tokenised: i } = eo(e),
          s = n.length;
        return (e) => {
          let n = i;
          for (let i = 0; i < s; i++)
            n = n.replace(
              i < r ? ei : es,
              i < r ? er.transform(e[i]) : q(e[i])
            );
          return n;
        };
      }
      let el = (e) => ("number" == typeof e ? 0 : e),
        ec = {
          test: function (e) {
            var n, r;
            return (
              isNaN(e) &&
              G(e) &&
              ((null === (n = e.match(Y)) || void 0 === n
                ? void 0
                : n.length) || 0) +
                ((null === (r = e.match($)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: ea,
          createTransformer: eu,
          getAnimatableNone: function (e) {
            let n = ea(e),
              r = eu(e);
            return r(n.map(el));
          },
        },
        eh = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ed(e) {
        let [n, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === n) return e;
        let [i] = r.match(Y) || [];
        if (!i) return e;
        let s = r.replace(i, ""),
          o = eh.has(n) ? 1 : 0;
        return i !== r && (o *= 100), n + "(" + o + s + ")";
      }
      let ef = /([a-z-]*)\(.*?\)/g,
        ep = {
          ...ec,
          getAnimatableNone: (e) => {
            let n = e.match(ef);
            return n ? n.map(ed).join(" ") : e;
          },
        },
        eD = {
          ...ts,
          color: er,
          backgroundColor: er,
          outlineColor: er,
          fill: er,
          stroke: er,
          borderColor: er,
          borderTopColor: er,
          borderRightColor: er,
          borderBottomColor: er,
          borderLeftColor: er,
          filter: ep,
          WebkitFilter: ep,
        },
        em = (e) => eD[e];
      function eg(e, n) {
        let r = em(e);
        return (
          r !== ep && (r = ec),
          r.getAnimatableNone ? r.getAnimatableNone(n) : void 0
        );
      }
      let ev = (e) => (n) => n.test(e),
        ey = [
          Z,
          tt,
          Q,
          J,
          tn,
          te,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        e_ = (e) => ey.find(ev(e)),
        ex = [...ey, er, ec],
        eC = (e) => ex.find(ev(e));
      function eE(e, n, r) {
        let i = e.getProps();
        return tw(
          i,
          n,
          void 0 !== r ? r : i.custom,
          (function (e) {
            let n = {};
            return e.values.forEach((e, r) => (n[r] = e.get())), n;
          })(e),
          (function (e) {
            let n = {};
            return e.values.forEach((e, r) => (n[r] = e.getVelocity())), n;
          })(e)
        );
      }
      function eF(e) {
        return Boolean(L(e) && e.add);
      }
      let eb = "data-" + t_("framerAppearId");
      var ew = r(4394);
      let eA = (e) => 1e3 * e,
        eT = { current: !1 };
      var eS = r(404);
      let ej = (e) => (n) => n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
        eP = (e) => (n) => 1 - e(1 - n),
        eB = (e) => e * e,
        ek = eP(eB),
        eM = ej(eB),
        eO = (e, n, r) => -r * e + r * n + e;
      function eR(e, n, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (n - e) * 6 * r
          : r < 0.5
          ? n
          : r < 2 / 3
          ? e + (n - e) * (2 / 3 - r) * 6
          : e;
      }
      let eL = (e, n, r) => {
          let i = e * e;
          return Math.sqrt(Math.max(0, r * (n * n - i) + i));
        },
        eN = [ee, et, en],
        eV = (e) => eN.find((n) => n.test(e));
      function eI(e) {
        let n = eV(e);
        (0, ew.k)(
          Boolean(n),
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = n.parse(e);
        return (
          n === en &&
            (r = (function ({ hue: e, saturation: n, lightness: r, alpha: i }) {
              (e /= 360), (r /= 100);
              let s = 0,
                o = 0,
                a = 0;
              if ((n /= 100)) {
                let i = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  u = 2 * r - i;
                (s = eR(u, i, e + 1 / 3)),
                  (o = eR(u, i, e)),
                  (a = eR(u, i, e - 1 / 3));
              } else s = o = a = r;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let ez = (e, n) => {
        let r = eI(e),
          i = eI(n),
          s = { ...r };
        return (e) => (
          (s.red = eL(r.red, i.red, e)),
          (s.green = eL(r.green, i.green, e)),
          (s.blue = eL(r.blue, i.blue, e)),
          (s.alpha = eO(r.alpha, i.alpha, e)),
          et.transform(s)
        );
      };
      function eU(e, n) {
        return "number" == typeof e
          ? (r) => eO(e, n, r)
          : er.test(e)
          ? ez(e, n)
          : eH(e, n);
      }
      let eZ = (e, n) => {
          let r = [...e],
            i = r.length,
            s = e.map((e, r) => eU(e, n[r]));
          return (e) => {
            for (let n = 0; n < i; n++) r[n] = s[n](e);
            return r;
          };
        },
        eW = (e, n) => {
          let r = { ...e, ...n },
            i = {};
          for (let s in r)
            void 0 !== e[s] && void 0 !== n[s] && (i[s] = eU(e[s], n[s]));
          return (e) => {
            for (let n in i) r[n] = i[n](e);
            return r;
          };
        },
        eH = (e, n) => {
          let r = ec.createTransformer(n),
            i = eo(e),
            s = eo(n),
            o = i.numColors === s.numColors && i.numNumbers >= s.numNumbers;
          return o
            ? tI(eZ(i.values, s.values), r)
            : ((0, ew.K)(
                !0,
                `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (r) => `${r > 0 ? n : e}`);
        },
        eq = (e, n, r) => {
          let i = n - e;
          return 0 === i ? 1 : (r - e) / i;
        },
        eY = (e, n) => (r) => eO(e, n, r);
      function e$(e, n, { clamp: r = !0, ease: i, mixer: s } = {}) {
        let o = e.length;
        (0, ew.k)(
          o === n.length,
          "Both input and output ranges must be the same length"
        ),
          (0, ew.k)(
            !i || !Array.isArray(i) || i.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          e[0] > e[o - 1] && ((e = [...e].reverse()), (n = [...n].reverse()));
        let a = (function (e, n, r) {
            let i = [],
              s =
                r ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e) return er.test(e) ? ez : eH;
                  else if (Array.isArray(e)) return eZ;
                  else if ("object" == typeof e) return eW;
                  return eY;
                })(e[0]),
              o = e.length - 1;
            for (let r = 0; r < o; r++) {
              let o = s(e[r], e[r + 1]);
              if (n) {
                let e = Array.isArray(n) ? n[r] : n;
                o = tI(e, o);
              }
              i.push(o);
            }
            return i;
          })(n, i, s),
          u = a.length,
          l = (n) => {
            let r = 0;
            if (u > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
            let i = eq(e[r], e[r + 1], n);
            return a[r](i);
          };
        return r ? (n) => l(U(e[0], e[o - 1], n)) : l;
      }
      let eX = (e, n, r) =>
        (((1 - 3 * r + 3 * n) * e + (3 * r - 6 * n)) * e + 3 * n) * e;
      function eG(e, n, r, i) {
        if (e === n && r === i) return tX;
        let s = (n) =>
          (function (e, n, r, i, s) {
            let o, a;
            let u = 0;
            do
              (o = eX((a = n + (r - n) / 2), i, s) - e) > 0 ? (r = a) : (n = a);
            while (Math.abs(o) > 1e-7 && ++u < 12);
            return a;
          })(n, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : eX(s(e), n, i));
      }
      let eK = (e) => 1 - Math.sin(Math.acos(e)),
        eJ = eP(eK),
        eQ = ej(eJ),
        e0 = eG(0.33, 1.53, 0.69, 0.99),
        e1 = eP(e0),
        e2 = ej(e1),
        e3 = (e) =>
          (e *= 2) < 1 ? 0.5 * e1(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        e6 = {
          linear: tX,
          easeIn: eB,
          easeInOut: eM,
          easeOut: ek,
          circIn: eK,
          circInOut: eQ,
          circOut: eJ,
          backIn: e1,
          backInOut: e2,
          backOut: e0,
          anticipate: e3,
        },
        e8 = (e) => {
          if (Array.isArray(e)) {
            (0, ew.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [n, r, i, s] = e;
            return eG(n, r, i, s);
          }
          return "string" == typeof e
            ? ((0, ew.k)(void 0 !== e6[e], `Invalid easing type '${e}'`), e6[e])
            : e;
        },
        e5 = (e) => Array.isArray(e) && "number" != typeof e[0];
      function e4({ keyframes: e, ease: n = eM, times: r, duration: i = 300 }) {
        e = [...e];
        let s = e5(n) ? n.map(e8) : e8(n),
          o = { done: !1, value: e[0] },
          a = (
            r && r.length === e.length
              ? r
              : (function (e) {
                  let n = e.length;
                  return e.map((e, r) => (0 !== r ? r / (n - 1) : 0));
                })(e)
          ).map((e) => e * i);
        function u() {
          var n;
          return e$(a, e, {
            ease: Array.isArray(s)
              ? s
              : (n = e).map(() => s || eM).splice(0, n.length - 1),
          });
        }
        let l = u();
        return {
          next: (e) => ((o.value = l(e)), (o.done = e >= i), o),
          flipTarget: () => {
            e.reverse(), (l = u());
          },
        };
      }
      function e7(e, n) {
        return e * Math.sqrt(1 - n * n);
      }
      var e9 = r(3038);
      let nt = ["duration", "bounce"],
        ne = ["stiffness", "damping", "mass"];
      function nn(e, n) {
        return n.some((n) => void 0 !== e[n]);
      }
      function nr({ keyframes: e, restDelta: n, restSpeed: r, ...i }) {
        let s = e[0],
          o = e[e.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: u,
            damping: l,
            mass: c,
            velocity: h,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (e) {
            let n = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!nn(e, ne) && nn(e, nt)) {
              let r = (function ({
                duration: e = 800,
                bounce: n = 0.25,
                velocity: r = 0,
                mass: i = 1,
              }) {
                let s, o;
                (0, ew.K)(
                  e <= 1e4,
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - n;
                (a = U(0.05, 1, a)),
                  (e = U(0.01, 10, e / 1e3)),
                  a < 1
                    ? ((s = (n) => {
                        let i = n * a,
                          s = i * e,
                          o = e7(n, a);
                        return 0.001 - ((i - r) / o) * Math.exp(-s);
                      }),
                      (o = (n) => {
                        let i = n * a,
                          o = i * e,
                          u = Math.pow(a, 2) * Math.pow(n, 2) * e,
                          l = e7(Math.pow(n, 2), a),
                          c = -s(n) + 0.001 > 0 ? -1 : 1;
                        return (c * ((o * r + r - u) * Math.exp(-o))) / l;
                      }))
                    : ((s = (n) => {
                        let i = Math.exp(-n * e),
                          s = (n - r) * e + 1;
                        return -0.001 + i * s;
                      }),
                      (o = (n) => {
                        let i = Math.exp(-n * e),
                          s = (r - n) * (e * e);
                        return i * s;
                      }));
                let u = 5 / e,
                  l = (function (e, n, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= e(i) / n(i);
                    return i;
                  })(s, o, u);
                if (((e *= 1e3), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let n = Math.pow(l, 2) * i;
                  return {
                    stiffness: n,
                    damping: 2 * a * Math.sqrt(i * n),
                    duration: e,
                  };
                }
              })(e);
              (n = {
                ...n,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return n;
          })(i),
          p = ni,
          D = h ? -(h / 1e3) : 0,
          m = l / (2 * Math.sqrt(u * c));
        function g() {
          let e = o - s,
            i = Math.sqrt(u / c) / 1e3,
            a = 5 > Math.abs(e);
          if ((r || (r = a ? 0.01 : 2), n || (n = a ? 0.005 : 0.5), m < 1)) {
            let n = e7(i, m);
            p = (r) =>
              o -
              Math.exp(-m * i * r) *
                (((D + m * i * e) / n) * Math.sin(n * r) + e * Math.cos(n * r));
          } else if (1 === m)
            p = (n) => o - Math.exp(-i * n) * (e + (D + i * e) * n);
          else {
            let n = i * Math.sqrt(m * m - 1);
            p = (r) => {
              let s = Math.min(n * r, 300);
              return (
                o -
                (Math.exp(-m * i * r) *
                  ((D + m * i * e) * Math.sinh(s) + n * e * Math.cosh(s))) /
                  n
              );
            };
          }
        }
        return (
          g(),
          {
            next: (e) => {
              let i = p(e);
              if (f) a.done = e >= d;
              else {
                let s = D;
                if (0 !== e) {
                  if (m < 1) {
                    let n = Math.max(0, e - 5);
                    s = (0, e9.R)(i - p(n), e - n);
                  } else s = 0;
                }
                let u = Math.abs(s) <= r,
                  l = Math.abs(o - i) <= n;
                a.done = u && l;
              }
              return (a.value = a.done ? o : i), a;
            },
            flipTarget: () => {
              (D = -D), ([s, o] = [o, s]), g();
            },
          }
        );
      }
      nr.needsInterpolation = (e, n) =>
        "string" == typeof e || "string" == typeof n;
      let ni = (e) => 0,
        ns = {
          decay: function ({
            keyframes: e = [0],
            velocity: n = 0,
            power: r = 0.8,
            timeConstant: i = 350,
            restDelta: s = 0.5,
            modifyTarget: o,
          }) {
            let a = e[0],
              u = { done: !1, value: a },
              l = r * n,
              c = a + l,
              h = void 0 === o ? c : o(c);
            return (
              h !== c && (l = h - a),
              {
                next: (e) => {
                  let n = -l * Math.exp(-e / i);
                  return (
                    (u.done = !(n > s || n < -s)),
                    (u.value = u.done ? h : h + n),
                    u
                  );
                },
                flipTarget: () => {},
              }
            );
          },
          keyframes: e4,
          tween: e4,
          spring: nr,
        };
      function no(e, n, r = 0) {
        return e - n - r;
      }
      let na = (e) => {
        let n = ({ delta: n }) => e(n);
        return {
          start: () => eS.Z_.update(n, !0),
          stop: () => eS.qY.update(n),
        };
      };
      function nu({
        duration: e,
        driver: n = na,
        elapsed: r = 0,
        repeat: i = 0,
        repeatType: s = "loop",
        repeatDelay: o = 0,
        keyframes: a,
        autoplay: u = !0,
        onPlay: l,
        onStop: c,
        onComplete: h,
        onRepeat: d,
        onUpdate: f,
        type: p = "keyframes",
        ...D
      }) {
        let m, g;
        let v = r,
          y = 0,
          _ = e,
          x = !1,
          C = !0,
          E = ns[a.length > 2 ? "keyframes" : p] || e4,
          F = a[0],
          b = a[a.length - 1],
          w = { done: !1, value: F },
          { needsInterpolation: A } = E;
        A &&
          A(F, b) &&
          ((g = e$([0, 100], [F, b], { clamp: !1 })), (a = [0, 100]));
        let T = E({ ...D, duration: e, keyframes: a });
        function S(e) {
          if (
            (C || (e = -e),
            (r += e),
            x ||
              ((w = T.next(Math.max(0, r))),
              g && (w.value = g(w.value)),
              (x = C ? w.done : r <= 0)),
            f && f(w.value),
            x)
          ) {
            if ((0 === y && (_ = void 0 !== _ ? _ : r), y < i)) {
              var n, a;
              (n = r),
                (a = _),
                (C ? n >= a + o : n <= -o) &&
                  (y++,
                  "reverse" === s
                    ? (r = (function (e, n = 0, r = 0, i = !0) {
                        return i ? no(n + -e, n, r) : n - (e - n) + r;
                      })(r, _, o, (C = y % 2 == 0)))
                    : ((r = no(r, _, o)), "mirror" === s && T.flipTarget()),
                  (x = !1),
                  d && d());
            } else m && m.stop(), h && h();
          }
        }
        return (
          u && (l && l(), (m = n(S)).start()),
          {
            stop: () => {
              c && c(), m && m.stop();
            },
            set currentTime(t) {
              (r = v), S(t);
            },
            sample: (n) => {
              r = v;
              let i = e && "number" == typeof e ? Math.max(0.5 * e, 50) : 50,
                s = 0;
              for (S(0); s <= n; ) {
                let e = n - s;
                S(Math.min(e, i)), (s += i);
              }
              return w;
            },
          }
        );
      }
      let nl = ([e, n, r, i]) => `cubic-bezier(${e}, ${n}, ${r}, ${i})`,
        nc = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nl([0, 0.65, 0.55, 1]),
          circOut: nl([0.55, 0, 1, 0.45]),
          backIn: nl([0.31, 0.01, 0.66, -0.59]),
          backOut: nl([0.33, 1.53, 0.69, 0.99]),
        },
        nh = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        nd = {},
        nf = {};
      for (let e in nh)
        nf[e] = () => (void 0 === nd[e] && (nd[e] = nh[e]()), nd[e]);
      let np = new Set(["opacity"]);
      function nD(e, n) {
        let r = performance.now(),
          i = ({ timestamp: s }) => {
            let o = s - r;
            o >= n && (eS.qY.read(i), e(o - n));
          };
        return eS.Z_.read(i, !0), () => eS.qY.read(i);
      }
      var nm = r(7367);
      let ng = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        nv = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ny = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        n_ = { type: "keyframes", duration: 0.8 },
        nx = {
          x: ng,
          y: ng,
          z: ng,
          rotate: ng,
          rotateX: ng,
          rotateY: ng,
          rotateZ: ng,
          scaleX: nv,
          scaleY: nv,
          scale: nv,
          opacity: ny,
          backgroundColor: ny,
          color: ny,
          default: nv,
        },
        nC = (e, { keyframes: n }) => {
          if (n.length > 2) return n_;
          {
            let r = nx[e] || nx.default;
            return r(n[1]);
          }
        },
        nE = (e, n) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof n ||
            Array.isArray(n) ||
            ("string" == typeof n && ec.test(n) && !n.startsWith("url("))
          );
      function nF(e) {
        return (
          0 === e ||
          ("string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" "))
        );
      }
      function nb(e) {
        return "number" == typeof e ? 0 : eg("", e);
      }
      function nw(e, n) {
        return e[n] || e.default || e;
      }
      let nA =
        (e, n, r, i = {}) =>
        (s) => {
          let o = nw(i, e) || {},
            a = o.delay || i.delay || 0,
            { elapsed: u = 0 } = i;
          u -= eA(a);
          let l = (function (e, n, r, i) {
              let s = nE(n, r),
                o = void 0 !== i.from ? i.from : e.get();
              return ("none" === o && s && "string" == typeof r
                ? (o = eg(n, r))
                : nF(o) && "string" == typeof r
                ? (o = nb(r))
                : !Array.isArray(r) &&
                  nF(r) &&
                  "string" == typeof o &&
                  (r = nb(o)),
              Array.isArray(r))
                ? (null === r[0] && (r[0] = o), r)
                : [o, r];
            })(n, e, r, o),
            c = l[0],
            h = l[l.length - 1],
            d = nE(e, c),
            f = nE(e, h);
          (0, ew.K)(
            d === f,
            `You are trying to animate ${e} from "${c}" to "${h}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${h} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: n.getVelocity(),
            ...o,
            elapsed: u,
            onUpdate: (e) => {
              n.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              s(), o.onComplete && o.onComplete();
            },
          };
          if (!d || !f || eT.current || !1 === o.type)
            return (function ({
              keyframes: e,
              elapsed: n,
              onUpdate: r,
              onComplete: i,
            }) {
              let s = () => {
                r && r(e[e.length - 1]), i && i();
              };
              return n ? { stop: nD(s, -n) } : s();
            })(p);
          if ("inertia" === o.type)
            return (function ({
              keyframes: e,
              velocity: n = 0,
              min: r,
              max: i,
              power: s = 0.8,
              timeConstant: o = 750,
              bounceStiffness: a = 500,
              bounceDamping: u = 10,
              restDelta: l = 1,
              modifyTarget: c,
              driver: h,
              onUpdate: d,
              onComplete: f,
              onStop: p,
            }) {
              let D;
              let m = e[0];
              function g(e) {
                return (void 0 !== r && e < r) || (void 0 !== i && e > i);
              }
              function v(e) {
                return void 0 === r
                  ? i
                  : void 0 === i
                  ? r
                  : Math.abs(r - e) < Math.abs(i - e)
                  ? r
                  : i;
              }
              function y(e) {
                D && D.stop(),
                  (D = nu({
                    keyframes: [0, 1],
                    velocity: 0,
                    ...e,
                    driver: h,
                    onUpdate: (n) => {
                      d && d(n), e.onUpdate && e.onUpdate(n);
                    },
                    onComplete: f,
                    onStop: p,
                  }));
              }
              function _(e) {
                y({
                  type: "spring",
                  stiffness: a,
                  damping: u,
                  restDelta: l,
                  ...e,
                });
              }
              if (g(m)) _({ velocity: n, keyframes: [m, v(m)] });
              else {
                let e,
                  i,
                  a = s * n + m;
                void 0 !== c && (a = c(a));
                let u = v(a),
                  h = u === r ? -1 : 1,
                  d = (r) => {
                    (e = i),
                      (i = r),
                      (n = (0, e9.R)(r - e, nm.w.delta)),
                      ((1 === h && r > u) || (-1 === h && r < u)) &&
                        _({ keyframes: [r, u], velocity: n });
                  };
                y({
                  type: "decay",
                  keyframes: [m, 0],
                  velocity: n,
                  timeConstant: o,
                  power: s,
                  restDelta: l,
                  modifyTarget: c,
                  onUpdate: g(a) ? d : void 0,
                });
              }
              return { stop: () => D && D.stop() };
            })(p);
          if (
            (!(function ({
              when: e,
              delay: n,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: s,
              repeat: o,
              repeatType: a,
              repeatDelay: u,
              from: l,
              elapsed: c,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(o) && (p = { ...p, ...nC(e, p) }),
            p.duration && (p.duration = eA(p.duration)),
            p.repeatDelay && (p.repeatDelay = eA(p.repeatDelay)),
            n.owner &&
              n.owner.current instanceof HTMLElement &&
              !n.owner.getProps().onUpdate)
          ) {
            let r = (function (e, n, { onUpdate: r, onComplete: i, ...s }) {
              var o;
              let a =
                nf.waapi() &&
                np.has(n) &&
                !s.repeatDelay &&
                "mirror" !== s.repeatType &&
                0 !== s.damping;
              if (!a) return !1;
              let {
                keyframes: u,
                duration: l = 300,
                elapsed: c = 0,
                ease: h,
              } = s;
              if (
                "spring" === s.type ||
                !(
                  !(o = s.ease) ||
                  Array.isArray(o) ||
                  ("string" == typeof o && nc[o])
                )
              ) {
                if (s.repeat === 1 / 0) return;
                let e = nu({ ...s, elapsed: 0 }),
                  n = { done: !1, value: u[0] },
                  r = [],
                  i = 0;
                for (; !n.done && i < 2e4; )
                  r.push((n = e.sample(i)).value), (i += 10);
                (u = r), (l = i - 10), (h = "linear");
              }
              let d = (function (
                e,
                n,
                r,
                {
                  delay: i = 0,
                  duration: s,
                  repeat: o = 0,
                  repeatType: a = "loop",
                  ease: u,
                  times: l,
                } = {}
              ) {
                return e.animate(
                  { [n]: r, offset: l },
                  {
                    delay: i,
                    duration: s,
                    easing: (function (e) {
                      if (e) return Array.isArray(e) ? nl(e) : nc[e];
                    })(u),
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === a ? "alternate" : "normal",
                  }
                );
              })(e.owner.current, n, u, {
                ...s,
                delay: -c,
                duration: l,
                ease: h,
              });
              return (
                (d.onfinish = () => {
                  e.set(
                    (function (e, { repeat: n, repeatType: r = "loop" }) {
                      let i =
                        n && "loop" !== r && n % 2 == 1 ? 0 : e.length - 1;
                      return e[i];
                    })(u, s)
                  ),
                    eS.Z_.update(() => d.cancel()),
                    i && i();
                }),
                {
                  get currentTime() {
                    return d.currentTime || 0;
                  },
                  set currentTime(t) {
                    d.currentTime = t;
                  },
                  stop: () => {
                    let { currentTime: n } = d;
                    if (n) {
                      let r = nu({ ...s, autoplay: !1 });
                      e.setWithVelocity(
                        r.sample(n - 10).value,
                        r.sample(n).value,
                        10
                      );
                    }
                    eS.Z_.update(() => d.cancel());
                  },
                }
              );
            })(n, e, p);
            if (r) return r;
          }
          return nu(p);
        };
      function nT(e, n, r = {}) {
        let i = eE(e, n, r.custom),
          { transition: s = e.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (s = r.transitionOverride);
        let o = i ? () => nS(e, i, r) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: a,
                    staggerDirection: u,
                  } = s;
                  return (function (e, n, r = 0, i = 0, s = 1, o) {
                    let a = [],
                      u = (e.variantChildren.size - 1) * i,
                      l = 1 === s ? (e = 0) => e * i : (e = 0) => u - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(nj)
                        .forEach((e, i) => {
                          e.notify("AnimationStart", n),
                            a.push(
                              nT(e, n, { ...o, delay: r + l(i) }).then(() =>
                                e.notify("AnimationComplete", n)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, n, o + i, a, u, r);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([o(), a(r.delay)]);
        {
          let [e, n] = "beforeChildren" === u ? [o, a] : [a, o];
          return e().then(n);
        }
      }
      function nS(e, n, { delay: r = 0, transitionOverride: i, type: s } = {}) {
        let {
            transition: o = e.getDefaultTransition(),
            transitionEnd: a,
            ...u
          } = e.makeTargetAnimatable(n),
          l = e.getValue("willChange");
        i && (o = i);
        let c = [],
          h = s && e.animationState && e.animationState.getState()[s];
        for (let n in u) {
          let i = e.getValue(n),
            s = u[n];
          if (
            !i ||
            void 0 === s ||
            (h &&
              (function ({ protectedKeys: e, needsAnimating: n }, r) {
                let i = e.hasOwnProperty(r) && !0 !== n[r];
                return (n[r] = !1), i;
              })(h, n))
          )
            continue;
          let a = { delay: r, elapsed: 0, ...o };
          if (window.HandoffAppearAnimations && !i.hasAnimated) {
            let r = e.getProps()[eb];
            r && (a.elapsed = window.HandoffAppearAnimations(r, n, i, eS.Z_));
          }
          let d = i.start(
            nA(n, i, s, e.shouldReduceMotion && O.has(n) ? { type: !1 } : a)
          );
          eF(l) && (l.add(n), (d = d.then(() => l.remove(n)))), c.push(d);
        }
        return Promise.all(c).then(() => {
          a &&
            (function (e, n) {
              let r = eE(e, n),
                {
                  transitionEnd: i = {},
                  transition: s = {},
                  ...o
                } = r ? e.makeTargetAnimatable(r, !1) : {};
              for (let n in (o = { ...o, ...i })) {
                var a;
                let r = tS(o[n]);
                (a = n),
                  e.hasValue(a)
                    ? e.getValue(a).set(r)
                    : e.addValue(a, (0, t8.B)(r));
              }
            })(e, a);
        });
      }
      function nj(e, n) {
        return e.sortNodePosition(n);
      }
      let nP = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
        nB = [...nP].reverse(),
        nk = nP.length;
      function nM(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let nO = 0,
        nR = (e, n) => Math.abs(e - n);
      class nL {
        constructor(e, n, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = nI(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  (function (e, n) {
                    let r = nR(e.x, n.x),
                      i = nR(e.y, n.y);
                    return Math.sqrt(r ** 2 + i ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!n && !r) return;
              let { point: i } = e,
                { timestamp: s } = nm.w;
              this.history.push({ ...i, timestamp: s });
              let { onStart: o, onMove: a } = this.handlers;
              n ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, n) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nN(n, this.transformPagePoint)),
                eS.Z_.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, n) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: i } = this.handlers,
                s = nI(
                  "pointercancel" === e.type
                    ? this.lastMoveEventInfo
                    : nN(n, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(e, s), i && i(e, s);
            }),
            !tO(e))
          )
            return;
          (this.handlers = n), (this.transformPagePoint = r);
          let i = tR(e),
            s = nN(i, this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = nm.w;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: u } = n;
          u && u(e, nI(s, this.history)),
            (this.removeListeners = tI(
              tN(window, "pointermove", this.handlePointerMove),
              tN(window, "pointerup", this.handlePointerUp),
              tN(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            eS.qY.update(this.updatePoint);
        }
      }
      function nN(e, n) {
        return n ? { point: n(e.point) } : e;
      }
      function nV(e, n) {
        return { x: e.x - n.x, y: e.y - n.y };
      }
      function nI({ point: e }, n) {
        return {
          point: e,
          delta: nV(e, nz(n)),
          offset: nV(e, n[0]),
          velocity: (function (e, n) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              i = null,
              s = nz(e);
            for (
              ;
              r >= 0 && ((i = e[r]), !(s.timestamp - i.timestamp > eA(0.1)));

            )
              r--;
            if (!i) return { x: 0, y: 0 };
            let o = (s.timestamp - i.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            let a = { x: (s.x - i.x) / o, y: (s.y - i.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(n, 0),
        };
      }
      function nz(e) {
        return e[e.length - 1];
      }
      function nU(e) {
        return e.max - e.min;
      }
      function nZ(e, n = 0, r = 0.01) {
        return Math.abs(e - n) <= r;
      }
      function nW(e, n, r, i = 0.5) {
        (e.origin = i),
          (e.originPoint = eO(n.min, n.max, e.origin)),
          (e.scale = nU(r) / nU(n)),
          (nZ(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = eO(r.min, r.max, e.origin) - e.originPoint),
          (nZ(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function nH(e, n, r, i) {
        nW(e.x, n.x, r.x, i ? i.originX : void 0),
          nW(e.y, n.y, r.y, i ? i.originY : void 0);
      }
      function nq(e, n, r) {
        (e.min = r.min + n.min), (e.max = e.min + nU(n));
      }
      function nY(e, n, r) {
        (e.min = n.min - r.min), (e.max = e.min + nU(n));
      }
      function n$(e, n, r) {
        nY(e.x, n.x, r.x), nY(e.y, n.y, r.y);
      }
      function nX(e, n, r) {
        return {
          min: void 0 !== n ? e.min + n : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function nG(e, n) {
        let r = n.min - e.min,
          i = n.max - e.max;
        return (
          n.max - n.min < e.max - e.min && ([r, i] = [i, r]), { min: r, max: i }
        );
      }
      function nK(e, n, r) {
        return { min: nJ(e, n), max: nJ(e, r) };
      }
      function nJ(e, n) {
        return "number" == typeof e ? e : e[n] || 0;
      }
      let nQ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n0 = () => ({ x: nQ(), y: nQ() }),
        n1 = () => ({ min: 0, max: 0 }),
        n2 = () => ({ x: n1(), y: n1() });
      function n3(e) {
        return [e("x"), e("y")];
      }
      function n6({ top: e, left: n, right: r, bottom: i }) {
        return { x: { min: n, max: r }, y: { min: e, max: i } };
      }
      function n8(e) {
        return void 0 === e || 1 === e;
      }
      function n5({ scale: e, scaleX: n, scaleY: r }) {
        return !n8(e) || !n8(n) || !n8(r);
      }
      function n4(e) {
        return n5(e) || n7(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function n7(e) {
        var n, r;
        return ((n = e.x) && "0%" !== n) || ((r = e.y) && "0%" !== r);
      }
      function n9(e, n, r, i, s) {
        return void 0 !== s && (e = i + s * (e - i)), i + r * (e - i) + n;
      }
      function rt(e, n = 0, r = 1, i, s) {
        (e.min = n9(e.min, n, r, i, s)), (e.max = n9(e.max, n, r, i, s));
      }
      function re(e, { x: n, y: r }) {
        rt(e.x, n.translate, n.scale, n.originPoint),
          rt(e.y, r.translate, r.scale, r.originPoint);
      }
      function rn(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function rr(e, n) {
        (e.min = e.min + n), (e.max = e.max + n);
      }
      function ri(e, n, [r, i, s]) {
        let o = void 0 !== n[s] ? n[s] : 0.5,
          a = eO(e.min, e.max, o);
        rt(e, n[r], n[i], a, n.scale);
      }
      let rs = ["x", "scaleX", "originX"],
        ro = ["y", "scaleY", "originY"];
      function ra(e, n) {
        ri(e.x, n, rs), ri(e.y, n, ro);
      }
      function ru(e, n) {
        return n6(
          (function (e, n) {
            if (!n) return e;
            let r = n({ x: e.left, y: e.top }),
              i = n({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), n)
        );
      }
      let rl = new WeakMap();
      class rc {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = n2()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: n = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let i = (e) => {
              this.stopAnimation(), n && this.snapToCursor(tR(e, "page").point);
            },
            s = (e, n) => {
              let {
                drag: r,
                dragPropagation: i,
                onDragStart: s,
              } = this.getProps();
              if (
                r &&
                !i &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tW(r)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                n3((e) => {
                  let n = this.getAxisMotionValue(e).get() || 0;
                  if (Q.test(n)) {
                    let { projection: r } = this.visualElement;
                    if (r && r.layout) {
                      let i = r.layout.layoutBox[e];
                      if (i) {
                        let e = nU(i);
                        n = e * (parseFloat(n) / 100);
                      }
                    }
                  }
                  this.originPoint[e] = n;
                }),
                s && s(e, n);
              let { animationState: o } = this.visualElement;
              o && o.setActive(a.Drag, !0);
            },
            o = (e, n) => {
              let {
                dragPropagation: r,
                dragDirectionLock: i,
                onDirectionLock: s,
                onDrag: o,
              } = this.getProps();
              if (!r && !this.openGlobalLock) return;
              let { offset: a } = n;
              if (i && null === this.currentDirection) {
                (this.currentDirection = (function (e, n = 10) {
                  let r = null;
                  return (
                    Math.abs(e.y) > n
                      ? (r = "y")
                      : Math.abs(e.x) > n && (r = "x"),
                    r
                  );
                })(a)),
                  null !== this.currentDirection &&
                    s &&
                    s(this.currentDirection);
                return;
              }
              this.updateAxis("x", n.point, a),
                this.updateAxis("y", n.point, a),
                this.visualElement.render(),
                o && o(e, n);
            },
            u = (e, n) => this.stop(e, n);
          this.panSession = new nL(
            e,
            { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: u },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(e, n) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: i } = n;
          this.startAnimation(i);
          let { onDragEnd: s } = this.getProps();
          s && s(e, n);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: n } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            n && n.setActive(a.Drag, !1);
        }
        updateAxis(e, n, r) {
          let { drag: i } = this.getProps();
          if (!r || !rh(e, i, this.currentDirection)) return;
          let s = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: n, max: r }, i) {
              return (
                void 0 !== n && e < n
                  ? (e = i ? eO(n, e, i.min) : Math.max(e, n))
                  : void 0 !== r &&
                    e > r &&
                    (e = i ? eO(r, e, i.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            s.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            i = this.constraints;
          e && D(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                e,
                { top: n, left: r, bottom: i, right: s }
              ) {
                return { x: nX(e.x, r, s), y: nX(e.y, n, i) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: nK(e, "left", "right"), y: nK(e, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              n3((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, n) {
                    let r = {};
                    return (
                      void 0 !== n.min && (r.min = n.min - e.min),
                      void 0 !== n.max && (r.max = n.max - e.min),
                      r
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: n, onMeasureDragConstraints: r } =
            this.getProps();
          if (!n || !D(n)) return !1;
          let i = n.current;
          (0, ew.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let o = (function (e, n, r) {
              let i = ru(e, r),
                { scroll: s } = n;
              return s && (rr(i.x, s.offset.x), rr(i.y, s.offset.y)), i;
            })(i, s.root, this.visualElement.getTransformPagePoint()),
            a = { x: nG((e = s.layout.layoutBox).x, o.x), y: nG(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: n }) {
                return { top: n.min, right: e.max, bottom: n.max, left: e.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!e), e && (a = n6(e));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: n,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: s,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            u = this.constraints || {},
            l = n3((a) => {
              if (!rh(a, n, this.currentDirection)) return;
              let l = (u && u[a]) || {};
              o && (l = { min: 0, max: 0 });
              let c = {
                type: "inertia",
                velocity: r ? e[a] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(a, c);
            });
          return Promise.all(l).then(a);
        }
        startAxisValueAnimation(e, n) {
          let r = this.getAxisMotionValue(e);
          return r.start(nA(e, r, 0, n));
        }
        stopAnimation() {
          n3((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let n = "_drag" + e.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
          return (
            i ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          n3((n) => {
            let { drag: r } = this.getProps();
            if (!rh(n, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              s = this.getAxisMotionValue(n);
            if (i && i.layout) {
              let { min: r, max: o } = i.layout.layoutBox[n];
              s.set(e[n] - eO(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!D(n) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          n3((e) => {
            let n = this.getAxisMotionValue(e);
            if (n) {
              let r = n.get();
              i[e] = (function (e, n) {
                let r = 0.5,
                  i = nU(e),
                  s = nU(n);
                return (
                  s > i
                    ? (r = eq(n.min, n.max - i, e.min))
                    : i > s && (r = eq(e.min, e.max - s, n.min)),
                  U(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            n3((n) => {
              if (!rh(n, e, null)) return;
              let r = this.getAxisMotionValue(n),
                { min: s, max: o } = this.constraints[n];
              r.set(eO(s, o, i[n]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rl.set(this.visualElement, this);
          let e = this.visualElement.current,
            n = tN(e, "pointerdown", (e) => {
              let { drag: n, dragListener: r = !0 } = this.getProps();
              n && r && this.start(e);
            }),
            r = () => {
              let { dragConstraints: e } = this.getProps();
              D(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", r);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            r();
          let o = tM(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = i.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: n }) => {
                this.isDragging &&
                  n &&
                  (n3((n) => {
                    let r = this.getAxisMotionValue(n);
                    r &&
                      ((this.originPoint[n] += e[n].translate),
                      r.set(r.get() + e[n].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), n(), s(), a && a();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: n = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: s = !1,
              dragElastic: o = 0.35,
              dragMomentum: a = !0,
            } = e;
          return {
            ...e,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function rh(e, n, r) {
        return (!0 === n || n === e) && (null === r || r === e);
      }
      function rd(e, n) {
        return n.max === n.min ? 0 : (e / (n.max - n.min)) * 100;
      }
      let rf = {
        correct: (e, n) => {
          if (!n.target) return e;
          if ("string" == typeof e) {
            if (!tt.test(e)) return e;
            e = parseFloat(e);
          }
          let r = rd(e, n.target.x),
            i = rd(e, n.target.y);
          return `${r}% ${i}%`;
        },
      };
      function rp(e) {
        return "string" == typeof e && e.startsWith("var(--");
      }
      let rD = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function rm(e, n, r = 1) {
        (0, ew.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [i, s] = (function (e) {
          let n = rD.exec(e);
          if (!n) return [,];
          let [, r, i] = n;
          return [r, i];
        })(e);
        if (!i) return;
        let o = window.getComputedStyle(n).getPropertyValue(i);
        return o ? o.trim() : rp(s) ? rm(s, n, r + 1) : s;
      }
      let rg = "_$css",
        rv = {
          correct: (e, { treeScale: n, projectionDelta: r }) => {
            let i = e,
              s = e.includes("var("),
              o = [];
            s && (e = e.replace(rD, (e) => (o.push(e), rg)));
            let a = ec.parse(e);
            if (a.length > 5) return i;
            let u = ec.createTransformer(e),
              l = "number" != typeof a[0] ? 1 : 0,
              c = r.x.scale * n.x,
              h = r.y.scale * n.y;
            (a[0 + l] /= c), (a[1 + l] /= h);
            let d = eO(c, h, 0.5);
            "number" == typeof a[2 + l] && (a[2 + l] /= d),
              "number" == typeof a[3 + l] && (a[3 + l] /= d);
            let f = u(a);
            if (s) {
              let e = 0;
              f = f.replace(rg, () => {
                let n = o[e];
                return e++, n;
              });
            }
            return f;
          },
        };
      class ry extends l.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: n,
              switchLayoutGroup: r,
              layoutId: i,
            } = this.props,
            { projection: s } = e;
          Object.assign(k, rx),
            s &&
              (n.group && n.group.add(s),
              r && r.register && i && r.register(s),
              s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (w.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: n,
              visualElement: r,
              drag: i,
              isPresent: s,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = s),
              i || e.layoutDependency !== n || void 0 === n
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === s ||
                (s
                  ? o.promote()
                  : o.relegate() ||
                    eS.Z_.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            !e.currentAnimation && e.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: n,
              switchLayoutGroup: r,
            } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(i),
            r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function r_(e) {
        let [n, r] = (function () {
            let e = (0, l.useContext)(d.O);
            if (null === e) return [!0, null];
            let { isPresent: n, onExitComplete: r, register: i } = e,
              s = (0, l.useId)();
            (0, l.useEffect)(() => i(s), []);
            let o = () => r && r(s);
            return !n && r ? [!1, o] : [!0];
          })(),
          i = (0, l.useContext)(T.p);
        return l.createElement(ry, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, l.useContext)(S),
          isPresent: n,
          safeToRemove: r,
        });
      }
      let rx = {
        borderRadius: {
          ...rf,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: rf,
        borderTopRightRadius: rf,
        borderBottomLeftRadius: rf,
        borderBottomRightRadius: rf,
        boxShadow: rv,
      };
      var rC = r(1560);
      let rE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rF = rE.length,
        rb = (e) => ("string" == typeof e ? parseFloat(e) : e),
        rw = (e) => "number" == typeof e || tt.test(e);
      function rA(e, n) {
        return void 0 !== e[n] ? e[n] : e.borderRadius;
      }
      let rT = rj(0, 0.5, eJ),
        rS = rj(0.5, 0.95, tX);
      function rj(e, n, r) {
        return (i) => (i < e ? 0 : i > n ? 1 : r(eq(e, n, i)));
      }
      function rP(e, n) {
        (e.min = n.min), (e.max = n.max);
      }
      function rB(e, n) {
        rP(e.x, n.x), rP(e.y, n.y);
      }
      function rk(e, n, r, i, s) {
        return (
          (e -= n),
          (e = i + (1 / r) * (e - i)),
          void 0 !== s && (e = i + (1 / s) * (e - i)),
          e
        );
      }
      function rM(e, n, [r, i, s], o, a) {
        !(function (e, n = 0, r = 1, i = 0.5, s, o = e, a = e) {
          if (Q.test(n)) {
            n = parseFloat(n);
            let e = eO(a.min, a.max, n / 100);
            n = e - a.min;
          }
          if ("number" != typeof n) return;
          let u = eO(o.min, o.max, i);
          e === o && (u -= n),
            (e.min = rk(e.min, n, r, u, s)),
            (e.max = rk(e.max, n, r, u, s));
        })(e, n[r], n[i], n[s], n.scale, o, a);
      }
      let rO = ["x", "scaleX", "originX"],
        rR = ["y", "scaleY", "originY"];
      function rL(e, n, r, i) {
        rM(e.x, n, rO, r ? r.x : void 0, i ? i.x : void 0),
          rM(e.y, n, rR, r ? r.y : void 0, i ? i.y : void 0);
      }
      function rN(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function rV(e) {
        return rN(e.x) && rN(e.y);
      }
      function rI(e, n) {
        return (
          e.x.min === n.x.min &&
          e.x.max === n.x.max &&
          e.y.min === n.y.min &&
          e.y.max === n.y.max
        );
      }
      function rz(e) {
        return nU(e.x) / nU(e.y);
      }
      var rU = r(10);
      class rZ {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, rU.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, rU.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let n;
          let r = this.members.findIndex((n) => e === n);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              n = r;
              break;
            }
          }
          return !!n && (this.promote(n), !0);
        }
        promote(e, n) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              n && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: i } = e.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: n, resumingFrom: r } = e;
            n.onExitComplete && n.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rW(e, n, r) {
        let i = "",
          s = e.x.translate / n.x,
          o = e.y.translate / n.y;
        if (
          ((s || o) && (i = `translate3d(${s}px, ${o}px, 0) `),
          (1 !== n.x || 1 !== n.y) && (i += `scale(${1 / n.x}, ${1 / n.y}) `),
          r)
        ) {
          let { rotate: e, rotateX: n, rotateY: s } = r;
          e && (i += `rotate(${e}deg) `),
            n && (i += `rotateX(${n}deg) `),
            s && (i += `rotateY(${s}deg) `);
        }
        let a = e.x.scale * n.x,
          u = e.y.scale * n.y;
        return (1 !== a || 1 !== u) && (i += `scale(${a}, ${u})`), i || "none";
      }
      let rH = (e, n) => e.depth - n.depth;
      class rq {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, rU.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, rU.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(rH),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      let rY = ["", "X", "Y", "Z"],
        r$ = 0;
      function rX({
        attachResizeListener: e,
        defaultParent: n,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: s,
      }) {
        return class {
          constructor(e, r = {}, i = null == n ? void 0 : n()) {
            (this.id = r$++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(rJ),
                  this.nodes.forEach(r3),
                  this.nodes.forEach(r6);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = e),
              (this.latestValues = r),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rq());
          }
          addEventListener(e, n) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new rC.L()),
              this.eventHandlers.get(e).add(n)
            );
          }
          notifyListeners(e, ...n) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...n);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          registerPotentialNode(e, n) {
            this.potentialNodes.set(e, n);
          }
          mount(n, r = !1) {
            if (this.instance) return;
            (this.isSVG = n instanceof SVGElement && "svg" !== n.tagName),
              (this.instance = n);
            let { layoutId: i, layout: s, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(n),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              r && (s || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(n, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = nD(i, 250)),
                  w.hasAnimatedSinceResize &&
                    ((w.hasAnimatedSinceResize = !1), this.nodes.forEach(r2));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                o &&
                (i || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: n,
                    hasRelativeTargetChanged: r,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let s =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        it,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: u,
                      } = o.getProps(),
                      l = !this.targetLayout || !rI(this.targetLayout, i) || r,
                      c = !n && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      c ||
                      (n && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, c);
                      let n = { ...nw(s, "layout"), onPlay: a, onComplete: u };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((n.delay = 0), (n.type = !1)),
                        this.startAnimation(n);
                    } else
                      n || 0 !== this.animationProgress || r2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              eS.qY.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r8),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              (n.shouldResetTransform = !0),
                n.updateScroll("snapshot"),
                n.options.layoutRoot && n.willUpdate(!1);
            }
            let { layoutId: n, layout: r } = this.options;
            if (void 0 === n && !r) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            let e = this.isUpdateBlocked();
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r0);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(ie), this.potentialNodes.clear()),
              this.nodes.forEach(r1),
              this.nodes.forEach(rG),
              this.nodes.forEach(rK),
              this.clearAllSnapshots(),
              eS.iW.update(),
              eS.iW.preRender(),
              eS.iW.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(rQ), this.sharedNodes.forEach(r5);
          }
          scheduleUpdateProjection() {
            eS.Z_.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            eS.Z_.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                n.updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = n2()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: n } = this.options;
            n &&
              n.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let n = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (n = !1),
              n &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: i(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!s) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !rV(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            e &&
              (n || n4(this.latestValues) || o) &&
              (s(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var n;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              e && (i = this.removeTransform(i)),
              ir((n = i).x),
              ir(n.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return n2();
            let n = e.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (rr(n.x, r.offset.x), rr(n.y, r.offset.y)), n;
          }
          removeElementScroll(e) {
            let n = n2();
            rB(n, e);
            for (let r = 0; r < this.path.length; r++) {
              let i = this.path[r],
                { scroll: s, options: o } = i;
              if (i !== this.root && s && o.layoutScroll) {
                if (s.isRoot) {
                  rB(n, e);
                  let { scroll: r } = this.root;
                  r && (rr(n.x, -r.offset.x), rr(n.y, -r.offset.y));
                }
                rr(n.x, s.offset.x), rr(n.y, s.offset.y);
              }
            }
            return n;
          }
          applyTransform(e, n = !1) {
            let r = n2();
            rB(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              !n &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                ra(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                n4(i.latestValues) && ra(r, i.latestValues);
            }
            return n4(this.latestValues) && ra(r, this.latestValues), r;
          }
          removeTransform(e) {
            let n = n2();
            rB(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !n4(r.latestValues)) continue;
              n5(r.latestValues) && r.updateSnapshot();
              let i = n2(),
                s = r.measurePageBox();
              rB(i, s),
                rL(
                  n,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  i
                );
            }
            return n4(this.latestValues) && rL(n, this.latestValues), n;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              (this.isProjectionDirty = !0),
              this.root.scheduleUpdateProjection();
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            let e = this.getLead();
            if (
              (this.isProjectionDirty ||
                (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (this.layout && (n || r)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let e = this.getClosestProjectingParent();
                e && e.layout
                  ? ((this.relativeParent = e),
                    (this.relativeTarget = n2()),
                    (this.relativeTargetOrigin = n2()),
                    n$(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    rB(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = n2()), (this.targetWithTransforms = n2())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var i, s, o;
                  (i = this.target),
                    (s = this.relativeTarget),
                    (o = this.relativeParent.target),
                    nq(i.x, s.x, o.x),
                    nq(i.y, s.y, o.y);
                } else
                  this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rB(this.target, this.layout.layoutBox),
                      re(this.target, this.targetDelta))
                    : rB(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
                  !e.options.layoutScroll &&
                  e.target
                    ? ((this.relativeParent = e),
                      (this.relativeTarget = n2()),
                      (this.relativeTargetOrigin = n2()),
                      n$(this.relativeTargetOrigin, this.target, e.target),
                      rB(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              n5(this.parent.latestValues) ||
              n7(this.parent.latestValues)
              ? void 0
              : (this.parent.relativeTarget ||
                  this.parent.targetDelta ||
                  this.parent.options.layoutRoot) &&
                this.parent.layout
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            let { isProjectionDirty: e, isTransformDirty: n } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            let r = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== r,
              s = !0;
            if ((e && (s = !1), i && n && (s = !1), s)) return;
            let { layout: o, layoutId: a } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || a))
            )
              return;
            rB(this.layoutCorrected, this.layout.layoutBox),
              (function (e, n, r, i = !1) {
                let s, o;
                let a = r.length;
                if (a) {
                  n.x = n.y = 1;
                  for (let u = 0; u < a; u++) {
                    o = (s = r[u]).projectionDelta;
                    let a = s.instance;
                    (!a || !a.style || "contents" !== a.style.display) &&
                      (i &&
                        s.options.layoutScroll &&
                        s.scroll &&
                        s !== s.root &&
                        ra(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                      o && ((n.x *= o.x.scale), (n.y *= o.y.scale), re(e, o)),
                      i && n4(s.latestValues) && ra(e, s.latestValues));
                  }
                  (n.x = rn(n.x)), (n.y = rn(n.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, i);
            let { target: u } = r;
            if (!u) return;
            this.projectionDelta ||
              ((this.projectionDelta = n0()),
              (this.projectionDeltaWithTransform = n0()));
            let l = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            nH(
              this.projectionDelta,
              this.layoutCorrected,
              u,
              this.latestValues
            ),
              (this.projectionTransform = rW(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== l ||
                this.treeScale.y !== c) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", u));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, n = !1) {
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = n0();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !n);
            let a = n2(),
              u = r ? r.source : void 0,
              l = this.layout ? this.layout.source : void 0,
              c = u !== l,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              f = Boolean(
                c && !d && !0 === this.options.crossfade && !this.path.some(r9)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (n) => {
                var r, u;
                let l = n / 1e3;
                r4(o.x, e.x, l),
                  r4(o.y, e.y, l),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (n$(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (r = this.relativeTarget),
                    (u = this.relativeTargetOrigin),
                    r7(r.x, u.x, a.x, l),
                    r7(r.y, u.y, a.y, l)),
                  c &&
                    ((this.animationValues = s),
                    (function (e, n, r, i, s, o) {
                      s
                        ? ((e.opacity = eO(
                            0,
                            void 0 !== r.opacity ? r.opacity : 1,
                            rT(i)
                          )),
                          (e.opacityExit = eO(
                            void 0 !== n.opacity ? n.opacity : 1,
                            0,
                            rS(i)
                          )))
                        : o &&
                          (e.opacity = eO(
                            void 0 !== n.opacity ? n.opacity : 1,
                            void 0 !== r.opacity ? r.opacity : 1,
                            i
                          ));
                      for (let s = 0; s < rF; s++) {
                        let o = `border${rE[s]}Radius`,
                          a = rA(n, o),
                          u = rA(r, o);
                        if (void 0 === a && void 0 === u) continue;
                        a || (a = 0), u || (u = 0);
                        let l = 0 === a || 0 === u || rw(a) === rw(u);
                        l
                          ? ((e[o] = Math.max(eO(rb(a), rb(u), i), 0)),
                            (Q.test(u) || Q.test(a)) && (e[o] += "%"))
                          : (e[o] = u);
                      }
                      (n.rotate || r.rotate) &&
                        (e.rotate = eO(n.rotate || 0, r.rotate || 0, i));
                    })(s, i, this.latestValues, l, f, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = l);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (eS.qY.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = eS.Z_.update(() => {
                (w.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, n, r = {}) {
                    let i = L(e) ? e : (0, t8.B)(e);
                    return (
                      i.start(nA("", i, 1e3, r)),
                      {
                        stop: () => i.stop(),
                        isAnimating: () => i.isAnimating(),
                      }
                    );
                  })(0, 0, {
                    ...e,
                    onUpdate: (n) => {
                      this.mixTargetDelta(n), e.onUpdate && e.onUpdate(n);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: n,
                target: r,
                layout: i,
                latestValues: s,
              } = e;
            if (n && r && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                ii(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                r = this.target || n2();
                let n = nU(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + n);
                let i = nU(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + i);
              }
              rB(n, r),
                ra(n, s),
                nH(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  n,
                  s
                );
            }
          }
          registerSharedNode(e, n) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new rZ());
            let r = this.sharedNodes.get(e);
            r.add(n);
            let i = n.options.initialPromotionConfig;
            n.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(n)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: n } = this.options;
            return (
              (n &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: n } = this.options;
            return n
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: n,
            preserveFollowOpacity: r,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              n && this.setOptions({ transition: n });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let n = !1,
              { latestValues: r } = e;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (n = !0),
              !n)
            )
              return;
            let i = {};
            for (let n = 0; n < rY.length; n++) {
              let s = "rotate" + rY[n];
              r[s] && ((i[s] = r[s]), e.setStaticValue(s, 0));
            }
            for (let n in (e.render(), i)) e.setStaticValue(n, i[n]);
            e.scheduleRender();
          }
          getProjectionStyles(e = {}) {
            var n, r;
            let i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return { visibility: "hidden" };
            i.visibility = "";
            let s = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents = tj(e.pointerEvents) || ""),
                (i.transform = s ? s(this.latestValues, "") : "none"),
                i
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let n = {};
              return (
                this.options.layoutId &&
                  ((n.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (n.pointerEvents = tj(e.pointerEvents) || "")),
                this.hasProjected &&
                  !n4(this.latestValues) &&
                  ((n.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                n
              );
            }
            let a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = rW(
                this.projectionDeltaWithTransform,
                this.treeScale,
                a
              )),
              s && (i.transform = s(a, i.transform));
            let { x: u, y: l } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * u.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (i.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (n = a.opacity) && void 0 !== n
                            ? n
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (i.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            k)) {
              if (void 0 === a[e]) continue;
              let { correct: n, applyTo: r } = k[e],
                s = "none" === i.transform ? a[e] : n(a[e], o);
              if (r) {
                let e = r.length;
                for (let n = 0; n < e; n++) i[r[n]] = s;
              } else i[e] = s;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  o === this ? tj(e.pointerEvents) || "" : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var n;
              return null === (n = e.currentAnimation) || void 0 === n
                ? void 0
                : n.stop();
            }),
              this.root.nodes.forEach(r0),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rG(e) {
        e.updateLayout();
      }
      function rK(e) {
        var n;
        let r =
          (null === (n = e.resumeFrom) || void 0 === n ? void 0 : n.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: n, measuredBox: i } = e.layout,
            { animationType: s } = e.options,
            o = r.source !== e.layout.source;
          "size" === s
            ? n3((e) => {
                let i = o ? r.measuredBox[e] : r.layoutBox[e],
                  s = nU(i);
                (i.min = n[e].min), (i.max = i.min + s);
              })
            : ii(s, r.layoutBox, n) &&
              n3((e) => {
                let i = o ? r.measuredBox[e] : r.layoutBox[e],
                  s = nU(n[e]);
                i.max = i.min + s;
              });
          let a = n0();
          nH(a, n, r.layoutBox);
          let u = n0();
          o
            ? nH(u, e.applyTransform(i, !0), r.measuredBox)
            : nH(u, n, r.layoutBox);
          let l = !rV(a),
            c = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: s, layout: o } = i;
              if (s && o) {
                let a = n2();
                n$(a, r.layoutBox, s.layoutBox);
                let u = n2();
                n$(u, n, o.layoutBox),
                  rI(a, u) || (c = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = u),
                    (e.relativeTargetOrigin = a),
                    (e.relativeParent = i));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: n,
            snapshot: r,
            delta: u,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c,
          });
        } else if (e.isLead()) {
          let { onExitComplete: n } = e.options;
          n && n();
        }
        e.options.transition = void 0;
      }
      function rJ(e) {
        e.isProjectionDirty ||
          (e.isProjectionDirty = Boolean(
            e.parent && e.parent.isProjectionDirty
          )),
          e.isTransformDirty ||
            (e.isTransformDirty = Boolean(
              e.parent && e.parent.isTransformDirty
            ));
      }
      function rQ(e) {
        e.clearSnapshot();
      }
      function r0(e) {
        e.clearMeasurements();
      }
      function r1(e) {
        let { visualElement: n } = e.options;
        n &&
          n.getProps().onBeforeLayoutMeasure &&
          n.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function r2(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function r3(e) {
        e.resolveTargetDelta();
      }
      function r6(e) {
        e.calcProjection();
      }
      function r8(e) {
        e.resetRotation();
      }
      function r5(e) {
        e.removeLeadSnapshot();
      }
      function r4(e, n, r) {
        (e.translate = eO(n.translate, 0, r)),
          (e.scale = eO(n.scale, 1, r)),
          (e.origin = n.origin),
          (e.originPoint = n.originPoint);
      }
      function r7(e, n, r, i) {
        (e.min = eO(n.min, r.min, i)), (e.max = eO(n.max, r.max, i));
      }
      function r9(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let it = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ie(e, n) {
        let r = e.root;
        for (let n = e.path.length - 1; n >= 0; n--)
          if (Boolean(e.path[n].instance)) {
            r = e.path[n];
            break;
          }
        let i = r && r !== e.root ? r.instance : document,
          s = i.querySelector(`[data-projection-id="${n}"]`);
        s && e.mount(s, !0);
      }
      function ir(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function ii(e, n, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !nZ(rz(n), rz(r), 0.2))
        );
      }
      let is = rX({
          attachResizeListener: (e, n) => tM(e, "resize", n),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        io = { current: void 0 },
        ia = rX({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!io.current) {
              let e = new is(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (io.current = e);
            }
            return io.current;
          },
          resetTransform: (e, n) => {
            e.style.transform = void 0 !== n ? n : "none";
          },
          checkIsScrollRoot: (e) =>
            Boolean("fixed" === window.getComputedStyle(e).position),
        }),
        iu = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        il = (e) => iu.has(e),
        ic = (e) => Object.keys(e).some(il),
        ih = (e) => e === Z || e === tt;
      ((o = u || (u = {})).width = "width"),
        (o.height = "height"),
        (o.left = "left"),
        (o.right = "right"),
        (o.top = "top"),
        (o.bottom = "bottom");
      let id = (e, n) => parseFloat(e.split(", ")[n]),
        ip =
          (e, n) =>
          (r, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let s = i.match(/^matrix3d\((.+)\)$/);
            if (s) return id(s[1], n);
            {
              let n = i.match(/^matrix\((.+)\)$/);
              return n ? id(n[1], e) : 0;
            }
          },
        iD = new Set(["x", "y", "z"]),
        im = M.filter((e) => !iD.has(e)),
        ig = {
          width: ({ x: e }, { paddingLeft: n = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(n) - parseFloat(r),
          height: ({ y: e }, { paddingTop: n = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(n) - parseFloat(r),
          top: (e, { top: n }) => parseFloat(n),
          left: (e, { left: n }) => parseFloat(n),
          bottom: ({ y: e }, { top: n }) => parseFloat(n) + (e.max - e.min),
          right: ({ x: e }, { left: n }) => parseFloat(n) + (e.max - e.min),
          x: ip(4, 13),
          y: ip(5, 14),
        },
        iv = (e, n, r) => {
          let i = n.measureViewportBox(),
            s = n.current,
            o = getComputedStyle(s),
            { display: a } = o,
            u = {};
          "none" === a && n.setStaticValue("display", e.display || "block"),
            r.forEach((e) => {
              u[e] = ig[e](i, o);
            }),
            n.render();
          let l = n.measureViewportBox();
          return (
            r.forEach((r) => {
              let i = n.getValue(r);
              i && i.jump(u[r]), (e[r] = ig[r](l, o));
            }),
            e
          );
        },
        iy = (e, n, r = {}, i = {}) => {
          (n = { ...n }), (i = { ...i });
          let s = Object.keys(n).filter(il),
            o = [],
            a = !1,
            u = [];
          if (
            (s.forEach((s) => {
              let l;
              let c = e.getValue(s);
              if (!e.hasValue(s)) return;
              let h = r[s],
                d = e_(h),
                f = n[s];
              if (tA(f)) {
                let e = f.length,
                  n = null === f[0] ? 1 : 0;
                d = e_((h = f[n]));
                for (let r = n; r < e; r++)
                  l
                    ? (0, ew.k)(
                        e_(f[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = e_(f[r])),
                      (0, ew.k)(
                        l === d || (ih(d) && ih(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = e_(f);
              if (d !== l) {
                if (ih(d) && ih(l)) {
                  let e = c.get();
                  "string" == typeof e && c.set(parseFloat(e)),
                    "string" == typeof f
                      ? (n[s] = parseFloat(f))
                      : Array.isArray(f) &&
                        l === tt &&
                        (n[s] = f.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === f)
                    ? 0 === h
                      ? c.set(l.transform(h))
                      : (n[s] = d.transform(f))
                    : (a ||
                        ((o = (function (e) {
                          let n = [];
                          return (
                            im.forEach((r) => {
                              let i = e.getValue(r);
                              void 0 !== i &&
                                (n.push([r, i.get()]),
                                i.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            n.length && e.render(),
                            n
                          );
                        })(e)),
                        (a = !0)),
                      u.push(s),
                      (i[s] = void 0 !== i[s] ? i[s] : n[s]),
                      c.jump(f));
              }
            }),
            !u.length)
          )
            return { target: n, transitionEnd: i };
          {
            let r = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = iv(n, e, u);
            return (
              o.length &&
                o.forEach(([n, r]) => {
                  e.getValue(n).set(r);
                }),
              e.render(),
              F.j && null !== r && window.scrollTo({ top: r }),
              { target: s, transitionEnd: i }
            );
          }
        },
        i_ = (e, n, r, i) => {
          var s, o;
          let a = (function (e, { ...n }, r) {
            let i = e.current;
            if (!(i instanceof Element)) return { target: n, transitionEnd: r };
            for (let s in (r && (r = { ...r }),
            e.values.forEach((e) => {
              let n = e.get();
              if (!rp(n)) return;
              let r = rm(n, i);
              r && e.set(r);
            }),
            n)) {
              let e = n[s];
              if (!rp(e)) continue;
              let o = rm(e, i);
              o && ((n[s] = o), r && void 0 === r[s] && (r[s] = e));
            }
            return { target: n, transitionEnd: r };
          })(e, n, i);
          return (
            (n = a.target),
            (i = a.transitionEnd),
            (s = n),
            (o = i),
            ic(s) ? iy(e, s, r, o) : { target: s, transitionEnd: o }
          );
        },
        ix = { current: null },
        iC = { current: !1 },
        iE = Object.keys(E),
        iF = iE.length,
        ib = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class iw {
        constructor(
          {
            parent: e,
            props: n,
            presenceContext: r,
            reducedMotionConfig: i,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => eS.Z_.render(this.render, !1, !0));
          let { latestValues: a, renderState: u } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = n.initial ? { ...a } : {}),
            (this.renderState = u),
            (this.parent = e),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.isControllingVariants = y(n)),
            (this.isVariantNode = _(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(e && e.current));
          let { willChange: l, ...c } = this.scrapeMotionValuesFromProps(n, {});
          for (let e in c) {
            let n = c[e];
            void 0 !== a[e] && L(n) && (n.set(a[e], !1), eF(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, n) {
          return {};
        }
        mount(e) {
          (this.current = e),
            this.projection && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, n) => this.bindToMotionValue(n, e)),
            iC.current ||
              (function () {
                if (((iC.current = !0), F.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      n = () => (ix.current = e.matches);
                    e.addListener(n), n();
                  } else ix.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ix.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (this.projection && this.projection.unmount(),
          eS.qY.update(this.notifyUpdate),
          eS.qY.render(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, n) {
          let r = O.has(e),
            i = n.on("change", (n) => {
              (this.latestValues[e] = n),
                this.props.onUpdate && eS.Z_.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = n.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            i(), s();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...n }, r, i, s, o) {
          let a, u;
          for (let e = 0; e < iF; e++) {
            let r = iE[e],
              {
                isEnabled: i,
                Feature: s,
                ProjectionNode: o,
                MeasureLayout: l,
              } = E[r];
            o && (a = o),
              i(n) &&
                (!this.features[r] && s && (this.features[r] = new s(this)),
                l && (u = l));
          }
          if (!this.projection && a) {
            this.projection = new a(
              s,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: r,
              drag: i,
              dragConstraints: u,
              layoutScroll: l,
              layoutRoot: c,
            } = n;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: Boolean(i) || (u && D(u)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: o,
              layoutScroll: l,
              layoutRoot: c,
            });
          }
          return u;
        }
        updateFeatures() {
          for (let e in this.features) {
            let n = this.features[e];
            n.isMounted
              ? n.update(this.props, this.prevProps)
              : (n.mount(), (n.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : n2();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, n) {
          this.latestValues[e] = n;
        }
        makeTargetAnimatable(e, n = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, n);
        }
        update(e, n) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = n);
          for (let n = 0; n < ib.length; n++) {
            let r = ib[n];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = e["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (e, n, r) {
            let { willChange: i } = n;
            for (let s in n) {
              let o = n[s],
                a = r[s];
              if (L(o)) e.addValue(s, o), eF(i) && i.add(s);
              else if (L(a))
                e.addValue(s, (0, t8.B)(o, { owner: e })), eF(i) && i.remove(s);
              else if (a !== o) {
                if (e.hasValue(s)) {
                  let n = e.getValue(s);
                  n.hasAnimated || n.set(o);
                } else {
                  let n = e.getStaticValue(s);
                  e.addValue(s, (0, t8.B)(void 0 !== n ? n : o, { owner: e }));
                }
              }
            }
            for (let i in r) void 0 === n[i] && e.removeValue(i);
            return n;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let n = {};
          for (let e = 0; e < iT; e++) {
            let r = iA[e],
              i = this.props[r];
            (m(i) || !1 === i) && (n[r] = i);
          }
          return n;
        }
        addVariantChild(e) {
          let n = this.getClosestVariantNode();
          if (n)
            return (
              n.variantChildren && n.variantChildren.add(e),
              () => n.variantChildren.delete(e)
            );
        }
        addValue(e, n) {
          n !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, n)),
            this.values.set(e, n),
            (this.latestValues[e] = n.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let n = this.valueSubscriptions.get(e);
          n && (n(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, n) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== n &&
              ((r = (0, t8.B)(n, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current
            ? this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, n) {
          this.baseTarget[e] = n;
        }
        getBaseTarget(e) {
          var n;
          let { initial: r } = this.props,
            i =
              "string" == typeof r || "object" == typeof r
                ? null === (n = tw(this.props, r)) || void 0 === n
                  ? void 0
                  : n[e]
                : void 0;
          if (r && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, e);
          return void 0 === s || L(s)
            ? void 0 !== this.initialValues[e] && void 0 === i
              ? void 0
              : this.baseTarget[e]
            : s;
        }
        on(e, n) {
          return (
            this.events[e] || (this.events[e] = new rC.L()),
            this.events[e].add(n)
          );
        }
        notify(e, ...n) {
          this.events[e] && this.events[e].notify(...n);
        }
      }
      let iA = ["initial", ...nP],
        iT = iA.length;
      class iS extends iw {
        sortInstanceNodePosition(e, n) {
          return 2 & e.compareDocumentPosition(n) ? 1 : -1;
        }
        getBaseTargetFromProps(e, n) {
          return e.style ? e.style[n] : void 0;
        }
        removeValueFromRenderState(e, { vars: n, style: r }) {
          delete n[e], delete r[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: n, ...r },
          { transformValues: i },
          s
        ) {
          let o = (function (e, n, r) {
            let i = {};
            for (let s in e) {
              let e = (function (e, n) {
                if (!n) return;
                let r = n[e] || n.default || n;
                return r.from;
              })(s, n);
              if (void 0 !== e) i[s] = e;
              else {
                let e = r.getValue(s);
                e && (i[s] = e.get());
              }
            }
            return i;
          })(r, e || {}, this);
          if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
            !(function (e, n, r) {
              var i, s;
              let o = Object.keys(n).filter((n) => !e.hasValue(n)),
                a = o.length;
              if (a)
                for (let u = 0; u < a; u++) {
                  let a = o[u],
                    l = n[a],
                    c = null;
                  Array.isArray(l) && (c = l[0]),
                    null === c &&
                      (c =
                        null !==
                          (s =
                            null !== (i = r[a]) && void 0 !== i
                              ? i
                              : e.readValue(a)) && void 0 !== s
                          ? s
                          : n[a]),
                    null != c &&
                      ("string" == typeof c && (t3(c) || t6(c))
                        ? (c = parseFloat(c))
                        : !eC(c) && ec.test(l) && (c = eg(a, l)),
                      e.addValue(a, (0, t8.B)(c, { owner: e })),
                      void 0 === r[a] && (r[a] = c),
                      null !== c && e.setBaseTarget(a, c));
                }
            })(this, r, o);
            let e = i_(this, r, o, n);
            (n = e.transitionEnd), (r = e.target);
          }
          return { transition: e, transitionEnd: n, ...r };
        }
      }
      class ij extends iS {
        readValueFromInstance(e, n) {
          if (O.has(n)) {
            let e = em(n);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              i = (I(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: n }) {
          return ru(e, n);
        }
        build(e, n, r, i) {
          to(e, n, r, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, n) {
          return tF(e, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          L(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, n, r, i) {
          tx(e, n, r, i);
        }
      }
      class iP extends iS {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, n) {
          return e[n];
        }
        readValueFromInstance(e, n) {
          if (O.has(n)) {
            let e = em(n);
            return (e && e.default) || 0;
          }
          return (n = tC.has(n) ? n : t_(n)), e.getAttribute(n);
        }
        measureInstanceViewportBox() {
          return n2();
        }
        scrapeMotionValuesFromProps(e, n) {
          return tb(e, n);
        }
        build(e, n, r, i) {
          tm(e, n, r, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(e, n, r, i) {
          tE(e, n, r, i);
        }
        mount(e) {
          (this.isSVGTag = tv(e.tagName)), super.mount(e);
        }
      }
      let iB = (e, n) =>
          B(e)
            ? new iP(n, { enableHardwareAcceleration: !1 })
            : new ij(n, { enableHardwareAcceleration: !0 }),
        ik = {
          animation: {
            Feature: class extends tq {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let n = (n) =>
                          Promise.all(
                            n.map(({ animation: n, options: r }) =>
                              (function (e, n, r = {}) {
                                let i;
                                if (
                                  (e.notify("AnimationStart", n),
                                  Array.isArray(n))
                                ) {
                                  let s = n.map((n) => nT(e, n, r));
                                  i = Promise.all(s);
                                } else if ("string" == typeof n)
                                  i = nT(e, n, r);
                                else {
                                  let s =
                                    "function" == typeof n
                                      ? eE(e, n, r.custom)
                                      : n;
                                  i = nS(e, s, r);
                                }
                                return i.then(() =>
                                  e.notify("AnimationComplete", n)
                                );
                              })(e, n, r)
                            )
                          ),
                        r = {
                          [a.Animate]: nM(!0),
                          [a.InView]: nM(),
                          [a.Hover]: nM(),
                          [a.Tap]: nM(),
                          [a.Drag]: nM(),
                          [a.Focus]: nM(),
                          [a.Exit]: nM(),
                        },
                        i = !0,
                        s = (n, r) => {
                          let i = eE(e, r);
                          if (i) {
                            let { transition: e, transitionEnd: r, ...s } = i;
                            n = { ...n, ...s, ...r };
                          }
                          return n;
                        };
                      function o(o, a) {
                        let u = e.getProps(),
                          l = e.getVariantContext(!0) || {},
                          c = [],
                          h = new Set(),
                          d = {},
                          f = 1 / 0;
                        for (let n = 0; n < nk; n++) {
                          var p;
                          let D = nB[n],
                            v = r[D],
                            y = void 0 !== u[D] ? u[D] : l[D],
                            _ = m(y),
                            x = D === a ? v.isActive : null;
                          !1 === x && (f = n);
                          let C = y === l[D] && y !== u[D] && _;
                          if (
                            (C && i && e.manuallyAnimateOnMount && (C = !1),
                            (v.protectedKeys = { ...d }),
                            (!v.isActive && null === x) ||
                              (!y && !v.prevProp) ||
                              g(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let E =
                              ((p = v.prevProp),
                              "string" == typeof y
                                ? y !== p
                                : !!Array.isArray(y) && !t2(y, p)),
                            F =
                              E ||
                              (D === a && v.isActive && !C && _) ||
                              (n > f && _),
                            b = Array.isArray(y) ? y : [y],
                            w = b.reduce(s, {});
                          !1 === x && (w = {});
                          let { prevResolvedValues: A = {} } = v,
                            T = { ...A, ...w },
                            S = (e) => {
                              (F = !0), h.delete(e), (v.needsAnimating[e] = !0);
                            };
                          for (let e in T) {
                            let n = w[e],
                              r = A[e];
                            d.hasOwnProperty(e) ||
                              (n !== r
                                ? tA(n) && tA(r)
                                  ? !t2(n, r) || E
                                    ? S(e)
                                    : (v.protectedKeys[e] = !0)
                                  : void 0 !== n
                                  ? S(e)
                                  : h.add(e)
                                : void 0 !== n && h.has(e)
                                ? S(e)
                                : (v.protectedKeys[e] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = w),
                            v.isActive && (d = { ...d, ...w }),
                            i && e.blockInitialAnimation && (F = !1),
                            F &&
                              !C &&
                              c.push(
                                ...b.map((e) => ({
                                  animation: e,
                                  options: { type: D, ...o },
                                }))
                              );
                        }
                        if (h.size) {
                          let n = {};
                          h.forEach((r) => {
                            let i = e.getBaseTarget(r);
                            void 0 !== i && (n[r] = i);
                          }),
                            c.push({ animation: n });
                        }
                        let D = Boolean(c.length);
                        return (
                          i &&
                            !1 === u.initial &&
                            !e.manuallyAnimateOnMount &&
                            (D = !1),
                          (i = !1),
                          D ? n(c) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (n, i, s) {
                          if (r[n].isActive === i) return Promise.resolve();
                          e.variantChildren &&
                            e.variantChildren.forEach((e) => {
                              e.animationState &&
                                e.animationState.setActive(n, i);
                            }),
                            (r[n].isActive = i);
                          let a = o(s, n);
                          for (let e in r) r[e].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (r) {
                          n = r(e);
                        },
                        getState: () => r,
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                this.unmount(), g(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: n } = this.node.prevProps || {};
                e !== n && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tq {
              constructor() {
                super(...arguments), (this.id = nO++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: e,
                    onExitComplete: n,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === i) return;
                let s = this.node.animationState.setActive(a.Exit, !e, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                n && !e && s.then(() => n(this.id));
              }
              mount() {
                let { register: e } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tq {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              viewportFallback() {
                requestAnimationFrame(() => {
                  this.hasEnteredView = !0;
                  let { onViewportEnter: e } = this.node.getProps();
                  e && e(null),
                    this.node.animationState &&
                      this.node.animationState.setActive(a.InView, !0);
                });
              }
              startObserver() {
                this.unmount();
                let { viewport: e = {} } = this.node.getProps(),
                  {
                    root: n,
                    margin: r,
                    amount: i = "some",
                    once: s,
                    fallback: o = !0,
                  } = e;
                if ("undefined" == typeof IntersectionObserver) {
                  o && this.viewportFallback();
                  return;
                }
                let u = {
                    root: n ? n.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof i ? i : t1[i],
                  },
                  l = (e) => {
                    let { isIntersecting: n } = e;
                    if (
                      this.isInView === n ||
                      ((this.isInView = n), s && !n && this.hasEnteredView)
                    )
                      return;
                    n && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive(a.InView, n);
                    let { onViewportEnter: r, onViewportLeave: i } =
                        this.node.getProps(),
                      o = n ? r : i;
                    o && o(e);
                  };
                return (function (e, n, r) {
                  let i = (function ({ root: e, ...n }) {
                    let r = e || document;
                    tJ.has(r) || tJ.set(r, {});
                    let i = tJ.get(r),
                      s = JSON.stringify(n);
                    return (
                      i[s] ||
                        (i[s] = new IntersectionObserver(t0, {
                          root: e,
                          ...n,
                        })),
                      i[s]
                    );
                  })(n);
                  return (
                    tK.set(e, r),
                    i.observe(e),
                    () => {
                      tK.delete(e), i.unobserve(e);
                    }
                  );
                })(this.node.current, u, l);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: e, prevProps: n } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: e = {} },
                      { viewport: n = {} } = {}
                    ) {
                      return (r) => e[r] !== n[r];
                    })(e, n)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tq {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tX),
                  (this.removeEndListeners = tX),
                  (this.removeAccessibleListeners = tX),
                  (this.startPointerPress = (e, n) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      i = (e, n) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: r, onTapCancel: i } = this.node.getProps();
                        t$(this.node.current, e.target)
                          ? r && r(e, n)
                          : i && i(e, n);
                      },
                      s = tN(window, "pointerup", i, {
                        passive: !(r.onTap || r.onPointerUp),
                      }),
                      o = tN(
                        window,
                        "pointercancel",
                        (e, n) => this.cancelPress(e, n),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = tI(s, o)), this.startPress(e, n);
                  }),
                  (this.startAccessiblePress = () => {
                    let e = (e) => {
                        if ("Enter" !== e.key || this.isPressing) return;
                        let n = (e) => {
                          "Enter" === e.key &&
                            this.checkPressEnd() &&
                            tG("up", this.node.getProps().onTap);
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tM(
                            this.node.current,
                            "keyup",
                            n
                          )),
                          tG("down", (e, n) => {
                            this.startPress(e, n);
                          });
                      },
                      n = tM(this.node.current, "keydown", e),
                      r = () => {
                        this.isPressing &&
                          tG("cancel", (e, n) => this.cancelPress(e, n));
                      },
                      i = tM(this.node.current, "blur", r);
                    this.removeAccessibleListeners = tI(n, i);
                  });
              }
              startPress(e, n) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: i } = this.node.getProps();
                i &&
                  this.node.animationState &&
                  this.node.animationState.setActive(a.Tap, !0),
                  r && r(e, n);
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let e = this.node.getProps();
                return (
                  e.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive(a.Tap, !1),
                  !tH()
                );
              }
              cancelPress(e, n) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && r(e, n);
              }
              mount() {
                let e = this.node.getProps(),
                  n = tN(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(e.onTapStart || e.onPointerStart) }
                  ),
                  r = tM(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tI(n, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tq {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (n) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive(a.Focus, !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive(a.Focus, !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tI(
                  tM(this.node.current, "focus", () => this.onFocus()),
                  tM(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tq {
              mount() {
                this.unmount = tI(tY(this.node, !0), tY(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tq {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tX);
              }
              onPointerDown(e) {
                this.session = new nL(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: n,
                  onPan: r,
                  onPanEnd: i,
                } = this.node.getProps();
                return {
                  onSessionStart: e,
                  onStart: n,
                  onMove: r,
                  onEnd: (e, n) => {
                    delete this.session, i && i(e, n);
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tN(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tq {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = tX),
                  (this.removeListeners = tX),
                  (this.controls = new rc(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tX);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: ia,
            MeasureLayout: r_,
          },
          layout: { ProjectionNode: ia, MeasureLayout: r_ },
        },
        iM = (function (e) {
          function n(n, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: n,
              useRender: r,
              useVisualState: i,
              Component: s,
            }) {
              e &&
                (function (e) {
                  for (let n in e) E[n] = { ...E[n], ...e[n] };
                })(e);
              let o = (0, l.forwardRef)(function (o, a) {
                var u, g;
                let v;
                let _ = {
                    ...(0, l.useContext)(c),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let n = (0, l.useContext)(T.p).id;
                      return n && void 0 !== e ? n + "-" + e : e;
                    })(o),
                  },
                  { isStatic: C } = _,
                  E = (function (e) {
                    let { initial: n, animate: r } = (function (e, n) {
                      if (y(e)) {
                        let { initial: n, animate: r } = e;
                        return {
                          initial: !1 === n || m(n) ? n : void 0,
                          animate: m(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? n : {};
                    })(e, (0, l.useContext)(h));
                    return (0, l.useMemo)(
                      () => ({ initial: n, animate: r }),
                      [x(n), x(r)]
                    );
                  })(o),
                  j = C
                    ? void 0
                    : (0, b.h)(() => {
                        if (w.hasEverUpdated) return A++;
                      }),
                  P = i(o, C);
                if (!C && F.j) {
                  E.visualElement = (function (e, n, r, i) {
                    let s = (0, l.useContext)(h).visualElement,
                      o = (0, l.useContext)(p),
                      a = (0, l.useContext)(d.O),
                      u = (0, l.useContext)(c).reducedMotion,
                      D = (0, l.useRef)();
                    (i = i || o.renderer),
                      !D.current &&
                        i &&
                        (D.current = i(e, {
                          visualState: n,
                          parent: s,
                          props: r,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: u,
                        }));
                    let m = D.current;
                    (0, l.useInsertionEffect)(() => {
                      m && m.update(r, a);
                    }),
                      (0, f.L)(() => {
                        m && m.render();
                      }),
                      (0, l.useEffect)(() => {
                        m && m.updateFeatures();
                      });
                    let g = window.HandoffAppearAnimations ? f.L : l.useEffect;
                    return (
                      g(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      m
                    );
                  })(s, P, _, n);
                  let r = (0, l.useContext)(S),
                    i = (0, l.useContext)(p).strict;
                  E.visualElement &&
                    (v = E.visualElement.loadFeatures(_, i, e, j, r));
                }
                return l.createElement(
                  h.Provider,
                  { value: E },
                  v && E.visualElement
                    ? l.createElement(v, {
                        visualElement: E.visualElement,
                        ..._,
                      })
                    : null,
                  r(
                    s,
                    o,
                    j,
                    ((u = E.visualElement),
                    (g = a),
                    (0, l.useCallback)(
                      (e) => {
                        e && P.mount && P.mount(e),
                          u && (e ? u.mount(e) : u.unmount()),
                          g &&
                            ("function" == typeof g
                              ? g(e)
                              : D(g) && (g.current = e));
                      },
                      [u]
                    )),
                    P,
                    C,
                    E.visualElement
                  )
                );
              });
              return (o[j] = s), o;
            })(e(n, r));
          }
          if ("undefined" == typeof Proxy) return n;
          let r = new Map();
          return new Proxy(n, {
            get: (e, i) => (r.has(i) || r.set(i, n(i)), r.get(i)),
          });
        })((e, n) =>
          (function (e, { forwardMotionProps: n = !1 }, r, i) {
            let s = B(e) ? tB : tk;
            return {
              ...s,
              preloadedFeatures: r,
              useRender: (function (e = !1) {
                let n = (n, r, i, s, { latestValues: o }, a) => {
                  let u = B(n) ? ty : tl,
                    c = u(r, o, a, n),
                    h = (function (e, n, r) {
                      let i = {};
                      for (let s in e)
                        ("values" !== s || "object" != typeof e.values) &&
                          (td(s) ||
                            (!0 === r && th(s)) ||
                            (!n && !th(s)) ||
                            (e.draggable && s.startsWith("onDrag"))) &&
                          (i[s] = e[s]);
                      return i;
                    })(r, "string" == typeof n, e),
                    d = { ...h, ...c, ref: s },
                    { children: f } = r,
                    p = (0, l.useMemo)(() => (L(f) ? f.get() : f), [f]);
                  return (
                    i && (d["data-projection-id"] = i),
                    (0, l.createElement)(n, { ...d, children: p })
                  );
                };
                return n;
              })(n),
              createVisualElement: i,
              Component: e,
            };
          })(e, n, ik, iB)
        );
    },
    10: function (e, n, r) {
      "use strict";
      function i(e, n) {
        -1 === e.indexOf(n) && e.push(n);
      }
      function s(e, n) {
        let r = e.indexOf(n);
        r > -1 && e.splice(r, 1);
      }
      r.d(n, {
        cl: function () {
          return s;
        },
        y4: function () {
          return i;
        },
      });
    },
    1741: function (e, n, r) {
      "use strict";
      r.d(n, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    1560: function (e, n, r) {
      "use strict";
      r.d(n, {
        L: function () {
          return s;
        },
      });
      var i = r(10);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, i.y4)(this.subscriptions, e),
            () => (0, i.cl)(this.subscriptions, e)
          );
        }
        notify(e, n, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, n, r);
            else
              for (let s = 0; s < i; s++) {
                let i = this.subscriptions[s];
                i && i(e, n, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6681: function (e, n, r) {
      "use strict";
      r.d(n, {
        h: function () {
          return s;
        },
      });
      var i = r(5784);
      function s(e) {
        let n = (0, i.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
    },
    8868: function (e, n, r) {
      "use strict";
      r.d(n, {
        L: function () {
          return o;
        },
      });
      var i = r(5784),
        s = r(1741);
      let o = s.j ? i.useLayoutEffect : i.useEffect;
    },
    3038: function (e, n, r) {
      "use strict";
      function i(e, n) {
        return n ? e * (1e3 / n) : 0;
      }
      r.d(n, {
        R: function () {
          return i;
        },
      });
    },
    3234: function (e, n, r) {
      "use strict";
      r.d(n, {
        B: function () {
          return c;
        },
      });
      var i = r(7367),
        s = r(404),
        o = r(1560),
        a = r(3038);
      let u = (e) => !isNaN(parseFloat(e));
      class l {
        constructor(e, n = {}) {
          (this.version = "9.0.4"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, n = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: r, timestamp: o } = i.w;
              this.lastUpdated !== o &&
                ((this.timeDelta = r),
                (this.lastUpdated = o),
                s.Z_.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                n &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              s.Z_.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = u(this.current)),
            (this.owner = n.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, n) {
          this.events[e] || (this.events[e] = new o.L());
          let r = this.events[e].add(n);
          return "change" === e
            ? () => {
                r(),
                  s.Z_.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, n) {
          (this.passiveEffect = e), (this.stopPassiveEffect = n);
        }
        set(e, n = !0) {
          n && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, n);
        }
        setWithVelocity(e, n, r) {
          this.set(n), (this.prev = e), (this.timeDelta = r);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, a.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((n) => {
              (this.hasAnimated = !0),
                (this.animation = e(n) || null),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = null;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, n) {
        return new l(e, n);
      }
    },
    521: function (e, n, r) {
      "use strict";
      let i, s;
      r.d(n, {
        v: function () {
          return U;
        },
      });
      var o = r(655);
      let a = new WeakMap();
      function u({ target: e, contentRect: n, borderBoxSize: r }) {
        var i;
        null === (i = a.get(e)) ||
          void 0 === i ||
          i.forEach((i) => {
            i({
              target: e,
              contentSize: n,
              get size() {
                return (function (e, n) {
                  if (n) {
                    let { inlineSize: e, blockSize: r } = n[0];
                    return { width: e, height: r };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, r);
              },
            });
          });
      }
      function l(e) {
        e.forEach(u);
      }
      let c = new Set(),
        h = (e) => "function" == typeof e,
        d = (e, n, r) => (n - e == 0 ? 1 : (r - e) / (n - e)),
        f = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        p = () => ({ time: 0, x: f(), y: f() }),
        D = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function m(e, n, r, i) {
        var s;
        let o = r[n],
          { length: a, position: u } = D[n],
          l = o.current,
          c = r.time;
        (o.current = e["scroll" + u]),
          (o.scrollLength = e["scroll" + a] - e["client" + a]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = d(0, o.scrollLength, o.current));
        let h = i - c;
        o.velocity = h > 50 ? 0 : ((s = o.current - l), h ? s * (1e3 / h) : 0);
      }
      let g = (e) => e,
        v = (e, n, r) => -r * e + r * n + e;
      function y(e, n) {
        let r = e[e.length - 1];
        for (let i = 1; i <= n; i++) {
          let s = d(0, n, i);
          e.push(v(r, 1, s));
        }
      }
      function _(e) {
        let n = [0];
        return y(n, e - 1), n;
      }
      let x = (e) => "number" == typeof e,
        C = (e) => Array.isArray(e) && !x(e[0]),
        E = (e, n, r) => {
          let i = n - e;
          return ((((r - e) % i) + i) % i) + e;
        },
        F = (e, n, r) => Math.min(Math.max(r, e), n),
        b = {
          Enter: [
            [0, 1],
            [1, 1],
          ],
          Exit: [
            [0, 0],
            [1, 0],
          ],
          Any: [
            [1, 0],
            [0, 1],
          ],
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        w = (e) => "string" == typeof e,
        A = { start: 0, center: 0.5, end: 1 };
      function T(e, n, r = 0) {
        let i = 0;
        if ((void 0 !== A[e] && (e = A[e]), w(e))) {
          let n = parseFloat(e);
          e.endsWith("px")
            ? (i = n)
            : e.endsWith("%")
            ? (e = n / 100)
            : e.endsWith("vw")
            ? (i = (n / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (i = (n / 100) * document.documentElement.clientHeight)
            : (e = n);
        }
        return x(e) && (i = n * e), r + i;
      }
      let S = [0, 0],
        j = { x: 0, y: 0 },
        P = new WeakMap(),
        B = new WeakMap(),
        k = new WeakMap(),
        M = (e) => (e === document.documentElement ? window : e);
      var O = r(3234),
        R = r(6681),
        L = r(5784),
        N = r(4394),
        V = r(8868);
      function I(e, n) {
        (0, N.K)(
          Boolean(!n || n.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let z = () => ({
        scrollX: (0, O.B)(0),
        scrollY: (0, O.B)(0),
        scrollXProgress: (0, O.B)(0),
        scrollYProgress: (0, O.B)(0),
      });
      function U({ container: e, target: n, layoutEffect: r = !0, ...u } = {}) {
        let f = (0, R.h)(z),
          D = r ? V.L : L.useEffect;
        return (
          D(
            () => (
              I("target", n),
              I("container", e),
              (function (e, n = {}) {
                var { container: r = document.documentElement } = n,
                  u = (0, o.__rest)(n, ["container"]);
                let f = k.get(r);
                f || ((f = new Set()), k.set(r, f));
                let D = p(),
                  O = (function (e, n, r, i = {}) {
                    var s, o;
                    let a = i.axis || "y";
                    return {
                      measure: () =>
                        (function (e, n = e, r) {
                          if (
                            ((r.x.targetOffset = 0),
                            (r.y.targetOffset = 0),
                            n !== e)
                          ) {
                            let i = n;
                            for (; i && i != e; )
                              (r.x.targetOffset += i.offsetLeft),
                                (r.y.targetOffset += i.offsetTop),
                                (i = i.offsetParent);
                          }
                          (r.x.targetLength =
                            n === e ? n.scrollWidth : n.clientWidth),
                            (r.y.targetLength =
                              n === e ? n.scrollHeight : n.clientHeight),
                            (r.x.containerLength = e.clientWidth),
                            (r.y.containerLength = e.clientHeight);
                        })(e, i.target, r),
                      update: (n) => {
                        var s;
                        m(e, "x", (s = r), n),
                          m(e, "y", s, n),
                          (s.time = n),
                          (i.offset || i.target) &&
                            (function (e, n, r) {
                              let { offset: i = b.All } = r,
                                { target: s = e, axis: o = "y" } = r,
                                a = "y" === o ? "height" : "width",
                                u =
                                  s !== e
                                    ? (function (e, n) {
                                        let r = { x: 0, y: 0 },
                                          i = e;
                                        for (; i && i !== n; )
                                          if (i instanceof HTMLElement)
                                            (r.x += i.offsetLeft),
                                              (r.y += i.offsetTop),
                                              (i = i.offsetParent);
                                          else if (
                                            i instanceof SVGGraphicsElement &&
                                            "getBBox" in i
                                          ) {
                                            let { top: e, left: n } =
                                              i.getBBox();
                                            for (
                                              r.x += n, r.y += e;
                                              i && "svg" !== i.tagName;

                                            )
                                              i = i.parentNode;
                                          }
                                        return r;
                                      })(s, e)
                                    : j,
                                l =
                                  s === e
                                    ? {
                                        width: e.scrollWidth,
                                        height: e.scrollHeight,
                                      }
                                    : {
                                        width: s.clientWidth,
                                        height: s.clientHeight,
                                      },
                                c = {
                                  width: e.clientWidth,
                                  height: e.clientHeight,
                                };
                              n[o].offset.length = 0;
                              let h = !n[o].interpolate,
                                f = i.length;
                              for (let e = 0; e < f; e++) {
                                let r = (function (e, n, r, i) {
                                  let s = Array.isArray(e) ? e : S,
                                    o = 0;
                                  return (
                                    x(e)
                                      ? (s = [e, e])
                                      : w(e) &&
                                        (s = (e = e.trim()).includes(" ")
                                          ? e.split(" ")
                                          : [e, A[e] ? e : "0"]),
                                    T(s[0], r, i) - T(s[1], n)
                                  );
                                })(i[e], c[a], l[a], u[o]);
                                h ||
                                  r === n[o].interpolatorOffsets[e] ||
                                  (h = !0),
                                  (n[o].offset[e] = r);
                              }
                              h &&
                                ((n[o].interpolate = (function (
                                  e,
                                  n = _(e.length),
                                  r = g
                                ) {
                                  let i = e.length,
                                    s = i - n.length;
                                  return (
                                    s > 0 && y(n, s),
                                    (s) => {
                                      var o;
                                      let a = 0;
                                      for (; a < i - 2 && !(s < n[a + 1]); a++);
                                      let u = F(0, 1, d(n[a], n[a + 1], s)),
                                        l =
                                          ((o = a),
                                          C(r) ? r[E(0, r.length, o)] : r);
                                      return (u = l(u)), v(e[a], e[a + 1], u);
                                    }
                                  );
                                })(_(f), n[o].offset)),
                                (n[o].interpolatorOffsets = [...n[o].offset])),
                                (n[o].progress = n[o].interpolate(
                                  n[o].current
                                ));
                            })(e, r, i);
                      },
                      notify: h(n)
                        ? () => n(r)
                        : ((s = n),
                          (o = r[a]),
                          s.pause(),
                          s.forEachNative((e, { easing: n }) => {
                            var r, i;
                            if (e.updateDuration)
                              n || (e.easing = g), e.updateDuration(1);
                            else {
                              let s = { duration: 1e3 };
                              n || (s.easing = "linear"),
                                null ===
                                  (i =
                                    null === (r = e.effect) || void 0 === r
                                      ? void 0
                                      : r.updateTiming) ||
                                  void 0 === i ||
                                  i.call(r, s);
                            }
                          }),
                          () => {
                            s.currentTime = o.progress;
                          }),
                    };
                  })(r, e, D, u);
                if ((f.add(O), !P.has(r))) {
                  let e = () => {
                    let e = performance.now();
                    for (let e of f) e.measure();
                    for (let n of f) n.update(e);
                    for (let e of f) e.notify();
                  };
                  P.set(r, e);
                  let n = M(r);
                  window.addEventListener("resize", e, { passive: !0 }),
                    r !== document.documentElement &&
                      B.set(
                        r,
                        h(r)
                          ? (c.add(r),
                            s ||
                              ((s = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  n = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                c.forEach((e) => e(n));
                              }),
                              window.addEventListener("resize", s)),
                            () => {
                              c.delete(r), !c.size && s && (s = void 0);
                            })
                          : (function (e, n) {
                              var r, s, o;
                              i ||
                                "undefined" == typeof ResizeObserver ||
                                (i = new ResizeObserver(l));
                              let u =
                                ("string" == typeof (r = e)
                                  ? s
                                    ? ((null !== (o = s[r]) && void 0 !== o) ||
                                        (s[r] = document.querySelectorAll(r)),
                                      (r = s[r]))
                                    : (r = document.querySelectorAll(r))
                                  : r instanceof Element && (r = [r]),
                                Array.from(r || []));
                              return (
                                u.forEach((e) => {
                                  let r = a.get(e);
                                  r || ((r = new Set()), a.set(e, r)),
                                    r.add(n),
                                    null == i || i.observe(e);
                                }),
                                () => {
                                  u.forEach((e) => {
                                    let r = a.get(e);
                                    null == r || r.delete(n),
                                      (null == r ? void 0 : r.size) ||
                                        null == i ||
                                        i.unobserve(e);
                                  });
                                }
                              );
                            })(r, e)
                      ),
                    n.addEventListener("scroll", e, { passive: !0 });
                }
                let R = P.get(r),
                  L = requestAnimationFrame(R);
                return () => {
                  var n;
                  "function" != typeof e && e.stop(), cancelAnimationFrame(L);
                  let i = k.get(r);
                  if (!i || (i.delete(O), i.size)) return;
                  let s = P.get(r);
                  P.delete(r),
                    s &&
                      (M(r).removeEventListener("scroll", s),
                      null === (n = B.get(r)) || void 0 === n || n(),
                      window.removeEventListener("resize", s));
                };
              })(
                ({ x: e, y: n }) => {
                  f.scrollX.set(e.current),
                    f.scrollXProgress.set(e.progress),
                    f.scrollY.set(n.current),
                    f.scrollYProgress.set(n.progress);
                },
                {
                  ...u,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == n ? void 0 : n.current) || void 0,
                }
              )
            ),
            []
          ),
          f
        );
      }
    },
  },
  function (e) {
    var n = function (n) {
      return e((e.s = n));
    };
    e.O(0, [774, 179], function () {
      return n(3837), n(5337);
    }),
      (_N_E = e.O());
  },
]);
