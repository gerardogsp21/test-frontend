(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"],{

/***/ "./src/app/producto/crear-producto/crear-producto.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/producto/crear-producto/crear-producto.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".producto {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.requerido {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vY3JlYXItcHJvZHVjdG8vY3JlYXItcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG8vY3JlYXItcHJvZHVjdG8vY3JlYXItcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0byB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJlcXVlcmlkbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/producto/crear-producto/crear-producto.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/producto/crear-producto/crear-producto.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"producto\">\n  <div *ngIf=\"errores?.length > 0\">\n      <ngb-alert *ngFor=\"let error of errores\" type=\"danger\" (close)=\"closeAlert(error)\">{{ error }}</ngb-alert>\n  </div>\n\n  <div *ngIf=\"respuesta.status\">\n      <ngb-alert type=\"success\" [dismissible]=\"false\">{{respuesta.msg}}</ngb-alert>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && registrarProducto()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                  <label for=\"nombre\">Nombre<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"nombre\" \n                        [(ngModel)]=\"producto.nombre\" #nombre=\"ngModel\" pattern=\"[A-Za-z ]+\" maxlength=\"100\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required />\n                  <div *ngIf=\"f.submitted && nombre.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"nombre.errors.required\">El nombre es requerido</div>\n                      <div *ngIf=\"nombre.errors.pattern\">El nombre contiene formato incorrecto</div>\n                      <div *ngIf=\"nombre.errors.maxlength\">El nombre no puede sobrepasar los 100 caracteres</div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"talla\">Talla<span class=\"requerido\">*</span></label>\n                  <select class=\"form-control\" name=\"talla\" [(ngModel)]=\"producto.talla\" #talla=\"ngModel\" \n                     [ngClass]=\"{ 'is-invalid': f.submitted && talla.invalid }\" required >\n                    <option value=\"S\">S</option>\n                    <option value=\"M\">M</option>\n                    <option value=\"L\">L</option>\n                  </select>\n                  <div *ngIf=\"f.submitted && talla.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"talla.errors.required\">La talla es requerida</div>\n                  </div>\n                </div>  \n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"marca_id\">Marcas<span class=\"requerido\">*</span></label>\n                  <select class=\"form-control\" name=\"marca_id\" [(ngModel)]=\"producto.marca_id\" #marca_id=\"ngModel\" \n                    [ngClass]=\"{ 'is-invalid': f.submitted && marca_id.invalid }\" required >\n                    <option [value]=\"item?.id\" *ngFor=\"let item of marcas\">{{item.nombre}} - {{item.referencia}}</option>\n                  </select>\n                  <div *ngIf=\"f.submitted && marca_id.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"marca_id.errors.required\">La marca es requerida</div>\n                  </div>\n                </div>  \n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                  <div class=\"form-group\">\n                      <label for=\"fecha_embarque\">Fecha de embarque<span class=\"requerido\">*</span></label>\n                      <input type=\"date\" class=\"form-control\" name=\"fecha_embarque\" \n                            [(ngModel)]=\"producto.fecha_embarque\" #fecha_embarque=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && fecha_embarque.invalid }\" required />\n                      <div *ngIf=\"f.submitted && fecha_embarque.invalid\" class=\"invalid-feedback\">\n                          <div *ngIf=\"fecha_embarque.errors.required\">La fecha de embarque es requerida</div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                  <label for=\"cantidad_inventario\">Cantidad<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"cantidad_inventario\" \n                        [(ngModel)]=\"producto.cantidad_inventario\" #cantidad_inventario=\"ngModel\" pattern=\"[0-9]+\" maxlength=\"10\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && cantidad_inventario.invalid }\" required />\n                  <div *ngIf=\"f.submitted && cantidad_inventario.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"cantidad_inventario.errors.required\">La cantidad es requerida</div>\n                      <div *ngIf=\"cantidad_inventario.errors.pattern\">Debe ser un valor numerico entero</div>\n                      <div *ngIf=\"cantidad_inventario.errors.maxlength\">El cantidad no puede sobrepasar los 10 digitos</div>\n                  </div>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"observaciones\">Observaciones<span class=\"requerido\">*</span></label>\n                  <textarea type=\"text\" class=\"form-control\" name=\"observaciones\" \n                        [(ngModel)]=\"producto.observaciones\" #observaciones=\"ngModel\" maxlength=\"200\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && observaciones.invalid }\" required ></textarea>\n                  <div *ngIf=\"f.submitted && observaciones.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"observaciones.errors.required\">El observaciones es requerido</div>\n                      <div *ngIf=\"observaciones.errors.maxlength\">El observaciones no puede sobrepasar los 200 caracteres</div>\n                  </div>\n              </div>\n            </div>\n          </div>\n        <br>\n  \n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/producto/listado\">\n                <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n              </a>\n            </div>\n  \n            <div class=\"col-sm-6\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\">Registrar</button>\n            </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/producto/crear-producto/crear-producto.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/producto/crear-producto/crear-producto.component.ts ***!
  \*********************************************************************/
/*! exports provided: CrearProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoComponent", function() { return CrearProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearProductoComponent = /** @class */ (function () {
    function CrearProductoComponent(productoService, router) {
        this.productoService = productoService;
        this.router = router;
        this.marcas = [];
        this.errores = [];
        this.respuesta = {};
        this.producto = {
            nombre: null,
            talla: null,
            observaciones: null,
            marca_id: null,
            marca: {
                id: null,
                nombre: null
            },
            cantidad_inventario: null,
            fecha_embarque: null,
        };
    }
    CrearProductoComponent.prototype.ngOnInit = function () {
        this.cargarMarcas();
    };
    CrearProductoComponent.prototype.cargarMarcas = function () {
        var _this = this;
        this.productoService.getMarcas().subscribe(function (datos) {
            _this.marcas = datos.data;
        }, function (error) { return console.log(error); });
    };
    CrearProductoComponent.prototype.registrarProducto = function () {
        var _this = this;
        var that = this;
        var keys;
        this.errores = [];
        this.productoService.postProducto(this.producto).subscribe(function (datos) {
            if (!datos.status) {
                keys = Object.keys(datos.validator);
                keys.forEach(function (item) {
                    _this.errores.push(datos.validator['' + item]);
                });
            }
            else {
                _this.respuesta = datos;
                setTimeout(function () {
                    that.router.navigate(['/producto/listado']);
                }, 1000);
            }
        }, function (error) { return console.log(error); });
    };
    CrearProductoComponent.prototype.closeAlert = function (error) {
        this.errores.splice(this.errores.indexOf(error), 1);
    };
    CrearProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-producto',
            template: __webpack_require__(/*! ./crear-producto.component.html */ "./src/app/producto/crear-producto/crear-producto.component.html"),
            styles: [__webpack_require__(/*! ./crear-producto.component.css */ "./src/app/producto/crear-producto/crear-producto.component.css")],
            providers: [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrearProductoComponent);
    return CrearProductoComponent;
}());



/***/ }),

/***/ "./src/app/producto/editar-producto/editar-producto.component.css":
/*!************************************************************************!*\
  !*** ./src/app/producto/editar-producto/editar-producto.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".producto {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.requerido {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vZWRpdGFyLXByb2R1Y3RvL2VkaXRhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by9lZGl0YXItcHJvZHVjdG8vZWRpdGFyLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdG8ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZXF1ZXJpZG8ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/producto/editar-producto/editar-producto.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/producto/editar-producto/editar-producto.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"producto\">\n  <div *ngIf=\"errores?.length > 0\">\n      <ngb-alert *ngFor=\"let error of errores\" type=\"danger\" (close)=\"closeAlert(error)\">{{ error }}</ngb-alert>\n  </div>\n\n  <div *ngIf=\"respuesta.status\">\n      <ngb-alert type=\"success\" [dismissible]=\"false\">{{respuesta.msg}}</ngb-alert>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && actualizarProducto()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                  <label for=\"nombre\">Nombre<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"nombre\" \n                        [(ngModel)]=\"producto.nombre\" #nombre=\"ngModel\" pattern=\"[A-Za-z ]+\" maxlength=\"100\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required />\n                  <div *ngIf=\"f.submitted && nombre.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"nombre.errors.required\">El nombre es requerido</div>\n                      <div *ngIf=\"nombre.errors.pattern\">El nombre contiene formato incorrecto</div>\n                      <div *ngIf=\"nombre.errors.maxlength\">El nombre no puede sobrepasar los 100 caracteres</div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"talla\">Talla<span class=\"requerido\">*</span></label>\n                  <select class=\"form-control\" name=\"talla\" [(ngModel)]=\"producto.talla\">\n                    <option value=\"S\">S</option>\n                    <option value=\"M\">M</option>\n                    <option value=\"L\">L</option>\n                  </select>\n                </div>  \n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"talla\">Marcas<span class=\"requerido\">*</span></label>\n                  <select class=\"form-control\" name=\"marca_id\" [(ngModel)]=\"producto.marca_id\">\n                    <option [value]=\"item?.id\" *ngFor=\"let item of marcas\">{{item.nombre}} - {{item.referencia}}</option>\n                  </select>\n                </div>  \n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                  <div class=\"form-group\">\n                      <label for=\"fecha_embarque\">Fecha de embarque<span class=\"requerido\">*</span></label>\n                      <input type=\"date\" class=\"form-control\" name=\"fecha_embarque\" \n                            [(ngModel)]=\"producto.fecha_embarque\" #fecha_embarque=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && fecha_embarque.invalid }\" required />\n                      <div *ngIf=\"f.submitted && fecha_embarque.invalid\" class=\"invalid-feedback\">\n                          <div *ngIf=\"fecha_embarque.errors.required\">La fecha de embarque es requerida</div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                  <label for=\"cantidad_inventario\">Cantidad<span class=\"requerido\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"cantidad_inventario\" \n                        [(ngModel)]=\"producto.cantidad_inventario\" #cantidad_inventario=\"ngModel\" pattern=\"[0-9]+\" maxlength=\"10\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && cantidad_inventario.invalid }\" required />\n                  <div *ngIf=\"f.submitted && cantidad_inventario.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"cantidad_inventario.errors.required\">La cantidad es requerida</div>\n                      <div *ngIf=\"cantidad_inventario.errors.pattern\">Debe ser un valor numerico entero</div>\n                      <div *ngIf=\"cantidad_inventario.errors.maxlength\">El cantidad no puede sobrepasar los 10 digitos</div>\n                  </div>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"observaciones\">Observaciones<span class=\"requerido\">*</span></label>\n                  <textarea type=\"text\" class=\"form-control\" name=\"observaciones\" \n                        [(ngModel)]=\"producto.observaciones\" #observaciones=\"ngModel\" maxlength=\"200\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && observaciones.invalid }\" required ></textarea>\n                  <div *ngIf=\"f.submitted && observaciones.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"observaciones.errors.required\">El observaciones es requerido</div>\n                      <div *ngIf=\"observaciones.errors.maxlength\">El observaciones no puede sobrepasar los 200 caracteres</div>\n                  </div>\n              </div>\n            </div>\n          </div>\n        <br>\n  \n        <div class=\"row\">\n            \n            <div class=\"col-sm-6\">\n              <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/producto/listado\">\n                <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n              </a>\n            </div>\n  \n            <div class=\"col-sm-6\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\">Actualizar</button>\n            </div>\n  \n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/producto/editar-producto/editar-producto.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/producto/editar-producto/editar-producto.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoComponent", function() { return EditarProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarProductoComponent = /** @class */ (function () {
    function EditarProductoComponent(productoService, router, route) {
        this.productoService = productoService;
        this.router = router;
        this.route = route;
        this.marcas = [];
        this.errores = [];
        this.respuesta = {};
        this.producto = {
            id: null,
            nombre: null,
            talla: null,
            observaciones: null,
            marca_id: null,
            marca: {
                id: null,
                nombre: null
            },
            cantidad_inventario: null,
            fecha_embarque: null,
        };
    }
    EditarProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.producto.id = params['id']; });
        this.cargarProducto();
        this.cargarMarcas();
    };
    EditarProductoComponent.prototype.cargarProducto = function () {
        var _this = this;
        this.productoService.getProducto(this.producto.id).subscribe(function (datos) {
            _this.producto = datos.data;
        }, function (error) { return console.log(error); });
    };
    EditarProductoComponent.prototype.cargarMarcas = function () {
        var _this = this;
        this.productoService.getMarcas().subscribe(function (datos) {
            _this.marcas = datos.data;
        }, function (error) { return console.log(error); });
    };
    EditarProductoComponent.prototype.actualizarProducto = function () {
        var _this = this;
        var that = this;
        var keys;
        this.errores = [];
        this.productoService.putProducto(this.producto).subscribe(function (datos) {
            if (!datos.status) {
                keys = Object.keys(datos.validator);
                keys.forEach(function (item) {
                    _this.errores.push(datos.validator['' + item]);
                });
            }
            else {
                _this.respuesta = datos;
                setTimeout(function () {
                    that.router.navigate(['/producto/listado']);
                }, 2000);
            }
        }, function (error) { return console.log(error); });
    };
    EditarProductoComponent.prototype.closeAlert = function (error) {
        this.errores.splice(this.errores.indexOf(error), 1);
    };
    EditarProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-producto',
            template: __webpack_require__(/*! ./editar-producto.component.html */ "./src/app/producto/editar-producto/editar-producto.component.html"),
            styles: [__webpack_require__(/*! ./editar-producto.component.css */ "./src/app/producto/editar-producto/editar-producto.component.css")],
            providers: [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditarProductoComponent);
    return EditarProductoComponent;
}());



/***/ }),

/***/ "./src/app/producto/listar-productos/listar-productos.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/producto/listar-productos/listar-productos.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listado {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 1px;\r\n}\r\n\r\n.agregar-producto {\r\n    text-align: end;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sep {\r\n    margin-right: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vbGlzdGFyLXByb2R1Y3Rvcy9saXN0YXItcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by9saXN0YXItcHJvZHVjdG9zL2xpc3Rhci1wcm9kdWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YWRvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG59XHJcblxyXG4uYWdyZWdhci1wcm9kdWN0byB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/producto/listar-productos/listar-productos.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/producto/listar-productos/listar-productos.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"listado\">\n  <div *ngIf=\"respuesta?.type\">\n      <ngb-alert [type]=\"respuesta.type\" [dismissible]=\"false\">{{ respuesta?.msg }}</ngb-alert>\n  </div>\n\n  <div class=\"agregar-producto\">\n    <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/producto/crear\">\n      <i class=\"mdi mdi-plus\"></i> Agregar producto\n    </a>\n  </div>\n\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead>\n        <th>Nombre</th>\n        <th>Talla</th>\n        <th>Obervaciones</th>\n        <th>Marca</th>\n        <th>Cantidad en inventario</th>\n        <th>Fecha inventario</th>\n        <th>Acciones</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of productos.data; let i = index\">\n          <td>{{item?.nombre}}</td>\n          <td>{{item?.talla}}</td>\n          <td>{{item?.observaciones}}</td>\n          <td>{{item?.marca.nombre}}</td>\n          <td>{{item?.cantidad_inventario}}</td>\n          <td>{{item?.fecha_embarque}}</td>\n          <td>\n            <!-- <a class=\"btn btn-outline-dark\" placement=\"top\" ngbTooltip=\"Eliminar\"><i class=\"mdi mdi-delete-forever\"></i></a> -->\n            <a class=\"btn btn-outline-dark btn-sm sep\" routerLink=\"/producto/detalle/{{item?.id}}\">Ver</a>\n            <a class=\"btn btn-outline-dark btn-sm sep\" routerLink=\"/producto/editar/{{item?.id}}\">Editar</a>\n            <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Eliminar\">\n                <button class=\"btn btn-outline-danger btn-sm\" ngbDropdownToggle>Eliminar</button>\n                <div class=\"dropdown-menu\" ngbDropdownMenu>\n                  <button class=\"dropdown-item\" (click)=\"eliminarProducto(item?.id, i)\">Click para confirmar</button>\n                </div>\n              </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  <div class=\"text-center\">\n      <button class=\"btn btn-xs btn-primary\" (click)=\"changePage(productos?.prev_page_url)\" \n              *ngIf=\"productos?.prev_page_url\">\n        <span class=\"fa fa-angle-left\"></span>\n      </button>\n            Página {{productos?.current_page}} / {{productos?.last_page}}\n      <button class=\"btn btn-xs btn-primary\" (click)=\"changePage(productos?.next_page_url)\" \n              *ngIf=\"productos?.next_page_url\">\n        <span class=\"fa fa-angle-right\"></span>\n      </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/producto/listar-productos/listar-productos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/producto/listar-productos/listar-productos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListarProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductosComponent", function() { return ListarProductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarProductosComponent = /** @class */ (function () {
    function ListarProductosComponent(productoService) {
        this.productoService = productoService;
        this.productos = { data: [] };
        this.respuesta = { type: null, msg: '' };
    }
    ListarProductosComponent.prototype.ngOnInit = function () {
        this.cargarProductos();
    };
    ListarProductosComponent.prototype.cargarProductos = function () {
        var _this = this;
        this.productoService.getProductoPaginado().subscribe(function (datos) {
            _this.productos = datos.data;
        }, function (error) { return console.log(error); });
    };
    ListarProductosComponent.prototype.eliminarProducto = function (producto_id, index) {
        var _this = this;
        var that = this;
        this.productoService.deleteProducto(producto_id).subscribe(function (datos) {
            _this.respuesta = datos;
            _this.respuesta.type = 'danger';
            if (datos.status) {
                _this.respuesta.type = 'success';
                _this.productos.data.splice(index, 1);
            }
            setTimeout(function () {
                that.respuesta = { type: null, msg: '' };
            }, 1000);
        }, function (error) { return console.log(error); });
    };
    ListarProductosComponent.prototype.changePage = function (url) {
        var _this = this;
        this.productoService.changePage(url).subscribe(function (datos) {
            _this.productos = datos.data;
        }, function (error) { return console.log(error); });
    };
    ListarProductosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-productos',
            template: __webpack_require__(/*! ./listar-productos.component.html */ "./src/app/producto/listar-productos/listar-productos.component.html"),
            styles: [__webpack_require__(/*! ./listar-productos.component.css */ "./src/app/producto/listar-productos/listar-productos.component.css")],
            providers: [_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]])
    ], ListarProductosComponent);
    return ListarProductosComponent;
}());



/***/ }),

/***/ "./src/app/producto/producto.module.ts":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/*! exports provided: ProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoModule", function() { return ProductoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _producto_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.routing */ "./src/app/producto/producto.routing.ts");
/* harmony import */ var _listar_productos_listar_productos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listar-productos/listar-productos.component */ "./src/app/producto/listar-productos/listar-productos.component.ts");
/* harmony import */ var _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crear-producto/crear-producto.component */ "./src/app/producto/crear-producto/crear-producto.component.ts");
/* harmony import */ var _editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editar-producto/editar-producto.component */ "./src/app/producto/editar-producto/editar-producto.component.ts");
/* harmony import */ var _ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ver-producto/ver-producto.component */ "./src/app/producto/ver-producto/ver-producto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProductoModule = /** @class */ (function () {
    function ProductoModule() {
    }
    ProductoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_producto_routing__WEBPACK_IMPORTED_MODULE_6__["ProductoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _listar_productos_listar_productos_component__WEBPACK_IMPORTED_MODULE_7__["ListarProductosComponent"],
                _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_8__["CrearProductoComponent"],
                _editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_9__["EditarProductoComponent"],
                _ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_10__["VerProductoComponent"]
            ]
        })
    ], ProductoModule);
    return ProductoModule;
}());



/***/ }),

/***/ "./src/app/producto/producto.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/producto/producto.routing.ts ***!
  \**********************************************/
/*! exports provided: ProductoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoRoutes", function() { return ProductoRoutes; });
/* harmony import */ var _listar_productos_listar_productos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-productos/listar-productos.component */ "./src/app/producto/listar-productos/listar-productos.component.ts");
/* harmony import */ var _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-producto/crear-producto.component */ "./src/app/producto/crear-producto/crear-producto.component.ts");
/* harmony import */ var _editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar-producto/editar-producto.component */ "./src/app/producto/editar-producto/editar-producto.component.ts");
/* harmony import */ var _ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-producto/ver-producto.component */ "./src/app/producto/ver-producto/ver-producto.component.ts");




var ProductoRoutes = [
    {
        path: '',
        children: [
            {
                path: 'listado',
                component: _listar_productos_listar_productos_component__WEBPACK_IMPORTED_MODULE_0__["ListarProductosComponent"],
                data: {
                    title: 'Productos',
                    urls: [
                        { title: 'Productos', url: '/producto/listado' }
                    ]
                }
            },
            {
                path: 'crear',
                component: _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_1__["CrearProductoComponent"],
                data: {
                    title: 'Productos',
                    urls: [
                        { title: 'Productos', url: '/producto/listado' },
                        { title: 'Registrar producto' }
                    ]
                }
            },
            {
                path: 'editar/:id',
                component: _editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_2__["EditarProductoComponent"],
                data: {
                    title: 'Productos',
                    urls: [
                        { title: 'Productos', url: '/producto/listado' },
                        { title: 'Editar producto' }
                    ]
                }
            },
            {
                path: 'detalle/:id',
                component: _ver_producto_ver_producto_component__WEBPACK_IMPORTED_MODULE_3__["VerProductoComponent"],
                data: {
                    title: 'Productos',
                    urls: [
                        { title: 'Productos', url: '/producto/listado' },
                        { title: 'Detalle' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/producto/producto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/producto/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
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



var ProductoService = /** @class */ (function () {
    function ProductoService(http) {
        this.http = http;
        this.base_url = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url_local : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url_public;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    ;
    ProductoService.prototype.getProductoPaginado = function () {
        return this.http.get(this.base_url + 'productos/listar/paginado');
    };
    ProductoService.prototype.changePage = function (url) {
        return this.http.get(url);
    };
    ProductoService.prototype.getProductos = function () {
        return this.http.get(this.base_url + 'productos');
    };
    ProductoService.prototype.getProducto = function (producto_id) {
        return this.http.get(this.base_url + 'productos/' + producto_id);
    };
    ProductoService.prototype.postProducto = function (datos) {
        return this.http.post(this.base_url + 'productos', datos);
    };
    ProductoService.prototype.putProducto = function (datos) {
        return this.http.put(this.base_url + 'productos/' + datos.id, datos);
    };
    ProductoService.prototype.deleteProducto = function (producto_id) {
        return this.http.delete(this.base_url + 'productos/' + producto_id);
    };
    ProductoService.prototype.getMarcas = function () {
        return this.http.get(this.base_url + 'marcas');
    };
    ProductoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/producto/ver-producto/ver-producto.component.css":
/*!******************************************************************!*\
  !*** ./src/app/producto/ver-producto/ver-producto.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".producto {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vdmVyLXByb2R1Y3RvL3Zlci1wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by92ZXItcHJvZHVjdG8vdmVyLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdG8ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/producto/ver-producto/ver-producto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/producto/ver-producto/ver-producto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"producto\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-8\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Nombre</b>:</div>\n        <div class=\"col-sm-8\">{{producto?.nombre}}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4\"><b>Talla</b>:</div>\n          <div class=\"col-sm-8\">{{producto?.talla}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Observaciones</b>:</div>\n        <div class=\"col-sm-8\">{{producto?.observaciones}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Marca</b>:</div>\n        <div class=\"col-sm-8\">\n          <a  routerLink=\"/marca/detalle/{{producto.marca?.id}}\">{{producto.marca?.nombre}}</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Cantidad en inventario</b>:</div>\n        <div class=\"col-sm-8\">{{producto?.cantidad_inventario}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\"><b>Fecha de embarque</b>:</div>\n        <div class=\"col-sm-8\">{{producto?.fecha_embarque}}</div>\n      </div>\n      \n      <br>\n  \n      <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a class=\"btn btn-outline-dark btn-sm\" routerLink=\"/producto/listado\">\n              <i class=\"mdi mdi-arrow-left-bold\"></i> Regresar\n            </a>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/producto/ver-producto/ver-producto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/producto/ver-producto/ver-producto.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerProductoComponent", function() { return VerProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerProductoComponent = /** @class */ (function () {
    function VerProductoComponent(productoService, router, route) {
        this.productoService = productoService;
        this.router = router;
        this.route = route;
        this.producto = {
            id: null,
            nombre: null,
            talla: null,
            observaciones: null,
            marca_id: null,
            marca: {
                id: null,
                nombre: null
            },
            cantidad_inventario: null,
            fecha_embarque: null,
        };
    }
    VerProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.producto.id = params['id']; });
        this.cargarProducto();
    };
    VerProductoComponent.prototype.cargarProducto = function () {
        var _this = this;
        this.productoService.getProducto(this.producto.id).subscribe(function (datos) {
            _this.producto = datos.data;
        }, function (error) { return console.log(error); });
    };
    VerProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-producto',
            template: __webpack_require__(/*! ./ver-producto.component.html */ "./src/app/producto/ver-producto/ver-producto.component.html"),
            styles: [__webpack_require__(/*! ./ver-producto.component.css */ "./src/app/producto/ver-producto/ver-producto.component.css")],
            providers: [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], VerProductoComponent);
    return VerProductoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=producto-producto-module.js.map