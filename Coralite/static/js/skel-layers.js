/* skel-layers.js v1.0.3 | (c) n33 | getskel.com | MIT licensed */
skel.registerPlugin("layers", function (e) {
    function cn(e, r, i) {
        var o, u;
        this.id = e, this.index = i, this[n] = {
            breakpoints: x,
            states: x,
            position: x,
            side: x,
            animation: mt,
            orientation: mt,
            width: 0,
            height: 0,
            zIndex: this.index,
            html: "",
            hidden: H,
            exclusive: V,
            resetScroll: V,
            resetForms: V,
            swipeToHide: V,
            clickToHide: H
        }, t._.extend(this[n], r), this[j] = t._.newDiv(this[n][jt]), this[j].id = e, this[j]._layer = this, this[s] = x, this[bt] = x, this[St] = x, this[z] = H, u = t._.newElement(this.id, this[j], ut, 1), u.onAttach = function () {
            var e = this[$t]._layer;
            e[Z]() || e.init(), e.resume()
        }, u.onDetach = function () {
            var e = this[$t]._layer;
            e.suspend()
        }, this[n].states && this[n].states != t._.sd ? (t._.cacheElement(u), o = t._[un](this[n].states), t._[Ht](o, function (e) {
            t._.addCachedElementToState(o[e], u)
        })) : this[n].breakpoints ? (t._.cacheElement(u), o = t._[un](this[n].breakpoints), t._[Ht](o, function (e) {
            t._.addCachedElementToBreakpoint(o[e], u)
        })) : t._.attachElement(u)
    }

    var t, n = "config", r = "_skel_layers_translateOrigin", i = "cache", s = "$element", o = "_skel_layers_translate",
        u = "visibleWrapper", f = "_skel_layers_resetForms", l = "_skel_layers_resume", c = "_skel_layers_promote",
        h = "exclusiveLayer", p = "_skel_layers_demote", d = "moveToVisibleWrapper", v = "setTimeout",
        m = "moveToHiddenWrapper", g = "right", y = "bottom", b = "position", w = "useActive", E = "width", S = "css",
        x = null, T = "center", N = "_skel_layers_suspend", C = "prototype", k = "left", L = "wrapper",
        A = "skel-layers-layer-z-index", O = "children", M = "_skel_layers_init", _ = "skel-layers-moved",
        D = "overflow-x", P = "hiddenWrapper", H = !1, B = "scrollTop", j = "element",
        F = ".skel-layers-fixed:not(.skel-layers-moved)", I = "transform", q = "top", R = "height", U = "length",
        z = "visible", W = "touchstart.lock click.lock scroll.lock", X = '<div id="skel-layers-placeholder-', V = !0,
        $ = "resetForms", J = "-webkit-", K = "recalcW", Q = "skel-layers-exclusiveVisible", G = "padding-bottom",
        Y = "-webkit-tap-highlight-color", Z = "isInitialized", et = "animation", tt = "originalEvent", nt = "hidden",
        rt = "skel-layers-layer-index", it = "z-index", st = "skel-layers-layer-position", ot = "unlockView",
        ut = "skel_layers_hiddenWrapper", at = "#skel-layers-placeholder-", ft = "animations",
        lt = "_skel_layers_initializeCell", ct = "layers", ht = "append", pt = "resize.lock scroll.lock", dt = "speed",
        vt = "registerLocation", mt = "none", gt = "undefined", yt = "orientationchange.lock", bt = "touchPosX",
        wt = "window", Et = "stopPropagation", St = "touchPosY", xt = "positions", Tt = "-moz-", Nt = "blur",
        Ct = "_skel_layers_expandCell", kt = "preventDefault", Lt = "_skel_layers_hasParent", At = "attr", Ot = "find",
        Mt = "deviceType", _t = "-ms-", Dt = "addClass", Pt = "DOMReady", Ht = "iterate", Bt = "lockView", jt = "html",
        Ft = "auto", It = "hide", qt = "_skel_layers_xcss", Rt = "transformBreakpoints", Ut = "-o-",
        zt = "rgba(0,0,0,0)", Wt = "trigger", Xt = "removeClass", Vt = "appendTo", $t = "object", Jt = "cell-size",
        Kt = "-", Qt = "body", Gt = "px", Yt = "recalcH", Zt = "touches", en = "side", tn = "isVisible",
        nn = "relative", rn = "show", sn = "transformTest", on = "*", un = "getArray", an = "#", fn = "x",
        ln = "htmlbody";
    return typeof e == gt ? H : (e.fn[p] = function () {
        var t, n;
        if (this[U] > 1) {
            for (t = 0; t < this[U]; t++) e(this[t])[p]();
            return e(this)
        }
        return n = e(this), n[S](it, n.data(A)).data(A, ""), n
    }, e.fn[Ct] = function () {
        var t = e(this), n = t.parent(), r = 12;
        n[O]().each(function () {
            var t = e(this), n = t[At]("class");
            n && n.match(/(\s+|^)([0-9]+)u(\s+|$)/) && (r -= parseInt(RegExp.$2))
        }), r > 0 && (t[lt](), t[S](E, (t.data(Jt) + r) / 12 * 100 + "%"))
    }, e.fn[Lt] = function () {
        return e(this).parents()[U] > 0
    }, e.fn[lt] = function () {
        var t = e(this);
        t[At]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/) && t.data(Jt, parseInt(RegExp.$2))
    }, e.fn[c] = function (r) {
        var i, s, o;
        if (this[U] > 1) {
            for (i = 0; i < this[U]; i++) e(this[i])[c](r);
            return e(this)
        }
        return s = e(this), isNaN(o = parseInt(s.data(rt))) && (o = 0), s.data(A, s[S](it))[S](it, t[n].baseZIndex + o + (r ? r : 1)), s
    }, e.fn[f] = function () {
        var t = e(this);
        return e(this)[Ot]("form").each(function () {
            this.reset()
        }), t
    }, e.fn[qt] = function (t, n) {
        return e(this)[S](t, n)[S](Tt + t, Tt + n)[S](J + t, J + n)[S](Ut + t, Ut + n)[S](_t + t, _t + n)
    }, e.fn._skel_layers_xcssProperty = function (t, n) {
        return e(this)[S](t, n)[S](Tt + t, n)[S](J + t, n)[S](Ut + t, n)[S](_t + t, n)
    }, e.fn._skel_layers_xcssValue = function (t, n) {
        return e(this)[S](t, n)[S](t, Tt + n)[S](t, J + n)[S](t, Ut + n)[S](t, _t + n)
    }, cn[C][ft] = {
        none: {
            show: function (e) {
                var t = e[n], r = e[s];
                r[B](0)[c](t.zIndex)[rn](), t[$] && r[f](), e[d]()
            }, hide: function (e) {
                var t = e[n], r = e[s];
                r[It]()[p](), e[m]()
            }
        }, overlayX: {
            show: function (e) {
                var r = e[n], i = e[s];
                i[B](0)[c](r.zIndex)[S](r[en], Kt + t[K](t._[w](r[E])) + Gt)[rn](), r[$] && i[f](), t[Bt](fn), e[d](), window[v](function () {
                    i[o]((r[en] == g ? Kt : "") + t[K](t._[w](r[E])), 0)
                }, 50)
            }, hide: function (e) {
                var i = e[n], o = e[s];
                o[Ot](on)[Wt](Nt, [V]), o[r](), window[v](function () {
                    t[ot](fn), e[m](), o[p]()[It]()
                }, t[n][dt] + 50)
            }
        }, overlayY: {
            show: function (e) {
                var r = e[n], i = e[s];
                i[B](0)[c](r.zIndex)[S](r[en], Kt + t[K](t._[w](r[R])) + Gt)[rn](), r[$] && i[f](), t[Bt]("y"), e[d](), window[v](function () {
                    i[o](0, (r[en] == y ? Kt : "") + t[K](t._[w](r[R])))
                }, 50)
            }, hide: function (e) {
                var i = e[n], o = e[s];
                o[Ot](on)[Wt](Nt, [V]), o[r](), window[v](function () {
                    t[ot]("y"), e[m](), o[p]()[It]()
                }, t[n][dt] + 50)
            }
        }, pushX: {
            show: function (e) {
                var r = e[n], a = e[s], l = t[i][L].add(t[i][u][O]());
                a[B](0)[S](r[en], Kt + t[K](t._[w](r[E])) + Gt)[rn](), r[$] && a[f](), l[c](), t[Bt](fn), e[d](), window[v](function () {
                    a.add(l)[o]((r[en] == g ? Kt : "") + t[K](t._[w](r[E])), 0)
                }, 50)
            }, hide: function (e) {
                var o = e[n], a = e[s], f = t[i][L].add(t[i][u][O]());
                a[Ot](on)[Wt](Nt, [V]), a.add(f)[r](), window[v](function () {
                    t[ot](fn), a[It](), e[m](), f[p]()
                }, t[n][dt] + 50)
            }
        }, pushY: {
            show: function (e) {
                var r = e[n], a = e[s], l = t[i][L].add(t[i][u][O]());
                a[B](0)[S](r[en], Kt + t[Yt](t._[w](r[R])) + Gt)[rn](), r[$] && a[f](), t[Bt]("y"), e[d](), window[v](function () {
                    a.add(l)[o](0, (r[en] == y ? Kt : "") + t[Yt](t._[w](r[R])))
                }, 50)
            }, hide: function (e) {
                var o = e[n], a = e[s], f = t[i][L].add(t[i][u][O]());
                a[Ot](on)[Wt](Nt, [V]), a.add(f)[r](), window[v](function () {
                    t[ot]("y"), a[It](), e[m]()
                }, t[n][dt] + 50)
            }
        }, revealX: {
            show: function (e) {
                var r = e[n], a = e[s], l = t[i][L].add(t[i][u][O]());
                a[B](0)[rn](), r[$] && a[f](), l[c](), t[Bt](fn), e[d](), window[v](function () {
                    l[o]((r[en] == g ? Kt : "") + t[K](t._[w](r[E])), 0)
                }, 50)
            }, hide: function (e) {
                var o = e[n], a = e[s], f = t[i][L].add(t[i][u][O]());
                a[Ot](on)[Wt](Nt, [V]), f[r](), window[v](function () {
                    t[ot](fn), a[It](), f[p](), e[m]()
                }, t[n][dt] + 50)
            }
        }
    }, cn[C][xt] = {
        "top-left": {v: q, h: k, side: k},
        "top-right": {v: q, h: g, side: g},
        top: {v: q, h: T, side: q},
        "top-center": {v: q, h: T, side: q},
        "bottom-left": {v: y, h: k, side: k},
        "bottom-right": {v: y, h: g, side: g},
        bottom: {v: y, h: T, side: y},
        "bottom-center": {v: y, h: T, side: y},
        left: {v: T, h: k, side: k},
        "center-left": {v: T, h: k, side: k},
        right: {v: T, h: g, side: g},
        "center-right": {v: T, h: g, side: g}
    }, cn[C][rn] = function () {
        var e, r, o, a, f;
        if (this[z]) {
            t[i][u][ht](this[j]);
            return
        }
        e = this, r = this[n], o = t._[w](r[et]), a = this[s], a[S](E, t._[w](r[E]))[S](R, t._[w](r[R])), t._.vars[Mt] == "ios" && (r[R] == "100%" && !r[nt] && a[S](R, "-webkit-calc(" + t._[w](r[R]) + " + 70px)"), a.on(Nt, "input,select,textarea", function (n, r) {
            if (r) return;
            window[v](function () {
                t[i][P][ht](e[j]), window[v](function () {
                    t[i][u][ht](e[j])
                }, 500)
            }, 500)
        })), f = this[xt][r[b]], a[Dt]("skel-layer-" + r[b]).data(st, r[b]);
        switch (f.v) {
            case q:
                a[S](q, 0);
                break;
            case y:
                a[S](y, 0);
                break;
            case T:
                a[S](q, "50%")[S]("margin-top", Kt + t.getHalf(r[R]))
        }
        switch (f.h) {
            case k:
                a[S](k, 0);
                break;
            case g:
                a[S](g, 0);
                break;
            case T:
                a[S](k, "50%")[S]("margin-left", Kt + t.getHalf(r[E]))
        }
        this[ft][o][rn](this), r[nt] && r.exclusive && (t[i][Qt][Dt](Q), t[i][h] = this), this[z] = V
    }, cn[C][It] = function () {
        var e, r;
        if (!this[z]) {
            t[i][P][ht](this[j]);
            return
        }
        e = this[n], r = t._[w](e[et]), r in this[ft] || (r = mt), this[ft][r][It](this), e[nt] && e.exclusive && t[i][h] === this && (t[i][Qt][Xt](Q), t[i][h] = x), this[z] = H
    }, cn[C].init = function () {
        var r = this[n], i = e(this[j]), o = this;
        i[M](), i[Ot](on).each(function () {
            t.parseInit(e(this))
        }), i[Dt]("skel-layer").data(rt, this.index)[S](it, t[n].baseZIndex)[S](b, "fixed")[S]("-ms-overflow-style", "-ms-autohiding-scrollbar")[S]("-webkit-overflow-scrolling", "touch")[It]();
        switch (r.orientation) {
            case"vertical":
                i[S]("overflow-y", Ft);
                break;
            case"horizontal":
                i[S](D, Ft);
                break;
            case mt:
            default:
        }
        if (!r[b] || !(r[b] in this[xt])) r[b] = "top-left";
        r[en] || (r[en] = this[xt][r[b]][en]);
        if (!r[et] || typeof r[et] !== $t && !(r[et] in this[ft])) r[et] = mt;
        r.clickToHide && i[Ot]("a")[S](Y, zt).on("click.skel-layers", function (r) {
            var i, s, u = e(this);
            if (u.hasClass("skel-layers-ignore")) return;
            r[kt](), r[Et](), o[It]();
            if (u.hasClass("skel-layers-ignoreHref")) return;
            i = u[At]("href"), s = u[At]("target"), typeof i !== gt && i != "" && window[v](function () {
                s == "_blank" && t._.vars[Mt] != "wp" ? window.open(i) : window.location.href = i
            }, t[n][dt] + 10)
        }), i.on("touchstart", function (e) {
            o[bt] = e[tt][Zt][0].pageX, o[St] = e[tt][Zt][0].pageY
        }).on("touchmove", function (e) {
            var t, n, s, u, a, f, l;
            if (o[bt] === x || o[St] === x) return;
            t = o[bt] - e[tt][Zt][0].pageX, n = o[St] - e[tt][Zt][0].pageY, s = i.outerHeight(), u = i.get(0).scrollHeight - i[B]();
            if (r[nt] && r.swipeToHide) {
                a = H, f = 20, l = 50;
                switch (r[en]) {
                    case k:
                        a = n < f && n > -1 * f && t > l;
                        break;
                    case g:
                        a = n < f && n > -1 * f && t < -1 * l;
                        break;
                    case q:
                        a = t < f && t > -1 * f && n > l;
                        break;
                    case y:
                        a = t < f && t > -1 * f && n < -1 * l
                }
                if (a) return o[bt] = x, o[St] = x, o[It](), H
            }
            if (i[B]() == 0 && n < 0 || u > s - 2 && u < s + 2 && n > 0) return H
        }), this[s] = i
    }, cn[C][Z] = function () {
        return this[s] !== x
    }, cn[C][tn] = function () {
        return this[s].is(":visible")
    }, cn[C][d] = function () {
        t[i][u][ht](this[s])
    }, cn[C][m] = function () {
        if (!this[s][Lt]()) return;
        t[i][P][ht](this[s])
    }, cn[C].resume = function (r) {
        if (!this[Z]()) return;
        this[s][Ot](on).each(function () {
            t.parseResume(e(this))
        }), this[n][nt] || this[rn](r)
    }, cn[C].suspend = function () {
        if (!this[Z]()) return;
        this[s][r](), this[s][Ot](on).each(function () {
            t.parseSuspend(e(this))
        }), this[z] && this[It]()
    }, t = {
        cache: {
            visibleWrapper: x,
            body: x,
            exclusiveLayer: x,
            html: x,
            htmlbody: x,
            hiddenWrapper: x,
            layers: {},
            window: x,
            wrapper: x
        },
        config: {baseZIndex: 1e4, layers: {}, speed: 250, transform: V, transformBreakpoints: x, transformTest: x},
        eventType: "click touchend",
        show: function (e) {
            t._[Pt](function () {
                t[i][ct][e][rn]()
            })
        },
        hide: function (e) {
            t._[Pt](function () {
                t[i][ct][e][It]()
            })
        },
        toggle: function (e) {
            t._[Pt](function () {
                var n = t[i][ct][e];
                n[tn]() ? n[It]() : n[rn]()
            })
        },
        getBaseFontSize: function () {
            return t._.vars.IEVersion < 9 ? 16.5 : parseFloat(getComputedStyle(t[i][Qt].get(0)).fontSize)
        },
        getHalf: function (e) {
            var t = parseInt(e);
            return typeof e == "string" && e.charAt(e[U] - 1) == "%" ? Math.floor(t / 2) + "%" : Math.floor(t / 2) + Gt
        },
        lockView: function (e) {
            t[i][wt]._skel_layers_scrollPos = t[i][wt][B](), e == fn && t[i][ln][S](D, nt), t[i][L].on(W, function (e) {
                e[kt](), e[Et](), t[i][h] && t[i][h][It]()
            }), t[i][wt].on(yt, function (e) {
                t[i][h] && t[i][h][It]()
            }), t._.vars.isMobile || window[v](function () {
                t[i][wt].on(pt, function (e) {
                    t[i][h] && t[i][h][It]()
                })
            }, t[n][dt] + 50)
        },
        parseInit: function (n) {
            var r, s, o = n.get(0), u = n[At]("data-action"), a = n[At]("data-args"), f, c;
            u && a && (a = a.split(","));
            switch (u) {
                case"toggleLayer":
                case"layerToggle":
                    n[S](Y, zt)[S]("cursor", "pointer"), r = function (n) {
                        n[kt](), n[Et]();
                        if (t[i][h]) return t[i][h][It](), H;
                        var r = e(this), s = t[i][ct][a[0]];
                        s[tn]() ? s[It]() : s[rn]()
                    }, n.on(t.eventType, r);
                    break;
                case"navList":
                    f = e(an + a[0]), r = f[Ot]("a"), s = [], r.each(function () {
                        var t = e(this), n, r;
                        n = Math.max(0, t.parents("li")[U] - 1), r = t[At]("href"), s.push('<a class="link depth-' + n + '"' + (typeof r !== gt && r != "" ? ' href="' + r + '"' : "") + '><span class="indent-' + n + '"></span>' + t.text() + "</a>")
                    }), s[U] > 0 && n[jt]("<nav>" + s.join("") + "</nav>");
                    break;
                case"copyText":
                    f = e(an + a[0]), n[jt](f.text());
                    break;
                case"copyHTML":
                    f = e(an + a[0]), n[jt](f[jt]());
                    break;
                case"moveElementContents":
                    f = e(an + a[0]), o[l] = function () {
                        f[O]().each(function () {
                            var t = e(this);
                            n[ht](t), t[Dt](_)
                        })
                    }, o[N] = function () {
                        n[O]().each(function () {
                            var n = e(this);
                            f[ht](n), n[Xt](_), t.refresh(n)
                        })
                    }, o[l]();
                    break;
                case"moveElement":
                    f = e(an + a[0]), o[l] = function () {
                        e(X + f[At]("id") + '" />').insertBefore(f), n[ht](f), f[Dt](_)
                    }, o[N] = function () {
                        e(at + f[At]("id")).replaceWith(f), f[Xt](_), t.refresh(f)
                    }, o[l]();
                    break;
                case"moveCell":
                    f = e(an + a[0]), c = e(an + a[1]), o[l] = function () {
                        e(X + f[At]("id") + '" />').insertBefore(f), n[ht](f), f[S](E, Ft), c && c[Ct]()
                    }, o[N] = function () {
                        e(at + f[At]("id")).replaceWith(f), f[S](E, ""), c && c[S](E, "")
                    }, o[l]();
                    break;
                default:
            }
        },
        parseResume: function (e) {
            var t = e.get(0);
            t[l] && t[l]()
        },
        parseSuspend: function (e) {
            var t = e.get(0);
            t[N] && t[N]()
        },
        recalc: function (e, n) {
            var r = t._.parseMeasurement(e), i;
            switch (r[1]) {
                case"%":
                    i = Math.floor(n * (r[0] / 100));
                    break;
                case"em":
                    i = t.getBaseFontSize() * r[0];
                    break;
                default:
                case Gt:
                    i = r[0]
            }
            return i
        },
        recalcH: function (n) {
            return t.recalc(n, e(window)[R]())
        },
        recalcW: function (n) {
            return t.recalc(n, e(window)[E]())
        },
        refresh: function (r) {
            var s;
            t[n][I] && (r ? s = r.filter(F) : s = e(F), s[M]()[Vt](t[i][u]))
        },
        unlockView: function (e) {
            e == fn && t[i][ln][S](D, z), t[i][L].off(W), t[i][wt].off(yt), t._.vars.isMobile || t[i][wt].off(pt)
        },
        init: function () {
            n in t[n] && (t._.extend(t[n], t[n][n]), delete t[n][n]), t._[Ht](t[n], function (e) {
                t[n][e] && typeof t[n][e] == $t && b in t[n][e] && (t[n][ct][e] = t[n][e], delete t[n][e])
            }), t[n][sn] && (t[n][I] = t[n][sn]());
            if (t[n][I]) {
                if (t._.vars[Mt] == "android" && t._.vars.deviceVersion < 4 || t._.vars[Mt] == "wp") t[n][I] = H;
                t._.vars.IEVersion < 10 && (t[n][I] = H), t[n][Rt] && !t._.hasActive(t._[un](t[n][Rt])) && (t[n][I] = H)
            }
            t.initObjects(), t.initTransforms(), t._[Pt](function () {
                t.initLayers(), t.initIncludes(), t._.updateState(), t.refresh()
            })
        },
        initIncludes: function () {
            e(".skel-layers-include").each(function () {
                t.parseInit(e(this))
            })
        },
        initLayers: function () {
            var r, s, o, u = 1;
            t._[Ht](t[n][ct], function (r) {
                var s;
                if (!(b in t[n][ct][r])) return;
                if (!t[n][ct][r][jt] && (s = e(an + r))[U] == 0) return;
                o = new cn(r, t[n][ct][r], u++), t[i][ct][r] = o, s && (s[O]()[Vt](o[j]), s.remove())
            })
        },
        initObjects: function () {
            t[i][wt] = e(window), t._[Pt](function () {
                t[i][jt] = e(jt), t[i][Qt] = e(Qt), t[i][ln] = e("html,body"), t[i][Qt].wrapInner('<div id="skel-layers-wrapper" />'), t[i][L] = e("#skel-layers-wrapper"), t[i][L][S](b, nn)[S](k, "0")[S](g, "0")[S](q, "0")[M](), t[i][P] = e('<div id="skel-layers-hiddenWrapper" />')[Vt](t[i][Qt]), t[i][P][S](R, "100%"), t[i][u] = e('<div id="skel-layers-visibleWrapper" />')[Vt](t[i][Qt]), t[i][u][S](b, nn), t._[vt](ut, t[i][P][0]), t._[vt]("skel_layers_visibleWrapper", t[i][u][0]), t._[vt]("skel_layers_wrapper", t[i][L][0]), e("[autofocus]").focus()
            })
        },
        initTransforms: function () {
            if (t[n][I]) e.fn[r] = function () {
                return e(this)[o](0, 0)
            }, e.fn[o] = function (t, n) {
                return e(this)[S](I, "translate(" + t + "px, " + n + "px)")
            }, e.fn[M] = function () {
                return e(this)[S]("backface-visibility", nt)[S]("perspective", "500")[qt]("transition", "transform " + t[n][dt] / 1e3 + "s ease-in-out")
            }; else {
                var s, u = [];
                t[i][wt].resize(function () {
                    if (t[n][dt] != 0) {
                        var e = t[n][dt];
                        t[n][dt] = 0, window[v](function () {
                            t[n][dt] = e, u = []
                        }, e)
                    }
                }), e.fn[r] = function () {
                    for (var r = 0; r < this[U]; r++) {
                        var s = this[r], o = e(s);
                        u[s.id] && o.animate(u[s.id], t[n][dt], "swing", function () {
                            t._[Ht](u[s.id], function (e) {
                                o[S](e, u[s.id][e])
                            }), t[i][Qt][S](D, z), t[i][L][S](E, Ft)[S](G, 0)
                        })
                    }
                    return e(this)
                }, e.fn[o] = function (r, s) {
                    var o, f, l, c;
                    r = parseInt(r), s = parseInt(s), r != 0 ? (t[i][Qt][S](D, nt), t[i][L][S](E, t[i][wt][E]())) : l = function () {
                        t[i][Qt][S](D, z), t[i][L][S](E, Ft)
                    }, s < 0 ? t[i][L][S](G, Math.abs(s)) : c = function () {
                        t[i][L][S](G, 0)
                    };
                    for (o = 0; o < this[U]; o++) {
                        var h = this[o], p = e(h), d;
                        if (!u[h.id]) if (d = cn[C][xt][p.data(st)]) {
                            u[h.id] = {};
                            switch (d.v) {
                                case T:
                                case q:
                                    u[h.id][q] = parseInt(p[S](q));
                                    break;
                                case y:
                                    u[h.id][y] = parseInt(p[S](y))
                            }
                            switch (d.h) {
                                case T:
                                case k:
                                    u[h.id][k] = parseInt(p[S](k));
                                    break;
                                case g:
                                    u[h.id][g] = parseInt(p[S](g))
                            }
                        } else d = p[b](), u[h.id] = {top: d[q], left: d[k]};
                        a = {}, t._[Ht](u[h.id], function (e) {
                            var n;
                            switch (e) {
                                case q:
                                    n = t[Yt](u[h.id][e]) + s;
                                    break;
                                case y:
                                    n = t[Yt](u[h.id][e]) - s;
                                    break;
                                case k:
                                    n = t[K](u[h.id][e]) + r;
                                    break;
                                case g:
                                    n = t[K](u[h.id][e]) - r
                            }
                            a[e] = n
                        }), p.animate(a, t[n][dt], "swing", function () {
                            l && l(), c && c()
                        })
                    }
                    return e(this)
                }, e.fn[M] = function () {
                    return e(this)[S](b, "absolute")
                }
            }
        }
    }, t)
}(jQuery));