!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(t, e, n) {
    "use strict";
    var i = function(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
      , r = function(t) {
        var e;
        return 1 === t.length && (e = t,
        t = function(t, n) {
            return i(e(t), n)
        }
        ),
        {
            left: function(e, n, i, r) {
                for (null == i && (i = 0),
                null == r && (r = e.length); i < r; ) {
                    var a = i + r >>> 1;
                    t(e[a], n) < 0 ? i = a + 1 : r = a
                }
                return i
            },
            right: function(e, n, i, r) {
                for (null == i && (i = 0),
                null == r && (r = e.length); i < r; ) {
                    var a = i + r >>> 1;
                    t(e[a], n) > 0 ? r = a : i = a + 1
                }
                return i
            }
        }
    };
    var a = r(i);
    a.right,
    a.left;
    var o = Array.prototype;
    o.slice,
    o.map,
    Math.sqrt(50),
    Math.sqrt(10),
    Math.sqrt(2);
    var f = function(t) {
        for (var e, n, i, r = t.length, a = -1, o = 0; ++a < r; )
            o += t[a].length;
        for (n = new Array(o); --r >= 0; )
            for (e = (i = t[r]).length; --e >= 0; )
                n[--o] = i[e];
        return n
    };
    Array.prototype.slice;
    var c = {
        value: function() {}
    };
    function u() {
        for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in i)
                throw new Error("illegal type: " + t);
            i[t] = []
        }
        return new s(i)
    }
    function s(t) {
        this._ = t
    }
    function h(t, e) {
        for (var n, i = 0, r = t.length; i < r; ++i)
            if ((n = t[i]).name === e)
                return n.value
    }
    function l(t, e, n) {
        for (var i = 0, r = t.length; i < r; ++i)
            if (t[i].name === e) {
                t[i] = c,
                t = t.slice(0, i).concat(t.slice(i + 1));
                break
            }
        return null != n && t.push({
            name: e,
            value: n
        }),
        t
    }
    s.prototype = u.prototype = {
        constructor: s,
        on: function(t, e) {
            var n, i, r = this._, a = (i = r,
            (t + "").trim().split(/^|\s+/).map(function(t) {
                var e = ""
                  , n = t.indexOf(".");
                if (n >= 0 && (e = t.slice(n + 1),
                t = t.slice(0, n)),
                t && !i.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                }
            })), o = -1, f = a.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e)
                    throw new Error("invalid callback: " + e);
                for (; ++o < f; )
                    if (n = (t = a[o]).type)
                        r[n] = l(r[n], t.name, e);
                    else if (null == e)
                        for (n in r)
                            r[n] = l(r[n], t.name, null);
                return this
            }
            for (; ++o < f; )
                if ((n = (t = a[o]).type) && (n = h(r[n], t.name)))
                    return n
        },
        copy: function() {
            var t = {}
              , e = this._;
            for (var n in e)
                t[n] = e[n].slice();
            return new s(t)
        },
        call: function(t, e) {
            if ((n = arguments.length - 2) > 0)
                for (var n, i, r = new Array(n), a = 0; a < n; ++a)
                    r[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (a = 0,
            n = (i = this._[t]).length; a < n; ++a)
                i[a].value.apply(e, r)
        },
        apply: function(t, e, n) {
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (var i = this._[t], r = 0, a = i.length; r < a; ++r)
                i[r].value.apply(e, n)
        }
    };
    var d = u
      , _ = "http://www.w3.org/1999/xhtml"
      , p = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: _,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }
      , b = function(t) {
        var e = t += ""
          , n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        p.hasOwnProperty(e) ? {
            space: p[e],
            local: t
        } : t
    };
    var y = function(t) {
        var e = b(t);
        return (e.local ? function(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        : function(t) {
            return function() {
                var e = this.ownerDocument
                  , n = this.namespaceURI;
                return n === _ && e.documentElement.namespaceURI === _ ? e.createElement(t) : e.createElementNS(n, t)
            }
        }
        )(e)
    };
    function v() {}
    var g = function(t) {
        return null == t ? v : function() {
            return this.querySelector(t)
        }
    };
    function x() {
        return []
    }
    var m = function(t) {
        return null == t ? x : function() {
            return this.querySelectorAll(t)
        }
    }
      , w = function(t) {
        return function() {
            return this.matches(t)
        }
    }
      , M = function(t) {
        return new Array(t.length)
    };
    function k(t, e) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = e
    }
    k.prototype = {
        constructor: k,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var T = "$";
    function N(t, e, n, i, r, a) {
        for (var o, f = 0, c = e.length, u = a.length; f < u; ++f)
            (o = e[f]) ? (o.__data__ = a[f],
            i[f] = o) : n[f] = new k(t,a[f]);
        for (; f < c; ++f)
            (o = e[f]) && (r[f] = o)
    }
    function A(t, e, n, i, r, a, o) {
        var f, c, u, s = {}, h = e.length, l = a.length, d = new Array(h);
        for (f = 0; f < h; ++f)
            (c = e[f]) && (d[f] = u = T + o.call(c, c.__data__, f, e),
            u in s ? r[f] = c : s[u] = c);
        for (f = 0; f < l; ++f)
            (c = s[u = T + o.call(t, a[f], f, a)]) ? (i[f] = c,
            c.__data__ = a[f],
            s[u] = null) : n[f] = new k(t,a[f]);
        for (f = 0; f < h; ++f)
            (c = e[f]) && s[d[f]] === c && (r[f] = c)
    }
    function C(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
    var S = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    function E(t, e) {
        return t.style.getPropertyValue(e) || S(t).getComputedStyle(t, null).getPropertyValue(e)
    }
    function U(t) {
        return t.trim().split(/^|\s+/)
    }
    function P(t) {
        return t.classList || new L(t)
    }
    function L(t) {
        this._node = t,
        this._names = U(t.getAttribute("class") || "")
    }
    function z(t, e) {
        for (var n = P(t), i = -1, r = e.length; ++i < r; )
            n.add(e[i])
    }
    function D(t, e) {
        for (var n = P(t), i = -1, r = e.length; ++i < r; )
            n.remove(e[i])
    }
    L.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    function Y() {
        this.textContent = ""
    }
    function q() {
        this.innerHTML = ""
    }
    function R() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function j() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function O() {
        return null
    }
    function F() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function H() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }
    function I() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var X = {}
      , V = null;
    "undefined" != typeof document && ("onmouseenter"in document.documentElement || (X = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    function B(t, e, n) {
        return t = $(t, e, n),
        function(e) {
            var n = e.relatedTarget;
            n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
        }
    }
    function $(t, e, n) {
        return function(i) {
            var r = V;
            V = i;
            try {
                t.call(this, this.__data__, e, n)
            } finally {
                V = r
            }
        }
    }
    function Z(t) {
        return function() {
            var e = this.__on;
            if (e) {
                for (var n, i = 0, r = -1, a = e.length; i < a; ++i)
                    n = e[i],
                    t.type && n.type !== t.type || n.name !== t.name ? e[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
                ++r ? e.length = r : delete this.__on
            }
        }
    }
    function W(t, e, n) {
        var i = X.hasOwnProperty(t.type) ? B : $;
        return function(r, a, o) {
            var f, c = this.__on, u = i(e, a, o);
            if (c)
                for (var s = 0, h = c.length; s < h; ++s)
                    if ((f = c[s]).type === t.type && f.name === t.name)
                        return this.removeEventListener(f.type, f.listener, f.capture),
                        this.addEventListener(f.type, f.listener = u, f.capture = n),
                        void (f.value = e);
            this.addEventListener(t.type, u, n),
            f = {
                type: t.type,
                name: t.name,
                value: e,
                listener: u,
                capture: n
            },
            c ? c.push(f) : this.__on = [f]
        }
    }
    function G(t, e, n, i) {
        var r = V;
        t.sourceEvent = V,
        V = t;
        try {
            return e.apply(n, i)
        } finally {
            V = r
        }
    }
    function Q(t, e, n) {
        var i = S(t)
          , r = i.CustomEvent;
        "function" == typeof r ? r = new r(e,n) : (r = i.document.createEvent("Event"),
        n ? (r.initEvent(e, n.bubbles, n.cancelable),
        r.detail = n.detail) : r.initEvent(e, !1, !1)),
        t.dispatchEvent(r)
    }
    var J = [null];
    function K(t, e) {
        this._groups = t,
        this._parents = e
    }
    function tt() {
        return new K([[document.documentElement]],J)
    }
    K.prototype = tt.prototype = {
        constructor: K,
        select: function(t) {
            "function" != typeof t && (t = g(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var a, o, f = e[r], c = f.length, u = i[r] = new Array(c), s = 0; s < c; ++s)
                    (a = f[s]) && (o = t.call(a, a.__data__, s, f)) && ("__data__"in a && (o.__data__ = a.__data__),
                    u[s] = o);
            return new K(i,this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = m(t));
            for (var e = this._groups, n = e.length, i = [], r = [], a = 0; a < n; ++a)
                for (var o, f = e[a], c = f.length, u = 0; u < c; ++u)
                    (o = f[u]) && (i.push(t.call(o, o.__data__, u, f)),
                    r.push(o));
            return new K(i,r)
        },
        filter: function(t) {
            "function" != typeof t && (t = w(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var a, o = e[r], f = o.length, c = i[r] = [], u = 0; u < f; ++u)
                    (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
            return new K(i,this._parents)
        },
        data: function(t, e) {
            if (!t)
                return _ = new Array(this.size()),
                s = -1,
                this.each(function(t) {
                    _[++s] = t
                }),
                _;
            var n, i = e ? A : N, r = this._parents, a = this._groups;
            "function" != typeof t && (n = t,
            t = function() {
                return n
            }
            );
            for (var o = a.length, f = new Array(o), c = new Array(o), u = new Array(o), s = 0; s < o; ++s) {
                var h = r[s]
                  , l = a[s]
                  , d = l.length
                  , _ = t.call(h, h && h.__data__, s, r)
                  , p = _.length
                  , b = c[s] = new Array(p)
                  , y = f[s] = new Array(p);
                i(h, l, b, y, u[s] = new Array(d), _, e);
                for (var v, g, x = 0, m = 0; x < p; ++x)
                    if (v = b[x]) {
                        for (x >= m && (m = x + 1); !(g = y[m]) && ++m < p; )
                            ;
                        v._next = g || null
                    }
            }
            return (f = new K(f,r))._enter = c,
            f._exit = u,
            f
        },
        enter: function() {
            return new K(this._enter || this._groups.map(M),this._parents)
        },
        exit: function() {
            return new K(this._exit || this._groups.map(M),this._parents)
        },
        join: function(t, e, n) {
            var i = this.enter()
              , r = this
              , a = this.exit();
            return i = "function" == typeof t ? t(i) : i.append(t + ""),
            null != e && (r = e(r)),
            null == n ? a.remove() : n(a),
            i && r ? i.merge(r).order() : r
        },
        merge: function(t) {
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, a = Math.min(i, r), o = new Array(i), f = 0; f < a; ++f)
                for (var c, u = e[f], s = n[f], h = u.length, l = o[f] = new Array(h), d = 0; d < h; ++d)
                    (c = u[d] || s[d]) && (l[d] = c);
            for (; f < i; ++f)
                o[f] = e[f];
            return new K(o,this._parents)
        },
        order: function() {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
                for (var i, r = t[e], a = r.length - 1, o = r[a]; --a >= 0; )
                    (i = r[a]) && (o && 4 ^ i.compareDocumentPosition(o) && o.parentNode.insertBefore(i, o),
                    o = i);
            return this
        },
        sort: function(t) {
            function e(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }
            t || (t = C);
            for (var n = this._groups, i = n.length, r = new Array(i), a = 0; a < i; ++a) {
                for (var o, f = n[a], c = f.length, u = r[a] = new Array(c), s = 0; s < c; ++s)
                    (o = f[s]) && (u[s] = o);
                u.sort(e)
            }
            return new K(r,this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size())
              , e = -1;
            return this.each(function() {
                t[++e] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                for (var i = t[e], r = 0, a = i.length; r < a; ++r) {
                    var o = i[r];
                    if (o)
                        return o
                }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {
                ++t
            }),
            t
        },
        empty: function() {
            return !this.node()
        },
        each: function(t) {
            for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
                for (var r, a = e[n], o = 0, f = a.length; o < f; ++o)
                    (r = a[o]) && t.call(r, r.__data__, o, a);
            return this
        },
        attr: function(t, e) {
            var n = b(t);
            if (arguments.length < 2) {
                var i = this.node();
                return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n)
            }
            return this.each((null == e ? n.local ? function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }
            : function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }
            : "function" == typeof e ? n.local ? function(t, e) {
                return function() {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                }
            }
            : function(t, e) {
                return function() {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                }
            }
            : n.local ? function(t, e) {
                return function() {
                    this.setAttributeNS(t.space, t.local, e)
                }
            }
            : function(t, e) {
                return function() {
                    this.setAttribute(t, e)
                }
            }
            )(n, e))
        },
        style: function(t, e, n) {
            return arguments.length > 1 ? this.each((null == e ? function(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }
            : "function" == typeof e ? function(t, e, n) {
                return function() {
                    var i = e.apply(this, arguments);
                    null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n)
                }
            }
            : function(t, e, n) {
                return function() {
                    this.style.setProperty(t, e, n)
                }
            }
            )(t, e, null == n ? "" : n)) : E(this.node(), t)
        },
        property: function(t, e) {
            return arguments.length > 1 ? this.each((null == e ? function(t) {
                return function() {
                    delete this[t]
                }
            }
            : "function" == typeof e ? function(t, e) {
                return function() {
                    var n = e.apply(this, arguments);
                    null == n ? delete this[t] : this[t] = n
                }
            }
            : function(t, e) {
                return function() {
                    this[t] = e
                }
            }
            )(t, e)) : this.node()[t]
        },
        classed: function(t, e) {
            var n = U(t + "");
            if (arguments.length < 2) {
                for (var i = P(this.node()), r = -1, a = n.length; ++r < a; )
                    if (!i.contains(n[r]))
                        return !1;
                return !0
            }
            return this.each(("function" == typeof e ? function(t, e) {
                return function() {
                    (e.apply(this, arguments) ? z : D)(this, t)
                }
            }
            : e ? function(t) {
                return function() {
                    z(this, t)
                }
            }
            : function(t) {
                return function() {
                    D(this, t)
                }
            }
            )(n, e))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? Y : ("function" == typeof t ? function(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    this.textContent = null == e ? "" : e
                }
            }
            : function(t) {
                return function() {
                    this.textContent = t
                }
            }
            )(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? q : ("function" == typeof t ? function(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    this.innerHTML = null == e ? "" : e
                }
            }
            : function(t) {
                return function() {
                    this.innerHTML = t
                }
            }
            )(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(R)
        },
        lower: function() {
            return this.each(j)
        },
        append: function(t) {
            var e = "function" == typeof t ? t : y(t);
            return this.select(function() {
                return this.appendChild(e.apply(this, arguments))
            })
        },
        insert: function(t, e) {
            var n = "function" == typeof t ? t : y(t)
              , i = null == e ? O : "function" == typeof e ? e : g(e);
            return this.select(function() {
                return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(F)
        },
        clone: function(t) {
            return this.select(t ? I : H)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, e, n) {
            var i, r, a = function(t) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var e = ""
                      , n = t.indexOf(".");
                    return n >= 0 && (e = t.slice(n + 1),
                    t = t.slice(0, n)),
                    {
                        type: t,
                        name: e
                    }
                })
            }(t + ""), o = a.length;
            if (!(arguments.length < 2)) {
                for (f = e ? W : Z,
                null == n && (n = !1),
                i = 0; i < o; ++i)
                    this.each(f(a[i], e, n));
                return this
            }
            var f = this.node().__on;
            if (f)
                for (var c, u = 0, s = f.length; u < s; ++u)
                    for (i = 0,
                    c = f[u]; i < o; ++i)
                        if ((r = a[i]).type === c.type && r.name === c.name)
                            return c.value
        },
        dispatch: function(t, e) {
            return this.each(("function" == typeof e ? function(t, e) {
                return function() {
                    return Q(this, t, e.apply(this, arguments))
                }
            }
            : function(t, e) {
                return function() {
                    return Q(this, t, e)
                }
            }
            )(t, e))
        }
    };
    var et = tt
      , nt = function(t) {
        return "string" == typeof t ? new K([[document.querySelector(t)]],[document.documentElement]) : new K([[t]],J)
    }
      , it = 0;
    function rt() {
        this._ = "@" + (++it).toString(36)
    }
    rt.prototype = function() {
        return new rt
    }
    .prototype = {
        constructor: rt,
        get: function(t) {
            for (var e = this._; !(e in t); )
                if (!(t = t.parentNode))
                    return;
            return t[e]
        },
        set: function(t, e) {
            return t[this._] = e
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    var at = function() {
        for (var t, e = V; t = e.sourceEvent; )
            e = t;
        return e
    }
      , ot = function(t, e) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var i = n.createSVGPoint();
            return i.x = e.clientX,
            i.y = e.clientY,
            [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
        }
        var r = t.getBoundingClientRect();
        return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop]
    }
      , ft = function(t) {
        var e = at();
        return e.changedTouches && (e = e.changedTouches[0]),
        ot(t, e)
    }
      , ct = function(t, e, n) {
        arguments.length < 3 && (n = e,
        e = at().changedTouches);
        for (var i, r = 0, a = e ? e.length : 0; r < a; ++r)
            if ((i = e[r]).identifier === n)
                return ot(t, i);
        return null
    };
    function ut() {
        V.stopImmediatePropagation()
    }
    var st = function() {
        V.preventDefault(),
        V.stopImmediatePropagation()
    }
      , ht = function(t) {
        var e = t.document.documentElement
          , n = nt(t).on("dragstart.drag", st, !0);
        "onselectstart"in e ? n.on("selectstart.drag", st, !0) : (e.__noselect = e.style.MozUserSelect,
        e.style.MozUserSelect = "none")
    };
    function lt(t, e) {
        var n = t.document.documentElement
          , i = nt(t).on("dragstart.drag", null);
        e && (i.on("click.drag", st, !0),
        setTimeout(function() {
            i.on("click.drag", null)
        }, 0)),
        "onselectstart"in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect,
        delete n.__noselect)
    }
    var dt = function(t) {
        return function() {
            return t
        }
    };
    function _t(t, e, n, i, r, a, o, f, c, u) {
        this.target = t,
        this.type = e,
        this.subject = n,
        this.identifier = i,
        this.active = r,
        this.x = a,
        this.y = o,
        this.dx = f,
        this.dy = c,
        this._ = u
    }
    function pt() {
        return !V.button
    }
    function bt() {
        return this.parentNode
    }
    function yt(t) {
        return null == t ? {
            x: V.x,
            y: V.y
        } : t
    }
    function vt() {
        return "ontouchstart"in this
    }
    _t.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    }
    ;
    var gt = function() {
        var t, e, n, i, r = pt, a = bt, o = yt, f = vt, c = {}, u = d("start", "drag", "end"), s = 0, h = 0;
        function l(t) {
            t.on("mousedown.drag", _).filter(f).on("touchstart.drag", y).on("touchmove.drag", v).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function _() {
            if (!i && r.apply(this, arguments)) {
                var o = x("mouse", a.apply(this, arguments), ft, this, arguments);
                o && (nt(V.view).on("mousemove.drag", p, !0).on("mouseup.drag", b, !0),
                ht(V.view),
                ut(),
                n = !1,
                t = V.clientX,
                e = V.clientY,
                o("start"))
            }
        }
        function p() {
            if (st(),
            !n) {
                var i = V.clientX - t
                  , r = V.clientY - e;
                n = i * i + r * r > h
            }
            c.mouse("drag")
        }
        function b() {
            nt(V.view).on("mousemove.drag mouseup.drag", null),
            lt(V.view, n),
            st(),
            c.mouse("end")
        }
        function y() {
            if (r.apply(this, arguments)) {
                var t, e, n = V.changedTouches, i = a.apply(this, arguments), o = n.length;
                for (t = 0; t < o; ++t)
                    (e = x(n[t].identifier, i, ct, this, arguments)) && (ut(),
                    e("start"))
            }
        }
        function v() {
            var t, e, n = V.changedTouches, i = n.length;
            for (t = 0; t < i; ++t)
                (e = c[n[t].identifier]) && (st(),
                e("drag"))
        }
        function g() {
            var t, e, n = V.changedTouches, r = n.length;
            for (i && clearTimeout(i),
            i = setTimeout(function() {
                i = null
            }, 500),
            t = 0; t < r; ++t)
                (e = c[n[t].identifier]) && (ut(),
                e("end"))
        }
        function x(t, e, n, i, r) {
            var a, f, h, d = n(e, t), _ = u.copy();
            if (G(new _t(l,"beforestart",a,t,s,d[0],d[1],0,0,_), function() {
                return null != (V.subject = a = o.apply(i, r)) && (f = a.x - d[0] || 0,
                h = a.y - d[1] || 0,
                !0)
            }))
                return function o(u) {
                    var p, b = d;
                    switch (u) {
                    case "start":
                        c[t] = o,
                        p = s++;
                        break;
                    case "end":
                        delete c[t],
                        --s;
                    case "drag":
                        d = n(e, t),
                        p = s
                    }
                    G(new _t(l,u,a,t,p,d[0] + f,d[1] + h,d[0] - b[0],d[1] - b[1],_), _.apply, _, [u, i, r])
                }
        }
        return l.filter = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : dt(!!t),
            l) : r
        }
        ,
        l.container = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : dt(t),
            l) : a
        }
        ,
        l.subject = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : dt(t),
            l) : o
        }
        ,
        l.touchable = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : dt(!!t),
            l) : f
        }
        ,
        l.on = function() {
            var t = u.on.apply(u, arguments);
            return t === u ? l : t
        }
        ,
        l.clickDistance = function(t) {
            return arguments.length ? (h = (t = +t) * t,
            l) : Math.sqrt(h)
        }
        ,
        l
    }
      , xt = function(t, e, n) {
        t.prototype = e.prototype = n,
        n.constructor = t
    };
    function mt(t, e) {
        var n = Object.create(t.prototype);
        for (var i in e)
            n[i] = e[i];
        return n
    }
    function wt() {}
    var Mt = "\\s*([+-]?\\d+)\\s*"
      , kt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
      , Tt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
      , Nt = /^#([0-9a-f]{3})$/
      , At = /^#([0-9a-f]{6})$/
      , Ct = new RegExp("^rgb\\(" + [Mt, Mt, Mt] + "\\)$")
      , St = new RegExp("^rgb\\(" + [Tt, Tt, Tt] + "\\)$")
      , Et = new RegExp("^rgba\\(" + [Mt, Mt, Mt, kt] + "\\)$")
      , Ut = new RegExp("^rgba\\(" + [Tt, Tt, Tt, kt] + "\\)$")
      , Pt = new RegExp("^hsl\\(" + [kt, Tt, Tt] + "\\)$")
      , Lt = new RegExp("^hsla\\(" + [kt, Tt, Tt, kt] + "\\)$")
      , zt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Dt(t) {
        var e;
        return t = (t + "").trim().toLowerCase(),
        (e = Nt.exec(t)) ? new Ot((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | 240 & e,(15 & e) << 4 | 15 & e,1) : (e = At.exec(t)) ? Yt(parseInt(e[1], 16)) : (e = Ct.exec(t)) ? new Ot(e[1],e[2],e[3],1) : (e = St.exec(t)) ? new Ot(255 * e[1] / 100,255 * e[2] / 100,255 * e[3] / 100,1) : (e = Et.exec(t)) ? qt(e[1], e[2], e[3], e[4]) : (e = Ut.exec(t)) ? qt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Pt.exec(t)) ? Ht(e[1], e[2] / 100, e[3] / 100, 1) : (e = Lt.exec(t)) ? Ht(e[1], e[2] / 100, e[3] / 100, e[4]) : zt.hasOwnProperty(t) ? Yt(zt[t]) : "transparent" === t ? new Ot(NaN,NaN,NaN,0) : null
    }
    function Yt(t) {
        return new Ot(t >> 16 & 255,t >> 8 & 255,255 & t,1)
    }
    function qt(t, e, n, i) {
        return i <= 0 && (t = e = n = NaN),
        new Ot(t,e,n,i)
    }
    function Rt(t) {
        return t instanceof wt || (t = Dt(t)),
        t ? new Ot((t = t.rgb()).r,t.g,t.b,t.opacity) : new Ot
    }
    function jt(t, e, n, i) {
        return 1 === arguments.length ? Rt(t) : new Ot(t,e,n,null == i ? 1 : i)
    }
    function Ot(t, e, n, i) {
        this.r = +t,
        this.g = +e,
        this.b = +n,
        this.opacity = +i
    }
    function Ft(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }
    function Ht(t, e, n, i) {
        return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
        new Xt(t,e,n,i)
    }
    function It(t, e, n, i) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof Xt)
                return new Xt(t.h,t.s,t.l,t.opacity);
            if (t instanceof wt || (t = Dt(t)),
            !t)
                return new Xt;
            if (t instanceof Xt)
                return t;
            var e = (t = t.rgb()).r / 255
              , n = t.g / 255
              , i = t.b / 255
              , r = Math.min(e, n, i)
              , a = Math.max(e, n, i)
              , o = NaN
              , f = a - r
              , c = (a + r) / 2;
            return f ? (o = e === a ? (n - i) / f + 6 * (n < i) : n === a ? (i - e) / f + 2 : (e - n) / f + 4,
            f /= c < .5 ? a + r : 2 - a - r,
            o *= 60) : f = c > 0 && c < 1 ? 0 : o,
            new Xt(o,f,c,t.opacity)
        }(t) : new Xt(t,e,n,null == i ? 1 : i)
    }
    function Xt(t, e, n, i) {
        this.h = +t,
        this.s = +e,
        this.l = +n,
        this.opacity = +i
    }
    function Vt(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }
    xt(wt, Dt, {
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: function() {
            return this.rgb().hex()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    xt(Ot, jt, mt(wt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Ot(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Ot(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: function() {
            return "#" + Ft(this.r) + Ft(this.g) + Ft(this.b)
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })),
    xt(Xt, It, mt(wt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Xt(this.h,this.s,this.l * t,this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Xt(this.h,this.s,this.l * t,this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0)
              , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
              , n = this.l
              , i = n + (n < .5 ? n : 1 - n) * e
              , r = 2 * n - i;
            return new Ot(Vt(t >= 240 ? t - 240 : t + 120, r, i),Vt(t, r, i),Vt(t < 120 ? t + 240 : t - 120, r, i),this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Bt = Math.PI / 180
      , $t = 180 / Math.PI
      , Zt = .96422
      , Wt = 1
      , Gt = .82521
      , Qt = 4 / 29
      , Jt = 6 / 29
      , Kt = 3 * Jt * Jt
      , te = Jt * Jt * Jt;
    function ee(t) {
        if (t instanceof ie)
            return new ie(t.l,t.a,t.b,t.opacity);
        if (t instanceof se) {
            if (isNaN(t.h))
                return new ie(t.l,0,0,t.opacity);
            var e = t.h * Bt;
            return new ie(t.l,Math.cos(e) * t.c,Math.sin(e) * t.c,t.opacity)
        }
        t instanceof Ot || (t = Rt(t));
        var n, i, r = fe(t.r), a = fe(t.g), o = fe(t.b), f = re((.2225045 * r + .7168786 * a + .0606169 * o) / Wt);
        return r === a && a === o ? n = i = f : (n = re((.4360747 * r + .3850649 * a + .1430804 * o) / Zt),
        i = re((.0139322 * r + .0971045 * a + .7141733 * o) / Gt)),
        new ie(116 * f - 16,500 * (n - f),200 * (f - i),t.opacity)
    }
    function ne(t, e, n, i) {
        return 1 === arguments.length ? ee(t) : new ie(t,e,n,null == i ? 1 : i)
    }
    function ie(t, e, n, i) {
        this.l = +t,
        this.a = +e,
        this.b = +n,
        this.opacity = +i
    }
    function re(t) {
        return t > te ? Math.pow(t, 1 / 3) : t / Kt + Qt
    }
    function ae(t) {
        return t > Jt ? t * t * t : Kt * (t - Qt)
    }
    function oe(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function fe(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function ce(t) {
        if (t instanceof se)
            return new se(t.h,t.c,t.l,t.opacity);
        if (t instanceof ie || (t = ee(t)),
        0 === t.a && 0 === t.b)
            return new se(NaN,0,t.l,t.opacity);
        var e = Math.atan2(t.b, t.a) * $t;
        return new se(e < 0 ? e + 360 : e,Math.sqrt(t.a * t.a + t.b * t.b),t.l,t.opacity)
    }
    function ue(t, e, n, i) {
        return 1 === arguments.length ? ce(t) : new se(t,e,n,null == i ? 1 : i)
    }
    function se(t, e, n, i) {
        this.h = +t,
        this.c = +e,
        this.l = +n,
        this.opacity = +i
    }
    xt(ie, ne, mt(wt, {
        brighter: function(t) {
            return new ie(this.l + 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
        },
        darker: function(t) {
            return new ie(this.l - 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116
              , e = isNaN(this.a) ? t : t + this.a / 500
              , n = isNaN(this.b) ? t : t - this.b / 200;
            return new Ot(oe(3.1338561 * (e = Zt * ae(e)) - 1.6168667 * (t = Wt * ae(t)) - .4906146 * (n = Gt * ae(n))),oe(-.9787684 * e + 1.9161415 * t + .033454 * n),oe(.0719453 * e - .2289914 * t + 1.4052427 * n),this.opacity)
        }
    })),
    xt(se, ue, mt(wt, {
        brighter: function(t) {
            return new se(this.h,this.c,this.l + 18 * (null == t ? 1 : t),this.opacity)
        },
        darker: function(t) {
            return new se(this.h,this.c,this.l - 18 * (null == t ? 1 : t),this.opacity)
        },
        rgb: function() {
            return ee(this).rgb()
        }
    }));
    var he = -.29227
      , le = -.90649
      , de = 1.97294
      , _e = de * le
      , pe = 1.78277 * de
      , be = 1.78277 * he - -.14861 * le;
    function ye(t, e, n, i) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof ve)
                return new ve(t.h,t.s,t.l,t.opacity);
            t instanceof Ot || (t = Rt(t));
            var e = t.r / 255
              , n = t.g / 255
              , i = t.b / 255
              , r = (be * i + _e * e - pe * n) / (be + _e - pe)
              , a = i - r
              , o = (de * (n - r) - he * a) / le
              , f = Math.sqrt(o * o + a * a) / (de * r * (1 - r))
              , c = f ? Math.atan2(o, a) * $t - 120 : NaN;
            return new ve(c < 0 ? c + 360 : c,f,r,t.opacity)
        }(t) : new ve(t,e,n,null == i ? 1 : i)
    }
    function ve(t, e, n, i) {
        this.h = +t,
        this.s = +e,
        this.l = +n,
        this.opacity = +i
    }
    function ge(t, e, n, i, r) {
        var a = t * t
          , o = a * t;
        return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * i + o * r) / 6
    }
    xt(ve, ye, mt(wt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new ve(this.h,this.s,this.l * t,this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new ve(this.h,this.s,this.l * t,this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Bt
              , e = +this.l
              , n = isNaN(this.s) ? 0 : this.s * e * (1 - e)
              , i = Math.cos(t)
              , r = Math.sin(t);
            return new Ot(255 * (e + n * (-.14861 * i + 1.78277 * r)),255 * (e + n * (he * i + le * r)),255 * (e + n * (de * i)),this.opacity)
        }
    }));
    var xe = function(t) {
        return function() {
            return t
        }
    };
    function me(t, e) {
        return function(n) {
            return t + n * e
        }
    }
    function we(t, e) {
        var n = e - t;
        return n ? me(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : xe(isNaN(t) ? e : t)
    }
    function Me(t) {
        return 1 == (t = +t) ? ke : function(e, n) {
            return n - e ? function(t, e, n) {
                return t = Math.pow(t, n),
                e = Math.pow(e, n) - t,
                n = 1 / n,
                function(i) {
                    return Math.pow(t + i * e, n)
                }
            }(e, n, t) : xe(isNaN(e) ? n : e)
        }
    }
    function ke(t, e) {
        var n = e - t;
        return n ? me(t, n) : xe(isNaN(t) ? e : t)
    }
    var Te = function t(e) {
        var n = Me(e);
        function i(t, e) {
            var i = n((t = jt(t)).r, (e = jt(e)).r)
              , r = n(t.g, e.g)
              , a = n(t.b, e.b)
              , o = ke(t.opacity, e.opacity);
            return function(e) {
                return t.r = i(e),
                t.g = r(e),
                t.b = a(e),
                t.opacity = o(e),
                t + ""
            }
        }
        return i.gamma = t,
        i
    }(1);
    function Ne(t) {
        return function(e) {
            var n, i, r = e.length, a = new Array(r), o = new Array(r), f = new Array(r);
            for (n = 0; n < r; ++n)
                i = jt(e[n]),
                a[n] = i.r || 0,
                o[n] = i.g || 0,
                f[n] = i.b || 0;
            return a = t(a),
            o = t(o),
            f = t(f),
            i.opacity = 1,
            function(t) {
                return i.r = a(t),
                i.g = o(t),
                i.b = f(t),
                i + ""
            }
        }
    }
    var Ae = Ne(function(t) {
        var e = t.length - 1;
        return function(n) {
            var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
            e - 1) : Math.floor(n * e)
              , r = t[i]
              , a = t[i + 1]
              , o = i > 0 ? t[i - 1] : 2 * r - a
              , f = i < e - 1 ? t[i + 2] : 2 * a - r;
            return ge((n - i / e) * e, o, r, a, f)
        }
    })
      , Ce = (Ne(function(t) {
        var e = t.length;
        return function(n) {
            var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e)
              , r = t[(i + e - 1) % e]
              , a = t[i % e]
              , o = t[(i + 1) % e]
              , f = t[(i + 2) % e];
            return ge((n - i / e) * e, r, a, o, f)
        }
    }),
    function(t, e) {
        return e -= t = +t,
        function(n) {
            return t + e * n
        }
    }
    )
      , Se = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , Ee = new RegExp(Se.source,"g");
    var Ue, Pe, Le, ze, De = function(t, e) {
        var n, i, r, a = Se.lastIndex = Ee.lastIndex = 0, o = -1, f = [], c = [];
        for (t += "",
        e += ""; (n = Se.exec(t)) && (i = Ee.exec(e)); )
            (r = i.index) > a && (r = e.slice(a, r),
            f[o] ? f[o] += r : f[++o] = r),
            (n = n[0]) === (i = i[0]) ? f[o] ? f[o] += i : f[++o] = i : (f[++o] = null,
            c.push({
                i: o,
                x: Ce(n, i)
            })),
            a = Ee.lastIndex;
        return a < e.length && (r = e.slice(a),
        f[o] ? f[o] += r : f[++o] = r),
        f.length < 2 ? c[0] ? function(t) {
            return function(e) {
                return t(e) + ""
            }
        }(c[0].x) : function(t) {
            return function() {
                return t
            }
        }(e) : (e = c.length,
        function(t) {
            for (var n, i = 0; i < e; ++i)
                f[(n = c[i]).i] = n.x(t);
            return f.join("")
        }
        )
    }, Ye = 180 / Math.PI, qe = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    }, Re = function(t, e, n, i, r, a) {
        var o, f, c;
        return (o = Math.sqrt(t * t + e * e)) && (t /= o,
        e /= o),
        (c = t * n + e * i) && (n -= t * c,
        i -= e * c),
        (f = Math.sqrt(n * n + i * i)) && (n /= f,
        i /= f,
        c /= f),
        t * i < e * n && (t = -t,
        e = -e,
        c = -c,
        o = -o),
        {
            translateX: r,
            translateY: a,
            rotate: Math.atan2(e, t) * Ye,
            skewX: Math.atan(c) * Ye,
            scaleX: o,
            scaleY: f
        }
    };
    function je(t, e, n, i) {
        function r(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function(a, o) {
            var f = []
              , c = [];
            return a = t(a),
            o = t(o),
            function(t, i, r, a, o, f) {
                if (t !== r || i !== a) {
                    var c = o.push("translate(", null, e, null, n);
                    f.push({
                        i: c - 4,
                        x: Ce(t, r)
                    }, {
                        i: c - 2,
                        x: Ce(i, a)
                    })
                } else
                    (r || a) && o.push("translate(" + r + e + a + n)
            }(a.translateX, a.translateY, o.translateX, o.translateY, f, c),
            function(t, e, n, a) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                a.push({
                    i: n.push(r(n) + "rotate(", null, i) - 2,
                    x: Ce(t, e)
                })) : e && n.push(r(n) + "rotate(" + e + i)
            }(a.rotate, o.rotate, f, c),
            function(t, e, n, a) {
                t !== e ? a.push({
                    i: n.push(r(n) + "skewX(", null, i) - 2,
                    x: Ce(t, e)
                }) : e && n.push(r(n) + "skewX(" + e + i)
            }(a.skewX, o.skewX, f, c),
            function(t, e, n, i, a, o) {
                if (t !== n || e !== i) {
                    var f = a.push(r(a) + "scale(", null, ",", null, ")");
                    o.push({
                        i: f - 4,
                        x: Ce(t, n)
                    }, {
                        i: f - 2,
                        x: Ce(e, i)
                    })
                } else
                    1 === n && 1 === i || a.push(r(a) + "scale(" + n + "," + i + ")")
            }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, f, c),
            a = o = null,
            function(t) {
                for (var e, n = -1, i = c.length; ++n < i; )
                    f[(e = c[n]).i] = e.x(t);
                return f.join("")
            }
        }
    }
    var Oe = je(function(t) {
        return "none" === t ? qe : (Ue || (Ue = document.createElement("DIV"),
        Pe = document.documentElement,
        Le = document.defaultView),
        Ue.style.transform = t,
        t = Le.getComputedStyle(Pe.appendChild(Ue), null).getPropertyValue("transform"),
        Pe.removeChild(Ue),
        t = t.slice(7, -1).split(","),
        Re(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }, "px, ", "px)", "deg)")
      , Fe = je(function(t) {
        return null == t ? qe : (ze || (ze = document.createElementNS("http://www.w3.org/2000/svg", "g")),
        ze.setAttribute("transform", t),
        (t = ze.transform.baseVal.consolidate()) ? (t = t.matrix,
        Re(t.a, t.b, t.c, t.d, t.e, t.f)) : qe)
    }, ", ", ")", ")")
      , He = Math.SQRT2;
    function Ie(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    var Xe = function(t, e) {
        var n, i, r = t[0], a = t[1], o = t[2], f = e[0], c = e[1], u = e[2], s = f - r, h = c - a, l = s * s + h * h;
        if (l < 1e-12)
            i = Math.log(u / o) / He,
            n = function(t) {
                return [r + t * s, a + t * h, o * Math.exp(He * t * i)]
            }
            ;
        else {
            var d = Math.sqrt(l)
              , _ = (u * u - o * o + 4 * l) / (2 * o * 2 * d)
              , p = (u * u - o * o - 4 * l) / (2 * u * 2 * d)
              , b = Math.log(Math.sqrt(_ * _ + 1) - _)
              , y = Math.log(Math.sqrt(p * p + 1) - p);
            i = (y - b) / He,
            n = function(t) {
                var e, n = t * i, f = Ie(b), c = o / (2 * d) * (f * (e = He * n + b,
                ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function(t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2
                }(b));
                return [r + c * s, a + c * h, o * f / Ie(He * n + b)]
            }
        }
        return n.duration = 1e3 * i,
        n
    };
    function Ve(t) {
        return function(e, n) {
            var i = t((e = It(e)).h, (n = It(n)).h)
              , r = ke(e.s, n.s)
              , a = ke(e.l, n.l)
              , o = ke(e.opacity, n.opacity);
            return function(t) {
                return e.h = i(t),
                e.s = r(t),
                e.l = a(t),
                e.opacity = o(t),
                e + ""
            }
        }
    }
    Ve(we),
    Ve(ke);
    function Be(t) {
        return function(e, n) {
            var i = t((e = ue(e)).h, (n = ue(n)).h)
              , r = ke(e.c, n.c)
              , a = ke(e.l, n.l)
              , o = ke(e.opacity, n.opacity);
            return function(t) {
                return e.h = i(t),
                e.c = r(t),
                e.l = a(t),
                e.opacity = o(t),
                e + ""
            }
        }
    }
    Be(we),
    Be(ke);
    function $e(t) {
        return function e(n) {
            function i(e, i) {
                var r = t((e = ye(e)).h, (i = ye(i)).h)
                  , a = ke(e.s, i.s)
                  , o = ke(e.l, i.l)
                  , f = ke(e.opacity, i.opacity);
                return function(t) {
                    return e.h = r(t),
                    e.s = a(t),
                    e.l = o(Math.pow(t, n)),
                    e.opacity = f(t),
                    e + ""
                }
            }
            return n = +n,
            i.gamma = e,
            i
        }(1)
    }
    $e(we);
    var Ze = $e(ke);
    var We, Ge, Qe = 0, Je = 0, Ke = 0, tn = 1e3, en = 0, nn = 0, rn = 0, an = "object" == typeof performance && performance.now ? performance : Date, on = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    }
    ;
    function fn() {
        return nn || (on(cn),
        nn = an.now() + rn)
    }
    function cn() {
        nn = 0
    }
    function un() {
        this._call = this._time = this._next = null
    }
    function sn(t, e, n) {
        var i = new un;
        return i.restart(t, e, n),
        i
    }
    function hn() {
        nn = (en = an.now()) + rn,
        Qe = Je = 0;
        try {
            !function() {
                fn(),
                ++Qe;
                for (var t, e = We; e; )
                    (t = nn - e._time) >= 0 && e._call.call(null, t),
                    e = e._next;
                --Qe
            }()
        } finally {
            Qe = 0,
            function() {
                var t, e, n = We, i = 1 / 0;
                for (; n; )
                    n._call ? (i > n._time && (i = n._time),
                    t = n,
                    n = n._next) : (e = n._next,
                    n._next = null,
                    n = t ? t._next = e : We = e);
                Ge = t,
                dn(i)
            }(),
            nn = 0
        }
    }
    function ln() {
        var t = an.now()
          , e = t - en;
        e > tn && (rn -= e,
        en = t)
    }
    function dn(t) {
        Qe || (Je && (Je = clearTimeout(Je)),
        t - nn > 24 ? (t < 1 / 0 && (Je = setTimeout(hn, t - an.now() - rn)),
        Ke && (Ke = clearInterval(Ke))) : (Ke || (en = an.now(),
        Ke = setInterval(ln, tn)),
        Qe = 1,
        on(hn)))
    }
    un.prototype = sn.prototype = {
        constructor: un,
        restart: function(t, e, n) {
            if ("function" != typeof t)
                throw new TypeError("callback is not a function");
            n = (null == n ? fn() : +n) + (null == e ? 0 : +e),
            this._next || Ge === this || (Ge ? Ge._next = this : We = this,
            Ge = this),
            this._call = t,
            this._time = n,
            dn()
        },
        stop: function() {
            this._call && (this._call = null,
            this._time = 1 / 0,
            dn())
        }
    };
    var _n = function(t, e, n) {
        var i = new un;
        return e = null == e ? 0 : +e,
        i.restart(function(n) {
            i.stop(),
            t(n + e)
        }, e, n),
        i
    }
      , pn = d("start", "end", "cancel", "interrupt")
      , bn = []
      , yn = 0
      , vn = 1
      , gn = 2
      , xn = 3
      , mn = 4
      , wn = 5
      , Mn = 6
      , kn = function(t, e, n, i, r, a) {
        var o = t.__transition;
        if (o) {
            if (n in o)
                return
        } else
            t.__transition = {};
        !function(t, e, n) {
            var i, r = t.__transition;
            function a(c) {
                var u, s, h, l;
                if (n.state !== vn)
                    return f();
                for (u in r)
                    if ((l = r[u]).name === n.name) {
                        if (l.state === xn)
                            return _n(a);
                        l.state === mn ? (l.state = Mn,
                        l.timer.stop(),
                        l.on.call("interrupt", t, t.__data__, l.index, l.group),
                        delete r[u]) : +u < e && (l.state = Mn,
                        l.timer.stop(),
                        l.on.call("cancel", t, t.__data__, l.index, l.group),
                        delete r[u])
                    }
                if (_n(function() {
                    n.state === xn && (n.state = mn,
                    n.timer.restart(o, n.delay, n.time),
                    o(c))
                }),
                n.state = gn,
                n.on.call("start", t, t.__data__, n.index, n.group),
                n.state === gn) {
                    for (n.state = xn,
                    i = new Array(h = n.tween.length),
                    u = 0,
                    s = -1; u < h; ++u)
                        (l = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (i[++s] = l);
                    i.length = s + 1
                }
            }
            function o(e) {
                for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(f),
                n.state = wn,
                1), a = -1, o = i.length; ++a < o; )
                    i[a].call(t, r);
                n.state === wn && (n.on.call("end", t, t.__data__, n.index, n.group),
                f())
            }
            function f() {
                for (var i in n.state = Mn,
                n.timer.stop(),
                delete r[e],
                r)
                    return;
                delete t.__transition
            }
            r[e] = n,
            n.timer = sn(function(t) {
                n.state = vn,
                n.timer.restart(a, n.delay, n.time),
                n.delay <= t && a(t - n.delay)
            }, 0, n.time)
        }(t, n, {
            name: e,
            index: i,
            group: r,
            on: pn,
            tween: bn,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: yn
        })
    };
    function Tn(t, e) {
        var n = An(t, e);
        if (n.state > yn)
            throw new Error("too late; already scheduled");
        return n
    }
    function Nn(t, e) {
        var n = An(t, e);
        if (n.state > xn)
            throw new Error("too late; already running");
        return n
    }
    function An(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e]))
            throw new Error("transition not found");
        return n
    }
    var Cn = function(t, e) {
        var n, i, r, a = t.__transition, o = !0;
        if (a) {
            for (r in e = null == e ? null : e + "",
            a)
                (n = a[r]).name === e ? (i = n.state > gn && n.state < wn,
                n.state = Mn,
                n.timer.stop(),
                n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group),
                delete a[r]) : o = !1;
            o && delete t.__transition
        }
    };
    function Sn(t, e, n) {
        var i = t._id;
        return t.each(function() {
            var t = Nn(this, i);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments)
        }),
        function(t) {
            return An(t, i).value[e]
        }
    }
    var En = function(t, e) {
        var n;
        return ("number" == typeof e ? Ce : e instanceof Dt ? Te : (n = Dt(e)) ? (e = n,
        Te) : De)(t, e)
    };
    var Un = et.prototype.constructor;
    function Pn(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    var Ln = 0;
    function zn(t, e, n, i) {
        this._groups = t,
        this._parents = e,
        this._name = n,
        this._id = i
    }
    function Dn() {
        return ++Ln
    }
    var Yn = et.prototype;
    zn.prototype = function(t) {
        return et().transition(t)
    }
    .prototype = {
        constructor: zn,
        select: function(t) {
            var e = this._name
              , n = this._id;
            "function" != typeof t && (t = g(t));
            for (var i = this._groups, r = i.length, a = new Array(r), o = 0; o < r; ++o)
                for (var f, c, u = i[o], s = u.length, h = a[o] = new Array(s), l = 0; l < s; ++l)
                    (f = u[l]) && (c = t.call(f, f.__data__, l, u)) && ("__data__"in f && (c.__data__ = f.__data__),
                    h[l] = c,
                    kn(h[l], e, n, l, h, An(f, n)));
            return new zn(a,this._parents,e,n)
        },
        selectAll: function(t) {
            var e = this._name
              , n = this._id;
            "function" != typeof t && (t = m(t));
            for (var i = this._groups, r = i.length, a = [], o = [], f = 0; f < r; ++f)
                for (var c, u = i[f], s = u.length, h = 0; h < s; ++h)
                    if (c = u[h]) {
                        for (var l, d = t.call(c, c.__data__, h, u), _ = An(c, n), p = 0, b = d.length; p < b; ++p)
                            (l = d[p]) && kn(l, e, n, p, d, _);
                        a.push(d),
                        o.push(c)
                    }
            return new zn(a,o,e,n)
        },
        filter: function(t) {
            "function" != typeof t && (t = w(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var a, o = e[r], f = o.length, c = i[r] = [], u = 0; u < f; ++u)
                    (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
            return new zn(i,this._parents,this._name,this._id)
        },
        merge: function(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, a = Math.min(i, r), o = new Array(i), f = 0; f < a; ++f)
                for (var c, u = e[f], s = n[f], h = u.length, l = o[f] = new Array(h), d = 0; d < h; ++d)
                    (c = u[d] || s[d]) && (l[d] = c);
            for (; f < i; ++f)
                o[f] = e[f];
            return new zn(o,this._parents,this._name,this._id)
        },
        selection: function() {
            return new Un(this._groups,this._parents)
        },
        transition: function() {
            for (var t = this._name, e = this._id, n = Dn(), i = this._groups, r = i.length, a = 0; a < r; ++a)
                for (var o, f = i[a], c = f.length, u = 0; u < c; ++u)
                    if (o = f[u]) {
                        var s = An(o, e);
                        kn(o, t, n, u, f, {
                            time: s.time + s.delay + s.duration,
                            delay: 0,
                            duration: s.duration,
                            ease: s.ease
                        })
                    }
            return new zn(i,this._parents,t,n)
        },
        call: Yn.call,
        nodes: Yn.nodes,
        node: Yn.node,
        size: Yn.size,
        empty: Yn.empty,
        each: Yn.each,
        on: function(t, e) {
            var n = this._id;
            return arguments.length < 2 ? An(this.node(), n).on.on(t) : this.each(function(t, e, n) {
                var i, r, a = function(t) {
                    return (t + "").trim().split(/^|\s+/).every(function(t) {
                        var e = t.indexOf(".");
                        return e >= 0 && (t = t.slice(0, e)),
                        !t || "start" === t
                    })
                }(e) ? Tn : Nn;
                return function() {
                    var o = a(this, t)
                      , f = o.on;
                    f !== i && (r = (i = f).copy()).on(e, n),
                    o.on = r
                }
            }(n, t, e))
        },
        attr: function(t, e) {
            var n = b(t)
              , i = "transform" === n ? Fe : En;
            return this.attrTween(t, "function" == typeof e ? (n.local ? function(t, e, n) {
                var i, r, a;
                return function() {
                    var o, f, c = n(this);
                    if (null != c)
                        return (o = this.getAttributeNS(t.space, t.local)) === (f = c + "") ? null : o === i && f === r ? a : (r = f,
                        a = e(i = o, c));
                    this.removeAttributeNS(t.space, t.local)
                }
            }
            : function(t, e, n) {
                var i, r, a;
                return function() {
                    var o, f, c = n(this);
                    if (null != c)
                        return (o = this.getAttribute(t)) === (f = c + "") ? null : o === i && f === r ? a : (r = f,
                        a = e(i = o, c));
                    this.removeAttribute(t)
                }
            }
            )(n, i, Sn(this, "attr." + t, e)) : null == e ? (n.local ? function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }
            : function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }
            )(n) : (n.local ? function(t, e, n) {
                var i, r, a = n + "";
                return function() {
                    var o = this.getAttributeNS(t.space, t.local);
                    return o === a ? null : o === i ? r : r = e(i = o, n)
                }
            }
            : function(t, e, n) {
                var i, r, a = n + "";
                return function() {
                    var o = this.getAttribute(t);
                    return o === a ? null : o === i ? r : r = e(i = o, n)
                }
            }
            )(n, i, e))
        },
        attrTween: function(t, e) {
            var n = "attr." + t;
            if (arguments.length < 2)
                return (n = this.tween(n)) && n._value;
            if (null == e)
                return this.tween(n, null);
            if ("function" != typeof e)
                throw new Error;
            var i = b(t);
            return this.tween(n, (i.local ? function(t, e) {
                var n, i;
                function r() {
                    var r = e.apply(this, arguments);
                    return r !== i && (n = (i = r) && function(t, e) {
                        return function(n) {
                            this.setAttributeNS(t.space, t.local, e(n))
                        }
                    }(t, r)),
                    n
                }
                return r._value = e,
                r
            }
            : function(t, e) {
                var n, i;
                function r() {
                    var r = e.apply(this, arguments);
                    return r !== i && (n = (i = r) && function(t, e) {
                        return function(n) {
                            this.setAttribute(t, e(n))
                        }
                    }(t, r)),
                    n
                }
                return r._value = e,
                r
            }
            )(i, e))
        },
        style: function(t, e, n) {
            var i = "transform" == (t += "") ? Oe : En;
            return null == e ? this.styleTween(t, function(t, e) {
                var n, i, r;
                return function() {
                    var a = E(this, t)
                      , o = (this.style.removeProperty(t),
                    E(this, t));
                    return a === o ? null : a === n && o === i ? r : r = e(n = a, i = o)
                }
            }(t, i)).on("end.style." + t, Pn(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) {
                var i, r, a;
                return function() {
                    var o = E(this, t)
                      , f = n(this)
                      , c = f + "";
                    return null == f && (this.style.removeProperty(t),
                    c = f = E(this, t)),
                    o === c ? null : o === i && c === r ? a : (r = c,
                    a = e(i = o, f))
                }
            }(t, i, Sn(this, "style." + t, e))).each(function(t, e) {
                var n, i, r, a, o = "style." + e, f = "end." + o;
                return function() {
                    var c = Nn(this, t)
                      , u = c.on
                      , s = null == c.value[o] ? a || (a = Pn(e)) : void 0;
                    u === n && r === s || (i = (n = u).copy()).on(f, r = s),
                    c.on = i
                }
            }(this._id, t)) : this.styleTween(t, function(t, e, n) {
                var i, r, a = n + "";
                return function() {
                    var o = E(this, t);
                    return o === a ? null : o === i ? r : r = e(i = o, n)
                }
            }(t, i, e), n).on("end.style." + t, null)
        },
        styleTween: function(t, e, n) {
            var i = "style." + (t += "");
            if (arguments.length < 2)
                return (i = this.tween(i)) && i._value;
            if (null == e)
                return this.tween(i, null);
            if ("function" != typeof e)
                throw new Error;
            return this.tween(i, function(t, e, n) {
                var i, r;
                function a() {
                    var a = e.apply(this, arguments);
                    return a !== r && (i = (r = a) && function(t, e, n) {
                        return function(i) {
                            this.style.setProperty(t, e(i), n)
                        }
                    }(t, a, n)),
                    i
                }
                return a._value = e,
                a
            }(t, e, null == n ? "" : n))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var e = t(this);
                    this.textContent = null == e ? "" : e
                }
            }(Sn(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function() {
            return this.on("end.remove", (t = this._id,
            function() {
                var e = this.parentNode;
                for (var n in this.__transition)
                    if (+n !== t)
                        return;
                e && e.removeChild(this)
            }
            ));
            var t
        },
        tween: function(t, e) {
            var n = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var i, r = An(this.node(), n).tween, a = 0, o = r.length; a < o; ++a)
                    if ((i = r[a]).name === t)
                        return i.value;
                return null
            }
            return this.each((null == e ? function(t, e) {
                var n, i;
                return function() {
                    var r = Nn(this, t)
                      , a = r.tween;
                    if (a !== n)
                        for (var o = 0, f = (i = n = a).length; o < f; ++o)
                            if (i[o].name === e) {
                                (i = i.slice()).splice(o, 1);
                                break
                            }
                    r.tween = i
                }
            }
            : function(t, e, n) {
                var i, r;
                if ("function" != typeof n)
                    throw new Error;
                return function() {
                    var a = Nn(this, t)
                      , o = a.tween;
                    if (o !== i) {
                        r = (i = o).slice();
                        for (var f = {
                            name: e,
                            value: n
                        }, c = 0, u = r.length; c < u; ++c)
                            if (r[c].name === e) {
                                r[c] = f;
                                break
                            }
                        c === u && r.push(f)
                    }
                    a.tween = r
                }
            }
            )(n, t, e))
        },
        delay: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function(t, e) {
                return function() {
                    Tn(this, t).delay = +e.apply(this, arguments)
                }
            }
            : function(t, e) {
                return e = +e,
                function() {
                    Tn(this, t).delay = e
                }
            }
            )(e, t)) : An(this.node(), e).delay
        },
        duration: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function(t, e) {
                return function() {
                    Nn(this, t).duration = +e.apply(this, arguments)
                }
            }
            : function(t, e) {
                return e = +e,
                function() {
                    Nn(this, t).duration = e
                }
            }
            )(e, t)) : An(this.node(), e).duration
        },
        ease: function(t) {
            var e = this._id;
            return arguments.length ? this.each(function(t, e) {
                if ("function" != typeof e)
                    throw new Error;
                return function() {
                    Nn(this, t).ease = e
                }
            }(e, t)) : An(this.node(), e).ease
        },
        end: function() {
            var t, e, n = this, i = n._id, r = n.size();
            return new Promise(function(a, o) {
                var f = {
                    value: o
                }
                  , c = {
                    value: function() {
                        0 == --r && a()
                    }
                };
                n.each(function() {
                    var n = Nn(this, i)
                      , r = n.on;
                    r !== t && ((e = (t = r).copy())._.cancel.push(f),
                    e._.interrupt.push(f),
                    e._.end.push(c)),
                    n.on = e
                })
            }
            )
        }
    };
    (function t(e) {
        function n(t) {
            return Math.pow(t, e)
        }
        return e = +e,
        n.exponent = t,
        n
    }
    )(3),
    function t(e) {
        function n(t) {
            return 1 - Math.pow(1 - t, e)
        }
        return e = +e,
        n.exponent = t,
        n
    }(3),
    function t(e) {
        function n(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
        }
        return e = +e,
        n.exponent = t,
        n
    }(3),
    Math.PI;
    (function t(e) {
        function n(t) {
            return t * t * ((e + 1) * t - e)
        }
        return e = +e,
        n.overshoot = t,
        n
    }
    )(1.70158),
    function t(e) {
        function n(t) {
            return --t * t * ((e + 1) * t + e) + 1
        }
        return e = +e,
        n.overshoot = t,
        n
    }(1.70158),
    function t(e) {
        function n(t) {
            return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
        }
        return e = +e,
        n.overshoot = t,
        n
    }(1.70158);
    var qn = 2 * Math.PI
      , Rn = (function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);
        function r(t) {
            return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n)
        }
        return r.amplitude = function(e) {
            return t(e, n * qn)
        }
        ,
        r.period = function(n) {
            return t(e, n)
        }
        ,
        r
    }(1, .3),
    function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);
        function r(t) {
            return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n)
        }
        return r.amplitude = function(e) {
            return t(e, n * qn)
        }
        ,
        r.period = function(n) {
            return t(e, n)
        }
        ,
        r
    }(1, .3),
    function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);
        function r(t) {
            return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2
        }
        return r.amplitude = function(e) {
            return t(e, n * qn)
        }
        ,
        r.period = function(n) {
            return t(e, n)
        }
        ,
        r
    }(1, .3),
    {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    });
    function jn(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]); )
            if (!(t = t.parentNode))
                return Rn.time = fn(),
                Rn;
        return n
    }
    et.prototype.interrupt = function(t) {
        return this.each(function() {
            Cn(this, t)
        })
    }
    ,
    et.prototype.transition = function(t) {
        var e, n;
        t instanceof zn ? (e = t._id,
        t = t._name) : (e = Dn(),
        (n = Rn).time = fn(),
        t = null == t ? null : t + "");
        for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
            for (var o, f = i[a], c = f.length, u = 0; u < c; ++u)
                (o = f[u]) && kn(o, t, e, u, f, n || jn(o, e));
        return new zn(i,this._parents,t,e)
    }
    ;
    ["e", "w"].map(On),
    ["n", "s"].map(On),
    ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(On);
    function On(t) {
        return {
            type: t
        }
    }
    Math.cos,
    Math.sin,
    Math.PI,
    Math.max;
    Array.prototype.slice;
    var Fn = Math.PI
      , Hn = 2 * Fn
      , In = Hn - 1e-6;
    function Xn() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function Vn() {
        return new Xn
    }
    Xn.prototype = Vn.prototype = {
        constructor: Xn,
        moveTo: function(t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0,
            this._y1 = this._y0,
            this._ += "Z")
        },
        lineTo: function(t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i)
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +a)
        },
        arcTo: function(t, e, n, i, r) {
            t = +t,
            e = +e,
            n = +n,
            i = +i,
            r = +r;
            var a = this._x1
              , o = this._y1
              , f = n - t
              , c = i - e
              , u = a - t
              , s = o - e
              , h = u * u + s * s;
            if (r < 0)
                throw new Error("negative radius: " + r);
            if (null === this._x1)
                this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (h > 1e-6)
                if (Math.abs(s * f - c * u) > 1e-6 && r) {
                    var l = n - a
                      , d = i - o
                      , _ = f * f + c * c
                      , p = l * l + d * d
                      , b = Math.sqrt(_)
                      , y = Math.sqrt(h)
                      , v = r * Math.tan((Fn - Math.acos((_ + h - p) / (2 * b * y))) / 2)
                      , g = v / y
                      , x = v / b;
                    Math.abs(g - 1) > 1e-6 && (this._ += "L" + (t + g * u) + "," + (e + g * s)),
                    this._ += "A" + r + "," + r + ",0,0," + +(s * l > u * d) + "," + (this._x1 = t + x * f) + "," + (this._y1 = e + x * c)
                } else
                    this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else
                ;
        },
        arc: function(t, e, n, i, r, a) {
            t = +t,
            e = +e;
            var o = (n = +n) * Math.cos(i)
              , f = n * Math.sin(i)
              , c = t + o
              , u = e + f
              , s = 1 ^ a
              , h = a ? i - r : r - i;
            if (n < 0)
                throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + c + "," + u),
            n && (h < 0 && (h = h % Hn + Hn),
            h > In ? this._ += "A" + n + "," + n + ",0,1," + s + "," + (t - o) + "," + (e - f) + "A" + n + "," + n + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(h >= Fn) + "," + s + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r))))
        },
        rect: function(t, e, n, i) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z"
        },
        toString: function() {
            return this._
        }
    };
    function Bn() {}
    function $n(t, e) {
        var n = new Bn;
        if (t instanceof Bn)
            t.each(function(t, e) {
                n.set(e, t)
            });
        else if (Array.isArray(t)) {
            var i, r = -1, a = t.length;
            if (null == e)
                for (; ++r < a; )
                    n.set(r, t[r]);
            else
                for (; ++r < a; )
                    n.set(e(i = t[r], r, t), i)
        } else if (t)
            for (var o in t)
                n.set(o, t[o]);
        return n
    }
    Bn.prototype = $n.prototype = {
        constructor: Bn,
        has: function(t) {
            return "$" + t in this
        },
        get: function(t) {
            return this["$" + t]
        },
        set: function(t, e) {
            return this["$" + t] = e,
            this
        },
        remove: function(t) {
            var e = "$" + t;
            return e in this && delete this[e]
        },
        clear: function() {
            for (var t in this)
                "$" === t[0] && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var e in this)
                "$" === e[0] && t.push(e.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var e in this)
                "$" === e[0] && t.push(this[e]);
            return t
        },
        entries: function() {
            var t = [];
            for (var e in this)
                "$" === e[0] && t.push({
                    key: e.slice(1),
                    value: this[e]
                });
            return t
        },
        size: function() {
            var t = 0;
            for (var e in this)
                "$" === e[0] && ++t;
            return t
        },
        empty: function() {
            for (var t in this)
                if ("$" === t[0])
                    return !1;
            return !0
        },
        each: function(t) {
            for (var e in this)
                "$" === e[0] && t(this[e], e.slice(1), this)
        }
    };
    var Zn = $n;
    function Wn() {}
    var Gn = Zn.prototype;
    function Qn(t, e) {
        var n = new Wn;
        if (t instanceof Wn)
            t.each(function(t) {
                n.add(t)
            });
        else if (t) {
            var i = -1
              , r = t.length;
            if (null == e)
                for (; ++i < r; )
                    n.add(t[i]);
            else
                for (; ++i < r; )
                    n.add(e(t[i], i, t))
        }
        return n
    }
    Wn.prototype = Qn.prototype = {
        constructor: Wn,
        has: Gn.has,
        add: function(t) {
            return this["$" + (t += "")] = t,
            this
        },
        remove: Gn.remove,
        clear: Gn.clear,
        values: Gn.keys,
        size: Gn.size,
        empty: Gn.empty,
        each: Gn.each
    };
    Array.prototype.slice;
    var Jn = {}
      , Kn = {}
      , ti = 34
      , ei = 10
      , ni = 13;
    function ii(t) {
        return new Function("d","return {" + t.map(function(t, e) {
            return JSON.stringify(t) + ": d[" + e + "]"
        }).join(",") + "}")
    }
    function ri(t) {
        var e = Object.create(null)
          , n = [];
        return t.forEach(function(t) {
            for (var i in t)
                i in e || n.push(e[i] = i)
        }),
        n
    }
    function ai(t, e) {
        var n = t + ""
          , i = n.length;
        return i < e ? new Array(e - i + 1).join(0) + n : n
    }
    function oi(t) {
        var e, n = t.getUTCHours(), i = t.getUTCMinutes(), r = t.getUTCSeconds(), a = t.getUTCMilliseconds();
        return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + ai(-e, 6) : e > 9999 ? "+" + ai(e, 6) : ai(e, 4)) + "-" + ai(t.getUTCMonth() + 1, 2) + "-" + ai(t.getUTCDate(), 2) + (a ? "T" + ai(n, 2) + ":" + ai(i, 2) + ":" + ai(r, 2) + "." + ai(a, 3) + "Z" : r ? "T" + ai(n, 2) + ":" + ai(i, 2) + ":" + ai(r, 2) + "Z" : i || n ? "T" + ai(n, 2) + ":" + ai(i, 2) + "Z" : "")
    }
    var fi = function(t) {
        var e = new RegExp('["' + t + "\n\r]")
          , n = t.charCodeAt(0);
        function i(t, e) {
            var i, r = [], a = t.length, o = 0, f = 0, c = a <= 0, u = !1;
            function s() {
                if (c)
                    return Kn;
                if (u)
                    return u = !1,
                    Jn;
                var e, i, r = o;
                if (t.charCodeAt(r) === ti) {
                    for (; o++ < a && t.charCodeAt(o) !== ti || t.charCodeAt(++o) === ti; )
                        ;
                    return (e = o) >= a ? c = !0 : (i = t.charCodeAt(o++)) === ei ? u = !0 : i === ni && (u = !0,
                    t.charCodeAt(o) === ei && ++o),
                    t.slice(r + 1, e - 1).replace(/""/g, '"')
                }
                for (; o < a; ) {
                    if ((i = t.charCodeAt(e = o++)) === ei)
                        u = !0;
                    else if (i === ni)
                        u = !0,
                        t.charCodeAt(o) === ei && ++o;
                    else if (i !== n)
                        continue;
                    return t.slice(r, e)
                }
                return c = !0,
                t.slice(r, a)
            }
            for (t.charCodeAt(a - 1) === ei && --a,
            t.charCodeAt(a - 1) === ni && --a; (i = s()) !== Kn; ) {
                for (var h = []; i !== Jn && i !== Kn; )
                    h.push(i),
                    i = s();
                e && null == (h = e(h, f++)) || r.push(h)
            }
            return r
        }
        function r(e, n) {
            return e.map(function(e) {
                return n.map(function(t) {
                    return o(e[t])
                }).join(t)
            })
        }
        function a(e) {
            return e.map(o).join(t)
        }
        function o(t) {
            return null == t ? "" : t instanceof Date ? oi(t) : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }
        return {
            parse: function(t, e) {
                var n, r, a = i(t, function(t, i) {
                    if (n)
                        return n(t, i - 1);
                    r = t,
                    n = e ? function(t, e) {
                        var n = ii(t);
                        return function(i, r) {
                            return e(n(i), r, t)
                        }
                    }(t, e) : ii(t)
                });
                return a.columns = r || [],
                a
            },
            parseRows: i,
            format: function(e, n) {
                return null == n && (n = ri(e)),
                [n.map(o).join(t)].concat(r(e, n)).join("\n")
            },
            formatBody: function(t, e) {
                return null == e && (e = ri(t)),
                r(t, e).join("\n")
            },
            formatRows: function(t) {
                return t.map(a).join("\n")
            }
        }
    }
      , ci = fi(",")
      , ui = ci.parse
      , si = (ci.parseRows,
    ci.format,
    ci.formatBody,
    ci.formatRows,
    fi("\t"))
      , hi = si.parse;
    si.parseRows,
    si.format,
    si.formatBody,
    si.formatRows;
    function li(t) {
        if (!t.ok)
            throw new Error(t.status + " " + t.statusText);
        return t.text()
    }
    var di = function(t, e) {
        return fetch(t, e).then(li)
    };
    function _i(t) {
        return function(e, n, i) {
            return 2 === arguments.length && "function" == typeof n && (i = n,
            n = void 0),
            di(e, n).then(function(e) {
                return t(e, i)
            })
        }
    }
    _i(ui),
    _i(hi);
    function pi(t) {
        return function(e, n) {
            return di(e, n).then(function(e) {
                return (new DOMParser).parseFromString(e, t)
            })
        }
    }
    pi("application/xml"),
    pi("text/html"),
    pi("image/svg+xml");
    var bi = function(t, e) {
        var n;
        function i() {
            var i, r, a = n.length, o = 0, f = 0;
            for (i = 0; i < a; ++i)
                o += (r = n[i]).x,
                f += r.y;
            for (o = o / a - t,
            f = f / a - e,
            i = 0; i < a; ++i)
                (r = n[i]).x -= o,
                r.y -= f
        }
        return null == t && (t = 0),
        null == e && (e = 0),
        i.initialize = function(t) {
            n = t
        }
        ,
        i.x = function(e) {
            return arguments.length ? (t = +e,
            i) : t
        }
        ,
        i.y = function(t) {
            return arguments.length ? (e = +t,
            i) : e
        }
        ,
        i
    }
      , yi = function(t) {
        return function() {
            return t
        }
    }
      , vi = function() {
        return 1e-6 * (Math.random() - .5)
    };
    function gi(t, e, n, i) {
        if (isNaN(e) || isNaN(n))
            return t;
        var r, a, o, f, c, u, s, h, l, d = t._root, _ = {
            data: i
        }, p = t._x0, b = t._y0, y = t._x1, v = t._y1;
        if (!d)
            return t._root = _,
            t;
        for (; d.length; )
            if ((u = e >= (a = (p + y) / 2)) ? p = a : y = a,
            (s = n >= (o = (b + v) / 2)) ? b = o : v = o,
            r = d,
            !(d = d[h = s << 1 | u]))
                return r[h] = _,
                t;
        if (f = +t._x.call(null, d.data),
        c = +t._y.call(null, d.data),
        e === f && n === c)
            return _.next = d,
            r ? r[h] = _ : t._root = _,
            t;
        do {
            r = r ? r[h] = new Array(4) : t._root = new Array(4),
            (u = e >= (a = (p + y) / 2)) ? p = a : y = a,
            (s = n >= (o = (b + v) / 2)) ? b = o : v = o
        } while ((h = s << 1 | u) == (l = (c >= o) << 1 | f >= a));return r[l] = d,
        r[h] = _,
        t
    }
    var xi = function(t, e, n, i, r) {
        this.node = t,
        this.x0 = e,
        this.y0 = n,
        this.x1 = i,
        this.y1 = r
    };
    function mi(t) {
        return t[0]
    }
    function wi(t) {
        return t[1]
    }
    function Mi(t, e, n) {
        var i = new ki(null == e ? mi : e,null == n ? wi : n,NaN,NaN,NaN,NaN);
        return null == t ? i : i.addAll(t)
    }
    function ki(t, e, n, i, r, a) {
        this._x = t,
        this._y = e,
        this._x0 = n,
        this._y0 = i,
        this._x1 = r,
        this._y1 = a,
        this._root = void 0
    }
    function Ti(t) {
        for (var e = {
            data: t.data
        }, n = e; t = t.next; )
            n = n.next = {
                data: t.data
            };
        return e
    }
    var Ni = Mi.prototype = ki.prototype;
    function Ai(t) {
        return t.x + t.vx
    }
    function Ci(t) {
        return t.y + t.vy
    }
    Ni.copy = function() {
        var t, e, n = new ki(this._x,this._y,this._x0,this._y0,this._x1,this._y1), i = this._root;
        if (!i)
            return n;
        if (!i.length)
            return n._root = Ti(i),
            n;
        for (t = [{
            source: i,
            target: n._root = new Array(4)
        }]; i = t.pop(); )
            for (var r = 0; r < 4; ++r)
                (e = i.source[r]) && (e.length ? t.push({
                    source: e,
                    target: i.target[r] = new Array(4)
                }) : i.target[r] = Ti(e));
        return n
    }
    ,
    Ni.add = function(t) {
        var e = +this._x.call(null, t)
          , n = +this._y.call(null, t);
        return gi(this.cover(e, n), e, n, t)
    }
    ,
    Ni.addAll = function(t) {
        var e, n, i, r, a = t.length, o = new Array(a), f = new Array(a), c = 1 / 0, u = 1 / 0, s = -1 / 0, h = -1 / 0;
        for (n = 0; n < a; ++n)
            isNaN(i = +this._x.call(null, e = t[n])) || isNaN(r = +this._y.call(null, e)) || (o[n] = i,
            f[n] = r,
            i < c && (c = i),
            i > s && (s = i),
            r < u && (u = r),
            r > h && (h = r));
        if (c > s || u > h)
            return this;
        for (this.cover(c, u).cover(s, h),
        n = 0; n < a; ++n)
            gi(this, o[n], f[n], t[n]);
        return this
    }
    ,
    Ni.cover = function(t, e) {
        if (isNaN(t = +t) || isNaN(e = +e))
            return this;
        var n = this._x0
          , i = this._y0
          , r = this._x1
          , a = this._y1;
        if (isNaN(n))
            r = (n = Math.floor(t)) + 1,
            a = (i = Math.floor(e)) + 1;
        else {
            for (var o, f, c = r - n, u = this._root; n > t || t >= r || i > e || e >= a; )
                switch (f = (e < i) << 1 | t < n,
                (o = new Array(4))[f] = u,
                u = o,
                c *= 2,
                f) {
                case 0:
                    r = n + c,
                    a = i + c;
                    break;
                case 1:
                    n = r - c,
                    a = i + c;
                    break;
                case 2:
                    r = n + c,
                    i = a - c;
                    break;
                case 3:
                    n = r - c,
                    i = a - c
                }
            this._root && this._root.length && (this._root = u)
        }
        return this._x0 = n,
        this._y0 = i,
        this._x1 = r,
        this._y1 = a,
        this
    }
    ,
    Ni.data = function() {
        var t = [];
        return this.visit(function(e) {
            if (!e.length)
                do {
                    t.push(e.data)
                } while (e = e.next)
        }),
        t
    }
    ,
    Ni.extent = function(t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    }
    ,
    Ni.find = function(t, e, n) {
        var i, r, a, o, f, c, u, s = this._x0, h = this._y0, l = this._x1, d = this._y1, _ = [], p = this._root;
        for (p && _.push(new xi(p,s,h,l,d)),
        null == n ? n = 1 / 0 : (s = t - n,
        h = e - n,
        l = t + n,
        d = e + n,
        n *= n); c = _.pop(); )
            if (!(!(p = c.node) || (r = c.x0) > l || (a = c.y0) > d || (o = c.x1) < s || (f = c.y1) < h))
                if (p.length) {
                    var b = (r + o) / 2
                      , y = (a + f) / 2;
                    _.push(new xi(p[3],b,y,o,f), new xi(p[2],r,y,b,f), new xi(p[1],b,a,o,y), new xi(p[0],r,a,b,y)),
                    (u = (e >= y) << 1 | t >= b) && (c = _[_.length - 1],
                    _[_.length - 1] = _[_.length - 1 - u],
                    _[_.length - 1 - u] = c)
                } else {
                    var v = t - +this._x.call(null, p.data)
                      , g = e - +this._y.call(null, p.data)
                      , x = v * v + g * g;
                    if (x < n) {
                        var m = Math.sqrt(n = x);
                        s = t - m,
                        h = e - m,
                        l = t + m,
                        d = e + m,
                        i = p.data
                    }
                }
        return i
    }
    ,
    Ni.remove = function(t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t)))
            return this;
        var e, n, i, r, a, o, f, c, u, s, h, l, d = this._root, _ = this._x0, p = this._y0, b = this._x1, y = this._y1;
        if (!d)
            return this;
        if (d.length)
            for (; ; ) {
                if ((u = a >= (f = (_ + b) / 2)) ? _ = f : b = f,
                (s = o >= (c = (p + y) / 2)) ? p = c : y = c,
                e = d,
                !(d = d[h = s << 1 | u]))
                    return this;
                if (!d.length)
                    break;
                (e[h + 1 & 3] || e[h + 2 & 3] || e[h + 3 & 3]) && (n = e,
                l = h)
            }
        for (; d.data !== t; )
            if (i = d,
            !(d = d.next))
                return this;
        return (r = d.next) && delete d.next,
        i ? (r ? i.next = r : delete i.next,
        this) : e ? (r ? e[h] = r : delete e[h],
        (d = e[0] || e[1] || e[2] || e[3]) && d === (e[3] || e[2] || e[1] || e[0]) && !d.length && (n ? n[l] = d : this._root = d),
        this) : (this._root = r,
        this)
    }
    ,
    Ni.removeAll = function(t) {
        for (var e = 0, n = t.length; e < n; ++e)
            this.remove(t[e]);
        return this
    }
    ,
    Ni.root = function() {
        return this._root
    }
    ,
    Ni.size = function() {
        var t = 0;
        return this.visit(function(e) {
            if (!e.length)
                do {
                    ++t
                } while (e = e.next)
        }),
        t
    }
    ,
    Ni.visit = function(t) {
        var e, n, i, r, a, o, f = [], c = this._root;
        for (c && f.push(new xi(c,this._x0,this._y0,this._x1,this._y1)); e = f.pop(); )
            if (!t(c = e.node, i = e.x0, r = e.y0, a = e.x1, o = e.y1) && c.length) {
                var u = (i + a) / 2
                  , s = (r + o) / 2;
                (n = c[3]) && f.push(new xi(n,u,s,a,o)),
                (n = c[2]) && f.push(new xi(n,i,s,u,o)),
                (n = c[1]) && f.push(new xi(n,u,r,a,s)),
                (n = c[0]) && f.push(new xi(n,i,r,u,s))
            }
        return this
    }
    ,
    Ni.visitAfter = function(t) {
        var e, n = [], i = [];
        for (this._root && n.push(new xi(this._root,this._x0,this._y0,this._x1,this._y1)); e = n.pop(); ) {
            var r = e.node;
            if (r.length) {
                var a, o = e.x0, f = e.y0, c = e.x1, u = e.y1, s = (o + c) / 2, h = (f + u) / 2;
                (a = r[0]) && n.push(new xi(a,o,f,s,h)),
                (a = r[1]) && n.push(new xi(a,s,f,c,h)),
                (a = r[2]) && n.push(new xi(a,o,h,s,u)),
                (a = r[3]) && n.push(new xi(a,s,h,c,u))
            }
            i.push(e)
        }
        for (; e = i.pop(); )
            t(e.node, e.x0, e.y0, e.x1, e.y1);
        return this
    }
    ,
    Ni.x = function(t) {
        return arguments.length ? (this._x = t,
        this) : this._x
    }
    ,
    Ni.y = function(t) {
        return arguments.length ? (this._y = t,
        this) : this._y
    }
    ;
    var Si = function(t) {
        var e, n, i = 1, r = 1;
        function a() {
            for (var t, a, f, c, u, s, h, l = e.length, d = 0; d < r; ++d)
                for (a = Mi(e, Ai, Ci).visitAfter(o),
                t = 0; t < l; ++t)
                    f = e[t],
                    s = n[f.index],
                    h = s * s,
                    c = f.x + f.vx,
                    u = f.y + f.vy,
                    a.visit(_);
            function _(t, e, n, r, a) {
                var o = t.data
                  , l = t.r
                  , d = s + l;
                if (!o)
                    return e > c + d || r < c - d || n > u + d || a < u - d;
                if (o.index > f.index) {
                    var _ = c - o.x - o.vx
                      , p = u - o.y - o.vy
                      , b = _ * _ + p * p;
                    b < d * d && (0 === _ && (b += (_ = vi()) * _),
                    0 === p && (b += (p = vi()) * p),
                    b = (d - (b = Math.sqrt(b))) / b * i,
                    f.vx += (_ *= b) * (d = (l *= l) / (h + l)),
                    f.vy += (p *= b) * d,
                    o.vx -= _ * (d = 1 - d),
                    o.vy -= p * d)
                }
            }
        }
        function o(t) {
            if (t.data)
                return t.r = n[t.data.index];
            for (var e = t.r = 0; e < 4; ++e)
                t[e] && t[e].r > t.r && (t.r = t[e].r)
        }
        function f() {
            if (e) {
                var i, r, a = e.length;
                for (n = new Array(a),
                i = 0; i < a; ++i)
                    r = e[i],
                    n[r.index] = +t(r, i, e)
            }
        }
        return "function" != typeof t && (t = yi(null == t ? 1 : +t)),
        a.initialize = function(t) {
            e = t,
            f()
        }
        ,
        a.iterations = function(t) {
            return arguments.length ? (r = +t,
            a) : r
        }
        ,
        a.strength = function(t) {
            return arguments.length ? (i = +t,
            a) : i
        }
        ,
        a.radius = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : yi(+e),
            f(),
            a) : t
        }
        ,
        a
    };
    function Ei(t) {
        return t.index
    }
    function Ui(t, e) {
        var n = t.get(e);
        if (!n)
            throw new Error("missing: " + e);
        return n
    }
    var Pi = function(t) {
        var e, n, i, r, a, o = Ei, f = function(t) {
            return 1 / Math.min(r[t.source.index], r[t.target.index])
        }, c = yi(30), u = 1;
        function s(i) {
            for (var r = 0, o = t.length; r < u; ++r)
                for (var f, c, s, h, l, d, _, p = 0; p < o; ++p)
                    c = (f = t[p]).source,
                    h = (s = f.target).x + s.vx - c.x - c.vx || vi(),
                    l = s.y + s.vy - c.y - c.vy || vi(),
                    h *= d = ((d = Math.sqrt(h * h + l * l)) - n[p]) / d * i * e[p],
                    l *= d,
                    s.vx -= h * (_ = a[p]),
                    s.vy -= l * _,
                    c.vx += h * (_ = 1 - _),
                    c.vy += l * _
        }
        function h() {
            if (i) {
                var f, c, u = i.length, s = t.length, h = Zn(i, o);
                for (f = 0,
                r = new Array(u); f < s; ++f)
                    (c = t[f]).index = f,
                    "object" != typeof c.source && (c.source = Ui(h, c.source)),
                    "object" != typeof c.target && (c.target = Ui(h, c.target)),
                    r[c.source.index] = (r[c.source.index] || 0) + 1,
                    r[c.target.index] = (r[c.target.index] || 0) + 1;
                for (f = 0,
                a = new Array(s); f < s; ++f)
                    c = t[f],
                    a[f] = r[c.source.index] / (r[c.source.index] + r[c.target.index]);
                e = new Array(s),
                l(),
                n = new Array(s),
                d()
            }
        }
        function l() {
            if (i)
                for (var n = 0, r = t.length; n < r; ++n)
                    e[n] = +f(t[n], n, t)
        }
        function d() {
            if (i)
                for (var e = 0, r = t.length; e < r; ++e)
                    n[e] = +c(t[e], e, t)
        }
        return null == t && (t = []),
        s.initialize = function(t) {
            i = t,
            h()
        }
        ,
        s.links = function(e) {
            return arguments.length ? (t = e,
            h(),
            s) : t
        }
        ,
        s.id = function(t) {
            return arguments.length ? (o = t,
            s) : o
        }
        ,
        s.iterations = function(t) {
            return arguments.length ? (u = +t,
            s) : u
        }
        ,
        s.strength = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : yi(+t),
            l(),
            s) : f
        }
        ,
        s.distance = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t : yi(+t),
            d(),
            s) : c
        }
        ,
        s
    };
    function Li(t) {
        return t.x
    }
    function zi(t) {
        return t.y
    }
    var Di = 10
      , Yi = Math.PI * (3 - Math.sqrt(5))
      , qi = function(t) {
        var e, n = 1, i = .001, r = 1 - Math.pow(i, 1 / 300), a = 0, o = .6, f = Zn(), c = sn(s), u = d("tick", "end");
        function s() {
            h(),
            u.call("tick", e),
            n < i && (c.stop(),
            u.call("end", e))
        }
        function h(i) {
            var c, u, s = t.length;
            void 0 === i && (i = 1);
            for (var h = 0; h < i; ++h)
                for (n += (a - n) * r,
                f.each(function(t) {
                    t(n)
                }),
                c = 0; c < s; ++c)
                    null == (u = t[c]).fx ? u.x += u.vx *= o : (u.x = u.fx,
                    u.vx = 0),
                    null == u.fy ? u.y += u.vy *= o : (u.y = u.fy,
                    u.vy = 0);
            return e
        }
        function l() {
            for (var e, n = 0, i = t.length; n < i; ++n) {
                if ((e = t[n]).index = n,
                isNaN(e.fx) || (e.x = e.fx),
                isNaN(e.fy) || (e.y = e.fy),
                isNaN(e.x) || isNaN(e.y)) {
                    var r = Di * Math.sqrt(n)
                      , a = n * Yi;
                    e.x = r * Math.cos(a),
                    e.y = r * Math.sin(a)
                }
                (isNaN(e.vx) || isNaN(e.vy)) && (e.vx = e.vy = 0)
            }
        }
        function _(e) {
            return e.initialize && e.initialize(t),
            e
        }
        return null == t && (t = []),
        l(),
        e = {
            tick: h,
            restart: function() {
                return c.restart(s),
                e
            },
            stop: function() {
                return c.stop(),
                e
            },
            nodes: function(n) {
                return arguments.length ? (t = n,
                l(),
                f.each(_),
                e) : t
            },
            alpha: function(t) {
                return arguments.length ? (n = +t,
                e) : n
            },
            alphaMin: function(t) {
                return arguments.length ? (i = +t,
                e) : i
            },
            alphaDecay: function(t) {
                return arguments.length ? (r = +t,
                e) : +r
            },
            alphaTarget: function(t) {
                return arguments.length ? (a = +t,
                e) : a
            },
            velocityDecay: function(t) {
                return arguments.length ? (o = 1 - t,
                e) : 1 - o
            },
            force: function(t, n) {
                return arguments.length > 1 ? (null == n ? f.remove(t) : f.set(t, _(n)),
                e) : f.get(t)
            },
            find: function(e, n, i) {
                var r, a, o, f, c, u = 0, s = t.length;
                for (null == i ? i = 1 / 0 : i *= i,
                u = 0; u < s; ++u)
                    (o = (r = e - (f = t[u]).x) * r + (a = n - f.y) * a) < i && (c = f,
                    i = o);
                return c
            },
            on: function(t, n) {
                return arguments.length > 1 ? (u.on(t, n),
                e) : u.on(t)
            }
        }
    }
      , Ri = function() {
        var t, e, n, i, r = yi(-30), a = 1, o = 1 / 0, f = .81;
        function c(i) {
            var r, a = t.length, o = Mi(t, Li, zi).visitAfter(s);
            for (n = i,
            r = 0; r < a; ++r)
                e = t[r],
                o.visit(h)
        }
        function u() {
            if (t) {
                var e, n, a = t.length;
                for (i = new Array(a),
                e = 0; e < a; ++e)
                    n = t[e],
                    i[n.index] = +r(n, e, t)
            }
        }
        function s(t) {
            var e, n, r, a, o, f = 0, c = 0;
            if (t.length) {
                for (r = a = o = 0; o < 4; ++o)
                    (e = t[o]) && (n = Math.abs(e.value)) && (f += e.value,
                    c += n,
                    r += n * e.x,
                    a += n * e.y);
                t.x = r / c,
                t.y = a / c
            } else {
                (e = t).x = e.data.x,
                e.y = e.data.y;
                do {
                    f += i[e.data.index]
                } while (e = e.next)
            }
            t.value = f
        }
        function h(t, r, c, u) {
            if (!t.value)
                return !0;
            var s = t.x - e.x
              , h = t.y - e.y
              , l = u - r
              , d = s * s + h * h;
            if (l * l / f < d)
                return d < o && (0 === s && (d += (s = vi()) * s),
                0 === h && (d += (h = vi()) * h),
                d < a && (d = Math.sqrt(a * d)),
                e.vx += s * t.value * n / d,
                e.vy += h * t.value * n / d),
                !0;
            if (!(t.length || d >= o)) {
                (t.data !== e || t.next) && (0 === s && (d += (s = vi()) * s),
                0 === h && (d += (h = vi()) * h),
                d < a && (d = Math.sqrt(a * d)));
                do {
                    t.data !== e && (l = i[t.data.index] * n / d,
                    e.vx += s * l,
                    e.vy += h * l)
                } while (t = t.next)
            }
        }
        return c.initialize = function(e) {
            t = e,
            u()
        }
        ,
        c.strength = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : yi(+t),
            u(),
            c) : r
        }
        ,
        c.distanceMin = function(t) {
            return arguments.length ? (a = t * t,
            c) : Math.sqrt(a)
        }
        ,
        c.distanceMax = function(t) {
            return arguments.length ? (o = t * t,
            c) : Math.sqrt(o)
        }
        ,
        c.theta = function(t) {
            return arguments.length ? (f = t * t,
            c) : Math.sqrt(f)
        }
        ,
        c
    }
      , ji = function(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
            return null;
        var n, i = t.slice(0, n);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)]
    }
      , Oi = function(t) {
        return (t = ji(Math.abs(t))) ? t[1] : NaN
    }
      , Fi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function Hi(t) {
        return new Ii(t)
    }
    function Ii(t) {
        if (!(e = Fi.exec(t)))
            throw new Error("invalid format: " + t);
        var e;
        this.fill = e[1] || " ",
        this.align = e[2] || ">",
        this.sign = e[3] || "-",
        this.symbol = e[4] || "",
        this.zero = !!e[5],
        this.width = e[6] && +e[6],
        this.comma = !!e[7],
        this.precision = e[8] && +e[8].slice(1),
        this.trim = !!e[9],
        this.type = e[10] || ""
    }
    Hi.prototype = Ii.prototype,
    Ii.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    }
    ;
    var Xi, Vi, Bi = function(t) {
        t: for (var e, n = t.length, i = 1, r = -1; i < n; ++i)
            switch (t[i]) {
            case ".":
                r = e = i;
                break;
            case "0":
                0 === r && (r = i),
                e = i;
                break;
            default:
                if (r > 0) {
                    if (!+t[i])
                        break t;
                    r = 0
                }
            }
        return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t
    }, $i = function(t, e) {
        var n = ji(t, e);
        if (!n)
            return t + "";
        var i = n[0]
          , r = n[1];
        return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
    }, Zi = {
        "%": function(t, e) {
            return (100 * t).toFixed(e)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, e) {
            return t.toExponential(e)
        },
        f: function(t, e) {
            return t.toFixed(e)
        },
        g: function(t, e) {
            return t.toPrecision(e)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, e) {
            return $i(100 * t, e)
        },
        r: $i,
        s: function(t, e) {
            var n = ji(t, e);
            if (!n)
                return t + "";
            var i = n[0]
              , r = n[1]
              , a = r - (Xi = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1
              , o = i.length;
            return a === o ? i : a > o ? i + new Array(a - o + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + ji(t, Math.max(0, e + a - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    }, Wi = function(t) {
        return t
    }, Gi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    Vi = function(t) {
        var e, n, i = t.grouping && t.thousands ? (e = t.grouping,
        n = t.thousands,
        function(t, i) {
            for (var r = t.length, a = [], o = 0, f = e[0], c = 0; r > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)),
            a.push(t.substring(r -= f, r + f)),
            !((c += f + 1) > i)); )
                f = e[o = (o + 1) % e.length];
            return a.reverse().join(n)
        }
        ) : Wi, r = t.currency, a = t.decimal, o = t.numerals ? function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, function(e) {
                    return t[+e]
                })
            }
        }(t.numerals) : Wi, f = t.percent || "%";
        function c(t) {
            var e = (t = Hi(t)).fill
              , n = t.align
              , c = t.sign
              , u = t.symbol
              , s = t.zero
              , h = t.width
              , l = t.comma
              , d = t.precision
              , _ = t.trim
              , p = t.type;
            "n" === p ? (l = !0,
            p = "g") : Zi[p] || (null == d && (d = 12),
            _ = !0,
            p = "g"),
            (s || "0" === e && "=" === n) && (s = !0,
            e = "0",
            n = "=");
            var b = "$" === u ? r[0] : "#" === u && /[boxX]/.test(p) ? "0" + p.toLowerCase() : ""
              , y = "$" === u ? r[1] : /[%p]/.test(p) ? f : ""
              , v = Zi[p]
              , g = /[defgprs%]/.test(p);
            function x(t) {
                var r, f, u, x = b, m = y;
                if ("c" === p)
                    m = v(t) + m,
                    t = "";
                else {
                    var w = (t = +t) < 0;
                    if (t = v(Math.abs(t), d),
                    _ && (t = Bi(t)),
                    w && 0 == +t && (w = !1),
                    x = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + x,
                    m = ("s" === p ? Gi[8 + Xi / 3] : "") + m + (w && "(" === c ? ")" : ""),
                    g)
                        for (r = -1,
                        f = t.length; ++r < f; )
                            if (48 > (u = t.charCodeAt(r)) || u > 57) {
                                m = (46 === u ? a + t.slice(r + 1) : t.slice(r)) + m,
                                t = t.slice(0, r);
                                break
                            }
                }
                l && !s && (t = i(t, 1 / 0));
                var M = x.length + t.length + m.length
                  , k = M < h ? new Array(h - M + 1).join(e) : "";
                switch (l && s && (t = i(k + t, k.length ? h - m.length : 1 / 0),
                k = ""),
                n) {
                case "<":
                    t = x + t + m + k;
                    break;
                case "=":
                    t = x + k + t + m;
                    break;
                case "^":
                    t = k.slice(0, M = k.length >> 1) + x + t + m + k.slice(M);
                    break;
                default:
                    t = k + x + t + m
                }
                return o(t)
            }
            return d = null == d ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)),
            x.toString = function() {
                return t + ""
            }
            ,
            x
        }
        return {
            format: c,
            formatPrefix: function(t, e) {
                var n = c(((t = Hi(t)).type = "f",
                t))
                  , i = 3 * Math.max(-8, Math.min(8, Math.floor(Oi(e) / 3)))
                  , r = Math.pow(10, -i)
                  , a = Gi[8 + i / 3];
                return function(t) {
                    return n(r * t) + a
                }
            }
        }
    }({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    }),
    Vi.format,
    Vi.formatPrefix;
    var Qi = function() {
        return new Ji
    };
    function Ji() {
        this.reset()
    }
    Ji.prototype = {
        constructor: Ji,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            tr(Ki, t, this.t),
            tr(this, Ki.s, this.s),
            this.s ? this.t += Ki.t : this.s = Ki.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var Ki = new Ji;
    function tr(t, e, n) {
        var i = t.s = e + n
          , r = i - e
          , a = i - r;
        t.t = e - a + (n - r)
    }
    var er = 1e-6
      , nr = Math.PI
      , ir = nr / 2
      , rr = nr / 4
      , ar = 2 * nr
      , or = nr / 180
      , fr = Math.abs
      , cr = Math.atan
      , ur = Math.atan2
      , sr = Math.cos
      , hr = (Math.ceil,
    Math.exp)
      , lr = (Math.floor,
    Math.log)
      , dr = (Math.pow,
    Math.sin)
      , _r = (Math.sign,
    Math.sqrt)
      , pr = Math.tan;
    function br(t) {
        return t > 1 ? 0 : t < -1 ? nr : Math.acos(t)
    }
    function yr(t) {
        return t > 1 ? ir : t < -1 ? -ir : Math.asin(t)
    }
    function vr() {}
    Qi(),
    Qi();
    function gr(t) {
        var e = t[0]
          , n = t[1]
          , i = sr(n);
        return [i * sr(e), i * dr(e), dr(n)]
    }
    function xr(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }
    function mr(t) {
        var e = _r(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e,
        t[1] /= e,
        t[2] /= e
    }
    Qi();
    function wr(t, e) {
        return [fr(t) > nr ? t + Math.round(-t / ar) * ar : t, e]
    }
    wr.invert = wr;
    var Mr = function() {
        var t, e = [];
        return {
            point: function(e, n) {
                t.push([e, n])
            },
            lineStart: function() {
                e.push(t = [])
            },
            lineEnd: vr,
            rejoin: function() {
                e.length > 1 && e.push(e.pop().concat(e.shift()))
            },
            result: function() {
                var n = e;
                return e = [],
                t = null,
                n
            }
        }
    }
      , kr = function(t, e) {
        return fr(t[0] - e[0]) < er && fr(t[1] - e[1]) < er
    };
    function Tr(t, e, n, i) {
        this.x = t,
        this.z = e,
        this.o = n,
        this.e = i,
        this.v = !1,
        this.n = this.p = null
    }
    var Nr = function(t, e, n, i, r) {
        var a, o, f = [], c = [];
        if (t.forEach(function(t) {
            if (!((e = t.length - 1) <= 0)) {
                var e, n, i = t[0], o = t[e];
                if (kr(i, o)) {
                    for (r.lineStart(),
                    a = 0; a < e; ++a)
                        r.point((i = t[a])[0], i[1]);
                    r.lineEnd()
                } else
                    f.push(n = new Tr(i,t,null,!0)),
                    c.push(n.o = new Tr(i,null,n,!1)),
                    f.push(n = new Tr(o,t,null,!1)),
                    c.push(n.o = new Tr(o,null,n,!0))
            }
        }),
        f.length) {
            for (c.sort(e),
            Ar(f),
            Ar(c),
            a = 0,
            o = c.length; a < o; ++a)
                c[a].e = n = !n;
            for (var u, s, h = f[0]; ; ) {
                for (var l = h, d = !0; l.v; )
                    if ((l = l.n) === h)
                        return;
                u = l.z,
                r.lineStart();
                do {
                    if (l.v = l.o.v = !0,
                    l.e) {
                        if (d)
                            for (a = 0,
                            o = u.length; a < o; ++a)
                                r.point((s = u[a])[0], s[1]);
                        else
                            i(l.x, l.n.x, 1, r);
                        l = l.n
                    } else {
                        if (d)
                            for (u = l.p.z,
                            a = u.length - 1; a >= 0; --a)
                                r.point((s = u[a])[0], s[1]);
                        else
                            i(l.x, l.p.x, -1, r);
                        l = l.p
                    }
                    u = (l = l.o).z,
                    d = !d
                } while (!l.v);r.lineEnd()
            }
        }
    };
    function Ar(t) {
        if (e = t.length) {
            for (var e, n, i = 0, r = t[0]; ++i < e; )
                r.n = n = t[i],
                n.p = r,
                r = n;
            r.n = n = t[0],
            n.p = r
        }
    }
    var Cr = Qi()
      , Sr = function(t, e) {
        var n = e[0]
          , i = e[1]
          , r = dr(i)
          , a = [dr(n), -sr(n), 0]
          , o = 0
          , f = 0;
        Cr.reset(),
        1 === r ? i = ir + er : -1 === r && (i = -ir - er);
        for (var c = 0, u = t.length; c < u; ++c)
            if (h = (s = t[c]).length)
                for (var s, h, l = s[h - 1], d = l[0], _ = l[1] / 2 + rr, p = dr(_), b = sr(_), y = 0; y < h; ++y,
                d = g,
                p = m,
                b = w,
                l = v) {
                    var v = s[y]
                      , g = v[0]
                      , x = v[1] / 2 + rr
                      , m = dr(x)
                      , w = sr(x)
                      , M = g - d
                      , k = M >= 0 ? 1 : -1
                      , T = k * M
                      , N = T > nr
                      , A = p * m;
                    if (Cr.add(ur(A * k * dr(T), b * w + A * sr(T))),
                    o += N ? M + k * ar : M,
                    N ^ d >= n ^ g >= n) {
                        var C = xr(gr(l), gr(v));
                        mr(C);
                        var S = xr(a, C);
                        mr(S);
                        var E = (N ^ M >= 0 ? -1 : 1) * yr(S[2]);
                        (i > E || i === E && (C[0] || C[1])) && (f += N ^ M >= 0 ? 1 : -1)
                    }
                }
        return (o < -er || o < er && Cr < -er) ^ 1 & f
    }
      , Er = function(t, e, n, i) {
        return function(r) {
            var a, o, c, u = e(r), s = Mr(), h = e(s), l = !1, d = {
                point: _,
                lineStart: b,
                lineEnd: y,
                polygonStart: function() {
                    d.point = v,
                    d.lineStart = g,
                    d.lineEnd = x,
                    o = [],
                    a = []
                },
                polygonEnd: function() {
                    d.point = _,
                    d.lineStart = b,
                    d.lineEnd = y,
                    o = f(o);
                    var t = Sr(a, i);
                    o.length ? (l || (r.polygonStart(),
                    l = !0),
                    Nr(o, Pr, t, n, r)) : t && (l || (r.polygonStart(),
                    l = !0),
                    r.lineStart(),
                    n(null, null, 1, r),
                    r.lineEnd()),
                    l && (r.polygonEnd(),
                    l = !1),
                    o = a = null
                },
                sphere: function() {
                    r.polygonStart(),
                    r.lineStart(),
                    n(null, null, 1, r),
                    r.lineEnd(),
                    r.polygonEnd()
                }
            };
            function _(e, n) {
                t(e, n) && r.point(e, n)
            }
            function p(t, e) {
                u.point(t, e)
            }
            function b() {
                d.point = p,
                u.lineStart()
            }
            function y() {
                d.point = _,
                u.lineEnd()
            }
            function v(t, e) {
                c.push([t, e]),
                h.point(t, e)
            }
            function g() {
                h.lineStart(),
                c = []
            }
            function x() {
                v(c[0][0], c[0][1]),
                h.lineEnd();
                var t, e, n, i, f = h.clean(), u = s.result(), d = u.length;
                if (c.pop(),
                a.push(c),
                c = null,
                d)
                    if (1 & f) {
                        if ((e = (n = u[0]).length - 1) > 0) {
                            for (l || (r.polygonStart(),
                            l = !0),
                            r.lineStart(),
                            t = 0; t < e; ++t)
                                r.point((i = n[t])[0], i[1]);
                            r.lineEnd()
                        }
                    } else
                        d > 1 && 2 & f && u.push(u.pop().concat(u.shift())),
                        o.push(u.filter(Ur))
            }
            return d
        }
    };
    function Ur(t) {
        return t.length > 1
    }
    function Pr(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - ir - er : ir - t[1]) - ((e = e.x)[0] < 0 ? e[1] - ir - er : ir - e[1])
    }
    Er(function() {
        return !0
    }, function(t) {
        var e, n = NaN, i = NaN, r = NaN;
        return {
            lineStart: function() {
                t.lineStart(),
                e = 1
            },
            point: function(a, o) {
                var f = a > 0 ? nr : -nr
                  , c = fr(a - n);
                fr(c - nr) < er ? (t.point(n, i = (i + o) / 2 > 0 ? ir : -ir),
                t.point(r, i),
                t.lineEnd(),
                t.lineStart(),
                t.point(f, i),
                t.point(a, i),
                e = 0) : r !== f && c >= nr && (fr(n - r) < er && (n -= r * er),
                fr(a - f) < er && (a -= f * er),
                i = function(t, e, n, i) {
                    var r, a, o = dr(t - n);
                    return fr(o) > er ? cr((dr(e) * (a = sr(i)) * dr(n) - dr(i) * (r = sr(e)) * dr(t)) / (r * a * o)) : (e + i) / 2
                }(n, i, a, o),
                t.point(r, i),
                t.lineEnd(),
                t.lineStart(),
                t.point(f, i),
                e = 0),
                t.point(n = a, i = o),
                r = f
            },
            lineEnd: function() {
                t.lineEnd(),
                n = i = NaN
            },
            clean: function() {
                return 2 - e
            }
        }
    }, function(t, e, n, i) {
        var r;
        if (null == t)
            r = n * ir,
            i.point(-nr, r),
            i.point(0, r),
            i.point(nr, r),
            i.point(nr, 0),
            i.point(nr, -r),
            i.point(0, -r),
            i.point(-nr, -r),
            i.point(-nr, 0),
            i.point(-nr, r);
        else if (fr(t[0] - e[0]) > er) {
            var a = t[0] < e[0] ? nr : -nr;
            r = n * a / 2,
            i.point(-a, r),
            i.point(0, r),
            i.point(a, r)
        } else
            i.point(e[0], e[1])
    }, [-nr, -ir]);
    Qi();
    Qi(),
    Qi();
    function Lr(t) {
        this._context = t
    }
    Lr.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t,
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(),
            this._point = NaN
        },
        point: function(t, e) {
            switch (this._point) {
            case 0:
                this._context.moveTo(t, e),
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(t, e);
                break;
            default:
                this._context.moveTo(t + this._radius, e),
                this._context.arc(t, e, this._radius, 0, ar)
            }
        },
        result: vr
    };
    Qi();
    function zr() {
        this._string = []
    }
    function Dr(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    zr.prototype = {
        _radius: 4.5,
        _circle: Dr(4.5),
        pointRadius: function(t) {
            return (t = +t) !== this._radius && (this._radius = t,
            this._circle = null),
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"),
            this._point = NaN
        },
        point: function(t, e) {
            switch (this._point) {
            case 0:
                this._string.push("M", t, ",", e),
                this._point = 1;
                break;
            case 1:
                this._string.push("L", t, ",", e);
                break;
            default:
                null == this._circle && (this._circle = Dr(this._radius)),
                this._string.push("M", t, ",", e, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [],
                t
            }
            return null
        }
    };
    function Yr(t) {
        return function(e) {
            var n = new qr;
            for (var i in t)
                n[i] = t[i];
            return n.stream = e,
            n
        }
    }
    function qr() {}
    qr.prototype = {
        constructor: qr,
        point: function(t, e) {
            this.stream.point(t, e)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    sr(30 * or);
    Yr({
        point: function(t, e) {
            this.stream.point(t * or, e * or)
        }
    });
    function Rr(t) {
        return function(e, n) {
            var i = sr(e)
              , r = sr(n)
              , a = t(i * r);
            return [a * r * dr(e), a * dr(n)]
        }
    }
    function jr(t) {
        return function(e, n) {
            var i = _r(e * e + n * n)
              , r = t(i)
              , a = dr(r)
              , o = sr(r);
            return [ur(e * a, i * o), yr(i && n * a / i)]
        }
    }
    var Or = Rr(function(t) {
        return _r(2 / (1 + t))
    });
    Or.invert = jr(function(t) {
        return 2 * yr(t / 2)
    });
    var Fr = Rr(function(t) {
        return (t = br(t)) && t / dr(t)
    });
    Fr.invert = jr(function(t) {
        return t
    });
    function Hr(t, e) {
        return [t, lr(pr((ir + e) / 2))]
    }
    Hr.invert = function(t, e) {
        return [t, 2 * cr(hr(e)) - ir]
    }
    ;
    function Ir(t, e) {
        return [t, e]
    }
    Ir.invert = Ir;
    var Xr = 1.340264
      , Vr = -.081106
      , Br = 893e-6
      , $r = .003796
      , Zr = _r(3) / 2;
    function Wr(t, e) {
        var n = yr(Zr * dr(e))
          , i = n * n
          , r = i * i * i;
        return [t * sr(n) / (Zr * (Xr + 3 * Vr * i + r * (7 * Br + 9 * $r * i))), n * (Xr + Vr * i + r * (Br + $r * i))]
    }
    Wr.invert = function(t, e) {
        for (var n, i = e, r = i * i, a = r * r * r, o = 0; o < 12 && (a = (r = (i -= n = (i * (Xr + Vr * r + a * (Br + $r * r)) - e) / (Xr + 3 * Vr * r + a * (7 * Br + 9 * $r * r))) * i) * r * r,
        !(fr(n) < 1e-12)); ++o)
            ;
        return [Zr * t * (Xr + 3 * Vr * r + a * (7 * Br + 9 * $r * r)) / sr(i), yr(dr(i) / Zr)]
    }
    ;
    function Gr(t, e) {
        var n = sr(e)
          , i = sr(t) * n;
        return [n * dr(t) / i, dr(e) / i]
    }
    Gr.invert = jr(cr);
    function Qr(t, e) {
        var n = e * e
          , i = n * n;
        return [t * (.8707 - .131979 * n + i * (i * (.003971 * n - .001529 * i) - .013791)), e * (1.007226 + n * (.015085 + i * (.028874 * n - .044475 - .005916 * i)))]
    }
    Qr.invert = function(t, e) {
        var n, i = e, r = 25;
        do {
            var a = i * i
              , o = a * a;
            i -= n = (i * (1.007226 + a * (.015085 + o * (.028874 * a - .044475 - .005916 * o))) - e) / (1.007226 + a * (.045255 + o * (.259866 * a - .311325 - .005916 * 11 * o)))
        } while (fr(n) > er && --r > 0);return [t / (.8707 + (a = i * i) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), i]
    }
    ;
    function Jr(t, e) {
        return [sr(e) * dr(t), dr(e)]
    }
    Jr.invert = jr(yr);
    function Kr(t, e) {
        var n = sr(e)
          , i = 1 + sr(t) * n;
        return [n * dr(t) / i, dr(e) / i]
    }
    Kr.invert = jr(function(t) {
        return 2 * cr(t)
    });
    function ta(t, e) {
        return [lr(pr((ir + e) / 2)), -t]
    }
    ta.invert = function(t, e) {
        return [-e, 2 * cr(hr(t)) - ir]
    }
    ;
    function ea(t) {
        var e = 0
          , n = t.children
          , i = n && n.length;
        if (i)
            for (; --i >= 0; )
                e += n[i].value;
        else
            e = 1;
        t.value = e
    }
    function na(t, e) {
        var n, i, r, a, o, f = new oa(t), c = +t.value && (f.value = t.value), u = [f];
        for (null == e && (e = ia); n = u.pop(); )
            if (c && (n.value = +n.data.value),
            (r = e(n.data)) && (o = r.length))
                for (n.children = new Array(o),
                a = o - 1; a >= 0; --a)
                    u.push(i = n.children[a] = new oa(r[a])),
                    i.parent = n,
                    i.depth = n.depth + 1;
        return f.eachBefore(aa)
    }
    function ia(t) {
        return t.children
    }
    function ra(t) {
        t.data = t.data.data
    }
    function aa(t) {
        var e = 0;
        do {
            t.height = e
        } while ((t = t.parent) && t.height < ++e)
    }
    function oa(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    oa.prototype = na.prototype = {
        constructor: oa,
        count: function() {
            return this.eachAfter(ea)
        },
        each: function(t) {
            var e, n, i, r, a = this, o = [a];
            do {
                for (e = o.reverse(),
                o = []; a = e.pop(); )
                    if (t(a),
                    n = a.children)
                        for (i = 0,
                        r = n.length; i < r; ++i)
                            o.push(n[i])
            } while (o.length);return this
        },
        eachAfter: function(t) {
            for (var e, n, i, r = this, a = [r], o = []; r = a.pop(); )
                if (o.push(r),
                e = r.children)
                    for (n = 0,
                    i = e.length; n < i; ++n)
                        a.push(e[n]);
            for (; r = o.pop(); )
                t(r);
            return this
        },
        eachBefore: function(t) {
            for (var e, n, i = this, r = [i]; i = r.pop(); )
                if (t(i),
                e = i.children)
                    for (n = e.length - 1; n >= 0; --n)
                        r.push(e[n]);
            return this
        },
        sum: function(t) {
            return this.eachAfter(function(e) {
                for (var n = +t(e.data) || 0, i = e.children, r = i && i.length; --r >= 0; )
                    n += i[r].value;
                e.value = n
            })
        },
        sort: function(t) {
            return this.eachBefore(function(e) {
                e.children && e.children.sort(t)
            })
        },
        path: function(t) {
            for (var e = this, n = function(t, e) {
                if (t === e)
                    return t;
                var n = t.ancestors()
                  , i = e.ancestors()
                  , r = null;
                for (t = n.pop(),
                e = i.pop(); t === e; )
                    r = t,
                    t = n.pop(),
                    e = i.pop();
                return r
            }(e, t), i = [e]; e !== n; )
                e = e.parent,
                i.push(e);
            for (var r = i.length; t !== n; )
                i.splice(r, 0, t),
                t = t.parent;
            return i
        },
        ancestors: function() {
            for (var t = this, e = [t]; t = t.parent; )
                e.push(t);
            return e
        },
        descendants: function() {
            var t = [];
            return this.each(function(e) {
                t.push(e)
            }),
            t
        },
        leaves: function() {
            var t = [];
            return this.eachBefore(function(e) {
                e.children || t.push(e)
            }),
            t
        },
        links: function() {
            var t = this
              , e = [];
            return t.each(function(n) {
                n !== t && e.push({
                    source: n.parent,
                    target: n
                })
            }),
            e
        },
        copy: function() {
            return na(this).eachBefore(ra)
        }
    };
    Array.prototype.slice;
    var fa = function(t, e, n, i, r) {
        for (var a, o = t.children, f = -1, c = o.length, u = t.value && (i - e) / t.value; ++f < c; )
            (a = o[f]).y0 = n,
            a.y1 = r,
            a.x0 = e,
            a.x1 = e += a.value * u
    };
    function ca(t, e) {
        this._ = t,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = e
    }
    ca.prototype = Object.create(oa.prototype);
    var ua = function(t, e, n, i, r) {
        for (var a, o = t.children, f = -1, c = o.length, u = t.value && (r - n) / t.value; ++f < c; )
            (a = o[f]).x0 = e,
            a.x1 = i,
            a.y0 = n,
            a.y1 = n += a.value * u
    }
      , sa = (1 + Math.sqrt(5)) / 2;
    function ha(t, e, n, i, r, a) {
        for (var o, f, c, u, s, h, l, d, _, p, b, y = [], v = e.children, g = 0, x = 0, m = v.length, w = e.value; g < m; ) {
            c = r - n,
            u = a - i;
            do {
                s = v[x++].value
            } while (!s && x < m);for (h = l = s,
            b = s * s * (p = Math.max(u / c, c / u) / (w * t)),
            _ = Math.max(l / b, b / h); x < m; ++x) {
                if (s += f = v[x].value,
                f < h && (h = f),
                f > l && (l = f),
                b = s * s * p,
                (d = Math.max(l / b, b / h)) > _) {
                    s -= f;
                    break
                }
                _ = d
            }
            y.push(o = {
                value: s,
                dice: c < u,
                children: v.slice(g, x)
            }),
            o.dice ? fa(o, n, i, r, w ? i += u * s / w : a) : ua(o, n, i, w ? n += c * s / w : r, a),
            w -= s,
            g = x
        }
        return y
    }
    (function t(e) {
        function n(t, n, i, r, a) {
            ha(e, t, n, i, r, a)
        }
        return n.ratio = function(e) {
            return t((e = +e) > 1 ? e : 1)
        }
        ,
        n
    }
    )(sa),
    function t(e) {
        function n(t, n, i, r, a) {
            if ((o = t._squarify) && o.ratio === e)
                for (var o, f, c, u, s, h = -1, l = o.length, d = t.value; ++h < l; ) {
                    for (c = (f = o[h]).children,
                    u = f.value = 0,
                    s = c.length; u < s; ++u)
                        f.value += c[u].value;
                    f.dice ? fa(f, n, i, r, i += (a - i) * f.value / d) : ua(f, n, i, n += (r - n) * f.value / d, a),
                    d -= f.value
                }
            else
                t._squarify = o = ha(e, t, n, i, r, a),
                o.ratio = e
        }
        return n.ratio = function(e) {
            return t((e = +e) > 1 ? e : 1)
        }
        ,
        n
    }(sa);
    var la = function() {
        return Math.random()
    }
      , da = (function t(e) {
        function n(t, n) {
            return t = null == t ? 0 : +t,
            n = null == n ? 1 : +n,
            1 === arguments.length ? (n = t,
            t = 0) : n -= t,
            function() {
                return e() * n + t
            }
        }
        return n.source = t,
        n
    }(la),
    function t(e) {
        function n(t, n) {
            var i, r;
            return t = null == t ? 0 : +t,
            n = null == n ? 1 : +n,
            function() {
                var a;
                if (null != i)
                    a = i,
                    i = null;
                else
                    do {
                        i = 2 * e() - 1,
                        a = 2 * e() - 1,
                        r = i * i + a * a
                    } while (!r || r > 1);return t + n * a * Math.sqrt(-2 * Math.log(r) / r)
            }
        }
        return n.source = t,
        n
    }(la))
      , _a = (function t(e) {
        function n() {
            var t = da.source(e).apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
        return n.source = t,
        n
    }(la),
    function t(e) {
        function n(t) {
            return function() {
                for (var n = 0, i = 0; i < t; ++i)
                    n += e();
                return n
            }
        }
        return n.source = t,
        n
    }(la));
    (function t(e) {
        function n(t) {
            var n = _a.source(e)(t);
            return function() {
                return n() / t
            }
        }
        return n.source = t,
        n
    }
    )(la),
    function t(e) {
        function n(t) {
            return function() {
                return -Math.log(1 - e()) / t
            }
        }
        return n.source = t,
        n
    }(la);
    var pa = Array.prototype;
    pa.map,
    pa.slice;
    var ba = new Date
      , ya = new Date;
    function va(t, e, n, i) {
        function r(e) {
            return t(e = new Date(+e)),
            e
        }
        return r.floor = r,
        r.ceil = function(n) {
            return t(n = new Date(n - 1)),
            e(n, 1),
            t(n),
            n
        }
        ,
        r.round = function(t) {
            var e = r(t)
              , n = r.ceil(t);
            return t - e < n - t ? e : n
        }
        ,
        r.offset = function(t, n) {
            return e(t = new Date(+t), null == n ? 1 : Math.floor(n)),
            t
        }
        ,
        r.range = function(n, i, a) {
            var o, f = [];
            if (n = r.ceil(n),
            a = null == a ? 1 : Math.floor(a),
            !(n < i && a > 0))
                return f;
            do {
                f.push(o = new Date(+n)),
                e(n, a),
                t(n)
            } while (o < n && n < i);return f
        }
        ,
        r.filter = function(n) {
            return va(function(e) {
                if (e >= e)
                    for (; t(e),
                    !n(e); )
                        e.setTime(e - 1)
            }, function(t, i) {
                if (t >= t)
                    if (i < 0)
                        for (; ++i <= 0; )
                            for (; e(t, -1),
                            !n(t); )
                                ;
                    else
                        for (; --i >= 0; )
                            for (; e(t, 1),
                            !n(t); )
                                ;
            })
        }
        ,
        n && (r.count = function(e, i) {
            return ba.setTime(+e),
            ya.setTime(+i),
            t(ba),
            t(ya),
            Math.floor(n(ba, ya))
        }
        ,
        r.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(e) {
                return i(e) % t == 0
            }
            : function(e) {
                return r.count(0, e) % t == 0
            }
            ) : r : null
        }
        ),
        r
    }
    var ga = va(function() {}, function(t, e) {
        t.setTime(+t + e)
    }, function(t, e) {
        return e - t
    });
    ga.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? va(function(e) {
            e.setTime(Math.floor(e / t) * t)
        }, function(e, n) {
            e.setTime(+e + n * t)
        }, function(e, n) {
            return (n - e) / t
        }) : ga : null
    }
    ;
    ga.range;
    var xa = 6e4
      , ma = 6048e5
      , wa = va(function(t) {
        t.setTime(t - t.getMilliseconds())
    }, function(t, e) {
        t.setTime(+t + 1e3 * e)
    }, function(t, e) {
        return (e - t) / 1e3
    }, function(t) {
        return t.getUTCSeconds()
    })
      , Ma = (wa.range,
    va(function(t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
    }, function(t, e) {
        t.setTime(+t + e * xa)
    }, function(t, e) {
        return (e - t) / xa
    }, function(t) {
        return t.getMinutes()
    }))
      , ka = (Ma.range,
    va(function(t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * xa)
    }, function(t, e) {
        t.setTime(+t + 36e5 * e)
    }, function(t, e) {
        return (e - t) / 36e5
    }, function(t) {
        return t.getHours()
    }))
      , Ta = (ka.range,
    va(function(t) {
        t.setHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setDate(t.getDate() + e)
    }, function(t, e) {
        return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * xa) / 864e5
    }, function(t) {
        return t.getDate() - 1
    }))
      , Na = Ta;
    Ta.range;
    function Aa(t) {
        return va(function(e) {
            e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7),
            e.setHours(0, 0, 0, 0)
        }, function(t, e) {
            t.setDate(t.getDate() + 7 * e)
        }, function(t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * xa) / ma
        })
    }
    var Ca = Aa(0)
      , Sa = Aa(1)
      , Ea = Aa(2)
      , Ua = Aa(3)
      , Pa = Aa(4)
      , La = Aa(5)
      , za = Aa(6)
      , Da = (Ca.range,
    Sa.range,
    Ea.range,
    Ua.range,
    Pa.range,
    La.range,
    za.range,
    va(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setMonth(t.getMonth() + e)
    }, function(t, e) {
        return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }, function(t) {
        return t.getMonth()
    }))
      , Ya = (Da.range,
    va(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setFullYear(t.getFullYear() + e)
    }, function(t, e) {
        return e.getFullYear() - t.getFullYear()
    }, function(t) {
        return t.getFullYear()
    }));
    Ya.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? va(function(e) {
            e.setFullYear(Math.floor(e.getFullYear() / t) * t),
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0)
        }, function(e, n) {
            e.setFullYear(e.getFullYear() + n * t)
        }) : null
    }
    ;
    var qa = Ya
      , Ra = (Ya.range,
    va(function(t) {
        t.setUTCSeconds(0, 0)
    }, function(t, e) {
        t.setTime(+t + e * xa)
    }, function(t, e) {
        return (e - t) / xa
    }, function(t) {
        return t.getUTCMinutes()
    }))
      , ja = (Ra.range,
    va(function(t) {
        t.setUTCMinutes(0, 0, 0)
    }, function(t, e) {
        t.setTime(+t + 36e5 * e)
    }, function(t, e) {
        return (e - t) / 36e5
    }, function(t) {
        return t.getUTCHours()
    }))
      , Oa = (ja.range,
    va(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setUTCDate(t.getUTCDate() + e)
    }, function(t, e) {
        return (e - t) / 864e5
    }, function(t) {
        return t.getUTCDate() - 1
    }))
      , Fa = Oa;
    Oa.range;
    function Ha(t) {
        return va(function(e) {
            e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7),
            e.setUTCHours(0, 0, 0, 0)
        }, function(t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e)
        }, function(t, e) {
            return (e - t) / ma
        })
    }
    var Ia = Ha(0)
      , Xa = Ha(1)
      , Va = Ha(2)
      , Ba = Ha(3)
      , $a = Ha(4)
      , Za = Ha(5)
      , Wa = Ha(6)
      , Ga = (Ia.range,
    Xa.range,
    Va.range,
    Ba.range,
    $a.range,
    Za.range,
    Wa.range,
    va(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setUTCMonth(t.getUTCMonth() + e)
    }, function(t, e) {
        return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
    }, function(t) {
        return t.getUTCMonth()
    }))
      , Qa = (Ga.range,
    va(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    }, function(t, e) {
        t.setUTCFullYear(t.getUTCFullYear() + e)
    }, function(t, e) {
        return e.getUTCFullYear() - t.getUTCFullYear()
    }, function(t) {
        return t.getUTCFullYear()
    }));
    Qa.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? va(function(e) {
            e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0)
        }, function(e, n) {
            e.setUTCFullYear(e.getUTCFullYear() + n * t)
        }) : null
    }
    ;
    var Ja = Qa;
    Qa.range;
    function Ka(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
            return e.setFullYear(t.y),
            e
        }
        return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
    }
    function to(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y),
            e
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function eo(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    var no, io, ro, ao = {
        "-": "",
        _: " ",
        0: "0"
    }, oo = /^\s*\d+/, fo = /^%/, co = /[\\^$*+?|[\]().{}]/g;
    function uo(t, e, n) {
        var i = t < 0 ? "-" : ""
          , r = (i ? -t : t) + ""
          , a = r.length;
        return i + (a < n ? new Array(n - a + 1).join(e) + r : r)
    }
    function so(t) {
        return t.replace(co, "\\$&")
    }
    function ho(t) {
        return new RegExp("^(?:" + t.map(so).join("|") + ")","i")
    }
    function lo(t) {
        for (var e = {}, n = -1, i = t.length; ++n < i; )
            e[t[n].toLowerCase()] = n;
        return e
    }
    function _o(t, e, n) {
        var i = oo.exec(e.slice(n, n + 1));
        return i ? (t.w = +i[0],
        n + i[0].length) : -1
    }
    function po(t, e, n) {
        var i = oo.exec(e.slice(n, n + 1));
        return i ? (t.u = +i[0],
        n + i[0].length) : -1
    }
    function bo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.U = +i[0],
        n + i[0].length) : -1
    }
    function yo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.V = +i[0],
        n + i[0].length) : -1
    }
    function vo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.W = +i[0],
        n + i[0].length) : -1
    }
    function go(t, e, n) {
        var i = oo.exec(e.slice(n, n + 4));
        return i ? (t.y = +i[0],
        n + i[0].length) : -1
    }
    function xo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3),
        n + i[0].length) : -1
    }
    function mo(t, e, n) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")),
        n + i[0].length) : -1
    }
    function wo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.m = i[0] - 1,
        n + i[0].length) : -1
    }
    function Mo(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.d = +i[0],
        n + i[0].length) : -1
    }
    function ko(t, e, n) {
        var i = oo.exec(e.slice(n, n + 3));
        return i ? (t.m = 0,
        t.d = +i[0],
        n + i[0].length) : -1
    }
    function To(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.H = +i[0],
        n + i[0].length) : -1
    }
    function No(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.M = +i[0],
        n + i[0].length) : -1
    }
    function Ao(t, e, n) {
        var i = oo.exec(e.slice(n, n + 2));
        return i ? (t.S = +i[0],
        n + i[0].length) : -1
    }
    function Co(t, e, n) {
        var i = oo.exec(e.slice(n, n + 3));
        return i ? (t.L = +i[0],
        n + i[0].length) : -1
    }
    function So(t, e, n) {
        var i = oo.exec(e.slice(n, n + 6));
        return i ? (t.L = Math.floor(i[0] / 1e3),
        n + i[0].length) : -1
    }
    function Eo(t, e, n) {
        var i = fo.exec(e.slice(n, n + 1));
        return i ? n + i[0].length : -1
    }
    function Uo(t, e, n) {
        var i = oo.exec(e.slice(n));
        return i ? (t.Q = +i[0],
        n + i[0].length) : -1
    }
    function Po(t, e, n) {
        var i = oo.exec(e.slice(n));
        return i ? (t.Q = 1e3 * +i[0],
        n + i[0].length) : -1
    }
    function Lo(t, e) {
        return uo(t.getDate(), e, 2)
    }
    function zo(t, e) {
        return uo(t.getHours(), e, 2)
    }
    function Do(t, e) {
        return uo(t.getHours() % 12 || 12, e, 2)
    }
    function Yo(t, e) {
        return uo(1 + Na.count(qa(t), t), e, 3)
    }
    function qo(t, e) {
        return uo(t.getMilliseconds(), e, 3)
    }
    function Ro(t, e) {
        return qo(t, e) + "000"
    }
    function jo(t, e) {
        return uo(t.getMonth() + 1, e, 2)
    }
    function Oo(t, e) {
        return uo(t.getMinutes(), e, 2)
    }
    function Fo(t, e) {
        return uo(t.getSeconds(), e, 2)
    }
    function Ho(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e
    }
    function Io(t, e) {
        return uo(Ca.count(qa(t), t), e, 2)
    }
    function Xo(t, e) {
        var n = t.getDay();
        return t = n >= 4 || 0 === n ? Pa(t) : Pa.ceil(t),
        uo(Pa.count(qa(t), t) + (4 === qa(t).getDay()), e, 2)
    }
    function Vo(t) {
        return t.getDay()
    }
    function Bo(t, e) {
        return uo(Sa.count(qa(t), t), e, 2)
    }
    function $o(t, e) {
        return uo(t.getFullYear() % 100, e, 2)
    }
    function Zo(t, e) {
        return uo(t.getFullYear() % 1e4, e, 4)
    }
    function Wo(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1,
        "+")) + uo(e / 60 | 0, "0", 2) + uo(e % 60, "0", 2)
    }
    function Go(t, e) {
        return uo(t.getUTCDate(), e, 2)
    }
    function Qo(t, e) {
        return uo(t.getUTCHours(), e, 2)
    }
    function Jo(t, e) {
        return uo(t.getUTCHours() % 12 || 12, e, 2)
    }
    function Ko(t, e) {
        return uo(1 + Fa.count(Ja(t), t), e, 3)
    }
    function tf(t, e) {
        return uo(t.getUTCMilliseconds(), e, 3)
    }
    function ef(t, e) {
        return tf(t, e) + "000"
    }
    function nf(t, e) {
        return uo(t.getUTCMonth() + 1, e, 2)
    }
    function rf(t, e) {
        return uo(t.getUTCMinutes(), e, 2)
    }
    function af(t, e) {
        return uo(t.getUTCSeconds(), e, 2)
    }
    function of(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e
    }
    function ff(t, e) {
        return uo(Ia.count(Ja(t), t), e, 2)
    }
    function cf(t, e) {
        var n = t.getUTCDay();
        return t = n >= 4 || 0 === n ? $a(t) : $a.ceil(t),
        uo($a.count(Ja(t), t) + (4 === Ja(t).getUTCDay()), e, 2)
    }
    function uf(t) {
        return t.getUTCDay()
    }
    function sf(t, e) {
        return uo(Xa.count(Ja(t), t), e, 2)
    }
    function hf(t, e) {
        return uo(t.getUTCFullYear() % 100, e, 2)
    }
    function lf(t, e) {
        return uo(t.getUTCFullYear() % 1e4, e, 4)
    }
    function df() {
        return "+0000"
    }
    function _f() {
        return "%"
    }
    function pf(t) {
        return +t
    }
    function bf(t) {
        return Math.floor(+t / 1e3)
    }
    !function(t) {
        no = function(t) {
            var e = t.dateTime
              , n = t.date
              , i = t.time
              , r = t.periods
              , a = t.days
              , o = t.shortDays
              , f = t.months
              , c = t.shortMonths
              , u = ho(r)
              , s = lo(r)
              , h = ho(a)
              , l = lo(a)
              , d = ho(o)
              , _ = lo(o)
              , p = ho(f)
              , b = lo(f)
              , y = ho(c)
              , v = lo(c)
              , g = {
                a: function(t) {
                    return o[t.getDay()]
                },
                A: function(t) {
                    return a[t.getDay()]
                },
                b: function(t) {
                    return c[t.getMonth()]
                },
                B: function(t) {
                    return f[t.getMonth()]
                },
                c: null,
                d: Lo,
                e: Lo,
                f: Ro,
                H: zo,
                I: Do,
                j: Yo,
                L: qo,
                m: jo,
                M: Oo,
                p: function(t) {
                    return r[+(t.getHours() >= 12)]
                },
                Q: pf,
                s: bf,
                S: Fo,
                u: Ho,
                U: Io,
                V: Xo,
                w: Vo,
                W: Bo,
                x: null,
                X: null,
                y: $o,
                Y: Zo,
                Z: Wo,
                "%": _f
            }
              , x = {
                a: function(t) {
                    return o[t.getUTCDay()]
                },
                A: function(t) {
                    return a[t.getUTCDay()]
                },
                b: function(t) {
                    return c[t.getUTCMonth()]
                },
                B: function(t) {
                    return f[t.getUTCMonth()]
                },
                c: null,
                d: Go,
                e: Go,
                f: ef,
                H: Qo,
                I: Jo,
                j: Ko,
                L: tf,
                m: nf,
                M: rf,
                p: function(t) {
                    return r[+(t.getUTCHours() >= 12)]
                },
                Q: pf,
                s: bf,
                S: af,
                u: of,
                U: ff,
                V: cf,
                w: uf,
                W: sf,
                x: null,
                X: null,
                y: hf,
                Y: lf,
                Z: df,
                "%": _f
            }
              , m = {
                a: function(t, e, n) {
                    var i = d.exec(e.slice(n));
                    return i ? (t.w = _[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                A: function(t, e, n) {
                    var i = h.exec(e.slice(n));
                    return i ? (t.w = l[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                b: function(t, e, n) {
                    var i = y.exec(e.slice(n));
                    return i ? (t.m = v[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                B: function(t, e, n) {
                    var i = p.exec(e.slice(n));
                    return i ? (t.m = b[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                c: function(t, n, i) {
                    return k(t, e, n, i)
                },
                d: Mo,
                e: Mo,
                f: So,
                H: To,
                I: To,
                j: ko,
                L: Co,
                m: wo,
                M: No,
                p: function(t, e, n) {
                    var i = u.exec(e.slice(n));
                    return i ? (t.p = s[i[0].toLowerCase()],
                    n + i[0].length) : -1
                },
                Q: Uo,
                s: Po,
                S: Ao,
                u: po,
                U: bo,
                V: yo,
                w: _o,
                W: vo,
                x: function(t, e, i) {
                    return k(t, n, e, i)
                },
                X: function(t, e, n) {
                    return k(t, i, e, n)
                },
                y: xo,
                Y: go,
                Z: mo,
                "%": Eo
            };
            function w(t, e) {
                return function(n) {
                    var i, r, a, o = [], f = -1, c = 0, u = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++f < u; )
                        37 === t.charCodeAt(f) && (o.push(t.slice(c, f)),
                        null != (r = ao[i = t.charAt(++f)]) ? i = t.charAt(++f) : r = "e" === i ? " " : "0",
                        (a = e[i]) && (i = a(n, r)),
                        o.push(i),
                        c = f + 1);
                    return o.push(t.slice(c, f)),
                    o.join("")
                }
            }
            function M(t, e) {
                return function(n) {
                    var i, r, a = eo(1900);
                    if (k(a, t, n += "", 0) != n.length)
                        return null;
                    if ("Q"in a)
                        return new Date(a.Q);
                    if ("p"in a && (a.H = a.H % 12 + 12 * a.p),
                    "V"in a) {
                        if (a.V < 1 || a.V > 53)
                            return null;
                        "w"in a || (a.w = 1),
                        "Z"in a ? (r = (i = to(eo(a.y))).getUTCDay(),
                        i = r > 4 || 0 === r ? Xa.ceil(i) : Xa(i),
                        i = Fa.offset(i, 7 * (a.V - 1)),
                        a.y = i.getUTCFullYear(),
                        a.m = i.getUTCMonth(),
                        a.d = i.getUTCDate() + (a.w + 6) % 7) : (r = (i = e(eo(a.y))).getDay(),
                        i = r > 4 || 0 === r ? Sa.ceil(i) : Sa(i),
                        i = Na.offset(i, 7 * (a.V - 1)),
                        a.y = i.getFullYear(),
                        a.m = i.getMonth(),
                        a.d = i.getDate() + (a.w + 6) % 7)
                    } else
                        ("W"in a || "U"in a) && ("w"in a || (a.w = "u"in a ? a.u % 7 : "W"in a ? 1 : 0),
                        r = "Z"in a ? to(eo(a.y)).getUTCDay() : e(eo(a.y)).getDay(),
                        a.m = 0,
                        a.d = "W"in a ? (a.w + 6) % 7 + 7 * a.W - (r + 5) % 7 : a.w + 7 * a.U - (r + 6) % 7);
                    return "Z"in a ? (a.H += a.Z / 100 | 0,
                    a.M += a.Z % 100,
                    to(a)) : e(a)
                }
            }
            function k(t, e, n, i) {
                for (var r, a, o = 0, f = e.length, c = n.length; o < f; ) {
                    if (i >= c)
                        return -1;
                    if (37 === (r = e.charCodeAt(o++))) {
                        if (r = e.charAt(o++),
                        !(a = m[r in ao ? e.charAt(o++) : r]) || (i = a(t, n, i)) < 0)
                            return -1
                    } else if (r != n.charCodeAt(i++))
                        return -1
                }
                return i
            }
            return g.x = w(n, g),
            g.X = w(i, g),
            g.c = w(e, g),
            x.x = w(n, x),
            x.X = w(i, x),
            x.c = w(e, x),
            {
                format: function(t) {
                    var e = w(t += "", g);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                parse: function(t) {
                    var e = M(t += "", Ka);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcFormat: function(t) {
                    var e = w(t += "", x);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcParse: function(t) {
                    var e = M(t, to);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                }
            }
        }(t),
        no.format,
        no.parse,
        io = no.utcFormat,
        ro = no.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || io("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || ro("%Y-%m-%dT%H:%M:%S.%LZ");
    var yf = function(t) {
        for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
            n[i] = "#" + t.slice(6 * i, 6 * ++i);
        return n
    }
      , vf = (yf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    yf("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
    yf("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
    yf("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
    yf("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
    yf("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
    yf("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
    yf("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
    yf("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
    function(t) {
        return Ae(t[t.length - 1])
    }
    );
    vf(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(yf)),
    vf(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(yf)),
    vf(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(yf)),
    vf(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(yf)),
    vf(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(yf)),
    vf(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(yf)),
    vf(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(yf)),
    vf(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(yf)),
    vf(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(yf)),
    vf(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(yf)),
    vf(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(yf)),
    vf(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(yf)),
    vf(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(yf)),
    vf(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(yf)),
    vf(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(yf)),
    vf(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(yf)),
    vf(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(yf)),
    vf(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(yf)),
    vf(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(yf)),
    vf(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(yf)),
    vf(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(yf)),
    vf(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(yf)),
    vf(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(yf)),
    vf(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(yf)),
    vf(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(yf)),
    vf(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(yf)),
    vf(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(yf)),
    Ze(ye(300, .5, 0), ye(-240, .5, 1)),
    Ze(ye(-100, .75, .35), ye(80, 1.5, .8)),
    Ze(ye(260, .75, .35), ye(80, 1.5, .8)),
    ye(),
    jt(),
    Math.PI,
    Math.PI;
    function gf(t) {
        var e = t.length;
        return function(n) {
            return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]
        }
    }
    gf(yf("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
    gf(yf("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    gf(yf("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    gf(yf("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
    Math.abs,
    Math.atan2,
    Math.cos,
    Math.max,
    Math.min,
    Math.sin,
    Math.sqrt;
    var xf = 1e-12
      , mf = Math.PI
      , wf = 2 * mf;
    function Mf(t) {
        this._context = t
    }
    Mf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, e)
            }
        }
    };
    var kf = function(t) {
        return new Mf(t)
    };
    Nf(kf);
    function Tf(t) {
        this._curve = t
    }
    function Nf(t) {
        function e(e) {
            return new Tf(t(e))
        }
        return e._curve = t,
        e
    }
    Tf.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, e) {
            this._curve.point(e * Math.sin(t), e * -Math.cos(t))
        }
    };
    Array.prototype.slice;
    Math.sqrt(1 / 3);
    var Af = Math.sin(mf / 10) / Math.sin(7 * mf / 10)
      , Cf = (Math.sin(wf / 10),
    Math.cos(wf / 10),
    Math.sqrt(3),
    Math.sqrt(3),
    Math.sqrt(12),
    function() {}
    );
    function Sf(t, e, n) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
    }
    function Ef(t) {
        this._context = t
    }
    Ef.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                Sf(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                Sf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function Uf(t) {
        this._context = t
    }
    Uf.prototype = {
        areaStart: Cf,
        areaEnd: Cf,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = e;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = e;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = e,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                break;
            default:
                Sf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function Pf(t) {
        this._context = t
    }
    Pf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6
                  , i = (this._y0 + 4 * this._y1 + e) / 6;
                this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
                break;
            case 3:
                this._point = 4;
            default:
                Sf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = e
        }
    };
    function Lf(t, e) {
        this._basis = new Ef(t),
        this._beta = e
    }
    Lf.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x
              , e = this._y
              , n = t.length - 1;
            if (n > 0)
                for (var i, r = t[0], a = e[0], o = t[n] - r, f = e[n] - a, c = -1; ++c <= n; )
                    i = c / n,
                    this._basis.point(this._beta * t[c] + (1 - this._beta) * (r + i * o), this._beta * e[c] + (1 - this._beta) * (a + i * f));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, e) {
            this._x.push(+t),
            this._y.push(+e)
        }
    };
    (function t(e) {
        function n(t) {
            return 1 === e ? new Ef(t) : new Lf(t,e)
        }
        return n.beta = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.85);
    function zf(t, e, n) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
    }
    function Df(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    Df.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                zf(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = e;
                break;
            case 2:
                this._point = 3;
            default:
                zf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new Df(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function Yf(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    Yf.prototype = {
        areaStart: Cf,
        areaEnd: Cf,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = e;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = e;
                break;
            default:
                zf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new Yf(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function qf(t, e) {
        this._context = t,
        this._k = (1 - e) / 6
    }
    qf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                zf(this, t, e)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new qf(t,e)
        }
        return n.tension = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(0);
    function Rf(t, e, n) {
        var i = t._x1
          , r = t._y1
          , a = t._x2
          , o = t._y2;
        if (t._l01_a > xf) {
            var f = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
              , c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            i = (i * f - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            r = (r * f - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > xf) {
            var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
              , s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            a = (a * u + t._x1 * t._l23_2a - e * t._l12_2a) / s,
            o = (o * u + t._y1 * t._l23_2a - n * t._l12_2a) / s
        }
        t._context.bezierCurveTo(i, r, a, o, t._x2, t._y2)
    }
    function jf(t, e) {
        this._context = t,
        this._alpha = e
    }
    jf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Rf(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new jf(t,e) : new Df(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function Of(t, e) {
        this._context = t,
        this._alpha = e
    }
    Of.prototype = {
        areaStart: Cf,
        areaEnd: Cf,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = e;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = e;
                break;
            default:
                Rf(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new Of(t,e) : new Yf(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function Ff(t, e) {
        this._context = t,
        this._alpha = e
    }
    Ff.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t,
            e = +e,
            this._point) {
                var n = this._x2 - t
                  , i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Rf(this, t, e)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new Ff(t,e) : new qf(t,0)
        }
        return n.alpha = function(e) {
            return t(+e)
        }
        ,
        n
    }
    )(.5);
    function Hf(t) {
        this._context = t
    }
    Hf.prototype = {
        areaStart: Cf,
        areaEnd: Cf,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, e) {
            t = +t,
            e = +e,
            this._point ? this._context.lineTo(t, e) : (this._point = 1,
            this._context.moveTo(t, e))
        }
    };
    function If(t) {
        return t < 0 ? -1 : 1
    }
    function Xf(t, e, n) {
        var i = t._x1 - t._x0
          , r = e - t._x1
          , a = (t._y1 - t._y0) / (i || r < 0 && -0)
          , o = (n - t._y1) / (r || i < 0 && -0)
          , f = (a * r + o * i) / (i + r);
        return (If(a) + If(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(f)) || 0
    }
    function Vf(t, e) {
        var n = t._x1 - t._x0;
        return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
    }
    function Bf(t, e, n) {
        var i = t._x0
          , r = t._y0
          , a = t._x1
          , o = t._y1
          , f = (a - i) / 3;
        t._context.bezierCurveTo(i + f, r + f * e, a - f, o - f * n, a, o)
    }
    function $f(t) {
        this._context = t
    }
    function Zf(t) {
        this._context = new Wf(t)
    }
    function Wf(t) {
        this._context = t
    }
    function Gf(t) {
        this._context = t
    }
    function Qf(t) {
        var e, n, i = t.length - 1, r = new Array(i), a = new Array(i), o = new Array(i);
        for (r[0] = 0,
        a[0] = 2,
        o[0] = t[0] + 2 * t[1],
        e = 1; e < i - 1; ++e)
            r[e] = 1,
            a[e] = 4,
            o[e] = 4 * t[e] + 2 * t[e + 1];
        for (r[i - 1] = 2,
        a[i - 1] = 7,
        o[i - 1] = 8 * t[i - 1] + t[i],
        e = 1; e < i; ++e)
            n = r[e] / a[e - 1],
            a[e] -= n,
            o[e] -= n * o[e - 1];
        for (r[i - 1] = o[i - 1] / a[i - 1],
        e = i - 2; e >= 0; --e)
            r[e] = (o[e] - r[e + 1]) / a[e];
        for (a[i - 1] = (t[i] + r[i - 1]) / 2,
        e = 0; e < i - 1; ++e)
            a[e] = 2 * t[e + 1] - r[e + 1];
        return [r, a]
    }
    $f.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Bf(this, this._t0, Vf(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, e) {
            var n = NaN;
            if (e = +e,
            (t = +t) !== this._x1 || e !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    Bf(this, Vf(this, n = Xf(this, t, e)), n);
                    break;
                default:
                    Bf(this, this._t0, n = Xf(this, t, e))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e,
                this._t0 = n
            }
        }
    },
    (Zf.prototype = Object.create($f.prototype)).point = function(t, e) {
        $f.prototype.point.call(this, e, t)
    }
    ,
    Wf.prototype = {
        moveTo: function(t, e) {
            this._context.moveTo(e, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, e) {
            this._context.lineTo(e, t)
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            this._context.bezierCurveTo(e, t, i, n, a, r)
        }
    },
    Gf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x
              , e = this._y
              , n = t.length;
            if (n)
                if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]),
                2 === n)
                    this._context.lineTo(t[1], e[1]);
                else
                    for (var i = Qf(t), r = Qf(e), a = 0, o = 1; o < n; ++a,
                    ++o)
                        this._context.bezierCurveTo(i[0][a], r[0][a], i[1][a], r[1][a], t[o], e[o]);
            (this._line || 0 !== this._line && 1 === n) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, e) {
            this._x.push(+t),
            this._y.push(+e)
        }
    };
    function Jf(t, e) {
        this._context = t,
        this._t = e
    }
    Jf.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t,
            this._line = 1 - this._line)
        },
        point: function(t, e) {
            switch (t = +t,
            e = +e,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0)
                    this._context.lineTo(this._x, e),
                    this._context.lineTo(t, e);
                else {
                    var n = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(n, this._y),
                    this._context.lineTo(n, e)
                }
            }
            this._x = t,
            this._y = e
        }
    };
    function Kf() {
        this._ = null
    }
    function tc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }
    function ec(t, e) {
        var n = e
          , i = e.R
          , r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i,
        i.U = r,
        n.U = i,
        n.R = i.L,
        n.R && (n.R.U = n),
        i.L = n
    }
    function nc(t, e) {
        var n = e
          , i = e.L
          , r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i,
        i.U = r,
        n.U = i,
        n.L = i.R,
        n.L && (n.L.U = n),
        i.R = n
    }
    function ic(t) {
        for (; t.L; )
            t = t.L;
        return t
    }
    Kf.prototype = {
        constructor: Kf,
        insert: function(t, e) {
            var n, i, r;
            if (t) {
                if (e.P = t,
                e.N = t.N,
                t.N && (t.N.P = e),
                t.N = e,
                t.R) {
                    for (t = t.R; t.L; )
                        t = t.L;
                    t.L = e
                } else
                    t.R = e;
                n = t
            } else
                this._ ? (t = ic(this._),
                e.P = null,
                e.N = t,
                t.P = t.L = e,
                n = t) : (e.P = e.N = null,
                this._ = e,
                n = null);
            for (e.L = e.R = null,
            e.U = n,
            e.C = !0,
            t = e; n && n.C; )
                n === (i = n.U).L ? (r = i.R) && r.C ? (n.C = r.C = !1,
                i.C = !0,
                t = i) : (t === n.R && (ec(this, n),
                n = (t = n).U),
                n.C = !1,
                i.C = !0,
                nc(this, i)) : (r = i.L) && r.C ? (n.C = r.C = !1,
                i.C = !0,
                t = i) : (t === n.L && (nc(this, n),
                n = (t = n).U),
                n.C = !1,
                i.C = !0,
                ec(this, i)),
                n = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P),
            t.P && (t.P.N = t.N),
            t.N = t.P = null;
            var e, n, i, r = t.U, a = t.L, o = t.R;
            if (n = a ? o ? ic(o) : a : o,
            r ? r.L === t ? r.L = n : r.R = n : this._ = n,
            a && o ? (i = n.C,
            n.C = t.C,
            n.L = a,
            a.U = n,
            n !== o ? (r = n.U,
            n.U = t.U,
            t = n.R,
            r.L = t,
            n.R = o,
            o.U = n) : (n.U = r,
            r = n,
            t = n.R)) : (i = t.C,
            t = n),
            t && (t.U = r),
            !i)
                if (t && t.C)
                    t.C = !1;
                else {
                    do {
                        if (t === this._)
                            break;
                        if (t === r.L) {
                            if ((e = r.R).C && (e.C = !1,
                            r.C = !0,
                            ec(this, r),
                            e = r.R),
                            e.L && e.L.C || e.R && e.R.C) {
                                e.R && e.R.C || (e.L.C = !1,
                                e.C = !0,
                                nc(this, e),
                                e = r.R),
                                e.C = r.C,
                                r.C = e.R.C = !1,
                                ec(this, r),
                                t = this._;
                                break
                            }
                        } else if ((e = r.L).C && (e.C = !1,
                        r.C = !0,
                        nc(this, r),
                        e = r.L),
                        e.L && e.L.C || e.R && e.R.C) {
                            e.L && e.L.C || (e.R.C = !1,
                            e.C = !0,
                            ec(this, e),
                            e = r.L),
                            e.C = r.C,
                            r.C = e.L.C = !1,
                            nc(this, r),
                            t = this._;
                            break
                        }
                        e.C = !0,
                        t = r,
                        r = r.U
                    } while (!t.C);t && (t.C = !1)
                }
        }
    };
    var rc = Kf;
    function ac(t, e, n, i) {
        var r = [null, null]
          , a = Sc.push(r) - 1;
        return r.left = t,
        r.right = e,
        n && fc(r, t, e, n),
        i && fc(r, e, t, i),
        Ac[t.index].halfedges.push(a),
        Ac[e.index].halfedges.push(a),
        r
    }
    function oc(t, e, n) {
        var i = [e, n];
        return i.left = t,
        i
    }
    function fc(t, e, n, i) {
        t[0] || t[1] ? t.left === n ? t[1] = i : t[0] = i : (t[0] = i,
        t.left = e,
        t.right = n)
    }
    function cc(t, e, n, i, r) {
        var a, o = t[0], f = t[1], c = o[0], u = o[1], s = 0, h = 1, l = f[0] - c, d = f[1] - u;
        if (a = e - c,
        l || !(a > 0)) {
            if (a /= l,
            l < 0) {
                if (a < s)
                    return;
                a < h && (h = a)
            } else if (l > 0) {
                if (a > h)
                    return;
                a > s && (s = a)
            }
            if (a = i - c,
            l || !(a < 0)) {
                if (a /= l,
                l < 0) {
                    if (a > h)
                        return;
                    a > s && (s = a)
                } else if (l > 0) {
                    if (a < s)
                        return;
                    a < h && (h = a)
                }
                if (a = n - u,
                d || !(a > 0)) {
                    if (a /= d,
                    d < 0) {
                        if (a < s)
                            return;
                        a < h && (h = a)
                    } else if (d > 0) {
                        if (a > h)
                            return;
                        a > s && (s = a)
                    }
                    if (a = r - u,
                    d || !(a < 0)) {
                        if (a /= d,
                        d < 0) {
                            if (a > h)
                                return;
                            a > s && (s = a)
                        } else if (d > 0) {
                            if (a < s)
                                return;
                            a < h && (h = a)
                        }
                        return !(s > 0 || h < 1) || (s > 0 && (t[0] = [c + s * l, u + s * d]),
                        h < 1 && (t[1] = [c + h * l, u + h * d]),
                        !0)
                    }
                }
            }
        }
    }
    function uc(t, e, n, i, r) {
        var a = t[1];
        if (a)
            return !0;
        var o, f, c = t[0], u = t.left, s = t.right, h = u[0], l = u[1], d = s[0], _ = s[1], p = (h + d) / 2, b = (l + _) / 2;
        if (_ === l) {
            if (p < e || p >= i)
                return;
            if (h > d) {
                if (c) {
                    if (c[1] >= r)
                        return
                } else
                    c = [p, n];
                a = [p, r]
            } else {
                if (c) {
                    if (c[1] < n)
                        return
                } else
                    c = [p, r];
                a = [p, n]
            }
        } else if (f = b - (o = (h - d) / (_ - l)) * p,
        o < -1 || o > 1)
            if (h > d) {
                if (c) {
                    if (c[1] >= r)
                        return
                } else
                    c = [(n - f) / o, n];
                a = [(r - f) / o, r]
            } else {
                if (c) {
                    if (c[1] < n)
                        return
                } else
                    c = [(r - f) / o, r];
                a = [(n - f) / o, n]
            }
        else if (l < _) {
            if (c) {
                if (c[0] >= i)
                    return
            } else
                c = [e, o * e + f];
            a = [i, o * i + f]
        } else {
            if (c) {
                if (c[0] < e)
                    return
            } else
                c = [i, o * i + f];
            a = [e, o * e + f]
        }
        return t[0] = c,
        t[1] = a,
        !0
    }
    function sc(t, e) {
        var n = t.site
          , i = e.left
          , r = e.right;
        return n === r && (r = i,
        i = n),
        r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (n === i ? (i = e[1],
        r = e[0]) : (i = e[0],
        r = e[1]),
        Math.atan2(i[0] - r[0], r[1] - i[1]))
    }
    function hc(t, e) {
        return e[+(e.left !== t.site)]
    }
    function lc(t, e) {
        return e[+(e.left === t.site)]
    }
    var dc, _c = [];
    function pc() {
        tc(this),
        this.x = this.y = this.arc = this.site = this.cy = null
    }
    function bc(t) {
        var e = t.P
          , n = t.N;
        if (e && n) {
            var i = e.site
              , r = t.site
              , a = n.site;
            if (i !== a) {
                var o = r[0]
                  , f = r[1]
                  , c = i[0] - o
                  , u = i[1] - f
                  , s = a[0] - o
                  , h = a[1] - f
                  , l = 2 * (c * h - u * s);
                if (!(l >= -Uc)) {
                    var d = c * c + u * u
                      , _ = s * s + h * h
                      , p = (h * d - u * _) / l
                      , b = (c * _ - s * d) / l
                      , y = _c.pop() || new pc;
                    y.arc = t,
                    y.site = r,
                    y.x = p + o,
                    y.y = (y.cy = b + f) + Math.sqrt(p * p + b * b),
                    t.circle = y;
                    for (var v = null, g = Cc._; g; )
                        if (y.y < g.y || y.y === g.y && y.x <= g.x) {
                            if (!g.L) {
                                v = g.P;
                                break
                            }
                            g = g.L
                        } else {
                            if (!g.R) {
                                v = g;
                                break
                            }
                            g = g.R
                        }
                    Cc.insert(v, y),
                    v || (dc = y)
                }
            }
        }
    }
    function yc(t) {
        var e = t.circle;
        e && (e.P || (dc = e.N),
        Cc.remove(e),
        _c.push(e),
        tc(e),
        t.circle = null)
    }
    var vc = [];
    function gc() {
        tc(this),
        this.edge = this.site = this.circle = null
    }
    function xc(t) {
        var e = vc.pop() || new gc;
        return e.site = t,
        e
    }
    function mc(t) {
        yc(t),
        Nc.remove(t),
        vc.push(t),
        tc(t)
    }
    function wc(t) {
        var e = t.circle
          , n = e.x
          , i = e.cy
          , r = [n, i]
          , a = t.P
          , o = t.N
          , f = [t];
        mc(t);
        for (var c = a; c.circle && Math.abs(n - c.circle.x) < Ec && Math.abs(i - c.circle.cy) < Ec; )
            a = c.P,
            f.unshift(c),
            mc(c),
            c = a;
        f.unshift(c),
        yc(c);
        for (var u = o; u.circle && Math.abs(n - u.circle.x) < Ec && Math.abs(i - u.circle.cy) < Ec; )
            o = u.N,
            f.push(u),
            mc(u),
            u = o;
        f.push(u),
        yc(u);
        var s, h = f.length;
        for (s = 1; s < h; ++s)
            u = f[s],
            c = f[s - 1],
            fc(u.edge, c.site, u.site, r);
        c = f[0],
        (u = f[h - 1]).edge = ac(c.site, u.site, null, r),
        bc(c),
        bc(u)
    }
    function Mc(t) {
        for (var e, n, i, r, a = t[0], o = t[1], f = Nc._; f; )
            if ((i = kc(f, o) - a) > Ec)
                f = f.L;
            else {
                if (!((r = a - Tc(f, o)) > Ec)) {
                    i > -Ec ? (e = f.P,
                    n = f) : r > -Ec ? (e = f,
                    n = f.N) : e = n = f;
                    break
                }
                if (!f.R) {
                    e = f;
                    break
                }
                f = f.R
            }
        !function(t) {
            Ac[t.index] = {
                site: t,
                halfedges: []
            }
        }(t);
        var c = xc(t);
        if (Nc.insert(e, c),
        e || n) {
            if (e === n)
                return yc(e),
                n = xc(e.site),
                Nc.insert(c, n),
                c.edge = n.edge = ac(e.site, c.site),
                bc(e),
                void bc(n);
            if (n) {
                yc(e),
                yc(n);
                var u = e.site
                  , s = u[0]
                  , h = u[1]
                  , l = t[0] - s
                  , d = t[1] - h
                  , _ = n.site
                  , p = _[0] - s
                  , b = _[1] - h
                  , y = 2 * (l * b - d * p)
                  , v = l * l + d * d
                  , g = p * p + b * b
                  , x = [(b * v - d * g) / y + s, (l * g - p * v) / y + h];
                fc(n.edge, u, _, x),
                c.edge = ac(u, t, null, x),
                n.edge = ac(t, _, null, x),
                bc(e),
                bc(n)
            } else
                c.edge = ac(e.site, c.site)
        }
    }
    function kc(t, e) {
        var n = t.site
          , i = n[0]
          , r = n[1]
          , a = r - e;
        if (!a)
            return i;
        var o = t.P;
        if (!o)
            return -1 / 0;
        var f = (n = o.site)[0]
          , c = n[1]
          , u = c - e;
        if (!u)
            return f;
        var s = f - i
          , h = 1 / a - 1 / u
          , l = s / u;
        return h ? (-l + Math.sqrt(l * l - 2 * h * (s * s / (-2 * u) - c + u / 2 + r - a / 2))) / h + i : (i + f) / 2
    }
    function Tc(t, e) {
        var n = t.N;
        if (n)
            return kc(n, e);
        var i = t.site;
        return i[1] === e ? i[0] : 1 / 0
    }
    var Nc, Ac, Cc, Sc, Ec = 1e-6, Uc = 1e-12;
    function Pc(t, e) {
        return e[1] - t[1] || e[0] - t[0]
    }
    function Lc(t, e) {
        var n, i, r, a = t.sort(Pc).pop();
        for (Sc = [],
        Ac = new Array(t.length),
        Nc = new rc,
        Cc = new rc; ; )
            if (r = dc,
            a && (!r || a[1] < r.y || a[1] === r.y && a[0] < r.x))
                a[0] === n && a[1] === i || (Mc(a),
                n = a[0],
                i = a[1]),
                a = t.pop();
            else {
                if (!r)
                    break;
                wc(r.arc)
            }
        if (function() {
            for (var t, e, n, i, r = 0, a = Ac.length; r < a; ++r)
                if ((t = Ac[r]) && (i = (e = t.halfedges).length)) {
                    var o = new Array(i)
                      , f = new Array(i);
                    for (n = 0; n < i; ++n)
                        o[n] = n,
                        f[n] = sc(t, Sc[e[n]]);
                    for (o.sort(function(t, e) {
                        return f[e] - f[t]
                    }),
                    n = 0; n < i; ++n)
                        f[n] = e[o[n]];
                    for (n = 0; n < i; ++n)
                        e[n] = f[n]
                }
        }(),
        e) {
            var o = +e[0][0]
              , f = +e[0][1]
              , c = +e[1][0]
              , u = +e[1][1];
            !function(t, e, n, i) {
                for (var r, a = Sc.length; a--; )
                    uc(r = Sc[a], t, e, n, i) && cc(r, t, e, n, i) && (Math.abs(r[0][0] - r[1][0]) > Ec || Math.abs(r[0][1] - r[1][1]) > Ec) || delete Sc[a]
            }(o, f, c, u),
            function(t, e, n, i) {
                var r, a, o, f, c, u, s, h, l, d, _, p, b = Ac.length, y = !0;
                for (r = 0; r < b; ++r)
                    if (a = Ac[r]) {
                        for (o = a.site,
                        f = (c = a.halfedges).length; f--; )
                            Sc[c[f]] || c.splice(f, 1);
                        for (f = 0,
                        u = c.length; f < u; )
                            _ = (d = lc(a, Sc[c[f]]))[0],
                            p = d[1],
                            h = (s = hc(a, Sc[c[++f % u]]))[0],
                            l = s[1],
                            (Math.abs(_ - h) > Ec || Math.abs(p - l) > Ec) && (c.splice(f, 0, Sc.push(oc(o, d, Math.abs(_ - t) < Ec && i - p > Ec ? [t, Math.abs(h - t) < Ec ? l : i] : Math.abs(p - i) < Ec && n - _ > Ec ? [Math.abs(l - i) < Ec ? h : n, i] : Math.abs(_ - n) < Ec && p - e > Ec ? [n, Math.abs(h - n) < Ec ? l : e] : Math.abs(p - e) < Ec && _ - t > Ec ? [Math.abs(l - e) < Ec ? h : t, e] : null)) - 1),
                            ++u);
                        u && (y = !1)
                    }
                if (y) {
                    var v, g, x, m = 1 / 0;
                    for (r = 0,
                    y = null; r < b; ++r)
                        (a = Ac[r]) && (x = (v = (o = a.site)[0] - t) * v + (g = o[1] - e) * g) < m && (m = x,
                        y = a);
                    if (y) {
                        var w = [t, e]
                          , M = [t, i]
                          , k = [n, i]
                          , T = [n, e];
                        y.halfedges.push(Sc.push(oc(o = y.site, w, M)) - 1, Sc.push(oc(o, M, k)) - 1, Sc.push(oc(o, k, T)) - 1, Sc.push(oc(o, T, w)) - 1)
                    }
                }
                for (r = 0; r < b; ++r)
                    (a = Ac[r]) && (a.halfedges.length || delete Ac[r])
            }(o, f, c, u)
        }
        this.edges = Sc,
        this.cells = Ac,
        Nc = Cc = Sc = Ac = null
    }
    Lc.prototype = {
        constructor: Lc,
        polygons: function() {
            var t = this.edges;
            return this.cells.map(function(e) {
                var n = e.halfedges.map(function(n) {
                    return hc(e, t[n])
                });
                return n.data = e.site.data,
                n
            })
        },
        triangles: function() {
            var t = []
              , e = this.edges;
            return this.cells.forEach(function(n, i) {
                if (a = (r = n.halfedges).length)
                    for (var r, a, o, f, c, u, s = n.site, h = -1, l = e[r[a - 1]], d = l.left === s ? l.right : l.left; ++h < a; )
                        o = d,
                        d = (l = e[r[h]]).left === s ? l.right : l.left,
                        o && d && i < o.index && i < d.index && (c = o,
                        u = d,
                        ((f = s)[0] - u[0]) * (c[1] - f[1]) - (f[0] - c[0]) * (u[1] - f[1]) < 0) && t.push([s.data, o.data, d.data])
            }),
            t
        },
        links: function() {
            return this.edges.filter(function(t) {
                return t.right
            }).map(function(t) {
                return {
                    source: t.left.data,
                    target: t.right.data
                }
            })
        },
        find: function(t, e, n) {
            for (var i, r, a = this, o = a._found || 0, f = a.cells.length; !(r = a.cells[o]); )
                if (++o >= f)
                    return null;
            var c = t - r.site[0]
              , u = e - r.site[1]
              , s = c * c + u * u;
            do {
                r = a.cells[i = o],
                o = null,
                r.halfedges.forEach(function(n) {
                    var i = a.edges[n]
                      , f = i.left;
                    if (f !== r.site && f || (f = i.right)) {
                        var c = t - f[0]
                          , u = e - f[1]
                          , h = c * c + u * u;
                        h < s && (s = h,
                        o = f.index)
                    }
                })
            } while (null !== o);return a._found = i,
            null == n || s <= n * n ? r.site : null
        }
    };
    var zc = function(t) {
        return function() {
            return t
        }
    };
    function Dc(t, e, n) {
        this.target = t,
        this.type = e,
        this.transform = n
    }
    function Yc(t, e, n) {
        this.k = t,
        this.x = e,
        this.y = n
    }
    Yc.prototype = {
        constructor: Yc,
        scale: function(t) {
            return 1 === t ? this : new Yc(this.k * t,this.x,this.y)
        },
        translate: function(t, e) {
            return 0 === t & 0 === e ? this : new Yc(this.k,this.x + this.k * t,this.y + this.k * e)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var qc = new Yc(1,0,0);
    function Rc() {
        V.stopImmediatePropagation()
    }
    Yc.prototype;
    var jc = function() {
        V.preventDefault(),
        V.stopImmediatePropagation()
    };
    function Oc() {
        return !V.button
    }
    function Fc() {
        var t, e, n = this;
        return n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value,
        e = n.height.baseVal.value) : (t = n.clientWidth,
        e = n.clientHeight),
        [[0, 0], [t, e]]
    }
    function Hc() {
        return this.__zoom || qc
    }
    function Ic() {
        return -V.deltaY * (V.deltaMode ? 120 : 1) / 500
    }
    function Xc() {
        return "ontouchstart"in this
    }
    function Vc(t, e, n) {
        var i = t.invertX(e[0][0]) - n[0][0]
          , r = t.invertX(e[1][0]) - n[1][0]
          , a = t.invertY(e[0][1]) - n[0][1]
          , o = t.invertY(e[1][1]) - n[1][1];
        return t.translate(r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o))
    }
    var Bc = function() {
        var t, e, n = Oc, i = Fc, r = Vc, a = Ic, o = Xc, f = [0, 1 / 0], c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, s = Xe, h = [], l = d("start", "zoom", "end"), _ = 500, p = 150, b = 0;
        function y(t) {
            t.property("__zoom", Hc).on("wheel.zoom", k).on("mousedown.zoom", T).on("dblclick.zoom", N).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function v(t, e) {
            return (e = Math.max(f[0], Math.min(f[1], e))) === t.k ? t : new Yc(e,t.x,t.y)
        }
        function g(t, e, n) {
            var i = e[0] - n[0] * t.k
              , r = e[1] - n[1] * t.k;
            return i === t.x && r === t.y ? t : new Yc(t.k,i,r)
        }
        function x(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        }
        function m(t, e, n) {
            t.on("start.zoom", function() {
                w(this, arguments).start()
            }).on("interrupt.zoom end.zoom", function() {
                w(this, arguments).end()
            }).tween("zoom", function() {
                var t = arguments
                  , r = w(this, t)
                  , a = i.apply(this, t)
                  , o = n || x(a)
                  , f = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1])
                  , c = this.__zoom
                  , u = "function" == typeof e ? e.apply(this, t) : e
                  , h = s(c.invert(o).concat(f / c.k), u.invert(o).concat(f / u.k));
                return function(t) {
                    if (1 === t)
                        t = u;
                    else {
                        var e = h(t)
                          , n = f / e[2];
                        t = new Yc(n,o[0] - e[0] * n,o[1] - e[1] * n)
                    }
                    r.zoom(null, t)
                }
            })
        }
        function w(t, e) {
            for (var n, i = 0, r = h.length; i < r; ++i)
                if ((n = h[i]).that === t)
                    return n;
            return new M(t,e)
        }
        function M(t, e) {
            this.that = t,
            this.args = e,
            this.index = -1,
            this.active = 0,
            this.extent = i.apply(t, e)
        }
        function k() {
            if (n.apply(this, arguments)) {
                var t = w(this, arguments)
                  , e = this.__zoom
                  , i = Math.max(f[0], Math.min(f[1], e.k * Math.pow(2, a.apply(this, arguments))))
                  , o = ft(this);
                if (t.wheel)
                    t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = e.invert(t.mouse[0] = o)),
                    clearTimeout(t.wheel);
                else {
                    if (e.k === i)
                        return;
                    t.mouse = [o, e.invert(o)],
                    Cn(this),
                    t.start()
                }
                jc(),
                t.wheel = setTimeout(function() {
                    t.wheel = null,
                    t.end()
                }, p),
                t.zoom("mouse", r(g(v(e, i), t.mouse[0], t.mouse[1]), t.extent, c))
            }
        }
        function T() {
            if (!e && n.apply(this, arguments)) {
                var t = w(this, arguments)
                  , i = nt(V.view).on("mousemove.zoom", function() {
                    if (jc(),
                    !t.moved) {
                        var e = V.clientX - o
                          , n = V.clientY - f;
                        t.moved = e * e + n * n > b
                    }
                    t.zoom("mouse", r(g(t.that.__zoom, t.mouse[0] = ft(t.that), t.mouse[1]), t.extent, c))
                }, !0).on("mouseup.zoom", function() {
                    i.on("mousemove.zoom mouseup.zoom", null),
                    lt(V.view, t.moved),
                    jc(),
                    t.end()
                }, !0)
                  , a = ft(this)
                  , o = V.clientX
                  , f = V.clientY;
                ht(V.view),
                Rc(),
                t.mouse = [a, this.__zoom.invert(a)],
                Cn(this),
                t.start()
            }
        }
        function N() {
            if (n.apply(this, arguments)) {
                var t = this.__zoom
                  , e = ft(this)
                  , a = t.invert(e)
                  , o = t.k * (V.shiftKey ? .5 : 2)
                  , f = r(g(v(t, o), e, a), i.apply(this, arguments), c);
                jc(),
                u > 0 ? nt(this).transition().duration(u).call(m, f, e) : nt(this).call(y.transform, f)
            }
        }
        function A() {
            if (n.apply(this, arguments)) {
                var e, i, r, a, o = w(this, arguments), f = V.changedTouches, c = f.length;
                for (Rc(),
                i = 0; i < c; ++i)
                    r = f[i],
                    a = [a = ct(this, f, r.identifier), this.__zoom.invert(a), r.identifier],
                    o.touch0 ? o.touch1 || (o.touch1 = a) : (o.touch0 = a,
                    e = !0);
                if (t && (t = clearTimeout(t),
                !o.touch1))
                    return o.end(),
                    void ((a = nt(this).on("dblclick.zoom")) && a.apply(this, arguments));
                e && (t = setTimeout(function() {
                    t = null
                }, _),
                Cn(this),
                o.start())
            }
        }
        function C() {
            var e, n, i, a, o = w(this, arguments), f = V.changedTouches, u = f.length;
            for (jc(),
            t && (t = clearTimeout(t)),
            e = 0; e < u; ++e)
                n = f[e],
                i = ct(this, f, n.identifier),
                o.touch0 && o.touch0[2] === n.identifier ? o.touch0[0] = i : o.touch1 && o.touch1[2] === n.identifier && (o.touch1[0] = i);
            if (n = o.that.__zoom,
            o.touch1) {
                var s = o.touch0[0]
                  , h = o.touch0[1]
                  , l = o.touch1[0]
                  , d = o.touch1[1]
                  , _ = (_ = l[0] - s[0]) * _ + (_ = l[1] - s[1]) * _
                  , p = (p = d[0] - h[0]) * p + (p = d[1] - h[1]) * p;
                n = v(n, Math.sqrt(_ / p)),
                i = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2],
                a = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2]
            } else {
                if (!o.touch0)
                    return;
                i = o.touch0[0],
                a = o.touch0[1]
            }
            o.zoom("touch", r(g(n, i, a), o.extent, c))
        }
        function S() {
            var t, n, i = w(this, arguments), r = V.changedTouches, a = r.length;
            for (Rc(),
            e && clearTimeout(e),
            e = setTimeout(function() {
                e = null
            }, _),
            t = 0; t < a; ++t)
                n = r[t],
                i.touch0 && i.touch0[2] === n.identifier ? delete i.touch0 : i.touch1 && i.touch1[2] === n.identifier && delete i.touch1;
            i.touch1 && !i.touch0 && (i.touch0 = i.touch1,
            delete i.touch1),
            i.touch0 ? i.touch0[1] = this.__zoom.invert(i.touch0[0]) : i.end()
        }
        return y.transform = function(t, e) {
            var n = t.selection ? t.selection() : t;
            n.property("__zoom", Hc),
            t !== n ? m(t, e) : n.interrupt().each(function() {
                w(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end()
            })
        }
        ,
        y.scaleBy = function(t, e) {
            y.scaleTo(t, function() {
                return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
            })
        }
        ,
        y.scaleTo = function(t, e) {
            y.transform(t, function() {
                var t = i.apply(this, arguments)
                  , n = this.__zoom
                  , a = x(t)
                  , o = n.invert(a)
                  , f = "function" == typeof e ? e.apply(this, arguments) : e;
                return r(g(v(n, f), a, o), t, c)
            })
        }
        ,
        y.translateBy = function(t, e, n) {
            y.transform(t, function() {
                return r(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), i.apply(this, arguments), c)
            })
        }
        ,
        y.translateTo = function(t, e, n) {
            y.transform(t, function() {
                var t = i.apply(this, arguments)
                  , a = this.__zoom
                  , o = x(t);
                return r(qc.translate(o[0], o[1]).scale(a.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, c)
            })
        }
        ,
        M.prototype = {
            start: function() {
                return 1 == ++this.active && (this.index = h.push(this) - 1,
                this.emit("start")),
                this
            },
            zoom: function(t, e) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])),
                this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])),
                this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])),
                this.that.__zoom = e,
                this.emit("zoom"),
                this
            },
            end: function() {
                return 0 == --this.active && (h.splice(this.index, 1),
                this.index = -1,
                this.emit("end")),
                this
            },
            emit: function(t) {
                G(new Dc(y,t,this.that.__zoom), l.apply, l, [t, this.that, this.args])
            }
        },
        y.wheelDelta = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : zc(+t),
            y) : a
        }
        ,
        y.filter = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : zc(!!t),
            y) : n
        }
        ,
        y.touchable = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : zc(!!t),
            y) : o
        }
        ,
        y.extent = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : zc([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
            y) : i
        }
        ,
        y.scaleExtent = function(t) {
            return arguments.length ? (f[0] = +t[0],
            f[1] = +t[1],
            y) : [f[0], f[1]]
        }
        ,
        y.translateExtent = function(t) {
            return arguments.length ? (c[0][0] = +t[0][0],
            c[1][0] = +t[1][0],
            c[0][1] = +t[0][1],
            c[1][1] = +t[1][1],
            y) : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]]
        }
        ,
        y.constrain = function(t) {
            return arguments.length ? (r = t,
            y) : r
        }
        ,
        y.duration = function(t) {
            return arguments.length ? (u = +t,
            y) : u
        }
        ,
        y.interpolate = function(t) {
            return arguments.length ? (s = t,
            y) : s
        }
        ,
        y.on = function() {
            var t = l.on.apply(l, arguments);
            return t === l ? y : t
        }
        ,
        y.clickDistance = function(t) {
            return arguments.length ? (b = (t = +t) * t,
            y) : Math.sqrt(b)
        }
        ,
        y
    };
    n.d(e, "a", function() {
        return gt
    }),
    n.d(e, "c", function() {
        return bi
    }),
    n.d(e, "d", function() {
        return Si
    }),
    n.d(e, "e", function() {
        return Pi
    }),
    n.d(e, "f", function() {
        return Ri
    }),
    n.d(e, "g", function() {
        return qi
    }),
    n.d(e, "h", function() {
        return nt
    }),
    n.d(e, "b", function() {
        return V
    }),
    n.d(e, "i", function() {
        return Bc
    })
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    function(t) {
        n.d(e, "default", function() {
            return s
        });
        var i = n(0);
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function o(t, e) {
            return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
        }
        var f, c, u = {
            width: 1e3,
            height: 800,
            nodes: [],
            links: [],
            isHighLight: !0,
            isScale: !0,
            scaleExtent: [.5, 1.5],
            chargeStrength: -300,
            collide: 100,
            nodeWidth: 160,
            margin: 20,
            alphaDecay: .0228,
            r: 45,
            relFontSize: 12,
            linkSrc: 30,
            linkColor: "#bad4ed",
            strokeColor: "#7ecef4",
            strokeWidth: 3
        }, s = function() {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = {
                    width: parseInt(i.h(e).style("width")),
                    height: parseInt(i.h(e).style("height"))
                };
                this.map = i.h(e),
                this.config = function(t) {
                    for (var e = Array.prototype.slice.call(arguments, 1), n = 0; n < e.length; n += 1) {
                        var i = e[n];
                        for (var r in i)
                            i.hasOwnProperty(r) && (t[r] = i[r])
                    }
                    return t
                }({}, u, n, a, r),
                this.dependsNode = [],
                this.dependsLinkAndText = [],
                this.initSimulation()
            }
            var e, n, r;
            return e = t,
            (n = [{
                key: "initSimulation",
                value: function() {
                    var t = this
                      , e = this;
                    this.simulation = i.g(this.config.nodes).force("link", i.e(this.config.links)).force("charge", i.f().strength(this.config.chargeStrength)).force("center", i.c(this.config.width / 2, this.config.height / 2)).force("collide", i.d(this.config.collide).strength(.2).iterations(5)).alphaDecay(this.config.alphaDecay).on("tick", function() {
                        return t.ticked()
                    }),
                    this.SVG = this.map.append("svg").attr("class", "svgclass").attr("width", this.config.width).attr("height", this.config.height).call(i.i().scaleExtent(this.config.scaleExtent).on("zoom", function() {
                        t.config.isScale && t.relMap_g.attr("transform", i.b.transform)
                    })).on("click", function() {
                        return console.log("画布 click")
                    }).on("dblclick.zoom", null),
                    this.defs = this.SVG.append("defs"),
                    this.marker = this.defs.append("marker").attr("id", "marker").attr("markerWidth", 10).attr("markerHeight", 10).attr("refX", this.config.r + 3 * this.config.strokeWidth).attr("refY", 4).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 0 0 8 4 0 8Z").attr("fill", "steelblue"),
                    this.patterns = this.defs.selectAll("pattern.patternclass").data(this.config.nodes).enter().append("pattern").attr("class", "patternclass").attr("id", function(t, e) {
                        return "avatar" + t.role_id
                    }).attr("patternUnits", "objectBoundingBox").attr("x", "0").attr("y", "0").attr("width", "1").attr("height", "1"),
                    this.patterns.append("image").attr("class", "circle").attr("xlink:href", function(t) {
                        return t.avatar
                    }).attr("src", function(t) {
                        return t.avatar
                    }).attr("height", 2 * this.config.r).attr("width", 2 * this.config.r).attr("preserveAspectRatio", "xMidYMin slice"),
                    this.patterns.append("rect").attr("x", "0").attr("y", 4 / 3 * this.config.r).attr("width", 2 * this.config.r).attr("height", 2 / 3 * this.config.r).attr("fill", "black").attr("opacity", "0.5"),
                    this.patterns.append("text").attr("class", "nodetext").attr("x", this.config.r).attr("y", 5 / 3 * this.config.r).attr("text-anchor", "middle").attr("fill", "#fff").style("font-size", this.config.r / 3).text(function(t) {
                        return t.name
                    }),
                    this.relMap_g = this.SVG.append("g").attr("class", "relMap_g").attr("width", this.config.width).attr("height", this.config.height),
                    this.edges = this.relMap_g.selectAll("g.edge").data(this.config.links).enter().append("g").attr("class", "edge").on("mouseover", function() {
                        i.h(this).selectAll("path.links").attr("stroke-width", 4)
                    }).on("mouseout", function() {
                        i.h(this).selectAll("path.links").attr("stroke-width", 1)
                    }).on("click", function(t) {
                        console.log("线click")
                    }).attr("fill", function(t) {
                        var e = "#bad4ed";
                        return t.color && (e = "#" + t.color),
                        e
                    }),
                    this.links = this.edges.append("path").attr("class", "links").attr("d", function(e) {
                        return "M" + t.config.linkSrc + ",0 L" + o(e.source, e.target) + ",0"
                    }).style("marker-end", "url(#marker)").attr("stroke", function(e) {
                        return e.color ? "#" + e.color : t.config.linkColor
                    }),
                    this.rect_g = this.edges.append("g").attr("class", "rect_g"),
                    this.rects = this.rect_g.append("rect").attr("x", 40).attr("y", -10).attr("width", 40).attr("height", 20).attr("fill", "white").attr("stroke", function(e) {
                        return e.color ? "#" + e.color : t.config.linkColor
                    }),
                    this.texts = this.rect_g.append("text").attr("x", 40).attr("y", 5).attr("text-anchor", "middle").style("font-size", 12).text(function(t) {
                        return t.relation
                    }),
                    this.circles = this.relMap_g.selectAll("circle.circleclass").data(this.config.nodes).enter().append("circle").attr("class", "circleclass").style("cursor", "pointer").attr("fill", function(t) {
                        var bg = t.avatar?t.avatar:t.bg
                        if(t.avatar){
                            return "url(#avatar" + t.role_id + ")"
                        }else{
                            return t.bg
                        }
                        
                    }).attr("stroke", "#ccf1fc").attr("stroke-width", this.config.strokeWidth).attr("r", this.config.r).on("mouseover", function(t) {
                        i.h(this).attr("stroke-width", "8"),
                        i.h(this).attr("stroke", "#a3e5f9"),
                        e.config.isHighLight && e.highlightObject(t)
                    }).on("mouseout", function(t) {
                        i.h(this).attr("stroke-width", e.config.strokeWidth),
                        i.h(this).attr("stroke", "#c5dbf0"),
                        e.config.isHighLight && e.highlightObject(null)
                    }).on("click", function(t) {
                        console.log("头像节点click",t),
                        event = i.b || window.event;
                        // e.hideLevel3(t);//点击隐藏
                        event.pageX ? event.pageX : (event.clientX,
                        document.body.scrollLeft || document.documentElement.scrollLeft),
                        event.pageY ? event.pageY : (event.clientY,
                        document.body.scrollTop || document.documentElement.scrollTop);
                        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0,
                        event.preventDefault ? event.preventDefault() : event.returnValue = !1
                    }).on("contextmenu", function() {

                        event = event || window.event,
                        event.cancelBubble = !0,
                        event.returnValue = !1
                    }).call(i.a().on("start", function(e) {
                        i.b.sourceEvent.stopPropagation(),
                        i.b.active || t.simulation.alphaTarget(.3).restart(),
                        e.fx = e.x,
                        e.fy = e.y
                    }).on("drag", function(t) {
                        t.fx = i.b.x,
                        t.fy = i.b.y
                    }).on("end", function(e) {
                        i.b.active || t.simulation.alphaTarget(0),
                        e.fx = null,
                        e.fy = null
                    }))
                }
            }, {
                key: "ticked",
                value: function() {
                    var t = this;
                    this.edges.attr("transform", function(t) {
                        return e = t.source,
                        n = t.target,
                        i = o(t.source, t.target),
                        n.x > e.x ? r = n.y > e.y ? Math.asin((n.y - e.y) / i) : -(r = Math.asin((e.y - n.y) / i)) : n.y > e.y ? (r = Math.asin((n.y - e.y) / i),
                        r = Math.PI - r) : (r = Math.asin((e.y - n.y) / i),
                        r -= Math.PI),
                        r *= 180 / Math.PI,
                        "translate(" + e.x + "," + e.y + ")rotate(" + r + ")";
                        var e, n, i, r
                    }),
                    this.links.attr("d", function(e) {
                        return "M" + t.config.linkSrc + ",0 L" + o(e.source, e.target) + ",0"
                    }),
                    this.texts.attr("x", function(t) {
                        i.h(this).node().getBBox().width;
                        return o(t.source, t.target) / 2
                    }).attr("transform", function(t) {
                        return t.target.x < t.source.x ? "rotate(180 " + o(t.source, t.target) / 2 + " 0)" : "rotate(0)"
                    }),
                    this.rects.attr("x", function(t) {
                        return o(t.source, t.target) / 2 - i.h(this).attr("width") / 2
                    }),
                    this.circles.attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    })
                }
            }, {
                key: "highlightObject",
                value: function(t) {
                    var e = this;
                    if (t) {
                        var n = t.index;
                        this.dependsNode = this.dependsNode.concat([n]),
                        this.dependsLinkAndText = this.dependsLinkAndText.concat([n]),
                        this.config.links.forEach(function(t) {
                            n == t.source.index ? e.dependsNode = e.dependsNode.concat([t.target.index]) : n == t.target.index && (e.dependsNode = e.dependsNode.concat([t.source.index]))
                        }),
                        this.SVG.selectAll("circle").filter(function(t) {
                            return -1 == e.dependsNode.indexOf(t.index)
                        }).transition().style("opacity", .1),
                        this.SVG.selectAll(".edge").filter(function(t) {
                            return -1 == e.dependsLinkAndText.indexOf(t.source.index) && -1 == e.dependsLinkAndText.indexOf(t.target.index)
                        }).transition().style("opacity", .1)
                    } else
                        this.SVG.selectAll("circle").filter(function() {
                            return !0
                        }).transition().style("opacity", 1),
                        this.SVG.selectAll(".edge").filter(function(t) {
                            return -1 == e.dependsLinkAndText.indexOf(t.source.index) && -1 == e.dependsLinkAndText.indexOf(t.target.index)
                        }).transition().style("opacity", 1),
                        this.dependsNode = [],
                        this.dependsLinkAndText = []
                }
            },{
                key: "hideLevel3",
                value: function(t) {
                    var e = this;
                    if (t) {
                        var n = t.index;
                        this.dependsNode = this.dependsNode.concat([n]),
                        this.dependsLinkAndText = this.dependsLinkAndText.concat([n]),
                        this.config.links.forEach(function(t) {
                            n == t.source.index ? e.dependsNode = e.dependsNode.concat([t.target.index]) : n == t.target.index && (e.dependsNode = e.dependsNode.concat([t.source.index]))
                        }),
                        this.SVG.selectAll("circle").filter(function(t) {
                            return -1 == e.dependsNode.indexOf(t.index)
                        }).transition().style("opacity", .001),
                        this.SVG.selectAll(".edge").filter(function(t) {
                            return -1 == e.dependsLinkAndText.indexOf(t.source.index) && -1 == e.dependsLinkAndText.indexOf(t.target.index)
                        }).transition().style("opacity", .001)
                    } else
                        this.SVG.selectAll("circle").filter(function() {
                            return !0
                        }).transition().style("opacity", 1),
                        this.SVG.selectAll(".edge").filter(function(t) {
                            return -1 == e.dependsLinkAndText.indexOf(t.source.index) && -1 == e.dependsLinkAndText.indexOf(t.target.index)
                        }).transition().style("opacity", 1),
                        this.dependsNode = [],
                        this.dependsLinkAndText = []
                }
            }]) && a(e.prototype, n),
            r && a(e, r),
            t
        }();
        f = void 0,
        c = s,
        "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) && void 0 !== t ? t.exports = c : (f = f || self).RelationChart = c
    }
    .call(this, n(2)(t))
}
, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            Object.defineProperty(e, "exports", {
                enumerable: !0
            }),
            e.webpackPolyfill = 1
        }
        return e
    }
}
]);
