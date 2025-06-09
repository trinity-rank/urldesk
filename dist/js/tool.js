/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      redirect_from: "",
      redirect_to: "",
      status_code: "307",
      errorMessage: ""
    };
  },
  methods: {
    createLinks: function createLinks() {
      var _this = this;
      axios.post('/nova-vendor/urldesk/redirects', {
        redirect_from: this.redirect_from,
        redirect_to: this.redirect_to,
        status_code: this.status_code
      }).then(function (response) {
        _this.$emit("createLinksEvent");
        _this.isOpen = false;
        _this.redirect_from = "";
        _this.redirect_to = "";
        _this.status_code = "307";
        _this.errorMessage = "";
      })["catch"](function (error) {
        var key = Object.keys(error.response.data.errors)[0];
        _this.errorMessage = error.response.data.errors[key][0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    deleteRedirect: function deleteRedirect() {
      var _this = this;
      axios["delete"]('/nova-vendor/urldesk/redirects/' + this.id).then(function (response) {
        _this.$emit("deleteRedirectEvent");
        _this.isOpen = false;
      })["catch"](function (error) {
        //
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      isOpen: false,
      //id: "",
      redirect_from: "",
      redirect_to: "",
      status_code: "",
      errorMessage: ""
    };
  },
  methods: {
    loadRedirect: function loadRedirect() {
      var _this = this;
      axios.get('/nova-vendor/urldesk/redirects/' + this.id).then(function (response) {
        _this.redirect_from = response.data.data.redirect_from;
        _this.redirect_to = response.data.data.redirect_to;
        _this.status_code = response.data.data.status_code;
        _this.isOpen = true;
      });
    },
    editRedirect: function editRedirect() {
      var _this2 = this;
      axios.put('/nova-vendor/urldesk/redirects/' + this.id, {
        redirect_from: this.redirect_from,
        redirect_to: this.redirect_to,
        status_code: this.status_code
      }).then(function (response) {
        _this2.$emit("editRedirectEvent");
        _this2.isOpen = false;
        _this2.errorMessage = "";
      })["catch"](function (error) {
        var key = Object.keys(error.response.data.errors)[0];
        _this2.errorMessage = error.response.data.errors[key][0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_pagination_PaginationComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pagination/PaginationComponent */ "./resources/js/components/pagination/PaginationComponent.vue");
/* harmony import */ var _components_AddLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AddLinks */ "./resources/js/components/AddLinks.vue");
/* harmony import */ var _components_EditRedirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EditRedirect */ "./resources/js/components/EditRedirect.vue");
/* harmony import */ var _components_DeleteRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DeleteRedirect */ "./resources/js/components/DeleteRedirect.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PaginationComponent: _components_pagination_PaginationComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddLinks: _components_AddLinks__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditRedirect: _components_EditRedirect__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeleteRedirect: _components_DeleteRedirect__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      redirects: [],
      meta: {},
      currentPage: null,
      currentSearch: null,
      query: {
        search: null
      }
    };
  },
  methods: {
    getRedirects: function getRedirects(page) {
      var _this = this;
      axios.get('/nova-vendor/urldesk/redirects', {
        params: {
          page: page,
          search: this.query.search
        }
      }).then(function (response) {
        _this.redirects = response.data.data;
        _this.meta = response.data.meta;
        _this.currentPage = page;
        _this.currentSearch = _this.query.search;
      });
    },
    getEditedRedirects: function getEditedRedirects() {
      var _this2 = this;
      axios.get('/nova-vendor/urldesk/redirects', {
        params: {
          page: this.currentPage,
          search: this.currentSearch
        }
      }).then(function (response) {
        _this2.redirects = response.data.data;
        _this2.meta = response.data.meta;
      });
    }
  },
  mounted: function mounted() {
    this.getRedirects();
  },
  watch: {
    query: {
      handler: _.debounce(function (v) {
        this.getRedirects();
      }, 240),
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['meta'],
  data: function data() {
    return {
      numbersPerSection: 10
    };
  },
  computed: {
    section: function section() {
      return Math.ceil(this.meta.current_page / this.numbersPerSection);
    },
    sections: function sections() {
      return Math.ceil(this.meta.last_page / this.numbersPerSection);
    },
    lastPage: function lastPage() {
      var lastPage = (this.section - 1) * this.numbersPerSection + this.numbersPerSection;
      if (this.section === this.sections) {
        lastPage = this.meta.last_page;
      }
      return lastPage;
    },
    pages: function pages() {
      return _.range((this.section - 1) * this.numbersPerSection + 1, this.lastPage + 1);
    }
  },
  methods: {
    switched: function switched(page) {
      if (page <= 0 || page > this.meta.last_page) {
        return;
      }
      this.$emit('pagination:switched', page);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass:
          "w-32 h-8 bg-blue-400 hover:bg-blue-500 tracking-wide rounded shadow py-1 px-3 text-white font-bold",
        on: {
          click: function ($event) {
            _vm.isOpen = true
          },
        },
      },
      [_vm._v("\n       Add Links\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpen,
            expression: "isOpen",
          },
        ],
        staticClass: "fixed z-10 inset-0 overflow-y-auto",
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          },
          [
            _c(
              "div",
              {
                staticClass: "fixed inset-0 transition-opacity",
                attrs: { "aria-hidden": "true" },
                on: {
                  click: function ($event) {
                    _vm.isOpen = false
                  },
                },
              },
              [
                _c("div", {
                  staticClass: "absolute inset-0 bg-indigo-200 opacity-75",
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "hidden sm:inline-block sm:align-middle sm:h-screen",
                attrs: { "aria-hidden": "true" },
              },
              [_vm._v("​")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                attrs: {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                },
              },
              [
                _c("form", [
                  _c("div", { staticClass: " px-6 pt-8 pb-4 " }, [
                    _vm.errorMessage
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "text-red-500 text-center text-sm mb-4",
                          },
                          [_vm._v(_vm._s(_vm.errorMessage))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full " }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "flex flex-wrap" }, [
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [
                                _c("span", [_vm._v("Redirect From")]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.redirect_from,
                                      expression: "redirect_from",
                                    },
                                  ],
                                  staticClass:
                                    "rounded border-2 border-blue-300  form-textarea mt-1 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                                  attrs: { rows: "3" },
                                  domProps: { value: _vm.redirect_from },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.redirect_from = $event.target.value
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [
                                _c("span", [_vm._v("Redirect To")]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.redirect_to,
                                      expression: "redirect_to",
                                    },
                                  ],
                                  staticClass:
                                    "rounded text-gray-800 border-2 border-blue-300  form-textarea mt-1 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                                  attrs: { rows: "5" },
                                  domProps: { value: _vm.redirect_to },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.redirect_to = $event.target.value
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [_vm._v("Status Code")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.status_code,
                                    expression: "status_code",
                                  },
                                ],
                                staticClass:
                                  "form-select w-full text-base border-2 border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ",
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.status_code = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { attrs: { value: "301" } }, [
                                  _vm._v("301"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "302" } }, [
                                  _vm._v("302"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "307" } }, [
                                  _vm._v("307"),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "space-y-3 sm:space-y-0 items-center bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "w-full sm:w-24 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "submit" },
                        on: { click: _vm.createLinks },
                      },
                      [
                        _vm._v(
                          "\n                        Create\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-4 sm:w-24 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            _vm.isOpen = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                      Cancel\n                  "
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652 ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            _vm.isOpen = true
          },
        },
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-gray-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
              },
            }),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpen,
            expression: "isOpen",
          },
        ],
        staticClass: "fixed z-10 inset-0 overflow-y-auto",
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          },
          [
            _c(
              "div",
              {
                staticClass: "fixed inset-0 transition-opacity",
                attrs: { "aria-hidden": "true" },
                on: {
                  click: function ($event) {
                    _vm.isOpen = false
                  },
                },
              },
              [
                _c("div", {
                  staticClass: "absolute inset-0 bg-indigo-200 opacity-75",
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "hidden sm:inline-block sm:align-middle sm:h-screen",
                attrs: { "aria-hidden": "true" },
              },
              [_vm._v("​")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                attrs: {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "space-y-3 sm:space-y-0 bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "w-full sm:w-24 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "submit" },
                        on: { click: _vm.deleteRedirect },
                      },
                      [
                        _vm._v(
                          "\n                      Yes\n                  "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-4 sm:w-24 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            _vm.isOpen = false
                          },
                        },
                      },
                      [_vm._v("\n                      No\n                  ")]
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("div", { staticClass: " px-6 pt-8 pb-4 " }, [
        _c("div", { staticClass: "w-full " }, [
          _c("div", { staticClass: "w-full" }, [
            _c("div", { staticClass: "flex flex-wrap" }, [
              _c("p", [_vm._v("Are you sure?")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1 ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("button", { on: { click: _vm.loadRedirect } }, [
      _c(
        "svg",
        {
          staticClass: "w-6 h-6 text-gray-400",
          attrs: {
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
            },
          }),
        ]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpen,
            expression: "isOpen",
          },
        ],
        staticClass: "fixed z-10 inset-0 overflow-y-auto",
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          },
          [
            _c(
              "div",
              {
                staticClass: "fixed inset-0 transition-opacity",
                attrs: { "aria-hidden": "true" },
                on: {
                  click: function ($event) {
                    _vm.isOpen = false
                  },
                },
              },
              [
                _c("div", {
                  staticClass: "absolute inset-0 bg-indigo-200 opacity-75",
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "hidden sm:inline-block sm:align-middle sm:h-screen",
                attrs: { "aria-hidden": "true" },
              },
              [_vm._v("​")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                attrs: {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                },
              },
              [
                _c("form", [
                  _c("div", { staticClass: " px-6 pt-8 pb-4 " }, [
                    _vm.errorMessage
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "text-red-500 text-center text-sm mb-4",
                          },
                          [_vm._v(_vm._s(_vm.errorMessage))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full " }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "flex flex-wrap" }, [
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [
                                _c("span", [_vm._v("Redirect From")]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.redirect_from,
                                      expression: "redirect_from",
                                    },
                                  ],
                                  staticClass:
                                    "rounded border-2 border-blue-300  form-textarea mt-1 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                                  attrs: { rows: "3" },
                                  domProps: { value: _vm.redirect_from },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.redirect_from = $event.target.value
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [
                                _c("span", [_vm._v("Redirect To")]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.redirect_to,
                                      expression: "redirect_to",
                                    },
                                  ],
                                  staticClass:
                                    "rounded text-gray-800 border-2 border-blue-300  form-textarea mt-1 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                                  attrs: { rows: "5" },
                                  domProps: { value: _vm.redirect_to },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.redirect_to = $event.target.value
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm mb-2 text-gray-800 ",
                              },
                              [_vm._v("Status Code")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.status_code,
                                    expression: "status_code",
                                  },
                                ],
                                staticClass:
                                  "form-select w-full text-base border-2 border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ",
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.status_code = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { attrs: { value: "301" } }, [
                                  _vm._v("301"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "302" } }, [
                                  _vm._v("302"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "307" } }, [
                                  _vm._v("307"),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "space-y-3 sm:space-y-0 bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "w-full sm:w-24 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "submit" },
                        on: { click: _vm.editRedirect },
                      },
                      [
                        _vm._v(
                          "\n                      Edit\n                  "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-4 sm:w-24 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            _vm.isOpen = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                      Cancel\n                  "
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483 ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-col space-y-4 overflow-x-auto" }, [
    _c("div", { staticClass: "flex justify-between items-center" }, [
      _c("div", { staticClass: "relative" }, [
        _c(
          "div",
          {
            staticClass:
              "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
          },
          [
            _c(
              "svg",
              {
                staticClass: "h-5 w-5 text-gray-400",
                attrs: { fill: "currentColor", viewBox: "0 0 20 20" },
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    "clip-rule": "evenodd",
                  },
                }),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.query.search,
              expression: "query.search",
            },
          ],
          staticClass:
            "block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-400 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out",
          attrs: {
            id: "search",
            autocomplete: "off",
            placeholder: "Search",
            type: "search",
          },
          domProps: { value: _vm.query.search },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.query, "search", $event.target.value)
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [_c("add-links", { on: { createLinksEvent: _vm.getRedirects } })],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "table",
      {
        staticClass:
          "min-w-full divide-y divide-gray-300 border-1 border-gray-400 rounded shadow",
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          { staticClass: "bg-white bg-opacity-90" },
          [
            _vm.redirects.length
              ? _vm._l(_vm.redirects, function (redirect) {
                  return _c(
                    "tr",
                    {
                      key: redirect.id,
                      staticClass: "font-normal text-gray-600",
                    },
                    [
                      _c(
                        "td",
                        {
                          staticClass:
                            "w-6/12 px-6 py-3 whitespace-nowrap text-sm text-gray-500",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex items-center space-x-4 select-all",
                            },
                            [
                              _c("span", { staticClass: "cursor-pointer" }, [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "w-6 h-6 text-gray-400",
                                    attrs: {
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-sm" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm._f("truncate")(
                                        redirect.redirect_from,
                                        64,
                                        "..."
                                      )
                                    ) +
                                    "\n                        "
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "w-3/12 px-6 py-3 whitespace-nowrap text-sm text-blue-500",
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "hover:underline italic",
                              attrs: {
                                href: redirect.redirect_to,
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("truncate")(
                                      redirect.redirect_to,
                                      64,
                                      "..."
                                    )
                                  ) +
                                  "\n                        "
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "w-212 px-6 py-3 whitespace-nowrap" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "pl-1 text-sm text-indigo-500 font-semibold",
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(redirect.status_code) +
                                  "\n                    "
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "w-1/12 px-6 py-3 whitespace-nowrap text-sm",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex items-center justify-center space-x-2 text-sm text-gray-500",
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c("edit-redirect", {
                                    attrs: { id: redirect.id },
                                    on: {
                                      editRedirectEvent: _vm.getEditedRedirects,
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c("delete-redirect", {
                                    attrs: { id: redirect.id },
                                    on: {
                                      deleteRedirectEvent:
                                        _vm.getEditedRedirects,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                })
              : _c("tr", { staticClass: "font-normal text-gray-600" }, [
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-12/12 px-6 py-3 whitespace-nowrap text-sm",
                      attrs: { colspan: "4" },
                    },
                    [
                      _c("div", { staticClass: "flex justify-center" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "w-16 h-16 text-gray-400",
                            attrs: {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                              },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
          ],
          2
        ),
      ]
    ),
    _vm._v(" "),
    _vm.meta.total > 25
      ? _c(
          "div",
          [
            _c("pagination-component", {
              attrs: { meta: _vm.meta },
              on: { "pagination:switched": _vm.getRedirects },
            }),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-xs bg-gray-200 text-gray-500" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "px-6 py-3 text-left  font-bold   tracking-wider",
            attrs: { scope: "col" },
          },
          [_c("span", [_vm._v("REDIRECT FROM")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "px-6 py-3 text-left  font-bold   tracking-wider",
            attrs: { scope: "col" },
          },
          [_c("span", [_vm._v("REDIRECT TO")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "px-6 py-3 text-left  font-bold   tracking-wider",
            attrs: { scope: "col" },
          },
          [_c("span", [_vm._v("CODE")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "relative px-6 py-4", attrs: { scope: "col" } },
          [_c("span", { staticClass: "sr-only" }, [_vm._v("Actions")])]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex justify-center" }, [
    _c(
      "div",
      { staticClass: "flex space-x-2" },
      [
        _c(
          "span",
          { class: { "text-gray-400": _vm.meta.current_page === 1 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.switched(_vm.meta.current_page - 1)
                  },
                },
              },
              [_vm._v("<")]
            ),
          ]
        ),
        _vm._v(" "),
        _vm.section > 1
          ? [
              _c("span", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.switched(1)
                      },
                    },
                  },
                  [_vm._v("1")]
                ),
              ]),
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.pages, function (page) {
          return _c(
            "span",
            { class: { "text-blue-500": _vm.meta.current_page === page } },
            [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.switched(page)
                    },
                  },
                },
                [_vm._v(_vm._s(page))]
              ),
            ]
          )
        }),
        _vm._v(" "),
        _vm.section < _vm.sections
          ? [
              _c("span", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.switched(_vm.meta.last_page)
                      },
                    },
                  },
                  [_vm._v(_vm._s(_vm.meta.last_page))]
                ),
              ]),
            ]
          : _vm._e(),
        _vm._v(" "),
        _c(
          "span",
          {
            class: {
              "text-gray-400": _vm.meta.current_page === _vm.meta.current_page,
            },
          },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.switched(_vm.meta.current_page + 1)
                  },
                },
              },
              [_vm._v(">")]
            ),
          ]
        ),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/AddLinks.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/AddLinks.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddLinks.vue?vue&type=template&id=9b9ca5fa */ "./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa");
/* harmony import */ var _AddLinks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddLinks.vue?vue&type=script&lang=js */ "./resources/js/components/AddLinks.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddLinks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/AddLinks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddLinks.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AddLinks.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLinks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddLinks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLinks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLinks_vue_vue_type_template_id_9b9ca5fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddLinks.vue?vue&type=template&id=9b9ca5fa */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddLinks.vue?vue&type=template&id=9b9ca5fa");


/***/ }),

/***/ "./resources/js/components/DeleteRedirect.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/DeleteRedirect.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteRedirect.vue?vue&type=template&id=1465c652 */ "./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652");
/* harmony import */ var _DeleteRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteRedirect.vue?vue&type=script&lang=js */ "./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/DeleteRedirect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteRedirect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRedirect_vue_vue_type_template_id_1465c652__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteRedirect.vue?vue&type=template&id=1465c652 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteRedirect.vue?vue&type=template&id=1465c652");


/***/ }),

/***/ "./resources/js/components/EditRedirect.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/EditRedirect.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditRedirect.vue?vue&type=template&id=7cdd20f1 */ "./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1");
/* harmony import */ var _EditRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRedirect.vue?vue&type=script&lang=js */ "./resources/js/components/EditRedirect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/EditRedirect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditRedirect.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditRedirect.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditRedirect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRedirect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRedirect_vue_vue_type_template_id_7cdd20f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditRedirect.vue?vue&type=template&id=7cdd20f1 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditRedirect.vue?vue&type=template&id=7cdd20f1");


/***/ }),

/***/ "./resources/js/components/Tool.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tool.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=68ff5483 */ "./resources/js/components/Tool.vue?vue&type=template&id=68ff5483");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/components/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Tool.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tool.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Tool.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tool.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tool.vue?vue&type=template&id=68ff5483":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tool.vue?vue&type=template&id=68ff5483 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tool.vue?vue&type=template&id=68ff5483 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483");


/***/ }),

/***/ "./resources/js/components/pagination/PaginationComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=template&id=a3d6030e */ "./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e");
/* harmony import */ var _PaginationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=script&lang=js */ "./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__.render,
  _PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/pagination/PaginationComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_a3d6030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=template&id=a3d6030e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pagination/PaginationComponent.vue?vue&type=template&id=a3d6030e");


/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_tool_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/tool.css */ "./resources/css/tool.css");

Nova.booting(function (Vue, router, store) {
  router.addRoutes([{
    name: 'urldesk',
    path: '/urldesk',
    component: __webpack_require__(/*! ./components/Tool */ "./resources/js/components/Tool.vue")
  }]);
  var filter = function filter(text, length, clamp) {
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
  };
  Vue.filter('truncate', filter);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;