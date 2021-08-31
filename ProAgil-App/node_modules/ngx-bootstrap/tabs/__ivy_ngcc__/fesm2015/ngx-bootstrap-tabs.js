import { Directive, ViewContainerRef, Input, ɵɵdefineInjectable, Injectable, Component, Renderer2, ElementRef, HostBinding, EventEmitter, Output, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function TabsetComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const tabz_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(); $event.preventDefault(); return ctx_r4.removeTab(tabz_r1); });
    ɵngcc0.ɵɵtext(1, " \u274C");
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵlistener("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const i_r2 = ctx.index; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.keyNavActions($event, i_r2); });
    ɵngcc0.ɵɵelementStart(1, "a", 4);
    ɵngcc0.ɵɵlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener() { const tabz_r1 = ctx.$implicit; return tabz_r1.active = true; });
    ɵngcc0.ɵɵelementStart(2, "span", 5);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tabz_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c0, tabz_r1.customClass || ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    ɵngcc0.ɵɵattribute("aria-controls", tabz_r1.id ? tabz_r1.id : "")("aria-selected", !!tabz_r1.active)("id", tabz_r1.id ? tabz_r1.id + "-link" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTransclude", tabz_r1.headingRef);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(tabz_r1.heading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tabz_r1.removable);
} }
const _c1 = ["*"];
class NgTranscludeDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NgTranscludeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NgTranscludeDirective.propDecorators = {
    ngTransclude: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgTranscludeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngTransclude]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { ngTransclude: [{
            type: Input
        }] }); })();

class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
        /** provides possibility to set keyNavigations enable or disable, by default is enable */
        this.isKeysAllowed = true;
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
    }
}
TabsetConfig.ɵfac = function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); };
TabsetConfig.ɵprov = ɵɵdefineInjectable({ factory: function TabsetConfig_Factory() { return new TabsetConfig(); }, token: TabsetConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsetConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
class TabsetComponent {
    constructor(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
        this.isDestroyed = false;
        this._vertical = false;
        this._justified = false;
        this._type = 'tabs';
        this._isKeysAllowed = true;
        Object.assign(this, config);
    }
    /** if true tabs will be placed vertically */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /** if true tabs fill the container and have a consistent width */
    get justified() {
        return this._justified;
    }
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /** navigation context class: 'tabs' or 'pills' */
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    get isKeysAllowed() {
        return this._isKeysAllowed;
    }
    set isKeysAllowed(value) {
        this._isKeysAllowed = value;
    }
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && !tab.active;
    }
    removeTab(tab, options = { reselect: true, emit: true }) {
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    }
    keyNavActions(event, index) {
        if (!this.isKeysAllowed) {
            return;
        }
        const list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            const currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            let nextTab;
            let shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            let previousTab;
            let shift = 1;
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            let firstTab;
            let shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            let lastTab;
            let shift = 1;
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    }
    getClosestTabIndex(index) {
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            const prevIndex = index - step;
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    hasAvailableTabs(index) {
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified,
            [`nav-${this.type}`]: true
        };
    }
}
TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(ɵngcc0.ɵɵdirectiveInject(TabsetConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TabsetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("tab-container", ctx.clazz);
    } }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
        ɵngcc0.ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 17, "li", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
        ɵngcc0.ɵɵattribute("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, NgTranscludeDirective, ɵngcc1.NgIf], styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"] });
TabsetComponent.ctorParameters = () => [
    { type: TabsetConfig },
    { type: Renderer2 },
    { type: ElementRef }
];
TabsetComponent.propDecorators = {
    vertical: [{ type: Input }],
    justified: [{ type: Input }],
    type: [{ type: Input }],
    clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsetComponent, [{
        type: Component,
        args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
            }]
    }], function () { return [{ type: TabsetConfig }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { clazz: [{
            type: HostBinding,
            args: ['class.tab-container']
        }], vertical: [{
            type: Input
        }], justified: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(ɵngcc0.ɵɵdirectiveInject(TabsetComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
TabDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 7, hostBindings: function TabDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby)("id", ctx.id);
        ɵngcc0.ɵɵclassProp("tab-pane", ctx.addClass)("active", ctx.active);
    } }, inputs: { disabled: "disabled", removable: "removable", customClass: "customClass", active: "active", heading: "heading", id: "id" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" }, exportAs: ["tab"] });
TabDirective.ctorParameters = () => [
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
TabDirective.propDecorators = {
    heading: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    disabled: [{ type: Input }],
    removable: [{ type: Input }],
    customClass: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    selectTab: [{ type: Output }],
    deselect: [{ type: Output }],
    removed: [{ type: Output }],
    addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabDirective, [{
        type: Directive,
        args: [{ selector: 'tab, [tab]', exportAs: 'tab' }]
    }], function () { return [{ type: TabsetComponent }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { disabled: [{
            type: Input
        }], removable: [{
            type: Input
        }], selectTab: [{
            type: Output
        }], deselect: [{
            type: Output
        }], removed: [{
            type: Output
        }], addClass: [{
            type: HostBinding,
            args: ['class.tab-pane']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], customClass: [{
            type: Input
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], ariaLabelledby: [{
            type: HostBinding,
            args: ['attr.aria-labelledby']
        }], heading: [{
            type: Input
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }] }); })();

/** Should be used to mark <ng-template> element as a template for tab heading */
class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(TabDirective)); };
TabHeadingDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: TabDirective }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabHeadingDirective, [{
        type: Directive,
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: TabDirective }]; }, null); })();

class TabsModule {
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: []
        };
    }
}
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig };

//# sourceMappingURL=ngx-bootstrap-tabs.js.map