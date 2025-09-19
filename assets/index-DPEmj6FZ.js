(function() {
  const x = document.createElement("link").relList;
  if (x && x.supports && x.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) s(T);
  new MutationObserver(T => {
    for (const O of T)
      if (O.type === "childList")
        for (const H of O.addedNodes) H.tagName === "LINK" && H.rel === "modulepreload" && s(H)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function p(T) {
    const O = {};
    return T.integrity && (O.integrity = T.integrity), T.referrerPolicy && (O.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? O.credentials = "include" : T.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin", O
  }

  function s(T) {
    if (T.ep) return;
    T.ep = !0;
    const O = p(T);
    fetch(T.href, O)
  }
})();
var pf = {
    exports: {}
  },
  Un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;

function M0() {
  if (Nd) return Un;
  Nd = 1;
  var f = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.fragment");

  function p(s, T, O) {
    var H = null;
    if (O !== void 0 && (H = "" + O), T.key !== void 0 && (H = "" + T.key), "key" in T) {
      O = {};
      for (var Q in T) Q !== "key" && (O[Q] = T[Q])
    } else O = T;
    return T = O.ref, {
      $$typeof: f,
      type: s,
      key: H,
      ref: T !== void 0 ? T : null,
      props: O
    }
  }
  return Un.Fragment = x, Un.jsx = p, Un.jsxs = p, Un
}
var Md;

function _0() {
  return Md || (Md = 1, pf.exports = M0()), pf.exports
}
var d = _0(),
  xf = {
    exports: {}
  },
  J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;

function O0() {
  if (_d) return J;
  _d = 1;
  var f = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    k = Symbol.iterator;

  function W(o) {
    return o === null || typeof o != "object" ? null : (o = k && o[k] || o["@@iterator"], typeof o == "function" ? o : null)
  }
  var xl = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    cl = Object.assign,
    yl = {};

  function bl(o, M, q) {
    this.props = o, this.context = M, this.refs = yl, this.updater = q || xl
  }
  bl.prototype.isReactComponent = {}, bl.prototype.setState = function(o, M) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, M, "setState")
  }, bl.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate")
  };

  function Wl() {}
  Wl.prototype = bl.prototype;

  function Fl(o, M, q) {
    this.props = o, this.context = M, this.refs = yl, this.updater = q || xl
  }
  var zl = Fl.prototype = new Wl;
  zl.constructor = Fl, cl(zl, bl.prototype), zl.isPureReactComponent = !0;
  var Yl = Array.isArray,
    $ = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    },
    Ml = Object.prototype.hasOwnProperty;

  function Hl(o, M, q, R, C, ll) {
    return q = ll.ref, {
      $$typeof: f,
      type: o,
      key: M,
      ref: q !== void 0 ? q : null,
      props: ll
    }
  }

  function w(o, M) {
    return Hl(o.type, M, void 0, void 0, void 0, o.props)
  }

  function Rl(o) {
    return typeof o == "object" && o !== null && o.$$typeof === f
  }

  function qt(o) {
    var M = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + o.replace(/[=:]/g, function(q) {
      return M[q]
    })
  }
  var mt = /\/+/g;

  function _l(o, M) {
    return typeof o == "object" && o !== null && o.key != null ? qt("" + o.key) : M.toString(36)
  }

  function Mt() {}

  function zt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Mt, Mt) : (o.status = "pending", o.then(function(M) {
            o.status === "pending" && (o.status = "fulfilled", o.value = M)
          }, function(M) {
            o.status === "pending" && (o.status = "rejected", o.reason = M)
          })), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason
        }
    }
    throw o
  }

  function Sl(o, M, q, R, C) {
    var ll = typeof o;
    (ll === "undefined" || ll === "boolean") && (o = null);
    var K = !1;
    if (o === null) K = !0;
    else switch (ll) {
      case "bigint":
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case f:
          case x:
            K = !0;
            break;
          case D:
            return K = o._init, Sl(K(o._payload), M, q, R, C)
        }
    }
    if (K) return C = C(o), K = R === "" ? "." + _l(o, 0) : R, Yl(C) ? (q = "", K != null && (q = K.replace(mt, "$&/") + "/"), Sl(C, M, q, "", function(at) {
      return at
    })) : C != null && (Rl(C) && (C = w(C, q + (C.key == null || o && o.key === C.key ? "" : ("" + C.key).replace(mt, "$&/") + "/") + K)), M.push(C)), 1;
    K = 0;
    var nl = R === "" ? "." : R + ":";
    if (Yl(o))
      for (var hl = 0; hl < o.length; hl++) R = o[hl], ll = nl + _l(R, hl), K += Sl(R, M, q, ll, C);
    else if (hl = W(o), typeof hl == "function")
      for (o = hl.call(o), hl = 0; !(R = o.next()).done;) R = R.value, ll = nl + _l(R, hl++), K += Sl(R, M, q, ll, C);
    else if (ll === "object") {
      if (typeof o.then == "function") return Sl(zt(o), M, q, R, C);
      throw M = String(o), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.")
    }
    return K
  }

  function A(o, M, q) {
    if (o == null) return o;
    var R = [],
      C = 0;
    return Sl(o, R, "", "", function(ll) {
      return M.call(q, ll, C++)
    }), R
  }

  function U(o) {
    if (o._status === -1) {
      var M = o._result;
      M = M(), M.then(function(q) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = q)
      }, function(q) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = q)
      }), o._status === -1 && (o._status = 0, o._result = M)
    }
    if (o._status === 1) return o._result.default;
    throw o._result
  }
  var j = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(M)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return
    }
    console.error(o)
  };

  function fl() {}
  return J.Children = {
    map: A,
    forEach: function(o, M, q) {
      A(o, function() {
        M.apply(this, arguments)
      }, q)
    },
    count: function(o) {
      var M = 0;
      return A(o, function() {
        M++
      }), M
    },
    toArray: function(o) {
      return A(o, function(M) {
        return M
      }) || []
    },
    only: function(o) {
      if (!Rl(o)) throw Error("React.Children.only expected to receive a single React element child.");
      return o
    }
  }, J.Component = bl, J.Fragment = p, J.Profiler = T, J.PureComponent = Fl, J.StrictMode = s, J.Suspense = _, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return $.H.useMemoCache(o)
    }
  }, J.cache = function(o) {
    return function() {
      return o.apply(null, arguments)
    }
  }, J.cloneElement = function(o, M, q) {
    if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
    var R = cl({}, o.props),
      C = o.key,
      ll = void 0;
    if (M != null)
      for (K in M.ref !== void 0 && (ll = void 0), M.key !== void 0 && (C = "" + M.key), M) !Ml.call(M, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && M.ref === void 0 || (R[K] = M[K]);
    var K = arguments.length - 2;
    if (K === 1) R.children = q;
    else if (1 < K) {
      for (var nl = Array(K), hl = 0; hl < K; hl++) nl[hl] = arguments[hl + 2];
      R.children = nl
    }
    return Hl(o.type, C, void 0, void 0, ll, R)
  }, J.createContext = function(o) {
    return o = {
      $$typeof: H,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: O,
      _context: o
    }, o
  }, J.createElement = function(o, M, q) {
    var R, C = {},
      ll = null;
    if (M != null)
      for (R in M.key !== void 0 && (ll = "" + M.key), M) Ml.call(M, R) && R !== "key" && R !== "__self" && R !== "__source" && (C[R] = M[R]);
    var K = arguments.length - 2;
    if (K === 1) C.children = q;
    else if (1 < K) {
      for (var nl = Array(K), hl = 0; hl < K; hl++) nl[hl] = arguments[hl + 2];
      C.children = nl
    }
    if (o && o.defaultProps)
      for (R in K = o.defaultProps, K) C[R] === void 0 && (C[R] = K[R]);
    return Hl(o, ll, void 0, void 0, null, C)
  }, J.createRef = function() {
    return {
      current: null
    }
  }, J.forwardRef = function(o) {
    return {
      $$typeof: Q,
      render: o
    }
  }, J.isValidElement = Rl, J.lazy = function(o) {
    return {
      $$typeof: D,
      _payload: {
        _status: -1,
        _result: o
      },
      _init: U
    }
  }, J.memo = function(o, M) {
    return {
      $$typeof: S,
      type: o,
      compare: M === void 0 ? null : M
    }
  }, J.startTransition = function(o) {
    var M = $.T,
      q = {};
    $.T = q;
    try {
      var R = o(),
        C = $.S;
      C !== null && C(q, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(fl, j)
    } catch (ll) {
      j(ll)
    } finally {
      $.T = M
    }
  }, J.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh()
  }, J.use = function(o) {
    return $.H.use(o)
  }, J.useActionState = function(o, M, q) {
    return $.H.useActionState(o, M, q)
  }, J.useCallback = function(o, M) {
    return $.H.useCallback(o, M)
  }, J.useContext = function(o) {
    return $.H.useContext(o)
  }, J.useDebugValue = function() {}, J.useDeferredValue = function(o, M) {
    return $.H.useDeferredValue(o, M)
  }, J.useEffect = function(o, M, q) {
    var R = $.H;
    if (typeof q == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return R.useEffect(o, M)
  }, J.useId = function() {
    return $.H.useId()
  }, J.useImperativeHandle = function(o, M, q) {
    return $.H.useImperativeHandle(o, M, q)
  }, J.useInsertionEffect = function(o, M) {
    return $.H.useInsertionEffect(o, M)
  }, J.useLayoutEffect = function(o, M) {
    return $.H.useLayoutEffect(o, M)
  }, J.useMemo = function(o, M) {
    return $.H.useMemo(o, M)
  }, J.useOptimistic = function(o, M) {
    return $.H.useOptimistic(o, M)
  }, J.useReducer = function(o, M, q) {
    return $.H.useReducer(o, M, q)
  }, J.useRef = function(o) {
    return $.H.useRef(o)
  }, J.useState = function(o) {
    return $.H.useState(o)
  }, J.useSyncExternalStore = function(o, M, q) {
    return $.H.useSyncExternalStore(o, M, q)
  }, J.useTransition = function() {
    return $.H.useTransition()
  }, J.version = "19.1.0", J
}
var Od;

function Rf() {
  return Od || (Od = 1, xf.exports = O0()), xf.exports
}
var Nl = Rf(),
  Sf = {
    exports: {}
  },
  Hn = {},
  Af = {
    exports: {}
  },
  zf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;

function j0() {
  return jd || (jd = 1, function(f) {
    function x(A, U) {
      var j = A.length;
      A.push(U);
      l: for (; 0 < j;) {
        var fl = j - 1 >>> 1,
          o = A[fl];
        if (0 < T(o, U)) A[fl] = U, A[j] = o, j = fl;
        else break l
      }
    }

    function p(A) {
      return A.length === 0 ? null : A[0]
    }

    function s(A) {
      if (A.length === 0) return null;
      var U = A[0],
        j = A.pop();
      if (j !== U) {
        A[0] = j;
        l: for (var fl = 0, o = A.length, M = o >>> 1; fl < M;) {
          var q = 2 * (fl + 1) - 1,
            R = A[q],
            C = q + 1,
            ll = A[C];
          if (0 > T(R, j)) C < o && 0 > T(ll, R) ? (A[fl] = ll, A[C] = j, fl = C) : (A[fl] = R, A[q] = j, fl = q);
          else if (C < o && 0 > T(ll, j)) A[fl] = ll, A[C] = j, fl = C;
          else break l
        }
      }
      return U
    }

    function T(A, U) {
      var j = A.sortIndex - U.sortIndex;
      return j !== 0 ? j : A.id - U.id
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      f.unstable_now = function() {
        return O.now()
      }
    } else {
      var H = Date,
        Q = H.now();
      f.unstable_now = function() {
        return H.now() - Q
      }
    }
    var _ = [],
      S = [],
      D = 1,
      k = null,
      W = 3,
      xl = !1,
      cl = !1,
      yl = !1,
      bl = !1,
      Wl = typeof setTimeout == "function" ? setTimeout : null,
      Fl = typeof clearTimeout == "function" ? clearTimeout : null,
      zl = typeof setImmediate < "u" ? setImmediate : null;

    function Yl(A) {
      for (var U = p(S); U !== null;) {
        if (U.callback === null) s(S);
        else if (U.startTime <= A) s(S), U.sortIndex = U.expirationTime, x(_, U);
        else break;
        U = p(S)
      }
    }

    function $(A) {
      if (yl = !1, Yl(A), !cl)
        if (p(_) !== null) cl = !0, Ml || (Ml = !0, _l());
        else {
          var U = p(S);
          U !== null && Sl($, U.startTime - A)
        }
    }
    var Ml = !1,
      Hl = -1,
      w = 5,
      Rl = -1;

    function qt() {
      return bl ? !0 : !(f.unstable_now() - Rl < w)
    }

    function mt() {
      if (bl = !1, Ml) {
        var A = f.unstable_now();
        Rl = A;
        var U = !0;
        try {
          l: {
            cl = !1,
            yl && (yl = !1, Fl(Hl), Hl = -1),
            xl = !0;
            var j = W;
            try {
              t: {
                for (Yl(A), k = p(_); k !== null && !(k.expirationTime > A && qt());) {
                  var fl = k.callback;
                  if (typeof fl == "function") {
                    k.callback = null, W = k.priorityLevel;
                    var o = fl(k.expirationTime <= A);
                    if (A = f.unstable_now(), typeof o == "function") {
                      k.callback = o, Yl(A), U = !0;
                      break t
                    }
                    k === p(_) && s(_), Yl(A)
                  } else s(_);
                  k = p(_)
                }
                if (k !== null) U = !0;
                else {
                  var M = p(S);
                  M !== null && Sl($, M.startTime - A), U = !1
                }
              }
              break l
            }
            finally {
              k = null, W = j, xl = !1
            }
            U = void 0
          }
        }
        finally {
          U ? _l() : Ml = !1
        }
      }
    }
    var _l;
    if (typeof zl == "function") _l = function() {
      zl(mt)
    };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel,
        zt = Mt.port2;
      Mt.port1.onmessage = mt, _l = function() {
        zt.postMessage(null)
      }
    } else _l = function() {
      Wl(mt, 0)
    };

    function Sl(A, U) {
      Hl = Wl(function() {
        A(f.unstable_now())
      }, U)
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(A) {
      A.callback = null
    }, f.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < A ? Math.floor(1e3 / A) : 5
    }, f.unstable_getCurrentPriorityLevel = function() {
      return W
    }, f.unstable_next = function(A) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = W
      }
      var j = W;
      W = U;
      try {
        return A()
      } finally {
        W = j
      }
    }, f.unstable_requestPaint = function() {
      bl = !0
    }, f.unstable_runWithPriority = function(A, U) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3
      }
      var j = W;
      W = A;
      try {
        return U()
      } finally {
        W = j
      }
    }, f.unstable_scheduleCallback = function(A, U, j) {
      var fl = f.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? fl + j : fl) : j = fl, A) {
        case 1:
          var o = -1;
          break;
        case 2:
          o = 250;
          break;
        case 5:
          o = 1073741823;
          break;
        case 4:
          o = 1e4;
          break;
        default:
          o = 5e3
      }
      return o = j + o, A = {
        id: D++,
        callback: U,
        priorityLevel: A,
        startTime: j,
        expirationTime: o,
        sortIndex: -1
      }, j > fl ? (A.sortIndex = j, x(S, A), p(_) === null && A === p(S) && (yl ? (Fl(Hl), Hl = -1) : yl = !0, Sl($, j - fl))) : (A.sortIndex = o, x(_, A), cl || xl || (cl = !0, Ml || (Ml = !0, _l()))), A
    }, f.unstable_shouldYield = qt, f.unstable_wrapCallback = function(A) {
      var U = W;
      return function() {
        var j = W;
        W = U;
        try {
          return A.apply(this, arguments)
        } finally {
          W = j
        }
      }
    }
  }(zf)), zf
}
var Rd;

function R0() {
  return Rd || (Rd = 1, Af.exports = j0()), Af.exports
}
var Tf = {
    exports: {}
  },
  Jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;

function D0() {
  if (Dd) return Jl;
  Dd = 1;
  var f = Rf();

  function x(_) {
    var S = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++) S += "&args[]=" + encodeURIComponent(arguments[D])
    }
    return "Minified React error #" + _ + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function p() {}
  var s = {
      d: {
        f: p,
        r: function() {
          throw Error(x(522))
        },
        D: p,
        C: p,
        L: p,
        m: p,
        X: p,
        S: p,
        M: p
      },
      p: 0,
      findDOMNode: null
    },
    T = Symbol.for("react.portal");

  function O(_, S, D) {
    var k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: k == null ? null : "" + k,
      children: _,
      containerInfo: S,
      implementation: D
    }
  }
  var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function Q(_, S) {
    if (_ === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : ""
  }
  return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Jl.createPortal = function(_, S) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11) throw Error(x(299));
    return O(_, S, null, D)
  }, Jl.flushSync = function(_) {
    var S = H.T,
      D = s.p;
    try {
      if (H.T = null, s.p = 2, _) return _()
    } finally {
      H.T = S, s.p = D, s.d.f()
    }
  }, Jl.preconnect = function(_, S) {
    typeof _ == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, s.d.C(_, S))
  }, Jl.prefetchDNS = function(_) {
    typeof _ == "string" && s.d.D(_)
  }, Jl.preinit = function(_, S) {
    if (typeof _ == "string" && S && typeof S.as == "string") {
      var D = S.as,
        k = Q(D, S.crossOrigin),
        W = typeof S.integrity == "string" ? S.integrity : void 0,
        xl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      D === "style" ? s.d.S(_, typeof S.precedence == "string" ? S.precedence : void 0, {
        crossOrigin: k,
        integrity: W,
        fetchPriority: xl
      }) : D === "script" && s.d.X(_, {
        crossOrigin: k,
        integrity: W,
        fetchPriority: xl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      })
    }
  }, Jl.preinitModule = function(_, S) {
    if (typeof _ == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var D = Q(S.as, S.crossOrigin);
          s.d.M(_, {
            crossOrigin: D,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          })
        }
      } else S == null && s.d.M(_)
  }, Jl.preload = function(_, S) {
    if (typeof _ == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var D = S.as,
        k = Q(D, S.crossOrigin);
      s.d.L(_, D, {
        crossOrigin: k,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      })
    }
  }, Jl.preloadModule = function(_, S) {
    if (typeof _ == "string")
      if (S) {
        var D = Q(S.as, S.crossOrigin);
        s.d.m(_, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: D,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        })
      } else s.d.m(_)
  }, Jl.requestFormReset = function(_) {
    s.d.r(_)
  }, Jl.unstable_batchedUpdates = function(_, S) {
    return _(S)
  }, Jl.useFormState = function(_, S, D) {
    return H.H.useFormState(_, S, D)
  }, Jl.useFormStatus = function() {
    return H.H.useHostTransitionStatus()
  }, Jl.version = "19.1.0", Jl
}
var Ud;

function U0() {
  if (Ud) return Tf.exports;
  Ud = 1;

  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
    } catch (x) {
      console.error(x)
    }
  }
  return f(), Tf.exports = D0(), Tf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;

function H0() {
  if (Hd) return Hn;
  Hd = 1;
  var f = R0(),
    x = Rf(),
    p = U0();

  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function T(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
  }

  function O(l) {
    var t = l,
      e = l;
    if (l.alternate)
      for (; t.return;) t = t.return;
    else {
      l = t;
      do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return; while (l)
    }
    return t.tag === 3 ? e : null
  }

  function H(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function Q(l) {
    if (O(l) !== l) throw Error(s(188))
  }

  function _(l) {
    var t = l.alternate;
    if (!t) {
      if (t = O(l), t === null) throw Error(s(188));
      return t !== l ? null : l
    }
    for (var e = l, a = t;;) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue
        }
        break
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === e) return Q(n), l;
          if (u === a) return Q(n), t;
          u = u.sibling
        }
        throw Error(s(188))
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c;) {
          if (c === e) {
            i = !0, e = n, a = u;
            break
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break
          }
          c = c.sibling
        }
        if (!i) {
          for (c = u.child; c;) {
            if (c === e) {
              i = !0, e = u, a = n;
              break
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break
            }
            c = c.sibling
          }
          if (!i) throw Error(s(189))
        }
      }
      if (e.alternate !== a) throw Error(s(190))
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t
  }

  function S(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (t = S(l), t !== null) return t;
      l = l.sibling
    }
    return null
  }
  var D = Object.assign,
    k = Symbol.for("react.element"),
    W = Symbol.for("react.transitional.element"),
    xl = Symbol.for("react.portal"),
    cl = Symbol.for("react.fragment"),
    yl = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    Wl = Symbol.for("react.provider"),
    Fl = Symbol.for("react.consumer"),
    zl = Symbol.for("react.context"),
    Yl = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    Ml = Symbol.for("react.suspense_list"),
    Hl = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    Rl = Symbol.for("react.activity"),
    qt = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;

  function _l(l) {
    return l === null || typeof l != "object" ? null : (l = mt && l[mt] || l["@@iterator"], typeof l == "function" ? l : null)
  }
  var Mt = Symbol.for("react.client.reference");

  function zt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Mt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case cl:
        return "Fragment";
      case bl:
        return "Profiler";
      case yl:
        return "StrictMode";
      case $:
        return "Suspense";
      case Ml:
        return "SuspenseList";
      case Rl:
        return "Activity"
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case xl:
        return "Portal";
      case zl:
        return (l.displayName || "Context") + ".Provider";
      case Fl:
        return (l._context.displayName || "Context") + ".Consumer";
      case Yl:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case Hl:
        return t = l.displayName || null, t !== null ? t : zt(l.type) || "Memo";
      case w:
        t = l._payload, l = l._init;
        try {
          return zt(l(t))
        } catch {}
    }
    return null
  }
  var Sl = Array.isArray,
    A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    fl = [],
    o = -1;

  function M(l) {
    return {
      current: l
    }
  }

  function q(l) {
    0 > o || (l.current = fl[o], fl[o] = null, o--)
  }

  function R(l, t) {
    o++, fl[o] = l.current, l.current = t
  }
  var C = M(null),
    ll = M(null),
    K = M(null),
    nl = M(null);

  function hl(l, t) {
    switch (R(K, t), R(ll, l), R(C, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? ld(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = ld(t), l = td(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0
        }
    }
    q(C), R(C, l)
  }

  function at() {
    q(C), q(ll), q(K)
  }

  function Pt(l) {
    l.memoizedState !== null && R(nl, l);
    var t = C.current,
      e = td(t, l.type);
    t !== e && (R(ll, l), R(C, e))
  }

  function le(l) {
    ll.current === l && (q(C), q(ll)), nl.current === l && (q(nl), _n._currentValue = j)
  }
  var te = Object.prototype.hasOwnProperty,
    ui = f.unstable_scheduleCallback,
    ii = f.unstable_cancelCallback,
    um = f.unstable_shouldYield,
    im = f.unstable_requestPaint,
    _t = f.unstable_now,
    cm = f.unstable_getCurrentPriorityLevel,
    Uf = f.unstable_ImmediatePriority,
    Hf = f.unstable_UserBlockingPriority,
    Cn = f.unstable_NormalPriority,
    fm = f.unstable_LowPriority,
    qf = f.unstable_IdlePriority,
    sm = f.log,
    rm = f.unstable_setDisableYieldValue,
    qa = null,
    nt = null;

  function ee(l) {
    if (typeof sm == "function" && rm(l), nt && typeof nt.setStrictMode == "function") try {
      nt.setStrictMode(qa, l)
    } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : mm,
    om = Math.log,
    dm = Math.LN2;

  function mm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (om(l) / dm | 0) | 0
  }
  var Bn = 256,
    Yn = 4194304;

  function Me(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l
    }
  }

  function Gn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Me(a) : (i &= c, i !== 0 ? n = Me(i) : e || (e = c & ~l, e !== 0 && (n = Me(e))))) : (c = a & ~u, c !== 0 ? n = Me(c) : i !== 0 ? n = Me(i) : e || (e = a & ~l, e !== 0 && (n = Me(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n
  }

  function Ca(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
  }

  function hm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Cf() {
    var l = Bn;
    return Bn <<= 1, (Bn & 4194048) === 0 && (Bn = 256), l
  }

  function Bf() {
    var l = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), l
  }

  function ci(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t
  }

  function Ba(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
  }

  function vm(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements,
      r = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e;) {
      var z = 31 - ut(e),
        N = 1 << z;
      c[z] = 0, r[z] = -1;
      var g = y[z];
      if (g !== null)
        for (y[z] = null, z = 0; z < g.length; z++) {
          var b = g[z];
          b !== null && (b.lane &= -536870913)
        }
      e &= ~N
    }
    a !== 0 && Yf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t))
  }

  function Yf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ut(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 4194090
  }

  function Gf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e;) {
      var a = 31 - ut(e),
        n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n
    }
  }

  function fi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0
    }
    return l
  }

  function si(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function Xf() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : xd(l.type))
  }

  function ym(l, t) {
    var e = U.p;
    try {
      return U.p = l, t()
    } finally {
      U.p = e
    }
  }
  var ae = Math.random().toString(36).slice(2),
    Kl = "__reactFiber$" + ae,
    Il = "__reactProps$" + ae,
    Ke = "__reactContainer$" + ae,
    ri = "__reactEvents$" + ae,
    gm = "__reactListeners$" + ae,
    bm = "__reactHandles$" + ae,
    wf = "__reactResources$" + ae,
    Ya = "__reactMarker$" + ae;

  function oi(l) {
    delete l[Kl], delete l[Il], delete l[ri], delete l[gm], delete l[bm]
  }

  function ke(l) {
    var t = l[Kl];
    if (t) return t;
    for (var e = l.parentNode; e;) {
      if (t = e[Ke] || e[Kl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ud(l); l !== null;) {
            if (e = l[Kl]) return e;
            l = ud(l)
          }
        return t
      }
      l = e, e = l.parentNode
    }
    return null
  }

  function Je(l) {
    if (l = l[Kl] || l[Ke]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
    }
    return null
  }

  function Ga(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33))
  }

  function We(l) {
    var t = l[wf];
    return t || (t = l[wf] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function Gl(l) {
    l[Ya] = !0
  }
  var Qf = new Set,
    Zf = {};

  function _e(l, t) {
    $e(l, t), $e(l + "Capture", t)
  }

  function $e(l, t) {
    for (Zf[l] = t, l = 0; l < t.length; l++) Qf.add(t[l])
  }
  var pm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Vf = {},
    Lf = {};

  function xm(l) {
    return te.call(Lf, l) ? !0 : te.call(Vf, l) ? !1 : pm.test(l) ? Lf[l] = !0 : (Vf[l] = !0, !1)
  }

  function Xn(l, t, e) {
    if (xm(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return
            }
        }
        l.setAttribute(t, "" + e)
      }
  }

  function wn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return
      }
      l.setAttribute(t, "" + e)
    }
  }

  function Ct(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return
      }
      l.setAttributeNS(t, e, "" + a)
    }
  }
  var di, Kf;

  function Fe(l) {
    if (di === void 0) try {
      throw Error()
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      di = t && t[1] || "", Kf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + di + l + Kf
  }
  var mi = !1;

  function hi(l, t) {
    if (!l || mi) return "";
    mi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var N = function() {
                throw Error()
              };
              if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, [])
                } catch (b) {
                  var g = b
                }
                Reflect.construct(l, [], N)
              } else {
                try {
                  N.call()
                } catch (b) {
                  g = b
                }
                l.call(N.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (b) {
                g = b
              }(N = l()) && typeof N.catch == "function" && N.catch(function() {})
            }
          } catch (b) {
            if (b && g && typeof b.stack == "string") return [b.stack, g.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var r = i.split(`
`),
          y = c.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot");) a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot");) n++;
        if (a === r.length || n === y.length)
          for (a = r.length - 1, n = y.length - 1; 1 <= a && 0 <= n && r[a] !== y[n];) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== y[n]) {
                  var z = `
` + r[a].replace(" at new ", " at ");
                  return l.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", l.displayName)), z
                } while (1 <= a && 0 <= n);
            break
          }
      }
    } finally {
      mi = !1, Error.prepareStackTrace = e
    }
    return (e = l ? l.displayName || l.name : "") ? Fe(e) : ""
  }

  function Sm(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Fe(l.type);
      case 16:
        return Fe("Lazy");
      case 13:
        return Fe("Suspense");
      case 19:
        return Fe("SuspenseList");
      case 0:
      case 15:
        return hi(l.type, !1);
      case 11:
        return hi(l.type.render, !1);
      case 1:
        return hi(l.type, !0);
      case 31:
        return Fe("Activity");
      default:
        return ""
    }
  }

  function kf(l) {
    try {
      var t = "";
      do t += Sm(l), l = l.return; while (l);
      return t
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack
    }
  }

  function ht(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return ""
    }
  }

  function Jf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function Am(l) {
    var t = Jf(l) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var n = e.get,
        u = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this)
        },
        set: function(i) {
          a = "" + i, u.call(this, i)
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a
        },
        setValue: function(i) {
          a = "" + i
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t]
        }
      }
    }
  }

  function Qn(l) {
    l._valueTracker || (l._valueTracker = Am(l))
  }

  function Wf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return l && (a = Jf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1
  }

  function Zn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body
    } catch {
      return l.body
    }
  }
  var zm = /[\n"\\]/g;

  function vt(l) {
    return l.replace(zm, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function vi(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ht(t)) : l.value !== "" + ht(t) && (l.value = "" + ht(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? yi(l, i, ht(t)) : e != null ? yi(l, i, ht(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ht(c) : l.removeAttribute("name")
  }

  function $f(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) return;
      e = e != null ? "" + ht(e) : "", t = t != null ? "" + ht(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
  }

  function yi(l, t, e) {
    t === "number" && Zn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
  }

  function Ie(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++) n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0)
    } else {
      for (e = "" + ht(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return
        }
        t !== null || l[n].disabled || (t = l[n])
      }
      t !== null && (t.selected = !0)
    }
  }

  function Ff(l, t, e) {
    if (t != null && (t = "" + ht(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return
    }
    l.defaultValue = e != null ? "" + ht(e) : ""
  }

  function If(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Sl(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0]
        }
        e = a
      }
      e == null && (e = ""), t = e
    }
    e = ht(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a)
  }

  function Pe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return
      }
    }
    l.textContent = t
  }
  var Tm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function Pf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Tm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
  }

  function ls(l, t, e) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (l = l.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t) a = t[n], t.hasOwnProperty(n) && e[n] !== a && Pf(l, n, a)
    } else
      for (var u in t) t.hasOwnProperty(u) && Pf(l, u, t[u])
  }

  function gi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Em = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    Nm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Vn(l) {
    return Nm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
  }
  var bi = null;

  function pi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
  }
  var la = null,
    ta = null;

  function ts(l) {
    var t = Je(l);
    if (t && (l = t.stateNode)) {
      var e = l[Il] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (vi(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode;) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Il] || null;
                if (!n) throw Error(s(90));
                vi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Wf(a)
          }
          break l;
        case "textarea":
          Ff(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Ie(l, !!e.multiple, t, !1)
      }
    }
  }
  var xi = !1;

  function es(l, t, e) {
    if (xi) return l(t, e);
    xi = !0;
    try {
      var a = l(t);
      return a
    } finally {
      if (xi = !1, (la !== null || ta !== null) && (Ou(), la && (t = la, l = ta, ta = la = null, ts(t), l)))
        for (t = 0; t < l.length; t++) ts(l[t])
    }
  }

  function Xa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Il] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(s(231, t, typeof e));
    return e
  }
  var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Si = !1;
  if (Bt) try {
    var wa = {};
    Object.defineProperty(wa, "passive", {
      get: function() {
        Si = !0
      }
    }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa)
  } catch {
    Si = !1
  }
  var ne = null,
    Ai = null,
    Ln = null;

  function as() {
    if (Ln) return Ln;
    var l, t = Ai,
      e = t.length,
      a, n = "value" in ne ? ne.value : ne.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++);
    return Ln = n.slice(l, 1 < a ? 1 - a : void 0)
  }

  function Kn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
  }

  function kn() {
    return !0
  }

  function ns() {
    return !1
  }

  function Pl(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kn : ns, this.isPropagationStopped = ns, this
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = kn)
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = kn)
      },
      persist: function() {},
      isPersistent: kn
    }), t
  }
  var Oe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Jn = Pl(Oe),
    Qa = D({}, Oe, {
      view: 0,
      detail: 0
    }),
    Mm = Pl(Qa),
    zi, Ti, Za, Wn = D({}, Qa, {
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
      getModifierState: Ni,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== Za && (Za && l.type === "mousemove" ? (zi = l.screenX - Za.screenX, Ti = l.screenY - Za.screenY) : Ti = zi = 0, Za = l), zi)
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : Ti
      }
    }),
    us = Pl(Wn),
    _m = D({}, Wn, {
      dataTransfer: 0
    }),
    Om = Pl(_m),
    jm = D({}, Qa, {
      relatedTarget: 0
    }),
    Ei = Pl(jm),
    Rm = D({}, Oe, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Dm = Pl(Rm),
    Um = D({}, Oe, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData
      }
    }),
    Hm = Pl(Um),
    qm = D({}, Oe, {
      data: 0
    }),
    is = Pl(qm),
    Cm = {
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
    Bm = {
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
    Ym = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Gm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Ym[l]) ? !!t[l] : !1
  }

  function Ni() {
    return Gm
  }
  var Xm = D({}, Qa, {
      key: function(l) {
        if (l.key) {
          var t = Cm[l.key] || l.key;
          if (t !== "Unidentified") return t
        }
        return l.type === "keypress" ? (l = Kn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Bm[l.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ni,
      charCode: function(l) {
        return l.type === "keypress" ? Kn(l) : 0
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
      },
      which: function(l) {
        return l.type === "keypress" ? Kn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
      }
    }),
    wm = Pl(Xm),
    Qm = D({}, Wn, {
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
    cs = Pl(Qm),
    Zm = D({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ni
    }),
    Vm = Pl(Zm),
    Lm = D({}, Oe, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Km = Pl(Lm),
    km = D({}, Wn, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Jm = Pl(km),
    Wm = D({}, Oe, {
      newState: 0,
      oldState: 0
    }),
    $m = Pl(Wm),
    Fm = [9, 13, 27, 32],
    Mi = Bt && "CompositionEvent" in window,
    Va = null;
  Bt && "documentMode" in document && (Va = document.documentMode);
  var Im = Bt && "TextEvent" in window && !Va,
    fs = Bt && (!Mi || Va && 8 < Va && 11 >= Va),
    ss = " ",
    rs = !1;

  function os(l, t) {
    switch (l) {
      case "keyup":
        return Fm.indexOf(t.keyCode) !== -1;
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

  function ds(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
  }
  var ea = !1;

  function Pm(l, t) {
    switch (l) {
      case "compositionend":
        return ds(t);
      case "keypress":
        return t.which !== 32 ? null : (rs = !0, ss);
      case "textInput":
        return l = t.data, l === ss && rs ? null : l;
      default:
        return null
    }
  }

  function lh(l, t) {
    if (ea) return l === "compositionend" || !Mi && os(l, t) ? (l = as(), Ln = Ai = ne = null, ea = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return fs && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var th = {
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

  function ms(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!th[l.type] : t === "textarea"
  }

  function hs(l, t, e, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = qu(t, "onChange"), 0 < t.length && (e = new Jn("onChange", "change", null, e, a), l.push({
      event: e,
      listeners: t
    }))
  }
  var La = null,
    Ka = null;

  function eh(l) {
    Wo(l, 0)
  }

  function $n(l) {
    var t = Ga(l);
    if (Wf(t)) return l
  }

  function vs(l, t) {
    if (l === "change") return t
  }
  var ys = !1;
  if (Bt) {
    var _i;
    if (Bt) {
      var Oi = "oninput" in document;
      if (!Oi) {
        var gs = document.createElement("div");
        gs.setAttribute("oninput", "return;"), Oi = typeof gs.oninput == "function"
      }
      _i = Oi
    } else _i = !1;
    ys = _i && (!document.documentMode || 9 < document.documentMode)
  }

  function bs() {
    La && (La.detachEvent("onpropertychange", ps), Ka = La = null)
  }

  function ps(l) {
    if (l.propertyName === "value" && $n(Ka)) {
      var t = [];
      hs(t, Ka, l, pi(l)), es(eh, t)
    }
  }

  function ah(l, t, e) {
    l === "focusin" ? (bs(), La = t, Ka = e, La.attachEvent("onpropertychange", ps)) : l === "focusout" && bs()
  }

  function nh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return $n(Ka)
  }

  function uh(l, t) {
    if (l === "click") return $n(t)
  }

  function ih(l, t) {
    if (l === "input" || l === "change") return $n(t)
  }

  function ch(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
  }
  var it = typeof Object.is == "function" ? Object.is : ch;

  function ka(l, t) {
    if (it(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!te.call(t, n) || !it(l[n], t[n])) return !1
    }
    return !0
  }

  function xs(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l
  }

  function Ss(l, t) {
    var e = xs(l);
    l = 0;
    for (var a; e;) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t) return {
          node: e,
          offset: t - l
        };
        l = a
      }
      l: {
        for (; e;) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l
          }
          e = e.parentNode
        }
        e = void 0
      }
      e = xs(e)
    }
  }

  function As(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? As(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function zs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Zn(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var e = typeof t.contentWindow.location.href == "string"
      } catch {
        e = !1
      }
      if (e) l = t.contentWindow;
      else break;
      t = Zn(l.document)
    }
    return t
  }

  function ji(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
  }
  var fh = Bt && "documentMode" in document && 11 >= document.documentMode,
    aa = null,
    Ri = null,
    Ja = null,
    Di = !1;

  function Ts(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Di || aa == null || aa !== Zn(a) || (a = aa, "selectionStart" in a && ji(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && ka(Ja, a) || (Ja = a, a = qu(Ri, "onSelect"), 0 < a.length && (t = new Jn("onSelect", "select", null, t, e), l.push({
      event: t,
      listeners: a
    }), t.target = aa)))
  }

  function je(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
  }
  var na = {
      animationend: je("Animation", "AnimationEnd"),
      animationiteration: je("Animation", "AnimationIteration"),
      animationstart: je("Animation", "AnimationStart"),
      transitionrun: je("Transition", "TransitionRun"),
      transitionstart: je("Transition", "TransitionStart"),
      transitioncancel: je("Transition", "TransitionCancel"),
      transitionend: je("Transition", "TransitionEnd")
    },
    Ui = {},
    Es = {};
  Bt && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);

  function Re(l) {
    if (Ui[l]) return Ui[l];
    if (!na[l]) return l;
    var t = na[l],
      e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in Es) return Ui[l] = t[e];
    return l
  }
  var Ns = Re("animationend"),
    Ms = Re("animationiteration"),
    _s = Re("animationstart"),
    sh = Re("transitionrun"),
    rh = Re("transitionstart"),
    oh = Re("transitioncancel"),
    Os = Re("transitionend"),
    js = new Map,
    Hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Hi.push("scrollEnd");

  function Tt(l, t) {
    js.set(l, t), _e(t, [l])
  }
  var Rs = new WeakMap;

  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Rs.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: kf(t)
      }, Rs.set(l, t), t)
    }
    return {
      value: l,
      source: t,
      stack: kf(t)
    }
  }
  var gt = [],
    ua = 0,
    qi = 0;

  function Fn() {
    for (var l = ua, t = qi = ua = 0; t < l;) {
      var e = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var n = gt[t];
      gt[t++] = null;
      var u = gt[t];
      if (gt[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n
      }
      u !== 0 && Ds(e, n, u)
    }
  }

  function In(l, t, e, a) {
    gt[ua++] = l, gt[ua++] = t, gt[ua++] = e, gt[ua++] = a, qi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
  }

  function Ci(l, t, e, a) {
    return In(l, t, e, a), Pn(l)
  }

  function ia(l, t) {
    return In(l, null, null, t), Pn(l)
  }

  function Ds(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null;) u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - ut(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null
  }

  function Pn(l) {
    if (50 < xn) throw xn = 0, Qc = null, Error(s(185));
    for (var t = l.return; t !== null;) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null
  }
  var ca = {};

  function dh(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function ct(l, t, e, a) {
    return new dh(l, t, e, a)
  }

  function Bi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent)
  }

  function Yt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ct(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
  }

  function Us(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l
  }

  function lu(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Bi(l) && (i = 1);
    else if (typeof l == "string") i = h0(l, e, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Rl:
        return l = ct(31, e, t, n), l.elementType = Rl, l.lanes = u, l;
      case cl:
        return De(e.children, n, u, t);
      case yl:
        i = 8, n |= 24;
        break;
      case bl:
        return l = ct(12, e, t, n | 2), l.elementType = bl, l.lanes = u, l;
      case $:
        return l = ct(13, e, t, n), l.elementType = $, l.lanes = u, l;
      case Ml:
        return l = ct(19, e, t, n), l.elementType = Ml, l.lanes = u, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Wl:
          case zl:
            i = 10;
            break l;
          case Fl:
            i = 9;
            break l;
          case Yl:
            i = 11;
            break l;
          case Hl:
            i = 14;
            break l;
          case w:
            i = 16, a = null;
            break l
        }
        i = 29, e = Error(s(130, l === null ? "null" : typeof l, "")), a = null
    }
    return t = ct(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t
  }

  function De(l, t, e, a) {
    return l = ct(7, l, a, t), l.lanes = e, l
  }

  function Yi(l, t, e) {
    return l = ct(6, l, null, t), l.lanes = e, l
  }

  function Gi(l, t, e) {
    return t = ct(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t
  }
  var fa = [],
    sa = 0,
    tu = null,
    eu = 0,
    bt = [],
    pt = 0,
    Ue = null,
    Gt = 1,
    Xt = "";

  function He(l, t) {
    fa[sa++] = eu, fa[sa++] = tu, tu = l, eu = t
  }

  function Hs(l, t, e) {
    bt[pt++] = Gt, bt[pt++] = Xt, bt[pt++] = Ue, Ue = l;
    var a = Gt;
    l = Xt;
    var n = 32 - ut(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - ut(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Gt = 1 << 32 - ut(t) + n | e << n | a, Xt = u + l
    } else Gt = 1 << u | e << n | a, Xt = l
  }

  function Xi(l) {
    l.return !== null && (He(l, 1), Hs(l, 1, 0))
  }

  function wi(l) {
    for (; l === tu;) tu = fa[--sa], fa[sa] = null, eu = fa[--sa], fa[sa] = null;
    for (; l === Ue;) Ue = bt[--pt], bt[pt] = null, Xt = bt[--pt], bt[pt] = null, Gt = bt[--pt], bt[pt] = null
  }
  var $l = null,
    Tl = null,
    il = !1,
    qe = null,
    Ot = !1,
    Qi = Error(s(519));

  function Ce(l) {
    var t = Error(s(418, ""));
    throw Fa(yt(t, l)), Qi
  }

  function qs(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (t[Kl] = l, t[Il] = a, e) {
      case "dialog":
        el("cancel", t), el("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        el("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < An.length; e++) el(An[e], t);
        break;
      case "source":
        el("error", t);
        break;
      case "img":
      case "image":
      case "link":
        el("error", t), el("load", t);
        break;
      case "details":
        el("toggle", t);
        break;
      case "input":
        el("invalid", t), $f(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Qn(t);
        break;
      case "select":
        el("invalid", t);
        break;
      case "textarea":
        el("invalid", t), If(t, a.value, a.defaultValue, a.children), Qn(t)
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Po(t.textContent, e) ? (a.popover != null && (el("beforetoggle", t), el("toggle", t)), a.onScroll != null && el("scroll", t), a.onScrollEnd != null && el("scrollend", t), a.onClick != null && (t.onclick = Cu), t = !0) : t = !1, t || Ce(l)
  }

  function Cs(l) {
    for ($l = l.return; $l;) switch ($l.tag) {
      case 5:
      case 13:
        Ot = !1;
        return;
      case 27:
      case 3:
        Ot = !0;
        return;
      default:
        $l = $l.return
    }
  }

  function Wa(l) {
    if (l !== $l) return !1;
    if (!il) return Cs(l), il = !0, !1;
    var t = l.tag,
      e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || nf(l.type, l.memoizedProps)), e = !e), e && Tl && Ce(l), Cs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      l: {
        for (l = l.nextSibling, t = 0; l;) {
          if (l.nodeType === 8)
            if (e = l.data, e === "/$") {
              if (t === 0) {
                Tl = Nt(l.nextSibling);
                break l
              }
              t--
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          l = l.nextSibling
        }
        Tl = null
      }
    } else t === 27 ? (t = Tl, xe(l.type) ? (l = sf, sf = null, Tl = l) : Tl = t) : Tl = $l ? Nt(l.stateNode.nextSibling) : null;
    return !0
  }

  function $a() {
    Tl = $l = null, il = !1
  }

  function Bs() {
    var l = qe;
    return l !== null && (et === null ? et = l : et.push.apply(et, l), qe = null), l
  }

  function Fa(l) {
    qe === null ? qe = [l] : qe.push(l)
  }
  var Zi = M(null),
    Be = null,
    wt = null;

  function ue(l, t, e) {
    R(Zi, t._currentValue), t._currentValue = e
  }

  function Qt(l) {
    l._currentValue = Zi.current, q(Zi)
  }

  function Vi(l, t, e) {
    for (; l !== null;) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return
    }
  }

  function Li(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null;) {
          var c = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (c.context === t[r]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Vi(u.return, e, l), a || (i = null);
              break l
            } u = c.next
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(s(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Vi(i, e, l), i = null
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null;) {
          if (i === l) {
            i = null;
            break
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break
          }
          i = i.return
        }
      n = i
    }
  }

  function Ia(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(s(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          it(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
        }
      } else if (n === nl.current) {
        if (i = n.alternate, i === null) throw Error(s(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(_n) : l = [_n])
      }
      n = n.return
    }
    l !== null && Li(t, l, e, a), t.flags |= 262144
  }

  function au(l) {
    for (l = l.firstContext; l !== null;) {
      if (!it(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next
    }
    return !1
  }

  function Ye(l) {
    Be = l, wt = null, l = l.dependencies, l !== null && (l.firstContext = null)
  }

  function kl(l) {
    return Ys(Be, l)
  }

  function nu(l, t) {
    return Be === null && Ye(l), Ys(l, t)
  }

  function Ys(l, t) {
    var e = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: e,
        next: null
      }, wt === null) {
      if (l === null) throw Error(s(308));
      wt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288
    } else wt = wt.next = t;
    return e
  }
  var mh = typeof AbortController < "u" ? AbortController : function() {
      var l = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function(e, a) {
            l.push(a)
          }
        };
      this.abort = function() {
        t.aborted = !0, l.forEach(function(e) {
          return e()
        })
      }
    },
    hh = f.unstable_scheduleCallback,
    vh = f.unstable_NormalPriority,
    ql = {
      $$typeof: zl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Ki() {
    return {
      controller: new mh,
      data: new Map,
      refCount: 0
    }
  }

  function Pa(l) {
    l.refCount--, l.refCount === 0 && hh(vh, function() {
      l.controller.abort()
    })
  }
  var ln = null,
    ki = 0,
    ra = 0,
    oa = null;

  function yh(l, t) {
    if (ln === null) {
      var e = ln = [];
      ki = 0, ra = Wc(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a)
        }
      }
    }
    return ki++, t.then(Gs, Gs), t
  }

  function Gs() {
    if (--ki === 0 && ln !== null) {
      oa !== null && (oa.status = "fulfilled");
      var l = ln;
      ln = null, ra = 0, oa = null;
      for (var t = 0; t < l.length; t++)(0, l[t])()
    }
  }

  function gh(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          e.push(n)
        }
      };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var n = 0; n < e.length; n++)(0, e[n])(t)
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)(0, e[n])(void 0)
    }), a
  }
  var Xs = A.S;
  A.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && yh(l, t), Xs !== null && Xs(l, t)
  };
  var Ge = M(null);

  function Ji() {
    var l = Ge.current;
    return l !== null ? l : gl.pooledCache
  }

  function uu(l, t) {
    t === null ? R(Ge, Ge.current) : R(Ge, t.pool)
  }

  function ws() {
    var l = Ji();
    return l === null ? null : {
      parent: ql._currentValue,
      pool: l
    }
  }
  var tn = Error(s(460)),
    Qs = Error(s(474)),
    iu = Error(s(542)),
    Wi = {
      then: function() {}
    };

  function Zs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected"
  }

  function cu() {}

  function Vs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(cu, cu), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ks(l), l;
      default:
        if (typeof t.status == "string") t.then(cu, cu);
        else {
          if (l = gl, l !== null && 100 < l.shellSuspendCounter) throw Error(s(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = a
            }
          }, function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = a
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ks(l), l
        }
        throw en = t, tn
    }
  }
  var en = null;

  function Ls() {
    if (en === null) throw Error(s(459));
    var l = en;
    return en = null, l
  }

  function Ks(l) {
    if (l === tn || l === iu) throw Error(s(483))
  }
  var ie = !1;

  function $i(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function Fi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    })
  }

  function ce(l) {
    return {
      lane: l,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function fe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (sl & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Pn(l), Ds(l, null, e), t
    }
    return In(l, a, t, e), Pn(l)
  }

  function an(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Gf(l, e)
    }
  }

  function Ii(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null,
        u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next
        } while (e !== null);
        u === null ? n = u = t : u = u.next = t
      } else n = u = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t
  }
  var Pi = !1;

  function nn() {
    if (Pi) {
      var l = oa;
      if (l !== null) throw l
    }
  }

  function un(l, t, e, a) {
    Pi = !1;
    var n = l.updateQueue;
    ie = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var r = c,
        y = r.next;
      r.next = null, i === null ? u = y : i.next = y, i = r;
      var z = l.alternate;
      z !== null && (z = z.updateQueue, c = z.lastBaseUpdate, c !== i && (c === null ? z.firstBaseUpdate = y : c.next = y, z.lastBaseUpdate = r))
    }
    if (u !== null) {
      var N = n.baseState;
      i = 0, z = y = r = null, c = u;
      do {
        var g = c.lane & -536870913,
          b = g !== c.lane;
        if (b ? (al & g) === g : (a & g) === g) {
          g !== 0 && g === ra && (Pi = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var L = l,
              Z = c;g = t;
            var ml = e;
            switch (Z.tag) {
              case 1:
                if (L = Z.payload, typeof L == "function") {
                  N = L.call(ml, N, g);
                  break l
                }
                N = L;
                break l;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = Z.payload, g = typeof L == "function" ? L.call(ml, N, g) : L, g == null) break l;
                N = D({}, N, g);
                break l;
              case 2:
                ie = !0
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, b && (l.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [g] : b.push(g))
        } else b = {
          lane: g,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, z === null ? (y = z = b, r = N) : z = z.next = b, i |= g;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          b = c, c = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null
        }
      } while (!0);
      z === null && (r = N), n.baseState = r, n.firstBaseUpdate = y, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), ye |= i, l.lanes = i, l.memoizedState = N
    }
  }

  function ks(l, t) {
    if (typeof l != "function") throw Error(s(191, l));
    l.call(t)
  }

  function Js(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) ks(e[l], t)
  }
  var da = M(null),
    fu = M(0);

  function Ws(l, t) {
    l = Wt, R(fu, l), R(da, t), Wt = l | t.baseLanes
  }

  function lc() {
    R(fu, Wt), R(da, da.current)
  }

  function tc() {
    Wt = fu.current, q(da), q(fu)
  }
  var se = 0,
    F = null,
    ol = null,
    Dl = null,
    su = !1,
    ma = !1,
    Xe = !1,
    ru = 0,
    cn = 0,
    ha = null,
    bh = 0;

  function Ol() {
    throw Error(s(321))
  }

  function ec(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!it(l[e], t[e])) return !1;
    return !0
  }

  function ac(l, t, e, a, n, u) {
    return se = u, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = l === null || l.memoizedState === null ? Dr : Ur, Xe = !1, u = e(a, n), Xe = !1, ma && (u = Fs(t, e, a, n)), $s(l), u
  }

  function $s(l) {
    A.H = yu;
    var t = ol !== null && ol.next !== null;
    if (se = 0, Dl = ol = F = null, su = !1, cn = 0, ha = null, t) throw Error(s(300));
    l === null || Xl || (l = l.dependencies, l !== null && au(l) && (Xl = !0))
  }

  function Fs(l, t, e, a) {
    F = l;
    var n = 0;
    do {
      if (ma && (ha = null), cn = 0, ma = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Dl = ol = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
      }
      A.H = Eh, u = t(e, a)
    } while (ma);
    return u
  }

  function ph() {
    var l = A.H,
      t = l.useState()[0];
    return t = typeof t.then == "function" ? fn(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (F.flags |= 1024), t
  }

  function nc() {
    var l = ru !== 0;
    return ru = 0, l
  }

  function uc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
  }

  function ic(l) {
    if (su) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next
      }
      su = !1
    }
    se = 0, Dl = ol = F = null, ma = !1, cn = ru = 0, ha = null
  }

  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dl === null ? F.memoizedState = Dl = l : Dl = Dl.next = l, Dl
  }

  function Ul() {
    if (ol === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null
    } else l = ol.next;
    var t = Dl === null ? F.memoizedState : Dl.next;
    if (t !== null) Dl = t, ol = l;
    else {
      if (l === null) throw F.alternate === null ? Error(s(467)) : Error(s(310));
      ol = l, l = {
        memoizedState: ol.memoizedState,
        baseState: ol.baseState,
        baseQueue: ol.baseQueue,
        queue: ol.queue,
        next: null
      }, Dl === null ? F.memoizedState = Dl = l : Dl = Dl.next = l
    }
    return Dl
  }

  function cc() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function fn(l) {
    var t = cn;
    return cn += 1, ha === null && (ha = []), l = Vs(ha, l, t), t = F, (Dl === null ? t.memoizedState : Dl.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? Dr : Ur), l
  }

  function ou(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return fn(l);
      if (l.$$typeof === zl) return kl(l)
    }
    throw Error(s(438, String(l)))
  }

  function fc(l) {
    var t = null,
      e = F.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = F.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), e === null && (e = cc(), F.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = qt;
    return t.index++, e
  }

  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t
  }

  function du(l) {
    var t = Ul();
    return sc(t, ol, l)
  }

  function sc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i
      }
      t.baseQueue = n = u, a.pending = null
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      t = n.next;
      var c = i = null,
        r = null,
        y = t,
        z = !1;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (al & N) === N : (se & N) === N) {
          var g = y.revertLane;
          if (g === 0) r !== null && (r = r.next = {
            lane: 0,
            revertLane: 0,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }), N === ra && (z = !0);
          else if ((se & g) === g) {
            y = y.next, g === ra && (z = !0);
            continue
          } else N = {
            lane: 0,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, r === null ? (c = r = N, i = u) : r = r.next = N, F.lanes |= g, ye |= g;
          N = y.action, Xe && e(u, N), u = y.hasEagerState ? y.eagerState : e(u, N)
        } else g = {
          lane: N,
          revertLane: y.revertLane,
          action: y.action,
          hasEagerState: y.hasEagerState,
          eagerState: y.eagerState,
          next: null
        }, r === null ? (c = r = g, i = u) : r = r.next = g, F.lanes |= N, ye |= N;
        y = y.next
      } while (y !== null && y !== t);
      if (r === null ? i = u : r.next = c, !it(u, l.memoizedState) && (Xl = !0, z && (e = oa, e !== null))) throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = r, a.lastRenderedState = u
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
  }

  function rc(l) {
    var t = Ul(),
      e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do u = l(u, i.action), i = i.next; while (i !== n);
      it(u, t.memoizedState) || (Xl = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u
    }
    return [u, a]
  }

  function Is(l, t, e) {
    var a = F,
      n = Ul(),
      u = il;
    if (u) {
      if (e === void 0) throw Error(s(407));
      e = e()
    } else e = t();
    var i = !it((ol || n).memoizedState, e);
    i && (n.memoizedState = e, Xl = !0), n = n.queue;
    var c = tr.bind(null, a, n, l);
    if (sn(2048, 8, c, [l]), n.getSnapshot !== t || i || Dl !== null && Dl.memoizedState.tag & 1) {
      if (a.flags |= 2048, va(9, mu(), lr.bind(null, a, n, e, t), null), gl === null) throw Error(s(349));
      u || (se & 124) !== 0 || Ps(a, t, e)
    }
    return e
  }

  function Ps(l, t, e) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: e
    }, t = F.updateQueue, t === null ? (t = cc(), F.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
  }

  function lr(l, t, e, a) {
    t.value = e, t.getSnapshot = a, er(t) && ar(l)
  }

  function tr(l, t, e) {
    return e(function() {
      er(t) && ar(l)
    })
  }

  function er(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !it(l, e)
    } catch {
      return !0
    }
  }

  function ar(l) {
    var t = ia(l, 2);
    t !== null && dt(t, l, 2)
  }

  function oc(l) {
    var t = lt();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Xe) {
        ee(!0);
        try {
          e()
        } finally {
          ee(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zt,
      lastRenderedState: l
    }, t
  }

  function nr(l, t, e, a) {
    return l.baseState = e, sc(l, ol, typeof a == "function" ? a : Zt)
  }

  function xh(l, t, e, a, n) {
    if (vu(l)) throw Error(s(485));
    if (l = t.action, l !== null) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i)
        }
      };
      A.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, ur(t, u)) : (u.next = e.next, t.pending = e.next = u)
    }
  }

  function ur(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = A.T,
        i = {};
      A.T = i;
      try {
        var c = e(n, a),
          r = A.S;
        r !== null && r(i, c), ir(l, t, c)
      } catch (y) {
        dc(l, t, y)
      } finally {
        A.T = u
      }
    } else try {
      u = e(n, a), ir(l, t, u)
    } catch (y) {
      dc(l, t, y)
    }
  }

  function ir(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      cr(l, t, a)
    }, function(a) {
      return dc(l, t, a)
    }) : cr(l, t, e)
  }

  function cr(l, t, e) {
    t.status = "fulfilled", t.value = e, fr(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ur(l, e)))
  }

  function dc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do t.status = "rejected", t.reason = e, fr(t), t = t.next; while (t !== a)
    }
    l.action = null
  }

  function fr(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++)(0, l[t])()
  }

  function sr(l, t) {
    return t
  }

  function rr(l, t) {
    if (il) {
      var e = gl.formState;
      if (e !== null) {
        l: {
          var a = F;
          if (il) {
            if (Tl) {
              t: {
                for (var n = Tl, u = Ot; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break t
                  }
                  if (n = Nt(n.nextSibling), n === null) {
                    n = null;
                    break t
                  }
                }
                u = n.data,
                n = u === "F!" || u === "F" ? n : null
              }
              if (n) {
                Tl = Nt(n.nextSibling), a = n.data === "F!";
                break l
              }
            }
            Ce(a)
          }
          a = !1
        }
        a && (t = e[0])
      }
    }
    return e = lt(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: t
    }, e.queue = a, e = Or.bind(null, F, a), a.dispatch = e, a = oc(!1), u = gc.bind(null, F, !1, a.queue), a = lt(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = xh.bind(null, F, n, u, e), n.dispatch = e, a.memoizedState = l, [t, e, !1]
  }

  function or(l) {
    var t = Ul();
    return dr(t, ol, l)
  }

  function dr(l, t, e) {
    if (t = sc(l, t, sr)[0], l = du(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = fn(t)
    } catch (i) {
      throw i === tn ? iu : i
    } else a = t;
    t = Ul();
    var n = t.queue,
      u = n.dispatch;
    return e !== t.memoizedState && (F.flags |= 2048, va(9, mu(), Sh.bind(null, n, e), null)), [a, u, l]
  }

  function Sh(l, t) {
    l.action = t
  }

  function mr(l) {
    var t = Ul(),
      e = ol;
    if (e !== null) return dr(t, e, l);
    Ul(), t = t.memoizedState, e = Ul();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1]
  }

  function va(l, t, e, a) {
    return l = {
      tag: l,
      create: e,
      deps: a,
      inst: t,
      next: null
    }, t = F.updateQueue, t === null && (t = cc(), F.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l
  }

  function mu() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }

  function hr() {
    return Ul().memoizedState
  }

  function hu(l, t, e, a) {
    var n = lt();
    a = a === void 0 ? null : a, F.flags |= l, n.memoizedState = va(1 | t, mu(), e, a)
  }

  function sn(l, t, e, a) {
    var n = Ul();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ol !== null && a !== null && ec(a, ol.memoizedState.deps) ? n.memoizedState = va(t, u, e, a) : (F.flags |= l, n.memoizedState = va(1 | t, u, e, a))
  }

  function vr(l, t) {
    hu(8390656, 8, l, t)
  }

  function yr(l, t) {
    sn(2048, 8, l, t)
  }

  function gr(l, t) {
    return sn(4, 2, l, t)
  }

  function br(l, t) {
    return sn(4, 4, l, t)
  }

  function pr(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null)
      }
    }
    if (t != null) return l = l(), t.current = l,
      function() {
        t.current = null
      }
  }

  function xr(l, t, e) {
    e = e != null ? e.concat([l]) : null, sn(4, 4, pr.bind(null, t, l), e)
  }

  function mc() {}

  function Sr(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ec(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l)
  }

  function Ar(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ec(t, a[1])) return a[0];
    if (a = l(), Xe) {
      ee(!0);
      try {
        l()
      } finally {
        ee(!1)
      }
    }
    return e.memoizedState = [a, t], a
  }

  function hc(l, t, e) {
    return e === void 0 || (se & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = No(), F.lanes |= l, ye |= l, e)
  }

  function zr(l, t, e, a) {
    return it(e, t) ? e : da.current !== null ? (l = hc(l, e, a), it(l, t) || (Xl = !0), l) : (se & 42) === 0 ? (Xl = !0, l.memoizedState = e) : (l = No(), F.lanes |= l, ye |= l, t)
  }

  function Tr(l, t, e, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = A.T,
      c = {};
    A.T = c, gc(l, !1, t, e);
    try {
      var r = n(),
        y = A.S;
      if (y !== null && y(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var z = gh(r, a);
        rn(l, t, z, ot(l))
      } else rn(l, t, a, ot(l))
    } catch (N) {
      rn(l, t, {
        then: function() {},
        status: "rejected",
        reason: N
      }, ot())
    } finally {
      U.p = u, A.T = i
    }
  }

  function Ah() {}

  function vc(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var n = Er(l).queue;
    Tr(l, n, t, j, e === null ? Ah : function() {
      return Nr(l), e(a)
    })
  }

  function Er(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: j,
      baseState: j,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: j
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
  }

  function Nr(l) {
    var t = Er(l).next.queue;
    rn(l, t, {}, ot())
  }

  function yc() {
    return kl(_n)
  }

  function Mr() {
    return Ul().memoizedState
  }

  function _r() {
    return Ul().memoizedState
  }

  function zh(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ot();
          l = ce(e);
          var a = fe(t, l, e);
          a !== null && (dt(a, t, e), an(a, t, e)), t = {
            cache: Ki()
          }, l.payload = t;
          return
      }
      t = t.return
    }
  }

  function Th(l, t, e) {
    var a = ot();
    e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vu(l) ? jr(t, e) : (e = Ci(l, t, e, a), e !== null && (dt(e, l, a), Rr(e, t, a)))
  }

  function Or(l, t, e) {
    var a = ot();
    rn(l, t, e, a)
  }

  function rn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vu(l)) jr(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var i = t.lastRenderedState,
          c = u(i, e);
        if (n.hasEagerState = !0, n.eagerState = c, it(c, i)) return In(l, t, n, 0), gl === null && Fn(), !1
      } catch {} finally {}
      if (e = Ci(l, t, n, a), e !== null) return dt(e, l, a), Rr(e, t, a), !0
    }
    return !1
  }

  function gc(l, t, e, a) {
    if (a = {
        lane: 2,
        revertLane: Wc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, vu(l)) {
      if (t) throw Error(s(479))
    } else t = Ci(l, e, a, 2), t !== null && dt(t, l, 2)
  }

  function vu(l) {
    var t = l.alternate;
    return l === F || t !== null && t === F
  }

  function jr(l, t) {
    ma = su = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
  }

  function Rr(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Gf(l, e)
    }
  }
  var yu = {
      readContext: kl,
      use: ou,
      useCallback: Ol,
      useContext: Ol,
      useEffect: Ol,
      useImperativeHandle: Ol,
      useLayoutEffect: Ol,
      useInsertionEffect: Ol,
      useMemo: Ol,
      useReducer: Ol,
      useRef: Ol,
      useState: Ol,
      useDebugValue: Ol,
      useDeferredValue: Ol,
      useTransition: Ol,
      useSyncExternalStore: Ol,
      useId: Ol,
      useHostTransitionStatus: Ol,
      useFormState: Ol,
      useActionState: Ol,
      useOptimistic: Ol,
      useMemoCache: Ol,
      useCacheRefresh: Ol
    },
    Dr = {
      readContext: kl,
      use: ou,
      useCallback: function(l, t) {
        return lt().memoizedState = [l, t === void 0 ? null : t], l
      },
      useContext: kl,
      useEffect: vr,
      useImperativeHandle: function(l, t, e) {
        e = e != null ? e.concat([l]) : null, hu(4194308, 4, pr.bind(null, t, l), e)
      },
      useLayoutEffect: function(l, t) {
        return hu(4194308, 4, l, t)
      },
      useInsertionEffect: function(l, t) {
        hu(4, 2, l, t)
      },
      useMemo: function(l, t) {
        var e = lt();
        t = t === void 0 ? null : t;
        var a = l();
        if (Xe) {
          ee(!0);
          try {
            l()
          } finally {
            ee(!1)
          }
        }
        return e.memoizedState = [a, t], a
      },
      useReducer: function(l, t, e) {
        var a = lt();
        if (e !== void 0) {
          var n = e(t);
          if (Xe) {
            ee(!0);
            try {
              e(t)
            } finally {
              ee(!1)
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: n
        }, a.queue = l, l = l.dispatch = Th.bind(null, F, l), [a.memoizedState, l]
      },
      useRef: function(l) {
        var t = lt();
        return l = {
          current: l
        }, t.memoizedState = l
      },
      useState: function(l) {
        l = oc(l);
        var t = l.queue,
          e = Or.bind(null, F, t);
        return t.dispatch = e, [l.memoizedState, e]
      },
      useDebugValue: mc,
      useDeferredValue: function(l, t) {
        var e = lt();
        return hc(e, l, t)
      },
      useTransition: function() {
        var l = oc(!1);
        return l = Tr.bind(null, F, l.queue, !0, !1), lt().memoizedState = l, [!1, l]
      },
      useSyncExternalStore: function(l, t, e) {
        var a = F,
          n = lt();
        if (il) {
          if (e === void 0) throw Error(s(407));
          e = e()
        } else {
          if (e = t(), gl === null) throw Error(s(349));
          (al & 124) !== 0 || Ps(a, t, e)
        }
        n.memoizedState = e;
        var u = {
          value: e,
          getSnapshot: t
        };
        return n.queue = u, vr(tr.bind(null, a, u, l), [l]), a.flags |= 2048, va(9, mu(), lr.bind(null, a, u, e, t), null), e
      },
      useId: function() {
        var l = lt(),
          t = gl.identifierPrefix;
        if (il) {
          var e = Xt,
            a = Gt;
          e = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = ru++, 0 < e && (t += "H" + e.toString(32)), t += "»"
        } else e = bh++, t = "«" + t + "r" + e.toString(32) + "»";
        return l.memoizedState = t
      },
      useHostTransitionStatus: yc,
      useFormState: rr,
      useActionState: rr,
      useOptimistic: function(l) {
        var t = lt();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = e, t = gc.bind(null, F, !0, e), e.dispatch = t, [l, t]
      },
      useMemoCache: fc,
      useCacheRefresh: function() {
        return lt().memoizedState = zh.bind(null, F)
      }
    },
    Ur = {
      readContext: kl,
      use: ou,
      useCallback: Sr,
      useContext: kl,
      useEffect: yr,
      useImperativeHandle: xr,
      useInsertionEffect: gr,
      useLayoutEffect: br,
      useMemo: Ar,
      useReducer: du,
      useRef: hr,
      useState: function() {
        return du(Zt)
      },
      useDebugValue: mc,
      useDeferredValue: function(l, t) {
        var e = Ul();
        return zr(e, ol.memoizedState, l, t)
      },
      useTransition: function() {
        var l = du(Zt)[0],
          t = Ul().memoizedState;
        return [typeof l == "boolean" ? l : fn(l), t]
      },
      useSyncExternalStore: Is,
      useId: Mr,
      useHostTransitionStatus: yc,
      useFormState: or,
      useActionState: or,
      useOptimistic: function(l, t) {
        var e = Ul();
        return nr(e, ol, l, t)
      },
      useMemoCache: fc,
      useCacheRefresh: _r
    },
    Eh = {
      readContext: kl,
      use: ou,
      useCallback: Sr,
      useContext: kl,
      useEffect: yr,
      useImperativeHandle: xr,
      useInsertionEffect: gr,
      useLayoutEffect: br,
      useMemo: Ar,
      useReducer: rc,
      useRef: hr,
      useState: function() {
        return rc(Zt)
      },
      useDebugValue: mc,
      useDeferredValue: function(l, t) {
        var e = Ul();
        return ol === null ? hc(e, l, t) : zr(e, ol.memoizedState, l, t)
      },
      useTransition: function() {
        var l = rc(Zt)[0],
          t = Ul().memoizedState;
        return [typeof l == "boolean" ? l : fn(l), t]
      },
      useSyncExternalStore: Is,
      useId: Mr,
      useHostTransitionStatus: yc,
      useFormState: mr,
      useActionState: mr,
      useOptimistic: function(l, t) {
        var e = Ul();
        return ol !== null ? nr(e, ol, l, t) : (e.baseState = l, [l, e.queue.dispatch])
      },
      useMemoCache: fc,
      useCacheRefresh: _r
    },
    ya = null,
    on = 0;

  function gu(l) {
    var t = on;
    return on += 1, ya === null && (ya = []), Vs(ya, l, t)
  }

  function dn(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null
  }

  function bu(l, t) {
    throw t.$$typeof === k ? Error(s(525)) : (l = Object.prototype.toString.call(t), Error(s(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
  }

  function Hr(l) {
    var t = l._init;
    return t(l._payload)
  }

  function qr(l) {
    function t(h, m) {
      if (l) {
        var v = h.deletions;
        v === null ? (h.deletions = [m], h.flags |= 16) : v.push(m)
      }
    }

    function e(h, m) {
      if (!l) return null;
      for (; m !== null;) t(h, m), m = m.sibling;
      return null
    }

    function a(h) {
      for (var m = new Map; h !== null;) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
      return m
    }

    function n(h, m) {
      return h = Yt(h, m), h.index = 0, h.sibling = null, h
    }

    function u(h, m, v) {
      return h.index = v, l ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags |= 67108866, m) : v) : (h.flags |= 67108866, m)) : (h.flags |= 1048576, m)
    }

    function i(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h
    }

    function c(h, m, v, E) {
      return m === null || m.tag !== 6 ? (m = Yi(v, h.mode, E), m.return = h, m) : (m = n(m, v), m.return = h, m)
    }

    function r(h, m, v, E) {
      var B = v.type;
      return B === cl ? z(h, m, v.props.children, E, v.key) : m !== null && (m.elementType === B || typeof B == "object" && B !== null && B.$$typeof === w && Hr(B) === m.type) ? (m = n(m, v.props), dn(m, v), m.return = h, m) : (m = lu(v.type, v.key, v.props, null, h.mode, E), dn(m, v), m.return = h, m)
    }

    function y(h, m, v, E) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Gi(v, h.mode, E), m.return = h, m) : (m = n(m, v.children || []), m.return = h, m)
    }

    function z(h, m, v, E, B) {
      return m === null || m.tag !== 7 ? (m = De(v, h.mode, E, B), m.return = h, m) : (m = n(m, v), m.return = h, m)
    }

    function N(h, m, v) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = Yi("" + m, h.mode, v), m.return = h, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case W:
            return v = lu(m.type, m.key, m.props, null, h.mode, v), dn(v, m), v.return = h, v;
          case xl:
            return m = Gi(m, h.mode, v), m.return = h, m;
          case w:
            var E = m._init;
            return m = E(m._payload), N(h, m, v)
        }
        if (Sl(m) || _l(m)) return m = De(m, h.mode, v, null), m.return = h, m;
        if (typeof m.then == "function") return N(h, gu(m), v);
        if (m.$$typeof === zl) return N(h, nu(h, m), v);
        bu(h, m)
      }
      return null
    }

    function g(h, m, v, E) {
      var B = m !== null ? m.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return B !== null ? null : c(h, m, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case W:
            return v.key === B ? r(h, m, v, E) : null;
          case xl:
            return v.key === B ? y(h, m, v, E) : null;
          case w:
            return B = v._init, v = B(v._payload), g(h, m, v, E)
        }
        if (Sl(v) || _l(v)) return B !== null ? null : z(h, m, v, E, null);
        if (typeof v.then == "function") return g(h, m, gu(v), E);
        if (v.$$typeof === zl) return g(h, m, nu(h, v), E);
        bu(h, v)
      }
      return null
    }

    function b(h, m, v, E, B) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return h = h.get(v) || null, c(m, h, "" + E, B);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case W:
            return h = h.get(E.key === null ? v : E.key) || null, r(m, h, E, B);
          case xl:
            return h = h.get(E.key === null ? v : E.key) || null, y(m, h, E, B);
          case w:
            var P = E._init;
            return E = P(E._payload), b(h, m, v, E, B)
        }
        if (Sl(E) || _l(E)) return h = h.get(v) || null, z(m, h, E, B, null);
        if (typeof E.then == "function") return b(h, m, v, gu(E), B);
        if (E.$$typeof === zl) return b(h, m, v, nu(m, E), B);
        bu(m, E)
      }
      return null
    }

    function L(h, m, v, E) {
      for (var B = null, P = null, X = m, V = m = 0, Ql = null; X !== null && V < v.length; V++) {
        X.index > V ? (Ql = X, X = null) : Ql = X.sibling;
        var ul = g(h, X, v[V], E);
        if (ul === null) {
          X === null && (X = Ql);
          break
        }
        l && X && ul.alternate === null && t(h, X), m = u(ul, m, V), P === null ? B = ul : P.sibling = ul, P = ul, X = Ql
      }
      if (V === v.length) return e(h, X), il && He(h, V), B;
      if (X === null) {
        for (; V < v.length; V++) X = N(h, v[V], E), X !== null && (m = u(X, m, V), P === null ? B = X : P.sibling = X, P = X);
        return il && He(h, V), B
      }
      for (X = a(X); V < v.length; V++) Ql = b(X, h, V, v[V], E), Ql !== null && (l && Ql.alternate !== null && X.delete(Ql.key === null ? V : Ql.key), m = u(Ql, m, V), P === null ? B = Ql : P.sibling = Ql, P = Ql);
      return l && X.forEach(function(Ee) {
        return t(h, Ee)
      }), il && He(h, V), B
    }

    function Z(h, m, v, E) {
      if (v == null) throw Error(s(151));
      for (var B = null, P = null, X = m, V = m = 0, Ql = null, ul = v.next(); X !== null && !ul.done; V++, ul = v.next()) {
        X.index > V ? (Ql = X, X = null) : Ql = X.sibling;
        var Ee = g(h, X, ul.value, E);
        if (Ee === null) {
          X === null && (X = Ql);
          break
        }
        l && X && Ee.alternate === null && t(h, X), m = u(Ee, m, V), P === null ? B = Ee : P.sibling = Ee, P = Ee, X = Ql
      }
      if (ul.done) return e(h, X), il && He(h, V), B;
      if (X === null) {
        for (; !ul.done; V++, ul = v.next()) ul = N(h, ul.value, E), ul !== null && (m = u(ul, m, V), P === null ? B = ul : P.sibling = ul, P = ul);
        return il && He(h, V), B
      }
      for (X = a(X); !ul.done; V++, ul = v.next()) ul = b(X, h, V, ul.value, E), ul !== null && (l && ul.alternate !== null && X.delete(ul.key === null ? V : ul.key), m = u(ul, m, V), P === null ? B = ul : P.sibling = ul, P = ul);
      return l && X.forEach(function(N0) {
        return t(h, N0)
      }), il && He(h, V), B
    }

    function ml(h, m, v, E) {
      if (typeof v == "object" && v !== null && v.type === cl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case W:
            l: {
              for (var B = v.key; m !== null;) {
                if (m.key === B) {
                  if (B = v.type, B === cl) {
                    if (m.tag === 7) {
                      e(h, m.sibling), E = n(m, v.props.children), E.return = h, h = E;
                      break l
                    }
                  } else if (m.elementType === B || typeof B == "object" && B !== null && B.$$typeof === w && Hr(B) === m.type) {
                    e(h, m.sibling), E = n(m, v.props), dn(E, v), E.return = h, h = E;
                    break l
                  }
                  e(h, m);
                  break
                } else t(h, m);
                m = m.sibling
              }
              v.type === cl ? (E = De(v.props.children, h.mode, E, v.key), E.return = h, h = E) : (E = lu(v.type, v.key, v.props, null, h.mode, E), dn(E, v), E.return = h, h = E)
            }
            return i(h);
          case xl:
            l: {
              for (B = v.key; m !== null;) {
                if (m.key === B)
                  if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                    e(h, m.sibling), E = n(m, v.children || []), E.return = h, h = E;
                    break l
                  } else {
                    e(h, m);
                    break
                  }
                else t(h, m);
                m = m.sibling
              }
              E = Gi(v, h.mode, E),
              E.return = h,
              h = E
            }
            return i(h);
          case w:
            return B = v._init, v = B(v._payload), ml(h, m, v, E)
        }
        if (Sl(v)) return L(h, m, v, E);
        if (_l(v)) {
          if (B = _l(v), typeof B != "function") throw Error(s(150));
          return v = B.call(v), Z(h, m, v, E)
        }
        if (typeof v.then == "function") return ml(h, m, gu(v), E);
        if (v.$$typeof === zl) return ml(h, m, nu(h, v), E);
        bu(h, v)
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, m !== null && m.tag === 6 ? (e(h, m.sibling), E = n(m, v), E.return = h, h = E) : (e(h, m), E = Yi(v, h.mode, E), E.return = h, h = E), i(h)) : e(h, m)
    }
    return function(h, m, v, E) {
      try {
        on = 0;
        var B = ml(h, m, v, E);
        return ya = null, B
      } catch (X) {
        if (X === tn || X === iu) throw X;
        var P = ct(29, X, null, h.mode);
        return P.lanes = E, P.return = h, P
      } finally {}
    }
  }
  var ga = qr(!0),
    Cr = qr(!1),
    xt = M(null),
    jt = null;

  function re(l) {
    var t = l.alternate;
    R(Cl, Cl.current & 1), R(xt, l), jt === null && (t === null || da.current !== null || t.memoizedState !== null) && (jt = l)
  }

  function Br(l) {
    if (l.tag === 22) {
      if (R(Cl, Cl.current), R(xt, l), jt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (jt = l)
      }
    } else oe()
  }

  function oe() {
    R(Cl, Cl.current), R(xt, xt.current)
  }

  function Vt(l) {
    q(xt), jt === l && (jt = null), q(Cl)
  }
  var Cl = M(0);

  function pu(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || ff(e))) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }

  function bc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : D({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
  }
  var pc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ot(),
        n = ce(a);
      n.payload = t, e != null && (n.callback = e), t = fe(l, n, a), t !== null && (dt(t, l, a), an(t, l, a))
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ot(),
        n = ce(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = fe(l, n, a), t !== null && (dt(t, l, a), an(t, l, a))
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ot(),
        a = ce(e);
      a.tag = 2, t != null && (a.callback = t), t = fe(l, a, e), t !== null && (dt(t, l, e), an(t, l, e))
    }
  };

  function Yr(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !ka(e, a) || !ka(n, u) : !0
  }

  function Gr(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && pc.enqueueReplaceState(t, t.state, null)
  }

  function we(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a])
    }
    if (l = l.defaultProps) {
      e === t && (e = D({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n])
    }
    return e
  }
  var xu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return
    }
    console.error(l)
  };

  function Xr(l) {
    xu(l)
  }

  function wr(l) {
    console.error(l)
  }

  function Qr(l) {
    xu(l)
  }

  function Su(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, {
        componentStack: t.stack
      })
    } catch (a) {
      setTimeout(function() {
        throw a
      })
    }
  }

  function Zr(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (n) {
      setTimeout(function() {
        throw n
      })
    }
  }

  function xc(l, t, e) {
    return e = ce(e), e.tag = 3, e.payload = {
      element: null
    }, e.callback = function() {
      Su(l, t)
    }, e
  }

  function Vr(l) {
    return l = ce(l), l.tag = 3, l
  }

  function Lr(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u)
      }, l.callback = function() {
        Zr(t, e, a)
      }
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Zr(t, e, a), typeof n != "function" && (ge === null ? ge = new Set([this]) : ge.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      })
    })
  }

  function Nh(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && Ia(t, e, n, !0), e = xt.current, e !== null) {
        switch (e.tag) {
          case 13:
            return jt === null ? Vc() : e.alternate === null && El === 0 && (El = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Wi ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), Kc(l, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === Wi ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), Kc(l, a, n)), !1
        }
        throw Error(s(435, e.tag))
      }
      return Kc(l, a, n), Vc(), !1
    }
    if (il) return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Qi && (l = Error(s(422), {
      cause: a
    }), Fa(yt(l, e)))) : (a !== Qi && (t = Error(s(423), {
      cause: a
    }), Fa(yt(t, e))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = yt(a, e), n = xc(l.stateNode, a, n), Ii(l, n), El !== 4 && (El = 2)), !1;
    var u = Error(s(520), {
      cause: a
    });
    if (u = yt(u, e), pn === null ? pn = [u] : pn.push(u), El !== 4 && (El = 2), t === null) return !0;
    a = yt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = xc(e.stateNode, a, l), Ii(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ge === null || !ge.has(u)))) return e.flags |= 65536, n &= -n, e.lanes |= n, n = Vr(n), Lr(n, l, e, a), Ii(e, n), !1
      }
      e = e.return
    } while (e !== null);
    return !1
  }
  var Kr = Error(s(461)),
    Xl = !1;

  function Zl(l, t, e, a) {
    t.child = l === null ? Cr(t, null, e, a) : ga(t, l.child, e, a)
  }

  function kr(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c])
    } else i = a;
    return Ye(t), a = ac(l, t, e, i, u, n), c = nc(), l !== null && !Xl ? (uc(l, t, n), Lt(l, t, n)) : (il && c && Xi(t), t.flags |= 1, Zl(l, t, a, n), t.child)
  }

  function Jr(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Bi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, Wr(l, t, u, a, n)) : (l = lu(e.type, null, a, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l)
    }
    if (u = l.child, !_c(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : ka, e(i, a) && l.ref === t.ref) return Lt(l, t, n)
    }
    return t.flags |= 1, l = Yt(u, a), l.ref = t.ref, l.return = t, t.child = l
  }

  function Wr(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (ka(u, a) && l.ref === t.ref)
        if (Xl = !1, t.pendingProps = a = u, _c(l, n))(l.flags & 131072) !== 0 && (Xl = !0);
        else return t.lanes = l.lanes, Lt(l, t, n)
    }
    return Sc(l, t, e, a, n)
  }

  function $r(l, t, e) {
    var a = t.pendingProps,
      n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | e : e, l !== null) {
          for (n = t.child = l.child, u = 0; n !== null;) u = u | n.lanes | n.childLanes, n = n.sibling;
          t.childLanes = u & ~a
        } else t.childLanes = 0, t.child = null;
        return Fr(l, t, a, e)
      }
      if ((e & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && uu(t, u !== null ? u.cachePool : null), u !== null ? Ws(t, u) : lc(), Br(t);
      else return t.lanes = t.childLanes = 536870912, Fr(l, t, u !== null ? u.baseLanes | e : e, e)
    } else u !== null ? (uu(t, u.cachePool), Ws(t, u), oe(), t.memoizedState = null) : (l !== null && uu(t, null), lc(), oe());
    return Zl(l, t, n, e), t.child
  }

  function Fr(l, t, e, a) {
    var n = Ji();
    return n = n === null ? null : {
      parent: ql._currentValue,
      pool: n
    }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && uu(t, null), lc(), Br(t), l !== null && Ia(l, t, a, !0), null
  }

  function Au(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816)
    }
  }

  function Sc(l, t, e, a, n) {
    return Ye(t), e = ac(l, t, e, a, void 0, n), a = nc(), l !== null && !Xl ? (uc(l, t, n), Lt(l, t, n)) : (il && a && Xi(t), t.flags |= 1, Zl(l, t, e, n), t.child)
  }

  function Ir(l, t, e, a, n, u) {
    return Ye(t), t.updateQueue = null, e = Fs(t, a, e, n), $s(l), a = nc(), l !== null && !Xl ? (uc(l, t, u), Lt(l, t, u)) : (il && a && Xi(t), t.flags |= 1, Zl(l, t, e, u), t.child)
  }

  function Pr(l, t, e, a, n) {
    if (Ye(t), t.stateNode === null) {
      var u = ca,
        i = e.contextType;
      typeof i == "object" && i !== null && (u = kl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = pc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, $i(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? kl(i) : ca, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (bc(t, e, i, a), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && pc.enqueueReplaceState(u, u.state, null), un(t, a, u, n), nn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        r = we(e, c);
      u.props = r;
      var y = u.context,
        z = e.contextType;
      i = ca, typeof z == "object" && z !== null && (i = kl(z));
      var N = e.getDerivedStateFromProps;
      z = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Gr(t, u, a, i), ie = !1;
      var g = t.memoizedState;
      u.state = g, un(t, a, u, n), nn(), y = t.memoizedState, c || g !== y || ie ? (typeof N == "function" && (bc(t, e, N, a), y = t.memoizedState), (r = ie || Yr(t, e, r, a, g, y, i)) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), u.props = a, u.state = y, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
    } else {
      u = t.stateNode, Fi(l, t), i = t.memoizedProps, z = we(e, i), u.props = z, N = t.pendingProps, g = u.context, y = e.contextType, r = ca, typeof y == "object" && y !== null && (r = kl(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || g !== r) && Gr(t, u, a, r), ie = !1, g = t.memoizedState, u.state = g, un(t, a, u, n), nn();
      var b = t.memoizedState;
      i !== N || g !== b || ie || l !== null && l.dependencies !== null && au(l.dependencies) ? (typeof c == "function" && (bc(t, e, c, a), b = t.memoizedState), (z = ie || Yr(t, e, z, a, g, b, r) || l !== null && l.dependencies !== null && au(l.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, r)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = r, a = z) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = !1)
    }
    return u = a, Au(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = ga(t, l.child, null, n), t.child = ga(t, null, e, n)) : Zl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Lt(l, t, n), l
  }

  function lo(l, t, e, a) {
    return $a(), t.flags |= 256, Zl(l, t, e, a), t.child
  }
  var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function zc(l) {
    return {
      baseLanes: l,
      cachePool: ws()
    }
  }

  function Tc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= St), l
  }

  function to(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Cl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (il) {
        if (n ? re(t) : oe(), il) {
          var c = Tl,
            r;
          if (r = c) {
            l: {
              for (r = c, c = Ot; r.nodeType !== 8;) {
                if (!c) {
                  c = null;
                  break l
                }
                if (r = Nt(r.nextSibling), r === null) {
                  c = null;
                  break l
                }
              }
              c = r
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Ue !== null ? {
                id: Gt,
                overflow: Xt
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, r = ct(18, null, null, 0), r.stateNode = c, r.return = t, t.child = r, $l = t, Tl = null, r = !0) : r = !1
          }
          r || Ce(t)
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return ff(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Vt(t)
      }
      return c = a.children, a = a.fallback, n ? (oe(), n = t.mode, c = zu({
        mode: "hidden",
        children: c
      }, n), a = De(a, n, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, n = t.child, n.memoizedState = zc(e), n.childLanes = Tc(l, i, e), t.memoizedState = Ac, a) : (re(t), Ec(t, c))
    }
    if (r = l.memoizedState, r !== null && (c = r.dehydrated, c !== null)) {
      if (u) t.flags & 256 ? (re(t), t.flags &= -257, t = Nc(l, t, e)) : t.memoizedState !== null ? (oe(), t.child = l.child, t.flags |= 128, t = null) : (oe(), n = a.fallback, c = t.mode, a = zu({
        mode: "visible",
        children: a.children
      }, c), n = De(n, c, e, null), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, ga(t, l.child, null, e), a = t.child, a.memoizedState = zc(e), a.childLanes = Tc(l, i, e), t.memoizedState = Ac, t = n);
      else if (re(t), ff(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(s(419)), a.stack = "", a.digest = i, Fa({
          value: a,
          source: null,
          stack: null
        }), t = Nc(l, t, e)
      } else if (Xl || Ia(l, t, e, !1), i = (e & l.childLanes) !== 0, Xl || i) {
        if (i = gl, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : fi(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== r.retryLane)) throw r.retryLane = a, ia(l, a), dt(i, l, a), Kr;
        c.data === "$?" || Vc(), t = Nc(l, t, e)
      } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = r.treeContext, Tl = Nt(c.nextSibling), $l = t, il = !0, qe = null, Ot = !1, l !== null && (bt[pt++] = Gt, bt[pt++] = Xt, bt[pt++] = Ue, Gt = l.id, Xt = l.overflow, Ue = t), t = Ec(t, a.children), t.flags |= 4096);
      return t
    }
    return n ? (oe(), n = a.fallback, c = t.mode, r = l.child, y = r.sibling, a = Yt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, y !== null ? n = Yt(y, n) : (n = De(n, c, e, null), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, c = l.child.memoizedState, c === null ? c = zc(e) : (r = c.cachePool, r !== null ? (y = ql._currentValue, r = r.parent !== y ? {
      parent: y,
      pool: y
    } : r) : r = ws(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: r
    }), n.memoizedState = c, n.childLanes = Tc(l, i, e), t.memoizedState = Ac, a) : (re(t), e = l.child, l = e.sibling, e = Yt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e)
  }

  function Ec(l, t) {
    return t = zu({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t
  }

  function zu(l, t) {
    return l = ct(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l
  }

  function Nc(l, t, e) {
    return ga(t, l.child, null, e), l = Ec(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
  }

  function eo(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Vi(l.return, t, e)
  }

  function Mc(l, t, e, a, n) {
    var u = l.memoizedState;
    u === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n)
  }

  function ao(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if (Zl(l, t, a.children, e), a = Cl.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
        if (l.tag === 13) l.memoizedState !== null && eo(l, e, t);
        else if (l.tag === 19) eo(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue
        }
        if (l === t) break l;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) break l;
          l = l.return
        }
        l.sibling.return = l.return, l = l.sibling
      }
      a &= 1
    }
    switch (R(Cl, a), n) {
      case "forwards":
        for (e = t.child, n = null; e !== null;) l = e.alternate, l !== null && pu(l) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Mc(t, !1, n, e, u);
        break;
      case "backwards":
        for (e = null, n = t.child, t.child = null; n !== null;) {
          if (l = n.alternate, l !== null && pu(l) === null) {
            t.child = n;
            break
          }
          l = n.sibling, n.sibling = e, e = n, n = l
        }
        Mc(t, !0, e, null, u);
        break;
      case "together":
        Mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function Lt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), ye |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (Ia(l, t, e, !1), (e & t.childLanes) === 0) return null
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (l = t.child, e = Yt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = Yt(l, l.pendingProps), e.return = t;
      e.sibling = null
    }
    return t.child
  }

  function _c(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && au(l)))
  }

  function Mh(l, t, e) {
    switch (t.tag) {
      case 3:
        hl(t, t.stateNode.containerInfo), ue(t, ql, l.memoizedState.cache), $a();
        break;
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        hl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ue(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (re(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? to(l, t, e) : (re(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
        re(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (Ia(l, t, e, !1), a = (e & t.childLanes) !== 0), n) {
          if (a) return ao(l, t, e);
          t.flags |= 128
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Cl, Cl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, $r(l, t, e);
      case 24:
        ue(t, ql, l.memoizedState.cache)
    }
    return Lt(l, t, e)
  }

  function no(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Xl = !0;
      else {
        if (!_c(l, e) && (t.flags & 128) === 0) return Xl = !1, Mh(l, t, e);
        Xl = (l.flags & 131072) !== 0
      }
    else Xl = !1, il && (t.flags & 1048576) !== 0 && Hs(t, eu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (a = n(a._payload), t.type = a, typeof a == "function") Bi(a) ? (l = we(a, l), t.tag = 1, t = Pr(null, t, a, l, e)) : (t.tag = 0, t = Sc(null, t, a, l, e));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === Yl) {
                t.tag = 11, t = kr(null, t, a, l, e);
                break l
              } else if (n === Hl) {
                t.tag = 14, t = Jr(null, t, a, l, e);
                break l
              }
            }
            throw t = zt(a) || a, Error(s(306, t, ""))
          }
        }
        return t;
      case 0:
        return Sc(l, t, t.type, t.pendingProps, e);
      case 1:
        return a = t.type, n = we(a, t.pendingProps), Pr(l, t, a, n, e);
      case 3:
        l: {
          if (hl(t, t.stateNode.containerInfo), l === null) throw Error(s(387));a = t.pendingProps;
          var u = t.memoizedState;n = u.element,
          Fi(l, t),
          un(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ue(t, ql, a), a !== u.cache && Li(t, [ql], e, !0), nn(), a = i.element, u.isDehydrated)
            if (u = {
                element: a,
                isDehydrated: !1,
                cache: i.cache
              }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = lo(l, t, a, e);
              break l
            } else if (a !== n) {
            n = yt(Error(s(424)), t), Fa(n), t = lo(l, t, a, e);
            break l
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
            }
            for (Tl = Nt(l.firstChild), $l = t, il = !0, qe = null, Ot = !0, e = Cr(t, null, a, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
          } else {
            if ($a(), a === n) {
              t = Lt(l, t, e);
              break l
            }
            Zl(l, t, a, e)
          }
          t = t.child
        }
        return t;
      case 26:
        return Au(l, t), l === null ? (e = sd(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : il || (e = t.type, l = t.pendingProps, a = Bu(K.current).createElement(e), a[Kl] = t, a[Il] = l, Ll(a, e, l), Gl(a), t.stateNode = a) : t.memoizedState = sd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Pt(t), l === null && il && (a = t.stateNode = id(t.type, t.pendingProps, K.current), $l = t, Ot = !0, n = Tl, xe(t.type) ? (sf = n, Tl = Nt(a.firstChild)) : Tl = n), Zl(l, t, t.pendingProps.children, e), Au(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && il && ((n = a = Tl) && (a = t0(a, t.type, t.pendingProps, Ot), a !== null ? (t.stateNode = a, $l = t, Tl = Nt(a.firstChild), Ot = !1, n = !0) : n = !1), n || Ce(t)), Pt(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, nf(n, u) ? a = null : i !== null && nf(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = ac(l, t, ph, null, null, e), _n._currentValue = n), Au(l, t), Zl(l, t, a, e), t.child;
      case 6:
        return l === null && il && ((l = e = Tl) && (e = e0(e, t.pendingProps, Ot), e !== null ? (t.stateNode = e, $l = t, Tl = null, l = !0) : l = !1), l || Ce(t)), null;
      case 13:
        return to(l, t, e);
      case 4:
        return hl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = ga(t, null, a, e) : Zl(l, t, a, e), t.child;
      case 11:
        return kr(l, t, t.type, t.pendingProps, e);
      case 7:
        return Zl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Zl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Zl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return a = t.pendingProps, ue(t, t.type, a.value), Zl(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Ye(t), n = kl(n), a = a(n), t.flags |= 1, Zl(l, t, a, e), t.child;
      case 14:
        return Jr(l, t, t.type, t.pendingProps, e);
      case 15:
        return Wr(l, t, t.type, t.pendingProps, e);
      case 19:
        return ao(l, t, e);
      case 31:
        return a = t.pendingProps, e = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (e = zu(a, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Yt(l.child, a), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
      case 22:
        return $r(l, t, e);
      case 24:
        return Ye(t), a = kl(ql), l === null ? (n = Ji(), n === null && (n = gl, u = Ki(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = {
          parent: a,
          cache: n
        }, $i(t), ue(t, ql, n)) : ((l.lanes & e) !== 0 && (Fi(l, t), un(t, null, null, e), nn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ue(t, ql, a)) : (a = u.cache, ue(t, ql, a), a !== n.cache && Li(t, [ql], e, !0))), Zl(l, t, t.pendingProps.children, e), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(s(156, t.tag))
  }

  function Kt(l) {
    l.flags |= 4
  }

  function uo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !hd(t)) {
      if (t = xt.current, t !== null && ((al & 4194048) === al ? jt !== null : (al & 62914560) !== al && (al & 536870912) === 0 || t !== jt)) throw en = Wi, Qs;
      l.flags |= 8192
    }
  }

  function Tu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Bf() : 536870912, l.lanes |= t, Sa |= t)
  }

  function mn(l, t) {
    if (!il) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var e = null; t !== null;) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? l.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = l.tail;
        for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
    }
  }

  function Al(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null;) e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null;) e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t
  }

  function _h(l, t, e) {
    var a = t.pendingProps;
    switch (wi(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Al(t), null;
      case 1:
        return Al(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(ql), at(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Wa(t) ? Kt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bs())), Al(t), null;
      case 26:
        return e = t.memoizedState, l === null ? (Kt(t), e !== null ? (Al(t), uo(t, e)) : (Al(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (Kt(t), Al(t), uo(t, e)) : (Al(t), t.flags &= -16777217) : (l.memoizedProps !== a && Kt(t), Al(t), t.flags &= -16777217), null;
      case 27:
        le(t), e = K.current;
        var n = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Al(t), null
          }
          l = C.current, Wa(t) ? qs(t) : (l = id(n, a, e), t.stateNode = l, Kt(t))
        }
        return Al(t), null;
      case 5:
        if (le(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Al(t), null
          }
          if (l = C.current, Wa(t)) qs(t);
          else {
            switch (n = Bu(K.current), l) {
              case 1:
                l = n.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    l = n.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    l = n.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? n.createElement("select", {
                      is: a.is
                    }) : n.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? n.createElement(e, {
                      is: a.is
                    }) : n.createElement(e)
                }
            }
            l[Kl] = t, l[Il] = a;
            l: for (n = t.child; n !== null;) {
              if (n.tag === 5 || n.tag === 6) l.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
              }
              if (n === t) break l;
              for (; n.sibling === null;) {
                if (n.return === null || n.return === t) break l;
                n = n.return
              }
              n.sibling.return = n.return, n = n.sibling
            }
            t.stateNode = l;
            l: switch (Ll(l, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1
            }
            l && Kt(t)
          }
        }
        return Al(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (l = K.current, Wa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = $l, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps
            }
            l[Kl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Po(l.nodeValue, e)), l || Ce(t)
          } else l = Bu(l).createTextNode(a), l[Kl] = t, t.stateNode = l
        }
        return Al(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = Wa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(s(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[Kl] = t
            } else $a(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Al(t), n = !1
          } else n = Bs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null)
        }
        if (Vt(t), (t.flags & 128) !== 0) return t.lanes = e, t;
        if (e = a !== null, l = l !== null && l.memoizedState !== null, e) {
          a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)
        }
        return e !== l && e && (t.child.flags |= 8192), Tu(t, t.updateQueue), Al(t), null;
      case 4:
        return at(), l === null && Pc(t.stateNode.containerInfo), Al(t), null;
      case 10:
        return Qt(t.type), Al(t), null;
      case 19:
        if (q(Cl), n = t.memoizedState, n === null) return Al(t), null;
        if (a = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) mn(n, !1);
          else {
            if (El !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null;) {
                if (u = pu(l), u !== null) {
                  for (t.flags |= 128, mn(n, !1), l = u.updateQueue, t.updateQueue = l, Tu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) Us(e, l), e = e.sibling;
                  return R(Cl, Cl.current & 1 | 2), t.child
                }
                l = l.sibling
              }
            n.tail !== null && _t() > Mu && (t.flags |= 128, a = !0, mn(n, !1), t.lanes = 4194304)
          }
        else {
          if (!a)
            if (l = pu(u), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, Tu(t, l), mn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !il) return Al(t), null
            } else 2 * _t() - n.renderingStartTime > Mu && e !== 536870912 && (t.flags |= 128, a = !0, mn(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (l = n.last, l !== null ? l.sibling = u : t.child = u, n.last = u)
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = _t(), t.sibling = null, l = Cl.current, R(Cl, a ? l & 1 | 2 : l & 1), t) : (Al(t), null);
      case 22:
      case 23:
        return Vt(t), tc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Al(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Al(t), e = t.updateQueue, e !== null && Tu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && q(Ge), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Qt(ql), Al(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(s(156, t.tag))
  }

  function Oh(l, t) {
    switch (wi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Qt(ql), at(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return le(t), null;
      case 13:
        if (Vt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          $a()
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return q(Cl), null;
      case 4:
        return at(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return Vt(t), tc(), l !== null && q(Ge), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Qt(ql), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function io(l, t) {
    switch (wi(t), t.tag) {
      case 3:
        Qt(ql), at();
        break;
      case 26:
      case 27:
      case 5:
        le(t);
        break;
      case 4:
        at();
        break;
      case 13:
        Vt(t);
        break;
      case 19:
        q(Cl);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        Vt(t), tc(), l !== null && q(Ge);
        break;
      case 24:
        Qt(ql)
    }
  }

  function hn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            a = u(), i.destroy = a
          }
          e = e.next
        } while (e !== n)
      }
    } catch (c) {
      vl(t, t.return, c)
    }
  }

  function de(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var r = e,
                y = c;
              try {
                y()
              } catch (z) {
                vl(n, r, z)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (z) {
      vl(t, t.return, z)
    }
  }

  function co(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Js(t, e)
      } catch (a) {
        vl(l, l.return, a)
      }
    }
  }

  function fo(l, t, e) {
    e.props = we(l.type, l.memoizedProps), e.state = l.memoizedState;
    try {
      e.componentWillUnmount()
    } catch (a) {
      vl(l, t, a)
    }
  }

  function vn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a
      }
    } catch (n) {
      vl(l, t, n)
    }
  }

  function Rt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function") try {
        a()
      } catch (n) {
        vl(l, t, n)
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
      } else if (typeof e == "function") try {
        e(null)
      } catch (n) {
        vl(l, t, n)
      } else e.current = null
  }

  function so(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
      }
    }
    catch (n) {
      vl(l, l.return, n)
    }
  }

  function Oc(l, t, e) {
    try {
      var a = l.stateNode;
      $h(a, l.type, e, t), a[Il] = t
    } catch (n) {
      vl(l, l.return, n)
    }
  }

  function ro(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && xe(l.type) || l.tag === 4
  }

  function jc(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || ro(l.return)) return null;
        l = l.return
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
        if (l.tag === 27 && xe(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child
      }
      if (!(l.flags & 2)) return l.stateNode
    }
  }

  function Rc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Cu));
    else if (a !== 4 && (a === 27 && xe(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Rc(l, t, e), l = l.sibling; l !== null;) Rc(l, t, e), l = l.sibling
  }

  function Eu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && xe(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (Eu(l, t, e), l = l.sibling; l !== null;) Eu(l, t, e), l = l.sibling
  }

  function oo(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
      Ll(t, a, e), t[Kl] = l, t[Il] = e
    } catch (u) {
      vl(l, l.return, u)
    }
  }
  var kt = !1,
    jl = !1,
    Dc = !1,
    mo = typeof WeakSet == "function" ? WeakSet : Set,
    wl = null;

  function jh(l, t) {
    if (l = l.containerInfo, ef = Zu, l = zs(l), ji(l)) {
      if ("selectionStart" in l) var e = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
      else l: {
        e = (e = l.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var n = a.anchorOffset,
            u = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, u.nodeType
          } catch {
            e = null;
            break l
          }
          var i = 0,
            c = -1,
            r = -1,
            y = 0,
            z = 0,
            N = l,
            g = null;
          t: for (;;) {
            for (var b; N !== e || n !== 0 && N.nodeType !== 3 || (c = i + n), N !== u || a !== 0 && N.nodeType !== 3 || (r = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (b = N.firstChild) !== null;) g = N, N = b;
            for (;;) {
              if (N === l) break t;
              if (g === e && ++y === n && (c = i), g === u && ++z === a && (r = i), (b = N.nextSibling) !== null) break;
              N = g, g = N.parentNode
            }
            N = b
          }
          e = c === -1 || r === -1 ? null : {
            start: c,
            end: r
          }
        } else e = null
      }
      e = e || {
        start: 0,
        end: 0
      }
    } else e = null;
    for (af = {
        focusedElem: l,
        selectionRange: e
      }, Zu = !1, wl = t; wl !== null;)
      if (t = wl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, wl = l;
      else
        for (; wl !== null;) {
          switch (t = wl, u = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var L = we(e.type, n, e.elementType === e.type);
                  l = a.getSnapshotBeforeUpdate(L, u), a.__reactInternalSnapshotBeforeUpdate = l
                } catch (Z) {
                  vl(e, e.return, Z)
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) cf(l);
                else if (e === 1) switch (l.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    cf(l);
                    break;
                  default:
                    l.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(s(163))
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, wl = l;
            break
          }
          wl = t.return
        }
  }

  function ho(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        me(l, e), a & 4 && hn(5, e);
        break;
      case 1:
        if (me(l, e), a & 4)
          if (l = e.stateNode, t === null) try {
            l.componentDidMount()
          } catch (i) {
            vl(e, e.return, i)
          } else {
            var n = we(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate)
            } catch (i) {
              vl(e, e.return, i)
            }
          }
        a & 64 && co(e), a & 512 && vn(e, e.return);
        break;
      case 3:
        if (me(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              t = e.child.stateNode;
              break;
            case 1:
              t = e.child.stateNode
          }
          try {
            Js(l, t)
          } catch (i) {
            vl(e, e.return, i)
          }
        }
        break;
      case 27:
        t === null && a & 4 && oo(e);
      case 26:
      case 5:
        me(l, e), t === null && a & 4 && so(e), a & 512 && vn(e, e.return);
        break;
      case 12:
        me(l, e);
        break;
      case 13:
        me(l, e), a & 4 && go(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Gh.bind(null, e), a0(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || kt, !a) {
          t = t !== null && t.memoizedState !== null || jl, n = kt;
          var u = jl;
          kt = a, (jl = t) && !u ? he(l, e, (e.subtreeFlags & 8772) !== 0) : me(l, e), kt = n, jl = u
        }
        break;
      case 30:
        break;
      default:
        me(l, e)
    }
  }

  function vo(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, vo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && oi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
  }
  var pl = null,
    tt = !1;

  function Jt(l, t, e) {
    for (e = e.child; e !== null;) yo(l, t, e), e = e.sibling
  }

  function yo(l, t, e) {
    if (nt && typeof nt.onCommitFiberUnmount == "function") try {
      nt.onCommitFiberUnmount(qa, e)
    } catch {}
    switch (e.tag) {
      case 26:
        jl || Rt(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        jl || Rt(e, t);
        var a = pl,
          n = tt;
        xe(e.type) && (pl = e.stateNode, tt = !1), Jt(l, t, e), Tn(e.stateNode), pl = a, tt = n;
        break;
      case 5:
        jl || Rt(e, t);
      case 6:
        if (a = pl, n = tt, pl = null, Jt(l, t, e), pl = a, tt = n, pl !== null)
          if (tt) try {
            (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(e.stateNode)
          } catch (u) {
            vl(e, t, u)
          } else try {
            pl.removeChild(e.stateNode)
          } catch (u) {
            vl(e, t, u)
          }
        break;
      case 18:
        pl !== null && (tt ? (l = pl, nd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Dn(l)) : nd(pl, e.stateNode));
        break;
      case 4:
        a = pl, n = tt, pl = e.stateNode.containerInfo, tt = !0, Jt(l, t, e), pl = a, tt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jl || de(2, e, t), jl || de(4, e, t), Jt(l, t, e);
        break;
      case 1:
        jl || (Rt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && fo(e, t, a)), Jt(l, t, e);
        break;
      case 21:
        Jt(l, t, e);
        break;
      case 22:
        jl = (a = jl) || e.memoizedState !== null, Jt(l, t, e), jl = a;
        break;
      default:
        Jt(l, t, e)
    }
  }

  function go(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Dn(l)
    } catch (e) {
      vl(t, t.return, e)
    }
  }

  function Rh(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new mo), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new mo), t;
      default:
        throw Error(s(435, l.tag))
    }
  }

  function Uc(l, t) {
    var e = Rh(l);
    t.forEach(function(a) {
      var n = Xh.bind(null, l, a);
      e.has(a) || (e.add(a), a.then(n, n))
    })
  }

  function ft(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          i = t,
          c = i;
        l: for (; c !== null;) {
          switch (c.tag) {
            case 27:
              if (xe(c.type)) {
                pl = c.stateNode, tt = !1;
                break l
              }
              break;
            case 5:
              pl = c.stateNode, tt = !1;
              break l;
            case 3:
            case 4:
              pl = c.stateNode.containerInfo, tt = !0;
              break l
          }
          c = c.return
        }
        if (pl === null) throw Error(s(160));
        yo(u, i, n), pl = null, tt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null;) bo(t, l), t = t.sibling
  }
  var Et = null;

  function bo(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, l), st(l), a & 4 && (de(3, l, l.return), hn(3, l), de(5, l, l.return));
        break;
      case 1:
        ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), a & 64 && kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Et;
        if (ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type,
                  e = l.memoizedProps,
                  n = n.ownerDocument || n;t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ya] || u[Kl] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Ll(u, a, e), u[Kl] = l, Gl(u), a = u;
                      break l;
                    case "link":
                      var i = dd("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t
                          }
                      }
                      u = n.createElement(a), Ll(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = dd("meta", "content", n).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t
                          }
                      }
                      u = n.createElement(a), Ll(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a))
                  }
                  u[Kl] = l,
                  Gl(u),
                  a = u
                }
                l.stateNode = a
              }
          else md(n, l.type, l.stateNode);
          else l.stateNode = od(n, a, l.memoizedProps);
          else u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? md(n, l.type, l.stateNode) : od(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && Oc(l, l.memoizedProps, e.memoizedProps)
        }
        break;
      case 27:
        ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), e !== null && a & 4 && Oc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Pe(n, "")
          } catch (b) {
            vl(l, l.return, b)
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Oc(l, n, e !== null ? e.memoizedProps : n)), a & 1024 && (Dc = !0);
        break;
      case 6:
        if (ft(t, l), st(l), a & 4) {
          if (l.stateNode === null) throw Error(s(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a
          } catch (b) {
            vl(l, l.return, b)
          }
        }
        break;
      case 3:
        if (Xu = null, n = Et, Et = Yu(t.containerInfo), ft(t, l), Et = n, st(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Dn(t.containerInfo)
        } catch (b) {
          vl(l, l.return, b)
        }
        Dc && (Dc = !1, po(l));
        break;
      case 4:
        a = Et, Et = Yu(l.stateNode.containerInfo), ft(t, l), st(l), Et = a;
        break;
      case 12:
        ft(t, l), st(l);
        break;
      case 13:
        ft(t, l), st(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Gc = _t()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Uc(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null,
          y = kt,
          z = jl;
        if (kt = y || n, jl = z || r, ft(t, l), jl = z, kt = y, st(l), a & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || r || kt || jl || Qe(l)), e = null, t = l;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (e === null) {
              r = e = t;
              try {
                if (u = r.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = r.stateNode;
                  var N = r.memoizedProps.style,
                    g = N != null && N.hasOwnProperty("display") ? N.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim()
                }
              } catch (b) {
                vl(r, r.return, b)
              }
            }
          } else if (t.tag === 6) {
            if (e === null) {
              r = t;
              try {
                r.stateNode.nodeValue = n ? "" : r.memoizedProps
              } catch (b) {
                vl(r, r.return, b)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === l) break l;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === l) break l;
            e === t && (e = null), t = t.return
          }
          e === t && (e = null), t.sibling.return = t.return, t = t.sibling
        }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Uc(l, e))));
        break;
      case 19:
        ft(t, l), st(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Uc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, l), st(l)
    }
  }

  function st(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null;) {
          if (ro(a)) {
            e = a;
            break
          }
          a = a.return
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = jc(l);
            Eu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), e.flags &= -33);
            var c = jc(l);
            Eu(l, c, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo,
              y = jc(l);
            Rc(l, y, r);
            break;
          default:
            throw Error(s(161))
        }
      } catch (z) {
        vl(l, l.return, z)
      }
      l.flags &= -3
    }
    t & 4096 && (l.flags &= -4097)
  }

  function po(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        po(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
      }
  }

  function me(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) ho(l, t.alternate, t), t = t.sibling
  }

  function Qe(l) {
    for (l = l.child; l !== null;) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          de(4, t, t.return), Qe(t);
          break;
        case 1:
          Rt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && fo(t, t.return, e), Qe(t);
          break;
        case 27:
          Tn(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), Qe(t);
          break;
        case 22:
          t.memoizedState === null && Qe(t);
          break;
        case 30:
          Qe(t);
          break;
        default:
          Qe(t)
      }
      l = l.sibling
    }
  }

  function he(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          he(n, u, e), hn(4, u);
          break;
        case 1:
          if (he(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount()
          } catch (y) {
            vl(a, a.return, y)
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++) ks(r[n], c)
            } catch (y) {
              vl(a, a.return, y)
            }
          }
          e && i & 64 && co(u), vn(u, u.return);
          break;
        case 27:
          oo(u);
        case 26:
        case 5:
          he(n, u, e), e && a === null && i & 4 && so(u), vn(u, u.return);
          break;
        case 12:
          he(n, u, e);
          break;
        case 13:
          he(n, u, e), e && i & 4 && go(n, u);
          break;
        case 22:
          u.memoizedState === null && he(n, u, e), vn(u, u.return);
          break;
        case 30:
          break;
        default:
          he(n, u, e)
      }
      t = t.sibling
    }
  }

  function Hc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Pa(e))
  }

  function qc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Pa(l))
  }

  function Dt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) xo(l, t, e, a), t = t.sibling
  }

  function xo(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(l, t, e, a), n & 2048 && hn(9, t);
        break;
      case 1:
        Dt(l, t, e, a);
        break;
      case 3:
        Dt(l, t, e, a), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Pa(l)));
        break;
      case 12:
        if (n & 2048) {
          Dt(l, t, e, a), l = t.stateNode;
          try {
            var u = t.memoizedProps,
              i = u.id,
              c = u.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
          } catch (r) {
            vl(t, t.return, r)
          }
        } else Dt(l, t, e, a);
        break;
      case 13:
        Dt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Dt(l, t, e, a) : yn(l, t) : u._visibility & 2 ? Dt(l, t, e, a) : (u._visibility |= 2, ba(l, t, e, a, (t.subtreeFlags & 10256) !== 0)), n & 2048 && Hc(i, t);
        break;
      case 24:
        Dt(l, t, e, a), n & 2048 && qc(t.alternate, t);
        break;
      default:
        Dt(l, t, e, a)
    }
  }

  function ba(l, t, e, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
      var u = l,
        i = t,
        c = e,
        r = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(u, i, c, r, n), hn(8, i);
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          i.memoizedState !== null ? z._visibility & 2 ? ba(u, i, c, r, n) : yn(u, i) : (z._visibility |= 2, ba(u, i, c, r, n)), n && y & 2048 && Hc(i.alternate, i);
          break;
        case 24:
          ba(u, i, c, r, n), n && y & 2048 && qc(i.alternate, i);
          break;
        default:
          ba(u, i, c, r, n)
      }
      t = t.sibling
    }
  }

  function yn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            yn(e, a), n & 2048 && Hc(a.alternate, a);
            break;
          case 24:
            yn(e, a), n & 2048 && qc(a.alternate, a);
            break;
          default:
            yn(e, a)
        }
        t = t.sibling
      }
  }
  var gn = 8192;

  function pa(l) {
    if (l.subtreeFlags & gn)
      for (l = l.child; l !== null;) So(l), l = l.sibling
  }

  function So(l) {
    switch (l.tag) {
      case 26:
        pa(l), l.flags & gn && l.memoizedState !== null && y0(Et, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        pa(l);
        break;
      case 3:
      case 4:
        var t = Et;
        Et = Yu(l.stateNode.containerInfo), pa(l), Et = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = gn, gn = 16777216, pa(l), gn = t) : pa(l));
        break;
      default:
        pa(l)
    }
  }

  function Ao(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do t = l.sibling, l.sibling = null, l = t; while (l !== null)
    }
  }

  function bn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          wl = a, To(a, l)
        }
      Ao(l)
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) zo(l), l = l.sibling
  }

  function zo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bn(l), l.flags & 2048 && de(9, l, l.return);
        break;
      case 3:
        bn(l);
        break;
      case 12:
        bn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Nu(l)) : bn(l);
        break;
      default:
        bn(l)
    }
  }

  function Nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          wl = a, To(a, l)
        }
      Ao(l)
    }
    for (l = l.child; l !== null;) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          de(8, t, t.return), Nu(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Nu(t));
          break;
        default:
          Nu(t)
      }
      l = l.sibling
    }
  }

  function To(l, t) {
    for (; wl !== null;) {
      var e = wl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          de(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          Pa(e.memoizedState.cache)
      }
      if (a = e.child, a !== null) a.return = e, wl = a;
      else l: for (e = l; wl !== null;) {
        a = wl;
        var n = a.sibling,
          u = a.return;
        if (vo(a), a === e) {
          wl = null;
          break l
        }
        if (n !== null) {
          n.return = u, wl = n;
          break l
        }
        wl = u
      }
    }
  }
  var Dh = {
      getCacheForType: function(l) {
        var t = kl(ql),
          e = t.data.get(l);
        return e === void 0 && (e = l(), t.data.set(l, e)), e
      }
    },
    Uh = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    gl = null,
    tl = null,
    al = 0,
    rl = 0,
    rt = null,
    ve = !1,
    xa = !1,
    Cc = !1,
    Wt = 0,
    El = 0,
    ye = 0,
    Ze = 0,
    Bc = 0,
    St = 0,
    Sa = 0,
    pn = null,
    et = null,
    Yc = !1,
    Gc = 0,
    Mu = 1 / 0,
    _u = null,
    ge = null,
    Vl = 0,
    be = null,
    Aa = null,
    za = 0,
    Xc = 0,
    wc = null,
    Eo = null,
    xn = 0,
    Qc = null;

  function ot() {
    if ((sl & 2) !== 0 && al !== 0) return al & -al;
    if (A.T !== null) {
      var l = ra;
      return l !== 0 ? l : Wc()
    }
    return Xf()
  }

  function No() {
    St === 0 && (St = (al & 536870912) === 0 || il ? Cf() : 536870912);
    var l = xt.current;
    return l !== null && (l.flags |= 32), St
  }

  function dt(l, t, e) {
    (l === gl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (Ta(l, 0), pe(l, al, St, !1)), Ba(l, e), ((sl & 2) === 0 || l !== gl) && (l === gl && ((sl & 2) === 0 && (Ze |= e), El === 4 && pe(l, al, St, !1)), Ut(l))
  }

  function Mo(l, t, e) {
    if ((sl & 6) !== 0) throw Error(s(327));
    var a = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ca(l, t),
      n = a ? Ch(l, t) : Lc(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        xa && !a && pe(l, t, 0, !1);
        break
      } else {
        if (e = l.current.alternate, u && !Hh(e)) {
          n = Lc(l, t, !1), u = !1;
          continue
        }
        if (n === 2) {
          if (u = t, l.errorRecoveryDisabledLanes & u) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;n = pn;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (Ta(c, i).flags |= 256), i = Lc(c, i, !1), i !== 2) {
                if (Cc && !r) {
                  c.errorRecoveryDisabledLanes |= u, Ze |= u, n = 4;
                  break l
                }
                u = et, et = n, u !== null && (et === null ? et = u : et.push.apply(et, u))
              }
              n = i
            }
            if (u = !1, n !== 2) continue
          }
        }
        if (n === 1) {
          Ta(l, 0), pe(l, t, 0, !0);
          break
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              pe(a, t, St, !ve);
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329))
          }
          if ((t & 62914560) === t && (n = Gc + 300 - _t(), 10 < n)) {
            if (pe(a, t, St, !ve), Gn(a, 0, !0) !== 0) break l;
            a.timeoutHandle = ed(_o.bind(null, a, e, et, _u, Yc, t, St, Ze, Sa, ve, u, 2, -0, 0), n);
            break l
          }
          _o(a, e, et, _u, Yc, t, St, Ze, Sa, ve, u, 0, -0, 0)
        }
      }
      break
    } while (!0);
    Ut(l)
  }

  function _o(l, t, e, a, n, u, i, c, r, y, z, N, g, b) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, (N & 8192 || (N & 16785408) === 16785408) && (Mn = {
        stylesheets: null,
        count: 0,
        unsuspend: v0
      }, So(t), N = g0(), N !== null)) {
      l.cancelPendingCommit = N(qo.bind(null, l, t, u, e, a, n, i, c, r, z, 1, g, b)), pe(l, u, i, !y);
      return
    }
    qo(l, t, u, e, a, n, i, c, r)
  }

  function Hh(l) {
    for (var t = l;;) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!it(u(), n)) return !1
          } catch {
            return !1
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function pe(l, t, e, a) {
    t &= ~Bc, t &= ~Ze, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n;) {
      var u = 31 - ut(n),
        i = 1 << u;
      a[u] = -1, n &= ~i
    }
    e !== 0 && Yf(l, e, t)
  }

  function Ou() {
    return (sl & 6) === 0 ? (Sn(0), !1) : !0
  }

  function Zc() {
    if (tl !== null) {
      if (rl === 0) var l = tl.return;
      else l = tl, wt = Be = null, ic(l), ya = null, on = 0, l = tl;
      for (; l !== null;) io(l.alternate, l), l = l.return;
      tl = null
    }
  }

  function Ta(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Ih(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Zc(), gl = l, tl = e = Yt(l.current, null), al = t, rl = 0, rt = null, ve = !1, xa = Ca(l, t), Cc = !1, Sa = St = Bc = Ze = ye = El = 0, et = pn = null, Yc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a;) {
        var n = 31 - ut(a),
          u = 1 << n;
        t |= l[n], a &= ~u
      }
    return Wt = t, Fn(), e
  }

  function Oo(l, t) {
    F = null, A.H = yu, t === tn || t === iu ? (t = Ls(), rl = 3) : t === Qs ? (t = Ls(), rl = 4) : rl = t === Kr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rt = t, tl === null && (El = 1, Su(l, yt(t, l.current)))
  }

  function jo() {
    var l = A.H;
    return A.H = yu, l === null ? yu : l
  }

  function Ro() {
    var l = A.A;
    return A.A = Dh, l
  }

  function Vc() {
    El = 4, ve || (al & 4194048) !== al && xt.current !== null || (xa = !0), (ye & 134217727) === 0 && (Ze & 134217727) === 0 || gl === null || pe(gl, al, St, !1)
  }

  function Lc(l, t, e) {
    var a = sl;
    sl |= 2;
    var n = jo(),
      u = Ro();
    (gl !== l || al !== t) && (_u = null, Ta(l, t)), t = !1;
    var i = El;
    l: do try {
        if (rl !== 0 && tl !== null) {
          var c = tl,
            r = rt;
          switch (rl) {
            case 8:
              Zc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var y = rl;
              if (rl = 0, rt = null, Ea(l, c, r, y), e && xa) {
                i = 0;
                break l
              }
              break;
            default:
              y = rl, rl = 0, rt = null, Ea(l, c, r, y)
          }
        }
        qh(), i = El;
        break
      } catch (z) {
        Oo(l, z)
      }
      while (!0);
      return t && l.shellSuspendCounter++, wt = Be = null, sl = a, A.H = n, A.A = u, tl === null && (gl = null, al = 0, Fn()), i
  }

  function qh() {
    for (; tl !== null;) Do(tl)
  }

  function Ch(l, t) {
    var e = sl;
    sl |= 2;
    var a = jo(),
      n = Ro();
    gl !== l || al !== t ? (_u = null, Mu = _t() + 500, Ta(l, t)) : xa = Ca(l, t);
    l: do try {
        if (rl !== 0 && tl !== null) {
          t = tl;
          var u = rt;
          t: switch (rl) {
            case 1:
              rl = 0, rt = null, Ea(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Zs(u)) {
                rl = 0, rt = null, Uo(t);
                break
              }
              t = function() {
                rl !== 2 && rl !== 9 || gl !== l || (rl = 7), Ut(l)
              }, u.then(t, t);
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              Zs(u) ? (rl = 0, rt = null, Uo(t)) : (rl = 0, rt = null, Ea(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (tl.tag) {
                case 26:
                  i = tl.memoizedState;
                case 5:
                case 27:
                  var c = tl;
                  if (!i || hd(i)) {
                    rl = 0, rt = null;
                    var r = c.sibling;
                    if (r !== null) tl = r;
                    else {
                      var y = c.return;
                      y !== null ? (tl = y, ju(y)) : tl = null
                    }
                    break t
                  }
              }
              rl = 0, rt = null, Ea(l, t, u, 5);
              break;
            case 6:
              rl = 0, rt = null, Ea(l, t, u, 6);
              break;
            case 8:
              Zc(), El = 6;
              break l;
            default:
              throw Error(s(462))
          }
        }
        Bh();
        break
      } catch (z) {
        Oo(l, z)
      }
      while (!0);
      return wt = Be = null, A.H = a, A.A = n, sl = e, tl !== null ? 0 : (gl = null, al = 0, Fn(), El)
  }

  function Bh() {
    for (; tl !== null && !um();) Do(tl)
  }

  function Do(l) {
    var t = no(l.alternate, l, Wt);
    l.memoizedProps = l.pendingProps, t === null ? ju(l) : tl = t
  }

  function Uo(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ir(e, t, t.pendingProps, t.type, void 0, al);
        break;
      case 11:
        t = Ir(e, t, t.pendingProps, t.type.render, t.ref, al);
        break;
      case 5:
        ic(t);
      default:
        io(e, t), t = tl = Us(t, Wt), t = no(e, t, Wt)
    }
    l.memoizedProps = l.pendingProps, t === null ? ju(l) : tl = t
  }

  function Ea(l, t, e, a) {
    wt = Be = null, ic(t), ya = null, on = 0;
    var n = t.return;
    try {
      if (Nh(l, n, t, e, al)) {
        El = 1, Su(l, yt(e, l.current)), tl = null;
        return
      }
    } catch (u) {
      if (n !== null) throw tl = n, u;
      El = 1, Su(l, yt(e, l.current)), tl = null;
      return
    }
    t.flags & 32768 ? (il || a === 1 ? l = !0 : xa || (al & 536870912) !== 0 ? l = !1 : (ve = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = xt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ho(t, l)) : ju(t)
  }

  function ju(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ho(t, ve);
        return
      }
      l = t.return;
      var e = _h(t.alternate, t, Wt);
      if (e !== null) {
        tl = e;
        return
      }
      if (t = t.sibling, t !== null) {
        tl = t;
        return
      }
      tl = t = l
    } while (t !== null);
    El === 0 && (El = 5)
  }

  function Ho(l, t) {
    do {
      var e = Oh(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, tl = e;
        return
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        tl = l;
        return
      }
      tl = l = e
    } while (l !== null);
    El = 6, tl = null
  }

  function qo(l, t, e, a, n, u, i, c, r) {
    l.cancelPendingCommit = null;
    do Ru(); while (Vl !== 0);
    if ((sl & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (u = t.lanes | t.childLanes, u |= qi, vm(l, e, u, i, c, r), l === gl && (tl = gl = null, al = 0), Aa = t, be = l, za = e, Xc = u, wc = n, Eo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, wh(Cn, function() {
          return Xo(), null
        })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, n = U.p, U.p = 2, i = sl, sl |= 4;
        try {
          jh(l, t, e)
        } finally {
          sl = i, U.p = n, A.T = a
        }
      }
      Vl = 1, Co(), Bo(), Yo()
    }
  }

  function Co() {
    if (Vl === 1) {
      Vl = 0;
      var l = be,
        t = Aa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          bo(t, l);
          var u = af,
            i = zs(l.containerInfo),
            c = u.focusedElem,
            r = u.selectionRange;
          if (i !== c && c && c.ownerDocument && As(c.ownerDocument.documentElement, c)) {
            if (r !== null && ji(c)) {
              var y = r.start,
                z = r.end;
              if (z === void 0 && (z = y), "selectionStart" in c) c.selectionStart = y, c.selectionEnd = Math.min(z, c.value.length);
              else {
                var N = c.ownerDocument || document,
                  g = N && N.defaultView || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    L = c.textContent.length,
                    Z = Math.min(r.start, L),
                    ml = r.end === void 0 ? Z : Math.min(r.end, L);
                  !b.extend && Z > ml && (i = ml, ml = Z, Z = i);
                  var h = Ss(c, Z),
                    m = Ss(c, ml);
                  if (h && m && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== m.node || b.focusOffset !== m.offset)) {
                    var v = N.createRange();
                    v.setStart(h.node, h.offset), b.removeAllRanges(), Z > ml ? (b.addRange(v), b.extend(m.node, m.offset)) : (v.setEnd(m.node, m.offset), b.addRange(v))
                  }
                }
              }
            }
            for (N = [], b = c; b = b.parentNode;) b.nodeType === 1 && N.push({
              element: b,
              left: b.scrollLeft,
              top: b.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < N.length; c++) {
              var E = N[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top
            }
          }
          Zu = !!ef, af = ef = null
        } finally {
          sl = n, U.p = a, A.T = e
        }
      }
      l.current = t, Vl = 2
    }
  }

  function Bo() {
    if (Vl === 2) {
      Vl = 0;
      var l = be,
        t = Aa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          ho(l, t.alternate, t)
        } finally {
          sl = n, U.p = a, A.T = e
        }
      }
      Vl = 3
    }
  }

  function Yo() {
    if (Vl === 4 || Vl === 3) {
      Vl = 0, im();
      var l = be,
        t = Aa,
        e = za,
        a = Eo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Vl = 5 : (Vl = 0, Aa = be = null, Go(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (ge = null), si(e), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
        nt.onCommitFiberRoot(qa, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        t = A.T, n = U.p, U.p = 2, A.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            })
          }
        } finally {
          A.T = t, U.p = n
        }
      }(za & 3) !== 0 && Ru(), Ut(l), n = l.pendingLanes, (e & 4194090) !== 0 && (n & 42) !== 0 ? l === Qc ? xn++ : (xn = 0, Qc = l) : xn = 0, Sn(0)
    }
  }

  function Go(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Pa(t)))
  }

  function Ru(l) {
    return Co(), Bo(), Yo(), Xo()
  }

  function Xo() {
    if (Vl !== 5) return !1;
    var l = be,
      t = Xc;
    Xc = 0;
    var e = si(za),
      a = A.T,
      n = U.p;
    try {
      U.p = 32 > e ? 32 : e, A.T = null, e = wc, wc = null;
      var u = be,
        i = za;
      if (Vl = 0, Aa = be = null, za = 0, (sl & 6) !== 0) throw Error(s(331));
      var c = sl;
      if (sl |= 4, zo(u.current), xo(u, u.current, i, e), sl = c, Sn(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
        nt.onPostCommitFiberRoot(qa, u)
      } catch {}
      return !0
    } finally {
      U.p = n, A.T = a, Go(l, t)
    }
  }

  function wo(l, t, e) {
    t = yt(e, t), t = xc(l.stateNode, t, 2), l = fe(l, t, 2), l !== null && (Ba(l, 2), Ut(l))
  }

  function vl(l, t, e) {
    if (l.tag === 3) wo(l, l, e);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          wo(t, l, e);
          break
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ge === null || !ge.has(a))) {
            l = yt(e, l), e = Vr(2), a = fe(t, e, 2), a !== null && (Lr(e, a, t, l), Ba(a, 2), Ut(a));
            break
          }
        }
        t = t.return
      }
  }

  function Kc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Uh;
      var n = new Set;
      a.set(t, n)
    } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
    n.has(e) || (Cc = !0, n.add(e), l = Yh.bind(null, l, t, e), t.then(l, l))
  }

  function Yh(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, gl === l && (al & e) === e && (El === 4 || El === 3 && (al & 62914560) === al && 300 > _t() - Gc ? (sl & 2) === 0 && Ta(l, 0) : Bc |= e, Sa === al && (Sa = 0)), Ut(l)
  }

  function Qo(l, t) {
    t === 0 && (t = Bf()), l = ia(l, t), l !== null && (Ba(l, t), Ut(l))
  }

  function Gh(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), Qo(l, e)
  }

  function Xh(l, t) {
    var e = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314))
    }
    a !== null && a.delete(t), Qo(l, e)
  }

  function wh(l, t) {
    return ui(l, t)
  }
  var Du = null,
    Na = null,
    kc = !1,
    Uu = !1,
    Jc = !1,
    Ve = 0;

  function Ut(l) {
    l !== Na && l.next === null && (Na === null ? Du = Na = l : Na = Na.next = l), Uu = !0, kc || (kc = !0, Zh())
  }

  function Sn(l, t) {
    if (!Jc && Uu) {
      Jc = !0;
      do
        for (var e = !1, a = Du; a !== null;) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              u = (1 << 31 - ut(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
            }
            u !== 0 && (e = !0, Ko(a, u))
          } else u = al, u = Gn(a, a === gl ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ca(a, u) || (e = !0, Ko(a, u));
          a = a.next
        }
      while (e);
      Jc = !1
    }
  }

  function Qh() {
    Zo()
  }

  function Zo() {
    Uu = kc = !1;
    var l = 0;
    Ve !== 0 && (Fh() && (l = Ve), Ve = 0);
    for (var t = _t(), e = null, a = Du; a !== null;) {
      var n = a.next,
        u = Vo(a, t);
      u === 0 ? (a.next = null, e === null ? Du = n : e.next = n, n === null && (Na = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Uu = !0)), a = n
    }
    Sn(l)
  }

  function Vo(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u;) {
      var i = 31 - ut(u),
        c = 1 << i,
        r = n[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = hm(c, t)) : r <= t && (l.expiredLanes |= c), u &= ~c
    }
    if (t = gl, e = al, e = Gn(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && ii(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ca(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ii(a), si(e)) {
        case 2:
        case 8:
          e = Hf;
          break;
        case 32:
          e = Cn;
          break;
        case 268435456:
          e = qf;
          break;
        default:
          e = Cn
      }
      return a = Lo.bind(null, l), e = ui(e, a), l.callbackPriority = t, l.callbackNode = e, t
    }
    return a !== null && a !== null && ii(a), l.callbackPriority = 2, l.callbackNode = null, 2
  }

  function Lo(l, t) {
    if (Vl !== 0 && Vl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Ru() && l.callbackNode !== e) return null;
    var a = al;
    return a = Gn(l, l === gl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (Mo(l, a, t), Vo(l, _t()), l.callbackNode != null && l.callbackNode === e ? Lo.bind(null, l) : null)
  }

  function Ko(l, t) {
    if (Ru()) return null;
    Mo(l, t, !0)
  }

  function Zh() {
    Ph(function() {
      (sl & 6) !== 0 ? ui(Uf, Qh) : Zo()
    })
  }

  function Wc() {
    return Ve === 0 && (Ve = Cf()), Ve
  }

  function ko(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Vn("" + l)
  }

  function Jo(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
  }

  function Vh(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = ko((n[Il] || null).action),
        i = a.submitter;
      i && (t = (t = i[Il] || null) ? ko(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new Jn("action", "action", null, a, n);
      l.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (Ve !== 0) {
                var r = i ? Jo(n, i) : new FormData(n);
                vc(e, {
                  pending: !0,
                  data: r,
                  method: n.method,
                  action: u
                }, null, r)
              }
            } else typeof u == "function" && (c.preventDefault(), r = i ? Jo(n, i) : new FormData(n), vc(e, {
              pending: !0,
              data: r,
              method: n.method,
              action: u
            }, u, r))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var $c = 0; $c < Hi.length; $c++) {
    var Fc = Hi[$c],
      Lh = Fc.toLowerCase(),
      Kh = Fc[0].toUpperCase() + Fc.slice(1);
    Tt(Lh, "on" + Kh)
  }
  Tt(Ns, "onAnimationEnd"), Tt(Ms, "onAnimationIteration"), Tt(_s, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(sh, "onTransitionRun"), Tt(rh, "onTransitionStart"), Tt(oh, "onTransitionCancel"), Tt(Os, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    kh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));

  function Wo(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              r = c.instance,
              y = c.currentTarget;
            if (c = c.listener, r !== u && n.isPropagationStopped()) break l;
            u = c, n.currentTarget = y;
            try {
              u(n)
            } catch (z) {
              xu(z)
            }
            n.currentTarget = null, u = r
          } else
            for (i = 0; i < a.length; i++) {
              if (c = a[i], r = c.instance, y = c.currentTarget, c = c.listener, r !== u && n.isPropagationStopped()) break l;
              u = c, n.currentTarget = y;
              try {
                u(n)
              } catch (z) {
                xu(z)
              }
              n.currentTarget = null, u = r
            }
      }
    }
  }

  function el(l, t) {
    var e = t[ri];
    e === void 0 && (e = t[ri] = new Set);
    var a = l + "__bubble";
    e.has(a) || ($o(t, l, 2, !1), e.add(a))
  }

  function Ic(l, t, e) {
    var a = 0;
    t && (a |= 4), $o(e, l, a, t)
  }
  var Hu = "_reactListening" + Math.random().toString(36).slice(2);

  function Pc(l) {
    if (!l[Hu]) {
      l[Hu] = !0, Qf.forEach(function(e) {
        e !== "selectionchange" && (kh.has(e) || Ic(e, !1, l), Ic(e, !0, l))
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hu] || (t[Hu] = !0, Ic("selectionchange", !1, t))
    }
  }

  function $o(l, t, e, a) {
    switch (xd(t)) {
      case 2:
        var n = x0;
        break;
      case 8:
        n = S0;
        break;
      default:
        n = hf
    }
    e = n.bind(null, t, e, l), n = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
      passive: n
    }) : l.addEventListener(t, e, !1)
  }

  function lf(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (;;) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4)
          for (i = a.return; i !== null;) {
            var r = i.tag;
            if ((r === 3 || r === 4) && i.stateNode.containerInfo === n) return;
            i = i.return
          }
        for (; c !== null;) {
          if (i = ke(c), i === null) return;
          if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
            a = u = i;
            continue l
          }
          c = c.parentNode
        }
      }
      a = a.return
    }
    es(function() {
      var y = u,
        z = pi(e),
        N = [];
      l: {
        var g = js.get(l);
        if (g !== void 0) {
          var b = Jn,
            L = l;
          switch (l) {
            case "keypress":
              if (Kn(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = wm;
              break;
            case "focusin":
              L = "focus", b = Ei;
              break;
            case "focusout":
              L = "blur", b = Ei;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ei;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Om;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Vm;
              break;
            case Ns:
            case Ms:
            case _s:
              b = Dm;
              break;
            case Os:
              b = Km;
              break;
            case "scroll":
            case "scrollend":
              b = Mm;
              break;
            case "wheel":
              b = Jm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = cs;
              break;
            case "toggle":
            case "beforetoggle":
              b = $m
          }
          var Z = (t & 4) !== 0,
            ml = !Z && (l === "scroll" || l === "scrollend"),
            h = Z ? g !== null ? g + "Capture" : null : g;
          Z = [];
          for (var m = y, v; m !== null;) {
            var E = m;
            if (v = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || v === null || h === null || (E = Xa(m, h), E != null && Z.push(zn(m, E, v))), ml) break;
            m = m.return
          }
          0 < Z.length && (g = new b(g, L, null, e, z), N.push({
            event: g,
            listeners: Z
          }))
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", g && e !== bi && (L = e.relatedTarget || e.fromElement) && (ke(L) || L[Ke])) break l;
          if ((b || g) && (g = z.window === z ? z : (g = z.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (L = e.relatedTarget || e.toElement, b = y, L = L ? ke(L) : null, L !== null && (ml = O(L), Z = L.tag, L !== ml || Z !== 5 && Z !== 27 && Z !== 6) && (L = null)) : (b = null, L = y), b !== L)) {
            if (Z = us, E = "onMouseLeave", h = "onMouseEnter", m = "mouse", (l === "pointerout" || l === "pointerover") && (Z = cs, E = "onPointerLeave", h = "onPointerEnter", m = "pointer"), ml = b == null ? g : Ga(b), v = L == null ? g : Ga(L), g = new Z(E, m + "leave", b, e, z), g.target = ml, g.relatedTarget = v, E = null, ke(z) === y && (Z = new Z(h, m + "enter", L, e, z), Z.target = v, Z.relatedTarget = ml, E = Z), ml = E, b && L) t: {
              for (Z = b, h = L, m = 0, v = Z; v; v = Ma(v)) m++;
              for (v = 0, E = h; E; E = Ma(E)) v++;
              for (; 0 < m - v;) Z = Ma(Z),
              m--;
              for (; 0 < v - m;) h = Ma(h),
              v--;
              for (; m--;) {
                if (Z === h || h !== null && Z === h.alternate) break t;
                Z = Ma(Z), h = Ma(h)
              }
              Z = null
            }
            else Z = null;
            b !== null && Fo(N, g, b, Z, !1), L !== null && ml !== null && Fo(N, ml, L, Z, !0)
          }
        }
        l: {
          if (g = y ? Ga(y) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var B = vs;
          else if (ms(g))
            if (ys) B = ih;
            else {
              B = nh;
              var P = ah
            }
          else b = g.nodeName,
          !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && gi(y.elementType) && (B = vs) : B = uh;
          if (B && (B = B(l, y))) {
            hs(N, B, e, z);
            break l
          }
          P && P(l, g, y),
          l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && yi(g, "number", g.value)
        }
        switch (P = y ? Ga(y) : window, l) {
          case "focusin":
            (ms(P) || P.contentEditable === "true") && (aa = P, Ri = y, Ja = null);
            break;
          case "focusout":
            Ja = Ri = aa = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Di = !1, Ts(N, e, z);
            break;
          case "selectionchange":
            if (fh) break;
          case "keydown":
          case "keyup":
            Ts(N, e, z)
        }
        var X;
        if (Mi) l: {
          switch (l) {
            case "compositionstart":
              var V = "onCompositionStart";
              break l;
            case "compositionend":
              V = "onCompositionEnd";
              break l;
            case "compositionupdate":
              V = "onCompositionUpdate";
              break l
          }
          V = void 0
        }
        else ea ? os(l, e) && (V = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (V = "onCompositionStart");V && (fs && e.locale !== "ko" && (ea || V !== "onCompositionStart" ? V === "onCompositionEnd" && ea && (X = as()) : (ne = z, Ai = "value" in ne ? ne.value : ne.textContent, ea = !0)), P = qu(y, V), 0 < P.length && (V = new is(V, l, null, e, z), N.push({
          event: V,
          listeners: P
        }), X ? V.data = X : (X = ds(e), X !== null && (V.data = X)))),
        (X = Im ? Pm(l, e) : lh(l, e)) && (V = qu(y, "onBeforeInput"), 0 < V.length && (P = new is("onBeforeInput", "beforeinput", null, e, z), N.push({
          event: P,
          listeners: V
        }), P.data = X)),
        Vh(N, l, y, e, z)
      }
      Wo(N, t)
    })
  }

  function zn(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    }
  }

  function qu(l, t) {
    for (var e = t + "Capture", a = []; l !== null;) {
      var n = l,
        u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Xa(l, e), n != null && a.unshift(zn(l, n, u)), n = Xa(l, t), n != null && a.push(zn(l, n, u))), l.tag === 3) return a;
      l = l.return
    }
    return []
  }

  function Ma(l) {
    if (l === null) return null;
    do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
    return l || null
  }

  function Fo(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a;) {
      var c = e,
        r = c.alternate,
        y = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (r = y, n ? (y = Xa(e, u), y != null && i.unshift(zn(e, y, r))) : n || (y = Xa(e, u), y != null && i.push(zn(e, y, r)))), e = e.return
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    })
  }
  var Jh = /\r\n?/g,
    Wh = /\u0000|\uFFFD/g;

  function Io(l) {
    return (typeof l == "string" ? l : "" + l).replace(Jh, `
`).replace(Wh, "")
  }

  function Po(l, t) {
    return t = Io(t), Io(l) === t
  }

  function Cu() {}

  function dl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
        break;
      case "className":
        wn(l, "class", a);
        break;
      case "tabIndex":
        wn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wn(l, e, a);
        break;
      case "style":
        ls(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          wn(l, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break
        }
        a = Vn("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof u == "function" && (e === "formAction" ? (t !== "input" && dl(l, t, "name", n.name, n, null), dl(l, t, "formEncType", n.formEncType, n, null), dl(l, t, "formMethod", n.formMethod, n, null), dl(l, t, "formTarget", n.formTarget, n, null)) : (dl(l, t, "encType", n.encType, n, null), dl(l, t, "method", n.method, n, null), dl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break
        }
        a = Vn("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Cu);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break
        }
        e = Vn("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        el("beforetoggle", l), el("toggle", l), Xn(l, "popover", a);
        break;
      case "xlinkActuate":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Xn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Em.get(e) || e, Xn(l, e, a))
    }
  }

  function tf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        ls(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && Pe(l, "" + a);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Cu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zf.hasOwnProperty(e)) l: {
          if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Il] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
            break l
          }
          e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Xn(l, e, a)
        }
    }
  }

  function Ll(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        el("error", l), el("load", l);
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null) switch (u) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                n = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                dl(l, t, u, i, e, null)
            }
          } n && dl(l, t, "srcSet", e.srcSet, e, null), a && dl(l, t, "src", e.src, e, null);
        return;
      case "input":
        el("invalid", l);
        var c = u = i = n = null,
          r = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null) switch (a) {
              case "name":
                n = z;
                break;
              case "type":
                i = z;
                break;
              case "checked":
                r = z;
                break;
              case "defaultChecked":
                y = z;
                break;
              case "value":
                u = z;
                break;
              case "defaultValue":
                c = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, t));
                break;
              default:
                dl(l, t, a, z, e, null)
            }
          } $f(l, u, c, r, y, i, n, !1), Qn(l);
        return;
      case "select":
        el("invalid", l), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null)) switch (n) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              i = c;
              break;
            case "multiple":
              a = c;
            default:
              dl(l, t, n, c, e, null)
          }
        t = u, e = i, l.multiple = !!a, t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
        return;
      case "textarea":
        el("invalid", l), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
            case "value":
              a = c;
              break;
            case "defaultValue":
              n = c;
              break;
            case "children":
              u = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(s(91));
              break;
            default:
              dl(l, t, i, c, e, null)
          }
        If(l, a, n, u), Qn(l);
        return;
      case "option":
        for (r in e)
          if (e.hasOwnProperty(r) && (a = e[r], a != null)) switch (r) {
            case "selected":
              l.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              dl(l, t, r, a, e, null)
          }
        return;
      case "dialog":
        el("beforetoggle", l), el("toggle", l), el("cancel", l), el("close", l);
        break;
      case "iframe":
      case "object":
        el("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < An.length; a++) el(An[a], l);
        break;
      case "image":
        el("error", l), el("load", l);
        break;
      case "details":
        el("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        el("error", l), el("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null)) switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, t));
            default:
              dl(l, t, y, a, e, null)
          }
        return;
      default:
        if (gi(t)) {
          for (z in e) e.hasOwnProperty(z) && (a = e[z], a !== void 0 && tf(l, t, z, a, e, void 0));
          return
        }
    }
    for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && dl(l, t, c, a, e, null))
  }

  function $h(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          r = null,
          y = null,
          z = null;
        for (b in e) {
          var N = e[b];
          if (e.hasOwnProperty(b) && N != null) switch (b) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              r = N;
            default:
              a.hasOwnProperty(b) || dl(l, t, b, null, a, N)
          }
        }
        for (var g in a) {
          var b = a[g];
          if (N = e[g], a.hasOwnProperty(g) && (b != null || N != null)) switch (g) {
            case "type":
              u = b;
              break;
            case "name":
              n = b;
              break;
            case "checked":
              y = b;
              break;
            case "defaultChecked":
              z = b;
              break;
            case "value":
              i = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(s(137, t));
              break;
            default:
              b !== N && dl(l, t, g, b, a, N)
          }
        }
        vi(l, i, c, r, y, z, u, n);
        return;
      case "select":
        b = i = c = g = null;
        for (u in e)
          if (r = e[u], e.hasOwnProperty(u) && r != null) switch (u) {
            case "value":
              break;
            case "multiple":
              b = r;
            default:
              a.hasOwnProperty(u) || dl(l, t, u, null, a, r)
          }
        for (n in a)
          if (u = a[n], r = e[n], a.hasOwnProperty(n) && (u != null || r != null)) switch (n) {
            case "value":
              g = u;
              break;
            case "defaultValue":
              c = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== r && dl(l, t, n, u, a, r)
          }
        t = c, e = i, a = b, g != null ? Ie(l, !!e, g, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = g = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              dl(l, t, c, null, a, n)
          }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              g = n;
              break;
            case "defaultValue":
              b = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(s(91));
              break;
            default:
              n !== u && dl(l, t, i, n, a, u)
          }
        Ff(l, g, b);
        return;
      case "option":
        for (var L in e)
          if (g = e[L], e.hasOwnProperty(L) && g != null && !a.hasOwnProperty(L)) switch (L) {
            case "selected":
              l.selected = !1;
              break;
            default:
              dl(l, t, L, null, a, g)
          }
        for (r in a)
          if (g = a[r], b = e[r], a.hasOwnProperty(r) && g !== b && (g != null || b != null)) switch (r) {
            case "selected":
              l.selected = g && typeof g != "function" && typeof g != "symbol";
              break;
            default:
              dl(l, t, r, g, a, b)
          }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in e) g = e[Z], e.hasOwnProperty(Z) && g != null && !a.hasOwnProperty(Z) && dl(l, t, Z, null, a, g);
        for (y in a)
          if (g = a[y], b = e[y], a.hasOwnProperty(y) && g !== b && (g != null || b != null)) switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(s(137, t));
              break;
            default:
              dl(l, t, y, g, a, b)
          }
        return;
      default:
        if (gi(t)) {
          for (var ml in e) g = e[ml], e.hasOwnProperty(ml) && g !== void 0 && !a.hasOwnProperty(ml) && tf(l, t, ml, void 0, a, g);
          for (z in a) g = a[z], b = e[z], !a.hasOwnProperty(z) || g === b || g === void 0 && b === void 0 || tf(l, t, z, g, a, b);
          return
        }
    }
    for (var h in e) g = e[h], e.hasOwnProperty(h) && g != null && !a.hasOwnProperty(h) && dl(l, t, h, null, a, g);
    for (N in a) g = a[N], b = e[N], !a.hasOwnProperty(N) || g === b || g == null && b == null || dl(l, t, N, g, a, b)
  }
  var ef = null,
    af = null;

  function Bu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument
  }

  function ld(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function td(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return l === 1 && t === "foreignObject" ? 0 : l
  }

  function nf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var uf = null;

  function Fh() {
    var l = window.event;
    return l && l.type === "popstate" ? l === uf ? !1 : (uf = l, !0) : (uf = null, !1)
  }
  var ed = typeof setTimeout == "function" ? setTimeout : void 0,
    Ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ad = typeof Promise == "function" ? Promise : void 0,
    Ph = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(l) {
      return ad.resolve(null).then(l).catch(l0)
    } : ed;

  function l0(l) {
    setTimeout(function() {
      throw l
    })
  }

  function xe(l) {
    return l === "head"
  }

  function nd(l, t) {
    var e = t,
      a = 0,
      n = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (0 < a && 8 > a) {
            e = a;
            var i = l.ownerDocument;
            if (e & 1 && Tn(i.documentElement), e & 2 && Tn(i.body), e & 4)
              for (e = i.head, Tn(e), i = e.firstChild; i;) {
                var c = i.nextSibling,
                  r = i.nodeName;
                i[Ya] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c
              }
          }
          if (n === 0) {
            l.removeChild(u), Dn(t);
            return
          }
          n--
        } else e === "$" || e === "$?" || e === "$!" ? n++ : a = e.charCodeAt(0) - 48;
      else a = 0;
      e = u
    } while (e);
    Dn(t)
  }

  function cf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cf(e), oi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue
      }
      l.removeChild(e)
    }
  }

  function t0(l, t, e, a) {
    for (; l.nodeType === 1;) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
      } else if (a) {
        if (!l[Ya]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l
        }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l
      } else return l;
      if (l = Nt(l.nextSibling), l === null) break
    }
    return null
  }

  function e0(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Nt(l.nextSibling), l === null)) return null;
    return l
  }

  function ff(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
  }

  function a0(l, t) {
    var e = l.ownerDocument;
    if (l.data !== "$?" || e.readyState === "complete") t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a)
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a
    }
  }

  function Nt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
        if (t === "/$") return null
      }
    }
    return l
  }
  var sf = null;

  function ud(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return l;
          t--
        } else e === "/$" && t++
      }
      l = l.previousSibling
    }
    return null
  }

  function id(l, t, e) {
    switch (t = Bu(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(s(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(s(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(s(454));
        return l;
      default:
        throw Error(s(451))
    }
  }

  function Tn(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    oi(l)
  }
  var At = new Map,
    cd = new Set;

  function Yu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
  }
  var $t = U.d;
  U.d = {
    f: n0,
    r: u0,
    D: i0,
    C: c0,
    L: f0,
    m: s0,
    X: o0,
    S: r0,
    M: d0
  };

  function n0() {
    var l = $t.f(),
      t = Ou();
    return l || t
  }

  function u0(l) {
    var t = Je(l);
    t !== null && t.tag === 5 && t.type === "form" ? Nr(t) : $t.r(l)
  }
  var _a = typeof document > "u" ? null : document;

  function fd(l, t, e) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var n = vt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), cd.has(n) || (cd.add(n), l = {
        rel: l,
        crossOrigin: e,
        href: t
      }, a.querySelector(n) === null && (t = a.createElement("link"), Ll(t, "link", l), Gl(t), a.head.appendChild(t)))
    }
  }

  function i0(l) {
    $t.D(l), fd("dns-prefetch", l, null)
  }

  function c0(l, t) {
    $t.C(l, t), fd("preconnect", l, t)
  }

  function f0(l, t, e) {
    $t.L(l, t, e);
    var a = _a;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + vt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + vt(e.imageSizes) + '"]')) : n += '[href="' + vt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Oa(l);
          break;
        case "script":
          u = ja(l)
      }
      At.has(u) || (l = D({
        rel: "preload",
        href: t === "image" && e && e.imageSrcSet ? void 0 : l,
        as: t
      }, e), At.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(En(u)) || t === "script" && a.querySelector(Nn(u)) || (t = a.createElement("link"), Ll(t, "link", l), Gl(t), a.head.appendChild(t)))
    }
  }

  function s0(l, t) {
    $t.m(l, t);
    var e = _a;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n = 'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ja(l)
      }
      if (!At.has(u) && (l = D({
          rel: "modulepreload",
          href: l
        }, t), At.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Nn(u))) return
        }
        a = e.createElement("link"), Ll(a, "link", l), Gl(a), e.head.appendChild(a)
      }
    }
  }

  function r0(l, t, e) {
    $t.S(l, t, e);
    var a = _a;
    if (a && l) {
      var n = We(a).hoistableStyles,
        u = Oa(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(En(u))) c.loading = 5;
        else {
          l = D({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, e), (e = At.get(u)) && rf(l, e);
          var r = i = a.createElement("link");
          Gl(r), Ll(r, "link", l), r._p = new Promise(function(y, z) {
            r.onload = y, r.onerror = z
          }), r.addEventListener("load", function() {
            c.loading |= 1
          }), r.addEventListener("error", function() {
            c.loading |= 2
          }), c.loading |= 4, Gu(i, t, a)
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i)
      }
    }
  }

  function o0(l, t) {
    $t.X(l, t);
    var e = _a;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = ja(l),
        u = a.get(n);
      u || (u = e.querySelector(Nn(n)), u || (l = D({
        src: l,
        async: !0
      }, t), (t = At.get(n)) && of(l, t), u = e.createElement("script"), Gl(u), Ll(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u))
    }
  }

  function d0(l, t) {
    $t.M(l, t);
    var e = _a;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = ja(l),
        u = a.get(n);
      u || (u = e.querySelector(Nn(n)), u || (l = D({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = At.get(n)) && of(l, t), u = e.createElement("script"), Gl(u), Ll(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u))
    }
  }

  function sd(l, t, e, a) {
    var n = (n = K.current) ? Yu(n) : null;
    if (!n) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Oa(e.href), e = We(n).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Oa(e.href);
          var u = We(n).hoistableStyles,
            i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(l, i), (u = n.querySelector(En(l))) && !u._p && (i.instance = u, i.state.loading = 5), At.has(l) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, At.set(l, e), u || m0(n, l, e, i.state))), t && a === null) throw Error(s(528, ""));
          return i
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ja(e), e = We(n).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(s(444, l))
    }
  }

  function Oa(l) {
    return 'href="' + vt(l) + '"'
  }

  function En(l) {
    return 'link[rel="stylesheet"][' + l + "]"
  }

  function rd(l) {
    return D({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    })
  }

  function m0(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1
    }), t.addEventListener("error", function() {
      return a.loading |= 2
    }), Ll(t, "link", e), Gl(t), l.head.appendChild(t))
  }

  function ja(l) {
    return '[src="' + vt(l) + '"]'
  }

  function Nn(l) {
    return "script[async]" + l
  }

  function od(l, t, e) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + vt(e.href) + '"]');
        if (a) return t.instance = a, Gl(a), a;
        var n = D({}, e, {
          "data-href": e.href,
          "data-precedence": e.precedence,
          href: null,
          precedence: null
        });
        return a = (l.ownerDocument || l).createElement("style"), Gl(a), Ll(a, "style", n), Gu(a, e.precedence, l), t.instance = a;
      case "stylesheet":
        n = Oa(e.href);
        var u = l.querySelector(En(n));
        if (u) return t.state.loading |= 4, t.instance = u, Gl(u), u;
        a = rd(e), (n = At.get(n)) && rf(a, n), u = (l.ownerDocument || l).createElement("link"), Gl(u);
        var i = u;
        return i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r
        }), Ll(u, "link", a), t.state.loading |= 4, Gu(u, e.precedence, l), t.instance = u;
      case "script":
        return u = ja(e.src), (n = l.querySelector(Nn(u))) ? (t.instance = n, Gl(n), n) : (a = e, (n = At.get(u)) && (a = D({}, e), of(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Gl(n), Ll(n, "link", a), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(s(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Gu(a, e.precedence, l));
    return t.instance
  }

  function Gu(l, t, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
  }

  function rf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
  }

  function of(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
  }
  var Xu = null;

  function dd(l, t, e) {
    if (Xu === null) {
      var a = new Map,
        n = Xu = new Map;
      n.set(e, a)
    } else n = Xu, a = n.get(e), a || (a = new Map, n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ya] || u[Kl] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u])
      }
    }
    return a
  }

  function md(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
  }

  function h0(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
    }
    return !1
  }

  function hd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
  }
  var Mn = null;

  function v0() {}

  function y0(l, t, e) {
    if (Mn === null) throw Error(s(475));
    var a = Mn;
    if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Oa(e.href),
          u = l.querySelector(En(n));
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = wu.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = u, Gl(u);
          return
        }
        u = l.ownerDocument || l, e = rd(e), (n = At.get(n)) && rf(e, n), u = u.createElement("link"), Gl(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r
        }), Ll(u, "link", e), t.instance = u
      }
      a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = wu.bind(a), l.addEventListener("load", t), l.addEventListener("error", t))
    }
  }

  function g0() {
    if (Mn === null) throw Error(s(475));
    var l = Mn;
    return l.stylesheets && l.count === 0 && df(l, l.stylesheets), 0 < l.count ? function(t) {
      var e = setTimeout(function() {
        if (l.stylesheets && df(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a()
        }
      }, 6e4);
      return l.unsuspend = t,
        function() {
          l.unsuspend = null, clearTimeout(e)
        }
    } : null
  }

  function wu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) df(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l()
      }
    }
  }
  var Qu = null;

  function df(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Qu = new Map, t.forEach(b0, l), Qu = null, wu.call(l))
  }

  function b0(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Qu.get(l);
      if (e) var a = e.get(null);
      else {
        e = new Map, Qu.set(l, e);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
        }
        a && e.set(null, a)
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = wu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4
    }
  }
  var _n = {
    $$typeof: zl,
    Provider: null,
    Consumer: null,
    _currentValue: j,
    _currentValue2: j,
    _threadCount: 0
  };

  function p0(l, t, e, a, n, u, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ci(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ci(0), this.hiddenUpdates = ci(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map
  }

  function vd(l, t, e, a, n, u, i, c, r, y, z, N) {
    return l = new p0(l, t, e, i, c, r, y, N), t = 1, u === !0 && (t |= 24), u = ct(3, null, null, t), l.current = u, u.stateNode = l, t = Ki(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, $i(u), l
  }

  function yd(l) {
    return l ? (l = ca, l) : ca
  }

  function gd(l, t, e, a, n, u) {
    n = yd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ce(t), a.payload = {
      element: e
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = fe(l, a, t), e !== null && (dt(e, l, t), an(e, l, t))
  }

  function bd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t
    }
  }

  function mf(l, t) {
    bd(l, t), (l = l.alternate) && bd(l, t)
  }

  function pd(l) {
    if (l.tag === 13) {
      var t = ia(l, 67108864);
      t !== null && dt(t, l, 67108864), mf(l, 67108864)
    }
  }
  var Zu = !0;

  function x0(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 2, hf(l, t, e, a)
    } finally {
      U.p = u, A.T = n
    }
  }

  function S0(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 8, hf(l, t, e, a)
    } finally {
      U.p = u, A.T = n
    }
  }

  function hf(l, t, e, a) {
    if (Zu) {
      var n = vf(a);
      if (n === null) lf(l, t, a, Vu, e), Sd(l, a);
      else if (z0(n, l, t, e, a)) a.stopPropagation();
      else if (Sd(l, a), t & 4 && -1 < A0.indexOf(l)) {
        for (; n !== null;) {
          var u = Je(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = Me(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                    var r = 1 << 31 - ut(i);
                    c.entanglements[1] |= r, i &= ~r
                  }
                  Ut(u), (sl & 6) === 0 && (Mu = _t() + 500, Sn(0))
                }
              }
              break;
            case 13:
              c = ia(u, 2), c !== null && dt(c, u, 2), Ou(), mf(u, 2)
          }
          if (u = vf(a), u === null && lf(l, t, a, Vu, e), u === n) break;
          n = u
        }
        n !== null && a.stopPropagation()
      } else lf(l, t, a, null, e)
    }
  }

  function vf(l) {
    return l = pi(l), yf(l)
  }
  var Vu = null;

  function yf(l) {
    if (Vu = null, l = ke(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = H(t), l !== null) return l;
          l = null
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null
        } else t !== l && (l = null)
      }
    }
    return Vu = l, null
  }

  function xd(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (cm()) {
          case Uf:
            return 2;
          case Hf:
            return 8;
          case Cn:
          case fm:
            return 32;
          case qf:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var gf = !1,
    Se = null,
    Ae = null,
    ze = null,
    On = new Map,
    jn = new Map,
    Te = [],
    A0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function Sd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Se = null;
        break;
      case "dragenter":
      case "dragleave":
        Ae = null;
        break;
      case "mouseover":
      case "mouseout":
        ze = null;
        break;
      case "pointerover":
      case "pointerout":
        On.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(t.pointerId)
    }
  }

  function Rn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Je(t), t !== null && pd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l)
  }

  function z0(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return Se = Rn(Se, l, t, e, a, n), !0;
      case "dragenter":
        return Ae = Rn(Ae, l, t, e, a, n), !0;
      case "mouseover":
        return ze = Rn(ze, l, t, e, a, n), !0;
      case "pointerover":
        var u = n.pointerId;
        return On.set(u, Rn(On.get(u) || null, l, t, e, a, n)), !0;
      case "gotpointercapture":
        return u = n.pointerId, jn.set(u, Rn(jn.get(u) || null, l, t, e, a, n)), !0
    }
    return !1
  }

  function Ad(l) {
    var t = ke(l.target);
    if (t !== null) {
      var e = O(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = H(e), t !== null) {
            l.blockedOn = t, ym(l.priority, function() {
              if (e.tag === 13) {
                var a = ot();
                a = fi(a);
                var n = ia(e, a);
                n !== null && dt(n, e, a), mf(e, a)
              }
            });
            return
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return
        }
      }
    }
    l.blockedOn = null
  }

  function Lu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var e = vf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        bi = a, e.target.dispatchEvent(a), bi = null
      } else return t = Je(e), t !== null && pd(t), l.blockedOn = e, !1;
      t.shift()
    }
    return !0
  }

  function zd(l, t, e) {
    Lu(l) && e.delete(t)
  }

  function T0() {
    gf = !1, Se !== null && Lu(Se) && (Se = null), Ae !== null && Lu(Ae) && (Ae = null), ze !== null && Lu(ze) && (ze = null), On.forEach(zd), jn.forEach(zd)
  }

  function Ku(l, t) {
    l.blockedOn === t && (l.blockedOn = null, gf || (gf = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, T0)))
  }
  var ku = null;

  function Td(l) {
    ku !== l && (ku = l, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
      ku === l && (ku = null);
      for (var t = 0; t < l.length; t += 3) {
        var e = l[t],
          a = l[t + 1],
          n = l[t + 2];
        if (typeof a != "function") {
          if (yf(a || e) === null) continue;
          break
        }
        var u = Je(e);
        u !== null && (l.splice(t, 3), t -= 3, vc(u, {
          pending: !0,
          data: n,
          method: e.method,
          action: a
        }, a, n))
      }
    }))
  }

  function Dn(l) {
    function t(r) {
      return Ku(r, l)
    }
    Se !== null && Ku(Se, l), Ae !== null && Ku(Ae, l), ze !== null && Ku(ze, l), On.forEach(t), jn.forEach(t);
    for (var e = 0; e < Te.length; e++) {
      var a = Te[e];
      a.blockedOn === l && (a.blockedOn = null)
    }
    for (; 0 < Te.length && (e = Te[0], e.blockedOn === null);) Ad(e), e.blockedOn === null && Te.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[Il] || null;
        if (typeof u == "function") i || Td(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Il] || null) c = i.formAction;
            else if (yf(n) !== null) continue
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Td(e)
        }
      }
  }

  function bf(l) {
    this._internalRoot = l
  }
  Ju.prototype.render = bf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var e = t.current,
      a = ot();
    gd(e, a, l, t, null, null)
  }, Ju.prototype.unmount = bf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      gd(l.current, 2, null, l, null, null), Ou(), t[Ke] = null
    }
  };

  function Ju(l) {
    this._internalRoot = l
  }
  Ju.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Xf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var e = 0; e < Te.length && t !== 0 && t < Te[e].priority; e++);
      Te.splice(e, 0, l), e === 0 && Ad(l)
    }
  };
  var Ed = x.version;
  if (Ed !== "19.1.0") throw Error(s(527, Ed, "19.1.0"));
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
    return l = _(t), l = l !== null ? S(l) : null, l = l === null ? null : l.stateNode, l
  };
  var E0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wu.isDisabled && Wu.supportsFiber) try {
      qa = Wu.inject(E0), nt = Wu
    } catch {}
  }
  return Hn.createRoot = function(l, t) {
    if (!T(l)) throw Error(s(299));
    var e = !1,
      a = "",
      n = Xr,
      u = wr,
      i = Qr,
      c = null;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = vd(l, 1, !1, null, null, e, a, n, u, i, c, null), l[Ke] = t.current, Pc(l), new bf(t)
  }, Hn.hydrateRoot = function(l, t, e) {
    if (!T(l)) throw Error(s(299));
    var a = !1,
      n = "",
      u = Xr,
      i = wr,
      c = Qr,
      r = null,
      y = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks), e.formState !== void 0 && (y = e.formState)), t = vd(l, 1, !0, t, e ?? null, a, n, u, i, c, r, y), t.context = yd(null), e = t.current, a = ot(), a = fi(a), n = ce(a), n.callback = null, fe(e, n, a), e = a, t.current.lanes = e, Ba(t, e), Ut(t), l[Ke] = t.current, Pc(l), new Ju(t)
  }, Hn.version = "19.1.0", Hn
}
var qd;

function q0() {
  if (qd) return Sf.exports;
  qd = 1;

  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
    } catch (x) {
      console.error(x)
    }
  }
  return f(), Sf.exports = H0(), Sf.exports
}
var C0 = q0();
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Y0 = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (x, p, s) => s ? s.toUpperCase() : p.toLowerCase()),
  Cd = f => {
    const x = Y0(f);
    return x.charAt(0).toUpperCase() + x.slice(1)
  },
  Kd = (...f) => f.filter((x, p, s) => !!x && x.trim() !== "" && s.indexOf(x) === p).join(" ").trim(),
  G0 = f => {
    for (const x in f)
      if (x.startsWith("aria-") || x === "role" || x === "title") return !0
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = Nl.forwardRef(({
  color: f = "currentColor",
  size: x = 24,
  strokeWidth: p = 2,
  absoluteStrokeWidth: s,
  className: T = "",
  children: O,
  iconNode: H,
  ...Q
}, _) => Nl.createElement("svg", {
  ref: _,
  ...X0,
  width: x,
  height: x,
  stroke: f,
  strokeWidth: s ? Number(p) * 24 / Number(x) : p,
  className: Kd("lucide", T),
  ...!O && !G0(Q) && {
    "aria-hidden": "true"
  },
  ...Q
}, [...H.map(([S, D]) => Nl.createElement(S, D)), ...Array.isArray(O) ? O : [O]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = (f, x) => {
  const p = Nl.forwardRef(({
    className: s,
    ...T
  }, O) => Nl.createElement(w0, {
    ref: O,
    iconNode: x,
    className: Kd(`lucide-${B0(Cd(f))}`, `lucide-${f}`, s),
    ...T
  }));
  return p.displayName = Cd(f), p
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = [
    ["path", {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }],
    ["circle", {
      cx: "7",
      cy: "17",
      r: "2",
      key: "u2ysq9"
    }],
    ["path", {
      d: "M9 17h6",
      key: "r8uit2"
    }],
    ["circle", {
      cx: "17",
      cy: "17",
      r: "2",
      key: "axvx0g"
    }]
  ],
  Z0 = Ht("car", Q0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = [
    ["path", {
      d: "M21.801 10A10 10 0 1 1 17 3.335",
      key: "yps3ct"
    }],
    ["path", {
      d: "m9 11 3 3L22 4",
      key: "1pflzl"
    }]
  ],
  Ft = Ht("circle-check-big", V0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["polyline", {
      points: "12 6 12 12 16 14",
      key: "68esgv"
    }]
  ],
  K0 = Ht("clock", L0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = [
    ["path", {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5"
    }],
    ["path", {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }]
  ],
  J0 = Ht("house", k0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = [
    ["path", {
      d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      key: "132q7q"
    }],
    ["rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2",
      key: "izxlao"
    }]
  ],
  Bd = Ht("mail", W0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = [
    ["path", {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }],
    ["circle", {
      cx: "12",
      cy: "10",
      r: "3",
      key: "ilqhr7"
    }]
  ],
  F0 = Ht("map-pin", $0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = [
    ["path", {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }]
  ],
  Ef = Ht("phone", I0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = [
    ["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }]
  ],
  Yd = Ht("shield", P0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lv = [
    ["path", {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }]
  ],
  tv = Ht("wrench", lv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ],
  $u = Ht("zap", ev);

function Gd(f, x) {
  if (typeof f == "function") return f(x);
  f != null && (f.current = x)
}

function av(...f) {
  return x => {
    let p = !1;
    const s = f.map(T => {
      const O = Gd(T, x);
      return !p && typeof O == "function" && (p = !0), O
    });
    if (p) return () => {
      for (let T = 0; T < s.length; T++) {
        const O = s[T];
        typeof O == "function" ? O() : Gd(f[T], null)
      }
    }
  }
}

function nv(...f) {
  return Nl.useCallback(av(...f), f)
}

function uv(f) {
  const x = cv(f),
    p = Nl.forwardRef((s, T) => {
      const {
        children: O,
        ...H
      } = s, Q = Nl.Children.toArray(O), _ = Q.find(sv);
      if (_) {
        const S = _.props.children,
          D = Q.map(k => k === _ ? Nl.Children.count(S) > 1 ? Nl.Children.only(null) : Nl.isValidElement(S) ? S.props.children : null : k);
        return d.jsx(x, {
          ...H,
          ref: T,
          children: Nl.isValidElement(S) ? Nl.cloneElement(S, void 0, D) : null
        })
      }
      return d.jsx(x, {
        ...H,
        ref: T,
        children: O
      })
    });
  return p.displayName = `${f}.Slot`, p
}
var iv = uv("Slot");

function cv(f) {
  const x = Nl.forwardRef((p, s) => {
    const {
      children: T,
      ...O
    } = p, H = Nl.isValidElement(T) ? ov(T) : void 0, Q = nv(H, s);
    if (Nl.isValidElement(T)) {
      const _ = rv(O, T.props);
      return T.type !== Nl.Fragment && (_.ref = Q), Nl.cloneElement(T, _)
    }
    return Nl.Children.count(T) > 1 ? Nl.Children.only(null) : null
  });
  return x.displayName = `${f}.SlotClone`, x
}
var fv = Symbol("radix.slottable");

function sv(f) {
  return Nl.isValidElement(f) && typeof f.type == "function" && "__radixId" in f.type && f.type.__radixId === fv
}

function rv(f, x) {
  const p = {
    ...x
  };
  for (const s in x) {
    const T = f[s],
      O = x[s];
    /^on[A-Z]/.test(s) ? T && O ? p[s] = (...Q) => {
      const _ = O(...Q);
      return T(...Q), _
    } : T && (p[s] = T) : s === "style" ? p[s] = {
      ...T,
      ...O
    } : s === "className" && (p[s] = [T, O].filter(Boolean).join(" "))
  }
  return {
    ...f,
    ...p
  }
}

function ov(f) {
  var s, T;
  let x = (s = Object.getOwnPropertyDescriptor(f.props, "ref")) == null ? void 0 : s.get,
    p = x && "isReactWarning" in x && x.isReactWarning;
  return p ? f.ref : (x = (T = Object.getOwnPropertyDescriptor(f, "ref")) == null ? void 0 : T.get, p = x && "isReactWarning" in x && x.isReactWarning, p ? f.props.ref : f.props.ref || f.ref)
}

function kd(f) {
  var x, p, s = "";
  if (typeof f == "string" || typeof f == "number") s += f;
  else if (typeof f == "object")
    if (Array.isArray(f)) {
      var T = f.length;
      for (x = 0; x < T; x++) f[x] && (p = kd(f[x])) && (s && (s += " "), s += p)
    } else
      for (p in f) f[p] && (s && (s += " "), s += p);
  return s
}

function Jd() {
  for (var f, x, p = 0, s = "", T = arguments.length; p < T; p++)(f = arguments[p]) && (x = kd(f)) && (s && (s += " "), s += x);
  return s
}
const Xd = f => typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f,
  wd = Jd,
  dv = (f, x) => p => {
    var s;
    if ((x == null ? void 0 : x.variants) == null) return wd(f, p == null ? void 0 : p.class, p == null ? void 0 : p.className);
    const {
      variants: T,
      defaultVariants: O
    } = x, H = Object.keys(T).map(S => {
      const D = p == null ? void 0 : p[S],
        k = O == null ? void 0 : O[S];
      if (D === null) return null;
      const W = Xd(D) || Xd(k);
      return T[S][W]
    }), Q = p && Object.entries(p).reduce((S, D) => {
      let [k, W] = D;
      return W === void 0 || (S[k] = W), S
    }, {}), _ = x == null || (s = x.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((S, D) => {
      let {
        class: k,
        className: W,
        ...xl
      } = D;
      return Object.entries(xl).every(cl => {
        let [yl, bl] = cl;
        return Array.isArray(bl) ? bl.includes({
          ...O,
          ...Q
        } [yl]) : {
          ...O,
          ...Q
        } [yl] === bl
      }) ? [...S, k, W] : S
    }, []);
    return wd(f, H, _, p == null ? void 0 : p.class, p == null ? void 0 : p.className)
  },
  Df = "-",
  mv = f => {
    const x = vv(f),
      {
        conflictingClassGroups: p,
        conflictingClassGroupModifiers: s
      } = f;
    return {
      getClassGroupId: H => {
        const Q = H.split(Df);
        return Q[0] === "" && Q.length !== 1 && Q.shift(), Wd(Q, x) || hv(H)
      },
      getConflictingClassGroupIds: (H, Q) => {
        const _ = p[H] || [];
        return Q && s[H] ? [..._, ...s[H]] : _
      }
    }
  },
  Wd = (f, x) => {
    var H;
    if (f.length === 0) return x.classGroupId;
    const p = f[0],
      s = x.nextPart.get(p),
      T = s ? Wd(f.slice(1), s) : void 0;
    if (T) return T;
    if (x.validators.length === 0) return;
    const O = f.join(Df);
    return (H = x.validators.find(({
      validator: Q
    }) => Q(O))) == null ? void 0 : H.classGroupId
  },
  Qd = /^\[(.+)\]$/,
  hv = f => {
    if (Qd.test(f)) {
      const x = Qd.exec(f)[1],
        p = x == null ? void 0 : x.substring(0, x.indexOf(":"));
      if (p) return "arbitrary.." + p
    }
  },
  vv = f => {
    const {
      theme: x,
      classGroups: p
    } = f, s = {
      nextPart: new Map,
      validators: []
    };
    for (const T in p) _f(p[T], s, T, x);
    return s
  },
  _f = (f, x, p, s) => {
    f.forEach(T => {
      if (typeof T == "string") {
        const O = T === "" ? x : Zd(x, T);
        O.classGroupId = p;
        return
      }
      if (typeof T == "function") {
        if (yv(T)) {
          _f(T(s), x, p, s);
          return
        }
        x.validators.push({
          validator: T,
          classGroupId: p
        });
        return
      }
      Object.entries(T).forEach(([O, H]) => {
        _f(H, Zd(x, O), p, s)
      })
    })
  },
  Zd = (f, x) => {
    let p = f;
    return x.split(Df).forEach(s => {
      p.nextPart.has(s) || p.nextPart.set(s, {
        nextPart: new Map,
        validators: []
      }), p = p.nextPart.get(s)
    }), p
  },
  yv = f => f.isThemeGetter,
  gv = f => {
    if (f < 1) return {
      get: () => {},
      set: () => {}
    };
    let x = 0,
      p = new Map,
      s = new Map;
    const T = (O, H) => {
      p.set(O, H), x++, x > f && (x = 0, s = p, p = new Map)
    };
    return {
      get(O) {
        let H = p.get(O);
        if (H !== void 0) return H;
        if ((H = s.get(O)) !== void 0) return T(O, H), H
      },
      set(O, H) {
        p.has(O) ? p.set(O, H) : T(O, H)
      }
    }
  },
  Of = "!",
  jf = ":",
  bv = jf.length,
  pv = f => {
    const {
      prefix: x,
      experimentalParseClassName: p
    } = f;
    let s = T => {
      const O = [];
      let H = 0,
        Q = 0,
        _ = 0,
        S;
      for (let cl = 0; cl < T.length; cl++) {
        let yl = T[cl];
        if (H === 0 && Q === 0) {
          if (yl === jf) {
            O.push(T.slice(_, cl)), _ = cl + bv;
            continue
          }
          if (yl === "/") {
            S = cl;
            continue
          }
        }
        yl === "[" ? H++ : yl === "]" ? H-- : yl === "(" ? Q++ : yl === ")" && Q--
      }
      const D = O.length === 0 ? T : T.substring(_),
        k = xv(D),
        W = k !== D,
        xl = S && S > _ ? S - _ : void 0;
      return {
        modifiers: O,
        hasImportantModifier: W,
        baseClassName: k,
        maybePostfixModifierPosition: xl
      }
    };
    if (x) {
      const T = x + jf,
        O = s;
      s = H => H.startsWith(T) ? O(H.substring(T.length)) : {
        isExternal: !0,
        modifiers: [],
        hasImportantModifier: !1,
        baseClassName: H,
        maybePostfixModifierPosition: void 0
      }
    }
    if (p) {
      const T = s;
      s = O => p({
        className: O,
        parseClassName: T
      })
    }
    return s
  },
  xv = f => f.endsWith(Of) ? f.substring(0, f.length - 1) : f.startsWith(Of) ? f.substring(1) : f,
  Sv = f => {
    const x = Object.fromEntries(f.orderSensitiveModifiers.map(s => [s, !0]));
    return s => {
      if (s.length <= 1) return s;
      const T = [];
      let O = [];
      return s.forEach(H => {
        H[0] === "[" || x[H] ? (T.push(...O.sort(), H), O = []) : O.push(H)
      }), T.push(...O.sort()), T
    }
  },
  Av = f => ({
    cache: gv(f.cacheSize),
    parseClassName: pv(f),
    sortModifiers: Sv(f),
    ...mv(f)
  }),
  zv = /\s+/,
  Tv = (f, x) => {
    const {
      parseClassName: p,
      getClassGroupId: s,
      getConflictingClassGroupIds: T,
      sortModifiers: O
    } = x, H = [], Q = f.trim().split(zv);
    let _ = "";
    for (let S = Q.length - 1; S >= 0; S -= 1) {
      const D = Q[S],
        {
          isExternal: k,
          modifiers: W,
          hasImportantModifier: xl,
          baseClassName: cl,
          maybePostfixModifierPosition: yl
        } = p(D);
      if (k) {
        _ = D + (_.length > 0 ? " " + _ : _);
        continue
      }
      let bl = !!yl,
        Wl = s(bl ? cl.substring(0, yl) : cl);
      if (!Wl) {
        if (!bl) {
          _ = D + (_.length > 0 ? " " + _ : _);
          continue
        }
        if (Wl = s(cl), !Wl) {
          _ = D + (_.length > 0 ? " " + _ : _);
          continue
        }
        bl = !1
      }
      const Fl = O(W).join(":"),
        zl = xl ? Fl + Of : Fl,
        Yl = zl + Wl;
      if (H.includes(Yl)) continue;
      H.push(Yl);
      const $ = T(Wl, bl);
      for (let Ml = 0; Ml < $.length; ++Ml) {
        const Hl = $[Ml];
        H.push(zl + Hl)
      }
      _ = D + (_.length > 0 ? " " + _ : _)
    }
    return _
  };

function Ev() {
  let f = 0,
    x, p, s = "";
  for (; f < arguments.length;)(x = arguments[f++]) && (p = $d(x)) && (s && (s += " "), s += p);
  return s
}
const $d = f => {
  if (typeof f == "string") return f;
  let x, p = "";
  for (let s = 0; s < f.length; s++) f[s] && (x = $d(f[s])) && (p && (p += " "), p += x);
  return p
};

function Nv(f, ...x) {
  let p, s, T, O = H;

  function H(_) {
    const S = x.reduce((D, k) => k(D), f());
    return p = Av(S), s = p.cache.get, T = p.cache.set, O = Q, Q(_)
  }

  function Q(_) {
    const S = s(_);
    if (S) return S;
    const D = Tv(_, p);
    return T(_, D), D
  }
  return function() {
    return O(Ev.apply(null, arguments))
  }
}
const Bl = f => {
    const x = p => p[f] || [];
    return x.isThemeGetter = !0, x
  },
  Fd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Id = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Mv = /^\d+\/\d+$/,
  _v = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ov = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  jv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Rv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Dv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ra = f => Mv.test(f),
  I = f => !!f && !Number.isNaN(Number(f)),
  Ne = f => !!f && Number.isInteger(Number(f)),
  Nf = f => f.endsWith("%") && I(f.slice(0, -1)),
  It = f => _v.test(f),
  Uv = () => !0,
  Hv = f => Ov.test(f) && !jv.test(f),
  Pd = () => !1,
  qv = f => Rv.test(f),
  Cv = f => Dv.test(f),
  Bv = f => !Y(f) && !G(f),
  Yv = f => Da(f, em, Pd),
  Y = f => Fd.test(f),
  Le = f => Da(f, am, Hv),
  Mf = f => Da(f, Zv, I),
  Vd = f => Da(f, lm, Pd),
  Gv = f => Da(f, tm, Cv),
  Fu = f => Da(f, nm, qv),
  G = f => Id.test(f),
  qn = f => Ua(f, am),
  Xv = f => Ua(f, Vv),
  Ld = f => Ua(f, lm),
  wv = f => Ua(f, em),
  Qv = f => Ua(f, tm),
  Iu = f => Ua(f, nm, !0),
  Da = (f, x, p) => {
    const s = Fd.exec(f);
    return s ? s[1] ? x(s[1]) : p(s[2]) : !1
  },
  Ua = (f, x, p = !1) => {
    const s = Id.exec(f);
    return s ? s[1] ? x(s[1]) : p : !1
  },
  lm = f => f === "position" || f === "percentage",
  tm = f => f === "image" || f === "url",
  em = f => f === "length" || f === "size" || f === "bg-size",
  am = f => f === "length",
  Zv = f => f === "number",
  Vv = f => f === "family-name",
  nm = f => f === "shadow",
  Lv = () => {
    const f = Bl("color"),
      x = Bl("font"),
      p = Bl("text"),
      s = Bl("font-weight"),
      T = Bl("tracking"),
      O = Bl("leading"),
      H = Bl("breakpoint"),
      Q = Bl("container"),
      _ = Bl("spacing"),
      S = Bl("radius"),
      D = Bl("shadow"),
      k = Bl("inset-shadow"),
      W = Bl("text-shadow"),
      xl = Bl("drop-shadow"),
      cl = Bl("blur"),
      yl = Bl("perspective"),
      bl = Bl("aspect"),
      Wl = Bl("ease"),
      Fl = Bl("animate"),
      zl = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      Yl = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      $ = () => [...Yl(), G, Y],
      Ml = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Hl = () => ["auto", "contain", "none"],
      w = () => [G, Y, _],
      Rl = () => [Ra, "full", "auto", ...w()],
      qt = () => [Ne, "none", "subgrid", G, Y],
      mt = () => ["auto", {
        span: ["full", Ne, G, Y]
      }, Ne, G, Y],
      _l = () => [Ne, "auto", G, Y],
      Mt = () => ["auto", "min", "max", "fr", G, Y],
      zt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      Sl = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      A = () => ["auto", ...w()],
      U = () => [Ra, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()],
      j = () => [f, G, Y],
      fl = () => [...Yl(), Ld, Vd, {
        position: [G, Y]
      }],
      o = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      M = () => ["auto", "cover", "contain", wv, Yv, {
        size: [G, Y]
      }],
      q = () => [Nf, qn, Le],
      R = () => ["", "none", "full", S, G, Y],
      C = () => ["", I, qn, Le],
      ll = () => ["solid", "dashed", "dotted", "double"],
      K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      nl = () => [I, Nf, Ld, Vd],
      hl = () => ["", "none", cl, G, Y],
      at = () => ["none", I, G, Y],
      Pt = () => ["none", I, G, Y],
      le = () => [I, G, Y],
      te = () => [Ra, "full", ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [It],
        breakpoint: [It],
        color: [Uv],
        container: [It],
        "drop-shadow": [It],
        ease: ["in", "out", "in-out"],
        font: [Bv],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [It],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [It],
        shadow: [It],
        spacing: ["px", I],
        text: [It],
        "text-shadow": [It],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", Ra, Y, G, bl]
        }],
        container: ["container"],
        columns: [{
          columns: [I, Y, G, Q]
        }],
        "break-after": [{
          "break-after": zl()
        }],
        "break-before": [{
          "break-before": zl()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: $()
        }],
        overflow: [{
          overflow: Ml()
        }],
        "overflow-x": [{
          "overflow-x": Ml()
        }],
        "overflow-y": [{
          "overflow-y": Ml()
        }],
        overscroll: [{
          overscroll: Hl()
        }],
        "overscroll-x": [{
          "overscroll-x": Hl()
        }],
        "overscroll-y": [{
          "overscroll-y": Hl()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: Rl()
        }],
        "inset-x": [{
          "inset-x": Rl()
        }],
        "inset-y": [{
          "inset-y": Rl()
        }],
        start: [{
          start: Rl()
        }],
        end: [{
          end: Rl()
        }],
        top: [{
          top: Rl()
        }],
        right: [{
          right: Rl()
        }],
        bottom: [{
          bottom: Rl()
        }],
        left: [{
          left: Rl()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [Ne, "auto", G, Y]
        }],
        basis: [{
          basis: [Ra, "full", "auto", Q, ...w()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [I, Ra, "auto", "initial", "none", Y]
        }],
        grow: [{
          grow: ["", I, G, Y]
        }],
        shrink: [{
          shrink: ["", I, G, Y]
        }],
        order: [{
          order: [Ne, "first", "last", "none", G, Y]
        }],
        "grid-cols": [{
          "grid-cols": qt()
        }],
        "col-start-end": [{
          col: mt()
        }],
        "col-start": [{
          "col-start": _l()
        }],
        "col-end": [{
          "col-end": _l()
        }],
        "grid-rows": [{
          "grid-rows": qt()
        }],
        "row-start-end": [{
          row: mt()
        }],
        "row-start": [{
          "row-start": _l()
        }],
        "row-end": [{
          "row-end": _l()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": Mt()
        }],
        "auto-rows": [{
          "auto-rows": Mt()
        }],
        gap: [{
          gap: w()
        }],
        "gap-x": [{
          "gap-x": w()
        }],
        "gap-y": [{
          "gap-y": w()
        }],
        "justify-content": [{
          justify: [...zt(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...Sl(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...Sl()]
        }],
        "align-content": [{
          content: ["normal", ...zt()]
        }],
        "align-items": [{
          items: [...Sl(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...Sl(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": zt()
        }],
        "place-items": [{
          "place-items": [...Sl(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...Sl()]
        }],
        p: [{
          p: w()
        }],
        px: [{
          px: w()
        }],
        py: [{
          py: w()
        }],
        ps: [{
          ps: w()
        }],
        pe: [{
          pe: w()
        }],
        pt: [{
          pt: w()
        }],
        pr: [{
          pr: w()
        }],
        pb: [{
          pb: w()
        }],
        pl: [{
          pl: w()
        }],
        m: [{
          m: A()
        }],
        mx: [{
          mx: A()
        }],
        my: [{
          my: A()
        }],
        ms: [{
          ms: A()
        }],
        me: [{
          me: A()
        }],
        mt: [{
          mt: A()
        }],
        mr: [{
          mr: A()
        }],
        mb: [{
          mb: A()
        }],
        ml: [{
          ml: A()
        }],
        "space-x": [{
          "space-x": w()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": w()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: U()
        }],
        w: [{
          w: [Q, "screen", ...U()]
        }],
        "min-w": [{
          "min-w": [Q, "screen", "none", ...U()]
        }],
        "max-w": [{
          "max-w": [Q, "screen", "none", "prose", {
            screen: [H]
          }, ...U()]
        }],
        h: [{
          h: ["screen", "lh", ...U()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...U()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...U()]
        }],
        "font-size": [{
          text: ["base", p, qn, Le]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [s, G, Mf]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Nf, Y]
        }],
        "font-family": [{
          font: [Xv, Y, x]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [T, G, Y]
        }],
        "line-clamp": [{
          "line-clamp": [I, "none", G, Mf]
        }],
        leading: [{
          leading: [O, ...w()]
        }],
        "list-image": [{
          "list-image": ["none", G, Y]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", G, Y]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: j()
        }],
        "text-color": [{
          text: j()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...ll(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [I, "from-font", "auto", G, Le]
        }],
        "text-decoration-color": [{
          decoration: j()
        }],
        "underline-offset": [{
          "underline-offset": [I, "auto", G, Y]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: w()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G, Y]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", G, Y]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: fl()
        }],
        "bg-repeat": [{
          bg: o()
        }],
        "bg-size": [{
          bg: M()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, Ne, G, Y],
            radial: ["", G, Y],
            conic: [Ne, G, Y]
          }, Qv, Gv]
        }],
        "bg-color": [{
          bg: j()
        }],
        "gradient-from-pos": [{
          from: q()
        }],
        "gradient-via-pos": [{
          via: q()
        }],
        "gradient-to-pos": [{
          to: q()
        }],
        "gradient-from": [{
          from: j()
        }],
        "gradient-via": [{
          via: j()
        }],
        "gradient-to": [{
          to: j()
        }],
        rounded: [{
          rounded: R()
        }],
        "rounded-s": [{
          "rounded-s": R()
        }],
        "rounded-e": [{
          "rounded-e": R()
        }],
        "rounded-t": [{
          "rounded-t": R()
        }],
        "rounded-r": [{
          "rounded-r": R()
        }],
        "rounded-b": [{
          "rounded-b": R()
        }],
        "rounded-l": [{
          "rounded-l": R()
        }],
        "rounded-ss": [{
          "rounded-ss": R()
        }],
        "rounded-se": [{
          "rounded-se": R()
        }],
        "rounded-ee": [{
          "rounded-ee": R()
        }],
        "rounded-es": [{
          "rounded-es": R()
        }],
        "rounded-tl": [{
          "rounded-tl": R()
        }],
        "rounded-tr": [{
          "rounded-tr": R()
        }],
        "rounded-br": [{
          "rounded-br": R()
        }],
        "rounded-bl": [{
          "rounded-bl": R()
        }],
        "border-w": [{
          border: C()
        }],
        "border-w-x": [{
          "border-x": C()
        }],
        "border-w-y": [{
          "border-y": C()
        }],
        "border-w-s": [{
          "border-s": C()
        }],
        "border-w-e": [{
          "border-e": C()
        }],
        "border-w-t": [{
          "border-t": C()
        }],
        "border-w-r": [{
          "border-r": C()
        }],
        "border-w-b": [{
          "border-b": C()
        }],
        "border-w-l": [{
          "border-l": C()
        }],
        "divide-x": [{
          "divide-x": C()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": C()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...ll(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...ll(), "hidden", "none"]
        }],
        "border-color": [{
          border: j()
        }],
        "border-color-x": [{
          "border-x": j()
        }],
        "border-color-y": [{
          "border-y": j()
        }],
        "border-color-s": [{
          "border-s": j()
        }],
        "border-color-e": [{
          "border-e": j()
        }],
        "border-color-t": [{
          "border-t": j()
        }],
        "border-color-r": [{
          "border-r": j()
        }],
        "border-color-b": [{
          "border-b": j()
        }],
        "border-color-l": [{
          "border-l": j()
        }],
        "divide-color": [{
          divide: j()
        }],
        "outline-style": [{
          outline: [...ll(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [I, G, Y]
        }],
        "outline-w": [{
          outline: ["", I, qn, Le]
        }],
        "outline-color": [{
          outline: j()
        }],
        shadow: [{
          shadow: ["", "none", D, Iu, Fu]
        }],
        "shadow-color": [{
          shadow: j()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", k, Iu, Fu]
        }],
        "inset-shadow-color": [{
          "inset-shadow": j()
        }],
        "ring-w": [{
          ring: C()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: j()
        }],
        "ring-offset-w": [{
          "ring-offset": [I, Le]
        }],
        "ring-offset-color": [{
          "ring-offset": j()
        }],
        "inset-ring-w": [{
          "inset-ring": C()
        }],
        "inset-ring-color": [{
          "inset-ring": j()
        }],
        "text-shadow": [{
          "text-shadow": ["none", W, Iu, Fu]
        }],
        "text-shadow-color": [{
          "text-shadow": j()
        }],
        opacity: [{
          opacity: [I, G, Y]
        }],
        "mix-blend": [{
          "mix-blend": [...K(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": K()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [I]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": nl()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": nl()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": j()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": j()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": nl()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": nl()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": j()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": j()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": nl()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": nl()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": j()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": j()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": nl()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": nl()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": j()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": j()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": nl()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": nl()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": j()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": j()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": nl()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": nl()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": j()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": j()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": nl()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": nl()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": j()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": j()
        }],
        "mask-image-radial": [{
          "mask-radial": [G, Y]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": nl()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": nl()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": j()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": j()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": Yl()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [I]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": nl()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": nl()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": j()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": j()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: fl()
        }],
        "mask-repeat": [{
          mask: o()
        }],
        "mask-size": [{
          mask: M()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", G, Y]
        }],
        filter: [{
          filter: ["", "none", G, Y]
        }],
        blur: [{
          blur: hl()
        }],
        brightness: [{
          brightness: [I, G, Y]
        }],
        contrast: [{
          contrast: [I, G, Y]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", xl, Iu, Fu]
        }],
        "drop-shadow-color": [{
          "drop-shadow": j()
        }],
        grayscale: [{
          grayscale: ["", I, G, Y]
        }],
        "hue-rotate": [{
          "hue-rotate": [I, G, Y]
        }],
        invert: [{
          invert: ["", I, G, Y]
        }],
        saturate: [{
          saturate: [I, G, Y]
        }],
        sepia: [{
          sepia: ["", I, G, Y]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", G, Y]
        }],
        "backdrop-blur": [{
          "backdrop-blur": hl()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [I, G, Y]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [I, G, Y]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", I, G, Y]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [I, G, Y]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", I, G, Y]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [I, G, Y]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [I, G, Y]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", I, G, Y]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": w()
        }],
        "border-spacing-x": [{
          "border-spacing-x": w()
        }],
        "border-spacing-y": [{
          "border-spacing-y": w()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", G, Y]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [I, "initial", G, Y]
        }],
        ease: [{
          ease: ["linear", "initial", Wl, G, Y]
        }],
        delay: [{
          delay: [I, G, Y]
        }],
        animate: [{
          animate: ["none", Fl, G, Y]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [yl, G, Y]
        }],
        "perspective-origin": [{
          "perspective-origin": $()
        }],
        rotate: [{
          rotate: at()
        }],
        "rotate-x": [{
          "rotate-x": at()
        }],
        "rotate-y": [{
          "rotate-y": at()
        }],
        "rotate-z": [{
          "rotate-z": at()
        }],
        scale: [{
          scale: Pt()
        }],
        "scale-x": [{
          "scale-x": Pt()
        }],
        "scale-y": [{
          "scale-y": Pt()
        }],
        "scale-z": [{
          "scale-z": Pt()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: le()
        }],
        "skew-x": [{
          "skew-x": le()
        }],
        "skew-y": [{
          "skew-y": le()
        }],
        transform: [{
          transform: [G, Y, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: $()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: te()
        }],
        "translate-x": [{
          "translate-x": te()
        }],
        "translate-y": [{
          "translate-y": te()
        }],
        "translate-z": [{
          "translate-z": te()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: j()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: j()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G, Y]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": w()
        }],
        "scroll-mx": [{
          "scroll-mx": w()
        }],
        "scroll-my": [{
          "scroll-my": w()
        }],
        "scroll-ms": [{
          "scroll-ms": w()
        }],
        "scroll-me": [{
          "scroll-me": w()
        }],
        "scroll-mt": [{
          "scroll-mt": w()
        }],
        "scroll-mr": [{
          "scroll-mr": w()
        }],
        "scroll-mb": [{
          "scroll-mb": w()
        }],
        "scroll-ml": [{
          "scroll-ml": w()
        }],
        "scroll-p": [{
          "scroll-p": w()
        }],
        "scroll-px": [{
          "scroll-px": w()
        }],
        "scroll-py": [{
          "scroll-py": w()
        }],
        "scroll-ps": [{
          "scroll-ps": w()
        }],
        "scroll-pe": [{
          "scroll-pe": w()
        }],
        "scroll-pt": [{
          "scroll-pt": w()
        }],
        "scroll-pr": [{
          "scroll-pr": w()
        }],
        "scroll-pb": [{
          "scroll-pb": w()
        }],
        "scroll-pl": [{
          "scroll-pl": w()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", G, Y]
        }],
        fill: [{
          fill: ["none", ...j()]
        }],
        "stroke-w": [{
          stroke: [I, qn, Le, Mf]
        }],
        stroke: [{
          stroke: ["none", ...j()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  },
  Kv = Nv(Lv);

function Ha(...f) {
  return Kv(Jd(f))
}
const kv = dv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

function Pu({
  className: f,
  variant: x,
  size: p,
  asChild: s = !1,
  ...T
}) {
  const O = s ? iv : "button";
  return d.jsx(O, {
    "data-slot": "button",
    className: Ha(kv({
      variant: x,
      size: p,
      className: f
    })),
    ...T
  })
}

function li({
  className: f,
  ...x
}) {
  return d.jsx("div", {
    "data-slot": "card",
    className: Ha("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", f),
    ...x
  })
}

function ti({
  className: f,
  ...x
}) {
  return d.jsx("div", {
    "data-slot": "card-header",
    className: Ha("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", f),
    ...x
  })
}

function ei({
  className: f,
  ...x
}) {
  return d.jsx("div", {
    "data-slot": "card-title",
    className: Ha("leading-none font-semibold", f),
    ...x
  })
}

function ai({
  className: f,
  ...x
}) {
  return d.jsx("div", {
    "data-slot": "card-description",
    className: Ha("text-muted-foreground text-sm", f),
    ...x
  })
}

function ni({
  className: f,
  ...x
}) {
  return d.jsx("div", {
    "data-slot": "card-content",
    className: Ha("px-6", f),
    ...x
  })
}
const Jv = "/assets/installation_wallbox-DCk5sAvU.jpg",
  Wv = "/assets/installer_wallbox-VHgq_2nD.jpg",
  $v = "/assets/borne_particulier-DibQeoeI.png";

function Fv() {
  const [isSubmitting, setIsSubmitting] = Nl.useState(!1);
  const [formSent, setFormSent] = Nl.useState(!1);
  const [submissionError, setSubmissionError] = Nl.useState(null);
  const [expandedFaq, setExpandedFaq] = Nl.useState(0);
  const processSteps = [{
    label: "Étape 1",
    title: "Analyse & conseil",
    description: "Un expert IRVE évalue votre installation électrique actuelle et identifie l'emplacement idéal pour la borne.",
    detail: "Rapport détaillé et devis personnalisé envoyés sous 24h.",
    icon: K0
  }, {
    label: "Étape 2",
    title: "Installation certifiée",
    description: "Pose de la borne et mise en conformité de votre tableau par nos techniciens certifiés IRVE.",
    detail: "Travaux propres, tests de sécurité et mise en service immédiate.",
    icon: tv
  }, {
    label: "Étape 3",
    title: "Suivi & optimisation",
    description: "Paramétrage de la borne, formation à l'application et optimisation de la consommation.",
    detail: "Support prioritaire et maintenance préventive sur simple demande.",
    icon: Yd
  }];
  const faqs = [{
    question: "Combien de temps dure l'installation d'une borne ?",
    answer: "Selon la configuration de votre logement, l'installation dure généralement entre 3 et 4 heures. Nous testons systématiquement la borne et nous vous remettons un compte-rendu complet."
  }, {
    question: "Quelles aides financières sont disponibles ?",
    answer: "Vous pouvez bénéficier du crédit d'impôt pour la transition énergétique ainsi que de la prime ADVENIR sous conditions. Nous vous guidons pour constituer le dossier et maximiser votre financement."
  }, {
    question: "Quelle puissance de borne choisir ?",
    answer: "Nous dimensionnons la borne en fonction de votre véhicule, de vos habitudes et de la puissance disponible sur votre tableau électrique. Les solutions 7,4 kW ou 11 kW couvrent la majorité des besoins."
  }, {
    question: "Proposez-vous un service après-vente ?",
    answer: "Oui, Lazare974.tech assure un support 7j/7 par téléphone et peut intervenir sur site sous 48h en cas de besoin. Des contrats de maintenance préventive sont également disponibles."
  }];
  const financingPrograms = [{
    title: "Prime ADVENIR",
    amount: "Jusqu'à 960 €",
    description: "Subvention nationale pour l'installation de bornes individuelles en habitat privé.",
    highlights: ["Accompagnement complet pour monter le dossier", "Versement après travaux sur présentation des justificatifs"]
  }, {
    title: "Crédit d'impôt transition énergétique",
    amount: "Plafond 300 €",
    description: "Réduction d'impôt sur le revenu pour l'achat et la pose d'une borne de recharge.",
    highlights: ["Éligible pour les résidences principales et secondaires", "Facturation détaillée fournie par nos équipes"]
  }, {
    title: "Aides locales et énergéticiens",
    amount: "Montant variable",
    description: "Primes complémentaires proposées par la Région, les communes ou votre fournisseur d'énergie.",
    highlights: ["Veille administrative assurée par Lazare974.tech", "Optimisation des aides cumulables pour réduire le reste à charge"]
  }];
  const testimonials = [{
    name: "Sophie M.",
    role: "Saint-Denis",
    comment: "Installation rapide et équipe très pro. Les démarches pour la prime ADVENIR ont été gérées du début à la fin."
  }, {
    name: "Julien R.",
    role: "Le Tampon",
    comment: "Le technicien a tout expliqué clairement et a optimisé la puissance de charge selon notre usage quotidien."
  }, {
    name: "Nadia P.",
    role: "Saint-Paul",
    comment: "Suivi sérieux, délais respectés et prise en main de l'application. Nous recommandons sans hésiter !"
  }];
  const handleSubmit = async T => {
    T.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(!0);
    setFormSent(!1);
    setSubmissionError(null);
    const O = T.target;
    const q = new FormData(O);
    const H = Object.fromEntries(q.entries());
    try {
      const D = await fetch("https://n8n.lazare974.tech/webhook/680f9325-0fc4-4f34-af1e-6d3107d4a8b5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(H)
      });
      if (!D.ok) throw new Error("Failed to submit form");
      O.reset();
      setFormSent(!0);
      setSubmissionError(null);
    } catch (D) {
      setSubmissionError("Une erreur est survenue lors de l'envoi du formulaire. Merci de réessayer.");
    } finally {
      setIsSubmitting(!1);
    }
  };
  const toggleFaq = T => {
    setExpandedFaq(O => O === T ? null : T);
  };
  return d.jsxs("div", {
    className: "min-h-screen bg-background page-shell",
    children: [d.jsx("header", {
      className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 enhanced-header",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 flex h-16 items-center justify-between header-inner",
        children: [d.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [d.jsx($u, {
            className: "h-8 w-8 text-primary electric-pulse"
          }), d.jsx("span", {
            className: "text-2xl font-bold text-primary",
            children: "Lazare974.tech"
          })]
        }), d.jsxs("nav", {
          className: "hidden md:flex items-center space-x-6 nav-links",
          children: [d.jsx("a", {
            href: "#processus",
            className: "text-foreground hover:text-primary transition-colors",
            children: "Étapes"
          }), d.jsx("a", {
            href: "#financement",
            className: "text-foreground hover:text-primary transition-colors",
            children: "Financement"
          }), d.jsx("a", {
            href: "#services",
            className: "text-foreground hover:text-primary transition-colors",
            children: "Services"
          }), d.jsx("a", {
            href: "#avis",
            className: "text-foreground hover:text-primary transition-colors",
            children: "Avis clients"
          }), d.jsx("a", {
            href: "#faq",
            className: "text-foreground hover:text-primary transition-colors",
            children: "FAQ"
        }), d.jsx("a", {
          href: "#contact",
          className: "text-foreground hover:text-primary transition-colors",
          children: "Contact"
        })]
        }), d.jsxs(Pu, {
          className: "hidden md:inline-flex",
          children: [d.jsx(Ef, {
            className: "mr-2 h-4 w-4"
          }), "Devis gratuit"]
        })]
      })
    }), d.jsx("section", {
      id: "accueil",
      className: "hero-gradient text-white py-20 hero-enhanced",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 text-center hero-inner",
        children: [d.jsxs("div", {
          className: "hero-ornaments",
          "aria-hidden": !0,
          children: [d.jsx("span", {
            className: "hero-orb hero-orb-left"
          }), d.jsx("span", {
            className: "hero-orb hero-orb-right"
          }), d.jsx("span", {
            className: "hero-glow"
          })]
        }), d.jsxs("div", {
          className: "max-w-4xl mx-auto hero-content",
          children: [d.jsx("span", {
            className: "mb-6 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest",
            children: "Installateur IRVE agréé"
          }), d.jsx("h1", {
            className: "text-5xl md:text-6xl font-bold mb-6",
            children: "Installation de bornes de recharge électrique"
          }), d.jsx("p", {
            className: "text-xl md:text-2xl mb-6 opacity-90",
            children: "Spécialiste de l'installation de bornes de recharge pour véhicules électriques à La Réunion (974)"
          }), d.jsx("p", {
            className: "text-lg md:text-xl mb-10 text-white/80",
            children: "Devis détaillé sous 24h et techniciens certifiés IRVE sur toute l'île."
          }), d.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [d.jsx(Pu, {
              size: "lg",
              variant: "secondary",
              asChild: !0,
              className: "text-lg px-8 py-3 hero-cta",
              children: d.jsxs("a", {
                href: "#contact",
                className: "inline-flex items-center justify-center",
                children: [d.jsx($u, {
                  className: "mr-2 h-5 w-5"
                }), "Devis gratuit"]
              })
            }), d.jsx(Pu, {
              size: "lg",
              variant: "outline",
              asChild: !0,
              className: "text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary hero-cta-alt",
              children: d.jsxs("a", {
                href: "#financement",
                className: "inline-flex items-center justify-center",
                children: [d.jsx(Bd, {
                  className: "mr-2 h-5 w-5"
                }), "Aides financières"]
              })
            })]
          }), d.jsxs("div", {
            className: "mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 hero-highlights",
            children: [d.jsxs("span", {
              className: "flex items-center gap-2",
              children: [d.jsx(Ft, {
                className: "h-4 w-4 text-primary"
              }), "Techniciens certifiés IRVE"]
            }), d.jsxs("span", {
              className: "flex items-center gap-2",
              children: [d.jsx(Ft, {
                className: "h-4 w-4 text-primary"
              }), "Devis détaillé en 24h"]
            }), d.jsxs("span", {
              className: "flex items-center gap-2",
              children: [d.jsx(Ft, {
                className: "h-4 w-4 text-primary"
              }), "Installation sur toute l'île"]
            }), d.jsxs("span", {
              className: "flex items-center gap-2",
              children: [d.jsx(Ft, {
                className: "h-4 w-4 text-primary"
              }), "Aides financières gérées"]
            })]
          }), d.jsxs("div", {
            className: "mt-10 grid gap-4 sm:grid-cols-3 hero-stats",
            children: [d.jsxs("div", {
              className: "hero-stat",
              children: [d.jsx("span", {
                className: "hero-stat-value",
                children: "24h"
              }), d.jsx("span", {
                className: "hero-stat-label",
                children: "Devis envoyé"
              })]
            }), d.jsxs("div", {
              className: "hero-stat",
              children: [d.jsx("span", {
                className: "hero-stat-value",
                children: "48h"
              }), d.jsx("span", {
                className: "hero-stat-label",
                children: "Installation planifiée"
              })]
            }), d.jsxs("div", {
              className: "hero-stat",
              children: [d.jsx("span", {
                className: "hero-stat-value",
                children: "2 ans"
              }), d.jsx("span", {
                className: "hero-stat-label",
                children: "Garantie constructeur"
              })]
            })]
          })]
        })
      })
    }), d.jsx("section", {
      id: "processus",
      className: "py-20 bg-background process-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "text-center max-w-3xl mx-auto",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Un accompagnement en trois étapes"
          }), d.jsx("p", {
            className: "text-lg text-muted-foreground",
            children: "Du premier échange à la mise en service, Lazare974.tech sécurise chaque phase de votre projet."
          })]
        }), d.jsx("div", {
          className: "mt-12 grid gap-8 md:grid-cols-3 process-grid",
          children: processSteps.map(T => {
            const O = T.icon;
            return d.jsxs("div", {
              className: "service-card h-full rounded-2xl border bg-card p-8 text-left process-card",
              children: [d.jsxs("div", {
                className: "mb-6 flex items-center justify-between process-card-header",
                children: [d.jsx("span", {
                  className: "text-xs font-semibold uppercase tracking-widest text-primary process-step-label",
                  children: T.label
                }), d.jsx("span", {
                  className: "process-icon",
                  children: d.jsx(O, {
                    className: "h-10 w-10 text-primary"
                  })
                })]
              }), d.jsx("h3", {
                className: "text-2xl font-semibold mb-3",
                children: T.title
              }), d.jsx("p", {
                className: "text-muted-foreground mb-4 leading-relaxed",
                children: T.description
              }), d.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: T.detail
              })]
            }, T.title);
          })
        })]
      })
    }), d.jsx("section", {
      id: "financement",
      className: "py-20 bg-muted/30 financing-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "text-center max-w-3xl mx-auto",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Financer votre borne de recharge"
          }), d.jsx("p", {
            className: "text-lg text-muted-foreground",
            children: "Nous vous aidons à mobiliser toutes les aides disponibles à La Réunion."
          })]
        }), d.jsx("div", {
          className: "mt-12 grid gap-8 md:grid-cols-3 financing-grid",
          children: financingPrograms.map((T, O) => d.jsxs(li, {
            className: "financing-card",
            children: [d.jsxs(ti, {
              className: "space-y-4",
              children: [d.jsxs("div", {
                className: "flex items-center justify-between",
                children: [d.jsx(ei, {
                  className: "text-left",
                  children: T.title
                }), d.jsx("span", {
                  className: "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary",
                  children: T.amount
                })]
              }), d.jsx(ai, {
                children: T.description
              })]
            }), d.jsx(ni, {
              children: d.jsx("ul", {
                className: "space-y-2",
                children: T.highlights.map((H, Q) => d.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [d.jsx(Ft, {
                    className: "mt-1 h-4 w-4 text-primary"
                  }), d.jsx("span", {
                    className: "text-sm text-muted-foreground leading-relaxed",
                    children: H
                  })]
                }, `${T.title}-${Q}`))
              })
            })]
          }, `${T.title}-${O}`))
        }), d.jsxs("div", {
          className: "mt-12 flex flex-col items-center gap-4 text-center",
          children: [d.jsx("p", {
            className: "text-muted-foreground max-w-2xl",
            children: "Nos conseillers montent les dossiers de subventions et vérifient votre éligibilité pour réduire votre reste à charge."
          }), d.jsx(Pu, {
            variant: "secondary",
            size: "lg",
            asChild: !0,
            children: d.jsxs("a", {
              href: "#contact",
              className: "inline-flex items-center justify-center gap-2",
              children: [d.jsx(Ef, {
                className: "h-5 w-5"
              }), "Parler à un conseiller"]
            })
          })]
        })]
      })
    }), d.jsx("section", {
      id: "services",
      className: "py-20 bg-muted/30 service-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "text-center mb-16",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Nos Services"
          }), d.jsx("p", {
            className: "text-xl text-muted-foreground max-w-2xl mx-auto",
            children: "Solutions complètes d'installation de bornes de recharge pour particuliers"
          })]
        }), d.jsxs("div", {
          className: "grid md:grid-cols-3 gap-8 mb-16",
          children: [d.jsxs(li, {
            className: "service-card",
            children: [d.jsxs(ti, {
              children: [d.jsx(J0, {
                className: "h-12 w-12 text-primary mb-4"
              }), d.jsx(ei, {
                children: "Installation à domicile"
              }), d.jsx(ai, {
                children: "Installation professionnelle de bornes de recharge dans votre garage ou parking privé"
              })]
            }), d.jsx(ni, {
              children: d.jsxs("ul", {
                className: "space-y-2",
                children: [d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Étude technique gratuite"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Installation certifiée"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Garantie 2 ans"]
                })]
              })
            })]
          }), d.jsxs(li, {
            className: "service-card",
            children: [d.jsxs(ti, {
              children: [d.jsx(tv, {
                className: "h-12 w-12 text-primary mb-4"
              }), d.jsx(ei, {
                children: "Maintenance & SAV"
              }), d.jsx(ai, {
                children: "Service après-vente et maintenance préventive de vos équipements"
              })]
            }), d.jsx(ni, {
              children: d.jsxs("ul", {
                className: "space-y-2",
                children: [d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Intervention rapide"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Diagnostic complet"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Pièces d'origine"]
                })]
              })
            })]
          }), d.jsxs(li, {
            className: "service-card",
            children: [d.jsxs(ti, {
              children: [d.jsx(Yd, {
                className: "h-12 w-12 text-primary mb-4"
              }), d.jsx(ei, {
                children: "Conseil & Expertise"
              }), d.jsx(ai, {
                children: "Accompagnement personnalisé pour choisir la solution adaptée à vos besoins"
              })]
            }), d.jsx(ni, {
              children: d.jsxs("ul", {
                className: "space-y-2",
                children: [d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Audit énergétique"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Choix de la borne"]
                }), d.jsxs("li", {
                  className: "flex items-center",
                  children: [d.jsx(Ft, {
                    className: "h-4 w-4 text-primary mr-2"
                  }), "Aides financières"]
                })]
              })
            })]
          })]
        }), d.jsxs("div", {
          className: "grid md:grid-cols-3 gap-8",
          children: [d.jsxs("div", {
            className: "relative overflow-hidden rounded-lg",
            children: [d.jsx("img", {
              src: Jv,
              alt: "Installation de borne Wallbox",
              className: "w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            }), d.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end",
              children: d.jsx("p", {
                className: "text-white p-4 font-semibold",
                children: "Installation Wallbox professionnelle"
              })
            })]
          }), d.jsxs("div", {
            className: "relative overflow-hidden rounded-lg service-image-card",
            children: [d.jsx("img", {
              src: Wv,
              alt: "Technicien installant une borne",
              className: "w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            }), d.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end",
              children: d.jsx("p", {
                className: "text-white p-4 font-semibold",
                children: "Intervention par nos techniciens certifiés"
              })
            })]
          }), d.jsxs("div", {
            className: "relative overflow-hidden rounded-lg",
            children: [d.jsx("img", {
              src: $v,
              alt: "Borne de recharge pour particuliers",
              className: "w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            }), d.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end",
              children: d.jsx("p", {
                className: "text-white p-4 font-semibold",
                children: "Solutions adaptées aux particuliers"
              })
            })]
          })]
        })]
      })
    }), d.jsx("section", {
      id: "avis",
      className: "py-20 bg-background reviews-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "max-w-3xl mx-auto text-center",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Ils nous font confiance"
          }), d.jsx("p", {
            className: "text-lg text-muted-foreground",
            children: "Des particuliers accompagnés sur toute l'île témoignent de leur expérience Lazare974.tech."
          })]
        }), d.jsx("div", {
          className: "mt-12 grid gap-8 md:grid-cols-3 reviews-grid",
          children: testimonials.map((T, O) => d.jsxs(li, {
            className: "review-card",
            children: [d.jsx(ni, {
              className: "space-y-4",
              children: [d.jsxs("div", {
                className: "inline-flex items-center gap-2 review-badge",
                children: [d.jsx(Ft, {
                  className: "h-4 w-4"
                }), d.jsx("span", {
                  className: "text-sm font-semibold uppercase tracking-widest",
                  children: "Avis vérifié"
                })]
              }), d.jsx("p", {
                className: "review-comment text-lg leading-relaxed",
                children: T.comment
              })]
            }), d.jsxs("div", {
              className: "px-6 review-footer",
              children: [d.jsx("p", {
                className: "text-lg font-semibold",
                children: T.name
              }), d.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: T.role
              })]
            })]
          }, `${T.name}-${O}`))
        }), d.jsxs("div", {
          className: "mt-12 flex flex-col items-center gap-2 text-center text-muted-foreground",
          children: [d.jsx("p", {
            children: "Plus de 100 installations réalisées avec une satisfaction client de 4,9/5."
          }), d.jsx("p", {
            children: "Nous vous accompagnons avant, pendant et après la mise en service."
          })]
        })]
      })
    }), d.jsx("section", {
      id: "apropos",
      className: "py-20 about-section",
      children: d.jsx("div", {
        className: "container mx-auto px-4",
        children: d.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12 items-center",
          children: [d.jsxs("div", {
            children: [d.jsx("h2", {
              className: "text-4xl font-bold mb-6",
              children: "Pourquoi choisir Lazare974.tech ?"
            }), d.jsx("p", {
              className: "text-lg text-muted-foreground mb-6",
              children: "Spécialiste reconnu de l'installation de bornes de recharge électrique à La Réunion, nous accompagnons les particuliers dans leur transition vers la mobilité électrique."
            }), d.jsxs("div", {
              className: "space-y-4",
              children: [d.jsxs("div", {
                className: "flex items-start space-x-3",
                children: [d.jsx(K0, {
                  className: "h-6 w-6 text-primary mt-1"
                }), d.jsxs("div", {
                  children: [d.jsx("h3", {
                    className: "font-semibold mb-1",
                    children: "Installation rapide"
                  }), d.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Intervention dans les 48h après validation du devis"
                  })]
                })]
              }), d.jsxs("div", {
                className: "flex items-start space-x-3",
                children: [d.jsx(Yd, {
                  className: "h-6 w-6 text-primary mt-1"
                }), d.jsxs("div", {
                  children: [d.jsx("h3", {
                    className: "font-semibold mb-1",
                    children: "Certification IRVE"
                  }), d.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Techniciens certifiés pour l'installation de bornes électriques"
                  })]
                })]
              }), d.jsxs("div", {
                className: "flex items-start space-x-3",
                children: [d.jsx(Z0, {
                  className: "h-6 w-6 text-primary mt-1"
                }), d.jsxs("div", {
                  children: [d.jsx("h3", {
                    className: "font-semibold mb-1",
                    children: "Compatible tous véhicules"
                  }), d.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Solutions adaptées à tous les modèles de véhicules électriques"
                  })]
                })]
              })]
            })]
          }), d.jsx("div", {
            className: "relative",
            children: d.jsx("div", {
              className: "bg-primary/10 rounded-2xl p-8 about-stats-card",
              children: d.jsxs("div", {
                className: "text-center",
                children: [d.jsx($u, {
                  className: "h-16 w-16 text-primary mx-auto mb-4 electric-pulse"
                }), d.jsx("h3", {
                  className: "text-2xl font-bold mb-2",
                  children: "+100"
                }), d.jsx("p", {
                  className: "text-muted-foreground mb-4",
                  children: "Installations réalisées"
                }), d.jsxs("div", {
                  className: "grid grid-cols-2 gap-4 text-center",
                  children: [d.jsxs("div", {
                    children: [d.jsx("div", {
                      className: "text-xl font-bold text-primary",
                      children: "2 ans"
                    }), d.jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Garantie"
                    })]
                  }), d.jsxs("div", {
                    children: [d.jsx("div", {
                      className: "text-xl font-bold text-primary",
                      children: "24/7"
                    }), d.jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Support"
                    })]
                  })]
                })]
              })
            })
          })]
        })
      })
    }), d.jsx("section", {
      id: "faq",
      className: "py-20 bg-muted/20 faq-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "max-w-3xl mx-auto text-center mb-12",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Questions fréquentes"
          }), d.jsx("p", {
            className: "text-lg text-muted-foreground",
            children: "Toutes les informations pour préparer l'installation de votre borne de recharge."
          })]
        }), d.jsx("div", {
          className: "max-w-3xl mx-auto space-y-4",
          children: faqs.map((T, O) => {
            const H = expandedFaq === O,
              Q = `faq-question-${O}`,
              _ = `faq-answer-${O}`;
            return d.jsxs("div", {
              className: Ha("rounded-xl border bg-background transition-shadow", H ? "shadow-md" : ""),
              children: [d.jsxs("button", {
                type: "button",
                className: "flex w-full items-center justify-between px-6 py-4 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                onClick: () => toggleFaq(O),
                "aria-expanded": H,
                "aria-controls": _,
                id: Q,
                children: [d.jsx("span", {
                  className: "text-lg font-semibold",
                  children: T.question
                }), d.jsx("span", {
                  className: "ml-4 text-2xl text-primary",
                  "aria-hidden": "true",
                  children: H ? "−" : "+"
                })]
              }), d.jsx("div", {
                id: _,
                role: "region",
                "aria-labelledby": Q,
                hidden: !H,
                className: "px-6 pb-6 text-muted-foreground leading-relaxed",
                children: T.answer
              })]
            }, T.question);
          })
        })]
      })
    }), d.jsx("section", {
      id: "contact",
      className: "py-20 bg-muted/30 contact-section",
      children: d.jsxs("div", {
        className: "container mx-auto px-4",
        children: [d.jsxs("div", {
          className: "text-center mb-16",
          children: [d.jsx("h2", {
            className: "text-4xl font-bold mb-4",
            children: "Contactez-nous"
          }), d.jsx("p", {
            className: "text-xl text-muted-foreground",
            children: "Demandez votre devis gratuit pour l'installation de votre borne de recharge"
          })]
        }), d.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12 contact-grid",
          children: [d.jsxs("div", {
            className: "contact-details-card",
            children: [d.jsx("h3", {
              className: "text-2xl font-bold mb-6",
              children: "Informations de contact"
            }), d.jsxs("div", {
              className: "space-y-4",
              children: [d.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [d.jsx(Ef, {
                  className: "h-5 w-5 text-primary"
                }), d.jsx("a", {
                  href: "tel:+262692677273",
                  className: "text-foreground hover:text-primary transition-colors",
                  children: "+262 692 67 72 73"
                })]
              }), d.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [d.jsx(Bd, {
                  className: "h-5 w-5 text-primary"
                }), d.jsx("a", {
                  href: "mailto:contact@lazare974.tech",
                  className: "text-foreground hover:text-primary transition-colors",
                  children: "contact@lazare974.tech"
                })]
              }), d.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [d.jsx(F0, {
                  className: "h-5 w-5 text-primary"
                }), d.jsx("span", {
                  children: "La Réunion (974) - Intervention sur toute l'île"
                })]
              })]
            }), d.jsxs("div", {
              className: "mt-8",
              children: [d.jsx("h4", {
                className: "font-semibold mb-4",
                children: "Horaires d'intervention"
              }), d.jsxs("div", {
                className: "space-y-2 text-muted-foreground",
                children: [d.jsx("div", {
                  children: "Lundi - Vendredi : 8h00 - 18h00"
                }), d.jsx("div", {
                  children: "Samedi : 8h00 - 12h00"
                }), d.jsx("div", {
                  children: "Dimanche : Sur rendez-vous"
                })]
              })]
            })]
          }), d.jsxs(li, {
            className: "contact-form-card",
            children: [d.jsxs(ti, {
              children: [d.jsx(ei, {
                children: "Demande de devis"
              }), d.jsx(ai, {
                children: "Remplissez le formulaire : nous vous rappelons pour fixer un rendez-vous et finaliser votre devis personnalisé"
              })]
            }), d.jsx(ni, {
              className: "space-y-4 contact-form-wrapper",
              children: d.jsxs("form", {
                className: "space-y-4 contact-form",
                onSubmit: handleSubmit,
                children: [d.jsxs("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                  children: [d.jsxs("div", {
                    children: [d.jsx("label", {
                      className: "text-sm font-medium",
                      htmlFor: "first-name",
                      children: "Prénom"
                    }), d.jsx("input", {
                      id: "first-name",
                      name: "firstName",
                      className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                      type: "text",
                      autoComplete: "given-name",
                      required: !0
                    })]
                  }), d.jsxs("div", {
                    children: [d.jsx("label", {
                      className: "text-sm font-medium",
                      htmlFor: "last-name",
                      children: "Nom"
                    }), d.jsx("input", {
                      id: "last-name",
                      name: "lastName",
                      className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                      type: "text",
                      autoComplete: "family-name",
                      required: !0
                    })]
                  })]
                }), d.jsxs("div", {
                  children: [d.jsx("label", {
                    className: "text-sm font-medium",
                    htmlFor: "email",
                    children: "Email"
                  }), d.jsx("input", {
                    id: "email",
                    name: "email",
                    className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                    type: "email",
                    autoComplete: "email",
                    required: !0
                  })]
                }), d.jsxs("div", {
                  children: [d.jsx("label", {
                    className: "text-sm font-medium",
                    htmlFor: "phone",
                    children: "Téléphone"
                  }), d.jsx("input", {
                    id: "phone",
                    name: "phone",
                    className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                    type: "tel",
                    autoComplete: "tel",
                    placeholder: "06 XX XX XX XX",
                    required: !0
                  })]
                }), d.jsxs("div", {
                  children: [d.jsx("label", {
                    className: "text-sm font-medium",
                    htmlFor: "vehicle",
                    children: "Type de véhicule électrique"
                  }), d.jsx("input", {
                    id: "vehicle",
                    name: "vehicle",
                    className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                    type: "text",
                    placeholder: "Ex: Tesla Model 3, Renault Zoe..."
                  })]
                }), d.jsxs("div", {
                  children: [d.jsx("label", {
                    className: "text-sm font-medium",
                    htmlFor: "message",
                    children: "Message"
                  }), d.jsx("textarea", {
                    id: "message",
                    name: "message",
                    className: "w-full mt-1 px-3 py-2 border rounded-md form-field",
                    rows: "4",
                    placeholder: "Décrivez votre projet d'installation...",
                    required: !0
                  })]
                }), submissionError ? d.jsx("div", {
                  className: "rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                  role: "alert",
                  "aria-live": "polite",
                  children: submissionError
                }) : null, formSent ? d.jsx("div", {
                  className: "rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700",
                  role: "status",
                  "aria-live": "polite",
                  children: "Merci ! Votre demande a bien été envoyée. Nous vous recontacterons très prochainement."
                }) : null, d.jsxs(Pu, {
                  className: "w-full form-submit",
                  type: "submit",
                  disabled: isSubmitting,
                  children: [d.jsx(Bd, {
                    className: "mr-2 h-4 w-4"
                  }), isSubmitting ? "Envoi en cours..." : "Envoyer la demande"]
                })]
              })
            })]
          })]
        })]
      })
    }), d.jsx("footer", {
      className: "bg-background border-t py-12 footer-accent",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 footer-container",
        children: [d.jsxs("div", {
          className: "grid md:grid-cols-3 gap-8 footer-grid",
          children: [d.jsxs("div", {
            children: [d.jsxs("div", {
              className: "flex items-center space-x-2 mb-4",
              children: [d.jsx($u, {
                className: "h-6 w-6 text-primary"
              }), d.jsx("span", {
                className: "text-xl font-bold",
                children: "Lazare974.tech"
              })]
            }), d.jsx("p", {
              className: "text-muted-foreground",
              children: "Votre spécialiste en installation de bornes de recharge électrique à La Réunion."
            })]
          }), d.jsxs("div", {
            children: [d.jsx("h4", {
              className: "font-semibold mb-4",
              children: "Services"
            }), d.jsxs("ul", {
              className: "space-y-2 text-muted-foreground",
              children: [d.jsx("li", {
                children: d.jsx("a", {
                  href: "#services",
                  className: "hover:text-primary transition-colors",
                  children: "Installation à domicile"
                })
              }), d.jsx("li", {
                children: d.jsx("a", {
                  href: "#services",
                  className: "hover:text-primary transition-colors",
                  children: "Maintenance & SAV"
                })
              }), d.jsx("li", {
                children: d.jsx("a", {
                  href: "#services",
                  className: "hover:text-primary transition-colors",
                  children: "Conseil technique"
                })
              }), d.jsx("li", {
                children: d.jsx("a", {
                  href: "#financement",
                  className: "hover:text-primary transition-colors",
                  children: "Aides financières"
                })
              }), d.jsx("li", {
                children: d.jsx("a", {
                  href: "#avis",
                  className: "hover:text-primary transition-colors",
                  children: "Avis clients"
                })
              })]
            })]
          }), d.jsxs("div", {
          children: [d.jsx("h4", {
            className: "font-semibold mb-4",
            children: "Contact"
          }), d.jsxs("ul", {
            className: "space-y-2 text-muted-foreground",
            children: [d.jsx("li", {
              children: d.jsx("a", {
                href: "tel:+262692677273",
                className: "hover:text-primary transition-colors",
                children: "+262 692 67 72 73"
              })
            }), d.jsx("li", {
              children: d.jsx("a", {
                href: "mailto:contact@lazare974.tech",
                className: "hover:text-primary transition-colors",
                children: "contact@lazare974.tech"
              })
            }), d.jsx("li", {
              children: "La Réunion (974)"
            })]
          })]
          })]
        }), d.jsx("div", {
          className: "border-t mt-8 pt-8 text-center text-muted-foreground",
          children: d.jsx("p", {
            children: "© 2024 Lazare974.tech - Tous droits réservés"
          })
        })]
      })
    })]
  })
}
C0.createRoot(document.getElementById("root")).render(d.jsx(Nl.StrictMode, {
  children: d.jsx(Fv, {})
}));
