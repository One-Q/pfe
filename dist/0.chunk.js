webpackJsonpac__name_([0],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__problems_module__ = __webpack_require__(1110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsModule", function() { return __WEBPACK_IMPORTED_MODULE_0__problems_module__["a"]; });



/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problems_service__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(170);






var ProblemFormComponent = (function () {
    function ProblemFormComponent(formBuilder, router, route, service, snackBar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.service = service;
        this.snackBar = snackBar;
        this.machine = {};
        this.errorMessages = {};
        this.image = {};
    }
    ProblemFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorMessages = {};
        this.sub = this.route.params.subscribe(function (params) {
            _this.machineName = params['machineName'];
        });
        this.validateMachineName();
        this.constructForm();
    };
    ProblemFormComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3000,
        });
    };
    ProblemFormComponent.prototype.validateMachineName = function () {
        var _this = this;
        this.service.machineNameValid(this.machineName).subscribe(function (data) {
            var obj = data.json();
            _this.machine = obj;
        }, function (err) {
            if (err) {
                _this.router.navigate(['**']);
            }
        });
    };
    ProblemFormComponent.prototype.constructForm = function () {
        this.form = this.formBuilder.group({
            User: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                    this.validateEmail
                ]],
            Name: [this.machineName, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                ]],
            Description: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                    this.validateDesc
                ]]
        });
    };
    ProblemFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProblemFormComponent.prototype.fileChange = function ($event) {
        var reader = new FileReader();
        if ($event.target.files && $event.target.files.length > 0) {
            var file = $event.target.files[0];
            this.file = file;
        }
    };
    ProblemFormComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.form.valid) {
            var obj = this.form.value;
            obj.image = this.file;
            this.service.createProblem(obj).subscribe(function (data) { return _this.openSnackBar('Votre demande a bien été enregistrée'); }, function (err) { console.log(err); });
        }
        else {
            console.log("erreur");
        }
    };
    ProblemFormComponent.prototype.validateEmail = function (c) {
        var EMAIL_REGEXP = /^.{2,20}\..{2,20}@(student\.vinci\.be|vinci\.be)$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    ProblemFormComponent.prototype.validateDesc = function (c) {
        var DESC_REGEXP = /^.{3,200}$/;
        return DESC_REGEXP.test(c.value) ? null : {
            validateDesc: {
                valid: false
            }
        };
    };
    return ProblemFormComponent;
}());
ProblemFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Component */])({
        template: __webpack_require__(1113),
        styles: [
            __webpack_require__(1114)
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__problems_service__["a" /* ProblemsService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatSnackBar */]])
], ProblemFormComponent);



/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_callApi__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_callApi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_callApi__);




var ProblemsService = (function () {
    function ProblemsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
    }
    ProblemsService.prototype.machineNameValid = function (machineName) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_callApi___default()() + ("pc/" + machineName));
    };
    ProblemsService.prototype.createProblem = function (problem) {
        var form = new FormData();
        form.append('Name', problem['Name']);
        form.append('Description', problem['Description']);
        form.append('User', problem['User']);
        form.append('image', problem['image']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_callApi___default()() + "problems", form);
    };
    return ProblemsService;
}());
ProblemsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]])
], ProblemsService);



/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__problems_routes__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__problem_form_problem_form_component__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_material_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__problems_service__ = __webpack_require__(1109);










var ProblemsModule = (function () {
    function ProblemsModule() {
    }
    return ProblemsModule;
}());
ProblemsModule.routes = __WEBPACK_IMPORTED_MODULE_6__problems_routes__["a" /* routes */];
ProblemsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__problem_form_problem_form_component__["a" /* ProblemFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__problems_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__problems_service__["a" /* ProblemsService */]]
    })
], ProblemsModule);



/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__problem_form_problem_form_component__ = __webpack_require__(1108);

var routes = [
    {
        path: '', children: [
            { path: ':machineName', component: __WEBPACK_IMPORTED_MODULE_0__problem_form_problem_form_component__["a" /* ProblemFormComponent */] }
        ]
    }
];


/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(undefined);
// imports


// module
exports.push([module.i, "h2 {\r\n  color: #686B79;\r\n}\r\n\r\n.problemContainer {\r\n  margin-top: 50px;\r\n}\r\n\r\n.problemForm {\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n}\r\n\r\n.problemForm form {\r\n  width: 100%;\r\n}\r\n\r\n.problemForm .inputFW {\r\n  width: 100%;\r\n}\r\n\r\nlabel {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}", ""]);

// exports


/***/ }),

/***/ 1113:
/***/ (function(module, exports) {

module.exports = "<div class=\"problemContainer\">\r\n  <div class=\"problemForm\">\r\n      <h2>Soumission de problème</h2>\r\n      <h3 class=\"success\">{{response}}</h3>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" *ngIf=\"machine\">\r\n        <p>\r\n          <mat-form-field class=\"inputFW\">\r\n            <input matInput formControlName=\"User\" placeholder=\"Adresse email\">\r\n            <mat-error>L'adresse email est requise et doit être une adresse de Vinci</mat-error>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field class=\"inputFW\">\r\n            <input matInput value=\"{{machineName}}\" placeholder=\"Nom de la machine\" disabled>\r\n            <mat-error>Le nom de la machine est requis</mat-error>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field class=\"inputFW\">\r\n            <textarea matInput placeholder=\"Description du problème (max 200 caractères)\" formControlName=\"Description\" rows=\"3\"></textarea>\r\n            <mat-error>La description est requise</mat-error>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <label>Image (Optionnel)</label><br><br>\r\n          <input type=\"file\" (change)=\"fileChange($event)\" name=\"image\" accept=\".png, .jpg, .jpeg, .gif, .svg\"/>\r\n        </p>\r\n        <button mat-raised-button color=\"primary\">Envoyer</button>\r\n      </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1112);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=0.chunk.js.map