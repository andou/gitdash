(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n        {{ title }}!\n    </h1>\n</div>\n<git-dashboard></git-dashboard>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Git Graph';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_git_dashboard_git_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/git-dashboard/git-dashboard */ "./src/app/components/git-dashboard/git-dashboard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //

 //
 //


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_git_dashboard_git_dashboard__WEBPACK_IMPORTED_MODULE_6__["GitDashboardComp"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/git-dashboard/git-dashboard.css":
/*!************************************************************!*\
  !*** ./src/app/components/git-dashboard/git-dashboard.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/git-dashboard/git-dashboard.html":
/*!*************************************************************!*\
  !*** ./src/app/components/git-dashboard/git-dashboard.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n\n    <form fxFlex=\"45\" fxLayout=\"column\" #gitdashboardform=\"ngForm\" (ngSubmit)=\"onSubmit(gitdashboardform)\" novalidate>\n        <mat-card fxLayout=\"column\">\n            <mat-card-title>Preview</mat-card-title>\n            <div>Branch: {{ branch}}</div>\n            <div>Author: {{ authorName }} &lt;{{authorEmail}}&gt;</div>\n            <div fxFlexOffset=\"10px\">{{ message}}</div>\n            <div fxFlexOffset=\"20px\">\n                <button button=\"submit\" mat-raised-button color=\"primary\">Commit!</button>\n            </div>\n        </mat-card>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Message\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxLayout=\"column\">\n                    <mat-card-title>Message</mat-card-title>\n                    <mat-form-field class=\"git-form\">\n                        <input matInput [(ngModel)]=\"message\" name=\"message\" required\n                               placeholder=\"Name\" type=\"text\"/>\n                    </mat-form-field>\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Author\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxLayout=\"column\">\n                    <mat-card-title>Author</mat-card-title>\n                    <mat-form-field class=\"git-form\">\n                        <input matInput [(ngModel)]=\"authorName\" name=\"authorName\" required\n                               placeholder=\"Name\" type=\"text\"/>\n                    </mat-form-field>\n                    <mat-form-field class=\"git-form\">\n                        <input matInput [(ngModel)]=\"authorEmail\" name=\"authorEmail\" required\n                               placeholder=\"Email\" type=\"text\"/>\n                    </mat-form-field>\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Branch\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxLayout=\"column\">\n                    <mat-form-field fxFlexOffset=\"20px\">\n                        <mat-select placeholder=\"Choose branch\" [(ngModel)]=\"branch\" name=\"branch\">\n                            <mat-option *ngFor=\"let b of branches\" [value]=\"b.name\">\n                                {{b.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        New branch\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxLayout=\"column\">\n                    <mat-form-field class=\"git-form\">\n                        <input matInput [(ngModel)]=\"newbranch\" name=\"newbranch\" required\n                               placeholder=\"Name\" type=\"text\"/>\n                    </mat-form-field>\n                    <mat-form-field fxFlexOffset=\"20px\">\n                        <mat-select placeholder=\"Branching from\" [(ngModel)]=\"startingbranch\" name=\"startingbranch\">\n                            <mat-option *ngFor=\"let b of branches\" [value]=\"b.name\">\n                                {{b.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <div fxFlexOffset=\"20px\">\n                        <button type=\"button\" (click)=\"addBranch(newbranch,startingbranch)\" mat-raised-button\n                                color=\"primary\">\n                            Add\n                            Branch!\n                        </button>\n                    </div>\n                </mat-card>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Merge branches\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxLayout=\"column\">\n                    <mat-form-field fxFlexOffset=\"20px\">\n                        <mat-select placeholder=\"Merge\" [(ngModel)]=\"mergefrom\" name=\"mergefrom\">\n                            <mat-option *ngFor=\"let b of branches\" [value]=\"b.name\">\n                                {{b.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field fxFlexOffset=\"20px\">\n                        <mat-select placeholder=\"Into\" [(ngModel)]=\"mergeto\" name=\"mergeto\">\n                            <mat-option *ngFor=\"let b of branches\" [value]=\"b.name\">\n                                {{b.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <div fxFlexOffset=\"20px\">\n                        <button type=\"button\" (click)=\"mergeBranches(mergefrom,mergeto)\" mat-raised-button\n                                color=\"primary\">\n                            Merge\n                            branches!\n                        </button>\n                    </div>\n                </mat-card>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </form>\n\n    <div fxFlex=\"45\">\n        <canvas id=\"gitGraph\"></canvas>\n    </div>\n\n</div>\n\n\n<!-- <div>Author: {{ authorName }} &lt;{{authorEmail}}&gt;</div>\n<div>Form value: {{ gitdashboardform.value | json }}</div> -->"

/***/ }),

/***/ "./src/app/components/git-dashboard/git-dashboard.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/git-dashboard/git-dashboard.ts ***!
  \***********************************************************/
/*! exports provided: GitDashboardComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitDashboardComp", function() { return GitDashboardComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitDashboardComp = /** @class */ (function () {
    function GitDashboardComp() {
        /**
         * Master branch
         * @type {string}
         */
        this.master = "master";
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////   MODELS   //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Model - Author name
         * @type {string}
         */
        this.authorName = 'Antonio Pastorino';
        /**
         * Model - Author email
         * @type {string}
         */
        this.authorEmail = 'antonio.pastorino@gmail.com';
        /**
         * Model - Nome branch per il commit
         * @type {string}
         */
        this.branch = 'master';
        /**
         * Model - Nome nuovo branch
         * @type {string}
         */
        this.newbranch = '';
        /**
         *  Model - Message
         * @type {string}
         */
        this.message = 'This is a commit message';
        /**
         *
         * @type {string}
         */
        this.startingbranch = this.master;
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////   GESTIONE DEL GRAFO   ////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Template del grafo
         * @type {boolean}
         */
        this.graphTemplate = false;
        /**
         * Grafo git
         * @type {boolean}
         */
        this.graph = false;
        /**
         * Restistuisce il grafo git
         */
        this.getGraph = function () {
            this.initGraph();
            return this.graph;
        };
        /**
         * Inizializza il template del grafo git
         */
        this.initGraphTemplate = function () {
            if (!this.graphTemplate) {
                var templateConfig = {
                    colors: ["#467CC3", "#CB443C", "#ddd"],
                    branch: {
                        lineWidth: 6,
                        spacingX: 50,
                        showLabel: true,
                    },
                    commit: {
                        spacingY: -80,
                        dot: {
                            size: 10
                        },
                        message: {
                            displayAuthor: true,
                            displayBranch: false,
                            displayHash: false,
                            font: "normal 10pt Verdana"
                        },
                        shouldDisplayTooltipsInCompactMode: false,
                        tooltipHTMLFormatter: function (commit) {
                            return "" + commit.sha1 + "" + ": " + commit.message;
                        }
                    }
                };
                this.graphTemplate = new GitGraph.Template(templateConfig);
            }
        };
        /**
         * Inizializza il grafo git
         */
        this.initGraph = function () {
            this.initGraphTemplate();
            if (!this.graph) {
                this.graph = new GitGraph({
                    reverseArrow: false,
                    orientation: "vertical",
                    mode: "extended",
                    template: this.graphTemplate
                });
            }
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////   GESTIONE DEI BRANCHES   ///////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Elenco di branches attivi
         * @type {any[]}
         */
        this.branches = [];
        /**
         * Verifica se un branch è già stato creato
         * @param branch
         * @returns {boolean}
         */
        this.hasBranch = function (branch) {
            var res = false;
            this.branches.forEach(function (el) {
                if (el.name == branch) {
                    res = true;
                }
            });
            return res;
        };
        /**
         * Recupera e restituisce un determinato branch
         *
         * @param branch
         * @returns {any}
         */
        this.getBranch = function (branch) {
            var res = null;
            this.branches.forEach(function (el) {
                if (el.name == branch) {
                    res = el;
                }
            });
            return res;
        };
        /**
         * Aggiunge un nuovo branch a partire dalla head corrente
         * @param branch
         * @returns {any}
         */
        this.addNewBranch = function (branch) {
            if (!this.hasBranch(branch)) {
                var new_branch = this.getGraph().branch({ name: branch });
                this.branches.push(new_branch);
                return new_branch;
            }
            else {
                return this.getBranch(branch);
            }
        };
        /**
         * Biforca un nuovo branch a partire da un branch esistente
         * @param branchName
         * @param {string} startingFrom
         * @returns {any}
         */
        this.addBranch = function (branchName, startingFrom) {
            if (startingFrom === void 0) { startingFrom = 'master'; }
            if (branchName == this.master) {
                this.addNewBranch(branchName);
            }
            if (!this.hasBranch(branchName)) {
                var starting_branch = void 0;
                if (!this.hasBranch(startingFrom)) {
                    starting_branch = this.addNewBranch(startingFrom);
                }
                else {
                    starting_branch = this.getBranch(startingFrom);
                }
                var new_branch = starting_branch.branch({
                    name: branchName,
                    parentBranch: starting_branch
                });
                this.branches.push(new_branch);
                return new_branch;
            }
            else {
                return this.getBranch(branchName);
            }
        };
    }
    GitDashboardComp.prototype.ngOnInit = function () {
        console.log("Initializing...");
        this.initGraph();
        console.log("Graph initialized");
        console.log("Creating master");
        this.addBranch(this.master);
        console.log("Master created");
        console.log("Making a first commit...");
        this.getBranch(this.master).commit({
            message: "First commit",
            author: "Antonio Pastorino <antonio.pastorino@gmail.com>"
        });
        console.log("Done! Ready!");
    };
    /**
     * Submit del form per creare un commit
     */
    GitDashboardComp.prototype.onSubmit = function () {
        var branch;
        var branch_name = this.branch;
        if (this.hasBranch(branch_name)) {
            branch = this.getBranch(branch_name);
        }
        else {
            if (branch_name == this.master) {
                branch = this.addNewBranch(branch_name);
            }
            else {
                branch = this.addBranch(branch_name);
            }
        }
        //beregister.merge(staging); // merges beregister in staging
        var commit_author = this.authorName + "<" + this.authorEmail + ">";
        var commit_message = this.message;
        branch.commit({
            message: commit_message,
            author: commit_author
        });
    };
    GitDashboardComp.prototype.mergeBranches = function (branchName, destination) {
        if (this.hasBranch(branchName) && this.hasBranch(destination)) {
            var branch_1 = this.getBranch(branchName);
            var destination_branch = this.getBranch(destination);
            branch_1.merge(destination_branch);
        }
    };
    GitDashboardComp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'git-dashboard',
            template: __webpack_require__(/*! ./git-dashboard.html */ "./src/app/components/git-dashboard/git-dashboard.html"),
            styles: [__webpack_require__(/*! ./git-dashboard.css */ "./src/app/components/git-dashboard/git-dashboard.css")]
        })
    ], GitDashboardComp);
    return GitDashboardComp;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoniopastorino/projects/gittype/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map