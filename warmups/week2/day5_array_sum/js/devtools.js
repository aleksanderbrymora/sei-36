!(function(e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define('DevTools', [], t)
		: 'object' == typeof exports
		? (exports.DevTools = t())
		: (e.DevTools = t());
})(window, function() {
	return (function(e) {
		var t = {};
		function n(r) {
			if (t[r]) return t[r].exports;
			var o = (t[r] = { i: r, l: !1, exports: {} });
			return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
		}
		return (
			(n.m = e),
			(n.c = t),
			(n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
			}),
			(n.r = function(e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			}),
			(n.t = function(e, t) {
				if ((1 & t && (e = n(e)), 8 & t)) return e;
				if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
				var r = Object.create(null);
				if (
					(n.r(r),
					Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
					2 & t && 'string' != typeof e)
				)
					for (var o in e)
						n.d(
							r,
							o,
							function(t) {
								return e[t];
							}.bind(null, o),
						);
				return r;
			}),
			(n.n = function(e) {
				var t =
					e && e.__esModule
						? function() {
								return e.default;
						  }
						: function() {
								return e;
						  };
				return n.d(t, 'a', t), t;
			}),
			(n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(n.p = ''),
			n((n.s = 0))
		);
	})([
		function(e, t, n) {
			'use strict';
			var r =
					(this && this.__decorate) ||
					function(e, t, n, r) {
						var o,
							i = arguments.length,
							u =
								i < 3
									? t
									: null === r
									? (r = Object.getOwnPropertyDescriptor(t, n))
									: r;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							u = Reflect.decorate(e, t, n, r);
						else
							for (var a = e.length - 1; a >= 0; a--)
								(o = e[a]) &&
									(u = (i < 3 ? o(u) : i > 3 ? o(t, n, u) : o(t, n)) || u);
						return i > 3 && u && Object.defineProperty(t, n, u), u;
					},
				o =
					(this && this.__metadata) ||
					function(e, t) {
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.metadata
						)
							return Reflect.metadata(e, t);
					},
				i =
					(this && this.__param) ||
					function(e, t) {
						return function(n, r) {
							t(n, r, e);
						};
					};
			Object.defineProperty(t, '__esModule', { value: !0 });
			var u = n(1),
				a = n(2),
				s = n(3),
				c = n(4),
				f = new ((function() {
					function e() {}
					return (
						(e.prototype.freezeWhenDevToolsOpened = function(e) {
							e
								? u.default.sharedInstance().startMonitoringDebuggerAttach()
								: u.default.sharedInstance().stopMonitoringDebuggerAttach();
						}),
						(e.prototype.alwaysConsoleClear = function(e) {
							e
								? a.default.sharedInstance().enableAlwaysClearConsole()
								: a.default.sharedInstance().disableAlwaysClearConsole();
						}),
						(e.prototype.startDevToolMonitoring = function(e) {
							s.default.sharedInstance().startMonitoringDevTools(e);
						}),
						(e.prototype.stopDevToolMonitoring = function() {
							s.default.sharedInstance().stopMonitoringDevTools();
						}),
						r(
							[
								c.CheckRequiredParameters,
								i(0, c.Required),
								o('design:type', Function),
								o('design:paramtypes', [Boolean]),
								o('design:returntype', void 0),
							],
							e.prototype,
							'freezeWhenDevToolsOpened',
							null,
						),
						r(
							[
								c.CheckRequiredParameters,
								i(0, c.Required),
								o('design:type', Function),
								o('design:paramtypes', [Boolean]),
								o('design:returntype', void 0),
							],
							e.prototype,
							'alwaysConsoleClear',
							null,
						),
						r(
							[
								c.CheckRequiredParameters,
								i(0, c.Required),
								o('design:type', Function),
								o('design:paramtypes', [Function]),
								o('design:returntype', void 0),
							],
							e.prototype,
							'startDevToolMonitoring',
							null,
						),
						r(
							[
								c.CheckRequiredParameters,
								o('design:type', Function),
								o('design:paramtypes', []),
								o('design:returntype', void 0),
							],
							e.prototype,
							'stopDevToolMonitoring',
							null,
						),
						e
					);
				})())();
			t.Manager = f;
		},
		function(module, exports, __webpack_require__) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 });
			var DebuggerManager = (function() {
				function DebuggerManager() {
					this.debuggerTimer = null;
				}
				return (
					(DebuggerManager.sharedInstance = function() {
						return (
							null === DebuggerManager.debuggerManager &&
								(DebuggerManager.debuggerManager = new DebuggerManager()),
							DebuggerManager.debuggerManager
						);
					}),
					(DebuggerManager.prototype.startMonitoringDebuggerAttach = function() {
						null === this.debuggerTimer
							? (this.debuggerTimer = setInterval(function() {
									eval('debugger');
							  }, 10))
							: console.warn('Monitoring timer already running.');
					}),
					(DebuggerManager.prototype.stopMonitoringDebuggerAttach = function() {
						null !== this.debuggerTimer
							? clearInterval(this.debuggerTimer)
							: console.warn(
									'Not running monitoring timer. Did you call startMonitoringDebuggerAttach() method before calling it?',
							  );
					}),
					(DebuggerManager.debuggerManager = null),
					DebuggerManager
				);
			})();
			exports.default = DebuggerManager;
		},
		function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r = (function() {
				function e() {
					this.timerHandle = null;
				}
				return (
					(e.sharedInstance = function() {
						return (
							null === e.consoleManager && (e.consoleManager = new e()),
							e.consoleManager
						);
					}),
					(e.prototype.enableAlwaysClearConsole = function() {
						null === this.timerHandle &&
							(this.timerHandle = setInterval(function() {
								console.clear();
							}, 1e3));
					}),
					(e.prototype.disableAlwaysClearConsole = function() {
						null !== this.timerHandle && clearInterval(this.timerHandle);
					}),
					(e.consoleManager = null),
					e
				);
			})();
			t.default = r;
		},
		function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r = (function() {
				function e() {
					(this.monitoringTimer = null),
						(this.isDevtoolOpened = !1),
						(this.consoleDirection = ''),
						(this.threshold = 150);
				}
				return (
					(e.sharedInstance = function() {
						return (
							null === e.devToolsManager && (e.devToolsManager = new e()),
							e.devToolsManager
						);
					}),
					(e.prototype.startMonitoringDevTools = function(e) {
						var t = this;
						null === this.monitoringTimer
							? (this.monitoringTimer = setInterval(function() {
									t.monitoringTimerHandler(e);
							  }, 1e3))
							: console.warn('Already started monitoring dev tools!!');
					}),
					(e.prototype.stopMonitoringDevTools = function() {
						null !== this.monitoringTimer
							? clearInterval(this.monitoringTimer)
							: console.warn('Not started monitoring dev tools!!');
					}),
					(e.prototype.monitoringTimerHandler = function(e) {
						var t = !1,
							n = !1;
						if (
							(window.Firebug &&
								window.Firebug.chrome &&
								window.Firebug.chrome.isInitialized &&
								((n = !0), (t = !0)),
							!t)
						) {
							var r = /./;
							(r.toString = function() {
								(n = !0), (t = !0);
							}),
								console.log('%c', r),
								console.clear();
						}
						t ||
							(void 0 !== console.profiles &&
								null !== console.profiles &&
								(console.profile(),
								console.profileEnd(),
								console.profiles.length > 0 && ((n = !0), (t = !0))));
						var o = window.outerWidth - window.innerWidth > this.threshold,
							i = window.outerHeight - window.innerHeight > this.threshold,
							u = o ? 'vertical' : 'horizontal';
						(u = !n || o || i ? u : 'seperated-window'),
							(u = n ? u : 'closed'),
							t || ((o || i) && (n = !0)),
							(this.isDevtoolOpened === n && this.consoleDirection === u) ||
								((this.isDevtoolOpened = n),
								(this.consoleDirection = u),
								e(this.isDevtoolOpened, u));
					}),
					(e.devToolsManager = null),
					e
				);
			})();
			t.default = r;
		},
		function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }), n(5);
			var r = Symbol('Required');
			(t.Required = function(e, t, n) {
				var o = Reflect.getOwnMetadata(r, e, t) || [];
				o.push(n), Reflect.defineMetadata(r, o, e, t);
			}),
				(t.CheckRequiredParameters = function(e, t, n) {
					var o = n.value;
					n.value = function() {
						var n = Reflect.getOwnMetadata(r, e, t);
						if (n)
							for (var i = 0, u = n; i < u.length; i++) {
								var a = u[i];
								if (a >= arguments.length || void 0 === arguments[a])
									throw new Error('Missing parameters ' + t + ' method.');
							}
						return o.apply(this, arguments);
					};
				});
		},
		function(e, t, n) {
			(function(e, t) {
				var n;
				!(function(n) {
					!(function(r) {
						var o =
								'object' == typeof t
									? t
									: 'object' == typeof self
									? self
									: 'object' == typeof this
									? this
									: Function('return this;')(),
							i = u(n);
						function u(e, t) {
							return function(n, r) {
								'function' != typeof e[n] &&
									Object.defineProperty(e, n, {
										configurable: !0,
										writable: !0,
										value: r,
									}),
									t && t(n, r);
							};
						}
						void 0 === o.Reflect ? (o.Reflect = n) : (i = u(o.Reflect, i)),
							(function(t) {
								var n = Object.prototype.hasOwnProperty,
									r = 'function' == typeof Symbol,
									o =
										r && void 0 !== Symbol.toPrimitive
											? Symbol.toPrimitive
											: '@@toPrimitive',
									i =
										r && void 0 !== Symbol.iterator
											? Symbol.iterator
											: '@@iterator',
									u = 'function' == typeof Object.create,
									a = { __proto__: [] } instanceof Array,
									s = !u && !a,
									c = {
										create: u
											? function() {
													return C(Object.create(null));
											  }
											: a
											? function() {
													return C({ __proto__: null });
											  }
											: function() {
													return C({});
											  },
										has: s
											? function(e, t) {
													return n.call(e, t);
											  }
											: function(e, t) {
													return t in e;
											  },
										get: s
											? function(e, t) {
													return n.call(e, t) ? e[t] : void 0;
											  }
											: function(e, t) {
													return e[t];
											  },
									},
									f = Object.getPrototypeOf(Function),
									l =
										'object' == typeof e &&
										e.env &&
										'true' === e.env.REFLECT_METADATA_USE_MAP_POLYFILL,
									p =
										l ||
										'function' != typeof Map ||
										'function' != typeof Map.prototype.entries
											? (function() {
													var e = {},
														t = [],
														n = (function() {
															function e(e, t, n) {
																(this._index = 0),
																	(this._keys = e),
																	(this._values = t),
																	(this._selector = n);
															}
															return (
																(e.prototype['@@iterator'] = function() {
																	return this;
																}),
																(e.prototype[i] = function() {
																	return this;
																}),
																(e.prototype.next = function() {
																	var e = this._index;
																	if (e >= 0 && e < this._keys.length) {
																		var n = this._selector(
																			this._keys[e],
																			this._values[e],
																		);
																		return (
																			e + 1 >= this._keys.length
																				? ((this._index = -1),
																				  (this._keys = t),
																				  (this._values = t))
																				: this._index++,
																			{ value: n, done: !1 }
																		);
																	}
																	return { value: void 0, done: !0 };
																}),
																(e.prototype.throw = function(e) {
																	throw (this._index >= 0 &&
																		((this._index = -1),
																		(this._keys = t),
																		(this._values = t)),
																	e);
																}),
																(e.prototype.return = function(e) {
																	return (
																		this._index >= 0 &&
																			((this._index = -1),
																			(this._keys = t),
																			(this._values = t)),
																		{ value: e, done: !0 }
																	);
																}),
																e
															);
														})();
													return (function() {
														function t() {
															(this._keys = []),
																(this._values = []),
																(this._cacheKey = e),
																(this._cacheIndex = -2);
														}
														return (
															Object.defineProperty(t.prototype, 'size', {
																get: function() {
																	return this._keys.length;
																},
																enumerable: !0,
																configurable: !0,
															}),
															(t.prototype.has = function(e) {
																return this._find(e, !1) >= 0;
															}),
															(t.prototype.get = function(e) {
																var t = this._find(e, !1);
																return t >= 0 ? this._values[t] : void 0;
															}),
															(t.prototype.set = function(e, t) {
																var n = this._find(e, !0);
																return (this._values[n] = t), this;
															}),
															(t.prototype.delete = function(t) {
																var n = this._find(t, !1);
																if (n >= 0) {
																	for (
																		var r = this._keys.length, o = n + 1;
																		o < r;
																		o++
																	)
																		(this._keys[o - 1] = this._keys[o]),
																			(this._values[o - 1] = this._values[o]);
																	return (
																		this._keys.length--,
																		this._values.length--,
																		t === this._cacheKey &&
																			((this._cacheKey = e),
																			(this._cacheIndex = -2)),
																		!0
																	);
																}
																return !1;
															}),
															(t.prototype.clear = function() {
																(this._keys.length = 0),
																	(this._values.length = 0),
																	(this._cacheKey = e),
																	(this._cacheIndex = -2);
															}),
															(t.prototype.keys = function() {
																return new n(this._keys, this._values, r);
															}),
															(t.prototype.values = function() {
																return new n(this._keys, this._values, o);
															}),
															(t.prototype.entries = function() {
																return new n(this._keys, this._values, u);
															}),
															(t.prototype['@@iterator'] = function() {
																return this.entries();
															}),
															(t.prototype[i] = function() {
																return this.entries();
															}),
															(t.prototype._find = function(e, t) {
																return (
																	this._cacheKey !== e &&
																		(this._cacheIndex = this._keys.indexOf(
																			(this._cacheKey = e),
																		)),
																	this._cacheIndex < 0 &&
																		t &&
																		((this._cacheIndex = this._keys.length),
																		this._keys.push(e),
																		this._values.push(void 0)),
																	this._cacheIndex
																);
															}),
															t
														);
													})();
													function r(e, t) {
														return e;
													}
													function o(e, t) {
														return t;
													}
													function u(e, t) {
														return [e, t];
													}
											  })()
											: Map,
									h =
										l ||
										'function' != typeof Set ||
										'function' != typeof Set.prototype.entries
											? (function() {
													function e() {
														this._map = new p();
													}
													return (
														Object.defineProperty(e.prototype, 'size', {
															get: function() {
																return this._map.size;
															},
															enumerable: !0,
															configurable: !0,
														}),
														(e.prototype.has = function(e) {
															return this._map.has(e);
														}),
														(e.prototype.add = function(e) {
															return this._map.set(e, e), this;
														}),
														(e.prototype.delete = function(e) {
															return this._map.delete(e);
														}),
														(e.prototype.clear = function() {
															this._map.clear();
														}),
														(e.prototype.keys = function() {
															return this._map.keys();
														}),
														(e.prototype.values = function() {
															return this._map.values();
														}),
														(e.prototype.entries = function() {
															return this._map.entries();
														}),
														(e.prototype['@@iterator'] = function() {
															return this.keys();
														}),
														(e.prototype[i] = function() {
															return this.keys();
														}),
														e
													);
											  })()
											: Set,
									d = new (l || 'function' != typeof WeakMap
										? (function() {
												var e = 16,
													t = c.create(),
													r = o();
												return (function() {
													function e() {
														this._key = o();
													}
													return (
														(e.prototype.has = function(e) {
															var t = i(e, !1);
															return void 0 !== t && c.has(t, this._key);
														}),
														(e.prototype.get = function(e) {
															var t = i(e, !1);
															return void 0 !== t
																? c.get(t, this._key)
																: void 0;
														}),
														(e.prototype.set = function(e, t) {
															var n = i(e, !0);
															return (n[this._key] = t), this;
														}),
														(e.prototype.delete = function(e) {
															var t = i(e, !1);
															return void 0 !== t && delete t[this._key];
														}),
														(e.prototype.clear = function() {
															this._key = o();
														}),
														e
													);
												})();
												function o() {
													var e;
													do {
														e = '@@WeakMap@@' + a();
													} while (c.has(t, e));
													return (t[e] = !0), e;
												}
												function i(e, t) {
													if (!n.call(e, r)) {
														if (!t) return;
														Object.defineProperty(e, r, { value: c.create() });
													}
													return e[r];
												}
												function u(e, t) {
													for (var n = 0; n < t; ++n)
														e[n] = (255 * Math.random()) | 0;
													return e;
												}
												function a() {
													var t = (function(e) {
														if ('function' == typeof Uint8Array)
															return 'undefined' != typeof crypto
																? crypto.getRandomValues(new Uint8Array(e))
																: 'undefined' != typeof msCrypto
																? msCrypto.getRandomValues(new Uint8Array(e))
																: u(new Uint8Array(e), e);
														return u(new Array(e), e);
													})(e);
													(t[6] = (79 & t[6]) | 64),
														(t[8] = (191 & t[8]) | 128);
													for (var n = '', r = 0; r < e; ++r) {
														var o = t[r];
														(4 !== r && 6 !== r && 8 !== r) || (n += '-'),
															o < 16 && (n += '0'),
															(n += o.toString(16).toLowerCase());
													}
													return n;
												}
										  })()
										: WeakMap)();
								function y(e, t, n) {
									var r = d.get(e);
									if (b(r)) {
										if (!n) return;
										(r = new p()), d.set(e, r);
									}
									var o = r.get(t);
									if (b(o)) {
										if (!n) return;
										(o = new p()), r.set(t, o);
									}
									return o;
								}
								function v(e, t, n) {
									var r = y(t, n, !1);
									return (
										!b(r) &&
										(function(e) {
											return !!e;
										})(r.has(e))
									);
								}
								function g(e, t, n) {
									var r = y(t, n, !1);
									if (!b(r)) return r.get(e);
								}
								function w(e, t, n, r) {
									var o = y(n, r, !0);
									o.set(e, t);
								}
								function _(e, t) {
									var n = [],
										r = y(e, t, !1);
									if (b(r)) return n;
									for (
										var o = r.keys(),
											u = (function(e) {
												var t = E(e, i);
												if (!D(t)) throw new TypeError();
												var n = t.call(e);
												if (!M(n)) throw new TypeError();
												return n;
											})(o),
											a = 0;
										;

									) {
										var s = A(u);
										if (!s) return (n.length = a), n;
										var c = P(s);
										try {
											n[a] = c;
										} catch (e) {
											try {
												R(u);
											} finally {
												throw e;
											}
										}
										a++;
									}
								}
								function m(e) {
									if (null === e) return 1;
									switch (typeof e) {
										case 'undefined':
											return 0;
										case 'boolean':
											return 2;
										case 'string':
											return 3;
										case 'symbol':
											return 4;
										case 'number':
											return 5;
										case 'object':
											return null === e ? 1 : 6;
										default:
											return 6;
									}
								}
								function b(e) {
									return void 0 === e;
								}
								function T(e) {
									return null === e;
								}
								function M(e) {
									return 'object' == typeof e
										? null !== e
										: 'function' == typeof e;
								}
								function O(e, t) {
									switch (m(e)) {
										case 0:
										case 1:
										case 2:
										case 3:
										case 4:
										case 5:
											return e;
									}
									var n = 3 === t ? 'string' : 5 === t ? 'number' : 'default',
										r = E(e, o);
									if (void 0 !== r) {
										var i = r.call(e, n);
										if (M(i)) throw new TypeError();
										return i;
									}
									return (function(e, t) {
										if ('string' === t) {
											var n = e.toString;
											if (D(n)) {
												var r = n.call(e);
												if (!M(r)) return r;
											}
											var o = e.valueOf;
											if (D(o)) {
												var r = o.call(e);
												if (!M(r)) return r;
											}
										} else {
											var o = e.valueOf;
											if (D(o)) {
												var r = o.call(e);
												if (!M(r)) return r;
											}
											var i = e.toString;
											if (D(i)) {
												var r = i.call(e);
												if (!M(r)) return r;
											}
										}
										throw new TypeError();
									})(e, 'default' === n ? 'number' : n);
								}
								function k(e) {
									var t = O(e, 3);
									return (function(e) {
										return 'symbol' == typeof e;
									})(t)
										? t
										: (function(e) {
												return '' + e;
										  })(t);
								}
								function j(e) {
									return Array.isArray
										? Array.isArray(e)
										: e instanceof Object
										? e instanceof Array
										: '[object Array]' === Object.prototype.toString.call(e);
								}
								function D(e) {
									return 'function' == typeof e;
								}
								function x(e) {
									return 'function' == typeof e;
								}
								function E(e, t) {
									var n = e[t];
									if (void 0 !== n && null !== n) {
										if (!D(n)) throw new TypeError();
										return n;
									}
								}
								function P(e) {
									return e.value;
								}
								function A(e) {
									var t = e.next();
									return !t.done && t;
								}
								function R(e) {
									var t = e.return;
									t && t.call(e);
								}
								function I(e) {
									var t = Object.getPrototypeOf(e);
									if ('function' != typeof e || e === f) return t;
									if (t !== f) return t;
									var n = e.prototype,
										r = n && Object.getPrototypeOf(n);
									if (null == r || r === Object.prototype) return t;
									var o = r.constructor;
									return 'function' != typeof o ? t : o === e ? t : o;
								}
								function C(e) {
									return (e.__ = void 0), delete e.__, e;
								}
								t('decorate', function(e, t, n, r) {
									if (b(n)) {
										if (!j(e)) throw new TypeError();
										if (!x(t)) throw new TypeError();
										return (function(e, t) {
											for (var n = e.length - 1; n >= 0; --n) {
												var r = e[n],
													o = r(t);
												if (!b(o) && !T(o)) {
													if (!x(o)) throw new TypeError();
													t = o;
												}
											}
											return t;
										})(e, t);
									}
									if (!j(e)) throw new TypeError();
									if (!M(t)) throw new TypeError();
									if (!M(r) && !b(r) && !T(r)) throw new TypeError();
									return (
										T(r) && (r = void 0),
										(n = k(n)),
										(function(e, t, n, r) {
											for (var o = e.length - 1; o >= 0; --o) {
												var i = e[o],
													u = i(t, n, r);
												if (!b(u) && !T(u)) {
													if (!M(u)) throw new TypeError();
													r = u;
												}
											}
											return r;
										})(e, t, n, r)
									);
								}),
									t('metadata', function(e, t) {
										return function(n, r) {
											if (!M(n)) throw new TypeError();
											if (
												!b(r) &&
												!(function(e) {
													switch (m(e)) {
														case 3:
														case 4:
															return !0;
														default:
															return !1;
													}
												})(r)
											)
												throw new TypeError();
											w(e, t, n, r);
										};
									}),
									t('defineMetadata', function(e, t, n, r) {
										if (!M(n)) throw new TypeError();
										b(r) || (r = k(r));
										return w(e, t, n, r);
									}),
									t('hasMetadata', function(e, t, n) {
										if (!M(t)) throw new TypeError();
										b(n) || (n = k(n));
										return (function e(t, n, r) {
											var o = v(t, n, r);
											if (o) return !0;
											var i = I(n);
											if (!T(i)) return e(t, i, r);
											return !1;
										})(e, t, n);
									}),
									t('hasOwnMetadata', function(e, t, n) {
										if (!M(t)) throw new TypeError();
										b(n) || (n = k(n));
										return v(e, t, n);
									}),
									t('getMetadata', function(e, t, n) {
										if (!M(t)) throw new TypeError();
										b(n) || (n = k(n));
										return (function e(t, n, r) {
											var o = v(t, n, r);
											if (o) return g(t, n, r);
											var i = I(n);
											if (!T(i)) return e(t, i, r);
											return;
										})(e, t, n);
									}),
									t('getOwnMetadata', function(e, t, n) {
										if (!M(t)) throw new TypeError();
										b(n) || (n = k(n));
										return g(e, t, n);
									}),
									t('getMetadataKeys', function(e, t) {
										if (!M(e)) throw new TypeError();
										b(t) || (t = k(t));
										return (function e(t, n) {
											var r = _(t, n);
											var o = I(t);
											if (null === o) return r;
											var i = e(o, n);
											if (i.length <= 0) return r;
											if (r.length <= 0) return i;
											var u = new h();
											var a = [];
											for (var s = 0, c = r; s < c.length; s++) {
												var f = c[s],
													l = u.has(f);
												l || (u.add(f), a.push(f));
											}
											for (var p = 0, d = i; p < d.length; p++) {
												var f = d[p],
													l = u.has(f);
												l || (u.add(f), a.push(f));
											}
											return a;
										})(e, t);
									}),
									t('getOwnMetadataKeys', function(e, t) {
										if (!M(e)) throw new TypeError();
										b(t) || (t = k(t));
										return _(e, t);
									}),
									t('deleteMetadata', function(e, t, n) {
										if (!M(t)) throw new TypeError();
										b(n) || (n = k(n));
										var r = y(t, n, !1);
										if (b(r)) return !1;
										if (!r.delete(e)) return !1;
										if (r.size > 0) return !0;
										var o = d.get(t);
										return o.delete(n), o.size > 0 || (d.delete(t), !0);
									});
							})(i);
					})();
				})(n || (n = {}));
			}.call(this, n(6), n(7)));
		},
		function(e, t) {
			var n,
				r,
				o = (e.exports = {});
			function i() {
				throw new Error('setTimeout has not been defined');
			}
			function u() {
				throw new Error('clearTimeout has not been defined');
			}
			function a(e) {
				if (n === setTimeout) return setTimeout(e, 0);
				if ((n === i || !n) && setTimeout)
					return (n = setTimeout), setTimeout(e, 0);
				try {
					return n(e, 0);
				} catch (t) {
					try {
						return n.call(null, e, 0);
					} catch (t) {
						return n.call(this, e, 0);
					}
				}
			}
			!(function() {
				try {
					n = 'function' == typeof setTimeout ? setTimeout : i;
				} catch (e) {
					n = i;
				}
				try {
					r = 'function' == typeof clearTimeout ? clearTimeout : u;
				} catch (e) {
					r = u;
				}
			})();
			var s,
				c = [],
				f = !1,
				l = -1;
			function p() {
				f &&
					s &&
					((f = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && h());
			}
			function h() {
				if (!f) {
					var e = a(p);
					f = !0;
					for (var t = c.length; t; ) {
						for (s = c, c = []; ++l < t; ) s && s[l].run();
						(l = -1), (t = c.length);
					}
					(s = null),
						(f = !1),
						(function(e) {
							if (r === clearTimeout) return clearTimeout(e);
							if ((r === u || !r) && clearTimeout)
								return (r = clearTimeout), clearTimeout(e);
							try {
								r(e);
							} catch (t) {
								try {
									return r.call(null, e);
								} catch (t) {
									return r.call(this, e);
								}
							}
						})(e);
				}
			}
			function d(e, t) {
				(this.fun = e), (this.array = t);
			}
			function y() {}
			(o.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				c.push(new d(e, t)), 1 !== c.length || f || a(h);
			}),
				(d.prototype.run = function() {
					this.fun.apply(null, this.array);
				}),
				(o.title = 'browser'),
				(o.browser = !0),
				(o.env = {}),
				(o.argv = []),
				(o.version = ''),
				(o.versions = {}),
				(o.on = y),
				(o.addListener = y),
				(o.once = y),
				(o.off = y),
				(o.removeListener = y),
				(o.removeAllListeners = y),
				(o.emit = y),
				(o.prependListener = y),
				(o.prependOnceListener = y),
				(o.listeners = function(e) {
					return [];
				}),
				(o.binding = function(e) {
					throw new Error('process.binding is not supported');
				}),
				(o.cwd = function() {
					return '/';
				}),
				(o.chdir = function(e) {
					throw new Error('process.chdir is not supported');
				}),
				(o.umask = function() {
					return 0;
				});
		},
		function(e, t) {
			var n;
			n = (function() {
				return this;
			})();
			try {
				n = n || Function('return this')() || (0, eval)('this');
			} catch (e) {
				'object' == typeof window && (n = window);
			}
			e.exports = n;
		},
	]);
});
