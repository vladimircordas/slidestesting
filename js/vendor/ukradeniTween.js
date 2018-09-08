!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                i.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 61)
}({
    12: function(t, e) {
        var i, n, r = t.exports = {};
        function s() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(t) {
            if (i === setTimeout)
                return setTimeout(t, 0);
            if ((i === s || !i) && setTimeout)
                return i = setTimeout,
                setTimeout(t, 0);
            try {
                return i(t, 0)
            } catch (e) {
                try {
                    return i.call(null, t, 0)
                } catch (e) {
                    return i.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : s
            } catch (t) {
                i = s
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                n = o
            }
        }();
        var l, u = [], h = !1, c = -1;
        function f() {
            h && l && (h = !1,
            l.length ? u = l.concat(u) : c = -1,
            u.length && d())
        }
        function d() {
            if (!h) {
                var t = a(f);
                h = !0;
                for (var e = u.length; e; ) {
                    for (l = u,
                    u = []; ++c < e; )
                        l && l[c].run();
                    c = -1,
                    e = u.length
                }
                l = null,
                h = !1,
                function(t) {
                    if (n === clearTimeout)
                        return clearTimeout(t);
                    if ((n === o || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function _(t, e) {
            this.fun = t,
            this.array = e
        }
        function p() {}
        r.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    e[i - 1] = arguments[i];
            u.push(new _(t,e)),
            1 !== u.length || h || a(d)
        }
        ,
        _.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = p,
        r.addListener = p,
        r.once = p,
        r.off = p,
        r.removeListener = p,
        r.removeAllListeners = p,
        r.emit = p,
        r.prependListener = p,
        r.prependOnceListener = p,
        r.listeners = function(t) {
            return []
        }
        ,
        r.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    },
    27: function(t, e, i) {
        (function(t) {
            var n = void 0 !== t && t || "undefined" != typeof self && self || window
              , r = Function.prototype.apply;
            function s(t, e) {
                this._id = t,
                this._clearFn = e
            }
            e.setTimeout = function() {
                return new s(r.call(setTimeout, n, arguments),clearTimeout)
            }
            ,
            e.setInterval = function() {
                return new s(r.call(setInterval, n, arguments),clearInterval)
            }
            ,
            e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }
            ,
            s.prototype.unref = s.prototype.ref = function() {}
            ,
            s.prototype.close = function() {
                this._clearFn.call(n, this._id)
            }
            ,
            e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = e
            }
            ,
            e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = -1
            }
            ,
            e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }
            ,
            i(28),
            e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
            e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }
        ).call(this, i(6))
    },
    28: function(t, e, i) {
        (function(t, e) {
            !function(t, i) {
                "use strict";
                if (!t.setImmediate) {
                    var n, r = 1, s = {}, o = !1, a = t.document, l = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    l = l && l.setTimeout ? l : t,
                    "[object process]" === {}.toString.call(t.process) ? n = function(t) {
                        e.nextTick(function() {
                            h(t)
                        })
                    }
                    : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0
                              , i = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }
                            ,
                            t.postMessage("", "*"),
                            t.onmessage = i,
                            e
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$"
                          , i = function(i) {
                            i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && h(+i.data.slice(e.length))
                        };
                        t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i),
                        n = function(i) {
                            t.postMessage(e + i, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            h(t.data)
                        }
                        ,
                        n = function(e) {
                            t.port2.postMessage(e)
                        }
                    }() : a && "onreadystatechange"in a.createElement("script") ? function() {
                        var t = a.documentElement;
                        n = function(e) {
                            var i = a.createElement("script");
                            i.onreadystatechange = function() {
                                h(e),
                                i.onreadystatechange = null,
                                t.removeChild(i),
                                i = null
                            }
                            ,
                            t.appendChild(i)
                        }
                    }() : n = function(t) {
                        setTimeout(h, 0, t)
                    }
                    ,
                    l.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++)
                            e[i] = arguments[i + 1];
                        var o = {
                            callback: t,
                            args: e
                        };
                        return s[r] = o,
                        n(r),
                        r++
                    }
                    ,
                    l.clearImmediate = u
                }
                function u(t) {
                    delete s[t]
                }
                function h(t) {
                    if (o)
                        setTimeout(h, 0, t);
                    else {
                        var e = s[t];
                        if (e) {
                            o = !0;
                            try {
                                !function(t) {
                                    var e = t.callback
                                      , n = t.args;
                                    switch (n.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(n[0]);
                                        break;
                                    case 2:
                                        e(n[0], n[1]);
                                        break;
                                    case 3:
                                        e(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        e.apply(i, n)
                                    }
                                }(e)
                            } finally {
                                u(t),
                                o = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }
        ).call(this, i(6), i(12))
    },
    6: function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    },
    60: function(t, e, i) {
        "use strict";
        e.a = function(t) {
            var e = this.constructor;
            return this.then(function(i) {
                return e.resolve(t()).then(function() {
                    return i
                })
            }, function(i) {
                return e.resolve(t()).then(function() {
                    return e.reject(i)
                })
            })
        }
    },
    61: function(t, e, i) {
        "use strict";
        var n = s(i(62));
        i(63),
        i(64);
        var r = s(i(65));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        String.prototype.startsWith = function(t, e) {
            return e = e || 0,
            this.substr(e, t.length) === t
        }
        ,
        String.prototype.endsWith = function(t) {
            return -1 !== this.indexOf(t, this.length - t.length)
        }
        ,
        "remove"in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        }
        ),
        window.Promise || (window.Promise = n.default),
        window.dat = r.default
    },
    62: function(t, e, i) {
        "use strict";
        i.r(e),
        function(t) {
            var n = i(60)
              , r = setTimeout;
            function s() {}
            function o(t) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                c(t, this)
            }
            function a(t, e) {
                for (; 3 === t._state; )
                    t = t._value;
                0 !== t._state ? (t._handled = !0,
                o._immediateFn(function() {
                    var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null !== i) {
                        var n;
                        try {
                            n = i(t._value)
                        } catch (t) {
                            return void u(e.promise, t)
                        }
                        l(e.promise, n)
                    } else
                        (1 === t._state ? l : u)(e.promise, t._value)
                })) : t._deferreds.push(e)
            }
            function l(t, e) {
                try {
                    if (e === t)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var i = e.then;
                        if (e instanceof o)
                            return t._state = 3,
                            t._value = e,
                            void h(t);
                        if ("function" == typeof i)
                            return void c(function(t, e) {
                                return function() {
                                    t.apply(e, arguments)
                                }
                            }(i, e), t)
                    }
                    t._state = 1,
                    t._value = e,
                    h(t)
                } catch (e) {
                    u(t, e)
                }
            }
            function u(t, e) {
                t._state = 2,
                t._value = e,
                h(t)
            }
            function h(t) {
                2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
                    t._handled || o._unhandledRejectionFn(t._value)
                });
                for (var e = 0, i = t._deferreds.length; e < i; e++)
                    a(t, t._deferreds[e]);
                t._deferreds = null
            }
            function c(t, e) {
                var i = !1;
                try {
                    t(function(t) {
                        i || (i = !0,
                        l(e, t))
                    }, function(t) {
                        i || (i = !0,
                        u(e, t))
                    })
                } catch (t) {
                    if (i)
                        return;
                    i = !0,
                    u(e, t)
                }
            }
            o.prototype.catch = function(t) {
                return this.then(null, t)
            }
            ,
            o.prototype.then = function(t, e) {
                var i = new this.constructor(s);
                return a(this, new function(t, e, i) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = i
                }
                (t,e,i)),
                i
            }
            ,
            o.prototype.finally = n.a,
            o.all = function(t) {
                return new o(function(e, i) {
                    if (!t || void 0 === t.length)
                        throw new TypeError("Promise.all accepts an array");
                    var n = Array.prototype.slice.call(t);
                    if (0 === n.length)
                        return e([]);
                    var r = n.length;
                    function s(t, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var a = o.then;
                                if ("function" == typeof a)
                                    return void a.call(o, function(e) {
                                        s(t, e)
                                    }, i)
                            }
                            n[t] = o,
                            0 == --r && e(n)
                        } catch (t) {
                            i(t)
                        }
                    }
                    for (var o = 0; o < n.length; o++)
                        s(o, n[o])
                }
                )
            }
            ,
            o.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                    e(t)
                }
                )
            }
            ,
            o.reject = function(t) {
                return new o(function(e, i) {
                    i(t)
                }
                )
            }
            ,
            o.race = function(t) {
                return new o(function(e, i) {
                    for (var n = 0, r = t.length; n < r; n++)
                        t[n].then(e, i)
                }
                )
            }
            ,
            o._immediateFn = "function" == typeof t && function(e) {
                t(e)
            }
            || function(t) {
                r(t, 0)
            }
            ,
            o._unhandledRejectionFn = function(t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }
            ,
            e.default = o
        }
        .call(this, i(27).setImmediate)
    },
    63: function(t, e, i) {
        (function(i) {
            var n, r = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
            /*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
            (r._gsQueue || (r._gsQueue = [])).push(function() {
                "use strict";
                r._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var n = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }
                      , r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s)
                            r = s[n],
                            t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    }
                      , s = function(t, e, n) {
                        i.call(this, t, e, n),
                        this._cycle = 0,
                        this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._repeat && this._uncache(!0),
                        this.render = s.prototype.render
                    }
                      , o = i._internals
                      , a = o.isSelector
                      , l = o.isArray
                      , u = s.prototype = i.to({}, .1, {})
                      , h = [];
                    s.version = "2.0.1",
                    u.constructor = s,
                    u.kill()._gc = !1,
                    s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf,
                    s.getTweensOf = i.getTweensOf,
                    s.lagSmoothing = i.lagSmoothing,
                    s.ticker = i.ticker,
                    s.render = i.render,
                    u.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._yoyoEase = null,
                        this._uncache(!0),
                        i.prototype.invalidate.call(this)
                    }
                    ,
                    u.updateTo = function(t, e) {
                        var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
                        for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                        this._uncache(!1),
                        this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
                        t)
                            this.vars[n] = t[n];
                        if (this._initted || s)
                            if (e)
                                this._initted = !1,
                                s && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1),
                            this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                            this._time / this._duration > .998) {
                                var o = this._totalTime;
                                this.render(0, !0, !1),
                                this._initted = !1,
                                this.render(o, !0, !1)
                            } else if (this._initted = !1,
                            this._init(),
                            this._time > 0 || s)
                                for (var a, l = 1 / (1 - r), u = this._firstPT; u; )
                                    a = u.s + u.c,
                                    u.c *= l,
                                    u.s = a - u.c,
                                    u = u._next;
                        return this
                    }
                    ,
                    u.render = function(t, e, n) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var r, s, a, l, u, h, c, f, d, _ = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, m = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
                        if (t >= _ - 1e-7 && t >= 0 ? (this._totalTime = _,
                        this._cycle = this._repeat,
                        this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || (r = !0,
                        s = "onComplete",
                        n = n || this._timeline.autoRemoveChildren),
                        0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0),
                        (y < 0 || t <= 0 && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (n = !0,
                        y > 1e-10 && (s = "onReverseComplete")),
                        this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                        (0 !== m || 0 === v && y > 0) && (s = "onReverseComplete",
                        r = this._reversed),
                        t < 0 && (this._active = !1,
                        0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0),
                        this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)),
                        this._initted || (n = !0)) : (this._totalTime = this._time = t,
                        0 !== this._repeat && (l = v + this._repeatDelay,
                        this._cycle = this._totalTime / l >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--,
                        this._time = this._totalTime - this._cycle * l,
                        this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time,
                        (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease,
                        this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d,this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)),
                        this.ratio = d ? 1 - d.getRatio((v - this._time) / v) : 0)),
                        this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
                        this._easeType && !d ? (u = this._time / v,
                        h = this._easeType,
                        c = this._easePower,
                        (1 === h || 3 === h && u >= .5) && (u = 1 - u),
                        3 === h && (u *= 2),
                        1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u),
                        1 === h ? this.ratio = 1 - u : 2 === h ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : d || (this.ratio = this._ease.getRatio(this._time / v))),
                        p !== this._time || n || g !== this._cycle) {
                            if (!this._initted) {
                                if (this._init(),
                                !this._initted || this._gc)
                                    return;
                                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                                    return this._time = p,
                                    this._totalTime = m,
                                    this._rawPrevTime = y,
                                    this._cycle = g,
                                    o.lazyTweens.push(this),
                                    void (this._lazy = [t, e]);
                                !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                            }
                            for (!1 !== this._lazy && (this._lazy = !1),
                            this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0),
                            0 === m && (2 === this._initted && t > 0 && this._init(),
                            this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")),
                            this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))),
                            a = this._firstPT; a; )
                                a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                                a = a._next;
                            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n),
                            e || (this._totalTime !== m || s) && this._callback("onUpdate")),
                            this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                            s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n),
                            r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[s] && this._callback(s),
                            0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== f && (this._rawPrevTime = 0)))
                        } else
                            m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                    }
                    ,
                    s.to = function(t, e, i) {
                        return new s(t,e,i)
                    }
                    ,
                    s.from = function(t, e, i) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new s(t,e,i)
                    }
                    ,
                    s.fromTo = function(t, e, i, n) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        new s(t,e,n)
                    }
                    ,
                    s.staggerTo = s.allTo = function(t, e, o, u, c, f, d) {
                        u = u || 0;
                        var _, p, m, g, v = 0, y = [], b = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments),
                            c.apply(d || o.callbackScope || this, f || h)
                        }, x = o.cycle, w = o.startAt && o.startAt.cycle;
                        for (l(t) || ("string" == typeof t && (t = i.selector(t) || t),
                        a(t) && (t = n(t))),
                        t = t || [],
                        u < 0 && ((t = n(t)).reverse(),
                        u *= -1),
                        _ = t.length - 1,
                        m = 0; m <= _; m++) {
                            for (g in p = {},
                            o)
                                p[g] = o[g];
                            if (x && (r(p, t, m),
                            null != p.duration && (e = p.duration,
                            delete p.duration)),
                            w) {
                                for (g in w = p.startAt = {},
                                o.startAt)
                                    w[g] = o.startAt[g];
                                r(p.startAt, t, m)
                            }
                            p.delay = v + (p.delay || 0),
                            m === _ && c && (p.onComplete = b),
                            y[m] = new s(t[m],e,p),
                            v += u
                        }
                        return y
                    }
                    ,
                    s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        s.staggerTo(t, e, i, n, r, o, a)
                    }
                    ,
                    s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        s.staggerTo(t, e, n, r, o, a, l)
                    }
                    ,
                    s.delayedCall = function(t, e, i, n, r) {
                        return new s(e,0,{
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }
                    ,
                    s.set = function(t, e) {
                        return new s(t,0,e)
                    }
                    ,
                    s.isTweening = function(t) {
                        return i.getTweensOf(t, !0).length > 0
                    }
                    ;
                    var c = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s; )
                            s instanceof i ? n[r++] = s : (e && (n[r++] = s),
                            r = (n = n.concat(c(s, e))).length),
                            s = s._next;
                        return n
                    }
                      , f = s.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    }
                    ;
                    s.killAll = function(t, i, n, r) {
                        null == i && (i = !0),
                        null == n && (n = !0);
                        var s, o, a, l = f(0 != r), u = l.length, h = i && n && r;
                        for (a = 0; a < u; a++)
                            o = l[a],
                            (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                    }
                    ,
                    s.killChildTweensOf = function(t, e) {
                        if (null != t) {
                            var r, u, h, c, f, d = o.tweenLookup;
                            if ("string" == typeof t && (t = i.selector(t) || t),
                            a(t) && (t = n(t)),
                            l(t))
                                for (c = t.length; --c > -1; )
                                    s.killChildTweensOf(t[c], e);
                            else {
                                for (h in r = [],
                                d)
                                    for (u = d[h].target.parentNode; u; )
                                        u === t && (r = r.concat(d[h].tweens)),
                                        u = u.parentNode;
                                for (f = r.length,
                                c = 0; c < f; c++)
                                    e && r[c].totalTime(r[c].totalDuration()),
                                    r[c]._enabled(!1, !1)
                            }
                        }
                    }
                    ;
                    var d = function(t, i, n, r) {
                        i = !1 !== i,
                        n = !1 !== n;
                        for (var s, o, a = f(r = !1 !== r), l = i && n && r, u = a.length; --u > -1; )
                            o = a[u],
                            (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                    };
                    return s.pauseAll = function(t, e, i) {
                        d(!0, t, e, i)
                    }
                    ,
                    s.resumeAll = function(t, e, i) {
                        d(!1, t, e, i)
                    }
                    ,
                    s.globalTimeScale = function(e) {
                        var n = t._rootTimeline
                          , r = i.ticker.time;
                        return arguments.length ? (e = e || 1e-10,
                        n._startTime = r - (r - n._startTime) * n._timeScale / e,
                        n = t._rootFramesTimeline,
                        r = i.ticker.frame,
                        n._startTime = r - (r - n._startTime) * n._timeScale / e,
                        n._timeScale = t._rootTimeline._timeScale = e,
                        e) : n._timeScale
                    }
                    ,
                    u.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }
                    ,
                    u.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }
                    ,
                    u.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        t > this._duration && (t = this._duration),
                        this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e)) : this._time
                    }
                    ,
                    u.duration = function(e) {
                        return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                    }
                    ,
                    u.totalDuration = function(t) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                        this._dirty = !1),
                        this._totalDuration)
                    }
                    ,
                    u.repeat = function(t) {
                        return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    u.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    u.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                    }
                    ,
                    s
                }, !0),
                r._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var n = function(t) {
                        e.call(this, t),
                        this._labels = {},
                        this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
                        this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
                        this._sortChildren = !0,
                        this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r)
                            i = r[n],
                            l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    }
                      , s = i._internals
                      , o = n._internals = {}
                      , a = s.isSelector
                      , l = s.isArray
                      , u = s.lazyTweens
                      , h = s.lazyRender
                      , c = r._gsDefine.globals
                      , f = function(t) {
                        var e, i = {};
                        for (e in t)
                            i[e] = t[e];
                        return i
                    }
                      , d = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s)
                            r = s[n],
                            t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    }
                      , _ = o.pauseCallback = function() {}
                      , p = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }
                      , m = n.prototype = new e;
                    return n.version = "2.0.1",
                    m.constructor = n,
                    m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
                    m.to = function(t, e, n, r) {
                        var s = n.repeat && c.TweenMax || i;
                        return e ? this.add(new s(t,e,n), r) : this.set(t, n, r)
                    }
                    ,
                    m.from = function(t, e, n, r) {
                        return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
                    }
                    ,
                    m.fromTo = function(t, e, n, r, s) {
                        var o = r.repeat && c.TweenMax || i;
                        return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                    }
                    ,
                    m.staggerTo = function(t, e, r, s, o, l, u, h) {
                        var c, _, m = new n({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }), g = r.cycle;
                        for ("string" == typeof t && (t = i.selector(t) || t),
                        a(t = t || []) && (t = p(t)),
                        (s = s || 0) < 0 && ((t = p(t)).reverse(),
                        s *= -1),
                        _ = 0; _ < t.length; _++)
                            (c = f(r)).startAt && (c.startAt = f(c.startAt),
                            c.startAt.cycle && d(c.startAt, t, _)),
                            g && (d(c, t, _),
                            null != c.duration && (e = c.duration,
                            delete c.duration)),
                            m.to(t[_], e, c, _ * s);
                        return this.add(m, o)
                    }
                    ,
                    m.staggerFrom = function(t, e, i, n, r, s, o, a) {
                        return i.immediateRender = 0 != i.immediateRender,
                        i.runBackwards = !0,
                        this.staggerTo(t, e, i, n, r, s, o, a)
                    }
                    ,
                    m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        this.staggerTo(t, e, n, r, s, o, a, l)
                    }
                    ,
                    m.call = function(t, e, n, r) {
                        return this.add(i.delayedCall(0, t, e, n), r)
                    }
                    ,
                    m.set = function(t, e, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0),
                        null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
                        this.add(new i(t,0,e), n)
                    }
                    ,
                    n.exportRoot = function(t, e) {
                        null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                        var r, s, o, a, l = new n(t), u = l._timeline;
                        for (null == e && (e = !0),
                        u._remove(l, !0),
                        l._startTime = 0,
                        l._rawPrevTime = l._time = l._totalTime = u._time,
                        o = u._first; o; )
                            a = o._next,
                            e && o instanceof i && o.target === o.vars.onComplete || ((s = o._startTime - o._delay) < 0 && (r = 1),
                            l.add(o, s)),
                            o = a;
                        return u.add(l, 0),
                        r && l.totalDuration(),
                        l
                    }
                    ,
                    m.add = function(r, s, o, a) {
                        var u, h, c, f, d, _;
                        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)),
                        !(r instanceof t)) {
                            if (r instanceof Array || r && r.push && l(r)) {
                                for (o = o || "normal",
                                a = a || 0,
                                u = s,
                                h = r.length,
                                c = 0; c < h; c++)
                                    l(f = r[c]) && (f = new n({
                                        tweens: f
                                    })),
                                    this.add(f, u),
                                    "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())),
                                    u += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof r)
                                return this.addLabel(r, s);
                            if ("function" != typeof r)
                                throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                            r = i.delayedCall(0, r)
                        }
                        if (e.prototype.add.call(this, r, s),
                        r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1),
                        (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (_ = (d = this).rawTime() > r._startTime; d._timeline; )
                                _ && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1),
                                d = d._timeline;
                        return this
                    }
                    ,
                    m.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                            this
                        }
                        if (e instanceof Array || e && e.push && l(e)) {
                            for (var n = e.length; --n > -1; )
                                this.remove(e[n]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }
                    ,
                    m._remove = function(t, i) {
                        return e.prototype._remove.call(this, t, i),
                        this._last ? this._time > this.duration() && (this._time = this._duration,
                        this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                    }
                    ,
                    m.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }
                    ,
                    m.insert = m.insertMultiple = function(t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }
                    ,
                    m.appendMultiple = function(t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }
                    ,
                    m.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e),
                        this
                    }
                    ,
                    m.addPause = function(t, e, n, r) {
                        var s = i.delayedCall(0, _, n, r || this);
                        return s.vars.onComplete = s.vars.onReverseComplete = e,
                        s.data = "isPause",
                        this._hasPause = !0,
                        this.add(s, t)
                    }
                    ,
                    m.removeLabel = function(t) {
                        return delete this._labels[t],
                        this
                    }
                    ,
                    m.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }
                    ,
                    m._parseTimeOrLabel = function(e, i, n, r) {
                        var s, o;
                        if (r instanceof t && r.timeline === this)
                            this.remove(r);
                        else if (r && (r instanceof Array || r.push && l(r)))
                            for (o = r.length; --o > -1; )
                                r[o]instanceof t && r[o].timeline === this && this.remove(r[o]);
                        if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
                        "string" == typeof i)
                            return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                        if (i = i || 0,
                        "string" != typeof e || !isNaN(e) && null == this._labels[e])
                            null == e && (e = s);
                        else {
                            if (-1 === (o = e.indexOf("=")))
                                return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)),
                            e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                        }
                        return Number(e) + i
                    }
                    ,
                    m.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }
                    ,
                    m.stop = function() {
                        return this.paused(!0)
                    }
                    ,
                    m.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }
                    ,
                    m.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }
                    ,
                    m.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, s, o, a, l, c, f = this._time, d = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._startTime, p = this._timeScale, m = this._paused;
                        if (f !== this._time && (t += this._time - f),
                        t >= d - 1e-7 && t >= 0)
                            this._totalTime = this._time = d,
                            this._reversed || this._hasPausedChild() || (r = !0,
                            o = "onComplete",
                            a = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0,
                            this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                            t = d + 1e-4;
                        else if (t < 1e-7)
                            if (this._totalTime = this._time = 0,
                            (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete",
                            r = this._reversed),
                            t < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0,
                                o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0),
                                this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                                0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime; )
                                        n._duration || (r = !1),
                                        n = n._next;
                                t = 0,
                                this._initted || (a = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= f)
                                    for (n = this._first; n && n._startTime <= t && !l; )
                                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n),
                                        n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !l; )
                                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n),
                                        n = n._prev;
                                l && (this._time = t = l._startTime,
                                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== f && this._first || i || a || l) {
                            if (this._initted || (this._initted = !0),
                            this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0),
                            0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                            (c = this._time) >= f)
                                for (n = this._first; n && (s = n._next,
                                c === this._time && (!this._paused || m)); )
                                    (n._active || n._startTime <= c && !n._paused && !n._gc) && (l === n && this.pause(),
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    n = s;
                            else
                                for (n = this._last; n && (s = n._prev,
                                c === this._time && (!this._paused || m)); ) {
                                    if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                        if (l === n) {
                                            for (l = n._prev; l && l.endTime() > this._time; )
                                                l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i),
                                                l = l._prev;
                                            l = null,
                                            this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = s
                                }
                            this._onUpdate && (e || (u.length && h(),
                            this._callback("onUpdate"))),
                            o && (this._gc || _ !== this._startTime && p === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (u.length && h(),
                            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[o] && this._callback(o)))
                        }
                    }
                    ,
                    m._hasPausedChild = function() {
                        for (var t = this._first; t; ) {
                            if (t._paused || t instanceof n && t._hasPausedChild())
                                return !0;
                            t = t._next
                        }
                        return !1
                    }
                    ,
                    m.getChildren = function(t, e, n, r) {
                        r = r || -9999999999;
                        for (var s = [], o = this._first, a = 0; o; )
                            o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o),
                            !1 !== t && (a = (s = s.concat(o.getChildren(!0, e, n))).length))),
                            o = o._next;
                        return s
                    }
                    ,
                    m.getTweensOf = function(t, e) {
                        var n, r, s = this._gc, o = [], a = 0;
                        for (s && this._enabled(!0, !0),
                        r = (n = i.getTweensOf(t)).length; --r > -1; )
                            (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                        return s && this._enabled(!1, !0),
                        o
                    }
                    ,
                    m.recent = function() {
                        return this._recent
                    }
                    ,
                    m._contains = function(t) {
                        for (var e = t.timeline; e; ) {
                            if (e === this)
                                return !0;
                            e = e.timeline
                        }
                        return !1
                    }
                    ,
                    m.shiftChildren = function(t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, s = this._labels; r; )
                            r._startTime >= i && (r._startTime += t),
                            r = r._next;
                        if (e)
                            for (n in s)
                                s[n] >= i && (s[n] += t);
                        return this._uncache(!0)
                    }
                    ,
                    m._kill = function(t, e) {
                        if (!t && !e)
                            return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                            i[n]._kill(t, e) && (r = !0);
                        return r
                    }
                    ,
                    m.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0)
                          , i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1; )
                            e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}),
                        this._uncache(!0)
                    }
                    ,
                    m.invalidate = function() {
                        for (var e = this._first; e; )
                            e.invalidate(),
                            e = e._next;
                        return t.prototype.invalidate.call(this)
                    }
                    ,
                    m._enabled = function(t, i) {
                        if (t === this._gc)
                            for (var n = this._first; n; )
                                n._enabled(t, !0),
                                n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }
                    ,
                    m.totalTime = function(e, i, n) {
                        this._forcingPlayhead = !0;
                        var r = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1,
                        r
                    }
                    ,
                    m.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                    }
                    ,
                    m.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                                    e = r._prev,
                                    r._dirty && r.totalDuration(),
                                    r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1,
                                    this.add(r, r._startTime - r._delay),
                                    this._calculatingDuration = 0) : s = r._startTime,
                                    r._startTime < 0 && !r._paused && (n -= r._startTime,
                                    this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale,
                                    this._time -= r._startTime,
                                    this._totalTime -= r._startTime,
                                    this._rawPrevTime -= r._startTime),
                                    this.shiftChildren(-r._startTime, !1, -9999999999),
                                    s = 0),
                                    (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i),
                                    r = e;
                                this._duration = this._totalDuration = n,
                                this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }
                    ,
                    m.paused = function(e) {
                        if (!e)
                            for (var i = this._first, n = this._time; i; )
                                i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                                i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }
                    ,
                    m.usesFrames = function() {
                        for (var e = this._timeline; e._timeline; )
                            e = e._timeline;
                        return e === t._rootFramesTimeline
                    }
                    ,
                    m.rawTime = function(t) {
                        return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }
                    ,
                    n
                }, !0),
                r._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                    var n = function(e) {
                        t.call(this, e),
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._cycle = 0,
                        this._yoyo = !0 === this.vars.yoyo,
                        this._dirty = !0
                    }
                      , s = e._internals
                      , o = s.lazyTweens
                      , a = s.lazyRender
                      , l = r._gsDefine.globals
                      , u = new i(null,null,1,0)
                      , h = n.prototype = new t;
                    return h.constructor = n,
                    h.kill()._gc = !1,
                    n.version = "2.0.1",
                    h.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        t.prototype.invalidate.call(this)
                    }
                    ,
                    h.addCallback = function(t, i, n, r) {
                        return this.add(e.delayedCall(0, t, n, r), i)
                    }
                    ,
                    h.removeCallback = function(t, e) {
                        if (t)
                            if (null == e)
                                this._kill(null, t);
                            else
                                for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                                    i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this
                    }
                    ,
                    h.removePause = function(e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }
                    ,
                    h.tweenTo = function(t, i) {
                        i = i || {};
                        var n, r, s, o = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        }, a = i.repeat && l.TweenMax || e;
                        for (r in i)
                            o[r] = i[r];
                        return o.time = this._parseTimeOrLabel(t),
                        n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
                        s = new a(this,n,o),
                        o.onStart = function() {
                            s.target.paused(!0),
                            s.vars.time === s.target.time() || n !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0),
                            i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                        }
                        ,
                        s
                    }
                    ,
                    h.tweenFromTo = function(t, e, i) {
                        i = i || {},
                        t = this._parseTimeOrLabel(t),
                        i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        },
                        i.immediateRender = !1 !== i.immediateRender;
                        var n = this.tweenTo(e, i);
                        return n.isFromTo = 1,
                        n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }
                    ,
                    h.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, s, l, u, h, c, f, d = this._time, _ = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, m = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, b = this._paused, x = this._cycle;
                        if (d !== this._time && (t += this._time - d),
                        t >= _ - 1e-7 && t >= 0)
                            this._locked || (this._totalTime = _,
                            this._cycle = this._repeat),
                            this._reversed || this._hasPausedChild() || (r = !0,
                            l = "onComplete",
                            u = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (u = !0,
                            y > 1e-10 && (l = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                            this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = p,
                            t = p + 1e-4);
                        else if (t < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0),
                            this._time = 0,
                            (0 !== d || 0 === p && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (l = "onReverseComplete",
                            r = this._reversed),
                            t < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0,
                                l = "onReverseComplete") : y >= 0 && this._first && (u = !0),
                                this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : 1e-10,
                                0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime; )
                                        n._duration || (r = !1),
                                        n = n._next;
                                t = 0,
                                this._initted || (u = !0)
                            }
                        else if (0 === p && y < 0 && (u = !0),
                        this._time = this._rawPrevTime = t,
                        this._locked || (this._totalTime = t,
                        0 !== this._repeat && (h = p + this._repeatDelay,
                        this._cycle = this._totalTime / h >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / h && m <= t && this._cycle--,
                        this._time = this._totalTime - this._cycle * h,
                        this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time),
                        this._time > p ? (this._time = p,
                        t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
                        this._hasPause && !this._forcingPlayhead && !e) {
                            if ((t = this._time) >= d || this._repeat && x !== this._cycle)
                                for (n = this._first; n && n._startTime <= t && !c; )
                                    n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n),
                                    n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c; )
                                    n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n),
                                    n = n._prev;
                            c && c._startTime < p && (this._time = t = c._startTime,
                            this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== x && !this._locked) {
                            var w = this._yoyo && 0 != (1 & x)
                              , T = w === (this._yoyo && 0 != (1 & this._cycle))
                              , C = this._totalTime
                              , S = this._cycle
                              , O = this._rawPrevTime
                              , P = this._time;
                            if (this._totalTime = x * p,
                            this._cycle < x ? w = !w : this._totalTime += p,
                            this._time = d,
                            this._rawPrevTime = 0 === p ? y - 1e-4 : y,
                            this._cycle = x,
                            this._locked = !0,
                            d = w ? 0 : p,
                            this.render(d, e, 0 === p),
                            e || this._gc || this.vars.onRepeat && (this._cycle = S,
                            this._locked = !1,
                            this._callback("onRepeat")),
                            d !== this._time)
                                return;
                            if (T && (this._cycle = x,
                            this._locked = !0,
                            d = w ? p + 1e-4 : -1e-4,
                            this.render(d, !0, !1)),
                            this._locked = !1,
                            this._paused && !b)
                                return;
                            this._time = P,
                            this._totalTime = C,
                            this._cycle = S,
                            this._rawPrevTime = O
                        }
                        if (this._time !== d && this._first || i || u || c) {
                            if (this._initted || (this._initted = !0),
                            this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0),
                            0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                            (f = this._time) >= d)
                                for (n = this._first; n && (s = n._next,
                                f === this._time && (!this._paused || b)); )
                                    (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(),
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    n = s;
                            else
                                for (n = this._last; n && (s = n._prev,
                                f === this._time && (!this._paused || b)); ) {
                                    if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                        if (c === n) {
                                            for (c = n._prev; c && c.endTime() > this._time; )
                                                c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i),
                                                c = c._prev;
                                            c = null,
                                            this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = s
                                }
                            this._onUpdate && (e || (o.length && a(),
                            this._callback("onUpdate"))),
                            l && (this._locked || this._gc || g !== this._startTime && v === this._timeScale || (0 === this._time || _ >= this.totalDuration()) && (r && (o.length && a(),
                            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[l] && this._callback(l)))
                        } else
                            m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                    }
                    ,
                    h.getActive = function(t, e, i) {
                        null == t && (t = !0),
                        null == e && (e = !0),
                        null == i && (i = !1);
                        var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
                        for (n = 0; n < l; n++)
                            (r = o[n]).isActive() && (s[a++] = r);
                        return s
                    }
                    ,
                    h.getLabelAfter = function(t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(), n = i.length;
                        for (e = 0; e < n; e++)
                            if (i[e].time > t)
                                return i[e].name;
                        return null
                    }
                    ,
                    h.getLabelBefore = function(t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                            if (e[i].time < t)
                                return e[i].name;
                        return null
                    }
                    ,
                    h.getLabelsArray = function() {
                        var t, e = [], i = 0;
                        for (t in this._labels)
                            e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                        return e.sort(function(t, e) {
                            return t.time - e.time
                        }),
                        e
                    }
                    ,
                    h.invalidate = function() {
                        return this._locked = !1,
                        t.prototype.invalidate.call(this)
                    }
                    ,
                    h.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                    }
                    ,
                    h.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                    }
                    ,
                    h.totalDuration = function(e) {
                        return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                        this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                    }
                    ,
                    h.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        t > this._duration && (t = this._duration),
                        this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e)) : this._time
                    }
                    ,
                    h.repeat = function(t) {
                        return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    h.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    h.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                    }
                    ,
                    h.currentLabel = function(t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }
                    ,
                    n
                }, !0),
                function() {
                    var t = 180 / Math.PI
                      , e = []
                      , i = []
                      , n = []
                      , s = {}
                      , o = r._gsDefine.globals
                      , a = function(t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6),
                        t === e && (e = t + (i - t) / 1e6),
                        this.a = t,
                        this.b = e,
                        this.c = i,
                        this.d = n,
                        this.da = n - t,
                        this.ca = i - t,
                        this.ba = e - t
                    }
                      , l = function(t, e, i, n) {
                        var r = {
                            a: t
                        }
                          , s = {}
                          , o = {}
                          , a = {
                            c: n
                        }
                          , l = (t + e) / 2
                          , u = (e + i) / 2
                          , h = (i + n) / 2
                          , c = (l + u) / 2
                          , f = (u + h) / 2
                          , d = (f - c) / 8;
                        return r.b = l + (t - l) / 4,
                        s.b = c + d,
                        r.c = s.a = (r.b + s.b) / 2,
                        s.c = o.a = (c + f) / 2,
                        o.b = f - d,
                        a.b = h + (n - h) / 4,
                        o.c = a.a = (o.b + a.b) / 2,
                        [r, s, o, a]
                    }
                      , u = function(t, r, s, o, a) {
                        var u, h, c, f, d, _, p, m, g, v, y, b, x, w = t.length - 1, T = 0, C = t[0].a;
                        for (u = 0; u < w; u++)
                            h = (d = t[T]).a,
                            c = d.d,
                            f = t[T + 1].d,
                            a ? (y = e[u],
                            x = ((b = i[u]) + y) * r * .25 / (o ? .5 : n[u] || .5),
                            m = c - ((_ = c - (c - h) * (o ? .5 * r : 0 !== y ? x / y : 0)) + (((p = c + (f - c) * (o ? .5 * r : 0 !== b ? x / b : 0)) - _) * (3 * y / (y + b) + .5) / 4 || 0))) : m = c - ((_ = c - (c - h) * r * .5) + (p = c + (f - c) * r * .5)) / 2,
                            _ += m,
                            p += m,
                            d.c = g = _,
                            d.b = 0 !== u ? C : C = d.a + .6 * (d.c - d.a),
                            d.da = c - h,
                            d.ca = g - h,
                            d.ba = C - h,
                            s ? (v = l(h, C, g, c),
                            t.splice(T, 1, v[0], v[1], v[2], v[3]),
                            T += 4) : T++,
                            C = p;
                        (d = t[T]).b = C,
                        d.c = C + .4 * (d.d - C),
                        d.da = d.d - d.a,
                        d.ca = d.c - d.a,
                        d.ba = C - d.a,
                        s && (v = l(d.a, C, d.c, d.d),
                        t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    }
                      , h = function(t, n, r, s) {
                        var o, l, u, h, c, f, d = [];
                        if (s)
                            for (l = (t = [s].concat(t)).length; --l > -1; )
                                "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                        if ((o = t.length - 2) < 0)
                            return d[0] = new a(t[0][n],0,0,t[0][n]),
                            d;
                        for (l = 0; l < o; l++)
                            u = t[l][n],
                            h = t[l + 1][n],
                            d[l] = new a(u,0,0,h),
                            r && (c = t[l + 2][n],
                            e[l] = (e[l] || 0) + (h - u) * (h - u),
                            i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return d[l] = new a(t[l][n],0,0,t[l + 1][n]),
                        d
                    }
                      , c = function(t, r, o, a, l, c) {
                        var f, d, _, p, m, g, v, y, b = {}, x = [], w = c || t[0];
                        for (d in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                        null == r && (r = 1),
                        t[0])
                            x.push(d);
                        if (t.length > 1) {
                            for (y = t[t.length - 1],
                            v = !0,
                            f = x.length; --f > -1; )
                                if (d = x[f],
                                Math.abs(w[d] - y[d]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(),
                            c && t.unshift(c),
                            t.push(t[1]),
                            c = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0,
                        f = x.length; --f > -1; )
                            d = x[f],
                            s[d] = -1 !== l.indexOf("," + d + ","),
                            b[d] = h(t, d, s[d], c);
                        for (f = e.length; --f > -1; )
                            e[f] = Math.sqrt(e[f]),
                            i[f] = Math.sqrt(i[f]);
                        if (!a) {
                            for (f = x.length; --f > -1; )
                                if (s[d])
                                    for (g = (_ = b[x[f]]).length - 1,
                                    p = 0; p < g; p++)
                                        m = _[p + 1].da / i[p] + _[p].da / e[p] || 0,
                                        n[p] = (n[p] || 0) + m * m;
                            for (f = n.length; --f > -1; )
                                n[f] = Math.sqrt(n[f])
                        }
                        for (f = x.length,
                        p = o ? 4 : 1; --f > -1; )
                            _ = b[d = x[f]],
                            u(_, r, o, a, s[d]),
                            v && (_.splice(0, p),
                            _.splice(_.length - p, p));
                        return b
                    }
                      , f = function(t, e, i) {
                        for (var n, r, s, o, a, l, u, h, c, f, d, _ = 1 / i, p = t.length; --p > -1; )
                            for (s = (f = t[p]).a,
                            o = f.d - s,
                            a = f.c - s,
                            l = f.b - s,
                            n = r = 0,
                            h = 1; h <= i; h++)
                                n = r - (r = ((u = _ * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u),
                                e[d = p * i + h - 1] = (e[d] || 0) + n * n
                    }
                      , d = r._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t,
                            e instanceof Array && (e = {
                                values: e
                            }),
                            this._func = {},
                            this._mod = {},
                            this._props = [],
                            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, l, u = e.values || [], h = {}, d = u[0], _ = e.autoRotate || i.vars.orientToBezier;
                            for (n in this._autoRotate = _ ? _ instanceof Array ? _ : [["x", "y", "rotation", !0 === _ ? 0 : Number(_) || 0]] : null,
                            d)
                                this._props.push(n);
                            for (s = this._props.length; --s > -1; )
                                n = this._props[s],
                                this._overwriteProps.push(n),
                                r = this._func[n] = "function" == typeof t[n],
                                h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                                l || h[n] !== u[0][n] && (l = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(u, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                                var n, r, s, o, l, u, h, c, f, d, _, p = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, g = "soft" === e, v = [];
                                if (g && i && (t = [i].concat(t)),
                                null == t || t.length < m + 1)
                                    throw "invalid Bezier data";
                                for (f in t[0])
                                    v.push(f);
                                for (u = v.length; --u > -1; ) {
                                    for (p[f = v[u]] = l = [],
                                    d = 0,
                                    c = t.length,
                                    h = 0; h < c; h++)
                                        n = null == i ? t[h][f] : "string" == typeof (_ = t[h][f]) && "=" === _.charAt(1) ? i[f] + Number(_.charAt(0) + _.substr(2)) : Number(_),
                                        g && h > 1 && h < c - 1 && (l[d++] = (n + l[d - 2]) / 2),
                                        l[d++] = n;
                                    for (c = d - m + 1,
                                    d = 0,
                                    h = 0; h < c; h += m)
                                        n = l[h],
                                        r = l[h + 1],
                                        s = l[h + 2],
                                        o = 2 === m ? 0 : l[h + 3],
                                        l[d++] = _ = 3 === m ? new a(n,r,s,o) : new a(n,(2 * r + n) / 3,(2 * r + s) / 3,s);
                                    l.length = d
                                }
                                return p
                            }(u, e.type, h),
                            this._segCount = this._beziers[n].length,
                            this._timeRes) {
                                var p = function(t, e) {
                                    var i, n, r, s, o = [], a = [], l = 0, u = 0, h = (e = e >> 0 || 6) - 1, c = [], d = [];
                                    for (i in t)
                                        f(t[i], o, e);
                                    for (r = o.length,
                                    n = 0; n < r; n++)
                                        l += Math.sqrt(o[n]),
                                        d[s = n % e] = l,
                                        s === h && (u += l,
                                        c[s = n / e >> 0] = d,
                                        a[s] = u,
                                        l = 0,
                                        d = []);
                                    return {
                                        length: u,
                                        lengths: a,
                                        segments: c
                                    }
                                }(this._beziers, this._timeRes);
                                this._length = p.length,
                                this._lengths = p.lengths,
                                this._segments = p.segments,
                                this._l1 = this._li = this._s1 = this._si = 0,
                                this._l2 = this._lengths[0],
                                this._curSeg = this._segments[0],
                                this._s2 = this._curSeg[0],
                                this._prec = 1 / this._curSeg.length
                            }
                            if (_ = this._autoRotate)
                                for (this._initialRotations = [],
                                _[0]instanceof Array || (this._autoRotate = _ = [_]),
                                s = _.length; --s > -1; ) {
                                    for (o = 0; o < 3; o++)
                                        n = _[s][o],
                                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = _[s][2],
                                    this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                                    this._overwriteProps.push(n)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0,
                            !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, u, h, c, f = this._segCount, d = this._func, _ = this._target, p = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths,
                                c = this._curSeg,
                                e *= this._length,
                                r = this._li,
                                e > this._l2 && r < f - 1) {
                                    for (u = f - 1; r < u && (this._l2 = h[++r]) <= e; )
                                        ;
                                    this._l1 = h[r - 1],
                                    this._li = r,
                                    this._curSeg = c = this._segments[r],
                                    this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = h[--r]) >= e; )
                                        ;
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++,
                                    this._l2 = h[r],
                                    this._li = r,
                                    this._curSeg = c = this._segments[r],
                                    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                                    this._s2 = c[this._si]
                                }
                                if (i = r,
                                e -= this._l1,
                                r = this._si,
                                e > this._s2 && r < c.length - 1) {
                                    for (u = c.length - 1; r < u && (this._s2 = c[++r]) <= e; )
                                        ;
                                    this._s1 = c[r - 1],
                                    this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e; )
                                        ;
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++,
                                    this._s2 = c[r],
                                    this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else
                                a = (e - (i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                            for (n = 1 - a,
                            r = this._props.length; --r > -1; )
                                s = this._props[r],
                                l = (a * a * (o = this._beziers[s][i]).da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a,
                                this._mod[s] && (l = this._mod[s](l, _)),
                                d[s] ? _[s](l) : _[s] = l;
                            if (this._autoRotate) {
                                var m, g, v, y, b, x, w, T = this._autoRotate;
                                for (r = T.length; --r > -1; )
                                    s = T[r][2],
                                    x = T[r][3] || 0,
                                    w = !0 === T[r][4] ? 1 : t,
                                    o = this._beziers[T[r][0]],
                                    m = this._beziers[T[r][1]],
                                    o && m && (o = o[i],
                                    m = m[i],
                                    g = o.a + (o.b - o.a) * a,
                                    g += ((y = o.b + (o.c - o.b) * a) - g) * a,
                                    y += (o.c + (o.d - o.c) * a - y) * a,
                                    v = m.a + (m.b - m.a) * a,
                                    v += ((b = m.b + (m.c - m.b) * a) - v) * a,
                                    b += (m.c + (m.d - m.c) * a - b) * a,
                                    l = p ? Math.atan2(b - v, y - g) * w + x : this._initialRotations[r],
                                    this._mod[s] && (l = this._mod[s](l, _)),
                                    d[s] ? _[s](l) : _[s] = l)
                            }
                        }
                    })
                      , _ = d.prototype;
                    d.bezierThrough = c,
                    d.cubicToQuadratic = l,
                    d._autoCSS = !0,
                    d.quadraticToCubic = function(t, e, i) {
                        return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
                    }
                    ,
                    d._cssRegister = function() {
                        var t = o.CSSPlugin;
                        if (t) {
                            var e = t._internals
                              , i = e._parseToProxy
                              , n = e._setPluginRatio
                              , r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function(t, e, s, o, a, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }),
                                    l = new d;
                                    var u, h, c, f = e.values, _ = f.length - 1, p = [], m = {};
                                    if (_ < 0)
                                        return a;
                                    for (u = 0; u <= _; u++)
                                        c = i(t, f[u], o, a, l, _ !== u),
                                        p[u] = c.end;
                                    for (h in e)
                                        m[h] = e[h];
                                    return m.values = p,
                                    (a = new r(t,"bezier",0,0,c.pt,2)).data = c,
                                    a.plugin = l,
                                    a.setRatio = n,
                                    0 === m.autoRotate && (m.autoRotate = !0),
                                    !m.autoRotate || m.autoRotate instanceof Array || (u = !0 === m.autoRotate ? 0 : Number(m.autoRotate),
                                    m.autoRotate = null != c.end.left ? [["left", "top", "rotation", u, !1]] : null != c.end.x && [["x", "y", "rotation", u, !1]]),
                                    m.autoRotate && (o._transform || o._enableTransforms(!1),
                                    c.autoRotate = o._target._gsTransform,
                                    c.proxy.rotation = c.autoRotate.rotation || 0,
                                    o._overwriteProps.push("rotation")),
                                    l._onInitTween(c.proxy, m, o._tween),
                                    a
                                }
                            })
                        }
                    }
                    ,
                    _._mod = function(t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
                            (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                    }
                    ,
                    _._kill = function(t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e],
                                delete this._func[e],
                                i = n.length; --i > -1; )
                                    n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1; )
                                t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(),
                r._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var i, n, s, o, a = function() {
                        t.call(this, "css"),
                        this._overwriteProps.length = 0,
                        this.setRatio = a.prototype.setRatio
                    }, l = r._gsDefine.globals, u = {}, h = a.prototype = new t("css");
                    h.constructor = a,
                    a.version = "1.20.5",
                    a.API = 2,
                    a.defaultTransformPerspective = 0,
                    a.defaultSkewType = "compensated",
                    a.defaultSmoothOrigin = !0,
                    h = "px",
                    a.suffixMap = {
                        top: h,
                        right: h,
                        bottom: h,
                        left: h,
                        width: h,
                        height: h,
                        fontSize: h,
                        padding: h,
                        margin: h,
                        perspective: h,
                        lineHeight: ""
                    };
                    var c, f, d, _, p, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, T = /(?:\d|\-|\+|=|#|\.)*/g, C = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, O = /alpha\(opacity *=.+?\)/i, P = /^(rgb|hsl)/, A = /([A-Z])/g, k = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
                        return e.toUpperCase()
                    }, M = /(?:Left|Right|Width)/i, D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, F = /,(?=[^\)]*(?:\(|$))/gi, N = /[\s,\(]/i, I = Math.PI / 180, B = 180 / Math.PI, z = {}, j = {
                        style: {}
                    }, X = r.document || {
                        createElement: function() {
                            return j
                        }
                    }, H = function(t, e) {
                        return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                    }, V = H("div"), U = H("img"), Y = a._internals = {
                        _specialProps: u
                    }, G = (r.navigator || {}).userAgent || "", W = function() {
                        var t = G.indexOf("Android")
                          , e = H("a");
                        return d = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || parseFloat(G.substr(t + 8, 2)) > 3),
                        p = d && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6,
                        _ = -1 !== G.indexOf("Firefox"),
                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (m = parseFloat(RegExp.$1)),
                        !!e && (e.style.cssText = "top:1px;opacity:.55;",
                        /^0.55/.test(e.style.opacity))
                    }(), q = function(t) {
                        return C.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    }, Q = function(t) {
                        r.console && console.log(t)
                    }, Z = "", K = "", J = function(t, e) {
                        var i, n, r = (e = e || V).style;
                        if (void 0 !== r[t])
                            return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1),
                        i = ["O", "Moz", "ms", "Ms", "Webkit"],
                        n = 5; --n > -1 && void 0 === r[i[n] + t]; )
                            ;
                        return n >= 0 ? (Z = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-",
                        K + t) : null
                    }, $ = ("undefined" != typeof window ? window : X.defaultView || {
                        getComputedStyle: function() {}
                    }).getComputedStyle, tt = a.getStyle = function(t, e, i, n, r) {
                        var s;
                        return W || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || $(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]),
                        null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : q(t)
                    }
                    , et = Y.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r && "lineHeight" !== i)
                            return n;
                        if ("auto" === r || !n)
                            return 0;
                        var o, l, u, h = M.test(i), c = t, f = V.style, d = n < 0, _ = 1 === n;
                        if (d && (n = -n),
                        _ && (n *= 100),
                        "lineHeight" !== i || r)
                            if ("%" === r && -1 !== i.indexOf("border"))
                                o = n / 100 * (h ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;",
                                "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                                    f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (c = t.parentNode || X.body,
                                    -1 !== tt(c, "display").indexOf("flex") && (f.position = "absolute"),
                                    l = c._gsCache,
                                    u = e.ticker.frame,
                                    l && h && l.time === u)
                                        return l.width * n / 100;
                                    f[h ? "width" : "height"] = n + r
                                }
                                c.appendChild(V),
                                o = parseFloat(V[h ? "offsetWidth" : "offsetHeight"]),
                                c.removeChild(V),
                                h && "%" === r && !1 !== a.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = u,
                                l.width = o / n * 100),
                                0 !== o || s || (o = et(t, i, n, r, !0))
                            }
                        else
                            l = $(t).lineHeight,
                            t.style.lineHeight = n,
                            o = parseFloat($(t).lineHeight),
                            t.style.lineHeight = l;
                        return _ && (o /= 100),
                        d ? -o : o
                    }
                    , it = Y.calculateOffset = function(t, e, i) {
                        if ("absolute" !== tt(t, "position", i))
                            return 0;
                        var n = "left" === e ? "Left" : "Top"
                          , r = tt(t, "margin" + n, i);
                        return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    }
                    , nt = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || $(t, null))
                            if (i = e.length)
                                for (; --i > -1; )
                                    -1 !== (r = e[i]).indexOf("-transform") && Et !== r || (s[r.replace(k, R)] = e.getPropertyValue(r));
                            else
                                for (i in e)
                                    -1 !== i.indexOf("Transform") && kt !== i || (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e)
                                "string" == typeof i && void 0 === s[i] && (s[i.replace(k, R)] = e[i]);
                        return W || (s.opacity = q(t)),
                        n = Vt(t, e, !1),
                        s.rotation = n.rotation,
                        s.skewX = n.skewX,
                        s.scaleX = n.scaleX,
                        s.scaleY = n.scaleY,
                        s.x = n.x,
                        s.y = n.y,
                        Mt && (s.z = n.z,
                        s.rotationX = n.rotationX,
                        s.rotationY = n.rotationY,
                        s.scaleZ = n.scaleZ),
                        s.filters && delete s.filters,
                        s
                    }, rt = function(t, e, i, n, r) {
                        var s, o, a, l = {}, u = t.style;
                        for (o in i)
                            "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : it(t, o),
                            void 0 !== u[o] && (a = new yt(u,o,u[o],a))));
                        if (n)
                            for (o in n)
                                "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    }, st = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    }, ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase())
                            return (i || $(t))[e] || 0;
                        if (t.getCTM && jt(t))
                            return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                          , r = st[e]
                          , s = r.length;
                        for (i = i || $(t, null); --s > -1; )
                            n -= parseFloat(tt(t, "padding" + r[s], i, !0)) || 0,
                            n -= parseFloat(tt(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    }, lt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t)
                            return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","),
                            t = [],
                            i = 0; i < n.length; i++)
                                t.push(lt(n[i]));
                            return t.join(",")
                        }
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"),
                        ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
                        t = r + " " + s + (n.length > 2 ? " " + n[2] : ""),
                        e && (e.oxp = -1 !== r.indexOf("%"),
                        e.oyp = -1 !== s.indexOf("%"),
                        e.oxr = "=" === r.charAt(1),
                        e.oyr = "=" === s.charAt(1),
                        e.ox = parseFloat(r.replace(w, "")),
                        e.oy = parseFloat(s.replace(w, "")),
                        e.v = t),
                        e || t
                    }, ut = function(t, e) {
                        return "function" == typeof t && (t = t(v, g)),
                        "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    }, ht = function(t, e) {
                        return "function" == typeof t && (t = t(v, g)),
                        null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    }, ct = function(t, e, i, n) {
                        var r, s, o, a, l;
                        return "function" == typeof t && (t = t(v, g)),
                        null == t ? a = e : "number" == typeof t ? a = t : (r = 360,
                        s = t.split("_"),
                        o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : B) - (l ? 0 : e),
                        s.length && (n && (n[i] = e + o),
                        -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = o < 0 ? o + r : o - r),
                        -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)),
                        a = e + o),
                        a < 1e-6 && a > -1e-6 && (a = 0),
                        a
                    }, ft = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    }, dt = function(t, e, i) {
                        return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    }, _t = a.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, u, h, c, f;
                        if (t)
                            if ("number" == typeof t)
                                i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                                ft[t])
                                    i = ft[t];
                                else if ("#" === t.charAt(0))
                                    4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s),
                                    i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(y),
                                    e) {
                                        if (-1 !== t.indexOf("="))
                                            return t.match(b)
                                    } else
                                        o = Number(i[0]) % 360 / 360,
                                        a = Number(i[1]) / 100,
                                        n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a),
                                        i.length > 3 && (i[3] = Number(i[3])),
                                        i[0] = dt(o + 1 / 3, n, r),
                                        i[1] = dt(o, n, r),
                                        i[2] = dt(o - 1 / 3, n, r);
                                else
                                    i = t.match(y) || ft.transparent;
                                i[0] = Number(i[0]),
                                i[1] = Number(i[1]),
                                i[2] = Number(i[2]),
                                i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else
                            i = ft.black;
                        return e && !f && (n = i[0] / 255,
                        r = i[1] / 255,
                        s = i[2] / 255,
                        l = ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2,
                        u === h ? o = a = 0 : (c = u - h,
                        a = l > .5 ? c / (2 - u - h) : c / (u + h),
                        o = u === n ? (r - s) / c + (r < s ? 6 : 0) : u === r ? (s - n) / c + 2 : (n - r) / c + 4,
                        o *= 60),
                        i[0] = o + .5 | 0,
                        i[1] = 100 * a + .5 | 0,
                        i[2] = 100 * l + .5 | 0),
                        i
                    }
                    , pt = function(t, e) {
                        var i, n, r, s = t.match(mt) || [], o = 0, a = "";
                        if (!s.length)
                            return t;
                        for (i = 0; i < s.length; i++)
                            n = s[i],
                            o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length,
                            3 === (n = _t(n, e)).length && n.push(1),
                            a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(o)
                    }, mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (h in ft)
                        mt += "|" + h + "\\b";
                    mt = new RegExp(mt + ")","gi"),
                    a.colorStringFilter = function(t) {
                        var e, i = t[0] + " " + t[1];
                        mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
                        t[0] = pt(t[0], e),
                        t[1] = pt(t[1], e)),
                        mt.lastIndex = 0
                    }
                    ,
                    e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                    var gt = function(t, e, i, n) {
                        if (null == t)
                            return function(t) {
                                return t
                            }
                            ;
                        var r, s = e ? (t.match(mt) || [""])[0] : "", o = t.split(s).join("").match(x) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", h = o.length, c = h > 0 ? o[0].replace(y, "") : "";
                        return h ? r = e ? function(t) {
                            var e, f, d, _;
                            if ("number" == typeof t)
                                t += c;
                            else if (n && F.test(t)) {
                                for (_ = t.replace(F, "|").split("|"),
                                d = 0; d < _.length; d++)
                                    _[d] = r(_[d]);
                                return _.join(",")
                            }
                            if (e = (t.match(mt) || [s])[0],
                            d = (f = t.split(e).join("").match(x) || []).length,
                            h > d--)
                                for (; ++d < h; )
                                    f[d] = i ? f[(d - 1) / 2 | 0] : o[d];
                            return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        }
                        : function(t) {
                            var e, s, f;
                            if ("number" == typeof t)
                                t += c;
                            else if (n && F.test(t)) {
                                for (s = t.replace(F, "|").split("|"),
                                f = 0; f < s.length; f++)
                                    s[f] = r(s[f]);
                                return s.join(",")
                            }
                            if (f = (e = t.match(x) || []).length,
                            h > f--)
                                for (; ++f < h; )
                                    e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                            return a + e.join(u) + l
                        }
                        : function(t) {
                            return t
                        }
                    }
                      , vt = function(t) {
                        return t = t.split(","),
                        function(e, i, n, r, s, o, a) {
                            var l, u = (i + "").split(" ");
                            for (a = {},
                            l = 0; l < 4; l++)
                                a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(e, a, s, o)
                        }
                    }
                      , yt = (Y._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l; )
                            e = a[l.v],
                            l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                            l.t[l.p] = e,
                            l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation),
                        1 === t || 0 === t)
                            for (l = o.firstMPT,
                            s = 1 === t ? "e" : "b"; l; ) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1,
                                        n = 1; n < i.l; n++)
                                            r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else
                                    i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }
                    ,
                    function(t, e, i, n, r) {
                        this.t = t,
                        this.p = e,
                        this.v = i,
                        this.r = r,
                        n && (n._prev = this,
                        this._next = n)
                    }
                    )
                      , bt = (Y._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, h, c = n, f = {}, d = {}, _ = i._transform, p = z;
                        for (i._transform = null,
                        z = e,
                        n = h = i.parse(t, e, n, r),
                        z = p,
                        s && (i._transform = _,
                        c && (c._prev = null,
                        c._prev && (c._prev._next = null))); n && n !== c; ) {
                            if (n.type <= 1 && (d[a = n.p] = n.s + n.c,
                            f[a] = n.s,
                            s || (u = new yt(n,"s",a,u,n.r),
                            n.c = 0),
                            1 === n.type))
                                for (o = n.l; --o > 0; )
                                    l = "xn" + o,
                                    d[a = n.p + "_" + l] = n.data[l],
                                    f[a] = n[l],
                                    s || (u = new yt(n,l,a,u,n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: d,
                            firstMPT: u,
                            pt: h
                        }
                    }
                    ,
                    Y.CSSPropTween = function(t, e, n, r, s, a, l, u, h, c, f) {
                        this.t = t,
                        this.p = e,
                        this.s = n,
                        this.c = r,
                        this.n = l || e,
                        t instanceof bt || o.push(this.n),
                        this.r = u ? "function" == typeof u ? u : Math.round : u,
                        this.type = a || 0,
                        h && (this.pr = h,
                        i = !0),
                        this.b = void 0 === c ? n : c,
                        this.e = void 0 === f ? n + r : f,
                        s && (this._next = s,
                        s._prev = this)
                    }
                    )
                      , xt = function(t, e, i, n, r, s) {
                        var o = new bt(t,e,i,n - i,r,-1,s);
                        return o.b = i,
                        o.e = o.xs0 = n,
                        o
                    }
                      , wt = a.parseComplex = function(t, e, i, n, r, s, o, l, u, h) {
                        i = i || s || "",
                        "function" == typeof n && (n = n(v, g)),
                        o = new bt(t,e,0,0,o,h ? 2 : 1,null,!1,l,i,n),
                        n += "",
                        r && mt.test(n + i) && (n = [i, n],
                        a.colorStringFilter(n),
                        i = n[0],
                        n = n[1]);
                        var f, d, _, p, m, x, w, T, C, S, O, P, A, k = i.split(", ").join(",").split(" "), E = n.split(", ").join(",").split(" "), R = k.length, M = !1 !== c;
                        for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (k = k.join(" ").replace(F, ", ").split(" "),
                        E = E.join(" ").replace(F, ", ").split(" ")) : (k = k.join(" ").split(",").join(", ").split(" "),
                        E = E.join(" ").split(",").join(", ").split(" ")),
                        R = k.length),
                        R !== E.length && (R = (k = (s || "").split(" ")).length),
                        o.plugin = u,
                        o.setRatio = h,
                        mt.lastIndex = 0,
                        f = 0; f < R; f++)
                            if (p = k[f],
                            m = E[f] + "",
                            (T = parseFloat(p)) || 0 === T)
                                o.appendXtra("", T, ut(m, T), m.replace(b, ""), !(!M || -1 === m.indexOf("px")) && Math.round, !0);
                            else if (r && mt.test(p))
                                P = ")" + ((P = m.indexOf(")") + 1) ? m.substr(P) : ""),
                                A = -1 !== m.indexOf("hsl") && W,
                                S = m,
                                p = _t(p, A),
                                m = _t(m, A),
                                (C = p.length + m.length > 6) && !W && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                                o.e = o.e.split(E[f]).join("transparent")) : (W || (C = !1),
                                A ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), p[0], ut(m[0], p[0]), ",", !1, !0).appendXtra("", p[1], ut(m[1], p[1]), "%,", !1).appendXtra("", p[2], ut(m[2], p[2]), C ? "%," : "%" + P, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), p[0], m[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], m[1] - p[1], ",", Math.round).appendXtra("", p[2], m[2] - p[2], C ? "," : P, Math.round),
                                C && (p = p.length < 4 ? 1 : p[3],
                                o.appendXtra("", p, (m.length < 4 ? 1 : m[3]) - p, P, !1))),
                                mt.lastIndex = 0;
                            else if (x = p.match(y)) {
                                if (!(w = m.match(b)) || w.length !== x.length)
                                    return o;
                                for (_ = 0,
                                d = 0; d < x.length; d++)
                                    O = x[d],
                                    S = p.indexOf(O, _),
                                    o.appendXtra(p.substr(_, S - _), Number(O), ut(w[d], O), "", !(!M || "px" !== p.substr(S + O.length, 2)) && Math.round, 0 === d),
                                    _ = S + O.length;
                                o["xs" + o.l] += p.substr(_)
                            } else
                                o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + m : m;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (P = o.xs0 + o.data.s,
                            f = 1; f < o.l; f++)
                                P += o["xs" + f] + o.data["xn" + f];
                            o.e = P + o["xs" + f]
                        }
                        return o.l || (o.type = -1,
                        o.xs0 = o.e),
                        o.xfirst || o
                    }
                      , Tt = 9;
                    for ((h = bt.prototype).l = h.pr = 0; --Tt > 0; )
                        h["xn" + Tt] = 0,
                        h["xs" + Tt] = "";
                    h.xs0 = "",
                    h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
                    h.appendXtra = function(t, e, i, n, r, s) {
                        var o = this
                          , a = o.l;
                        return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "",
                        i || 0 === a || o.plugin ? (o.l++,
                        o.type = o.setRatio ? 2 : 1,
                        o["xs" + o.l] = n || "",
                        a > 0 ? (o.data["xn" + a] = e + i,
                        o.rxp["xn" + a] = r,
                        o["xn" + a] = e,
                        o.plugin || (o.xfirst = new bt(o,"xn" + a,e,i,o.xfirst || o,0,o.n,r,o.pr),
                        o.xfirst.xs0 = 0),
                        o) : (o.data = {
                            s: e + i
                        },
                        o.rxp = {},
                        o.s = e,
                        o.c = i,
                        o.r = r,
                        o)) : (o["xs" + a] += e + (n || ""),
                        o)
                    }
                    ;
                    var Ct = function(t, e) {
                        e = e || {},
                        this.p = e.prefix && J(t) || t,
                        u[t] = u[this.p] = this,
                        this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi),
                        e.parser && (this.parse = e.parser),
                        this.clrs = e.color,
                        this.multi = e.multi,
                        this.keyword = e.keyword,
                        this.dflt = e.defaultValue,
                        this.pr = e.priority || 0
                    }
                      , St = Y._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r = t.split(","), s = e.defaultValue;
                        for (i = i || [s],
                        n = 0; n < r.length; n++)
                            e.prefix = 0 === n && e.prefix,
                            e.defaultValue = i[n] || s,
                            new Ct(r[n],e)
                    }
                      , Ot = Y._registerPluginProp = function(t) {
                        if (!u[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function(t, i, n, r, s, o, a) {
                                    var h = l.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(),
                                    u[n].parse(t, i, n, r, s, o, a)) : (Q("Error: " + e + " js file not loaded."),
                                    s)
                                }
                            })
                        }
                    }
                    ;
                    (h = Ct.prototype).parseComplex = function(t, e, i, n, r, s) {
                        var o, a, l, u, h, c, f = this.keyword;
                        if (this.multi && (F.test(i) || F.test(e) ? (a = e.replace(F, "|").split("|"),
                        l = i.replace(F, "|").split("|")) : f && (a = [e],
                        l = [i])),
                        l) {
                            for (u = l.length > a.length ? l.length : a.length,
                            o = 0; o < u; o++)
                                e = a[o] = a[o] || this.dflt,
                                i = l[o] = l[o] || this.dflt,
                                f && (h = e.indexOf(f)) !== (c = i.indexOf(f)) && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === h && (a[o] += " " + f));
                            e = a.join(", "),
                            i = l.join(", ")
                        }
                        return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                    }
                    ,
                    h.parse = function(t, e, i, n, r, o, a) {
                        return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                    }
                    ,
                    a.registerSpecialProp = function(t, e, i) {
                        St(t, {
                            parser: function(t, n, r, s, o, a, l) {
                                var u = new bt(t,r,0,0,o,2,r,!1,i);
                                return u.plugin = a,
                                u.setRatio = e(t, n, s._tween, r),
                                u
                            },
                            priority: i
                        })
                    }
                    ,
                    a.useSVGTransformAttr = !0;
                    var Pt, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), kt = J("transform"), Et = Z + "transform", Rt = J("transformOrigin"), Mt = null !== J("perspective"), Dt = Y.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
                        this.force3D = !(!1 === a.defaultForce3D || !Mt) && (a.defaultForce3D || "auto")
                    }
                    , Lt = r.SVGElement, Ft = function(t, e, i) {
                        var n, r = X.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
                        for (n in i)
                            r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r),
                        r
                    }, Nt = X.documentElement || {}, It = function() {
                        var t, e, i, n = m || /Android/i.test(G) && !r.chrome;
                        return X.createElementNS && !n && (t = Ft("svg", Nt),
                        i = (e = Ft("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width,
                        e.style[Rt] = "50% 50%",
                        e.style[kt] = "scaleX(0.5)",
                        n = i === e.getBoundingClientRect().width && !(_ && Mt),
                        Nt.removeChild(t)),
                        n
                    }(), Bt = function(t, e, i, n, r, s) {
                        var o, l, u, h, c, f, d, _, p, m, g, v, y, b, x = t._gsTransform, w = Ht(t, !0);
                        x && (y = x.xOrigin,
                        b = x.yOrigin),
                        (!n || (o = n.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }),
                        o = [(-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]),
                        i.xOrigin = h = parseFloat(o[0]),
                        i.yOrigin = c = parseFloat(o[1]),
                        n && w !== Xt && (f = w[0],
                        d = w[1],
                        _ = w[2],
                        p = w[3],
                        m = w[4],
                        g = w[5],
                        (v = f * p - d * _) && (l = h * (p / v) + c * (-_ / v) + (_ * g - p * m) / v,
                        u = h * (-d / v) + c * (f / v) - (f * g - d * m) / v,
                        h = i.xOrigin = o[0] = l,
                        c = i.yOrigin = o[1] = u)),
                        x && (s && (i.xOffset = x.xOffset,
                        i.yOffset = x.yOffset,
                        x = i),
                        r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = h - y,
                        u = c - b,
                        x.xOffset += l * w[0] + u * w[2] - l,
                        x.yOffset += l * w[1] + u * w[3] - u) : x.xOffset = x.yOffset = 0),
                        s || t.setAttribute("data-svg-origin", o.join(" "))
                    }, zt = function(t) {
                        var e, i = H("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, s = this.style.cssText;
                        if (Nt.appendChild(i),
                        i.appendChild(this),
                        this.style.display = "block",
                        t)
                            try {
                                e = this.getBBox(),
                                this._originalGetBBox = this.getBBox,
                                this.getBBox = zt
                            } catch (t) {}
                        else
                            this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this),
                        Nt.removeChild(i),
                        this.style.cssText = s,
                        e
                    }, jt = function(t) {
                        return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return zt.call(t, !0)
                            }
                        }(t))
                    }, Xt = [1, 0, 0, 1, 0, 0], Ht = function(t, e) {
                        var i, n, r, s, o, a, l = t._gsTransform || new Dt, u = t.style;
                        if (kt ? n = tt(t, Et, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(D)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                        i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                        !kt || !(a = !$(t) || "none" === $(t).display) && t.parentNode || (a && (s = u.display,
                        u.display = "block"),
                        t.parentNode || (o = 1,
                        Nt.appendChild(t)),
                        i = !(n = tt(t, Et, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                        s ? u.display = s : a && Wt(u, "display"),
                        o && Nt.removeChild(t)),
                        (l.svg || t.getCTM && jt(t)) && (i && -1 !== (u[kt] + "").indexOf("matrix") && (n = u[kt],
                        i = 0),
                        r = t.getAttribute("transform"),
                        i && r && (n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")",
                        i = 0)),
                        i)
                            return Xt;
                        for (r = (n || "").match(y) || [],
                        Tt = r.length; --Tt > -1; )
                            s = Number(r[Tt]),
                            r[Tt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    }, Vt = Y.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r)
                            return t._gsTransform;
                        var s, o, l, u, h, c, f = n && t._gsTransform || new Dt, d = f.scaleX < 0, _ = Mt && (parseFloat(tt(t, Rt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0, p = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !jt(t)),
                        f.svg && (Bt(t, tt(t, Rt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")),
                        Pt = a.useSVGTransformAttr || It),
                        (s = Ht(t)) !== Xt) {
                            if (16 === s.length) {
                                var m, g, v, y, b, x = s[0], w = s[1], T = s[2], C = s[3], S = s[4], O = s[5], P = s[6], A = s[7], k = s[8], E = s[9], R = s[10], M = s[12], D = s[13], L = s[14], F = s[11], N = Math.atan2(P, R);
                                f.zOrigin && (M = k * (L = -f.zOrigin) - s[12],
                                D = E * L - s[13],
                                L = R * L + f.zOrigin - s[14]),
                                f.rotationX = N * B,
                                N && (m = S * (y = Math.cos(-N)) + k * (b = Math.sin(-N)),
                                g = O * y + E * b,
                                v = P * y + R * b,
                                k = S * -b + k * y,
                                E = O * -b + E * y,
                                R = P * -b + R * y,
                                F = A * -b + F * y,
                                S = m,
                                O = g,
                                P = v),
                                N = Math.atan2(-T, R),
                                f.rotationY = N * B,
                                N && (g = w * (y = Math.cos(-N)) - E * (b = Math.sin(-N)),
                                v = T * y - R * b,
                                E = w * b + E * y,
                                R = T * b + R * y,
                                F = C * b + F * y,
                                x = m = x * y - k * b,
                                w = g,
                                T = v),
                                N = Math.atan2(w, x),
                                f.rotation = N * B,
                                N && (m = x * (y = Math.cos(N)) + w * (b = Math.sin(N)),
                                g = S * y + O * b,
                                v = k * y + E * b,
                                w = w * y - x * b,
                                O = O * y - S * b,
                                E = E * y - k * b,
                                x = m,
                                S = g,
                                k = v),
                                f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0,
                                f.rotationY = 180 - f.rotationY),
                                N = Math.atan2(S, O),
                                f.scaleX = (1e5 * Math.sqrt(x * x + w * w + T * T) + .5 | 0) / 1e5,
                                f.scaleY = (1e5 * Math.sqrt(O * O + P * P) + .5 | 0) / 1e5,
                                f.scaleZ = (1e5 * Math.sqrt(k * k + E * E + R * R) + .5 | 0) / 1e5,
                                x /= f.scaleX,
                                S /= f.scaleY,
                                w /= f.scaleX,
                                O /= f.scaleY,
                                Math.abs(N) > 2e-5 ? (f.skewX = N * B,
                                S = 0,
                                "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(N))) : f.skewX = 0,
                                f.perspective = F ? 1 / (F < 0 ? -F : F) : 0,
                                f.x = M,
                                f.y = D,
                                f.z = L,
                                f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * S),
                                f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * O))
                            } else if (!Mt || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                var I = s.length >= 6
                                  , z = I ? s[0] : 1
                                  , j = s[1] || 0
                                  , X = s[2] || 0
                                  , H = I ? s[3] : 1;
                                f.x = s[4] || 0,
                                f.y = s[5] || 0,
                                l = Math.sqrt(z * z + j * j),
                                u = Math.sqrt(H * H + X * X),
                                h = z || j ? Math.atan2(j, z) * B : f.rotation || 0,
                                c = X || H ? Math.atan2(X, H) * B + h : f.skewX || 0,
                                f.scaleX = l,
                                f.scaleY = u,
                                f.rotation = h,
                                f.skewX = c,
                                Mt && (f.rotationX = f.rotationY = f.z = 0,
                                f.perspective = p,
                                f.scaleZ = 1),
                                f.svg && (f.x -= f.xOrigin - (f.xOrigin * z + f.yOrigin * X),
                                f.y -= f.yOrigin - (f.xOrigin * j + f.yOrigin * H))
                            }
                            for (o in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1,
                            f.skewX += f.rotation <= 0 ? 180 : -180,
                            f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1,
                            f.skewX += f.skewX <= 0 ? 180 : -180)),
                            f.zOrigin = _,
                            f)
                                f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                        }
                        return n && (t._gsTransform = f,
                        f.svg && (Pt && t.style[kt] ? e.delayedCall(.001, function() {
                            Wt(t.style, kt)
                        }) : !Pt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))),
                        f
                    }
                    , Ut = function(t) {
                        var e, i, n = this.data, r = -n.rotation * I, s = r + n.skewX * I, o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5, a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5, u = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5, h = this.t.style, c = this.t.currentStyle;
                        if (c) {
                            i = a,
                            a = -l,
                            l = -i,
                            e = c.filter,
                            h.filter = "";
                            var f, d, _ = this.t.offsetWidth, p = this.t.offsetHeight, g = "absolute" !== c.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + u, y = n.x + _ * n.xPercent / 100, b = n.y + p * n.yPercent / 100;
                            if (null != n.ox && (y += (f = (n.oxp ? _ * n.ox * .01 : n.ox) - _ / 2) - (f * o + (d = (n.oyp ? p * n.oy * .01 : n.oy) - p / 2) * a),
                            b += d - (f * l + d * u)),
                            v += g ? ", Dx=" + ((f = _ / 2) - (f * o + (d = p / 2) * a) + y) + ", Dy=" + (d - (f * l + d * u) + b) + ")" : ", sizingMethod='auto expand')",
                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(L, v) : h.filter = v + " " + e,
                            0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || C.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")),
                            !g) {
                                var x, w, S, O = m < 8 ? 1 : -1;
                                for (f = n.ieOffsetX || 0,
                                d = n.ieOffsetY || 0,
                                n.ieOffsetX = Math.round((_ - ((o < 0 ? -o : o) * _ + (a < 0 ? -a : a) * p)) / 2 + y),
                                n.ieOffsetY = Math.round((p - ((u < 0 ? -u : u) * p + (l < 0 ? -l : l) * _)) / 2 + b),
                                Tt = 0; Tt < 4; Tt++)
                                    S = (i = -1 !== (x = c[w = ot[Tt]]).indexOf("px") ? parseFloat(x) : et(this.t, w, parseFloat(x), x.replace(T, "")) || 0) !== n[w] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? f - n.ieOffsetX : d - n.ieOffsetY,
                                    h[w] = (n[w] = Math.round(i - S * (0 === Tt || 2 === Tt ? 1 : O))) + "px"
                            }
                        }
                    }, Yt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, h, c, f, d, p, m, g, v, y, b, x, w, T = this.data, C = this.t.style, S = T.rotation, O = T.rotationX, P = T.rotationY, A = T.scaleX, k = T.scaleY, E = T.scaleZ, R = T.x, M = T.y, D = T.z, L = T.svg, F = T.perspective, N = T.force3D, B = T.skewY, z = T.skewX;
                        if (B && (z += B,
                        S += B),
                        !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || D || F || P || O || 1 !== E) || Pt && L || !Mt)
                            S || z || L ? (S *= I,
                            x = z * I,
                            w = 1e5,
                            i = Math.cos(S) * A,
                            s = Math.sin(S) * A,
                            n = Math.sin(S - x) * -k,
                            o = Math.cos(S - x) * k,
                            x && "simple" === T.skewType && (e = Math.tan(x - B * I),
                            n *= e = Math.sqrt(1 + e * e),
                            o *= e,
                            B && (e = Math.tan(B * I),
                            i *= e = Math.sqrt(1 + e * e),
                            s *= e)),
                            L && (R += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset,
                            M += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset,
                            Pt && (T.xPercent || T.yPercent) && (m = this.t.getBBox(),
                            R += .01 * T.xPercent * m.width,
                            M += .01 * T.yPercent * m.height),
                            R < (m = 1e-6) && R > -m && (R = 0),
                            M < m && M > -m && (M = 0)),
                            b = (i * w | 0) / w + "," + (s * w | 0) / w + "," + (n * w | 0) / w + "," + (o * w | 0) / w + "," + R + "," + M + ")",
                            L && Pt ? this.t.setAttribute("transform", "matrix(" + b) : C[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + b) : C[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + k + "," + R + "," + M + ")";
                        else {
                            if (_ && (A < (m = 1e-4) && A > -m && (A = E = 2e-5),
                            k < m && k > -m && (k = E = 2e-5),
                            !F || T.z || T.rotationX || T.rotationY || (F = 0)),
                            S || z)
                                S *= I,
                                g = i = Math.cos(S),
                                v = s = Math.sin(S),
                                z && (S -= z * I,
                                g = Math.cos(S),
                                v = Math.sin(S),
                                "simple" === T.skewType && (e = Math.tan((z - B) * I),
                                g *= e = Math.sqrt(1 + e * e),
                                v *= e,
                                T.skewY && (e = Math.tan(B * I),
                                i *= e = Math.sqrt(1 + e * e),
                                s *= e))),
                                n = -v,
                                o = g;
                            else {
                                if (!(P || O || 1 !== E || F || L))
                                    return void (C[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + D + "px)" + (1 !== A || 1 !== k ? " scale(" + A + "," + k + ")" : ""));
                                i = o = 1,
                                n = s = 0
                            }
                            h = 1,
                            r = a = l = u = c = f = 0,
                            d = F ? -1 / F : 0,
                            p = T.zOrigin,
                            m = 1e-6,
                            ",",
                            "0",
                            (S = P * I) && (g = Math.cos(S),
                            l = -(v = Math.sin(S)),
                            c = d * -v,
                            r = i * v,
                            a = s * v,
                            h = g,
                            d *= g,
                            i *= g,
                            s *= g),
                            (S = O * I) && (e = n * (g = Math.cos(S)) + r * (v = Math.sin(S)),
                            y = o * g + a * v,
                            u = h * v,
                            f = d * v,
                            r = n * -v + r * g,
                            a = o * -v + a * g,
                            h *= g,
                            d *= g,
                            n = e,
                            o = y),
                            1 !== E && (r *= E,
                            a *= E,
                            h *= E,
                            d *= E),
                            1 !== k && (n *= k,
                            o *= k,
                            u *= k,
                            f *= k),
                            1 !== A && (i *= A,
                            s *= A,
                            l *= A,
                            c *= A),
                            (p || L) && (p && (R += r * -p,
                            M += a * -p,
                            D += h * -p + p),
                            L && (R += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset,
                            M += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset),
                            R < m && R > -m && (R = "0"),
                            M < m && M > -m && (M = "0"),
                            D < m && D > -m && (D = 0)),
                            b = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(",
                            b += (i < m && i > -m ? "0" : i) + "," + (s < m && s > -m ? "0" : s) + "," + (l < m && l > -m ? "0" : l),
                            b += "," + (c < m && c > -m ? "0" : c) + "," + (n < m && n > -m ? "0" : n) + "," + (o < m && o > -m ? "0" : o),
                            O || P || 1 !== E ? (b += "," + (u < m && u > -m ? "0" : u) + "," + (f < m && f > -m ? "0" : f) + "," + (r < m && r > -m ? "0" : r),
                            b += "," + (a < m && a > -m ? "0" : a) + "," + (h < m && h > -m ? "0" : h) + "," + (d < m && d > -m ? "0" : d) + ",") : b += ",0,0,0,0,1,0,",
                            b += R + "," + M + "," + D + "," + (F ? 1 + -D / F : 1) + ")",
                            C[kt] = b
                        }
                    }
                    ;
                    (h = Dt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
                    h.scaleX = h.scaleY = h.scaleZ = 1,
                    St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, i, n, r, o, l) {
                            if (n._lastParsedTransform === l)
                                return r;
                            n._lastParsedTransform = l;
                            var u, h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                            "function" == typeof l[i] && (u = l[i],
                            l[i] = e),
                            h && (l.scale = h(v, t));
                            var c, f, d, _, p, m, y, b, x, w = t._gsTransform, T = t.style, C = At.length, S = l, O = {}, P = Vt(t, s, !0, S.parseTransform), A = S.transform && ("function" == typeof S.transform ? S.transform(v, g) : S.transform);
                            if (P.skewType = S.skewType || P.skewType || a.defaultSkewType,
                            n._transform = P,
                            A && "string" == typeof A && kt)
                                (f = V.style)[kt] = A,
                                f.display = "block",
                                f.position = "absolute",
                                -1 !== A.indexOf("%") && (f.width = tt(t, "width"),
                                f.height = tt(t, "height")),
                                X.body.appendChild(V),
                                c = Vt(V, null, !1),
                                "simple" === P.skewType && (c.scaleY *= Math.cos(c.skewX * I)),
                                P.svg && (m = P.xOrigin,
                                y = P.yOrigin,
                                c.x -= P.xOffset,
                                c.y -= P.yOffset,
                                (S.transformOrigin || S.svgOrigin) && (A = {},
                                Bt(t, lt(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0),
                                m = A.xOrigin,
                                y = A.yOrigin,
                                c.x -= A.xOffset - P.xOffset,
                                c.y -= A.yOffset - P.yOffset),
                                (m || y) && (b = Ht(V, !0),
                                c.x -= m - (m * b[0] + y * b[2]),
                                c.y -= y - (m * b[1] + y * b[3]))),
                                X.body.removeChild(V),
                                c.perspective || (c.perspective = P.perspective),
                                null != S.xPercent && (c.xPercent = ht(S.xPercent, P.xPercent)),
                                null != S.yPercent && (c.yPercent = ht(S.yPercent, P.yPercent));
                            else if ("object" == typeof S) {
                                if (c = {
                                    scaleX: ht(null != S.scaleX ? S.scaleX : S.scale, P.scaleX),
                                    scaleY: ht(null != S.scaleY ? S.scaleY : S.scale, P.scaleY),
                                    scaleZ: ht(S.scaleZ, P.scaleZ),
                                    x: ht(S.x, P.x),
                                    y: ht(S.y, P.y),
                                    z: ht(S.z, P.z),
                                    xPercent: ht(S.xPercent, P.xPercent),
                                    yPercent: ht(S.yPercent, P.yPercent),
                                    perspective: ht(S.transformPerspective, P.perspective)
                                },
                                null != (p = S.directionalRotation))
                                    if ("object" == typeof p)
                                        for (f in p)
                                            S[f] = p[f];
                                    else
                                        S.rotation = p;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0,
                                c.xPercent = ht(S.x, P.xPercent)),
                                "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0,
                                c.yPercent = ht(S.y, P.yPercent)),
                                c.rotation = ct("rotation"in S ? S.rotation : "shortRotation"in S ? S.shortRotation + "_short" : "rotationZ"in S ? S.rotationZ : P.rotation, P.rotation, "rotation", O),
                                Mt && (c.rotationX = ct("rotationX"in S ? S.rotationX : "shortRotationX"in S ? S.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", O),
                                c.rotationY = ct("rotationY"in S ? S.rotationY : "shortRotationY"in S ? S.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", O)),
                                c.skewX = ct(S.skewX, P.skewX),
                                c.skewY = ct(S.skewY, P.skewY)
                            }
                            for (Mt && null != S.force3D && (P.force3D = S.force3D,
                            _ = !0),
                            (d = P.force3D || P.z || P.rotationX || P.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == S.scale || (c.scaleZ = 1); --C > -1; )
                                ((A = c[x = At[C]] - P[x]) > 1e-6 || A < -1e-6 || null != S[x] || null != z[x]) && (_ = !0,
                                r = new bt(P,x,P[x],A,r),
                                x in O && (r.e = O[x]),
                                r.xs0 = 0,
                                r.plugin = o,
                                n._overwriteProps.push(r.n));
                            return A = S.transformOrigin,
                            P.svg && (A || S.svgOrigin) && (m = P.xOffset,
                            y = P.yOffset,
                            Bt(t, lt(A), c, S.svgOrigin, S.smoothOrigin),
                            r = xt(P, "xOrigin", (w ? P : c).xOrigin, c.xOrigin, r, "transformOrigin"),
                            r = xt(P, "yOrigin", (w ? P : c).yOrigin, c.yOrigin, r, "transformOrigin"),
                            m === P.xOffset && y === P.yOffset || (r = xt(P, "xOffset", w ? m : P.xOffset, P.xOffset, r, "transformOrigin"),
                            r = xt(P, "yOffset", w ? y : P.yOffset, P.yOffset, r, "transformOrigin")),
                            A = "0px 0px"),
                            (A || Mt && d && P.zOrigin) && (kt ? (_ = !0,
                            x = Rt,
                            A = (A || tt(t, x, s, !1, "50% 50%")) + "",
                            (r = new bt(T,x,0,0,r,-1,"transformOrigin")).b = T[x],
                            r.plugin = o,
                            Mt ? (f = P.zOrigin,
                            A = A.split(" "),
                            P.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0,
                            r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px",
                            (r = new bt(P,"zOrigin",0,0,r,-1,r.n)).b = f,
                            r.xs0 = r.e = P.zOrigin) : r.xs0 = r.e = A) : lt(A + "", P)),
                            _ && (n._transformType = P.svg && Pt || !d && 3 !== this._transformType ? 2 : 3),
                            u && (l[i] = u),
                            h && (l.scale = h),
                            r
                        },
                        prefix: !0
                    }),
                    St("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }),
                    St("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, r, o, a) {
                            e = this.format(e);
                            var l, u, h, c, f, d, _, p, m, g, v, y, b, x, w, T, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                            for (m = parseFloat(t.offsetWidth),
                            g = parseFloat(t.offsetHeight),
                            l = e.split(" "),
                            u = 0; u < C.length; u++)
                                this.p.indexOf("border") && (C[u] = J(C[u])),
                                -1 !== (f = c = tt(t, C[u], s, !1, "0px")).indexOf(" ") && (f = (c = f.split(" "))[0],
                                c = c[1]),
                                d = h = l[u],
                                _ = parseFloat(f),
                                y = f.substr((_ + "").length),
                                (b = "=" === d.charAt(1)) ? (p = parseInt(d.charAt(0) + "1", 10),
                                d = d.substr(2),
                                p *= parseFloat(d),
                                v = d.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(d),
                                v = d.substr((p + "").length)),
                                "" === v && (v = n[i] || y),
                                v !== y && (x = et(t, "borderLeft", _, y),
                                w = et(t, "borderTop", _, y),
                                "%" === v ? (f = x / m * 100 + "%",
                                c = w / g * 100 + "%") : "em" === v ? (f = x / (T = et(t, "borderLeft", 1, "em")) + "em",
                                c = w / T + "em") : (f = x + "px",
                                c = w + "px"),
                                b && (d = parseFloat(f) + p + v,
                                h = parseFloat(c) + p + v)),
                                o = wt(S, C[u], f + " " + c, d + " " + h, !1, "0px", o);
                            return o
                        },
                        prefix: !0,
                        formatter: gt("0px 0px 0px 0px", !1, !0)
                    }),
                    St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, n, r, o) {
                            return wt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                        },
                        prefix: !0,
                        formatter: gt("0px 0px", !1, !0)
                    }),
                    St("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, i, n, r, o) {
                            var a, l, u, h, c, f, d = "background-position", _ = s || $(t, null), p = this.format((_ ? m ? _.getPropertyValue(d + "-x") + " " + _.getPropertyValue(d + "-y") : _.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                            if (-1 !== p.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(E, "")) && "none" !== f) {
                                for (a = p.split(" "),
                                l = g.split(" "),
                                U.setAttribute("src", f),
                                u = 2; --u > -1; )
                                    (h = -1 !== (p = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - U.width : t.offsetHeight - U.height,
                                    a[u] = h ? parseFloat(p) / 100 * c + "px" : parseFloat(p) / c * 100 + "%");
                                p = a.join(" ")
                            }
                            return this.parseComplex(t.style, p, g, r, o)
                        },
                        formatter: lt
                    }),
                    St("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(t) {
                            return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                        }
                    }),
                    St("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }),
                    St("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }),
                    St("transformStyle", {
                        prefix: !0
                    }),
                    St("backfaceVisibility", {
                        prefix: !0
                    }),
                    St("userSelect", {
                        prefix: !0
                    }),
                    St("margin", {
                        parser: vt("marginTop,marginRight,marginBottom,marginLeft")
                    }),
                    St("padding", {
                        parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }),
                    St("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(t, e, i, n, r, o) {
                            var a, l, u;
                            return m < 9 ? (l = t.currentStyle,
                            u = m < 8 ? " " : ",",
                            a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")",
                            e = this.format(e).split(",").join(u)) : (a = this.format(tt(t, this.p, s, !1, this.dflt)),
                            e = this.format(e)),
                            this.parseComplex(t.style, a, e, r, o)
                        }
                    }),
                    St("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }),
                    St("autoRound,strictUnits", {
                        parser: function(t, e, i, n, r) {
                            return r
                        }
                    }),
                    St("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, i, n, r, o) {
                            var a = tt(t, "borderTopWidth", s, !1, "0px")
                              , l = this.format(e).split(" ")
                              , u = l[0].replace(T, "");
                            return "px" !== u && (a = parseFloat(a) / et(t, "borderTopWidth", 1, u) + u),
                            this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                        },
                        color: !0,
                        formatter: function(t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                        }
                    }),
                    St("borderWidth", {
                        parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }),
                    St("float,cssFloat,styleFloat", {
                        parser: function(t, e, i, n, r, s) {
                            var o = t.style
                              , a = "cssFloat"in o ? "cssFloat" : "styleFloat";
                            return new bt(o,a,0,0,r,-1,i,!1,0,o[a],e)
                        }
                    });
                    var Gt = function(t) {
                        var e, i = this.t, n = i.filter || tt(this.data, "filter") || "", r = this.s + this.c * t | 0;
                        100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
                        e = !tt(this.data, "filter")) : (i.filter = n.replace(O, ""),
                        e = !0)),
                        e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
                        -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(C, "opacity=" + r))
                    };
                    St("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, i, n, r, o) {
                            var a = parseFloat(tt(t, "opacity", s, !1, "1"))
                              , l = t.style
                              , u = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                            u && 1 === a && "hidden" === tt(t, "visibility", s) && 0 !== e && (a = 0),
                            W ? r = new bt(l,"opacity",a,e - a,r) : ((r = new bt(l,"opacity",100 * a,100 * (e - a),r)).xn1 = u ? 1 : 0,
                            l.zoom = 1,
                            r.type = 2,
                            r.b = "alpha(opacity=" + r.s + ")",
                            r.e = "alpha(opacity=" + (r.s + r.c) + ")",
                            r.data = t,
                            r.plugin = o,
                            r.setRatio = Gt),
                            u && ((r = new bt(l,"visibility",0,0,r,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                            n._overwriteProps.push(r.n),
                            n._overwriteProps.push(i)),
                            r
                        }
                    });
                    var Wt = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                        t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
                    }
                      , qt = function(t) {
                        if (this.t._gsClassPT = this,
                        1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e; )
                                e.v ? i[e.p] = e.v : Wt(i, e.p),
                                e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else
                            this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                    St("className", {
                        parser: function(t, e, n, r, o, a, l) {
                            var u, h, c, f, d, _ = t.getAttribute("class") || "", p = t.style.cssText;
                            if ((o = r._classNamePT = new bt(t,n,0,0,o,2)).setRatio = qt,
                            o.pr = -11,
                            i = !0,
                            o.b = _,
                            h = nt(t, s),
                            c = t._gsClassPT) {
                                for (f = {},
                                d = c.data; d; )
                                    f[d.p] = 1,
                                    d = d._next;
                                c.setRatio(1)
                            }
                            return t._gsClassPT = o,
                            o.e = "=" !== e.charAt(1) ? e : _.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                            t.setAttribute("class", o.e),
                            u = rt(t, h, nt(t), l, f),
                            t.setAttribute("class", _),
                            o.data = u.firstMPT,
                            t.style.cssText = p,
                            o = o.xfirst = r.parse(t, u.difs, o, a)
                        }
                    });
                    var Qt = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, i, n, r, s, o = this.t.style, a = u.transform.parse;
                            if ("all" === this.e)
                                o.cssText = "",
                                r = !0;
                            else
                                for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; )
                                    i = e[n],
                                    u[i] && (u[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Rt : u[i].p),
                                    Wt(o, i);
                            r && (Wt(o, kt),
                            (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"),
                            this.t.removeAttribute("transform")),
                            delete this.t._gsTransform))
                        }
                    };
                    for (St("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return (s = new bt(t,n,0,0,s,2)).setRatio = Qt,
                            s.e = e,
                            s.pr = -10,
                            s.data = r._tween,
                            i = !0,
                            s
                        }
                    }),
                    h = "bezier,throwProps,physicsProps,physics2D".split(","),
                    Tt = h.length; Tt--; )
                        Ot(h[Tt]);
                    (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null,
                    h._onInitTween = function(t, e, r, l) {
                        if (!t.nodeType)
                            return !1;
                        this._target = g = t,
                        this._tween = r,
                        this._vars = e,
                        v = l,
                        c = e.autoRound,
                        i = !1,
                        n = e.suffixMap || a.suffixMap,
                        s = $(t, ""),
                        o = this._overwriteProps;
                        var h, _, m, y, b, x, w, T, C, O = t.style;
                        if (f && "" === O.zIndex && ("auto" !== (h = tt(t, "zIndex", s)) && "" !== h || this._addLazySet(O, "zIndex", 0)),
                        "string" == typeof e && (y = O.cssText,
                        h = nt(t, s),
                        O.cssText = y + ";" + e,
                        h = rt(t, h, nt(t)).difs,
                        !W && S.test(e) && (h.opacity = parseFloat(RegExp.$1)),
                        e = h,
                        O.cssText = y),
                        e.className ? this._firstPT = _ = u.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null),
                        this._transformType) {
                            for (C = 3 === this._transformType,
                            kt ? d && (f = !0,
                            "" === O.zIndex && ("auto" !== (w = tt(t, "zIndex", s)) && "" !== w || this._addLazySet(O, "zIndex", 0)),
                            p && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : O.zoom = 1,
                            m = _; m && m._next; )
                                m = m._next;
                            T = new bt(t,"transform",0,0,null,2),
                            this._linkCSSP(T, null, m),
                            T.setRatio = kt ? Yt : Ut,
                            T.data = this._transform || Vt(t, s, !0),
                            T.tween = r,
                            T.pr = -1,
                            o.pop()
                        }
                        if (i) {
                            for (; _; ) {
                                for (x = _._next,
                                m = y; m && m.pr > _.pr; )
                                    m = m._next;
                                (_._prev = m ? m._prev : b) ? _._prev._next = _ : y = _,
                                (_._next = m) ? m._prev = _ : b = _,
                                _ = x
                            }
                            this._firstPT = y
                        }
                        return !0
                    }
                    ,
                    h.parse = function(t, e, i, r) {
                        var o, a, l, h, f, d, _, p, m, y, b = t.style;
                        for (o in e) {
                            if ("function" == typeof (d = e[o]) && (d = d(v, g)),
                            a = u[o])
                                i = a.parse(t, d, o, this, i, r, e);
                            else {
                                if ("--" === o.substr(0, 2)) {
                                    this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", $(t).getPropertyValue(o) + "", d + "", o, !1, o);
                                    continue
                                }
                                f = tt(t, o, s) + "",
                                m = "string" == typeof d,
                                "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && P.test(d) ? (m || (d = ((d = _t(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"),
                                i = wt(b, o, f, d, !0, "transparent", i, 0, r)) : m && N.test(d) ? i = wt(b, o, f, d, !0, null, i, 0, r) : (_ = (l = parseFloat(f)) || 0 === l ? f.substr((l + "").length) : "",
                                "" !== f && "auto" !== f || ("width" === o || "height" === o ? (l = at(t, o, s),
                                _ = "px") : "left" === o || "top" === o ? (l = it(t, o, s),
                                _ = "px") : (l = "opacity" !== o ? 0 : 1,
                                _ = "")),
                                (y = m && "=" === d.charAt(1)) ? (h = parseInt(d.charAt(0) + "1", 10),
                                d = d.substr(2),
                                h *= parseFloat(d),
                                p = d.replace(T, "")) : (h = parseFloat(d),
                                p = m ? d.replace(T, "") : ""),
                                "" === p && (p = o in n ? n[o] : _),
                                d = h || 0 === h ? (y ? h + l : h) + p : e[o],
                                _ !== p && ("" === p && "lineHeight" !== o || (h || 0 === h) && l && (l = et(t, o, l, _),
                                "%" === p ? (l /= et(t, o, 100, "%") / 100,
                                !0 !== e.strictUnits && (f = l + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? l /= et(t, o, 1, p) : "px" !== p && (h = et(t, o, h, p),
                                p = "px"),
                                y && (h || 0 === h) && (d = h + l + p))),
                                y && (h += l),
                                !l && 0 !== l || !h && 0 !== h ? void 0 !== b[o] && (d || d + "" != "NaN" && null != d) ? (i = new bt(b,o,h || l || 0,0,i,-1,o,!1,0,f,d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : f : Q("invalid " + o + " tween value: " + e[o]) : (i = new bt(b,o,l,h - l,i,0,o,!1 !== c && ("px" === p || "zIndex" === o),0,f,d)).xs0 = p)
                            }
                            r && i && !i.plugin && (i.plugin = r)
                        }
                        return i
                    }
                    ,
                    h.setRatio = function(t) {
                        var e, i, n, r = this._firstPT;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                for (; r; ) {
                                    if (e = r.c * t + r.s,
                                    r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                                    r.type)
                                        if (1 === r.type)
                                            if (2 === (n = r.l))
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + e + r.xs1,
                                                n = 1; n < r.l; n++)
                                                    i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        else
                                            -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                    else
                                        r.t[r.p] = e + r.xs0;
                                    r = r._next
                                }
                            else
                                for (; r; )
                                    2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                                    r = r._next;
                        else
                            for (; r; ) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = r.r(r.s + r.c),
                                        r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l,
                                                i = r.xs0 + e + r.xs1,
                                                n = 1; n < r.l; n++)
                                                    i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else
                                            r.t[r.p] = e + r.xs0;
                                    else
                                        r.t[r.p] = r.e;
                                else
                                    r.setRatio(t);
                                r = r._next
                            }
                    }
                    ,
                    h._enableTransforms = function(t) {
                        this._transform = this._transform || Vt(this._target, s, !0),
                        this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
                    }
                    ;
                    var Zt = function(t) {
                        this.t[this.p] = this.e,
                        this.data._linkCSSP(this, this._next, null, !0)
                    };
                    h._addLazySet = function(t, e, i) {
                        var n = this._firstPT = new bt(t,e,0,0,this._firstPT,2);
                        n.e = i,
                        n.setRatio = Zt,
                        n.data = this
                    }
                    ,
                    h._linkCSSP = function(t, e, i, n) {
                        return t && (e && (e._prev = t),
                        t._next && (t._next._prev = t._prev),
                        t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                        n = !0),
                        i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
                        t._next = e,
                        t._prev = i),
                        t
                    }
                    ,
                    h._mod = function(t) {
                        for (var e = this._firstPT; e; )
                            "function" == typeof t[e.p] && (e.r = t[e.p]),
                            e = e._next
                    }
                    ,
                    h._kill = function(e) {
                        var i, n, r, s = e;
                        if (e.autoAlpha || e.alpha) {
                            for (n in s = {},
                            e)
                                s[n] = e[n];
                            s.opacity = 1,
                            s.autoAlpha && (s.visibility = 1)
                        }
                        for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                        i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                        this._classNamePT = null),
                        i = this._firstPT; i; )
                            i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e),
                            n = i.plugin),
                            i = i._next;
                        return t.prototype._kill.call(this, s)
                    }
                    ;
                    var Kt = function(t, e, i) {
                        var n, r, s, o;
                        if (t.slice)
                            for (r = t.length; --r > -1; )
                                Kt(t[r], e, i);
                        else
                            for (r = (n = t.childNodes).length; --r > -1; )
                                o = (s = n[r]).type,
                                s.style && (e.push(nt(s)),
                                i && i.push(s)),
                                1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Kt(s, e, i)
                    };
                    return a.cascadeTo = function(t, i, n) {
                        var r, s, o, a, l = e.to(t, i, n), u = [l], h = [], c = [], f = [], d = e._internals.reservedProps;
                        for (t = l._targets || l.target,
                        Kt(t, h, f),
                        l.render(i, !0, !0),
                        Kt(t, c),
                        l.render(0, !0, !0),
                        l._enabled(!0),
                        r = f.length; --r > -1; )
                            if ((s = rt(f[r], h[r], c[r])).firstMPT) {
                                for (o in s = s.difs,
                                n)
                                    d[o] && (s[o] = n[o]);
                                for (o in a = {},
                                s)
                                    a[o] = h[r][o];
                                u.push(e.fromTo(f[r], i, a, s))
                            }
                        return u
                    }
                    ,
                    t.activate([a]),
                    a
                }, !0),
                function() {
                    var t = function(t) {
                        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                        return function(i) {
                            return (Math.round(i / t) * t * e | 0) / e
                        }
                    }
                      , e = function(t, e) {
                        for (; t; )
                            t.f || t.blob || (t.m = e || Math.round),
                            t = t._next
                    }
                      , i = r._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i,
                            !0
                        }
                    }).prototype;
                    i._onInitAllProps = function() {
                        var i, n, r, s, o = this._tween, a = o.vars.roundProps, l = {}, u = o._propLookup.roundProps;
                        if ("object" != typeof a || a.push)
                            for ("string" == typeof a && (a = a.split(",")),
                            r = a.length; --r > -1; )
                                l[a[r]] = Math.round;
                        else
                            for (s in a)
                                l[s] = t(a[s]);
                        for (s in l)
                            for (i = o._firstPT; i; )
                                n = i._next,
                                i.pg ? i.t._mod(l) : i.n === s && (2 === i.f && i.t ? e(i.t._firstPT, l[s]) : (this._add(i.t, s, i.s, i.c, l[s]),
                                n && (n._prev = i._prev),
                                i._prev ? i._prev._next = n : o._firstPT === i && (o._firstPT = n),
                                i._next = i._prev = null,
                                o._propLookup[s] = u)),
                                i = n;
                        return !1
                    }
                    ,
                    i._add = function(t, e, i, n, r) {
                        this._addTween(t, e, i, i + n, e, r || Math.round),
                        this._overwriteProps.push(e)
                    }
                }(),
                r._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(t, e, i, n) {
                        var r, s;
                        if ("function" != typeof t.setAttribute)
                            return !1;
                        for (r in e)
                            "function" == typeof (s = e[r]) && (s = s(n, t)),
                            this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r),
                            this._overwriteProps.push(r);
                        return !0
                    }
                }),
                r._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.3.1",
                    API: 2,
                    init: function(t, e, i, n) {
                        "object" != typeof e && (e = {
                            rotation: e
                        }),
                        this.finals = {};
                        var r, s, o, a, l, u, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                        for (r in e)
                            "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)),
                            s = (u = (a + "").split("_"))[0],
                            o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                            l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o,
                            u.length && (-1 !== (s = u.join("_")).indexOf("short") && (l %= h) !== l % (h / 2) && (l = l < 0 ? l + h : l - h),
                            -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)),
                            (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, o, o + l, r),
                            this._overwriteProps.push(r)));
                        return !0
                    },
                    set: function(t) {
                        var e;
                        if (1 !== t)
                            this._super.setRatio.call(this, t);
                        else
                            for (e = this._firstPT; e; )
                                e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                                e = e._next
                    }
                })._autoCSS = !0,
                r._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                    var e, i, n, s, o = r.GreenSockGlobals || r, a = o.com.greensock, l = 2 * Math.PI, u = Math.PI / 2, h = a._class, c = function(e, i) {
                        var n = h("easing." + e, function() {}, !0)
                          , r = n.prototype = new t;
                        return r.constructor = n,
                        r.getRatio = i,
                        n
                    }, f = t.register || function() {}
                    , d = function(t, e, i, n, r) {
                        var s = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return f(s, t),
                        s
                    }, _ = function(t, e, i) {
                        this.t = t,
                        this.v = e,
                        i && (this.next = i,
                        i.prev = this,
                        this.c = i.v - e,
                        this.gap = i.t - t)
                    }, p = function(e, i) {
                        var n = h("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158,
                            this._p2 = 1.525 * this._p1
                        }, !0)
                          , r = n.prototype = new t;
                        return r.constructor = n,
                        r.getRatio = i,
                        r.config = function(t) {
                            return new n(t)
                        }
                        ,
                        n
                    }, m = d("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })), g = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7,
                        null == t ? t = .7 : t > 1 && (t = 1),
                        this._p = 1 !== t ? e : 0,
                        this._p1 = (1 - t) / 2,
                        this._p2 = t,
                        this._p3 = this._p1 + this._p2,
                        this._calcEnd = !0 === i
                    }, !0), v = g.prototype = new t;
                    return v.constructor = g,
                    v.getRatio = function(t) {
                        var e = t + (.5 - t) * this._p;
                        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }
                    ,
                    g.ease = new g(.7,.7),
                    v.config = g.config = function(t, e, i) {
                        return new g(t,e,i)
                    }
                    ,
                    (v = (e = h("easing.SteppedEase", function(t, e) {
                        t = t || 1,
                        this._p1 = 1 / t,
                        this._p2 = t + (e ? 0 : 1),
                        this._p3 = e ? 1 : 0
                    }, !0)).prototype = new t).constructor = e,
                    v.getRatio = function(t) {
                        return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
                        ((this._p2 * t | 0) + this._p3) * this._p1
                    }
                    ,
                    v.config = e.config = function(t, i) {
                        return new e(t,i)
                    }
                    ,
                    (v = (i = h("easing.ExpoScaleEase", function(t, e, i) {
                        this._p1 = Math.log(e / t),
                        this._p2 = e - t,
                        this._p3 = t,
                        this._ease = i
                    }, !0)).prototype = new t).constructor = i,
                    v.getRatio = function(t) {
                        return this._ease && (t = this._ease.getRatio(t)),
                        (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                    }
                    ,
                    v.config = i.config = function(t, e, n) {
                        return new i(t,e,n)
                    }
                    ,
                    (v = (n = h("easing.RoughEase", function(e) {
                        for (var i, n, r, s, o, a, l = (e = e || {}).taper || "none", u = [], h = 0, c = 0 | (e.points || 20), f = c, d = !1 !== e.randomize, p = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1; )
                            i = d ? Math.random() : 1 / c * f,
                            n = m ? m.getRatio(i) : i,
                            r = "none" === l ? g : "out" === l ? (s = 1 - i) * s * g : "in" === l ? i * i * g : i < .5 ? (s = 2 * i) * s * .5 * g : (s = 2 * (1 - i)) * s * .5 * g,
                            d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r,
                            p && (n > 1 ? n = 1 : n < 0 && (n = 0)),
                            u[h++] = {
                                x: i,
                                y: n
                            };
                        for (u.sort(function(t, e) {
                            return t.x - e.x
                        }),
                        a = new _(1,1,null),
                        f = c; --f > -1; )
                            o = u[f],
                            a = new _(o.x,o.y,a);
                        this._prev = new _(0,0,0 !== a.t ? a : a.next)
                    }, !0)).prototype = new t).constructor = n,
                    v.getRatio = function(t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t; )
                                e = e.next;
                            e = e.prev
                        } else
                            for (; e.prev && t <= e.t; )
                                e = e.prev;
                        return this._prev = e,
                        e.v + (t - e.t) / e.gap * e.c
                    }
                    ,
                    v.config = function(t) {
                        return new n(t)
                    }
                    ,
                    n.ease = new n,
                    d("Bounce", c("BounceOut", function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }), c("BounceIn", function(t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }), c("BounceInOut", function(t) {
                        var e = t < .5;
                        return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                        e ? .5 * (1 - t) : .5 * t + .5
                    })),
                    d("Circ", c("CircOut", function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }), c("CircIn", function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    }), c("CircInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    })),
                    d("Elastic", (s = function(e, i, n) {
                        var r = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1,
                            this._p2 = (e || n) / (t < 1 ? t : 1),
                            this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0),
                            this._p2 = l / this._p2
                        }, !0)
                          , s = r.prototype = new t;
                        return s.constructor = r,
                        s.getRatio = i,
                        s.config = function(t, e) {
                            return new r(t,e)
                        }
                        ,
                        r
                    }
                    )("ElasticOut", function(t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                    }, .3), s("ElasticIn", function(t) {
                        return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                    }, .3), s("ElasticInOut", function(t) {
                        return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                    }, .45)),
                    d("Expo", c("ExpoOut", function(t) {
                        return 1 - Math.pow(2, -10 * t)
                    }), c("ExpoIn", function(t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                    }), c("ExpoInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    })),
                    d("Sine", c("SineOut", function(t) {
                        return Math.sin(t * u)
                    }), c("SineIn", function(t) {
                        return 1 - Math.cos(t * u)
                    }), c("SineInOut", function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    })),
                    h("easing.EaseLookup", {
                        find: function(e) {
                            return t.map[e]
                        }
                    }, !0),
                    f(o.SlowMo, "SlowMo", "ease,"),
                    f(n, "RoughEase", "ease,"),
                    f(e, "SteppedEase", "ease,"),
                    m
                }, !0)
            }),
            r._gsDefine && r._gsQueue.pop()(),
            function(i, r) {
                "use strict";
                var s = {}
                  , o = i.document
                  , a = i.GreenSockGlobals = i.GreenSockGlobals || i
                  , l = a.TweenMax;
                if (l)
                    return void 0 !== t && t.exports && (t.exports = l),
                    l;
                var u, h, c, f, d, _ = function(t) {
                    var e, i = t.split("."), n = a;
                    for (e = 0; e < i.length; e++)
                        n[i[e]] = n = n[i[e]] || {};
                    return n
                }, p = _("com.greensock"), m = function(t) {
                    var e, i = [], n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]))
                        ;
                    return i
                }, g = function() {}, v = function() {
                    var t = Object.prototype.toString
                      , e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(), y = {}, b = function(i, r, o, l) {
                    this.sc = y[i] ? y[i].sc : [],
                    y[i] = this,
                    this.gsClass = null,
                    this.func = o;
                    var u = [];
                    this.check = function(h) {
                        for (var c, f, d, p, m = r.length, g = m; --m > -1; )
                            (c = y[r[m]] || new b(r[m],[])).gsClass ? (u[m] = c.gsClass,
                            g--) : h && c.sc.push(this);
                        if (0 === g && o) {
                            if (d = (f = ("com.greensock." + i).split(".")).pop(),
                            p = _(f.join("."))[d] = this.gsClass = o.apply(o, u),
                            l)
                                if (a[d] = s[d] = p,
                                void 0 !== t && t.exports)
                                    if ("TweenMax" === i)
                                        for (m in t.exports = s.TweenMax = p,
                                        s)
                                            p[m] = s[m];
                                    else
                                        s.TweenMax && (s.TweenMax[d] = p);
                                else
                                    void 0 === (n = function() {
                                        return p
                                    }
                                    .apply(e, [])) || (t.exports = n);
                            for (m = 0; m < this.sc.length; m++)
                                this.sc[m].check()
                        }
                    }
                    ,
                    this.check(!0)
                }, x = i._gsDefine = function(t, e, i, n) {
                    return new b(t,e,i,n)
                }
                , w = p._class = function(t, e, i) {
                    return e = e || function() {}
                    ,
                    x(t, [], function() {
                        return e
                    }, i),
                    e
                }
                ;
                x.globals = a;
                var T = [0, 0, 1, 1]
                  , C = w("easing.Ease", function(t, e, i, n) {
                    this._func = t,
                    this._type = i || 0,
                    this._power = n || 0,
                    this._params = e ? T.concat(e) : T
                }, !0)
                  , S = C.map = {}
                  , O = C.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                        for (s = l[u],
                        r = n ? w("easing." + s, null, !0) : p.easing[s] || {},
                        o = h.length; --o > -1; )
                            a = h[o],
                            S[s + "." + a] = S[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                }
                ;
                for ((c = C.prototype)._calcEnd = !1,
                c.getRatio = function(t) {
                    if (this._func)
                        return this._params[0] = t,
                        this._func.apply(null, this._params);
                    var e = this._type
                      , i = this._power
                      , n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
                    1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                }
                ,
                h = (u = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --h > -1; )
                    c = u[h] + ",Power" + h,
                    O(new C(null,null,1,h), c, "easeOut", !0),
                    O(new C(null,null,2,h), c, "easeIn" + (0 === h ? ",easeNone" : "")),
                    O(new C(null,null,3,h), c, "easeInOut");
                S.linear = p.easing.Linear.easeIn,
                S.swing = p.easing.Quad.easeInOut;
                var P = w("events.EventDispatcher", function(t) {
                    this._listeners = {},
                    this._eventTarget = t || this
                });
                (c = P.prototype).addEventListener = function(t, e, i, n, r) {
                    r = r || 0;
                    var s, o, a = this._listeners[t], l = 0;
                    for (this !== f || d || f.wake(),
                    null == a && (this._listeners[t] = a = []),
                    o = a.length; --o > -1; )
                        (s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                    a.splice(l, 0, {
                        c: e,
                        s: i,
                        up: n,
                        pr: r
                    })
                }
                ,
                c.removeEventListener = function(t, e) {
                    var i, n = this._listeners[t];
                    if (n)
                        for (i = n.length; --i > -1; )
                            if (n[i].c === e)
                                return void n.splice(i, 1)
                }
                ,
                c.dispatchEvent = function(t) {
                    var e, i, n, r = this._listeners[t];
                    if (r)
                        for ((e = r.length) > 1 && (r = r.slice(0)),
                        i = this._eventTarget; --e > -1; )
                            (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                }
                ;
                var A = i.requestAnimationFrame
                  , k = i.cancelAnimationFrame
                  , E = Date.now || function() {
                    return (new Date).getTime()
                }
                  , R = E();
                for (h = (u = ["ms", "moz", "webkit", "o"]).length; --h > -1 && !A; )
                    A = i[u[h] + "RequestAnimationFrame"],
                    k = i[u[h] + "CancelAnimationFrame"] || i[u[h] + "CancelRequestAnimationFrame"];
                w("Ticker", function(t, e) {
                    var i, n, r, s, a, l = this, u = E(), h = !(!1 === e || !A) && "auto", c = 500, _ = 33, p = function(t) {
                        var e, o, h = E() - R;
                        h > c && (u += h - _),
                        R += h,
                        l.time = (R - u) / 1e3,
                        e = l.time - a,
                        (!i || e > 0 || !0 === t) && (l.frame++,
                        a += e + (e >= s ? .004 : s - e),
                        o = !0),
                        !0 !== t && (r = n(p)),
                        o && l.dispatchEvent("tick")
                    };
                    P.call(l),
                    l.time = l.frame = 0,
                    l.tick = function() {
                        p(!0)
                    }
                    ,
                    l.lagSmoothing = function(t, e) {
                        if (!arguments.length)
                            return c < 1e10;
                        c = t || 1e10,
                        _ = Math.min(e, c, 0)
                    }
                    ,
                    l.sleep = function() {
                        null != r && (h && k ? k(r) : clearTimeout(r),
                        n = g,
                        r = null,
                        l === f && (d = !1))
                    }
                    ,
                    l.wake = function(t) {
                        null !== r ? l.sleep() : t ? u += -R + (R = E()) : l.frame > 10 && (R = E() - c + 5),
                        n = 0 === i ? g : h && A ? A : function(t) {
                            return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                        }
                        ,
                        l === f && (d = !0),
                        p(2)
                    }
                    ,
                    l.fps = function(t) {
                        if (!arguments.length)
                            return i;
                        s = 1 / ((i = t) || 60),
                        a = this.time + s,
                        l.wake()
                    }
                    ,
                    l.useRAF = function(t) {
                        if (!arguments.length)
                            return h;
                        l.sleep(),
                        h = t,
                        l.fps(i)
                    }
                    ,
                    l.fps(t),
                    setTimeout(function() {
                        "auto" === h && l.frame < 5 && "hidden" !== (o || {}).visibilityState && l.useRAF(!1)
                    }, 1500)
                }),
                (c = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
                var M = w("core.Animation", function(t, e) {
                    if (this.vars = e = e || {},
                    this._duration = this._totalDuration = t || 0,
                    this._delay = Number(e.delay) || 0,
                    this._timeScale = 1,
                    this._active = !0 === e.immediateRender,
                    this.data = e.data,
                    this._reversed = !0 === e.reversed,
                    K) {
                        d || f.wake();
                        var i = this.vars.useFrames ? Z : K;
                        i.add(this, i._time),
                        this.vars.paused && this.paused(!0)
                    }
                });
                f = M.ticker = new p.Ticker,
                (c = M.prototype)._dirty = c._gc = c._initted = c._paused = !1,
                c._totalTime = c._time = 0,
                c._rawPrevTime = -1,
                c._next = c._last = c._onUpdate = c._timeline = c.timeline = null,
                c._paused = !1;
                var D = function() {
                    d && E() - R > 2e3 && ("hidden" !== (o || {}).visibilityState || !f.lagSmoothing()) && f.wake();
                    var t = setTimeout(D, 2e3);
                    t.unref && t.unref()
                };
                D(),
                c.play = function(t, e) {
                    return null != t && this.seek(t, e),
                    this.reversed(!1).paused(!1)
                }
                ,
                c.pause = function(t, e) {
                    return null != t && this.seek(t, e),
                    this.paused(!0)
                }
                ,
                c.resume = function(t, e) {
                    return null != t && this.seek(t, e),
                    this.paused(!1)
                }
                ,
                c.seek = function(t, e) {
                    return this.totalTime(Number(t), !1 !== e)
                }
                ,
                c.restart = function(t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                }
                ,
                c.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
                }
                ,
                c.render = function(t, e, i) {}
                ,
                c.invalidate = function() {
                    return this._time = this._totalTime = 0,
                    this._initted = this._gc = !1,
                    this._rawPrevTime = -1,
                    !this._gc && this.timeline || this._enabled(!0),
                    this
                }
                ,
                c.isActive = function() {
                    var t, e = this._timeline, i = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                }
                ,
                c._enabled = function(t, e) {
                    return d || f.wake(),
                    this._gc = !t,
                    this._active = this.isActive(),
                    !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                    !1
                }
                ,
                c._kill = function(t, e) {
                    return this._enabled(!1, !1)
                }
                ,
                c.kill = function(t, e) {
                    return this._kill(t, e),
                    this
                }
                ,
                c._uncache = function(t) {
                    for (var e = t ? this : this.timeline; e; )
                        e._dirty = !0,
                        e = e.timeline;
                    return this
                }
                ,
                c._swapSelfInParams = function(t) {
                    for (var e = t.length, i = t.concat(); --e > -1; )
                        "{self}" === t[e] && (i[e] = this);
                    return i
                }
                ,
                c._callback = function(t) {
                    var e = this.vars
                      , i = e[t]
                      , n = e[t + "Params"]
                      , r = e[t + "Scope"] || e.callbackScope || this;
                    switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                    }
                }
                ,
                c.eventCallback = function(t, e, i, n) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length)
                            return r[t];
                        null == e ? delete r[t] : (r[t] = e,
                        r[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                        r[t + "Scope"] = n),
                        "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }
                ,
                c.delay = function(t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                    this._delay = t,
                    this) : this._delay
                }
                ,
                c.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t,
                    this._uncache(!0),
                    this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                    this) : (this._dirty = !1,
                    this._duration)
                }
                ,
                c.totalDuration = function(t) {
                    return this._dirty = !1,
                    arguments.length ? this.duration(t) : this._totalDuration
                }
                ,
                c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(),
                    this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }
                ,
                c.totalTime = function(t, e, i) {
                    if (d || f.wake(),
                    !arguments.length)
                        return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !i && (t += this.totalDuration()),
                        this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var n = this._totalDuration
                              , r = this._timeline;
                            if (t > n && !i && (t = n),
                            this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                            r._dirty || this._uncache(!1),
                            r._timeline)
                                for (; r._timeline; )
                                    r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                    r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1),
                        this._totalTime === t && 0 !== this._duration || (I.length && $(),
                        this.render(t, e, !1),
                        I.length && $())
                    }
                    return this
                }
                ,
                c.progress = c.totalProgress = function(t, e) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                }
                ,
                c.startTime = function(t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t,
                    this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                    this) : this._startTime
                }
                ,
                c.endTime = function(t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }
                ,
                c.timeScale = function(t) {
                    if (!arguments.length)
                        return this._timeScale;
                    var e, i;
                    for (t = t || 1e-10,
                    this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
                    this._startTime = i - (i - this._startTime) * this._timeScale / t),
                    this._timeScale = t,
                    i = this.timeline; i && i.timeline; )
                        i._dirty = !0,
                        i.totalDuration(),
                        i = i.timeline;
                    return this
                }
                ,
                c.reversed = function(t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t,
                    this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                    this) : this._reversed
                }
                ,
                c.paused = function(t) {
                    if (!arguments.length)
                        return this._paused;
                    var e, i, n = this._timeline;
                    return t != this._paused && n && (d || t || f.wake(),
                    i = (e = n.rawTime()) - this._pauseTime,
                    !t && n.smoothChildTiming && (this._startTime += i,
                    this._uncache(!1)),
                    this._pauseTime = t ? e : null,
                    this._paused = t,
                    this._active = this.isActive(),
                    !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                    this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                    this
                }
                ;
                var L = w("core.SimpleTimeline", function(t) {
                    M.call(this, 0, t),
                    this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                (c = L.prototype = new M).constructor = L,
                c.kill()._gc = !1,
                c._first = c._last = c._recent = null,
                c._sortChildren = !1,
                c.add = c.insert = function(t, e, i, n) {
                    var r, s;
                    if (t._startTime = Number(e || 0) + t._delay,
                    t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                    t.timeline && t.timeline._remove(t, !0),
                    t.timeline = t._timeline = this,
                    t._gc && t._enabled(!0, !0),
                    r = this._last,
                    this._sortChildren)
                        for (s = t._startTime; r && r._startTime > s; )
                            r = r._prev;
                    return r ? (t._next = r._next,
                    r._next = t) : (t._next = this._first,
                    this._first = t),
                    t._next ? t._next._prev = t : this._last = t,
                    t._prev = r,
                    this._recent = t,
                    this._timeline && this._uncache(!0),
                    this
                }
                ,
                c._remove = function(t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0),
                    t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                    t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                    t._next = t._prev = t.timeline = null,
                    t === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)),
                    this
                }
                ,
                c.render = function(t, e, i) {
                    var n, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                        n = r._next,
                        (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                        r = n
                }
                ,
                c.rawTime = function() {
                    return d || f.wake(),
                    this._totalTime
                }
                ;
                var F = w("TweenLite", function(t, e, n) {
                    if (M.call(this, e, n),
                    this.render = F.prototype.render,
                    null == t)
                        throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : F.selector(t) || t;
                    var r, s, o, a = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Q[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l],
                    (a || t instanceof Array || t.push && v(t)) && "number" != typeof t[0])
                        for (this._targets = o = m(t),
                        this._propLookup = [],
                        this._siblings = [],
                        r = 0; r < o.length; r++)
                            (s = o[r]) ? "string" != typeof s ? s.length && s !== i && s[0] && (s[0] === i || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1),
                            this._targets = o = o.concat(m(s))) : (this._siblings[r] = tt(s, this, !1),
                            1 === l && this._siblings[r].length > 1 && it(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = o[r--] = F.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                    else
                        this._propLookup = {},
                        this._siblings = tt(t, this, !1),
                        1 === l && this._siblings.length > 1 && it(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10,
                    this.render(Math.min(0, -this._delay)))
                }, !0)
                  , N = function(t) {
                    return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                };
                (c = F.prototype = new M).constructor = F,
                c.kill()._gc = !1,
                c.ratio = 0,
                c._firstPT = c._targets = c._overwrittenProps = c._startAt = null,
                c._notifyPluginsOfEnabled = c._lazy = !1,
                F.version = "2.0.1",
                F.defaultEase = c._ease = new C(null,null,1,1),
                F.defaultOverwrite = "auto",
                F.ticker = f,
                F.autoSleep = 120,
                F.lagSmoothing = function(t, e) {
                    f.lagSmoothing(t, e)
                }
                ,
                F.selector = i.$ || i.jQuery || function(t) {
                    var e = i.$ || i.jQuery;
                    return e ? (F.selector = e,
                    e(t)) : (o || (o = i.document),
                    o ? o.querySelectorAll ? o.querySelectorAll(t) : o.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
                }
                ;
                var I = []
                  , B = {}
                  , z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                  , j = /[\+-]=-?[\.\d]/
                  , X = function(t) {
                    for (var e, i = this._firstPT; i; )
                        e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                        i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                        i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                        i = i._next
                }
                  , H = function(t, e, i, n) {
                    var r, s, o, a, l, u, h, c = [], f = 0, d = "", _ = 0;
                    for (c.start = t,
                    c.end = e,
                    t = c[0] = t + "",
                    e = c[1] = e + "",
                    i && (i(c),
                    t = c[0],
                    e = c[1]),
                    c.length = 0,
                    r = t.match(z) || [],
                    s = e.match(z) || [],
                    n && (n._next = null,
                    n.blob = 1,
                    c._firstPT = c._applyPT = n),
                    l = s.length,
                    a = 0; a < l; a++)
                        h = s[a],
                        d += (u = e.substr(f, e.indexOf(h, f) - f)) || !a ? u : ",",
                        f += u.length,
                        _ ? _ = (_ + 1) % 5 : "rgba(" === u.substr(-5) && (_ = 1),
                        h === r[a] || r.length <= a ? d += h : (d && (c.push(d),
                        d = ""),
                        o = parseFloat(r[a]),
                        c.push(o),
                        c._firstPT = {
                            _next: c._firstPT,
                            t: c,
                            p: c.length - 1,
                            s: o,
                            c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                            f: 0,
                            m: _ && _ < 4 ? Math.round : 0
                        }),
                        f += h.length;
                    return (d += e.substr(f)) && c.push(d),
                    c.setRatio = X,
                    j.test(e) && (c.end = null),
                    c
                }
                  , V = function(t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var u = typeof t[e]
                      , h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                      , c = "get" !== i ? i : h ? o ? t[h](o) : t[h]() : t[e]
                      , f = "string" == typeof n && "=" === n.charAt(1)
                      , d = {
                        t: t,
                        p: e,
                        s: c,
                        f: "function" === u,
                        pg: 0,
                        n: r || e,
                        m: s ? "function" == typeof s ? s : Math.round : 0,
                        pr: 0,
                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                    };
                    if (("number" != typeof c || "number" != typeof n && !f) && (o || isNaN(c) || !f && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (d.fp = o,
                    d = {
                        t: H(c, f ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || F.defaultStringFilter, d),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (d.s = parseFloat(c),
                    f || (d.c = parseFloat(n) - d.s || 0))),
                    d.c)
                        return (d._next = this._firstPT) && (d._next._prev = d),
                        this._firstPT = d,
                        d
                }
                  , U = F._internals = {
                    isArray: v,
                    isSelector: N,
                    lazyTweens: I,
                    blobDif: H
                }
                  , Y = F._plugins = {}
                  , G = U.tweenLookup = {}
                  , W = 0
                  , q = U.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                }
                  , Q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                }
                  , Z = M._rootFramesTimeline = new L
                  , K = M._rootTimeline = new L
                  , J = 30
                  , $ = U.lazyRender = function() {
                    var t, e = I.length;
                    for (B = {}; --e > -1; )
                        (t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                        t._lazy = !1);
                    I.length = 0
                }
                ;
                K._startTime = f.time,
                Z._startTime = f.frame,
                K._active = Z._active = !0,
                setTimeout($, 1),
                M._updateRoot = F.render = function() {
                    var t, e, i;
                    if (I.length && $(),
                    K.render((f.time - K._startTime) * K._timeScale, !1, !1),
                    Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1),
                    I.length && $(),
                    f.frame >= J) {
                        for (i in J = f.frame + (parseInt(F.autoSleep, 10) || 120),
                        G) {
                            for (t = (e = G[i].tweens).length; --t > -1; )
                                e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete G[i]
                        }
                        if ((!(i = K._first) || i._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
                            for (; i && i._paused; )
                                i = i._next;
                            i || f.sleep()
                        }
                    }
                }
                ,
                f.addEventListener("tick", M._updateRoot);
                var tt = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (G[s || (t._gsTweenID = s = "t" + W++)] || (G[s] = {
                        target: t,
                        tweens: []
                    }),
                    e && ((n = G[s].tweens)[r = n.length] = e,
                    i))
                        for (; --r > -1; )
                            n[r] === e && n.splice(r, 1);
                    return G[s].tweens
                }
                  , et = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)),
                    (o = F.onOverwrite) && (s = o(t, e, i, n)),
                    !1 !== r && !1 !== s
                }
                  , it = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length,
                        s = 0; s < l; s++)
                            if ((a = r[s]) !== e)
                                a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n)
                                break;
                        return o
                    }
                    var u, h = e._startTime + 1e-10, c = [], f = 0, d = 0 === e._duration;
                    for (s = r.length; --s > -1; )
                        (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || nt(e, 0, d),
                        0 === nt(a, u, d) && (c[f++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && h - a._startTime <= 2e-10 || (c[f++] = a)));
                    for (s = f; --s > -1; )
                        if (a = c[s],
                        2 === n && a._kill(i, t, e) && (o = !0),
                        2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !et(a, e))
                                continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                }
                  , nt = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                        if (s += n._startTime,
                        r *= n._timeScale,
                        n._paused)
                            return -100;
                        n = n._timeline
                    }
                    return (s /= r) > e ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
                };
                c._init = function() {
                    var t, e, i, n, r, s, o = this.vars, a = this._overwrittenProps, l = this._duration, u = !!o.immediateRender, h = o.ease;
                    if (o.startAt) {
                        for (n in this._startAt && (this._startAt.render(-1, !0),
                        this._startAt.kill()),
                        r = {},
                        o.startAt)
                            r[n] = o.startAt[n];
                        if (r.data = "isStart",
                        r.overwrite = !1,
                        r.immediateRender = !0,
                        r.lazy = u && !1 !== o.lazy,
                        r.startAt = r.delay = null,
                        r.onUpdate = o.onUpdate,
                        r.onUpdateParams = o.onUpdateParams,
                        r.onUpdateScope = o.onUpdateScope || o.callbackScope || this,
                        this._startAt = F.to(this.target || {}, 0, r),
                        u)
                            if (this._time > 0)
                                this._startAt = null;
                            else if (0 !== l)
                                return
                    } else if (o.runBackwards && 0 !== l)
                        if (this._startAt)
                            this._startAt.render(-1, !0),
                            this._startAt.kill(),
                            this._startAt = null;
                        else {
                            for (n in 0 !== this._time && (u = !1),
                            i = {},
                            o)
                                q[n] && "autoCSS" !== n || (i[n] = o[n]);
                            if (i.overwrite = 0,
                            i.data = "isFromStart",
                            i.lazy = u && !1 !== o.lazy,
                            i.immediateRender = u,
                            this._startAt = F.to(this.target, 0, i),
                            u) {
                                if (0 === this._time)
                                    return
                            } else
                                this._startAt._init(),
                                this._startAt._enabled(!1),
                                this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = h = h ? h instanceof C ? h : "function" == typeof h ? new C(h,o.easeParams) : S[h] || F.defaultEase : F.defaultEase,
                    o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)),
                    this._easeType = this._ease._type,
                    this._easePower = this._ease._power,
                    this._firstPT = null,
                    this._targets)
                        for (s = this._targets.length,
                        t = 0; t < s; t++)
                            this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                    else
                        e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                    if (e && F._onPluginEvent("_onInitAllProps", this),
                    a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                    o.runBackwards)
                        for (i = this._firstPT; i; )
                            i.s += i.c,
                            i.c = -i.c,
                            i = i._next;
                    this._onUpdate = o.onUpdate,
                    this._initted = !0
                }
                ,
                c._initProps = function(t, e, n, r, s) {
                    var o, a, l, u, h, c;
                    if (null == t)
                        return !1;
                    for (o in B[t._gsTweenID] && $(),
                    this.vars.css || t.style && t !== i && t.nodeType && Y.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, n = {};
                        for (i in t)
                            q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (n[i] = t[i],
                            delete t[i]);
                        t.css = n
                    }(this.vars, t),
                    this.vars)
                        if (c = this.vars[o],
                        q[o])
                            c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                        else if (Y[o] && (u = new Y[o])._onInitTween(t, this.vars[o], this, s)) {
                            for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: u,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: o,
                                pg: 1,
                                pr: u._priority,
                                m: 0
                            },
                            a = u._overwriteProps.length; --a > -1; )
                                e[u._overwriteProps[a]] = this._firstPT;
                            (u._priority || u._onInitAllProps) && (l = !0),
                            (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0),
                            h._next && (h._next._prev = h)
                        } else
                            e[o] = V.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, s);
                    return r && this._kill(r, t) ? this._initProps(t, e, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && it(t, this, e, this._overwrite, n) ? (this._kill(e, t),
                    this._initProps(t, e, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0),
                    l)
                }
                ,
                c.render = function(t, e, i) {
                    var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
                    if (t >= l - 1e-7 && t >= 0)
                        this._totalTime = this._time = l,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                        this._reversed || (n = !0,
                        r = "onComplete",
                        i = i || this._timeline.autoRemoveChildren),
                        0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                        (u < 0 || t <= 0 && t >= -1e-7 || 1e-10 === u && "isPause" !== this.data) && u !== t && (i = !0,
                        u > 1e-10 && (r = "onReverseComplete")),
                        this._rawPrevTime = o = !e || t || u === t ? t : 1e-10);
                    else if (t < 1e-7)
                        this._totalTime = this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                        (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete",
                        n = this._reversed),
                        t < 0 && (this._active = !1,
                        0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0),
                        this._rawPrevTime = o = !e || t || u === t ? t : 1e-10)),
                        (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                    else if (this._totalTime = this._time = t,
                    this._easeType) {
                        var h = t / l
                          , c = this._easeType
                          , f = this._easePower;
                        (1 === c || 3 === c && h >= .5) && (h = 1 - h),
                        3 === c && (h *= 2),
                        1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h),
                        this.ratio = 1 === c ? 1 - h : 2 === c ? h : t / l < .5 ? h / 2 : 1 - h / 2
                    } else
                        this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== a || i) {
                        if (!this._initted) {
                            if (this._init(),
                            !this._initted || this._gc)
                                return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                                return this._time = this._totalTime = a,
                                this._rawPrevTime = u,
                                I.push(this),
                                void (this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1),
                        this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
                        0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")),
                        this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                        s = this._firstPT; s; )
                            s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                            s = s._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i),
                        e || (this._time !== a || n || i) && this._callback("onUpdate")),
                        r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                        n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                        !e && this.vars[r] && this._callback(r),
                        0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0)))
                    }
                }
                ,
                c._kill = function(t, e, i) {
                    if ("all" === t && (t = null),
                    null == t && (null == e || e === this.target))
                        return this._lazy = !1,
                        this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
                    var n, r, s, o, a, l, u, h, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                    if ((v(e) || N(e)) && "number" != typeof e[0])
                        for (n = e.length; --n > -1; )
                            this._kill(t, e[n], i) && (l = !0);
                    else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1; )
                                if (e === this._targets[n]) {
                                    a = this._propLookup[n] || {},
                                    this._overwrittenProps = this._overwrittenProps || [],
                                    r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target)
                                return !1;
                            a = this._propLookup,
                            r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (a) {
                            if (u = t || a,
                            h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill),
                            i && (F.onOverwrite || this.vars.onOverwrite)) {
                                for (s in u)
                                    a[s] && (c || (c = []),
                                    c.push(s));
                                if ((c || !t) && !et(this, i, e, c))
                                    return !1
                            }
                            for (s in u)
                                (o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s,
                                l = !0),
                                o.pg && o.t._kill(u) && (l = !0),
                                o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next),
                                o._next && (o._next._prev = o._prev),
                                o._next = o._prev = null),
                                delete a[s]),
                                h && (r[s] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
                }
                ,
                c.invalidate = function() {
                    return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
                    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                    this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                    this._propLookup = this._targets ? {} : [],
                    M.prototype.invalidate.call(this),
                    this.vars.immediateRender && (this._time = -1e-10,
                    this.render(Math.min(0, -this._delay))),
                    this
                }
                ,
                c._enabled = function(t, e) {
                    if (d || f.wake(),
                    t && this._gc) {
                        var i, n = this._targets;
                        if (n)
                            for (i = n.length; --i > -1; )
                                this._siblings[i] = tt(n[i], this, !0);
                        else
                            this._siblings = tt(this.target, this, !0)
                    }
                    return M.prototype._enabled.call(this, t, e),
                    !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }
                ,
                F.to = function(t, e, i) {
                    return new F(t,e,i)
                }
                ,
                F.from = function(t, e, i) {
                    return i.runBackwards = !0,
                    i.immediateRender = 0 != i.immediateRender,
                    new F(t,e,i)
                }
                ,
                F.fromTo = function(t, e, i, n) {
                    return n.startAt = i,
                    n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                    new F(t,e,n)
                }
                ,
                F.delayedCall = function(t, e, i, n, r) {
                    return new F(e,0,{
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }
                ,
                F.set = function(t, e) {
                    return new F(t,0,e)
                }
                ,
                F.getTweensOf = function(t, e) {
                    if (null == t)
                        return [];
                    var i, n, r, s;
                    if (t = "string" != typeof t ? t : F.selector(t) || t,
                    (v(t) || N(t)) && "number" != typeof t[0]) {
                        for (i = t.length,
                        n = []; --i > -1; )
                            n = n.concat(F.getTweensOf(t[i], e));
                        for (i = n.length; --i > -1; )
                            for (s = n[i],
                            r = i; --r > -1; )
                                s === n[r] && n.splice(i, 1)
                    } else if (t._gsTweenID)
                        for (i = (n = tt(t).concat()).length; --i > -1; )
                            (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                    return n || []
                }
                ,
                F.killTweensOf = F.killDelayedCallsTo = function(t, e, i) {
                    "object" == typeof e && (i = e,
                    e = !1);
                    for (var n = F.getTweensOf(t, e), r = n.length; --r > -1; )
                        n[r]._kill(i, t)
                }
                ;
                var rt = w("plugins.TweenPlugin", function(t, e) {
                    this._overwriteProps = (t || "").split(","),
                    this._propName = this._overwriteProps[0],
                    this._priority = e || 0,
                    this._super = rt.prototype
                }, !0);
                if (c = rt.prototype,
                rt.version = "1.19.0",
                rt.API = 2,
                c._firstPT = null,
                c._addTween = V,
                c.setRatio = X,
                c._kill = function(t) {
                    var e, i = this._overwriteProps, n = this._firstPT;
                    if (null != t[this._propName])
                        this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1; )
                            null != t[i[e]] && i.splice(e, 1);
                    for (; n; )
                        null != t[n.n] && (n._next && (n._next._prev = n._prev),
                        n._prev ? (n._prev._next = n._next,
                        n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                        n = n._next;
                    return !1
                }
                ,
                c._mod = c._roundProps = function(t) {
                    for (var e, i = this._firstPT; i; )
                        (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                        i = i._next
                }
                ,
                F._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a; ) {
                            for (o = a._next,
                            n = r; n && n.pr > a.pr; )
                                n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a,
                            (a._next = n) ? n._prev = a : s = a,
                            a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a; )
                        a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                        a = a._next;
                    return i
                }
                ,
                rt.activate = function(t) {
                    for (var e = t.length; --e > -1; )
                        t[e].API === rt.API && (Y[(new t[e])._propName] = t[e]);
                    return !0
                }
                ,
                x.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API))
                        throw "illegal plugin definition.";
                    var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, o = w("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        rt.call(this, i, n),
                        this._overwriteProps = r || []
                    }, !0 === t.global), a = o.prototype = new rt(i);
                    for (e in a.constructor = o,
                    o.API = t.API,
                    s)
                        "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version,
                    rt.activate([o]),
                    o
                }
                ,
                u = i._gsQueue) {
                    for (h = 0; h < u.length; h++)
                        u[h]();
                    for (c in y)
                        y[c].func || i.console.log("GSAP encountered missing dependency: " + c)
                }
                d = !1
            }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
        }
        ).call(this, i(6))
    },
    64: function(t, e, i) {
        "use strict";
        (function(e) {
            !function(t) {
                var e = t.GreenSockGlobals || t
                  , i = function(t) {
                    var i, n = t.split("."), r = e;
                    for (i = 0; i < n.length; i++)
                        r[n[i]] = r = r[n[i]] || {};
                    return r
                }("com.greensock.utils")
                  , n = function t(e) {
                    var i = e.nodeType
                      , n = "";
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += t(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue;
                    return n
                }
                  , r = document
                  , s = r.defaultView ? r.defaultView.getComputedStyle : function() {}
                  , o = /([A-Z])/g
                  , a = function(t, e, i, n) {
                    var r;
                    return (i = i || s(t, null)) ? r = (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (r = (i = t.currentStyle)[e]),
                    n ? r : parseInt(r, 10) || 0
                }
                  , l = function(t) {
                    return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                }
                  , u = ")eefec303079ad17405c"
                  , h = /(?:<br>|<br\/>|<br \/>)/gi
                  , c = "<div style='position:relative;display:inline-block;" + (r.all && !r.addEventListener ? "*display:inline;*zoom:1;'" : "'")
                  , f = function(t) {
                    var e = -1 !== (t = t || "").indexOf("++")
                      , i = 1;
                    return e && (t = t.split("++").join("")),
                    function() {
                        return c + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                    }
                }
                  , d = i.SplitText = e.SplitText = function(t, e) {
                    if ("string" == typeof t && (t = d.selector(t)),
                    !t)
                        throw "cannot split a null element.";
                    this.elements = l(t) ? function(t) {
                        var e, i, n, r = [], s = t.length;
                        for (e = 0; e < s; e++)
                            if (i = t[e],
                            l(i))
                                for (n = i.length,
                                n = 0; n < i.length; n++)
                                    r.push(i[n]);
                            else
                                r.push(i);
                        return r
                    }(t) : [t],
                    this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this._originals = [],
                    this.vars = e || {},
                    this.split(e)
                }
                  , _ = function(t, e) {
                    for (var i = e.length; --i > -1; )
                        t.push(e[i])
                }
                  , p = function(t, e, i, o, l) {
                    h.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(h, u));
                    var c, d, p, m, g, v, y, b, x, w, T, C, S, O, P = n(t), A = e.type || e.split || "chars,words,lines", k = -1 !== A.indexOf("lines") ? [] : null, E = -1 !== A.indexOf("words"), R = -1 !== A.indexOf("chars"), M = "absolute" === e.position || !0 === e.absolute, D = M ? "&#173; " : " ", L = -999, F = s(t), N = a(t, "paddingLeft", F), I = a(t, "borderBottomWidth", F) + a(t, "borderTopWidth", F), B = a(t, "borderLeftWidth", F) + a(t, "borderRightWidth", F), z = a(t, "paddingTop", F) + a(t, "paddingBottom", F), j = a(t, "paddingLeft", F) + a(t, "paddingRight", F), X = a(t, "textAlign", F, !0), H = t.clientHeight, V = t.clientWidth, U = f(e.wordsClass), Y = f(e.charsClass), G = -1 !== (e.linesClass || "").indexOf("++"), W = e.linesClass, q = -1 !== P.indexOf("<"), Q = !0, Z = [], K = [], J = [];
                    for (G && (W = W.split("++").join("")),
                    q && (P = P.split("<").join("{{LT}}")),
                    c = P.length,
                    m = U(),
                    g = 0; g < c; g++)
                        if (")" === (y = P.charAt(g)) && P.substr(g, 20) === u)
                            m += (Q ? "</div>" : "") + "<BR/>",
                            Q = !1,
                            g !== c - 20 && P.substr(g + 20, 20) !== u && (m += " " + U(),
                            Q = !0),
                            g += 19;
                        else if (" " === y && " " !== P.charAt(g - 1) && g !== c - 1 && P.substr(g - 20, 20) !== u) {
                            for (m += Q ? "</div>" : "",
                            Q = !1; " " === P.charAt(g + 1); )
                                m += D,
                                g++;
                            ")" === P.charAt(g + 1) && P.substr(g + 1, 20) === u || (m += D + U(),
                            Q = !0)
                        } else
                            m += R && " " !== y ? Y() + y + "</div>" : y;
                    for (t.innerHTML = m + (Q ? "</div>" : ""),
                    q && function t(e, i, n) {
                        var r = e.nodeType;
                        if (1 === r || 9 === r || 11 === r)
                            for (e = e.firstChild; e; e = e.nextSibling)
                                t(e, i, n);
                        else
                            3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
                    }(t, "{{LT}}", "<"),
                    c = (v = t.getElementsByTagName("*")).length,
                    b = [],
                    g = 0; g < c; g++)
                        b[g] = v[g];
                    if (k || M)
                        for (g = 0; g < c; g++)
                            ((p = (x = b[g]).parentNode === t) || M || R && !E) && (w = x.offsetTop,
                            k && p && w !== L && "BR" !== x.nodeName && (d = [],
                            k.push(d),
                            L = w),
                            M && (x._x = x.offsetLeft,
                            x._y = w,
                            x._w = x.offsetWidth,
                            x._h = x.offsetHeight),
                            k && (E !== p && R || (d.push(x),
                            x._x -= N),
                            p && g && (b[g - 1]._wordEnd = !0),
                            "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && k.push([])));
                    for (g = 0; g < c; g++)
                        p = (x = b[g]).parentNode === t,
                        "BR" !== x.nodeName ? (M && (C = x.style,
                        E || p || (x._x += x.parentNode._x,
                        x._y += x.parentNode._y),
                        C.left = x._x + "px",
                        C.top = x._y + "px",
                        C.position = "absolute",
                        C.display = "block",
                        C.width = x._w + 1 + "px",
                        C.height = x._h + "px"),
                        E ? p && "" !== x.innerHTML ? K.push(x) : R && Z.push(x) : p ? (t.removeChild(x),
                        b.splice(g--, 1),
                        c--) : !p && R && (w = !k && !M && x.nextSibling,
                        t.appendChild(x),
                        w || t.appendChild(r.createTextNode(" ")),
                        Z.push(x))) : k || M ? (t.removeChild(x),
                        b.splice(g--, 1),
                        c--) : E || t.appendChild(x);
                    if (k) {
                        for (M && (T = r.createElement("div"),
                        t.appendChild(T),
                        S = T.offsetWidth + "px",
                        w = T.offsetParent === t ? 0 : t.offsetLeft,
                        t.removeChild(T)),
                        C = t.style.cssText,
                        t.style.cssText = "display:none;"; t.firstChild; )
                            t.removeChild(t.firstChild);
                        for (O = !M || !E && !R,
                        g = 0; g < k.length; g++) {
                            for (d = k[g],
                            (T = r.createElement("div")).style.cssText = "display:block;text-align:" + X + ";position:" + (M ? "absolute;" : "relative;"),
                            W && (T.className = W + (G ? g + 1 : "")),
                            J.push(T),
                            c = d.length,
                            v = 0; v < c; v++)
                                "BR" !== d[v].nodeName && (x = d[v],
                                T.appendChild(x),
                                O && (x._wordEnd || E) && T.appendChild(r.createTextNode(" ")),
                                M && (0 === v && (T.style.top = x._y + "px",
                                T.style.left = N + w + "px"),
                                x.style.top = "0px",
                                w && (x.style.left = x._x - w + "px")));
                            0 === c && (T.innerHTML = "&nbsp;"),
                            E || R || (T.innerHTML = n(T).split(String.fromCharCode(160)).join(" ")),
                            M && (T.style.width = S,
                            T.style.height = x._h + "px"),
                            t.appendChild(T)
                        }
                        t.style.cssText = C
                    }
                    M && (H > t.clientHeight && (t.style.height = H - z + "px",
                    t.clientHeight < H && (t.style.height = H + I + "px")),
                    V > t.clientWidth && (t.style.width = V - j + "px",
                    t.clientWidth < V && (t.style.width = V + B + "px"))),
                    _(i, Z),
                    _(o, K),
                    _(l, J)
                }
                  , m = d.prototype;
                m.split = function(t) {
                    this.isSplit && this.revert(),
                    this.vars = t || this.vars,
                    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e = this.elements.length; --e > -1; )
                        this._originals[e] = this.elements[e].innerHTML,
                        p(this.elements[e], this.vars, this.chars, this.words, this.lines);
                    return this.chars.reverse(),
                    this.words.reverse(),
                    this.lines.reverse(),
                    this.isSplit = !0,
                    this
                }
                ,
                m.revert = function() {
                    if (!this._originals)
                        throw "revert() call wasn't scoped properly.";
                    for (var t = this._originals.length; --t > -1; )
                        this.elements[t].innerHTML = this._originals[t];
                    return this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this.isSplit = !1,
                    this
                }
                ,
                d.selector = t.$ || t.jQuery || function(e) {
                    var i = t.$ || t.jQuery;
                    return i ? (d.selector = i,
                    i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                }
                ,
                d.version = "0.3.3"
            }(void 0 !== t && t.exports && void 0 !== e ? e : window)
        }
        ).call(this, i(6))
    },
    65: function(t, e, i) {
        t.exports = function(t) {
            function e(n) {
                if (i[n])
                    return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e),
                r.loaded = !0,
                r.exports
            }
            var i = {};
            return e.m = t,
            e.c = i,
            e.p = "",
            e(0)
        }([function(t, e, i) {
            "use strict";
            e.__esModule = !0;
            var n = i(1)
              , r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n);
            e.default = r.default,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(2)
              , s = n(r)
              , o = i(6)
              , a = n(o)
              , l = i(3)
              , u = n(l)
              , h = i(7)
              , c = n(h)
              , f = i(8)
              , d = n(f)
              , _ = i(10)
              , p = n(_)
              , m = i(11)
              , g = n(m)
              , v = i(12)
              , y = n(v)
              , b = i(13)
              , x = n(b)
              , w = i(14)
              , T = n(w)
              , C = i(15)
              , S = n(C)
              , O = i(16)
              , P = n(O)
              , A = i(9)
              , k = n(A)
              , E = i(17)
              , R = n(E);
            e.default = {
                color: {
                    Color: s.default,
                    math: a.default,
                    interpret: u.default
                },
                controllers: {
                    Controller: c.default,
                    BooleanController: d.default,
                    OptionController: p.default,
                    StringController: g.default,
                    NumberController: y.default,
                    NumberControllerBox: x.default,
                    NumberControllerSlider: T.default,
                    FunctionController: S.default,
                    ColorController: P.default
                },
                dom: {
                    dom: k.default
                },
                gui: {
                    GUI: R.default
                },
                GUI: R.default
            },
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t, e, i) {
                Object.defineProperty(t, e, {
                    get: function() {
                        return "RGB" === this.__state.space ? this.__state[e] : (_.recalculateRGB(this, e, i),
                        this.__state[e])
                    },
                    set: function(t) {
                        "RGB" !== this.__state.space && (_.recalculateRGB(this, e, i),
                        this.__state.space = "RGB"),
                        this.__state[e] = t
                    }
                })
            }
            function s(t, e) {
                Object.defineProperty(t, e, {
                    get: function() {
                        return "HSV" === this.__state.space ? this.__state[e] : (_.recalculateHSV(this),
                        this.__state[e])
                    },
                    set: function(t) {
                        "HSV" !== this.__state.space && (_.recalculateHSV(this),
                        this.__state.space = "HSV"),
                        this.__state[e] = t
                    }
                })
            }
            e.__esModule = !0;
            var o = i(3)
              , a = n(o)
              , l = i(6)
              , u = n(l)
              , h = i(4)
              , c = n(h)
              , f = i(5)
              , d = n(f)
              , _ = function() {
                function t() {
                    if (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.__state = a.default.apply(this, arguments),
                    !1 === this.__state)
                        throw new Error("Failed to interpret color arguments");
                    this.__state.a = this.__state.a || 1
                }
                return t.prototype.toString = function() {
                    return (0,
                    c.default)(this)
                }
                ,
                t.prototype.toHexString = function() {
                    return (0,
                    c.default)(this, !0)
                }
                ,
                t.prototype.toOriginal = function() {
                    return this.__state.conversion.write(this)
                }
                ,
                t
            }();
            _.recalculateRGB = function(t, e, i) {
                if ("HEX" === t.__state.space)
                    t.__state[e] = u.default.component_from_hex(t.__state.hex, i);
                else {
                    if ("HSV" !== t.__state.space)
                        throw new Error("Corrupted color state");
                    d.default.extend(t.__state, u.default.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
                }
            }
            ,
            _.recalculateHSV = function(t) {
                var e = u.default.rgb_to_hsv(t.r, t.g, t.b);
                d.default.extend(t.__state, {
                    s: e.s,
                    v: e.v
                }),
                d.default.isNaN(e.h) ? d.default.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = e.h
            }
            ,
            _.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"],
            r(_.prototype, "r", 2),
            r(_.prototype, "g", 1),
            r(_.prototype, "b", 0),
            s(_.prototype, "h"),
            s(_.prototype, "s"),
            s(_.prototype, "v"),
            Object.defineProperty(_.prototype, "a", {
                get: function() {
                    return this.__state.a
                },
                set: function(t) {
                    this.__state.a = t
                }
            }),
            Object.defineProperty(_.prototype, "hex", {
                get: function() {
                    return "HEX" !== !this.__state.space && (this.__state.hex = u.default.rgb_to_hex(this.r, this.g, this.b)),
                    this.__state.hex
                },
                set: function(t) {
                    this.__state.space = "HEX",
                    this.__state.hex = t
                }
            }),
            e.default = _,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(4)
              , s = n(r)
              , o = i(5)
              , a = n(o)
              , l = [{
                litmus: a.default.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0)
                            }
                        },
                        write: s.default
                    },
                    SIX_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9]{6})$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString(), 0)
                            }
                        },
                        write: s.default
                    },
                    CSS_RGB: {
                        read: function(t) {
                            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3])
                            }
                        },
                        write: s.default
                    },
                    CSS_RGBA: {
                        read: function(t) {
                            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3]),
                                a: parseFloat(e[4])
                            }
                        },
                        write: s.default
                    }
                }
            }, {
                litmus: a.default.isNumber,
                conversions: {
                    HEX: {
                        read: function(t) {
                            return {
                                space: "HEX",
                                hex: t,
                                conversionName: "HEX"
                            }
                        },
                        write: function(t) {
                            return t.hex
                        }
                    }
                }
            }, {
                litmus: a.default.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(t) {
                            return 3 === t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(t) {
                            return 4 === t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2],
                                a: t[3]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b, t.a]
                        }
                    }
                }
            }, {
                litmus: a.default.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(t) {
                            return !!(a.default.isNumber(t.r) && a.default.isNumber(t.g) && a.default.isNumber(t.b) && a.default.isNumber(t.a)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(t) {
                            return !!(a.default.isNumber(t.r) && a.default.isNumber(t.g) && a.default.isNumber(t.b)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(t) {
                            return !!(a.default.isNumber(t.h) && a.default.isNumber(t.s) && a.default.isNumber(t.v) && a.default.isNumber(t.a)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(t) {
                            return !!(a.default.isNumber(t.h) && a.default.isNumber(t.s) && a.default.isNumber(t.v)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        }
                    }
                }
            }]
              , u = void 0
              , h = void 0;
            e.default = function() {
                h = !1;
                var t = arguments.length > 1 ? a.default.toArray(arguments) : arguments[0];
                return a.default.each(l, function(e) {
                    if (e.litmus(t))
                        return a.default.each(e.conversions, function(e, i) {
                            if (u = e.read(t),
                            !1 === h && !1 !== u)
                                return h = u,
                                u.conversionName = i,
                                u.conversion = e,
                                a.default.BREAK
                        }),
                        a.default.BREAK
                }),
                h
            }
            ,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0,
            e.default = function(t, e) {
                var i = t.__state.conversionName.toString()
                  , n = Math.round(t.r)
                  , r = Math.round(t.g)
                  , s = Math.round(t.b)
                  , o = t.a
                  , a = Math.round(t.h)
                  , l = t.s.toFixed(1)
                  , u = t.v.toFixed(1);
                if (e || "THREE_CHAR_HEX" === i || "SIX_CHAR_HEX" === i) {
                    for (var h = t.hex.toString(16); h.length < 6; )
                        h = "0" + h;
                    return "#" + h
                }
                return "CSS_RGB" === i ? "rgb(" + n + "," + r + "," + s + ")" : "CSS_RGBA" === i ? "rgba(" + n + "," + r + "," + s + "," + o + ")" : "HEX" === i ? "0x" + t.hex.toString(16) : "RGB_ARRAY" === i ? "[" + n + "," + r + "," + s + "]" : "RGBA_ARRAY" === i ? "[" + n + "," + r + "," + s + "," + o + "]" : "RGB_OBJ" === i ? "{r:" + n + ",g:" + r + ",b:" + s + "}" : "RGBA_OBJ" === i ? "{r:" + n + ",g:" + r + ",b:" + s + ",a:" + o + "}" : "HSV_OBJ" === i ? "{h:" + a + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === i ? "{h:" + a + ",s:" + l + ",v:" + u + ",a:" + o + "}" : "unknown format"
            }
            ,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = Array.prototype.forEach
              , n = Array.prototype.slice
              , r = {
                BREAK: {},
                extend: function(t) {
                    return this.each(n.call(arguments, 1), function(e) {
                        var i = this.isObject(e) ? Object.keys(e) : [];
                        i.forEach(function(i) {
                            this.isUndefined(e[i]) || (t[i] = e[i])
                        }
                        .bind(this))
                    }, this),
                    t
                },
                defaults: function(t) {
                    return this.each(n.call(arguments, 1), function(e) {
                        var i = this.isObject(e) ? Object.keys(e) : [];
                        i.forEach(function(i) {
                            this.isUndefined(t[i]) && (t[i] = e[i])
                        }
                        .bind(this))
                    }, this),
                    t
                },
                compose: function() {
                    var t = n.call(arguments);
                    return function() {
                        for (var e = n.call(arguments), i = t.length - 1; i >= 0; i--)
                            e = [t[i].apply(this, e)];
                        return e[0]
                    }
                },
                each: function(t, e, n) {
                    if (t)
                        if (i && t.forEach && t.forEach === i)
                            t.forEach(e, n);
                        else if (t.length === t.length + 0) {
                            var r = void 0
                              , s = void 0;
                            for (r = 0,
                            s = t.length; r < s; r++)
                                if (r in t && e.call(n, t[r], r) === this.BREAK)
                                    return
                        } else
                            for (var o in t)
                                if (e.call(n, t[o], o) === this.BREAK)
                                    return
                },
                defer: function(t) {
                    setTimeout(t, 0)
                },
                debounce: function(t, e, i) {
                    var n = void 0;
                    return function() {
                        var r = this
                          , s = arguments
                          , o = i || !n;
                        clearTimeout(n),
                        n = setTimeout(function() {
                            n = null,
                            i || t.apply(r, s)
                        }, e),
                        o && t.apply(r, s)
                    }
                },
                toArray: function(t) {
                    return t.toArray ? t.toArray() : n.call(t)
                },
                isUndefined: function(t) {
                    return void 0 === t
                },
                isNull: function(t) {
                    return null === t
                },
                isNaN: function(t) {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }
                    ,
                    e
                }(function(t) {
                    return isNaN(t)
                }),
                isArray: Array.isArray || function(t) {
                    return t.constructor === Array
                }
                ,
                isObject: function(t) {
                    return t === Object(t)
                },
                isNumber: function(t) {
                    return t === t + 0
                },
                isString: function(t) {
                    return t === t + ""
                },
                isBoolean: function(t) {
                    return !1 === t || !0 === t
                },
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
            };
            e.default = r,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = void 0
              , n = {
                hsv_to_rgb: function(t, e, i) {
                    var n = Math.floor(t / 60) % 6
                      , r = t / 60 - Math.floor(t / 60)
                      , s = i * (1 - e)
                      , o = i * (1 - r * e)
                      , a = i * (1 - (1 - r) * e)
                      , l = [[i, a, s], [o, i, s], [s, i, a], [s, o, i], [a, s, i], [i, s, o]][n];
                    return {
                        r: 255 * l[0],
                        g: 255 * l[1],
                        b: 255 * l[2]
                    }
                },
                rgb_to_hsv: function(t, e, i) {
                    var n = Math.min(t, e, i)
                      , r = Math.max(t, e, i)
                      , s = r - n
                      , o = void 0;
                    return 0 === r ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (o = t === r ? (e - i) / s : e === r ? 2 + (i - t) / s : 4 + (t - e) / s,
                    (o /= 6) < 0 && (o += 1),
                    {
                        h: 360 * o,
                        s: s / r,
                        v: r / 255
                    })
                },
                rgb_to_hex: function(t, e, i) {
                    var n = this.hex_with_component(0, 2, t);
                    return n = this.hex_with_component(n, 1, e),
                    n = this.hex_with_component(n, 0, i)
                },
                component_from_hex: function(t, e) {
                    return t >> 8 * e & 255
                },
                hex_with_component: function(t, e, n) {
                    return n << (i = 8 * e) | t & ~(255 << i)
                }
            };
            e.default = n,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function() {
                function t(e, i) {
                    (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, t),
                    this.initialValue = e[i],
                    this.domElement = document.createElement("div"),
                    this.object = e,
                    this.property = i,
                    this.__onChange = void 0,
                    this.__onFinishChange = void 0
                }
                return t.prototype.onChange = function(t) {
                    return this.__onChange = t,
                    this
                }
                ,
                t.prototype.onFinishChange = function(t) {
                    return this.__onFinishChange = t,
                    this
                }
                ,
                t.prototype.setValue = function(t) {
                    return this.object[this.property] = t,
                    this.__onChange && this.__onChange.call(this, t),
                    this.updateDisplay(),
                    this
                }
                ,
                t.prototype.getValue = function() {
                    return this.object[this.property]
                }
                ,
                t.prototype.updateDisplay = function() {
                    return this
                }
                ,
                t.prototype.isModified = function() {
                    return this.initialValue !== this.getValue()
                }
                ,
                t
            }();
            e.default = i,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(7)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = function(t) {
                function e(i, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n))
                      , s = r;
                    return r.__prev = r.getValue(),
                    r.__checkbox = document.createElement("input"),
                    r.__checkbox.setAttribute("type", "checkbox"),
                    a.default.bind(r.__checkbox, "change", function() {
                        s.setValue(!s.__prev)
                    }, !1),
                    r.domElement.appendChild(r.__checkbox),
                    r.updateDisplay(),
                    r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.setValue = function(e) {
                    var i = t.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                    this.__prev = this.getValue(),
                    i
                }
                ,
                e.prototype.updateDisplay = function() {
                    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"),
                    this.__checkbox.checked = !0,
                    this.__prev = !0) : (this.__checkbox.checked = !1,
                    this.__prev = !1),
                    t.prototype.updateDisplay.call(this)
                }
                ,
                e
            }(s.default);
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                if ("0" === t || s.default.isUndefined(t))
                    return 0;
                var e = t.match(a);
                return s.default.isNull(e) ? 0 : parseFloat(e[1])
            }
            e.__esModule = !0;
            var r = i(5)
              , s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r)
              , o = {};
            s.default.each({
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            }, function(t, e) {
                s.default.each(t, function(t) {
                    o[t] = e
                })
            });
            var a = /(\d+(\.\d+)?)px/
              , l = {
                makeSelectable: function(t, e) {
                    void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function() {
                        return !1
                    }
                    : function() {}
                    ,
                    t.style.MozUserSelect = e ? "auto" : "none",
                    t.style.KhtmlUserSelect = e ? "auto" : "none",
                    t.unselectable = e ? "on" : "off")
                },
                makeFullscreen: function(t, e, i) {
                    var n = i
                      , r = e;
                    s.default.isUndefined(r) && (r = !0),
                    s.default.isUndefined(n) && (n = !0),
                    t.style.position = "absolute",
                    r && (t.style.left = 0,
                    t.style.right = 0),
                    n && (t.style.top = 0,
                    t.style.bottom = 0)
                },
                fakeEvent: function(t, e, i, n) {
                    var r = i || {}
                      , a = o[e];
                    if (!a)
                        throw new Error("Event type " + e + " not supported.");
                    var l = document.createEvent(a);
                    switch (a) {
                    case "MouseEvents":
                        var u = r.x || r.clientX || 0
                          , h = r.y || r.clientY || 0;
                        l.initMouseEvent(e, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, u, h, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        var c = l.initKeyboardEvent || l.initKeyEvent;
                        s.default.defaults(r, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }),
                        c(e, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                        break;
                    default:
                        l.initEvent(e, r.bubbles || !1, r.cancelable || !0)
                    }
                    s.default.defaults(l, n),
                    t.dispatchEvent(l)
                },
                bind: function(t, e, i, n) {
                    var r = n || !1;
                    return t.addEventListener ? t.addEventListener(e, i, r) : t.attachEvent && t.attachEvent("on" + e, i),
                    l
                },
                unbind: function(t, e, i, n) {
                    var r = n || !1;
                    return t.removeEventListener ? t.removeEventListener(e, i, r) : t.detachEvent && t.detachEvent("on" + e, i),
                    l
                },
                addClass: function(t, e) {
                    if (void 0 === t.className)
                        t.className = e;
                    else if (t.className !== e) {
                        var i = t.className.split(/ +/);
                        -1 === i.indexOf(e) && (i.push(e),
                        t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return l
                },
                removeClass: function(t, e) {
                    if (e)
                        if (t.className === e)
                            t.removeAttribute("class");
                        else {
                            var i = t.className.split(/ +/)
                              , n = i.indexOf(e);
                            -1 !== n && (i.splice(n, 1),
                            t.className = i.join(" "))
                        }
                    else
                        t.className = void 0;
                    return l
                },
                hasClass: function(t, e) {
                    return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
                },
                getWidth: function(t) {
                    var e = getComputedStyle(t);
                    return n(e["border-left-width"]) + n(e["border-right-width"]) + n(e["padding-left"]) + n(e["padding-right"]) + n(e.width)
                },
                getHeight: function(t) {
                    var e = getComputedStyle(t);
                    return n(e["border-top-width"]) + n(e["border-bottom-width"]) + n(e["padding-top"]) + n(e["padding-bottom"]) + n(e.height)
                },
                getOffset: function(t) {
                    var e = t
                      , i = {
                        left: 0,
                        top: 0
                    };
                    if (e.offsetParent)
                        do {
                            i.left += e.offsetLeft,
                            i.top += e.offsetTop,
                            e = e.offsetParent
                        } while (e);return i
                },
                isActive: function(t) {
                    return t === document.activeElement && (t.type || t.href)
                }
            };
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(7)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = i(5)
              , u = n(l)
              , h = function(t) {
                function e(i, n, r) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var s = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n))
                      , o = r
                      , l = s;
                    if (s.__select = document.createElement("select"),
                    u.default.isArray(o)) {
                        var h = {};
                        u.default.each(o, function(t) {
                            h[t] = t
                        }),
                        o = h
                    }
                    return u.default.each(o, function(t, e) {
                        var i = document.createElement("option");
                        i.innerHTML = e,
                        i.setAttribute("value", t),
                        l.__select.appendChild(i)
                    }),
                    s.updateDisplay(),
                    a.default.bind(s.__select, "change", function() {
                        var t = this.options[this.selectedIndex].value;
                        l.setValue(t)
                    }),
                    s.domElement.appendChild(s.__select),
                    s
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.setValue = function(e) {
                    var i = t.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                    i
                }
                ,
                e.prototype.updateDisplay = function() {
                    return a.default.isActive(this.__select) ? this : (this.__select.value = this.getValue(),
                    t.prototype.updateDisplay.call(this))
                }
                ,
                e
            }(s.default);
            e.default = h,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(7)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = function(t) {
                function e(i, n) {
                    function r() {
                        o.setValue(o.__input.value)
                    }
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var s = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n))
                      , o = s;
                    return s.__input = document.createElement("input"),
                    s.__input.setAttribute("type", "text"),
                    a.default.bind(s.__input, "keyup", r),
                    a.default.bind(s.__input, "change", r),
                    a.default.bind(s.__input, "blur", function() {
                        o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                    }),
                    a.default.bind(s.__input, "keydown", function(t) {
                        13 === t.keyCode && this.blur()
                    }),
                    s.updateDisplay(),
                    s.domElement.appendChild(s.__input),
                    s
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.updateDisplay = function() {
                    return a.default.isActive(this.__input) || (this.__input.value = this.getValue()),
                    t.prototype.updateDisplay.call(this)
                }
                ,
                e
            }(s.default);
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t) {
                var e = t.toString();
                return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
            }
            e.__esModule = !0;
            var s = i(7)
              , o = n(s)
              , a = i(5)
              , l = n(a)
              , u = function(t) {
                function e(i, n, s) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var o = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n))
                      , a = s || {};
                    return o.__min = a.min,
                    o.__max = a.max,
                    o.__step = a.step,
                    l.default.isUndefined(o.__step) ? 0 === o.initialValue ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step,
                    o.__precision = r(o.__impliedStep),
                    o
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.setValue = function(e) {
                    var i = e;
                    return void 0 !== this.__min && i < this.__min ? i = this.__min : void 0 !== this.__max && i > this.__max && (i = this.__max),
                    void 0 !== this.__step && i % this.__step != 0 && (i = Math.round(i / this.__step) * this.__step),
                    t.prototype.setValue.call(this, i)
                }
                ,
                e.prototype.min = function(t) {
                    return this.__min = t,
                    this
                }
                ,
                e.prototype.max = function(t) {
                    return this.__max = t,
                    this
                }
                ,
                e.prototype.step = function(t) {
                    return this.__step = t,
                    this.__impliedStep = t,
                    this.__precision = r(t),
                    this
                }
                ,
                e
            }(o.default);
            e.default = u,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(12)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = i(5)
              , u = n(l)
              , h = function(t) {
                function e(i, n, r) {
                    function s() {
                        c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
                    }
                    function o(t) {
                        var e = f - t.clientY;
                        c.setValue(c.getValue() + e * c.__impliedStep),
                        f = t.clientY
                    }
                    function l() {
                        a.default.unbind(window, "mousemove", o),
                        a.default.unbind(window, "mouseup", l),
                        s()
                    }
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var h = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n, r));
                    h.__truncationSuspended = !1;
                    var c = h
                      , f = void 0;
                    return h.__input = document.createElement("input"),
                    h.__input.setAttribute("type", "text"),
                    a.default.bind(h.__input, "change", function() {
                        var t = parseFloat(c.__input.value);
                        u.default.isNaN(t) || c.setValue(t)
                    }),
                    a.default.bind(h.__input, "blur", function() {
                        s()
                    }),
                    a.default.bind(h.__input, "mousedown", function(t) {
                        a.default.bind(window, "mousemove", o),
                        a.default.bind(window, "mouseup", l),
                        f = t.clientY
                    }),
                    a.default.bind(h.__input, "keydown", function(t) {
                        13 === t.keyCode && (c.__truncationSuspended = !0,
                        this.blur(),
                        c.__truncationSuspended = !1,
                        s())
                    }),
                    h.updateDisplay(),
                    h.domElement.appendChild(h.__input),
                    h
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.updateDisplay = function() {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : function(t, e) {
                        var i = Math.pow(10, e);
                        return Math.round(t * i) / i
                    }(this.getValue(), this.__precision),
                    t.prototype.updateDisplay.call(this)
                }
                ,
                e
            }(s.default);
            e.default = h,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(12)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = function(t) {
                function e(i, n, r, s, o) {
                    function l(t) {
                        t.preventDefault();
                        var e = c.__background.getBoundingClientRect();
                        return c.setValue(function(t, e, i, n, r) {
                            return n + (t - e) / (i - e) * (r - n)
                        }(t.clientX, e.left, e.right, c.__min, c.__max)),
                        !1
                    }
                    function u() {
                        a.default.unbind(window, "mousemove", l),
                        a.default.unbind(window, "mouseup", u),
                        c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
                    }
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var h = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n, {
                        min: r,
                        max: s,
                        step: o
                    }))
                      , c = h;
                    return h.__background = document.createElement("div"),
                    h.__foreground = document.createElement("div"),
                    a.default.bind(h.__background, "mousedown", function(t) {
                        document.activeElement.blur(),
                        a.default.bind(window, "mousemove", l),
                        a.default.bind(window, "mouseup", u),
                        l(t)
                    }),
                    a.default.addClass(h.__background, "slider"),
                    a.default.addClass(h.__foreground, "slider-fg"),
                    h.updateDisplay(),
                    h.__background.appendChild(h.__foreground),
                    h.domElement.appendChild(h.__background),
                    h
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.updateDisplay = function() {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * e + "%",
                    t.prototype.updateDisplay.call(this)
                }
                ,
                e
            }(s.default);
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(7)
              , s = n(r)
              , o = i(9)
              , a = n(o)
              , l = function(t) {
                function e(i, n, r) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var s = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n))
                      , o = s;
                    return s.__button = document.createElement("div"),
                    s.__button.innerHTML = void 0 === r ? "Fire" : r,
                    a.default.bind(s.__button, "click", function(t) {
                        return t.preventDefault(),
                        o.fire(),
                        !1
                    }),
                    a.default.addClass(s.__button, "button"),
                    s.domElement.appendChild(s.__button),
                    s
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.fire = function() {
                    this.__onChange && this.__onChange.call(this),
                    this.getValue().call(this.object),
                    this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }
                ,
                e
            }(s.default);
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t, e, i, n) {
                t.style.background = "",
                _.default.each(m, function(r) {
                    t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
                })
            }
            e.__esModule = !0;
            var s = i(7)
              , o = n(s)
              , a = i(9)
              , l = n(a)
              , u = i(2)
              , h = n(u)
              , c = i(3)
              , f = n(c)
              , d = i(5)
              , _ = n(d)
              , p = function(t) {
                function e(i, n) {
                    function s(t) {
                        d(t),
                        l.default.bind(window, "mousemove", d),
                        l.default.bind(window, "mouseup", o)
                    }
                    function o() {
                        l.default.unbind(window, "mousemove", d),
                        l.default.unbind(window, "mouseup", o),
                        c()
                    }
                    function a() {
                        var t = (0,
                        f.default)(this.value);
                        !1 !== t ? (g.__color.__state = t,
                        g.setValue(g.__color.toOriginal())) : this.value = g.__color.toString()
                    }
                    function u() {
                        l.default.unbind(window, "mousemove", p),
                        l.default.unbind(window, "mouseup", u),
                        c()
                    }
                    function c() {
                        g.__onFinishChange && g.__onFinishChange.call(g, g.__color.toOriginal())
                    }
                    function d(t) {
                        t.preventDefault();
                        var e = g.__saturation_field.getBoundingClientRect()
                          , i = (t.clientX - e.left) / (e.right - e.left)
                          , n = 1 - (t.clientY - e.top) / (e.bottom - e.top);
                        return n > 1 ? n = 1 : n < 0 && (n = 0),
                        i > 1 ? i = 1 : i < 0 && (i = 0),
                        g.__color.v = n,
                        g.__color.s = i,
                        g.setValue(g.__color.toOriginal()),
                        !1
                    }
                    function p(t) {
                        t.preventDefault();
                        var e = g.__hue_field.getBoundingClientRect()
                          , i = 1 - (t.clientY - e.top) / (e.bottom - e.top);
                        return i > 1 ? i = 1 : i < 0 && (i = 0),
                        g.__color.h = 360 * i,
                        g.setValue(g.__color.toOriginal()),
                        !1
                    }
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var m = function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, i, n));
                    m.__color = new h.default(m.getValue()),
                    m.__temp = new h.default(0);
                    var g = m;
                    m.domElement = document.createElement("div"),
                    l.default.makeSelectable(m.domElement, !1),
                    m.__selector = document.createElement("div"),
                    m.__selector.className = "selector",
                    m.__saturation_field = document.createElement("div"),
                    m.__saturation_field.className = "saturation-field",
                    m.__field_knob = document.createElement("div"),
                    m.__field_knob.className = "field-knob",
                    m.__field_knob_border = "2px solid ",
                    m.__hue_knob = document.createElement("div"),
                    m.__hue_knob.className = "hue-knob",
                    m.__hue_field = document.createElement("div"),
                    m.__hue_field.className = "hue-field",
                    m.__input = document.createElement("input"),
                    m.__input.type = "text",
                    m.__input_textShadow = "0 1px 1px ",
                    l.default.bind(m.__input, "keydown", function(t) {
                        13 === t.keyCode && a.call(this)
                    }),
                    l.default.bind(m.__input, "blur", a),
                    l.default.bind(m.__selector, "mousedown", function() {
                        l.default.addClass(this, "drag").bind(window, "mouseup", function() {
                            l.default.removeClass(g.__selector, "drag")
                        })
                    });
                    var v = document.createElement("div");
                    return _.default.extend(m.__selector.style, {
                        width: "122px",
                        height: "102px",
                        padding: "3px",
                        backgroundColor: "#222",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                    }),
                    _.default.extend(m.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: m.__field_knob_border + (m.__color.v < .5 ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1
                    }),
                    _.default.extend(m.__hue_knob.style, {
                        position: "absolute",
                        width: "15px",
                        height: "2px",
                        borderRight: "4px solid #fff",
                        zIndex: 1
                    }),
                    _.default.extend(m.__saturation_field.style, {
                        width: "100px",
                        height: "100px",
                        border: "1px solid #555",
                        marginRight: "3px",
                        display: "inline-block",
                        cursor: "pointer"
                    }),
                    _.default.extend(v.style, {
                        width: "100%",
                        height: "100%",
                        background: "none"
                    }),
                    r(v, "top", "rgba(0,0,0,0)", "#000"),
                    _.default.extend(m.__hue_field.style, {
                        width: "15px",
                        height: "100px",
                        border: "1px solid #555",
                        cursor: "ns-resize",
                        position: "absolute",
                        top: "3px",
                        right: "3px"
                    }),
                    function(t) {
                        t.style.background = "",
                        t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
                        t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                        t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                        t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                        t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
                    }(m.__hue_field),
                    _.default.extend(m.__input.style, {
                        outline: "none",
                        textAlign: "center",
                        color: "#fff",
                        border: 0,
                        fontWeight: "bold",
                        textShadow: m.__input_textShadow + "rgba(0,0,0,0.7)"
                    }),
                    l.default.bind(m.__saturation_field, "mousedown", s),
                    l.default.bind(m.__field_knob, "mousedown", s),
                    l.default.bind(m.__hue_field, "mousedown", function(t) {
                        p(t),
                        l.default.bind(window, "mousemove", p),
                        l.default.bind(window, "mouseup", u)
                    }),
                    m.__saturation_field.appendChild(v),
                    m.__selector.appendChild(m.__field_knob),
                    m.__selector.appendChild(m.__saturation_field),
                    m.__selector.appendChild(m.__hue_field),
                    m.__hue_field.appendChild(m.__hue_knob),
                    m.domElement.appendChild(m.__input),
                    m.domElement.appendChild(m.__selector),
                    m.updateDisplay(),
                    m
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t),
                e.prototype.updateDisplay = function() {
                    var t = (0,
                    f.default)(this.getValue());
                    if (!1 !== t) {
                        var e = !1;
                        _.default.each(h.default.COMPONENTS, function(i) {
                            if (!_.default.isUndefined(t[i]) && !_.default.isUndefined(this.__color.__state[i]) && t[i] !== this.__color.__state[i])
                                return e = !0,
                                {}
                        }, this),
                        e && _.default.extend(this.__color.__state, t)
                    }
                    _.default.extend(this.__temp.__state, this.__color.__state),
                    this.__temp.a = 1;
                    var i = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0
                      , n = 255 - i;
                    _.default.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + i + "," + i + "," + i + ")"
                    }),
                    this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px",
                    this.__temp.s = 1,
                    this.__temp.v = 1,
                    r(this.__saturation_field, "left", "#fff", this.__temp.toHexString()),
                    this.__input.value = this.__color.toString(),
                    _.default.extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + i + "," + i + "," + i + ")",
                        textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
                    })
                }
                ,
                e
            }(o.default)
              , m = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
            e.default = p,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t, e, i) {
                var n = document.createElement("li");
                return e && n.appendChild(e),
                i ? t.__ul.insertBefore(n, i) : t.__ul.appendChild(n),
                t.onResize(),
                n
            }
            function s(t, e) {
                var i = t.__preset_select[t.__preset_select.selectedIndex];
                i.innerHTML = e ? i.value + "*" : i.value
            }
            function o(t, e, i) {
                if (i.__li = e,
                i.__gui = t,
                j.default.extend(i, {
                    options: function(e) {
                        if (arguments.length > 1) {
                            var n = i.__li.nextElementSibling;
                            return i.remove(),
                            l(t, i.object, i.property, {
                                before: n,
                                factoryArgs: [j.default.toArray(arguments)]
                            })
                        }
                        if (j.default.isArray(e) || j.default.isObject(e)) {
                            var r = i.__li.nextElementSibling;
                            return i.remove(),
                            l(t, i.object, i.property, {
                                before: r,
                                factoryArgs: [e]
                            })
                        }
                    },
                    name: function(t) {
                        return i.__li.firstElementChild.firstElementChild.innerHTML = t,
                        i
                    },
                    listen: function() {
                        return i.__gui.listen(i),
                        i
                    },
                    remove: function() {
                        return i.__gui.remove(i),
                        i
                    }
                }),
                i instanceof E.default) {
                    var n = new A.default(i.object,i.property,{
                        min: i.__min,
                        max: i.__max,
                        step: i.__step
                    });
                    j.default.each(["updateDisplay", "onChange", "onFinishChange", "step"], function(t) {
                        var e = i[t]
                          , r = n[t];
                        i[t] = n[t] = function() {
                            var t = Array.prototype.slice.call(arguments);
                            return r.apply(n, t),
                            e.apply(i, t)
                        }
                    }),
                    B.default.addClass(e, "has-slider"),
                    i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
                } else if (i instanceof A.default) {
                    var r = function(e) {
                        if (j.default.isNumber(i.__min) && j.default.isNumber(i.__max)) {
                            var n = i.__li.firstElementChild.firstElementChild.innerHTML
                              , r = i.__gui.__listening.indexOf(i) > -1;
                            i.remove();
                            var s = l(t, i.object, i.property, {
                                before: i.__li.nextElementSibling,
                                factoryArgs: [i.__min, i.__max, i.__step]
                            });
                            return s.name(n),
                            r && s.listen(),
                            s
                        }
                        return e
                    };
                    i.min = j.default.compose(r, i.min),
                    i.max = j.default.compose(r, i.max)
                } else
                    i instanceof C.default ? (B.default.bind(e, "click", function() {
                        B.default.fakeEvent(i.__checkbox, "click")
                    }),
                    B.default.bind(i.__checkbox, "click", function(t) {
                        t.stopPropagation()
                    })) : i instanceof O.default ? (B.default.bind(e, "click", function() {
                        B.default.fakeEvent(i.__button, "click")
                    }),
                    B.default.bind(e, "mouseover", function() {
                        B.default.addClass(i.__button, "hover")
                    }),
                    B.default.bind(e, "mouseout", function() {
                        B.default.removeClass(i.__button, "hover")
                    })) : i instanceof M.default && (B.default.addClass(e, "color"),
                    i.updateDisplay = j.default.compose(function(t) {
                        return e.style.borderLeftColor = i.__color.toString(),
                        t
                    }, i.updateDisplay),
                    i.updateDisplay());
                i.setValue = j.default.compose(function(e) {
                    return t.getRoot().__preset_select && i.isModified() && s(t.getRoot(), !0),
                    e
                }, i.setValue)
            }
            function a(t, e) {
                var i = t.getRoot()
                  , n = i.__rememberedObjects.indexOf(e.object);
                if (-1 !== n) {
                    var r = i.__rememberedObjectIndecesToControllers[n];
                    if (void 0 === r && (r = {},
                    i.__rememberedObjectIndecesToControllers[n] = r),
                    r[e.property] = e,
                    i.load && i.load.remembered) {
                        var s = i.load.remembered
                          , o = void 0;
                        if (s[t.preset])
                            o = s[t.preset];
                        else {
                            if (!s[V])
                                return;
                            o = s[V]
                        }
                        if (o[n] && void 0 !== o[n][e.property]) {
                            var a = o[n][e.property];
                            e.initialValue = a,
                            e.setValue(a)
                        }
                    }
                }
            }
            function l(t, e, i, n) {
                if (void 0 === e[i])
                    throw new Error('Object "' + e + '" has no property "' + i + '"');
                var s = void 0;
                if (n.color)
                    s = new M.default(e,i);
                else {
                    var l = [e, i].concat(n.factoryArgs);
                    s = b.default.apply(t, l)
                }
                n.before instanceof w.default && (n.before = n.before.__li),
                a(t, s),
                B.default.addClass(s.domElement, "c");
                var u = document.createElement("span");
                B.default.addClass(u, "property-name"),
                u.innerHTML = s.property,
                n.label && (u.style.width = "100%");
                var h = document.createElement("div");
                h.appendChild(u),
                h.appendChild(s.domElement);
                var c = r(t, h, n.before);
                return B.default.addClass(c, Z.CLASS_CONTROLLER_ROW),
                s instanceof M.default ? B.default.addClass(c, "color") : B.default.addClass(c, _(s.getValue())),
                o(t, c, s),
                t.__controllers.push(s),
                s
            }
            function u(t, e) {
                return document.location.href + "." + e
            }
            function h(t, e, i) {
                var n = document.createElement("option");
                n.innerHTML = e,
                n.value = e,
                t.__preset_select.appendChild(n),
                i && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
            }
            function c(t, e) {
                e.style.display = t.useLocalStorage ? "block" : "none"
            }
            function f(t, e) {
                t.domElement.style.width = e + "px",
                t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"),
                t.__closeButton && (t.__closeButton.style.width = e + "px")
            }
            function d(t, e) {
                var i = {};
                return j.default.each(t.__rememberedObjects, function(n, r) {
                    var s = {}
                      , o = t.__rememberedObjectIndecesToControllers[r];
                    j.default.each(o, function(t, i) {
                        s[i] = e ? t.initialValue : t.getValue()
                    }),
                    i[r] = s
                }),
                i
            }
            e.__esModule = !0;
            var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , p = i(18)
              , m = n(p)
              , g = i(19)
              , v = n(g)
              , y = i(20)
              , b = n(y)
              , x = i(7)
              , w = n(x)
              , T = i(8)
              , C = n(T)
              , S = i(15)
              , O = n(S)
              , P = i(13)
              , A = n(P)
              , k = i(14)
              , E = n(k)
              , R = i(16)
              , M = n(R)
              , D = i(21)
              , L = n(D)
              , F = i(22)
              , N = n(F)
              , I = i(9)
              , B = n(I)
              , z = i(5)
              , j = n(z)
              , X = i(23)
              , H = n(X);
            m.default.inject(H.default);
            var V = "Default"
              , U = function() {
                try {
                    return "localStorage"in window && null !== window.localStorage
                } catch (t) {
                    return !1
                }
            }()
              , Y = void 0
              , G = !0
              , W = void 0
              , q = !1
              , Q = []
              , Z = function t(e) {
                var i = this
                  , n = e || {};
                this.domElement = document.createElement("div"),
                this.__ul = document.createElement("ul"),
                this.domElement.appendChild(this.__ul),
                B.default.addClass(this.domElement, "dg"),
                this.__folders = {},
                this.__controllers = [],
                this.__rememberedObjects = [],
                this.__rememberedObjectIndecesToControllers = [],
                this.__listening = [],
                n = j.default.defaults(n, {
                    closeOnTop: !1,
                    autoPlace: !0,
                    width: t.DEFAULT_WIDTH
                }),
                n = j.default.defaults(n, {
                    resizable: n.autoPlace,
                    hideable: n.autoPlace
                }),
                j.default.isUndefined(n.load) ? n.load = {
                    preset: V
                } : n.preset && (n.load.preset = n.preset),
                j.default.isUndefined(n.parent) && n.hideable && Q.push(this),
                n.resizable = j.default.isUndefined(n.parent) && n.resizable,
                n.autoPlace && j.default.isUndefined(n.scrollable) && (n.scrollable = !0);
                var s = U && "true" === localStorage.getItem(u(0, "isLocal"))
                  , o = void 0;
                if (Object.defineProperties(this, {
                    parent: {
                        get: function() {
                            return n.parent
                        }
                    },
                    scrollable: {
                        get: function() {
                            return n.scrollable
                        }
                    },
                    autoPlace: {
                        get: function() {
                            return n.autoPlace
                        }
                    },
                    closeOnTop: {
                        get: function() {
                            return n.closeOnTop
                        }
                    },
                    preset: {
                        get: function() {
                            return i.parent ? i.getRoot().preset : n.load.preset
                        },
                        set: function(t) {
                            i.parent ? i.getRoot().preset = t : n.load.preset = t,
                            function(t) {
                                for (var e = 0; e < t.__preset_select.length; e++)
                                    t.__preset_select[e].value === t.preset && (t.__preset_select.selectedIndex = e)
                            }(this),
                            i.revert()
                        }
                    },
                    width: {
                        get: function() {
                            return n.width
                        },
                        set: function(t) {
                            n.width = t,
                            f(i, t)
                        }
                    },
                    name: {
                        get: function() {
                            return n.name
                        },
                        set: function(t) {
                            n.name = t,
                            titleRowName && (titleRowName.innerHTML = n.name)
                        }
                    },
                    closed: {
                        get: function() {
                            return n.closed
                        },
                        set: function(e) {
                            n.closed = e,
                            n.closed ? B.default.addClass(i.__ul, t.CLASS_CLOSED) : B.default.removeClass(i.__ul, t.CLASS_CLOSED),
                            this.onResize(),
                            i.__closeButton && (i.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function() {
                            return n.load
                        }
                    },
                    useLocalStorage: {
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            U && (s = t,
                            t ? B.default.bind(window, "unload", o) : B.default.unbind(window, "unload", o),
                            localStorage.setItem(u(0, "isLocal"), t))
                        }
                    }
                }),
                j.default.isUndefined(n.parent)) {
                    if (n.closed = !1,
                    B.default.addClass(this.domElement, t.CLASS_MAIN),
                    B.default.makeSelectable(this.domElement, !1),
                    U && s) {
                        i.useLocalStorage = !0;
                        var a = localStorage.getItem(u(0, "gui"));
                        a && (n.load = JSON.parse(a))
                    }
                    this.__closeButton = document.createElement("div"),
                    this.__closeButton.innerHTML = t.TEXT_CLOSED,
                    B.default.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON),
                    n.closeOnTop ? (B.default.addClass(this.__closeButton, t.CLASS_CLOSE_TOP),
                    this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (B.default.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM),
                    this.domElement.appendChild(this.__closeButton)),
                    B.default.bind(this.__closeButton, "click", function() {
                        i.closed = !i.closed
                    })
                } else {
                    void 0 === n.closed && (n.closed = !0);
                    var l = document.createTextNode(n.name);
                    B.default.addClass(l, "controller-name");
                    var h = r(i, l);
                    B.default.addClass(this.__ul, t.CLASS_CLOSED),
                    B.default.addClass(h, "title"),
                    B.default.bind(h, "click", function(t) {
                        return t.preventDefault(),
                        i.closed = !i.closed,
                        !1
                    }),
                    n.closed || (this.closed = !1)
                }
                n.autoPlace && (j.default.isUndefined(n.parent) && (G && (W = document.createElement("div"),
                B.default.addClass(W, "dg"),
                B.default.addClass(W, t.CLASS_AUTO_PLACE_CONTAINER),
                document.body.appendChild(W),
                G = !1),
                W.appendChild(this.domElement),
                B.default.addClass(this.domElement, t.CLASS_AUTO_PLACE)),
                this.parent || f(i, n.width)),
                this.__resizeHandler = function() {
                    i.onResizeDebounced()
                }
                ,
                B.default.bind(window, "resize", this.__resizeHandler),
                B.default.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
                B.default.bind(this.__ul, "transitionend", this.__resizeHandler),
                B.default.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
                this.onResize(),
                n.resizable && function(t) {
                    function e(e) {
                        return e.preventDefault(),
                        t.width += r - e.clientX,
                        t.onResize(),
                        r = e.clientX,
                        !1
                    }
                    function i() {
                        B.default.removeClass(t.__closeButton, Z.CLASS_DRAG),
                        B.default.unbind(window, "mousemove", e),
                        B.default.unbind(window, "mouseup", i)
                    }
                    function n(n) {
                        return n.preventDefault(),
                        r = n.clientX,
                        B.default.addClass(t.__closeButton, Z.CLASS_DRAG),
                        B.default.bind(window, "mousemove", e),
                        B.default.bind(window, "mouseup", i),
                        !1
                    }
                    var r = void 0;
                    t.__resize_handle = document.createElement("div"),
                    j.default.extend(t.__resize_handle.style, {
                        width: "6px",
                        marginLeft: "-3px",
                        height: "200px",
                        cursor: "ew-resize",
                        position: "absolute"
                    }),
                    B.default.bind(t.__resize_handle, "mousedown", n),
                    B.default.bind(t.__closeButton, "mousedown", n),
                    t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
                }(this),
                o = function() {
                    U && "true" === localStorage.getItem(u(0, "isLocal")) && localStorage.setItem(u(0, "gui"), JSON.stringify(i.getSaveObject()))
                }
                ,
                this.saveToLocalStorageIfPossible = o,
                n.parent || function() {
                    var t = i.getRoot();
                    t.width += 1,
                    j.default.defer(function() {
                        t.width -= 1
                    })
                }()
            };
            Z.toggleHide = function() {
                q = !q,
                j.default.each(Q, function(t) {
                    t.domElement.style.display = q ? "none" : ""
                })
            }
            ,
            Z.CLASS_AUTO_PLACE = "a",
            Z.CLASS_AUTO_PLACE_CONTAINER = "ac",
            Z.CLASS_MAIN = "main",
            Z.CLASS_CONTROLLER_ROW = "cr",
            Z.CLASS_TOO_TALL = "taller-than-window",
            Z.CLASS_CLOSED = "closed",
            Z.CLASS_CLOSE_BUTTON = "close-button",
            Z.CLASS_CLOSE_TOP = "close-top",
            Z.CLASS_CLOSE_BOTTOM = "close-bottom",
            Z.CLASS_DRAG = "drag",
            Z.DEFAULT_WIDTH = 245,
            Z.TEXT_CLOSED = "Close Controls",
            Z.TEXT_OPEN = "Open Controls",
            Z._keydownHandler = function(t) {
                "text" === document.activeElement.type || 72 !== t.which && 72 !== t.keyCode || Z.toggleHide()
            }
            ,
            B.default.bind(window, "keydown", Z._keydownHandler, !1),
            j.default.extend(Z.prototype, {
                add: function(t, e) {
                    return l(this, t, e, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    })
                },
                addColor: function(t, e) {
                    return l(this, t, e, {
                        color: !0
                    })
                },
                addLabel: function(t) {
                    var e = {};
                    return e[t] = "",
                    l(this, e, t, {
                        label: !0
                    })
                },
                remove: function(t) {
                    this.__ul.removeChild(t.__li),
                    this.__controllers.splice(this.__controllers.indexOf(t), 1);
                    var e = this;
                    j.default.defer(function() {
                        e.onResize()
                    })
                },
                destroy: function() {
                    this.autoPlace && W.removeChild(this.domElement),
                    this.removeAllFolders(),
                    B.default.unbind(window, "keydown", Z._keydownHandler, !1),
                    B.default.unbind(window, "resize", this.__resizeHandler),
                    this.saveToLocalStorageIfPossible && B.default.unbind(window, "unload", this.saveToLocalStorageIfPossible)
                },
                addFolder: function(t) {
                    if (void 0 !== this.__folders[t])
                        throw new Error('You already have a folder in this GUI by the name "' + t + '"');
                    var e = {
                        name: t,
                        parent: this
                    };
                    e.autoPlace = this.autoPlace,
                    this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed,
                    e.load = this.load.folders[t]);
                    var i = new Z(e);
                    this.__folders[t] = i;
                    var n = r(this, i.domElement);
                    return B.default.addClass(n, "folder"),
                    i
                },
                removeFolder: function(t) {
                    if ("undefined" === this.__folders[t])
                        throw new Error('The folder named "' + t + '" does not exist');
                    this.__folders[t].domElement.remove(),
                    delete this.__folders[t]
                },
                removeAllFolders: function() {
                    j.default.each(this.__folders, function(t) {
                        this.removeFolder(t.name)
                    }
                    .bind(this))
                },
                open: function() {
                    this.closed = !1
                },
                close: function() {
                    this.closed = !0
                },
                onResize: function() {
                    var t = this.getRoot();
                    if (t.scrollable) {
                        var e = B.default.getOffset(t.__ul).top
                          , i = 0;
                        j.default.each(t.__ul.childNodes, function(e) {
                            t.autoPlace && e === t.__save_row || (i += B.default.getHeight(e))
                        }),
                        window.innerHeight - e - 20 < i ? (B.default.addClass(t.domElement, Z.CLASS_TOO_TALL),
                        t.__ul.style.height = window.innerHeight - e - 20 + "px") : (B.default.removeClass(t.domElement, Z.CLASS_TOO_TALL),
                        t.__ul.style.height = "auto")
                    }
                    t.__resize_handle && j.default.defer(function() {
                        t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
                    }),
                    t.__closeButton && (t.__closeButton.style.width = t.width + "px")
                },
                onResizeDebounced: j.default.debounce(function() {
                    this.onResize()
                }, 50),
                remember: function() {
                    if (j.default.isUndefined(Y) && ((Y = new N.default).domElement.innerHTML = v.default),
                    this.parent)
                        throw new Error("You can only call remember on a top level GUI.");
                    var t = this;
                    j.default.each(Array.prototype.slice.call(arguments), function(e) {
                        0 === t.__rememberedObjects.length && function(t) {
                            var e = t.__save_row = document.createElement("li");
                            B.default.addClass(t.domElement, "has-save"),
                            t.__ul.insertBefore(e, t.__ul.firstChild),
                            B.default.addClass(e, "save-row");
                            var i = document.createElement("span");
                            i.innerHTML = "&nbsp;",
                            B.default.addClass(i, "button gears");
                            var n = document.createElement("span");
                            n.innerHTML = "Save",
                            B.default.addClass(n, "button"),
                            B.default.addClass(n, "save");
                            var r = document.createElement("span");
                            r.innerHTML = "New",
                            B.default.addClass(r, "button"),
                            B.default.addClass(r, "save-as");
                            var s = document.createElement("span");
                            s.innerHTML = "Revert",
                            B.default.addClass(s, "button"),
                            B.default.addClass(s, "revert");
                            var o = t.__preset_select = document.createElement("select");
                            if (t.load && t.load.remembered ? j.default.each(t.load.remembered, function(e, i) {
                                h(t, i, i === t.preset)
                            }) : h(t, V, !1),
                            B.default.bind(o, "change", function() {
                                for (var e = 0; e < t.__preset_select.length; e++)
                                    t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                                t.preset = this.value
                            }),
                            e.appendChild(o),
                            e.appendChild(i),
                            e.appendChild(n),
                            e.appendChild(r),
                            e.appendChild(s),
                            U) {
                                var a = document.getElementById("dg-local-explain")
                                  , l = document.getElementById("dg-local-storage")
                                  , f = document.getElementById("dg-save-locally");
                                f.style.display = "block",
                                "true" === localStorage.getItem(u(0, "isLocal")) && l.setAttribute("checked", "checked"),
                                c(t, a),
                                B.default.bind(l, "change", function() {
                                    t.useLocalStorage = !t.useLocalStorage,
                                    c(t, a)
                                })
                            }
                            var d = document.getElementById("dg-new-constructor");
                            B.default.bind(d, "keydown", function(t) {
                                !t.metaKey || 67 !== t.which && 67 !== t.keyCode || Y.hide()
                            }),
                            B.default.bind(i, "click", function() {
                                d.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2),
                                Y.show(),
                                d.focus(),
                                d.select()
                            }),
                            B.default.bind(n, "click", function() {
                                t.save()
                            }),
                            B.default.bind(r, "click", function() {
                                var e = prompt("Enter a new preset name.");
                                e && t.saveAs(e)
                            }),
                            B.default.bind(s, "click", function() {
                                t.revert()
                            })
                        }(t),
                        -1 === t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
                    }),
                    this.autoPlace && f(this, this.width)
                },
                getRoot: function() {
                    for (var t = this; t.parent; )
                        t = t.parent;
                    return t
                },
                getSaveObject: function() {
                    var t = this.load;
                    return t.closed = this.closed,
                    this.__rememberedObjects.length > 0 && (t.preset = this.preset,
                    t.remembered || (t.remembered = {}),
                    t.remembered[this.preset] = d(this)),
                    t.folders = {},
                    j.default.each(this.__folders, function(e, i) {
                        t.folders[i] = e.getSaveObject()
                    }),
                    t
                },
                save: function() {
                    this.load.remembered || (this.load.remembered = {}),
                    this.load.remembered[this.preset] = d(this),
                    s(this, !1),
                    this.saveToLocalStorageIfPossible()
                },
                saveAs: function(t) {
                    this.load.remembered || (this.load.remembered = {},
                    this.load.remembered[V] = d(this, !0)),
                    this.load.remembered[t] = d(this),
                    this.preset = t,
                    h(this, t, !0),
                    this.saveToLocalStorageIfPossible()
                },
                revert: function(t) {
                    j.default.each(this.__controllers, function(e) {
                        this.getRoot().load.remembered ? a(t || this.getRoot(), e) : e.setValue(e.initialValue),
                        e.__onFinishChange && e.__onFinishChange.call(e, e.getValue())
                    }, this),
                    j.default.each(this.__folders, function(t) {
                        t.revert(t)
                    }),
                    t || s(this.getRoot(), !1)
                },
                listen: function(t) {
                    var e = 0 === this.__listening.length;
                    this.__listening.push(t),
                    e && function t(e) {
                        0 !== e.length && L.default.call(window, function() {
                            t(e)
                        }),
                        j.default.each(e, function(t) {
                            t.updateDisplay()
                        })
                    }(this.__listening)
                },
                updateDisplay: function() {
                    j.default.each(this.__controllers, function(t) {
                        t.updateDisplay()
                    }),
                    j.default.each(this.__folders, function(t) {
                        t.updateDisplay()
                    })
                }
            }),
            e.default = Z,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            t.exports = {
                load: function(t, e) {
                    var i = e || document
                      , n = i.createElement("link");
                    n.type = "text/css",
                    n.rel = "stylesheet",
                    n.href = t,
                    i.getElementsByTagName("head")[0].appendChild(n)
                },
                inject: function(t, e) {
                    var i = e || document
                      , n = document.createElement("style");
                    n.type = "text/css",
                    n.innerHTML = t;
                    var r = i.getElementsByTagName("head")[0];
                    try {
                        r.appendChild(n)
                    } catch (t) {}
                }
            }
        }
        , function(t, e) {
            t.exports = "<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>"
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(10)
              , s = n(r)
              , o = i(13)
              , a = n(o)
              , l = i(14)
              , u = n(l)
              , h = i(11)
              , c = n(h)
              , f = i(15)
              , d = n(f)
              , _ = i(8)
              , p = n(_)
              , m = i(5)
              , g = n(m);
            e.default = function(t, e) {
                var i = t[e];
                return g.default.isArray(arguments[2]) || g.default.isObject(arguments[2]) ? new s.default(t,e,arguments[2]) : g.default.isNumber(i) ? g.default.isNumber(arguments[2]) && g.default.isNumber(arguments[3]) ? g.default.isNumber(arguments[4]) ? new u.default(t,e,arguments[2],arguments[3],arguments[4]) : new u.default(t,e,arguments[2],arguments[3]) : g.default.isNumber(arguments[4]) ? new a.default(t,e,{
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4]
                }) : new a.default(t,e,{
                    min: arguments[2],
                    max: arguments[3]
                }) : g.default.isString(i) ? new c.default(t,e) : g.default.isFunction(i) ? new d.default(t,e,"") : g.default.isBoolean(i) ? new p.default(t,e) : null
            }
            ,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0,
            e.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            }
            ,
            t.exports = e.default
        }
        , function(t, e, i) {
            "use strict";
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(9)
              , s = n(r)
              , o = i(5)
              , a = n(o)
              , l = function() {
                function t() {
                    (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, t),
                    this.backgroundElement = document.createElement("div"),
                    a.default.extend(this.backgroundElement.style, {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        top: 0,
                        left: 0,
                        display: "none",
                        zIndex: "1000",
                        opacity: 0,
                        WebkitTransition: "opacity 0.2s linear",
                        transition: "opacity 0.2s linear"
                    }),
                    s.default.makeFullscreen(this.backgroundElement),
                    this.backgroundElement.style.position = "fixed",
                    this.domElement = document.createElement("div"),
                    a.default.extend(this.domElement.style, {
                        position: "fixed",
                        display: "none",
                        zIndex: "1001",
                        opacity: 0,
                        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                        transition: "transform 0.2s ease-out, opacity 0.2s linear"
                    }),
                    document.body.appendChild(this.backgroundElement),
                    document.body.appendChild(this.domElement);
                    var e = this;
                    s.default.bind(this.backgroundElement, "click", function() {
                        e.hide()
                    })
                }
                return t.prototype.show = function() {
                    var t = this;
                    this.backgroundElement.style.display = "block",
                    this.domElement.style.display = "block",
                    this.domElement.style.opacity = 0,
                    this.domElement.style.webkitTransform = "scale(1.1)",
                    this.layout(),
                    a.default.defer(function() {
                        t.backgroundElement.style.opacity = 1,
                        t.domElement.style.opacity = 1,
                        t.domElement.style.webkitTransform = "scale(1)"
                    })
                }
                ,
                t.prototype.hide = function() {
                    var t = this
                      , e = function e() {
                        t.domElement.style.display = "none",
                        t.backgroundElement.style.display = "none",
                        s.default.unbind(t.domElement, "webkitTransitionEnd", e),
                        s.default.unbind(t.domElement, "transitionend", e),
                        s.default.unbind(t.domElement, "oTransitionEnd", e)
                    };
                    s.default.bind(this.domElement, "webkitTransitionEnd", e),
                    s.default.bind(this.domElement, "transitionend", e),
                    s.default.bind(this.domElement, "oTransitionEnd", e),
                    this.backgroundElement.style.opacity = 0,
                    this.domElement.style.opacity = 0,
                    this.domElement.style.webkitTransform = "scale(1.1)"
                }
                ,
                t.prototype.layout = function() {
                    this.domElement.style.left = window.innerWidth / 2 - s.default.getWidth(this.domElement) / 2 + "px",
                    this.domElement.style.top = window.innerHeight / 2 - s.default.getHeight(this.domElement) / 2 + "px"
                }
                ,
                t
            }();
            e.default = l,
            t.exports = e.default
        }
        , function(t, e, i) {
            (t.exports = i(24)()).push([t.id, ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{transition:height .1s ease-out;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}", ""])
        }
        , function(t, e) {
            t.exports = function() {
                var t = [];
                return t.toString = function() {
                    for (var t = [], e = 0; e < this.length; e++) {
                        var i = this[e];
                        i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
                    }
                    return t.join("")
                }
                ,
                t.i = function(e, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, r = 0; r < this.length; r++) {
                        var s = this[r][0];
                        "number" == typeof s && (n[s] = !0)
                    }
                    for (r = 0; r < e.length; r++) {
                        var o = e[r];
                        "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"),
                        t.push(o))
                    }
                }
                ,
                t
            }
        }
        ])
    }
});
