(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marca-marca-module"],{

/***/ "./src/app/marca/crear-marca/crear-marca.component.css":
/*!*************************************************************!*\
  !*** ./src/app/marca/crear-marca/crear-marca.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marca {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.requerido {\r\n    color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyY2EvY3JlYXItbWFyY2EvY3JlYXItbWFyY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFyY2EvY3JlYXItbWFyY2EvY3JlYXItbWFyY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJjYSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJlcXVlcmlkbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/marca/crear-marca/crear-marca.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marca/crear-marca/crear-marca.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marca\">\n  <div *ngIf=\"errores?.length > 0\">\n      <ngb-alert *ngFor=\"let error of errores\" type=\"danger\" (close)=\"closeAlert(error)\">{{ error }}</ngb-alert>\n  </div>\n\n  <div *ngIf=\"respuesta.status\">\n      <ngb-alert type=\"success\" [dismissible]=\"false\">{{respuesta.msg}}</ngb-alert>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && registrarMarca()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"nombre\">Nombre<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"nombre\" \n                        [(ngModel)]=\"marca.nombre\" #nombre=\"ngModel\" pattern=\"[A-Za-z ]+\" maxlength=\"100\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required />\n                  <div *ngIf=\"f.submitted && nombre.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"nombre.errors.required\">El nombre es requerido</div>\n                      <div *ngIf=\"nombre.errors.pattern\">El nombre contiene formato incorrecto</div>\n                      <div *ngIf=\"nombre.errors.maxlength\">El nombre no puede sobrepasar los 100 caracteres</div>\n                  </div>\n              </div>\n            </div>\n  \n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"referencia\">Referencia<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"referencia\" [(ngModel)]=\"marca.referencia\" maxlength=\"15\"\n                        #referencia=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && referencia.invalid }\" \n                        required />\n                  <div *ngIf=\"f.submitted && referencia.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"referencia.errors.required\">La referencia es requerida</div>\n                      <div *ngIf=\"referencia.errors.maxlength\">La referencia no puede sobrepasar los 15 caracteres</div>\n                  </div>\n              </div>\n            </div>\n        </div><br>\n  \n        <div class=\"row\">\n            \n            <div class=\"col-sm-6\">\n              <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/marca/listado\">\n                <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n              </a>\n            </div>\n  \n            <div class=\"col-sm-6\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\">Registrar</button>\n            </div>\n  \n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/marca/crear-marca/crear-marca.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marca/crear-marca/crear-marca.component.ts ***!
  \************************************************************/
/*! exports provided: CrearMarcaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearMarcaComponent", function() { return CrearMarcaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marca_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marca.service */ "./src/app/marca/marca.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearMarcaComponent = /** @class */ (function () {
    function CrearMarcaComponent(marcaService, router) {
        this.marcaService = marcaService;
        this.router = router;
        this.alerts = [];
        this.errores = [];
        this.respuesta = {};
        this.marca = {
            nombre: null,
            referencia: null
        };
    }
    CrearMarcaComponent.prototype.ngOnInit = function () {
    };
    CrearMarcaComponent.prototype.registrarMarca = function () {
        var _this = this;
        var that = this;
        var keys;
        this.errores = [];
        this.marcaService.postMarca(this.marca).subscribe(function (datos) {
            if (!datos.status) {
                keys = Object.keys(datos.validator);
                keys.forEach(function (item) {
                    _this.errores.push(datos.validator['' + item]);
                });
            }
            else {
                _this.respuesta = datos;
                setTimeout(function () {
                    that.router.navigate(['/marca/listado']);
                }, 1000);
            }
        }, function (error) { return console.log(error); });
    };
    CrearMarcaComponent.prototype.closeAlert = function (error) {
        this.errores.splice(this.alerts.indexOf(error), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CrearMarcaComponent.prototype, "alerts", void 0);
    CrearMarcaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-marca',
            template: __webpack_require__(/*! ./crear-marca.component.html */ "./src/app/marca/crear-marca/crear-marca.component.html"),
            styles: [__webpack_require__(/*! ./crear-marca.component.css */ "./src/app/marca/crear-marca/crear-marca.component.css")],
            providers: [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"]]
        }),
        __metadata("design:paramtypes", [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrearMarcaComponent);
    return CrearMarcaComponent;
}());



/***/ }),

/***/ "./src/app/marca/editar-marca/editar-marca.component.css":
/*!***************************************************************!*\
  !*** ./src/app/marca/editar-marca/editar-marca.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marca {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.requerido {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyY2EvZWRpdGFyLW1hcmNhL2VkaXRhci1tYXJjYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXJjYS9lZGl0YXItbWFyY2EvZWRpdGFyLW1hcmNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyY2Ege1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZXF1ZXJpZG8ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/marca/editar-marca/editar-marca.component.html":
/*!****************************************************************!*\
  !*** ./src/app/marca/editar-marca/editar-marca.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marca\">\n  <div *ngIf=\"errores?.length > 0\">\n      <ngb-alert *ngFor=\"let error of errores\" type=\"danger\" (close)=\"closeAlert(error)\">{{ error }}</ngb-alert>\n  </div>\n\n  <div *ngIf=\"respuesta.status\">\n      <ngb-alert type=\"success\" [dismissible]=\"false\">{{respuesta.msg}}</ngb-alert>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && actualizarMarca()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"nombre\">Nombre<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"nombre\" \n                        [(ngModel)]=\"marca.nombre\" #nombre=\"ngModel\" pattern=\"[A-Za-z ]+\" maxlength=\"100\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required />\n                  <div *ngIf=\"f.submitted && nombre.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"nombre.errors.required\">El nombre es requerido</div>\n                      <div *ngIf=\"nombre.errors.pattern\">El nombre contiene formato incorrecto</div>\n                      <div *ngIf=\"nombre.errors.maxlength\">El nombre no puede sobrepasar los 100 caracteres</div>\n                  </div>\n              </div>\n            </div>\n  \n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"referencia\">Referencia<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"referencia\" [(ngModel)]=\"marca.referencia\" maxlength=\"15\"\n                        #referencia=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && referencia.invalid }\" \n                        required />\n                  <div *ngIf=\"f.submitted && referencia.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"referencia.errors.required\">La referencia es requerida</div>\n                      <div *ngIf=\"referencia.errors.maxlength\">La referencia no puede sobrepasar los 15 caracteres</div>\n                  </div>\n              </div>\n            </div>\n        </div><br>\n  \n        <div class=\"row\">\n            \n            <div class=\"col-sm-6\">\n              <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/marca/listado\">\n                <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n              </a>\n            </div>\n  \n            <div class=\"col-sm-6\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\">Actualizar</button>\n            </div>\n  \n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/marca/editar-marca/editar-marca.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/marca/editar-marca/editar-marca.component.ts ***!
  \**************************************************************/
/*! exports provided: EditarMarcaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarMarcaComponent", function() { return EditarMarcaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marca_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marca.service */ "./src/app/marca/marca.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarMarcaComponent = /** @class */ (function () {
    function EditarMarcaComponent(marcaService, router, route) {
        this.marcaService = marcaService;
        this.router = router;
        this.route = route;
        this.alerts = [];
        this.errores = [];
        this.respuesta = {};
        this.marca = {
            id: null,
            nombre: null,
            referencia: null
        };
    }
    EditarMarcaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.marca.id = params['id']; });
        this.cargarMarca();
    };
    EditarMarcaComponent.prototype.cargarMarca = function () {
        var _this = this;
        this.marcaService.getMarca(this.marca.id).subscribe(function (datos) {
            _this.marca = datos.data;
        }, function (error) { return console.log(error); });
    };
    EditarMarcaComponent.prototype.actualizarMarca = function () {
        var _this = this;
        var that = this;
        var keys;
        this.errores = [];
        this.marcaService.putMarca(this.marca).subscribe(function (datos) {
            if (!datos.status) {
                keys = Object.keys(datos.validator);
                keys.forEach(function (item) {
                    _this.errores.push(datos.validator['' + item]);
                });
            }
            else {
                _this.respuesta = datos;
                setTimeout(function () {
                    that.router.navigate(['/marca/listado']);
                }, 2000);
            }
        }, function (error) { return console.log(error); });
    };
    EditarMarcaComponent.prototype.closeAlert = function (error) {
        this.errores.splice(this.alerts.indexOf(error), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditarMarcaComponent.prototype, "alerts", void 0);
    EditarMarcaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-marca',
            template: __webpack_require__(/*! ./editar-marca.component.html */ "./src/app/marca/editar-marca/editar-marca.component.html"),
            styles: [__webpack_require__(/*! ./editar-marca.component.css */ "./src/app/marca/editar-marca/editar-marca.component.css")],
            providers: [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"]]
        }),
        __metadata("design:paramtypes", [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditarMarcaComponent);
    return EditarMarcaComponent;
}());



/***/ }),

/***/ "./src/app/marca/listar-marcas/listar-marcas.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/marca/listar-marcas/listar-marcas.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listado {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 1px;\r\n}\r\n\r\n.agregar-marca {\r\n    text-align: end;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sep {\r\n    margin-right: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyY2EvbGlzdGFyLW1hcmNhcy9saXN0YXItbWFyY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9tYXJjYS9saXN0YXItbWFyY2FzL2xpc3Rhci1tYXJjYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YWRvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG59XHJcblxyXG4uYWdyZWdhci1tYXJjYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/marca/listar-marcas/listar-marcas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/marca/listar-marcas/listar-marcas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"listado\">\n  <div *ngIf=\"respuesta?.type\">\n      <ngb-alert [type]=\"respuesta.type\" [dismissible]=\"false\">{{ respuesta?.msg }}</ngb-alert>\n  </div>\n  \n  <div class=\"agregar-marca\">\n    <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/marca/crear\">\n      <i class=\"mdi mdi-plus\"></i> Agregar marca\n    </a>\n  </div>\n\n  <div class=\"table-responsive\">\n      <table class=\"table table-striped\">\n        <thead>\n          <th>Nombre</th>\n          <th>Referencia</th>\n          <th>Acciones</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of marcas.data; let i = index\">\n            <td>{{item?.nombre}}</td>\n            <td>{{item?.referencia}}</td>\n            <td>\n              <!-- <a class=\"btn btn-outline-dark\" placement=\"top\" ngbTooltip=\"Eliminar\"><i class=\"mdi mdi-delete-forever\"></i></a> -->\n              <a class=\"btn btn-outline-dark btn-sm sep\" routerLink=\"/marca/detalle/{{item?.id}}\">Ver</a>\n              <a class=\"btn btn-outline-dark btn-sm sep\" routerLink=\"/marca/editar/{{item?.id}}\">Editar</a>\n              <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Eliminar\">\n                  <button class=\"btn btn-outline-danger btn-sm\" ngbDropdownToggle>Eliminar</button>\n                  <div class=\"dropdown-menu\" ngbDropdownMenu>\n                    <button class=\"dropdown-item\" (click)=\"eliminarMarca(item?.id, i)\">Click para confirmar</button>\n                  </div>\n                </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n  \n  <div class=\"text-center\">\n      <button class=\"btn btn-xs btn-primary\" (click)=\"changePage(marcas.prev_page_url)\" \n              *ngIf=\"marcas.prev_page_url\">\n        <span class=\"fa fa-angle-left\"></span>\n      </button>\n            Página {{marcas.current_page}} / {{marcas.last_page}}\n      <button class=\"btn btn-xs btn-primary\" (click)=\"changePage(marcas.next_page_url)\" \n              *ngIf=\"marcas.next_page_url\">\n        <span class=\"fa fa-angle-right\"></span>\n      </button>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/marca/listar-marcas/listar-marcas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/marca/listar-marcas/listar-marcas.component.ts ***!
  \****************************************************************/
/*! exports provided: ListarMarcasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarMarcasComponent", function() { return ListarMarcasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marca_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marca.service */ "./src/app/marca/marca.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarMarcasComponent = /** @class */ (function () {
    function ListarMarcasComponent(marcaService) {
        this.marcaService = marcaService;
        this.marcas = {
            data: []
        };
        this.respuesta = { type: null, msg: '' };
    }
    ListarMarcasComponent.prototype.ngOnInit = function () {
        this.cargarMarcas();
    };
    ListarMarcasComponent.prototype.cargarMarcas = function () {
        var _this = this;
        this.marcaService.getMarcasPaginado().subscribe(function (datos) {
            _this.marcas = datos.data;
        }, function (error) { return console.log(error); });
    };
    ListarMarcasComponent.prototype.eliminarMarca = function (marca_id, index) {
        var _this = this;
        var that = this;
        this.marcaService.deleteMarca(marca_id).subscribe(function (datos) {
            _this.respuesta = datos;
            _this.respuesta.type = 'danger';
            if (datos.status) {
                _this.respuesta.type = 'success';
                _this.marcas.data.splice(index, 1);
            }
            setTimeout(function () {
                that.respuesta = { type: null, msg: '' };
            }, 1000);
        }, function (error) { return console.log(error); });
    };
    ListarMarcasComponent.prototype.changePage = function (url) {
        var _this = this;
        this.marcaService.changePage(url).subscribe(function (datos) {
            _this.marcas = datos.data;
        }, function (error) { return console.log(error); });
    };
    ListarMarcasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-marcas',
            template: __webpack_require__(/*! ./listar-marcas.component.html */ "./src/app/marca/listar-marcas/listar-marcas.component.html"),
            styles: [__webpack_require__(/*! ./listar-marcas.component.css */ "./src/app/marca/listar-marcas/listar-marcas.component.css")],
            providers: [_marca_service__WEBPACK_IMPORTED_MODULE_1__["MarcaService"]]
        }),
        __metadata("design:paramtypes", [_marca_service__WEBPACK_IMPORTED_MODULE_1__["MarcaService"]])
    ], ListarMarcasComponent);
    return ListarMarcasComponent;
}());



/***/ }),

/***/ "./src/app/marca/marca.module.ts":
/*!***************************************!*\
  !*** ./src/app/marca/marca.module.ts ***!
  \***************************************/
/*! exports provided: MarcaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcaModule", function() { return MarcaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _marca_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marca.routing */ "./src/app/marca/marca.routing.ts");
/* harmony import */ var _listar_marcas_listar_marcas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listar-marcas/listar-marcas.component */ "./src/app/marca/listar-marcas/listar-marcas.component.ts");
/* harmony import */ var _editar_marca_editar_marca_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editar-marca/editar-marca.component */ "./src/app/marca/editar-marca/editar-marca.component.ts");
/* harmony import */ var _crear_marca_crear_marca_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crear-marca/crear-marca.component */ "./src/app/marca/crear-marca/crear-marca.component.ts");
/* harmony import */ var _ver_marca_ver_marca_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ver-marca/ver-marca.component */ "./src/app/marca/ver-marca/ver-marca.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MarcaModule = /** @class */ (function () {
    function MarcaModule() {
    }
    MarcaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_marca_routing__WEBPACK_IMPORTED_MODULE_6__["MarcaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _listar_marcas_listar_marcas_component__WEBPACK_IMPORTED_MODULE_7__["ListarMarcasComponent"],
                _editar_marca_editar_marca_component__WEBPACK_IMPORTED_MODULE_8__["EditarMarcaComponent"],
                _crear_marca_crear_marca_component__WEBPACK_IMPORTED_MODULE_9__["CrearMarcaComponent"],
                _ver_marca_ver_marca_component__WEBPACK_IMPORTED_MODULE_10__["VerMarcaComponent"]
            ]
        })
    ], MarcaModule);
    return MarcaModule;
}());



/***/ }),

/***/ "./src/app/marca/marca.routing.ts":
/*!****************************************!*\
  !*** ./src/app/marca/marca.routing.ts ***!
  \****************************************/
/*! exports provided: MarcaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcaRoutes", function() { return MarcaRoutes; });
/* harmony import */ var _listar_marcas_listar_marcas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-marcas/listar-marcas.component */ "./src/app/marca/listar-marcas/listar-marcas.component.ts");
/* harmony import */ var _editar_marca_editar_marca_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-marca/editar-marca.component */ "./src/app/marca/editar-marca/editar-marca.component.ts");
/* harmony import */ var _crear_marca_crear_marca_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-marca/crear-marca.component */ "./src/app/marca/crear-marca/crear-marca.component.ts");
/* harmony import */ var _ver_marca_ver_marca_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-marca/ver-marca.component */ "./src/app/marca/ver-marca/ver-marca.component.ts");




var MarcaRoutes = [
    {
        path: '',
        children: [
            {
                path: 'listado',
                component: _listar_marcas_listar_marcas_component__WEBPACK_IMPORTED_MODULE_0__["ListarMarcasComponent"],
                data: {
                    title: 'Marcas',
                    urls: [
                        { title: 'Marcas', url: '/marca/listado' }
                    ]
                }
            },
            {
                path: 'crear',
                component: _crear_marca_crear_marca_component__WEBPACK_IMPORTED_MODULE_2__["CrearMarcaComponent"],
                data: {
                    title: 'Marcas',
                    urls: [
                        { title: 'Marcas', url: '/marca/listado' },
                        { title: 'Registrar marca' }
                    ]
                }
            },
            {
                path: 'editar/:id',
                component: _editar_marca_editar_marca_component__WEBPACK_IMPORTED_MODULE_1__["EditarMarcaComponent"],
                data: {
                    title: 'Marcas',
                    urls: [
                        { title: 'Marcas', url: '/marca/listado' },
                        { title: 'Editar marca' }
                    ]
                }
            },
            {
                path: 'detalle/:id',
                component: _ver_marca_ver_marca_component__WEBPACK_IMPORTED_MODULE_3__["VerMarcaComponent"],
                data: {
                    title: 'Marcas',
                    urls: [
                        { title: 'Marcas', url: '/marca/listado' },
                        { title: 'Detalle' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/marca/marca.service.ts":
/*!****************************************!*\
  !*** ./src/app/marca/marca.service.ts ***!
  \****************************************/
/*! exports provided: MarcaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcaService", function() { return MarcaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarcaService = /** @class */ (function () {
    function MarcaService(http) {
        this.http = http;
        this.base_url = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url_local : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url_public;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    ;
    MarcaService.prototype.getMarcasPaginado = function () {
        return this.http.get(this.base_url + 'marcas/listar/paginado');
    };
    MarcaService.prototype.changePage = function (url) {
        return this.http.get(url);
    };
    MarcaService.prototype.getMarcas = function () {
        return this.http.get(this.base_url + 'marcas');
    };
    MarcaService.prototype.getMarca = function (marca_id) {
        return this.http.get(this.base_url + 'marcas/' + marca_id);
    };
    MarcaService.prototype.postMarca = function (datos) {
        return this.http.post(this.base_url + 'marcas', datos);
    };
    MarcaService.prototype.putMarca = function (datos) {
        return this.http.put(this.base_url + 'marcas/' + datos.id, datos);
    };
    MarcaService.prototype.deleteMarca = function (marca_id) {
        return this.http.delete(this.base_url + 'marcas/' + marca_id);
    };
    MarcaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarcaService);
    return MarcaService;
}());



/***/ }),

/***/ "./src/app/marca/ver-marca/ver-marca.component.css":
/*!*********************************************************!*\
  !*** ./src/app/marca/ver-marca/ver-marca.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marca {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyY2EvdmVyLW1hcmNhL3Zlci1tYXJjYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9tYXJjYS92ZXItbWFyY2EvdmVyLW1hcmNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyY2Ege1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/marca/ver-marca/ver-marca.component.html":
/*!**********************************************************!*\
  !*** ./src/app/marca/ver-marca/ver-marca.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marca\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Nombre</b>:</div>\n        <div class=\"col-sm-8\">{{marca?.nombre}}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4\"><b>Referencia</b>:</div>\n          <div class=\"col-sm-8\">{{marca?.referencia}}</div>\n      </div><br>\n  \n      <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/marca/listado\">\n              <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n            </a>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/marca/ver-marca/ver-marca.component.ts":
/*!********************************************************!*\
  !*** ./src/app/marca/ver-marca/ver-marca.component.ts ***!
  \********************************************************/
/*! exports provided: VerMarcaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerMarcaComponent", function() { return VerMarcaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marca_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marca.service */ "./src/app/marca/marca.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerMarcaComponent = /** @class */ (function () {
    function VerMarcaComponent(marcaService, router, route) {
        this.marcaService = marcaService;
        this.router = router;
        this.route = route;
        this.errores = [];
        this.respuesta = {};
        this.marca = {
            id: null,
            nombre: null,
            referencia: null
        };
    }
    VerMarcaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.marca.id = params['id']; });
        this.cargarMarca();
    };
    VerMarcaComponent.prototype.cargarMarca = function () {
        var _this = this;
        this.marcaService.getMarca(this.marca.id).subscribe(function (datos) {
            _this.marca = datos.data;
        }, function (error) { return console.log(error); });
    };
    VerMarcaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-marca',
            template: __webpack_require__(/*! ./ver-marca.component.html */ "./src/app/marca/ver-marca/ver-marca.component.html"),
            styles: [__webpack_require__(/*! ./ver-marca.component.css */ "./src/app/marca/ver-marca/ver-marca.component.css")],
            providers: [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"]]
        }),
        __metadata("design:paramtypes", [_marca_service__WEBPACK_IMPORTED_MODULE_2__["MarcaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], VerMarcaComponent);
    return VerMarcaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=marca-marca-module.js.map