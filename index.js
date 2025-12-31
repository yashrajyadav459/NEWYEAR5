(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const s of i)
			if (s.type === "childList")
				for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const s = {};
		return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = n(i);
		fetch(i.href, s)
	}
})();
var Wd = {
	exports: {}
},
	Ps = {},
	Hd = {
		exports: {}
	},
	_ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr = Symbol.for("react.element"),
	Om = Symbol.for("react.portal"),
	Bm = Symbol.for("react.fragment"),
	bm = Symbol.for("react.strict_mode"),
	Um = Symbol.for("react.profiler"),
	$m = Symbol.for("react.provider"),
	Wm = Symbol.for("react.context"),
	Hm = Symbol.for("react.forward_ref"),
	Km = Symbol.for("react.suspense"),
	Ym = Symbol.for("react.memo"),
	Gm = Symbol.for("react.lazy"),
	wu = Symbol.iterator;

function Qm(e) {
	return e === null || typeof e != "object" ? null : (e = wu && e[wu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Kd = {
	isMounted: function () {
		return !1
	},
	enqueueForceUpdate: function () { },
	enqueueReplaceState: function () { },
	enqueueSetState: function () { }
},
	Yd = Object.assign,
	Gd = {};

function Qn(e, t, n) {
	this.props = e, this.context = t, this.refs = Gd, this.updater = n || Kd
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
Qn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Qd() { }
Qd.prototype = Qn.prototype;

function Ga(e, t, n) {
	this.props = e, this.context = t, this.refs = Gd, this.updater = n || Kd
}
var Qa = Ga.prototype = new Qd;
Qa.constructor = Ga;
Yd(Qa, Qn.prototype);
Qa.isPureReactComponent = !0;
var Su = Array.isArray,
	Xd = Object.prototype.hasOwnProperty,
	Xa = {
		current: null
	},
	Zd = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Jd(e, t, n) {
	var r, i = {},
		s = null,
		o = null;
	if (t != null)
		for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Xd.call(t, r) && !Zd.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		i.children = l
	}
	if (e && e.defaultProps)
		for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: Zr,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: Xa.current
	}
}

function Xm(e, t) {
	return {
		$$typeof: Zr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function Za(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Zr
}

function Zm(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function (n) {
		return t[n]
	})
}
var ku = /\/+/g;

function Ks(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? Zm("" + e.key) : t.toString(36)
}

function Ai(e, t, n, r, i) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else switch (s) {
		case "string":
		case "number":
			o = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case Zr:
				case Om:
					o = !0
			}
	}
	if (o) return o = e, i = i(o), e = r === "" ? "." + Ks(o, 0) : r, Su(i) ? (n = "", e != null && (n = e.replace(ku, "$&/") + "/"), Ai(i, t, n, "", function (u) {
		return u
	})) : i != null && (Za(i) && (i = Xm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(ku, "$&/") + "/") + e)), t.push(i)), 1;
	if (o = 0, r = r === "" ? "." : r + ":", Su(e))
		for (var a = 0; a < e.length; a++) {
			s = e[a];
			var l = r + Ks(s, a);
			o += Ai(s, t, n, l, i)
		} else if (l = Qm(e), typeof l == "function")
		for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + Ks(s, a++), o += Ai(s, t, n, l, i);
	else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return o
}

function ci(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return Ai(e, r, "", "", function (s) {
		return t.call(n, s, i++)
	}), r
}

function Jm(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function (n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function (n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var Se = {
	current: null
},
	Li = {
		transition: null
	},
	qm = {
		ReactCurrentDispatcher: Se,
		ReactCurrentBatchConfig: Li,
		ReactCurrentOwner: Xa
	};

function qd() {
	throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
	map: ci,
	forEach: function (e, t, n) {
		ci(e, function () {
			t.apply(this, arguments)
		}, n)
	},
	count: function (e) {
		var t = 0;
		return ci(e, function () {
			t++
		}), t
	},
	toArray: function (e) {
		return ci(e, function (t) {
			return t
		}) || []
	},
	only: function (e) {
		if (!Za(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
_.Component = Qn;
_.Fragment = Bm;
_.Profiler = Um;
_.PureComponent = Ga;
_.StrictMode = bm;
_.Suspense = Km;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qm;
_.act = qd;
_.cloneElement = function (e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Yd({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (s = t.ref, o = Xa.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
		for (l in t) Xd.call(t, l) && !Zd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a
	}
	return {
		$$typeof: Zr,
		type: e.type,
		key: i,
		ref: s,
		props: r,
		_owner: o
	}
};
_.createContext = function (e) {
	return e = {
		$$typeof: Wm,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: $m,
		_context: e
	}, e.Consumer = e
};
_.createElement = Jd;
_.createFactory = function (e) {
	var t = Jd.bind(null, e);
	return t.type = e, t
};
_.createRef = function () {
	return {
		current: null
	}
};
_.forwardRef = function (e) {
	return {
		$$typeof: Hm,
		render: e
	}
};
_.isValidElement = Za;
_.lazy = function (e) {
	return {
		$$typeof: Gm,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: Jm
	}
};
_.memo = function (e, t) {
	return {
		$$typeof: Ym,
		type: e,
		compare: t === void 0 ? null : t
	}
};
_.startTransition = function (e) {
	var t = Li.transition;
	Li.transition = {};
	try {
		e()
	} finally {
		Li.transition = t
	}
};
_.unstable_act = qd;
_.useCallback = function (e, t) {
	return Se.current.useCallback(e, t)
};
_.useContext = function (e) {
	return Se.current.useContext(e)
};
_.useDebugValue = function () { };
_.useDeferredValue = function (e) {
	return Se.current.useDeferredValue(e)
};
_.useEffect = function (e, t) {
	return Se.current.useEffect(e, t)
};
_.useId = function () {
	return Se.current.useId()
};
_.useImperativeHandle = function (e, t, n) {
	return Se.current.useImperativeHandle(e, t, n)
};
_.useInsertionEffect = function (e, t) {
	return Se.current.useInsertionEffect(e, t)
};
_.useLayoutEffect = function (e, t) {
	return Se.current.useLayoutEffect(e, t)
};
_.useMemo = function (e, t) {
	return Se.current.useMemo(e, t)
};
_.useReducer = function (e, t, n) {
	return Se.current.useReducer(e, t, n)
};
_.useRef = function (e) {
	return Se.current.useRef(e)
};
_.useState = function (e) {
	return Se.current.useState(e)
};
_.useSyncExternalStore = function (e, t, n) {
	return Se.current.useSyncExternalStore(e, t, n)
};
_.useTransition = function () {
	return Se.current.useTransition()
};
_.version = "18.3.1";
Hd.exports = _;
var N = Hd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e0 = N,
	t0 = Symbol.for("react.element"),
	n0 = Symbol.for("react.fragment"),
	r0 = Object.prototype.hasOwnProperty,
	i0 = e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	s0 = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function ef(e, t, n) {
	var r, i = {},
		s = null,
		o = null;
	n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
	for (r in t) r0.call(t, r) && !s0.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: t0,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: i0.current
	}
}
Ps.Fragment = n0;
Ps.jsx = ef;
Ps.jsxs = ef;
Wd.exports = Ps;
var g = Wd.exports,
	tf = {
		exports: {}
	},
	Re = {},
	nf = {
		exports: {}
	},
	rf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
	function t(j, A) {
		var R = j.length;
		j.push(A);
		e: for (; 0 < R;) {
			var H = R - 1 >>> 1,
				oe = j[H];
			if (0 < i(oe, A)) j[H] = A, j[R] = oe, R = H;
			else break e
		}
	}

	function n(j) {
		return j.length === 0 ? null : j[0]
	}

	function r(j) {
		if (j.length === 0) return null;
		var A = j[0],
			R = j.pop();
		if (R !== A) {
			j[0] = R;
			e: for (var H = 0, oe = j.length, li = oe >>> 1; H < li;) {
				var Ht = 2 * (H + 1) - 1,
					Hs = j[Ht],
					Kt = Ht + 1,
					ui = j[Kt];
				if (0 > i(Hs, R)) Kt < oe && 0 > i(ui, Hs) ? (j[H] = ui, j[Kt] = R, H = Kt) : (j[H] = Hs, j[Ht] = R, H = Ht);
				else if (Kt < oe && 0 > i(ui, R)) j[H] = ui, j[Kt] = R, H = Kt;
				else break e
			}
		}
		return A
	}

	function i(j, A) {
		var R = j.sortIndex - A.sortIndex;
		return R !== 0 ? R : j.id - A.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var s = performance;
		e.unstable_now = function () {
			return s.now()
		}
	} else {
		var o = Date,
			a = o.now();
		e.unstable_now = function () {
			return o.now() - a
		}
	}
	var l = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		y = !1,
		v = !1,
		x = !1,
		k = typeof setTimeout == "function" ? setTimeout : null,
		p = typeof clearTimeout == "function" ? clearTimeout : null,
		h = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function m(j) {
		for (var A = n(u); A !== null;) {
			if (A.callback === null) r(u);
			else if (A.startTime <= j) r(u), A.sortIndex = A.expirationTime, t(l, A);
			else break;
			A = n(u)
		}
	}

	function w(j) {
		if (x = !1, m(j), !v)
			if (n(l) !== null) v = !0, ai(S);
			else {
				var A = n(u);
				A !== null && J(w, A.startTime - j)
			}
	}

	function S(j, A) {
		v = !1, x && (x = !1, p(T), T = -1), y = !0;
		var R = f;
		try {
			for (m(A), d = n(l); d !== null && (!(d.expirationTime > A) || j && !ee());) {
				var H = d.callback;
				if (typeof H == "function") {
					d.callback = null, f = d.priorityLevel;
					var oe = H(d.expirationTime <= A);
					A = e.unstable_now(), typeof oe == "function" ? d.callback = oe : d === n(l) && r(l), m(A)
				} else r(l);
				d = n(l)
			}
			if (d !== null) var li = !0;
			else {
				var Ht = n(u);
				Ht !== null && J(w, Ht.startTime - A), li = !1
			}
			return li
		} finally {
			d = null, f = R, y = !1
		}
	}
	var C = !1,
		E = null,
		T = -1,
		V = 5,
		D = -1;

	function ee() {
		return !(e.unstable_now() - D < V)
	}

	function xt() {
		if (E !== null) {
			var j = e.unstable_now();
			D = j;
			var A = !0;
			try {
				A = E(!0, j)
			} finally {
				A ? Wt() : (C = !1, E = null)
			}
		} else C = !1
	}
	var Wt;
	if (typeof h == "function") Wt = function () {
		h(xt)
	};
	else if (typeof MessageChannel < "u") {
		var tr = new MessageChannel,
			oi = tr.port2;
		tr.port1.onmessage = xt, Wt = function () {
			oi.postMessage(null)
		}
	} else Wt = function () {
		k(xt, 0)
	};

	function ai(j) {
		E = j, C || (C = !0, Wt())
	}

	function J(j, A) {
		T = k(function () {
			j(e.unstable_now())
		}, A)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (j) {
		j.callback = null
	}, e.unstable_continueExecution = function () {
		v || y || (v = !0, ai(S))
	}, e.unstable_forceFrameRate = function (j) {
		0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < j ? Math.floor(1e3 / j) : 5
	}, e.unstable_getCurrentPriorityLevel = function () {
		return f
	}, e.unstable_getFirstCallbackNode = function () {
		return n(l)
	}, e.unstable_next = function (j) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var A = 3;
				break;
			default:
				A = f
		}
		var R = f;
		f = A;
		try {
			return j()
		} finally {
			f = R
		}
	}, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (j, A) {
		switch (j) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				j = 3
		}
		var R = f;
		f = j;
		try {
			return A()
		} finally {
			f = R
		}
	}, e.unstable_scheduleCallback = function (j, A, R) {
		var H = e.unstable_now();
		switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? H + R : H) : R = H, j) {
			case 1:
				var oe = -1;
				break;
			case 2:
				oe = 250;
				break;
			case 5:
				oe = 1073741823;
				break;
			case 4:
				oe = 1e4;
				break;
			default:
				oe = 5e3
		}
		return oe = R + oe, j = {
			id: c++,
			callback: A,
			priorityLevel: j,
			startTime: R,
			expirationTime: oe,
			sortIndex: -1
		}, R > H ? (j.sortIndex = R, t(u, j), n(l) === null && j === n(u) && (x ? (p(T), T = -1) : x = !0, J(w, R - H))) : (j.sortIndex = oe, t(l, j), v || y || (v = !0, ai(S))), j
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function (j) {
		var A = f;
		return function () {
			var R = f;
			f = A;
			try {
				return j.apply(this, arguments)
			} finally {
				f = R
			}
		}
	}
})(rf);
nf.exports = rf;
var o0 = nf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0 = N,
	Fe = o0;

function P(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sf = new Set,
	Mr = {};

function fn(e, t) {
	Bn(e, t), Bn(e + "Capture", t)
}

function Bn(e, t) {
	for (Mr[e] = t, e = 0; e < t.length; e++) sf.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	Ro = Object.prototype.hasOwnProperty,
	l0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Tu = {},
	Cu = {};

function u0(e) {
	return Ro.call(Cu, e) ? !0 : Ro.call(Tu, e) ? !1 : l0.test(e) ? Cu[e] = !0 : (Tu[e] = !0, !1)
}

function c0(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function d0(e, t, n, r) {
	if (t === null || typeof t > "u" || c0(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function ke(e, t, n, r, i, s, o) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
	fe[e] = new ke(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function (e) {
	var t = e[0];
	fe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
	fe[e] = new ke(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
	fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	fe[e] = new ke(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
	fe[e] = new ke(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
	fe[e] = new ke(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
	fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ja = /[\-:]([a-z])/g;

function qa(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
	var t = e.replace(Ja, qa);
	fe[t] = new ke(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
	var t = e.replace(Ja, qa);
	fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Ja, qa);
	fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
	fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function el(e, t, n, r) {
	var i = fe.hasOwnProperty(t) ? fe[t] : null;
	(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (d0(t, n, i, r) && (n = null), r || i === null ? u0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vt = a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	di = Symbol.for("react.element"),
	gn = Symbol.for("react.portal"),
	yn = Symbol.for("react.fragment"),
	tl = Symbol.for("react.strict_mode"),
	Vo = Symbol.for("react.profiler"),
	of = Symbol.for("react.provider"),
	af = Symbol.for("react.context"),
	nl = Symbol.for("react.forward_ref"),
	_o = Symbol.for("react.suspense"),
	Io = Symbol.for("react.suspense_list"),
	rl = Symbol.for("react.memo"),
	kt = Symbol.for("react.lazy"),
	lf = Symbol.for("react.offscreen"),
	Pu = Symbol.iterator;

function nr(e) {
	return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q = Object.assign,
	Ys;

function dr(e) {
	if (Ys === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Ys = t && t[1] || ""
	}
	return `
` + Ys + e
}
var Gs = !1;

function Qs(e, t) {
	if (!e || Gs) return "";
	Gs = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function () {
				throw Error()
			}, Object.defineProperty(t.prototype, "props", {
				set: function () {
					throw Error()
				}
			}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
			for (; 1 <= o && 0 <= a; o--, a--)
				if (i[o] !== s[a]) {
					if (o !== 1 || a !== 1)
						do
							if (o--, a--, 0 > a || i[o] !== s[a]) {
								var l = `
` + i[o].replace(" at new ", " at ");
								return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
							} while (1 <= o && 0 <= a);
					break
				}
		}
	} finally {
		Gs = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? dr(e) : ""
}

function f0(e) {
	switch (e.tag) {
		case 5:
			return dr(e.type);
		case 16:
			return dr("Lazy");
		case 13:
			return dr("Suspense");
		case 19:
			return dr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Qs(e.type, !1), e;
		case 11:
			return e = Qs(e.type.render, !1), e;
		case 1:
			return e = Qs(e.type, !0), e;
		default:
			return ""
	}
}

function zo(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case yn:
			return "Fragment";
		case gn:
			return "Portal";
		case Vo:
			return "Profiler";
		case tl:
			return "StrictMode";
		case _o:
			return "Suspense";
		case Io:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case af:
			return (e.displayName || "Context") + ".Consumer";
		case of:
			return (e._context.displayName || "Context") + ".Provider";
		case nl:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case rl:
			return t = e.displayName || null, t !== null ? t : zo(e.type) || "Memo";
		case kt:
			t = e._payload, e = e._init;
			try {
				return zo(e(t))
			} catch { }
	}
	return null
}

function h0(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return zo(t);
		case 8:
			return t === tl ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function _t(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function uf(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function p0(e) {
	var t = uf(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var i = n.get,
			s = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function () {
				return i.call(this)
			},
			set: function (o) {
				r = "" + o, s.call(this, o)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function () {
				return r
			},
			setValue: function (o) {
				r = "" + o
			},
			stopTracking: function () {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function fi(e) {
	e._valueTracker || (e._valueTracker = p0(e))
}

function cf(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = uf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Yi(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function Oo(e, t) {
	var n = t.checked;
	return Q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function Eu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = _t(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function df(e, t) {
	t = t.checked, t != null && el(e, "checked", t, !1)
}

function Bo(e, t) {
	df(e, t);
	var n = _t(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? bo(e, t.type, n) : t.hasOwnProperty("defaultValue") && bo(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Nu(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function bo(e, t, n) {
	(t !== "number" || Yi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fr = Array.isArray;

function Fn(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				e[i].selected = !0, r && (e[i].defaultSelected = !0);
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}

function Uo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
	return Q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function ju(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(P(92));
			if (fr(n)) {
				if (1 < n.length) throw Error(P(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: _t(n)
	}
}

function ff(e, t) {
	var n = _t(t.value),
		r = _t(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Mu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function hf(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function $o(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var hi, pf = function (e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
		MSApp.execUnsafeLocalFunction(function () {
			return e(t, n, r, i)
		})
	} : e
}(function (e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (hi = hi || document.createElement("div"), hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Dr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var gr = {
	animationIterationCount: !0,
	aspectRatio: !0,
	borderImageOutset: !0,
	borderImageSlice: !0,
	borderImageWidth: !0,
	boxFlex: !0,
	boxFlexGroup: !0,
	boxOrdinalGroup: !0,
	columnCount: !0,
	columns: !0,
	flex: !0,
	flexGrow: !0,
	flexPositive: !0,
	flexShrink: !0,
	flexNegative: !0,
	flexOrder: !0,
	gridArea: !0,
	gridRow: !0,
	gridRowEnd: !0,
	gridRowSpan: !0,
	gridRowStart: !0,
	gridColumn: !0,
	gridColumnEnd: !0,
	gridColumnSpan: !0,
	gridColumnStart: !0,
	fontWeight: !0,
	lineClamp: !0,
	lineHeight: !0,
	opacity: !0,
	order: !0,
	orphans: !0,
	tabSize: !0,
	widows: !0,
	zIndex: !0,
	zoom: !0,
	fillOpacity: !0,
	floodOpacity: !0,
	stopOpacity: !0,
	strokeDasharray: !0,
	strokeDashoffset: !0,
	strokeMiterlimit: !0,
	strokeOpacity: !0,
	strokeWidth: !0
},
	m0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
	m0.forEach(function (t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), gr[t] = gr[e]
	})
});

function mf(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px"
}

function gf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = mf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
		}
}
var g0 = Q({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function Wo(e, t) {
	if (t) {
		if (g0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(P(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(P(62))
	}
}

function Ho(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var Ko = null;

function il(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Yo = null,
	Rn = null,
	Vn = null;

function Du(e) {
	if (e = ei(e)) {
		if (typeof Yo != "function") throw Error(P(280));
		var t = e.stateNode;
		t && (t = Ds(t), Yo(e.stateNode, e.type, t))
	}
}

function yf(e) {
	Rn ? Vn ? Vn.push(e) : Vn = [e] : Rn = e
}

function vf() {
	if (Rn) {
		var e = Rn,
			t = Vn;
		if (Vn = Rn = null, Du(e), t)
			for (e = 0; e < t.length; e++) Du(t[e])
	}
}

function xf(e, t) {
	return e(t)
}

function wf() { }
var Xs = !1;

function Sf(e, t, n) {
	if (Xs) return e(t, n);
	Xs = !0;
	try {
		return xf(e, t, n)
	} finally {
		Xs = !1, (Rn !== null || Vn !== null) && (wf(), vf())
	}
}

function Ar(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Ds(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(P(231, t, typeof n));
	return n
}
var Go = !1;
if (ft) try {
	var rr = {};
	Object.defineProperty(rr, "passive", {
		get: function () {
			Go = !0
		}
	}), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr)
} catch {
	Go = !1
}

function y0(e, t, n, r, i, s, o, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var yr = !1,
	Gi = null,
	Qi = !1,
	Qo = null,
	v0 = {
		onError: function (e) {
			yr = !0, Gi = e
		}
	};

function x0(e, t, n, r, i, s, o, a, l) {
	yr = !1, Gi = null, y0.apply(v0, arguments)
}

function w0(e, t, n, r, i, s, o, a, l) {
	if (x0.apply(this, arguments), yr) {
		if (yr) {
			var u = Gi;
			yr = !1, Gi = null
		} else throw Error(P(198));
		Qi || (Qi = !0, Qo = u)
	}
}

function hn(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function kf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function Au(e) {
	if (hn(e) !== e) throw Error(P(188))
}

function S0(e) {
	var t = e.alternate;
	if (!t) {
		if (t = hn(e), t === null) throw Error(P(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t; ;) {
		var i = n.return;
		if (i === null) break;
		var s = i.alternate;
		if (s === null) {
			if (r = i.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (i.child === s.child) {
			for (s = i.child; s;) {
				if (s === n) return Au(i), e;
				if (s === r) return Au(i), t;
				s = s.sibling
			}
			throw Error(P(188))
		}
		if (n.return !== r.return) n = i, r = s;
		else {
			for (var o = !1, a = i.child; a;) {
				if (a === n) {
					o = !0, n = i, r = s;
					break
				}
				if (a === r) {
					o = !0, r = i, n = s;
					break
				}
				a = a.sibling
			}
			if (!o) {
				for (a = s.child; a;) {
					if (a === n) {
						o = !0, n = s, r = i;
						break
					}
					if (a === r) {
						o = !0, r = s, n = i;
						break
					}
					a = a.sibling
				}
				if (!o) throw Error(P(189))
			}
		}
		if (n.alternate !== r) throw Error(P(190))
	}
	if (n.tag !== 3) throw Error(P(188));
	return n.stateNode.current === n ? e : t
}

function Tf(e) {
	return e = S0(e), e !== null ? Cf(e) : null
}

function Cf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = Cf(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var Pf = Fe.unstable_scheduleCallback,
	Lu = Fe.unstable_cancelCallback,
	k0 = Fe.unstable_shouldYield,
	T0 = Fe.unstable_requestPaint,
	q = Fe.unstable_now,
	C0 = Fe.unstable_getCurrentPriorityLevel,
	sl = Fe.unstable_ImmediatePriority,
	Ef = Fe.unstable_UserBlockingPriority,
	Xi = Fe.unstable_NormalPriority,
	P0 = Fe.unstable_LowPriority,
	Nf = Fe.unstable_IdlePriority,
	Es = null,
	rt = null;

function E0(e) {
	if (rt && typeof rt.onCommitFiberRoot == "function") try {
		rt.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128)
	} catch { }
}
var Ze = Math.clz32 ? Math.clz32 : M0,
	N0 = Math.log,
	j0 = Math.LN2;

function M0(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (N0(e) / j0 | 0) | 0
}
var pi = 64,
	mi = 4194304;

function hr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function Zi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		s = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~i;
		a !== 0 ? r = hr(a) : (s &= o, s !== 0 && (r = hr(s)))
	} else o = n & ~i, o !== 0 ? r = hr(o) : s !== 0 && (r = hr(s));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ze(t), i = 1 << n, r |= e[n], t &= ~i;
	return r
}

function D0(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function A0(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
		var o = 31 - Ze(s),
			a = 1 << o,
			l = i[o];
		l === -1 ? (!(a & n) || a & r) && (i[o] = D0(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
	}
}

function Xo(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function jf() {
	var e = pi;
	return pi <<= 1, !(pi & 4194240) && (pi = 64), e
}

function Zs(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function Jr(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n
}

function L0(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var i = 31 - Ze(n),
			s = 1 << i;
		t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
	}
}

function ol(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - Ze(n),
			i = 1 << r;
		i & t | e[r] & t && (e[r] |= t), n &= ~i
	}
}
var O = 0;

function Mf(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Df, al, Af, Lf, Ff, Zo = !1,
	gi = [],
	jt = null,
	Mt = null,
	Dt = null,
	Lr = new Map,
	Fr = new Map,
	Ct = [],
	F0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Fu(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			jt = null;
			break;
		case "dragenter":
		case "dragleave":
			Mt = null;
			break;
		case "mouseover":
		case "mouseout":
			Dt = null;
			break;
		case "pointerover":
		case "pointerout":
			Lr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Fr.delete(t.pointerId)
	}
}

function ir(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: s,
		targetContainers: [i]
	}, t !== null && (t = ei(t), t !== null && al(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function R0(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return jt = ir(jt, e, t, n, r, i), !0;
		case "dragenter":
			return Mt = ir(Mt, e, t, n, r, i), !0;
		case "mouseover":
			return Dt = ir(Dt, e, t, n, r, i), !0;
		case "pointerover":
			var s = i.pointerId;
			return Lr.set(s, ir(Lr.get(s) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return s = i.pointerId, Fr.set(s, ir(Fr.get(s) || null, e, t, n, r, i)), !0
	}
	return !1
}

function Rf(e) {
	var t = Zt(e.target);
	if (t !== null) {
		var n = hn(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = kf(n), t !== null) {
					e.blockedOn = t, Ff(e.priority, function () {
						Af(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Fi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			Ko = r, n.target.dispatchEvent(r), Ko = null
		} else return t = ei(n), t !== null && al(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function Ru(e, t, n) {
	Fi(e) && n.delete(t)
}

function V0() {
	Zo = !1, jt !== null && Fi(jt) && (jt = null), Mt !== null && Fi(Mt) && (Mt = null), Dt !== null && Fi(Dt) && (Dt = null), Lr.forEach(Ru), Fr.forEach(Ru)
}

function sr(e, t) {
	e.blockedOn === t && (e.blockedOn = null, Zo || (Zo = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, V0)))
}

function Rr(e) {
	function t(i) {
		return sr(i, e)
	}
	if (0 < gi.length) {
		sr(gi[0], e);
		for (var n = 1; n < gi.length; n++) {
			var r = gi[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (jt !== null && sr(jt, e), Mt !== null && sr(Mt, e), Dt !== null && sr(Dt, e), Lr.forEach(t), Fr.forEach(t), n = 0; n < Ct.length; n++) r = Ct[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Ct.length && (n = Ct[0], n.blockedOn === null);) Rf(n), n.blockedOn === null && Ct.shift()
}
var _n = vt.ReactCurrentBatchConfig,
	Ji = !0;

function _0(e, t, n, r) {
	var i = O,
		s = _n.transition;
	_n.transition = null;
	try {
		O = 1, ll(e, t, n, r)
	} finally {
		O = i, _n.transition = s
	}
}

function I0(e, t, n, r) {
	var i = O,
		s = _n.transition;
	_n.transition = null;
	try {
		O = 4, ll(e, t, n, r)
	} finally {
		O = i, _n.transition = s
	}
}

function ll(e, t, n, r) {
	if (Ji) {
		var i = Jo(e, t, n, r);
		if (i === null) ao(e, t, r, qi, n), Fu(e, r);
		else if (R0(i, e, t, n, r)) r.stopPropagation();
		else if (Fu(e, r), t & 4 && -1 < F0.indexOf(e)) {
			for (; i !== null;) {
				var s = ei(i);
				if (s !== null && Df(s), s = Jo(e, t, n, r), s === null && ao(e, t, r, qi, n), s === i) break;
				i = s
			}
			i !== null && r.stopPropagation()
		} else ao(e, t, r, null, n)
	}
}
var qi = null;

function Jo(e, t, n, r) {
	if (qi = null, e = il(r), e = Zt(e), e !== null)
		if (t = hn(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = kf(t), e !== null) return e;
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null
		} else t !== e && (e = null);
	return qi = e, null
}

function Vf(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (C0()) {
				case sl:
					return 1;
				case Ef:
					return 4;
				case Xi:
				case P0:
					return 16;
				case Nf:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var Et = null,
	ul = null,
	Ri = null;

function _f() {
	if (Ri) return Ri;
	var e, t = ul,
		n = t.length,
		r, i = "value" in Et ? Et.value : Et.textContent,
		s = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
	return Ri = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Vi(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function yi() {
	return !0
}

function Vu() {
	return !1
}

function Ve(e) {
	function t(n, r, i, s, o) {
		this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
		for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
		return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yi : Vu, this.isPropagationStopped = Vu, this
	}
	return Q(t.prototype, {
		preventDefault: function () {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yi)
		},
		stopPropagation: function () {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yi)
		},
		persist: function () { },
		isPersistent: yi
	}), t
}
var Xn = {
	eventPhase: 0,
	bubbles: 0,
	cancelable: 0,
	timeStamp: function (e) {
		return e.timeStamp || Date.now()
	},
	defaultPrevented: 0,
	isTrusted: 0
},
	cl = Ve(Xn),
	qr = Q({}, Xn, {
		view: 0,
		detail: 0
	}),
	z0 = Ve(qr),
	Js, qs, or, Ns = Q({}, qr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: dl,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function (e) {
			return "movementX" in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (Js = e.screenX - or.screenX, qs = e.screenY - or.screenY) : qs = Js = 0, or = e), Js)
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : qs
		}
	}),
	_u = Ve(Ns),
	O0 = Q({}, Ns, {
		dataTransfer: 0
	}),
	B0 = Ve(O0),
	b0 = Q({}, qr, {
		relatedTarget: 0
	}),
	eo = Ve(b0),
	U0 = Q({}, Xn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	$0 = Ve(U0),
	W0 = Q({}, Xn, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	H0 = Ve(W0),
	K0 = Q({}, Xn, {
		data: 0
	}),
	Iu = Ve(K0),
	Y0 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	G0 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	Q0 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function X0(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Q0[e]) ? !!t[e] : !1
}

function dl() {
	return X0
}
var Z0 = Q({}, qr, {
	key: function (e) {
		if (e.key) {
			var t = Y0[e.key] || e.key;
			if (t !== "Unidentified") return t
		}
		return e.type === "keypress" ? (e = Vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G0[e.keyCode] || "Unidentified" : ""
	},
	code: 0,
	location: 0,
	ctrlKey: 0,
	shiftKey: 0,
	altKey: 0,
	metaKey: 0,
	repeat: 0,
	locale: 0,
	getModifierState: dl,
	charCode: function (e) {
		return e.type === "keypress" ? Vi(e) : 0
	},
	keyCode: function (e) {
		return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
	},
	which: function (e) {
		return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
	}
}),
	J0 = Ve(Z0),
	q0 = Q({}, Ns, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	zu = Ve(q0),
	eg = Q({}, qr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: dl
	}),
	tg = Ve(eg),
	ng = Q({}, Xn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	rg = Ve(ng),
	ig = Q({}, Ns, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	sg = Ve(ig),
	og = [9, 13, 27, 32],
	fl = ft && "CompositionEvent" in window,
	vr = null;
ft && "documentMode" in document && (vr = document.documentMode);
var ag = ft && "TextEvent" in window && !vr,
	If = ft && (!fl || vr && 8 < vr && 11 >= vr),
	Ou = " ",
	Bu = !1;

function zf(e, t) {
	switch (e) {
		case "keyup":
			return og.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Of(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var vn = !1;

function lg(e, t) {
	switch (e) {
		case "compositionend":
			return Of(t);
		case "keypress":
			return t.which !== 32 ? null : (Bu = !0, Ou);
		case "textInput":
			return e = t.data, e === Ou && Bu ? null : e;
		default:
			return null
	}
}

function ug(e, t) {
	if (vn) return e === "compositionend" || !fl && zf(e, t) ? (e = _f(), Ri = ul = Et = null, vn = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return If && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var cg = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function bu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!cg[e.type] : t === "textarea"
}

function Bf(e, t, n, r) {
	yf(r), t = es(t, "onChange"), 0 < t.length && (n = new cl("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var xr = null,
	Vr = null;

function dg(e) {
	Zf(e, 0)
}

function js(e) {
	var t = Sn(e);
	if (cf(t)) return e
}

function fg(e, t) {
	if (e === "change") return t
}
var bf = !1;
if (ft) {
	var to;
	if (ft) {
		var no = "oninput" in document;
		if (!no) {
			var Uu = document.createElement("div");
			Uu.setAttribute("oninput", "return;"), no = typeof Uu.oninput == "function"
		}
		to = no
	} else to = !1;
	bf = to && (!document.documentMode || 9 < document.documentMode)
}

function $u() {
	xr && (xr.detachEvent("onpropertychange", Uf), Vr = xr = null)
}

function Uf(e) {
	if (e.propertyName === "value" && js(Vr)) {
		var t = [];
		Bf(t, Vr, e, il(e)), Sf(dg, t)
	}
}

function hg(e, t, n) {
	e === "focusin" ? ($u(), xr = t, Vr = n, xr.attachEvent("onpropertychange", Uf)) : e === "focusout" && $u()
}

function pg(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return js(Vr)
}

function mg(e, t) {
	if (e === "click") return js(t)
}

function gg(e, t) {
	if (e === "input" || e === "change") return js(t)
}

function yg(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qe = typeof Object.is == "function" ? Object.is : yg;

function _r(e, t) {
	if (qe(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Ro.call(t, i) || !qe(e[i], t[i])) return !1
	}
	return !0
}

function Wu(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function Hu(e, t) {
	var n = Wu(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Wu(n)
	}
}

function $f(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Wf() {
	for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = Yi(e.document)
	}
	return t
}

function hl(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function vg(e) {
	var t = Wf(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && $f(n.ownerDocument.documentElement, n)) {
		if (r !== null && hl(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Hu(n, s);
				var o = Hu(n, r);
				i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var xg = ft && "documentMode" in document && 11 >= document.documentMode,
	xn = null,
	qo = null,
	wr = null,
	ea = !1;

function Ku(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ea || xn == null || xn !== Yi(r) || (r = xn, "selectionStart" in r && hl(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), wr && _r(wr, r) || (wr = r, r = es(qo, "onSelect"), 0 < r.length && (t = new cl("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = xn)))
}

function vi(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var wn = {
	animationend: vi("Animation", "AnimationEnd"),
	animationiteration: vi("Animation", "AnimationIteration"),
	animationstart: vi("Animation", "AnimationStart"),
	transitionend: vi("Transition", "TransitionEnd")
},
	ro = {},
	Hf = {};
ft && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);

function Ms(e) {
	if (ro[e]) return ro[e];
	if (!wn[e]) return e;
	var t = wn[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in Hf) return ro[e] = t[n];
	return e
}
var Kf = Ms("animationend"),
	Yf = Ms("animationiteration"),
	Gf = Ms("animationstart"),
	Qf = Ms("transitionend"),
	Xf = new Map,
	Yu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Bt(e, t) {
	Xf.set(e, t), fn(t, [e])
}
for (var io = 0; io < Yu.length; io++) {
	var so = Yu[io],
		wg = so.toLowerCase(),
		Sg = so[0].toUpperCase() + so.slice(1);
	Bt(wg, "on" + Sg)
}
Bt(Kf, "onAnimationEnd");
Bt(Yf, "onAnimationIteration");
Bt(Gf, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Qf, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));

function Gu(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, w0(r, t, void 0, e), e.currentTarget = null
}

function Zf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						l = a.instance,
						u = a.currentTarget;
					if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
					Gu(i, a, u), s = l
				} else
				for (o = 0; o < r.length; o++) {
					if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
					Gu(i, a, u), s = l
				}
		}
	}
	if (Qi) throw e = Qo, Qi = !1, Qo = null, e
}

function b(e, t) {
	var n = t[sa];
	n === void 0 && (n = t[sa] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Jf(t, e, 2, !1), n.add(r))
}

function oo(e, t, n) {
	var r = 0;
	t && (r |= 4), Jf(n, e, r, t)
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);

function Ir(e) {
	if (!e[xi]) {
		e[xi] = !0, sf.forEach(function (n) {
			n !== "selectionchange" && (kg.has(n) || oo(n, !1, e), oo(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[xi] || (t[xi] = !0, oo("selectionchange", !1, t))
	}
}

function Jf(e, t, n, r) {
	switch (Vf(t)) {
		case 1:
			var i = _0;
			break;
		case 4:
			i = I0;
			break;
		default:
			i = ll
	}
	n = i.bind(null, t, n, e), i = void 0, !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: i
	}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
		passive: i
	}) : e.addEventListener(t, n, !1)
}

function ao(e, t, n, r, i) {
	var s = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (; ;) {
		if (r === null) return;
		var o = r.tag;
		if (o === 3 || o === 4) {
			var a = r.stateNode.containerInfo;
			if (a === i || a.nodeType === 8 && a.parentNode === i) break;
			if (o === 4)
				for (o = r.return; o !== null;) {
					var l = o.tag;
					if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
					o = o.return
				}
			for (; a !== null;) {
				if (o = Zt(a), o === null) return;
				if (l = o.tag, l === 5 || l === 6) {
					r = s = o;
					continue e
				}
				a = a.parentNode
			}
		}
		r = r.return
	}
	Sf(function () {
		var u = s,
			c = il(n),
			d = [];
		e: {
			var f = Xf.get(e);
			if (f !== void 0) {
				var y = cl,
					v = e;
				switch (e) {
					case "keypress":
						if (Vi(n) === 0) break e;
					case "keydown":
					case "keyup":
						y = J0;
						break;
					case "focusin":
						v = "focus", y = eo;
						break;
					case "focusout":
						v = "blur", y = eo;
						break;
					case "beforeblur":
					case "afterblur":
						y = eo;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						y = _u;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						y = B0;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						y = tg;
						break;
					case Kf:
					case Yf:
					case Gf:
						y = $0;
						break;
					case Qf:
						y = rg;
						break;
					case "scroll":
						y = z0;
						break;
					case "wheel":
						y = sg;
						break;
					case "copy":
					case "cut":
					case "paste":
						y = H0;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						y = zu
				}
				var x = (t & 4) !== 0,
					k = !x && e === "scroll",
					p = x ? f !== null ? f + "Capture" : null : f;
				x = [];
				for (var h = u, m; h !== null;) {
					m = h;
					var w = m.stateNode;
					if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Ar(h, p), w != null && x.push(zr(h, w, m)))), k) break;
					h = h.return
				}
				0 < x.length && (f = new y(f, v, null, n, c), d.push({
					event: f,
					listeners: x
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== Ko && (v = n.relatedTarget || n.fromElement) && (Zt(v) || v[ht])) break e;
				if ((y || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? Zt(v) : null, v !== null && (k = hn(v), v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
					if (x = _u, w = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = zu, w = "onPointerLeave", p = "onPointerEnter", h = "pointer"), k = y == null ? f : Sn(y), m = v == null ? f : Sn(v), f = new x(w, h + "leave", y, n, c), f.target = k, f.relatedTarget = m, w = null, Zt(c) === u && (x = new x(p, h + "enter", v, n, c), x.target = m, x.relatedTarget = k, w = x), k = w, y && v) t: {
						for (x = y, p = v, h = 0, m = x; m; m = pn(m)) h++;
						for (m = 0, w = p; w; w = pn(w)) m++;
						for (; 0 < h - m;) x = pn(x),
							h--;
						for (; 0 < m - h;) p = pn(p),
							m--;
						for (; h--;) {
							if (x === p || p !== null && x === p.alternate) break t;
							x = pn(x), p = pn(p)
						}
						x = null
					}
					else x = null;
					y !== null && Qu(d, f, y, x, !1), v !== null && k !== null && Qu(d, k, v, x, !0)
				}
			}
			e: {
				if (f = u ? Sn(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var S = fg;
				else if (bu(f))
					if (bf) S = gg;
					else {
						S = pg;
						var C = hg
					}
				else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = mg);
				if (S && (S = S(e, u))) {
					Bf(d, S, n, c);
					break e
				}
				C && C(e, f, u),
					e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && bo(f, "number", f.value)
			}
			switch (C = u ? Sn(u) : window, e) {
				case "focusin":
					(bu(C) || C.contentEditable === "true") && (xn = C, qo = u, wr = null);
					break;
				case "focusout":
					wr = qo = xn = null;
					break;
				case "mousedown":
					ea = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					ea = !1, Ku(d, n, c);
					break;
				case "selectionchange":
					if (xg) break;
				case "keydown":
				case "keyup":
					Ku(d, n, c)
			}
			var E;
			if (fl) e: {
				switch (e) {
					case "compositionstart":
						var T = "onCompositionStart";
						break e;
					case "compositionend":
						T = "onCompositionEnd";
						break e;
					case "compositionupdate":
						T = "onCompositionUpdate";
						break e
				}
				T = void 0
			}
			else vn ? zf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart"); T && (If && n.locale !== "ko" && (vn || T !== "onCompositionStart" ? T === "onCompositionEnd" && vn && (E = _f()) : (Et = c, ul = "value" in Et ? Et.value : Et.textContent, vn = !0)), C = es(u, T), 0 < C.length && (T = new Iu(T, e, null, n, c), d.push({
				event: T,
				listeners: C
			}), E ? T.data = E : (E = Of(n), E !== null && (T.data = E)))),
				(E = ag ? lg(e, n) : ug(e, n)) && (u = es(u, "onBeforeInput"), 0 < u.length && (c = new Iu("onBeforeInput", "beforeinput", null, n, c), d.push({
					event: c,
					listeners: u
				}), c.data = E))
		}
		Zf(d, t)
	})
}

function zr(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function es(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var i = e,
			s = i.stateNode;
		i.tag === 5 && s !== null && (i = s, s = Ar(e, n), s != null && r.unshift(zr(e, s, i)), s = Ar(e, t), s != null && r.push(zr(e, s, i))), e = e.return
	}
	return r
}

function pn(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Qu(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r;) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 && u !== null && (a = u, i ? (l = Ar(n, s), l != null && o.unshift(zr(n, l, a))) : i || (l = Ar(n, s), l != null && o.push(zr(n, l, a)))), n = n.return
	}
	o.length !== 0 && e.push({
		event: t,
		listeners: o
	})
}
var Tg = /\r\n?/g,
	Cg = /\u0000|\uFFFD/g;

function Xu(e) {
	return (typeof e == "string" ? e : "" + e).replace(Tg, `
`).replace(Cg, "")
}

function wi(e, t, n) {
	if (t = Xu(t), Xu(e) !== t && n) throw Error(P(425))
}

function ts() { }
var ta = null,
	na = null;

function ra(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ia = typeof setTimeout == "function" ? setTimeout : void 0,
	Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Zu = typeof Promise == "function" ? Promise : void 0,
	Eg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function (e) {
		return Zu.resolve(null).then(e).catch(Ng)
	} : ia;

function Ng(e) {
	setTimeout(function () {
		throw e
	})
}

function lo(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if (e.removeChild(n), i && i.nodeType === 8)
			if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), Rr(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = i
	} while (n);
	Rr(t)
}

function At(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function Ju(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Zn = Math.random().toString(36).slice(2),
	nt = "__reactFiber$" + Zn,
	Or = "__reactProps$" + Zn,
	ht = "__reactContainer$" + Zn,
	sa = "__reactEvents$" + Zn,
	jg = "__reactListeners$" + Zn,
	Mg = "__reactHandles$" + Zn;

function Zt(e) {
	var t = e[nt];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[ht] || n[nt]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = Ju(e); e !== null;) {
					if (n = e[nt]) return n;
					e = Ju(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function ei(e) {
	return e = e[nt] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Sn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(P(33))
}

function Ds(e) {
	return e[Or] || null
}
var oa = [],
	kn = -1;

function bt(e) {
	return {
		current: e
	}
}

function U(e) {
	0 > kn || (e.current = oa[kn], oa[kn] = null, kn--)
}

function B(e, t) {
	kn++, oa[kn] = e.current, e.current = t
}
var It = {},
	ye = bt(It),
	Ee = bt(!1),
	an = It;

function bn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return It;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		s;
	for (s in n) i[s] = t[s];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Ne(e) {
	return e = e.childContextTypes, e != null
}

function ns() {
	U(Ee), U(ye)
}

function qu(e, t, n) {
	if (ye.current !== It) throw Error(P(168));
	B(ye, t), B(Ee, n)
}

function qf(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t)) throw Error(P(108, h0(e) || "Unknown", i));
	return Q({}, n, r)
}

function rs(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, an = ye.current, B(ye, e), B(Ee, Ee.current), !0
}

function ec(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(P(169));
	n ? (e = qf(e, t, an), r.__reactInternalMemoizedMergedChildContext = e, U(Ee), U(ye), B(ye, e)) : U(Ee), B(Ee, n)
}
var lt = null,
	As = !1,
	uo = !1;

function eh(e) {
	lt === null ? lt = [e] : lt.push(e)
}

function Dg(e) {
	As = !0, eh(e)
}

function Ut() {
	if (!uo && lt !== null) {
		uo = !0;
		var e = 0,
			t = O;
		try {
			var n = lt;
			for (O = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			lt = null, As = !1
		} catch (i) {
			throw lt !== null && (lt = lt.slice(e + 1)), Pf(sl, Ut), i
		} finally {
			O = t, uo = !1
		}
	}
	return null
}
var Tn = [],
	Cn = 0,
	is = null,
	ss = 0,
	Ie = [],
	ze = 0,
	ln = null,
	ut = 1,
	ct = "";

function Gt(e, t) {
	Tn[Cn++] = ss, Tn[Cn++] = is, is = e, ss = t
}

function th(e, t, n) {
	Ie[ze++] = ut, Ie[ze++] = ct, Ie[ze++] = ln, ln = e;
	var r = ut;
	e = ct;
	var i = 32 - Ze(r) - 1;
	r &= ~(1 << i), n += 1;
	var s = 32 - Ze(t) + i;
	if (30 < s) {
		var o = i - i % 5;
		s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ut = 1 << 32 - Ze(t) + i | n << i | r, ct = s + e
	} else ut = 1 << s | n << i | r, ct = e
}

function pl(e) {
	e.return !== null && (Gt(e, 1), th(e, 1, 0))
}

function ml(e) {
	for (; e === is;) is = Tn[--Cn], Tn[Cn] = null, ss = Tn[--Cn], Tn[Cn] = null;
	for (; e === ln;) ln = Ie[--ze], Ie[ze] = null, ct = Ie[--ze], Ie[ze] = null, ut = Ie[--ze], Ie[ze] = null
}
var Le = null,
	Ae = null,
	$ = !1,
	Xe = null;

function nh(e, t) {
	var n = Oe(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function tc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Ae = At(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Ae = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? {
				id: ut,
				overflow: ct
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Ae = null, !0) : !1;
		default:
			return !1
	}
}

function aa(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function la(e) {
	if ($) {
		var t = Ae;
		if (t) {
			var n = t;
			if (!tc(e, t)) {
				if (aa(e)) throw Error(P(418));
				t = At(n.nextSibling);
				var r = Le;
				t && tc(e, t) ? nh(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Le = e)
			}
		} else {
			if (aa(e)) throw Error(P(418));
			e.flags = e.flags & -4097 | 2, $ = !1, Le = e
		}
	}
}

function nc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Le = e
}

function Si(e) {
	if (e !== Le) return !1;
	if (!$) return nc(e), $ = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps)), t && (t = Ae)) {
		if (aa(e)) throw rh(), Error(P(418));
		for (; t;) nh(e, t), t = At(t.nextSibling)
	}
	if (nc(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ae = At(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Ae = null
		}
	} else Ae = Le ? At(e.stateNode.nextSibling) : null;
	return !0
}

function rh() {
	for (var e = Ae; e;) e = At(e.nextSibling)
}

function Un() {
	Ae = Le = null, $ = !1
}

function gl(e) {
	Xe === null ? Xe = [e] : Xe.push(e)
}
var Ag = vt.ReactCurrentBatchConfig;

function ar(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(P(309));
				var r = n.stateNode
			}
			if (!r) throw Error(P(147, e));
			var i = r,
				s = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (o) {
				var a = i.refs;
				o === null ? delete a[s] : a[s] = o
			}, t._stringRef = s, t)
		}
		if (typeof e != "string") throw Error(P(284));
		if (!n._owner) throw Error(P(290, e))
	}
	return e
}

function ki(e, t) {
	throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function rc(e) {
	var t = e._init;
	return t(e._payload)
}

function ih(e) {
	function t(p, h) {
		if (e) {
			var m = p.deletions;
			m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h)
		}
	}

	function n(p, h) {
		if (!e) return null;
		for (; h !== null;) t(p, h), h = h.sibling;
		return null
	}

	function r(p, h) {
		for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
		return p
	}

	function i(p, h) {
		return p = Vt(p, h), p.index = 0, p.sibling = null, p
	}

	function s(p, h, m) {
		return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
	}

	function o(p) {
		return e && p.alternate === null && (p.flags |= 2), p
	}

	function a(p, h, m, w) {
		return h === null || h.tag !== 6 ? (h = yo(m, p.mode, w), h.return = p, h) : (h = i(h, m), h.return = p, h)
	}

	function l(p, h, m, w) {
		var S = m.type;
		return S === yn ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kt && rc(S) === h.type) ? (w = i(h, m.props), w.ref = ar(p, h, m), w.return = p, w) : (w = Ui(m.type, m.key, m.props, null, p.mode, w), w.ref = ar(p, h, m), w.return = p, w)
	}

	function u(p, h, m, w) {
		return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = vo(m, p.mode, w), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h)
	}

	function c(p, h, m, w, S) {
		return h === null || h.tag !== 7 ? (h = rn(m, p.mode, w, S), h.return = p, h) : (h = i(h, m), h.return = p, h)
	}

	function d(p, h, m) {
		if (typeof h == "string" && h !== "" || typeof h == "number") return h = yo("" + h, p.mode, m), h.return = p, h;
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case di:
					return m = Ui(h.type, h.key, h.props, null, p.mode, m), m.ref = ar(p, null, h), m.return = p, m;
				case gn:
					return h = vo(h, p.mode, m), h.return = p, h;
				case kt:
					var w = h._init;
					return d(p, w(h._payload), m)
			}
			if (fr(h) || nr(h)) return h = rn(h, p.mode, m, null), h.return = p, h;
			ki(p, h)
		}
		return null
	}

	function f(p, h, m, w) {
		var S = h !== null ? h.key : null;
		if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : a(p, h, "" + m, w);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case di:
					return m.key === S ? l(p, h, m, w) : null;
				case gn:
					return m.key === S ? u(p, h, m, w) : null;
				case kt:
					return S = m._init, f(p, h, S(m._payload), w)
			}
			if (fr(m) || nr(m)) return S !== null ? null : c(p, h, m, w, null);
			ki(p, m)
		}
		return null
	}

	function y(p, h, m, w, S) {
		if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(m) || null, a(h, p, "" + w, S);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case di:
					return p = p.get(w.key === null ? m : w.key) || null, l(h, p, w, S);
				case gn:
					return p = p.get(w.key === null ? m : w.key) || null, u(h, p, w, S);
				case kt:
					var C = w._init;
					return y(p, h, m, C(w._payload), S)
			}
			if (fr(w) || nr(w)) return p = p.get(m) || null, c(h, p, w, S, null);
			ki(h, w)
		}
		return null
	}

	function v(p, h, m, w) {
		for (var S = null, C = null, E = h, T = h = 0, V = null; E !== null && T < m.length; T++) {
			E.index > T ? (V = E, E = null) : V = E.sibling;
			var D = f(p, E, m[T], w);
			if (D === null) {
				E === null && (E = V);
				break
			}
			e && E && D.alternate === null && t(p, E), h = s(D, h, T), C === null ? S = D : C.sibling = D, C = D, E = V
		}
		if (T === m.length) return n(p, E), $ && Gt(p, T), S;
		if (E === null) {
			for (; T < m.length; T++) E = d(p, m[T], w), E !== null && (h = s(E, h, T), C === null ? S = E : C.sibling = E, C = E);
			return $ && Gt(p, T), S
		}
		for (E = r(p, E); T < m.length; T++) V = y(E, p, T, m[T], w), V !== null && (e && V.alternate !== null && E.delete(V.key === null ? T : V.key), h = s(V, h, T), C === null ? S = V : C.sibling = V, C = V);
		return e && E.forEach(function (ee) {
			return t(p, ee)
		}), $ && Gt(p, T), S
	}

	function x(p, h, m, w) {
		var S = nr(m);
		if (typeof S != "function") throw Error(P(150));
		if (m = S.call(m), m == null) throw Error(P(151));
		for (var C = S = null, E = h, T = h = 0, V = null, D = m.next(); E !== null && !D.done; T++, D = m.next()) {
			E.index > T ? (V = E, E = null) : V = E.sibling;
			var ee = f(p, E, D.value, w);
			if (ee === null) {
				E === null && (E = V);
				break
			}
			e && E && ee.alternate === null && t(p, E), h = s(ee, h, T), C === null ? S = ee : C.sibling = ee, C = ee, E = V
		}
		if (D.done) return n(p, E), $ && Gt(p, T), S;
		if (E === null) {
			for (; !D.done; T++, D = m.next()) D = d(p, D.value, w), D !== null && (h = s(D, h, T), C === null ? S = D : C.sibling = D, C = D);
			return $ && Gt(p, T), S
		}
		for (E = r(p, E); !D.done; T++, D = m.next()) D = y(E, p, T, D.value, w), D !== null && (e && D.alternate !== null && E.delete(D.key === null ? T : D.key), h = s(D, h, T), C === null ? S = D : C.sibling = D, C = D);
		return e && E.forEach(function (xt) {
			return t(p, xt)
		}), $ && Gt(p, T), S
	}

	function k(p, h, m, w) {
		if (typeof m == "object" && m !== null && m.type === yn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case di:
					e: {
						for (var S = m.key, C = h; C !== null;) {
							if (C.key === S) {
								if (S = m.type, S === yn) {
									if (C.tag === 7) {
										n(p, C.sibling), h = i(C, m.props.children), h.return = p, p = h;
										break e
									}
								} else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kt && rc(S) === C.type) {
									n(p, C.sibling), h = i(C, m.props), h.ref = ar(p, C, m), h.return = p, p = h;
									break e
								}
								n(p, C);
								break
							} else t(p, C);
							C = C.sibling
						}
						m.type === yn ? (h = rn(m.props.children, p.mode, w, m.key), h.return = p, p = h) : (w = Ui(m.type, m.key, m.props, null, p.mode, w), w.ref = ar(p, h, m), w.return = p, p = w)
					}
					return o(p);
				case gn:
					e: {
						for (C = m.key; h !== null;) {
							if (h.key === C)
								if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
									n(p, h.sibling), h = i(h, m.children || []), h.return = p, p = h;
									break e
								} else {
									n(p, h);
									break
								}
							else t(p, h);
							h = h.sibling
						}
						h = vo(m, p.mode, w),
							h.return = p,
							p = h
					}
					return o(p);
				case kt:
					return C = m._init, k(p, h, C(m._payload), w)
			}
			if (fr(m)) return v(p, h, m, w);
			if (nr(m)) return x(p, h, m, w);
			ki(p, m)
		}
		return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = yo(m, p.mode, w), h.return = p, p = h), o(p)) : n(p, h)
	}
	return k
}
var $n = ih(!0),
	sh = ih(!1),
	os = bt(null),
	as = null,
	Pn = null,
	yl = null;

function vl() {
	yl = Pn = as = null
}

function xl(e) {
	var t = os.current;
	U(os), e._currentValue = t
}

function ua(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function In(e, t) {
	as = e, yl = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null)
}

function $e(e) {
	var t = e._currentValue;
	if (yl !== e)
		if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Pn === null) {
			if (as === null) throw Error(P(308));
			Pn = e, as.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else Pn = Pn.next = e;
	return t
}
var Jt = null;

function wl(e) {
	Jt === null ? Jt = [e] : Jt.push(e)
}

function oh(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? (n.next = n, wl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, pt(e, r)
}

function pt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var Tt = !1;

function Sl(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function ah(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function dt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Lt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, I & 2) {
		var i = r.pending;
		return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, pt(e, n)
	}
	return i = r.interleaved, i === null ? (t.next = t, wl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, pt(e, n)
}

function _i(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n)
	}
}

function ic(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var i = null,
			s = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				s === null ? i = s = o : s = s.next = o, n = n.next
			} while (n !== null);
			s === null ? i = s = t : s = s.next = t
		} else i = s = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ls(e, t, n, r) {
	var i = e.updateQueue;
	Tt = !1;
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var l = a,
			u = l.next;
		l.next = null, o === null ? s = u : o.next = u, o = l;
		var c = e.alternate;
		c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
	}
	if (s !== null) {
		var d = i.baseState;
		o = 0, c = u = l = null, a = s;
		do {
			var f = a.lane,
				y = a.eventTime;
			if ((r & f) === f) {
				c !== null && (c = c.next = {
					eventTime: y,
					lane: 0,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null
				});
				e: {
					var v = e,
						x = a;
					switch (f = t, y = n, x.tag) {
						case 1:
							if (v = x.payload, typeof v == "function") {
								d = v.call(y, d, f);
								break e
							}
							d = v;
							break e;
						case 3:
							v.flags = v.flags & -65537 | 128;
						case 0:
							if (v = x.payload, f = typeof v == "function" ? v.call(y, d, f) : v, f == null) break e;
							d = Q({}, d, f);
							break e;
						case 2:
							Tt = !0
					}
				}
				a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a))
			} else y = {
				eventTime: y,
				lane: f,
				tag: a.tag,
				payload: a.payload,
				callback: a.callback,
				next: null
			}, c === null ? (u = c = y, l = d) : c = c.next = y, o |= f;
			if (a = a.next, a === null) {
				if (a = i.shared.pending, a === null) break;
				f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
			}
		} while (!0);
		if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
			i = t;
			do o |= i.lane, i = i.next; while (i !== t)
		} else s === null && (i.shared.lanes = 0);
		cn |= o, e.lanes = o, e.memoizedState = d
	}
}

function sc(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
				i.call(r)
			}
		}
}
var ti = {},
	it = bt(ti),
	Br = bt(ti),
	br = bt(ti);

function qt(e) {
	if (e === ti) throw Error(P(174));
	return e
}

function kl(e, t) {
	switch (B(br, t), B(Br, e), B(it, ti), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $o(t, e)
	}
	U(it), B(it, t)
}

function Wn() {
	U(it), U(Br), U(br)
}

function lh(e) {
	qt(br.current);
	var t = qt(it.current),
		n = $o(t, e.type);
	t !== n && (B(Br, e), B(it, n))
}

function Tl(e) {
	Br.current === e && (U(it), U(Br))
}
var K = bt(0);

function us(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var co = [];

function Cl() {
	for (var e = 0; e < co.length; e++) co[e]._workInProgressVersionPrimary = null;
	co.length = 0
}
var Ii = vt.ReactCurrentDispatcher,
	fo = vt.ReactCurrentBatchConfig,
	un = 0,
	G = null,
	ie = null,
	ae = null,
	cs = !1,
	Sr = !1,
	Ur = 0,
	Lg = 0;

function he() {
	throw Error(P(321))
}

function Pl(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!qe(e[n], t[n])) return !1;
	return !0
}

function El(e, t, n, r, i, s) {
	if (un = s, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ii.current = e === null || e.memoizedState === null ? _g : Ig, e = n(r, i), Sr) {
		s = 0;
		do {
			if (Sr = !1, Ur = 0, 25 <= s) throw Error(P(301));
			s += 1, ae = ie = null, t.updateQueue = null, Ii.current = zg, e = n(r, i)
		} while (Sr)
	}
	if (Ii.current = ds, t = ie !== null && ie.next !== null, un = 0, ae = ie = G = null, cs = !1, t) throw Error(P(300));
	return e
}

function Nl() {
	var e = Ur !== 0;
	return Ur = 0, e
}

function tt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return ae === null ? G.memoizedState = ae = e : ae = ae.next = e, ae
}

function We() {
	if (ie === null) {
		var e = G.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = ie.next;
	var t = ae === null ? G.memoizedState : ae.next;
	if (t !== null) ae = t, ie = e;
	else {
		if (e === null) throw Error(P(310));
		ie = e, e = {
			memoizedState: ie.memoizedState,
			baseState: ie.baseState,
			baseQueue: ie.baseQueue,
			queue: ie.queue,
			next: null
		}, ae === null ? G.memoizedState = ae = e : ae = ae.next = e
	}
	return ae
}

function $r(e, t) {
	return typeof t == "function" ? t(e) : t
}

function ho(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = ie,
		i = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (i !== null) {
			var o = i.next;
			i.next = s.next, s.next = o
		}
		r.baseQueue = i = s, n.pending = null
	}
	if (i !== null) {
		s = i.next, r = r.baseState;
		var a = o = null,
			l = null,
			u = s;
		do {
			var c = u.lane;
			if ((un & c) === c) l !== null && (l = l.next = {
				lane: 0,
				action: u.action,
				hasEagerState: u.hasEagerState,
				eagerState: u.eagerState,
				next: null
			}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				l === null ? (a = l = d, o = r) : l = l.next = d, G.lanes |= c, cn |= c
			}
			u = u.next
		} while (u !== null && u !== s);
		l === null ? o = r : l.next = a, qe(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		i = e;
		do s = i.lane, G.lanes |= s, cn |= s, i = i.next; while (i !== e)
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function po(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		s = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = i = i.next;
		do s = e(s, o.action), o = o.next; while (o !== i);
		qe(s, t.memoizedState) || (Ce = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
	}
	return [s, r]
}

function uh() { }

function ch(e, t) {
	var n = G,
		r = We(),
		i = t(),
		s = !qe(r.memoizedState, i);
	if (s && (r.memoizedState = i, Ce = !0), r = r.queue, jl(hh.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ae !== null && ae.memoizedState.tag & 1) {
		if (n.flags |= 2048, Wr(9, fh.bind(null, n, r, i, t), void 0, null), le === null) throw Error(P(349));
		un & 30 || dh(n, t, i)
	}
	return i
}

function dh(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = G.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function fh(e, t, n, r) {
	t.value = n, t.getSnapshot = r, ph(t) && mh(e)
}

function hh(e, t, n) {
	return n(function () {
		ph(t) && mh(e)
	})
}

function ph(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !qe(e, n)
	} catch {
		return !0
	}
}

function mh(e) {
	var t = pt(e, 1);
	t !== null && Je(t, e, 1, -1)
}

function oc(e) {
	var t = tt();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: $r,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = Vg.bind(null, G, e), [t.memoizedState, e]
}

function Wr(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = G.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function gh() {
	return We().memoizedState
}

function zi(e, t, n, r) {
	var i = tt();
	G.flags |= e, i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ls(e, t, n, r) {
	var i = We();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (ie !== null) {
		var o = ie.memoizedState;
		if (s = o.destroy, r !== null && Pl(r, o.deps)) {
			i.memoizedState = Wr(t, n, s, r);
			return
		}
	}
	G.flags |= e, i.memoizedState = Wr(1 | t, n, s, r)
}

function ac(e, t) {
	return zi(8390656, 8, e, t)
}

function jl(e, t) {
	return Ls(2048, 8, e, t)
}

function yh(e, t) {
	return Ls(4, 2, e, t)
}

function vh(e, t) {
	return Ls(4, 4, e, t)
}

function xh(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function () {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function () {
			t.current = null
		}
}

function wh(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Ls(4, 4, xh.bind(null, t, e), n)
}

function Ml() { }

function Sh(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Pl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function kh(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Pl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Th(e, t, n) {
	return un & 21 ? (qe(n, t) || (n = jf(), G.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n)
}

function Fg(e, t) {
	var n = O;
	O = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = fo.transition;
	fo.transition = {};
	try {
		e(!1), t()
	} finally {
		O = n, fo.transition = r
	}
}

function Ch() {
	return We().memoizedState
}

function Rg(e, t, n) {
	var r = Rt(e);
	if (n = {
		lane: r,
		action: n,
		hasEagerState: !1,
		eagerState: null,
		next: null
	}, Ph(e)) Eh(t, n);
	else if (n = oh(e, t, n, r), n !== null) {
		var i = we();
		Je(n, e, r, i), Nh(n, t, r)
	}
}

function Vg(e, t, n) {
	var r = Rt(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (Ph(e)) Eh(t, i);
	else {
		var s = e.alternate;
		if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
			var o = t.lastRenderedState,
				a = s(o, n);
			if (i.hasEagerState = !0, i.eagerState = a, qe(a, o)) {
				var l = t.interleaved;
				l === null ? (i.next = i, wl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
				return
			}
		} catch { } finally { }
		n = oh(e, t, i, r), n !== null && (i = we(), Je(n, e, r, i), Nh(n, t, r))
	}
}

function Ph(e) {
	var t = e.alternate;
	return e === G || t !== null && t === G
}

function Eh(e, t) {
	Sr = cs = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Nh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n)
	}
}
var ds = {
	readContext: $e,
	useCallback: he,
	useContext: he,
	useEffect: he,
	useImperativeHandle: he,
	useInsertionEffect: he,
	useLayoutEffect: he,
	useMemo: he,
	useReducer: he,
	useRef: he,
	useState: he,
	useDebugValue: he,
	useDeferredValue: he,
	useTransition: he,
	useMutableSource: he,
	useSyncExternalStore: he,
	useId: he,
	unstable_isNewReconciler: !1
},
	_g = {
		readContext: $e,
		useCallback: function (e, t) {
			return tt().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: $e,
		useEffect: ac,
		useImperativeHandle: function (e, t, n) {
			return n = n != null ? n.concat([e]) : null, zi(4194308, 4, xh.bind(null, t, e), n)
		},
		useLayoutEffect: function (e, t) {
			return zi(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return zi(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = tt();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function (e, t, n) {
			var r = tt();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = Rg.bind(null, G, e), [r.memoizedState, e]
		},
		useRef: function (e) {
			var t = tt();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: oc,
		useDebugValue: Ml,
		useDeferredValue: function (e) {
			return tt().memoizedState = e
		},
		useTransition: function () {
			var e = oc(!1),
				t = e[0];
			return e = Fg.bind(null, e[1]), tt().memoizedState = e, [t, e]
		},
		useMutableSource: function () { },
		useSyncExternalStore: function (e, t, n) {
			var r = G,
				i = tt();
			if ($) {
				if (n === void 0) throw Error(P(407));
				n = n()
			} else {
				if (n = t(), le === null) throw Error(P(349));
				un & 30 || dh(r, t, n)
			}
			i.memoizedState = n;
			var s = {
				value: n,
				getSnapshot: t
			};
			return i.queue = s, ac(hh.bind(null, r, s, e), [e]), r.flags |= 2048, Wr(9, fh.bind(null, r, s, n, t), void 0, null), n
		},
		useId: function () {
			var e = tt(),
				t = le.identifierPrefix;
			if ($) {
				var n = ct,
					r = ut;
				n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ur++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = Lg++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	Ig = {
		readContext: $e,
		useCallback: Sh,
		useContext: $e,
		useEffect: jl,
		useImperativeHandle: wh,
		useInsertionEffect: yh,
		useLayoutEffect: vh,
		useMemo: kh,
		useReducer: ho,
		useRef: gh,
		useState: function () {
			return ho($r)
		},
		useDebugValue: Ml,
		useDeferredValue: function (e) {
			var t = We();
			return Th(t, ie.memoizedState, e)
		},
		useTransition: function () {
			var e = ho($r)[0],
				t = We().memoizedState;
			return [e, t]
		},
		useMutableSource: uh,
		useSyncExternalStore: ch,
		useId: Ch,
		unstable_isNewReconciler: !1
	},
	zg = {
		readContext: $e,
		useCallback: Sh,
		useContext: $e,
		useEffect: jl,
		useImperativeHandle: wh,
		useInsertionEffect: yh,
		useLayoutEffect: vh,
		useMemo: kh,
		useReducer: po,
		useRef: gh,
		useState: function () {
			return po($r)
		},
		useDebugValue: Ml,
		useDeferredValue: function (e) {
			var t = We();
			return ie === null ? t.memoizedState = e : Th(t, ie.memoizedState, e)
		},
		useTransition: function () {
			var e = po($r)[0],
				t = We().memoizedState;
			return [e, t]
		},
		useMutableSource: uh,
		useSyncExternalStore: ch,
		useId: Ch,
		unstable_isNewReconciler: !1
	};

function Ge(e, t) {
	if (e && e.defaultProps) {
		t = Q({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function ca(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Fs = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? hn(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			i = Rt(e),
			s = dt(r, i);
		s.payload = t, n != null && (s.callback = n), t = Lt(e, s, i), t !== null && (Je(t, e, i, r), _i(t, e, i))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			i = Rt(e),
			s = dt(r, i);
		s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Lt(e, s, i), t !== null && (Je(t, e, i, r), _i(t, e, i))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = we(),
			r = Rt(e),
			i = dt(n, r);
		i.tag = 2, t != null && (i.callback = t), t = Lt(e, i, r), t !== null && (Je(t, e, r, n), _i(t, e, r))
	}
};

function lc(e, t, n, r, i, s, o) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !_r(n, r) || !_r(i, s) : !0
}

function jh(e, t, n) {
	var r = !1,
		i = It,
		s = t.contextType;
	return typeof s == "object" && s !== null ? s = $e(s) : (i = Ne(t) ? an : ye.current, r = t.contextTypes, s = (r = r != null) ? bn(e, i) : It), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Fs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function uc(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Fs.enqueueReplaceState(t, t.state, null)
}

function da(e, t, n, r) {
	var i = e.stateNode;
	i.props = n, i.state = e.memoizedState, i.refs = {}, Sl(e);
	var s = t.contextType;
	typeof s == "object" && s !== null ? i.context = $e(s) : (s = Ne(t) ? an : ye.current, i.context = bn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ca(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Fs.enqueueReplaceState(i, i.state, null), ls(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Hn(e, t) {
	try {
		var n = "",
			r = t;
		do n += f0(r), r = r.return; while (r);
		var i = n
	} catch (s) {
		i = `
Error generating stack: ` + s.message + `
` + s.stack
	}
	return {
		value: e,
		source: t,
		stack: i,
		digest: null
	}
}

function mo(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function fa(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var Og = typeof WeakMap == "function" ? WeakMap : Map;

function Mh(e, t, n) {
	n = dt(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function () {
		hs || (hs = !0, ka = r), fa(e, t)
	}, n
}

function Dh(e, t, n) {
	n = dt(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		n.payload = function () {
			return r(i)
		}, n.callback = function () {
			fa(e, t)
		}
	}
	var s = e.stateNode;
	return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
		fa(e, t), typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
		var o = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: o !== null ? o : ""
		})
	}), n
}

function cc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Og;
		var i = new Set;
		r.set(t, i)
	} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
	i.has(n) || (i.add(n), e = qg.bind(null, e, t, n), t.then(e, e))
}

function dc(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function fc(e, t, n, r, i) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e)
}
var Bg = vt.ReactCurrentOwner,
	Ce = !1;

function ve(e, t, n, r) {
	t.child = e === null ? sh(t, null, n, r) : $n(t, e.child, n, r)
}

function hc(e, t, n, r, i) {
	n = n.render;
	var s = t.ref;
	return In(t, i), r = El(e, t, n, r, s, i), n = Nl(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : ($ && n && pl(t), t.flags |= 1, ve(e, t, r, i), t.child)
}

function pc(e, t, n, r, i) {
	if (e === null) {
		var s = n.type;
		return typeof s == "function" && !Il(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Ah(e, t, s, r, i)) : (e = Ui(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (s = e.child, !(e.lanes & i)) {
		var o = s.memoizedProps;
		if (n = n.compare, n = n !== null ? n : _r, n(o, r) && e.ref === t.ref) return mt(e, t, i)
	}
	return t.flags |= 1, e = Vt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ah(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (_r(s, r) && e.ref === t.ref)
			if (Ce = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
			else return t.lanes = e.lanes, mt(e, t, i)
	}
	return ha(e, t, n, r, i)
}

function Lh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, B(Nn, De), De |= n;
		else {
			if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, B(Nn, De), De |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = s !== null ? s.baseLanes : n, B(Nn, De), De |= r
		}
	else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, B(Nn, De), De |= r;
	return ve(e, t, i, n), t.child
}

function Fh(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ha(e, t, n, r, i) {
	var s = Ne(n) ? an : ye.current;
	return s = bn(t, s), In(t, i), n = El(e, t, n, r, s, i), r = Nl(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : ($ && r && pl(t), t.flags |= 1, ve(e, t, n, i), t.child)
}

function mc(e, t, n, r, i) {
	if (Ne(n)) {
		var s = !0;
		rs(t)
	} else s = !1;
	if (In(t, i), t.stateNode === null) Oi(e, t), jh(t, n, r), da(t, n, r, i), r = !0;
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var l = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null ? u = $e(u) : (u = Ne(n) ? an : ye.current, u = bn(t, u));
		var c = n.getDerivedStateFromProps,
			d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
		d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && uc(t, o, r, u), Tt = !1;
		var f = t.memoizedState;
		o.state = f, ls(t, r, o, i), l = t.memoizedState, a !== r || f !== l || Ee.current || Tt ? (typeof c == "function" && (ca(t, n, c, r), l = t.memoizedState), (a = Tt || lc(t, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		o = t.stateNode, ah(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ge(t.type, a), o.props = u, d = t.pendingProps, f = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = $e(l) : (l = Ne(n) ? an : ye.current, l = bn(t, l));
		var y = n.getDerivedStateFromProps;
		(c = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && uc(t, o, r, l), Tt = !1, f = t.memoizedState, o.state = f, ls(t, r, o, i);
		var v = t.memoizedState;
		a !== d || f !== v || Ee.current || Tt ? (typeof y == "function" && (ca(t, n, y, r), v = t.memoizedState), (u = Tt || lc(t, n, u, r, f, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return pa(e, t, n, r, s, i)
}

function pa(e, t, n, r, i, s) {
	Fh(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && ec(t, n, !1), mt(e, t, s);
	r = t.stateNode, Bg.current = t;
	var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && o ? (t.child = $n(t, e.child, null, s), t.child = $n(t, null, a, s)) : ve(e, t, a, s), t.memoizedState = r.state, i && ec(t, n, !0), t.child
}

function Rh(e) {
	var t = e.stateNode;
	t.pendingContext ? qu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qu(e, t.context, !1), kl(e, t.containerInfo)
}

function gc(e, t, n, r, i) {
	return Un(), gl(i), t.flags |= 256, ve(e, t, n, r), t.child
}
var ma = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function ga(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function Vh(e, t, n) {
	var r = t.pendingProps,
		i = K.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		a;
	if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), B(K, i & 1), e === null) return la(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
		mode: "hidden",
		children: o
	}, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = _s(o, r, 0, null), e = rn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ga(n), t.memoizedState = ma, e) : Dl(t, o));
	if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return bg(e, t, o, r, a, i, n);
	if (s) {
		s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
		var l = {
			mode: "hidden",
			children: r.children
		};
		return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Vt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Vt(a, s) : (s = rn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? ga(n) : {
			baseLanes: o.baseLanes | n,
			cachePool: null,
			transitions: o.transitions
		}, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = ma, r
	}
	return s = e.child, e = s.sibling, r = Vt(s, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Dl(e, t) {
	return t = _s({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Ti(e, t, n, r) {
	return r !== null && gl(r), $n(t, e.child, null, n), e = Dl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function bg(e, t, n, r, i, s, o) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = mo(Error(P(422))), Ti(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = _s({
		mode: "visible",
		children: r.children
	}, i, 0, null), s = rn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && $n(t, e.child, null, o), t.child.memoizedState = ga(o), t.memoizedState = ma, s);
	if (!(t.mode & 1)) return Ti(e, t, o, null);
	if (i.data === "$!") {
		if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
		return r = a, s = Error(P(419)), r = mo(s, r, void 0), Ti(e, t, o, r)
	}
	if (a = (o & e.childLanes) !== 0, Ce || a) {
		if (r = le, r !== null) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0
			}
			i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, pt(e, i), Je(r, e, i, -1))
		}
		return _l(), r = mo(Error(P(421))), Ti(e, t, o, r)
	}
	return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ey.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ae = At(i.nextSibling), Le = t, $ = !0, Xe = null, e !== null && (Ie[ze++] = ut, Ie[ze++] = ct, Ie[ze++] = ln, ut = e.id, ct = e.overflow, ln = t), t = Dl(t, r.children), t.flags |= 4096, t)
}

function yc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ua(e.return, t, n)
}

function go(e, t, n, r, i) {
	var s = e.memoizedState;
	s === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: i
	} : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function _h(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if (ve(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
			else if (e.tag === 19) yc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (B(K, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (i) {
		case "forwards":
			for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && us(e) === null && (i = n), n = n.sibling;
			n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), go(t, !1, i, n, s);
			break;
		case "backwards":
			for (n = null, i = t.child, t.child = null; i !== null;) {
				if (e = i.alternate, e !== null && us(e) === null) {
					t.child = i;
					break
				}
				e = i.sibling, i.sibling = n, n = i, i = e
			}
			go(t, !0, n, null, s);
			break;
		case "together":
			go(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function Oi(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function mt(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(P(153));
	if (t.child !== null) {
		for (e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Vt(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function Ug(e, t, n) {
	switch (t.tag) {
		case 3:
			Rh(t), Un();
			break;
		case 5:
			lh(t);
			break;
		case 1:
			Ne(t.type) && rs(t);
			break;
		case 4:
			kl(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			B(os, r._currentValue), r._currentValue = i;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (B(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vh(e, t, n) : (B(K, K.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
			B(K, K.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return _h(e, t, n);
				t.flags |= 128
			}
			if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), B(K, K.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, Lh(e, t, n)
	}
	return mt(e, t, n)
}
var Ih, ya, zh, Oh;
Ih = function (e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
ya = function () { };
zh = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		e = t.stateNode, qt(it.current);
		var s = null;
		switch (n) {
			case "input":
				i = Oo(e, i), r = Oo(e, r), s = [];
				break;
			case "select":
				i = Q({}, i, {
					value: void 0
				}), r = Q({}, r, {
					value: void 0
				}), s = [];
				break;
			case "textarea":
				i = Uo(e, i), r = Uo(e, r), s = [];
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ts)
		}
		Wo(n, r);
		var o;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
				if (u === "style")
					if (a) {
						for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
						for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
					} else n || (s || (s = []), s.push(u, n)), n = l;
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mr.hasOwnProperty(u) ? (l != null && u === "onScroll" && b("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
		}
		n && (s = s || []).push("style", n);
		var u = s;
		(t.updateQueue = u) && (t.flags |= 4)
	}
};
Oh = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function lr(e, t) {
	if (!$) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function pe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
	else
		for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function $g(e, t, n) {
	var r = t.pendingProps;
	switch (ml(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return pe(t), null;
		case 1:
			return Ne(t.type) && ns(), pe(t), null;
		case 3:
			return r = t.stateNode, Wn(), U(Ee), U(ye), Cl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (Pa(Xe), Xe = null))), ya(e, t), pe(t), null;
		case 5:
			Tl(t);
			var i = qt(br.current);
			if (n = t.type, e !== null && t.stateNode != null) zh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(P(166));
					return pe(t), null
				}
				if (e = qt(it.current), Si(t)) {
					r = t.stateNode, n = t.type;
					var s = t.memoizedProps;
					switch (r[nt] = t, r[Or] = s, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							b("cancel", r), b("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							b("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < pr.length; i++) b(pr[i], r);
							break;
						case "source":
							b("error", r);
							break;
						case "img":
						case "image":
						case "link":
							b("error", r), b("load", r);
							break;
						case "details":
							b("toggle", r);
							break;
						case "input":
							Eu(r, s), b("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!s.multiple
							}, b("invalid", r);
							break;
						case "textarea":
							ju(r, s), b("invalid", r)
					}
					Wo(n, s), i = null;
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var a = s[o];
							o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && wi(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && wi(r.textContent, a, e), i = ["children", "" + a]) : Mr.hasOwnProperty(o) && a != null && o === "onScroll" && b("scroll", r)
						} switch (n) {
							case "input":
								fi(r), Nu(r, s, !0);
								break;
							case "textarea":
								fi(r), Mu(r);
								break;
							case "select":
							case "option":
								break;
							default:
								typeof s.onClick == "function" && (r.onclick = ts)
						}
					r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
						is: r.is
					}) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[nt] = t, e[Or] = r, Ih(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (o = Ho(n, r), n) {
							case "dialog":
								b("cancel", e), b("close", e), i = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								b("load", e), i = r;
								break;
							case "video":
							case "audio":
								for (i = 0; i < pr.length; i++) b(pr[i], e);
								i = r;
								break;
							case "source":
								b("error", e), i = r;
								break;
							case "img":
							case "image":
							case "link":
								b("error", e), b("load", e), i = r;
								break;
							case "details":
								b("toggle", e), i = r;
								break;
							case "input":
								Eu(e, r), i = Oo(e, r), b("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, i = Q({}, r, {
									value: void 0
								}), b("invalid", e);
								break;
							case "textarea":
								ju(e, r), i = Uo(e, r), b("invalid", e);
								break;
							default:
								i = r
						}
						Wo(n, i),
							a = i;
						for (s in a)
							if (a.hasOwnProperty(s)) {
								var l = a[s];
								s === "style" ? gf(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && pf(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Dr(e, l) : typeof l == "number" && Dr(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Mr.hasOwnProperty(s) ? l != null && s === "onScroll" && b("scroll", e) : l != null && el(e, s, l, o))
							} switch (n) {
								case "input":
									fi(e), Nu(e, r, !1);
									break;
								case "textarea":
									fi(e), Mu(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + _t(r.value));
									break;
								case "select":
									e.multiple = !!r.multiple, s = r.value, s != null ? Fn(e, !!r.multiple, s, !1) : r.defaultValue != null && Fn(e, !!r.multiple, r.defaultValue, !0);
									break;
								default:
									typeof i.onClick == "function" && (e.onclick = ts)
							}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return pe(t), null;
		case 6:
			if (e && t.stateNode != null) Oh(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
				if (n = qt(br.current), qt(it.current), Si(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (s = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
						case 3:
							wi(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && wi(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					s && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r
			}
			return pe(t), null;
		case 13:
			if (U(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128)) rh(), Un(), t.flags |= 98560, s = !1;
				else if (s = Si(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!s) throw Error(P(318));
						if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(P(317));
						s[nt] = t
					} else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					pe(t), s = !1
				} else Xe !== null && (Pa(Xe), Xe = null), s = !0;
				if (!s) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? se === 0 && (se = 3) : _l())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
		case 4:
			return Wn(), ya(e, t), e === null && Ir(t.stateNode.containerInfo), pe(t), null;
		case 10:
			return xl(t.type._context), pe(t), null;
		case 17:
			return Ne(t.type) && ns(), pe(t), null;
		case 19:
			if (U(K), s = t.memoizedState, s === null) return pe(t), null;
			if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
				if (r) lr(s, !1);
				else {
					if (se !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (o = us(e), o !== null) {
								for (t.flags |= 128, lr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return B(K, K.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					s.tail !== null && q() > Kn && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = us(o), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !$) return pe(t), null
					} else 2 * q() - s.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304);
				s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
			}
			return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = q(), t.sibling = null, n = K.current, B(K, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
		case 22:
		case 23:
			return Vl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(P(156, t.tag))
}

function Wg(e, t) {
	switch (ml(t), t.tag) {
		case 1:
			return Ne(t.type) && ns(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return Wn(), U(Ee), U(ye), Cl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Tl(t), null;
		case 13:
			if (U(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(P(340));
				Un()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return U(K), null;
		case 4:
			return Wn(), null;
		case 10:
			return xl(t.type._context), null;
		case 22:
		case 23:
			return Vl(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Ci = !1,
	me = !1,
	Hg = typeof WeakSet == "function" ? WeakSet : Set,
	M = null;

function En(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			Z(e, t, r)
		} else n.current = null
}

function va(e, t, n) {
	try {
		n()
	} catch (r) {
		Z(e, t, r)
	}
}
var vc = !1;

function Kg(e, t) {
	if (ta = Ji, e = Wf(), hl(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var i = r.anchorOffset,
					s = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, s.nodeType
				} catch {
					n = null;
					break e
				}
				var o = 0,
					a = -1,
					l = -1,
					u = 0,
					c = 0,
					d = e,
					f = null;
				t: for (; ;) {
					for (var y; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i), d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (y = d.firstChild) !== null;) f = d, d = y;
					for (; ;) {
						if (d === e) break t;
						if (f === n && ++u === i && (a = o), f === s && ++c === r && (l = o), (y = d.nextSibling) !== null) break;
						d = f, f = d.parentNode
					}
					d = y
				}
				n = a === -1 || l === -1 ? null : {
					start: a,
					end: l
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (na = {
		focusedElem: e,
		selectionRange: n
	}, Ji = !1, M = t; M !== null;)
		if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
		else
			for (; M !== null;) {
				t = M;
				try {
					var v = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (v !== null) {
								var x = v.memoizedProps,
									k = v.memoizedState,
									p = t.stateNode,
									h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ge(t.type, x), k);
								p.__reactInternalSnapshotBeforeUpdate = h
							}
							break;
						case 3:
							var m = t.stateNode.containerInfo;
							m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(P(163))
					}
				} catch (w) {
					Z(t, t.return, w)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, M = e;
					break
				}
				M = t.return
			}
	return v = vc, vc = !1, v
}

function kr(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var i = r = r.next;
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy;
				i.destroy = void 0, s !== void 0 && va(t, n, s)
			}
			i = i.next
		} while (i !== r)
	}
}

function Rs(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function xa(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function Bh(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, Bh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[Or], delete t[sa], delete t[jg], delete t[Mg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function bh(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function xc(e) {
	e: for (; ;) {
		for (; e.sibling === null;) {
			if (e.return === null || bh(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function wa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ts));
	else if (r !== 4 && (e = e.child, e !== null))
		for (wa(e, t, n), e = e.sibling; e !== null;) wa(e, t, n), e = e.sibling
}

function Sa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (Sa(e, t, n), e = e.sibling; e !== null;) Sa(e, t, n), e = e.sibling
}
var ue = null,
	Qe = !1;

function wt(e, t, n) {
	for (n = n.child; n !== null;) Uh(e, t, n), n = n.sibling
}

function Uh(e, t, n) {
	if (rt && typeof rt.onCommitFiberUnmount == "function") try {
		rt.onCommitFiberUnmount(Es, n)
	} catch { }
	switch (n.tag) {
		case 5:
			me || En(n, t);
		case 6:
			var r = ue,
				i = Qe;
			ue = null, wt(e, t, n), ue = r, Qe = i, ue !== null && (Qe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
			break;
		case 18:
			ue !== null && (Qe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? lo(e.parentNode, n) : e.nodeType === 1 && lo(e, n), Rr(e)) : lo(ue, n.stateNode));
			break;
		case 4:
			r = ue, i = Qe, ue = n.stateNode.containerInfo, Qe = !0, wt(e, t, n), ue = r, Qe = i;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					s = s.tag, o !== void 0 && (s & 2 || s & 4) && va(n, t, o), i = i.next
				} while (i !== r)
			}
			wt(e, t, n);
			break;
		case 1:
			if (!me && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (a) {
				Z(n, t, a)
			}
			wt(e, t, n);
			break;
		case 21:
			wt(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, wt(e, t, n), me = r) : wt(e, t, n);
			break;
		default:
			wt(e, t, n)
	}
}

function wc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Hg), t.forEach(function (r) {
			var i = ty.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(i, i))
		})
	}
}

function He(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var s = e,
					o = t,
					a = o;
				e: for (; a !== null;) {
					switch (a.tag) {
						case 5:
							ue = a.stateNode, Qe = !1;
							break e;
						case 3:
							ue = a.stateNode.containerInfo, Qe = !0;
							break e;
						case 4:
							ue = a.stateNode.containerInfo, Qe = !0;
							break e
					}
					a = a.return
				}
				if (ue === null) throw Error(P(160));
				Uh(s, o, i), ue = null, Qe = !1;
				var l = i.alternate;
				l !== null && (l.return = null), i.return = null
			} catch (u) {
				Z(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) $h(t, e), t = t.sibling
}

function $h(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (He(t, e), et(e), r & 4) {
				try {
					kr(3, e, e.return), Rs(3, e)
				} catch (x) {
					Z(e, e.return, x)
				}
				try {
					kr(5, e, e.return)
				} catch (x) {
					Z(e, e.return, x)
				}
			}
			break;
		case 1:
			He(t, e), et(e), r & 512 && n !== null && En(n, n.return);
			break;
		case 5:
			if (He(t, e), et(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
				var i = e.stateNode;
				try {
					Dr(i, "")
				} catch (x) {
					Z(e, e.return, x)
				}
			}
			if (r & 4 && (i = e.stateNode, i != null)) {
				var s = e.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					a = e.type,
					l = e.updateQueue;
				if (e.updateQueue = null, l !== null) try {
					a === "input" && s.type === "radio" && s.name != null && df(i, s), Ho(a, o);
					var u = Ho(a, s);
					for (o = 0; o < l.length; o += 2) {
						var c = l[o],
							d = l[o + 1];
						c === "style" ? gf(i, d) : c === "dangerouslySetInnerHTML" ? pf(i, d) : c === "children" ? Dr(i, d) : el(i, c, d, u)
					}
					switch (a) {
						case "input":
							Bo(i, s);
							break;
						case "textarea":
							ff(i, s);
							break;
						case "select":
							var f = i._wrapperState.wasMultiple;
							i._wrapperState.wasMultiple = !!s.multiple;
							var y = s.value;
							y != null ? Fn(i, !!s.multiple, y, !1) : f !== !!s.multiple && (s.defaultValue != null ? Fn(i, !!s.multiple, s.defaultValue, !0) : Fn(i, !!s.multiple, s.multiple ? [] : "", !1))
					}
					i[Or] = s
				} catch (x) {
					Z(e, e.return, x)
				}
			}
			break;
		case 6:
			if (He(t, e), et(e), r & 4) {
				if (e.stateNode === null) throw Error(P(162));
				i = e.stateNode, s = e.memoizedProps;
				try {
					i.nodeValue = s
				} catch (x) {
					Z(e, e.return, x)
				}
			}
			break;
		case 3:
			if (He(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				Rr(t.containerInfo)
			} catch (x) {
				Z(e, e.return, x)
			}
			break;
		case 4:
			He(t, e), et(e);
			break;
		case 13:
			He(t, e), et(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Fl = q())), r & 4 && wc(e);
			break;
		case 22:
			if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (u = me) || c, He(t, e), me = u) : He(t, e), et(e), r & 8192) {
				if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
					for (M = e, c = e.child; c !== null;) {
						for (d = M = c; M !== null;) {
							switch (f = M, y = f.child, f.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									kr(4, f, f.return);
									break;
								case 1:
									En(f, f.return);
									var v = f.stateNode;
									if (typeof v.componentWillUnmount == "function") {
										r = f, n = f.return;
										try {
											t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
										} catch (x) {
											Z(r, n, x)
										}
									}
									break;
								case 5:
									En(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										kc(d);
										continue
									}
							}
							y !== null ? (y.return = f, M = y) : kc(d)
						}
						c = c.sibling
					}
				e: for (c = null, d = e; ;) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								i = d.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = mf("display", o))
							} catch (x) {
								Z(e, e.return, x)
							}
						}
					} else if (d.tag === 6) {
						if (c === null) try {
							d.stateNode.nodeValue = u ? "" : d.memoizedProps
						} catch (x) {
							Z(e, e.return, x)
						}
					} else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
						d.child.return = d, d = d.child;
						continue
					}
					if (d === e) break e;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), d = d.return
					}
					c === d && (c = null), d.sibling.return = d.return, d = d.sibling
				}
			}
			break;
		case 19:
			He(t, e), et(e), r & 4 && wc(e);
			break;
		case 21:
			break;
		default:
			He(t, e), et(e)
	}
}

function et(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (bh(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(P(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Dr(i, ""), r.flags &= -33);
					var s = xc(e);
					Sa(e, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = xc(e);
					wa(e, a, o);
					break;
				default:
					throw Error(P(161))
			}
		}
		catch (l) {
			Z(e, e.return, l)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function Yg(e, t, n) {
	M = e, Wh(e)
}

function Wh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; M !== null;) {
		var i = M,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Ci;
			if (!o) {
				var a = i.alternate,
					l = a !== null && a.memoizedState !== null || me;
				a = Ci;
				var u = me;
				if (Ci = o, (me = l) && !u)
					for (M = i; M !== null;) o = M, l = o.child, o.tag === 22 && o.memoizedState !== null ? Tc(i) : l !== null ? (l.return = o, M = l) : Tc(i);
				for (; s !== null;) M = s, Wh(s), s = s.sibling;
				M = i, Ci = a, me = u
			}
			Sc(e)
		} else i.subtreeFlags & 8772 && s !== null ? (s.return = i, M = s) : Sc(e)
	}
}

function Sc(e) {
	for (; M !== null;) {
		var t = M;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						me || Rs(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !me)
							if (n === null) r.componentDidMount();
							else {
								var i = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
								r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var s = t.updateQueue;
						s !== null && sc(t, s, r);
						break;
					case 3:
						var o = t.updateQueue;
						if (o !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							sc(t, o, n)
						}
						break;
					case 5:
						var a = t.stateNode;
						if (n === null && t.flags & 4) {
							n = a;
							var l = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									l.autoFocus && n.focus();
									break;
								case "img":
									l.src && (n.src = l.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var u = t.alternate;
							if (u !== null) {
								var c = u.memoizedState;
								if (c !== null) {
									var d = c.dehydrated;
									d !== null && Rr(d)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(P(163))
				}
				me || t.flags & 512 && xa(t)
			} catch (f) {
				Z(t, t.return, f)
			}
		}
		if (t === e) {
			M = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, M = n;
			break
		}
		M = t.return
	}
}

function kc(e) {
	for (; M !== null;) {
		var t = M;
		if (t === e) {
			M = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, M = n;
			break
		}
		M = t.return
	}
}

function Tc(e) {
	for (; M !== null;) {
		var t = M;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Rs(4, t)
					} catch (l) {
						Z(t, n, l)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount()
						} catch (l) {
							Z(t, i, l)
						}
					}
					var s = t.return;
					try {
						xa(t)
					} catch (l) {
						Z(t, s, l)
					}
					break;
				case 5:
					var o = t.return;
					try {
						xa(t)
					} catch (l) {
						Z(t, o, l)
					}
			}
		} catch (l) {
			Z(t, t.return, l)
		}
		if (t === e) {
			M = null;
			break
		}
		var a = t.sibling;
		if (a !== null) {
			a.return = t.return, M = a;
			break
		}
		M = t.return
	}
}
var Gg = Math.ceil,
	fs = vt.ReactCurrentDispatcher,
	Al = vt.ReactCurrentOwner,
	be = vt.ReactCurrentBatchConfig,
	I = 0,
	le = null,
	ne = null,
	de = 0,
	De = 0,
	Nn = bt(0),
	se = 0,
	Hr = null,
	cn = 0,
	Vs = 0,
	Ll = 0,
	Tr = null,
	Te = null,
	Fl = 0,
	Kn = 1 / 0,
	at = null,
	hs = !1,
	ka = null,
	Ft = null,
	Pi = !1,
	Nt = null,
	ps = 0,
	Cr = 0,
	Ta = null,
	Bi = -1,
	bi = 0;

function we() {
	return I & 6 ? q() : Bi !== -1 ? Bi : Bi = q()
}

function Rt(e) {
	return e.mode & 1 ? I & 2 && de !== 0 ? de & -de : Ag.transition !== null ? (bi === 0 && (bi = jf()), bi) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vf(e.type)), e) : 1
}

function Je(e, t, n, r) {
	if (50 < Cr) throw Cr = 0, Ta = null, Error(P(185));
	Jr(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (Vs |= n), se === 4 && Pt(e, de)), je(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Kn = q() + 500, As && Ut()))
}

function je(e, t) {
	var n = e.callbackNode;
	A0(e, t);
	var r = Zi(e, e === le ? de : 0);
	if (r === 0) n !== null && Lu(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && Lu(n), t === 1) e.tag === 0 ? Dg(Cc.bind(null, e)) : eh(Cc.bind(null, e)), Eg(function () {
			!(I & 6) && Ut()
		}), n = null;
		else {
			switch (Mf(r)) {
				case 1:
					n = sl;
					break;
				case 4:
					n = Ef;
					break;
				case 16:
					n = Xi;
					break;
				case 536870912:
					n = Nf;
					break;
				default:
					n = Xi
			}
			n = Jh(n, Hh.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Hh(e, t) {
	if (Bi = -1, bi = 0, I & 6) throw Error(P(327));
	var n = e.callbackNode;
	if (zn() && e.callbackNode !== n) return null;
	var r = Zi(e, e === le ? de : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
	else {
		t = r;
		var i = I;
		I |= 2;
		var s = Yh();
		(le !== e || de !== t) && (at = null, Kn = q() + 500, nn(e, t));
		do try {
			Zg();
			break
		} catch (a) {
			Kh(e, a)
		}
		while (!0);
		vl(), fs.current = s, I = i, ne !== null ? t = 0 : (le = null, de = 0, t = se)
	}
	if (t !== 0) {
		if (t === 2 && (i = Xo(e), i !== 0 && (r = i, t = Ca(e, i))), t === 1) throw n = Hr, nn(e, 0), Pt(e, r), je(e, q()), n;
		if (t === 6) Pt(e, r);
		else {
			if (i = e.current.alternate, !(r & 30) && !Qg(i) && (t = ms(e, r), t === 2 && (s = Xo(e), s !== 0 && (r = s, t = Ca(e, s))), t === 1)) throw n = Hr, nn(e, 0), Pt(e, r), je(e, q()), n;
			switch (e.finishedWork = i, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(P(345));
				case 2:
					Qt(e, Te, at);
					break;
				case 3:
					if (Pt(e, r), (r & 130023424) === r && (t = Fl + 500 - q(), 10 < t)) {
						if (Zi(e, 0) !== 0) break;
						if (i = e.suspendedLanes, (i & r) !== r) {
							we(), e.pingedLanes |= e.suspendedLanes & i;
							break
						}
						e.timeoutHandle = ia(Qt.bind(null, e, Te, at), t);
						break
					}
					Qt(e, Te, at);
					break;
				case 4:
					if (Pt(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, i = -1; 0 < r;) {
						var o = 31 - Ze(r);
						s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
					}
					if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gg(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = ia(Qt.bind(null, e, Te, at), r);
						break
					}
					Qt(e, Te, at);
					break;
				case 5:
					Qt(e, Te, at);
					break;
				default:
					throw Error(P(329))
			}
		}
	}
	return je(e, q()), e.callbackNode === n ? Hh.bind(null, e) : null
}

function Ca(e, t) {
	var n = Tr;
	return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = ms(e, t), e !== 2 && (t = Te, Te = n, t !== null && Pa(t)), e
}

function Pa(e) {
	Te === null ? Te = e : Te.push.apply(Te, e)
}

function Qg(e) {
	for (var t = e; ;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!qe(s(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function Pt(e, t) {
	for (t &= ~Ll, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Ze(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function Cc(e) {
	if (I & 6) throw Error(P(327));
	zn();
	var t = Zi(e, 0);
	if (!(t & 1)) return je(e, q()), null;
	var n = ms(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Xo(e);
		r !== 0 && (t = r, n = Ca(e, r))
	}
	if (n === 1) throw n = Hr, nn(e, 0), Pt(e, t), je(e, q()), n;
	if (n === 6) throw Error(P(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qt(e, Te, at), je(e, q()), null
}

function Rl(e, t) {
	var n = I;
	I |= 1;
	try {
		return e(t)
	} finally {
		I = n, I === 0 && (Kn = q() + 500, As && Ut())
	}
}

function dn(e) {
	Nt !== null && Nt.tag === 0 && !(I & 6) && zn();
	var t = I;
	I |= 1;
	var n = be.transition,
		r = O;
	try {
		if (be.transition = null, O = 1, e) return e()
	} finally {
		O = r, be.transition = n, I = t, !(I & 6) && Ut()
	}
}

function Vl() {
	De = Nn.current, U(Nn)
}

function nn(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, Pg(n)), ne !== null)
		for (n = ne.return; n !== null;) {
			var r = n;
			switch (ml(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && ns();
					break;
				case 3:
					Wn(), U(Ee), U(ye), Cl();
					break;
				case 5:
					Tl(r);
					break;
				case 4:
					Wn();
					break;
				case 13:
					U(K);
					break;
				case 19:
					U(K);
					break;
				case 10:
					xl(r.type._context);
					break;
				case 22:
				case 23:
					Vl()
			}
			n = n.return
		}
	if (le = e, ne = e = Vt(e.current, null), de = De = t, se = 0, Hr = null, Ll = Vs = cn = 0, Te = Tr = null, Jt !== null) {
		for (t = 0; t < Jt.length; t++)
			if (n = Jt[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					s.next = i, r.next = o
				}
				n.pending = r
			} Jt = null
	}
	return e
}

function Kh(e, t) {
	do {
		var n = ne;
		try {
			if (vl(), Ii.current = ds, cs) {
				for (var r = G.memoizedState; r !== null;) {
					var i = r.queue;
					i !== null && (i.pending = null), r = r.next
				}
				cs = !1
			}
			if (un = 0, ae = ie = G = null, Sr = !1, Ur = 0, Al.current = null, n === null || n.return === null) {
				se = 1, Hr = t, ne = null;
				break
			}
			e: {
				var s = e,
					o = n.return,
					a = n,
					l = t;
				if (t = de, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
					var u = l,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
					}
					var y = dc(o);
					if (y !== null) {
						y.flags &= -257, fc(y, o, a, s, t), y.mode & 1 && cc(s, u, t), t = y, l = u;
						var v = t.updateQueue;
						if (v === null) {
							var x = new Set;
							x.add(l), t.updateQueue = x
						} else v.add(l);
						break e
					} else {
						if (!(t & 1)) {
							cc(s, u, t), _l();
							break e
						}
						l = Error(P(426))
					}
				} else if ($ && a.mode & 1) {
					var k = dc(o);
					if (k !== null) {
						!(k.flags & 65536) && (k.flags |= 256), fc(k, o, a, s, t), gl(Hn(l, a));
						break e
					}
				}
				s = l = Hn(l, a),
					se !== 4 && (se = 2),
					Tr === null ? Tr = [s] : Tr.push(s),
					s = o; do {
						switch (s.tag) {
							case 3:
								s.flags |= 65536, t &= -t, s.lanes |= t;
								var p = Mh(s, l, t);
								ic(s, p);
								break e;
							case 1:
								a = l;
								var h = s.type,
									m = s.stateNode;
								if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ft === null || !Ft.has(m)))) {
									s.flags |= 65536, t &= -t, s.lanes |= t;
									var w = Dh(s, a, t);
									ic(s, w);
									break e
								}
						}
						s = s.return
					} while (s !== null)
			}
			Qh(n)
		} catch (S) {
			t = S, ne === n && n !== null && (ne = n = n.return);
			continue
		}
		break
	} while (!0)
}

function Yh() {
	var e = fs.current;
	return fs.current = ds, e === null ? ds : e
}

function _l() {
	(se === 0 || se === 3 || se === 2) && (se = 4), le === null || !(cn & 268435455) && !(Vs & 268435455) || Pt(le, de)
}

function ms(e, t) {
	var n = I;
	I |= 2;
	var r = Yh();
	(le !== e || de !== t) && (at = null, nn(e, t));
	do try {
		Xg();
		break
	} catch (i) {
		Kh(e, i)
	}
	while (!0);
	if (vl(), I = n, fs.current = r, ne !== null) throw Error(P(261));
	return le = null, de = 0, se
}

function Xg() {
	for (; ne !== null;) Gh(ne)
}

function Zg() {
	for (; ne !== null && !k0();) Gh(ne)
}

function Gh(e) {
	var t = Zh(e.alternate, e, De);
	e.memoizedProps = e.pendingProps, t === null ? Qh(e) : ne = t, Al.current = null
}

function Qh(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = Wg(n, t), n !== null) {
				n.flags &= 32767, ne = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				se = 6, ne = null;
				return
			}
		} else if (n = $g(n, t, De), n !== null) {
			ne = n;
			return
		}
		if (t = t.sibling, t !== null) {
			ne = t;
			return
		}
		ne = t = e
	} while (t !== null);
	se === 0 && (se = 5)
}

function Qt(e, t, n) {
	var r = O,
		i = be.transition;
	try {
		be.transition = null, O = 1, Jg(e, t, n, r)
	} finally {
		be.transition = i, O = r
	}
	return null
}

function Jg(e, t, n, r) {
	do zn(); while (Nt !== null);
	if (I & 6) throw Error(P(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var s = n.lanes | n.childLanes;
	if (L0(e, s), e === le && (ne = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0, Jh(Xi, function () {
		return zn(), null
	})), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
		s = be.transition, be.transition = null;
		var o = O;
		O = 1;
		var a = I;
		I |= 4, Al.current = null, Kg(e, n), $h(n, e), vg(na), Ji = !!ta, na = ta = null, e.current = n, Yg(n), T0(), I = a, O = o, be.transition = s
	} else e.current = n;
	if (Pi && (Pi = !1, Nt = e, ps = i), s = e.pendingLanes, s === 0 && (Ft = null), E0(n.stateNode), je(e, q()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
			componentStack: i.stack,
			digest: i.digest
		});
	if (hs) throw hs = !1, e = ka, ka = null, e;
	return ps & 1 && e.tag !== 0 && zn(), s = e.pendingLanes, s & 1 ? e === Ta ? Cr++ : (Cr = 0, Ta = e) : Cr = 0, Ut(), null
}

function zn() {
	if (Nt !== null) {
		var e = Mf(ps),
			t = be.transition,
			n = O;
		try {
			if (be.transition = null, O = 16 > e ? 16 : e, Nt === null) var r = !1;
			else {
				if (e = Nt, Nt = null, ps = 0, I & 6) throw Error(P(331));
				var i = I;
				for (I |= 4, M = e.current; M !== null;) {
					var s = M,
						o = s.child;
					if (M.flags & 16) {
						var a = s.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (M = u; M !== null;) {
									var c = M;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											kr(8, c, s)
									}
									var d = c.child;
									if (d !== null) d.return = c, M = d;
									else
										for (; M !== null;) {
											c = M;
											var f = c.sibling,
												y = c.return;
											if (Bh(c), c === u) {
												M = null;
												break
											}
											if (f !== null) {
												f.return = y, M = f;
												break
											}
											M = y
										}
								}
							}
							var v = s.alternate;
							if (v !== null) {
								var x = v.child;
								if (x !== null) {
									v.child = null;
									do {
										var k = x.sibling;
										x.sibling = null, x = k
									} while (x !== null)
								}
							}
							M = s
						}
					}
					if (s.subtreeFlags & 2064 && o !== null) o.return = s, M = o;
					else e: for (; M !== null;) {
						if (s = M, s.flags & 2048) switch (s.tag) {
							case 0:
							case 11:
							case 15:
								kr(9, s, s.return)
						}
						var p = s.sibling;
						if (p !== null) {
							p.return = s.return, M = p;
							break e
						}
						M = s.return
					}
				}
				var h = e.current;
				for (M = h; M !== null;) {
					o = M;
					var m = o.child;
					if (o.subtreeFlags & 2064 && m !== null) m.return = o, M = m;
					else e: for (o = h; M !== null;) {
						if (a = M, a.flags & 2048) try {
							switch (a.tag) {
								case 0:
								case 11:
								case 15:
									Rs(9, a)
							}
						} catch (S) {
							Z(a, a.return, S)
						}
						if (a === o) {
							M = null;
							break e
						}
						var w = a.sibling;
						if (w !== null) {
							w.return = a.return, M = w;
							break e
						}
						M = a.return
					}
				}
				if (I = i, Ut(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
					rt.onPostCommitFiberRoot(Es, e)
				} catch { }
				r = !0
			}
			return r
		} finally {
			O = n, be.transition = t
		}
	}
	return !1
}

function Pc(e, t, n) {
	t = Hn(n, t), t = Mh(e, t, 1), e = Lt(e, t, 1), t = we(), e !== null && (Jr(e, 1, t), je(e, t))
}

function Z(e, t, n) {
	if (e.tag === 3) Pc(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				Pc(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
					e = Hn(n, e), e = Dh(t, e, 1), t = Lt(t, e, 1), e = we(), t !== null && (Jr(t, 1, e), je(t, e));
					break
				}
			}
			t = t.return
		}
}

function qg(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > q() - Fl ? nn(e, 0) : Ll |= n), je(e, t)
}

function Xh(e, t) {
	t === 0 && (e.mode & 1 ? (t = mi, mi <<= 1, !(mi & 130023424) && (mi = 4194304)) : t = 1);
	var n = we();
	e = pt(e, t), e !== null && (Jr(e, t, n), je(e, n))
}

function ey(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Xh(e, n)
}

function ty(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(P(314))
	}
	r !== null && r.delete(t), Xh(e, n)
}
var Zh;
Zh = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, Ug(e, t, n);
			Ce = !!(e.flags & 131072)
		}
	else Ce = !1, $ && t.flags & 1048576 && th(t, ss, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			Oi(e, t), e = t.pendingProps;
			var i = bn(t, ye.current);
			In(t, n), i = El(null, t, r, e, i, n);
			var s = Nl();
			return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (s = !0, rs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Sl(t), i.updater = Fs, t.stateNode = i, i._reactInternals = t, da(t, r, e, n), t = pa(null, t, r, !0, s, n)) : (t.tag = 0, $ && s && pl(t), ve(null, t, i, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (Oi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = ry(r), e = Ge(r, e), i) {
					case 0:
						t = ha(null, t, r, e, n);
						break e;
					case 1:
						t = mc(null, t, r, e, n);
						break e;
					case 11:
						t = hc(null, t, r, e, n);
						break e;
					case 14:
						t = pc(null, t, r, Ge(r.type, e), n);
						break e
				}
				throw Error(P(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), ha(e, t, r, i, n);
		case 1:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), mc(e, t, r, i, n);
		case 3:
			e: {
				if (Rh(t), e === null) throw Error(P(387)); r = t.pendingProps,
					s = t.memoizedState,
					i = s.element,
					ah(e, t),
					ls(t, r, null, n);
				var o = t.memoizedState;
				if (r = o.element, s.isDehydrated)
					if (s = {
						element: r,
						isDehydrated: !1,
						cache: o.cache,
						pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
						transitions: o.transitions
					}, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
						i = Hn(Error(P(423)), t), t = gc(e, t, r, n, i);
						break e
					} else if (r !== i) {
						i = Hn(Error(P(424)), t), t = gc(e, t, r, n, i);
						break e
					} else
						for (Ae = At(t.stateNode.containerInfo.firstChild), Le = t, $ = !0, Xe = null, n = sh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (Un(), r === i) {
						t = mt(e, t, n);
						break e
					}
					ve(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return lh(t), e === null && la(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ra(r, i) ? o = null : s !== null && ra(r, s) && (t.flags |= 32), Fh(e, t), ve(e, t, o, n), t.child;
		case 6:
			return e === null && la(t), null;
		case 13:
			return Vh(e, t, n);
		case 4:
			return kl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ve(e, t, r, n), t.child;
		case 11:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), hc(e, t, r, i, n);
		case 7:
			return ve(e, t, t.pendingProps, n), t.child;
		case 8:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ve(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, B(os, r._currentValue), r._currentValue = o, s !== null)
					if (qe(s.value, o)) {
						if (s.children === i.children && !Ee.current) {
							t = mt(e, t, n);
							break e
						}
					} else
						for (s = t.child, s !== null && (s.return = t); s !== null;) {
							var a = s.dependencies;
							if (a !== null) {
								o = s.child;
								for (var l = a.firstContext; l !== null;) {
									if (l.context === r) {
										if (s.tag === 1) {
											l = dt(-1, n & -n), l.tag = 2;
											var u = s.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
											}
										}
										s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), ua(s.return, n, t), a.lanes |= n;
										break
									}
									l = l.next
								}
							} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (o = s.return, o === null) throw Error(P(341));
								o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ua(o, n, t), o = s.sibling
							} else o = s.child;
							if (o !== null) o.return = s;
							else
								for (o = s; o !== null;) {
									if (o === t) {
										o = null;
										break
									}
									if (s = o.sibling, s !== null) {
										s.return = o.return, o = s;
										break
									}
									o = o.return
								}
							s = o
						}
				ve(e, t, i.children, n),
					t = t.child
			}
			return t;
		case 9:
			return i = t.type, r = t.pendingProps.children, In(t, n), i = $e(i), r = r(i), t.flags |= 1, ve(e, t, r, n), t.child;
		case 14:
			return r = t.type, i = Ge(r, t.pendingProps), i = Ge(r.type, i), pc(e, t, r, i, n);
		case 15:
			return Ah(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), Oi(e, t), t.tag = 1, Ne(r) ? (e = !0, rs(t)) : e = !1, In(t, n), jh(t, r, i), da(t, r, i, n), pa(null, t, r, !0, e, n);
		case 19:
			return _h(e, t, n);
		case 22:
			return Lh(e, t, n)
	}
	throw Error(P(156, t.tag))
};

function Jh(e, t) {
	return Pf(e, t)
}

function ny(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Oe(e, t, n, r) {
	return new ny(e, t, n, r)
}

function Il(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function ry(e) {
	if (typeof e == "function") return Il(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === nl) return 11;
		if (e === rl) return 14
	}
	return 2
}

function Vt(e, t) {
	var n = e.alternate;
	return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ui(e, t, n, r, i, s) {
	var o = 2;
	if (r = e, typeof e == "function") Il(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else e: switch (e) {
		case yn:
			return rn(n.children, i, s, t);
		case tl:
			o = 8, i |= 8;
			break;
		case Vo:
			return e = Oe(12, n, t, i | 2), e.elementType = Vo, e.lanes = s, e;
		case _o:
			return e = Oe(13, n, t, i), e.elementType = _o, e.lanes = s, e;
		case Io:
			return e = Oe(19, n, t, i), e.elementType = Io, e.lanes = s, e;
		case lf:
			return _s(n, i, s, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case of:
					o = 10;
					break e;
				case af:
					o = 9;
					break e;
				case nl:
					o = 11;
					break e;
				case rl:
					o = 14;
					break e;
				case kt:
					o = 16, r = null;
					break e
			}
			throw Error(P(130, e == null ? e : typeof e, ""))
	}
	return t = Oe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function rn(e, t, n, r) {
	return e = Oe(7, e, r, t), e.lanes = n, e
}

function _s(e, t, n, r) {
	return e = Oe(22, e, r, t), e.elementType = lf, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function yo(e, t, n) {
	return e = Oe(6, e, null, t), e.lanes = n, e
}

function vo(e, t, n) {
	return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function iy(e, t, n, r, i) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zs(0), this.expirationTimes = Zs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function zl(e, t, n, r, i, s, o, a, l) {
	return e = new iy(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Oe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, Sl(s), e
}

function sy(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: gn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function qh(e) {
	if (!e) return It;
	e = e._reactInternals;
	e: {
		if (hn(e) !== e || e.tag !== 1) throw Error(P(170));
		var t = e; do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ne(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(P(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Ne(n)) return qf(e, n, t)
	}
	return t
}

function ep(e, t, n, r, i, s, o, a, l) {
	return e = zl(n, r, !0, e, i, s, o, a, l), e.context = qh(null), n = e.current, r = we(), i = Rt(n), s = dt(r, i), s.callback = t ?? null, Lt(n, s, i), e.current.lanes = i, Jr(e, i, r), je(e, r), e
}

function Is(e, t, n, r) {
	var i = t.current,
		s = we(),
		o = Rt(i);
	return n = qh(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(s, o), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(i, t, o), e !== null && (Je(e, i, o, s), _i(e, i, o)), o
}

function gs(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function Ec(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function Ol(e, t) {
	Ec(e, t), (e = e.alternate) && Ec(e, t)
}

function oy() {
	return null
}
var tp = typeof reportError == "function" ? reportError : function (e) {
	console.error(e)
};

function Bl(e) {
	this._internalRoot = e
}
zs.prototype.render = Bl.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(P(409));
	Is(e, t, null, null)
};
zs.prototype.unmount = Bl.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		dn(function () {
			Is(null, e, null, null)
		}), t[ht] = null
	}
};

function zs(e) {
	this._internalRoot = e
}
zs.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Lf();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
		Ct.splice(n, 0, e), n === 0 && Rf(e)
	}
};

function bl(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Os(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Nc() { }

function ay(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var s = r;
			r = function () {
				var u = gs(o);
				s.call(u)
			}
		}
		var o = ep(t, r, e, 0, null, !1, !1, "", Nc);
		return e._reactRootContainer = o, e[ht] = o.current, Ir(e.nodeType === 8 ? e.parentNode : e), dn(), o
	}
	for (; i = e.lastChild;) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = gs(l);
			a.call(u)
		}
	}
	var l = zl(e, 0, !1, null, null, !1, !1, "", Nc);
	return e._reactRootContainer = l, e[ht] = l.current, Ir(e.nodeType === 8 ? e.parentNode : e), dn(function () {
		Is(t, l, n, r)
	}), l
}

function Bs(e, t, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var l = gs(o);
				a.call(l)
			}
		}
		Is(t, o, e, i)
	} else o = ay(n, t, e, i, r);
	return gs(o)
}
Df = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = hr(t.pendingLanes);
				n !== 0 && (ol(t, n | 1), je(t, q()), !(I & 6) && (Kn = q() + 500, Ut()))
			}
			break;
		case 13:
			dn(function () {
				var r = pt(e, 1);
				if (r !== null) {
					var i = we();
					Je(r, e, 1, i)
				}
			}), Ol(e, 1)
	}
};
al = function (e) {
	if (e.tag === 13) {
		var t = pt(e, 134217728);
		if (t !== null) {
			var n = we();
			Je(t, e, 134217728, n)
		}
		Ol(e, 134217728)
	}
};
Af = function (e) {
	if (e.tag === 13) {
		var t = Rt(e),
			n = pt(e, t);
		if (n !== null) {
			var r = we();
			Je(n, e, t, r)
		}
		Ol(e, t)
	}
};
Lf = function () {
	return O
};
Ff = function (e, t) {
	var n = O;
	try {
		return O = e, t()
	} finally {
		O = n
	}
};
Yo = function (e, t, n) {
	switch (t) {
		case "input":
			if (Bo(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Ds(r);
						if (!i) throw Error(P(90));
						cf(r), Bo(r, i)
					}
				}
			}
			break;
		case "textarea":
			ff(e, n);
			break;
		case "select":
			t = n.value, t != null && Fn(e, !!n.multiple, t, !1)
	}
};
xf = Rl;
wf = dn;
var ly = {
	usingClientEntryPoint: !1,
	Events: [ei, Sn, Ds, yf, vf, Rl]
},
	ur = {
		findFiberByHostInstance: Zt,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	uy = {
		bundleType: ur.bundleType,
		version: ur.version,
		rendererPackageName: ur.rendererPackageName,
		rendererConfig: ur.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: vt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return e = Tf(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: ur.findFiberByHostInstance || oy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ei.isDisabled && Ei.supportsFiber) try {
		Es = Ei.inject(uy), rt = Ei
	} catch { }
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ly;
Re.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!bl(t)) throw Error(P(200));
	return sy(e, t, null, n)
};
Re.createRoot = function (e, t) {
	if (!bl(e)) throw Error(P(299));
	var n = !1,
		r = "",
		i = tp;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = zl(e, 1, !1, null, null, n, !1, r, i), e[ht] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new Bl(t)
};
Re.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
	return e = Tf(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function (e) {
	return dn(e)
};
Re.hydrate = function (e, t, n) {
	if (!Os(t)) throw Error(P(200));
	return Bs(null, e, t, !0, n)
};
Re.hydrateRoot = function (e, t, n) {
	if (!bl(e)) throw Error(P(405));
	var r = n != null && n.hydratedSources || null,
		i = !1,
		s = "",
		o = tp;
	if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ep(t, null, e, 1, n ?? null, i, !1, s, o), e[ht] = t.current, Ir(e), r)
		for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
	return new zs(t)
};
Re.render = function (e, t, n) {
	if (!Os(t)) throw Error(P(200));
	return Bs(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function (e) {
	if (!Os(e)) throw Error(P(40));
	return e._reactRootContainer ? (dn(function () {
		Bs(null, null, e, !1, function () {
			e._reactRootContainer = null, e[ht] = null
		})
	}), !0) : !1
};
Re.unstable_batchedUpdates = Rl;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Os(n)) throw Error(P(200));
	if (e == null || e._reactInternals === void 0) throw Error(P(38));
	return Bs(e, t, n, !1, r)
};
Re.version = "18.3.1-next-f1338f8080-20240426";

function np() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)
	} catch (e) {
		console.error(e)
	}
}
np(), tf.exports = Re;
var cy = tf.exports,
	rp, jc = cy;
rp = jc.createRoot, jc.hydrateRoot;
const Ul = N.createContext({});

function $l(e) {
	const t = N.useRef(null);
	return t.current === null && (t.current = e()), t.current
}
const Wl = typeof window < "u",
	ip = Wl ? N.useLayoutEffect : N.useEffect,
	bs = N.createContext(null);

function Hl(e, t) {
	e.indexOf(t) === -1 && e.push(t)
}

function Kl(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1)
}
const gt = (e, t, n) => n > t ? t : n < e ? e : n;
let ys = () => { };
const yt = {},
	sp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function op(e) {
	return typeof e == "object" && e !== null
}
const ap = e => /^0[^.\s]+$/u.test(e);

function Yl(e) {
	let t;
	return () => (t === void 0 && (t = e()), t)
}
const Ue = e => e,
	dy = (e, t) => n => t(e(n)),
	ni = (...e) => e.reduce(dy),
	Kr = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r
	};
class Gl {
	constructor() {
		this.subscriptions = []
	}
	add(t) {
		return Hl(this.subscriptions, t), () => Kl(this.subscriptions, t)
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let s = 0; s < i; s++) {
					const o = this.subscriptions[s];
					o && o(t, n, r)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const st = e => e * 1e3,
	Be = e => e / 1e3;

function lp(e, t) {
	return t ? e * (1e3 / t) : 0
}
const up = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	fy = 1e-7,
	hy = 12;

function py(e, t, n, r, i) {
	let s, o, a = 0;
	do o = t + (n - t) / 2, s = up(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > fy && ++a < hy);
	return o
}

function ri(e, t, n, r) {
	if (e === t && n === r) return Ue;
	const i = s => py(s, 0, 1, e, n);
	return s => s === 0 || s === 1 ? s : up(i(s), t, r)
}
const cp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	dp = e => t => 1 - e(1 - t),
	fp = ri(.33, 1.53, .69, .99),
	Ql = dp(fp),
	hp = cp(Ql),
	pp = e => (e *= 2) < 1 ? .5 * Ql(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
	Xl = e => 1 - Math.sin(Math.acos(e)),
	mp = dp(Xl),
	gp = cp(Xl),
	my = ri(.42, 0, 1, 1),
	gy = ri(0, 0, .58, 1),
	yp = ri(.42, 0, .58, 1),
	yy = e => Array.isArray(e) && typeof e[0] != "number",
	vp = e => Array.isArray(e) && typeof e[0] == "number",
	Mc = {
		linear: Ue,
		easeIn: my,
		easeInOut: yp,
		easeOut: gy,
		circIn: Xl,
		circInOut: gp,
		circOut: mp,
		backIn: Ql,
		backInOut: hp,
		backOut: fp,
		anticipate: pp
	},
	vy = e => typeof e == "string",
	Dc = e => {
		if (vp(e)) {
			ys(e.length === 4);
			const [t, n, r, i] = e;
			return ri(t, n, r, i)
		} else if (vy(e)) return ys(Mc[e] !== void 0), Mc[e];
		return e
	},
	Ni = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
	Ac = {
		value: null,
		addProjectionMetrics: null
	};

function xy(e, t) {
	let n = new Set,
		r = new Set,
		i = !1,
		s = !1;
	const o = new WeakSet;
	let a = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	},
		l = 0;

	function u(d) {
		o.has(d) && (c.schedule(d), e()), l++, d(a)
	}
	const c = {
		schedule: (d, f = !1, y = !1) => {
			const x = y && i ? n : r;
			return f && o.add(d), x.has(d) || x.add(d), d
		},
		cancel: d => {
			r.delete(d), o.delete(d)
		},
		process: d => {
			if (a = d, i) {
				s = !0;
				return
			}
			i = !0, [n, r] = [r, n], n.forEach(u), t && Ac.value && Ac.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, s && (s = !1, c.process(d))
		}
	};
	return c
}
const wy = 40;

function xp(e, t) {
	let n = !1,
		r = !0;
	const i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	},
		s = () => n = !0,
		o = Ni.reduce((m, w) => (m[w] = xy(s, t ? w : void 0), m), {}),
		{
			setup: a,
			read: l,
			resolveKeyframes: u,
			preUpdate: c,
			update: d,
			preRender: f,
			render: y,
			postRender: v
		} = o,
		x = () => {
			const m = yt.useManualTiming ? i.timestamp : performance.now();
			n = !1, yt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, wy), 1)), i.timestamp = m, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), d.process(i), f.process(i), y.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(x))
		},
		k = () => {
			n = !0, r = !0, i.isProcessing || e(x)
		};
	return {
		schedule: Ni.reduce((m, w) => {
			const S = o[w];
			return m[w] = (C, E = !1, T = !1) => (n || k(), S.schedule(C, E, T)), m
		}, {}),
		cancel: m => {
			for (let w = 0; w < Ni.length; w++) o[Ni[w]].cancel(m)
		},
		state: i,
		steps: o
	}
}
const {
	schedule: W,
	cancel: zt,
	state: ce,
	steps: xo
} = xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let $i;

function Sy() {
	$i = void 0
}
const Pe = {
	now: () => ($i === void 0 && Pe.set(ce.isProcessing || yt.useManualTiming ? ce.timestamp : performance.now()), $i),
	set: e => {
		$i = e, queueMicrotask(Sy)
	}
},
	wp = e => t => typeof t == "string" && t.startsWith(e),
	Sp = wp("--"),
	ky = wp("var(--"),
	Zl = e => ky(e) ? Ty.test(e.split("/*")[0].trim()) : !1,
	Ty = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	Jn = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e
	},
	Yr = {
		...Jn,
		transform: e => gt(0, 1, e)
	},
	ji = {
		...Jn,
		default: 1
	},
	Pr = e => Math.round(e * 1e5) / 1e5,
	Jl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Cy(e) {
	return e == null
}
const Py = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	ql = (e, t) => n => !!(typeof n == "string" && Py.test(n) && n.startsWith(e) || t && !Cy(n) && Object.prototype.hasOwnProperty.call(n, t)),
	kp = (e, t, n) => r => {
		if (typeof r != "string") return r;
		const [i, s, o, a] = r.match(Jl);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(s),
			[n]: parseFloat(o),
			alpha: a !== void 0 ? parseFloat(a) : 1
		}
	},
	Ey = e => gt(0, 255, e),
	wo = {
		...Jn,
		transform: e => Math.round(Ey(e))
	},
	en = {
		test: ql("rgb", "red"),
		parse: kp("red", "green", "blue"),
		transform: ({
			red: e,
			green: t,
			blue: n,
			alpha: r = 1
		}) => "rgba(" + wo.transform(e) + ", " + wo.transform(t) + ", " + wo.transform(n) + ", " + Pr(Yr.transform(r)) + ")"
	};

function Ny(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	}
}
const Ea = {
	test: ql("#"),
	parse: Ny,
	transform: en.transform
},
	ii = e => ({
		test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`
	}),
	St = ii("deg"),
	ot = ii("%"),
	F = ii("px"),
	jy = ii("vh"),
	My = ii("vw"),
	Lc = {
		...ot,
		parse: e => ot.parse(e) / 100,
		transform: e => ot.transform(e * 100)
	},
	jn = {
		test: ql("hsl", "hue"),
		parse: kp("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: t,
			lightness: n,
			alpha: r = 1
		}) => "hsla(" + Math.round(e) + ", " + ot.transform(Pr(t)) + ", " + ot.transform(Pr(n)) + ", " + Pr(Yr.transform(r)) + ")"
	},
	te = {
		test: e => en.test(e) || Ea.test(e) || jn.test(e),
		parse: e => en.test(e) ? en.parse(e) : jn.test(e) ? jn.parse(e) : Ea.parse(e),
		transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? en.transform(e) : jn.transform(e),
		getAnimatableNone: e => {
			const t = te.parse(e);
			return t.alpha = 0, te.transform(t)
		}
	},
	Dy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Ay(e) {
	var t, n;
	return isNaN(e) && typeof e == "string" && (((t = e.match(Jl)) == null ? void 0 : t.length) || 0) + (((n = e.match(Dy)) == null ? void 0 : n.length) || 0) > 0
}
const Tp = "number",
	Cp = "color",
	Ly = "var",
	Fy = "var(",
	Fc = "${}",
	Ry = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Gr(e) {
	const t = e.toString(),
		n = [],
		r = {
			color: [],
			number: [],
			var: []
		},
		i = [];
	let s = 0;
	const a = t.replace(Ry, l => (te.test(l) ? (r.color.push(s), i.push(Cp), n.push(te.parse(l))) : l.startsWith(Fy) ? (r.var.push(s), i.push(Ly), n.push(l)) : (r.number.push(s), i.push(Tp), n.push(parseFloat(l))), ++s, Fc)).split(Fc);
	return {
		values: n,
		split: a,
		indexes: r,
		types: i
	}
}

function Pp(e) {
	return Gr(e).values
}

function Ep(e) {
	const {
		split: t,
		types: n
	} = Gr(e), r = t.length;
	return i => {
		let s = "";
		for (let o = 0; o < r; o++)
			if (s += t[o], i[o] !== void 0) {
				const a = n[o];
				a === Tp ? s += Pr(i[o]) : a === Cp ? s += te.transform(i[o]) : s += i[o]
			} return s
	}
}
const Vy = e => typeof e == "number" ? 0 : te.test(e) ? te.getAnimatableNone(e) : e;

function _y(e) {
	const t = Pp(e);
	return Ep(e)(t.map(Vy))
}
const Ot = {
	test: Ay,
	parse: Pp,
	createTransformer: Ep,
	getAnimatableNone: _y
};

function So(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Iy({
	hue: e,
	saturation: t,
	lightness: n,
	alpha: r
}) {
	e /= 360, t /= 100, n /= 100;
	let i = 0,
		s = 0,
		o = 0;
	if (!t) i = s = o = n;
	else {
		const a = n < .5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - a;
		i = So(l, a, e + 1 / 3), s = So(l, a, e), o = So(l, a, e - 1 / 3)
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(s * 255),
		blue: Math.round(o * 255),
		alpha: r
	}
}

function vs(e, t) {
	return n => n > 0 ? t : e
}
const Y = (e, t, n) => e + (t - e) * n,
	ko = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i)
	},
	zy = [Ea, en, jn],
	Oy = e => zy.find(t => t.test(e));

function Rc(e) {
	const t = Oy(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === jn && (n = Iy(n)), n
}
const Vc = (e, t) => {
	const n = Rc(e),
		r = Rc(t);
	if (!n || !r) return vs(e, t);
	const i = {
		...n
	};
	return s => (i.red = ko(n.red, r.red, s), i.green = ko(n.green, r.green, s), i.blue = ko(n.blue, r.blue, s), i.alpha = Y(n.alpha, r.alpha, s), en.transform(i))
},
	Na = new Set(["none", "hidden"]);

function By(e, t) {
	return Na.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function by(e, t) {
	return n => Y(e, t, n)
}

function eu(e) {
	return typeof e == "number" ? by : typeof e == "string" ? Zl(e) ? vs : te.test(e) ? Vc : Wy : Array.isArray(e) ? Np : typeof e == "object" ? te.test(e) ? Vc : Uy : vs
}

function Np(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((s, o) => eu(s)(s, t[o]));
	return s => {
		for (let o = 0; o < r; o++) n[o] = i[o](s);
		return n
	}
}

function Uy(e, t) {
	const n = {
		...e,
		...t
	},
		r = {};
	for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = eu(e[i])(e[i], t[i]));
	return i => {
		for (const s in r) n[s] = r[s](i);
		return n
	}
}

function $y(e, t) {
	const n = [],
		r = {
			color: 0,
			var: 0,
			number: 0
		};
	for (let i = 0; i < t.values.length; i++) {
		const s = t.types[i],
			o = e.indexes[s][r[s]],
			a = e.values[o] ?? 0;
		n[i] = a, r[s]++
	}
	return n
}
const Wy = (e, t) => {
	const n = Ot.createTransformer(t),
		r = Gr(e),
		i = Gr(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Na.has(e) && !i.values.length || Na.has(t) && !r.values.length ? By(e, t) : ni(Np($y(r, i), i.values), n) : vs(e, t)
};

function jp(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Y(e, t, n) : eu(e)(e, t)
}
const Hy = e => {
	const t = ({
		timestamp: n
	}) => e(n);
	return {
		start: (n = !0) => W.update(t, n),
		stop: () => zt(t),
		now: () => ce.isProcessing ? ce.timestamp : Pe.now()
	}
},
	Mp = (e, t, n = 10) => {
		let r = "";
		const i = Math.max(Math.round(t / n), 2);
		for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
		return `linear(${r.substring(0, r.length - 2)})`
	},
	xs = 2e4;

function tu(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < xs;) t += n, r = e.next(t);
	return t >= xs ? 1 / 0 : t
}

function Ky(e, t = 100, n) {
	const r = n({
		...e,
		keyframes: [0, t]
	}),
		i = Math.min(tu(r), xs);
	return {
		type: "keyframes",
		ease: s => r.next(i * s).value / t,
		duration: Be(i)
	}
}
const Yy = 5;

function Dp(e, t, n) {
	const r = Math.max(t - Yy, 0);
	return lp(n - e(r), t - r)
}
const X = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
},
	To = .001;

function Gy({
	duration: e = X.duration,
	bounce: t = X.bounce,
	velocity: n = X.velocity,
	mass: r = X.mass
}) {
	let i, s, o = 1 - t;
	o = gt(X.minDamping, X.maxDamping, o), e = gt(X.minDuration, X.maxDuration, Be(e)), o < 1 ? (i = u => {
		const c = u * o,
			d = c * e,
			f = c - n,
			y = ja(u, o),
			v = Math.exp(-d);
		return To - f / y * v
	}, s = u => {
		const d = u * o * e,
			f = d * n + n,
			y = Math.pow(o, 2) * Math.pow(u, 2) * e,
			v = Math.exp(-d),
			x = ja(Math.pow(u, 2), o);
		return (-i(u) + To > 0 ? -1 : 1) * ((f - y) * v) / x
	}) : (i = u => {
		const c = Math.exp(-u * e),
			d = (u - n) * e + 1;
		return -To + c * d
	}, s = u => {
		const c = Math.exp(-u * e),
			d = (n - u) * (e * e);
		return c * d
	});
	const a = 5 / e,
		l = Xy(i, s, a);
	if (e = st(e), isNaN(l)) return {
		stiffness: X.stiffness,
		damping: X.damping,
		duration: e
	};
	{
		const u = Math.pow(l, 2) * r;
		return {
			stiffness: u,
			damping: o * 2 * Math.sqrt(r * u),
			duration: e
		}
	}
}
const Qy = 12;

function Xy(e, t, n) {
	let r = n;
	for (let i = 1; i < Qy; i++) r = r - e(r) / t(r);
	return r
}

function ja(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const Zy = ["duration", "bounce"],
	Jy = ["stiffness", "damping", "mass"];

function _c(e, t) {
	return t.some(n => e[n] !== void 0)
}

function qy(e) {
	let t = {
		velocity: X.velocity,
		stiffness: X.stiffness,
		damping: X.damping,
		mass: X.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!_c(e, Jy) && _c(e, Zy))
		if (e.visualDuration) {
			const n = e.visualDuration,
				r = 2 * Math.PI / (n * 1.2),
				i = r * r,
				s = 2 * gt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: X.mass,
				stiffness: i,
				damping: s
			}
		} else {
			const n = Gy(e);
			t = {
				...t,
				...n,
				mass: X.mass
			}, t.isResolvedFromDuration = !0
		} return t
}

function ws(e = X.visualDuration, t = X.bounce) {
	const n = typeof e != "object" ? {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	} : e;
	let {
		restSpeed: r,
		restDelta: i
	} = n;
	const s = n.keyframes[0],
		o = n.keyframes[n.keyframes.length - 1],
		a = {
			done: !1,
			value: s
		},
		{
			stiffness: l,
			damping: u,
			mass: c,
			duration: d,
			velocity: f,
			isResolvedFromDuration: y
		} = qy({
			...n,
			velocity: -Be(n.velocity || 0)
		}),
		v = f || 0,
		x = u / (2 * Math.sqrt(l * c)),
		k = o - s,
		p = Be(Math.sqrt(l / c)),
		h = Math.abs(k) < 5;
	r || (r = h ? X.restSpeed.granular : X.restSpeed.default), i || (i = h ? X.restDelta.granular : X.restDelta.default);
	let m;
	if (x < 1) {
		const S = ja(p, x);
		m = C => {
			const E = Math.exp(-x * p * C);
			return o - E * ((v + x * p * k) / S * Math.sin(S * C) + k * Math.cos(S * C))
		}
	} else if (x === 1) m = S => o - Math.exp(-p * S) * (k + (v + p * k) * S);
	else {
		const S = p * Math.sqrt(x * x - 1);
		m = C => {
			const E = Math.exp(-x * p * C),
				T = Math.min(S * C, 300);
			return o - E * ((v + x * p * k) * Math.sinh(T) + S * k * Math.cosh(T)) / S
		}
	}
	const w = {
		calculatedDuration: y && d || null,
		next: S => {
			const C = m(S);
			if (y) a.done = S >= d;
			else {
				let E = S === 0 ? v : 0;
				x < 1 && (E = S === 0 ? st(v) : Dp(m, S, C));
				const T = Math.abs(E) <= r,
					V = Math.abs(o - C) <= i;
				a.done = T && V
			}
			return a.value = a.done ? o : C, a
		},
		toString: () => {
			const S = Math.min(tu(w), xs),
				C = Mp(E => w.next(S * E).value, S, 30);
			return S + "ms " + C
		},
		toTransition: () => { }
	};
	return w
}
ws.applyToOptions = e => {
	const t = Ky(e, 100, ws);
	return e.ease = t.ease, e.duration = st(t.duration), e.type = "keyframes", e
};

function Ma({
	keyframes: e,
	velocity: t = 0,
	power: n = .8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: s = 500,
	modifyTarget: o,
	min: a,
	max: l,
	restDelta: u = .5,
	restSpeed: c
}) {
	const d = e[0],
		f = {
			done: !1,
			value: d
		},
		y = T => a !== void 0 && T < a || l !== void 0 && T > l,
		v = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
	let x = n * t;
	const k = d + x,
		p = o === void 0 ? k : o(k);
	p !== k && (x = p - d);
	const h = T => -x * Math.exp(-T / r),
		m = T => p + h(T),
		w = T => {
			const V = h(T),
				D = m(T);
			f.done = Math.abs(V) <= u, f.value = f.done ? p : D
		};
	let S, C;
	const E = T => {
		y(f.value) && (S = T, C = ws({
			keyframes: [f.value, v(f.value)],
			velocity: Dp(m, T, f.value),
			damping: i,
			stiffness: s,
			restDelta: u,
			restSpeed: c
		}))
	};
	return E(0), {
		calculatedDuration: null,
		next: T => {
			let V = !1;
			return !C && S === void 0 && (V = !0, w(T), E(T)), S !== void 0 && T >= S ? C.next(T - S) : (!V && w(T), f)
		}
	}
}

function ev(e, t, n) {
	const r = [],
		i = n || yt.mix || jp,
		s = e.length - 1;
	for (let o = 0; o < s; o++) {
		let a = i(e[o], e[o + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[o] || Ue : t;
			a = ni(l, a)
		}
		r.push(a)
	}
	return r
}

function tv(e, t, {
	clamp: n = !0,
	ease: r,
	mixer: i
} = {}) {
	const s = e.length;
	if (ys(s === t.length), s === 1) return () => t[0];
	if (s === 2 && t[0] === t[1]) return () => t[1];
	const o = e[0] === e[1];
	e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
	const a = ev(t, r, i),
		l = a.length,
		u = c => {
			if (o && c < e[0]) return t[0];
			let d = 0;
			if (l > 1)
				for (; d < e.length - 2 && !(c < e[d + 1]); d++);
			const f = Kr(e[d], e[d + 1], c);
			return a[d](f)
		};
	return n ? c => u(gt(e[0], e[s - 1], c)) : u
}

function nv(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = Kr(0, t, r);
		e.push(Y(n, 1, i))
	}
}

function rv(e) {
	const t = [0];
	return nv(t, e.length - 1), t
}

function iv(e, t) {
	return e.map(n => n * t)
}

function sv(e, t) {
	return e.map(() => t || yp).splice(0, e.length - 1)
}

function Er({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut"
}) {
	const i = yy(r) ? r.map(Dc) : Dc(r),
		s = {
			done: !1,
			value: t[0]
		},
		o = iv(n && n.length === t.length ? n : rv(t), e),
		a = tv(o, t, {
			ease: Array.isArray(i) ? i : sv(t, i)
		});
	return {
		calculatedDuration: e,
		next: l => (s.value = a(l), s.done = l >= e, s)
	}
}
const ov = e => e !== null;

function nu(e, {
	repeat: t,
	repeatType: n = "loop"
}, r, i = 1) {
	const s = e.filter(ov),
		a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
	return !a || r === void 0 ? s[a] : r
}
const av = {
	decay: Ma,
	inertia: Ma,
	tween: Er,
	keyframes: Er,
	spring: ws
};

function Ap(e) {
	typeof e.type == "string" && (e.type = av[e.type])
}
class ru {
	constructor() {
		this.updateFinished()
	}
	get finished() {
		return this._finished
	}
	updateFinished() {
		this._finished = new Promise(t => {
			this.resolve = t
		})
	}
	notifyFinished() {
		this.resolve()
	}
	then(t, n) {
		return this.finished.then(t, n)
	}
}
const lv = e => e / 100;
class iu extends ru {
	constructor(t) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			var r, i;
			const {
				motionValue: n
			} = this.options;
			n && n.updatedAt !== Pe.now() && this.tick(Pe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r))
		}, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
	}
	initAnimation() {
		const {
			options: t
		} = this;
		Ap(t);
		const {
			type: n = Er,
			repeat: r = 0,
			repeatDelay: i = 0,
			repeatType: s,
			velocity: o = 0
		} = t;
		let {
			keyframes: a
		} = t;
		const l = n || Er;
		l !== Er && typeof a[0] != "number" && (this.mixKeyframes = ni(lv, jp(a[0], a[1])), a = [0, 100]);
		const u = l({
			...t,
			keyframes: a
		});
		s === "mirror" && (this.mirroredGenerator = l({
			...t,
			keyframes: [...a].reverse(),
			velocity: -o
		})), u.calculatedDuration === null && (u.calculatedDuration = tu(u));
		const {
			calculatedDuration: c
		} = u;
		this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = u
	}
	updateTime(t) {
		const n = Math.round(t - this.startTime) * this.playbackSpeed;
		this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
	}
	tick(t, n = !1) {
		const {
			generator: r,
			totalDuration: i,
			mixKeyframes: s,
			mirroredGenerator: o,
			resolvedDuration: a,
			calculatedDuration: l
		} = this;
		if (this.startTime === null) return r.next(0);
		const {
			delay: u = 0,
			keyframes: c,
			repeat: d,
			repeatType: f,
			repeatDelay: y,
			type: v,
			onUpdate: x,
			finalKeyframe: k
		} = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
		const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
			h = this.playbackSpeed >= 0 ? p < 0 : p > i;
		this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
		let m = this.currentTime,
			w = r;
		if (d) {
			const T = Math.min(this.currentTime, i) / a;
			let V = Math.floor(T),
				D = T % 1;
			!D && T >= 1 && (D = 1), D === 1 && V--, V = Math.min(V, d + 1), !!(V % 2) && (f === "reverse" ? (D = 1 - D, y && (D -= y / a)) : f === "mirror" && (w = o)), m = gt(0, 1, D) * a
		}
		const S = h ? {
			done: !1,
			value: c[0]
		} : w.next(m);
		s && (S.value = s(S.value));
		let {
			done: C
		} = S;
		!h && l !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
		const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
		return E && v !== Ma && (S.value = nu(c, this.options, k, this.speed)), x && x(S.value), E && this.finish(), S
	}
	then(t, n) {
		return this.finished.then(t, n)
	}
	get duration() {
		return Be(this.calculatedDuration)
	}
	get iterationDuration() {
		const {
			delay: t = 0
		} = this.options || {};
		return this.duration + Be(t)
	}
	get time() {
		return Be(this.currentTime)
	}
	set time(t) {
		var n;
		t = st(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(t) {
		this.updateTime(Pe.now());
		const n = this.playbackSpeed !== t;
		this.playbackSpeed = t, n && (this.time = Be(this.currentTime))
	}
	play() {
		var i, s;
		if (this.isStopped) return;
		const {
			driver: t = Hy,
			startTime: n
		} = this.options;
		this.driver || (this.driver = t(o => this.tick(o))), (s = (i = this.options).onPlay) == null || s.call(i);
		const r = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
	}
	pause() {
		this.state = "paused", this.updateTime(Pe.now()), this.holdTime = this.currentTime
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
	}
	finish() {
		var t, n;
		this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
	}
	cancel() {
		var t, n;
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
	}
	stopDriver() {
		this.driver && (this.driver.stop(), this.driver = void 0)
	}
	sample(t) {
		return this.startTime = 0, this.tick(t, !0)
	}
	attachTimeline(t) {
		var n;
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
	}
}

function uv(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
const tn = e => e * 180 / Math.PI,
	Da = e => {
		const t = tn(Math.atan2(e[1], e[0]));
		return Aa(t)
	},
	cv = {
		x: 4,
		y: 5,
		translateX: 4,
		translateY: 5,
		scaleX: 0,
		scaleY: 3,
		scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
		rotate: Da,
		rotateZ: Da,
		skewX: e => tn(Math.atan(e[1])),
		skewY: e => tn(Math.atan(e[2])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
	},
	Aa = e => (e = e % 360, e < 0 && (e += 360), e),
	Ic = Da,
	zc = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
	Oc = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
	dv = {
		x: 12,
		y: 13,
		z: 14,
		translateX: 12,
		translateY: 13,
		translateZ: 14,
		scaleX: zc,
		scaleY: Oc,
		scale: e => (zc(e) + Oc(e)) / 2,
		rotateX: e => Aa(tn(Math.atan2(e[6], e[5]))),
		rotateY: e => Aa(tn(Math.atan2(-e[2], e[0]))),
		rotateZ: Ic,
		rotate: Ic,
		skewX: e => tn(Math.atan(e[4])),
		skewY: e => tn(Math.atan(e[1])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
	};

function La(e) {
	return e.includes("scale") ? 1 : 0
}

function Fa(e, t) {
	if (!e || e === "none") return La(t);
	const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let r, i;
	if (n) r = dv, i = n;
	else {
		const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = cv, i = a
	}
	if (!i) return La(t);
	const s = r[t],
		o = i[1].split(",").map(hv);
	return typeof s == "function" ? s(o) : o[s]
}
const fv = (e, t) => {
	const {
		transform: n = "none"
	} = getComputedStyle(e);
	return Fa(n, t)
};

function hv(e) {
	return parseFloat(e.trim())
}
const qn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
	er = new Set(qn),
	Bc = e => e === Jn || e === F,
	pv = new Set(["x", "y", "z"]),
	mv = qn.filter(e => !pv.has(e));

function gv(e) {
	const t = [];
	return mv.forEach(n => {
		const r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
	}), t
}
const sn = {
	width: ({
		x: e
	}, {
		paddingLeft: t = "0",
		paddingRight: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({
		y: e
	}, {
		paddingTop: t = "0",
		paddingBottom: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, {
		top: t
	}) => parseFloat(t),
	left: (e, {
		left: t
	}) => parseFloat(t),
	bottom: ({
		y: e
	}, {
		top: t
	}) => parseFloat(t) + (e.max - e.min),
	right: ({
		x: e
	}, {
		left: t
	}) => parseFloat(t) + (e.max - e.min),
	x: (e, {
		transform: t
	}) => Fa(t, "x"),
	y: (e, {
		transform: t
	}) => Fa(t, "y")
};
sn.translateX = sn.x;
sn.translateY = sn.y;
const on = new Set;
let Ra = !1,
	Va = !1,
	_a = !1;

function Lp() {
	if (Va) {
		const e = Array.from(on).filter(r => r.needsMeasurement),
			t = new Set(e.map(r => r.element)),
			n = new Map;
		t.forEach(r => {
			const i = gv(r);
			i.length && (n.set(r, i), r.render())
		}), e.forEach(r => r.measureInitialState()), t.forEach(r => {
			r.render();
			const i = n.get(r);
			i && i.forEach(([s, o]) => {
				var a;
				(a = r.getValue(s)) == null || a.set(o)
			})
		}), e.forEach(r => r.measureEndState()), e.forEach(r => {
			r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
		})
	}
	Va = !1, Ra = !1, on.forEach(e => e.complete(_a)), on.clear()
}

function Fp() {
	on.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (Va = !0)
	})
}

function yv() {
	_a = !0, Fp(), Lp(), _a = !1
}
class su {
	constructor(t, n, r, i, s, o = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (on.add(this), Ra || (Ra = !0, W.read(Fp), W.resolveKeyframes(Lp))) : (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i
		} = this;
		if (t[0] === null) {
			const s = i == null ? void 0 : i.get(),
				o = t[t.length - 1];
			if (s !== void 0) t[0] = s;
			else if (r && n) {
				const a = r.readValue(n, o);
				a != null && (t[0] = a)
			}
			t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
		}
		uv(t)
	}
	setFinalKeyframe() { }
	measureInitialState() { }
	renderEndStyles() { }
	measureEndState() { }
	complete(t = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), on.delete(this)
	}
	cancel() {
		this.state === "scheduled" && (on.delete(this), this.state = "pending")
	}
	resume() {
		this.state === "pending" && this.scheduleResolve()
	}
}
const vv = e => e.startsWith("--");

function xv(e, t, n) {
	vv(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const wv = Yl(() => window.ScrollTimeline !== void 0),
	Sv = {};

function kv(e, t) {
	const n = Yl(e);
	return () => Sv[t] ?? n()
}
const Rp = kv(() => {
	try {
		document.createElement("div").animate({
			opacity: 0
		}, {
			easing: "linear(0, 1)"
		})
	} catch {
		return !1
	}
	return !0
}, "linearEasing"),
	mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	bc = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: mr([0, .65, .55, 1]),
		circOut: mr([.55, 0, 1, .45]),
		backIn: mr([.31, .01, .66, -.59]),
		backOut: mr([.33, 1.53, .69, .99])
	};

function Vp(e, t) {
	if (e) return typeof e == "function" ? Rp() ? Mp(e, t) : "ease-out" : vp(e) ? mr(e) : Array.isArray(e) ? e.map(n => Vp(n, t) || bc.easeOut) : bc[e]
}

function Tv(e, t, n, {
	delay: r = 0,
	duration: i = 300,
	repeat: s = 0,
	repeatType: o = "loop",
	ease: a = "easeOut",
	times: l
} = {}, u = void 0) {
	const c = {
		[t]: n
	};
	l && (c.offset = l);
	const d = Vp(a, i);
	Array.isArray(d) && (c.easing = d);
	const f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: s + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return u && (f.pseudoElement = u), e.animate(c, f)
}

function _p(e) {
	return typeof e == "function" && "applyToOptions" in e
}

function Cv({
	type: e,
	...t
}) {
	return _p(e) && Rp() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
}
class Pv extends ru {
	constructor(t) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
		const {
			element: n,
			name: r,
			keyframes: i,
			pseudoElement: s,
			allowFlatten: o = !1,
			finalKeyframe: a,
			onComplete: l
		} = t;
		this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, ys(typeof t.type != "string");
		const u = Cv(t);
		this.animation = Tv(n, r, i, u, s), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !s) {
				const c = nu(i, this.options, a, this.speed);
				this.updateMotionValue ? this.updateMotionValue(c) : xv(n, r, c), this.animation.cancel()
			}
			l == null || l(), this.notifyFinished()
		}
	}
	play() {
		this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		var t, n;
		(n = (t = this.animation).finish) == null || n.call(t)
	}
	cancel() {
		try {
			this.animation.cancel()
		} catch { }
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		const {
			state: t
		} = this;
		t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
	}
	commitStyles() {
		var t, n;
		this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
	}
	get duration() {
		var n, r;
		const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
		return Be(Number(t))
	}
	get iterationDuration() {
		const {
			delay: t = 0
		} = this.options || {};
		return this.duration + Be(t)
	}
	get time() {
		return Be(Number(this.animation.currentTime) || 0)
	}
	set time(t) {
		this.finishedTime = null, this.animation.currentTime = st(t)
	}
	get speed() {
		return this.animation.playbackRate
	}
	set speed(t) {
		t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState
	}
	get startTime() {
		return Number(this.animation.startTime)
	}
	set startTime(t) {
		this.animation.startTime = t
	}
	attachTimeline({
		timeline: t,
		observe: n
	}) {
		var r;
		return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
			easing: "linear"
		})), this.animation.onfinish = null, t && wv() ? (this.animation.timeline = t, Ue) : n(this)
	}
}
const Ip = {
	anticipate: pp,
	backInOut: hp,
	circInOut: gp
};

function Ev(e) {
	return e in Ip
}

function Nv(e) {
	typeof e.ease == "string" && Ev(e.ease) && (e.ease = Ip[e.ease])
}
const Uc = 10;
class jv extends Pv {
	constructor(t) {
		Nv(t), Ap(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
	}
	updateMotionValue(t) {
		const {
			motionValue: n,
			onUpdate: r,
			onComplete: i,
			element: s,
			...o
		} = this.options;
		if (!n) return;
		if (t !== void 0) {
			n.set(t);
			return
		}
		const a = new iu({
			...o,
			autoplay: !1
		}),
			l = st(this.finishedTime ?? this.time);
		n.setWithVelocity(a.sample(l - Uc).value, a.sample(l).value, Uc), a.stop()
	}
}
const $c = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ot.test(e) || e === "0") && !e.startsWith("url("));

function Mv(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++)
		if (e[n] !== t) return !0
}

function Dv(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	const s = e[e.length - 1],
		o = $c(i, t),
		a = $c(s, t);
	return !o || !a ? !1 : Mv(e) || (n === "spring" || _p(n)) && r
}

function Ia(e) {
	e.duration = 0, e.type = "keyframes"
}
const Av = new Set(["opacity", "clipPath", "filter", "transform"]),
	Lv = Yl(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Fv(e) {
	var c;
	const {
		motionValue: t,
		name: n,
		repeatDelay: r,
		repeatType: i,
		damping: s,
		type: o
	} = e;
	if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement)) return !1;
	const {
		onUpdate: l,
		transformTemplate: u
	} = t.owner.getProps();
	return Lv() && n && Av.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Rv = 40;
class Vv extends ru {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = "keyframes",
		repeat: i = 0,
		repeatDelay: s = 0,
		repeatType: o = "loop",
		keyframes: a,
		name: l,
		motionValue: u,
		element: c,
		...d
	}) {
		var v;
		super(), this.stop = () => {
			var x, k;
			this._animation && (this._animation.stop(), (x = this.stopTimeline) == null || x.call(this)), (k = this.keyframeResolver) == null || k.cancel()
		}, this.createdAt = Pe.now();
		const f = {
			autoplay: t,
			delay: n,
			type: r,
			repeat: i,
			repeatDelay: s,
			repeatType: o,
			name: l,
			motionValue: u,
			element: c,
			...d
		},
			y = (c == null ? void 0 : c.KeyframeResolver) || su;
		this.keyframeResolver = new y(a, (x, k, p) => this.onKeyframesResolved(x, k, f, !p), l, u, c), (v = this.keyframeResolver) == null || v.scheduleResolve()
	}
	onKeyframesResolved(t, n, r, i) {
		this.keyframeResolver = void 0;
		const {
			name: s,
			type: o,
			velocity: a,
			delay: l,
			isHandoff: u,
			onUpdate: c
		} = r;
		this.resolvedAt = Pe.now(), Dv(t, s, o, a) || ((yt.instantAnimations || !l) && (c == null || c(nu(t, r, n))), t[0] = t[t.length - 1], Ia(r), r.repeat = 0);
		const f = {
			startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Rv ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
			finalKeyframe: n,
			...r,
			keyframes: t
		},
			y = !u && Fv(f) ? new jv({
				...f,
				element: f.motionValue.owner.current
			}) : new iu(f);
		y.finished.then(() => this.notifyFinished()).catch(Ue), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished
	}
	then(t, n) {
		return this.finished.finally(t).then(() => { })
	}
	get animation() {
		var t;
		return this._animation || ((t = this.keyframeResolver) == null || t.resume(), yv()), this._animation
	}
	get duration() {
		return this.animation.duration
	}
	get iterationDuration() {
		return this.animation.iterationDuration
	}
	get time() {
		return this.animation.time
	}
	set time(t) {
		this.animation.time = t
	}
	get speed() {
		return this.animation.speed
	}
	get state() {
		return this.animation.state
	}
	set speed(t) {
		this.animation.speed = t
	}
	get startTime() {
		return this.animation.startTime
	}
	attachTimeline(t) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
	}
	play() {
		this.animation.play()
	}
	pause() {
		this.animation.pause()
	}
	complete() {
		this.animation.complete()
	}
	cancel() {
		var t;
		this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
	}
}
const _v = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Iv(e) {
	const t = _v.exec(e);
	if (!t) return [,];
	const [, n, r, i] = t;
	return [`--${n ?? r}`, i]
}

function zp(e, t, n = 1) {
	const [r, i] = Iv(e);
	if (!r) return;
	const s = window.getComputedStyle(t).getPropertyValue(r);
	if (s) {
		const o = s.trim();
		return sp(o) ? parseFloat(o) : o
	}
	return Zl(i) ? zp(i, t, n + 1) : i
}

function ou(e, t) {
	return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Op = new Set(["width", "height", "top", "left", "right", "bottom", ...qn]),
	zv = {
		test: e => e === "auto",
		parse: e => e
	},
	Bp = e => t => t.test(e),
	bp = [Jn, F, ot, St, My, jy, zv],
	Wc = e => bp.find(Bp(e));

function Ov(e) {
	return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ap(e) : !0
}
const Bv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function bv(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Jl) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let s = Bv.has(t) ? 1 : 0;
	return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const Uv = /\b([a-z-]*)\(.*?\)/gu,
	za = {
		...Ot,
		getAnimatableNone: e => {
			const t = e.match(Uv);
			return t ? t.map(bv).join(" ") : e
		}
	},
	Hc = {
		...Jn,
		transform: Math.round
	},
	$v = {
		rotate: St,
		rotateX: St,
		rotateY: St,
		rotateZ: St,
		scale: ji,
		scaleX: ji,
		scaleY: ji,
		scaleZ: ji,
		skew: St,
		skewX: St,
		skewY: St,
		distance: F,
		translateX: F,
		translateY: F,
		translateZ: F,
		x: F,
		y: F,
		z: F,
		perspective: F,
		transformPerspective: F,
		opacity: Yr,
		originX: Lc,
		originY: Lc,
		originZ: F
	},
	au = {
		borderWidth: F,
		borderTopWidth: F,
		borderRightWidth: F,
		borderBottomWidth: F,
		borderLeftWidth: F,
		borderRadius: F,
		radius: F,
		borderTopLeftRadius: F,
		borderTopRightRadius: F,
		borderBottomRightRadius: F,
		borderBottomLeftRadius: F,
		width: F,
		maxWidth: F,
		height: F,
		maxHeight: F,
		top: F,
		right: F,
		bottom: F,
		left: F,
		padding: F,
		paddingTop: F,
		paddingRight: F,
		paddingBottom: F,
		paddingLeft: F,
		margin: F,
		marginTop: F,
		marginRight: F,
		marginBottom: F,
		marginLeft: F,
		backgroundPositionX: F,
		backgroundPositionY: F,
		...$v,
		zIndex: Hc,
		fillOpacity: Yr,
		strokeOpacity: Yr,
		numOctaves: Hc
	},
	Wv = {
		...au,
		color: te,
		backgroundColor: te,
		outlineColor: te,
		fill: te,
		stroke: te,
		borderColor: te,
		borderTopColor: te,
		borderRightColor: te,
		borderBottomColor: te,
		borderLeftColor: te,
		filter: za,
		WebkitFilter: za
	},
	Up = e => Wv[e];

function $p(e, t) {
	let n = Up(e);
	return n !== za && (n = Ot), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Hv = new Set(["auto", "none", "0"]);

function Kv(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i;) {
		const s = e[r];
		typeof s == "string" && !Hv.has(s) && Gr(s).values.length && (i = e[r]), r++
	}
	if (i && n)
		for (const s of t) e[s] = $p(n, i)
}
class Yv extends su {
	constructor(t, n, r, i, s) {
		super(t, n, r, i, s, !0)
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			element: n,
			name: r
		} = this;
		if (!n || !n.current) return;
		super.readKeyframes();
		for (let l = 0; l < t.length; l++) {
			let u = t[l];
			if (typeof u == "string" && (u = u.trim(), Zl(u))) {
				const c = zp(u, n.current);
				c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
			}
		}
		if (this.resolveNoneKeyframes(), !Op.has(r) || t.length !== 2) return;
		const [i, s] = t, o = Wc(i), a = Wc(s);
		if (o !== a)
			if (Bc(o) && Bc(a))
				for (let l = 0; l < t.length; l++) {
					const u = t[l];
					typeof u == "string" && (t[l] = parseFloat(u))
				} else sn[r] && (this.needsMeasurement = !0)
	}
	resolveNoneKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n
		} = this, r = [];
		for (let i = 0; i < t.length; i++)(t[i] === null || Ov(t[i])) && r.push(i);
		r.length && Kv(t, r, n)
	}
	measureInitialState() {
		const {
			element: t,
			unresolvedKeyframes: n,
			name: r
		} = this;
		if (!t || !t.current) return;
		r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = sn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1)
	}
	measureEndState() {
		var a;
		const {
			element: t,
			name: n,
			unresolvedKeyframes: r
		} = this;
		if (!t || !t.current) return;
		const i = t.getValue(n);
		i && i.jump(this.measuredOrigin, !1);
		const s = r.length - 1,
			o = r[s];
		r[s] = sn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
			t.getValue(l).set(u)
		}), this.resolveNoneKeyframes()
	}
}

function Gv(e, t, n) {
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		const i = document.querySelectorAll(e);
		return i ? Array.from(i) : []
	}
	return Array.from(e)
}
const Wp = (e, t) => t && typeof e == "number" ? t.transform(e) : e;

function Hp(e) {
	return op(e) && "offsetHeight" in e
}
const Kc = 30,
	Qv = e => !isNaN(parseFloat(e));
class Xv {
	constructor(t, n = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
			var s;
			const i = Pe.now();
			if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents))
				for (const o of this.dependents) o.dirty()
		}, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
	}
	setCurrent(t) {
		this.current = t, this.updatedAt = Pe.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Qv(this.current))
	}
	setPrevFrameValue(t = this.current) {
		this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
	}
	onChange(t) {
		return this.on("change", t)
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new Gl);
		const r = this.events[t].add(n);
		return t === "change" ? () => {
			r(), W.read(() => {
				this.events.change.getSize() || this.stop()
			})
		} : r
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear()
	}
	attach(t, n) {
		this.passiveEffect = t, this.stopPassiveEffect = n
	}
	set(t) {
		this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
	}
	setWithVelocity(t, n, r) {
		this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
	}
	jump(t, n = !0) {
		this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
	dirty() {
		var t;
		(t = this.events.change) == null || t.notify(this.current)
	}
	addDependent(t) {
		this.dependents || (this.dependents = new Set), this.dependents.add(t)
	}
	removeDependent(t) {
		this.dependents && this.dependents.delete(t)
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const t = Pe.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Kc) return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kc);
		return lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
	}
	start(t) {
		return this.stop(), new Promise(n => {
			this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
		})
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		var t, n;
		(t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
}

function Yn(e, t) {
	return new Xv(e, t)
}
const {
	schedule: lu,
	cancel: cS
} = xp(queueMicrotask, !1), Ye = {
	x: !1,
	y: !1
};

function Kp() {
	return Ye.x || Ye.y
}

function Zv(e) {
	return e === "x" || e === "y" ? Ye[e] ? null : (Ye[e] = !0, () => {
		Ye[e] = !1
	}) : Ye.x || Ye.y ? null : (Ye.x = Ye.y = !0, () => {
		Ye.x = Ye.y = !1
	})
}

function Yp(e, t) {
	const n = Gv(e),
		r = new AbortController,
		i = {
			passive: !0,
			...t,
			signal: r.signal
		};
	return [n, i, () => r.abort()]
}

function Yc(e) {
	return !(e.pointerType === "touch" || Kp())
}

function Jv(e, t, n = {}) {
	const [r, i, s] = Yp(e, n), o = a => {
		if (!Yc(a)) return;
		const {
			target: l
		} = a, u = t(l, a);
		if (typeof u != "function" || !l) return;
		const c = d => {
			Yc(d) && (u(d), l.removeEventListener("pointerleave", c))
		};
		l.addEventListener("pointerleave", c, i)
	};
	return r.forEach(a => {
		a.addEventListener("pointerenter", o, i)
	}), s
}
const Gp = (e, t) => t ? e === t ? !0 : Gp(e, t.parentElement) : !1,
	uu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
	qv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function e1(e) {
	return qv.has(e.tagName) || e.tabIndex !== -1
}
const Wi = new WeakSet;

function Gc(e) {
	return t => {
		t.key === "Enter" && e(t)
	}
}

function Co(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}))
}
const t1 = (e, t) => {
	const n = e.currentTarget;
	if (!n) return;
	const r = Gc(() => {
		if (Wi.has(n)) return;
		Co(n, "down");
		const i = Gc(() => {
			Co(n, "up")
		}),
			s = () => Co(n, "cancel");
		n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t)
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function Qc(e) {
	return uu(e) && !Kp()
}

function n1(e, t, n = {}) {
	const [r, i, s] = Yp(e, n), o = a => {
		const l = a.currentTarget;
		if (!Qc(a)) return;
		Wi.add(l);
		const u = t(l, a),
			c = (y, v) => {
				window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), Wi.has(l) && Wi.delete(l), Qc(y) && typeof u == "function" && u(y, {
					success: v
				})
			},
			d = y => {
				c(y, l === window || l === document || n.useGlobalTarget || Gp(l, y.target))
			},
			f = y => {
				c(y, !1)
			};
		window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", f, i)
	};
	return r.forEach(a => {
		(n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), Hp(a) && (a.addEventListener("focus", u => t1(u, i)), !e1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
	}), s
}

function Qp(e) {
	return op(e) && "ownerSVGElement" in e
}

function r1(e) {
	return Qp(e) && e.tagName === "svg"
}
const ge = e => !!(e && e.getVelocity),
	i1 = [...bp, te, Ot],
	s1 = e => i1.find(Bp(e)),
	cu = N.createContext({
		transformPagePoint: e => e,
		isStatic: !1,
		reducedMotion: "never"
	});

function Xc(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t)
}

function o1(...e) {
	return t => {
		let n = !1;
		const r = e.map(i => {
			const s = Xc(i, t);
			return !n && typeof s == "function" && (n = !0), s
		});
		if (n) return () => {
			for (let i = 0; i < r.length; i++) {
				const s = r[i];
				typeof s == "function" ? s() : Xc(e[i], null)
			}
		}
	}
}

function a1(...e) {
	return N.useCallback(o1(...e), e)
}
class l1 extends N.Component {
	getSnapshotBeforeUpdate(t) {
		const n = this.props.childRef.current;
		if (n && t.isPresent && !this.props.isPresent) {
			const r = n.offsetParent,
				i = Hp(r) && r.offsetWidth || 0,
				s = this.props.sizeRef.current;
			s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left
		}
		return null
	}
	componentDidUpdate() { }
	render() {
		return this.props.children
	}
}

function u1({
	children: e,
	isPresent: t,
	anchorX: n,
	root: r
}) {
	const i = N.useId(),
		s = N.useRef(null),
		o = N.useRef({
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			right: 0
		}),
		{
			nonce: a
		} = N.useContext(cu),
		l = a1(s, e == null ? void 0 : e.ref);
	return N.useInsertionEffect(() => {
		const {
			width: u,
			height: c,
			top: d,
			left: f,
			right: y
		} = o.current;
		if (t || !s.current || !u || !c) return;
		const v = n === "left" ? `left: ${f}` : `right: ${y}`;
		s.current.dataset.motionPopId = i;
		const x = document.createElement("style");
		a && (x.nonce = a);
		const k = r ?? document.head;
		return k.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${v}px !important;
            top: ${d}px !important;
          }
        `), () => {
				k.contains(x) && k.removeChild(x)
			}
	}, [t]), g.jsx(l1, {
		isPresent: t,
		childRef: s,
		sizeRef: o,
		children: N.cloneElement(e, {
			ref: l
		})
	})
}
const c1 = ({
	children: e,
	initial: t,
	isPresent: n,
	onExitComplete: r,
	custom: i,
	presenceAffectsLayout: s,
	mode: o,
	anchorX: a,
	root: l
}) => {
	const u = $l(d1),
		c = N.useId();
	let d = !0,
		f = N.useMemo(() => (d = !1, {
			id: c,
			initial: t,
			isPresent: n,
			custom: i,
			onExitComplete: y => {
				u.set(y, !0);
				for (const v of u.values())
					if (!v) return;
				r && r()
			},
			register: y => (u.set(y, !1), () => u.delete(y))
		}), [n, u, r]);
	return s && d && (f = {
		...f
	}), N.useMemo(() => {
		u.forEach((y, v) => u.set(v, !1))
	}, [n]), N.useEffect(() => {
		!n && !u.size && r && r()
	}, [n]), o === "popLayout" && (e = g.jsx(u1, {
		isPresent: n,
		anchorX: a,
		root: l,
		children: e
	})), g.jsx(bs.Provider, {
		value: f,
		children: e
	})
};

function d1() {
	return new Map
}

function Xp(e = !0) {
	const t = N.useContext(bs);
	if (t === null) return [!0, null];
	const {
		isPresent: n,
		onExitComplete: r,
		register: i
	} = t, s = N.useId();
	N.useEffect(() => {
		if (e) return i(s)
	}, [e]);
	const o = N.useCallback(() => e && r && r(s), [s, r, e]);
	return !n && r ? [!1, o] : [!0]
}
const Mi = e => e.key || "";

function Zc(e) {
	const t = [];
	return N.Children.forEach(e, n => {
		N.isValidElement(n) && t.push(n)
	}), t
}
const Ss = ({
	children: e,
	custom: t,
	initial: n = !0,
	onExitComplete: r,
	presenceAffectsLayout: i = !0,
	mode: s = "sync",
	propagate: o = !1,
	anchorX: a = "left",
	root: l
}) => {
	const [u, c] = Xp(o), d = N.useMemo(() => Zc(e), [e]), f = o && !u ? [] : d.map(Mi), y = N.useRef(!0), v = N.useRef(d), x = $l(() => new Map), [k, p] = N.useState(d), [h, m] = N.useState(d);
	ip(() => {
		y.current = !1, v.current = d;
		for (let C = 0; C < h.length; C++) {
			const E = Mi(h[C]);
			f.includes(E) ? x.delete(E) : x.get(E) !== !0 && x.set(E, !1)
		}
	}, [h, f.length, f.join("-")]);
	const w = [];
	if (d !== k) {
		let C = [...d];
		for (let E = 0; E < h.length; E++) {
			const T = h[E],
				V = Mi(T);
			f.includes(V) || (C.splice(E, 0, T), w.push(T))
		}
		return s === "wait" && w.length && (C = w), m(Zc(C)), p(d), null
	}
	const {
		forceRender: S
	} = N.useContext(Ul);
	return g.jsx(g.Fragment, {
		children: h.map(C => {
			const E = Mi(C),
				T = o && !u ? !1 : d === h || f.includes(E),
				V = () => {
					if (x.has(E)) x.set(E, !0);
					else return;
					let D = !0;
					x.forEach(ee => {
						ee || (D = !1)
					}), D && (S == null || S(), m(v.current), o && (c == null || c()), r && r())
				};
			return g.jsx(c1, {
				isPresent: T,
				initial: !y.current || n ? void 0 : !1,
				custom: t,
				presenceAffectsLayout: i,
				mode: s,
				root: l,
				onExitComplete: T ? void 0 : V,
				anchorX: a,
				children: C
			}, E)
		})
	})
},
	Zp = N.createContext({
		strict: !1
	}),
	Jc = {
		animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"]
	},
	Gn = {};
for (const e in Jc) Gn[e] = {
	isEnabled: t => Jc[e].some(n => !!t[n])
};

function f1(e) {
	for (const t in e) Gn[t] = {
		...Gn[t],
		...e[t]
	}
}
const h1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ks(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || h1.has(e)
}
let Jp = e => !ks(e);

function p1(e) {
	typeof e == "function" && (Jp = t => t.startsWith("on") ? !ks(t) : e(t))
}
try {
	p1(require("@emotion/is-prop-valid").default)
} catch { }

function m1(e, t, n) {
	const r = {};
	for (const i in e) i === "values" && typeof e.values == "object" || (Jp(i) || n === !0 && ks(i) || !t && !ks(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r
}
const Us = N.createContext({});

function $s(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Qr(e) {
	return typeof e == "string" || Array.isArray(e)
}
const du = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
	fu = ["initial", ...du];

function Ws(e) {
	return $s(e.animate) || fu.some(t => Qr(e[t]))
}

function qp(e) {
	return !!(Ws(e) || e.variants)
}

function g1(e, t) {
	if (Ws(e)) {
		const {
			initial: n,
			animate: r
		} = e;
		return {
			initial: n === !1 || Qr(n) ? n : void 0,
			animate: Qr(r) ? r : void 0
		}
	}
	return e.inherit !== !1 ? t : {}
}

function y1(e) {
	const {
		initial: t,
		animate: n
	} = g1(e, N.useContext(Us));
	return N.useMemo(() => ({
		initial: t,
		animate: n
	}), [qc(t), qc(n)])
}

function qc(e) {
	return Array.isArray(e) ? e.join(" ") : e
}

function ed(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const cr = {
	correct: (e, t) => {
		if (!t.target) return e;
		if (typeof e == "string")
			if (F.test(e)) e = parseFloat(e);
			else return e;
		const n = ed(e, t.target.x),
			r = ed(e, t.target.y);
		return `${n}% ${r}%`
	}
},
	v1 = {
		correct: (e, {
			treeScale: t,
			projectionDelta: n
		}) => {
			const r = e,
				i = Ot.parse(e);
			if (i.length > 5) return r;
			const s = Ot.createTransformer(e),
				o = typeof i[0] != "number" ? 1 : 0,
				a = n.x.scale * t.x,
				l = n.y.scale * t.y;
			i[0 + o] /= a, i[1 + o] /= l;
			const u = Y(a, l, .5);
			return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i)
		}
	},
	Oa = {
		borderRadius: {
			...cr,
			applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
		},
		borderTopLeftRadius: cr,
		borderTopRightRadius: cr,
		borderBottomLeftRadius: cr,
		borderBottomRightRadius: cr,
		boxShadow: v1
	};

function em(e, {
	layout: t,
	layoutId: n
}) {
	return er.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Oa[e] || e === "opacity")
}
const x1 = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
},
	w1 = qn.length;

function S1(e, t, n) {
	let r = "",
		i = !0;
	for (let s = 0; s < w1; s++) {
		const o = qn[s],
			a = e[o];
		if (a === void 0) continue;
		let l = !0;
		if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
			const u = Wp(a, au[o]);
			if (!l) {
				i = !1;
				const c = x1[o] || o;
				r += `${c}(${u}) `
			}
			n && (t[o] = u)
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function hu(e, t, n) {
	const {
		style: r,
		vars: i,
		transformOrigin: s
	} = e;
	let o = !1,
		a = !1;
	for (const l in t) {
		const u = t[l];
		if (er.has(l)) {
			o = !0;
			continue
		} else if (Sp(l)) {
			i[l] = u;
			continue
		} else {
			const c = Wp(u, au[l]);
			l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c
		}
	}
	if (t.transform || (o || n ? r.transform = S1(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
		const {
			originX: l = "50%",
			originY: u = "50%",
			originZ: c = 0
		} = s;
		r.transformOrigin = `${l} ${u} ${c}`
	}
}
const pu = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});

function tm(e, t, n) {
	for (const r in t) !ge(t[r]) && !em(r, n) && (e[r] = t[r])
}

function k1({
	transformTemplate: e
}, t) {
	return N.useMemo(() => {
		const n = pu();
		return hu(n, t, e), Object.assign({}, n.vars, n.style)
	}, [t])
}

function T1(e, t) {
	const n = e.style || {},
		r = {};
	return tm(r, n, e), Object.assign(r, k1(e, t)), r
}

function C1(e, t) {
	const n = {},
		r = T1(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const P1 = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
},
	E1 = {
		offset: "strokeDashoffset",
		array: "strokeDasharray"
	};

function N1(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const s = i ? P1 : E1;
	e[s.offset] = F.transform(-r);
	const o = F.transform(t),
		a = F.transform(n);
	e[s.array] = `${o} ${a}`
}

function nm(e, {
	attrX: t,
	attrY: n,
	attrScale: r,
	pathLength: i,
	pathSpacing: s = 1,
	pathOffset: o = 0,
	...a
}, l, u, c) {
	if (hu(e, a, u), l) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return
	}
	e.attrs = e.style, e.style = {};
	const {
		attrs: d,
		style: f
	} = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && N1(d, i, s, o, !1)
}
const rm = () => ({
	...pu(),
	attrs: {}
}),
	im = e => typeof e == "string" && e.toLowerCase() === "svg";

function j1(e, t, n, r) {
	const i = N.useMemo(() => {
		const s = rm();
		return nm(s, t, im(r), e.transformTemplate, e.style), {
			...s.attrs,
			style: {
				...s.style
			}
		}
	}, [t]);
	if (e.style) {
		const s = {};
		tm(s, e.style, e), i.style = {
			...s,
			...i.style
		}
	}
	return i
}
const M1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function mu(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(M1.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function D1(e, t, n, {
	latestValues: r
}, i, s = !1) {
	const a = (mu(e) ? j1 : C1)(t, r, i, e),
		l = m1(t, typeof e == "string", s),
		u = e !== N.Fragment ? {
			...l,
			...a,
			ref: n
		} : {},
		{
			children: c
		} = t,
		d = N.useMemo(() => ge(c) ? c.get() : c, [c]);
	return N.createElement(e, {
		...u,
		children: d
	})
}

function td(e) {
	const t = [{}, {}];
	return e == null || e.values.forEach((n, r) => {
		t[0][r] = n.get(), t[1][r] = n.getVelocity()
	}), t
}

function gu(e, t, n, r) {
	if (typeof t == "function") {
		const [i, s] = td(r);
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		const [i, s] = td(r);
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	return t
}

function Hi(e) {
	return ge(e) ? e.get() : e
}

function A1({
	scrapeMotionValuesFromProps: e,
	createRenderState: t
}, n, r, i) {
	return {
		latestValues: L1(n, r, i, e),
		renderState: t()
	}
}

function L1(e, t, n, r) {
	const i = {},
		s = r(e, {});
	for (const f in s) i[f] = Hi(s[f]);
	let {
		initial: o,
		animate: a
	} = e;
	const l = Ws(e),
		u = qp(e);
	t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || o === !1;
	const d = c ? a : o;
	if (d && typeof d != "boolean" && !$s(d)) {
		const f = Array.isArray(d) ? d : [d];
		for (let y = 0; y < f.length; y++) {
			const v = gu(e, f[y]);
			if (v) {
				const {
					transitionEnd: x,
					transition: k,
					...p
				} = v;
				for (const h in p) {
					let m = p[h];
					if (Array.isArray(m)) {
						const w = c ? m.length - 1 : 0;
						m = m[w]
					}
					m !== null && (i[h] = m)
				}
				for (const h in x) i[h] = x[h]
			}
		}
	}
	return i
}
const sm = e => (t, n) => {
	const r = N.useContext(Us),
		i = N.useContext(bs),
		s = () => A1(e, t, r, i);
	return n ? s() : $l(s)
};

function yu(e, t, n) {
	var s;
	const {
		style: r
	} = e, i = {};
	for (const o in r) (ge(r[o]) || t.style && ge(t.style[o]) || em(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
	return i
}
const F1 = sm({
	scrapeMotionValuesFromProps: yu,
	createRenderState: pu
});

function om(e, t, n) {
	const r = yu(e, t, n);
	for (const i in e)
		if (ge(e[i]) || ge(t[i])) {
			const s = qn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
			r[s] = e[i]
		} return r
}
const R1 = sm({
	scrapeMotionValuesFromProps: om,
	createRenderState: rm
}),
	V1 = Symbol.for("motionComponentSymbol");

function Mn(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function _1(e, t, n) {
	return N.useCallback(r => {
		r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r))
	}, [t])
}
const vu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	I1 = "framerAppearId",
	am = "data-" + vu(I1),
	lm = N.createContext({});

function z1(e, t, n, r, i) {
	var x, k;
	const {
		visualElement: s
	} = N.useContext(Us), o = N.useContext(Zp), a = N.useContext(bs), l = N.useContext(cu).reducedMotion, u = N.useRef(null);
	r = r || o.renderer, !u.current && r && (u.current = r(e, {
		visualState: t,
		parent: s,
		props: n,
		presenceContext: a,
		blockInitialAnimation: a ? a.initial === !1 : !1,
		reducedMotionConfig: l
	}));
	const c = u.current,
		d = N.useContext(lm);
	c && !c.projection && i && (c.type === "html" || c.type === "svg") && O1(u.current, n, i, d);
	const f = N.useRef(!1);
	N.useInsertionEffect(() => {
		c && f.current && c.update(n, a)
	});
	const y = n[am],
		v = N.useRef(!!y && !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) && ((k = window.MotionHasOptimisedAnimation) == null ? void 0 : k.call(window, y)));
	return ip(() => {
		c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), v.current && c.animationState && c.animationState.animateChanges())
	}), N.useEffect(() => {
		c && (!v.current && c.animationState && c.animationState.animateChanges(), v.current && (queueMicrotask(() => {
			var p;
			(p = window.MotionHandoffMarkAsComplete) == null || p.call(window, y)
		}), v.current = !1), c.enteringChildren = void 0)
	}), c
}

function O1(e, t, n, r) {
	const {
		layoutId: i,
		layout: s,
		drag: o,
		dragConstraints: a,
		layoutScroll: l,
		layoutRoot: u,
		layoutCrossfade: c
	} = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : um(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: s,
		alwaysMeasureLayout: !!o || a && Mn(a),
		visualElement: e,
		animationType: typeof s == "string" ? s : "both",
		initialPromotionConfig: r,
		crossfade: c,
		layoutScroll: l,
		layoutRoot: u
	})
}

function um(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : um(e.parent)
}

function Po(e, {
	forwardMotionProps: t = !1
} = {}, n, r) {
	n && f1(n);
	const i = mu(e) ? R1 : F1;

	function s(a, l) {
		let u;
		const c = {
			...N.useContext(cu),
			...a,
			layoutId: B1(a)
		},
			{
				isStatic: d
			} = c,
			f = y1(a),
			y = i(a, d);
		if (!d && Wl) {
			b1();
			const v = U1(c);
			u = v.MeasureLayout, f.visualElement = z1(e, y, c, r, v.ProjectionNode)
		}
		return g.jsxs(Us.Provider, {
			value: f,
			children: [u && f.visualElement ? g.jsx(u, {
				visualElement: f.visualElement,
				...c
			}) : null, D1(e, a, _1(y, f.visualElement, l), y, d, t)]
		})
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	const o = N.forwardRef(s);
	return o[V1] = e, o
}

function B1({
	layoutId: e
}) {
	const t = N.useContext(Ul).id;
	return t && e !== void 0 ? t + "-" + e : e
}

function b1(e, t) {
	N.useContext(Zp).strict
}

function U1(e) {
	const {
		drag: t,
		layout: n
	} = Gn;
	if (!t && !n) return {};
	const r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	}
}

function $1(e, t) {
	if (typeof Proxy > "u") return Po;
	const n = new Map,
		r = (s, o) => Po(s, o, e, t),
		i = (s, o) => r(s, o);
	return new Proxy(i, {
		get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, Po(o, void 0, e, t)), n.get(o))
	})
}

function cm({
	top: e,
	left: t,
	right: n,
	bottom: r
}) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	}
}

function W1({
	x: e,
	y: t
}) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	}
}

function H1(e, t) {
	if (!t) return e;
	const n = t({
		x: e.left,
		y: e.top
	}),
		r = t({
			x: e.right,
			y: e.bottom
		});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	}
}

function Eo(e) {
	return e === void 0 || e === 1
}

function Ba({
	scale: e,
	scaleX: t,
	scaleY: n
}) {
	return !Eo(e) || !Eo(t) || !Eo(n)
}

function Xt(e) {
	return Ba(e) || dm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function dm(e) {
	return nd(e.x) || nd(e.y)
}

function nd(e) {
	return e && e !== "0%"
}

function Ts(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i
}

function rd(e, t, n, r, i) {
	return i !== void 0 && (e = Ts(e, i, r)), Ts(e, n, r) + t
}

function ba(e, t = 0, n = 1, r, i) {
	e.min = rd(e.min, t, n, r, i), e.max = rd(e.max, t, n, r, i)
}

function fm(e, {
	x: t,
	y: n
}) {
	ba(e.x, t.translate, t.scale, t.originPoint), ba(e.y, n.translate, n.scale, n.originPoint)
}
const id = .999999999999,
	sd = 1.0000000000001;

function K1(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let s, o;
	for (let a = 0; a < i; a++) {
		s = n[a], o = s.projectionDelta;
		const {
			visualElement: l
		} = s.options;
		l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && An(e, {
			x: -s.scroll.offset.x,
			y: -s.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, fm(e, o)), r && Xt(s.latestValues) && An(e, s.latestValues))
	}
	t.x < sd && t.x > id && (t.x = 1), t.y < sd && t.y > id && (t.y = 1)
}

function Dn(e, t) {
	e.min = e.min + t, e.max = e.max + t
}

function od(e, t, n, r, i = .5) {
	const s = Y(e.min, e.max, i);
	ba(e, t, n, s, r)
}

function An(e, t) {
	od(e.x, t.x, t.scaleX, t.scale, t.originX), od(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function hm(e, t) {
	return cm(H1(e.getBoundingClientRect(), t))
}

function Y1(e, t, n) {
	const r = hm(e, n),
		{
			scroll: i
		} = t;
	return i && (Dn(r.x, i.offset.x), Dn(r.y, i.offset.y)), r
}
const ad = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}),
	Ln = () => ({
		x: ad(),
		y: ad()
	}),
	ld = () => ({
		min: 0,
		max: 0
	}),
	re = () => ({
		x: ld(),
		y: ld()
	}),
	Ua = {
		current: null
	},
	pm = {
		current: !1
	};

function G1() {
	if (pm.current = !0, !!Wl)
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => Ua.current = e.matches;
			e.addEventListener("change", t), t()
		} else Ua.current = !1
}
const Q1 = new WeakMap;

function X1(e, t, n) {
	for (const r in t) {
		const i = t[r],
			s = n[r];
		if (ge(i)) e.addValue(r, i);
		else if (ge(s)) e.addValue(r, Yn(i, {
			owner: e
		}));
		else if (s !== i)
			if (e.hasValue(r)) {
				const o = e.getValue(r);
				o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
			} else {
				const o = e.getStaticValue(r);
				e.addValue(r, Yn(o !== void 0 ? o : i, {
					owner: e
				}))
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r);
	return t
}
const ud = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Z1 {
	scrapeMotionValuesFromProps(t, n, r) {
		return {}
	}
	constructor({
		parent: t,
		props: n,
		presenceContext: r,
		reducedMotionConfig: i,
		blockInitialAnimation: s,
		visualState: o
	}, a = {}) {
		this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = su, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			const f = Pe.now();
			this.renderScheduledAt < f && (this.renderScheduledAt = f, W.render(this.render, !1, !0))
		};
		const {
			latestValues: l,
			renderState: u
		} = o;
		this.latestValues = l, this.baseTarget = {
			...l
		}, this.initialValues = n.initial ? {
			...l
		} : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Ws(n), this.isVariantNode = qp(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
		const {
			willChange: c,
			...d
		} = this.scrapeMotionValuesFromProps(n, {}, this);
		for (const f in d) {
			const y = d[f];
			l[f] !== void 0 && ge(y) && y.set(l[f])
		}
	}
	mount(t) {
		var n;
		this.current = t, Q1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), pm.current || G1(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ua.current, (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext)
	}
	unmount() {
		var t;
		this.projection && this.projection.unmount(), zt(this.notifyUpdate), zt(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
		for (const n in this.events) this.events[n].clear();
		for (const n in this.features) {
			const r = this.features[n];
			r && (r.unmount(), r.isMounted = !1)
		}
		this.current = null
	}
	addChild(t) {
		this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
	}
	removeChild(t) {
		this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
	}
	bindToMotionValue(t, n) {
		this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
		const r = er.has(t);
		r && this.onBindTransform && this.onBindTransform();
		const i = n.on("change", o => {
			this.latestValues[t] = o, this.props.onUpdate && W.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
		});
		let s;
		window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
			i(), s && s(), n.owner && n.stop()
		})
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
	}
	updateFeatures() {
		let t = "animation";
		for (t in Gn) {
			const n = Gn[t];
			if (!n) continue;
			const {
				isEnabled: r,
				Feature: i
			} = n;
			if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
				const s = this.features[t];
				s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : re()
	}
	getStaticValue(t) {
		return this.latestValues[t]
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
		for (let r = 0; r < ud.length; r++) {
			const i = ud[r];
			this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
			const s = "on" + i,
				o = t[s];
			o && (this.propEventSubscriptions[i] = this.on(i, o))
		}
		this.prevMotionValues = X1(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
	}
	getProps() {
		return this.props
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
	}
	hasValue(t) {
		return this.values.has(t)
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return r === void 0 && n !== void 0 && (r = Yn(n === null ? void 0 : n, {
			owner: this
		}), this.addValue(t, r)), r
	}
	readValue(t, n) {
		let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
		return r != null && (typeof r == "string" && (sp(r) || ap(r)) ? r = parseFloat(r) : !s1(r) && Ot.test(n) && (r = $p(t, n)), this.setBaseTarget(t, ge(r) ? r.get() : r)), ge(r) ? r.get() : r
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n
	}
	getBaseTarget(t) {
		var s;
		const {
			initial: n
		} = this.props;
		let r;
		if (typeof n == "string" || typeof n == "object") {
			const o = gu(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
			o && (r = o[t])
		}
		if (n && r !== void 0) return r;
		const i = this.getBaseTargetFromProps(this.props, t);
		return i !== void 0 && !ge(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new Gl), this.events[t].add(n)
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n)
	}
	scheduleRenderMicrotask() {
		lu.render(this.render)
	}
}
class mm extends Z1 {
	constructor() {
		super(...arguments), this.KeyframeResolver = Yv
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0
	}
	removeValueFromRenderState(t, {
		vars: n,
		style: r
	}) {
		delete n[t], delete r[t]
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const {
			children: t
		} = this.props;
		ge(t) && (this.childSubscription = t.on("change", n => {
			this.current && (this.current.textContent = `${n}`)
		}))
	}
}

function gm(e, {
	style: t,
	vars: n
}, r, i) {
	const s = e.style;
	let o;
	for (o in t) s[o] = t[o];
	i == null || i.applyProjectionStyles(s, r);
	for (o in n) s.setProperty(o, n[o])
}

function J1(e) {
	return window.getComputedStyle(e)
}
class q1 extends mm {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = gm
	}
	readValueFromInstance(t, n) {
		var r;
		if (er.has(n)) return (r = this.projection) != null && r.isProjecting ? La(n) : fv(t, n);
		{
			const i = J1(t),
				s = (Sp(n) ? i.getPropertyValue(n) : i[n]) || 0;
			return typeof s == "string" ? s.trim() : s
		}
	}
	measureInstanceViewportBox(t, {
		transformPagePoint: n
	}) {
		return hm(t, n)
	}
	build(t, n, r) {
		hu(t, n, r.transformTemplate)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return yu(t, n, r)
	}
}
const ym = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function ex(e, t, n, r) {
	gm(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(ym.has(i) ? i : vu(i), t.attrs[i])
}
class tx extends mm {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = re
	}
	getBaseTargetFromProps(t, n) {
		return t[n]
	}
	readValueFromInstance(t, n) {
		if (er.has(n)) {
			const r = Up(n);
			return r && r.default || 0
		}
		return n = ym.has(n) ? n : vu(n), t.getAttribute(n)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return om(t, n, r)
	}
	build(t, n, r) {
		nm(t, n, this.isSVGTag, r.transformTemplate, r.style)
	}
	renderInstance(t, n, r, i) {
		ex(t, n, r, i)
	}
	mount(t) {
		this.isSVGTag = im(t.tagName), super.mount(t)
	}
}
const nx = (e, t) => mu(e) ? new tx(t) : new q1(t, {
	allowProjection: e !== N.Fragment
});

function On(e, t, n) {
	const r = e.getProps();
	return gu(r, t, n !== void 0 ? n : r.custom, e)
}
const $a = e => Array.isArray(e);

function rx(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yn(n))
}

function ix(e) {
	return $a(e) ? e[e.length - 1] || 0 : e
}

function sx(e, t) {
	const n = On(e, t);
	let {
		transitionEnd: r = {},
		transition: i = {},
		...s
	} = n || {};
	s = {
		...s,
		...r
	};
	for (const o in s) {
		const a = ix(s[o]);
		rx(e, o, a)
	}
}

function ox(e) {
	return !!(ge(e) && e.add)
}

function Wa(e, t) {
	const n = e.getValue("willChange");
	if (ox(n)) return n.add(t);
	if (!n && yt.WillChange) {
		const r = new yt.WillChange("auto");
		e.addValue("willChange", r), r.add(t)
	}
}

function vm(e) {
	return e.props[am]
}
const ax = e => e !== null;

function lx(e, {
	repeat: t,
	repeatType: n = "loop"
}, r) {
	const i = e.filter(ax),
		s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
	return !s || r === void 0 ? i[s] : r
}
const ux = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
},
	cx = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	dx = {
		type: "keyframes",
		duration: .8
	},
	fx = {
		type: "keyframes",
		ease: [.25, .1, .35, 1],
		duration: .3
	},
	hx = (e, {
		keyframes: t
	}) => t.length > 2 ? dx : er.has(e) ? e.startsWith("scale") ? cx(t[1]) : ux : fx;

function px({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: s,
	repeatType: o,
	repeatDelay: a,
	from: l,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length
}
const xu = (e, t, n, r = {}, i, s) => o => {
	const a = ou(r, e) || {},
		l = a.delay || r.delay || 0;
	let {
		elapsed: u = 0
	} = r;
	u = u - st(l);
	const c = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...a,
		delay: -u,
		onUpdate: f => {
			t.set(f), a.onUpdate && a.onUpdate(f)
		},
		onComplete: () => {
			o(), a.onComplete && a.onComplete()
		},
		name: e,
		motionValue: t,
		element: s ? void 0 : i
	};
	px(a) || Object.assign(c, hx(e, c)), c.duration && (c.duration = st(c.duration)), c.repeatDelay && (c.repeatDelay = st(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
	let d = !1;
	if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Ia(c), c.delay === 0 && (d = !0)), (yt.instantAnimations || yt.skipAnimations) && (d = !0, Ia(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !s && t.get() !== void 0) {
		const f = lx(c.keyframes, a);
		if (f !== void 0) {
			W.update(() => {
				c.onUpdate(f), c.onComplete()
			});
			return
		}
	}
	return a.isSync ? new iu(c) : new Vv(c)
};

function mx({
	protectedKeys: e,
	needsAnimating: t
}, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r
}

function xm(e, t, {
	delay: n = 0,
	transitionOverride: r,
	type: i
} = {}) {
	let {
		transition: s = e.getDefaultTransition(),
		transitionEnd: o,
		...a
	} = t;
	r && (s = r);
	const l = [],
		u = i && e.animationState && e.animationState.getState()[i];
	for (const c in a) {
		const d = e.getValue(c, e.latestValues[c] ?? null),
			f = a[c];
		if (f === void 0 || u && mx(u, c)) continue;
		const y = {
			delay: n,
			...ou(s || {}, c)
		},
			v = d.get();
		if (v !== void 0 && !d.isAnimating && !Array.isArray(f) && f === v && !y.velocity) continue;
		let x = !1;
		if (window.MotionHandoffAnimation) {
			const p = vm(e);
			if (p) {
				const h = window.MotionHandoffAnimation(p, c, W);
				h !== null && (y.startTime = h, x = !0)
			}
		}
		Wa(e, c), d.start(xu(c, d, f, e.shouldReduceMotion && Op.has(c) ? {
			type: !1
		} : y, e, x));
		const k = d.animation;
		k && l.push(k)
	}
	return o && Promise.all(l).then(() => {
		W.update(() => {
			o && sx(e, o)
		})
	}), l
}

function wm(e, t, n, r = 0, i = 1) {
	const s = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t),
		o = e.size,
		a = (o - 1) * r;
	return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}

function Ha(e, t, n = {}) {
	var l;
	const r = On(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
	let {
		transition: i = e.getDefaultTransition() || {}
	} = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	const s = r ? () => Promise.all(xm(e, r, n)) : () => Promise.resolve(),
		o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
			const {
				delayChildren: c = 0,
				staggerChildren: d,
				staggerDirection: f
			} = i;
			return gx(e, t, u, c, d, f, n)
		} : () => Promise.resolve(),
		{
			when: a
		} = i;
	if (a) {
		const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
		return u().then(() => c())
	} else return Promise.all([s(), o(n.delay)])
}

function gx(e, t, n = 0, r = 0, i = 0, s = 1, o) {
	const a = [];
	for (const l of e.variantChildren) l.notify("AnimationStart", t), a.push(Ha(l, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + wm(e.variantChildren, l, r, i, s)
	}).then(() => l.notify("AnimationComplete", t)));
	return Promise.all(a)
}

function yx(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map(s => Ha(e, s, n));
		r = Promise.all(i)
	} else if (typeof t == "string") r = Ha(e, t, n);
	else {
		const i = typeof t == "function" ? On(e, t, n.custom) : t;
		r = Promise.all(xm(e, i, n))
	}
	return r.then(() => {
		e.notify("AnimationComplete", t)
	})
}

function Sm(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++)
		if (t[r] !== e[r]) return !1;
	return !0
}
const vx = fu.length;

function km(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const n = e.parent ? km(e.parent) || {} : {};
		return e.props.initial !== void 0 && (n.initial = e.props.initial), n
	}
	const t = {};
	for (let n = 0; n < vx; n++) {
		const r = fu[n],
			i = e.props[r];
		(Qr(i) || i === !1) && (t[r] = i)
	}
	return t
}
const xx = [...du].reverse(),
	wx = du.length;

function Sx(e) {
	return t => Promise.all(t.map(({
		animation: n,
		options: r
	}) => yx(e, n, r)))
}

function kx(e) {
	let t = Sx(e),
		n = cd(),
		r = !0;
	const i = l => (u, c) => {
		var f;
		const d = On(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
		if (d) {
			const {
				transition: y,
				transitionEnd: v,
				...x
			} = d;
			u = {
				...u,
				...x,
				...v
			}
		}
		return u
	};

	function s(l) {
		t = l(e)
	}

	function o(l) {
		const {
			props: u
		} = e, c = km(e.parent) || {}, d = [], f = new Set;
		let y = {},
			v = 1 / 0;
		for (let k = 0; k < wx; k++) {
			const p = xx[k],
				h = n[p],
				m = u[p] !== void 0 ? u[p] : c[p],
				w = Qr(m),
				S = p === l ? h.isActive : null;
			S === !1 && (v = k);
			let C = m === c[p] && m !== u[p] && w;
			if (C && r && e.manuallyAnimateOnMount && (C = !1), h.protectedKeys = {
				...y
			}, !h.isActive && S === null || !m && !h.prevProp || $s(m) || typeof m == "boolean") continue;
			const E = Tx(h.prevProp, m);
			let T = E || p === l && h.isActive && !C && w || k > v && w,
				V = !1;
			const D = Array.isArray(m) ? m : [m];
			let ee = D.reduce(i(p), {});
			S === !1 && (ee = {});
			const {
				prevResolvedValues: xt = {}
			} = h, Wt = {
				...xt,
				...ee
			}, tr = J => {
				T = !0, f.has(J) && (V = !0, f.delete(J)), h.needsAnimating[J] = !0;
				const j = e.getValue(J);
				j && (j.liveStyle = !1)
			};
			for (const J in Wt) {
				const j = ee[J],
					A = xt[J];
				if (y.hasOwnProperty(J)) continue;
				let R = !1;
				$a(j) && $a(A) ? R = !Sm(j, A) : R = j !== A, R ? j != null ? tr(J) : f.add(J) : j !== void 0 && f.has(J) ? tr(J) : h.protectedKeys[J] = !0
			}
			h.prevProp = m, h.prevResolvedValues = ee, h.isActive && (y = {
				...y,
				...ee
			}), r && e.blockInitialAnimation && (T = !1);
			const oi = C && E;
			T && (!oi || V) && d.push(...D.map(J => {
				const j = {
					type: p
				};
				if (typeof J == "string" && r && !oi && e.manuallyAnimateOnMount && e.parent) {
					const {
						parent: A
					} = e, R = On(A, J);
					if (A.enteringChildren && R) {
						const {
							delayChildren: H
						} = R.transition || {};
						j.delay = wm(A.enteringChildren, e, H)
					}
				}
				return {
					animation: J,
					options: j
				}
			}))
		}
		if (f.size) {
			const k = {};
			if (typeof u.initial != "boolean") {
				const p = On(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
				p && p.transition && (k.transition = p.transition)
			}
			f.forEach(p => {
				const h = e.getBaseTarget(p),
					m = e.getValue(p);
				m && (m.liveStyle = !0), k[p] = h ?? null
			}), d.push({
				animation: k
			})
		}
		let x = !!d.length;
		return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(d) : Promise.resolve()
	}

	function a(l, u) {
		var d;
		if (n[l].isActive === u) return Promise.resolve();
		(d = e.variantChildren) == null || d.forEach(f => {
			var y;
			return (y = f.animationState) == null ? void 0 : y.setActive(l, u)
		}), n[l].isActive = u;
		const c = o(l);
		for (const f in n) n[f].protectedKeys = {};
		return c
	}
	return {
		animateChanges: o,
		setActive: a,
		setAnimateFunction: s,
		getState: () => n,
		reset: () => {
			n = cd()
		}
	}
}

function Tx(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sm(t, e) : !1
}

function Yt(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	}
}

function cd() {
	return {
		animate: Yt(!0),
		whileInView: Yt(),
		whileHover: Yt(),
		whileTap: Yt(),
		whileDrag: Yt(),
		whileFocus: Yt(),
		exit: Yt()
	}
}
class $t {
	constructor(t) {
		this.isMounted = !1, this.node = t
	}
	update() { }
}
class Cx extends $t {
	constructor(t) {
		super(t), t.animationState || (t.animationState = kx(t))
	}
	updateAnimationControlsSubscription() {
		const {
			animate: t
		} = this.node.getProps();
		$s(t) && (this.unmountControls = t.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const {
			animate: t
		} = this.node.getProps(), {
			animate: n
		} = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var t;
		this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
	}
}
let Px = 0;
class Ex extends $t {
	constructor() {
		super(...arguments), this.id = Px++
	}
	update() {
		if (!this.node.presenceContext) return;
		const {
			isPresent: t,
			onExitComplete: n
		} = this.node.presenceContext, {
			isPresent: r
		} = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		const i = this.node.animationState.setActive("exit", !t);
		n && !t && i.then(() => {
			n(this.id)
		})
	}
	mount() {
		const {
			register: t,
			onExitComplete: n
		} = this.node.presenceContext || {};
		n && n(this.id), t && (this.unmount = t(this.id))
	}
	unmount() { }
}
const Nx = {
	animation: {
		Feature: Cx
	},
	exit: {
		Feature: Ex
	}
};

function Xr(e, t, n, r = {
	passive: !0
}) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function si(e) {
	return {
		point: {
			x: e.pageX,
			y: e.pageY
		}
	}
}
const jx = e => t => uu(t) && e(t, si(t));

function Nr(e, t, n, r) {
	return Xr(e, t, jx(n), r)
}
const Tm = 1e-4,
	Mx = 1 - Tm,
	Dx = 1 + Tm,
	Cm = .01,
	Ax = 0 - Cm,
	Lx = 0 + Cm;

function xe(e) {
	return e.max - e.min
}

function Fx(e, t, n) {
	return Math.abs(e - t) <= n
}

function dd(e, t, n, r = .5) {
	e.origin = r, e.originPoint = Y(t.min, t.max, e.origin), e.scale = xe(n) / xe(t), e.translate = Y(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Mx && e.scale <= Dx || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ax && e.translate <= Lx || isNaN(e.translate)) && (e.translate = 0)
}

function jr(e, t, n, r) {
	dd(e.x, t.x, n.x, r ? r.originX : void 0), dd(e.y, t.y, n.y, r ? r.originY : void 0)
}

function fd(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + xe(t)
}

function Rx(e, t, n) {
	fd(e.x, t.x, n.x), fd(e.y, t.y, n.y)
}

function hd(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + xe(t)
}

function Cs(e, t, n) {
	hd(e.x, t.x, n.x), hd(e.y, t.y, n.y)
}

function _e(e) {
	return [e("x"), e("y")]
}
const Pm = ({
	current: e
}) => e ? e.ownerDocument.defaultView : null,
	pd = (e, t) => Math.abs(e - t);

function Vx(e, t) {
	const n = pd(e.x, t.x),
		r = pd(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2)
}
class Em {
	constructor(t, n, {
		transformPagePoint: r,
		contextWindow: i = window,
		dragSnapToOrigin: s = !1,
		distanceThreshold: o = 3
	} = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const f = jo(this.lastMoveEventInfo, this.history),
				y = this.startEvent !== null,
				v = Vx(f.offset, {
					x: 0,
					y: 0
				}) >= this.distanceThreshold;
			if (!y && !v) return;
			const {
				point: x
			} = f, {
				timestamp: k
			} = ce;
			this.history.push({
				...x,
				timestamp: k
			});
			const {
				onStart: p,
				onMove: h
			} = this.handlers;
			y || (p && p(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, f)
		}, this.handlePointerMove = (f, y) => {
			this.lastMoveEvent = f, this.lastMoveEventInfo = No(y, this.transformPagePoint), W.update(this.updatePoint, !0)
		}, this.handlePointerUp = (f, y) => {
			this.end();
			const {
				onEnd: v,
				onSessionEnd: x,
				resumeAnimation: k
			} = this.handlers;
			if (this.dragSnapToOrigin && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const p = jo(f.type === "pointercancel" ? this.lastMoveEventInfo : No(y, this.transformPagePoint), this.history);
			this.startEvent && v && v(f, p), x && x(f, p)
		}, !uu(t)) return;
		this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
		const a = si(t),
			l = No(a, this.transformPagePoint),
			{
				point: u
			} = l,
			{
				timestamp: c
			} = ce;
		this.history = [{
			...u,
			timestamp: c
		}];
		const {
			onSessionStart: d
		} = n;
		d && d(t, jo(l, this.history)), this.removeListeners = ni(Nr(this.contextWindow, "pointermove", this.handlePointerMove), Nr(this.contextWindow, "pointerup", this.handlePointerUp), Nr(this.contextWindow, "pointercancel", this.handlePointerUp))
	}
	updateHandlers(t) {
		this.handlers = t
	}
	end() {
		this.removeListeners && this.removeListeners(), zt(this.updatePoint)
	}
}

function No(e, t) {
	return t ? {
		point: t(e.point)
	} : e
}

function md(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	}
}

function jo({
	point: e
}, t) {
	return {
		point: e,
		delta: md(e, Nm(t)),
		offset: md(e, _x(t)),
		velocity: Ix(t, .1)
	}
}

function _x(e) {
	return e[0]
}

function Nm(e) {
	return e[e.length - 1]
}

function Ix(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1,
		r = null;
	const i = Nm(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > st(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	const s = Be(i.timestamp - r.timestamp);
	if (s === 0) return {
		x: 0,
		y: 0
	};
	const o = {
		x: (i.x - r.x) / s,
		y: (i.y - r.y) / s
	};
	return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function zx(e, {
	min: t,
	max: n
}, r) {
	return t !== void 0 && e < t ? e = r ? Y(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Y(n, e, r.max) : Math.min(e, n)), e
}

function gd(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
	}
}

function Ox(e, {
	top: t,
	left: n,
	bottom: r,
	right: i
}) {
	return {
		x: gd(e.x, n, i),
		y: gd(e.y, t, r)
	}
}

function yd(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	}
}

function Bx(e, t) {
	return {
		x: yd(e.x, t.x),
		y: yd(e.y, t.y)
	}
}

function bx(e, t) {
	let n = .5;
	const r = xe(e),
		i = xe(t);
	return i > r ? n = Kr(t.min, t.max - r, e.min) : r > i && (n = Kr(e.min, e.max - i, t.min)), gt(0, 1, n)
}

function Ux(e, t) {
	const n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Ka = .35;

function $x(e = Ka) {
	return e === !1 ? e = 0 : e === !0 && (e = Ka), {
		x: vd(e, "left", "right"),
		y: vd(e, "top", "bottom")
	}
}

function vd(e, t, n) {
	return {
		min: xd(e, t),
		max: xd(e, n)
	}
}

function xd(e, t) {
	return typeof e == "number" ? e : e[t] || 0
}
const Wx = new WeakMap;
class Hx {
	constructor(t) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = re(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
	}
	start(t, {
		snapToCursor: n = !1,
		distanceThreshold: r
	} = {}) {
		const {
			presenceContext: i
		} = this.visualElement;
		if (i && i.isPresent === !1) return;
		const s = d => {
			const {
				dragSnapToOrigin: f
			} = this.getProps();
			f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(si(d).point)
		},
			o = (d, f) => {
				const {
					drag: y,
					dragPropagation: v,
					onDragStart: x
				} = this.getProps();
				if (y && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = Zv(y), !this.openDragLock)) return;
				this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _e(p => {
					let h = this.getAxisMotionValue(p).get() || 0;
					if (ot.test(h)) {
						const {
							projection: m
						} = this.visualElement;
						if (m && m.layout) {
							const w = m.layout.layoutBox[p];
							w && (h = xe(w) * (parseFloat(h) / 100))
						}
					}
					this.originPoint[p] = h
				}), x && W.postRender(() => x(d, f)), Wa(this.visualElement, "transform");
				const {
					animationState: k
				} = this.visualElement;
				k && k.setActive("whileDrag", !0)
			},
			a = (d, f) => {
				this.latestPointerEvent = d, this.latestPanInfo = f;
				const {
					dragPropagation: y,
					dragDirectionLock: v,
					onDirectionLock: x,
					onDrag: k
				} = this.getProps();
				if (!y && !this.openDragLock) return;
				const {
					offset: p
				} = f;
				if (v && this.currentDirection === null) {
					this.currentDirection = Kx(p), this.currentDirection !== null && x && x(this.currentDirection);
					return
				}
				this.updateAxis("x", f.point, p), this.updateAxis("y", f.point, p), this.visualElement.render(), k && k(d, f)
			},
			l = (d, f) => {
				this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null
			},
			u = () => _e(d => {
				var f;
				return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play())
			}),
			{
				dragSnapToOrigin: c
			} = this.getProps();
		this.panSession = new Em(t, {
			onSessionStart: s,
			onStart: o,
			onMove: a,
			onSessionEnd: l,
			resumeAnimation: u
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			distanceThreshold: r,
			contextWindow: Pm(this.visualElement)
		})
	}
	stop(t, n) {
		const r = t || this.latestPointerEvent,
			i = n || this.latestPanInfo,
			s = this.isDragging;
		if (this.cancel(), !s || !i || !r) return;
		const {
			velocity: o
		} = i;
		this.startAnimation(o);
		const {
			onDragEnd: a
		} = this.getProps();
		a && W.postRender(() => a(r, i))
	}
	cancel() {
		this.isDragging = !1;
		const {
			projection: t,
			animationState: n
		} = this.visualElement;
		t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		const {
			dragPropagation: r
		} = this.getProps();
		!r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
	}
	updateAxis(t, n, r) {
		const {
			drag: i
		} = this.getProps();
		if (!r || !Di(t, i, this.currentDirection)) return;
		const s = this.getAxisMotionValue(t);
		let o = this.originPoint[t] + r[t];
		this.constraints && this.constraints[t] && (o = zx(o, this.constraints[t], this.elastic[t])), s.set(o)
	}
	resolveConstraints() {
		var s;
		const {
			dragConstraints: t,
			dragElastic: n
		} = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, i = this.constraints;
		t && Mn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Ox(r.layoutBox, t) : this.constraints = !1, this.elastic = $x(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && _e(o => {
			this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Ux(r.layoutBox[o], this.constraints[o]))
		})
	}
	resolveRefConstraints() {
		const {
			dragConstraints: t,
			onMeasureDragConstraints: n
		} = this.getProps();
		if (!t || !Mn(t)) return !1;
		const r = t.current,
			{
				projection: i
			} = this.visualElement;
		if (!i || !i.layout) return !1;
		const s = Y1(r, i.root, this.visualElement.getTransformPagePoint());
		let o = Bx(i.layout.layoutBox, s);
		if (n) {
			const a = n(W1(o));
			this.hasMutatedConstraints = !!a, a && (o = cm(a))
		}
		return o
	}
	startAnimation(t) {
		const {
			drag: n,
			dragMomentum: r,
			dragElastic: i,
			dragTransition: s,
			dragSnapToOrigin: o,
			onDragTransitionEnd: a
		} = this.getProps(), l = this.constraints || {}, u = _e(c => {
			if (!Di(c, n, this.currentDirection)) return;
			let d = l && l[c] || {};
			o && (d = {
				min: 0,
				max: 0
			});
			const f = i ? 200 : 1e6,
				y = i ? 40 : 1e7,
				v = {
					type: "inertia",
					velocity: r ? t[c] : 0,
					bounceStiffness: f,
					bounceDamping: y,
					timeConstant: 750,
					restDelta: 1,
					restSpeed: 10,
					...s,
					...d
				};
			return this.startAxisValueAnimation(c, v)
		});
		return Promise.all(u).then(a)
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return Wa(this.visualElement, t), r.start(xu(t, r, 0, n, this.visualElement, !1))
	}
	stopAnimation() {
		_e(t => this.getAxisMotionValue(t).stop())
	}
	pauseAnimation() {
		_e(t => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
		})
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n];
		return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
	}
	snapToCursor(t) {
		_e(n => {
			const {
				drag: r
			} = this.getProps();
			if (!Di(n, r, this.currentDirection)) return;
			const {
				projection: i
			} = this.visualElement, s = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const {
					min: o,
					max: a
				} = i.layout.layoutBox[n];
				s.set(t[n] - Y(o, a, .5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const {
			drag: t,
			dragConstraints: n
		} = this.getProps(), {
			projection: r
		} = this.visualElement;
		if (!Mn(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = {
			x: 0,
			y: 0
		};
		_e(o => {
			const a = this.getAxisMotionValue(o);
			if (a && this.constraints !== !1) {
				const l = a.get();
				i[o] = bx({
					min: l,
					max: l
				}, this.constraints[o])
			}
		});
		const {
			transformTemplate: s
		} = this.visualElement.getProps();
		this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _e(o => {
			if (!Di(o, t, null)) return;
			const a = this.getAxisMotionValue(o),
				{
					min: l,
					max: u
				} = this.constraints[o];
			a.set(Y(l, u, i[o]))
		})
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Wx.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = Nr(t, "pointerdown", l => {
				const {
					drag: u,
					dragListener: c = !0
				} = this.getProps();
				u && c && this.start(l)
			}),
			r = () => {
				const {
					dragConstraints: l
				} = this.getProps();
				Mn(l) && l.current && (this.constraints = this.resolveRefConstraints())
			},
			{
				projection: i
			} = this.visualElement,
			s = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), W.read(r);
		const o = Xr(window, "resize", () => this.scalePositionWithinConstraints()),
			a = i.addEventListener("didUpdate", ({
				delta: l,
				hasLayoutChanged: u
			}) => {
				this.isDragging && u && (_e(c => {
					const d = this.getAxisMotionValue(c);
					d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
				}), this.visualElement.render())
			});
		return () => {
			o(), n(), s(), a && a()
		}
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: s = !1,
				dragElastic: o = Ka,
				dragMomentum: a = !0
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: s,
			dragElastic: o,
			dragMomentum: a
		}
	}
}

function Di(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e)
}

function Kx(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class Yx extends $t {
	constructor(t) {
		super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new Hx(t)
	}
	mount() {
		const {
			dragControls: t
		} = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const wd = e => (t, n) => {
	e && W.postRender(() => e(t, n))
};
class Gx extends $t {
	constructor() {
		super(...arguments), this.removePointerDownListener = Ue
	}
	onPointerDown(t) {
		this.session = new Em(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Pm(this.node)
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i
		} = this.node.getProps();
		return {
			onSessionStart: wd(t),
			onStart: wd(n),
			onMove: r,
			onEnd: (s, o) => {
				delete this.session, i && W.postRender(() => i(s, o))
			}
		}
	}
	mount() {
		this.removePointerDownListener = Nr(this.node.current, "pointerdown", t => this.onPointerDown(t))
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}
const Ki = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
let Mo = !1;
class Qx extends N.Component {
	componentDidMount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r,
			layoutId: i
		} = this.props, {
			projection: s
		} = t;
		s && (n.group && n.group.add(s), r && r.register && i && r.register(s), Mo && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
			this.safeToRemove()
		}), s.setOptions({
			...s.options,
			onExitComplete: () => this.safeToRemove()
		})), Ki.hasEverUpdated = !0
	}
	getSnapshotBeforeUpdate(t) {
		const {
			layoutDependency: n,
			visualElement: r,
			drag: i,
			isPresent: s
		} = this.props, {
			projection: o
		} = r;
		return o && (o.isPresent = s, Mo = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || W.postRender(() => {
			const a = o.getStack();
			(!a || !a.members.length) && this.safeToRemove()
		}))), null
	}
	componentDidUpdate() {
		const {
			projection: t
		} = this.props.visualElement;
		t && (t.root.didUpdate(), lu.postRender(() => {
			!t.currentAnimation && t.isLead() && this.safeToRemove()
		}))
	}
	componentWillUnmount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r
		} = this.props, {
			projection: i
		} = t;
		Mo = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
	}
	safeToRemove() {
		const {
			safeToRemove: t
		} = this.props;
		t && t()
	}
	render() {
		return null
	}
}

function jm(e) {
	const [t, n] = Xp(), r = N.useContext(Ul);
	return g.jsx(Qx, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: N.useContext(lm),
		isPresent: t,
		safeToRemove: n
	})
}

function Xx(e, t, n) {
	const r = ge(e) ? e : Yn(e);
	return r.start(xu("", r, t, n)), r.animation
}
const Zx = (e, t) => e.depth - t.depth;
class Jx {
	constructor() {
		this.children = [], this.isDirty = !1
	}
	add(t) {
		Hl(this.children, t), this.isDirty = !0
	}
	remove(t) {
		Kl(this.children, t), this.isDirty = !0
	}
	forEach(t) {
		this.isDirty && this.children.sort(Zx), this.isDirty = !1, this.children.forEach(t)
	}
}

function qx(e, t) {
	const n = Pe.now(),
		r = ({
			timestamp: i
		}) => {
			const s = i - n;
			s >= t && (zt(r), e(s - t))
		};
	return W.setup(r, !0), () => zt(r)
}
const Mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	ew = Mm.length,
	Sd = e => typeof e == "string" ? parseFloat(e) : e,
	kd = e => typeof e == "number" || F.test(e);

function tw(e, t, n, r, i, s) {
	i ? (e.opacity = Y(0, n.opacity ?? 1, nw(r)), e.opacityExit = Y(t.opacity ?? 1, 0, rw(r))) : s && (e.opacity = Y(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let o = 0; o < ew; o++) {
		const a = `border${Mm[o]}Radius`;
		let l = Td(t, a),
			u = Td(n, a);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0), u || (u = 0), l === 0 || u === 0 || kd(l) === kd(u) ? (e[a] = Math.max(Y(Sd(l), Sd(u), r), 0), (ot.test(u) || ot.test(l)) && (e[a] += "%")) : e[a] = u
	} (t.rotate || n.rotate) && (e.rotate = Y(t.rotate || 0, n.rotate || 0, r))
}

function Td(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius
}
const nw = Dm(0, .5, mp),
	rw = Dm(.5, .95, Ue);

function Dm(e, t, n) {
	return r => r < e ? 0 : r > t ? 1 : n(Kr(e, t, r))
}

function Cd(e, t) {
	e.min = t.min, e.max = t.max
}

function Ke(e, t) {
	Cd(e.x, t.x), Cd(e.y, t.y)
}

function Pd(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Ed(e, t, n, r, i) {
	return e -= t, e = Ts(e, 1 / n, r), i !== void 0 && (e = Ts(e, 1 / i, r)), e
}

function iw(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
	if (ot.test(t) && (t = parseFloat(t), t = Y(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let a = Y(s.min, s.max, r);
	e === s && (a -= t), e.min = Ed(e.min, t, n, a, i), e.max = Ed(e.max, t, n, a, i)
}

function Nd(e, t, [n, r, i], s, o) {
	iw(e, t[n], t[r], t[i], t.scale, s, o)
}
const sw = ["x", "scaleX", "originX"],
	ow = ["y", "scaleY", "originY"];

function jd(e, t, n, r) {
	Nd(e.x, t, sw, n ? n.x : void 0, r ? r.x : void 0), Nd(e.y, t, ow, n ? n.y : void 0, r ? r.y : void 0)
}

function Md(e) {
	return e.translate === 0 && e.scale === 1
}

function Am(e) {
	return Md(e.x) && Md(e.y)
}

function Dd(e, t) {
	return e.min === t.min && e.max === t.max
}

function aw(e, t) {
	return Dd(e.x, t.x) && Dd(e.y, t.y)
}

function Ad(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function Lm(e, t) {
	return Ad(e.x, t.x) && Ad(e.y, t.y)
}

function Ld(e) {
	return xe(e.x) / xe(e.y)
}

function Fd(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class lw {
	constructor() {
		this.members = []
	}
	add(t) {
		Hl(this.members, t), t.scheduleRender()
	}
	remove(t) {
		if (Kl(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n)
		}
	}
	relegate(t) {
		const n = this.members.findIndex(i => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const s = this.members[i];
			if (s.isPresent !== !1) {
				r = s;
				break
			}
		}
		return r ? (this.promote(r), !0) : !1
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
			r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const {
				crossfade: i
			} = t.options;
			i === !1 && r.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const {
				options: n,
				resumingFrom: r
			} = t;
			n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}

function uw(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		s = e.y.translate / t.y,
		o = (n == null ? void 0 : n.z) || 0;
	if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: d,
			rotateY: f,
			skewX: y,
			skewY: v
		} = n;
		u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), y && (r += `skewX(${y}deg) `), v && (r += `skewY(${v}deg) `)
	}
	const a = e.x.scale * t.x,
		l = e.y.scale * t.y;
	return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const Do = ["", "X", "Y", "Z"],
	cw = 1e3;
let dw = 0;

function Ao(e, t, n, r) {
	const {
		latestValues: i
	} = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Fm(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	const {
		visualElement: t
	} = e.options;
	if (!t) return;
	const n = vm(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		const {
			layout: i,
			layoutId: s
		} = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || s))
	}
	const {
		parent: r
	} = e;
	r && !r.hasCheckedOptimisedAppear && Fm(r)
}

function Rm({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i
}) {
	return class {
		constructor(o = {}, a = t == null ? void 0 : t()) {
			this.id = dw++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, this.nodes.forEach(pw), this.nodes.forEach(vw), this.nodes.forEach(xw), this.nodes.forEach(mw)
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
			for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Jx)
		}
		addEventListener(o, a) {
			return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Gl), this.eventHandlers.get(o).add(a)
		}
		notifyListeners(o, ...a) {
			const l = this.eventHandlers.get(o);
			l && l.notify(...a)
		}
		hasListeners(o) {
			return this.eventHandlers.has(o)
		}
		mount(o) {
			if (this.instance) return;
			this.isSVG = Qp(o) && !r1(o), this.instance = o;
			const {
				layoutId: a,
				layout: l,
				visualElement: u
			} = this.options;
			if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
				let c, d = 0;
				const f = () => this.root.updateBlockedByResize = !1;
				W.read(() => {
					d = window.innerWidth
				}), e(o, () => {
					const y = window.innerWidth;
					y !== d && (d = y, this.root.updateBlockedByResize = !0, c && c(), c = qx(f, 250), Ki.hasAnimatedSinceResize && (Ki.hasAnimatedSinceResize = !1, this.nodes.forEach(_d)))
				})
			}
			a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({
				delta: c,
				hasLayoutChanged: d,
				hasRelativeLayoutChanged: f,
				layout: y
			}) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return
				}
				const v = this.options.transition || u.getDefaultTransition() || Cw,
					{
						onLayoutAnimationStart: x,
						onLayoutAnimationComplete: k
					} = u.getProps(),
					p = !this.targetLayout || !Lm(this.targetLayout, y),
					h = !d && f;
				if (this.options.layoutRoot || this.resumeFrom || h || d && (p || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					const m = {
						...ou(v, "layout"),
						onPlay: x,
						onComplete: k
					};
					(u.shouldReduceMotion || this.options.layoutRoot) && (m.delay = 0, m.type = !1), this.startAnimation(m), this.setAnimationOrigin(c, h)
				} else d || _d(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = y
			})
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const o = this.getStack();
			o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), zt(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ww), this.animationId++)
		}
		getTransformTemplate() {
			const {
				visualElement: o
			} = this.options;
			return o && o.getProps().transformTemplate
		}
		willUpdate(o = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Fm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c];
				d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
			}
			const {
				layoutId: a,
				layout: l
			} = this.options;
			if (a === void 0 && !l) return;
			const u = this.getTransformTemplate();
			this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Rd);
				return
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Vd);
				return
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(yw), this.nodes.forEach(fw), this.nodes.forEach(hw)) : this.nodes.forEach(Vd), this.clearAllSnapshots();
			const a = Pe.now();
			ce.delta = gt(0, 1e3 / 60, a - ce.timestamp), ce.timestamp = a, ce.isProcessing = !0, xo.update.process(ce), xo.preRender.process(ce), xo.render.process(ce), ce.isProcessing = !1
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, lu.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(gw), this.sharedNodes.forEach(Sw)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, W.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			W.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !xe(this.snapshot.measuredBox.x) && !xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
			const o = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = re(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			const {
				visualElement: a
			} = this.options;
			a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
		}
		updateScroll(o = "measure") {
			let a = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
				const l = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: o,
					isRoot: l,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : l
				}
			}
		}
		resetTransform() {
			if (!i) return;
			const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				a = this.projectionDelta && !Am(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			o && this.instance && (a || Xt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
		}
		measure(o = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return o && (l = this.removeTransform(l)), Pw(l), {
				animationId: this.root.animationId,
				measuredBox: a,
				layoutBox: l,
				latestValues: {},
				source: this.id
			}
		}
		measurePageBox() {
			var u;
			const {
				visualElement: o
			} = this.options;
			if (!o) return re();
			const a = o.measureViewportBox();
			if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Ew))) {
				const {
					scroll: c
				} = this.root;
				c && (Dn(a.x, c.offset.x), Dn(a.y, c.offset.y))
			}
			return a
		}
		removeElementScroll(o) {
			var l;
			const a = re();
			if (Ke(a, o), (l = this.scroll) != null && l.wasRoot) return a;
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u],
					{
						scroll: d,
						options: f
					} = c;
				c !== this.root && d && f.layoutScroll && (d.wasRoot && Ke(a, o), Dn(a.x, d.offset.x), Dn(a.y, d.offset.y))
			}
			return a
		}
		applyTransform(o, a = !1) {
			const l = re();
			Ke(l, o);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!a && c.options.layoutScroll && c.scroll && c !== c.root && An(l, {
					x: -c.scroll.offset.x,
					y: -c.scroll.offset.y
				}), Xt(c.latestValues) && An(l, c.latestValues)
			}
			return Xt(this.latestValues) && An(l, this.latestValues), l
		}
		removeTransform(o) {
			const a = re();
			Ke(a, o);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				if (!u.instance || !Xt(u.latestValues)) continue;
				Ba(u.latestValues) && u.updateSnapshot();
				const c = re(),
					d = u.measurePageBox();
				Ke(c, d), jd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
			}
			return Xt(this.latestValues) && jd(a, this.latestValues), a
		}
		setTargetDelta(o) {
			this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
		}
		setOptions(o) {
			this.options = {
				...this.options,
				...o,
				crossfade: o.crossfade !== void 0 ? o.crossfade : !0
			}
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(o = !1) {
			var y;
			const a = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const l = !!this.resumingFrom || this !== a;
			if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (y = this.parent) != null && y.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const {
				layout: c,
				layoutId: d
			} = this.options;
			if (!this.layout || !(c || d)) return;
			this.resolvedRelativeTargetAt = ce.timestamp;
			const f = this.getClosestProjectingParent();
			f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = re(), this.targetWithTransforms = re()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Rx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox), fm(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ba(this.parent.latestValues) || dm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
		}
		createRelativeTarget(o, a, l) {
			this.relativeParent = o, this.linkedParentVersion = o.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), Cs(this.relativeTargetOrigin, a, l), Ke(this.relativeTarget, this.relativeTargetOrigin)
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0
		}
		calcProjection() {
			var v;
			const o = this.getLead(),
				a = !!this.resumingFrom || this !== o;
			let l = !0;
			if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ce.timestamp && (l = !1), l) return;
			const {
				layout: u,
				layoutId: c
			} = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
			Ke(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				f = this.treeScale.y;
			K1(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = re());
			const {
				target: y
			} = o;
			if (!y) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return
			} !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Pd(this.prevProjectionDelta.x, this.projectionDelta.x), Pd(this.prevProjectionDelta.y, this.projectionDelta.y)), jr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !Fd(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y))
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(o = !0) {
			var a;
			if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
				const l = this.getStack();
				l && l.scheduleRender()
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Ln(), this.projectionDelta = Ln(), this.projectionDeltaWithTransform = Ln()
		}
		setAnimationOrigin(o, a = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				c = {
					...this.latestValues
				},
				d = Ln();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
			const f = re(),
				y = l ? l.source : void 0,
				v = this.layout ? this.layout.source : void 0,
				x = y !== v,
				k = this.getStack(),
				p = !k || k.members.length <= 1,
				h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(Tw));
			this.animationProgress = 0;
			let m;
			this.mixTargetDelta = w => {
				const S = w / 1e3;
				Id(d.x, o.x, S), Id(d.y, o.y, S), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), kw(this.relativeTarget, this.relativeTargetOrigin, f, S), m && aw(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = re()), Ke(m, this.relativeTarget)), x && (this.animationValues = c, tw(c, u, this.latestValues, S, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(o) {
			var a, l, u;
			this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = W.update(() => {
				Ki.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Yn(0)), this.currentAnimation = Xx(this.motionValue, [0, 1e3], {
					...o,
					velocity: 0,
					isSync: !0,
					onUpdate: c => {
						this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c)
					},
					onStop: () => { },
					onComplete: () => {
						o.onComplete && o.onComplete(), this.completeAnimation()
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
			})
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			const o = this.getStack();
			o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cw), this.currentAnimation.stop()), this.completeAnimation()
		}
		applyTransformsToTarget() {
			const o = this.getLead();
			let {
				targetWithTransforms: a,
				target: l,
				layout: u,
				latestValues: c
			} = o;
			if (!(!a || !l || !u)) {
				if (this !== o && this.layout && u && Vm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
					l = this.target || re();
					const d = xe(this.layout.layoutBox.x);
					l.x.min = o.target.x.min, l.x.max = l.x.min + d;
					const f = xe(this.layout.layoutBox.y);
					l.y.min = o.target.y.min, l.y.max = l.y.min + f
				}
				Ke(a, l), An(a, c), jr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
			}
		}
		registerSharedNode(o, a) {
			this.sharedNodes.has(o) || this.sharedNodes.set(o, new lw), this.sharedNodes.get(o).add(a);
			const u = a.options.initialPromotionConfig;
			a.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
			})
		}
		isLead() {
			const o = this.getStack();
			return o ? o.lead === this : !0
		}
		getLead() {
			var a;
			const {
				layoutId: o
			} = this.options;
			return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
		}
		getPrevLead() {
			var a;
			const {
				layoutId: o
			} = this.options;
			return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
		}
		getStack() {
			const {
				layoutId: o
			} = this.options;
			if (o) return this.root.sharedNodes.get(o)
		}
		promote({
			needsReset: o,
			transition: a,
			preserveFollowOpacity: l
		} = {}) {
			const u = this.getStack();
			u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
				transition: a
			})
		}
		relegate() {
			const o = this.getStack();
			return o ? o.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const {
				visualElement: o
			} = this.options;
			if (!o) return;
			let a = !1;
			const {
				latestValues: l
			} = o;
			if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
			const u = {};
			l.z && Ao("z", o, u, this.animationValues);
			for (let c = 0; c < Do.length; c++) Ao(`rotate${Do[c]}`, o, u, this.animationValues), Ao(`skew${Do[c]}`, o, u, this.animationValues);
			o.render();
			for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
			o.scheduleRender()
		}
		applyProjectionStyles(o, a) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				o.visibility = "hidden";
				return
			}
			const l = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = Hi(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
				return
			}
			const u = this.getLead();
			if (!this.projectionDelta || !this.layout || !u.target) {
				this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Hi(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Xt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
				return
			}
			o.visibility = "";
			const c = u.animationValues || u.latestValues;
			this.applyTransformsToTarget();
			let d = uw(this.projectionDeltaWithTransform, this.treeScale, c);
			l && (d = l(c, d)), o.transform = d;
			const {
				x: f,
				y
			} = this.projectionDelta;
			o.transformOrigin = `${f.origin * 100}% ${y.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
			for (const v in Oa) {
				if (c[v] === void 0) continue;
				const {
					correct: x,
					applyTo: k,
					isCSSVariable: p
				} = Oa[v], h = d === "none" ? c[v] : x(c[v], u);
				if (k) {
					const m = k.length;
					for (let w = 0; w < m; w++) o[k[w]] = h
				} else p ? this.options.visualElement.renderState.vars[v] = h : o[v] = h
			}
			this.options.layoutId && (o.pointerEvents = u === this ? Hi(a == null ? void 0 : a.pointerEvents) || "" : "none")
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach(o => {
				var a;
				return (a = o.currentAnimation) == null ? void 0 : a.stop()
			}), this.root.nodes.forEach(Rd), this.root.sharedNodes.clear()
		}
	}
}

function fw(e) {
	e.updateLayout()
}

function hw(e) {
	var n;
	const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		const {
			layoutBox: r,
			measuredBox: i
		} = e.layout, {
			animationType: s
		} = e.options, o = t.source !== e.layout.source;
		s === "size" ? _e(d => {
			const f = o ? t.measuredBox[d] : t.layoutBox[d],
				y = xe(f);
			f.min = r[d].min, f.max = f.min + y
		}) : Vm(s, t.layoutBox, r) && _e(d => {
			const f = o ? t.measuredBox[d] : t.layoutBox[d],
				y = xe(r[d]);
			f.max = f.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + y)
		});
		const a = Ln();
		jr(a, r, t.layoutBox);
		const l = Ln();
		o ? jr(l, e.applyTransform(i, !0), t.measuredBox) : jr(l, r, t.layoutBox);
		const u = !Am(a);
		let c = !1;
		if (!e.resumeFrom) {
			const d = e.getClosestProjectingParent();
			if (d && !d.resumeFrom) {
				const {
					snapshot: f,
					layout: y
				} = d;
				if (f && y) {
					const v = re();
					Cs(v, t.layoutBox, f.layoutBox);
					const x = re();
					Cs(x, r, y.layoutBox), Lm(v, x) || (c = !0), d.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = v, e.relativeParent = d)
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: t,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: u,
			hasRelativeLayoutChanged: c
		})
	} else if (e.isLead()) {
		const {
			onExitComplete: r
		} = e.options;
		r && r()
	}
	e.options.transition = void 0
}

function pw(e) {
	e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function mw(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function gw(e) {
	e.clearSnapshot()
}

function Rd(e) {
	e.clearMeasurements()
}

function Vd(e) {
	e.isLayoutDirty = !1
}

function yw(e) {
	const {
		visualElement: t
	} = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function _d(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function vw(e) {
	e.resolveTargetDelta()
}

function xw(e) {
	e.calcProjection()
}

function ww(e) {
	e.resetSkewAndRotation()
}

function Sw(e) {
	e.removeLeadSnapshot()
}

function Id(e, t, n) {
	e.translate = Y(t.translate, 0, n), e.scale = Y(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function zd(e, t, n, r) {
	e.min = Y(t.min, n.min, r), e.max = Y(t.max, n.max, r)
}

function kw(e, t, n, r) {
	zd(e.x, t.x, n.x, r), zd(e.y, t.y, n.y, r)
}

function Tw(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Cw = {
	duration: .45,
	ease: [.4, 0, .1, 1]
},
	Od = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	Bd = Od("applewebkit/") && !Od("chrome/") ? Math.round : Ue;

function bd(e) {
	e.min = Bd(e.min), e.max = Bd(e.max)
}

function Pw(e) {
	bd(e.x), bd(e.y)
}

function Vm(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Fx(Ld(t), Ld(n), .2)
}

function Ew(e) {
	var t;
	return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const Nw = Rm({
	attachResizeListener: (e, t) => Xr(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}),
	Lo = {
		current: void 0
	},
	_m = Rm({
		measureScroll: e => ({
			x: e.scrollLeft,
			y: e.scrollTop
		}),
		defaultParent: () => {
			if (!Lo.current) {
				const e = new Nw({});
				e.mount(window), e.setOptions({
					layoutScroll: !0
				}), Lo.current = e
			}
			return Lo.current
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none"
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
	}),
	jw = {
		pan: {
			Feature: Gx
		},
		drag: {
			Feature: Yx,
			ProjectionNode: _m,
			MeasureLayout: jm
		}
	};

function Ud(e, t, n) {
	const {
		props: r
	} = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	const i = "onHover" + n,
		s = r[i];
	s && W.postRender(() => s(t, si(t)))
}
class Mw extends $t {
	mount() {
		const {
			current: t
		} = this.node;
		t && (this.unmount = Jv(t, (n, r) => (Ud(this.node, r, "Start"), i => Ud(this.node, i, "End"))))
	}
	unmount() { }
}
class Dw extends $t {
	constructor() {
		super(...arguments), this.isActive = !1
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible")
		} catch {
			t = !0
		} !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
	}
	mount() {
		this.unmount = ni(Xr(this.node.current, "focus", () => this.onFocus()), Xr(this.node.current, "blur", () => this.onBlur()))
	}
	unmount() { }
}

function $d(e, t, n) {
	const {
		props: r
	} = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	const i = "onTap" + (n === "End" ? "" : n),
		s = r[i];
	s && W.postRender(() => s(t, si(t)))
}
class Aw extends $t {
	mount() {
		const {
			current: t
		} = this.node;
		t && (this.unmount = n1(t, (n, r) => ($d(this.node, r, "Start"), (i, {
			success: s
		}) => $d(this.node, i, s ? "End" : "Cancel")), {
			useGlobalTarget: this.node.props.globalTapTarget
		}))
	}
	unmount() { }
}
const Ya = new WeakMap,
	Fo = new WeakMap,
	Lw = e => {
		const t = Ya.get(e.target);
		t && t(e)
	},
	Fw = e => {
		e.forEach(Lw)
	};

function Rw({
	root: e,
	...t
}) {
	const n = e || document;
	Fo.has(n) || Fo.set(n, {});
	const r = Fo.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Fw, {
		root: e,
		...t
	})), r[i]
}

function Vw(e, t, n) {
	const r = Rw(t);
	return Ya.set(e, n), r.observe(e), () => {
		Ya.delete(e), r.unobserve(e)
	}
}
const _w = {
	some: 0,
	all: 1
};
class Iw extends $t {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1
	}
	startObserver() {
		this.unmount();
		const {
			viewport: t = {}
		} = this.node.getProps(), {
			root: n,
			margin: r,
			amount: i = "some",
			once: s
		} = t, o = {
			root: n ? n.current : void 0,
			rootMargin: r,
			threshold: typeof i == "number" ? i : _w[i]
		}, a = l => {
			const {
				isIntersecting: u
			} = l;
			if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
			u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
			const {
				onViewportEnter: c,
				onViewportLeave: d
			} = this.node.getProps(), f = u ? c : d;
			f && f(l)
		};
		return Vw(this.node.current, o, a)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const {
			props: t,
			prevProps: n
		} = this.node;
		["amount", "margin", "root"].some(zw(t, n)) && this.startObserver()
	}
	unmount() { }
}

function zw({
	viewport: e = {}
}, {
	viewport: t = {}
} = {}) {
	return n => e[n] !== t[n]
}
const Ow = {
	inView: {
		Feature: Iw
	},
	tap: {
		Feature: Aw
	},
	focus: {
		Feature: Dw
	},
	hover: {
		Feature: Mw
	}
},
	Bw = {
		layout: {
			ProjectionNode: _m,
			MeasureLayout: jm
		}
	},
	bw = {
		...Nx,
		...Ow,
		...jw,
		...Bw
	},
	z = $1(bw, nx),
	L = {
		chillZone: {
			heading: "Songs That Match Your Vibes jo acha lage sunlo baby uspe click krke🎶",
			subheading: "Dedicated To You",
			chooseTrackHint: "Pick one and relax ✨",
			continueButton: "Next ➡️",
			tracks: [{
				id: 1,
				title: "High On You",
				caption: "Good vibes only"
			}, {
				id: 2,
				title: "For a Reason",
				caption: "Some moments just feel right"
			}, {
				id: 3,
				title: "Dil ka Jo Haal Hai",
				caption: "Perfect for quiet reflections"
			}]
		},
		cards: {
			heading: "A Few Things I Want To Say To You✨",
			subheading: "simple, honest & heartfelt",
			instruction: "Tap to flip 🪄",
			continueButton: "Next 🌟",
			card1Front: "You make moments feel lighter 🤍",
			card1BackTitle: "A Thought:",
			card1BackText: "Your presence has a way of making things better.",
			card1BackEmoji: "✨",
			card2Front: "You’re appreciated more than you know 🙂",
			card2BackTitle: "Just Saying:",
			card2BackText: "Sometimes people forget to say it out loud.",
			card3Front: "New Year Voucher: Extra smiles 😄",
			card3BackTitle: "Valid All Year",
			card3BackText: "Especially on tough days",
			card3BackStamp: "2026",
			card4Front: "Remember the good times?",
			card4BackQuote: "The ones that stay with you.",
			card4BackText: "Here’s to creating many more ahead."
		},
		finalLetter: {
			title: "One Last Note",
			sealingText: "Wrapping this thoughtfully…",
			sealButton: "Seal It ✉️",
			restartButton: "Restart",
			sealedTitle: "Sealed ✉️",
			sealedSubtitle: "This Is For You",
			typedDefault: "Wishing you the best ✨",
			experienceAgain: "View Again 🔁",
			sendKissButton: "Send Good Wishes 🌟",
			sealedEmoji: "🎁",
			sealedOverlayEmoji: "✉️",
			dateLocale: "en-US",
			letterGreeting: "Hey Guggu,",
			letterParagraphs: ["As the new year begins, I just wanted to share a few good thoughts with you.", "I hope the coming year brings you peace, growth, and many small wins."],
			sealingNote: "Here’s to new beginnings and positive days ahead ✨,Happy new year to you my baby mera pyara guggu",
			typedFullMessage: "Happy New Year TO YOU DEAR GUGGU! May 2026 be kind, exciting, and full of opportunities 🌟 IIIII LOVEEEE YOUUU VERRYYYYY MUCVHHHH BABYYYY🫶🏼💓",
			loadingText: "closing 2025 on a good note..."
		},
		animated: {
			nyLabel: "HAPPY NEW YEAR!",
			nyMainYear: "2026",
			nySubtitle: "See what i made for you",
			nyBottomStatus: "Starting the Journey",
			cardTitle: "Happy New Year To You My chuzzi🐣 ",
			cardSubtitle: "Thanks for being part of my 2025, now let’s make 2026 even better!",
			cardLastLine: "Continue to see more surprises!",
			cardFooter: "Made with care ✨"
		},
		activity: {
			bucketHeading: "Goals for 2026",
			readyPrompt: "Ready to step into 2026?",
			bucketList: ["🌍 Create Happy Memories Together", "Be There For Each Othery", "🧘 Take better care of your mind and body", "❤️ Spend quality time with people who matter"],
			continueButton: "LET’S GO!"
		}
	},
	Uw = "./images/WhatsApp Image 2025-12-30 at 9.44.39 AM.jpeg",
	$w = "./images/OIP (4).jpg",
	Me = {
		colors: {
			primary: "#D32F2F",
			backgroundLight: "#FFF3E0",
			paperLight: "#F5F5DC",
			accentGold: "#FFD700",
			redMedium: "#991b1b",
			redBright: "#dc2626"
		},
		fonts: {
			display: "'Mountains of Christmas', cursive",
			body: "'Caveat', cursive",
			serif: "'Merriweather', serif"
		}
	},
	Ww = ({
		onEnter: e
	}) => {
		var r, i, s, o;
		const [t, n] = N.useState([]);
		return N.useEffect(() => {
			const a = document.createElement("link");
			a.href = "https://fonts.googleapis.com/icon?family=Material+Icons", a.rel = "stylesheet", document.head.appendChild(a);
			const l = ["❄", "❅", "❆"],
				u = Array.from({
					length: 15
				}).map((c, d) => ({
					id: d,
					char: l[Math.floor(Math.random() * l.length)],
					left: Math.random() * 100 + "%",
					fontSize: Math.random() * 10 + 12 + "px",
					duration: Math.random() * 5 + 7 + "s",
					delay: Math.random() * 5 + "s"
				}));
			n(u)
		}, []), g.jsxs("div", {
			className: "min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative px-4",
			style: {
				backgroundColor: Me.colors.backgroundLight,
				fontFamily: Me.fonts.serif
			},
			children: [g.jsx("style", {
				children: `
        .font-display { font-family: ${Me.fonts.display}; }
        .font-body { font-family: ${Me.fonts.body}; }

        .envelope-flap-clip {
           clip-path: polygon(0 0, 50% 100%, 100% 0);
        }

        @keyframes openEnvelope {
            0% { transform: rotateX(0deg); z-index: 40; }
            100% { transform: rotateX(180deg); z-index: 1; }
        }
        .animate-open-envelope {
            animation: openEnvelope 1.8s forwards ease-in-out;
            transform-origin: top;
        }

        @keyframes slideUpCard {
            0% { transform: translate(-50%, 0) scale(0.9); opacity: 0; }
            100% { transform: translate(-50%, var(--slide-dist)) scale(1); opacity: 1; }
        }
        
        .card-animation {
            --slide-dist: -240px; 
            animation: slideUpCard 1.5s 0.8s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (min-width: 768px) {
            .card-animation { --slide-dist: -320px; }
        }

        @keyframes fadeInBtn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-btn {
            animation: fadeInBtn 0.8s 2.4s forwards;
            opacity: 0;
        }

        @keyframes snowFall {
            0% { transform: translateY(-10vh); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        .snowflake {
            position: absolute;
            top: -20px;
            animation: snowFall linear infinite;
        }
      `
			}), t.map(a => g.jsx("div", {
				className: "snowflake",
				style: {
					left: a.left,
					fontSize: a.fontSize,
					animationDuration: a.duration,
					animationDelay: a.delay,
					color: "white",
					opacity: .7
				},
				children: a.char
			}, a.id)), g.jsxs("div", {
				className: "relative w-full max-w-[400px] mt-40",
				children: [g.jsxs("div", {
					className: "card-animation absolute left-1/2 w-[92%] sm:w-[360px] h-[400px] sm:h-[480px] rounded-lg shadow-2xl z-20 flex flex-col items-center p-4 sm:p-8 text-center border-4 border-double opacity-0",
					style: {
						backgroundColor: Me.colors.paperLight,
						borderColor: Me.colors.primary
					},
					children: [g.jsx("div", {
						className: "absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"
					}), g.jsx("img", {
						src: Uw,
						alt: "Decoration",
						className: "absolute -top-6 -left-6 w-20 h-20 object-contain z-30 drop-shadow-md"
					}), g.jsxs("div", {
						className: "relative z-20 flex flex-col h-full justify-between items-center w-full",
						children: [g.jsxs("div", {
							className: "pt-2",
							children: [g.jsx("h1", {
								className: "font-display text-3xl sm:text-4xl font-bold",
								style: {
									color: Me.colors.primary
								},
								children: (r = L.animated) == null ? void 0 : r.cardTitle
							}), g.jsx("p", {
								className: "font-body text-xl sm:text-2xl text-gray-600",
								children: (i = L.animated) == null ? void 0 : i.cardSubtitle
							})]
						}), g.jsxs("div", {
							className: "flex-grow flex items-center justify-center relative w-full my-2",
							children: [g.jsx("div", {
								className: "relative w-36 h-36 sm:w-48 sm:h-48 bg-amber-100/40 rounded-full flex items-center justify-center border-2 border-dashed border-amber-300",
								children: g.jsx("img", {
									alt: "Center Decor",
									className: "w-28 h-28 sm:w-36 sm:h-36 object-contain",
									src: "https://cdn-icons-png.flaticon.com/512/2378/2378030.png"
								})
							}), g.jsx("img", {
								src: $w,
								className: "absolute -bottom-2 -right-2 w-16 h-16 object-contain animate-bounce",
								alt: "Gift"
							})]
						}), g.jsxs("div", {
							className: "w-full border-t border-gray-300 pt-4 pb-2",
							children: [g.jsx("p", {
								className: "font-body text-2xl sm:text-3xl text-gray-800 leading-tight",
								children: (s = L.animated) == null ? void 0 : s.cardLastLine
							}), g.jsxs("div", {
								className: "flex items-center justify-center gap-2 mt-2 px-2",
								children: [g.jsx("span", {
									className: "h-[1px] w-8 bg-gray-400 flex-shrink-0"
								}), g.jsx("p", {
									className: "text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest max-w-[70%] whitespace-normal break-words text-center",
									children: (o = L.animated) == null ? void 0 : o.cardFooter
								}), g.jsx("span", {
									className: "h-[1px] w-8 bg-gray-400 flex-shrink-0"
								})]
							})]
						})]
					})]
				}), g.jsxs("div", {
					className: "relative w-full aspect-[4/3] perspective-1000",
					children: [g.jsx("div", {
						className: "absolute inset-0 rounded-lg z-10 shadow-inner",
						style: {
							backgroundColor: Me.colors.redMedium
						}
					}), g.jsxs("div", {
						className: "absolute inset-0 z-30 rounded-b-lg shadow-xl overflow-hidden flex items-end justify-center border-b-2 border-x-2",
						style: {
							backgroundColor: Me.colors.redBright,
							borderColor: Me.colors.redMedium
						},
						children: [g.jsx("div", {
							className: "absolute bottom-0 w-full h-0 border-l-[150px] sm:border-l-[200px] border-r-[150px] sm:border-r-[200px] border-b-[120px] sm:border-b-[160px] border-l-transparent border-r-transparent pointer-events-none",
							style: {
								borderBottomColor: Me.colors.redBright
							}
						}), g.jsx("div", {
							className: "z-40 mb-4 text-white/60 font-display text-lg tracking-widest uppercase",
							children: "Greetings"
						})]
					}), g.jsx("div", {
						className: "absolute top-0 w-full h-1/2 z-40 origin-top",
						children: g.jsx("div", {
							className: "w-full h-full rounded-t-lg envelope-flap-clip animate-open-envelope shadow-md border-t-2",
							style: {
								backgroundColor: Me.colors.redBright,
								borderColor: Me.colors.redMedium
							}
						})
					})]
				}), g.jsx("div", {
					className: "absolute -bottom-28 left-0 w-full flex justify-center animate-fade-in-btn z-50",
					children: g.jsxs("button", {
						onClick: () => e == null ? void 0 : e(),
						className: "group bg-[#D32F2F] text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-2 border-white/20",
						children: [g.jsx("span", {
							className: "tracking-[0.15em] text-sm",
							children: "CONTINUE"
						}), g.jsx("svg", {
							className: "w-5 h-5 group-hover:translate-x-1 transition-transform",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							xmlns: "http://www.w3.org/2000/svg",
							children: g.jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: "2",
								d: "M13 5l7 7-7 7M5 12h14"
							})
						})]
					})
				})]
			})]
		})
	},
	Im = "./images/OIP.jpg",
	Hw = {
		primary: "#D32F2F",
		secondary: "#1976D2",
		paper: "#F5F5DC",
		background: "#FFF3E0",
		gold: "#FFD700"
	},
	Kw = L.activity && L.activity.bucketList ? L.activity.bucketList : [],
	Yw = ({
		onNext: e
	}) => {
		const [t, n] = N.useState([]);
		N.useEffect(() => {
			const i = ["❄", "❅", "❆"],
				s = Array.from({
					length: 15
				}).map((o, a) => ({
					id: a,
					char: i[Math.floor(Math.random() * i.length)],
					left: Math.random() * 100 + "%",
					fontSize: Math.random() * 10 + 12 + "px",
					duration: Math.random() * 5 + 7 + "s",
					delay: Math.random() * 5 + "s"
				}));
			n(s)
		}, []);
		const r = () => {
			e == null || e()
		};
		return g.jsxs("div", {
			className: "w-full min-h-[100dvh] flex flex-col items-center justify-center p-4 relative overflow-hidden",
			style: {
				backgroundColor: Hw.background
			},
			children: [g.jsx("div", {
				className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"
			}), t.map(i => g.jsx("div", {
				className: "snowflake",
				style: {
					left: i.left,
					fontSize: i.fontSize,
					animationDuration: i.duration,
					animationDelay: i.delay,
					color: "white",
					opacity: .6
				},
				children: i.char
			}, i.id)), g.jsxs(Ss, {
				mode: "wait",
				children: ["(", g.jsxs(z.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95,
						filter: "blur(10px)"
					},
					className: "w-full max-w-md bg-[#FDFCF0] p-8 md:p-10 rounded-sm shadow-2xl border-[12px] border-white relative",
					children: [g.jsxs("div", {
						className: "text-center mb-8",
						children: [g.jsx("h2", {
							className: "font-display text-4xl text-[#5a433f]",
							children: L.activity.bucketHeading
						}), g.jsx("h3", {
							className: "font-handwriting text-3xl text-[#D32F2F] -mt-2",
							children: "Bucket List"
						})]
					}), g.jsx("ul", {
						className: "space-y-5 mb-10",
						children: Kw.map((i, s) => g.jsxs(z.li, {
							initial: {
								opacity: 0,
								x: -10
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: s * .1
							},
							className: "flex items-center gap-4 font-handwriting text-2xl text-[#4a433f] border-b border-[#eee6d8] pb-2",
							children: [g.jsx("span", {
								className: "w-6 h-6 border-2 border-[#D32F2F] rounded-sm flex-shrink-0"
							}), i]
						}, s))
					}), g.jsxs("div", {
						className: "text-center border-t-2 border-dashed border-[#d1c7b7] pt-8",
						children: [g.jsx("p", {
							className: "font-serif italic text-[#5a433f] mb-6",
							children: L.activity.readyPrompt
						}), g.jsxs("button", {
							onClick: r,
							className: "group bg-[#D32F2F] text-white px-12 py-3 rounded-full shadow-lg hover:scale-105 transition-all font-bold tracking-[0.2em] flex items-center gap-2 mx-auto",
							children: [L.activity.continueButton, g.jsx("svg", {
								className: "w-5 h-5 group-hover:translate-x-1 transition-transform",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: g.jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: "2",
									d: "M13 5l7 7-7 7M5 12h14"
								})
							})]
						})]
					}), g.jsx("div", {
						className: "absolute -top-4 -right-4 w-16 h-16 opacity-20 border-t-4 border-r-4 border-[#D32F2F]"
					})]
				}, "bucket")]
			}), g.jsx("style", {
				children: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Mountains+of+Christmas:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        .font-handwriting { font-family: 'Dancing Script', cursive; }
        .font-display { font-family: 'Mountains of Christmas', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }

        .perspective-1000 { perspective: 1000px; }
        .rotate-x-180 { transform: rotateX(180deg); }
        .envelope-flap-clip { clip-path: polygon(0 0, 50% 100%, 100% 0); }

        @keyframes slideUp {
          0% { transform: translate(-50%, 0) scale(0.9); opacity: 0; }
          100% { transform: translate(-50%, -240px) scale(1); opacity: 1; }
        }
        .card-animation {
          animation: slideUp 1.5s 2s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes snowFall {
          0% { transform: translateY(-10vh); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .snowflake { position: absolute; top: -20px; animation: snowFall linear infinite; pointer-events: none; }

        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-sway { animation: sway 4s ease-in-out infinite; }
      `
			})]
		})
	},
	Gw = "./images/WhatsApp Audio 2025-12-31 at 3.11.02 PM.mpeg",
	Qw = "./images/WhatsApp Audio 2025-12-31 at 3.12.47 PM.mpeg",
	Xw = "./images/WhatsApp Audio 2025-12-31 at 3.13.31 PM.mpeg",
	Zw = "./images/OIP (1).jpg",
	Jw = "./images/OIP (2).jpg",
	qw = "./images/OIP (3).jpg";
let mn = null;
const eS = () => typeof window > "u" ? null : (mn || (mn = document.createElement("div"), mn.id = "persistent-audio-container", mn.style.display = "none", document.body.appendChild(mn)), mn);

function tS({
	onNext: e
}) {
	const t = [{
		id: 1,
		title: L.chillZone.tracks[0].title,
		caption: L.chillZone.tracks[0].caption,
		src: Gw,
		cover: Zw
	}, {
		id: 2,
		title: L.chillZone.tracks[1].title,
		caption: L.chillZone.tracks[1].caption,
		src: Qw,
		cover: Jw
	}, {
		id: 3,
		title: L.chillZone.tracks[2].title,
		caption: L.chillZone.tracks[2].caption,
		src: Xw,
		cover: qw
	}],
		n = N.useRef([]),
		[r, i] = N.useState(null),
		[s, o] = N.useState(!1),
		[a, l] = N.useState(0),
		[u, c] = N.useState(0);
	N.useEffect(() => {
		const y = eS();
		y && (n.current = t.map(v => {
			let x = y.querySelector(`audio[data-track-id="${v.id}"]`);
			return x || (x = document.createElement("audio"), x.src = v.src, x.preload = "metadata", x.setAttribute("data-track-id", v.id.toString()), y.appendChild(x)), x
		}), n.current.forEach((v, x) => {
			v && !v.paused && (i(x), o(!0), c(v.duration || 0))
		}))
	}, []);
	const d = async y => {
		const v = n.current[y];
		if (v) {
			if (r === y) {
				v.paused ? (await v.play(), o(!0)) : (v.pause(), o(!1));
				return
			}
			n.current.forEach((x, k) => {
				x && k !== y && (x.pause(), x.currentTime = 0)
			}), i(y), o(!0);
			try {
				await v.play()
			} catch {
				o(!1)
			}
		}
	};
	N.useEffect(() => {
		const y = r;
		if (y == null) return;
		const v = n.current[y];
		if (!v) return;
		const x = () => l(v.currentTime),
			k = () => {
				o(!1), i(null)
			};
		return v.addEventListener("timeupdate", x), v.addEventListener("ended", k), () => {
			v.removeEventListener("timeupdate", x), v.removeEventListener("ended", k)
		}
	}, [r]);
	const f = y => {
		if (isNaN(y)) return "0:00";
		const v = Math.floor(y / 60),
			x = Math.floor(y % 60).toString().padStart(2, "0");
		return `${v}:${x}`
	};
	return g.jsxs("main", {
		className: "min-h-screen w-full flex flex-col items-center py-12 px-4 relative overflow-hidden",
		style: {
			backgroundColor: "#FFF3E0"
		},
		children: [g.jsx("div", {
			"aria-hidden": !0,
			className: "animated-bg"
		}), g.jsx("div", {
			className: "absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
		}), g.jsxs(z.div, {
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "text-center mb-16 z-10",
			children: [g.jsx("span", {
				className: "block font-handwriting text-[#D32F2F] text-3xl mb-1",
				children: L.chillZone.subheading
			}), g.jsx("h1", {
				className: "text-5xl md:text-6xl font-display text-[#3d2b28] tracking-tight",
				children: L.chillZone.heading
			})]
		}), g.jsx("div", {
			className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 z-10",
			children: t.map((y, v) => {
				const x = r === v,
					k = x && s;
				return g.jsxs(z.div, {
					whileHover: {
						y: -8
					},
					onClick: () => d(v),
					className: `relative cursor-pointer transition-all duration-500 ${x ? "z-20" : "z-10"}`,
					children: [g.jsxs(z.div, {
						animate: {
							scale: k ? 1.08 : 1,
							rotate: k ? [0, -.2, .2, 0] : 0,
							boxShadow: k ? "0 30px 60px -12px rgba(0,0,0,0.4), 0 0 20px rgba(211,47,47,0.2)" : "0 10px 20px -5px rgba(0,0,0,0.3)"
						},
						transition: {
							scale: {
								type: "spring",
								stiffness: 300,
								damping: 20
							},
							rotate: {
								repeat: 1 / 0,
								duration: .2
							},
							boxShadow: {
								duration: .4
							}
						},
						className: `relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden border-[7px] transition-colors duration-700
                ${x ? "bg-[#c0392b] border-[#922b21]" : "bg-[#2a2a2a] border-[#1a1a1a]"}`,
						children: [g.jsxs("div", {
							className: "absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[42%] bg-[#F5F5DC] rounded-sm flex overflow-hidden shadow-inner border-b-2 border-black/10",
							children: [g.jsxs("div", {
								className: "w-1/3 h-full relative border-r-2 border-dashed border-black/10",
								children: [g.jsx("img", {
									src: y.cover,
									alt: y.title,
									className: "w-full h-full object-cover grayscale-[0.2]"
								}), g.jsx("div", {
									className: "absolute inset-0 bg-black/5 pointer-events-none"
								})]
							}), g.jsxs("div", {
								className: "flex-grow p-3 flex flex-col justify-center bg-white/50 backdrop-blur-sm",
								children: [g.jsxs("div", {
									className: "flex justify-between items-center mb-1",
									children: [g.jsx("span", {
										className: "text-[#D32F2F] font-bold text-[8px]",
										children: "Type II / CrO2"
									}), g.jsx("span", {
										className: "text-gray-400 font-bold text-[8px]",
										children: "SIDE A"
									})]
								}), g.jsx("h2", {
									className: "font-handwriting text-xl md:text-2xl text-[#2c3e50] leading-none mb-1 truncate",
									children: y.title
								}), g.jsx("p", {
									className: "text-[9px] text-gray-500 uppercase tracking-widest font-sans italic truncate",
									children: y.caption
								})]
							})]
						}), g.jsxs("div", {
							className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-[28%] bg-[#0f0f0f] rounded-lg border-4 border-[#1a1a1a] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-around overflow-hidden",
							children: [g.jsx(z.div, {
								animate: {
									rotate: k ? 360 : 0
								},
								transition: {
									repeat: 1 / 0,
									duration: 5,
									ease: "linear"
								},
								className: "w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center",
								children: g.jsxs("div", {
									className: "w-6 h-6 rounded-full border border-white/5 relative",
									children: [g.jsx("div", {
										className: "w-[1px] h-full bg-white/10 absolute left-1/2 -translate-x-1/2"
									}), g.jsx("div", {
										className: "h-[1px] w-full bg-white/10 absolute top-1/2 -translate-y-1/2"
									})]
								})
							}), g.jsx("div", {
								className: "w-16 h-[2px] bg-white/5 relative",
								children: g.jsx(z.div, {
									className: "absolute h-full bg-[#D32F2F] shadow-[0_0_8px_#D32F2F]",
									initial: {
										width: 0
									},
									animate: {
										width: x ? `${a / u * 100}%` : 0
									}
								})
							}), g.jsx(z.div, {
								animate: {
									rotate: k ? 360 : 0
								},
								transition: {
									repeat: 1 / 0,
									duration: 5,
									ease: "linear"
								},
								className: "w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center",
								children: g.jsxs("div", {
									className: "w-6 h-6 rounded-full border border-white/5 relative",
									children: [g.jsx("div", {
										className: "w-[1px] h-full bg-white/10 absolute left-1/2 -translate-x-1/2"
									}), g.jsx("div", {
										className: "h-[1px] w-full bg-white/10 absolute top-1/2 -translate-y-1/2"
									})]
								})
							})]
						}), g.jsx("div", {
							className: "absolute top-2 left-2 w-2 h-2 rounded-full bg-black/40"
						}), g.jsx("div", {
							className: "absolute top-2 right-2 w-2 h-2 rounded-full bg-black/40"
						}), g.jsx("div", {
							className: "absolute bottom-2 left-2 w-2 h-2 rounded-full bg-black/40"
						}), g.jsx("div", {
							className: "absolute bottom-2 right-2 w-2 h-2 rounded-full bg-black/40"
						})]
					}), x && g.jsxs(z.div, {
						initial: {
							opacity: 0,
							scale: .9,
							y: 10
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						className: "absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-[#00ff41] font-mono text-[10px] px-3 py-1 rounded border border-white/20 shadow-lg z-30 tracking-widest",
						children: [g.jsx("span", {
							className: "animate-pulse mr-1",
							children: "●"
						}), " PLAYING ", f(a)]
					})]
				}, y.id)
			})
		}), g.jsx("div", {
			className: "mt-24 z-10",
			children: g.jsxs("button", {
				onClick: e,
				className: "group relative flex items-center gap-3 px-10 py-4 rounded-xl bg-[#2c2c2c] text-white font-bold transition-all hover:bg-[#D32F2F] active:scale-95 shadow-xl",
				children: [g.jsx("span", {
					className: "tracking-[0.2em] uppercase text-xs",
					children: L.chillZone.continueButton
				}), g.jsx("svg", {
					className: "w-5 h-5 group-hover:translate-x-1 transition-transform",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: g.jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "2",
						d: "M13 5l7 7-7 7M5 12h14"
					})
				})]
			})
		}), g.jsx("style", {
			children: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Mountains+of+Christmas:wght@700&family=JetBrains+Mono&display=swap');
        .font-handwriting { font-family: 'Dancing Script', cursive; }
        .font-display { font-family: 'Mountains of Christmas', cursive; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        main::after {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          z-index: 50;
        }
        .animated-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(closest-side at 10% 20%, rgba(211,157,86,0.08), transparent 10%),
                      radial-gradient(closest-side at 80% 80%, rgba(211,157,86,0.06), transparent 12%),
                      radial-gradient(closest-side at 50% 50%, rgba(211,157,86,0.04), transparent 18%);
          filter: blur(36px);
          opacity: 0.9;
          animation: bgFloat 18s linear infinite;
        }

        @keyframes bgFloat {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-30px,-20px,0) scale(1.05); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
      `
		})]
	})
}
const zm = "./images/WhatsApp Image 2025-12-30 at 9.44.39 AM.jpeg",
	nS = "./images/WhatsApp Image 2025-12-30 at 9.44.40 AM.jpeg",
	rS = "./images/WhatsApp Image 2025-12-30 at 9.44.41 AM.jpeg",
	pq = "./images/WhatsApp Image 2025-12-30 at 9.55.04 AM.jpeg",
	iS = ({
		onNext: e
	}) => {
		const [t, n] = N.useState([]), r = [{
			front: L.cards.card1Front,
			backTitle: L.cards.card1BackTitle,
			backText: L.cards.card1BackText,
			img: zm,
			color: "bg-[#FFD1E3]",
			rotate: "-rotate-3",
			emoji: L.cards.card1BackEmoji
		}, {
			front: L.cards.card2Front,
			backTitle: L.cards.card2BackTitle,
			backText: L.cards.card2BackText,
			img: nS,
			color: "bg-[#FFF9C4]",
			rotate: "rotate-2",
			emoji: "❤️"
		}, {
			front: L.cards.card3Front,
			backTitle: L.cards.card3BackTitle,
			backText: L.cards.card3BackText,
			img: rS,
			color: "bg-[#E3F2FD]",
			rotate: "-rotate-2",
			stamp: L.cards.card3BackStamp
		}], i = s => {
			n(o => o.includes(s) ? o.filter(a => a !== s) : [...o, s])
		};
		return g.jsxs("div", {
			className: "w-full min-h-screen bg-transparent flex flex-col items-center justify-center py-12 px-4 overflow-hidden",
			style: {
				backgroundColor: "#FFF3E0",
				fontFamily: "'Merriweather', serif"
			},
			children: [g.jsx("div", {
				"aria-hidden": !0,
				className: "animated-bg"
			}), g.jsxs("div", {
				className: "absolute inset-0 pointer-events-none opacity-40",
				children: [g.jsx("div", {
					className: "absolute top-20 left-10 text-pink-200 text-6xl animate-float",
					children: "✨"
				}), g.jsx("div", {
					className: "absolute bottom-40 right-10 text-blue-100 text-6xl animate-float-slow",
					children: "☁️"
				})]
			}), g.jsxs(z.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-center mb-16 z-10",
				children: [g.jsx("span", {
					className: "block text-[#D32F2F] font-hand text-2xl md:text-3xl rotate-[-2deg] mb-2",
					children: L.cards.subheading
				}), g.jsx("h1", {
					className: "text-4xl md:text-7xl font-display text-[#3d2b28] tracking-tight leading-tight",
					children: L.cards.heading
				}), g.jsx("p", {
					className: "mt-4 text-gray-500 font-medium max-w-md mx-auto italic",
					children: L.cards.instruction
				})]
			}), g.jsx("div", {
				className: "w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 items-center justify-items-center",
				children: r.map((s, o) => g.jsx("div", {
					className: `perspective-1000 w-full max-w-[280px] h-[380px] cursor-pointer group ${s.rotate}`,
					onClick: () => i(o),
					children: g.jsxs(z.div, {
						animate: {
							rotateY: t.includes(o) ? 180 : 0
						},
						transition: {
							duration: .8,
							type: "spring",
							stiffness: 260,
							damping: 20
						},
						className: "relative w-full h-full preserve-3d",
						children: [g.jsxs("div", {
							className: `absolute inset-0 backface-hidden rounded-2xl shadow-xl ${s.color} p-8 flex flex-col items-center justify-center border-4 border-white/50 overflow-hidden`,
							children: [g.jsx("div", {
								className: "absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-sm rotate-1 z-10 shadow-sm border-x-4 border-dashed border-black/5"
							}), g.jsx("h3", {
								className: "font-hand text-3xl md:text-4xl text-gray-800 leading-relaxed text-center",
								children: s.front
							}), g.jsx("div", {
								className: "absolute inset-0 opacity-10 pointer-events-none",
								style: {
									backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
									backgroundSize: "20px 20px"
								}
							})]
						}), g.jsxs("div", {
							className: "absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center border-8 border-white",
							children: [g.jsxs("div", {
								className: "w-full h-[70%] rounded-lg overflow-hidden shadow-inner bg-gray-100 relative",
								children: [g.jsx("img", {
									src: s.img,
									alt: "Memory",
									className: "w-full h-full object-cover"
								}), g.jsx("div", {
									className: "absolute inset-0 bg-black/5 pointer-events-none"
								})]
							}), g.jsxs("div", {
								className: "flex-grow flex flex-col items-center justify-center pt-4 text-center",
								children: [g.jsx("p", {
									className: "font-hand text-2xl text-gray-800 mb-1",
									children: s.backTitle
								}), g.jsx("p", {
									className: "text-gray-500 text-xs px-2 leading-tight",
									children: s.backText
								}), s.emoji && g.jsx("span", {
									className: "mt-2 text-2xl",
									children: s.emoji
								}), s.stamp && g.jsx("div", {
									className: "mt-2 border-2 border-[#FF4D94] text-[#FF4D94] px-2 py-1 rounded text-[10px] font-black uppercase rotate-[-12deg] tracking-tighter",
									children: s.stamp
								})]
							})]
						})]
					})
				}, o))
			}), g.jsx(z.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				className: "mt-20 z-20",
				children: g.jsxs("button", {
					onClick: e,
					className: "group flex items-center gap-3 px-10 py-4 bg-[#FF4D94] text-white font-bold rounded-full shadow-[0_10px_20px_rgba(255,77,148,0.3)] hover:scale-105 hover:bg-[#e63d83] transition-all",
					children: [L.cards.continueButton, g.jsx("span", {
						className: "material-icons-round group-hover:translate-x-2 transition-transform",
						children: "arrow_forward"
					})]
				})
			}), g.jsx("style", {
				children: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
        .animated-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(closest-side at 20% 30%, rgba(212,175,55,0.06), transparent 12%),
                      radial-gradient(closest-side at 70% 70%, rgba(211,76,64,0.04), transparent 14%);
          filter: blur(48px);
          animation: bgDrift 20s ease-in-out infinite;
        }

        @keyframes bgDrift {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(30px,-20px,0) scale(1.06); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
      `
			})]
		})
	},
	sS = "./images/WhatsApp Image 2025-12-30 at 9.55.0 AM.jpeg";

function oS({
	onRestart: e
}) {
	const [t, n] = N.useState("locked"), [r, i] = N.useState(0), [s, o] = N.useState(""), a = N.useRef(null);
	return N.useEffect(() => {
		if (t === "igniting") {
			const l = setInterval(() => {
				i(u => u >= 100 ? (clearInterval(l), setTimeout(() => n("letter"), 500), 100) : u + 1)
			}, 30);
			return () => clearInterval(l)
		}
	}, [t]), N.useEffect(() => {
		if (t === "sealed") {
			const l = L.finalLetter && L.finalLetter.typedFullMessage ? L.finalLetter.typedFullMessage : "Happy New Year!";
			let u = 0;
			o(""), a.current = window.setInterval(() => {
				u += 1, o(l.slice(0, u)), u >= l.length && a.current && window.clearInterval(a.current)
			}, 50)
		}
		return () => {
			a.current && window.clearInterval(a.current)
		}
	}, [t]), g.jsxs("div", {
		className: "min-h-screen w-full flex flex-col items-center justify-center py-8 px-4 relative overflow-auto",
		style: {
			backgroundColor: "#FFF3E0"
		},
		children: [g.jsxs("div", {
			className: "relative w-full max-w-full overflow-hidden pointer-events-none",
			children: [g.jsx("div", {
				"aria-hidden": !0,
				className: "animated-bg"
			}), g.jsxs("div", {
				className: "absolute inset-0 overflow-hidden",
				children: [g.jsx("div", {
					className: "absolute inset-0 opacity-[0.03] z-50 bg-[url('https://res.cloudinary.com/dyd911y6h/image/upload/v1637050504/noise_o9vvp7.png')]"
				}), g.jsx(z.div, {
					animate: {
						x: [0, 30, 0],
						y: [0, -18, 0],
						scale: [1, 1.06, 1]
					},
					transition: {
						duration: 18,
						repeat: 1 / 0,
						ease: "easeInOut"
					},
					className: "absolute -top-12 -left-12 w-[48%] h-[48%] bg-orange-50/40 blur-[80px] rounded-full"
				}), g.jsx(z.div, {
					animate: {
						x: [0, -30, 0],
						y: [0, 18, 0],
						scale: [1, 1.08, 1]
					},
					transition: {
						duration: 22,
						repeat: 1 / 0,
						ease: "easeInOut",
						delay: 2
					},
					className: "absolute -bottom-12 -right-12 w-[48%] h-[48%] bg-blue-50/30 blur-[80px] rounded-full"
				})]
			})]
		}), g.jsxs(Ss, {
			mode: "wait",
			children: [t === "locked" && g.jsxs(z.div, {
				exit: {
					opacity: 0,
					scale: .9,
					filter: "blur(20px)"
				},
				className: "z-20 text-center flex flex-col items-center",
				children: [g.jsxs("div", {
					className: "relative mb-12",
					children: [g.jsx(z.div, {
						animate: {
							rotate: 360
						},
						transition: {
							duration: 20,
							repeat: 1 / 0,
							ease: "linear"
						},
						className: "w-48 h-48 rounded-full border border-dashed border-[#D4AF37]/40 flex items-center justify-center",
						children: g.jsx("div", {
							className: "w-40 h-40 rounded-full border border-[#D4AF37]/10"
						})
					}), g.jsx("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: g.jsx(z.div, {
							animate: {
								scale: [1, 1.03, 1]
							},
							transition: {
								duration: 2,
								repeat: 1 / 0
							},
							className: "w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden drop-shadow-2xl bg-white/40 flex items-center justify-center",
							children: g.jsx("img", {
								src: sS,
								alt: "final",
								className: "w-full h-full object-cover"
							})
						})
					})]
				}), g.jsx("h1", {
					className: "text-[#4A4341] font-display text-3xl md:text-4xl mb-2 tracking-tight",
					children: "Ready for 2026?"
				}), g.jsx("p", {
					className: "font-hand text-xl text-gray-400 mb-10 italic",
					children: "A new chapter is waiting to be written..."
				}), g.jsx("button", {
					onClick: () => n("igniting"),
					className: "group relative px-10 py-4 bg-white border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full transition-all hover:bg-[#D4AF37] hover:text-white shadow-[0_10px_20px_rgba(212,175,55,0.1)] active:scale-95",
					children: g.jsxs("span", {
						className: "relative z-10 tracking-[0.2em] uppercase text-xs flex items-center gap-2",
						children: ["Ignite the Spark ", g.jsx("span", {
							className: "material-icons-round text-sm",
							children: "flare"
						})]
					})
				})]
			}, "locked"), t === "igniting" && g.jsxs(z.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				className: "z-50 flex flex-col items-center justify-center text-center",
				children: [g.jsx("div", {
					className: "mb-6",
					children: g.jsx("div", {
						className: "w-12 h-12",
						children: g.jsx("img", {
							src: Im,
							alt: "loading",
							className: "w-full h-full object-contain"
						})
					})
				}), g.jsx("p", {
					className: "text-[#4A4341] font-hand text-2xl mb-4 italic",
					children: L.finalLetter && L.finalLetter.loadingText ? L.finalLetter.loadingText : "closing 2025 with good note..."
				}), g.jsx("div", {
					className: "w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4",
					children: g.jsx(z.div, {
						className: "h-full bg-[#D4AF37]",
						initial: {
							width: 0
						},
						animate: {
							width: `${r}%`
						}
					})
				}), g.jsxs("p", {
					className: "text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase",
					children: ["preparing something for 2026: ", r, "%"]
				})]
			}, "igniting"), t === "letter" && g.jsxs(z.div, {
				initial: {
					opacity: 0,
					y: 50
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "w-full max-w-xl bg-[#FFFDF9] rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.03)] border border-white overflow-hidden relative group/letter",
				children: [g.jsx("div", {
					className: "absolute inset-0 group-hover/letter:center-glow transition-all duration-700 pointer-events-none"
				}), g.jsxs("div", {
					className: "w-full h-48 md:h-64 overflow-hidden relative",
					children: [g.jsx("img", {
						src: pq,
						alt: "Memories",
						className: "w-full h-full object-cover saturate-[0.8] contrast-[1.05]"
					}), g.jsx("div", {
						className: "absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-transparent to-transparent"
					})]
				}), g.jsx("div", {
					className: "p-6 md:p-10 relative",
					children: g.jsxs("div", {
						className: "relative z-10",
						children: [g.jsxs("div", {
							className: "text-center mb-12",
							children: [g.jsx("span", {
								className: "font-hand text-2xl text-[#D4AF37] block mb-1",
								children: L.finalLetter.letterGreeting
							}), g.jsx("h2", {
								className: "text-3xl md:text-4xl font-display text-[#4A4341]",
								children: L.finalLetter.title
							})]
						}), g.jsx("div", {
							className: "font-hand text-xl md:text-2xl text-[#5A5250] leading-relaxed space-y-6",
							children: L.finalLetter.letterParagraphs.map((l, u) => g.jsx("p", {
								className: "relative group/text cursor-default",
								children: l
							}, u))
						}), g.jsx("div", {
							className: "mt-14 pt-6 border-t border-[#F0E6D6] flex flex-col sm:flex-row gap-6 items-center justify-between",
							children: g.jsxs("button", {
								onClick: () => n("sealed"),
								className: "px-10 py-4 bg-[#4A4341] text-white font-bold rounded-full shadow-xl hover:bg-[#D4AF37] transition-all flex items-center gap-2 text-xs tracking-widest uppercase",
								children: [L.finalLetter.sealButton, " ", g.jsx("span", {
									className: "material-icons-round text-sm",
									children: "lock_open"
								})]
							})
						})]
					})
				})]
			}, "letter"), t === "sealed" && g.jsxs(z.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "text-center z-20 max-w-md",
				children: [g.jsx("h2", {
					className: "text-4xl md:text-5xl font-display text-[#4A4341] mb-8",
					children: L.finalLetter.sealedTitle
				}), g.jsx("div", {
					className: "bg-white/90 backdrop-blur-md p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(212,175,55,0.1)] border border-white mb-12",
					children: g.jsx("div", {
						className: "font-hand text-3xl md:text-4xl text-[#D4AF37]",
						children: s
					})
				}), g.jsx("button", {
					onClick: () => window.location.reload(),
					className: "px-12 py-5 bg-transparent border-2 border-[#4A4341] text-[#4A4341] font-bold rounded-full hover:bg-[#4A4341] hover:text-white transition-all tracking-[0.3em] uppercase text-[10px]",
					children: "Restart the Journey"
				})]
			}, "sealed")]
		}), g.jsx("style", {
			children: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Mountains+of+Christmas:wght@700&display=swap');
        .font-hand { font-family: 'Caveat', cursive; }
        .font-display { font-family: 'Mountains of Christmas', cursive; }
        .animated-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(closest-side at 25% 35%, rgba(255,222,179,0.08), transparent 10%),
                      radial-gradient(closest-side at 75% 65%, rgba(255,240,200,0.06), transparent 14%);
          filter: blur(44px);
          animation: bgSway 22s ease-in-out infinite;
        }
        @keyframes bgSway {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-28px,18px,0) scale(1.04); }
        }
      `
		})]
	})
}
const aS = () => {
	const e = N.useRef(null);
	return N.useEffect(() => {
		const t = e.current;
		if (!t) return;
		const n = t.getContext("2d");
		if (!n) return;
		let r, i = window.innerWidth,
			s = window.innerHeight;
		const o = () => {
			i = window.innerWidth, s = window.innerHeight, t.width = i, t.height = s
		};
		window.addEventListener("resize", o), o();
		const a = [],
			l = 80;
		class u {
			constructor() {
				this.x = Math.random() * i, this.y = Math.random() * s - s, this.radius = Math.random() * 3 + 1.5, this.speed = Math.random() * 1.2 + .4, this.opacity = Math.random() * .6 + .3, this.drift = Math.random() * .6 - .3, this.hue = Math.floor(Math.random() * 360), this.color = `hsla(${this.hue}, 65%, 92%, ${this.opacity})`
			}
			update() {
				this.y += this.speed, this.x += this.drift, this.y > s && (this.y = -10, this.x = Math.random() * i)
			}
			draw() {
				n && (n.save(), n.beginPath(), n.arc(this.x, this.y, this.radius, 0, Math.PI * 2), n.fillStyle = this.color, n.shadowColor = "rgba(0,0,0,0.08)", n.shadowBlur = Math.max(1, this.radius * 1.8), n.fill(), n.restore())
			}
		}
		for (let d = 0; d < l; d++) a.push(new u);
		const c = () => {
			n.clearRect(0, 0, i, s), a.forEach(d => {
				d.update(), d.draw()
			}), r = requestAnimationFrame(c)
		};
		return c(), () => {
			window.removeEventListener("resize", o), cancelAnimationFrame(r)
		}
	}, []), g.jsx("canvas", {
		ref: e,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			zIndex: 5
		}
	})
},
	lS = ({
		color: e,
		delay: t,
		index: n
	}) => {
		const r = n * 12 * (Math.PI / 180),
			i = 150 + Math.random() * 150,
			s = Math.cos(r) * i,
			o = Math.sin(r) * i;
		return g.jsx(z.div, {
			className: "realistic-particle",
			initial: {
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1
			},
			animate: {
				x: [0, s, s * 1.2],
				y: [0, o, o + 80],
				opacity: [1, 1, 0],
				scale: [1, 1.5, 0]
			},
			transition: {
				duration: 2.5,
				delay: 2.2 + t,
				ease: [.1, .7, .3, 1]
			},
			style: {
				backgroundColor: e
			}
		})
	};

function uS() {
	const [e, t] = N.useState("intro"), [n, r] = N.useState(0);
	N.useEffect(() => {
		const s = setTimeout(() => {
			t("main")
		}, 6500);
		return () => {
			clearTimeout(s)
		}
	}, []);
	const i = s => {
		r(s), window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	};
	return g.jsxs("div", {
		className: `app ${e === "main" ? "main-light" : "stage-dark"}`,
		children: [g.jsx(Ss, {
			mode: "wait",
			children: e === "intro" && g.jsxs(z.div, {
				className: "ny-master-overlay",
				exit: {
					opacity: 0,
					scale: 1.1,
					filter: "blur(20px)"
				},
				transition: {
					duration: 1.2
				},
				children: [g.jsx("div", {
					className: "sky-gradient"
				}), g.jsx("div", {
					className: "stars-field",
					children: [...Array(80)].map((s, o) => g.jsx("div", {
						className: "star-blink",
						style: {
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`
						}
					}, o))
				}), g.jsxs(z.div, {
					className: "realistic-rocket",
					initial: {
						bottom: "-10%",
						left: "45%",
						opacity: 1
					},
					animate: {
						bottom: "55%",
						left: "50%",
						opacity: [1, 1, 0]
					},
					transition: {
						duration: 2.2,
						ease: "easeOut"
					},
					children: [g.jsx("div", {
						className: "rocket-spark-tail"
					}), g.jsx("div", {
						className: "rocket-glow-head"
					})]
				}), g.jsx(z.div, {
					className: "explosion-flash",
					initial: {
						opacity: 0,
						scale: 0
					},
					animate: {
						opacity: [0, .8, 0],
						scale: [0, 2, 2.5]
					},
					transition: {
						delay: 2.1,
						duration: .8
					}
				}), g.jsx("div", {
					className: "explosion-container",
					children: [...Array(45)].map((s, o) => g.jsx(lS, {
						index: o,
						color: o % 3 === 0 ? "#FFD700" : o % 3 === 1 ? "#FFF" : "#C0C0C0",
						delay: Math.random() * .2
					}, o))
				}), g.jsxs("div", {
					className: "ny-text-reveal",
					children: [g.jsxs(z.div, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 2.6,
							duration: 1
						},
						children: [g.jsx("span", {
							className: "ny-label",
							children: L.animated.nyLabel
						}), g.jsx("h1", {
							className: "ny-main-year",
							children: L.animated.nyMainYear
						}), g.jsx("img", {
							src: Im,
							alt: "celebrate",
							className: "ny-gif"
						}), g.jsxs("div", {
							className: "ny-divider",
							children: [g.jsx("div", {
								className: "line"
							}), g.jsx("div", {
								className: "diamond"
							}), g.jsx("div", {
								className: "line"
							})]
						}), g.jsx(z.p, {
							className: "ny-subtitle",
							initial: {
								opacity: 0
							},
							animate: {
								opacity: 1
							},
							transition: {
								delay: 3.2,
								duration: 1
							},
							children: L.animated.nySubtitle
						})]
					}), g.jsxs(z.div, {
						className: "ny-bottom-status",
						initial: {
							opacity: 0
						},
						animate: {
							opacity: .6
						},
						transition: {
							delay: 4.5
						},
						children: [g.jsx("div", {
							className: "pulse-dot"
						}), g.jsx("span", {
							children: L.animated.nyBottomStatus
						})]
					})]
				})]
			}, "original-intro")
		}), e === "main" && g.jsxs(z.div, {
			className: "app-main-wrapper",
			initial: {
				opacity: 0
			},
			animate: {
				opacity: 1
			},
			transition: {
				duration: 1
			},
			children: [g.jsx(aS, {}), g.jsx(Ss, {
				mode: "wait",
				children: g.jsxs(z.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -20
					},
					transition: {
						duration: .6
					},
					className: "page-container",
					children: [n === 0 && g.jsx(Ww, {
						onEnter: () => i(1)
					}), n === 1 && g.jsx(Yw, {
						onNext: () => i(2)
					}), n === 2 && g.jsx(tS, {
						onNext: () => i(3)
					}), n === 3 && g.jsx(iS, {
						onNext: () => i(4)
					}), n === 4 && g.jsx(oS, {
						onRestart: () => t("tv")
					})]
				}, n)
			})]
		}), g.jsx("style", {
			children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@300;600&display=swap');

        /* --- TV STYLES --- */
        .tv-stage {
          position: fixed;
          inset: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
        }
        .tv-frame {
          width: 90%;
          max-width: 900px;
          background: #1a1a1a;
          padding: 15px;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(0,0,0,1);
        }
        .tv-inner-screen {
          position: relative;
          aspect-ratio: 16/9;
          background: #000;
          overflow: hidden;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tv-gif {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          filter: contrast(1.2);
        }
        .tv-noise {
          position: absolute;
          inset: 0;
          background: url('https://media.giphy.com/media/oEI9uWUqWMrBK/giphy.gif');
          opacity: 0.05;
          z-index: 2;
          pointer-events: none;
        }
        .tv-text-container {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1rem, 4vw, 1.8rem);
          line-height: 1.8;
          text-shadow: 0 0 20px rgba(0,0,0,1);
        }
        .tv-bold-text {
          font-weight: 600;
          color: #FFD700;
        }

        /* --- YOUR ORIGINAL OVERLAY STYLES --- */
        .ny-master-overlay {
          position: fixed;
          inset: 0;
          z-index: 100000;
          background: #020617;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sky-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
        }

        .star-blink {
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          animation: starPulse 3s infinite ease-in-out;
        }

        .realistic-rocket {
          position: absolute;
          width: 2px;
          height: 60px;
          z-index: 5;
        }
        .rocket-spark-tail {
          height: 100%;
          width: 100%;
          background: linear-gradient(to top, transparent, #fbbf24);
          filter: blur(1px);
        }
        .rocket-glow-head {
          position: absolute;
          top: 0;
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          transform: translateX(-30%);
          box-shadow: 0 0 15px 4px #fbbf24;
        }

        .explosion-container { position: absolute; z-index: 6; }
        .realistic-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          filter: blur(0.5px);
          box-shadow: 0 0 8px currentColor;
        }
        .explosion-flash {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          z-index: 4;
        }

        .ny-text-reveal {
          text-align: center;
          z-index: 10;
          color: white;
        }
        .ny-label {
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 6px;
          font-size: 0.75rem;
          color: #94a3b8;
          display: block;
          margin-bottom: 10px;
        }
        .ny-main-year {
          font-family: 'Playfair Display', serif;
          display: inline-block;
          font-size: 8rem;
          line-height: 1;
          margin: 0;
          background: linear-gradient(to bottom, #FFFFFF 40%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }
        .ny-gif { display: inline-block; width: 72px; height: 72px; margin-left: 12px; vertical-align: middle; animation: nyGifFloat 1.6s ease-in-out infinite; }
        @keyframes nyGifFloat { 0% { transform: translateY(0); } 50% { transform: translateY(-8px) scale(1.02); } 100% { transform: translateY(0); } }
        .ny-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 15px 0;
        }
        .ny-divider .line { width: 50px; height: 1px; background: rgba(212, 175, 55, 0.4); }
        .ny-divider .diamond { width: 6px; height: 6px; background: #D4AF37; transform: rotate(45deg); }

        .ny-subtitle {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.4rem;
          color: #e2e8f0;
        }

        .ny-bottom-status {
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #D4AF37;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #D4AF37;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes starPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }

        @media (max-width: 768px) {
          .ny-main-year { font-size: 5rem; }
          .ny-subtitle { font-size: 1.1rem; }
        }
      `
		})]
	})
}
rp(document.getElementById("root")).render(g.jsx(N.StrictMode, {
	children: g.jsx(uS, {})
}));