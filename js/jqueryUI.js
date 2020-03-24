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
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = function (a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function (a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function (a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render
                    },
                    g = 1e-10,
                    h = c._internals,
                    i = h.isSelector,
                    j = h.isArray,
                    k = f.prototype = c.to({}, .1, {}),
                    l = [];
                f.version = "2.0.1", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                }, k.updateTo = function (a, b) {
                    var d, e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var g = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || f)
                        for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                    return this
                }, k.render = function (a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, i, j, k, l, m, n, o, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0))
                }, f.to = function (a, b, c) {
                    return new f(a, b, c)
                }, f.from = function (a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                }, f.fromTo = function (a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o, p, q, r, s = 0,
                        t = [],
                        u = function () {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q)
                        }
                        p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
                    }
                    return t
                }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                }, f.delayedCall = function (a, b, c, d, e) {
                    return new f(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        callbackScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        immediateRender: !1,
                        useFrames: e,
                        overwrite: 0
                    })
                }, f.set = function (a, b) {
                    return new f(a, 0, b)
                }, f.isTweening = function (a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var m = function (a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    n = f.getAllTweens = function (b) {
                        return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
                    };
                f.killAll = function (a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = n(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, f.killChildTweensOf = function (a, b) {
                    if (null != a) {
                        var e, g, k, l, m, n = h.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
                            for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n)
                                for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var o = function (a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return f.pauseAll = function (a, b, c) {
                    o(!0, a, b, c)
                }, f.resumeAll = function (a, b, c) {
                    o(!1, a, b, c)
                }, f.globalTimeScale = function (b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, k.progress = function (a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, k.totalProgress = function (a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, k.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.duration = function (b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, k.totalDuration = function (a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, k.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, f
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = function (a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function (a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    n = function (a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function () {},
                    p = function (a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = d.prototype = new b;
                return d.version = "2.0.1", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, q.from = function (a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                }, q.fromTo = function (a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                            onComplete: i,
                            onCompleteParams: j,
                            callbackScope: k,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        r = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                    return this.add(q, g)
                }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, q.call = function (a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, q.set = function (a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function (a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, q.add = function (e, f, g, h) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, q.remove = function (b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;) this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, q._remove = function (a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, q.append = function (a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, q.insert = q.insertMultiple = function (a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, q.appendMultiple = function (a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, q.addLabel = function (a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, q.addPause = function (a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                }, q.removeLabel = function (a) {
                    return delete this._labels[a], this
                }, q.getLabelTime = function (a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, q._parseTimeOrLabel = function (b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, q.seek = function (a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, q.stop = function () {
                    return this.paused(!0)
                }, q.gotoAndPlay = function (a, b) {
                    return this.play(a, b)
                }, q.gotoAndStop = function (a, b) {
                    return this.pause(a, b)
                }, q.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n = this._time,
                        o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._paused;
                    if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;
                    else if (1e-7 > a)
                        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (i = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !b) {
                            if (a >= n)
                                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = a
                    }
                    if (this._time !== n && this._first || c || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n)
                            for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
                    }
                }, q._hasPausedChild = function () {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, q.getChildren = function (a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, q.getTweensOf = function (a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, q.recent = function () {
                    return this._recent
                }, q._contains = function (a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, q.shiftChildren = function (a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, q._kill = function (a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, q.clear = function (a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, q.invalidate = function () {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, q._enabled = function (a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, q.totalTime = function (b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, q.duration = function (a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, q.totalDuration = function (a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, q.paused = function (b) {
                    if (!b)
                        for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, q.usesFrames = function () {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, q.rawTime = function (a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
                var d = function (b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "2.0.1", k.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function (a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function (a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function (b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function (a, c) {
                    c = c || {};
                    var d, e, f, g = {
                            ease: j,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
                        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                    }, f
                }, k.tweenFromTo = function (a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        callbackScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._duration,
                        r = this._totalTime,
                        s = this._startTime,
                        t = this._timeScale,
                        u = this._rawPrevTime,
                        v = this._paused,
                        w = this._cycle;
                    if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);
                    else if (1e-7 > a)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (k = !0)
                        }
                    else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                        if (a = this._time, a >= o || this._repeat && w !== this._cycle)
                            for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            z = this._totalTime,
                            A = this._cycle,
                            B = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;
                        if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
                    }
                    if (!(this._time !== o && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o)
                        for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                    else
                        for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                            if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                    m = null, this.pause()
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
                }, k.getActive = function (a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function (a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function (a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function () {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function (a, b) {
                        return a.time - b.time
                    }), b
                }, k.invalidate = function () {
                    return this._locked = !1, a.prototype.invalidate.call(this)
                }, k.progress = function (a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }, k.totalProgress = function (a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }, k.totalDuration = function (b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function (a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function () {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function (a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function (a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function (a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function (a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function (a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                } t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]],
                                        s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function (a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function (a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function (a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function (a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function () {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function (a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b)
                }, q._kill = function (a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
                var c, d, e, f, g = function () {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "1.20.5", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function (a, b) {
                        return b.toUpperCase()
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = {
                        style: {}
                    },
                    O = _gsScope.document || {
                        createElement: function () {
                            return N
                        }
                    },
                    P = function (a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = g._internals = {
                        _specialProps: i
                    },
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = function () {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                    }(),
                    V = function (a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function (a) {
                        _gsScope.console && console.log(a)
                    },
                    X = "",
                    Y = "",
                    Z = function (a, b) {
                        b = b || Q;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                    },
                    $ = ("undefined" != typeof window ? window : O.defaultView || {
                        getComputedStyle: function () {}
                    }).getComputedStyle,
                    _ = g.getStyle = function (a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                    },
                    aa = S.convertToPixels = function (a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                            }
                        else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    ba = S.calculateOffset = function (a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                    },
                    ca = function (a, b) {
                        var c, d, e, f = {};
                        if (b = b || $(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    da = function (a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    ea = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function (a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ha = function (a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",")
                        }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                    },
                    ia = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                    },
                    ja = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                    },
                    ka = function (a, b, c, d) {
                        var e, f, g, h, i, j = 1e-6;
                        return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                    },
                    la = {
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
                    },
                    ma = function (a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    na = g.parseColor = function (a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) {
                                        if (-1 !== a.indexOf("=")) return a.match(t)
                                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                                else c = a.match(s) || la.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = la.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    oa = function (a, b) {
                        var c, d, e, f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
                    var b, c = a[0] + " " + a[1];
                    pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function (a, b, c, d) {
                        if (null == a) return function (a) {
                            return a
                        };
                        var e, f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function (a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function (a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(u) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function (a) {
                            return a
                        }
                    },
                    ra = function (a) {
                        return a = a.split(","),
                            function (b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    sa = (S._setPluginRatio = function (a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if (c = i.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function (a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ta = (S._parseToProxy = function (a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = M;
                        for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    ua = function (a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return g.b = c, g.e = g.xs0 = d, g
                    },
                    va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                            else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t), !w || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    wa = 9;
                for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var xa = function (a, b) {
                        b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    ya = S._registerComplexSpecialProp = function (a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
                    },
                    za = S._registerPluginProp = function (a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function (a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function (a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function (a, b, c) {
                    ya(a, {
                        parser: function (a, d, e, f, g, h, i) {
                            var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                }, g.useSVGTransformAttr = !0;
                var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = S.Transform = function () {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
                    },
                    Ha = _gsScope.SVGElement,
                    Ia = function (a, b, c) {
                        var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Ja = O.documentElement || {},
                    Ka = function () {
                        var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                        return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
                    }(),
                    La = function (a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Qa(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Ma = function (a) {
                        var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                        } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
                    },
                    Na = function (a) {
                        try {
                            return a.getBBox()
                        } catch (b) {
                            return Ma.call(a, !0)
                        }
                    },
                    Oa = function (a) {
                        return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function (a, b) {
                        var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                            j = 1e5,
                            k = a.style;
                        if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Ra = S.getTransform = function (a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
                            Va(a.style, Ca)
                        }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
                            a.removeAttribute("transform")
                        }))), m
                    },
                    Sa = function (a) {
                        var b, c, d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                        if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                        else {
                            if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            c = g = 1, d = f = 0
                        }
                        k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
                    };
                j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                        var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                            x = a.style,
                            y = 1e-6,
                            z = Ba.length,
                            A = i,
                            B = {},
                            C = "transformOrigin",
                            D = Ra(a, e, !0, A.parseTransform),
                            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", -1 !== E.indexOf("%") && (m.width = _(a, "width"), m.height = _(a, "height")), O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                        else if ("object" == typeof A) {
                            if (l = {
                                    scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                    scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                    scaleZ: ja(A.scaleZ, D.scaleZ),
                                    x: ja(A.x, D.x),
                                    y: ja(A.y, D.y),
                                    z: ja(A.z, D.z),
                                    xPercent: ja(A.xPercent, D.xPercent),
                                    yPercent: ja(A.yPercent, D.yPercent),
                                    perspective: ja(A.transformPerspective, D.perspective)
                                }, p = A.directionalRotation, null != p)
                                if ("object" == typeof p)
                                    for (m in p) A[m] = p[m];
                                else A.rotation = p;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                        }
                        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
                    },
                    prefix: !0
                }), ya("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ya("borderRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            z = a.style;
                        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: qa("0px 0px 0px 0px", !1, !0)
                }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, d, f, g) {
                        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                    },
                    prefix: !0,
                    formatter: qa("0px 0px", !1, !0)
                }), ya("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || $(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ha
                }), ya("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (a) {
                        return a += "", "co" === a.substr(0, 2) ? a : ha(-1 === a.indexOf(" ") ? a + " " + a : a)
                    }
                }), ya("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ya("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ya("transformStyle", {
                    prefix: !0
                }), ya("backfaceVisibility", {
                    prefix: !0
                }), ya("userSelect", {
                    prefix: !0
                }), ya("margin", {
                    parser: ra("marginTop,marginRight,marginBottom,marginLeft")
                }), ya("padding", {
                    parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ya("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), ya("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ya("autoRound,strictUnits", {
                    parser: function (a, b, c, d, e) {
                        return e
                    }
                }), ya("border", {
                    defaultValue: "0px solid #000",
                    parser: function (a, b, c, d, f, g) {
                        var h = _(a, "borderTopWidth", e, !1, "0px"),
                            i = this.format(b).split(" "),
                            j = i[0].replace(w, "");
                        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function (a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
                    }
                }), ya("borderWidth", {
                    parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ya("float,cssFloat,styleFloat", {
                    parser: function (a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Ua = function (a) {
                    var b, c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Va = function (a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Wa = function (a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ya("className", {
                    parser: function (a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Xa = function (a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                        e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (ya("clearProps", {
                        parser: function (a, b, d, e, f) {
                            return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, z, A = a.style;
                    if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function (a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function (a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = e.r(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function (a) {
                    this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
                };
                var Ya = function (a) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function (a, b, c) {
                    var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Ya, d.data = this
                }, j._linkCSSP = function (a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._mod = function (a) {
                    for (var b = this._firstPT; b;) "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next
                }, j._kill = function (b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var Za = function (a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Za(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
                };
                return g.cascadeTo = function (a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        } return j
                }, a.activate([g]), g
            }, !0),
            function () {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function (a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = function (a) {
                        var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
                        return function (c) {
                            return (Math.round(c / a) * a * b | 0) / b
                        }
                    },
                    c = function (a, b) {
                        for (; a;) a.f || a.blob || (a.m = b || Math.round), a = a._next
                    },
                    d = a.prototype;
                d._onInitAllProps = function () {
                    var a, d, e, f, g = this._tween,
                        h = g.vars.roundProps,
                        i = {},
                        j = g._propLookup.roundProps;
                    if ("object" != typeof h || h.push)
                        for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) i[h[e]] = Math.round;
                    else
                        for (f in h) i[f] = b(h[f]);
                    for (f in i)
                        for (a = g._firstPT; a;) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
                    return !1
                }, d._add = function (a, b, c, d, e) {
                    this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b)
                }
            }(),
            function () {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function (a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function (a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function (a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
                var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function (b, c) {
                        var d = j("easing." + b, function () {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    l = a.register || function () {},
                    m = function (a, b, c, d, e) {
                        var f = j("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return l(f, a), f
                    },
                    n = function (a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    o = function (b, c) {
                        var d = j("easing." + b, function (a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function (a) {
                            return new d(a)
                        }, d
                    },
                    p = m("Back", o("BackOut", function (a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), o("BackIn", function (a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), o("BackInOut", function (a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    q = j("easing.SlowMo", function (a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    r = q.prototype = new a;
                return r.constructor = q, r.getRatio = function (a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, q.ease = new q(.7, .7), r.config = q.config = function (a, b, c) {
                    return new q(a, b, c)
                }, b = j("easing.SteppedEase", function (a, b) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function (a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                }, r.config = b.config = function (a, c) {
                    return new b(a, c)
                }, c = j("easing.ExpoScaleEase", function (a, b, c) {
                    this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c
                }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function (a) {
                    return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                }, r.config = c.config = function (a, b, d) {
                    return new c(a, b, d)
                }, d = j("easing.RoughEase", function (b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function (a, b) {
                            return a.x - b.x
                        }), h = new n(1, 1, null), m = l; --m > -1;) g = j[m], h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function (a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, r.config = function (a) {
                    return new d(a)
                }, d.ease = new d, m("Bounce", k("BounceOut", function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), k("BounceIn", function (a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), k("BounceInOut", function (a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), m("Circ", k("CircOut", function (a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), k("CircIn", function (a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), k("CircInOut", function (a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), e = function (b, c, d) {
                    var e = j("easing." + b, function (a, b) {
                            this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
                        return new e(a, b)
                    }, e
                }, m("Elastic", e("ElasticOut", function (a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function (a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                }, .3), e("ElasticInOut", function (a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)), m("Expo", k("ExpoOut", function (a) {
                    return 1 - Math.pow(2, -10 * a)
                }), k("ExpoIn", function (a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), k("ExpoInOut", function (a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), m("Sine", k("SineOut", function (a) {
                    return Math.sin(a * i)
                }), k("SineIn", function (a) {
                    return -Math.cos(a * i) + 1
                }), k("SineInOut", function (a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), j("easing.EaseLookup", {
                    find: function (b) {
                        return a.map[b]
                    }
                }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a,
            f = e[b];
        if (f) return "undefined" != typeof module && module.exports && (module.exports = f), f;
        var g, h, i, j, k, l = function (a) {
                var b, c = a.split("."),
                    d = e;
                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                return d
            },
            m = l("com.greensock"),
            n = 1e-10,
            o = function (a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            p = function () {},
            q = function () {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function (c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            r = {},
            s = function (d, f, g, h) {
                this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
                var i = [];
                this.check = function (j) {
                    for (var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
                    if (0 === q && g) {
                        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                            if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                if (d === b) {
                                    module.exports = c[b] = o;
                                    for (p in c) o[p] = c[p]
                                } else c[b] && (c[b][n] = o);
                        else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                            return o
                        });
                        for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                    }
                }, this.check(!0)
            },
            t = a._gsDefine = function (a, b, c, d) {
                return new s(a, b, c, d)
            },
            u = m._class = function (a, b, c) {
                return b = b || function () {}, t(a, [], function () {
                    return b
                }, c), b
            };
        t.globals = e;
        var v = [0, 0, 1, 1],
            w = u("easing.Ease", function (a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v
            }, !0),
            x = w.map = {},
            y = w.register = function (a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                    for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (i = w.prototype, i._calcEnd = !1, i.getRatio = function (a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
        x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
        var z = u("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        i = z.prototype, i.addEventListener = function (a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a],
                i = 0;
            for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
            h.splice(i, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            })
        }, i.removeEventListener = function (a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, i.dispatchEvent = function (a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var A = a.requestAnimationFrame,
            B = a.cancelAnimationFrame,
            C = Date.now || function () {
                return (new Date).getTime()
            },
            D = C();
        for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        u("Ticker", function (a, b) {
            var c, e, f, g, h, i = this,
                l = C(),
                m = b !== !1 && A ? "auto" : !1,
                o = 500,
                q = 33,
                r = "tick",
                s = function (a) {
                    var b, d, j = C() - D;
                    j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r)
                };
            z.call(i), i.time = i.frame = 0, i.tick = function () {
                s(!0)
            }, i.lagSmoothing = function (a, b) {
                return arguments.length ? (o = a || 1 / n, void(q = Math.min(b, o, 0))) : 1 / n > o
            }, i.sleep = function () {
                null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1))
            }, i.wake = function (a) {
                null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function (a) {
                    return setTimeout(a, 1e3 * (h - i.time) + 1 | 0)
                }, i === j && (k = !0), s(2)
            }, i.fps = function (a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c
            }, i.useRAF = function (a) {
                return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m
            }, i.fps(a), setTimeout(function () {
                "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1)
            }, 1500)
        }), i = m.Ticker.prototype = new m.events.EventDispatcher, i.constructor = m.Ticker;
        var E = u("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, Y) {
                k || j.wake();
                var c = this.vars.useFrames ? X : Y;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        j = E.ticker = new m.Ticker, i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
        var F = function () {
            k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
            var a = setTimeout(F, 2e3);
            a.unref && a.unref()
        };
        F(), i.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, i.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, i.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, i.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, i.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, i.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, i.render = function (a, b, c) {}, i.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, i.isActive = function () {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
        }, i._enabled = function (a, b) {
            return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function (a, b) {
            return this._enabled(!1, !1)
        }, i.kill = function (a, b) {
            return this._kill(a, b), this
        }, i._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, i._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, i._callback = function (a) {
            var b = this.vars,
                c = b[a],
                d = b[a + "Params"],
                e = b[a + "Scope"] || b.callbackScope || this,
                f = d ? d.length : 0;
            switch (f) {
                case 0:
                    c.call(e);
                    break;
                case 1:
                    c.call(e, d[0]);
                    break;
                case 2:
                    c.call(e, d[0], d[1]);
                    break;
                default:
                    c.apply(e, d)
            }
        }, i.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, i.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, i.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, i.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, i.totalTime = function (a, b, c) {
            if (k || j.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && $(), this.render(a, b, !1), K.length && $())
            }
            return this
        }, i.progress = i.totalProgress = function (a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }, i.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, i.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, i.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            var b, c;
            for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(),
                    this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
            return this
        }, i.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, i.paused = function (a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        var G = u("core.SimpleTimeline", function (a) {
            E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = G.prototype = new E, i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function (a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, i._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, i.render = function (a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, i.rawTime = function () {
            return k || j.wake(), this._totalTime
        };
        var H = u("TweenLite", function (b, c, d) {
                if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : H.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? W[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : W[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0])
                    for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = _(f, this, !1), 1 === i && this._siblings[e].length > 1 && ba(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = _(b, this, !1), 1 === i && this._siblings.length > 1 && ba(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)))
            }, !0),
            I = function (b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            },
            J = function (a, b) {
                var c, d = {};
                for (c in a) V[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!S[c] || S[c] && S[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        i = H.prototype = new E, i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.0.1", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function (a, b) {
            j.lagSmoothing(a, b)
        }, H.selector = a.$ || a.jQuery || function (b) {
            var c = a.$ || a.jQuery;
            return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b)
        };
        var K = [],
            L = {},
            M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            O = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            },
            P = function (a, b, c, d) {
                var e, f, g, h, i, j, k, l = [],
                    m = 0,
                    n = "",
                    o = 0;
                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0
                }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l
            },
            Q = function (a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b],
                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                    m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                    n = "string" == typeof d && "=" === d.charAt(1),
                    o = {
                        t: a,
                        p: b,
                        s: m,
                        f: "function" === k,
                        pg: 0,
                        n: e || b,
                        m: f ? "function" == typeof f ? f : Math.round : 0,
                        pr: 0,
                        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                    };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = P(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0
                }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
            },
            R = H._internals = {
                isArray: q,
                isSelector: I,
                lazyTweens: K,
                blobDif: P
            },
            S = H._plugins = {},
            T = R.tweenLookup = {},
            U = 0,
            V = R.reservedProps = {
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
            },
            W = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            X = E._rootFramesTimeline = new G,
            Y = E._rootTimeline = new G,
            Z = 30,
            $ = R.lazyRender = function () {
                var a, b = K.length;
                for (L = {}; --b > -1;) a = K[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                K.length = 0
            };
        Y._startTime = j.time, X._startTime = j.frame, Y._active = X._active = !0, setTimeout($, 1), E._updateRoot = H.render = function () {
            var a, b, c;
            if (K.length && $(), Y.render((j.time - Y._startTime) * Y._timeScale, !1, !1), X.render((j.frame - X._startTime) * X._timeScale, !1, !1), K.length && $(), j.frame >= Z) {
                Z = j.frame + (parseInt(H.autoSleep, 10) || 120);
                for (c in T) {
                    for (b = T[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete T[c]
                }
                if (c = Y._first, (!c || c._paused) && H.autoSleep && !X._first && 1 === j._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || j.sleep()
                }
            }
        }, j.addEventListener("tick", E._updateRoot);
        var _ = function (a, b, c) {
                var d, e, f = a._gsTweenID;
                if (T[f || (a._gsTweenID = f = "t" + U++)] || (T[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = T[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return T[f].tweens
            },
            aa = function (a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
            },
            ba = function (a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, k = b._startTime + n,
                    l = [],
                    m = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ca(b, 0, o), 0 === ca(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
                for (f = m; --f > -1;)
                    if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                        if (2 !== d && !aa(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    } return g
            },
            ca = function (a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n
            };
        i._init = function () {
            var a, b, c, d, e, f, g = this.vars,
                h = this._overwrittenProps,
                i = this._duration,
                j = !!g.immediateRender,
                k = g.ease;
            if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in g.startAt) e[d] = g.startAt[d];
                if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== i) return
            } else if (g.runBackwards && 0 !== i)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (j = !1), c = {};
                    for (d in g) V[d] && "autoCSS" !== d || (c[d] = g[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = g.onUpdate, this._initted = !0
        }, i._initProps = function (b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b) return !1;
            L[b._gsTweenID] && $(), this.vars.css || b.style && b !== a && b.nodeType && S.css && this.vars.autoCSS !== !1 && J(this.vars, b);
            for (g in this.vars)
                if (l = this.vars[g], V[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                else if (S[g] && (j = new S[g])._onInitTween(b, this.vars[g], this, f)) {
                for (this._firstPT = k = {
                        _next: this._firstPT,
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: g,
                        pg: 1,
                        pr: j._priority,
                        m: 0
                    }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
            } else c[g] = Q.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ba(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i)
        }, i.render = function (a, b, c) {
            var d, e, f, g, h = this._time,
                i = this._duration,
                j = this._rawPrevTime;
            if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === n && "isPause" !== this.data) && j !== a && (c = !0, j > n && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : n);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== n || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : n)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i,
                    l = this._easeType,
                    m = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, K.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === n && g !== n && (this._rawPrevTime = 0))
            }
        }, i._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((q(b) || I(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if ((l || !a) && !aa(this, c, b, l)) return !1
                    }
                    for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }, i.invalidate = function () {
            return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(Math.min(0, -this._delay))), this
        }, i._enabled = function (a, b) {
            if (k || j.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = _(d[c], this, !0);
                else this._siblings = _(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, H.to = function (a, b, c) {
            return new H(a, b, c)
        }, H.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c)
        }, H.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d)
        }, H.delayedCall = function (a, b, c, d, e) {
            return new H(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, H.set = function (a, b) {
            return new H(a, 0, b)
        }, H.getTweensOf = function (a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : H.selector(a) || a;
            var c, d, e, f;
            if ((q(a) || I(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(H.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else if (a._gsTweenID)
                for (d = _(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d || []
        }, H.killTweensOf = H.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var da = u("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = da.prototype
        }, !0);
        if (i = da.prototype, da.version = "1.19.0", da.API = 2, i._firstPT = null, i._addTween = Q, i.setRatio = O, i._kill = function (a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, i._mod = i._roundProps = function (a) {
                for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
            }, H._onPluginEvent = function (a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, da.activate = function (a) {
                for (var b = a.length; --b > -1;) a[b].API === da.API && (S[(new a[b])._propName] = a[b]);
                return !0
            }, t.plugin = function (a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                        da.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new da(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, da.activate([g]), g
            }, g = a._gsQueue) {
            for (h = 0; h < g.length; h++) g[h]();
            for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i)
        }
        k = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");;
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011â€“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

    // Detect touch support
    $.support.touch = 'ontouchend' in document;

    // Ignore browsers without touch support
    if (!$.support.touch) {
        return;
    }

    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        _mouseDestroy = mouseProto._mouseDestroy,
        touchHandled;

    /**
     * Simulate a mouse event based on a corresponding touch event
     * @param {Object} event A touch event
     * @param {String} simulatedType The corresponding mouse event
     */
    function simulateMouseEvent(event, simulatedType) {

        // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
            return;
        }

        //event.preventDefault();

        var touch = event.originalEvent.changedTouches[0],
            simulatedEvent = document.createEvent('MouseEvents');

        // Initialize the simulated mouse event using the touch event's coordinates
        simulatedEvent.initMouseEvent(
            simulatedType, // type
            true, // bubbles                    
            true, // cancelable                 
            window, // view                       
            1, // detail                     
            touch.screenX, // screenX                    
            touch.screenY, // screenY                    
            touch.clientX, // clientX                    
            touch.clientY, // clientY                    
            false, // ctrlKey                    
            false, // altKey                     
            false, // shiftKey                   
            false, // metaKey                    
            0, // button                     
            null // relatedTarget              
        );

        // Dispatch the simulated event to the target element
        event.target.dispatchEvent(simulatedEvent);
    }

    /**
     * Handle the jQuery UI widget's touchstart events
     * @param {Object} event The widget element's touchstart event
     */
    mouseProto._touchStart = function (event) {

        var self = this;

        // Ignore the event if another widget is already being handled
        if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
            return;
        }

        // Set the flag to prevent other widgets from inheriting the touch event
        touchHandled = true;

        // Track movement to determine if interaction was a click
        self._touchMoved = false;

        // Simulate the mouseover event
        simulateMouseEvent(event, 'mouseover');

        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');

        // Simulate the mousedown event
        simulateMouseEvent(event, 'mousedown');
    };

    /**
     * Handle the jQuery UI widget's touchmove events
     * @param {Object} event The document's touchmove event
     */
    mouseProto._touchMove = function (event) {

        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }

        // Interaction was not a click
        this._touchMoved = true;

        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
    };

    /**
     * Handle the jQuery UI widget's touchend events
     * @param {Object} event The document's touchend event
     */
    mouseProto._touchEnd = function (event) {

        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }

        // Simulate the mouseup event
        simulateMouseEvent(event, 'mouseup');

        // Simulate the mouseout event
        simulateMouseEvent(event, 'mouseout');

        // If the touch interaction did not move, it should trigger a click
        if (!this._touchMoved) {

            // Simulate the click event
            simulateMouseEvent(event, 'click');
        }

        // Unset the flag to allow other widgets to inherit the touch event
        touchHandled = false;
    };

    /**
     * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
     * This method extends the widget with bound touch event handlers that
     * translate touch events to mouse events and pass them to the widget's
     * original mouse event handling methods.
     */
    mouseProto._mouseInit = function () {

        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.bind({
            touchstart: $.proxy(self, '_touchStart'),
            touchmove: $.proxy(self, '_touchMove'),
            touchend: $.proxy(self, '_touchEnd')
        });

        // Call the original $.ui.mouse init method
        _mouseInit.call(self);
    };

    /**
     * Remove the touch event handlers
     */
    mouseProto._mouseDestroy = function () {

        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.unbind({
            touchstart: $.proxy(self, '_touchStart'),
            touchmove: $.proxy(self, '_touchMove'),
            touchend: $.proxy(self, '_touchEnd')
        });

        // Call the original $.ui.mouse destroy method
        _mouseDestroy.call(self);
    };

})(jQuery);
(function (factory) {
    if (typeof exports === "object") {
        factory(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        factory(jQuery)
    }
})(function ($) {
    $.extend({
        bez: function (encodedFuncName, coOrdArray) {
            if ($.isArray(encodedFuncName)) {
                coOrdArray = encodedFuncName;
                encodedFuncName = "bez_" + coOrdArray.join("_").replace(/\./g, "p")
            }
            if (typeof $.easing[encodedFuncName] !== "function") {
                var polyBez = function (p1, p2) {
                    var A = [null, null],
                        B = [null, null],
                        C = [null, null],
                        bezCoOrd = function (t, ax) {
                            C[ax] = 3 * p1[ax], B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax], A[ax] = 1 - C[ax] - B[ax];
                            return t * (C[ax] + t * (B[ax] + t * A[ax]))
                        },
                        xDeriv = function (t) {
                            return C[0] + t * (2 * B[0] + 3 * A[0] * t)
                        },
                        xForT = function (t) {
                            var x = t,
                                i = 0,
                                z;
                            while (++i < 14) {
                                z = bezCoOrd(x, 0) - t;
                                if (Math.abs(z) < .001) break;
                                x -= z / xDeriv(x)
                            }
                            return x
                        };
                    return function (t) {
                        return bezCoOrd(xForT(t), 1)
                    }
                };
                $.easing[encodedFuncName] = function (x, t, b, c, d) {
                    return c * polyBez([coOrdArray[0], coOrdArray[1]], [coOrdArray[2], coOrdArray[3]])(t / d) + b
                }
            }
            return encodedFuncName
        }
    })
});;
/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages = function () {
    "use strict";

    function t(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }

    function e(t) {
        if (t.srcset && !m && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function i(t) {
        for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = l.exec(i));) r[e[1]] = e[2];
        return r
    }

    function r(e, i, r) {
        var n = t(i || 1, r || 0);
        p.call(e, "src") !== n && b.call(e, "src", n)
    }

    function n(t, e) {
        t.naturalWidth ? e(t) : setTimeout(n, 100, t, e)
    }

    function c(t) {
        var c = i(t),
            o = t[a];
        if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
            if ("fill" === c["object-fit"]) return;
            if (!o.skipTest && g && !c["object-position"]) return
        }
        if (!o.img) {
            o.img = new Image(t.width, t.height), o.img.srcset = p.call(t, "data-ofi-srcset") || t.srcset, o.img.src = p.call(t, "data-ofi-src") || t.src, b.call(t, "data-ofi-src", t.src), t.srcset && b.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                s(t)
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) {
            r(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function s(t) {
        var e = {
            get: function (e) {
                return t[a].img[e || "src"]
            },
            set: function (e, i) {
                return t[a].img[i || "src"] = e, b.call(t, "data-ofi-" + i, e), c(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function () {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function () {
                return e.get("srcset")
            },
            set: function (t) {
                return e.set(t, "srcset")
            }
        })
    }

    function o(t, e) {
        var i = !h && !t;
        if (e = e || {}, t = t || "img", f && !e.skipTest || !d) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var r = 0; r < t.length; r++) t[r][a] = t[r][a] || {
            skipTest: e.skipTest
        }, c(t[r]);
        i && (document.body.addEventListener("load", function (t) {
            "IMG" === t.target.tagName && o(t.target, {
                skipTest: e.skipTest
            })
        }, !0), h = !0, t = "img"), e.watchMQ && window.addEventListener("resize", o.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var a = "bfred-it:object-fit-images",
        l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        u = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        g = "object-fit" in u.style,
        f = "object-position" in u.style,
        d = "background-size" in u.style,
        m = "string" == typeof u.currentSrc,
        p = u.getAttribute,
        b = u.setAttribute,
        h = !1;
    return o.supportsObjectFit = g, o.supportsObjectPosition = f,
        function () {
            function t(t, e) {
                return t[a] && t[a].img && ("src" === e || "srcset" === e) ? t[a].img : t
            }
            f || (HTMLImageElement.prototype.getAttribute = function (e) {
                return p.call(t(this, e), e)
            }, HTMLImageElement.prototype.setAttribute = function (e, i) {
                return b.call(t(this, e), e, String(i))
            })
        }(), o
}();
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function (a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
        var b, c = document.createElement("source"),
            d = function (a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () {
                    a.sizes = d
                }))
            },
            e = function () {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function () {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function () {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function (a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function () {
            A[b] = !1, ba()
        }, d.onload = function () {
            A[b] = 1 === d.width, ba()
        }, d.src = c, "pending"
    }

    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                } return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    } m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l) return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            } return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = !1,
        u = function () {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = {
            algorithm: ""
        },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = {
            px: 1,
            "in": 96
        },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $ = function (a) {
            var b = {};
            return function (c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        _ = function () {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function () {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = $(function (a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function (b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];
                    else try {
                        N[b] = new Function("e", c(b))(Q)
                    } catch (f) {}
                return N[b]
            }
        }(),
        aa = function (a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        ba = function (a) {
            if (t) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
    o = a.console && console.warn ? function (a) {
        console.warn(a)
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function (a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? ! function () {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function () {
                var a = d.width;
                2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
            };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) {
        return R.href = a, R.href
    }), s.qsa = function (a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : []
    }, s.matchesMedia = function () {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function (a) {
        return a ? _(a) : !0
    }, s.calcLength = function (a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function (a) {
        return a ? A[a] : !0
    }, s.parseSize = $(function (a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function (a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function () {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function (a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }, s.setRes = function (a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = aa, s.applySetCandidate = function (a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    } h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function (a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function (a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            } return e
    }, s.parseSets = function (a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function (a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function () {
        (!S || M || P !== a.devicePixelRatio) && f()
    }, s.supPicture ? (ba = u, s.fillImg = u) : ! function () {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function () {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function (a, b) {
                var c, d, e = function () {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function () {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = z.clientHeight,
            i = function () {
                M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
            };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function (a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length;) a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () {
        return ba
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ãngel PÃ©rez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */
! function (t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(jQuery, window, document)
}(function (t, e, n, o) {
    "use strict";
    if (!e.history.pushState) return t.fn.smoothState = function () {
        return this
    }, void(t.fn.smoothState.options = {});
    if (!t.fn.smoothState) {
        var r = t("html, body"),
            a = e.console,
            i = {
                debug: !1,
                anchors: "a",
                hrefRegex: "",
                forms: "form",
                allowFormCaching: !1,
                repeatDelay: 500,
                blacklist: ".no-smoothState",
                prefetch: !1,
                prefetchOn: "mouseover touchstart",
                prefetchBlacklist: ".no-prefetch",
                locationHeader: "X-SmoothState-Location",
                cacheLength: 0,
                loadingClass: "is-loading",
                scroll: !0,
                alterRequest: function (t) {
                    return t
                },
                alterChangeState: function (t, e, n) {
                    return t
                },
                onBefore: function (t, e) {},
                onStart: {
                    duration: 0,
                    render: function (t) {}
                },
                onProgress: {
                    duration: 0,
                    render: function (t) {}
                },
                onReady: {
                    duration: 0,
                    render: function (t, e) {
                        t.html(e)
                    }
                },
                onAfter: function (t, e) {}
            },
            s = {
                isExternal: function (t) {
                    var n = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                    return "string" == typeof n[1] && n[1].length > 0 && n[1].toLowerCase() !== e.location.protocol ? !0 : "string" == typeof n[2] && n[2].length > 0 && n[2].replace(new RegExp(":(" + {
                        "http:": 80,
                        "https:": 443
                    } [e.location.protocol] + ")?$"), "") !== e.location.host
                },
                stripHash: function (t) {
                    return t.replace(/#.*/, "")
                },
                isHash: function (t, n) {
                    n = n || e.location.href;
                    var o = t.indexOf("#") > -1,
                        r = s.stripHash(t) === s.stripHash(n);
                    return o && r
                },
                translate: function (e) {
                    var n = {
                        dataType: "html",
                        type: "GET"
                    };
                    return e = "string" == typeof e ? t.extend({}, n, {
                        url: e
                    }) : t.extend({}, n, e)
                },
                shouldLoadAnchor: function (t, e, n) {
                    var r = t.prop("href");
                    return !(s.isExternal(r) || s.isHash(r) || t.is(e) || t.prop("target") || typeof n !== o && "" !== n && -1 === t.prop("href").search(n))
                },
                clearIfOverCapacity: function (t, e) {
                    return Object.keys || (Object.keys = function (t) {
                        var e, n = [];
                        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                        return n
                    }), Object.keys(t).length > e && (t = {}), t
                },
                storePageIn: function (e, n, o, r, a, i) {
                    var s = t("<html></html>").append(t(o));
                    return "undefined" == typeof a && (a = {}), "undefined" == typeof i && (i = n), e[n] = {
                        status: "loaded",
                        title: s.find("title").first().text(),
                        html: s.find("#" + r),
                        doc: o,
                        state: a,
                        destUrl: i
                    }, e
                },
                triggerAllAnimationEndEvent: function (e, n) {
                    n = " " + n || "";
                    var o = 0,
                        r = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
                        a = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                        i = "allanimationend",
                        l = function (n) {
                            t(n.delegateTarget).is(e) && (n.stopPropagation(), o++)
                        },
                        u = function (n) {
                            t(n.delegateTarget).is(e) && (n.stopPropagation(), o--, 0 === o && e.trigger(i))
                        };
                    e.on(r, l), e.on(a, u), e.on("allanimationend" + n, function () {
                        o = 0, s.redraw(e)
                    })
                },
                redraw: function (t) {
                    t.height()
                }
            },
            l = function (n) {
                if (null !== n.state) {
                    var o = e.location.href,
                        r = t("#" + n.state.id),
                        a = r.data("smoothState"),
                        i = a.href !== o && !s.isHash(o, a.href),
                        l = n.state !== a.cache[a.href].state;
                    (i || l) && (l && a.clear(a.href), a.load(o, !1))
                }
            },
            u = function (i, l) {
                var u = t(i),
                    c = u.prop("id"),
                    f = null,
                    d = !1,
                    h = {},
                    p = {},
                    g = e.location.href,
                    m = function (t) {
                        t = t || !1, t && h.hasOwnProperty(t) ? delete h[t] : h = {}, u.data("smoothState").cache = h
                    },
                    y = function (e, n) {
                        n = n || t.noop;
                        var o = s.translate(e);
                        if (h = s.clearIfOverCapacity(h, l.cacheLength), !h.hasOwnProperty(o.url) || "undefined" != typeof o.data) {
                            h[o.url] = {
                                status: "fetching"
                            };
                            var r = t.ajax(o);
                            r.done(function (t) {
                                s.storePageIn(h, o.url, t, c), u.data("smoothState").cache = h
                            }), r.fail(function () {
                                h[o.url].status = "error"
                            }), l.locationHeader && r.always(function (t, e, n) {
                                var r = t.statusCode ? t : n,
                                    a = r.getResponseHeader(l.locationHeader);
                                a && (h[o.url].destUrl = a)
                            }), n && r.always(n)
                        }
                    },
                    v = function () {
                        if (f) {
                            var e = t(f, u);
                            if (e.length) {
                                var n = e.offset().top;
                                r.scrollTop(n)
                            }
                            f = null
                        }
                    },
                    S = function (o) {
                        var i = "#" + c,
                            s = h[o] ? t(h[o].html.html()) : null;
                        s.length ? (n.title = h[o].title, u.data("smoothState").href = o, l.loadingClass && r.removeClass(l.loadingClass), l.onReady.render(u, s), u.one("ss.onReadyEnd", function () {
                            d = !1, l.onAfter(u, s), l.scroll && v(), O(u)
                        }), e.setTimeout(function () {
                            u.trigger("ss.onReadyEnd")
                        }, l.onReady.duration)) : !s && l.debug && a ? a.warn("No element with an id of " + i + " in response from " + o + " in " + h) : e.location = o
                    },
                    w = function (t, n, o) {
                        var i = s.translate(t);
                        "undefined" == typeof n && (n = !0), "undefined" == typeof o && (o = !0);
                        var f = !1,
                            d = !1,
                            g = {
                                loaded: function () {
                                    var t = f ? "ss.onProgressEnd" : "ss.onStartEnd";
                                    if (d && f ? d && S(i.url) : u.one(t, function () {
                                            S(i.url), o || m(i.url)
                                        }), n) {
                                        var r = h[i.url].destUrl;
                                        p = l.alterChangeState({
                                            id: c
                                        }, h[i.url].title, r), h[i.url].state = p, e.history.pushState(p, h[i.url].title, r)
                                    }
                                    d && !o && m(i.url)
                                },
                                fetching: function () {
                                    f || (f = !0, u.one("ss.onStartEnd", function () {
                                        l.loadingClass && r.addClass(l.loadingClass), l.onProgress.render(u), e.setTimeout(function () {
                                            u.trigger("ss.onProgressEnd"), d = !0
                                        }, l.onProgress.duration)
                                    })), e.setTimeout(function () {
                                        h.hasOwnProperty(i.url) && g[h[i.url].status]()
                                    }, 10)
                                },
                                error: function () {
                                    l.debug && a ? a.log("There was an error loading: " + i.url) : e.location = i.url
                                }
                            };
                        h.hasOwnProperty(i.url) || y(i), l.onStart.render(u), e.setTimeout(function () {
                            l.scroll && r.scrollTop(0), u.trigger("ss.onStartEnd")
                        }, l.onStart.duration), g[h[i.url].status]()
                    },
                    E = function (e) {
                        var n, o = t(e.currentTarget);
                        s.shouldLoadAnchor(o, l.blacklist, l.hrefRegex) && !d && (e.stopPropagation(), n = s.translate(o.prop("href")), n = l.alterRequest(n), y(n))
                    },
                    b = function (e) {
                        var n = t(e.currentTarget);
                        if (!e.metaKey && !e.ctrlKey && s.shouldLoadAnchor(n, l.blacklist, l.hrefRegex) && (e.stopPropagation(), e.preventDefault(), !T())) {
                            A();
                            var o = s.translate(n.prop("href"));
                            d = !0, f = n.prop("hash"), o = l.alterRequest(o), l.onBefore(n, u), w(o)
                        }
                    },
                    C = function (e) {
                        var n = t(e.currentTarget);
                        if (!n.is(l.blacklist) && (e.preventDefault(), e.stopPropagation(), !T())) {
                            A();
                            var r = {
                                url: n.prop("action"),
                                data: n.serialize(),
                                type: n.prop("method")
                            };
                            d = !0, r = l.alterRequest(r), "get" === r.type.toLowerCase() && (r.url = r.url + "?" + r.data), l.onBefore(n, u), w(r, o, l.allowFormCaching)
                        }
                    },
                    P = 0,
                    T = function () {
                        var t = null === l.repeatDelay,
                            e = parseInt(Date.now()) > P;
                        return !(t || e)
                    },
                    A = function () {
                        P = parseInt(Date.now()) + parseInt(l.repeatDelay)
                    },
                    O = function (t) {
                        l.anchors && l.prefetch && t.find(l.anchors).not(l.prefetchBlacklist).on(l.prefetchOn, null, E)
                    },
                    R = function (t) {
                        l.anchors && (t.on("click", l.anchors, b), O(t)), l.forms && t.on("submit", l.forms, C)
                    },
                    x = function () {
                        var t = u.prop("class");
                        u.removeClass(t), s.redraw(u), u.addClass(t)
                    };
                return l = t.extend({}, t.fn.smoothState.options, l), null === e.history.state ? (p = l.alterChangeState({
                    id: c
                }, n.title, g), e.history.replaceState(p, n.title, g)) : p = {}, s.storePageIn(h, g, n.documentElement.outerHTML, c, p), s.triggerAllAnimationEndEvent(u, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), R(u), {
                    href: g,
                    cache: h,
                    clear: m,
                    load: w,
                    fetch: y,
                    restartCSSAnimations: x
                }
            },
            c = function (e) {
                return this.each(function () {
                    var n = this.tagName.toLowerCase();
                    this.id && "body" !== n && "html" !== n && !t.data(this, "smoothState") ? t.data(this, "smoothState", new u(this, e)) : !this.id && a ? a.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== n && "html" !== n || !a || a.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                })
            };
        e.onpopstate = l, t.smoothStateUtility = s, t.fn.smoothState = c, t.fn.smoothState.options = i
    }
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof (index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler(slideTo);

        }

    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add(_.$nextArrow)

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides =
            _.$slider
            .children(_.options.slide + ':not(.slick-cloned)')
            .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function () {
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)',
                function (event) {

                    event.stopImmediatePropagation();
                    var $sf = $(this);

                    setTimeout(function () {

                        if (_.options.pauseOnFocus) {
                            _.focussed = $sf.is(':focus');
                            _.autoPlay();
                        }

                    }, 0);

                });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slideCount * -1;
            counter = _.options.slideCount * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function () {

        return this;

    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                    $(this).attr({
                        'role': 'presentation',
                        'aria-selected': 'false',
                        'aria-controls': 'navigation' + _.instanceUid + i + '',
                        'id': 'slick-slide' + _.instanceUid + i + ''
                    });
                })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image
                        .animate({
                            opacity: 0
                        }, 100, function () {
                            image
                                .attr('src', imageSource)
                                .animate({
                                    opacity: 1
                                }, 200, function () {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function () {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image
                    .attr('src', imageSource)
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);

                } else {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [_]);

        }

    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function (a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });

        }

    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides =
            _.$slideTrack
            .children(_.options.slide)
            .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function () {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this,
                l, item, option, value, refresh = false,
                type;

            if ($.type(arguments[0]) === 'object') {

                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ($.type(arguments[0]) === 'string') {

                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                    type = 'responsive';

                } else if (typeof arguments[1] !== 'undefined') {

                    type = 'single';

                }

            }

            if (type === 'single') {

                _.options[option] = value;


            } else if (type === 'multiple') {

                $.each(option, function (opt, val) {

                    _.options[opt] = val;

                });


            } else if (type === 'responsive') {

                for (item in value) {

                    if ($.type(_.options.responsive) !== 'array') {

                        _.options.responsive = [value[item]];

                    } else {

                        l = _.options.responsive.length - 1;

                        // loop through the responsive object and splice out duplicates.
                        while (l >= 0) {

                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                                _.options.responsive.splice(l, 1);

                            }

                            l--;

                        }

                        _.options.responsive.push(value[item]);

                    }

                }

            }

            if (refresh) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
            $(event.target) :
            $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function () {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                        _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                        _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                        _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                        _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);

            }

        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*! PlainDraggable v2.5.0 (c) anseki https://anseki.github.io/plain-draggable/ */
var PlainDraggable = function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";

    function r(t) {
        return t.substr(0, 1).toUpperCase() + t.substr(1)
    }
    n.r(e);
    var o, i, a, l, u = ["webkit", "moz", "ms", "o"],
        s = u.reduce(function (t, e) {
            return t.push(e), t.push(r(e)), t
        }, []),
        d = u.map(function (t) {
            return "-" + t + "-"
        }),
        c = (l = void 0, function () {
            return l = l || document.createElement("div").style
        }),
        f = (i = new RegExp("^(?:" + u.join("|") + ")(.)", "i"), a = /[A-Z]/, function (t) {
            return "float" === (t = (t + "").replace(/\s/g, "").replace(/-([\da-z])/gi, function (t, e) {
                return e.toUpperCase()
            }).replace(i, function (t, e) {
                return a.test(e) ? e.toLowerCase() : t
            })).toLowerCase() ? "cssFloat" : t
        }),
        p = (o = new RegExp("^(?:" + d.join("|") + ")", "i"), function (t) {
            return (null != t ? t + "" : "").replace(/\s/g, "").replace(o, "")
        }),
        m = function (t, e) {
            var n = c();
            return t = t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            }), n.setProperty(t, e), null != n[t] && n.getPropertyValue(t) === e
        },
        v = {},
        g = {};

    function y(t) {
        if ((t = f(t)) && null == v[t]) {
            var e = c();
            if (null != e[t]) v[t] = t;
            else {
                var n = r(t);
                s.some(function (r) {
                    var o = r + n;
                    return null != e[o] && (v[t] = o, !0)
                }) || (v[t] = !1)
            }
        }
        return v[t] || void 0
    }
    var h = {
            getName: y,
            getValue: function (t, e) {
                var n = void 0;
                return (t = y(t)) ? (g[t] = g[t] || {}, (Array.isArray(e) ? e : [e]).some(function (e) {
                    return e = p(e), null != g[t][e] ? !1 !== g[t][e] && (n = g[t][e], !0) : m(t, e) ? (n = g[t][e] = e, !0) : !!d.some(function (r) {
                        var o = r + e;
                        return !!m(t, o) && (n = g[t][e] = o, !0)
                    }) || (g[t][e] = !1, !1)
                }), "string" == typeof n ? n : void 0) : n
            }
        },
        x = 500,
        w = [],
        b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return setTimeout(t, 1e3 / 60)
        },
        S = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return clearTimeout(t)
        },
        E = Date.now(),
        B = void 0;

    function T() {
        var t = void 0,
            e = void 0;
        B && (S.call(window, B), B = null), w.forEach(function (e) {
            var n;
            (n = e.event) && (e.event = null, e.listener(n), t = !0)
        }), t ? (E = Date.now(), e = !0) : Date.now() - E < x && (e = !0), e && (B = b.call(window, T))
    }

    function O(t) {
        var e = -1;
        return w.some(function (n, r) {
            return n.listener === t && (e = r, !0)
        }), e
    }
    var C = {
        add: function (t) {
            var e = void 0;
            return -1 === O(t) ? (w.push(e = {
                listener: t
            }), function (t) {
                e.event = t, B || T()
            }) : null
        },
        remove: function (t) {
            var e;
            (e = O(t)) > -1 && (w.splice(e, 1), !w.length && B && (S.call(window, B), B = null))
        }
    };

    function _(t) {
        return (t + "").trim()
    }

    function k(t, e) {
        e.setAttribute("class", t.join(" "))
    }

    function L(t) {
        return !L.ignoreNative && t.classList || (e = (t.getAttribute("class") || "").trim().split(/\s+/).filter(function (t) {
            return !!t
        }), n = {
            length: e.length,
            item: function (t) {
                return e[t]
            },
            contains: function (t) {
                return -1 !== e.indexOf(_(t))
            },
            add: function () {
                return function (t, e, n) {
                    n.filter(function (e) {
                        return !(!(e = _(e)) || -1 !== t.indexOf(e) || (t.push(e), 0))
                    }).length && k(t, e)
                }(e, t, Array.prototype.slice.call(arguments)), L.methodChain ? n : void 0
            },
            remove: function () {
                return function (t, e, n) {
                    n.filter(function (e) {
                        var n = void 0;
                        return !(!(e = _(e)) || -1 === (n = t.indexOf(e)) || (t.splice(n, 1), 0))
                    }).length && k(t, e)
                }(e, t, Array.prototype.slice.call(arguments)), L.methodChain ? n : void 0
            },
            toggle: function (n, r) {
                return function (t, e, n, r) {
                    var o = t.indexOf(n = _(n));
                    return -1 !== o ? !!r || (t.splice(o, 1), k(t, e), !1) : !1 !== r && (t.push(n), k(t, e), !0)
                }(e, t, n, r)
            },
            replace: function (r, o) {
                return function (t, e, n, r) {
                    var o = void 0;
                    (n = _(n)) && (r = _(r)) && n !== r && -1 !== (o = t.indexOf(n)) && (t.splice(o, 1), -1 === t.indexOf(r) && t.push(r), k(t, e))
                }(e, t, r, o), L.methodChain ? n : void 0
            }
        });
        var e, n
    }
    L.methodChain = !0;
    var A = L,
        D = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    A.ignoreNative = !0;
    var H, I, W, R = 9e3,
        j = 20,
        M = "tl",
        z = "both",
        X = "both",
        Y = "containment",
        P = ["tl", "tr", "bl", "br"],
        V = ["start", "end"],
        N = ["inside", "outside"],
        G = [40, 200, 1e3],
        U = [100, 40, 0],
        q = !window.chrome && "WebkitAppearance" in document.documentElement.style,
        Z = "MozAppearance" in document.documentElement.style,
        $ = (H = {}.toString, I = {}.hasOwnProperty.toString, W = I.call(Object), function (t) {
            var e = void 0,
                n = void 0;
            return t && "[object Object]" === H.call(t) && (!(e = Object.getPrototypeOf(t)) || (n = e.hasOwnProperty("constructor") && e.constructor) && "function" == typeof n && I.call(n) === W)
        }),
        J = Number.isFinite || function (t) {
            return "number" == typeof t && window.isFinite(t)
        },
        K = {},
        Q = {},
        tt = 0,
        et = void 0,
        nt = void 0,
        rt = void 0,
        ot = void 0,
        it = void 0,
        at = void 0,
        lt = void 0,
        ut = void 0,
        st = void 0,
        dt = void 0,
        ct = q ? ["all-scroll", "move"] : ["grab", "all-scroll", "move"],
        ft = q ? "move" : ["grabbing", "move"],
        pt = "plain-draggable",
        mt = "plain-draggable-dragging",
        vt = "plain-draggable-moving",
        gt = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function () {
                gt = !0
            }
        }))
    } catch (t) {}

    function yt(t, e, n, r) {
        t.addEventListener(e, n, gt ? r : r.capture)
    }
    var ht = {},
        xt = function (t) {
            t.preventDefault()
        },
        wt = {
            clientX: 0,
            clientY: 0
        },
        bt = {},
        St = 0,
        Et = 0,
        Bt = void 0,
        Tt = void 0;
    ht.regStartHandler = function (t) {
        return bt[++St] = function (e) {
            var n = "mousedown" === e.type ? "mouse" : "touch",
                r = "mouse" === n ? e : e.targetTouches[0] || e.touches[0],
                o = Date.now();
            Bt && n !== Bt && o - Et < 400 || t(r) && (Bt = n, wt.clientX = r.clientX, wt.clientY = r.clientY, Et = o, e.preventDefault())
        }, St
    }, ht.unregStartHandler = function (t) {
        delete bt[t]
    }, ht.addStartHandler = function (t, e) {
        yt(t, "mousedown", bt[e], {
            capture: !0,
            passive: !1
        }), yt(t, "touchstart", bt[e], {
            capture: !0,
            passive: !1
        }), yt(t, "dragstart", xt, {
            capture: !0,
            passive: !1
        })
    }, ht.removeStartHandler = function (t, e) {
        t.removeEventListener("mousedown", bt[e], !0), t.removeEventListener("touchstart", bt[e], !0), t.removeEventListener("dragstart", xt, !0)
    }, ht.addMoveHandler = function (t, e) {
        var n = C.add(function (t) {
            var n = "mousemove" === t.type ? "mouse" : "touch",
                r = "mouse" === n ? t : t.targetTouches[0] || t.touches[0];
            n === Bt && (e(r), wt.clientX = r.clientX, wt.clientY = r.clientY, t.preventDefault())
        });
        yt(t, "mousemove", n, {
            capture: !0,
            passive: !1
        }), yt(t, "touchmove", n, {
            capture: !0,
            passive: !1
        }), Tt = e
    }, ht.addEndHandler = function (t, e) {
        function n(t) {
            ("mouseup" === t.type ? "mouse" : "touch") === Bt && (e(), Bt = null, t.preventDefault())
        }
        yt(t, "mouseup", n, {
            capture: !0,
            passive: !1
        }), yt(t, "touchend", n, {
            capture: !0,
            passive: !1
        }), yt(t, "touchcancel", n, {
            capture: !0,
            passive: !1
        })
    }, ht.callMoveHandler = function () {
        Tt && Tt(wt)
    };
    var Ot = {},
        Ct = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return setTimeout(t, 1e3 / 60)
        },
        _t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return clearTimeout(t)
        },
        kt = function () {
            var t = Date.now();
            ["x", "y"].forEach(function (e) {
                var n = At[e];
                if (n) {
                    var r = t - n.lastFrameTime,
                        o = Ft(Dt, e),
                        i = null != n.lastValue && Math.abs(n.lastValue - o) < 10 ? n.lastValue : o;
                    if (-1 === n.dir ? i > n.min : i < n.max) {
                        var a = i + n.speed * r * n.dir;
                        a < n.min ? a = n.min : a > n.max && (a = n.max), Ft(Dt, e, a), n.lastValue = a
                    }
                    n.lastFrameTime = t
                }
            })
        },
        Lt = function t() {
            _t.call(window, Ht), kt(), Ht = Ct.call(window, t)
        },
        At = {},
        Dt = void 0,
        Ft = void 0,
        Ht = void 0;

    function It(t, e, n) {
        return null != n && ("x" === e ? t.scrollTo(n, t.pageYOffset) : t.scrollTo(t.pageXOffset, n)), "x" === e ? t.pageXOffset : t.pageYOffset
    }

    function Wt(t, e, n) {
        var r = "x" === e ? "scrollLeft" : "scrollTop";
        return null != n && (t[r] = n), t[r]
    }

    function Rt(t) {
        return t ? $(t) ? Object.keys(t).reduce(function (e, n) {
            return e[n] = Rt(t[n]), e
        }, {}) : Array.isArray(t) ? t.map(Rt) : t : t
    }

    function jt(t, e) {
        var n = void 0,
            r = void 0;
        return (void 0 === t ? "undefined" : F(t)) !== (void 0 === e ? "undefined" : F(e)) || (n = $(t) ? "obj" : Array.isArray(t) ? "array" : "") != ($(e) ? "obj" : Array.isArray(e) ? "array" : "") || ("obj" === n ? jt(r = Object.keys(t).sort(), Object.keys(e).sort()) || r.some(function (n) {
            return jt(t[n], e[n])
        }) : "array" === n ? t.length !== e.length || t.some(function (t, n) {
            return jt(t, e[n])
        }) : t !== e)
    }

    function Mt(t) {
        return !(!t || t.nodeType !== Node.ELEMENT_NODE || "function" != typeof t.getBoundingClientRect || t.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_DISCONNECTED)
    }

    function zt(t) {
        if (!$(t)) return null;
        var e = void 0;
        if (!J(e = t.left) && !J(e = t.x)) return null;
        if (t.left = t.x = e, !J(e = t.top) && !J(e = t.y)) return null;
        if (t.top = t.y = e, J(t.width) && t.width >= 0) t.right = t.left + t.width;
        else {
            if (!(J(t.right) && t.right >= t.left)) return null;
            t.width = t.right - t.left
        }
        if (J(t.height) && t.height >= 0) t.bottom = t.top + t.height;
        else {
            if (!(J(t.bottom) && t.bottom >= t.top)) return null;
            t.height = t.bottom - t.top
        }
        return t
    }

    function Xt(t) {
        return J(t) ? {
            value: t,
            isRatio: !1
        } : "string" == typeof t ? function (t) {
            var e = /^(.+?)(%)?$/.exec(t),
                n = void 0,
                r = void 0;
            return e && J(n = parseFloat(e[1])) ? {
                value: (r = !(!e[2] || !n)) ? n / 100 : n,
                isRatio: r
            } : null
        }(t.replace(/\s/g, "")) : null
    }

    function Yt(t) {
        return t.isRatio ? 100 * t.value + "%" : t.value
    }

    function Pt(t, e, n) {
        return "number" == typeof t ? t : e + t.value * (t.isRatio ? n : 1)
    }

    function Vt(t) {
        if (!$(t)) return null;
        var e = void 0;
        if (!(e = Xt(t.left)) && !(e = Xt(t.x))) return null;
        if (t.left = t.x = e, !(e = Xt(t.top)) && !(e = Xt(t.y))) return null;
        if (t.top = t.y = e, (e = Xt(t.width)) && e.value >= 0) t.width = e, delete t.right;
        else {
            if (!(e = Xt(t.right))) return null;
            t.right = e, delete t.width
        }
        if ((e = Xt(t.height)) && e.value >= 0) t.height = e, delete t.bottom;
        else {
            if (!(e = Xt(t.bottom))) return null;
            t.bottom = e, delete t.height
        }
        return t
    }

    function Nt(t) {
        return Object.keys(t).reduce(function (e, n) {
            return e[n] = Yt(t[n]), e
        }, {})
    }

    function Gt(t, e) {
        var n = {
                left: "x",
                right: "x",
                x: "x",
                width: "x",
                top: "y",
                bottom: "y",
                y: "y",
                height: "y"
            },
            r = {
                x: e.left,
                y: e.top
            },
            o = {
                x: e.width,
                y: e.height
            };
        return zt(Object.keys(t).reduce(function (e, i) {
            return e[i] = Pt(t[i], "width" === i || "height" === i ? 0 : r[n[i]], o[n[i]]), e
        }, {}))
    }

    function Ut(t, e) {
        var n = t.getBoundingClientRect(),
            r = {
                left: n.left,
                top: n.top,
                width: n.width,
                height: n.height
            };
        if (r.left += window.pageXOffset, r.top += window.pageYOffset, e) {
            var o = window.getComputedStyle(t, ""),
                i = parseFloat(o.borderTopWidth) || 0,
                a = parseFloat(o.borderRightWidth) || 0,
                l = parseFloat(o.borderBottomWidth) || 0,
                u = parseFloat(o.borderLeftWidth) || 0;
            r.left += u, r.top += i, r.width -= u + a, r.height -= i + l
        }
        return zt(r)
    }

    function qt(t, e) {
        null == ot && (!1 !== ct && (ot = h.getValue("cursor", ct)), null == ot && (ot = !1)), t.style.cursor = !1 === ot ? e : ot
    }

    function Zt(t) {
        null == it && (!1 !== ft && (it = h.getValue("cursor", ft)), null == it && (it = !1)), !1 !== it && (t.style.cursor = it)
    }

    function $t(t, e, n) {
        var r = t.svgPoint;
        return r.x = e, r.y = n, r.matrixTransform(t.svgCtmElement.getScreenCTM().inverse())
    }

    function Jt(t, e) {
        var n = t.elementBBox;
        if (e.left !== n.left || e.top !== n.top) {
            var r = t.htmlOffset;
            return t.elementStyle[ut] = "translate(" + (e.left + r.left) + "px, " + (e.top + r.top) + "px)", !0
        }
        return !1
    }

    function Kt(t, e) {
        var n = t.elementBBox,
            r = t.elementStyle,
            o = t.htmlOffset,
            i = !1;
        return e.left !== n.left && (r.left = e.left + o.left + "px", i = !0), e.top !== n.top && (r.top = e.top + o.top + "px", i = !0), i
    }

    function Qt(t, e) {
        var n = t.elementBBox;
        if (e.left !== n.left || e.top !== n.top) {
            var r = t.svgOffset,
                o = t.svgOriginBBox,
                i = $t(t, e.left - window.pageXOffset, e.top - window.pageYOffset);
            return t.svgTransform.setTranslate(i.x + r.x - o.x, i.y + r.y - o.y), !0
        }
        return !1
    }

    function te(t, e, n) {
        var r = t.elementBBox;

        function o() {
            t.minLeft >= t.maxLeft ? e.left = r.left : e.left < t.minLeft ? e.left = t.minLeft : e.left > t.maxLeft && (e.left = t.maxLeft), t.minTop >= t.maxTop ? e.top = r.top : e.top < t.minTop ? e.top = t.minTop : e.top > t.maxTop && (e.top = t.maxTop)
        }
        if (o(), n) {
            if (!1 === n(e)) return !1;
            o()
        }
        var i = t.moveElm(t, e);
        return i && (t.elementBBox = zt({
            left: e.left,
            top: e.top,
            width: r.width,
            height: r.height
        })), i
    }

    function ee(t) {
        var e = t.element,
            n = t.elementStyle,
            r = Ut(e),
            o = ["display", "marginTop", "marginBottom", "width", "height"];
        o.unshift(ut);
        var i = n[lt];
        n[lt] = "none";
        var a = Ut(e);
        t.orgStyle ? o.forEach(function (e) {
            null != t.lastStyle[e] && n[e] !== t.lastStyle[e] || (n[e] = t.orgStyle[e])
        }) : (t.orgStyle = o.reduce(function (t, e) {
            return t[e] = n[e] || "", t
        }, {}), t.lastStyle = {});
        var l = Ut(e),
            u = window.getComputedStyle(e, "");
        "inline" === u.display && (n.display = "inline-block", ["Top", "Bottom"].forEach(function (t) {
            var e = parseFloat(u["padding" + t]);
            n["margin" + t] = e ? "-" + e + "px" : "0"
        })), n[ut] = "translate(0, 0)";
        var s = Ut(e),
            d = t.htmlOffset = {
                left: s.left ? -s.left : 0,
                top: s.top ? -s.top : 0
            };
        return n[ut] = "translate(" + (r.left + d.left) + "px, " + (r.top + d.top) + "px)", ["width", "height"].forEach(function (r) {
            s[r] !== l[r] && (n[r] = l[r] + "px", (s = Ut(e))[r] !== l[r] && (n[r] = l[r] - (s[r] - l[r]) + "px")), t.lastStyle[r] = n[r]
        }), e.offsetWidth, n[lt] = i, a.left === r.left && a.top === r.top || (n[ut] = "translate(" + (a.left + d.left) + "px, " + (a.top + d.top) + "px)"), a
    }

    function ne(t) {
        var e = t.element,
            n = t.elementStyle,
            r = Ut(e),
            o = ["position", "marginTop", "marginRight", "marginBottom", "marginLeft", "width", "height"],
            i = n[lt];
        n[lt] = "none";
        var a = Ut(e);
        t.orgStyle ? o.forEach(function (e) {
            null != t.lastStyle[e] && n[e] !== t.lastStyle[e] || (n[e] = t.orgStyle[e])
        }) : (t.orgStyle = o.reduce(function (t, e) {
            return t[e] = n[e] || "", t
        }, {}), t.lastStyle = {});
        var l = Ut(e);
        n.position = "absolute", n.left = n.top = n.margin = "0";
        var u = Ut(e),
            s = t.htmlOffset = {
                left: u.left ? -u.left : 0,
                top: u.top ? -u.top : 0
            };
        return n.left = r.left + s.left + "px", n.top = r.top + s.top + "px", ["width", "height"].forEach(function (r) {
            u[r] !== l[r] && (n[r] = l[r] + "px", (u = Ut(e))[r] !== l[r] && (n[r] = l[r] - (u[r] - l[r]) + "px")), t.lastStyle[r] = n[r]
        }), e.offsetWidth, n[lt] = i, a.left === r.left && a.top === r.top || (n.left = a.left + s.left + "px", n.top = a.top + s.top + "px"), a
    }

    function re(t) {
        var e = t.element,
            n = t.svgTransform,
            r = e.getBoundingClientRect(),
            o = Ut(e);
        n.setTranslate(0, 0);
        var i = t.svgOriginBBox = e.getBBox(),
            a = e.getBoundingClientRect(),
            l = $t(t, a.left, a.top),
            u = t.svgOffset = {
                x: i.x - l.x,
                y: i.y - l.y
            },
            s = $t(t, r.left, r.top);
        return n.setTranslate(s.x + u.x - i.x, s.y + u.y - i.y), o
    }

    function oe(t, e) {
        var n = Ut(document.documentElement),
            r = t.elementBBox = t.initElm(t),
            o = t.containmentBBox = t.containmentIsBBox ? Gt(t.options.containment, n) || n : Ut(t.options.containment, !0);
        if (t.minLeft = o.left, t.maxLeft = o.right - r.width, t.minTop = o.top, t.maxTop = o.bottom - r.height, te(t, {
                left: r.left,
                top: r.top
            }), t.parsedSnapTargets) {
            var i = {
                    x: r.width,
                    y: r.height
                },
                a = {
                    x: t.minLeft,
                    y: t.minTop
                },
                l = {
                    x: t.maxLeft,
                    y: t.maxTop
                },
                u = {
                    left: "x",
                    right: "x",
                    x: "x",
                    width: "x",
                    xStart: "x",
                    xEnd: "x",
                    xStep: "x",
                    top: "y",
                    bottom: "y",
                    y: "y",
                    height: "y",
                    yStart: "y",
                    yEnd: "y",
                    yStep: "y"
                },
                s = t.parsedSnapTargets.reduce(function (t, e) {
                    var s = "containment" === e.base ? o : n,
                        d = {
                            x: s.left,
                            y: s.top
                        },
                        c = {
                            x: s.width,
                            y: s.height
                        };

                    function f(n) {
                        if (null == n.center && (n.center = e.center), null == n.xGravity && (n.xGravity = e.gravity), null == n.yGravity && (n.yGravity = e.gravity), null != n.x && null != n.y) n.x = Pt(n.x, d.x, c.x), n.y = Pt(n.y, d.y, c.y), n.center && (n.x -= i.x / 2, n.y -= i.y / 2, n.corners = ["tl"]), (n.corners || e.corners).forEach(function (e) {
                            var r = n.x - ("tr" === e || "br" === e ? i.x : 0),
                                o = n.y - ("bl" === e || "br" === e ? i.y : 0);
                            if (r >= a.x && r <= l.x && o >= a.y && o <= l.y) {
                                var u = {
                                        x: r,
                                        y: o
                                    },
                                    s = r - n.xGravity,
                                    d = r + n.xGravity,
                                    c = o - n.yGravity,
                                    f = o + n.yGravity;
                                s > a.x && (u.gravityXStart = s), d < l.x && (u.gravityXEnd = d), c > a.y && (u.gravityYStart = c), f < l.y && (u.gravityYEnd = f), t.push(u)
                            }
                        });
                        else {
                            var r = null != n.x ? "x" : "y",
                                o = "x" === r ? "y" : "x",
                                u = o + "Start",
                                s = o + "End",
                                f = r + "Gravity",
                                p = r.toUpperCase(),
                                m = o.toUpperCase(),
                                v = "gravity" + p + "Start",
                                g = "gravity" + p + "End",
                                y = "gravity" + m + "Start",
                                h = "gravity" + m + "End";
                            if (n[r] = Pt(n[r], d[r], c[r]), n[u] = Pt(n[u], d[o], c[o]), n[s] = Pt(n[s], d[o], c[o]) - i[o], n[u] > n[s] || n[u] > l[o] || n[s] < a[o]) return;
                            n.center && (n[r] -= i[r] / 2, n.sides = ["start"]), (n.sides || e.sides).forEach(function (e) {
                                var d = n[r] - ("end" === e ? i[r] : 0);
                                if (d >= a[r] && d <= l[r]) {
                                    var c = {},
                                        p = d - n[f],
                                        m = d + n[f];
                                    c[r] = d, p > a[r] && (c[v] = p), m < l[r] && (c[g] = m), n[u] > a[o] && (c[y] = n[u]), n[s] < l[o] && (c[h] = n[s]), t.push(c)
                                }
                            })
                        }
                    }
                    var p = void 0;
                    if ((p = e.element ? Ut(e.element) : null) || e.ppBBox) e.ppBBox && (p = Gt(e.ppBBox, s)), p && e.edges.forEach(function (t) {
                        var n = e.gravity,
                            o = e.gravity;
                        "outside" === t && (n += r.width, o += r.height);
                        var i = p.left - n,
                            a = p.right + n,
                            l = p.top - o,
                            u = p.bottom + o,
                            s = "inside" === t ? "start" : "end";
                        f({
                            xStart: i,
                            xEnd: a,
                            y: p.top,
                            sides: [s],
                            center: !1
                        }), f({
                            x: p.left,
                            yStart: l,
                            yEnd: u,
                            sides: [s],
                            center: !1
                        }), s = "inside" === t ? "end" : "start", f({
                            xStart: i,
                            xEnd: a,
                            y: p.bottom,
                            sides: [s],
                            center: !1
                        }), f({
                            x: p.right,
                            yStart: l,
                            yEnd: u,
                            sides: [s],
                            center: !1
                        })
                    });
                    else {
                        var m = [
                            ["x", "y", "xStart", "xEnd", "xStep", "yStart", "yEnd", "yStep"].reduce(function (t, n) {
                                return e[n] && (t[n] = Pt(e[n], "xStep" === n || "yStep" === n ? 0 : d[u[n]], c[u[n]])), t
                            }, {})
                        ];
                        ["x", "y"].forEach(function (t) {
                            var n = t + "Start",
                                r = t + "End",
                                o = t + "Step",
                                i = t + "Gravity";
                            m = m.reduce(function (a, l) {
                                var u = l[n],
                                    s = l[r],
                                    d = l[o];
                                if (null != u && null != s && u >= s) return a;
                                if (null != d) {
                                    if (d < 2) return a;
                                    var c = d / 2;
                                    c = e.gravity > c ? c : null;
                                    for (var f = u; f <= s; f += d) {
                                        var p = Object.keys(l).reduce(function (t, e) {
                                            return e !== n && e !== r && e !== o && (t[e] = l[e]), t
                                        }, {});
                                        p[t] = f, p[i] = c, a.push(p)
                                    }
                                } else a.push(l);
                                return a
                            }, [])
                        }), m.forEach(function (t) {
                            f(t)
                        })
                    }
                    return t
                }, []);
            t.snapTargets = s.length ? s : null
        }
        var d = {},
            c = t.options.autoScroll;
        if (c) {
            d.isWindow = c.target === window, d.target = c.target;
            var f = "scroll" === e,
                p = function (t, e, n) {
                    var r, o = {},
                        i = void 0,
                        a = void 0,
                        l = void 0;
                    r = e ? document.documentElement : t, o.clientWidth = r.clientWidth, o.clientHeight = r.clientHeight;
                    var u = 0,
                        s = 0;
                    if (!n) {
                        var d = void 0,
                            c = void 0;
                        e ? (d = It(t, "x"), c = It(t, "y"), i = getComputedStyle(document.documentElement, ""), a = getComputedStyle(document.body, ""), u = It(t, "x", document.documentElement.scrollWidth + o.clientWidth + ["marginLeft", "marginRight", "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"].reduce(function (t, e) {
                            return t + (parseFloat(i[e]) || 0) + (parseFloat(a[e]) || 0)
                        }, 0)), s = It(t, "y", document.documentElement.scrollHeight + o.clientHeight + ["marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"].reduce(function (t, e) {
                            return t + (parseFloat(i[e]) || 0) + (parseFloat(a[e]) || 0)
                        }, 0)), It(t, "x", d), It(t, "y", c)) : (d = Wt(t, "x"), c = Wt(t, "y"), l = getComputedStyle(t, ""), u = Wt(t, "x", t.scrollWidth + o.clientWidth + ["marginLeft", "marginRight", "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"].reduce(function (t, e) {
                            return t + (parseFloat(l[e]) || 0)
                        }, 0)), s = Wt(t, "y", t.scrollHeight + o.clientHeight + ["marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"].reduce(function (t, e) {
                            return t + (parseFloat(l[e]) || 0)
                        }, 0)), Wt(t, "x", d), Wt(t, "y", c))
                    }
                    o.scrollWidth = o.clientWidth + u, o.scrollHeight = o.clientHeight + s;
                    var f = void 0;
                    return e ? o.clientX = o.clientY = 0 : (f = t.getBoundingClientRect(), l || (l = getComputedStyle(t, "")), o.clientX = f.left + (parseFloat(l.borderLeftWidth) || 0), o.clientY = f.top + (parseFloat(l.borderTopWidth) || 0)), o
                }(c.target, d.isWindow, f),
                m = zt({
                    left: p.clientX,
                    top: p.clientY,
                    width: p.clientWidth,
                    height: p.clientHeight
                });
            f ? t.autoScroll && (d.scrollWidth = t.autoScroll.scrollWidth, d.scrollHeight = t.autoScroll.scrollHeight) : (d.scrollWidth = p.scrollWidth, d.scrollHeight = p.scrollHeight), [
                ["X", "Width", "left", "right"],
                ["Y", "Height", "top", "bottom"]
            ].forEach(function (t) {
                var e = t[0],
                    n = t[1],
                    o = t[2],
                    i = t[3],
                    a = (d["scroll" + n] || 0) - p["client" + n],
                    l = c["min" + e] || 0,
                    u = J(c["max" + e]) ? c["max" + e] : a;
                if (l < u && l < a) {
                    u > a && (u = a);
                    for (var s = [], f = r[n.toLowerCase()], v = c.sensitivity.length - 1; v >= 0; v--) {
                        var g = c.sensitivity[v],
                            y = c.speed[v];
                        s.push({
                            dir: -1,
                            speed: y,
                            position: m[o] + g
                        }), s.push({
                            dir: 1,
                            speed: y,
                            position: m[i] - g - f
                        })
                    }
                    d[e.toLowerCase()] = {
                        min: l,
                        max: u,
                        lines: s
                    }
                }
            })
        }
        t.autoScroll = d.x || d.y ? d : null
    }

    function ie(t) {
        Ot.stop(), qt(t.options.handle, t.orgCursor), rt.style.cursor = at, !1 !== t.options.zIndex && (t.elementStyle.zIndex = t.orgZIndex), st && (rt.style[st] = dt);
        var e = A(t.element);
        vt && e.remove(vt), mt && e.remove(mt), et = null, t.onDragEnd && t.onDragEnd({
            left: t.elementBBox.left,
            top: t.elementBBox.top
        })
    }

    function ae(t, e) {
        var n = t.options,
            r = void 0;
        if (e.containment) {
            var o = void 0;
            Mt(e.containment) ? e.containment !== n.containment && (n.containment = e.containment, t.containmentIsBBox = !1, r = !0) : (o = Vt(Rt(e.containment))) && jt(o, n.containment) && (n.containment = o, t.containmentIsBBox = !0, r = !0)
        }

        function i(t, e) {
            function n(t) {
                return "string" == typeof t ? t.replace(/[, ]+/g, " ").trim().toLowerCase() : null
            }
            J(e.gravity) && e.gravity > 0 && (t.gravity = e.gravity);
            var r = n(e.corner);
            if (r) {
                if ("all" !== r) {
                    var o = {},
                        i = r.split(/\s/).reduce(function (t, e) {
                            return (e = "tl" === (e = e.trim().replace(/^(.).*?-(.).*$/, "$1$2")) || "lt" === e ? "tl" : "tr" === e || "rt" === e ? "tr" : "bl" === e || "lb" === e ? "bl" : "br" === e || "rb" === e ? "br" : null) && !o[e] && (t.push(e), o[e] = !0), t
                        }, []),
                        a = i.length;
                    r = a ? 4 === a ? "all" : i.join(" ") : null
                }
                r && (t.corner = r)
            }
            var l = n(e.side);
            l && ("start" === l || "end" === l || "both" === l ? t.side = l : "start end" !== l && "end start" !== l || (t.side = "both")), "boolean" == typeof e.center && (t.center = e.center);
            var u = n(e.edge);
            u && ("inside" === u || "outside" === u || "both" === u ? t.edge = u : "inside outside" !== u && "outside inside" !== u || (t.edge = "both"));
            var s = "string" == typeof e.base ? e.base.trim().toLowerCase() : null;
            return !s || "containment" !== s && "document" !== s || (t.base = s), t
        }
        if (null != e.snap) {
            var a = $(e.snap) && null != e.snap.targets ? e.snap : {
                    targets: e.snap
                },
                l = [],
                u = i({
                    targets: l
                }, a);
            u.gravity || (u.gravity = j), u.corner || (u.corner = M), u.side || (u.side = z), "boolean" != typeof u.center && (u.center = !1), u.edge || (u.edge = X), u.base || (u.base = Y);
            var s = (Array.isArray(a.targets) ? a.targets : [a.targets]).reduce(function (t, e) {
                if (null == e) return t;
                var n = Mt(e),
                    r = Vt(Rt(e)),
                    o = n || r ? {
                        boundingBox: e
                    } : $(e) && null == e.start && null == e.end && null == e.step ? e : {
                        x: e,
                        y: e
                    },
                    a = [],
                    s = {},
                    d = o.boundingBox,
                    c = void 0;
                if (n || Mt(d)) a.push({
                    element: d
                }), s.boundingBox = d;
                else if (c = r || Vt(Rt(d))) a.push({
                    ppBBox: c
                }), s.boundingBox = Nt(c);
                else {
                    var f = void 0,
                        p = ["x", "y"].reduce(function (t, e) {
                            var n, r = o[e];
                            if (n = Xt(r)) t[e] = n, s[e] = Yt(n);
                            else {
                                var i = void 0,
                                    a = void 0,
                                    l = void 0;
                                $(r) && (i = Xt(r.start), a = Xt(r.end), l = Xt(r.step), i && a && i.isRatio === a.isRatio && i.value >= a.value && (f = !0)), i = t[e + "Start"] = i || {
                                    value: 0,
                                    isRatio: !1
                                }, a = t[e + "End"] = a || {
                                    value: 1,
                                    isRatio: !0
                                }, s[e] = {
                                    start: Yt(i),
                                    end: Yt(a)
                                }, l && ((l.isRatio ? l.value > 0 : l.value >= 2) ? (t[e + "Step"] = l, s[e].step = Yt(l)) : f = !0)
                            }
                            return t
                        }, {});
                    if (f) return t;
                    p.xStart && !p.xStep && p.yStart && !p.yStep ? a.push({
                        xStart: p.xStart,
                        xEnd: p.xEnd,
                        y: p.yStart
                    }, {
                        xStart: p.xStart,
                        xEnd: p.xEnd,
                        y: p.yEnd
                    }, {
                        x: p.xStart,
                        yStart: p.yStart,
                        yEnd: p.yEnd
                    }, {
                        x: p.xEnd,
                        yStart: p.yStart,
                        yEnd: p.yEnd
                    }) : a.push(p)
                }
                if (a.length) {
                    l.push(i(s, o));
                    var m = s.corner || u.corner,
                        v = s.side || u.side,
                        g = s.edge || u.edge,
                        y = {
                            gravity: s.gravity || u.gravity,
                            base: s.base || u.base,
                            center: "boolean" == typeof s.center ? s.center : u.center,
                            corners: "all" === m ? P : m.split(" "),
                            sides: "both" === v ? V : [v],
                            edges: "both" === g ? N : [g]
                        };
                    a.forEach(function (e) {
                        ["gravity", "corners", "sides", "center", "edges", "base"].forEach(function (t) {
                            e[t] = y[t]
                        }), t.push(e)
                    })
                }
                return t
            }, []);
            s.length && (n.snap = u, jt(s, t.parsedSnapTargets) && (t.parsedSnapTargets = s, r = !0))
        } else e.hasOwnProperty("snap") && t.parsedSnapTargets && (n.snap = t.parsedSnapTargets = t.snapTargets = void 0);
        if (e.autoScroll) {
            var d = $(e.autoScroll) ? e.autoScroll : {
                    target: !0 === e.autoScroll ? window : e.autoScroll
                },
                c = {};
            c.target = Mt(d.target) ? d.target : window, c.speed = [], (Array.isArray(d.speed) ? d.speed : [d.speed]).every(function (t, e) {
                return !!(e <= 2 && J(t)) && (c.speed[e] = t, !0)
            }), c.speed.length || (c.speed = G);
            var f = Array.isArray(d.sensitivity) ? d.sensitivity : [d.sensitivity];
            c.sensitivity = c.speed.map(function (t, e) {
                return J(f[e]) ? f[e] : U[e]
            }), ["X", "Y"].forEach(function (t) {
                var e = "min" + t,
                    n = "max" + t;
                J(d[e]) && d[e] >= 0 && (c[e] = d[e]), J(d[n]) && d[n] >= 0 && (!c[e] || d[n] >= c[e]) && (c[n] = d[n])
            }), jt(c, n.autoScroll) && (n.autoScroll = c, r = !0)
        } else e.hasOwnProperty("autoScroll") && (n.autoScroll && (r = !0), n.autoScroll = void 0);
        if (r && oe(t), Mt(e.handle) && e.handle !== n.handle) {
            n.handle && (n.handle.style.cursor = t.orgCursor, st && (n.handle.style[st] = t.orgUserSelect), ht.removeStartHandler(n.handle, t.pointerEventHandlerId));
            var p = n.handle = e.handle;
            t.orgCursor = p.style.cursor, qt(p, t.orgCursor), st && (t.orgUserSelect = p.style[st], p.style[st] = "none"), ht.addStartHandler(p, t.pointerEventHandlerId)
        }(J(e.zIndex) || !1 === e.zIndex) && (n.zIndex = e.zIndex, t === et && (t.elementStyle.zIndex = !1 === n.zIndex ? t.orgZIndex : n.zIndex));
        var m = {
                left: t.elementBBox.left,
                top: t.elementBBox.top
            },
            v = void 0;
        J(e.left) && e.left !== m.left && (m.left = e.left, v = !0), J(e.top) && e.top !== m.top && (m.top = e.top, v = !0), v && te(t, m), ["onDrag", "onMove", "onDragStart", "onMoveStart", "onDragEnd"].forEach(function (r) {
            "function" == typeof e[r] ? (n[r] = e[r], t[r] = n[r].bind(t.ins)) : e.hasOwnProperty(r) && null == e[r] && (n[r] = t[r] = void 0)
        })
    }
    Ot.move = function (t, e, n) {
        _t.call(window, Ht), kt(), Dt === t && (e.x && At.x && (e.x.lastValue = At.x.lastValue), e.y && At.y && (e.y.lastValue = At.y.lastValue)), Dt = t, At = e, Ft = n;
        var r = Date.now();
        ["x", "y"].forEach(function (t) {
            var e = At[t];
            e && (e.lastFrameTime = r)
        }), Ht = Ct.call(window, Lt)
    }, Ot.stop = function () {
        _t.call(window, Ht), kt(), At = {}, Dt = null
    };
    var le = function () {
        function t(e, n) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = {
                ins: this,
                options: {
                    zIndex: R
                },
                disabled: !1
            };
            if (Object.defineProperty(this, "_id", {
                    value: ++tt
                }), r._id = this._id, K[this._id] = r, !Mt(e) || e === rt) throw new Error("This element is not accepted.");
            if (n) {
                if (!$(n)) throw new Error("Invalid options.")
            } else n = {};
            var o = !0,
                i = void 0;
            if (e instanceof SVGElement && (i = e.ownerSVGElement)) {
                if (!e.getBBox) throw new Error("This element is not accepted. (SVGLocatable)");
                if (!e.transform) throw new Error("This element is not accepted. (SVGAnimatedTransformList)");
                r.svgTransform = e.transform.baseVal.appendItem(i.createSVGTransform()), r.svgPoint = i.createSVGPoint();
                var a = e.nearestViewportElement;
                r.svgCtmElement = Z ? a.appendChild(document.createElementNS(i.namespaceURI, "rect")) : a, o = !1, r.initElm = re, r.moveElm = Qt
            } else {
                var l = h.getName("willChange");
                l && (o = !1), !n.leftTop && ut ? (l && (e.style[l] = "transform"), r.initElm = ee, r.moveElm = Jt) : (l && (e.style[l] = "left, top"), r.initElm = ne, r.moveElm = Kt)
            }
            if (r.element = function (t, e) {
                    var n = t.style;
                    n.webkitTapHighlightColor = "transparent";
                    var r = h.getName("boxShadow"),
                        o = window.getComputedStyle(t, "")[r];
                    return o && "none" !== o || (n[r] = "0 0 1px transparent"), e && ut && (n[ut] = "translateZ(0)"), t
                }(e, o), r.elementStyle = e.style, r.orgZIndex = r.elementStyle.zIndex, pt && A(e).add(pt), r.pointerEventHandlerId = ht.regStartHandler(function (t) {
                    return function (t, e) {
                        return !(t.disabled || t.onDragStart && !1 === t.onDragStart(e) || (et && ie(et), Zt(t.options.handle), rt.style.cursor = it || window.getComputedStyle(t.options.handle, "").cursor, !1 !== t.options.zIndex && (t.elementStyle.zIndex = t.options.zIndex), st && (rt.style[st] = "none"), mt && A(t.element).add(mt), et = t, nt = !1, Q.left = t.elementBBox.left - (e.clientX + window.pageXOffset), Q.top = t.elementBBox.top - (e.clientY + window.pageYOffset), 0))
                    }(r, t)
                }), !n.containment) {
                var u;
                n.containment = (u = e.parentNode) && Mt(u) ? u : rt
            }
            n.handle || (n.handle = e), ae(r, n)
        }
        return D(t, [{
            key: "remove",
            value: function () {
                var t = K[this._id];
                this.disabled = !0, ht.removeStartHandler(t.options.handle, t.pointerEventHandlerId), ht.unregStartHandler(t.pointerEventHandlerId), delete K[this._id]
            }
        }, {
            key: "setOptions",
            value: function (t) {
                return $(t) && ae(K[this._id], t), this
            }
        }, {
            key: "position",
            value: function () {
                return oe(K[this._id]), this
            }
        }, {
            key: "disabled",
            get: function () {
                return K[this._id].disabled
            },
            set: function (t) {
                var e = K[this._id];
                (t = !!t) !== e.disabled && (e.disabled = t, e.disabled ? (e === et && ie(e), e.options.handle.style.cursor = e.orgCursor, st && (e.options.handle.style[st] = e.orgUserSelect), pt && A(e.element).remove(pt)) : (qt(e.options.handle, e.orgCursor), st && (e.options.handle.style[st] = "none"), pt && A(e.element).add(pt)))
            }
        }, {
            key: "element",
            get: function () {
                return K[this._id].element
            }
        }, {
            key: "rect",
            get: function () {
                return Rt(K[this._id].elementBBox)
            }
        }, {
            key: "left",
            get: function () {
                return K[this._id].elementBBox.left
            },
            set: function (t) {
                ae(K[this._id], {
                    left: t
                })
            }
        }, {
            key: "top",
            get: function () {
                return K[this._id].elementBBox.top
            },
            set: function (t) {
                ae(K[this._id], {
                    top: t
                })
            }
        }, {
            key: "containment",
            get: function () {
                var t = K[this._id];
                return t.containmentIsBBox ? Nt(t.options.containment) : t.options.containment
            },
            set: function (t) {
                ae(K[this._id], {
                    containment: t
                })
            }
        }, {
            key: "snap",
            get: function () {
                return Rt(K[this._id].options.snap)
            },
            set: function (t) {
                ae(K[this._id], {
                    snap: t
                })
            }
        }, {
            key: "autoScroll",
            get: function () {
                return Rt(K[this._id].options.autoScroll)
            },
            set: function (t) {
                ae(K[this._id], {
                    autoScroll: t
                })
            }
        }, {
            key: "handle",
            get: function () {
                return K[this._id].options.handle
            },
            set: function (t) {
                ae(K[this._id], {
                    handle: t
                })
            }
        }, {
            key: "zIndex",
            get: function () {
                return K[this._id].options.zIndex
            },
            set: function (t) {
                ae(K[this._id], {
                    zIndex: t
                })
            }
        }, {
            key: "onDrag",
            get: function () {
                return K[this._id].options.onDrag
            },
            set: function (t) {
                ae(K[this._id], {
                    onDrag: t
                })
            }
        }, {
            key: "onMove",
            get: function () {
                return K[this._id].options.onMove
            },
            set: function (t) {
                ae(K[this._id], {
                    onMove: t
                })
            }
        }, {
            key: "onDragStart",
            get: function () {
                return K[this._id].options.onDragStart
            },
            set: function (t) {
                ae(K[this._id], {
                    onDragStart: t
                })
            }
        }, {
            key: "onMoveStart",
            get: function () {
                return K[this._id].options.onMoveStart
            },
            set: function (t) {
                ae(K[this._id], {
                    onMoveStart: t
                })
            }
        }, {
            key: "onDragEnd",
            get: function () {
                return K[this._id].options.onDragEnd
            },
            set: function (t) {
                ae(K[this._id], {
                    onDragEnd: t
                })
            }
        }], [{
            key: "draggableCursor",
            get: function () {
                return ct
            },
            set: function (t) {
                ct !== t && (ct = t, ot = null, Object.keys(K).forEach(function (t) {
                    var e = K[t];
                    e.disabled || e === et && !1 !== it || (qt(e.options.handle, e.orgCursor), e === et && (rt.style.cursor = at, rt.style.cursor = window.getComputedStyle(e.options.handle, "").cursor))
                }))
            }
        }, {
            key: "draggingCursor",
            get: function () {
                return ft
            },
            set: function (t) {
                ft !== t && (ft = t, it = null, et && (Zt(et.options.handle), !1 === it && (qt(et.options.handle, et.orgCursor), rt.style.cursor = at), rt.style.cursor = it || window.getComputedStyle(et.options.handle, "").cursor))
            }
        }, {
            key: "draggableClass",
            get: function () {
                return pt
            },
            set: function (t) {
                (t = t ? t + "" : void 0) !== pt && (Object.keys(K).forEach(function (e) {
                    var n = K[e];
                    if (!n.disabled) {
                        var r = A(n.element);
                        pt && r.remove(pt), t && r.add(t)
                    }
                }), pt = t)
            }
        }, {
            key: "draggingClass",
            get: function () {
                return mt
            },
            set: function (t) {
                if ((t = t ? t + "" : void 0) !== mt) {
                    if (et) {
                        var e = A(et.element);
                        mt && e.remove(mt), t && e.add(t)
                    }
                    mt = t
                }
            }
        }, {
            key: "movingClass",
            get: function () {
                return vt
            },
            set: function (t) {
                if ((t = t ? t + "" : void 0) !== vt) {
                    if (et && nt) {
                        var e = A(et.element);
                        vt && e.remove(vt), t && e.add(t)
                    }
                    vt = t
                }
            }
        }]), t
    }();
    ht.addMoveHandler(document, function (t) {
        if (et) {
            var e = {
                left: t.clientX + window.pageXOffset + Q.left,
                top: t.clientY + window.pageYOffset + Q.top
            };
            if (te(et, e, et.snapTargets ? function (t) {
                    var e = et.snapTargets.length,
                        n = !1,
                        r = !1,
                        o = void 0;
                    for (o = 0; o < e && (!n || !r); o++) {
                        var i = et.snapTargets[o];
                        (null == i.gravityXStart || t.left >= i.gravityXStart) && (null == i.gravityXEnd || t.left <= i.gravityXEnd) && (null == i.gravityYStart || t.top >= i.gravityYStart) && (null == i.gravityYEnd || t.top <= i.gravityYEnd) && (n || null == i.x || (t.left = i.x, n = !0, o = -1), r || null == i.y || (t.top = i.y, r = !0, o = -1))
                    }
                    return t.snapped = n || r, !et.onDrag || et.onDrag(t)
                } : et.onDrag)) {
                var n = {},
                    r = et.autoScroll;
                if (r) {
                    var o = {
                        x: et.elementBBox.left - window.pageXOffset,
                        y: et.elementBBox.top - window.pageYOffset
                    };
                    ["x", "y"].forEach(function (t) {
                        if (r[t]) {
                            var e = r[t].min,
                                i = r[t].max;
                            r[t].lines.some(function (r) {
                                return (-1 === r.dir ? o[t] <= r.position : o[t] >= r.position) && (n[t] = {
                                    dir: r.dir,
                                    speed: r.speed / 1e3,
                                    min: e,
                                    max: i
                                }, !0)
                            })
                        }
                    })
                }
                n.x || n.y ? (Ot.move(r.target, n, r.isWindow ? It : Wt), e.autoScroll = !0) : Ot.stop(), nt || (nt = !0, vt && A(et.element).add(vt), et.onMoveStart && et.onMoveStart(e)), et.onMove && et.onMove(e)
            }
        }
    }), ht.addEndHandler(document, function () {
        et && ie(et)
    });
    var ue = function () {
        lt = h.getName("transitionProperty"), ut = h.getName("transform"), at = rt.style.cursor, (st = h.getName("userSelect")) && (dt = rt.style[st]);
        var t = {},
            e = void 0;

        function n(t, e) {
            t.initElm && oe(t, e)
        }
        var r = !1,
            o = C.add(function (o) {
                r || (r = !0, et && (n(et, o.type), ht.callMoveHandler(), t[et._id] = !0), clearTimeout(e), e = setTimeout(function () {
                    var r;
                    r = o.type, clearTimeout(e), Object.keys(K).forEach(function (e) {
                        t[e] || n(K[e], r)
                    }), t = {}
                }, 200), r = !1)
            });
        window.addEventListener("resize", o, !0), window.addEventListener("scroll", o, !0)
    };
    (rt = document.body) ? ue(): document.addEventListener("DOMContentLoaded", function () {
        rt = document.body, ue()
    }, !1);
    e.default = le
}]).default;
/*
 * JQ Image Drag - v1.1 - 27/11/2013
 * https://github.com/puneetkay/JQ-Image-Drag
 *
 * Copyright (c) 2013 Puneet Kalra
 * under the MIT license.
 */

(function ($, window, undefined) {

    $.fn.imagedrag = function (options) {

        function initialise(e, o) {
            // Double check options here, or return false.
            // Once all validated, start process.
            imageDrag(e, o);
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var isDisabled = false;
        var elem;
        var defaultDragPos;
        var bodyIs = $("body");
        var randomId = getRandomInt(1000000);
        bodyIs.attr('data-slide', randomId);
        var interval1 = setInterval(function () {
            var currentAttr = bodyIs.attr('data-slide');
            if (currentAttr == randomId) {
                //console.log("all good");
            } else {
                //console.log("erase it!");
                $(window).off("resize", doResizeImageDrag);
                isDisabled = true;
                clearInterval(interval1);
            }
            //console.log(currentAttr);
            //if()
            //if(bodyIs.hasClass("draggable-exists")) {
            //	  console.log('has class');
            //} else {
            //  console.log('does not');
            //}
        }, 2000);
        var maxMargin, imgWidth, imgHeight, aspectratio, windowWidth, dataSize, dataHeight, dataWidth, imgOrgWidth, imgOrgHeight, wrapWidth, input, img;

        function doResizeImageDrag(e, o) {
            if (!isDisabled) {
                calcs(elem, data);
            }
        }

        function calcs(e, o) {
            if (!isDisabled) {
                //console.log("check");
                var draggableJs = o.test;
                draggableJs.left = 0;
                defaultDragPos = $(".imagedraggable.plain-draggable").offset().left;
            }

            img = $('img', elem);
            input = $(o.input);

            // Get wrapper WnH
            //var wrapHeight = elem.height();
            wrapWidth = elem.width();

            // Get image WnH
            imgOrgHeight = img.height();
            imgOrgWidth = img.width();

            dataWidth = img.attr("data-width");
            dataHeight = img.attr("data-height");
            dataSize = img.attr("data-size");
            windowWidth = $(window).width()
            aspectratio;
            dataSize = dataSize / 100;
            if (windowWidth < 600) {
                dataSize = dataSize * 2;
            }

            imgOrgHeight = dataHeight;
            imgOrgWidth = dataWidth;
            aspectratio = imgOrgWidth / imgOrgHeight;
            //console.log("aspectratio: "+aspectratio);
            //console.log("windowWidth: "+windowWidth);
            //console.log("dataSize: "+dataSize);

            //console.log("wrapHeight: "+wrapHeight);
            //console.log("wrapWidth: "+wrapWidth);
            //console.log("imgOrgHeight: "+imgOrgHeight);
            //console.log("imgOrgWidth: "+imgOrgWidth);

            // Adjust WnH according to wrapper
            //img.width(wrapWidth);
            //img.height((wrapWidth/imgOrgWidth) * imgOrgHeight);

            img.width(windowWidth * dataSize);
            img.height((windowWidth * dataSize) / aspectratio);
            elem.height((windowWidth * dataSize) / aspectratio);

            // Get adjusted WnH of image
            imgHeight = img.height();
            imgWidth = img.width();

            //console.log("imgHeight: "+imgHeight);
            //console.log("imgWidth: "+imgWidth);

            // Get maximum margin allowed for image.
            maxMargin = (imgWidth - wrapWidth) * -1;
            img.attr("data-max", maxMargin);
            //console.log("maxMargin: "+maxMargin);
            img.css("left", "0px");
        }

        function imageDrag(e, o) {
            calcs(e, o);
            // Get required elements

            img.draggable({
                axis: "x", //drag vertically only
                scroll: false, // do not autocroll container.
                cursor: o.cursor,
                create: function () {
                    var position = "0px";
                    $(window).on("resize", doResizeImageDrag);
                    /*$( window ).resize(function() {
                      console.log("testiiiing");
                      calcs(e,o);
                    });*/
                    img.css("left", position);
                    if (o.attribute == 'html')
                        input.html(position);
                    else
                        input.attr(o.attribute, position);
                },
                drag: function (event, ui) {
                    var position = ui.position.left;
                    // Margin should be <= 0
                    if (position > 0) {
                        ui.position.left = 0;
                    }
                    // Margin should be >= maximum margin
                    if (position < maxMargin) {
                        ui.position.left = maxMargin;
                    }
                    if (o.attribute == 'html')
                        input.html(ui.position.left + "px");
                    else
                        input.attr(o.attribute, ui.position.left + "px");
                    //var marginToTransfer = maxMargin * (-1);
                    //var positionToTransfer = ui.position.left * (-1);
                    if (!isDisabled) {
                        var steps = 128;
                        var currentPos = Math.floor((ui.position.left / maxMargin) * steps);
                        if (currentPos == -0) {
                            currentPos = 0;
                        }
                        //console.log(currentPos);
                        var draggableJs = o.test;
                        //console.log(draggableJs.left);
                        //console.log(draggableJs.scrollLeft);
                        var testPos = $(".imagedraggable.plain-draggable").offset().left;
                        //console.log(testPos);
                        draggableJs.left = defaultDragPos + currentPos;
                    }
                    //console.log(defaultDragPos);
                    //draggableJs.left += 50;
                    //console.log(o.test);
                    //console.log(marginToTransfer);
                    //console.log(positionToTransfer);
                }
            });

        }


        // Default values
        var defaults = {
            input: "#output", // Selector for top margin.
            attribute: "value", // Target attribute for selector. 
            position: 'middle', // top, middle, bottom, or specific margin.
            cursor: 'move' // Cursor type for image.
        };

        //var test = 1;

        // Merge options with defaults.
        var data = $.extend(defaults, options);
        //if(options == 'remove') {
        //console.log
        //$(window).off("resize", doResizeImageDrag);
        //isDisabled = true;
        //$(window).off("resize", doResizeImageDrag);
        //console.log("navigated out");
        //}

        // Data object ready, Now head for logic
        return this.each(function () {
            elem = $(this);
            //console.log(elem);
            if (elem == null)
                return false;
            initialise(elem, data);

        });

    }

})(jQuery, this);
! function (e, t, n) {
    "use strict";
    ! function o(e, t, n) {
        function a(s, l) {
            if (!t[s]) {
                if (!e[s]) {
                    var i = "function" == typeof require && require;
                    if (!l && i) return i(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = t[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function (t) {
                    var n = e[s][1][t];
                    return a(n ? n : t)
                }, c, c.exports, o, e, t, n)
            }
            return t[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a
    }({
        1: [function (o, a, r) {
            function s(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l, i, u, c, d = o("./modules/handle-dom"),
                f = o("./modules/utils"),
                p = o("./modules/handle-swal-dom"),
                m = o("./modules/handle-click"),
                v = o("./modules/handle-key"),
                y = s(v),
                b = o("./modules/default-params"),
                h = s(b),
                g = o("./modules/set-params"),
                w = s(g);
            r["default"] = u = c = function () {
                function o(e) {
                    var t = a;
                    return t[e] === n ? h["default"][e] : t[e]
                }
                var a = arguments[0];
                if ((0, d.addClass)(t.body, "stop-scrolling"), (0, p.resetInput)(), a === n) return (0, f.logStr)("SweetAlert expects at least 1 attribute!"), !1;
                var r = (0, f.extend)({}, h["default"]);
                switch (typeof a) {
                    case "string":
                        r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";
                        break;
                    case "object":
                        if (a.title === n) return (0, f.logStr)('Missing "title" argument!'), !1;
                        r.title = a.title;
                        for (var s in h["default"]) r[s] = o(s);
                        r.confirmButtonText = r.showCancelButton ? "Confirm" : h["default"].confirmButtonText, r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return (0, f.logStr)('Unexpected type of argument! Expected "string" or "object", got ' + typeof a), !1
                }(0, w["default"])(r), (0, p.fixVerticalPosition)(), (0, p.openModal)(arguments[1]);
                for (var u = (0, p.getModal)(), v = u.querySelectorAll("button"), b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function (e) {
                        return (0, m.handleButton)(e, r, u)
                    }, C = 0; C < v.length; C++)
                    for (var S = 0; S < b.length; S++) {
                        var x = b[S];
                        v[C][x] = g
                    }(0, p.getOverlay)().onclick = g, l = e.onkeydown;
                var k = function (e) {
                    return (0, y["default"])(e, r, u)
                };
                e.onkeydown = k, e.onfocus = function () {
                    setTimeout(function () {
                        i !== n && (i.focus(), i = n)
                    }, 0)
                }, c.enableButtons()
            }, u.setDefaults = c.setDefaults = function (e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                (0, f.extend)(h["default"], e)
            }, u.close = c.close = function () {
                var o = (0, p.getModal)();
                (0, d.fadeOut)((0, p.getOverlay)(), 5), (0, d.fadeOut)(o, 5), (0, d.removeClass)(o, "showSweetAlert"), (0, d.addClass)(o, "hideSweetAlert"), (0, d.removeClass)(o, "visible");
                var a = o.querySelector(".sa-icon.sa-success");
                (0, d.removeClass)(a, "animate"), (0, d.removeClass)(a.querySelector(".sa-tip"), "animateSuccessTip"), (0, d.removeClass)(a.querySelector(".sa-long"), "animateSuccessLong");
                var r = o.querySelector(".sa-icon.sa-error");
                (0, d.removeClass)(r, "animateErrorIcon"), (0, d.removeClass)(r.querySelector(".sa-x-mark"), "animateXMark");
                var s = o.querySelector(".sa-icon.sa-warning");
                return (0, d.removeClass)(s, "pulseWarning"), (0, d.removeClass)(s.querySelector(".sa-body"), "pulseWarningIns"), (0, d.removeClass)(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
                    var e = o.getAttribute("data-custom-class");
                    (0, d.removeClass)(o, e)
                }, 300), (0, d.removeClass)(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(o.timeout), !0
            }, u.showInputError = c.showInputError = function (e) {
                var t = (0, p.getModal)(),
                    n = t.querySelector(".sa-input-error");
                (0, d.addClass)(n, "show");
                var o = t.querySelector(".sa-error-container");
                (0, d.addClass)(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function () {
                    u.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, u.resetInputError = c.resetInputError = function (e) {
                if (e && 13 === e.keyCode) return !1;
                var t = (0, p.getModal)(),
                    n = t.querySelector(".sa-input-error");
                (0, d.removeClass)(n, "show");
                var o = t.querySelector(".sa-error-container");
                (0, d.removeClass)(o, "show")
            }, u.disableButtons = c.disableButtons = function (e) {
                var t = (0, p.getModal)(),
                    n = t.querySelector("button.confirm"),
                    o = t.querySelector("button.cancel");
                n.disabled = !0, o.disabled = !0
            }, u.enableButtons = c.enableButtons = function (e) {
                var t = (0, p.getModal)(),
                    n = t.querySelector("button.confirm"),
                    o = t.querySelector("button.cancel");
                n.disabled = !1, o.disabled = !1
            }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : (0, f.logStr)("SweetAlert is a frontend module!"), a.exports = r["default"]
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function (e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n["default"] = o, t.exports = n["default"]
        }, {}],
        3: [function (t, n, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = t("./utils"),
                r = (t("./handle-swal-dom"), t("./handle-dom")),
                s = function (t, n, o) {
                    function s(e) {
                        m && n.confirmButtonColor && (p.style.backgroundColor = e)
                    }
                    var u, c, d, f = t || e.event,
                        p = f.target || f.srcElement,
                        m = -1 !== p.className.indexOf("confirm"),
                        v = -1 !== p.className.indexOf("sweet-overlay"),
                        y = (0, r.hasClass)(o, "visible"),
                        b = n.doneFunction && "true" === o.getAttribute("data-has-done-function");
                    switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = (0, a.colorLuminance)(u, -.04), d = (0, a.colorLuminance)(u, -.14)), f.type) {
                        case "mouseover":
                            s(c);
                            break;
                        case "mouseout":
                            s(u);
                            break;
                        case "mousedown":
                            s(d);
                            break;
                        case "mouseup":
                            s(c);
                            break;
                        case "focus":
                            var h = o.querySelector("button.confirm"),
                                g = o.querySelector("button.cancel");
                            m ? g.style.boxShadow = "none" : h.style.boxShadow = "none";
                            break;
                        case "click":
                            var w = o === p,
                                C = (0, r.isDescendant)(o, p);
                            if (!w && !C && y && !n.allowOutsideClick) break;
                            m && b && y ? l(o, n) : b && y || v ? i(o, n) : (0, r.isDescendant)(o, p) && "BUTTON" === p.tagName && sweetAlert.close()
                    }
                },
                l = function (e, t) {
                    var n = !0;
                    (0, r.hasClass)(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                i = function (e, t) {
                    var n = String(t.doneFunction).replace(/\s/g, ""),
                        o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                    o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                };
            o["default"] = {
                handleButton: s,
                handleConfirm: l,
                handleCancel: i
            }, n.exports = o["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function (n, o, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var r = function (e, t) {
                    return new RegExp(" " + t + " ").test(" " + e.className + " ")
                },
                s = function (e, t) {
                    r(e, t) || (e.className += " " + t)
                },
                l = function (e, t) {
                    var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (r(e, t)) {
                        for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                        e.className = n.replace(/^\s+|\s+$/g, "")
                    }
                },
                i = function (e) {
                    var n = t.createElement("div");
                    return n.appendChild(t.createTextNode(e)), n.innerHTML
                },
                u = function (e) {
                    e.style.opacity = "", e.style.display = "block"
                },
                c = function (e) {
                    if (e && !e.length) return u(e);
                    for (var t = 0; t < e.length; ++t) u(e[t])
                },
                d = function (e) {
                    e.style.opacity = "", e.style.display = "none"
                },
                f = function (e) {
                    if (e && !e.length) return d(e);
                    for (var t = 0; t < e.length; ++t) d(e[t])
                },
                p = function (e, t) {
                    for (var n = t.parentNode; null !== n;) {
                        if (n === e) return !0;
                        n = n.parentNode
                    }
                    return !1
                },
                m = function (e) {
                    e.style.left = "-9999px", e.style.display = "block";
                    var t, n = e.clientHeight;
                    return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
                },
                v = function (e, t) {
                    if (+e.style.opacity < 1) {
                        t = t || 16, e.style.opacity = 0, e.style.display = "block";
                        var n = +new Date,
                            o = function a() {
                                e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(a, t)
                            };
                        o()
                    }
                    e.style.display = "block"
                },
                y = function (e, t) {
                    t = t || 16, e.style.opacity = 1;
                    var n = +new Date,
                        o = function a() {
                            e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(a, t) : e.style.display = "none"
                        };
                    o()
                },
                b = function (n) {
                    if ("function" == typeof MouseEvent) {
                        var o = new MouseEvent("click", {
                            view: e,
                            bubbles: !1,
                            cancelable: !0
                        });
                        n.dispatchEvent(o)
                    } else if (t.createEvent) {
                        var a = t.createEvent("MouseEvents");
                        a.initEvent("click", !1, !1), n.dispatchEvent(a)
                    } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                },
                h = function (t) {
                    "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
                };
            a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = b, a.stopEventPropagation = h
        }, {}],
        5: [function (t, o, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var r = t("./handle-dom"),
                s = t("./handle-swal-dom"),
                l = function (t, o, a) {
                    var l = t || e.event,
                        i = l.keyCode || l.which,
                        u = a.querySelector("button.confirm"),
                        c = a.querySelector("button.cancel"),
                        d = a.querySelectorAll("button[tabindex]");
                    if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                        for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++)
                            if (f === d[m]) {
                                p = m;
                                break
                            } 9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], (0, r.stopEventPropagation)(l), f.focus(), o.confirmButtonColor && (0, s.setFocusStyle)(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, (0, r.fireClick)(f, l)) : f = n
                    }
                };
            a["default"] = l, o.exports = a["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function (n, o, a) {
            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var s = n("./utils"),
                l = n("./handle-dom"),
                i = n("./default-params"),
                u = r(i),
                c = n("./injected-html"),
                d = r(c),
                f = ".sweet-alert",
                p = ".sweet-overlay",
                m = function () {
                    var e = t.createElement("div");
                    for (e.innerHTML = d["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
                },
                v = function x() {
                    var e = t.querySelector(f);
                    return e || (m(), e = x()), e
                },
                y = function () {
                    var e = v();
                    return e ? e.querySelector("input") : void 0
                },
                b = function () {
                    return t.querySelector(p)
                },
                h = function (e, t) {
                    var n = (0, s.hexToRgb)(t);
                    e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                },
                g = function (n) {
                    var o = v();
                    (0, l.fadeIn)(b(), 10), (0, l.show)(o), (0, l.addClass)(o, "showSweetAlert"), (0, l.removeClass)(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                    var a = o.querySelector("button.confirm");
                    a.focus(), setTimeout(function () {
                        (0, l.addClass)(o, "visible")
                    }, 500);
                    var r = o.getAttribute("data-timer");
                    if ("null" !== r && "" !== r) {
                        var s = n;
                        o.timeout = setTimeout(function () {
                            var e = (s || null) && "true" === o.getAttribute("data-has-done-function");
                            e ? s(null) : sweetAlert.close()
                        }, r)
                    }
                },
                w = function () {
                    var e = v(),
                        t = y();
                    (0, l.removeClass)(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C()
                },
                C = function (e) {
                    if (e && 13 === e.keyCode) return !1;
                    var t = v(),
                        n = t.querySelector(".sa-input-error");
                    (0, l.removeClass)(n, "show");
                    var o = t.querySelector(".sa-error-container");
                    (0, l.removeClass)(o, "show")
                },
                S = function () {
                    var e = v();
                    e.style.marginTop = (0, l.getTopMargin)(v())
                };
            a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = b, a.getInput = y, a.setFocusStyle = h, a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function (e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n["default"] = o, t.exports = n["default"]
        }, {}],
        8: [function (e, t, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = e("./utils"),
                r = e("./handle-swal-dom"),
                s = e("./handle-dom"),
                l = ["error", "warning", "info", "success", "input", "prompt"],
                i = function (e) {
                    var t = (0, r.getModal)(),
                        o = t.querySelector("h2"),
                        i = t.querySelector("p"),
                        u = t.querySelector("button.cancel"),
                        c = t.querySelector("button.confirm");
                    if (o.innerHTML = e.html ? e.title : (0, s.escapeHtml)(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : (0, s.escapeHtml)(e.text || "").split("\n").join("<br>"), e.text && (0, s.show)(i), e.customClass)(0, s.addClass)(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
                    else {
                        var d = t.getAttribute("data-custom-class");
                        (0, s.removeClass)(t, d), t.setAttribute("data-custom-class", "")
                    }
                    if ((0, s.hide)(t.querySelectorAll(".sa-icon")), e.type && !(0, a.isIE8)()) {
                        var f = function () {
                            for (var o = !1, a = 0; a < l.length; a++)
                                if (e.type === l[a]) {
                                    o = !0;
                                    break
                                } if (!o) return logStr("Unknown alert type: " + e.type), {
                                v: !1
                            };
                            var i = ["success", "error", "warning", "info"],
                                u = n; - 1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), (0, s.show)(u));
                            var c = (0, r.getInput)();
                            switch (e.type) {
                                case "success":
                                    (0, s.addClass)(u, "animate"), (0, s.addClass)(u.querySelector(".sa-tip"), "animateSuccessTip"), (0, s.addClass)(u.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case "error":
                                    (0, s.addClass)(u, "animateErrorIcon"), (0, s.addClass)(u.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case "warning":
                                    (0, s.addClass)(u, "pulseWarning"), (0, s.addClass)(u.querySelector(".sa-body"), "pulseWarningIns"), (0, s.addClass)(u.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case "input":
                                case "prompt":
                                    c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), (0, s.addClass)(t, "show-input"), setTimeout(function () {
                                        c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                            }
                        }();
                        if ("object" == typeof f) return f.v
                    }
                    if (e.imageUrl) {
                        var p = t.querySelector(".sa-icon.sa-custom");
                        p.style.backgroundImage = "url(" + e.imageUrl + ")", (0, s.show)(p);
                        var m = 80,
                            v = 80;
                        if (e.imageSize) {
                            var y = e.imageSize.toString().split("x"),
                                b = y[0],
                                h = y[1];
                            b && h ? (m = b, v = h) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                        }
                        p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px")
                    }
                    t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : (0, s.hide)(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : (0, s.hide)(c), e.cancelButtonText && (u.innerHTML = (0, s.escapeHtml)(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = (0, s.escapeHtml)(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, (0, r.setFocusStyle)(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                    var g = !!e.doneFunction;
                    t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                };
            o["default"] = i, t.exports = o["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function (t, n, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                },
                r = function (e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                },
                s = function () {
                    return e.attachEvent && !e.addEventListener
                },
                l = function (t) {
                    "undefined" != typeof e && e.console && e.console.log("SweetAlert: " + t)
                },
                i = function (e, t) {
                    e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                    var n, o, a = "#";
                    for (o = 0; 3 > o; o++) n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
                    return a
                };
            o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function () {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document);
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function () {
    "use strict";
    var e = function () {};
    e.version = "2.0.5", window.addEventListener("mousewheel", function () {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function (r) {
        var o, s, a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            f = n.defaults,
            d = this,
            h = i.extend({}, f, r),
            g = [],
            p = !1,
            v = 0,
            m = u,
            w = !0,
            y = 0,
            S = !0,
            b = function () {
                for (var e in h) f.hasOwnProperty(e) || delete h[e];
                if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
                w = h.container === window || h.container === document.body || !document.body.contains(h.container), w && (h.container = window), y = z(), h.container.addEventListener("resize", T), h.container.addEventListener("scroll", T), h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval, E()
            },
            E = function () {
                h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval))
            },
            x = function () {
                return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container)
            },
            z = function () {
                return h.vertical ? i.get.height(h.container) : i.get.width(h.container)
            },
            C = this._setScrollPos = function (e) {
                h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e
            },
            F = function () {
                if (S && p) {
                    var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = v;
                    v = d.scrollPos();
                    var n = v - t;
                    0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function (e) {
                        e.update(!0)
                    })
                }
            },
            L = function () {
                o = i.rAF(F)
            },
            T = function (e) {
                "resize" == e.type && (y = z(), m = u), p !== !0 && (p = !0, L())
            },
            A = function () {
                if (!w && y != z()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                    }
                    h.container.dispatchEvent(e)
                }
                g.forEach(function (e) {
                    e.refresh()
                }), E()
            };
        this._options = h;
        var O = function (e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function (e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function (t) {
            if (i.type.Array(t)) t.forEach(function (e) {
                d.addScene(e)
            });
            else if (t instanceof e.Scene)
                if (t.controller() !== d) t.addTo(d);
                else if (g.indexOf(t) < 0) {
                g.push(t), g = O(g), t.on("shift.controller_sort", function () {
                    g = O(g)
                });
                for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n])
            }
            return d
        }, this.removeScene = function (e) {
            if (i.type.Array(e)) e.forEach(function (e) {
                d.removeScene(e)
            });
            else {
                var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove())
            }
            return d
        }, this.updateScene = function (t, n) {
            return i.type.Array(t) ? t.forEach(function (e) {
                d.updateScene(e, n)
            }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), p = O(p), L()), d
        }, this.update = function (e) {
            return T({
                type: "resize"
            }), e && F(), d
        }, this.scrollTo = function (n, r) {
            if (i.type.Number(n)) C.call(h.container, n, r);
            else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);
            else if (i.type.Function(n)) C = n;
            else {
                var o = i.get.elements(n)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                    var s = h.vertical ? "top" : "left",
                        a = i.get.offset(h.container),
                        l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r)
                }
            }
            return d
        }, this.scrollPos = function (e) {
            return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d)
        }, this.info = function (e) {
            var t = {
                size: y,
                vertical: h.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: h.container,
                isDocument: w
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function () {
            return d
        }, this.enabled = function (e) {
            return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S
        }, this.destroy = function (e) {
            window.clearTimeout(s);
            for (var t = g.length; t--;) g[t].destroy(e);
            return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null
        }, b(), d
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function (e, t) {
        n.defaults[e] = t
    }, e.Controller.extend = function (t) {
        var n = this;
        e.Controller = function () {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function (n) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = r.defaults,
            f = this,
            d = i.extend({}, u, n),
            h = a,
            g = 0,
            p = {
                start: 0,
                end: 0
            },
            v = 0,
            m = !0,
            w = function () {
                for (var e in d) u.hasOwnProperty(e) || delete d[e];
                for (var t in u) L(t);
                C()
            },
            y = {};
        this.on = function (e, t) {
            return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function (e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: i || "",
                    callback: t
                }))
            })), f
        }, this.off = function (e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function (e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1] || "",
                    o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function (e) {
                    for (var n = y[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                })
            }), f) : f
        }, this.trigger = function (t, n) {
            if (t) {
                var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = y[i];
                s && s.forEach(function (t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n))
                })
            }
            return f
        }, f.on("change.internal", function (e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update())
        }).on("shift.internal", function () {
            S(), f.update()
        }), this.addTo = function (t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(f), f.trigger("add", {
                controller: s
            }), f.update()), f
        }, this.enabled = function (e) {
            return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m
        }, this.remove = function () {
            if (s) {
                s.info("container").removeEventListener("resize", x);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove")
            }
            return f
        }, this.destroy = function (e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.off("*.*"), null
        }, this.update = function (e) {
            if (s)
                if (e)
                    if (s.enabled() && m) {
                        var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, f.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n
                        }), f.progress(t)
                    } else T && h === l && O(!0);
            else s.updateScene(f, !1);
            return f
        }, this.refresh = function () {
            return b(), E(), f
        }, this.progress = function (e) {
            if (arguments.length) {
                var t = !1,
                    n = h,
                    r = s ? s.info("scrollDirection") : "PAUSED",
                    i = d.reverse || e >= g;
                if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== l || i || O(), t) {
                    var o = {
                            progress: g,
                            state: h,
                            scrollDirection: r
                        },
                        u = h != n,
                        p = function (e) {
                            f.trigger(e, o)
                        };
                    u && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), u && h !== l && (p(h === a ? "start" : "end"), p("leave"))
                }
                return f
            }
            return g
        };
        var S = function () {
                p = {
                    start: v + d.offset
                }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration
            },
            b = function (e) {
                if (o) {
                    var t = "duration";
                    F(t, o.call(f)) && !e && (f.trigger("change", {
                        what: t,
                        newval: d[t]
                    }), f.trigger("shift", {
                        reason: t
                    }))
                }
            },
            E = function (e) {
                var n = 0,
                    r = d.triggerElement;
                if (s && r) {
                    for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var c = i.get.offset(r);
                    o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
                }
                var u = n != v;
                v = n, u && !e && f.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            x = function () {
                d.triggerHook > 0 && f.trigger("shift", {
                    reason: "containerResize"
                })
            },
            z = i.extend(r.validate, {
                duration: function (e) {
                    if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function () {
                            return s ? s.info("size") * t : 0
                        }
                    }
                    if (i.type.Function(e)) {
                        o = e;
                        try {
                            e = parseFloat(o())
                        } catch (n) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                    return e
                }
            }),
            C = function (e) {
                e = arguments.length ? [e] : Object.keys(z), e.forEach(function (e) {
                    var t;
                    if (z[e]) try {
                        t = z[e](d[e])
                    } catch (n) {
                        t = u[e]
                    } finally {
                        d[e] = t
                    }
                })
            },
            F = function (e, t) {
                var n = !1,
                    r = d[e];
                return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n
            },
            L = function (e) {
                f[e] || (f[e] = function (t) {
                    return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (f.trigger("change", {
                        what: e,
                        newval: d[e]
                    }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                        reason: e
                    })), f) : d[e]
                })
            };
        this.controller = function () {
            return s
        }, this.state = function () {
            return h
        }, this.scrollOffset = function () {
            return p.start
        }, this.triggerPosition = function () {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e
        };
        var T, A;
        f.on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && O(), t && _()
        }).on("progress.internal", function () {
            O()
        }).on("add.internal", function () {
            _()
        }).on("destroy.internal", function (e) {
            f.removePin(e.reset)
        });
        var O = function (e) {
                if (T && s) {
                    var t = s.info(),
                        n = A.spacer.firstChild;
                    if (e || h !== l) {
                        var r = {
                                position: A.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = i.css(n, "position") != r.position;
                        A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, i.css(n, r), o && _()
                    } else {
                        "fixed" != i.css(n, "position") && (i.css(n, {
                            position: "fixed"
                        }), _());
                        var u = i.get.offset(A.spacer, !0),
                            f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                        u[t.vertical ? "top" : "left"] += f, i.css(A.spacer.firstChild, {
                            top: u.top,
                            left: u.left
                        })
                    }
                }
            },
            _ = function () {
                if (T && s && A.inFlow) {
                    var e = h === l,
                        t = s.info("vertical"),
                        n = A.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(A.spacer, "display")),
                        o = {};
                    A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
                        width: i.get.width(A.spacer)
                    }) : i.css(T, {
                        width: "100%"
                    }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), A.relSize.height ? e ? i.css(T, {
                        height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                    }) : i.css(T, {
                        height: "100%"
                    }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), i.css(A.spacer, o)
                }
            },
            N = function () {
                s && T && h === l && !s.info("isDocument") && O()
            },
            P = function () {
                s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _()
            },
            D = function (e) {
                s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function (e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return f;
            if ("fixed" === i.css(e, "position")) return f;
            if (T) {
                if (T === e) return f;
                f.removePin()
            }
            T = e;
            var o = T.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none";
            var a = "absolute" != i.css(T, "position"),
                l = i.css(T, s.concat(["display"])),
                c = i.css(T, ["width", "height"]);
            T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = T.parentNode.insertBefore(document.createElement("div"), T),
                d = i.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || i.extend(d, i.css(T, ["width", "height"])), i.css(u, d), u.setAttribute(t, ""), i.addClass(u, n.spacerClass), A = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: a
                }, !T.___origStyle) {
                T.___origStyle = {};
                var h = T.style,
                    g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function (e) {
                    T.___origStyle[e] = h[e] || ""
                })
            }
            return A.relSize.width && i.css(u, {
                width: c.width
            }), A.relSize.height && i.css(u, {
                height: c.height
            }), u.appendChild(T), i.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), O(), f
        }, this.removePin = function (e) {
            if (T) {
                if (h === l && O(!0), e || !s) {
                    var n = A.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = A.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function (e) {
                            margins[e] = r[e] || ""
                        }), i.css(n, margins)
                    }
                    A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle)
                }
                window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0
            }
            return f
        };
        var R, k = [];
        return f.on("destroy.internal", function (e) {
            f.removeClassToggle(e.reset)
        }), this.setClassToggle = function (e, t) {
            var n = i.get.elements(e);
            return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(), R = t, k = n, f.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function (e) {
                    t(e, R)
                })
            }), f) : f
        }, this.removeClassToggle = function (e) {
            return e && k.forEach(function (e) {
                i.removeClass(e, R)
            }), f.off("start.internal_class end.internal_class"), R = void 0, k = [], f
        }, w(), f
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function (e) {
                if (e = parseFloat(e), !i.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function (e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function (e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function (e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function (e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e))
    }, e.Scene.extend = function (t) {
        var n = this;
        e.Scene = function () {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function (e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var i = e._util = function (e) {
        var t, n = {},
            r = function (e) {
                return parseFloat(e) || 0
            },
            i = function (t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            o = function (t, n, o, s) {
                if (n = n === document ? e : n, n === e) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                }
                return a
            },
            s = function (e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                    return e[1].toUpperCase()
                })
            };
        n.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function (e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function (t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function () {
                    t(n + r)
                }, r);
            return a = n + r, i
        }), u || (u = function (t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function (e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function (e) {
            return "string" === f(e)
        }, f.Function = function (e) {
            return "function" === f(e)
        }, f.Array = function (e) {
            return Array.isArray(e)
        }, f.Number = function (e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function (e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = n.get = {};
        return d.elements = function (t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (r) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))
                for (var i = 0, o = n.length = t.length; o > i; i++) {
                    var s = t[i];
                    n[i] = f.DomElement(s) ? s : d.elements(s)
                } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, d.scrollTop = function (t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, d.scrollLeft = function (t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, d.width = function (e, t, n) {
            return o("width", e, t, n)
        }, d.height = function (e, t, n) {
            return o("height", e, t, n)
        }, d.offset = function (e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
            }
            return n
        }, n.addClass = function (e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function (e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function (e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {},
                    r = i(e);
                return t.forEach(function (e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
});
/*!
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        // Loads whole gsap package onto global scope.
        require('gsap');
        factory(require('scrollmagic'), TweenMax, TimelineMax);
    } else {
        // Browser globals
        factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
    }
}(this, function (ScrollMagic, Tween, Timeline) {
    "use strict";
    var NAMESPACE = "animation.gsap";

    // (BUILD) - REMOVE IN MINIFY - START
    var
        console = window.console || {},
        err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
    if (!ScrollMagic) {
        err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
    }
    if (!Tween) {
        err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
    }
    // (BUILD) - REMOVE IN MINIFY - END

    /*
     * ----------------------------------------------------------------
     * Extensions for Scene
     * ----------------------------------------------------------------
     */
    /**
     * Every instance of ScrollMagic.Scene now accepts an additional option.  
     * See {@link ScrollMagic.Scene} for a complete list of the standard options.
     * @memberof! animation.GSAP#
     * @method new ScrollMagic.Scene(options)
     * @example
     * var scene = new ScrollMagic.Scene({tweenChanges: true});
     *
     * @param {object} [options] - Options for the Scene. The options can be updated at any time.
     * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
                                                       Does not affect animations where duration is `0`.
     */
    /**
     * **Get** or **Set** the tweenChanges option value.  
     * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
     * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
     * @memberof! animation.GSAP#
     * @method Scene.tweenChanges
     * 
     * @example
     * // get the current tweenChanges option
     * var tweenChanges = scene.tweenChanges();
     *
     * // set new tweenChanges option
     * scene.tweenChanges(true);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
     * @returns {boolean} `get` -  Current tweenChanges option value.
     * @returns {Scene} `set` -  Parent object for chaining.
     */
    // add option (TODO: DOC (private for dev))
    ScrollMagic.Scene.addOption(
        "tweenChanges", // name
        false, // default
        function (val) { // validation callback
            return !!val;
        }
    );
    // extend scene
    ScrollMagic.Scene.extend(function () {
        var Scene = this,
            _tween;

        // (BUILD) - REMOVE IN MINIFY - START
        var log = function () {
            if (Scene._log) { // not available, when main source minified
                Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                Scene._log.apply(this, arguments);
            }
        };
        // (BUILD) - REMOVE IN MINIFY - END

        // set listeners
        Scene.on("progress.plugin_gsap", function () {
            updateTweenProgress();
        });
        Scene.on("destroy.plugin_gsap", function (e) {
            Scene.removeTween(e.reset);
        });

        /**
         * Update the tween progress to current position.
         * @private
         */
        var updateTweenProgress = function () {
            if (_tween) {
                var
                    progress = Scene.progress(),
                    state = Scene.state();
                if (_tween.repeat && _tween.repeat() === -1) {
                    // infinite loop, so not in relation to progress
                    if (state === 'DURING' && _tween.paused()) {
                        _tween.play();
                    } else if (state !== 'DURING' && !_tween.paused()) {
                        _tween.pause();
                    }
                } else if (progress != _tween.progress()) { // do we even need to update the progress?
                    // no infinite loop - so should we just play or go to a specific point in time?
                    if (Scene.duration() === 0) {
                        // play the animation
                        if (progress > 0) { // play from 0 to 1
                            _tween.play();
                        } else { // play from 1 to 0
                            _tween.reverse();
                        }
                    } else {
                        // go to a specific point in time
                        if (Scene.tweenChanges() && _tween.tweenTo) {
                            // go smooth
                            _tween.tweenTo(progress * _tween.duration());
                        } else {
                            // just hard set it
                            _tween.progress(progress).pause();
                        }
                    }
                }
            }
        };

        /**
         * Add a tween to the scene.  
         * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
         * 
         * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
         * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
         * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
         *
         * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
         * @memberof! animation.GSAP#
         *
         * @example
         * // add a single tween directly
         * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
         *
         * // add a single tween via variable
         * var tween = TweenMax.to("obj"), 1, {x: 100};
         * scene.setTween(tween);
         *
         * // add multiple tweens, wrapped in a timeline.
         * var timeline = new TimelineMax();
         * var tween1 = TweenMax.from("obj1", 1, {x: 100});
         * var tween2 = TweenMax.to("obj2", 1, {y: 100});
         * timeline
         *		.add(tween1)
         *		.add(tween2);
         * scene.addTween(timeline);
         *
         * // short hand to add a TweenMax.to() tween
         * scene.setTween("obj3", 0.5, {y: 100});
         *
         * // short hand to add a TweenMax.to() tween for 1 second
         * // this is useful, when the scene has a duration and the tween duration isn't important anyway
         * scene.setTween("obj3", {y: 100});
         *
         * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
         * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
         * @param {object} params - The parameters for the tween
         * @returns {Scene} Parent object for chaining.
         */
        Scene.setTween = function (TweenObject, duration, params) {
            var newTween;
            if (arguments.length > 1) {
                if (arguments.length < 3) {
                    params = duration;
                    duration = 1;
                }
                TweenObject = Tween.to(TweenObject, duration, params);
            }
            try {
                // wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
                if (Timeline) {
                    newTween = new Timeline({
                            smoothChildTiming: true
                        })
                        .add(TweenObject);
                } else {
                    newTween = TweenObject;
                }
                newTween.pause();
            } catch (e) {
                log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
                return Scene;
            }
            if (_tween) { // kill old tween?
                Scene.removeTween();
            }
            _tween = newTween;

            // some properties need to be transferred it to the wrapper, otherwise they would get lost.
            if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
                _tween.repeat(-1);
                _tween.yoyo(TweenObject.yoyo());
            }
            // (BUILD) - REMOVE IN MINIFY - START
            // Some tween validations and debugging helpers

            if (Scene.tweenChanges() && !_tween.tweenTo) {
                log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
            }

            // check if there are position tweens defined for the trigger and warn about it :)
            if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
                var
                    triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
                    vertical = Scene.controller().info("vertical");
                triggerTweens.forEach(function (value, index) {
                    var
                        tweenvars = value.vars.css || value.vars,
                        condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
                    if (condition) {
                        log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
                        return false;
                    }
                });
            }

            // warn about tween overwrites, when an element is tweened multiple times
            if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
                var
                    list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween], // get all nested tween objects
                    newCallback = function () {
                        log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
                    };
                for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
                    /*jshint loopfunc: true */
                    thisTween = list[i];
                    if (oldCallback !== newCallback) { // if tweens is added more than once
                        oldCallback = thisTween.vars.onOverwrite;
                        thisTween.vars.onOverwrite = function () {
                            if (oldCallback) {
                                oldCallback.apply(this, arguments);
                            }
                            newCallback.apply(this, arguments);
                        };
                    }
                }
            }
            // (BUILD) - REMOVE IN MINIFY - END
            log(3, "added tween");

            updateTweenProgress();
            return Scene;
        };

        /**
         * Remove the tween from the scene.  
         * This will terminate the control of the Scene over the tween.
         *
         * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
         * @memberof! animation.GSAP#
         *
         * @example
         * // remove the tween from the scene without resetting it
         * scene.removeTween();
         *
         * // remove the tween from the scene and reset it to initial position
         * scene.removeTween(true);
         *
         * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
         * @returns {Scene} Parent object for chaining.
         */
        Scene.removeTween = function (reset) {
            if (_tween) {
                if (reset) {
                    _tween.progress(0).pause();
                }
                _tween.kill();
                _tween = undefined;
                log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
            }
            return Scene;
        };

    });
}));
/*!
 * 
 *    medium-zoom v0.1.2
 *    Medium-like zoom on your pictures in pure JavaScript
 *    Copyright (c) 2017 Francois Chalifour
 *    https://github.com/francoischalifour/medium-zoom
 *    MIT license
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("medium-zoom", [], factory);
    else if (typeof exports === 'object')
        exports["medium-zoom"] = factory();
    else
        root["medium-zoom"] = factory();
})(this, function () {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // identity function for calling harmony imports with the correct context
        /******/
        __webpack_require__.i = function (value) {
            return value;
        };
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/
                    configurable: false,
                    /******/
                    enumerable: true,
                    /******/
                    get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 2);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function (module, exports, __webpack_require__) {

            // style-loader: Adds some css to the DOM by adding a <style> tag

            // load the styles
            var content = __webpack_require__(3);
            if (typeof content === 'string') content = [
                [module.i, content, '']
            ];
            // add the styles to the DOM
            var update = __webpack_require__(5)(content, {});
            if (content.locals) module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./medium-zoom.css", function () {
                        var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./medium-zoom.css");
                        if (typeof newContent === 'string') newContent = [
                            [module.id, newContent, '']
                        ];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }

            /***/
        }),
        /* 1 */
        /***/
        (function (module, exports) {

            module.exports = function (module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function () {};
                    module.paths = [];
                    // module.parent = undefined by default
                    if (!module.children) module.children = [];
                    Object.defineProperty(module, "loaded", {
                        enumerable: true,
                        get: function () {
                            return module.l;
                        }
                    });
                    Object.defineProperty(module, "id", {
                        enumerable: true,
                        get: function () {
                            return module.i;
                        }
                    });
                    module.webpackPolyfill = 1;
                }
                return module;
            };


            /***/
        }),
        /* 2 */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";
            /* WEBPACK VAR INJECTION */
            (function (module) {

                var _extends = Object.assign || function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                    return typeof obj;
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };

                function _toConsumableArray(arr) {
                    if (Array.isArray(arr)) {
                        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                            arr2[i] = arr[i];
                        }
                        return arr2;
                    } else {
                        return Array.from(arr);
                    }
                }

                /**
                 * Adds a zoom effect on a selection of images when clicked.
                 *
                 * @param {(string|Object[])} [selector] The images to apply the zoom to
                 * @param {number} [options.margin=0] Space outside the zoomed image
                 * @param {string} [options.background="#fff"] The color of the overlay
                 * @param {number} [options.scrollOffset=48] Number of pixels to scroll to dismiss the zoom
                 * @param {boolean} [options.metaClick=true] Enables the action on meta click
                 */
                var mediumZoom = function mediumZoom(selector) {
                    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                        _ref$margin = _ref.margin,
                        margin = _ref$margin === undefined ? 0 : _ref$margin,
                        _ref$background = _ref.background,
                        background = _ref$background === undefined ? '#fff' : _ref$background,
                        _ref$scrollOffset = _ref.scrollOffset,
                        scrollOffset = _ref$scrollOffset === undefined ? 48 : _ref$scrollOffset,
                        _ref$metaClick = _ref.metaClick,
                        metaClick = _ref$metaClick === undefined ? true : _ref$metaClick;

                    __webpack_require__(0);

                    //var SUPPORTED_FORMATS = ['IMG', 'PICTURE', 'SVG', 'DIV'];
                    var SUPPORTED_FORMATS = ['IMG', 'PICTURE', 'SVG', 'DIV'];
                    var KEY_ESC = 27;
                    var KEY_Q = 81;
                    var CANCEL_KEYS = [KEY_ESC, KEY_Q];

                    var isSupported = function isSupported(img) {
                        return SUPPORTED_FORMATS.includes(img.tagName);
                    };
                    var isScaled = function isScaled(img) {
                        return img.naturalWidth !== img.width;
                    };
                    var isArrayLike = function isArrayLike(item) {
                        return !!item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item.length && typeof item.length === 'number' && item.length > 0;
                    };

                    var getImages = function getImages() {
                        try {
                            return Array.isArray(selector) ? selector.filter(isSupported) : isArrayLike(selector) ? [].concat(_toConsumableArray(selector)).filter(isSupported) : typeof selector === 'string' ? [].concat(_toConsumableArray(document.querySelectorAll(selector))).filter(isSupported) : [].concat(_toConsumableArray(document.querySelectorAll(SUPPORTED_FORMATS.map(function (attr) {
                                return attr.toLowerCase();
                            }).join(',')))).filter(isScaled);
                        } catch (err) {
                            throw new SyntaxError('[medium-zoom] Unknown selector when applying the zoom.' + 'Expects a CSS selector, an array-like or an array.' + 'Check https://github.com/francoischalifour/medium-zoom for more.');
                        }
                    };

                    var createOverlay = function createOverlay() {
                        var overlay = document.createElement('div');
                        overlay.classList.add('medium-zoom-overlay');
                        overlay.style.backgroundColor = options.background;

                        return overlay;
                    };

                    var zoom = function zoom() {
                        if (!target) return;

                        var event = new Event('show');
                        target.dispatchEvent(event);

                        scrollTop = document.body.scrollTop;
                        isAnimating = true;

                        document.body.appendChild(overlay);

                        requestAnimationFrame(function () {
                            document.body.classList.add('medium-zoom--open');
                        });

                        target.classList.add('medium-zoom-image--open');

                        $(event.target).parent().parent().parent().addClass('tween-zindex-fix');

                        target.addEventListener('transitionend', onZoomEnd);

                        animateTarget();
                    };

                    var zoomOut = function zoomOut() {
                        if (!target) return;

                        var event = new Event('hide');
                        target.dispatchEvent(event);

                        setTimeout(function () {
                            isAnimating = true;
                            document.body.classList.remove('medium-zoom--open');
                            target.style.transform = 'none';

                            target.addEventListener('transitionend', onZoomOutEnd);
                        }, 150);
                    };

                    var triggerZoom = function triggerZoom(event) {
                        if (!target) {
                            target = event ? event.target : images[0];
                            zoom();
                        } else {
                            zoomOut();
                        }
                    };

                    var update = function update() {
                        var newOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        options = _extends({}, options, newOptions);

                        if (options.background) {
                            overlay.style.backgroundColor = options.background;
                        }

                        return options;
                    };

                    var addEventListeners = function addEventListeners(type, listener) {
                        images.forEach(function (image) {
                            image.addEventListener(type, listener);
                        });
                    };

                    var detach = function detach() {
                        var doDetach = function doDetach() {
                            var event = new Event('detach');

                            images.forEach(function (image) {
                                image.classList.remove('medium-zoom-image');
                                image.removeEventListener('click', onClick);
                                image.dispatchEvent(event);
                            });

                            if (target) {
                                target.removeEventListener('transitionend', doDetach);
                            }
                        };

                        if (!target) {
                            doDetach();
                        } else {
                            zoomOut();
                            target.addEventListener('transitionend', doDetach);
                        }
                    };

                    var onClick = function onClick(event) {
                        if (event.metaKey || event.ctrlKey) {
                            if (options.metaClick) {
                                return window.open(event.target.getAttribute('data-original') || event.target.parentNode.href || event.target.src, '_blank');
                            }
                        }

                        event.preventDefault();

                        triggerZoom(event);
                    };

                    var onZoomEnd = function onZoomEnd() {
                        isAnimating = false;
                        target.removeEventListener('transitionend', onZoomEnd);

                        var event = new Event('shown');
                        target.dispatchEvent(event);
                    };

                    var onZoomOutEnd = function onZoomOutEnd() {
                        if (!target) return;

                        document.body.removeChild(overlay);
                        target.classList.remove('medium-zoom-image--open');
                        //console.log("qq");


                        isAnimating = false;
                        target.removeEventListener('transitionend', onZoomOutEnd);

                        var event = new Event('hidden');
                        target.dispatchEvent(event);

                        $(event.target).parent().parent().parent().removeClass('tween-zindex-fix');

                        target = null;
                    };

                    var onScroll = function onScroll() {
                        if (isAnimating || !target) return;
                        //if (Math.abs(scrollTop - document.body.scrollTop) > options.scrollOffset) {
                        zoomOut();
                        //}
                    };

                    var onDismiss = function onDismiss(event) {
                        if (CANCEL_KEYS.includes(event.keyCode || event.which)) {
                            zoomOut();
                        }
                    };

                    var animateTarget = function animateTarget() {
                        if (!target) return;

                        var windowWidth = window.innerWidth;
                        var windowHeight = window.innerHeight;

                        var viewportWidth = windowWidth - options.margin * 2;
                        var viewportHeight = windowHeight - options.margin * 2;

                        var _target = target,
                            width = _target.width,
                            height = _target.height,
                            _target$naturalWidth = _target.naturalWidth,
                            naturalWidth = _target$naturalWidth === undefined ? +Infinity : _target$naturalWidth,
                            _target$naturalHeight = _target.naturalHeight,
                            naturalHeight = _target$naturalHeight === undefined ? +Infinity : _target$naturalHeight;
                        if (!width) {
                            var TestImage = _target.getAttribute("data-src");
                            width = _target.offsetWidth;
                            height = _target.offsetHeight;
                            _target$naturalWidth = _target.getAttribute("data-width");
                            naturalWidth = _target$naturalWidth === undefined ? +Infinity : _target$naturalWidth,
                                _target$naturalHeight = _target.getAttribute("data-height");
                            naturalHeight = _target$naturalHeight === undefined ? +Infinity : _target$naturalHeight;
                            if (_target$naturalWidth == 0) {
                                var aspectRatiois = width / height;
                                _target$naturalWidth = 1600,
                                    naturalWidth = _target$naturalWidth === undefined ? +Infinity : _target$naturalWidth,
                                    _target$naturalHeight = 1600 / aspectRatiois,
                                    naturalHeight = _target$naturalHeight === undefined ? +Infinity : _target$naturalHeight;
                            }
                        }
                        var _target$getBoundingCl = target.getBoundingClientRect(),
                            top = _target$getBoundingCl.top,
                            left = _target$getBoundingCl.left;

                        var isCenterAligned = Math.abs(windowWidth / 2 - (left + width / 2)) <= 10;

                        var scaleX = Math.min(naturalWidth, viewportWidth) / width;
                        var scaleY = Math.min(naturalHeight, viewportHeight) / height;
                        var scale = Math.min(scaleX, scaleY) || 1;
                        var translateX = isCenterAligned ? 0 : (-left + (viewportWidth - width) / 2) / scale;
                        var translateY = (-top + (viewportHeight - height) / 2 + options.margin) / scale;

                        target.style.transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';
                    };

                    var options = {
                        margin: margin,
                        background: background,
                        scrollOffset: scrollOffset,
                        metaClick: metaClick
                    };

                    if (selector instanceof Object) {
                        options = _extends({}, options, selector);
                    }

                    var images = getImages(selector);
                    var overlay = createOverlay();

                    var target = null;
                    var scrollTop = 0;
                    var isAnimating = false;

                    images.forEach(function (elem) {
                        elem.classList.add('medium-zoom-image');
                        elem.addEventListener('click', onClick);
                    });
                    overlay.addEventListener('click', zoomOut);
                    document.addEventListener('scroll', onScroll);
                    document.addEventListener('keyup', onDismiss);
                    window.addEventListener('resize', zoomOut);

                    return {
                        show: triggerZoom,
                        hide: zoomOut,
                        toggle: triggerZoom,
                        update: update,
                        addEventListeners: addEventListeners,
                        detach: detach,
                        images: images,
                        options: options
                    };
                };

                if (typeof window !== 'undefined') {
                    window.mediumZoom = mediumZoom;
                } else if (module && module.exports) {
                    module.exports = mediumZoom;
                }
                /* WEBPACK VAR INJECTION */
            }.call(exports, __webpack_require__(1)(module)))

            /***/
        }),
        /* 3 */
        /***/
        (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(4)();
            // imports


            // module
            exports.push([module.i, ".medium-zoom-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms;\n  will-change: opacity;\n}\n\n.medium-zoom--open .medium-zoom-overlay {\n  cursor: pointer;\n  cursor: zoom-out;\n  opacity: 1;\n}\n\n.medium-zoom-image {\n  cursor: pointer;\n  cursor: zoom-in;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.medium-zoom-image--open {\n  position: relative;\n  z-index: 999;\n  cursor: pointer;\n  cursor: zoom-out;\n  will-change: transform;\n}\n", ""]);

            // exports


            /***/
        }),
        /* 4 */
        /***/
        (function (module, exports) {

            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function () {
                var list = [];

                // return the list of modules as css string
                list.toString = function toString() {
                    var result = [];
                    for (var i = 0; i < this.length; i++) {
                        var item = this[i];
                        if (item[2]) {
                            result.push("@media " + item[2] + "{" + item[1] + "}");
                        } else {
                            result.push(item[1]);
                        }
                    }
                    return result.join("");
                };

                // import a list of modules into the list
                list.i = function (modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [
                            [null, modules, ""]
                        ];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if (mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };


            /***/
        }),
        /* 5 */
        /***/
        (function (module, exports) {

            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
            var stylesInDom = {},
                memoize = function (fn) {
                    var memo;
                    return function () {
                        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                        return memo;
                    };
                },
                isOldIE = memoize(function () {
                    return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
                }),
                getHeadElement = memoize(function () {
                    return document.head || document.getElementsByTagName("head")[0];
                }),
                singletonElement = null,
                singletonCounter = 0,
                styleElementsInsertedAtTop = [];

            module.exports = function (list, options) {
                if (typeof DEBUG !== "undefined" && DEBUG) {
                    if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                }

                options = options || {};
                // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (typeof options.singleton === "undefined") options.singleton = isOldIE();

                // By default, add <style> tags to the bottom of <head>.
                if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

                var styles = listToStyles(list);
                addStylesToDom(styles, options);

                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        domStyle.refs--;
                        mayRemove.push(domStyle);
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList);
                        addStylesToDom(newStyles, options);
                    }
                    for (var i = 0; i < mayRemove.length; i++) {
                        var domStyle = mayRemove[i];
                        if (domStyle.refs === 0) {
                            for (var j = 0; j < domStyle.parts.length; j++)
                                domStyle.parts[j]();
                            delete stylesInDom[domStyle.id];
                        }
                    }
                };
            }

            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    if (domStyle) {
                        domStyle.refs++;
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    } else {
                        var parts = [];
                        for (var j = 0; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }

            function listToStyles(list) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id])
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    else
                        newStyles[id].parts.push(part);
                }
                return styles;
            }

            function insertStyleElement(options, styleElement) {
                var head = getHeadElement();
                var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
                if (options.insertAt === "top") {
                    if (!lastStyleElementInsertedAtTop) {
                        head.insertBefore(styleElement, head.firstChild);
                    } else if (lastStyleElementInsertedAtTop.nextSibling) {
                        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
                    } else {
                        head.appendChild(styleElement);
                    }
                    styleElementsInsertedAtTop.push(styleElement);
                } else if (options.insertAt === "bottom") {
                    head.appendChild(styleElement);
                } else {
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                }
            }

            function removeStyleElement(styleElement) {
                styleElement.parentNode.removeChild(styleElement);
                var idx = styleElementsInsertedAtTop.indexOf(styleElement);
                if (idx >= 0) {
                    styleElementsInsertedAtTop.splice(idx, 1);
                }
            }

            function createStyleElement(options) {
                var styleElement = document.createElement("style");
                styleElement.type = "text/css";
                insertStyleElement(options, styleElement);
                return styleElement;
            }

            function createLinkElement(options) {
                var linkElement = document.createElement("link");
                linkElement.rel = "stylesheet";
                insertStyleElement(options, linkElement);
                return linkElement;
            }

            function addStyle(obj, options) {
                var styleElement, update, remove;

                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    styleElement = singletonElement || (singletonElement = createStyleElement(options));
                    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
                } else if (obj.sourceMap &&
                    typeof URL === "function" &&
                    typeof URL.createObjectURL === "function" &&
                    typeof URL.revokeObjectURL === "function" &&
                    typeof Blob === "function" &&
                    typeof btoa === "function") {
                    styleElement = createLinkElement(options);
                    update = updateLink.bind(null, styleElement);
                    remove = function () {
                        removeStyleElement(styleElement);
                        if (styleElement.href)
                            URL.revokeObjectURL(styleElement.href);
                    };
                } else {
                    styleElement = createStyleElement(options);
                    update = applyToTag.bind(null, styleElement);
                    remove = function () {
                        removeStyleElement(styleElement);
                    };
                }

                update(obj);

                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                            return;
                        update(obj = newObj);
                    } else {
                        remove();
                    }
                };
            }

            var replaceText = (function () {
                var textStore = [];

                return function (index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            })();

            function applyToSingletonTag(styleElement, index, remove, obj) {
                var css = remove ? "" : obj.css;

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = replaceText(index, css);
                } else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = styleElement.childNodes;
                    if (childNodes[index]) styleElement.removeChild(childNodes[index]);
                    if (childNodes.length) {
                        styleElement.insertBefore(cssNode, childNodes[index]);
                    } else {
                        styleElement.appendChild(cssNode);
                    }
                }
            }

            function applyToTag(styleElement, obj) {
                var css = obj.css;
                var media = obj.media;

                if (media) {
                    styleElement.setAttribute("media", media)
                }

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                } else {
                    while (styleElement.firstChild) {
                        styleElement.removeChild(styleElement.firstChild);
                    }
                    styleElement.appendChild(document.createTextNode(css));
                }
            }

            function updateLink(linkElement, obj) {
                var css = obj.css;
                var sourceMap = obj.sourceMap;

                if (sourceMap) {
                    // http://stackoverflow.com/a/26603875
                    css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
                }

                var blob = new Blob([css], {
                    type: "text/css"
                });

                var oldSrc = linkElement.href;

                linkElement.href = URL.createObjectURL(blob);

                if (oldSrc)
                    URL.revokeObjectURL(oldSrc);
            }


            /***/
        })
        /******/
    ]);
});
/*
 * BackgroundCheck
 * http://kennethcachia.com/background-check
 *
 * v1.2.2
 */

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.BackgroundCheck = factory(root);
    }

}(this, function () {

    'use strict';

    var resizeEvent = window.orientation !== undefined ? 'orientationchange' : 'resize';
    var supported;
    var canvas;
    var context;
    var throttleDelay;
    var viewport;
    var attrs = {};


    /*
     * Initializer
     */
    function init(a) {

        if (a === undefined || a.targets === undefined) {
            throw 'Missing attributes';
        }

        // Default values
        attrs.debug = checkAttr(a.debug, false);
        attrs.debugOverlay = checkAttr(a.debugOverlay, false);
        attrs.targets = getElements(a.targets);
        attrs.images = getElements(a.images || 'img', true);
        attrs.changeParent = checkAttr(a.changeParent, false);
        attrs.threshold = checkAttr(a.threshold, 50);
        attrs.minComplexity = checkAttr(a.minComplexity, 30);
        attrs.minOverlap = checkAttr(a.minOverlap, 50);
        attrs.windowEvents = checkAttr(a.windowEvents, true);
        attrs.maxDuration = checkAttr(a.maxDuration, 500);

        attrs.mask = checkAttr(a.mask, {
            r: 0,
            g: 255,
            b: 0
        });

        attrs.classes = checkAttr(a.classes, {
            dark: 'background--dark',
            light: 'background--light',
            complex: 'background--complex'
        });

        if (supported === undefined) {
            checkSupport();

            if (supported) {
                canvas.style.position = 'fixed';
                canvas.style.top = '0px';
                canvas.style.left = '0px';
                canvas.style.width = '100%';
                canvas.style.height = '100%';

                window.addEventListener(resizeEvent, throttle.bind(null, function () {
                    resizeCanvas();
                    check();
                }));

                window.addEventListener('scroll', throttle.bind(null, check));

                resizeCanvas();
                check();
            }
        }
    }


    /*
     * Destructor
     */
    function destroy() {
        supported = null;
        canvas = null;
        context = null;
        attrs = {};

        if (throttleDelay) {
            clearTimeout(throttleDelay);
        }
    }


    /*
     * Output debug logs
     */
    function log(msg) {

        if (get('debug')) {
            console.log(msg);
        }
    }


    /*
     * Get attribute value, use a default
     * when undefined
     */
    function checkAttr(value, def) {
        checkType(value, typeof def);
        return (value === undefined) ? def : value;
    }


    /*
     * Reject unwanted types
     */
    function checkType(value, type) {

        if (value !== undefined && typeof value !== type) {
            throw 'Incorrect attribute type';
        }
    }


    /*
     * Convert elements with background-image
     * to Images
     */
    function checkForCSSImages(els) {
        var el;
        var url;
        var list = [];

        for (var e = 0; e < els.length; e++) {
            el = els[e];
            list.push(el);

            if (el.tagName !== 'IMG') {
                url = window.getComputedStyle(el).backgroundImage;

                // Ignore multiple backgrounds
                if (url.split(/,url|, url/).length > 1) {
                    throw 'Multiple backgrounds are not supported';
                }

                if (url && url !== 'none') {
                    list[e] = {
                        img: new Image(),
                        el: list[e]
                    };

                    url = url.slice(4, -1);
                    url = url.replace(/"/g, '');

                    list[e].img.src = url;
                    log('CSS Image - ' + url);
                } else {
                    throw 'Element is not an <img> but does not have a background-image';
                }
            }
        }

        return list;
    }


    /*
     * Check for String, Element or NodeList
     */
    function getElements(selector, convertToImages) {
        var els = selector;

        if (typeof selector === 'string') {
            els = document.querySelectorAll(selector);
        } else if (selector && selector.nodeType === 1) {
            els = [selector];
        }

        if (!els || els.length === 0 || els.length === undefined) {
            throw 'Elements not found';
        } else {

            if (convertToImages) {
                els = checkForCSSImages(els);
            }

            els = Array.prototype.slice.call(els);
        }

        return els;
    }


    /*
     * Check if browser supports <canvas>
     */
    function checkSupport() {
        canvas = document.createElement('canvas');

        if (canvas && canvas.getContext) {
            context = canvas.getContext('2d');
            supported = true;
        } else {
            supported = false;
        }

        showDebugOverlay();
    }


    /*
     * Show <canvas> on top of page
     */
    function showDebugOverlay() {

        if (get('debugOverlay')) {
            canvas.style.opacity = 0.5;
            canvas.style.pointerEvents = 'none';
            document.body.appendChild(canvas);
        } else {

            // Check if it was previously added
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        }
    }


    /*
     * Stop if it's slow
     */
    function kill(start) {
        var duration = new Date().getTime() - start;

        log('Duration: ' + duration + 'ms');

        if (duration > get('maxDuration')) {
            // Log a message even when debug is false
            console.log('BackgroundCheck - Killed');
            removeClasses();
            destroy();
        }
    }


    /*
     * Set width and height of <canvas>
     */
    function resizeCanvas() {
        viewport = {
            left: 0,
            top: 0,
            right: document.body.clientWidth,
            bottom: window.innerHeight
        };

        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;
    }


    /*
     * Process px and %, discard anything else
     */
    function getValue(css, parent, delta) {
        var value;
        var percentage;

        if (css.indexOf('px') !== -1) {
            value = parseFloat(css);
        } else if (css.indexOf('%') !== -1) {
            value = parseFloat(css);
            percentage = value / 100;
            value = percentage * parent;

            if (delta) {
                value -= delta * percentage;
            }
        } else {
            value = parent;
        }

        return value;
    }

    function getObjectFitSize(contains /* true = contain, false = cover */ , containerWidth, containerHeight, width, height) {
        var doRatio = width / height;
        var cRatio = containerWidth / containerHeight;
        var targetWidth = 0;
        var targetHeight = 0;
        var test = contains ? (doRatio > cRatio) : (doRatio < cRatio);

        if (test) {
            targetWidth = containerWidth;
            targetHeight = targetWidth / doRatio;
        } else {
            targetHeight = containerHeight;
            targetWidth = targetHeight * doRatio;
        }

        return {
            width: targetWidth,
            height: targetHeight,
            x: (containerWidth - targetWidth) / 2,
            y: (containerHeight - targetHeight) / 2
        };
    }


    /*
     * Calculate top, left, width and height
     * using the object's CSS
     */
    function calculateAreaFromCSS(obj) {
        var css = window.getComputedStyle(obj.el);

        // Force no-repeat and padding-box
        obj.el.style.backgroundRepeat = 'no-repeat';
        obj.el.style.backgroundOrigin = 'padding-box';

        // Background Size
        var size = css.backgroundSize.split(' ');
        var width = size[0];
        var height = size[1] === undefined ? 'auto' : size[1];

        var parentRatio = obj.el.clientWidth / obj.el.clientHeight;
        var imgRatio = obj.img.naturalWidth / obj.img.naturalHeight;

        if (width === 'cover') {

            if (parentRatio >= imgRatio) {
                width = '100%';
                height = 'auto';
            } else {
                width = 'auto';
                size[0] = 'auto';
                height = '100%';
            }

        } else if (width === 'contain') {

            if (1 / parentRatio < 1 / imgRatio) {
                width = 'auto';
                size[0] = 'auto';
                height = '100%';
            } else {
                width = '100%';
                height = 'auto';
            }
        }

        if (width === 'auto') {
            width = obj.img.naturalWidth;
        } else {
            width = getValue(width, obj.el.clientWidth);
        }

        if (height === 'auto') {
            height = (width / obj.img.naturalWidth) * obj.img.naturalHeight;
        } else {
            height = getValue(height, obj.el.clientHeight);
        }

        if (size[0] === 'auto' && size[1] !== 'auto') {
            width = (height / obj.img.naturalHeight) * obj.img.naturalWidth;
        }

        var position = css.backgroundPosition;

        // Fix inconsistencies between browsers
        if (position === 'top') {
            position = '50% 0%';
        } else if (position === 'left') {
            position = '0% 50%';
        } else if (position === 'right') {
            position = '100% 50%';
        } else if (position === 'bottom') {
            position = '50% 100%';
        } else if (position === 'center') {
            position = '50% 50%';
        }

        position = position.split(' ');

        var x;
        var y;

        // Two-value syntax vs Four-value syntax
        if (position.length === 4) {
            x = position[1];
            y = position[3];
        } else {
            x = position[0];
            y = position[1];
        }

        // Use a default value
        y = y || '50%';

        // Background Position
        x = getValue(x, obj.el.clientWidth, width);
        y = getValue(y, obj.el.clientHeight, height);

        // Take care of ex: background-position: right 20px bottom 20px;
        if (position.length === 4) {

            if (position[0] === 'right') {
                x = obj.el.clientWidth - obj.img.naturalWidth - x;
            }

            if (position[2] === 'bottom') {
                y = obj.el.clientHeight - obj.img.naturalHeight - y;
            }
        }

        x += obj.el.getBoundingClientRect().left;
        y += obj.el.getBoundingClientRect().top;

        return {
            left: Math.floor(x),
            right: Math.floor(x + width),
            top: Math.floor(y),
            bottom: Math.floor(y + height),
            width: Math.floor(width),
            height: Math.floor(height)
        };
    }

    function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
        var oRatio = width / height,
            cRatio = cWidth / cHeight;
        return function () {
            if (contains ? (oRatio > cRatio) : (oRatio < cRatio)) {
                this.width = cWidth;
                this.height = cWidth / oRatio;
            } else {
                this.width = cHeight * oRatio;
                this.height = cHeight;
            }
            this.left = (cWidth - this.width) * (pos / 100);
            this.right = this.width + this.left;
            return this;
        }.call({});
    }

    function getImgSizeInfo(img) {
        var comp_style = window.getComputedStyle(img);
        var pos = comp_style.getPropertyValue('object-position').split(' ');
        var fit = comp_style.getPropertyValue('object-fit').trim();
        //console.log(fit);
        var contains = fit === 'contain' ? true : false; // contain v. cover
        return getRenderedSize(contains,
            img.width,
            img.height,
            img.naturalWidth,
            img.naturalHeight,
            parseInt(pos[0]));
    }


    /*
     * Get Bounding Client Rect
     */
    function getArea(obj) {
        var area;
        var image;
        var parent;
        //console.log("test1");
        if (obj.nodeType) {
            var rect = obj.getBoundingClientRect();
            image = obj;

            //area = calculateAreaFromObjectFit(obj);
            var fit = $(obj).css('object-fit');
            if (fit === 'contain' || fit === 'cover') {
                var objectFitHere = getObjectFitSize(false, rect.width, rect.height, image.naturalWidth, image.naturalHeight);
                //console.log(objectFitHere);
                var parentRatio = rect.width / rect.height;
                var imgRatio = image.naturalWidth / image.naturalHeight;
                var width, height;
                if (parentRatio >= imgRatio) {
                    //top&bottomoffset
                    /*console.log("one");
                    console.log("objectFitHere.x: "+objectFitHere.x);
                    console.log("objectFitHere.y: "+objectFitHere.y);
                    console.log("objectFitHere.width: "+objectFitHere.width);
                    console.log("objectFitHere.height: "+objectFitHere.height);
                    console.log("rect.top: "+rect.top);
                    console.log("rect.right: "+rect.right);
                    console.log("rect.bottom: "+rect.bottom);
                    console.log("rect.left: "+rect.left);
                    console.log("rect.height: "+rect.height);
                    console.log("rect.width: "+rect.width);*/
                    area = {
                        left: Math.floor(rect.left),
                        right: Math.floor(rect.right),
                        top: Math.floor(objectFitHere.y + rect.top),
                        bottom: Math.floor(((-1 * objectFitHere.y) + rect.height) + rect.top),
                        width: Math.floor(objectFitHere.width),
                        height: Math.floor(objectFitHere.height)
                    };
                } else {
                    //console.log("other");
                    area = {
                        left: Math.floor(objectFitHere.x),
                        right: Math.floor((-1 * objectFitHere.x) + rect.width),
                        top: Math.floor(rect.top),
                        bottom: Math.floor(rect.bottom),
                        width: Math.floor(objectFitHere.width),
                        height: Math.floor(objectFitHere.height)
                    };
                }
                parent = obj;
            } else {
                // Clone ClientRect for modification purposes
                area = {
                    left: rect.left,
                    right: rect.right,
                    top: rect.top,
                    bottom: rect.bottom,
                    width: rect.width,
                    height: rect.height
                };
                parent = obj.parentNode;

            }
        } else {
            area = calculateAreaFromCSS(obj);
            //console.log("css");
            parent = obj.el;
            image = obj.img;
        }

        //console.log(area);

        parent = parent.getBoundingClientRect();

        area.imageTop = 0;
        area.imageLeft = 0;
        area.imageWidth = image.naturalWidth;
        area.imageHeight = image.naturalHeight;

        //console.log(area);

        var ratio = area.imageHeight / area.height;
        var delta;

        // Stay within the parent's boundary
        if (area.top < parent.top) {
            delta = parent.top - area.top;
            area.imageTop = ratio * delta;
            area.imageHeight -= ratio * delta;
            area.top += delta;
            area.height -= delta;
        }

        if (area.left < parent.left) {
            delta = parent.left - area.left;
            area.imageLeft += ratio * delta;
            area.imageWidth -= ratio * delta;
            area.width -= delta;
            area.left += delta;
        }

        if (area.bottom > parent.bottom) {
            delta = area.bottom - parent.bottom;
            area.imageHeight -= ratio * delta;
            area.height -= delta;
        }

        if (area.right > parent.right) {
            delta = area.right - parent.right;
            area.imageWidth -= ratio * delta;
            area.width -= delta;
        }

        area.imageTop = Math.floor(area.imageTop);
        area.imageLeft = Math.floor(area.imageLeft);
        area.imageHeight = Math.floor(area.imageHeight);
        area.imageWidth = Math.floor(area.imageWidth);

        return area;
    }


    /*
     * Render image on canvas
     */
    function drawImage(image) {
        //console.log("image src is: "+image.src);
        //if(image.src) {
        //var partOfWebsite = image.src.includes('underscore');
        //if(partOfWebsite) {
        var area = getArea(image);

        //console.log(area);

        image = image.nodeType ? image : image.img;

        //console.log("image src fixed is: "+image.src);

        if (image.src) {

            var partOfWebsite = image.src.includes('underscore');

            if (partOfWebsite) {

                if (area.imageWidth > 0 && area.imageHeight > 0 && area.width > 0 && area.height > 0) {
                    context.drawImage(image,
                        area.imageLeft, area.imageTop, area.imageWidth, area.imageHeight,
                        area.left, area.top, area.width, area.height);
                } else {
                    log('Skipping image - ' + image.src + ' - area too small');
                }
            } else {
                log('Skipping image - ' + image.src + ' - not part of the website');
            }
            //} else {
            //log('Skipping image - ' + image.src + ' - not part of the website');
            //}
        } else {
            log('Skipping image - ' + image.src + ' - no src found');
        }
    }


    /*
     * Add/remove classes
     */
    function classList(node, name, mode) {
        var className = node.className;

        switch (mode) {
            case 'add':
                className += ' ' + name;
                break;
            case 'remove':
                var pattern = new RegExp('(?:^|\\s)' + name + '(?!\\S)', 'g');
                className = className.replace(pattern, '');
                break;
        }

        node.className = className.trim();
    }


    /*
     * Remove classes from element or
     * their parents, depending on checkParent
     */
    function removeClasses(el) {
        var targets = el ? [el] : get('targets');
        var target;

        for (var t = 0; t < targets.length; t++) {
            target = targets[t];
            target = get('changeParent') ? target.parentNode : target;

            classList(target, get('classes').light, 'remove');
            classList(target, get('classes').dark, 'remove');
            classList(target, get('classes').complex, 'remove');
        }
    }


    /*
     * Calculate average pixel brightness of a region 
     * and add 'light' or 'dark' accordingly
     */
    function calculatePixelBrightness(target) {
        var dims = target.getBoundingClientRect();
        var brightness;
        var data;
        var pixels = 0;
        var delta;
        var deltaSqr = 0;
        var mean = 0;
        var variance;
        var minOverlap = 0;
        var mask = get('mask');

        if (dims.width > 0 && dims.height > 0) {
            removeClasses(target);

            target = get('changeParent') ? target.parentNode : target;
            data = context.getImageData(dims.left, dims.top, dims.width, dims.height).data;

            for (var p = 0; p < data.length; p += 4) {

                if (data[p] === mask.r && data[p + 1] === mask.g && data[p + 2] === mask.b) {
                    minOverlap++;
                } else {
                    pixels++;
                    brightness = (0.2126 * data[p]) + (0.7152 * data[p + 1]) + (0.0722 * data[p + 2]);
                    delta = brightness - mean;
                    deltaSqr += delta * delta;
                    mean = mean + delta / pixels;
                }
            }

            if (minOverlap <= (data.length / 4) * (1 - (get('minOverlap') / 100))) {
                variance = Math.sqrt(deltaSqr / pixels) / 255;
                mean = mean / 255;
                log('Target: ' + target.className + ' lum: ' + mean + ' var: ' + variance);
                classList(target, mean <= (get('threshold') / 100) ? get('classes').dark : get('classes').light, 'add');

                if (variance > get('minComplexity') / 100) {
                    classList(target, get('classes').complex, 'add');
                }
            }
        }
    }


    /*
     * Test if a is within b's boundary
     */
    function isInside(a, b) {
        a = (a.nodeType ? a : a.el).getBoundingClientRect();
        b = b === viewport ? b : (b.nodeType ? b : b.el).getBoundingClientRect();

        return !(a.right < b.left || a.left > b.right || a.top > b.bottom || a.bottom < b.top);
    }


    /*
     * Process all targets (checkTarget is undefined)
     * or a single target (checkTarget is a previously set target)
     *
     * When not all images are loaded, checkTarget is an image
     * to avoid processing all targets multiple times
     */
    function processTargets(checkTarget) {
        var start = new Date().getTime();
        var mode = (checkTarget && (checkTarget.tagName === 'IMG' || checkTarget.img)) ? 'image' : 'targets';
        var found = checkTarget ? false : true;
        var total = get('targets').length;
        var target;

        for (var t = 0; t < total; t++) {
            target = get('targets')[t];

            if (isInside(target, viewport)) {
                if (mode === 'targets' && (!checkTarget || checkTarget === target)) {
                    found = true;
                    calculatePixelBrightness(target);
                } else if (mode === 'image' && isInside(target, checkTarget)) {
                    calculatePixelBrightness(target);
                }
            }
        }

        if (mode === 'targets' && !found) {
            throw checkTarget + ' is not a target';
        }

        kill(start);
    }


    /*
     * Find the element's zIndex. Also checks
     * the zIndex of its parent
     */
    function getZIndex(el) {
        var calculate = function (el) {
            var zindex = 0;

            if (window.getComputedStyle(el).position !== 'static') {
                zindex = parseInt(window.getComputedStyle(el).zIndex, 10) || 0;

                // Reserve zindex = 0 for elements with position: static;
                if (zindex >= 0) {
                    zindex++;
                }
            }

            return zindex;
        };

        var parent = el.parentNode;
        var zIndexParent = parent ? calculate(parent) : 0;
        var zIndexEl = calculate(el);

        return (zIndexParent * 100000) + zIndexEl;
    }


    /*
     * Check zIndexes
     */
    function sortImagesByZIndex(images) {
        var sorted = false;

        images.sort(function (a, b) {
            a = a.nodeType ? a : a.el;
            b = b.nodeType ? b : b.el;

            var pos = a.compareDocumentPosition(b);
            var reverse = 0;

            a = getZIndex(a);
            b = getZIndex(b);

            if (a > b) {
                sorted = true;
            }

            // Reposition if zIndex is the same but the elements are not
            // sorted according to their document position
            if (a === b && pos === 2) {
                reverse = 1;
            } else if (a === b && pos === 4) {
                reverse = -1;
            }

            return reverse || a - b;
        });

        log('Sorted: ' + sorted);

        if (sorted) {
            log(images);
        }

        return sorted;
    }


    /*
     * Main function
     */
    function check(target, avoidClear, imageLoaded) {

        if (supported) {
            var mask = get('mask');

            log('--- BackgroundCheck ---');
            log('onLoad event: ' + (imageLoaded && imageLoaded.src));

            if (avoidClear !== true) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = 'rgb(' + mask.r + ', ' + mask.g + ', ' + mask.b + ')';
                context.fillRect(0, 0, canvas.width, canvas.height);
            }

            var processImages = imageLoaded ? [imageLoaded] : get('images');
            var sorted = sortImagesByZIndex(processImages);

            var image;
            var imageNode;
            var loading = false;

            for (var i = 0; i < processImages.length; i++) {
                image = processImages[i];

                if (isInside(image, viewport)) {
                    imageNode = image.nodeType ? image : image.img;

                    if (imageNode.naturalWidth === 0) {
                        loading = true;
                        log('Loading... ' + image.src);

                        imageNode.removeEventListener('load', check);

                        if (sorted) {
                            // Sorted -- redraw all images
                            imageNode.addEventListener('load', check.bind(null, null, false, null));
                        } else {
                            // Not sorted -- just draw one image
                            imageNode.addEventListener('load', check.bind(null, target, true, image));
                        }
                    } else {
                        log('Drawing: ' + image.src);
                        drawImage(image);
                    }
                }
            }

            if (!imageLoaded && !loading) {
                processTargets(target);
            } else if (imageLoaded) {
                processTargets(imageLoaded);
            }
        }
    }


    /*
     * Throttle events
     */
    function throttle(callback) {

        if (get('windowEvents') === true) {

            if (throttleDelay) {
                clearTimeout(throttleDelay);
            }

            throttleDelay = setTimeout(callback, 200);
        }
    }


    /*
     * Setter
     */
    function set(property, newValue) {

        if (attrs[property] === undefined) {
            throw 'Unknown property - ' + property;
        } else if (newValue === undefined) {
            throw 'Missing value for ' + property;
        }

        if (property === 'targets' || property === 'images') {

            try {
                newValue = getElements(property === 'images' && !newValue ? 'img' : newValue, property === 'images' ? true : false);
            } catch (err) {
                newValue = [];
                throw err;
            }
        } else {
            checkType(newValue, typeof attrs[property]);
        }

        removeClasses();
        attrs[property] = newValue;
        check();

        if (property === 'debugOverlay') {
            showDebugOverlay();
        }
    }


    /*
     * Getter
     */
    function get(property) {

        if (attrs[property] === undefined) {
            throw 'Unknown property - ' + property;
        }

        return attrs[property];
    }


    /*
     * Get position and size of all images.
     * Used for testing purposes
     */
    function getImageData() {
        var images = get('images');
        var area;
        var data = [];

        for (var i = 0; i < images.length; i++) {
            area = getArea(images[i]);
            data.push(area);
        }

        return data;
    }


    return {
        /*
         * Init and destroy
         */
        init: init,
        destroy: destroy,

        /*
         * Expose main function
         */
        refresh: check,

        /*
         * Setters and getters
         */
        set: set,
        get: get,

        /*
         * Return image data
         */
        getImageData: getImageData
    };

}));
/*! waitForImages jQuery Plugin 2018-02-13 */
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    var b = "waitForImages",
        c = function (a) {
            return a.srcset && a.sizes
        }(new Image);
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, a.expr.pseudos["has-src"] = function (b) {
        return a(b).is('img[src][src!=""]')
    }, a.expr.pseudos.uncached = function (b) {
        return !!a(b).is(":has-src") && !b.complete
    }, a.fn.waitForImages = function () {
        var d, e, f, g = 0,
            h = 0,
            i = a.Deferred(),
            j = this,
            k = [],
            l = a.waitForImages.hasImageProperties || [],
            m = a.waitForImages.hasImageAttributes || [],
            n = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
        if (a.isPlainObject(arguments[0]) ? (f = arguments[0].waitForAll, e = arguments[0].each, d = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? f = arguments[0] : (d = arguments[0], e = arguments[1], f = arguments[2]), d = d || a.noop, e = e || a.noop, f = !!f, !a.isFunction(d) || !a.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
            var b = a(this);
            f ? b.find("*").addBack().each(function () {
                var b = a(this);
                b.is("img:has-src") && !b.is("[srcset]") && k.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(l, function (a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = n.exec(e);) k.push({
                        src: d[2],
                        element: b[0]
                    })
                }), a.each(m, function (a, c) {
                    var d = b.attr(c);
                    return !d || void k.push({
                        src: b.attr("src"),
                        srcset: b.attr("srcset"),
                        element: b[0]
                    })
                })
            }) : b.find("img:has-src").each(function () {
                k.push({
                    src: this.src,
                    element: this
                })
            })
        }), g = k.length, h = 0, 0 === g && (d.call(j), i.resolveWith(j)), a.each(k, function (f, k) {
            var l = new Image,
                m = "load." + b + " error." + b;
            a(l).one(m, function b(c) {
                var f = [h, g, "load" == c.type];
                if (h++, e.apply(k.element, f), i.notifyWith(k.element, f), a(this).off(m, b), h == g) return d.call(j[0]), i.resolveWith(j[0]), !1
            }), c && k.srcset && (l.srcset = k.srcset, l.sizes = k.sizes), l.src = k.src
        }), i.promise()
    }
});
"object" == typeof navigator && function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function () {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = t(function (e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }),
        i = t(function (e) {
            var t = e.exports = {
                version: "2.5.3"
            };
            "number" == typeof __e && (__e = t)
        }),
        r = (i.version, function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }),
        o = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        },
        a = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        s = !a(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        l = n.document,
        c = r(l) && r(l.createElement),
        u = function (e) {
            return c ? l.createElement(e) : {}
        },
        f = !s && !a(function () {
            return 7 != Object.defineProperty(u("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        h = function (e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        d = Object.defineProperty,
        p = {
            f: s ? Object.defineProperty : function (e, t, n) {
                if (o(e), t = h(t, !0), o(n), f) try {
                    return d(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        g = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        m = s ? function (e, t, n) {
            return p.f(e, t, g(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        },
        y = {}.hasOwnProperty,
        v = function (e, t) {
            return y.call(e, t)
        },
        b = 0,
        w = Math.random(),
        k = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++b + w).toString(36))
        },
        T = t(function (e) {
            var t = k("src"),
                r = Function.toString,
                o = ("" + r).split("toString");
            i.inspectSource = function (e) {
                return r.call(e)
            }, (e.exports = function (e, i, r, a) {
                var s = "function" == typeof r;
                s && (v(r, "name") || m(r, "name", i)), e[i] !== r && (s && (v(r, t) || m(r, t, e[i] ? "" + e[i] : o.join(String(i)))), e === n ? e[i] = r : a ? e[i] ? e[i] = r : m(e, i, r) : (delete e[i], m(e, i, r)))
            })(Function.prototype, "toString", function () {
                return "function" == typeof this && this[t] || r.call(this)
            })
        }),
        S = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        },
        E = function (e, t, n) {
            if (S(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        },
        _ = function (e, t, r) {
            var o, a, s, l, c = e & _.F,
                u = e & _.G,
                f = e & _.S,
                h = e & _.P,
                d = e & _.B,
                p = u ? n : f ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                g = u ? i : i[t] || (i[t] = {}),
                y = g.prototype || (g.prototype = {});
            for (o in u && (r = t), r) s = ((a = !c && p && void 0 !== p[o]) ? p : r)[o], l = d && a ? E(s, n) : h && "function" == typeof s ? E(Function.call, s) : s, p && T(p, o, s, e & _.U), g[o] != s && m(g, o, l), h && y[o] != s && (y[o] = s)
        };
    n.core = i, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128;
    for (var A, P = _, M = k("typed_array"), L = k("view"), x = !(!n.ArrayBuffer || !n.DataView), C = x, O = 0, N = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); O < 9;)(A = n[N[O++]]) ? (m(A.prototype, M, !0), m(A.prototype, L, !0)) : C = !1;
    var j = {
            ABV: x,
            CONSTR: C,
            TYPED: M,
            VIEW: L
        },
        I = function (e, t, n) {
            for (var i in t) T(e, i, t[i], n);
            return e
        },
        F = function (e, t, n, i) {
            if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
            return e
        },
        R = Math.ceil,
        q = Math.floor,
        B = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? q : R)(e)
        },
        V = Math.min,
        D = function (e) {
            return e > 0 ? V(B(e), 9007199254740991) : 0
        },
        U = function (e) {
            if (void 0 === e) return 0;
            var t = B(e),
                n = D(t);
            if (t !== n) throw RangeError("Wrong length!");
            return n
        },
        H = {}.toString,
        W = function (e) {
            return H.call(e).slice(8, -1)
        },
        z = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == W(e) ? e.split("") : Object(e)
        },
        G = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        },
        K = function (e) {
            return z(G(e))
        },
        Y = Math.max,
        Q = Math.min,
        J = function (e, t) {
            return (e = B(e)) < 0 ? Y(e + t, 0) : Q(e, t)
        },
        $ = function (e) {
            return function (t, n, i) {
                var r, o = K(t),
                    a = D(o.length),
                    s = J(i, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((r = o[s++]) != r) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        X = n["__core-js_shared__"] || (n["__core-js_shared__"] = {}),
        Z = function (e) {
            return X[e] || (X[e] = {})
        },
        ee = Z("keys"),
        te = function (e) {
            return ee[e] || (ee[e] = k(e))
        },
        ne = $(!1),
        ie = te("IE_PROTO"),
        re = function (e, t) {
            var n, i = K(e),
                r = 0,
                o = [];
            for (n in i) n != ie && v(i, n) && o.push(n);
            for (; t.length > r;) v(i, n = t[r++]) && (~ne(o, n) || o.push(n));
            return o
        },
        oe = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        ae = oe.concat("length", "prototype"),
        se = {
            f: Object.getOwnPropertyNames || function (e) {
                return re(e, ae)
            }
        },
        le = function (e) {
            return Object(G(e))
        },
        ce = function (e) {
            for (var t = le(this), n = D(t.length), i = arguments.length, r = J(i > 1 ? arguments[1] : void 0, n), o = i > 2 ? arguments[2] : void 0, a = void 0 === o ? n : J(o, n); a > r;) t[r++] = e;
            return t
        },
        ue = t(function (e) {
            var t = Z("wks"),
                i = n.Symbol,
                r = "function" == typeof i;
            (e.exports = function (e) {
                return t[e] || (t[e] = r && i[e] || (r ? i : k)("Symbol." + e))
            }).store = t
        }),
        fe = p.f,
        he = ue("toStringTag"),
        de = function (e, t, n) {
            e && !v(e = n ? e : e.prototype, he) && fe(e, he, {
                configurable: !0,
                value: t
            })
        },
        pe = t(function (e, t) {
            var i = se.f,
                r = p.f,
                o = "prototype",
                l = "Wrong index!",
                c = n.ArrayBuffer,
                u = n.DataView,
                f = n.Math,
                h = n.RangeError,
                d = n.Infinity,
                g = c,
                y = f.abs,
                v = f.pow,
                b = f.floor,
                w = f.log,
                k = f.LN2,
                T = s ? "_b" : "buffer",
                S = s ? "_l" : "byteLength",
                E = s ? "_o" : "byteOffset";

            function _(e, t, n) {
                var i, r, o, a = new Array(n),
                    s = 8 * n - t - 1,
                    l = (1 << s) - 1,
                    c = l >> 1,
                    u = 23 === t ? v(2, -24) - v(2, -77) : 0,
                    f = 0,
                    h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for ((e = y(e)) != e || e === d ? (r = e != e ? 1 : 0, i = l) : (i = b(w(e) / k), e * (o = v(2, -i)) < 1 && (i--, o *= 2), (e += i + c >= 1 ? u / o : u * v(2, 1 - c)) * o >= 2 && (i++, o /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * o - 1) * v(2, t), i += c) : (r = e * v(2, c - 1) * v(2, t), i = 0)); t >= 8; a[f++] = 255 & r, r /= 256, t -= 8);
                for (i = i << t | r, s += t; s > 0; a[f++] = 255 & i, i /= 256, s -= 8);
                return a[--f] |= 128 * h, a
            }

            function A(e, t, n) {
                var i, r = 8 * n - t - 1,
                    o = (1 << r) - 1,
                    a = o >> 1,
                    s = r - 7,
                    l = n - 1,
                    c = e[l--],
                    u = 127 & c;
                for (c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
                for (i = u & (1 << -s) - 1, u >>= -s, s += t; s > 0; i = 256 * i + e[l], l--, s -= 8);
                if (0 === u) u = 1 - a;
                else {
                    if (u === o) return i ? NaN : c ? -d : d;
                    i += v(2, t), u -= a
                }
                return (c ? -1 : 1) * i * v(2, u - t)
            }

            function P(e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            }

            function M(e) {
                return [255 & e]
            }

            function L(e) {
                return [255 & e, e >> 8 & 255]
            }

            function x(e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            }

            function C(e) {
                return _(e, 52, 8)
            }

            function O(e) {
                return _(e, 23, 4)
            }

            function N(e, t, n) {
                r(e[o], t, {
                    get: function () {
                        return this[n]
                    }
                })
            }

            function R(e, t, n, i) {
                var r = U(+n);
                if (r + t > e[S]) throw h(l);
                var o = e[T]._b,
                    a = r + e[E],
                    s = o.slice(a, a + t);
                return i ? s : s.reverse()
            }

            function q(e, t, n, i, r, o) {
                var a = U(+n);
                if (a + t > e[S]) throw h(l);
                for (var s = e[T]._b, c = a + e[E], u = i(+r), f = 0; f < t; f++) s[c + f] = u[o ? f : t - f - 1]
            }
            if (j.ABV) {
                if (!a(function () {
                        c(1)
                    }) || !a(function () {
                        new c(-1)
                    }) || a(function () {
                        return new c, new c(1.5), new c(NaN), "ArrayBuffer" != c.name
                    })) {
                    for (var V, H = (c = function (e) {
                            return F(this, c), new g(U(e))
                        })[o] = g[o], W = i(g), z = 0; W.length > z;)(V = W[z++]) in c || m(c, V, g[V]);
                    H.constructor = c
                }
                var G = new u(new c(2)),
                    K = u[o].setInt8;
                G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || I(u[o], {
                    setInt8: function (e, t) {
                        K.call(this, e, t << 24 >> 24)
                    },
                    setUint8: function (e, t) {
                        K.call(this, e, t << 24 >> 24)
                    }
                }, !0)
            } else c = function (e) {
                F(this, c, "ArrayBuffer");
                var t = U(e);
                this._b = ce.call(new Array(t), 0), this[S] = t
            }, u = function (e, t, n) {
                F(this, u, "DataView"), F(e, c, "DataView");
                var i = e[S],
                    r = B(t);
                if (r < 0 || r > i) throw h("Wrong offset!");
                if (r + (n = void 0 === n ? i - r : D(n)) > i) throw h("Wrong length!");
                this[T] = e, this[E] = r, this[S] = n
            }, s && (N(c, "byteLength", "_l"), N(u, "buffer", "_b"), N(u, "byteLength", "_l"), N(u, "byteOffset", "_o")), I(u[o], {
                getInt8: function (e) {
                    return R(this, 1, e)[0] << 24 >> 24
                },
                getUint8: function (e) {
                    return R(this, 1, e)[0]
                },
                getInt16: function (e) {
                    var t = R(this, 2, e, arguments[1]);
                    return (t[1] << 8 | t[0]) << 16 >> 16
                },
                getUint16: function (e) {
                    var t = R(this, 2, e, arguments[1]);
                    return t[1] << 8 | t[0]
                },
                getInt32: function (e) {
                    return P(R(this, 4, e, arguments[1]))
                },
                getUint32: function (e) {
                    return P(R(this, 4, e, arguments[1])) >>> 0
                },
                getFloat32: function (e) {
                    return A(R(this, 4, e, arguments[1]), 23, 4)
                },
                getFloat64: function (e) {
                    return A(R(this, 8, e, arguments[1]), 52, 8)
                },
                setInt8: function (e, t) {
                    q(this, 1, e, M, t)
                },
                setUint8: function (e, t) {
                    q(this, 1, e, M, t)
                },
                setInt16: function (e, t) {
                    q(this, 2, e, L, t, arguments[2])
                },
                setUint16: function (e, t) {
                    q(this, 2, e, L, t, arguments[2])
                },
                setInt32: function (e, t) {
                    q(this, 4, e, x, t, arguments[2])
                },
                setUint32: function (e, t) {
                    q(this, 4, e, x, t, arguments[2])
                },
                setFloat32: function (e, t) {
                    q(this, 4, e, O, t, arguments[2])
                },
                setFloat64: function (e, t) {
                    q(this, 8, e, C, t, arguments[2])
                }
            });
            de(c, "ArrayBuffer"), de(u, "DataView"), m(u[o], j.VIEW, !0), t.ArrayBuffer = c, t.DataView = u
        }),
        ge = ue("species"),
        me = function (e, t) {
            var n, i = o(e).constructor;
            return void 0 === i || null == (n = o(i)[ge]) ? t : S(n)
        },
        ye = ue("species"),
        ve = function (e) {
            var t = n[e];
            s && t && !t[ye] && p.f(t, ye, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        be = n.ArrayBuffer,
        we = pe.ArrayBuffer,
        ke = pe.DataView,
        Te = j.ABV && be.isView,
        Se = we.prototype.slice,
        Ee = j.VIEW;
    P(P.G + P.W + P.F * (be !== we), {
        ArrayBuffer: we
    }), P(P.S + P.F * !j.CONSTR, "ArrayBuffer", {
        isView: function (e) {
            return Te && Te(e) || r(e) && Ee in e
        }
    }), P(P.P + P.U + P.F * a(function () {
        return !new we(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function (e, t) {
            if (void 0 !== Se && void 0 === t) return Se.call(o(this), e);
            for (var n = o(this).byteLength, i = J(e, n), r = J(void 0 === t ? n : t, n), a = new(me(this, we))(D(r - i)), s = new ke(this), l = new ke(a), c = 0; i < r;) l.setUint8(c++, s.getUint8(i++));
            return a
        }
    }), ve("ArrayBuffer");
    var _e = ue("toStringTag"),
        Ae = "Arguments" == W(function () {
            return arguments
        }()),
        Pe = function (e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), _e)) ? n : Ae ? W(t) : "Object" == (i = W(t)) && "function" == typeof t.callee ? "Arguments" : i
        },
        Me = {},
        Le = ue("iterator"),
        xe = Array.prototype,
        Ce = function (e) {
            return void 0 !== e && (Me.Array === e || xe[Le] === e)
        },
        Oe = Object.keys || function (e) {
            return re(e, oe)
        },
        Ne = s ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, i = Oe(t), r = i.length, a = 0; r > a;) p.f(e, n = i[a++], t[n]);
            return e
        },
        je = n.document,
        Ie = je && je.documentElement,
        Fe = te("IE_PROTO"),
        Re = function () {},
        qe = function () {
            var e, t = u("iframe"),
                n = oe.length;
            for (t.style.display = "none", Ie.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), qe = e.F; n--;) delete qe.prototype[oe[n]];
            return qe()
        },
        Be = Object.create || function (e, t) {
            var n;
            return null !== e ? (Re.prototype = o(e), n = new Re, Re.prototype = null, n[Fe] = e) : n = qe(), void 0 === t ? n : Ne(n, t)
        },
        Ve = te("IE_PROTO"),
        De = Object.prototype,
        Ue = Object.getPrototypeOf || function (e) {
            return e = le(e), v(e, Ve) ? e[Ve] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? De : null
        },
        He = ue("iterator"),
        We = i.getIteratorMethod = function (e) {
            if (null != e) return e[He] || e["@@iterator"] || Me[Pe(e)]
        },
        ze = Array.isArray || function (e) {
            return "Array" == W(e)
        },
        Ge = ue("species"),
        Ke = function (e, t) {
            return new(function (e) {
                var t;
                return ze(e) && ("function" != typeof (t = e.constructor) || t !== Array && !ze(t.prototype) || (t = void 0), r(t) && null === (t = t[Ge]) && (t = void 0)), void 0 === t ? Array : t
            }(e))(t)
        },
        Ye = function (e, t) {
            var n = 1 == e,
                i = 2 == e,
                r = 3 == e,
                o = 4 == e,
                a = 6 == e,
                s = 5 == e || a,
                l = t || Ke;
            return function (t, c, u) {
                for (var f, h, d = le(t), p = z(d), g = E(c, u, 3), m = D(p.length), y = 0, v = n ? l(t, m) : i ? l(t, 0) : void 0; m > y; y++)
                    if ((s || y in p) && (h = g(f = p[y], y, d), e))
                        if (n) v[y] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        v.push(f)
                } else if (o) return !1;
                return a ? -1 : r || o ? o : v
            }
        },
        Qe = ue("unscopables"),
        Je = Array.prototype;
    null == Je[Qe] && m(Je, Qe, {});
    var $e = function (e) {
            Je[Qe][e] = !0
        },
        Xe = function (e, t) {
            return {
                value: t,
                done: !!e
            }
        },
        Ze = {};
    m(Ze, ue("iterator"), function () {
        return this
    });
    var et = function (e, t, n) {
            e.prototype = Be(Ze, {
                next: g(1, n)
            }), de(e, t + " Iterator")
        },
        tt = ue("iterator"),
        nt = !([].keys && "next" in [].keys()),
        it = function () {
            return this
        },
        rt = function (e, t, n, i, r, o, a) {
            et(n, t, i);
            var s, l, c, u = function (e) {
                    if (!nt && e in p) return p[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                },
                f = t + " Iterator",
                h = "values" == r,
                d = !1,
                p = e.prototype,
                g = p[tt] || p["@@iterator"] || r && p[r],
                y = !nt && g || u(r),
                b = r ? h ? u("entries") : y : void 0,
                w = "Array" == t && p.entries || g;
            if (w && (c = Ue(w.call(new e))) !== Object.prototype && c.next && (de(c, f, !0), v(c, tt) || m(c, tt, it)), h && g && "values" !== g.name && (d = !0, y = function () {
                    return g.call(this)
                }), (nt || d || !p[tt]) && m(p, tt, y), Me[t] = y, Me[f] = it, r)
                if (s = {
                        values: h ? y : u("values"),
                        keys: o ? y : u("keys"),
                        entries: b
                    }, a)
                    for (l in s) l in p || T(p, l, s[l]);
                else P(P.P + P.F * (nt || d), t, s);
            return s
        },
        ot = rt(Array, "Array", function (e, t) {
            this._t = K(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, Xe(1)) : Xe(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values");
    Me.Arguments = Me.Array, $e("keys"), $e("values"), $e("entries");
    var at = ue("iterator"),
        st = !1;
    try {
        [7][at]().return = function () {
            st = !0
        }
    } catch (e) {}
    var lt = function (e, t) {
            if (!t && !st) return !1;
            var n = !1;
            try {
                var i = [7],
                    r = i[at]();
                r.next = function () {
                    return {
                        done: n = !0
                    }
                }, i[at] = function () {
                    return r
                }, e(i)
            } catch (e) {}
            return n
        },
        ct = [].copyWithin || function (e, t) {
            var n = le(this),
                i = D(n.length),
                r = J(e, i),
                o = J(t, i),
                a = arguments.length > 2 ? arguments[2] : void 0,
                s = Math.min((void 0 === a ? i : J(a, i)) - o, i - r),
                l = 1;
            for (o < r && r < o + s && (l = -1, o += s - 1, r += s - 1); s-- > 0;) o in n ? n[r] = n[o] : delete n[r], r += l, o += l;
            return n
        },
        ut = {
            f: {}.propertyIsEnumerable
        },
        ft = Object.getOwnPropertyDescriptor,
        ht = {
            f: s ? ft : function (e, t) {
                if (e = K(e), t = h(t, !0), f) try {
                    return ft(e, t)
                } catch (e) {}
                if (v(e, t)) return g(!ut.f.call(e, t), e[t])
            }
        },
        dt = t(function (e) {
            if (s) {
                var t = n,
                    i = a,
                    o = P,
                    l = j,
                    c = pe,
                    u = E,
                    f = F,
                    d = g,
                    y = m,
                    b = I,
                    w = B,
                    T = D,
                    S = U,
                    _ = J,
                    A = h,
                    M = v,
                    L = Pe,
                    x = r,
                    C = le,
                    O = Ce,
                    N = Be,
                    R = Ue,
                    q = se.f,
                    V = We,
                    H = k,
                    W = ue,
                    z = Ye,
                    G = $,
                    K = me,
                    Y = ot,
                    Q = Me,
                    X = lt,
                    Z = ve,
                    ee = ce,
                    te = ct,
                    ne = p,
                    ie = ht,
                    re = ne.f,
                    oe = ie.f,
                    ae = t.RangeError,
                    fe = t.TypeError,
                    he = t.Uint8Array,
                    de = Array.prototype,
                    ge = c.ArrayBuffer,
                    ye = c.DataView,
                    be = z(0),
                    we = z(2),
                    ke = z(3),
                    Te = z(4),
                    Se = z(5),
                    Ee = z(6),
                    _e = G(!0),
                    Ae = G(!1),
                    Le = Y.values,
                    xe = Y.keys,
                    Oe = Y.entries,
                    Ne = de.lastIndexOf,
                    je = de.reduce,
                    Ie = de.reduceRight,
                    Fe = de.join,
                    Re = de.sort,
                    qe = de.slice,
                    Ve = de.toString,
                    De = de.toLocaleString,
                    He = W("iterator"),
                    ze = W("toStringTag"),
                    Ge = H("typed_constructor"),
                    Ke = H("def_constructor"),
                    Qe = l.CONSTR,
                    Je = l.TYPED,
                    $e = l.VIEW,
                    Xe = z(1, function (e, t) {
                        return it(K(e, e[Ke]), t)
                    }),
                    Ze = i(function () {
                        return 1 === new he(new Uint16Array([1]).buffer)[0]
                    }),
                    et = !!he && !!he.prototype.set && i(function () {
                        new he(1).set({})
                    }),
                    tt = function (e, t) {
                        var n = w(e);
                        if (n < 0 || n % t) throw ae("Wrong offset!");
                        return n
                    },
                    nt = function (e) {
                        if (x(e) && Je in e) return e;
                        throw fe(e + " is not a typed array!")
                    },
                    it = function (e, t) {
                        if (!(x(e) && Ge in e)) throw fe("It is not a typed array constructor!");
                        return new e(t)
                    },
                    rt = function (e, t) {
                        return at(K(e, e[Ke]), t)
                    },
                    at = function (e, t) {
                        for (var n = 0, i = t.length, r = it(e, i); i > n;) r[n] = t[n++];
                        return r
                    },
                    st = function (e, t, n) {
                        re(e, t, {
                            get: function () {
                                return this._d[n]
                            }
                        })
                    },
                    ut = function (e) {
                        var t, n, i, r, o, a, s = C(e),
                            l = arguments.length,
                            c = l > 1 ? arguments[1] : void 0,
                            f = void 0 !== c,
                            h = V(s);
                        if (null != h && !O(h)) {
                            for (a = h.call(s), i = [], t = 0; !(o = a.next()).done; t++) i.push(o.value);
                            s = i
                        }
                        for (f && l > 2 && (c = u(c, arguments[2], 2)), t = 0, n = T(s.length), r = it(this, n); n > t; t++) r[t] = f ? c(s[t], t) : s[t];
                        return r
                    },
                    ft = function () {
                        for (var e = 0, t = arguments.length, n = it(this, t); t > e;) n[e] = arguments[e++];
                        return n
                    },
                    dt = !!he && i(function () {
                        De.call(new he(1))
                    }),
                    pt = function () {
                        return De.apply(dt ? qe.call(nt(this)) : nt(this), arguments)
                    },
                    gt = {
                        copyWithin: function (e, t) {
                            return te.call(nt(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        every: function (e) {
                            return Te(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        fill: function (e) {
                            return ee.apply(nt(this), arguments)
                        },
                        filter: function (e) {
                            return rt(this, we(nt(this), e, arguments.length > 1 ? arguments[1] : void 0))
                        },
                        find: function (e) {
                            return Se(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        findIndex: function (e) {
                            return Ee(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        forEach: function (e) {
                            be(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        indexOf: function (e) {
                            return Ae(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        includes: function (e) {
                            return _e(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        join: function (e) {
                            return Fe.apply(nt(this), arguments)
                        },
                        lastIndexOf: function (e) {
                            return Ne.apply(nt(this), arguments)
                        },
                        map: function (e) {
                            return Xe(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        reduce: function (e) {
                            return je.apply(nt(this), arguments)
                        },
                        reduceRight: function (e) {
                            return Ie.apply(nt(this), arguments)
                        },
                        reverse: function () {
                            for (var e, t = nt(this).length, n = Math.floor(t / 2), i = 0; i < n;) e = this[i], this[i++] = this[--t], this[t] = e;
                            return this
                        },
                        some: function (e) {
                            return ke(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        sort: function (e) {
                            return Re.call(nt(this), e)
                        },
                        subarray: function (e, t) {
                            var n = nt(this),
                                i = n.length,
                                r = _(e, i);
                            return new(K(n, n[Ke]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, T((void 0 === t ? i : _(t, i)) - r))
                        }
                    },
                    mt = function (e, t) {
                        return rt(this, qe.call(nt(this), e, t))
                    },
                    yt = function (e) {
                        nt(this);
                        var t = tt(arguments[1], 1),
                            n = this.length,
                            i = C(e),
                            r = T(i.length),
                            o = 0;
                        if (r + t > n) throw ae("Wrong length!");
                        for (; o < r;) this[t + o] = i[o++]
                    },
                    vt = {
                        entries: function () {
                            return Oe.call(nt(this))
                        },
                        keys: function () {
                            return xe.call(nt(this))
                        },
                        values: function () {
                            return Le.call(nt(this))
                        }
                    },
                    bt = function (e, t) {
                        return x(e) && e[Je] && "symbol" != typeof t && t in e && String(+t) == String(t)
                    },
                    wt = function (e, t) {
                        return bt(e, t = A(t, !0)) ? d(2, e[t]) : oe(e, t)
                    },
                    kt = function (e, t, n) {
                        return !(bt(e, t = A(t, !0)) && x(n) && M(n, "value")) || M(n, "get") || M(n, "set") || n.configurable || M(n, "writable") && !n.writable || M(n, "enumerable") && !n.enumerable ? re(e, t, n) : (e[t] = n.value, e)
                    };
                Qe || (ie.f = wt, ne.f = kt), o(o.S + o.F * !Qe, "Object", {
                    getOwnPropertyDescriptor: wt,
                    defineProperty: kt
                }), i(function () {
                    Ve.call({})
                }) && (Ve = De = function () {
                    return Fe.call(this)
                });
                var Tt = b({}, gt);
                b(Tt, vt), y(Tt, He, vt.values), b(Tt, {
                    slice: mt,
                    set: yt,
                    constructor: function () {},
                    toString: Ve,
                    toLocaleString: pt
                }), st(Tt, "buffer", "b"), st(Tt, "byteOffset", "o"), st(Tt, "byteLength", "l"), st(Tt, "length", "e"), re(Tt, ze, {
                    get: function () {
                        return this[Je]
                    }
                }), e.exports = function (e, n, r, a) {
                    var s = e + ((a = !!a) ? "Clamped" : "") + "Array",
                        c = "get" + e,
                        u = "set" + e,
                        h = t[s],
                        d = h || {},
                        p = h && R(h),
                        g = !h || !l.ABV,
                        m = {},
                        v = h && h.prototype,
                        b = function (e, t) {
                            re(e, t, {
                                get: function () {
                                    return function (e, t) {
                                        var i = e._d;
                                        return i.v[c](t * n + i.o, Ze)
                                    }(this, t)
                                },
                                set: function (e) {
                                    return function (e, t, i) {
                                        var r = e._d;
                                        a && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[u](t * n + r.o, i, Ze)
                                    }(this, t, e)
                                },
                                enumerable: !0
                            })
                        };
                    g ? (h = r(function (e, t, i, r) {
                        f(e, h, s, "_d");
                        var o, a, l, c, u = 0,
                            d = 0;
                        if (x(t)) {
                            if (!(t instanceof ge || "ArrayBuffer" == (c = L(t)) || "SharedArrayBuffer" == c)) return Je in t ? at(h, t) : ut.call(h, t);
                            o = t, d = tt(i, n);
                            var p = t.byteLength;
                            if (void 0 === r) {
                                if (p % n) throw ae("Wrong length!");
                                if ((a = p - d) < 0) throw ae("Wrong length!")
                            } else if ((a = T(r) * n) + d > p) throw ae("Wrong length!");
                            l = a / n
                        } else l = S(t), o = new ge(a = l * n);
                        for (y(e, "_d", {
                                b: o,
                                o: d,
                                l: a,
                                e: l,
                                v: new ye(o)
                            }); u < l;) b(e, u++)
                    }), v = h.prototype = N(Tt), y(v, "constructor", h)) : i(function () {
                        h(1)
                    }) && i(function () {
                        new h(-1)
                    }) && X(function (e) {
                        new h, new h(null), new h(1.5), new h(e)
                    }, !0) || (h = r(function (e, t, i, r) {
                        var o;
                        return f(e, h, s), x(t) ? t instanceof ge || "ArrayBuffer" == (o = L(t)) || "SharedArrayBuffer" == o ? void 0 !== r ? new d(t, tt(i, n), r) : void 0 !== i ? new d(t, tt(i, n)) : new d(t) : Je in t ? at(h, t) : ut.call(h, t) : new d(S(t))
                    }), be(p !== Function.prototype ? q(d).concat(q(p)) : q(d), function (e) {
                        e in h || y(h, e, d[e])
                    }), h.prototype = v, v.constructor = h);
                    var w = v[He],
                        k = !!w && ("values" == w.name || null == w.name),
                        E = vt.values;
                    y(h, Ge, !0), y(v, Je, s), y(v, $e, !0), y(v, Ke, h), (a ? new h(1)[ze] == s : ze in v) || re(v, ze, {
                        get: function () {
                            return s
                        }
                    }), m[s] = h, o(o.G + o.W + o.F * (h != d), m), o(o.S, s, {
                        BYTES_PER_ELEMENT: n
                    }), o(o.S + o.F * i(function () {
                        d.of.call(h, 1)
                    }), s, {
                        from: ut,
                        of: ft
                    }), "BYTES_PER_ELEMENT" in v || y(v, "BYTES_PER_ELEMENT", n), o(o.P, s, gt), Z(s), o(o.P + o.F * et, s, {
                        set: yt
                    }), o(o.P + o.F * !k, s, vt), v.toString != Ve && (v.toString = Ve), o(o.P + o.F * i(function () {
                        new h(1).slice()
                    }), s, {
                        slice: mt
                    }), o(o.P + o.F * (i(function () {
                        return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
                    }) || !i(function () {
                        v.toLocaleString.call([1, 2])
                    })), s, {
                        toLocaleString: pt
                    }), Q[s] = k ? w : E, k || y(v, He, E)
                }
            } else e.exports = function () {}
        });
    dt("Int8", 1, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Uint8", 1, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Uint8", 1, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }, !0), dt("Int16", 2, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Uint16", 2, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Int32", 4, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Uint32", 4, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Float32", 4, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }), dt("Float64", 8, function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    });
    var pt = function (e, t, n, i) {
            try {
                return i ? t(o(n)[0], n[1]) : t(n)
            } catch (t) {
                var r = e.return;
                throw void 0 !== r && o(r.call(e)), t
            }
        },
        gt = t(function (e) {
            var t = {},
                n = {},
                i = e.exports = function (e, i, r, a, s) {
                    var l, c, u, f, h = s ? function () {
                            return e
                        } : We(e),
                        d = E(r, a, i ? 2 : 1),
                        p = 0;
                    if ("function" != typeof h) throw TypeError(e + " is not iterable!");
                    if (Ce(h)) {
                        for (l = D(e.length); l > p; p++)
                            if ((f = i ? d(o(c = e[p])[0], c[1]) : d(e[p])) === t || f === n) return f
                    } else
                        for (u = h.call(e); !(c = u.next()).done;)
                            if ((f = pt(u, d, c.value, i)) === t || f === n) return f
                };
            i.BREAK = t, i.RETURN = n
        }),
        mt = t(function (e) {
            var t = k("meta"),
                n = p.f,
                i = 0,
                o = Object.isExtensible || function () {
                    return !0
                },
                s = !a(function () {
                    return o(Object.preventExtensions({}))
                }),
                l = function (e) {
                    n(e, t, {
                        value: {
                            i: "O" + ++i,
                            w: {}
                        }
                    })
                },
                c = e.exports = {
                    KEY: t,
                    NEED: !1,
                    fastKey: function (e, n) {
                        if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!v(e, t)) {
                            if (!o(e)) return "F";
                            if (!n) return "E";
                            l(e)
                        }
                        return e[t].i
                    },
                    getWeak: function (e, n) {
                        if (!v(e, t)) {
                            if (!o(e)) return !0;
                            if (!n) return !1;
                            l(e)
                        }
                        return e[t].w
                    },
                    onFreeze: function (e) {
                        return s && c.NEED && o(e) && !v(e, t) && l(e), e
                    }
                }
        }),
        yt = (mt.KEY, mt.NEED, mt.fastKey, mt.getWeak, mt.onFreeze, function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }),
        vt = p.f,
        bt = mt.fastKey,
        wt = s ? "_s" : "size",
        kt = function (e, t) {
            var n, i = bt(t);
            if ("F" !== i) return e._i[i];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        },
        Tt = {
            getConstructor: function (e, t, n, i) {
                var r = e(function (e, o) {
                    F(e, r, t, "_i"), e._t = t, e._i = Be(null), e._f = void 0, e._l = void 0, e[wt] = 0, null != o && gt(o, n, e[i], e)
                });
                return I(r.prototype, {
                    clear: function () {
                        for (var e = yt(this, t), n = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                        e._f = e._l = void 0, e[wt] = 0
                    },
                    delete: function (e) {
                        var n = yt(this, t),
                            i = kt(n, e);
                        if (i) {
                            var r = i.n,
                                o = i.p;
                            delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[wt]--
                        }
                        return !!i
                    },
                    forEach: function (e) {
                        yt(this, t);
                        for (var n, i = E(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (i(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (e) {
                        return !!kt(yt(this, t), e)
                    }
                }), s && vt(r.prototype, "size", {
                    get: function () {
                        return yt(this, t)[wt]
                    }
                }), r
            },
            def: function (e, t, n) {
                var i, r, o = kt(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: r = bt(t, !0),
                    k: t,
                    v: n,
                    p: i = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), i && (i.n = o), e[wt]++, "F" !== r && (e._i[r] = o)), e
            },
            getEntry: kt,
            setStrong: function (e, t, n) {
                rt(e, t, function (e, n) {
                    this._t = yt(e, t), this._k = n, this._l = void 0
                }, function () {
                    for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                    return this._t && (this._l = t = t ? t.n : this._t._f) ? Xe(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Xe(1))
                }, n ? "entries" : "values", !n, !0), ve(t)
            }
        },
        St = function (e, t) {
            if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        },
        Et = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
                try {
                    (n = E(Function.call, ht.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                } catch (e) {
                    t = !0
                }
                return function (e, i) {
                    return St(e, i), t ? e.__proto__ = i : n(e, i), e
                }
            }({}, !1) : void 0),
            check: St
        },
        _t = Et.set,
        At = function (e, t, i, o, s, l) {
            var c = n[e],
                u = c,
                f = s ? "set" : "add",
                h = u && u.prototype,
                d = {},
                p = function (e) {
                    var t = h[e];
                    T(h, e, "delete" == e ? function (e) {
                        return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function (e) {
                        return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function (e) {
                        return l && !r(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "add" == e ? function (e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : function (e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if ("function" == typeof u && (l || h.forEach && !a(function () {
                    (new u).entries().next()
                }))) {
                var g = new u,
                    m = g[f](l ? {} : -0, 1) != g,
                    y = a(function () {
                        g.has(1)
                    }),
                    v = lt(function (e) {
                        new u(e)
                    }),
                    b = !l && a(function () {
                        for (var e = new u, t = 5; t--;) e[f](t, t);
                        return !e.has(-0)
                    });
                v || ((u = t(function (t, n) {
                    F(t, u, e);
                    var i = function (e, t, n) {
                        var i, o = t.constructor;
                        return o !== n && "function" == typeof o && (i = o.prototype) !== n.prototype && r(i) && _t && _t(e, i), e
                    }(new c, t, u);
                    return null != n && gt(n, s, i[f], i), i
                })).prototype = h, h.constructor = u), (y || b) && (p("delete"), p("has"), s && p("get")), (b || m) && p(f), l && h.clear && delete h.clear
            } else u = o.getConstructor(t, e, s, f), I(u.prototype, i), mt.NEED = !0;
            return de(u, e), d[e] = u, P(P.G + P.W + P.F * (u != c), d), l || o.setStrong(u, e, s), u
        },
        Pt = (At("Map", function (e) {
            return function () {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function (e) {
                var t = Tt.getEntry(yt(this, "Map"), e);
                return t && t.v
            },
            set: function (e, t) {
                return Tt.def(yt(this, "Map"), 0 === e ? 0 : e, t)
            }
        }, Tt, !0), At("Set", function (e) {
            return function () {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function (e) {
                return Tt.def(yt(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, Tt), {
            f: Object.getOwnPropertySymbols
        }),
        Mt = Object.assign,
        Lt = !Mt || a(function () {
            var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return e[n] = 7, i.split("").forEach(function (e) {
                t[e] = e
            }), 7 != Mt({}, e)[n] || Object.keys(Mt({}, t)).join("") != i
        }) ? function (e, t) {
            for (var n = le(e), i = arguments.length, r = 1, o = Pt.f, a = ut.f; i > r;)
                for (var s, l = z(arguments[r++]), c = o ? Oe(l).concat(o(l)) : Oe(l), u = c.length, f = 0; u > f;) a.call(l, s = c[f++]) && (n[s] = l[s]);
            return n
        } : Mt,
        xt = mt.getWeak,
        Ct = Ye(5),
        Ot = Ye(6),
        Nt = 0,
        jt = function (e) {
            return e._l || (e._l = new It)
        },
        It = function () {
            this.a = []
        },
        Ft = function (e, t) {
            return Ct(e.a, function (e) {
                return e[0] === t
            })
        };
    It.prototype = {
        get: function (e) {
            var t = Ft(this, e);
            if (t) return t[1]
        },
        has: function (e) {
            return !!Ft(this, e)
        },
        set: function (e, t) {
            var n = Ft(this, e);
            n ? n[1] = t : this.a.push([e, t])
        },
        delete: function (e) {
            var t = Ot(this.a, function (t) {
                return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
        }
    };
    var Rt = {
        getConstructor: function (e, t, n, i) {
            var o = e(function (e, r) {
                F(e, o, t, "_i"), e._t = t, e._i = Nt++, e._l = void 0, null != r && gt(r, n, e[i], e)
            });
            return I(o.prototype, {
                delete: function (e) {
                    if (!r(e)) return !1;
                    var n = xt(e);
                    return !0 === n ? jt(yt(this, t)).delete(e) : n && v(n, this._i) && delete n[this._i]
                },
                has: function (e) {
                    if (!r(e)) return !1;
                    var n = xt(e);
                    return !0 === n ? jt(yt(this, t)).has(e) : n && v(n, this._i)
                }
            }), o
        },
        def: function (e, t, n) {
            var i = xt(o(t), !0);
            return !0 === i ? jt(e).set(t, n) : i[e._i] = n, e
        },
        ufstore: jt
    };
    t(function (e) {
        var t, n = Ye(0),
            i = mt.getWeak,
            o = Object.isExtensible,
            s = Rt.ufstore,
            l = {},
            c = function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            u = {
                get: function (e) {
                    if (r(e)) {
                        var t = i(e);
                        return !0 === t ? s(yt(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                    }
                },
                set: function (e, t) {
                    return Rt.def(yt(this, "WeakMap"), e, t)
                }
            },
            f = e.exports = At("WeakMap", c, u, Rt, !0, !0);
        a(function () {
            return 7 != (new f).set((Object.freeze || Object)(l), 7).get(l)
        }) && (t = Rt.getConstructor(c, "WeakMap"), Lt(t.prototype, u), mt.NEED = !0, n(["delete", "has", "get", "set"], function (e) {
            var n = f.prototype,
                i = n[e];
            T(n, e, function (n, a) {
                if (r(n) && !o(n)) {
                    this._f || (this._f = new t);
                    var s = this._f[e](n, a);
                    return "set" == e ? this : s
                }
                return i.call(this, n, a)
            })
        }))
    });
    At("WeakSet", function (e) {
        return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (e) {
            return Rt.def(yt(this, "WeakSet"), e, !0)
        }
    }, Rt, !1, !0);
    var qt = (n.Reflect || {}).apply,
        Bt = Function.apply;
    P(P.S + P.F * !a(function () {
        qt(function () {})
    }), "Reflect", {
        apply: function (e, t, n) {
            var i = S(e),
                r = o(n);
            return qt ? qt(i, t, r) : Bt.call(i, t, r)
        }
    });
    var Vt = function (e, t, n) {
            var i = void 0 === n;
            switch (t.length) {
                case 0:
                    return i ? e() : e.call(n);
                case 1:
                    return i ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        },
        Dt = [].slice,
        Ut = {},
        Ht = Function.bind || function (e) {
            var t = S(this),
                n = Dt.call(arguments, 1),
                i = function () {
                    var r = n.concat(Dt.call(arguments));
                    return this instanceof i ? function (e, t, n) {
                        if (!(t in Ut)) {
                            for (var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
                            Ut[t] = Function("F,a", "return new F(" + i.join(",") + ")")
                        }
                        return Ut[t](e, n)
                    }(t, r.length, r) : Vt(t, r, e)
                };
            return r(t.prototype) && (i.prototype = t.prototype), i
        },
        Wt = (n.Reflect || {}).construct,
        zt = a(function () {
            function e() {}
            return !(Wt(function () {}, [], e) instanceof e)
        }),
        Gt = !a(function () {
            Wt(function () {})
        });
    P(P.S + P.F * (zt || Gt), "Reflect", {
        construct: function (e, t) {
            S(e), o(t);
            var n = arguments.length < 3 ? e : S(arguments[2]);
            if (Gt && !zt) return Wt(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var i = [null];
                return i.push.apply(i, t), new(Ht.apply(e, i))
            }
            var a = n.prototype,
                s = Be(r(a) ? a : Object.prototype),
                l = Function.apply.call(e, s, t);
            return r(l) ? l : s
        }
    }), P(P.S + P.F * a(function () {
        Reflect.defineProperty(p.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function (e, t, n) {
            o(e), t = h(t, !0), o(n);
            try {
                return p.f(e, t, n), !0
            } catch (e) {
                return !1
            }
        }
    });
    var Kt = ht.f;
    P(P.S, "Reflect", {
        deleteProperty: function (e, t) {
            var n = Kt(o(e), t);
            return !(n && !n.configurable) && delete e[t]
        }
    }), P(P.S, "Reflect", {
        get: function e(t, n) {
            var i, a, s = arguments.length < 3 ? t : arguments[2];
            return o(t) === s ? t[n] : (i = ht.f(t, n)) ? v(i, "value") ? i.value : void 0 !== i.get ? i.get.call(s) : void 0 : r(a = Ue(t)) ? e(a, n, s) : void 0
        }
    }), P(P.S, "Reflect", {
        getOwnPropertyDescriptor: function (e, t) {
            return ht.f(o(e), t)
        }
    }), P(P.S, "Reflect", {
        getPrototypeOf: function (e) {
            return Ue(o(e))
        }
    }), P(P.S, "Reflect", {
        has: function (e, t) {
            return t in e
        }
    });
    var Yt = Object.isExtensible;
    P(P.S, "Reflect", {
        isExtensible: function (e) {
            return o(e), !Yt || Yt(e)
        }
    });
    var Qt = n.Reflect,
        Jt = Qt && Qt.ownKeys || function (e) {
            var t = se.f(o(e)),
                n = Pt.f;
            return n ? t.concat(n(e)) : t
        };
    P(P.S, "Reflect", {
        ownKeys: Jt
    });
    var $t = Object.preventExtensions;
    P(P.S, "Reflect", {
        preventExtensions: function (e) {
            o(e);
            try {
                return $t && $t(e), !0
            } catch (e) {
                return !1
            }
        }
    }), P(P.S, "Reflect", {
        set: function e(t, n, i) {
            var a, s, l = arguments.length < 4 ? t : arguments[3],
                c = ht.f(o(t), n);
            if (!c) {
                if (r(s = Ue(t))) return e(s, n, i, l);
                c = g(0)
            }
            return v(c, "value") ? !(!1 === c.writable || !r(l) || ((a = ht.f(l, n) || g(0)).value = i, p.f(l, n, a), 0)) : void 0 !== c.set && (c.set.call(l, i), !0)
        }
    }), Et && P(P.S, "Reflect", {
        setPrototypeOf: function (e, t) {
            Et.check(e, t);
            try {
                return Et.set(e, t), !0
            } catch (e) {
                return !1
            }
        }
    });
    var Xt, Zt, en, tn = n.process,
        nn = n.setImmediate,
        rn = n.clearImmediate,
        on = n.MessageChannel,
        an = n.Dispatch,
        sn = 0,
        ln = {},
        cn = function () {
            var e = +this;
            if (ln.hasOwnProperty(e)) {
                var t = ln[e];
                delete ln[e], t()
            }
        },
        un = function (e) {
            cn.call(e.data)
        };
    nn && rn || (nn = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return ln[++sn] = function () {
            Vt("function" == typeof e ? e : Function(e), t)
        }, Xt(sn), sn
    }, rn = function (e) {
        delete ln[e]
    }, "process" == W(tn) ? Xt = function (e) {
        tn.nextTick(E(cn, e, 1))
    } : an && an.now ? Xt = function (e) {
        an.now(E(cn, e, 1))
    } : on ? (en = (Zt = new on).port2, Zt.port1.onmessage = un, Xt = E(en.postMessage, en, 1)) : n.addEventListener && "function" == typeof postMessage && !n.importScripts ? (Xt = function (e) {
        n.postMessage(e + "", "*")
    }, n.addEventListener("message", un, !1)) : Xt = "onreadystatechange" in u("script") ? function (e) {
        Ie.appendChild(u("script")).onreadystatechange = function () {
            Ie.removeChild(this), cn.call(e)
        }
    } : function (e) {
        setTimeout(E(cn, e, 1), 0)
    });
    var fn = {
            set: nn,
            clear: rn
        },
        hn = fn.set,
        dn = n.MutationObserver || n.WebKitMutationObserver,
        pn = n.process,
        gn = n.Promise,
        mn = "process" == W(pn);

    function yn(e) {
        var t, n;
        this.promise = new e(function (e, i) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = i
        }), this.resolve = S(t), this.reject = S(n)
    }
    var vn, bn, wn, kn, Tn = {
            f: function (e) {
                return new yn(e)
            }
        },
        Sn = function (e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        },
        En = fn.set,
        _n = function () {
            var e, t, i, r = function () {
                var n, r;
                for (mn && (n = pn.domain) && n.exit(); e;) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (n) {
                        throw e ? i() : t = void 0, n
                    }
                }
                t = void 0, n && n.enter()
            };
            if (mn) i = function () {
                pn.nextTick(r)
            };
            else if (!dn || n.navigator && n.navigator.standalone)
                if (gn && gn.resolve) {
                    var o = gn.resolve();
                    i = function () {
                        o.then(r)
                    }
                } else i = function () {
                    hn.call(n, r)
                };
            else {
                var a = !0,
                    s = document.createTextNode("");
                new dn(r).observe(s, {
                    characterData: !0
                }), i = function () {
                    s.data = a = !a
                }
            }
            return function (n) {
                var r = {
                    fn: n,
                    next: void 0
                };
                t && (t.next = r), e || (e = r, i()), t = r
            }
        }(),
        An = n.TypeError,
        Pn = n.process,
        Mn = n.Promise,
        Ln = "process" == Pe(Pn),
        xn = function () {},
        Cn = bn = Tn.f,
        On = !! function () {
            try {
                var e = Mn.resolve(1),
                    t = (e.constructor = {})[ue("species")] = function (e) {
                        e(xn, xn)
                    };
                return (Ln || "function" == typeof PromiseRejectionEvent) && e.then(xn) instanceof t
            } catch (e) {}
        }(),
        Nn = function (e) {
            var t;
            return !(!r(e) || "function" != typeof (t = e.then)) && t
        },
        jn = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                _n(function () {
                    for (var i = e._v, r = 1 == e._s, o = 0, a = function (t) {
                            var n, o, a = r ? t.ok : t.fail,
                                s = t.resolve,
                                l = t.reject,
                                c = t.domain;
                            try {
                                a ? (r || (2 == e._h && Rn(e), e._h = 1), !0 === a ? n = i : (c && c.enter(), n = a(i), c && c.exit()), n === t.promise ? l(An("Promise-chain cycle")) : (o = Nn(n)) ? o.call(n, s, l) : s(n)) : l(i)
                            } catch (e) {
                                l(e)
                            }
                        }; n.length > o;) a(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && In(e)
                })
            }
        },
        In = function (e) {
            En.call(n, function () {
                var t, i, r, o = e._v,
                    a = Fn(e);
                if (a && (t = Sn(function () {
                        Ln ? Pn.emit("unhandledRejection", o, e) : (i = n.onunhandledrejection) ? i({
                            promise: e,
                            reason: o
                        }) : (r = n.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), e._h = Ln || Fn(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
            })
        },
        Fn = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        Rn = function (e) {
            En.call(n, function () {
                var t;
                Ln ? Pn.emit("rejectionHandled", e) : (t = n.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        qn = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), jn(t, !0))
        },
        Bn = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw An("Promise can't be resolved itself");
                    (t = Nn(e)) ? _n(function () {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, E(Bn, i, 1), E(qn, i, 1))
                        } catch (e) {
                            qn.call(i, e)
                        }
                    }): (n._v = e, n._s = 1, jn(n, !1))
                } catch (e) {
                    qn.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    On || (Mn = function (e) {
        F(this, Mn, "Promise", "_h"), S(e), vn.call(this);
        try {
            e(E(Bn, this, 1), E(qn, this, 1))
        } catch (e) {
            qn.call(this, e)
        }
    }, (vn = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = I(Mn.prototype, {
        then: function (e, t) {
            var n = Cn(me(this, Mn));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Ln ? Pn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && jn(this, !1), n.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), wn = function () {
        var e = new vn;
        this.promise = e, this.resolve = E(Bn, e, 1), this.reject = E(qn, e, 1)
    }, Tn.f = Cn = function (e) {
        return e === Mn || e === kn ? new wn(e) : bn(e)
    }), P(P.G + P.W + P.F * !On, {
        Promise: Mn
    }), de(Mn, "Promise"), ve("Promise"), kn = i.Promise, P(P.S + P.F * !On, "Promise", {
        reject: function (e) {
            var t = Cn(this);
            return (0, t.reject)(e), t.promise
        }
    }), P(P.S + P.F * !On, "Promise", {
        resolve: function (e) {
            return function (e, t) {
                if (o(e), r(t) && t.constructor === e) return t;
                var n = Tn.f(e);
                return (0, n.resolve)(t), n.promise
            }(this, e)
        }
    }), P(P.S + P.F * !(On && lt(function (e) {
        Mn.all(e).catch(xn)
    })), "Promise", {
        all: function (e) {
            var t = this,
                n = Cn(t),
                i = n.resolve,
                r = n.reject,
                o = Sn(function () {
                    var n = [],
                        o = 0,
                        a = 1;
                    gt(e, !1, function (e) {
                        var s = o++,
                            l = !1;
                        n.push(void 0), a++, t.resolve(e).then(function (e) {
                            l || (l = !0, n[s] = e, --a || i(n))
                        }, r)
                    }), --a || i(n)
                });
            return o.e && r(o.v), n.promise
        },
        race: function (e) {
            var t = this,
                n = Cn(t),
                i = n.reject,
                r = Sn(function () {
                    gt(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, i)
                    })
                });
            return r.e && i(r.v), n.promise
        }
    });
    var Vn = {
            f: ue
        },
        Dn = p.f,
        Un = function (e) {
            var t = i.Symbol || (i.Symbol = n.Symbol || {});
            "_" == e.charAt(0) || e in t || Dn(t, e, {
                value: Vn.f(e)
            })
        },
        Hn = se.f,
        Wn = {}.toString,
        zn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Gn = {
            f: function (e) {
                return zn && "[object Window]" == Wn.call(e) ? function (e) {
                    try {
                        return Hn(e)
                    } catch (e) {
                        return zn.slice()
                    }
                }(e) : Hn(K(e))
            }
        },
        Kn = mt.KEY,
        Yn = ht.f,
        Qn = p.f,
        Jn = Gn.f,
        $n = n.Symbol,
        Xn = n.JSON,
        Zn = Xn && Xn.stringify,
        ei = ue("_hidden"),
        ti = ue("toPrimitive"),
        ni = {}.propertyIsEnumerable,
        ii = Z("symbol-registry"),
        ri = Z("symbols"),
        oi = Z("op-symbols"),
        ai = Object.prototype,
        si = "function" == typeof $n,
        li = n.QObject,
        ci = !li || !li.prototype || !li.prototype.findChild,
        ui = s && a(function () {
            return 7 != Be(Qn({}, "a", {
                get: function () {
                    return Qn(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (e, t, n) {
            var i = Yn(ai, t);
            i && delete ai[t], Qn(e, t, n), i && e !== ai && Qn(ai, t, i)
        } : Qn,
        fi = function (e) {
            var t = ri[e] = Be($n.prototype);
            return t._k = e, t
        },
        hi = si && "symbol" == typeof $n.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof $n
        },
        di = function (e, t, n) {
            return e === ai && di(oi, t, n), o(e), t = h(t, !0), o(n), v(ri, t) ? (n.enumerable ? (v(e, ei) && e[ei][t] && (e[ei][t] = !1), n = Be(n, {
                enumerable: g(0, !1)
            })) : (v(e, ei) || Qn(e, ei, g(1, {})), e[ei][t] = !0), ui(e, t, n)) : Qn(e, t, n)
        },
        pi = function (e, t) {
            o(e);
            for (var n, i = function (e) {
                    var t = Oe(e),
                        n = Pt.f;
                    if (n)
                        for (var i, r = n(e), o = ut.f, a = 0; r.length > a;) o.call(e, i = r[a++]) && t.push(i);
                    return t
                }(t = K(t)), r = 0, a = i.length; a > r;) di(e, n = i[r++], t[n]);
            return e
        },
        gi = function (e) {
            var t = ni.call(this, e = h(e, !0));
            return !(this === ai && v(ri, e) && !v(oi, e)) && (!(t || !v(this, e) || !v(ri, e) || v(this, ei) && this[ei][e]) || t)
        },
        mi = function (e, t) {
            if (e = K(e), t = h(t, !0), e !== ai || !v(ri, t) || v(oi, t)) {
                var n = Yn(e, t);
                return !n || !v(ri, t) || v(e, ei) && e[ei][t] || (n.enumerable = !0), n
            }
        },
        yi = function (e) {
            for (var t, n = Jn(K(e)), i = [], r = 0; n.length > r;) v(ri, t = n[r++]) || t == ei || t == Kn || i.push(t);
            return i
        },
        vi = function (e) {
            for (var t, n = e === ai, i = Jn(n ? oi : K(e)), r = [], o = 0; i.length > o;) !v(ri, t = i[o++]) || n && !v(ai, t) || r.push(ri[t]);
            return r
        };
    si || (T(($n = function () {
        if (this instanceof $n) throw TypeError("Symbol is not a constructor!");
        var e = k(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
                this === ai && t.call(oi, n), v(this, ei) && v(this[ei], e) && (this[ei][e] = !1), ui(this, e, g(1, n))
            };
        return s && ci && ui(ai, e, {
            configurable: !0,
            set: t
        }), fi(e)
    }).prototype, "toString", function () {
        return this._k
    }), ht.f = mi, p.f = di, se.f = Gn.f = yi, ut.f = gi, Pt.f = vi, s && T(ai, "propertyIsEnumerable", gi, !0), Vn.f = function (e) {
        return fi(ue(e))
    }), P(P.G + P.W + P.F * !si, {
        Symbol: $n
    });
    for (var bi = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), wi = 0; bi.length > wi;) ue(bi[wi++]);
    for (var ki = Oe(ue.store), Ti = 0; ki.length > Ti;) Un(ki[Ti++]);
    P(P.S + P.F * !si, "Symbol", {
        for: function (e) {
            return v(ii, e += "") ? ii[e] : ii[e] = $n(e)
        },
        keyFor: function (e) {
            if (!hi(e)) throw TypeError(e + " is not a symbol!");
            for (var t in ii)
                if (ii[t] === e) return t
        },
        useSetter: function () {
            ci = !0
        },
        useSimple: function () {
            ci = !1
        }
    }), P(P.S + P.F * !si, "Object", {
        create: function (e, t) {
            return void 0 === t ? Be(e) : pi(Be(e), t)
        },
        defineProperty: di,
        defineProperties: pi,
        getOwnPropertyDescriptor: mi,
        getOwnPropertyNames: yi,
        getOwnPropertySymbols: vi
    }), Xn && P(P.S + P.F * (!si || a(function () {
        var e = $n();
        return "[null]" != Zn([e]) || "{}" != Zn({
            a: e
        }) || "{}" != Zn(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (n = t = i[1], (r(t) || void 0 !== e) && !hi(e)) return ze(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !hi(t)) return t
            }), i[1] = t, Zn.apply(Xn, i)
        }
    }), $n.prototype[ti] || m($n.prototype, ti, $n.prototype.valueOf), de($n, "Symbol"), de(Math, "Math", !0), de(n.JSON, "JSON", !0);
    var Si = function (e, t) {
            var n = (i.Object || {})[e] || Object[e],
                r = {};
            r[e] = t(n), P(P.S + P.F * a(function () {
                n(1)
            }), "Object", r)
        },
        Ei = mt.onFreeze;
    Si("freeze", function (e) {
        return function (t) {
            return e && r(t) ? e(Ei(t)) : t
        }
    });
    var _i = mt.onFreeze;
    Si("seal", function (e) {
        return function (t) {
            return e && r(t) ? e(_i(t)) : t
        }
    });
    var Ai = mt.onFreeze;
    Si("preventExtensions", function (e) {
        return function (t) {
            return e && r(t) ? e(Ai(t)) : t
        }
    }), Si("isFrozen", function (e) {
        return function (t) {
            return !r(t) || !!e && e(t)
        }
    }), Si("isSealed", function (e) {
        return function (t) {
            return !r(t) || !!e && e(t)
        }
    }), Si("isExtensible", function (e) {
        return function (t) {
            return !!r(t) && (!e || e(t))
        }
    });
    var Pi = ht.f;
    Si("getOwnPropertyDescriptor", function () {
        return function (e, t) {
            return Pi(K(e), t)
        }
    }), Si("getPrototypeOf", function () {
        return function (e) {
            return Ue(le(e))
        }
    }), Si("keys", function () {
        return function (e) {
            return Oe(le(e))
        }
    }), Si("getOwnPropertyNames", function () {
        return Gn.f
    }), P(P.S + P.F, "Object", {
        assign: Lt
    });
    var Mi = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    P(P.S, "Object", {
        is: Mi
    });
    var Li = p.f,
        xi = Function.prototype,
        Ci = /^\s*function ([^ (]*)/;
    "name" in xi || s && Li(xi, "name", {
        configurable: !0,
        get: function () {
            try {
                return ("" + this).match(Ci)[1]
            } catch (e) {
                return ""
            }
        }
    }), P(P.S, "String", {
        raw: function (e) {
            for (var t = K(e.raw), n = D(t.length), i = arguments.length, r = [], o = 0; n > o;) r.push(String(t[o++])), o < i && r.push(String(arguments[o]));
            return r.join("")
        }
    });
    var Oi = String.fromCharCode,
        Ni = String.fromCodePoint;
    P(P.S + P.F * (!!Ni && 1 != Ni.length), "String", {
        fromCodePoint: function (e) {
            for (var t, n = [], i = arguments.length, r = 0; i > r;) {
                if (t = +arguments[r++], J(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                n.push(t < 65536 ? Oi(t) : Oi(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
            }
            return n.join("")
        }
    });
    var ji, Ii = (ji = !1, function (e, t) {
        var n, i, r = String(G(e)),
            o = B(t),
            a = r.length;
        return o < 0 || o >= a ? ji ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === a || (i = r.charCodeAt(o + 1)) < 56320 || i > 57343 ? ji ? r.charAt(o) : n : ji ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
    });
    P(P.P, "String", {
        codePointAt: function (e) {
            return Ii(this, e)
        }
    });
    var Fi = function (e) {
        var t = String(G(this)),
            n = "",
            i = B(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
        for (; i > 0;
            (i >>>= 1) && (t += t)) 1 & i && (n += t);
        return n
    };
    P(P.P, "String", {
        repeat: Fi
    });
    var Ri = ue("match"),
        qi = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[Ri]) ? !!t : "RegExp" == W(e))
        },
        Bi = function (e, t, n) {
            if (qi(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(G(e))
        },
        Vi = ue("match"),
        Di = function (e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[Vi] = !1, !"/./" [e](t)
                } catch (e) {}
            }
            return !0
        },
        Ui = "".startsWith;
    P(P.P + P.F * Di("startsWith"), "String", {
        startsWith: function (e) {
            var t = Bi(this, e, "startsWith"),
                n = D(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                i = String(e);
            return Ui ? Ui.call(t, i, n) : t.slice(n, n + i.length) === i
        }
    });
    var Hi = "".endsWith;
    P(P.P + P.F * Di("endsWith"), "String", {
        endsWith: function (e) {
            var t = Bi(this, e, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = D(t.length),
                r = void 0 === n ? i : Math.min(D(n), i),
                o = String(e);
            return Hi ? Hi.call(t, o, r) : t.slice(r - o.length, r) === o
        }
    });
    P(P.P + P.F * Di("includes"), "String", {
        includes: function (e) {
            return !!~Bi(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    s && "g" != /./g.flags && p.f(RegExp.prototype, "flags", {
        configurable: !0,
        get: function () {
            var e = o(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    });
    var Wi = function (e, t, n) {
        var i = ue(e),
            r = n(G, i, "" [e]),
            o = r[0],
            s = r[1];
        a(function () {
            var t = {};
            return t[i] = function () {
                return 7
            }, 7 != "" [e](t)
        }) && (T(String.prototype, e, o), m(RegExp.prototype, i, 2 == t ? function (e, t) {
            return s.call(e, this, t)
        } : function (e) {
            return s.call(e, this)
        }))
    };
    Wi("match", 1, function (e, t, n) {
        return [function (n) {
            var i = e(this),
                r = null == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
        }, n]
    }), Wi("replace", 2, function (e, t, n) {
        return [function (i, r) {
            var o = e(this),
                a = null == i ? void 0 : i[t];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, n]
    }), Wi("split", 2, function (e, t, n) {
        var i = qi,
            r = n,
            o = [].push;
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            var a = void 0 === /()??/.exec("")[1];
            n = function (e, t) {
                var n = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!i(e)) return r.call(n, e, t);
                var s, l, c, u, f, h = [],
                    d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    p = 0,
                    g = void 0 === t ? 4294967295 : t >>> 0,
                    m = new RegExp(e.source, d + "g");
                for (a || (s = new RegExp("^" + m.source + "$(?!\\s)", d));
                    (l = m.exec(n)) && !((c = l.index + l[0].length) > p && (h.push(n.slice(p, l.index)), !a && l.length > 1 && l[0].replace(s, function () {
                        for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (l[f] = void 0)
                    }), l.length > 1 && l.index < n.length && o.apply(h, l.slice(1)), u = l[0].length, p = c, h.length >= g));) m.lastIndex === l.index && m.lastIndex++;
                return p === n.length ? !u && m.test("") || h.push("") : h.push(n.slice(p)), h.length > g ? h.slice(0, g) : h
            }
        } else "0".split(void 0, 0).length && (n = function (e, t) {
            return void 0 === e && 0 === t ? [] : r.call(this, e, t)
        });
        return [function (i, r) {
            var o = e(this),
                a = null == i ? void 0 : i[t];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, n]
    }), Wi("search", 1, function (e, t, n) {
        return [function (n) {
            var i = e(this),
                r = null == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
        }, n]
    });
    var zi = function (e, t, n) {
        t in e ? p.f(e, t, g(0, n)) : e[t] = n
    };
    P(P.S + P.F * !lt(function (e) {}), "Array", {
        from: function (e) {
            var t, n, i, r, o = le(e),
                a = "function" == typeof this ? this : Array,
                s = arguments.length,
                l = s > 1 ? arguments[1] : void 0,
                c = void 0 !== l,
                u = 0,
                f = We(o);
            if (c && (l = E(l, s > 2 ? arguments[2] : void 0, 2)), null == f || a == Array && Ce(f))
                for (n = new a(t = D(o.length)); t > u; u++) zi(n, u, c ? l(o[u], u) : o[u]);
            else
                for (r = f.call(o), n = new a; !(i = r.next()).done; u++) zi(n, u, c ? pt(r, l, [i.value, u], !0) : i.value);
            return n.length = u, n
        }
    }), P(P.S + P.F * a(function () {
        function e() {}
        return !(Array.of.call(e) instanceof e)
    }), "Array", {
        of: function () {
            for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) zi(n, e, arguments[e++]);
            return n.length = t, n
        }
    }), P(P.P, "Array", {
        copyWithin: ct
    }), $e("copyWithin");
    var Gi = Ye(5),
        Ki = !0;
    "find" in [] && Array(1).find(function () {
        Ki = !1
    }), P(P.P + P.F * Ki, "Array", {
        find: function (e) {
            return Gi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("find");
    var Yi = Ye(6),
        Qi = !0;
    "findIndex" in [] && Array(1).findIndex(function () {
        Qi = !1
    }), P(P.P + P.F * Qi, "Array", {
        findIndex: function (e) {
            return Yi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("findIndex"), P(P.P, "Array", {
        fill: ce
    }), $e("fill");
    var Ji = n.isFinite;
    P(P.S, "Number", {
        isFinite: function (e) {
            return "number" == typeof e && Ji(e)
        }
    });
    var $i = Math.floor,
        Xi = function (e) {
            return !r(e) && isFinite(e) && $i(e) === e
        };
    P(P.S, "Number", {
        isInteger: Xi
    });
    var Zi = Math.abs;
    P(P.S, "Number", {
        isSafeInteger: function (e) {
            return Xi(e) && Zi(e) <= 9007199254740991
        }
    }), P(P.S, "Number", {
        isNaN: function (e) {
            return e != e
        }
    }), P(P.S, "Number", {
        EPSILON: Math.pow(2, -52)
    }), P(P.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    }), P(P.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    });
    var er = Math.log1p || function (e) {
            return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
        },
        tr = Math.sqrt,
        nr = Math.acosh;
    P(P.S + P.F * !(nr && 710 == Math.floor(nr(Number.MAX_VALUE)) && nr(1 / 0) == 1 / 0), "Math", {
        acosh: function (e) {
            return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : er(e - 1 + tr(e - 1) * tr(e + 1))
        }
    });
    var ir = Math.asinh;
    P(P.S + P.F * !(ir && 1 / ir(0) > 0), "Math", {
        asinh: function e(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
    });
    var rr = Math.atanh;
    P(P.S + P.F * !(rr && 1 / rr(-0) < 0), "Math", {
        atanh: function (e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    });
    var or = Math.sign || function (e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    };
    P(P.S, "Math", {
        cbrt: function (e) {
            return or(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    }), P(P.S, "Math", {
        clz32: function (e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    });
    var ar = Math.exp;
    P(P.S, "Math", {
        cosh: function (e) {
            return (ar(e = +e) + ar(-e)) / 2
        }
    });
    var sr = Math.expm1,
        lr = !sr || sr(10) > 22025.465794806718 || sr(10) < 22025.465794806718 || -2e-17 != sr(-2e-17) ? function (e) {
            return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
        } : sr;
    P(P.S + P.F * (lr != Math.expm1), "Math", {
        expm1: lr
    });
    var cr = Math.pow,
        ur = cr(2, -52),
        fr = cr(2, -23),
        hr = cr(2, 127) * (2 - fr),
        dr = cr(2, -126),
        pr = Math.fround || function (e) {
            var t, n, i = Math.abs(e),
                r = or(e);
            return i < dr ? r * (i / dr / fr + 1 / ur - 1 / ur) * dr * fr : (n = (t = (1 + fr / ur) * i) - (t - i)) > hr || n != n ? r * (1 / 0) : r * n
        };
    P(P.S, "Math", {
        fround: pr
    });
    var gr = Math.abs;
    P(P.S, "Math", {
        hypot: function (e, t) {
            for (var n, i, r = 0, o = 0, a = arguments.length, s = 0; o < a;) s < (n = gr(arguments[o++])) ? (r = r * (i = s / n) * i + 1, s = n) : r += n > 0 ? (i = n / s) * i : n;
            return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r)
        }
    });
    var mr = Math.imul;
    P(P.S + P.F * a(function () {
        return -5 != mr(4294967295, 5) || 2 != mr.length
    }), "Math", {
        imul: function (e, t) {
            var n = +e,
                i = +t,
                r = 65535 & n,
                o = 65535 & i;
            return 0 | r * o + ((65535 & n >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0)
        }
    }), P(P.S, "Math", {
        log1p: er
    }), P(P.S, "Math", {
        log10: function (e) {
            return Math.log(e) * Math.LOG10E
        }
    }), P(P.S, "Math", {
        log2: function (e) {
            return Math.log(e) / Math.LN2
        }
    }), P(P.S, "Math", {
        sign: or
    });
    var yr = Math.exp;
    P(P.S + P.F * a(function () {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function (e) {
            return Math.abs(e = +e) < 1 ? (lr(e) - lr(-e)) / 2 : (yr(e - 1) - yr(-e - 1)) * (Math.E / 2)
        }
    });
    var vr = Math.exp;
    P(P.S, "Math", {
        tanh: function (e) {
            var t = lr(e = +e),
                n = lr(-e);
            return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (vr(e) + vr(-e))
        }
    }), P(P.S, "Math", {
        trunc: function (e) {
            return (e > 0 ? Math.floor : Math.ceil)(e)
        }
    });
    var br = $(!0);
    P(P.P, "Array", {
        includes: function (e) {
            return br(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("includes");
    var wr = ut.f,
        kr = function (e) {
            return function (t) {
                for (var n, i = K(t), r = Oe(i), o = r.length, a = 0, s = []; o > a;) wr.call(i, n = r[a++]) && s.push(e ? [n, i[n]] : i[n]);
                return s
            }
        },
        Tr = kr(!1);
    P(P.S, "Object", {
        values: function (e) {
            return Tr(e)
        }
    });
    var Sr = kr(!0);
    P(P.S, "Object", {
        entries: function (e) {
            return Sr(e)
        }
    }), P(P.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, i = K(e), r = ht.f, o = Jt(i), a = {}, s = 0; o.length > s;) void 0 !== (n = r(i, t = o[s++])) && zi(a, t, n);
            return a
        }
    });
    var Er = function (e, t, n, i) {
            var r = String(G(e)),
                o = r.length,
                a = void 0 === n ? " " : String(n),
                s = D(t);
            if (s <= o || "" == a) return r;
            var l = s - o,
                c = Fi.call(a, Math.ceil(l / a.length));
            return c.length > l && (c = c.slice(0, l)), i ? c + r : r + c
        },
        _r = n.navigator,
        Ar = _r && _r.userAgent || "";
    P(P.P + P.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
        padStart: function (e) {
            return Er(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    }), P(P.P + P.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
        padEnd: function (e) {
            return Er(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    });
    var Pr = [].slice,
        Mr = /MSIE .\./.test(Ar),
        Lr = function (e) {
            return function (t, n) {
                var i = arguments.length > 2,
                    r = !!i && Pr.call(arguments, 2);
                return e(i ? function () {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, n)
            }
        };
    P(P.G + P.B + P.F * Mr, {
        setTimeout: Lr(n.setTimeout),
        setInterval: Lr(n.setInterval)
    }), P(P.G + P.B, {
        setImmediate: fn.set,
        clearImmediate: fn.clear
    });
    for (var xr = ue("iterator"), Cr = ue("toStringTag"), Or = Me.Array, Nr = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, jr = Oe(Nr), Ir = 0; Ir < jr.length; Ir++) {
        var Fr, Rr = jr[Ir],
            qr = Nr[Rr],
            Br = n[Rr],
            Vr = Br && Br.prototype;
        if (Vr && (Vr[xr] || m(Vr, xr, Or), Vr[Cr] || m(Vr, Cr, Rr), Me[Rr] = Or, qr))
            for (Fr in ot) Vr[Fr] || T(Vr, Fr, ot[Fr], !0)
    }
    t(function (t) {
        ! function (e) {
            var n, i = Object.prototype,
                r = i.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator",
                l = o.toStringTag || "@@toStringTag",
                c = e.regeneratorRuntime;
            if (c) t.exports = c;
            else {
                (c = e.regeneratorRuntime = t.exports).wrap = b;
                var u = "suspendedStart",
                    f = "suspendedYield",
                    h = "executing",
                    d = "completed",
                    p = {},
                    g = {};
                g[a] = function () {
                    return this
                };
                var m = Object.getPrototypeOf,
                    y = m && m(m(x([])));
                y && y !== i && r.call(y, a) && (g = y);
                var v = S.prototype = k.prototype = Object.create(g);
                T.prototype = v.constructor = S, S.constructor = T, S[l] = T.displayName = "GeneratorFunction", c.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === T || "GeneratorFunction" === (t.displayName || t.name))
                }, c.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(v), e
                }, c.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, E(_.prototype), _.prototype[s] = function () {
                    return this
                }, c.AsyncIterator = _, c.async = function (e, t, n, i) {
                    var r = new _(b(e, t, n, i));
                    return c.isGeneratorFunction(t) ? r : r.next().then(function (e) {
                        return e.done ? e.value : r.next()
                    })
                }, E(v), v[l] = "Generator", v[a] = function () {
                    return this
                }, v.toString = function () {
                    return "[object Generator]"
                }, c.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in e) return n.value = i, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, c.values = x, L.prototype = {
                    constructor: L,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function i(i, r) {
                            return s.type = "throw", s.arg = e, t.next = i, r && (t.method = "next", t.arg = n), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), p
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    M(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, i) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = n), p
                    }
                }
            }

            function b(e, t, n, i) {
                var r = t && t.prototype instanceof k ? t : k,
                    o = Object.create(r.prototype),
                    a = new L(i || []);
                return o._invoke = function (e, t, n) {
                    var i = u;
                    return function (r, o) {
                        if (i === h) throw new Error("Generator is already running");
                        if (i === d) {
                            if ("throw" === r) throw o;
                            return C()
                        }
                        for (n.method = r, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = A(a, n);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === u) throw i = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = h;
                            var l = w(e, t, n);
                            if ("normal" === l.type) {
                                if (i = n.done ? d : f, l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (i = d, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(e, n, a), o
            }

            function w(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function k() {}

            function T() {}

            function S() {}

            function E(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function _(t) {
                function n(e, i, o, a) {
                    var s = w(t[e], t, i);
                    if ("throw" !== s.type) {
                        var l = s.arg,
                            c = l.value;
                        return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function (e) {
                            n("next", e, o, a)
                        }, function (e) {
                            n("throw", e, o, a)
                        }) : Promise.resolve(c).then(function (e) {
                            l.value = e, o(l)
                        }, a)
                    }
                    a(s.arg)
                }
                var i;
                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function (e, t) {
                    function r() {
                        return new Promise(function (i, r) {
                            n(e, t, i, r)
                        })
                    }
                    return i = i ? i.then(r, r) : r()
                }
            }

            function A(e, t) {
                var i = e.iterator[t.method];
                if (i === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, A(e, t), "throw" === t.method)) return p;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var r = w(i, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, p) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
            }

            function P(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function L(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(P, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            o = function t() {
                                for (; ++i < e.length;)
                                    if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
                                return t.value = n, t.done = !0, t
                            };
                        return o.next = o
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: n,
                    done: !0
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : e)
    });
    try {
        var Dr = new window.CustomEvent("test");
        if (Dr.preventDefault(), !0 !== Dr.defaultPrevented) throw new Error("Could not prevent default")
    } catch (e) {
        var Ur = function (e, t) {
            var n, i;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function () {
                i.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function () {
                            return !0
                        }
                    })
                } catch (e) {
                    this.defaultPrevented = !0
                }
            }, n
        };
        Ur.prototype = window.Event.prototype, window.CustomEvent = Ur
    }! function (e) {
        var t = function () {
                try {
                    return !!Symbol.iterator
                } catch (e) {
                    return !1
                }
            }(),
            n = function (e) {
                var n = {
                    next: function () {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return t && (n[Symbol.iterator] = function () {
                    return n
                }), n
            },
            i = function (e) {
                return encodeURIComponent(e).replace(/%20/g, "+")
            },
            r = function (e) {
                return decodeURIComponent(e).replace(/\+/g, " ")
            };
        "URLSearchParams" in e && "a=1" === new URLSearchParams("?a=1").toString() || function () {
            var o = function (e) {
                    if (Object.defineProperty(this, "_entries", {
                            value: {}
                        }), "string" == typeof e) {
                        if ("" !== e)
                            for (var t, n = (e = e.replace(/^\?/, "")).split("&"), i = 0; i < n.length; i++) t = n[i].split("="), this.append(r(t[0]), t.length > 1 ? r(t[1]) : "")
                    } else if (e instanceof o) {
                        var a = this;
                        e.forEach(function (e, t) {
                            a.append(e, t)
                        })
                    }
                },
                a = o.prototype;
            a.append = function (e, t) {
                e in this._entries ? this._entries[e].push(t.toString()) : this._entries[e] = [t.toString()]
            }, a.delete = function (e) {
                delete this._entries[e]
            }, a.get = function (e) {
                return e in this._entries ? this._entries[e][0] : null
            }, a.getAll = function (e) {
                return e in this._entries ? this._entries[e].slice(0) : []
            }, a.has = function (e) {
                return e in this._entries
            }, a.set = function (e, t) {
                this._entries[e] = [t.toString()]
            }, a.forEach = function (e, t) {
                var n;
                for (var i in this._entries)
                    if (this._entries.hasOwnProperty(i)) {
                        n = this._entries[i];
                        for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this)
                    }
            }, a.keys = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push(n)
                }), n(e)
            }, a.values = function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t)
                }), n(e)
            }, a.entries = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push([n, t])
                }), n(e)
            }, t && (a[Symbol.iterator] = a.entries), a.toString = function () {
                var e = "";
                return this.forEach(function (t, n) {
                    e.length > 0 && (e += "&"), e += i(n) + "=" + i(t)
                }), e
            }, e.URLSearchParams = o
        }()
    }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
    function (e) {
        if (function () {
                try {
                    var e = new URL("b", "http://a");
                    return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams
                } catch (e) {
                    return !1
                }
            }() || function () {
                var t = e.URL,
                    n = function (e, t) {
                        "string" != typeof e && (e = String(e));
                        var n = document.implementation.createHTMLDocument("");
                        if (window.doc = n, t) {
                            var i = n.createElement("base");
                            i.href = t, n.head.appendChild(i)
                        }
                        var r = n.createElement("a");
                        if (r.href = e, n.body.appendChild(r), r.href = r.href, ":" === r.protocol || !/:/.test(r.href)) throw new TypeError("Invalid URL");
                        Object.defineProperty(this, "_anchorElement", {
                            value: r
                        })
                    },
                    i = n.prototype;
                ["hash", "host", "hostname", "port", "protocol", "search"].forEach(function (e) {
                    ! function (e) {
                        Object.defineProperty(i, e, {
                            get: function () {
                                return this._anchorElement[e]
                            },
                            set: function (t) {
                                this._anchorElement[e] = t
                            },
                            enumerable: !0
                        })
                    }(e)
                }), Object.defineProperties(i, {
                    toString: {
                        get: function () {
                            var e = this;
                            return function () {
                                return e.href
                            }
                        }
                    },
                    href: {
                        get: function () {
                            return this._anchorElement.href.replace(/\?$/, "")
                        },
                        set: function (e) {
                            this._anchorElement.href = e
                        },
                        enumerable: !0
                    },
                    pathname: {
                        get: function () {
                            return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                        },
                        set: function (e) {
                            this._anchorElement.pathname = e
                        },
                        enumerable: !0
                    },
                    origin: {
                        get: function () {
                            var e = {
                                    "http:": 80,
                                    "https:": 443,
                                    "ftp:": 21
                                } [this._anchorElement.protocol],
                                t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                        },
                        enumerable: !0
                    },
                    password: {
                        get: function () {
                            return ""
                        },
                        set: function (e) {},
                        enumerable: !0
                    },
                    username: {
                        get: function () {
                            return ""
                        },
                        set: function (e) {},
                        enumerable: !0
                    },
                    searchParams: {
                        get: function () {
                            var e = new URLSearchParams(this.search),
                                t = this;
                            return ["append", "delete", "set"].forEach(function (n) {
                                var i = e[n];
                                e[n] = function () {
                                    i.apply(e, arguments), t.search = e.toString()
                                }
                            }), e
                        },
                        enumerable: !0
                    }
                }), n.createObjectURL = function (e) {
                    return t.createObjectURL.apply(t, arguments)
                }, n.revokeObjectURL = function (e) {
                    return t.revokeObjectURL.apply(t, arguments)
                }, e.URL = n
            }(), void 0 !== e.location && !("origin" in e.location)) {
            var t = function () {
                return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
            };
            try {
                Object.defineProperty(e.location, "origin", {
                    get: t,
                    enumerable: !0
                })
            } catch (n) {
                setInterval(function () {
                    e.location.origin = t()
                }, 100)
            }
        }
    }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
    var Hr = function (e) {
            return null != e ? e.constructor : null
        },
        Wr = function (e, t) {
            return Boolean(e && t && e instanceof t)
        },
        zr = function (e) {
            return null == e
        },
        Gr = function (e) {
            return Hr(e) === Object
        },
        Kr = function (e) {
            return Hr(e) === String
        },
        Yr = function (e) {
            return Array.isArray(e)
        },
        Qr = function (e) {
            return Wr(e, NodeList)
        },
        Jr = function (e) {
            return zr(e) || (Kr(e) || Yr(e) || Qr(e)) && !e.length || Gr(e) && !Object.keys(e).length
        },
        $r = {
            nullOrUndefined: zr,
            object: Gr,
            number: function (e) {
                return Hr(e) === Number && !Number.isNaN(e)
            },
            string: Kr,
            boolean: function (e) {
                return Hr(e) === Boolean
            },
            function: function (e) {
                return Hr(e) === Function
            },
            array: Yr,
            weakMap: function (e) {
                return Wr(e, WeakMap)
            },
            nodeList: Qr,
            element: function (e) {
                return Wr(e, Element)
            },
            textNode: function (e) {
                return Hr(e) === Text
            },
            event: function (e) {
                return Wr(e, Event)
            },
            cue: function (e) {
                return Wr(e, window.TextTrackCue) || Wr(e, window.VTTCue)
            },
            track: function (e) {
                return Wr(e, TextTrack) || !zr(e) && Kr(e.kind)
            },
            url: function (e) {
                if (Wr(e, window.URL)) return !0;
                var t = e;
                e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
                try {
                    return !Jr(new URL(t).hostname)
                } catch (e) {
                    return !1
                }
            },
            empty: Jr
        },
        Xr = function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function Zr(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = this,
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !$r.empty(t) && $r.function(n)) {
            var s = t.split(" "),
                l = a;
            Xr && (l = {
                passive: o,
                capture: a
            }), s.forEach(function (t) {
                r && r.eventListeners && i && r.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: l
                }), e[i ? "addEventListener" : "removeEventListener"](t, n, l)
            })
        }
    }

    function eo(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Zr.call(this, e, t, n, !0, i, r)
    }

    function to(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Zr.call(this, e, t, n, !1, i, r)
    }

    function no(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Zr.call(this, e, t, function o() {
            to(e, t, o, i, r);
            for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
            n.apply(this, s)
        }, !0, i, r)
    }

    function io(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ($r.element(e) && !$r.empty(t)) {
            var r = new CustomEvent(t, {
                bubbles: n,
                detail: Object.assign({}, i, {
                    plyr: this
                })
            });
            e.dispatchEvent(r)
        }
    }
    var ro = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        oo = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        ao = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        so = function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();

    function lo(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach(function (e, n) {
            var i = n > 0 ? t.cloneNode(!0) : t,
                r = e.parentNode,
                o = e.nextSibling;
            i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
        })
    }

    function co(e, t) {
        $r.element(e) && !$r.empty(t) && Object.entries(t).filter(function (e) {
            var t = so(e, 2)[1];
            return !$r.nullOrUndefined(t)
        }).forEach(function (t) {
            var n = so(t, 2),
                i = n[0],
                r = n[1];
            return e.setAttribute(i, r)
        })
    }

    function uo(e, t, n) {
        var i = document.createElement(e);
        return $r.object(t) && co(i, t), $r.string(n) && (i.innerText = n), i
    }

    function fo(e, t, n, i) {
        t.appendChild(uo(e, n, i))
    }

    function ho(e) {
        $r.nodeList(e) || $r.array(e) ? Array.from(e).forEach(ho) : $r.element(e) && $r.element(e.parentNode) && e.parentNode.removeChild(e)
    }

    function po(e) {
        for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function go(e, t) {
        return $r.element(t) && $r.element(t.parentNode) && $r.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function mo(e, t) {
        if (!$r.string(e) || $r.empty(e)) return {};
        var n = {},
            i = t;
        return e.split(",").forEach(function (e) {
            var t = e.trim(),
                r = t.replace(".", ""),
                o = t.replace(/[[\]]/g, "").split("="),
                a = o[0],
                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    $r.object(i) && $r.string(i.class) && (i.class += " " + r), n.class = r;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[a] = s
            }
        }), n
    }

    function yo(e, t) {
        if ($r.element(e)) {
            var n = t;
            $r.boolean(n) || (n = !e.hasAttribute("hidden")), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
        }
    }

    function vo(e, t, n) {
        if ($r.element(e)) {
            var i = "toggle";
            return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
        }
        return null
    }

    function bo(e, t) {
        return $r.element(e) && e.classList.contains(t)
    }

    function wo(e, t) {
        var n = {
            Element: Element
        };
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function ko(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function To(e) {
        return this.elements.container.querySelector(e)
    }

    function So() {
        var e = document.activeElement;
        return e = e && e !== document.body ? document.querySelector(":focus") : null
    }
    var Eo, _o, Ao, Po = (Eo = document.createElement("span"), _o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    }, Ao = Object.keys(_o).find(function (e) {
        return void 0 !== Eo.style[e]
    }), !!$r.string(Ao) && _o[Ao]);
    var Mo, Lo = {
            isIE: !!document.documentMode,
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        xo = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        Co = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function (e, t, n) {
                var i = Lo.isIPhone && n && Co.playsinline,
                    r = Co[e] || "html5" !== t;
                return {
                    api: r,
                    ui: r && Co.rangeInput && ("video" !== e || !Lo.isIPhone || i)
                }
            },
            pip: !Lo.isIPhone && $r.function(uo("video").webkitSetPresentationMode),
            airplay: $r.function(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function (e) {
                var t = e.split("/"),
                    n = so(t, 1)[0];
                if (!this.isHTML5 || n !== this.type) return !1;
                var i = void 0;
                e && e.includes("codecs=") ? i = e : "audio/mpeg" === e ? i = "audio/mpeg;" : e in xo && (i = e + '; codecs="' + xo[e] + '"');
                try {
                    return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (Mo = document.createElement("input"), Mo.type = "range", "range" === Mo.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== Po,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        Oo = {
            getSources: function () {
                var e = this;
                return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
                    return Co.mime.call(e, t.getAttribute("type"))
                }) : []
            },
            getQualityOptions: function () {
                return Oo.getSources.call(this).map(function (e) {
                    return Number(e.getAttribute("size"))
                }).filter(Boolean)
            },
            extend: function () {
                if (this.isHTML5) {
                    var e = this;
                    Object.defineProperty(e.media, "quality", {
                        get: function () {
                            var t = Oo.getSources.call(e).find(function (t) {
                                return t.getAttribute("src") === e.source
                            });
                            return t && Number(t.getAttribute("size"))
                        },
                        set: function (t) {
                            var n = Oo.getSources.call(e).find(function (e) {
                                return Number(e.getAttribute("size")) === t
                            });
                            if (n) {
                                var i = e.media,
                                    r = i.currentTime,
                                    o = i.paused,
                                    a = i.preload,
                                    s = i.readyState;
                                e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", function () {
                                    e.currentTime = r, o || e.play()
                                }), e.media.load()), io.call(e, e.media, "qualitychange", !1, {
                                    quality: t
                                })
                            }
                        }
                    })
                }
            },
            cancelRequests: function () {
                this.isHTML5 && (ho(Oo.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
            }
        };

    function No(e, t) {
        return t.split(".").reduce(function (e, t) {
            return e && e[t]
        }, e)
    }

    function jo() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        if (!n.length) return e;
        var r = n.shift();
        return $r.object(r) ? (Object.keys(r).forEach(function (t) {
            $r.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, ao({}, t, {})), jo(e[t], r[t])) : Object.assign(e, ao({}, t, r[t]))
        }), jo.apply(void 0, [e].concat(n))) : e
    }

    function Io(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return $r.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return n[t].toString()
        })
    }

    function Fo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
    }

    function Ro() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
    }

    function qo() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
        return (e = function () {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
            return e = Fo(e, "-", " "), e = Fo(e, "_", " "), Fo(e = Ro(e), " ", "")
        }(e)).charAt(0).toLowerCase() + e.slice(1)
    }

    function Bo(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var Vo = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ($r.empty(e) || $r.empty(t)) return "";
        var n = No(t.i18n, e);
        if ($r.empty(n)) return "";
        var i = {
            "{seektime}": t.seekTime,
            "{title}": t.title
        };
        return Object.entries(i).forEach(function (e) {
            var t = so(e, 2),
                i = t[0],
                r = t[1];
            n = Fo(n, i, r)
        }), n
    };

    function Do(e) {
        return $r.array(e) ? e.filter(function (t, n) {
            return e.indexOf(t) === n
        }) : e
    }
    var Uo = function () {
        function e(t) {
            ro(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
        }
        return oo(e, [{
            key: "get",
            value: function (t) {
                if (!e.supported || !this.enabled) return null;
                var n = window.localStorage.getItem(this.key);
                if ($r.empty(n)) return null;
                var i = JSON.parse(n);
                return $r.string(t) && t.length ? i[t] : i
            }
        }, {
            key: "set",
            value: function (t) {
                if (e.supported && this.enabled && $r.object(t)) {
                    var n = this.get();
                    $r.empty(n) && (n = {}), jo(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                }
            }
        }], [{
            key: "supported",
            get: function () {
                try {
                    if (!("localStorage" in window)) return !1;
                    return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
                } catch (e) {
                    return !1
                }
            }
        }]), e
    }();

    function Ho(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function (n, i) {
            try {
                var r = new XMLHttpRequest;
                if (!("withCredentials" in r)) return;
                r.addEventListener("load", function () {
                    if ("text" === t) try {
                        n(JSON.parse(r.responseText))
                    } catch (e) {
                        n(r.responseText)
                    } else n(r.response)
                }), r.addEventListener("error", function () {
                    throw new Error(r.status)
                }), r.open("GET", e, !0), r.responseType = t, r.send()
            } catch (e) {
                i(e)
            }
        })
    }

    function Wo(e, t) {
        if ($r.string(e)) {
            var n = $r.string(t),
                i = function () {
                    return null !== document.getElementById(t)
                },
                r = function (e, t) {
                    e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!n || !i()) {
                var o = Uo.supported,
                    a = document.createElement("div");
                if (a.setAttribute("hidden", ""), n && a.setAttribute("id", t), o) {
                    var s = window.localStorage.getItem("cache-" + t);
                    if (null !== s) {
                        var l = JSON.parse(s);
                        r(a, l.content)
                    }
                }
                Ho(e).then(function (e) {
                    $r.empty(e) || (o && window.localStorage.setItem("cache-" + t, JSON.stringify({
                        content: e
                    })), r(a, e))
                }).catch(function () {})
            }
        }
    }
    var zo = function (e) {
            return parseInt(e / 60 / 60 % 60, 10)
        },
        Go = function (e) {
            return parseInt(e / 60 % 60, 10)
        },
        Ko = function (e) {
            return parseInt(e % 60, 10)
        };

    function Yo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!$r.number(e)) return Yo(null, t, n);
        var i = function (e) {
                return ("0" + e).slice(-2)
            },
            r = zo(e),
            o = Go(e),
            a = Ko(e);
        return t || r > 0 ? r += ":" : r = "", (n && e > 0 ? "-" : "") + r + i(o) + ":" + i(a)
    }
    var Qo = {
        getIconUrl: function () {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Lo.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function () {
            try {
                return this.elements.controls = To.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: ko.call(this, this.config.selectors.buttons.play),
                    pause: To.call(this, this.config.selectors.buttons.pause),
                    restart: To.call(this, this.config.selectors.buttons.restart),
                    rewind: To.call(this, this.config.selectors.buttons.rewind),
                    fastForward: To.call(this, this.config.selectors.buttons.fastForward),
                    mute: To.call(this, this.config.selectors.buttons.mute),
                    pip: To.call(this, this.config.selectors.buttons.pip),
                    airplay: To.call(this, this.config.selectors.buttons.airplay),
                    settings: To.call(this, this.config.selectors.buttons.settings),
                    captions: To.call(this, this.config.selectors.buttons.captions),
                    fullscreen: To.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = To.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: To.call(this, this.config.selectors.inputs.seek),
                    volume: To.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: To.call(this, this.config.selectors.display.buffer),
                    currentTime: To.call(this, this.config.selectors.display.currentTime),
                    duration: To.call(this, this.config.selectors.display.duration)
                }, $r.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function (e, t) {
            var n = Qo.getIconUrl.call(this),
                i = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            co(r, jo(t, {
                role: "presentation",
                focusable: "false"
            }));
            var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                a = i + "-" + e;
            return "href" in o ? o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
        },
        createLabel: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
                    pip: "PIP",
                    airplay: "AirPlay"
                } [e] || Vo(e, this.config);
            return uo("span", Object.assign({}, t, {
                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            }), n)
        },
        createBadge: function (e) {
            if ($r.empty(e)) return null;
            var t = uo("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(uo("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function (e, t) {
            var n = uo("button"),
                i = Object.assign({}, t),
                r = qo(e),
                o = !1,
                a = void 0,
                s = void 0,
                l = void 0,
                c = void 0;
            switch ("type" in i || (i.type = "button"), "class" in i ? i.class.includes(this.config.classNames.control) || (i.class += " " + this.config.classNames.control) : i.class = this.config.classNames.control, e) {
                case "play":
                    o = !0, a = "play", l = "pause", s = "play", c = "pause";
                    break;
                case "mute":
                    o = !0, a = "mute", l = "unmute", s = "volume", c = "muted";
                    break;
                case "captions":
                    o = !0, a = "enableCaptions", l = "disableCaptions", s = "captions-off", c = "captions-on";
                    break;
                case "fullscreen":
                    o = !0, a = "enterFullscreen", l = "exitFullscreen", s = "enter-fullscreen", c = "exit-fullscreen";
                    break;
                case "play-large":
                    i.class += " " + this.config.classNames.control + "--overlaid", r = "play", a = "play", s = "play";
                    break;
                default:
                    a = r, s = e
            }
            o ? (n.appendChild(Qo.createIcon.call(this, c, {
                class: "icon--pressed"
            })), n.appendChild(Qo.createIcon.call(this, s, {
                class: "icon--not-pressed"
            })), n.appendChild(Qo.createLabel.call(this, l, {
                class: "label--pressed"
            })), n.appendChild(Qo.createLabel.call(this, a, {
                class: "label--not-pressed"
            }))) : (n.appendChild(Qo.createIcon.call(this, s)), n.appendChild(Qo.createLabel.call(this, a))), jo(i, mo(this.config.selectors.buttons[r], i)), co(n, i), "play" === r ? ($r.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(n)) : this.elements.buttons[r] = n;
            var u = this.config.classNames.controlPressed;
            return Object.defineProperty(n, "pressed", {
                enumerable: !0,
                get: function () {
                    return bo(n, u)
                },
                set: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    vo(n, u, e)
                }
            }), n
        },
        createRange: function (e, t) {
            var n = uo("input", jo(mo(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": Vo(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, Qo.updateRangeFill.call(this, n), n
        },
        createProgress: function (e, t) {
            var n = uo("progress", jo(mo(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "presentation",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(uo("span", null, "0"));
                var i = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    r = i ? Vo(i, this.config) : "";
                n.innerText = "% " + r.toLowerCase()
            }
            return this.elements.display[e] = n, n
        },
        createTime: function (e) {
            var t = mo(this.config.selectors.display[e]),
                n = uo("div", jo(t, {
                    class: "plyr__time " + t.class,
                    "aria-label": Vo(e, this.config)
                }), "00:00");
            return this.elements.display[e] = n, n
        },
        createMenuItem: function (e) {
            var t = e.value,
                n = e.list,
                i = e.type,
                r = e.title,
                o = e.badge,
                a = void 0 === o ? null : o,
                s = e.checked,
                l = void 0 !== s && s,
                c = uo("li"),
                u = uo("label", {
                    class: this.config.classNames.control
                }),
                f = uo("input", jo(mo(this.config.selectors.inputs[i]), {
                    type: "radio",
                    name: "plyr-" + i,
                    value: t,
                    checked: l,
                    class: "plyr__sr-only"
                })),
                h = uo("span", {
                    hidden: ""
                });
            u.appendChild(f), u.appendChild(h), u.insertAdjacentHTML("beforeend", r), $r.element(a) && u.appendChild(a), c.appendChild(u), n.appendChild(c)
        },
        formatTime: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return $r.number(e) ? Yo(e, zo(this.duration) > 0, t) : e
        },
        updateTimeDisplay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            $r.element(e) && $r.number(t) && (e.innerText = Qo.formatTime(t, n))
        },
        updateVolume: function () {
            this.supported.ui && ($r.element(this.elements.inputs.volume) && Qo.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), $r.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            $r.element(e) && (e.value = t, Qo.updateRangeFill.call(this, e))
        },
        updateProgress: function (e) {
            var t = this;
            if (this.supported.ui && $r.event(e)) {
                var n, i, r = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && Qo.setRange.call(this, this.elements.inputs.seek, r);
                        break;
                    case "playing":
                    case "progress":
                        ! function (e, n) {
                            var i = $r.number(n) ? n : 0,
                                r = $r.element(e) ? e : t.elements.display.buffer;
                            if ($r.element(r)) {
                                r.value = i;
                                var o = r.getElementsByTagName("span")[0];
                                $r.element(o) && (o.childNodes[0].nodeValue = i)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function (e) {
            var t = $r.event(e) ? e.target : e;
            if ($r.element(t) && "range" === t.getAttribute("type")) {
                if (wo(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = Qo.formatTime(this.currentTime),
                        i = Qo.formatTime(this.duration),
                        r = Vo("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
                } else if (wo(t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", o + "%")
                } else t.setAttribute("aria-valuenow", t.value);
                Lo.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
            }
        },
        updateSeekTooltip: function (e) {
            var t = this;
            if (this.config.tooltips.seek && $r.element(this.elements.inputs.seek) && $r.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = 0,
                    i = this.elements.progress.getBoundingClientRect(),
                    r = this.config.classNames.tooltip + "--visible",
                    o = function (e) {
                        vo(t.elements.display.seekTooltip, r, e)
                    };
                if (this.touch) o(!1);
                else {
                    if ($r.event(e)) n = 100 / i.width * (e.pageX - i.left);
                    else {
                        if (!bo(this.elements.display.seekTooltip, r)) return;
                        n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    n < 0 ? n = 0 : n > 100 && (n = 100), Qo.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", $r.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function (e) {
            var t = !$r.element(this.elements.display.duration) && this.config.invertTime;
            Qo.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Qo.updateProgress.call(this, e)
        },
        durationUpdate: function () {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return yo(this.elements.display.currentTime, !0), void yo(this.elements.progress, !0);
                $r.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = $r.element(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && Qo.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Qo.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Qo.updateSeekTooltip.call(this)
            }
        },
        toggleTab: function (e, t) {
            yo(this.elements.settings.tabs[e], !t)
        },
        setQualityMenu: function (e) {
            var t = this;
            if ($r.element(this.elements.settings.panes.quality)) {
                var n = this.elements.settings.panes.quality.querySelector("ul");
                $r.array(e) && (this.options.quality = Do(e).filter(function (e) {
                    return t.config.quality.options.includes(e)
                }));
                var i = !$r.empty(this.options.quality) && this.options.quality.length > 1;
                if (Qo.toggleTab.call(this, "quality", i), Qo.checkMenu.call(this), i) {
                    po(n);
                    this.options.quality.sort(function (e, n) {
                        var i = t.config.quality.options;
                        return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                    }).forEach(function (e) {
                        Qo.createMenuItem.call(t, {
                            value: e,
                            list: n,
                            type: "quality",
                            title: Qo.getLabel.call(t, "quality", e),
                            badge: function (e) {
                                var n = Vo("qualityBadge." + e, t.config);
                                return n.length ? Qo.createBadge.call(t, n) : null
                            }(e)
                        })
                    }), Qo.updateSetting.call(this, "quality", n)
                }
            }
        },
        getLabel: function (e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? Vo("normal", this.config) : t + "&times;";
                case "quality":
                    if ($r.number(t)) {
                        var n = Vo("qualityLabel." + t, this.config);
                        return n.length ? n : t + "p"
                    }
                    return Ro(t);
                case "captions":
                    return Xo.getLabel.call(this);
                default:
                    return null
            }
        },
        updateSetting: function (e, t, n) {
            var i = this.elements.settings.panes[e],
                r = null,
                o = t;
            if ("captions" === e) r = this.currentTrack;
            else {
                if (r = $r.empty(n) ? this[e] : n, $r.empty(r) && (r = this.config[e].default), !$r.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);
                if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e)
            }
            if ($r.element(o) || (o = i && i.querySelector("ul")), $r.element(o)) {
                this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = Qo.getLabel.call(this, e, r);
                var a = o && o.querySelector('input[value="' + r + '"]');
                $r.element(a) && (a.checked = !0)
            }
        },
        setCaptionsMenu: function () {
            var e = this,
                t = this.elements.settings.panes.captions.querySelector("ul"),
                n = Xo.getTracks.call(this);
            if (Qo.toggleTab.call(this, "captions", n.length), po(t), Qo.checkMenu.call(this), n.length) {
                var i = n.map(function (n, i) {
                    return {
                        value: i,
                        checked: e.captions.toggled && e.currentTrack === i,
                        title: Xo.getLabel.call(e, n),
                        badge: n.language && Qo.createBadge.call(e, n.language.toUpperCase()),
                        list: t,
                        type: "language"
                    }
                });
                i.unshift({
                    value: -1,
                    checked: !this.captions.toggled,
                    title: Vo("disabled", this.config),
                    list: t,
                    type: "language"
                }), i.forEach(Qo.createMenuItem.bind(this)), Qo.updateSetting.call(this, "captions", t)
            }
        },
        setSpeedMenu: function (e) {
            var t = this;
            if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && $r.element(this.elements.settings.panes.speed)) {
                $r.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
                    return t.config.speed.options.includes(e)
                });
                var n = !$r.empty(this.options.speed) && this.options.speed.length > 1;
                if (Qo.toggleTab.call(this, "speed", n), Qo.checkMenu.call(this), n) {
                    var i = this.elements.settings.panes.speed.querySelector("ul");
                    po(i), this.options.speed.forEach(function (e) {
                        Qo.createMenuItem.call(t, {
                            value: e,
                            list: i,
                            type: "speed",
                            title: Qo.getLabel.call(t, "speed", e)
                        })
                    }), Qo.updateSetting.call(this, "speed", i)
                }
            }
        },
        checkMenu: function () {
            var e = this.elements.settings.tabs,
                t = !$r.empty(e) && Object.values(e).some(function (e) {
                    return !e.hidden
                });
            yo(this.elements.settings.menu, !t)
        },
        toggleMenu: function (e) {
            var t = this.elements.settings.form,
                n = this.elements.buttons.settings;
            if ($r.element(t) && $r.element(n)) {
                var i = $r.boolean(e) ? e : $r.element(t) && t.hasAttribute("hidden");
                if ($r.event(e)) {
                    var r = $r.element(t) && t.contains(e.target),
                        o = e.target === this.elements.buttons.settings;
                    if (r || !r && !o && i) return;
                    o && e.stopPropagation()
                }
                $r.element(n) && n.setAttribute("aria-expanded", i), $r.element(t) && (yo(t, !i), vo(this.elements.container, this.config.classNames.menu.open, i), i ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
            }
        },
        getTabSize: function (e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function (e) {
                var t = e.getAttribute("name");
                e.setAttribute("name", t + "-clone")
            }), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                i = t.scrollHeight;
            return ho(t), {
                width: n,
                height: i
            }
        },
        showTab: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = this.elements.settings.menu,
                i = document.getElementById(t);
            if ($r.element(i) && "tabpanel" === i.getAttribute("role")) {
                var r = n.querySelector('[role="tabpanel"]:not([hidden])'),
                    o = r.parentNode;
                if (Array.from(n.querySelectorAll('[aria-controls="' + r.getAttribute("id") + '"]')).forEach(function (e) {
                        e.setAttribute("aria-expanded", !1)
                    }), Co.transitions && !Co.reducedMotion) {
                    o.style.width = r.scrollWidth + "px", o.style.height = r.scrollHeight + "px";
                    var a = Qo.getTabSize.call(this, i);
                    eo.call(this, o, Po, function t(n) {
                        n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", to.call(e, o, Po, t))
                    }), o.style.width = a.width + "px", o.style.height = a.height + "px"
                }
                yo(r, !0), r.setAttribute("tabindex", -1), yo(i, !1);
                var s = ko.call(this, '[aria-controls="' + t + '"]');
                Array.from(s).forEach(function (e) {
                    e.setAttribute("aria-expanded", !0)
                }), i.removeAttribute("tabindex"), i.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
            }
        },
        create: function (e) {
            var t = this;
            if ($r.empty(this.config.controls)) return null;
            var n = uo("div", mo(this.config.selectors.controls.wrapper));
            if (this.config.controls.includes("restart") && n.appendChild(Qo.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(Qo.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(Qo.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(Qo.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
                var i = uo("div", mo(this.config.selectors.progress));
                if (i.appendChild(Qo.createRange.call(this, "seek", {
                        id: "plyr-seek-" + e.id
                    })), i.appendChild(Qo.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                    var r = uo("span", {
                        class: this.config.classNames.tooltip
                    }, "00:00");
                    i.appendChild(r), this.elements.display.seekTooltip = r
                }
                this.elements.progress = i, n.appendChild(this.elements.progress)
            }
            if (this.config.controls.includes("current-time") && n.appendChild(Qo.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(Qo.createTime.call(this, "duration")), this.config.controls.includes("mute") && n.appendChild(Qo.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
                var o = uo("div", {
                        class: "plyr__volume"
                    }),
                    a = {
                        max: 1,
                        step: .05,
                        value: this.config.volume
                    };
                o.appendChild(Qo.createRange.call(this, "volume", jo(a, {
                    id: "plyr-volume-" + e.id
                }))), this.elements.volume = o, n.appendChild(o)
            }
            if (this.config.controls.includes("captions") && n.appendChild(Qo.createButton.call(this, "captions")), this.config.controls.includes("settings") && !$r.empty(this.config.settings)) {
                var s = uo("div", {
                    class: "plyr__menu",
                    hidden: ""
                });
                s.appendChild(Qo.createButton.call(this, "settings", {
                    id: "plyr-settings-toggle-" + e.id,
                    "aria-haspopup": !0,
                    "aria-controls": "plyr-settings-" + e.id,
                    "aria-expanded": !1
                }));
                var l = uo("form", {
                        class: "plyr__menu__container",
                        id: "plyr-settings-" + e.id,
                        hidden: "",
                        "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                        role: "tablist",
                        tabindex: -1
                    }),
                    c = uo("div"),
                    u = uo("div", {
                        id: "plyr-settings-" + e.id + "-home",
                        "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                        role: "tabpanel"
                    }),
                    f = uo("ul", {
                        role: "tablist"
                    });
                this.config.settings.forEach(function (n) {
                    var i = uo("li", {
                            role: "tab",
                            hidden: ""
                        }),
                        r = uo("button", jo(mo(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                            id: "plyr-settings-" + e.id + "-" + n + "-tab",
                            "aria-haspopup": !0,
                            "aria-controls": "plyr-settings-" + e.id + "-" + n,
                            "aria-expanded": !1
                        }), Vo(n, t.config)),
                        o = uo("span", {
                            class: t.config.classNames.menu.value
                        });
                    o.innerHTML = e[n], r.appendChild(o), i.appendChild(r), f.appendChild(i), t.elements.settings.tabs[n] = i
                }), u.appendChild(f), c.appendChild(u), this.config.settings.forEach(function (n) {
                    var i = uo("div", {
                            id: "plyr-settings-" + e.id + "-" + n,
                            hidden: "",
                            "aria-labelled-by": "plyr-settings-" + e.id + "-" + n + "-tab",
                            role: "tabpanel",
                            tabindex: -1
                        }),
                        r = uo("button", {
                            type: "button",
                            class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                            "aria-haspopup": !0,
                            "aria-controls": "plyr-settings-" + e.id + "-home",
                            "aria-expanded": !1
                        }, Vo(n, t.config));
                    i.appendChild(r);
                    var o = uo("ul");
                    i.appendChild(o), c.appendChild(i), t.elements.settings.panes[n] = i
                }), l.appendChild(c), s.appendChild(l), n.appendChild(s), this.elements.settings.form = l, this.elements.settings.menu = s
            }
            return this.config.controls.includes("pip") && Co.pip && n.appendChild(Qo.createButton.call(this, "pip")), this.config.controls.includes("airplay") && Co.airplay && n.appendChild(Qo.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(Qo.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(Qo.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && Qo.setQualityMenu.call(this, Oo.getQualityOptions.call(this)), Qo.setSpeedMenu.call(this), n
        },
        inject: function () {
            var e = this;
            if (this.config.loadSprite) {
                var t = Qo.getIconUrl.call(this);
                t.cors && Wo(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var i = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                r = !0;
            $r.string(this.config.controls) || $r.element(this.config.controls) ? n = this.config.controls : $r.function(this.config.controls) ? n = this.config.controls.call(this, i) : (n = Qo.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Xo.getLabel.call(this)
            }), r = !1);
            var o = function (e) {
                var t = e;
                return Object.entries(i).forEach(function (e) {
                    var n = so(e, 2),
                        i = n[0],
                        r = n[1];
                    t = Fo(t, "{" + i + "}", r)
                }), t
            };
            r && ($r.string(this.config.controls) ? n = o(n) : $r.element(n) && (n.innerHTML = o(n.innerHTML)));
            var a, s = void 0;
            if ($r.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), $r.element(s) || (s = this.elements.container), s[$r.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), $r.element(this.elements.controls) || Qo.findElements.call(this), window.navigator.userAgent.includes("Edge") && (a = s, setTimeout(function () {
                    yo(a, !0), a.offsetHeight, yo(a, !1)
                }, 0)), this.config.tooltips.controls) {
                var l = this.config,
                    c = l.classNames,
                    u = l.selectors,
                    f = u.controls.wrapper + " " + u.labels + " ." + c.hidden,
                    h = ko.call(this, f);
                Array.from(h).forEach(function (t) {
                    vo(t, e.config.classNames.hidden, !1), vo(t, e.config.classNames.tooltip, !0)
                })
            }
        }
    };

    function Jo(e) {
        var t = e;
        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
            var n = document.createElement("a");
            n.href = t, t = n.href
        }
        try {
            return new URL(t)
        } catch (e) {
            return null
        }
    }

    function $o(e) {
        var t = new URLSearchParams;
        return $r.object(e) && Object.entries(e).forEach(function (e) {
            var n = so(e, 2),
                i = n[0],
                r = n[1];
            t.set(i, r)
        }), t
    }
    var Xo = {
            setup: function () {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Co.textTracks) $r.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Qo.setCaptionsMenu.call(this);
                    else {
                        var e, t;
                        if ($r.element(this.elements.captions) || (this.elements.captions = uo("div", mo(this.config.selectors.captions)), e = this.elements.captions, (t = this.elements.wrapper).parentNode.insertBefore(e, t.nextSibling)), Lo.isIE && window.URL) {
                            var n = this.media.querySelectorAll("track");
                            Array.from(n).forEach(function (e) {
                                var t = e.getAttribute("src"),
                                    n = Jo(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Ho(t, "blob").then(function (t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                }).catch(function () {
                                    ho(e)
                                })
                            })
                        }
                        var i = Do(Array.from(navigator.languages || navigator.language || navigator.userLanguage).map(function (e) {
                                return e.split("-")[0]
                            })),
                            r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if ("auto" === r) r = so(i, 1)[0];
                        var o = this.storage.get("captions");
                        if ($r.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: o,
                                language: r,
                                languages: i
                            }), this.isHTML5) {
                            var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            eo.call(this, this.media.textTracks, a, Xo.update.bind(this))
                        }
                        setTimeout(Xo.update.bind(this), 0)
                    }
            },
            update: function () {
                var e = this,
                    t = Xo.getTracks.call(this, !0),
                    n = this.captions,
                    i = n.active,
                    r = n.language,
                    o = n.meta,
                    a = n.currentTrackNode,
                    s = Boolean(t.find(function (e) {
                        return e.language === r
                    }));
                this.isHTML5 && this.isVideo && t.filter(function (e) {
                    return !o.get(e)
                }).forEach(function (t) {
                    e.debug.log("Track added", t), o.set(t, {
                        default: "showing" === t.mode
                    }), t.mode = "hidden", eo.call(e, t, "cuechange", function () {
                        return Xo.updateCues.call(e)
                    })
                }), (s && this.language !== r || !t.includes(a)) && (Xo.setLanguage.call(this, r), Xo.toggle.call(this, i && s)), vo(this.elements.container, this.config.classNames.captions.enabled, !$r.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && Qo.setCaptionsMenu.call(this)
            },
            toggle: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var n = this.captions.toggled,
                        i = this.config.classNames.captions.active,
                        r = $r.nullOrUndefined(e) ? !n : e;
                    if (r !== n) {
                        if (t || (this.captions.active = r, this.storage.set({
                                captions: r
                            })), !this.language && r && !t) {
                            var o = Xo.getTracks.call(this),
                                a = Xo.findTrack.call(this, [this.captions.language].concat(function (e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                        return n
                                    }
                                    return Array.from(e)
                                }(this.captions.languages)), !0);
                            return this.captions.language = a.language, void Xo.set.call(this, o.indexOf(a))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), vo(this.elements.container, i, r), this.captions.toggled = r, Qo.updateSetting.call(this, "captions"), io.call(this, this.media, r ? "captionsenabled" : "captionsdisabled")
                    }
                }
            },
            set: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = Xo.getTracks.call(this);
                if (-1 !== e)
                    if ($r.number(e))
                        if (e in n) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var i = n[e],
                                    r = (i || {}).language;
                                this.captions.currentTrackNode = i, Qo.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
                                    language: r
                                })), this.isVimeo && this.embed.enableTextTrack(r), io.call(this, this.media, "languagechange")
                            }
                            Xo.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Xo.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else Xo.toggle.call(this, !1, t)
            },
            setLanguage: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if ($r.string(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var i = Xo.getTracks.call(this),
                        r = Xo.findTrack.call(this, [n]);
                    Xo.set.call(this, i.indexOf(r), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function () {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Array.from((this.media || {}).textTracks || []).filter(function (n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                }).filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind)
                })
            },
            findTrack: function (e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = Xo.getTracks.call(this),
                    r = function (e) {
                        return Number((t.captions.meta.get(e) || {}).default)
                    },
                    o = Array.from(i).sort(function (e, t) {
                        return r(t) - r(e)
                    }),
                    a = void 0;
                return e.every(function (e) {
                    return !(a = o.find(function (t) {
                        return t.language === e
                    }))
                }), a || (n ? o[0] : void 0)
            },
            getCurrentTrack: function () {
                return Xo.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function (e) {
                var t = e;
                return !$r.track(t) && Co.textTracks && this.captions.toggled && (t = Xo.getCurrentTrack.call(this)), $r.track(t) ? $r.empty(t.label) ? $r.empty(t.language) ? Vo("enabled", this.config) : e.language.toUpperCase() : t.label : Vo("disabled", this.config)
            },
            updateCues: function (e) {
                if (this.supported.ui)
                    if ($r.element(this.elements.captions))
                        if ($r.nullOrUndefined(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var n = Xo.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map(function (e) {
                                    return e.getCueAsHTML()
                                }).map(Bo)
                            }
                            var i = t.map(function (e) {
                                return e.trim()
                            }).join("\n");
                            if (i !== this.elements.captions.innerHTML) {
                                po(this.elements.captions);
                                var r = uo("span", mo(this.config.selectors.caption));
                                r.innerHTML = i, this.elements.captions.appendChild(r), io.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        Zo = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: "16:9",
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"]
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/v2/video/{0}.json"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption",
                menu: {
                    quality: ".js-plyr__menu__list--quality"
                }
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus"
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            keys: {
                google: null
            },
            ads: {
                enabled: !1,
                publisherId: ""
            }
        },
        ea = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        ta = {
            audio: "audio",
            video: "video"
        };
    var na = function () {},
        ia = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                ro(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return oo(e, [{
                key: "log",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : na
                }
            }, {
                key: "warn",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : na
                }
            }, {
                key: "error",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : na
                }
            }]), e
        }();

    function ra() {
        if (this.enabled) {
            var e = this.player.elements.buttons.fullscreen;
            $r.element(e) && (e.pressed = this.active), io.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), Lo.isIos || function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ($r.element(e)) {
                    var n = ko.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                        i = n[0],
                        r = n[n.length - 1];
                    Zr.call(this, this.elements.container, "keydown", function (e) {
                        if ("Tab" === e.key && 9 === e.keyCode) {
                            var t = So();
                            t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                        }
                    }, t, !1)
                }
            }.call(this.player, this.target, this.active)
        }
    }

    function oa() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e ? this.scrollPosition = {
            x: window.scrollX || 0,
            y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", vo(this.target, this.player.config.classNames.fullscreen.fallback, e), ra.call(this)
    }
    var aa = function () {
        function e(t) {
            var n = this;
            ro(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, eo.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
                ra.call(n)
            }), eo.call(this.player, this.player.elements.container, "dblclick", function (e) {
                $r.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
            }), this.update()
        }
        return oo(e, [{
            key: "update",
            value: function () {
                this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), vo(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            }
        }, {
            key: "enter",
            value: function () {
                this.enabled && (Lo.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? $r.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : oa.call(this, !0))
            }
        }, {
            key: "exit",
            value: function () {
                if (this.enabled)
                    if (Lo.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                    else if (e.native)
                    if (this.prefix) {
                        if (!$r.empty(this.prefix)) {
                            var t = "moz" === this.prefix ? "Cancel" : "Exit";
                            document["" + this.prefix + t + this.property]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document);
                else oa.call(this, !1)
            }
        }, {
            key: "toggle",
            value: function () {
                this.active ? this.exit() : this.enter()
            }
        }, {
            key: "enabled",
            get: function () {
                return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
            }
        }, {
            key: "active",
            get: function () {
                return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : bo(this.target, this.player.config.classNames.fullscreen.fallback))
            }
        }, {
            key: "target",
            get: function () {
                return Lo.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
            }
        }], [{
            key: "native",
            get: function () {
                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
            }
        }, {
            key: "prefix",
            get: function () {
                if ($r.function(document.exitFullscreen)) return "";
                var e = "";
                return ["webkit", "moz", "ms"].some(function (t) {
                    return !(!$r.function(document[t + "ExitFullscreen"]) && !$r.function(document[t + "CancelFullScreen"])) && (e = t, !0)
                }), e
            }
        }, {
            key: "property",
            get: function () {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
            }
        }]), e
    }();

    function sa(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise(function (n, i) {
            var r = new Image,
                o = function () {
                    delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
                };
            Object.assign(r, {
                onload: o,
                onerror: o,
                src: e
            })
        })
    }
    var la = {
            addStyleHook: function () {
                vo(this.elements.container, this.config.selectors.container.replace(".", ""), !0), vo(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function () {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function () {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void la.toggleNativeControls.call(this, !0);
                $r.element(this.elements.controls) || (Qo.inject.call(this), this.listeners.controls()), la.toggleNativeControls.call(this), this.isHTML5 && Xo.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, Qo.updateVolume.call(this), Qo.timeUpdate.call(this), la.checkPlaying.call(this), vo(this.elements.container, this.config.classNames.pip.supported, Co.pip && this.isHTML5 && this.isVideo), vo(this.elements.container, this.config.classNames.airplay.supported, Co.airplay && this.isHTML5), vo(this.elements.container, this.config.classNames.isIos, Lo.isIos), vo(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
                    io.call(e, e.media, "ready")
                }, 0), la.setTitle.call(this), this.poster && la.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && Qo.durationUpdate.call(this)
            },
            setTitle: function () {
                var e = Vo("play", this.config);
                if ($r.string(this.config.title) && !$r.empty(this.config.title) && (e += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(function (t) {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    var t = To.call(this, "iframe");
                    if (!$r.element(t)) return;
                    var n = $r.empty(this.config.title) ? "video" : this.config.title,
                        i = Vo("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", n))
                }
            },
            togglePoster: function (e) {
                vo(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function (e) {
                var t = this;
                return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function () {
                    var e = this;
                    return new Promise(function (t) {
                        return e.ready ? setTimeout(t, 0) : eo.call(e, e.elements.container, "ready", t)
                    }).then(function () {})
                }.call(this).then(function () {
                    return sa(e)
                }).catch(function (n) {
                    throw e === t.poster && la.togglePoster.call(t, !1), n
                }).then(function () {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                }).then(function () {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('" + e + "')",
                        backgroundSize: ""
                    }), la.togglePoster.call(t, !0), e
                })) : Promise.reject(new Error("Poster already set"))
            },
            checkPlaying: function (e) {
                var t = this;
                vo(this.elements.container, this.config.classNames.playing, this.playing), vo(this.elements.container, this.config.classNames.paused, this.paused), vo(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
                    e.pressed = t.playing
                }), $r.event(e) && "timeupdate" === e.type || la.toggleControls.call(this)
            },
            checkLoading: function (e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
                    vo(t.elements.container, t.config.classNames.loading, t.loading), la.toggleControls.call(t)
                }, this.loading ? 250 : 0)
            },
            toggleControls: function (e) {
                var t = this.elements.controls;
                t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover))
            }
        },
        ca = function () {
            function e(t) {
                ro(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return oo(e, [{
                key: "handleKey",
                value: function (e) {
                    var t = this,
                        n = e.keyCode ? e.keyCode : e.which,
                        i = "keydown" === e.type,
                        r = i && n === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && $r.number(n)) {
                        if (i) {
                            var o = So();
                            if ($r.element(o) && o !== this.player.elements.inputs.seek && wo(o, this.player.config.selectors.editable)) return;
                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    r || (t.player.currentTime = t.player.duration / 10 * (n - 48));
                                    break;
                                case 32:
                                case 75:
                                    r || this.player.togglePlay();
                                    break;
                                case 38:
                                    this.player.increaseVolume(.1);
                                    break;
                                case 40:
                                    this.player.decreaseVolume(.1);
                                    break;
                                case 77:
                                    r || (this.player.muted = !this.player.muted);
                                    break;
                                case 39:
                                    this.player.forward();
                                    break;
                                case 37:
                                    this.player.rewind();
                                    break;
                                case 70:
                                    this.player.fullscreen.toggle();
                                    break;
                                case 67:
                                    r || this.player.toggleCaptions();
                                    break;
                                case 76:
                                    this.player.loop = !this.player.loop
                            }!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === n && this.player.fullscreen.toggle(), this.lastKey = n
                        } else this.lastKey = null
                    }
                }
            }, {
                key: "toggleMenu",
                value: function (e) {
                    Qo.toggleMenu.call(this.player, e)
                }
            }, {
                key: "firstTouch",
                value: function () {
                    this.player.touch = !0, vo(this.player.elements.container, this.player.config.classNames.isTouch, !0)
                }
            }, {
                key: "global",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.player.config.keyboard.global && Zr.call(this.player, window, "keydown keyup", this.handleKey, e, !1), Zr.call(this.player, document.body, "click", this.toggleMenu, e), no.call(this.player, document.body, "touchstart", this.firstTouch)
                }
            }, {
                key: "container",
                value: function () {
                    var e = this;
                    !this.player.config.keyboard.global && this.player.config.keyboard.focused && eo.call(this.player, this.player.elements.container, "keydown keyup", this.handleKey, !1), eo.call(this.player, this.player.elements.container, "focusout", function (t) {
                        vo(t.target, e.player.config.classNames.tabFocus, !1)
                    }), eo.call(this.player, this.player.elements.container, "keydown", function (t) {
                        9 === t.keyCode && setTimeout(function () {
                            vo(So(), e.player.config.classNames.tabFocus, !0)
                        }, 0)
                    }), eo.call(this.player, this.player.elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
                        var n = e.player.elements.controls;
                        "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                        var i = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (la.toggleControls.call(e.player, !0), i = e.player.touch ? 3e3 : 2e3), clearTimeout(e.player.timers.controls), e.player.timers.controls = setTimeout(function () {
                            return la.toggleControls.call(e.player, !1)
                        }, i)
                    })
                }
            }, {
                key: "media",
                value: function () {
                    var e = this;
                    if (eo.call(this.player, this.player.media, "timeupdate seeking seeked", function (t) {
                            return Qo.timeUpdate.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "durationchange loadeddata loadedmetadata", function (t) {
                            return Qo.durationUpdate.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "canplay", function () {
                            yo(e.player.elements.volume, !e.player.hasAudio), yo(e.player.elements.buttons.mute, !e.player.hasAudio)
                        }), eo.call(this.player, this.player.media, "ended", function () {
                            e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart()
                        }), eo.call(this.player, this.player.media, "progress playing seeking seeked", function (t) {
                            return Qo.updateProgress.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "volumechange", function (t) {
                            return Qo.updateVolume.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "playing play pause ended emptied timeupdate", function (t) {
                            return la.checkPlaying.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "waiting canplay seeked playing", function (t) {
                            return la.checkLoading.call(e.player, t)
                        }), eo.call(this.player, this.player.media, "playing", function () {
                            e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function () {
                                return e.player.ads.play()
                            }).catch(function () {
                                return e.player.play()
                            })
                        }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
                        var t = To.call(this.player, "." + this.player.config.classNames.video);
                        if (!$r.element(t)) return;
                        eo.call(this.player, t, "click", function () {
                            e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause())
                        })
                    }
                    this.player.supported.ui && this.player.config.disableContextMenu && eo.call(this.player, this.player.elements.wrapper, "contextmenu", function (e) {
                        e.preventDefault()
                    }, !1), eo.call(this.player, this.player.media, "volumechange", function () {
                        e.player.storage.set({
                            volume: e.player.volume,
                            muted: e.player.muted
                        })
                    }), eo.call(this.player, this.player.media, "ratechange", function () {
                        Qo.updateSetting.call(e.player, "speed"), e.player.storage.set({
                            speed: e.player.speed
                        })
                    }), eo.call(this.player, this.player.media, "qualityrequested", function (t) {
                        e.player.storage.set({
                            quality: t.detail.quality
                        })
                    }), eo.call(this.player, this.player.media, "qualitychange", function (t) {
                        Qo.updateSetting.call(e.player, "quality", null, t.detail.quality)
                    });
                    var n = this.player.config.events.concat(["keyup", "keydown"]).join(" ");
                    eo.call(this.player, this.player.media, n, function (t) {
                        var n = t.detail,
                            i = void 0 === n ? {} : n;
                        "error" === t.type && (i = e.player.media.error), io.call(e.player, e.player.elements.container, t.type, !0, i)
                    })
                }
            }, {
                key: "controls",
                value: function () {
                    var e = this,
                        t = Lo.isIE ? "change" : "input",
                        n = function (t, n, i) {
                            var r = e.player.config.listeners[i],
                                o = !0;
                            $r.function(r) && (o = r.call(e.player, t)), o && $r.function(n) && n.call(e.player, t)
                        },
                        i = function (t, i, r, o) {
                            var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                s = e.player.config.listeners[o],
                                l = $r.function(s);
                            eo.call(e.player, t, i, function (e) {
                                return n(e, r, o)
                            }, a && !l)
                        };
                    this.player.elements.buttons.play && Array.from(this.player.elements.buttons.play).forEach(function (t) {
                        i(t, "click", e.player.togglePlay, "play")
                    }), i(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), i(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), i(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), i(this.player.elements.buttons.mute, "click", function () {
                        e.player.muted = !e.player.muted
                    }, "mute"), i(this.player.elements.buttons.captions, "click", function () {
                        return e.player.toggleCaptions()
                    }), i(this.player.elements.buttons.fullscreen, "click", function () {
                        e.player.fullscreen.toggle()
                    }, "fullscreen"), i(this.player.elements.buttons.pip, "click", function () {
                        e.player.pip = "toggle"
                    }, "pip"), i(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), i(this.player.elements.buttons.settings, "click", function (t) {
                        Qo.toggleMenu.call(e.player, t)
                    }), i(this.player.elements.settings.form, "click", function (t) {
                        t.stopPropagation();
                        var i = function () {
                            var t = "plyr-settings-" + e.player.id + "-home";
                            Qo.showTab.call(e.player, t)
                        };
                        if (wo(t.target, e.player.config.selectors.inputs.language)) n(t, function () {
                            e.player.currentTrack = Number(t.target.value), i()
                        }, "language");
                        else if (wo(t.target, e.player.config.selectors.inputs.quality)) n(t, function () {
                            e.player.quality = t.target.value, i()
                        }, "quality");
                        else if (wo(t.target, e.player.config.selectors.inputs.speed)) n(t, function () {
                            e.player.speed = parseFloat(t.target.value), i()
                        }, "speed");
                        else {
                            var r = t.target;
                            Qo.showTab.call(e.player, r.getAttribute("aria-controls"))
                        }
                    }), i(this.player.elements.inputs.seek, "mousedown mousemove", function (t) {
                        var n = e.player.elements.progress.getBoundingClientRect(),
                            i = 100 / n.width * (t.pageX - n.left);
                        t.currentTarget.setAttribute("seek-value", i)
                    }), i(this.player.elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
                        var n = t.currentTarget,
                            i = t.keyCode ? t.keyCode : t.which,
                            r = t.type;
                        if ("keydown" !== r && "keyup" !== r || 39 === i || 37 === i) {
                            var o = n.hasAttribute("play-on-seeked"),
                                a = ["mouseup", "touchend", "keyup"].includes(t.type);
                            o && a ? (n.removeAttribute("play-on-seeked"), e.player.play()) : !a && e.player.playing && (n.setAttribute("play-on-seeked", ""), e.player.pause())
                        }
                    }), i(this.player.elements.inputs.seek, t, function (t) {
                        var n = t.currentTarget,
                            i = n.getAttribute("seek-value");
                        $r.empty(i) && (i = n.value), n.removeAttribute("seek-value"), e.player.currentTime = i / n.max * e.player.duration
                    }, "seek"), this.player.config.toggleInvert && !$r.element(this.player.elements.display.duration) && i(this.player.elements.display.currentTime, "click", function () {
                        0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, Qo.timeUpdate.call(e.player))
                    }), i(this.player.elements.inputs.volume, t, function (t) {
                        e.player.volume = t.target.value
                    }, "volume"), Lo.isWebkit && Array.from(ko.call(this.player, 'input[type="range"]')).forEach(function (t) {
                        i(t, "input", function (t) {
                            return Qo.updateRangeFill.call(e.player, t.target)
                        })
                    }), i(this.player.elements.progress, "mouseenter mouseleave mousemove", function (t) {
                        return Qo.updateSeekTooltip.call(e.player, t)
                    }), i(this.player.elements.controls, "mouseenter mouseleave", function (t) {
                        e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type
                    }), i(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function (t) {
                        e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                    }), i(this.player.elements.controls, "focusin focusout", function (t) {
                        var n = e.player,
                            i = n.config,
                            r = n.elements,
                            o = n.timers;
                        if (vo(r.controls, i.classNames.noTransition, "focusin" === t.type), la.toggleControls.call(e.player, "focusin" === t.type), "focusin" === t.type) {
                            setTimeout(function () {
                                vo(r.controls, i.classNames.noTransition, !1)
                            }, 0);
                            var a = e.touch ? 3e3 : 4e3;
                            clearTimeout(o.controls), o.controls = setTimeout(function () {
                                return la.toggleControls.call(e.player, !1)
                            }, a)
                        }
                    }), i(this.player.elements.inputs.volume, "wheel", function (t) {
                        var n = t.webkitDirectionInvertedFromDevice,
                            i = [t.deltaX, -t.deltaY].map(function (e) {
                                return n ? -e : e
                            }),
                            r = so(i, 2),
                            o = r[0],
                            a = r[1],
                            s = Math.sign(Math.abs(o) > Math.abs(a) ? o : a);
                        e.player.increaseVolume(s / 50);
                        var l = e.player.media.volume;
                        (1 === s && l < 1 || -1 === s && l > 0) && t.preventDefault()
                    }, "volume", !1)
                }
            }]), e
        }(),
        ua = t(function (e, t) {
            var n;
            n = function () {
                var e = function () {},
                    t = {},
                    n = {},
                    i = {};

                function r(e, t) {
                    if (e) {
                        var r = i[e];
                        if (n[e] = t, r)
                            for (; r.length;) r[0](e, t), r.splice(0, 1)
                    }
                }

                function o(t, n) {
                    t.call && (t = {
                        success: t
                    }), n.length ? (t.error || e)(n) : (t.success || e)(t)
                }

                function a(t, n, i, r) {
                    var o, s, l = document,
                        c = i.async,
                        u = (i.numRetries || 0) + 1,
                        f = i.before || e,
                        h = t.replace(/^(css|img)!/, "");
                    r = r || 0, /(^css!|\.css$)/.test(t) ? (o = !0, (s = l.createElement("link")).rel = "stylesheet", s.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (s = l.createElement("img")).src = h : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
                        var l = e.type[0];
                        if (o && "hideFocus" in s) try {
                            s.sheet.cssText.length || (l = "e")
                        } catch (e) {
                            l = "e"
                        }
                        if ("e" == l && (r += 1) < u) return a(t, n, i, r);
                        n(t, l, e.defaultPrevented)
                    }, !1 !== f(t, s) && l.head.appendChild(s)
                }

                function s(e, n, i) {
                    var s, l;
                    if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                        if (s in t) throw "LoadJS";
                        t[s] = !0
                    }! function (e, t, n) {
                        var i, r, o = (e = e.push ? e : [e]).length,
                            s = o,
                            l = [];
                        for (i = function (e, n, i) {
                                if ("e" == n && l.push(e), "b" == n) {
                                    if (!i) return;
                                    l.push(e)
                                }--o || t(l)
                            }, r = 0; r < s; r++) a(e[r], i, n)
                    }(e, function (e) {
                        o(l, e), r(s, e)
                    }, l)
                }
                return s.ready = function (e, t) {
                    return function (e, t) {
                        e = e.push ? e : [e];
                        var r, o, a, s = [],
                            l = e.length,
                            c = l;
                        for (r = function (e, n) {
                                n.length && s.push(e), --c || t(s)
                            }; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
                    }(e, function (e) {
                        o(t, e)
                    }), s
                }, s.done = function (e) {
                    r(e, [])
                }, s.reset = function () {
                    t = {}, n = {}, i = {}
                }, s.isDefined = function (e) {
                    return e in t
                }, s
            }, e.exports = n()
        });

    function fa(e) {
        return new Promise(function (t, n) {
            ua(e, {
                success: t,
                error: n
            })
        })
    }

    function ha(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, io.call(this, this.media, e ? "play" : "pause"))
    }
    var da = {
        setup: function () {
            var e = this;
            vo(this.elements.wrapper, this.config.classNames.embed, !0), da.setAspectRatio.call(this), $r.object(window.Vimeo) ? da.ready.call(this) : fa(this.config.urls.vimeo.sdk).then(function () {
                da.ready.call(e)
            }).catch(function (t) {
                e.debug.warn("Vimeo API failed to load", t)
            })
        },
        setAspectRatio: function (e) {
            var t = ($r.string(e) ? e : this.config.ratio).split(":"),
                n = so(t, 2),
                i = 100 / n[0] * n[1];
            if (this.elements.wrapper.style.paddingBottom = i + "%", this.supported.ui) {
                var r = (240 - i) / 4.8;
                this.media.style.transform = "translateY(-" + r + "%)"
            }
        },
        ready: function () {
            var e = this,
                t = this,
                n = $o({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    speed: !0,
                    transparent: 0,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }),
                i = t.media.getAttribute("src");
            $r.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));
            var r, o = (r = i, $r.empty(r) ? null : $r.number(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r),
                a = uo("iframe"),
                s = Io(t.config.urls.vimeo.iframe, o, n);
            a.setAttribute("src", s), a.setAttribute("allowfullscreen", ""), a.setAttribute("allowtransparency", ""), a.setAttribute("allow", "autoplay");
            var l = uo("div", {
                poster: t.poster,
                class: t.config.classNames.embedContainer
            });
            l.appendChild(a), t.media = go(l, t.media), Ho(Io(t.config.urls.vimeo.api, o), "json").then(function (e) {
                if (!$r.empty(e)) {
                    var n = new URL(e[0].thumbnail_large);
                    n.pathname = n.pathname.split("_")[0] + ".jpg", la.setPoster.call(t, n.href).catch(function () {})
                }
            }), t.embed = new window.Vimeo.Player(a, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
                return ha.call(t, !0), t.embed.play()
            }, t.media.pause = function () {
                return ha.call(t, !1), t.embed.pause()
            }, t.media.stop = function () {
                t.pause(), t.currentTime = 0
            };
            var c = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function () {
                    return c
                },
                set: function (e) {
                    var n = t.embed,
                        i = t.media,
                        r = t.paused,
                        o = t.volume,
                        a = r && !n.hasPlayed;
                    i.seeking = !0, io.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then(function () {
                        return n.setCurrentTime(e)
                    }).then(function () {
                        return a && n.pause()
                    }).then(function () {
                        return a && n.setVolume(o)
                    }).catch(function () {})
                }
            });
            var u = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function () {
                    return u
                },
                set: function (e) {
                    t.embed.setPlaybackRate(e).then(function () {
                        u = e, io.call(t, t.media, "ratechange")
                    }).catch(function (e) {
                        "Error" === e.name && Qo.setSpeedMenu.call(t, [])
                    })
                }
            });
            var f = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function () {
                    return f
                },
                set: function (e) {
                    t.embed.setVolume(e).then(function () {
                        f = e, io.call(t, t.media, "volumechange")
                    })
                }
            });
            var h = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function () {
                    return h
                },
                set: function (e) {
                    var n = !!$r.boolean(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
                        h = n, io.call(t, t.media, "volumechange")
                    })
                }
            });
            var d = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function () {
                    return d
                },
                set: function (e) {
                    var n = $r.boolean(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then(function () {
                        d = n
                    })
                }
            });
            var p = void 0;
            t.embed.getVideoUrl().then(function (e) {
                p = e
            }).catch(function (t) {
                e.debug.warn(t)
            }), Object.defineProperty(t.media, "currentSrc", {
                get: function () {
                    return p
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function () {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
                var n = function (e, t) {
                    var n = function e(t, n) {
                        return 0 === n ? t : e(n, t % n)
                    }(e, t);
                    return e / n + ":" + t / n
                }(t[0], t[1]);
                da.setAspectRatio.call(e, n)
            }), t.embed.setAutopause(t.config.autopause).then(function (e) {
                t.config.autopause = e
            }), t.embed.getVideoTitle().then(function (n) {
                t.config.title = n, la.setTitle.call(e)
            }), t.embed.getCurrentTime().then(function (e) {
                c = e, io.call(t, t.media, "timeupdate")
            }), t.embed.getDuration().then(function (e) {
                t.media.duration = e, io.call(t, t.media, "durationchange")
            }), t.embed.getTextTracks().then(function (e) {
                t.media.textTracks = e, Xo.setup.call(t)
            }), t.embed.on("cuechange", function (e) {
                var n = e.cues,
                    i = (void 0 === n ? [] : n).map(function (e) {
                        return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;
                        var t, n, i
                    });
                Xo.updateCues.call(t, i)
            }), t.embed.on("loaded", function () {
                (t.embed.getPaused().then(function (e) {
                    ha.call(t, !e), e || io.call(t, t.media, "playing")
                }), $r.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            }), t.embed.on("play", function () {
                ha.call(t, !0), io.call(t, t.media, "playing")
            }), t.embed.on("pause", function () {
                ha.call(t, !1)
            }), t.embed.on("timeupdate", function (e) {
                t.media.seeking = !1, c = e.seconds, io.call(t, t.media, "timeupdate")
            }), t.embed.on("progress", function (e) {
                t.media.buffered = e.percent, io.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && io.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
                    e !== t.media.duration && (t.media.duration = e, io.call(t, t.media, "durationchange"))
                })
            }), t.embed.on("seeked", function () {
                t.media.seeking = !1, io.call(t, t.media, "seeked")
            }), t.embed.on("ended", function () {
                t.media.paused = !0, io.call(t, t.media, "ended")
            }), t.embed.on("error", function (e) {
                t.media.error = e, io.call(t, t.media, "error")
            }), setTimeout(function () {
                return la.build.call(t)
            }, 0)
        }
    };

    function pa(e) {
        var t = Object.entries({
            hd2160: 2160,
            hd1440: 1440,
            hd1080: 1080,
            hd720: 720,
            large: 480,
            medium: 360,
            small: 240,
            tiny: 144
        }).find(function (t) {
            return t.includes(e)
        });
        return t ? t.find(function (t) {
            return t !== e
        }) : "default"
    }

    function ga(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, io.call(this, this.media, e ? "play" : "pause"))
    }
    var ma, ya = {
            setup: function () {
                var e = this;
                vo(this.elements.wrapper, this.config.classNames.embed, !0), ya.setAspectRatio.call(this), $r.object(window.YT) && $r.function(window.YT.Player) ? ya.ready.call(this) : (fa(this.config.urls.youtube.sdk).catch(function (t) {
                    e.debug.warn("YouTube API failed to load", t)
                }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
                    ya.ready.call(e)
                }), window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeReadyCallbacks.forEach(function (e) {
                        e()
                    })
                })
            },
            getTitle: function (e) {
                var t = this;
                if ($r.function(this.embed.getVideoData)) {
                    var n = this.embed.getVideoData().title;
                    if ($r.empty(n)) return this.config.title = n, void la.setTitle.call(this)
                }
                var i = this.config.keys.google;
                $r.string(i) && !$r.empty(i) && Ho(Io(this.config.urls.youtube.api, e, i)).then(function (e) {
                    $r.object(e) && (t.config.title = e.items[0].snippet.title, la.setTitle.call(t))
                }).catch(function () {})
            },
            setAspectRatio: function () {
                var e = this.config.ratio.split(":");
                this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
            },
            ready: function () {
                var e = this,
                    t = e.media.getAttribute("id");
                if ($r.empty(t) || !t.startsWith("youtube-")) {
                    var n = e.media.getAttribute("src");
                    $r.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                    var i, r = (i = n, $r.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
                        o = e.provider + "-" + Math.floor(1e4 * Math.random()),
                        a = uo("div", {
                            id: o,
                            poster: e.poster
                        });
                    e.media = go(a, e.media);
                    var s = function (e) {
                        return "https://img.youtube.com/vi/" + r + "/" + e + "default.jpg"
                    };
                    sa(s("maxres"), 121).catch(function () {
                        return sa(s("sd"), 121)
                    }).catch(function () {
                        return sa(s("hq"))
                    }).then(function (t) {
                        return la.setPoster.call(e, t.src)
                    }).then(function (t) {
                        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                    }).catch(function () {}), e.embed = new window.YT.Player(o, {
                        videoId: r,
                        playerVars: {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui ? 0 : 1,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            disablekb: 1,
                            playsinline: 1,
                            widget_referrer: window ? window.location.href : null,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language
                        },
                        events: {
                            onError: function (t) {
                                if (!e.media.error) {
                                    var n = t.data,
                                        i = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        } [n] || "An unknown error occured";
                                    e.media.error = {
                                        code: n,
                                        message: i
                                    }, io.call(e, e.media, "error")
                                }
                            },
                            onPlaybackQualityChange: function () {
                                io.call(e, e.media, "qualitychange", !1, {
                                    quality: e.media.quality
                                })
                            },
                            onPlaybackRateChange: function (t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), io.call(e, e.media, "ratechange")
                            },
                            onReady: function (t) {
                                if (!$r.function(e.media.play)) {
                                    var n = t.target;
                                    ya.getTitle.call(e, r), e.media.play = function () {
                                        ga.call(e, !0), n.playVideo()
                                    }, e.media.pause = function () {
                                        ga.call(e, !1), n.pauseVideo()
                                    }, e.media.stop = function () {
                                        n.stopVideo()
                                    }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function () {
                                            return Number(n.getCurrentTime())
                                        },
                                        set: function (t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, io.call(e, e.media, "seeking"), n.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function () {
                                            return n.getPlaybackRate()
                                        },
                                        set: function (e) {
                                            n.setPlaybackRate(e)
                                        }
                                    }), Object.defineProperty(e.media, "quality", {
                                        get: function () {
                                            return pa(n.getPlaybackQuality())
                                        },
                                        set: function (e) {
                                            n.setPlaybackQuality(pa(e))
                                        }
                                    });
                                    var i = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function () {
                                            return i
                                        },
                                        set: function (t) {
                                            i = t, n.setVolume(100 * i), io.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var o = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function () {
                                            return o
                                        },
                                        set: function (t) {
                                            var i = $r.boolean(t) ? t : o;
                                            o = i, n[i ? "mute" : "unMute"](), io.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function () {
                                            return n.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function () {
                                            return e.currentTime === e.duration
                                        }
                                    }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), io.call(e, e.media, "timeupdate"), io.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                                        e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && io.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), io.call(e, e.media, "canplaythrough"))
                                    }, 200), setTimeout(function () {
                                        return la.build.call(e)
                                    }, 50)
                                }
                            },
                            onStateChange: function (t) {
                                var n, i = t.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, io.call(e, e.media, "seeked")), t.data) {
                                    case -1:
                                        io.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), io.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        ga.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : io.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ga.call(e, !0), io.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                                            io.call(e, e.media, "timeupdate")
                                        }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), io.call(e, e.media, "durationchange")), Qo.setQualityMenu.call(e, (n = i.getAvailableQualityLevels(), $r.empty(n) ? n : Do(n.map(function (e) {
                                            return pa(e)
                                        })))));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), ga.call(e, !1)
                                }
                                io.call(e, e.elements.container, "statechange", !1, {
                                    code: t.data
                                })
                            }
                        }
                    })
                }
            }
        },
        va = {
            setup: function () {
                this.media ? (vo(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), vo(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && vo(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = uo("div", {
                    class: this.config.classNames.video
                }), lo(this.media, this.elements.wrapper), this.elements.poster = uo("div", {
                    class: this.config.classNames.poster
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Oo.extend.call(this) : this.isYouTube ? ya.setup.call(this) : this.isVimeo && da.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        ba = function () {
            function e(t) {
                var n = this;
                ro(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
                    n.on("loaded", e), n.on("error", t)
                }), this.load()
            }
            return oo(e, [{
                key: "load",
                value: function () {
                    var e = this;
                    this.enabled && ($r.object(window.google) && $r.object(window.google.ima) ? this.ready() : fa(this.player.config.urls.googleIMA.sdk).then(function () {
                        e.ready()
                    }).catch(function () {
                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                    }))
                }
            }, {
                key: "ready",
                value: function () {
                    var e = this;
                    this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
                        e.clearSafetyTimer("onAdsManagerLoaded()")
                    }), this.listeners(), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function () {
                    this.elements.container = uo("div", {
                        class: this.player.config.classNames.ads
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function () {
                    var e = this,
                        t = this.player.elements.container;
                    try {
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
                            return e.onAdsManagerLoaded(t)
                        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
                            return e.onAdError(t)
                        }, !1);
                        var n = new google.ima.AdsRequest;
                        n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function () {
                    var e = this;
                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    this.countdownTimer = setInterval(function () {
                        var t = Yo(Math.max(e.manager.getRemainingTime(), 0)),
                            n = Vo("advertisement", e.player.config) + " - " + t;
                        e.elements.container.setAttribute("data-badge-text", n)
                    }, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function (e) {
                    var t = this,
                        n = new google.ima.AdsRenderingSettings;
                    n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), $r.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
                        if (0 !== e && -1 !== e && e < t.player.duration) {
                            var n = t.player.elements.progress;
                            if ($r.element(n)) {
                                var i = 100 / t.player.duration * e,
                                    r = uo("span", {
                                        class: t.player.config.classNames.cues
                                    });
                                r.style.left = i.toString() + "%", n.appendChild(r)
                            }
                        }
                    }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                        return t.onAdError(e)
                    }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                        t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                            return t.onAdEvent(e)
                        })
                    }), this.trigger("loaded")
                }
            }, {
                key: "onAdEvent",
                value: function (e) {
                    var t = this,
                        n = this.player.elements.container,
                        i = e.getAd(),
                        r = function (e) {
                            var n = "ads" + e.replace(/_/g, "").toLowerCase();
                            io.call(t.player, t.player.media, n)
                        };
                    switch (e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            r(e.type), this.loadAds();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            r(e.type), this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            r(e.type), this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                        case google.ima.AdEvent.Type.MIDPOINT:
                        case google.ima.AdEvent.Type.COMPLETE:
                        case google.ima.AdEvent.Type.IMPRESSION:
                        case google.ima.AdEvent.Type.CLICK:
                            r(e.type)
                    }
                }
            }, {
                key: "onAdError",
                value: function (e) {
                    this.cancel(), this.player.debug.warn("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function () {
                    var e = this,
                        t = this.player.elements.container,
                        n = void 0;
                    this.player.on("ended", function () {
                        e.loader.contentComplete()
                    }), this.player.on("seeking", function () {
                        return n = e.player.currentTime
                    }), this.player.on("seeked", function () {
                        var t = e.player.currentTime;
                        $r.empty(e.cuePoints) || e.cuePoints.forEach(function (i, r) {
                            n < i && i < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1))
                        })
                    }), window.addEventListener("resize", function () {
                        e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    })
                }
            }, {
                key: "play",
                value: function () {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
                        e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    }).catch(function () {})
                }
            }, {
                key: "resumeContent",
                value: function () {
                    this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
                }
            }, {
                key: "pauseContent",
                value: function () {
                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
                }
            }, {
                key: "cancel",
                value: function () {
                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function () {
                    var e = this;
                    this.managerPromise.then(function () {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
                            e.on("loaded", t), e.player.debug.log(e.manager)
                        }), e.requestAds()
                    }).catch(function () {})
                }
            }, {
                key: "trigger",
                value: function (e) {
                    for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    var o = this.events[e];
                    $r.array(o) && o.forEach(function (e) {
                        $r.function(e) && e.apply(t, i)
                    })
                }
            }, {
                key: "on",
                value: function (e, t) {
                    return $r.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                }
            }, {
                key: "startSafetyTimer",
                value: function (e, t) {
                    var n = this;
                    this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function () {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }, e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function (e) {
                    $r.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }, {
                key: "enabled",
                get: function () {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !$r.empty(this.publisherId)
                }
            }, {
                key: "tagUrl",
                get: function () {
                    return "https://go.aniview.com/api/adserver6/vast/?" + $o({
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: this.publisherId
                    })
                }
            }]), e
        }(),
        wa = {
            insertElements: function (e, t) {
                var n = this;
                $r.string(t) ? fo(e, this.media, {
                    src: t
                }) : $r.array(t) && t.forEach(function (t) {
                    fo(e, n.media, t)
                })
            },
            change: function (e) {
                var t = this;
                No(e, "sources.length") ? (Oo.cancelRequests.call(this), this.destroy.call(this, function () {
                    t.options.quality = [], ho(t.media), t.media = null, $r.element(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        i = e.type,
                        r = so(n, 1)[0],
                        o = r.provider,
                        a = void 0 === o ? ea.html5 : o,
                        s = r.src,
                        l = "html5" === a ? i : "div",
                        c = "html5" === a ? {} : {
                            src: s
                        };
                    Object.assign(t, {
                        provider: a,
                        type: i,
                        supported: Co.check(i, a, t.config.playsinline),
                        media: uo(l, c)
                    }), t.elements.container.appendChild(t.media), $r.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), $r.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), la.addStyleHook.call(t), t.isHTML5 && wa.insertElements.call(t, "source", n), t.config.title = e.title, va.setup.call(t), t.isHTML5 && ("tracks" in e && wa.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && la.build.call(t), t.fullscreen.update()
                }, !0)) : this.debug.warn("Invalid source format")
            }
        },
        ka = function () {
            function e(t, n) {
                var i = this;
                if (ro(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Co.touch, this.media = t, $r.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || $r.nodeList(this.media) || $r.array(this.media)) && (this.media = this.media[0]), this.config = jo({}, Zo, e.defaults, n || {}, function () {
                        try {
                            return JSON.parse(i.media.getAttribute("data-plyr-config"))
                        } catch (e) {
                            return {}
                        }
                    }()), this.elements = {
                        container: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            menu: null,
                            panes: {},
                            tabs: {}
                        },
                        captions: null
                    }, this.captions = {
                        active: null,
                        currentTrack: -1,
                        meta: new WeakMap
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: []
                    }, this.debug = new ia(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Co), !$r.nullOrUndefined(this.media) && $r.element(this.media))
                    if (this.media.plyr) this.debug.warn("Target already setup");
                    else if (this.config.enabled)
                    if (Co.check().api) {
                        var r = this.media.cloneNode(!0);
                        r.autoplay = !1, this.elements.original = r;
                        var o = this.media.tagName.toLowerCase(),
                            a = null,
                            s = null;
                        switch (o) {
                            case "div":
                                if (a = this.media.querySelector("iframe"), $r.element(a)) {
                                    if (s = Jo(a.getAttribute("src")), this.provider = function (e) {
                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? ea.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ea.vimeo : null
                                        }(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
                                        var l = ["1", "true"];
                                        l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                    }
                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                if ($r.empty(this.provider) || !Object.keys(ea).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                this.type = ta.video;
                                break;
                            case "video":
                            case "audio":
                                this.type = o, this.provider = ea.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = Co.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ca(this), this.storage = new Uo(this), this.media.plyr = this, $r.element(this.elements.container) || (this.elements.container = uo("div"), lo(this.media, this.elements.container)), la.addStyleHook.call(this), va.setup.call(this), this.config.debug && eo.call(this, this.elements.container, this.config.events.join(" "), function (e) {
                            i.debug.log("event: " + e.type)
                        }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && la.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new aa(this), this.ads = new ba(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
                    } else this.debug.error("Setup failed: no support");
                else this.debug.error("Setup failed: disabled by config");
                else this.debug.error("Setup failed: no suitable element passed")
            }
            return oo(e, [{
                key: "play",
                value: function () {
                    return $r.function(this.media.play) ? this.media.play() : null
                }
            }, {
                key: "pause",
                value: function () {
                    this.playing && $r.function(this.media.pause) && this.media.pause()
                }
            }, {
                key: "togglePlay",
                value: function (e) {
                    ($r.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
                }
            }, {
                key: "stop",
                value: function () {
                    this.isHTML5 ? (this.pause(), this.restart()) : $r.function(this.media.stop) && this.media.stop()
                }
            }, {
                key: "restart",
                value: function () {
                    this.currentTime = 0
                }
            }, {
                key: "rewind",
                value: function (e) {
                    this.currentTime = this.currentTime - ($r.number(e) ? e : this.config.seekTime)
                }
            }, {
                key: "forward",
                value: function (e) {
                    this.currentTime = this.currentTime + ($r.number(e) ? e : this.config.seekTime)
                }
            }, {
                key: "increaseVolume",
                value: function (e) {
                    var t = this.media.muted ? 0 : this.volume;
                    this.volume = t + ($r.number(e) ? e : 0)
                }
            }, {
                key: "decreaseVolume",
                value: function (e) {
                    this.increaseVolume(-e)
                }
            }, {
                key: "toggleCaptions",
                value: function (e) {
                    Xo.toggle.call(this, e, !1)
                }
            }, {
                key: "airplay",
                value: function () {
                    Co.airplay && this.media.webkitShowPlaybackTargetPicker()
                }
            }, {
                key: "toggleControls",
                value: function (e) {
                    if (this.supported.ui && !this.isAudio) {
                        var t = bo(this.elements.container, this.config.classNames.hideControls),
                            n = void 0 === e ? void 0 : !e,
                            i = vo(this.elements.container, this.config.classNames.hideControls, n);
                        if (i && this.config.controls.includes("settings") && !$r.empty(this.config.settings) && Qo.toggleMenu.call(this, !1), i !== t) {
                            var r = i ? "controlshidden" : "controlsshown";
                            io.call(this, this.media, r)
                        }
                        return !i
                    }
                    return !1
                }
            }, {
                key: "on",
                value: function (e, t) {
                    eo.call(this, this.elements.container, e, t)
                }
            }, {
                key: "once",
                value: function (e, t) {
                    no.call(this, this.elements.container, e, t)
                }
            }, {
                key: "off",
                value: function (e, t) {
                    to(this.elements.container, e, t)
                }
            }, {
                key: "destroy",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.ready) {
                        var i = function () {
                            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (ho(t.elements.buttons.play), ho(t.elements.captions), ho(t.elements.controls), ho(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), $r.function(e) && e()) : (function () {
                                this && this.eventListeners && (this.eventListeners.forEach(function (e) {
                                    var t = e.element,
                                        n = e.type,
                                        i = e.callback,
                                        r = e.options;
                                    t.removeEventListener(n, i, r)
                                }), this.eventListeners = [])
                            }.call(t), go(t.elements.original, t.elements.container), io.call(t, t.elements.original, "destroyed", !0), $r.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
                                t.elements = null, t.media = null
                            }, 200))
                        };
                        this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), la.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && $r.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                    }
                }
            }, {
                key: "supports",
                value: function (e) {
                    return Co.mime.call(this, e)
                }
            }, {
                key: "isHTML5",
                get: function () {
                    return Boolean(this.provider === ea.html5)
                }
            }, {
                key: "isEmbed",
                get: function () {
                    return Boolean(this.isYouTube || this.isVimeo)
                }
            }, {
                key: "isYouTube",
                get: function () {
                    return Boolean(this.provider === ea.youtube)
                }
            }, {
                key: "isVimeo",
                get: function () {
                    return Boolean(this.provider === ea.vimeo)
                }
            }, {
                key: "isVideo",
                get: function () {
                    return Boolean(this.type === ta.video)
                }
            }, {
                key: "isAudio",
                get: function () {
                    return Boolean(this.type === ta.audio)
                }
            }, {
                key: "playing",
                get: function () {
                    return Boolean(this.ready && !this.paused && !this.ended)
                }
            }, {
                key: "paused",
                get: function () {
                    return Boolean(this.media.paused)
                }
            }, {
                key: "stopped",
                get: function () {
                    return Boolean(this.paused && 0 === this.currentTime)
                }
            }, {
                key: "ended",
                get: function () {
                    return Boolean(this.media.ended)
                }
            }, {
                key: "currentTime",
                set: function (e) {
                    if (this.duration) {
                        var t = $r.number(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds")
                    }
                },
                get: function () {
                    return Number(this.media.currentTime)
                }
            }, {
                key: "buffered",
                get: function () {
                    var e = this.media.buffered;
                    return $r.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                }
            }, {
                key: "seeking",
                get: function () {
                    return Boolean(this.media.seeking)
                }
            }, {
                key: "duration",
                get: function () {
                    var e = parseFloat(this.config.duration),
                        t = (this.media || {}).duration,
                        n = $r.number(t) && t !== 1 / 0 ? t : 0;
                    return e || n
                }
            }, {
                key: "volume",
                set: function (e) {
                    var t = e;
                    $r.string(t) && (t = Number(t)), $r.number(t) || (t = this.storage.get("volume")), $r.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !$r.empty(e) && this.muted && t > 0 && (this.muted = !1)
                },
                get: function () {
                    return Number(this.media.volume)
                }
            }, {
                key: "muted",
                set: function (e) {
                    var t = e;
                    $r.boolean(t) || (t = this.storage.get("muted")), $r.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                },
                get: function () {
                    return Boolean(this.media.muted)
                }
            }, {
                key: "hasAudio",
                get: function () {
                    return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
                }
            }, {
                key: "speed",
                set: function (e) {
                    var t = null;
                    $r.number(e) && (t = e), $r.number(t) || (t = this.storage.get("speed")), $r.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
                },
                get: function () {
                    return Number(this.media.playbackRate)
                }
            }, {
                key: "quality",
                set: function (e) {
                    var t = this.config.quality,
                        n = this.options.quality;
                    if (n.length) {
                        var i = [!$r.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find($r.number);
                        if (!n.includes(i)) {
                            var r = function (e, t) {
                                return $r.array(e) && e.length ? e.reduce(function (e, n) {
                                    return Math.abs(n - t) < Math.abs(e - t) ? n : e
                                }) : null
                            }(n, i);
                            this.debug.warn("Unsupported quality option: " + i + ", using " + r + " instead"), i = r
                        }
                        io.call(this, this.media, "qualityrequested", !1, {
                            quality: i
                        }), t.selected = i, this.media.quality = i
                    }
                },
                get: function () {
                    return this.media.quality
                }
            }, {
                key: "loop",
                set: function (e) {
                    var t = $r.boolean(e) ? e : this.config.loop.active;
                    this.config.loop.active = t, this.media.loop = t
                },
                get: function () {
                    return Boolean(this.media.loop)
                }
            }, {
                key: "source",
                set: function (e) {
                    wa.change.call(this, e)
                },
                get: function () {
                    return this.media.currentSrc
                }
            }, {
                key: "poster",
                set: function (e) {
                    this.isVideo ? la.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video")
                },
                get: function () {
                    return this.isVideo ? this.media.getAttribute("poster") : null
                }
            }, {
                key: "autoplay",
                set: function (e) {
                    var t = $r.boolean(e) ? e : this.config.autoplay;
                    this.config.autoplay = t
                },
                get: function () {
                    return Boolean(this.config.autoplay)
                }
            }, {
                key: "currentTrack",
                set: function (e) {
                    Xo.set.call(this, e, !1)
                },
                get: function () {
                    var e = this.captions,
                        t = e.toggled,
                        n = e.currentTrack;
                    return t ? n : -1
                }
            }, {
                key: "language",
                set: function (e) {
                    Xo.setLanguage.call(this, e, !1)
                },
                get: function () {
                    return (Xo.getCurrentTrack.call(this) || {}).language
                }
            }, {
                key: "pip",
                set: function (e) {
                    var t = "picture-in-picture",
                        n = "inline";
                    if (Co.pip) {
                        var i = $r.boolean(e) ? e : this.pip === n;
                        this.media.webkitSetPresentationMode(i ? t : n)
                    }
                },
                get: function () {
                    return Co.pip ? this.media.webkitPresentationMode : null
                }
            }], [{
                key: "supported",
                value: function (e, t, n) {
                    return Co.check(e, t, n)
                }
            }, {
                key: "loadSprite",
                value: function (e, t) {
                    return Wo(e, t)
                }
            }, {
                key: "setup",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null;
                    return $r.string(t) ? i = Array.from(document.querySelectorAll(t)) : $r.nodeList(t) ? i = Array.from(t) : $r.array(t) && (i = t.filter($r.element)), $r.empty(i) ? null : i.map(function (t) {
                        return new e(t, n)
                    })
                }
            }]), e
        }();
    return ka.defaults = (ma = Zo, JSON.parse(JSON.stringify(ma))), ka
});;
(function ($) {
    window.mobilecheck = function () {
        var check = false;
        (function (a, b) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function myFunction4() {
        return document.cookie.indexOf('cookie-type=2') > -1;
    }

    var popupVideoInstance666;

    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    function isElementInViewport(el) {

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    var isAjaxLoading = false;

    function scrollToTop() {
        //if(targetis.length > 0) {
        //var scrollToVar = targetis.offset().top;
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            window.scrollTo(0, 0) // first value for left offset, second value for top offset
        } else {
            //if(detectIE()) {
            //	scrollToVar = scrollToVar;
            //}
            $('html, body').stop().animate({
                scrollTop: 0
            }, 500);
        }
        //}
    }

    function scrollToService2(targetis) {
        if (targetis.length > 0) {
            var winWidth = $(window).width();
            if (winWidth < 600) {
                var scrollToVar = targetis.offset().top - 78;
                console.log(targetis.offset().top);
                console.log(scrollToVar);
                if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                    //window.scrollTo(0,scrollToVar); // first value for left offset, second value for top offset
                    $('html, body').stop().animate({
                        scrollTop: scrollToVar
                    }, 500);
                } else {
                    /*if(detectIE()) {
                        scrollToVar = scrollToVar;
                    }*/
                    //$('html, body').stop().animate({
                    //    scrollTop: scrollToVar
                    //}, 500);
                    window.scrollTo(0, scrollToVar);
                }
            } else if (winWidth < 1025) {
                var scrollToVar = targetis.offset().top - 78;
                if (detectIE()) {
                    scrollToVar = scrollToVar;
                }
                $('html, body').stop().animate({
                    scrollTop: scrollToVar
                }, 500);
            } else {
                var scrollToVar = targetis.offset().top - 78;
                if (detectIE()) {
                    scrollToVar = scrollToVar;
                }
                $('html, body').stop().animate({
                    scrollTop: scrollToVar
                }, 500);
            }
            //if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
            //   window.scrollTo(0,scrollToVar) // first value for left offset, second value for top offset
            //}else{
            /*if(detectIE()) {
                scrollToVar = scrollToVar + 5;
            }
            $('html, body').stop().animate({
                scrollTop: scrollToVar
            }, 500);*/
            //}
        }
    }
    /*var PropertyIframe;
    var PropertyHelper;
    function scaleProperty() {
        console.log("test");
        var winWidth = $(window).width();
        scale = (winWidth - 170) / 880;
        var difference = 620 * (scale - 1);
        console.log(difference);
        PropertyIframe.css("transform","scale("+scale+","+scale+")");
        PropertyHelper.css("height",difference);
    }*/

    function render_map($el) {

        // var
        var $markers = $el.find('.marker');

        // vars
        var args = {
            disableDefaultUI: true,
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };

        // create map	        	
        var map = new google.maps.Map($el[0], args);

        // add a markers reference
        map.markers = [];

        // add markers
        $markers.each(function () {
            add_marker($(this), map);

        });

        // center map
        center_map(map);
    }

    function add_marker($marker, map) {

        // var
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        var image = {
            url: '/assets/themes/underscore/assets/img/bigger-logo3.png',
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 14),
            scaledSize: new google.maps.Size(16, 29)
        };

        // create marker
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image
        });

        // add to array
        map.markers.push(marker);

        // if marker contains HTML, add it to an infoWindow
        if ($marker.html()) {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });

            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function () {

                infowindow.open(map, marker);

            });
        }

    }

    function center_map(map) {

        // vars
        var bounds = new google.maps.LatLngBounds();

        // loop through all markers and create bounds
        $.each(map.markers, function (i, marker) {

            var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

            bounds.extend(latlng);

        });

        // only 1 marker?
        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        } else map.fitBounds(bounds);


    }

    /*function scale_hero() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        
        $('iframe.loopvideo').css("min-height",(winWidth*10/16));
        if(winWidth <= 1024) {
            var $iframe = $('body').find('iframe.popvideo');
            var if_url = $iframe.attr('data-url');
            var src_url = $iframe.attr('src');
            if(!src_url){
                $iframe.attr('src', if_url);
            }
            
        }	
    }*/

    function getQueryParam(param) {
        var result = window.location.search.match(
            new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
        );

        return result ? result[3] : false;
    }

    //var $grid;
    //var $grid2;
    var optionsforstat = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };

    var isStickyEnabled = false;

    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = "0";

    var enableStickyHeaderFunction = true;

    function sticky_header(event) {
        //console.log("qq");
        if (enableStickyHeaderFunction) {
            var st = $(this).scrollTop();
            if (st > 0) {
                $("header").addClass("partially-hidden");
            } else {
                $("header").removeClass("partially-hidden");
            }
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            if (st > lastScrollTop && st > navbarHeight) {
                $("header").addClass("hidden");
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $("header").removeClass("hidden");
                }
            }

            lastScrollTop = st;
        }

        /*var top = $(this).scrollTop();
        var header = $('header');
        var body = $('body');
        if (top > 10) {
            header.addClass('scrolled');
            body.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
            body.removeClass('scrolled');
        }*/

        ////////////////BackgroundCheck.refresh();
    }

    /*function fixGrids(){
        if($grid) {
            $grid.isotope('layout');
            setTimeout(function(){ $grid.isotope('layout'); }, 100);
            setTimeout(function(){ $grid.isotope('layout'); }, 200);
            setTimeout(function(){ $grid.isotope('layout'); }, 300);
            setTimeout(function(){ $grid.isotope('layout'); }, 400);
            setTimeout(function(){ $grid.isotope('layout'); }, 500);
            setTimeout(function(){ $grid.isotope('layout'); }, 1000);
            setTimeout(function(){ $grid.isotope('layout'); }, 1500);
            setTimeout(function(){ $grid.isotope('layout'); }, 2500);
            setTimeout(function(){ $grid.isotope('layout'); }, 3500);
            setTimeout(function(){ $grid.isotope('layout'); }, 4500);
        }
        if($grid2) {
            $grid2.isotope('layout');
            setTimeout(function(){ $grid2.isotope('layout'); }, 100);
            setTimeout(function(){ $grid2.isotope('layout'); }, 200);
            setTimeout(function(){ $grid2.isotope('layout'); }, 300);
            setTimeout(function(){ $grid2.isotope('layout'); }, 400);
            setTimeout(function(){ $grid2.isotope('layout'); }, 500);
            setTimeout(function(){ $grid2.isotope('layout'); }, 1000);
            setTimeout(function(){ $grid2.isotope('layout'); }, 1500);
            setTimeout(function(){ $grid2.isotope('layout'); }, 2500);
            setTimeout(function(){ $grid2.isotope('layout'); }, 3500);
            setTimeout(function(){ $grid2.isotope('layout'); }, 4500);
        }
    }*/
    function doPushState(state2, title2, path2) {
        var state = {
                shownBlock: state2
            },
            title = title2,
            path = path2;
        history.pushState(state, title, path);
    };
    var winWidth22 = $(window).width();
    var slideTime = 400;
    var resizeNotEnabled = true;
    var bezierEasing = [0.5, 0.5, 0, 1];
    var didScroll;
    var didDrag;
    var slick1;
    var slick1speed = 0;
    var slickspeedhelper = 0;
    //var tilt;
    var draggableEnabled;
    var draggableGalleryEnabled;
    var draggable;
    var draggableGallery;
    var interval1;
    var interval2;
    var isBgCheckLoaded = false;
    var doImagesExist = false;
    var isAboutSlidesEnabled = false;
    var isUnderworldEnabled = false;
    //function doResizeDrag() {
    //console.log("testie");
    //$(".image_slider img.default").css("left","0px");
    //$(".imagedraggable")
    //}
    function didScrollFunction() {
        //console.log("testie");
        didScroll = true;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function uncoveredArticleImages() {
        $(".post-content > * img").each(function () {
            var image = new Image();
            image.src = $(this).attr("src");
            //console.log(image.src);
            console.log('width: ' + image.naturalWidth + ' and height: ' + image.naturalHeight);



            $(this).next('em').addClass("image-credit");
            //if(image.naturalWidth > 1599) {
            //$(this).wrap( "<p class='image-p'></p>" );
            //} else {
            $(this).wrap("<p class='image-p2'></p>");
            //}

            var next = $(this).parent().next();
            var next2 = $(this).parent().parent().next();
            //console.log(next);
            if (next.css('text-align') == 'center') {
                //console.log("test");
                next.addClass("image-credit");
                next.find('em').addClass("disable");
                next.find('strong').addClass("disable");
                next.find('b').addClass("disable");
            }
            if (next2.css('text-align') == 'center') {
                //console.log("test");
                next2.addClass("image-credit");
                next2.find('em').addClass("disable");
                next2.find('strong').addClass("disable");
                next2.find('b').addClass("disable");
            }
        });
        $(".post-content > * em:not(.disable):not(:contains('Image credit')):not(.image-credit), .post-content > * strong:not(.disable):not(:contains('Image credit')):not(.image-credit), .post-content > * b:not(.disable):not(:contains('Image credit')):not(.image-credit)").each(function () {
            if ($(this).parent().html().charAt(0) == "<") {
                if (($(this).text().charAt(0) != "/") && ($(this).text().charAt(0) != "")) {
                    if ($(this).text().length < 200) {
                        //if($(this).text().startsWith("Image credit")) {
                        //	console.log("testt");
                        //} else {
                        if ($(this).parent('a').html() || $(this).parent('strong').html() || $(this).parent('em').html()) {

                        } else {
                            //if()
                            $(this).wrap("<p class='padding-fix'></p>").wrap("<div class='style3 active'></div>");
                        }
                        //console.log($(this).parent('a').html());
                        //if($(this).parent().text().charAt(0) != "/")
                        //$(this).wrap( "<p class='padding-fix'></p>" ).wrap( "<div class='style3 active'></div>" );
                        //}
                    }
                }
            } else {
                //console.log("noe");
            }
        });
    }
    var scene;
    //jQuery.scrollSpeed(100, 400);
    var slideCache = 0;
    var currentSlide = 0;

    function aboutSlides(event) {
        var windowsize = $(window).width();
        if (windowsize > 599) {
            var currentProgress = event.progress;
            if (currentProgress < 0.2) {
                currentSlide = 0;
            } else if (currentProgress < 0.4) {
                currentSlide = 1;
            } else if (currentProgress < 0.6) {
                currentSlide = 2;
            } else if (currentProgress < 0.8) {
                currentSlide = 3;
            } else {
                currentSlide = 4;
            }
            if (slideCache != currentSlide) {
                slideCache = currentSlide;
                console.log(currentSlide);
                if (currentSlide > 0) {
                    var videoBlock = $(".scrollmagicslides .video" + currentSlide).get(0);
                    //if(videoBlock.length > 0) {
                    videoBlock.play();
                    //}
                }
                $('.scrollmagicslides').slick('slickGoTo', currentSlide);
            }
        }
    }

    function aboutSlidesLeave(event) {
        var windowsize = $(window).width();
        if (windowsize > 599) {
            $('.scrollmagicslides').slick('slickGoTo', 4);
        }
    }

    function aboutSlidesEnter(event) {
        var windowsize = $(window).width();
        if (windowsize > 599) {
            $('.scrollmagicslides').slick('slickGoTo', 0);
        }
    }

    function aboutSlidesResize(event) {
        var windowsize = $(window).width();
        if (windowsize > 599) {
            var durationHelperIs = 4 * $(window).height();
        } else {
            var durationHelperIs = 0;
        }
        //console.log(durationHelperIs);
        scene.duration(durationHelperIs);
    }
    var sceneHolder = {};
    var sceneOrder = 0;

    function underworldsResize(event) {
        var durationHelper = ($(window).height() * 2 / 3) + 100 + ($(window).width() * 0.3125);
        //scene2.duration(durationHelper);
        for (var i = 0; i < sceneOrder; i++) {
            var tempI = i + 1;
            //console.log("i: "+tempI);
            sceneHolder[tempI].duration(durationHelper);
        }
        //console.log(sceneOrder);
        //console.log(sceneHolder);
    }

    function fixFullScreen(event) {
        var windowHeight = $(window).height();
        $(".slide.fullscreen, .homepage-slides, .homepage-slide").css('min-height', windowHeight);
        var calculatedSmallerHeight = windowHeight - 0;
        $('.work-slide, .work-slide .overflow-fix, .line-here-big+main .slide.fullscreen, .line-here-big+main .slide.fullscreen .vertical-flex').css('min-height', calculatedSmallerHeight);
        $('.work-slide, .work-slide .overflow-fix, .line-here-big+main .slide.fullscreen, .line-here-big+main .slide.fullscreen .vertical-flex').css('height', calculatedSmallerHeight);
    }
    $(window).resize(function () {
        fixFullScreen();
        //console.log("reszing");
    });

    function onReadyFunction() {
        sticky_header();
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
            $("body").addClass("firefox");
        }
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {
            /* Microsoft Internet Explorer detected in. */
            //alert("old ie!");
            $("body").addClass("old-ie");
        }
        fixFullScreen();
        var windowsize = $(window).width();
        //if (windowsize > 1024 && !detectIE()) {
        //if (!detectIE()) {
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {} else {
            const zoomIs = mediumZoom('body:not(.template-about-us):not(.page-contact):not(.template-home):not(.template-process) .underworld-post img', {
                margin: 0,
                background: '#000',
                scrollOffset: 0,
                metaClick: true
            });
        }
        //}
        doImagesExist = false;
        isAboutSlidesEnabled = false;
        isUnderworldEnabled = false;
        if ($('body.template-home').length > 0) {
            var aboutPageFactsAmount = $("#didyouknow").attr('data-count');
            if (aboutPageFactsAmount > 0) {
                var randomAbout = getRandomInt(aboutPageFactsAmount) + 1;
                var contentOf = $(".didyouknowhelper > *:nth-child(" + randomAbout + ")");
                $("#didyouknow .didyouknowslidehere").html(contentOf.html());
                $("#didyouknow .didyouknowslidehere .not-loaded").each(function () {
                    $(this).removeClass('not-loaded').css('background-image', 'url(' + $(this).attr('data-src') + ')');
                });
            }
        }
        //var plyrPlayer = new Plyr('#player');
        var randomFooter = getRandomInt(4) + 1;
        //console.log(randomFooter);
        var randomFooterText = $(".random-from-here > div:nth-child(" + randomFooter + ")").text();
        //console.log(randomFooterText);
        $(".random-to-here").text(randomFooterText);
        isStickyEnabled = false;
        draggableEnabled = false;
        draggableGalleryEnabled = false;
        var today = new Date();
        var hours = today.getHours();
        var currentDay = today.getDay();
        var minutes = today.getMinutes();

        if (currentDay == '0') {
            currentDay = 7;
        }

        if ($(".js-day-" + currentDay).length > 0) {
            var shown = false;
            $(".js-day-" + currentDay).each(function () {
                if (hours < 5) {
                    if ($(this).hasClass("js-time-0")) {
                        $(this).show();
                        shown = true;
                    }
                } else if (hours == 5) {
                    if (minutes < 30) {
                        if ($(this).hasClass("js-time-0")) {
                            $(this).show();
                            shown = true;
                        }
                    } else {
                        if ($(this).hasClass("js-time-1")) {
                            $(this).show();
                            shown = true;
                        }
                    }
                } else if (hours < 9) {
                    if ($(this).hasClass("js-time-1")) {
                        $(this).show();
                        shown = true;
                    }
                } else if (hours == 9) {
                    if (minutes < 30) {
                        if ($(this).hasClass("js-time-1")) {
                            $(this).show();
                            shown = true;
                        }
                    } else {
                        if ($(this).hasClass("js-time-2")) {
                            $(this).show();
                            shown = true;
                        }
                    }
                } else if (hours < 12) {
                    if ($(this).hasClass("js-time-2")) {
                        $(this).show();
                        shown = true;
                    }
                } else if (hours < 17) {
                    if ($(this).hasClass("js-time-3")) {
                        $(this).show();
                        shown = true;
                    }
                } else if (hours < 24) {
                    if ($(this).hasClass("js-time-4")) {
                        $(this).show();
                        shown = true;
                    }
                }
            });
        }
        if (!shown) {
            $(".js-day-else").show();
        }
        if (winWidth22 < 600) {
            slideTime = 10;
        } else {
            slideTime = 400;
        }
        if (resizeNotEnabled) {
            resizeNotEnabled = false;
            $(window).resize(function () {
                //console.log("resize event");
                winWidth22 = $(window).width();
                if (winWidth22 < 600) {
                    slideTime = 10;
                } else {
                    slideTime = 400;
                }
            });
        }
        //console.log(window.location.pathname || url);
        //sticky_header();
        if (!isStickyEnabled) {
            isStickyEnabled = true;
            //$(window).scroll(scrollHandler);
            $(window).on("scroll", didScrollFunction);
            interval1 = setInterval(function () {
                if (didScroll) {
                    sticky_header();
                    didScroll = false;
                }
            }, 250);
            interval2 = setInterval(function () {
                //console.log("50ms");
                if (didDrag) {
                    dragFunction();
                }
            }, 50);
        }
        //tilt = $('.js-tilt').tilt();
        console.log("ready function");
        $(".search-button1").on("click", function (e) {
            $(this).parent().hide();
            $(this).parent().next().show();
        });
        $(".showservices:not(.showservices2)").on("click", function (e) {
            $(this).hide();
            $(this).parent().next().show();
            $(this).parent().next().next().show();
        });
        $(".showservices.showservices2").on("click", function (e) {
            $(this).parent().hide();
            $(this).parent().prev().hide();
            $(this).parent().prev().prev().children().show();
        });
        $(".dropdownone .select-title").on("click", function (e) {
            $(this).parent().toggleClass("opened");
        });
        $(".colhelperhere").on("click", function (e) {
            console.log("test");
            $(this).toggleClass("opened");
        });
        $(".showfilters").on("click", function (e) {
            //$(this).addClass("active");
            $("body").addClass("workfiltersopened2");
            $("header").addClass("hidden")
            scrollToService($(this));
        });
        if ($('body.template-uncovered').length > 0) {
            console.log("uncovered page");
            //var filterEnabled = false;
            var clearFilter = $('.filter-clear2')
            var currentFilter = [];
            //var previousFilters = ['block3']
            var defaultGrid = $('.uncovered-article-grid');
            var defaultGridContent = defaultGrid.html();
            var loadAmount = 16;
            var defaultLoaded = 12;
            var loaded = defaultLoaded;
            var fullGrid = $('.full-article-list > *');
            var newGrid = [];
            var croppedGrid = [];
            var viewMoreHere = $(".view-more-here");
            var isLoading = false;
            /*$('.filter-buttons .filter-item').on('click', function(e){
                $(this).toggleClass("active");
                var isActive22 = false;
                if($('.filter-item.active').length > 0) {
                    isActive22 = true;
                }
                if(isActive22) {
                    clearFilter.css("display",'inline-block');
                } else {
                    clearFilter.css("display",'');
                }
            });*/
            $('.filter-buttons .filter-item').on('click', function (e) {
                if ($(this).hasClass("active")) {
                    //$(this).removeClass("active");
                    //currentType = 0;
                } else {
                    $('.filter-buttons .filter-item').removeClass("active");
                    $(this).addClass("active");
                    currentType = 2;
                    doGoSearchInsights();
                    ////$('.filter-go').trigger( "click" );
                }
            });
            clearFilter.on('click', function (e) {
                //currentType = 0;
                //searchInputarea.removeClass('hideit2');
                //filterArea.removeClass('hideit');
                $(this).css("display", '');
                $(".filter-buttons .active").removeClass('active');
            });
            //$(".filter-go2").on('click',function(){
            function doGoSearchInsights(e) {
                console.log("uncovered-search");
                $("body").removeClass("workfiltersopened").removeClass("workfiltersopened2");
                var isActive = false;
                var amount = 0;
                var filters = [];
                //console.log(filters);
                $(".filter-buttons .filter-item.active").each(function () {
                    filters[amount] = $(this).attr('data-value');
                    amount++;
                    //console.log("test");
                    //newFilter = newFilter + ' .' + $(this).attr('data-value');
                });
                if (amount > 0) {
                    console.log("searching for: " + filters);
                    if (JSON.stringify(filters) === JSON.stringify(currentFilter)) {
                        console.log("searched before");
                    } else {
                        currentFilter = filters;
                        console.log("searching");
                        newGrid = [];
                        fullGrid.each(function () {
                            var isAdded = false;
                            for (var i = 0; i < currentFilter.length; i++) {
                                if ($(this).hasClass(currentFilter[i])) {
                                    isAdded = true;
                                }
                            }
                            if (isAdded) {
                                newGrid.push($(this)[0].outerHTML);
                            }
                        });
                        //console.log(newGrid);
                        var croppedGrid = [];
                        if ((newGrid.length) > 16) {
                            console.log("more than 16");
                            viewMoreHere.show();
                        } else {
                            console.log("less than 16");
                            viewMoreHere.hide();
                        }
                        for (var i = 0; i < loadAmount; i++) {
                            if (newGrid[i]) {
                                croppedGrid.push(newGrid[i]);
                            }
                        }
                        loaded = loadAmount;
                        defaultGrid.children().removeClass('active');
                        setTimeout(function () {
                            defaultGrid.html('');
                            for (var i = 0; i < croppedGrid.length; i++) {
                                defaultGrid.append(croppedGrid[i]);
                                defaultGrid.children().each(function () {
                                    var imageIs = $(this).find('.not-loaded');
                                    var dataSrc = imageIs.attr('data-src');
                                    imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                                });
                            }
                            setTimeout(function () {
                                defaultGrid.children().addClass('active');
                                setTimeout(function () {
                                    //////BackgroundCheck.set('targets', '.bg-check');
                                    //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                                }, 2000);
                            }, 100);
                        }, 500);
                        //console.log(newGrid);

                    }
                } else {
                    if (JSON.stringify(filters) === JSON.stringify(currentFilter)) {
                        console.log("just scroll");
                    } else {
                        currentFilter = filters;
                        //filters = currentFilter;
                        console.log("restoring default");
                        viewMoreHere.show();
                        loaded = defaultLoaded;
                        defaultGrid.children().removeClass('active');
                        setTimeout(function () {
                            //defaultGrid.html('');
                            defaultGrid.html(defaultGridContent)
                            defaultGrid.children().removeClass('active');

                            setTimeout(function () {
                                defaultGrid.children().addClass('active');
                                setTimeout(function () {
                                    //////BackgroundCheck.set('targets', '.bg-check');
                                    //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                                }, 2000);
                            }, 100);
                        }, 500);
                    }
                }
                //var winHeight = $(window).height();
                var scrollTo = $('.uncovered-article-grid').offset().top;
                $('html,body').animate({
                    scrollTop: scrollTo
                }, 'slow', $.bez(bezierEasing));
                $(".filter-area-here").removeClass("filters-opened");
                console.log("uncovered-filter-filter");
            }
            $('.view-more').on('click', function () {
                console.log("loaded: " + loaded);
                if (!isLoading) {
                    var windowsizee = $(window).width();
                    if (windowsize > 1023) {
                        var scrollTo = $('.uncovered-article-grid > *:nth-last-child(3)').offset().top + $('.uncovered-article-grid > *:nth-last-child(3)').outerHeight(true);
                    } else {
                        var scrollTo = $('.uncovered-article-grid > *:nth-last-child(1)').offset().top + $('.uncovered-article-grid > *:nth-last-child(1)').outerHeight(true);
                    }
                    isLoading = true;
                    newGrid = [];
                    croppedGrid = [];
                    console.log("view more");
                    var isActive = false;
                    var amount = 0;
                    currentFilter = [];
                    //console.log(filters);
                    $(".filter-list .button.active").each(function () {
                        currentFilter[amount] = $(this).attr('data-tag');
                        amount++;
                        //console.log("test");
                        //newFilter = newFilter + ' .' + $(this).attr('data-value');
                    });
                    if (amount > 0) {
                        console.log("filtereddd");
                        console.log(currentFilter);
                    } else {
                        currentFilter = ['block3'];
                        console.log("unfiltered");
                    }
                    /*if(!filterEnabled) {
                        console.log("unfiltered");
                        currentFilter = ['block3'];
                        console.log(currentFilter);
                    } else {
                        console.log("filtereddd");
                    }*/
                    fullGrid.each(function () {
                        var isAdded = false;
                        for (var i = 0; i < currentFilter.length; i++) {
                            if ($(this).hasClass(currentFilter[i])) {
                                isAdded = true;
                            }
                        }
                        if (isAdded) {
                            newGrid.push($(this)[0].outerHTML);
                        }
                    });
                    //console.log(newGrid);
                    if ((newGrid.length - loaded) > 16) {
                        console.log("more than 16");
                    } else {
                        console.log("less than 16");
                        viewMoreHere.hide();
                    }
                    for (var i = loaded; i < (loaded + loadAmount); i++) {
                        if (newGrid[i]) {
                            croppedGrid.push(newGrid[i]);
                        }
                    }
                    loaded = loaded + loadAmount;
                    //setTimeout(function(){ 
                    for (var i = 0; i < croppedGrid.length; i++) {
                        defaultGrid.append(croppedGrid[i]);
                        defaultGrid.children().each(function () {
                            var imageIs = $(this).find('.not-loaded');
                            var dataSrc = imageIs.attr('data-src');
                            imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                            //imageIs.attr('src',dataSrc).removeClass('not-loaded');
                        });
                    }
                    $('html,body').animate({
                        scrollTop: scrollTo
                    }, 'slow', $.bez(bezierEasing));
                    setTimeout(function () {
                        defaultGrid.children().addClass('active');
                        isLoading = false;
                        setTimeout(function () {
                            //////BackgroundCheck.set('targets', '.bg-check');
                            //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                        }, 2000);
                    }, 100);
                    //}, 500);
                    console.log("now loaded: " + loaded);
                }
            });

        }


        /* work page below */

        $(".popuphelper").on('click', function (e) {
            console.log("closepls");
            $("body").removeClass("workfiltersopened").removeClass("workfiltersopened2");
        });

        if ($('body.template-our-work').length > 0) {
            console.log("our-work-page");
            var searchInputarea = $('.search-inputarea');
            var filterArea = $('.filter-area');
            var clearFilter = $('.filter-clear');
            var clearInput = $('.input-clear');
            var currentType = 0;
            var searchError = $('.search-error');
            var inputVal = '';
            var fullGrid2 = $('.full-project-grid > *');
            var clientArray = [];
            fullGrid2.each(function () {
                clientArray.push($(this).attr('data-client'));
                clientArray.push($(this).attr('data-title'));
                //console.log($(this).attr('data-title'));
            });
            $('.real-filter').on('click', function (e) {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    currentType = 0;
                    /*$("body").removeClass("workfiltersopened");
                    $(".popupfilters").stop().slideUp();
                    $(".popupfilters+div").stop().slideDown();
                    $(".generalfilters > *").removeClass("active");*/
                    doGoSearchWork();
                } else {
                    $(".dropdownone").removeClass("opened");
                    $(this).parent().parent().addClass("opened");
                    $(".disableptonthisone").removeClass('dis-pt');
                    $('.real-filter').removeClass("active");
                    $(".generalfilters > *").removeClass("active");
                    if (!$(this).hasClass('filter-all')) {
                        $("." + $(this).attr('data-parent')).addClass("active");
                    }
                    $("body").removeClass("workfiltersopened").removeClass("workfiltersopened2");
                    $(this).addClass("active");
                    currentType = 2;
                    doGoSearchWork();
                    ////$('.filter-go').trigger( "click" );
                }
            });
            $('.filter-buttons .filter-item.popupone').on('click', function (e) {
                //if($("body").hasClass("workfiltersopened")) {

                //}
                if ($(this).hasClass("active")) {
                    $(this).removeClass('active');
                    $("body").removeClass("workfiltersopened");
                    $(".popupfilters").stop().slideUp();
                    $(".popupfilters+div").stop().slideDown();
                } else {
                    var currentPopUp = $(this).attr('data-popup');

                    $(".popupfilters > *").removeClass("shown");
                    $("." + currentPopUp).addClass("shown");
                    //$("header").addClass("hidden");
                    $('.filter-buttons .filter-item.popupone').removeClass("active");
                    $(this).addClass("active");

                    if ($("body").hasClass("workfiltersopened")) {

                    } else {
                        $("body").addClass("workfiltersopened");
                        $(".popupfilters").stop().slideDown();
                        $(".popupfilters+div").stop().slideUp();
                    }
                }
            });

            clearInput.on('click', function (e) {
                console.log('come on!');
                currentType = 0;
                searchInputarea.removeClass('hideit2');
                filterArea.removeClass('hideit');
                $(this).css("display", '');
                $('#searchinput').val('');
                //$('#searchinput').removeAttr('value');
                $('.filter-item.active').removeClass('active');
            });


            var defaultGrid = $('.second-initial-project-grid .project-blocks');
            var defaultGridContent = defaultGrid.html();
            var defaultGrid2 = $('.initial-project-grid .project-blocks');
            var defaultGridContent2 = defaultGrid2.html();
            var currentFilter = [];
            clearFilter.on('click', function (e) {
                currentType = 0;
                searchInputarea.removeClass('hideit2');
                filterArea.removeClass('hideit');
                $(this).css("display", '');
                $('.filter-item.active').removeClass('active');
                //currentFilter = [];
            });
            var fullGrid = $('.full-project-grid > *');
            var newGrid = [];
            //console.log(defaultGridContent);
            $(".viewmoreworksdefault").on('click', function (e) {
                $("#viewmoreworksdefaultid").hide();
                $("body").addClass("viewmoreclicked");
                var shallIgnore = 12;
                var currentOne = 0;
                //console.log("searching for: "+filters);
                //currentFilter = filters;
                console.log("viewmoreing");
                newGrid = [];
                //console.log(currentFilter);
                //console.log(currentFilter.length);
                fullGrid.each(function () {
                    currentOne++;
                    //console.log($(this)); 
                    var isAdded = false;
                    //for (var i = 0; i < currentFilter.length; i++) {
                    if (currentOne > shallIgnore) {
                        isAdded = true;
                    }
                    //}
                    if (isAdded) {
                        newGrid.push($(this)[0].outerHTML);
                    }
                });
                //defaultGrid.children().removeClass('active');
                setTimeout(function () {
                    //defaultGrid.html('');
                    for (var i = 0; i < newGrid.length; i++) {
                        defaultGrid.append(newGrid[i]);
                        defaultGrid.children().each(function () {
                            var imageIs = $(this).find('.not-loaded');
                            var dataSrc = imageIs.attr('data-src');
                            //imageIs.attr('src',dataSrc).removeClass('not-loaded');
                            imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                        });
                    }
                    setTimeout(function () {
                        defaultGrid.children().addClass('active');
                        setTimeout(function () {
                            //////BackgroundCheck.set('targets', '.bg-check');
                            //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                        }, 2000);
                    }, 100);
                }, 500);
            });

            function doGoSearchWork(e) {
                $("#searchagain").show();
                $("#viewmoreworksdefaultid").hide();
                $("body").removeClass("viewmoreclicked").addClass("filtersherenow");
                searchError.hide();
                console.log("search through filter")
                //var newFilter = '';
                var amount = 0;
                var filters = [];
                //console.log(filters);

                var windowsizee = $(window).width();
                if (windowsize < 961) {
                    scrollToService($(".showfilters"));
                }


                $(".real-filter.active").each(function () {
                    filters[amount] = $(this).attr('data-value');
                    amount++;
                    //console.log("test");
                    //newFilter = newFilter + ' .' + $(this).attr('data-value');
                });
                if (amount > 0 && (filters[0] !== 'block4')) {
                    console.log("searching for: " + filters);
                    if (JSON.stringify(filters) === JSON.stringify(currentFilter)) {
                        console.log("searched before");
                    } else {
                        currentFilter = filters;
                        console.log("searching");
                        newGrid = [];
                        //console.log(currentFilter);
                        //console.log(currentFilter.length);
                        fullGrid.each(function () {
                            //console.log($(this)); 
                            var isAdded = false;
                            for (var i = 0; i < currentFilter.length; i++) {
                                if ($(this).hasClass(currentFilter[i])) {
                                    isAdded = true;
                                }
                            }
                            if (isAdded) {
                                newGrid.push($(this)[0].outerHTML);
                            }
                            //if($(this).hasClass("client-quintessentially")) {
                            //   console.log($(this));
                            //}
                        });
                        defaultGrid2.children().removeClass('active');
                        setTimeout(function () {
                            defaultGrid2.html('');
                            for (var i = 0; i < newGrid.length; i++) {
                                defaultGrid2.append(newGrid[i]);
                                defaultGrid2.children().each(function () {
                                    var imageIs = $(this).find('.not-loaded');
                                    var dataSrc = imageIs.attr('data-src');
                                    //imageIs.attr('src',dataSrc).removeClass('not-loaded');
                                    imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                                });
                            }
                            setTimeout(function () {
                                defaultGrid2.children().addClass('active');
                                setTimeout(function () {
                                    //////BackgroundCheck.set('targets', '.bg-check');
                                    //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                                }, 2000);
                            }, 100);
                        }, 500);
                        //console.log(newGrid);

                    }
                } else {
                    console.log("restoring default");
                    $("#searchagain").hide();
                    //$("#viewmoreworksdefaultid").show();
                    $("body").removeClass("viewmoreclicked").removeClass("filtersherenow");
                    defaultGrid.children().removeClass('active');
                    defaultGrid2.children().removeClass('active');
                    setTimeout(function () {
                        //defaultGrid.html('');
                        defaultGrid.html(defaultGridContent);
                        defaultGrid2.html(defaultGridContent2);
                        defaultGrid.children().removeClass('active');
                        defaultGrid2.children().removeClass('active');
                        setTimeout(function () {
                            defaultGrid.children().addClass('active');
                            defaultGrid2.children().addClass('active');
                            $('.viewmoreworksdefault').trigger("click");
                            setTimeout(function () {
                                //////BackgroundCheck.set('targets', '.bg-check');
                                //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                            }, 2000);
                        }, 100);
                    }, 500);
                }
                //var winHeight = $(window).height() - 0;
                //var winHeight = $('.initial-project-grid').offset().top - 78;
                enableStickyHeaderFunction = false;
                $("header").removeClass("hidden");
                //$('html,body').animate({ scrollTop: winHeight }, 'slow', $.bez(bezierEasing));
                setTimeout(function () {
                    $("header").removeClass("hidden");
                    enableStickyHeaderFunction = true;
                }, 1000);
                console.log("our-work-filter");
            }
        }


        var elems = $(".showrandomone > *");
        if (elems.length) {
            var keep = Math.floor(Math.random() * elems.length);
            for (var i = 0; i < elems.length; ++i) {
                if (i == keep) {
                    $(elems[i]).show();
                }
            }
        }

        /* property page below */
        if ($('body.template-property').length > 0) {
            console.log("our-work-page");
            var searchInputarea = $('.search-inputarea');
            var filterArea = $('.filter-area');
            var clearFilter = $('.filter-clear');
            var clearInput = $('.input-clear');
            var currentType = 0;
            var searchError = $('.search-error');
            var inputVal = '';
            var fullGrid2 = $('.full-project-grid > *');
            var clientArray = [];
            fullGrid2.each(function () {
                clientArray.push($(this).attr('data-client'));
                clientArray.push($(this).attr('data-title'));
                //console.log($(this).attr('data-title'));
            });
            $('.filter-buttons .filter-item').on('click', function (e) {
                if ($(this).hasClass("active")) {
                    //$(this).removeClass("active");
                    //currentType = 0;
                } else {
                    $(".disableptonthisone").removeClass('dis-pt');
                    $('.filter-buttons .filter-item').removeClass("active");
                    $(this).addClass("active");
                    currentType = 2;
                    doGoSearchWork();
                    ////$('.filter-go').trigger( "click" );
                }
            });
            clearInput.on('click', function (e) {
                console.log('come on!');
                currentType = 0;
                searchInputarea.removeClass('hideit2');
                filterArea.removeClass('hideit');
                $(this).css("display", '');
                $('#searchinput').val('');
                //$('#searchinput').removeAttr('value');
                $('.filter-item.active').removeClass('active');
            });


            var defaultGrid = $('.project-blocks');
            var defaultGridContent = defaultGrid.html();
            var currentFilter = [];
            clearFilter.on('click', function (e) {
                currentType = 0;
                searchInputarea.removeClass('hideit2');
                filterArea.removeClass('hideit');
                $(this).css("display", '');
                $('.filter-item.active').removeClass('active');
                //currentFilter = [];
            });
            var fullGrid = $('.full-project-grid > *');
            var newGrid = [];
            //console.log(defaultGridContent);
            $(".viewmoreworksdefault").on('click', function (e) {
                $("#viewmoreworksdefaultid").hide();
                $("body").addClass("viewmoreclicked");
                if ($('body.template-our-work').length > 0) {
                    var shallIgnore = 12;
                } else {
                    var shallIgnore = 6;
                }
                var currentOne = 0;
                //console.log("searching for: "+filters);
                //currentFilter = filters;
                console.log("viewmoreing");
                newGrid = [];
                //console.log(currentFilter);
                //console.log(currentFilter.length);
                fullGrid.each(function () {
                    currentOne++;
                    //console.log($(this)); 
                    var isAdded = false;
                    //for (var i = 0; i < currentFilter.length; i++) {
                    if (currentOne > shallIgnore) {
                        isAdded = true;
                    }
                    //}
                    if (isAdded) {
                        newGrid.push($(this)[0].outerHTML);
                    }
                });
                //defaultGrid.children().removeClass('active');
                setTimeout(function () {
                    //defaultGrid.html('');
                    for (var i = 0; i < newGrid.length; i++) {
                        defaultGrid.append(newGrid[i]);
                        defaultGrid.children().each(function () {
                            var imageIs = $(this).find('.not-loaded');
                            var dataSrc = imageIs.attr('data-src');
                            //imageIs.attr('src',dataSrc).removeClass('not-loaded');
                            imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                        });
                    }
                    setTimeout(function () {
                        defaultGrid.children().addClass('active');
                        setTimeout(function () {
                            //////BackgroundCheck.set('targets', '.bg-check');
                            //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                        }, 2000);
                    }, 100);
                }, 500);
            });

            function doGoSearchWork(e) {
                $("#searchagain").show();
                $("#viewmoreworksdefaultid").hide();
                $("body").removeClass("viewmoreclicked");
                searchError.hide();
                console.log("search through filter");
                $("body").removeClass("workfiltersopened").removeClass("workfiltersopened2");
                //var newFilter = '';
                var amount = 0;
                var filters = [];
                //console.log(filters);
                $(".filter-item.active").each(function () {
                    filters[amount] = $(this).attr('data-value');
                    amount++;
                    //console.log("test");
                    //newFilter = newFilter + ' .' + $(this).attr('data-value');
                });
                if (amount > 0) {
                    console.log("searching for: " + filters);
                    if (JSON.stringify(filters) === JSON.stringify(currentFilter)) {
                        console.log("searched before");
                    } else {
                        currentFilter = filters;
                        console.log("searching");
                        newGrid = [];
                        //console.log(currentFilter);
                        //console.log(currentFilter.length);
                        fullGrid.each(function () {
                            //console.log($(this)); 
                            var isAdded = false;
                            for (var i = 0; i < currentFilter.length; i++) {
                                if ($(this).hasClass(currentFilter[i])) {
                                    isAdded = true;
                                }
                            }
                            if (isAdded) {
                                newGrid.push($(this)[0].outerHTML);
                            }
                            //if($(this).hasClass("client-quintessentially")) {
                            //   console.log($(this));
                            //}
                        });
                        defaultGrid.children().removeClass('active');
                        setTimeout(function () {
                            defaultGrid.html('');
                            for (var i = 0; i < newGrid.length; i++) {
                                defaultGrid.append(newGrid[i]);
                                defaultGrid.children().each(function () {
                                    var imageIs = $(this).find('.not-loaded');
                                    var dataSrc = imageIs.attr('data-src');
                                    //imageIs.attr('src',dataSrc).removeClass('not-loaded');
                                    imageIs.removeClass('not-loaded').css('background-image', 'url(' + dataSrc + ')');
                                });
                            }
                            setTimeout(function () {
                                defaultGrid.children().addClass('active');
                                setTimeout(function () {
                                    //////BackgroundCheck.set('targets', '.bg-check');
                                    //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                                }, 2000);
                            }, 100);
                        }, 500);
                        //console.log(newGrid);

                    }
                } else {
                    console.log("restoring default");
                    $("#searchagain").hide();
                    //$("#viewmoreworksdefaultid").show();
                    $("body").removeClass("viewmoreclicked");
                    defaultGrid.children().removeClass('active');
                    setTimeout(function () {
                        //defaultGrid.html('');
                        defaultGrid.html(defaultGridContent);
                        defaultGrid.children().removeClass('active');

                        setTimeout(function () {
                            defaultGrid.children().addClass('active');
                            $('.viewmoreworksdefault').trigger("click");
                            setTimeout(function () {
                                //////BackgroundCheck.set('targets', '.bg-check');
                                //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                            }, 2000);
                        }, 100);
                    }, 500);
                }
                //var winHeight = $(window).height() - 0;
                //var winHeight = $('.initial-project-grid').offset().top - 78;
                enableStickyHeaderFunction = false;
                $("header").removeClass("hidden");
                //$('html,body').animate({ scrollTop: winHeight }, 'slow', $.bez(bezierEasing));
                setTimeout(function () {
                    $("header").removeClass("hidden");
                    enableStickyHeaderFunction = true;
                }, 1000);
                console.log("our-work-filter");
            }
        }

        function testOutside(e) {
            if (e.target.id == 'dropdown-value') {
                //do something
                console.log("inside");
            } else {
                //do something
                console.log("outside");
                $('html').off("click", testOutside);
                $(".dropdown-helper").removeClass("opened");
            }
        }
        $(".dropdown").on('click', function (e) {
            $(this).parent().addClass("opened");
            //$(this).focus();
            console.log("maybe1");
            $('html').on("click", testOutside);
        });
        $(".dropdown").on('blur', function (e) {
            console.log("maybe?");
        });
        $(".dropdown-here li").on('click', function (e) {
            //alert($(this).text());
            $(this).parent().parent().removeClass("opened");
            $("#dropdown-value").text($(this).text());
        });

        function addSourceToVideo(element, src, type) {
            var source = document.createElement('source');

            source.src = src;
            source.type = type;

            element.appendChild(source);
        }
        var popupVideoInstance = '';
        var isPopUpEngaged = false;
        $('.button-to-popup').on('click', function (e) {
            /*var iframe = $(this).parent().children('iframe');
            iframe.css('display','block');
            iframe.attr('src',iframe.attr('data-src'));
            var thisParent = $(this).parent();
            setTimeout(function(){
                thisParent.removeClass("not-loaded");
            }, 100);*/
            $("header").addClass("hidden");
            var video = $(this).next().next().children('video');
            if (!isPopUpEngaged) {
                isPopUpEngaged = true;
                var realSource = $(this).attr('data-src');
                var realWidth = $(this).attr('data-width');
                var realHeight = $(this).attr('data-height');
                console.log(realWidth);
                console.log(realHeight);
                $(".video-popup-helper").css('display', 'block');
                video.addClass("plyr-loading");
                video.css('display', 'block');

                video.html('<source src="' + realSource + '" type="video/mp4"></source>');
                var player = new Plyr('.plyr-loading', {
                    /* options */
                    "settings": [],
                    "volume": 1,
                    "resetOnEnd": true,
                    "fullscreen": {
                        enabled: true,
                        fallback: true,
                        iosNative: true
                    },
                    "controls": ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
                });
                popupVideoInstance = player;
                var thisParent = $(this).next().next();
                $('body').css("overflow", "hidden");
                thisParent.css('display', 'block');
                setTimeout(function () {
                    thisParent.removeClass("disabled");
                    video.removeClass("plyr-loading");
                    player.play();
                    var windowsize = $(window).width();
                    if (windowsize < 1025) {
                        player.fullscreen.enter();
                    }
                }, 100);
            } else {
                $(".video-popup-helper").css('display', 'block');
                video.addClass("plyr-loading");
                video.css('display', 'block');
                var thisParent = $(this).next().next();
                $('body').css("overflow", "hidden");
                thisParent.css('display', 'block');
                setTimeout(function () {
                    thisParent.removeClass("disabled");
                    video.removeClass("plyr-loading");
                    popupVideoInstance.play();
                    var windowsize = $(window).width();
                    if (windowsize < 1025) {
                        popupVideoInstance.fullscreen.enter();
                    }
                }, 100);
            }




        });

        $('.video-popup-close').on('click', function (e) {
            console.log("close it!");
            $(".video-popup-helper").css('display', '');
            $('body').css("overflow", "");
            var thisParent = $(this).parent();
            thisParent.addClass("disabled");
            popupVideoInstance.stop();
            setTimeout(function () {
                thisParent.css('display', '');
                //popupVideoInstance.stop();
                //var video = $(this).prev();
                //video.html('' );
                //video[0].load();
                //video[0].play();
            }, 1100);
        });

        $('.video-popup-helper').on('click', function (e) {
            $('.video-popup-close').trigger("click");
        });

        /* about page popup */
        var popupVideoInstance2 = '';
        var isPopUpEngaged2 = false;
        $('.button-to-popup2').on('click', function (e) {
            $("header").addClass("hidden");
            var video = $(".aboutpage-popup-area").children().next().children('video');
            if (!isPopUpEngaged2) {
                isPopUpEngaged2 = true;
                var realSource = $(this).attr('data-src');
                var realWidth = $(this).attr('data-width');
                var realHeight = $(this).attr('data-height');
                console.log(realWidth);
                console.log(realHeight);
                $(".video-popup-helper2").css('display', 'block');
                video.addClass("plyr-loading");
                video.css('display', 'block');

                video.html('<source src="' + realSource + '" type="video/mp4"></source>');
                var player = new Plyr('.plyr-loading', {
                    /* options */
                    "settings": [],
                    "volume": 1,
                    "resetOnEnd": true,
                    "fullscreen": {
                        enabled: true,
                        fallback: true,
                        iosNative: true
                    },
                    "controls": ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
                });
                popupVideoInstance2 = player;
                var thisParent = $(".video-popup");
                $('body').css("overflow", "hidden");
                thisParent.css('display', 'block');
                setTimeout(function () {
                    thisParent.removeClass("disabled");
                    video.removeClass("plyr-loading");

                    player.play();

                    var windowsize = $(window).width();
                    if (windowsize < 1025) {
                        player.fullscreen.enter();
                    }
                }, 100);
            } else {
                $(".video-popup-helper2").css('display', 'block');
                video.addClass("plyr-loading");
                video.css('display', 'block');
                var thisParent = $(".video-popup");
                $('body').css("overflow", "hidden");
                thisParent.css('display', 'block');
                setTimeout(function () {
                    thisParent.removeClass("disabled");
                    video.removeClass("plyr-loading");
                    popupVideoInstance2.play();
                    var windowsize = $(window).width();
                    if (windowsize < 1025) {
                        popupVideoInstance2.fullscreen.enter();
                    }
                }, 100);
            }




        });

        $('.video-popup-close2').on('click', function (e) {
            console.log("close it2!");
            $(".video-popup-helper2").css('display', '');
            $('body').css("overflow", "");
            var thisParent = $(".video-popup");
            thisParent.addClass("disabled");
            popupVideoInstance2.stop();
            setTimeout(function () {
                popupVideoInstance2.stop();
                thisParent.css('display', '');
                //popupVideoInstance.stop();
                //var video = $(this).prev();
                //video.html('' );
                //video[0].load();
                //video[0].play();
            }, 1100);
        });

        $('.video-popup-helper2').on('click', function (e) {
            $('.video-popup-close2').trigger("click");
        });

        $('.vimeo-play').on('click', function (e) {
            /*var iframe = $(this).parent().children('iframe');
            iframe.css('display','block');
            iframe.attr('src',iframe.attr('data-src'));
            var thisParent = $(this).parent();
            setTimeout(function(){
                thisParent.removeClass("not-loaded");
            }, 100);*/
            $("body").addClass("vimeoplayingnow");
            var realSource = $(this).attr('data-src');
            var realWidth = $(this).attr('data-width');
            var realHeight = $(this).attr('data-height');
            console.log(realWidth);
            console.log(realHeight);
            var video = $(this).parent().children('video');
            video.addClass("plyr-loading");
            video.css('display', 'block');
            video.html('<source src="' + realSource + '" type="video/mp4"></source>');
            //const players = Plyr.setup('.plyr-loading');
            var player = new Plyr('.plyr-loading', {
                /* options */
                "settings": [],
                "volume": 1,
                "resetOnEnd": true,
                "fullscreen": {
                    enabled: true,
                    fallback: true,
                    iosNative: true
                },
                "controls": ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
            });

            var thisParent = $(this).parent();
            setTimeout(function () {
                thisParent.removeClass("not-loaded");
                video.removeClass("plyr-loading");
                player.play();
                var windowsize = $(window).width();
                if (windowsize < 1025) {
                    player.fullscreen.enter();
                }
                //video[0].load();
                //video[0].play();
            }, 100);
            //document.body.appendChild(video);
        });
        $('.video-play-button').on('click', function (e) {
            //console.log("play video");
            __gaTracker('send', 'event', 'interaction', 'click', 'homepage-video', true, true);
            var wh = $(window).height();
            var $slide = $(this).parent().parent();
            var $iframe = $slide.find('iframe.popvideo');
            var $close = $slide.find('.video-close-button');
            var if_url = $iframe.attr('data-url');
            var $menu = $('header');
            //var $bottom = $('.hero .tagline');
            //var $brochure = $('.brochure-row');

            $('html, body').animate({
                scrollTop: 0
            }, 1000, 'swing', function () {
                $('body').css("overflow", "hidden");
                $menu.css("z-index", "0");
            });
            $iframe.attr('src', if_url + '?autoplay=1');
            //$menu.animate({opacity: "0"}, 1000, 'swing', function(){
            //	$(this).hide();
            //});
            $iframe.delay(1000).show().animate({
                opacity: 1
            }, 2000, 'swing');
            $close.delay(1000).show().animate({
                opacity: "1"
            }, 2000, 'swing');
            return false;
        });

        $('.video-close-button').on('click', function (e) {
            //event.preventDefault();
            var wh = $(window).height();
            var $slide = $(this).parent().parent();
            var $iframe = $slide.find('iframe.popvideo');
            var $close = $slide.find('.video-close-button');
            var $menu = $('header');
            //var $bottom = $('.hero .tagline');
            //var $brochure = $('.brochure-row');
            //var renewSrc = $('iframe.loopvideo').attr('src');
            //$('.hero .image.video').animate({opacity: "1"}, 1000, 'swing');
            //$('iframe.loopvideo').attr('src','');
            //$('iframe.loopvideo').attr('src',renewSrc);

            $('body').css("overflow-y", "");
            $iframe.animate({
                opacity: 0
            }, 1000, 'swing', function () {
                $(this).attr('src', '');
                $(this).hide();
                $menu.css("z-index", "");
            });
            $menu.show().animate({
                opacity: "1"
            }, 1000, 'swing');
            //$bottom.show().animate({opacity: "1"}, 1000, 'swing');
            //$brochure.show().animate({opacity: "1"}, 1000, 'swing');
            $close.animate({
                opacity: "0"
            }, 1000, 'swing', function () {
                $(this).hide();
            });


        });
        $('.map-here').each(function () {
            render_map($(this));
        });
        $('.scrollmagicslides').on('init', function (event, slick) {
            $(".scrollmagicslides .style14").each(function () {
                var $div = $(this).clone().html('');
                $(this).contents().each(function (index, elem) {
                    var spanClass = '';
                    var spanClass2 = '';
                    $textArray = $(this).text().split('');

                    for (var i = 0; i < $textArray.length; i++) {
                        spanClass = 0.4 + 0.1 * i;
                        spanClass2 = spanClass + 's';
                        $('<span>').css('transition-delay', spanClass2).css('-webkit-transition-delay', spanClass2).text($textArray[i]).appendTo($div);

                    }
                    spanClass = spanClass + 0.1;
                    spanClass2 = spanClass + 's';
                    $(this).parent().next().css('transition-delay', spanClass2).css('-webkit-transition-delay', spanClass2);
                    spanClass = spanClass + 0.2;
                    spanClass2 = spanClass + 's';
                    $(this).parent().next().next().css('transition-delay', spanClass2).css('-webkit-transition-delay', spanClass2);
                    spanClass = spanClass + 0.2;
                    spanClass2 = spanClass + 's';
                    $(this).parent().next().next().next().css('transition-delay', spanClass2).css('-webkit-transition-delay', spanClass2);
                });

                $(this).replaceWith($div);
            });
            $(".scrollmagicarea-dots li:not(.active):first-child").on("click", function () {
                console.log("1");
                var scrollToVar = $('#trigger1').offset().top;
                window.scrollTo(0, scrollToVar);
            });
            $(".scrollmagicarea-dots li:not(.active):nth-child(2), .scrollmagicslides .slick-slide:first-child .bottom-arrow3, .scrollmagicslides > *:not(.slick-list):first-child .bottom-arrow3").on("click", function () {
                console.log("2");
                var windowsize = $(window).width();
                if (windowsize > 599) {
                    var scrollToVar = $('#trigger1').offset().top + $(window).height() + 1;
                    window.scrollTo(0, scrollToVar);
                } else {
                    var scrollToVar = $('#scroll1here').offset().top + 1;
                    $('html,body').animate({
                        scrollTop: scrollToVar
                    }, 'slow', $.bez(bezierEasing));
                }

            });
            $(".scrollmagicarea-dots li:not(.active):nth-child(3), .scrollmagicslides .slick-slide:nth-child(2) .bottom-arrow3, .scrollmagicslides > *:not(.slick-list):nth-child(2) .bottom-arrow3").on("click", function () {
                console.log("3");
                var windowsize = $(window).width();
                if (windowsize > 599) {
                    var scrollToVar = $('#trigger1').offset().top + (2 * $(window).height()) + 1;
                    window.scrollTo(0, scrollToVar);
                } else {
                    var scrollToVar = $('#scroll2here').offset().top + 1;
                    $('html,body').animate({
                        scrollTop: scrollToVar
                    }, 'slow', $.bez(bezierEasing));
                }

            });
            $(".scrollmagicarea-dots li:not(.active):nth-child(4), .scrollmagicslides .slick-slide:nth-child(3) .bottom-arrow3, .scrollmagicslides > *:not(.slick-list):nth-child(3) .bottom-arrow3").on("click", function () {
                console.log("4");
                var windowsize = $(window).width();
                if (windowsize > 599) {
                    var scrollToVar = $('#trigger1').offset().top + (3 * $(window).height()) + 1;
                    window.scrollTo(0, scrollToVar);
                } else {
                    var scrollToVar = $('#scroll3here').offset().top + 1;
                    $('html,body').animate({
                        scrollTop: scrollToVar
                    }, 'slow', $.bez(bezierEasing));
                }

            });
            $(".scrollmagicarea-dots li:not(.active):nth-child(5), .scrollmagicslides .slick-slide:nth-child(4) .bottom-arrow3, .scrollmagicslides > *:not(.slick-list):nth-child(4) .bottom-arrow3").on("click", function () {
                console.log("5");
                var windowsize = $(window).width();
                if (windowsize > 599) {
                    var scrollToVar = $('#trigger1').offset().top + (4 * $(window).height()) + 1;
                    window.scrollTo(0, scrollToVar);
                } else {
                    var scrollToVar = $('#scroll4here').offset().top + 1;
                    $('html,body').animate({
                        scrollTop: scrollToVar
                    }, 'slow', $.bez(bezierEasing));
                }

            });
            $(".scrollmagicslides .slick-slide:nth-child(5) .bottom-arrow3, .scrollmagicslides > *:not(.slick-list):nth-child(5) .bottom-arrow3").on("click", function () {
                var scrollToVar = $('#nextaftermagic').offset().top + 1;
                console.log("testie");
                $('html,body').animate({
                    scrollTop: scrollToVar
                }, 'slow', $.bez(bezierEasing));
            });
        });
        $('.didyouknowslick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            //$('.slick-active figcaption').removeClass('hidden fadeInDown');
            //$('.slick-active figcaption').addClass('fadeOutDown');
            var nextSlideExact = nextSlide + 1;
            //console.log(nextSlideExact);
            $(".didyouknowslick-helper .yellowhere").text(nextSlideExact);
            //console.log(nextSlideExact);
            //var attributeIs = $(".homepage-slide:nth-child("+nextSlideExact+")").attr('data-theme');
            //console.log(attributeIs);
            //setTimeout(function(){ 
            //	$("body").removeClass("theme-dark").removeClass("theme-white").addClass(attributeIs);
            //}, 500);

            //console.log(nextSlide);
        });
        $('.didyouknowslick').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                        fade: true,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: true,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        speed: 400,
                        adaptiveHeight: false,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        fade: true,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: true,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        speed: 400,
                        adaptiveHeight: false,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                }
            ]
        });

        $('.stageslick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var nextSlideExact = nextSlide + 1;
            console.log(nextSlideExact);
            $(".didyouknowslick-helper .red").text(nextSlideExact);
            if (nextSlideExact === 4) {
                nextSlideExact = 7;
            }
            if (nextSlideExact === 3) {
                nextSlideExact = 5;
            }
            if (nextSlideExact === 2) {
                nextSlideExact = 3;
            }
            $(".stephere").removeClass("active");
            $(".stephere:nth-child(" + nextSlideExact + ")").addClass("active");
        });

        $('.stageslick').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                        arrows: false,
                        fade: false,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: false,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        speed: 400,
                        adaptiveHeight: false,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                        arrows: false,
                        fade: false,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: false,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        speed: 400,
                        adaptiveHeight: false,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                }
            ]
        });

        $(".stephere").on("click", function (e) {
            var goToIs = $(this).attr('data-goto');
            $('.stageslick').slick('slickGoTo', goToIs - 1);
        });

        $('.property-slider').not('.slick-initialized').slick({
            responsive: [{
                breakpoint: 9999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    fade: false,
                    cssEase: 'cubic-bezier(.5,.5,0,1)',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    pauseOnHover: false,
                    speed: 400,
                    adaptiveHeight: false,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true
                }
            }]
        });
        $.fn.randomize = function (selector) {
            var $elems = selector ? $(this).find(selector) : $(this).children(),
                $parents = $elems.parent();

            $parents.each(function () {
                $(this).children(selector).sort(function () {
                    return Math.round(Math.random()) - 0.5;
                }).detach().appendTo(this);
            });

            return this;
        };
        $('.testimonial-slider').randomize('.single-testimonial-slide');
        $('.testimonial-slider').not('.slick-initialized').slick({
            responsive: [{
                breakpoint: 9999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    fade: true,
                    cssEase: 'cubic-bezier(.5,.5,0,1)',
                    autoplay: true,
                    autoplaySpeed: 8000,
                    pauseOnHover: false,
                    speed: 400,
                    adaptiveHeight: false,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true
                }
            }]
        });
        $('.processblock-slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            //$('.slick-active figcaption').removeClass('hidden fadeInDown');
            //$('.slick-active figcaption').addClass('fadeOutDown');
            var nextSlideExact = nextSlide + 1;
            //console.log(nextSlideExact);
            $(".style33 .red").text(nextSlideExact);
            //console.log(nextSlideExact);
            //var attributeIs = $(".homepage-slide:nth-child("+nextSlideExact+")").attr('data-theme');
            //console.log(attributeIs);
            //setTimeout(function(){ 
            //	$("body").removeClass("theme-dark").removeClass("theme-white").addClass(attributeIs);
            //}, 500);

            //console.log(nextSlide);
        });
        /*$('.processblock-slick').not('.slick-initialized').slick({
            responsive: [
                {
                  breakpoint: 9999,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                    fade: false,
                    cssEase: 'cubic-bezier(.5,.5,0,1)',
                    autoplay: false,
                    autoplaySpeed: 8000,
                    pauseOnHover: false,
                    speed: 400,
                    adaptiveHeight: false,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true
                  }
                }
              ]
        });*/
        $("body").addClass("loaded-website").addClass('loading-delays');
        setTimeout(function () {
            $("body").removeClass('loading-delays');
        }, 500);
        //var video1,video2,video3,video4,video5;
        var amountOfPlaying = 0;
        var isAutoPlayEnabled = false;

        if ($('body.home .homepage-slides, body.template-our-work .homepage-slides').length > 0) {

            //}

            //$("body.home .homepage-slides, body.template-our-work .homepage-slidesQQQQ").on('init', function(event, slick){
            //console.log("test");
            $("body").addClass('slick-loaded-here');
            fixFullScreen();
            //console.log("test");
            var windowsize = $(window).width();
            if (windowsize > 599) {
                $('.homepage-slides video.hide-on-mobile').each(function (index, elem) {
                    console.log("testtt-m1");
                    $(this)[0].load();
                    $(this)[0].play();
                    /*if(detectIE()) {
                           enableHomepageSlider();
                       } else {
                           $(this)[0].addEventListener('loadeddata', function() {
                               console.log($(this)[0].readyState);
                               enableHomepageSlider();
    
                               if($(this)[0].readyState >= 1) {
                                   amountOfPlaying++;
                                   if(amountOfPlaying == 2) {
                                       enableHomepageSlider();
                                   }
                               }
                           });
                       }*/
                });
            } else {
                $('.homepage-slides video.show-on-mobile').each(function (index, elem) {
                    $(this)[0].load();
                    $(this)[0].play();
                    /*if(detectIE()) {
                        enableHomepageSlider();
                    } else {
                        $(this)[0].addEventListener('loadeddata', function() {
                            console.log($(this)[0].readyState);
                            if($(this)[0].readyState >= 2) {
                                amountOfPlaying++;
                                if(amountOfPlaying == 2) {
                                    enableHomepageSlider();
                                }
                            }
                        });
                    }*/
                });
            }
        };




        /*$("body.template-process .homepage-slides").on('init', function(event, slick){
            $("body").addClass('slick-loaded-here').addClass("slickplaying");
            fixFullScreen();
        });*/



        var areVideosPlaying = false;

        function enableHomepageSlider() {
            /*if(!areVideosPlaying) {
                    areVideosPlaying = true;
                    $("body").addClass("slickplaying");
                    if(!detectIE()) {
                        $('body.home .homepage-slides, body.template-our-work .homepage-slides').slick('slickPlay');
                    }
                    if (windowsize > 599) {
                       $('.homepage-slides video.hide-on-mobile').each(function (index, elem) {
                           $(this)[0].play();
                       });
                   } else {
                       $('.homepage-slides video.show-on-mobile').each(function (index, elem) {
                           $(this)[0].play();
                       });
                   }
               }*/
        }
        //$('.autoplay').slick('autoplay', false);
        $('.homepage-slidesQQQQ').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            //$('.slick-active figcaption').removeClass('hidden fadeInDown');
            //$('.slick-active figcaption').addClass('fadeOutDown');
            var nextSlideExact = nextSlide + 1;
            /*nextSlide = nextSlide + 1;
            if(nextSlide == 5) {
                nextSlide = 1;
            }*/
            //console.log("changes to: "+nextSlideExact);
            /*var attributeIs = $(".homepage-slide:nth-child("+nextSlideExact+")").attr('data-theme');
            setTimeout(function(){ 
                $("body").removeClass("theme-dark").removeClass("theme-white").addClass(attributeIs);
            }, 500);*/
            setTimeout(function () {
                $(".didyouknowslick-helper .yellowhere").text(nextSlideExact);
            }, 500);
            if (areVideosPlaying) {
                var windowsize = $(window).width();
                if (windowsize > 599) {
                    var videoIs = $(".homepage-slide:nth-child(" + nextSlideExact + ") video.hide-on-mobile")[0];
                } else {
                    var videoIs = $(".homepage-slide:nth-child(" + nextSlideExact + ") video.show-on-mobile")[0];
                }
                if (videoIs) {
                    //console.log(videoIs.readyState);
                    videoIs.pause();
                    if (videoIs.readyState === 4 || videoIs.readyState === 1) {
                        //console.log("currentimeto0");
                        //setTimeout(function(){ 
                        //console.log("delay is");
                        //videoIs.pause();
                        videoIs.currentTime = 0;
                        //videoIs.play();
                        //}, 3000);
                        setTimeout(function () {
                            videoIs.play();
                        }, 500);
                    }

                }
            }
            if (detectIE()) {
                setTimeout(function () {
                    console.log("resizing");
                    $(window).trigger('resize');
                    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
                        var evt = document.createEvent('UIEvents');
                        evt.initUIEvent('resize', true, false, window, 0);
                        window.dispatchEvent(evt);
                    } else {
                        window.dispatchEvent(new Event('resize'));

                    }
                }, 1500);
            }
            //console.log(nextSlide);
        });
        /*$('.homepage-slides').not('.slick-initialized').slick({
            responsive: [
                {
                  breakpoint: 9999,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    fade: true,
                    cssEase: 'linear',
                    autoplay: false,
                    autoplaySpeed: 6000,
                    pauseOnHover: false,
                    speed: 400,
                    adaptiveHeight: false,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true
                  }
                }
              ]
        });*/

        $('.scrollmagicslides').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 400,
                        adaptiveHeight: false,
                        swipeToSlide: false,
                        touchMove: false,
                        draggable: false
                    }
                },
                {
                    breakpoint: 599,
                    settings: 'unslick'
                }
            ]
        });
        $('.about-slides').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 395,
                        adaptiveHeight: false,
                        swipeToSlide: false
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 395,
                        adaptiveHeight: false,
                        swipeToSlide: true
                    }
                }
            ]
        });
        var slick1 = $('.related-articles:not(.related-projects):not(.related-news)').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 395,
                        adaptiveHeight: false,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 395,
                        adaptiveHeight: false,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 395,
                        adaptiveHeight: false,
                        swipeToSlide: true
                    }
                }
            ]
        });
        if ($('.related-projects').length > 0) {
            var slick1 = $('.related-projects').not('.slick-initialized').slick({
                responsive: [{
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false,
                            fade: false,
                            cssEase: 'linear',
                            autoplay: false,
                            autoplaySpeed: 6000,
                            pauseOnHover: false,
                            speed: 795,
                            adaptiveHeight: false,
                            swipeToSlide: true
                        }
                    },
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false,
                            fade: false,
                            cssEase: 'linear',
                            autoplay: false,
                            autoplaySpeed: 6000,
                            pauseOnHover: false,
                            speed: 795,
                            adaptiveHeight: false,
                            swipeToSlide: true
                        }
                    }
                ]
            });
        }
        if ($('.related-news').length > 0) {
            var slick1 = $('.related-news').not('.slick-initialized').slick({
                responsive: [{
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false,
                            fade: false,
                            cssEase: 'linear',
                            autoplay: false,
                            autoplaySpeed: 6000,
                            pauseOnHover: false,
                            speed: 795,
                            adaptiveHeight: false,
                            swipeToSlide: true
                        }
                    },
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false,
                            arrows: false,
                            fade: false,
                            cssEase: 'linear',
                            autoplay: false,
                            autoplaySpeed: 6000,
                            pauseOnHover: false,
                            speed: 795,
                            adaptiveHeight: false,
                            swipeToSlide: true
                        }
                    }
                ]
            });
        }
        slick1.on('afterChange	', function (event) {
            //if(doImagesExist) {
            //////BackgroundCheck.refresh();
            //}
            //console.log("test");
            // left
        });
        var draggableEle = $("#relateddraggable");

        function relatedNext() {
            slick1.slick("slickNext");
        }

        function relatedPrev() {
            slick1.slick("slickPrev");
        }

        function dragFunction() {
            console.log(slick1speed);
            if ((-1 > slick1speed) && (slick1speed > -65)) {
                relatedPrev();
                //console.log("next");
            }
            if ((1 < slick1speed) && (slick1speed < 65)) {
                relatedNext();
                //console.log("next");
            }
        }
        if (draggableEle.length > 0) {
            //alert("related drag enabled");
            //alert(draggableEle);
            draggableEnabled = true;
            draggable = new PlainDraggable(document.getElementById('relateddraggable'));
            draggable.onDrag = function (newPosition) {
                //alert(draggableEle)
                didDrag = true;
                if (newPosition.left > this.rect.left) {
                    //console.log(newPosition);
                    didDrag = true;
                    //newPosition.left = this.rect.left + 48; // Move it 48px to the right forcibly.
                }
                var transformMatrix = draggableEle.css("-webkit-transform") ||
                    draggableEle.css("-moz-transform") ||
                    draggableEle.css("-ms-transform") ||
                    draggableEle.css("-o-transform") ||
                    draggableEle.css("transform");
                //console.log(transformMatrix);
                var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
                var x = matrix[12] || matrix[4]; //translate x
                slick1speed = x;
            };
            draggable.onDragEnd = function (newPosition) {
                var transformMatrix = draggableEle.css("-webkit-transform") ||
                    draggableEle.css("-moz-transform") ||
                    draggableEle.css("-ms-transform") ||
                    draggableEle.css("-o-transform") ||
                    draggableEle.css("transform");
                var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
                var x = matrix[12] || matrix[4]; //translate x
                draggable.left -= x;
                didDrag = false;
            };
        }
        /*var draggableEleImage = $("#imagedraggable");
        if(draggableEleImage.length > 0) {
            draggableGalleryEnabled = true;
            draggableGallery = new PlainDraggable(document.getElementById('imagedraggable'));
        }*/
        var imageDraggable = $("#imagedragtest");
        if (imageDraggable.length > 0) {
            draggableGalleryEnabled = true;
            draggableGallery = new PlainDraggable(document.getElementById('imagedraggable'));
            var currentPosOfDrag = 55;
            //$(window).on("resize", doResizeDrag);
            $('.wrap').imagedrag({
                input: "#output",
                attribute: "value",
                position: 'middle',
                cursor: 'move',
                test: draggableGallery
            });
            //$("body").addClass("draggable-exists");
            draggableGallery.left = 0;
            var defaultDragPos = $(".imagedraggable.plain-draggable").offset().left;
            var imageThatsDraggable = $(".ui-draggable.ui-draggable-handle");
            var dataMax = imageThatsDraggable.attr('data-max');
            $(window).on("resize", function () {
                if ($(".imagedraggable.plain-draggable").length > 0) {
                    defaultDragPos = $(".imagedraggable.plain-draggable").offset().left;
                    dataMax = imageThatsDraggable.attr('data-max');
                }
                //console.log(defaultDragPos);
            });
            //console.log(imageThatsDraggable.attr('data-max'));
            //console.log(defaultDragPos);
            draggableGallery.onMove = function (newPosition) {
                var currentStep = (newPosition.left - defaultDragPos);
                //console.log(currentStep);
                if (currentStep == 0) {
                    var moveItTo = 0;
                } else {
                    var moveItTo = (dataMax / 128) * currentStep;
                }
                //console.log(moveItTo);
                imageThatsDraggable.css('left', moveItTo);
            };
            //console.log()
        }
        $("#contactform_button").click(function () {

            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            var name = $("#contact_name");

            var email = $("#contact_email");
            //var phone = $("#contact_phone");

            var msg = $("#contact_msg");

            //////var country = $('#send_form_here .dropdown');

            //console.log(country);

            //var text = $("#contact_text");

            var wpnonce = $("#send_form_here #_wpnonce");

            console.log("nonce is: " + wpnonce.val());

            if ($('#contact_checkbox').is(':checked')) {
                var isChecked = true;
            } else {
                var isChecked = false;
            }

            if (!isChecked) {

                console.log("not checked");

                if (name.val() && email.val() && msg.val() && validateEmail(email.val())) {
                    var data = {
                        'action': 'send_form_here',
                        _wpnonce: wpnonce.val(),
                        contact_name: name.val(),
                        contact_email: email.val(),
                        contact_msg: msg.val(),
                        //////contact_country: country.text().trim(),
                        //contact_text: text.val(),
                        //contact_phone: phone.val(),
                        _wp_http_referer: $('input[name="_wp_http_referer"]').val()
                    };
                    $.post(ajaxurl, data, function (data) {
                        console.log(data);
                        if (data == 2) {
                            swal({
                                title: "Hold it!",
                                text: "We still need:<br><br>A valid email address",
                                html: true,
                                type: "error",
                                confirmButtonText: "Ok"
                            });
                            $(".sa-error-container").click(function () {
                                swal.close();
                            });
                        } else if (data == 3) {
                            alert("Sorry, message has not been sent, some error during sending occurred.")
                        } else {

                            name.val("");

                            email.val("");

                            msg.val("");

                            //////country.text('pick a region');

                            //phone.val("");

                            //text.val("");

                            $('#contact_checkbox').attr('checked', false);

                            //$(".cta-box").addClass('done');

                            swal("Thank you!", "Your message has been sent.", "success");

                            $(".sa-error-container").click(function () {
                                swal.close();
                            });

                            __gaTracker('send', 'event', 'interaction', 'click', 'contact-sent', true, true);

                        }

                    });

                } else {

                    var error = "We still need:<br>";

                    if (!name.val()) {

                        error = error + "<br>Your name"

                    }

                    if (!email.val()) {

                        error = error + "<br>A valid email address"

                    } else if (!validateEmail(email.val())) {
                        error = error + "<br>A valid email address"
                    }

                    if (!msg.val()) {

                        error = error + "<br>A message"

                    }

                    swal({
                        title: "Hold it!",
                        text: error,
                        html: true,
                        type: "error",
                        confirmButtonText: "Ok"
                    });
                    $(".sa-error-container").click(function () {
                        swal.close();
                    });

                }

            } else {

                console.log("was checked");

                if (name.val() && email.val() && msg.val() && validateEmail(email.val())) {
                    swal({
                            title: "",
                            text: "Thanks for entering your details. Please press submit to confirm you're happy for us to contact you regarding Underscore news, events and updates.",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Submit",
                            cancelButtonText: "",
                            closeOnConfirm: false,
                            closeOnCancel: false
                        },
                        function () {
                            var data = {
                                'action': 'send_form_here',
                                _wpnonce: wpnonce.val(),
                                contact_name: name.val(),
                                contact_email: email.val(),
                                contact_msg: msg.val(),
                                //////contact_country: country.text().trim(),
                                //contact_text: text.val(),
                                //contact_phone: phone.val(),
                                _wp_http_referer: $('input[name="_wp_http_referer"]').val()
                            };
                            $.post(ajaxurl, data, function (data) {
                                console.log(data);
                                if (data == 2) {
                                    swal({
                                        title: "Hold it!",
                                        text: "We still need:<br><br>A valid email address",
                                        html: true,
                                        type: "error",
                                        confirmButtonText: "Ok"
                                    });
                                    $(".sa-error-container").click(function () {
                                        swal.close();
                                    });
                                } else if (data == 3) {
                                    alert("Sorry, message has not been sent, some error during sending occurred.")
                                } else {

                                    name.val("");

                                    email.val("");

                                    msg.val("");

                                    //////country.text('pick a region');

                                    //phone.val("");

                                    //text.val("");

                                    $('#contact_checkbox').attr('checked', false);

                                    //$(".cta-box").addClass('done');

                                    //$("#contact-form .input-here.focused").removeClass('focused');

                                    swal("Thank you!", "Your message has been sent.", "success");

                                    $(".sa-error-container").click(function () {
                                        swal.close();
                                    });

                                    __gaTracker('send', 'event', 'interaction', 'click', 'contact-sent', true, true);

                                }

                            });
                            var data = {
                                'action': 'subscribe_newsletter',
                                _wpnonce: $(".newsletter-form #_wpnonce").val(),
                                email: email.val(),
                                _wp_http_referer: $('input[name="_wp_http_referer"]').val()
                            };
                            $.post(ajaxurl, data, function (data) {


                            });
                        });
                    $(".sa-error-container").click(function () {
                        swal.close();
                    });

                } else {

                    var error = "We still need:<br>";

                    if (!name.val()) {

                        error = error + "<br>Your name"

                    }

                    if (!email.val()) {

                        error = error + "<br>A valid email address"

                    } else if (!validateEmail(email.val())) {
                        error = error + "<br>A valid email address"
                    }

                    if (!msg.val()) {

                        error = error + "<br>A message"

                    }

                    swal({
                        title: "Hold it!",
                        text: error,
                        html: true,
                        type: "error",
                        confirmButtonText: "Ok"
                    });
                    $(".sa-error-container").click(function () {
                        swal.close();
                    });

                }
            }

        });

        /* newsletter form below */

        $("#newsletteremailsubmit").click(function () {

            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            var email = $("#newsletteremail");

            var wpnonce = $(".newsletter-form #_wpnonce");

            console.log(wpnonce.val());

            if (email.val() && validateEmail(email.val())) {

                swal({
                        title: "",
                        text: "Thanks for entering your details. Please press submit to confirm you're happy for us to contact you regarding Underscore news, events and updates.",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Submit",
                        cancelButtonText: "",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function () {
                        var data = {
                            'action': 'subscribe_newsletter',
                            _wpnonce: wpnonce.val(),
                            email: email.val(),
                            _wp_http_referer: $('input[name="_wp_http_referer"]').val()
                        };
                        $.post(ajaxurl, data, function (data) {
                            console.log(data);
                            if (data == 2) {
                                swal({
                                    title: "Hold it!",
                                    text: "We still need:<br><br>A valid email address",
                                    html: true,
                                    type: "error",
                                    confirmButtonText: "Ok"
                                });
                                $(".sa-error-container").click(function () {
                                    swal.close();
                                });
                            } else if (data == 3) {
                                alert("Sorry, message has not been sent, some error during sending occurred.")
                            } else {

                                email.val("");

                                //$(".newsletter-form").addClass('done');

                                swal("Thank you!", "Your have been subscribed.", "success");

                                $(".sa-error-container").click(function () {
                                    swal.close();
                                });

                                __gaTracker('send', 'event', 'interaction', 'click', 'newsletter-sent', true, true);

                            }

                        });
                    });
                $(".sa-error-container").click(function () {
                    swal.close();
                });

            } else {

                swal({
                    title: "Hold it!",
                    text: "We still need:<br><br>A valid email address",
                    html: true,
                    type: "error",
                    confirmButtonText: "Ok"
                });
                $(".sa-error-container").click(function () {
                    swal.close();
                });

            }

        });

        /*$(".view-more-here").click(function(){
            $(this).hide();
            $(".view-more-in-here .col").show();
        });
        
        $(".view-more-here2").click(function(){
            $(this).hide();
            $(this).next().show();
            $(".view-more-in-here .col").show();
        });
        $(".scroll-to-form").click(function(){
            var scrollToObj = $("#contact-form-scroll-here");
            console.log("test44");
            if(detectIE()) {
                setTimeout(function(){ scrollToService2(scrollToObj); }, 100);
            } else {
                scrollToService2(scrollToObj);
            }
        });*/
        $(".toemail").on("click", function () {
            scrollToService2($("#scrolltoherecontact"));
        });

        if (!detectIE()) {

            if ($(".onebyone").length > 0) {


                //var didItPlay = false;
                var tl = new TimelineLite;
                //mySplitText = new SplitText(".onebyone", {type:"words,chars"}), 
                var chars = [];
                $(".onebyone > *").each(function (index, elem) {
                    chars.push($(this));
                });

                TweenLite.set(".onebyone", {
                    perspective: 400
                });

                $(".tweenmax1").hover(
                    function () {
                        //$( this ).append( $( "<span> ***</span>" ) );
                        //if(!didItPlay) {
                        /*for (i = 0; i < chars.length; ++i) {
                            tl
                            .to(chars[i], 0.5, {y:-5, transformOrigin:"0% 50% -50",  ease:Back.easeOut})
                                .to(chars[i], 0.5, {y:0, transformOrigin:"0% 50% -50",  ease:Back.easeOut});
                        }*/
                        tl.staggerFromTo(chars, 0.5, {
                                y: 0,
                                transformOrigin: "0% 50% -50",
                                ease: Back.easeInOut
                            }, {
                                y: -10,
                                transformOrigin: "0% 50% -50",
                                ease: Back.easeInOut
                            }, 0.02, "+=0")
                            .staggerFromTo(chars, 0.5, {
                                y: -10,
                                transformOrigin: "0% 50% -50",
                                ease: Back.easeInOut
                            }, {
                                y: 0,
                                transformOrigin: "0% 50% -50",
                                ease: Back.easeInOut
                            }, 0.02, "+=0");
                        //didItPlay = true;
                        //}
                    },
                    function () {
                        //$( this ).find( "span:last" ).remove();
                    }
                );
            }

        }

        if ($(".fromhere.style42").length > 0) {
            $(".fromhere.style42 strong").each(function (index, elem) {
                $(this).parent().parent().parent().prev().find('.tohere').text($(this).text());
                //var stringToChange = $(this).parent().html();
                //stringToChange = stringToChange.replace(/\s\s+/g, ' ');
                //stringToChange = stringToChange.replace('', '');
                //stringToChange = stringToChange.replace('  ', ' ');
                //console.log(stringToChange);


                //$(this).parent().html(stringToChange)

            });
        }

        $(".uncovered-filters").on("click", function () {
            $(".filter-area-here").addClass("filters-opened");
        });
        $(".uncovered-popup .close-button").on("click", function () {
            $(".filter-area-here").removeClass("filters-opened");
        });
        if (detectIE()) {
            $("body").addClass("ie-detected");
            //alert("ie");
        } else {
            //alert("not");
        }
        var offsetvar = -$(window).height() / 2;
        controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                reverse: false
            }
        });
        $(".animated-el:not(.disable), .animated-el2, .animated-el3, .lineleft, .lineleft2, .style41 .special, .testimonialbg, .content-row.title").each(function (index, elem) {
            new ScrollMagic.Scene({
                    offset: offsetvar,
                    triggerElement: elem
                })
                .on('start', function () {
                    //console.log("passed trigger");
                    setTimeout(function () {
                        //////BackgroundCheck.set('targets', '.bg-check');
                        //console.log("qqqq");
                        setTimeout(function () {
                            //uncoveredArticleImages();
                            //////BackgroundCheck.refresh();
                        }, 1000);
                    }, 1000);
                })
                .setClassToggle(elem, "active")
                .addTo(controller)
            //.addIndicators()
            ;
        });
        if ($("#trigger1").length > 0) {
            isAboutSlidesEnabled = true;
            controller2 = new ScrollMagic.Controller();
            var windowsize = $(window).width();
            if (windowsize > 599) {
                var durationHelperIs = 4 * $(window).height();
            } else {
                var durationHelperIs = 0;
            }
            scene = new ScrollMagic.Scene({
                    triggerElement: "#trigger1",
                    triggerHook: 0,
                    reverse: true,
                    duration: durationHelperIs
                })
                .setPin("#pin1")
                .addTo(controller2);
            slideCache = 0;
            currentSlide = 0;
            scene.on("end", aboutSlidesLeave);
            scene.on("start", aboutSlidesEnter);
            //function callback (event) {
            //    console.log("Event fired! (" + event.type + ")");
            //}
            //scene.on("change update progress start end enter leave", callback);
            scene.on("progress", aboutSlides);
            var duration = scene.duration();
            console.log(duration);
            $(window).on("resize", aboutSlidesResize);
        }
        /*if($(".animationenabledhere").length > 0) {
            var isHomepageAnimEnabled = true;
            controller4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
            
            
            $(".animationenabledhere").each(function (index, elem) {
                sceneOrder++;
                
                var elem2 = $(this).find('.tobeanimated');
                var duration = ($(window).height() * 2 / 3) + 100 + ($(window).width() * 0.3125);
                console.log(duration);
                var offsetvar2 = - $(window).height() /3;
                sceneHolder[sceneOrder] = new ScrollMagic.Scene({
                        duration: duration,
                        reverse: true,
                        triggerElement: elem,
                        offset: offsetvar2
                    })
                    .setTween(elem2, {y: "35%", ease: Linear.easeNone})
                    .addTo(controller4)
                    ;
           });
        }*/
        if ($(".underworld-post").length > 0) {
            //console.log("test");
            isUnderworldEnabled = true;
            $('.enable_hover_description').on('click', function (e) {
                $(this).toggleClass("opened-block");
            });
            controller3 = new ScrollMagic.Controller({
                globalSceneOptions: {
                    reverse: true
                }
            });
            $("body:not(.template-home) .underworld-post:not(.disable-this) .image-here, body:not(.template-home):not(.template-process) .quote-scroll").each(function (index, elem) {
                //var sceneHolder;
                //var sceneOrder = 0;
                sceneOrder++;

                //console.log("test");
                var elem2 = $(this).find('.tween');
                if ($(this).hasClass("quote-scroll")) {
                    var randomY = 200 + "px";
                } else if ($(this).hasClass("img1")) {
                    //var randomY = getRandomInt(200) + 201 + "px";
                    var randomY = 100 + "px";
                    //var duration = ($(window).height() * 2 / 3) + 100 + $(this).outerHeight( true );
                } else {
                    var randomY = 300 + "px";
                    //var duration = ($(window).height() * 2 / 3) + 300 + $(this).outerHeight( true );
                }
                var duration = ($(window).height() * 2 / 3) + 100 + ($(window).width() * 0.3125);
                console.log(duration);
                var offsetvar2 = -$(window).height() / 3;
                sceneHolder[sceneOrder] = new ScrollMagic.Scene({
                        duration: duration,
                        reverse: true,
                        triggerElement: elem,
                        offset: offsetvar2
                    })
                    .on("enter", function () {
                        elem2.addClass("visible");
                    })
                    .on("leave", function () {
                        elem2.removeClass("visible");
                    })
                    .setTween(elem2, {
                        y: randomY,
                        ease: Linear.easeNone
                    })
                    .addTo(controller3)
                //.addIndicators()
                ;
                $(window).on("resize", underworldsResize);
            });
        }
        if ($(".underworld-loadmore").length > 0) {
            console.log("underworld index page");
            var preload = 10;
            var preloadBy = 10;
            var defaultGrid = $('.underworld-area');
            var fullGrid = $('.full-underworld-grid > *');
            var storedFullGrid = [];
            fullGrid.each(function () {
                storedFullGrid.push($(this)[0].outerHTML);
            });
            //console.log(storedFullGrid);
            for (var i = 0; i < preload; i++) {
                storedFullGrid.shift();
            }
            //	console.log(storedFullGrid);
            $(".underworld-load").on('click', function (event) {
                event.preventDefault();
                console.log("load pls");
                console.log(storedFullGrid.length);
                if (storedFullGrid.length > preloadBy) {

                } else {
                    $('.hide-load-more').hide();
                }
                for (var i = 0; i < preloadBy; i++) {
                    defaultGrid.append(storedFullGrid[0]);
                    storedFullGrid.shift();
                }
                //hide-load-more
                $('.underworld-area .underworld-post.disable-this.newly-added').removeClass("disable-this");
                $('.underworld-area .underworld-post.newly-added img.not-loaded').each(function () {
                    $(this).removeClass('not-loaded').attr('src', $(this).attr('data-src'));
                });
                $('.underworld-area .underworld-post.newly-added .video-to-load-here').each(function () {
                    $(this).attr('poster', $(this).attr('data-poster'))
                    $(this).html('<source src="' + $(this).attr('data-source') + '" type="video/mp4"></source>');
                    $(this)[0].load();
                    $(this)[0].play();
                });
                //video.html('<source src="'+realSource+'" type="video/mp4"></source>' );
                //console.log(storedFullGrid);
                controller3 = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        reverse: true
                    }
                });
                $(".underworld-post.newly-added:not(.disable-this) .image-here, .underworld-post.newly-added:not(.disable-this) .quote-scroll").each(function (index, elem) {
                    //var sceneHolder;
                    //var sceneOrder = 0;
                    sceneOrder++;

                    //console.log("test");
                    var elem2 = $(this).find('.tween');
                    if ($(this).hasClass("img1")) {
                        //var randomY = getRandomInt(200) + 201 + "px";
                        var randomY = 100 + "px";
                        //var duration = ($(window).height() * 2 / 3) + 100 + $(this).outerHeight( true );
                    } else {
                        var randomY = 300 + "px";
                        //var duration = ($(window).height() * 2 / 3) + 300 + $(this).outerHeight( true );
                    }
                    var duration = ($(window).height() * 2 / 3) + 100 + ($(window).width() * 0.3125);
                    //console.log(duration);
                    var offsetvar2 = -$(window).height() / 3;
                    sceneHolder[sceneOrder] = new ScrollMagic.Scene({
                            duration: duration,
                            reverse: true,
                            triggerElement: elem,
                            offset: offsetvar2
                        })
                        .on("enter", function () {
                            elem2.addClass("visible");
                        })
                        .on("leave", function () {
                            elem2.removeClass("visible");
                        })
                        .setTween(elem2, {
                            y: randomY,
                            ease: Linear.easeNone
                        })
                        .addTo(controller3)
                    //.addIndicators()
                    ;
                    $(window).on("resize", underworldsResize);
                });
                $('.underworld-area .underworld-post.newly-added').removeClass("newly-added");
                var windowsize = $(window).width();
                //if (windowsize > 1024 && !detectIE()) {
                //if (!detectIE()) {
                if (navigator.userAgent.indexOf('MSIE') !== -1 ||
                    navigator.appVersion.indexOf('Trident/') > 0) {} else {
                    const zoomIs = mediumZoom('body:not(.template-about-us):not(.page-contact):not(.template-home):not(.template-process) .underworld-post img', {
                        margin: 0,
                        background: '#000',
                        scrollOffset: 0,
                        metaClick: true
                    });
                }
                //}
            })
        }
        if ($(".stat-top-text").length > 0) {
            var EndNumber2 = parseInt($(".stat-top-text").text());
            var demo = new CountUp('stat-top-text', 0, EndNumber2, 0, 2, optionsforstat);
            if (!demo.error) {
                demo.start();
            } else {
                console.error(demo.error);
            }
        }
        //$("body").addClass("loaded-website");
        if (mobilecheck()) {
            var swipingIs = false;
        } else {
            var swipingIs = true;
        }
        $(".bottom-arrow:not(.bottom-arrow3):not(.next):not(.special-block), .bottom-arrow2:not(.next)").on("click", function (e) {
            console.log("arrow clicked2");
            var winHeight = $(window).height();
            $('html,body').animate({
                scrollTop: winHeight
            }, 'slow', $.bez(bezierEasing));
        });
        $(".bottom-arrow.next").on("click", function (e) {
            console.log("arrow clicked");
            var scrollToVar = $(this).parent().next().offset().top;
            //alert("testie");
            //var winHeight = $(window).height();
            $('html,body').animate({
                scrollTop: scrollToVar
            }, 'slow', $.bez(bezierEasing));
        });
        $(".bottom-arrow.special-block:not(.notclickableone)").on("click", function (e) {
            console.log("arrow clicked33");
            var scrollToVar = $(this).parent().next().offset().top;
            //alert("testie");
            //var winHeight = $(window).height();
            $('html,body').animate({
                scrollTop: scrollToVar
            }, 'slow', $.bez(bezierEasing));
        });

        $(".arrowhere").on("click", function (e) {
            var scrollToVar = $(window).height();
            //alert("testie");
            //var winHeight = $(window).height();
            $('html,body').animate({
                scrollTop: scrollToVar
            }, 'slow', $.bez(bezierEasing));
        });

        $(".bottom-arrow2.next").on("click", function (e) {
            console.log("arrow clicked");
            var scrollToVar = $(this).parent().parent().parent().next().offset().top;
            //alert("testie");
            //var winHeight = $(window).height();
            $('html,body').animate({
                scrollTop: scrollToVar
            }, 'slow', $.bez(bezierEasing));
        });
        $(".nav-toggle").on('click', function (e) {
            //console.log("testtt");
            $("body").toggleClass("mobile-menu-active");
            $("header").removeClass("hidden");
        });
        $('.nav-helper').on('click', function (e) {
            $("body").removeClass("mobile-menu-active");
            $("header").removeClass("hidden");
        });
        $(".scroll-to-search").on('click', function (e) {
            //$('html,body').animate({ scrollTop: 0 }, 'slow');
            //var scrollToVar = $('#scrollsearchhere').offset().top + 1;
            //$('html,body').animate({ scrollTop: scrollToVar - 78 }, 'slow', $.bez(bezierEasing));
            //return false;
            scrollToService2($("#scrollsearchhere"));
        });
        $(".scroll-to-top").on('click', function (e) {
            //$('html,body').animate({ scrollTop: 0 }, 'slow');
            $('html,body').animate({
                scrollTop: 0
            }, 'slow', $.bez(bezierEasing));
            return false;
        });

        /*if(detectIE()) {
            $('body.home .homepage-slides, body.template-our-work .homepage-slides').not('.slick-initialized').slick({
                responsive: [
                    {
                      breakpoint: 9999,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        autoplay: true,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        speed: 1000,
                        adaptiveHeight: false,
                      }
                    }
                  ]
            });
        } else {
            $('body.home .homepage-slides, body.template-our-work .homepage-slides').not('.slick-initialized').slick({
                responsive: [
                    {
                      breakpoint: 9999,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        autoplay: false,
                        autoplaySpeed: 4000,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        speed: 1000,
                        adaptiveHeight: false,
                      }
                    }
                  ]
            });
        }*/

        $('body.template-process .homepage-slides').not('.slick-initialized').slick({
            responsive: [{
                breakpoint: 9999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    fade: true,
                    cssEase: 'linear',
                    autoplay: false,
                    autoplaySpeed: 4000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    speed: 1000,
                    adaptiveHeight: false,
                }
            }]
        });

        $('body.template-uncovered .homepage-slides').not('.slick-initialized').slick({
            responsive: [{
                breakpoint: 9999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    fade: true,
                    cssEase: 'linear',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    speed: 1000,
                    adaptiveHeight: false,
                }
            }]
        });

        $('.three-slides').not('.slick-initialized').slick({
            responsive: [{
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                        fade: false,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 500,
                        adaptiveHeight: false,
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                        arrows: false,
                        fade: false,
                        cssEase: 'cubic-bezier(.5,.5,0,1)',
                        autoplay: false,
                        autoplaySpeed: 6000,
                        pauseOnHover: false,
                        speed: 500,
                        adaptiveHeight: false,
                    }
                }
            ]
        });
        /*$grid = $('.grid-isotope').isotope({
            // options
            itemSelector: '.grid-ele',
            layoutMode: 'packery',
            animationOptions: {
                duration: 0,
                transitionDuration: "0s",
                easing: 'cubic-bezier(.5,.5,0,1)',
                queue: false
           }
        });
        $grid2 = $('.grid-isotope2').isotope({
            // options
            itemSelector: '.grid-ele',
            layoutMode: 'packery',
            animationOptions: {
                duration: 0,
                transitionDuration: "0s",
                easing: 'cubic-bezier(.5,.5,0,1)',
                queue: false
           }
        });*/
        //fixGrids();
        /*$(".filter-news").on('click', function(e) {
            if($(this).hasClass( "active" )) {
            } else {
                var filterValue = $(this).attr('data-show');
                $(".filter-news.active").removeClass('active');
                $(this).addClass('active');
                $grid.isotope({
                    filter: filterValue
                });
                scrollToService($(".scroll-to-this-area"));
            }
        });*/
        if (!isAjaxLoading) {
            /*if(location.search.split('section=')[1]) {
                var goToServiceSlide = getQueryParam("section");
                var scrollToObj = $("#"+goToServiceSlide);
                $(".process-block").removeClass("opened");
                $(".accordion").hide();
                scrollToObj.addClass("opened");
                scrollToObj.children().children(".accordion").show();
                if(detectIE()) {
                    setTimeout(function(){ scrollToService(scrollToObj); }, 100);
                } else {
                    console.log("shall scroll");
                    scrollToService(scrollToObj);
                }
            } 
            if(location.search.split('filter=')[1]) {
                var goToServiceSlide = getQueryParam("filter");
                $(".filter-news").removeClass("active");
                $('[data-show="'+goToServiceSlide+'"]').addClass("active");
                $grid.isotope({
                    filter: goToServiceSlide
                });
            }*/
            ////console.log("testiiie");

            /*if(location.search.split('optionb=')[1]) {
                $("body.single-our-work .firstblockhere").show();
                $("body.single-our-work .style40").hide();
                $("body.single-our-work .style31").removeClass("regular-case");
                $("body.single-our-work .firsttest").show();
            }*/

            /*if(location.search.split('optionc=')[1]) {
                $(".homepage-slide-content .button, .homepage-slide-content .style30").hide();
            } else {
                $(".homepage-slide-title, .homepage-slide-content .style36").hide();
            }*/

            if (location.search.split('postid=')[1]) {
                var goToPostId = getQueryParam("postid");
                scrollToService($("#" + goToPostId));
            }
            if (location.search.split('playshowreel=')[1]) {
                //var goToPostId = getQueryParam("postid");
                //scrollToService($("#"+goToPostId));
                $('.button-to-popup2').trigger("click");
                //popupVideoInstance2 = player;
                //popupVideoInstance2.play();

            }

            //alert("first time load");
            isAjaxLoading = true;
        } else {
            //alert("second time loading");
        }
        var notAnimated = true;
        //
        uncoveredArticleImages();
        picturefill();
        objectFitImages();
        if ($("img, .image-here.cover").length > 0) {
            doImagesExist = true;
            if (!isBgCheckLoaded) {
                console.log("first page")
                isBgCheckLoaded = true;
                //////BackgroundCheck.init({
                /*targets: '.bg-check',
                      images: 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)',
                      threshold: 50,
                      maxDuration: 2000
                    });*/

            } else {
                console.log("other page");
                if ($("img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)").length > 0) {
                    //////BackgroundCheck.set('targets', '.bg-check');
                    //////BackgroundCheck.set('images', 'img:not(.not-loaded):not(.not-this-one), .image-here.cover:not(.not-loaded):not(.not-this-one)');
                }

            }
        }

        $('img').waitForImages(function () {
            console.log('All images have loaded.');
            if (doImagesExist) {
                //////////////BackgroundCheck.refresh();

            }
        }, function (loaded, count, success) {
            //console.log(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') +  '.');
            //$(this).addClass('loaded');
        });

    }

    function scrollToService(targetis) {
        if (targetis.length > 0) {
            var winWidth = $(window).width();
            if (winWidth < 600) {
                var scrollToVar = targetis.offset().top - 79;
                if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                    window.scrollTo(0, scrollToVar); // first value for left offset, second value for top offset
                } else {
                    if (detectIE()) {
                        scrollToVar = scrollToVar;
                    }
                    //$('html, body').stop().animate({
                    //    scrollTop: scrollToVar
                    //}, 500);
                    window.scrollTo(0, scrollToVar);
                }
            } else if (winWidth < 1025) {
                var scrollToVar = targetis.offset().top - 79;
                if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                    console.log("test scroll");
                    window.scrollTo(0, scrollToVar) // first value for left offset, second value for top offset
                } else {
                    if (detectIE()) {
                        scrollToVar = scrollToVar;
                    }
                    $('html, body').stop().animate({
                        scrollTop: scrollToVar
                    }, 0);
                }
            } else {
                var scrollToVar = targetis.offset().top - 79;
                if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                    console.log("test scroll");
                    window.scrollTo(0, scrollToVar) // first value for left offset, second value for top offset
                } else {
                    if (detectIE()) {
                        scrollToVar = scrollToVar;
                    }
                    $('html, body').stop().animate({
                        scrollTop: scrollToVar
                    }, 0);
                }
            }
            //var scrollToVar = targetis.offset().top-80;

        }
    }
    paceOptions = {
        ajax: false,
        document: false,
        eventLag: false
    };
    onReadyFunction();

    //$(document).ready(function(){
    //console.log("ready");
    //fixGrids();
    //});
    if (detectIE()) {
        $(window).trigger('resize');
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
            var evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));

        }
        //alert("its ie");
        /*$(document).ready(function(){
            var queryString = '?reload=' + new Date().getTime();
            $('#tsl-style-css').each(function () {
                this.href = this.href.replace(/\?.*|$/, queryString);
            });
        });*/
    } else {
        var $bodytrue = $("body");
        var $body = $('html, body');
        var $page = $('#mainid'),
            options = {
                repeatDelay: 500,
                debug: false,
                allowFormCaching: false,
                blacklist: '.no-smoothState, .post-content a',
                loadingClass: 'is-loading',
                prefetch: false,
                prefetchOn: "mouseover touchstart",
                prefetchBlacklist: ".no-prefetch",
                cacheLength: 0,
                scroll: true,
                onStart: {
                    duration: 400,
                    render: function ($container) {
                        console.log("start");
                        $bodytrue.css("overflow", "");
                        $bodytrue.removeClass("form-active").removeClass("mobile-menu-active").addClass('is-exiting');
                        smoothState.restartCSSAnimations();
                        if (draggableEnabled) {
                            draggable.remove()
                        }
                        if (draggableGalleryEnabled) {
                            draggableGallery.remove();
                            //$("body").removeClass("draggable-exists");
                            $("body").attr('data-slide', '');
                            //$(".wrap img").draggable( 'disable' );
                            //$('.wrap').imagedrag('remove');
                            //$(window).off("resize", doResizeImageDrag);
                            //
                            //$(window).off("resize", doResizeDrag);
                        }
                        clearInterval(interval1);
                        clearInterval(interval2);
                        $(window).off("scroll", didScrollFunction);
                        if (isAboutSlidesEnabled) {
                            isAboutSlidesEnabled = false;
                            $(window).off("resize", aboutSlidesResize);
                            scene.off("end", aboutSlidesLeave);
                            scene.off("start", aboutSlidesEnter);
                            scene.off("progress", aboutSlides);
                        }

                        if (isUnderworldEnabled) {
                            isUnderworldEnabled = false;
                            $(window).off("resize", underworldsResize);
                        }

                        //if(tilt) {
                        //    tilt.methods.destroy.call(tilt);
                        //}
                    }
                },
                onReady: {
                    duration: 0,
                    render: function ($container, $newContent) {
                        console.log("end");
                        $container.html($newContent);
                        var classesToCopy = $("#mainid > div").attr("class");
                        $bodytrue.attr("class", classesToCopy).addClass("is-ready");
                        //window.scrollTo(0,0);
                        onReadyFunction();
                    }
                },
                onAfter: function ($container, $newContent) {
                    console.log("after");
                    //$(".pace-inactive.pace-inactive").remove();
                    $bodytrue.removeClass('is-exiting').removeClass('is-ready');
                    /*if(location.search.split('section=')[1]) {
                        console.log("section after");
                        var goToServiceSlide = getQueryParam("section");
                        var scrollToObj = $("#"+goToServiceSlide);
                        $(".process-block").removeClass("opened");
                        $(".accordion").hide();
                        scrollToObj.addClass("opened");
                        scrollToObj.children().children(".accordion").show();
                        scrollToService(scrollToObj);
                        
                    }
                    if(location.search.split('filter=')[1]) {
                        var goToServiceSlide = getQueryParam("filter");
                        $(".filter-news").removeClass("active");
                        $('[data-show="'+goToServiceSlide+'"]').addClass("active");
                        $grid.isotope({
                            filter: goToServiceSlide
                        });
                    }*/
                    if (location.search.split('postid=')[1]) {
                        var goToPostId = getQueryParam("postid");
                        scrollToService($("#" + goToPostId));
                    }
                    if (location.search.split('playshowreel=')[1]) {
                        //var goToPostId = getQueryParam("postid");
                        //scrollToService($("#"+goToPostId));
                        $('.button-to-popup2').trigger("click");
                        //popupVideoInstance2 = player;
                        //popupVideoInstance2.play();

                    }
                    if (myFunction4()) {
                        __gaTracker('send', 'pageview', window.location.pathname || url);
                    } else {
                        console.log("ga not tracking");
                    }

                }
            },
            smoothState = $page.smoothState(options).data('smoothState');
    }
})(jQuery);
/*! pace 1.0.2 */
(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function (a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        $ = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    for (u = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, C = function () {
            var a;
            return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
        }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) {
            return setTimeout(a, 50)
        }, t = function (a) {
            return clearTimeout(a)
        }), G = function (a) {
            var b, c;
            return b = C(), (c = function () {
                var d;
                return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
                    return E(c)
                })) : setTimeout(c, 33 - d)
            })()
        }, F = function () {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
        }, v = function () {
            var a, b, c, d, e, f, g;
            for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b
        }, q = function (a) {
            var b, c, d, e, f;
            for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
            return c / b
        }, x = function (a, b) {
            var c, d, e;
            if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                if (c = e.getAttribute("data-pace-" + a), !b) return c;
                try {
                    return JSON.parse(c)
                } catch (f) {
                    return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                }
            }
        }, g = function () {
            function a() {}
            return a.prototype.on = function (a, b, c, d) {
                var e;
                return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                    handler: b,
                    ctx: c,
                    once: d
                })
            }, a.prototype.once = function (a, b, c) {
                return this.on(a, b, c, !0)
            }, a.prototype.off = function (a, b) {
                var c, d, e;
                if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                    if (null == b) return delete this.bindings[a];
                    for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                    return e
                }
            }, a.prototype.trigger = function () {
                var a, b, c, d, e, f, g, h, i;
                if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                    for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                    return i
                }
            }, a
        }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function (a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }
        return Z(b, a), b
    }(Error), b = function () {
        function a() {
            this.progress = 0
        }
        return a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function () {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function (a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function () {
            return this.progress >= 100
        }, a
    }(), h = function () {
        function a() {
            this.bindings = {}
        }
        return a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function (a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype) try {
            e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, {
                get: function () {
                    return b.prototype[d]
                },
                configurable: !0,
                enumerable: !0
            }) : a[d] = b.prototype[d] : void 0)
        } catch (f) {
            c = f
        }
        return e
    }, A = [], j.ignore = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function (a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function (a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function (a) {
                var b;
                return b = a.open, a.open = function (d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function (b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function () {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function (a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {}
            }
        }
        return Z(b, a), b
    }(h), R = null, y = function () {
        return null == R && (R = new k), R
    }, I = function (a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function (b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function () {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function () {
                return a.watch.apply(a, arguments)
            })
        }
        return a.prototype.watch = function (a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function () {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function (a) {
                        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                    }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function () {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }
        return a
    }(), n = function () {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
                return f.progress = 100
            }, !1)
        }
        return a
    }(), d = function () {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }
        return a
    }(), e = function () {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }
        return a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function () {
            return this.progress = 100
        }, a
    }(), c = function () {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function () {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }
        return a
    }(), m = function () {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }
        return a.prototype.tick = function (a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function () {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function () {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function () {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function (a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function () {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);