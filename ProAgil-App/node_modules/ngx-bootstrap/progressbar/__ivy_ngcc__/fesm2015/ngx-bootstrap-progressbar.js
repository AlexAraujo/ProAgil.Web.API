import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, ɵɵdefineInjectable, Injectable, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
function ProgressbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "bar", 3);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("type", ctx_r2.type)("value", ctx_r2._value)("max", ctx_r2.max)("animate", ctx_r2.animate)("striped", ctx_r2.striped);
} }
function ProgressbarComponent_ng_template_3_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "bar", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("type", item_r6.type)("value", item_r6.value)("max", item_r6.max)("animate", ctx_r5.animate)("striped", ctx_r5.striped);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r6.label);
} }
function ProgressbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ProgressbarComponent_ng_template_3_bar_0_Template, 2, 6, "bar", 4);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4._values);
} }
class BarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** maximum total value of progress element */
        this.max = 100;
        /** current value of progress bar */
        this.value = 0;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        this.type = 'info';
        this.percent = 100;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.value || changes.max) {
            this.percent = 100 * (Number(changes.value.currentValue || 0)
                / Number((((_a = changes.max) === null || _a === void 0 ? void 0 : _a.currentValue) || this.max) || 100));
        }
        if (changes.type) {
            this.applyTypeClasses();
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
BarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        ɵngcc0.ɵɵstyleProp("height", "100", "%")("width", ctx.percent, "%");
        ɵngcc0.ɵɵclassProp("progress-bar", true)("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate);
    } }, inputs: { max: "max", value: "value", animate: "animate", striped: "striped", type: "type" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
BarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BarComponent.propDecorators = {
    max: [{ type: Input }],
    value: [{ type: Input }],
    animate: [{ type: Input }],
    striped: [{ type: Input }],
    type: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar]': 'true',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"',
                    '[style.width.%]': 'percent'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { max: [{
            type: Input
        }], value: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
ProgressbarConfig.ɵprov = ɵɵdefineInjectable({ factory: function ProgressbarConfig_Factory() { return new ProgressbarConfig(); }, token: ProgressbarConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressbarConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ProgressbarComponent {
    constructor(config) {
        /** maximum total value of progress element */
        this.max = 100;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        this.isStacked = false;
        this._value = 0;
        Object.assign(this, config);
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(ɵngcc0.ɵɵdirectiveInject(ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("max", ctx.max);
        ɵngcc0.ɵɵclassProp("progress", true);
    } }, inputs: { max: "max", animate: "animate", striped: "striped", value: "value", type: "type" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ProgressbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, ProgressbarComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        const _r3 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isStacked)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [ɵngcc1.NgIf, BarComponent, ɵngcc1.NgForOf], styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"], changeDetection: 0 });
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig }
];
ProgressbarComponent.propDecorators = {
    max: [{ type: Input }],
    animate: [{ type: Input }],
    striped: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\n\n<ng-template #NotStacked>\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\n    <ng-content></ng-content>\n  </bar>\n</ng-template>\n\n<ng-template #Stacked>\n  <bar *ngFor=\"let item of _values\"\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.progress]': 'true',
                    '[attr.max]': 'max'
                },
                styles: [`
    :host {
      width: 100%;
      display: flex;
    } `]
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { max: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], value: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressbarModule });
ProgressbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressbarModule, { declarations: function () { return [BarComponent, ProgressbarComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BarComponent, ProgressbarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };

//# sourceMappingURL=ngx-bootstrap-progressbar.js.map