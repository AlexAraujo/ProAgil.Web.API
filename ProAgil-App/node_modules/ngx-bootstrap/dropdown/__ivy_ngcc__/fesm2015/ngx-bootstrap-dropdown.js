import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, Directive, ViewContainerRef, Input, Output, TemplateRef, HostBinding, HostListener, NgModule } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { isBs3 } from 'ngx-bootstrap/utils';
import { style, animate, AnimationBuilder } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { PositioningService } from 'ngx-bootstrap/positioning';

/** Default dropdown configuration */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/animations';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ngx-bootstrap/component-loader';

const _c0 = function (a0) { return { dropdown: a0 }; };
const _c1 = ["*"];
class BsDropdownConfig {
    constructor() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
        /** default dropdown auto closing behavior */
        this.insideClick = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) { return new (t || BsDropdownConfig)(); };
BsDropdownConfig.ɵprov = ɵɵdefineInjectable({ factory: function BsDropdownConfig_Factory() { return new BsDropdownConfig(); }, token: BsDropdownConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.autoClose = true;
        this.insideClick = false;
        this.isAnimated = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(resolve => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.ɵfac = function BsDropdownState_Factory(t) { return new (t || BsDropdownState)(); };
BsDropdownState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: BsDropdownState, factory: BsDropdownState.ɵfac });
BsDropdownState.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownState, [{
        type: Injectable
    }], function () { return []; }, null); })();

const DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
const dropdownAnimation = [
    style({ height: 0, overflow: 'hidden' }),
    animate(DROPDOWN_ANIMATION_TIMING, style({ height: '*', overflow: 'hidden' }))
];

// todo: revert ngClass to [class] when false positive angular-cli issue is fixed
//          [class.dropdown]="direction === 'down'"-->
class BsDropdownContainerComponent {
    constructor(_state, cd, _renderer, _element, _builder) {
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        this._subscription = _state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            const dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
            this._renderer.addClass(this._element.nativeElement.querySelector('div'), 'open');
            if (dropdown && !isBs3()) {
                this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    this._renderer.setStyle(dropdown, 'left', 'auto');
                    this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (this.direction === 'up') {
                    this._renderer.setStyle(dropdown, 'top', 'auto');
                    this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            if (dropdown && this._state.isAnimated) {
                this._factoryDropDownAnimation.create(dropdown)
                    .play();
            }
            this.cd.markForCheck();
            this.cd.detectChanges();
        });
    }
    get direction() {
        return this._state.direction;
    }
    /** @internal */
    _contains(el) {
        return this._element.nativeElement.contains(el);
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) { return new (t || BsDropdownContainerComponent)(ɵngcc0.ɵɵdirectiveInject(BsDropdownState), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AnimationBuilder)); };
BsDropdownContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BsDropdownContainerComponent, selectors: [["bs-dropdown-container"]], hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"], ngContentSelectors: _c1, decls: 2, vars: 9, consts: [[3, "ngClass"]], template: function BsDropdownContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dropup", ctx.direction === "up")("show", ctx.isOpen)("open", ctx.isOpen);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.direction === "down"));
    } }, directives: [ɵngcc2.NgClass], encapsulation: 2, changeDetection: 0 });
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: AnimationBuilder }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    style: 'display:block;position: absolute;z-index: 1040'
                },
                template: `
    <div [class.dropup]="direction === 'up'"
         [ngClass]="{dropdown: direction === 'down'}"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.AnimationBuilder }]; }, null); })();

class BsDropdownDirective {
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._state = _state;
        this._config = _config;
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._isDisabled = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        this._state.isAnimated = this._config.isAnimated;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     */
    set autoClose(value) {
        this._state.autoClose = value;
    }
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Indicates that dropdown will be animated
     */
    set isAnimated(value) {
        this._state.isAnimated = value;
    }
    get isAnimated() {
        return this._state.isAnimated;
    }
    /**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     */
    set insideClick(value) {
        this._state.insideClick = value;
    }
    get insideClick() {
        return this._state.insideClick;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    get isBs4() {
        return !isBs3();
    }
    get _showInline() {
        return !this.container;
    }
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: () => this.show()
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe((value) => this.toggle(value)));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(filter((value) => value))
            .subscribe(( /*value: boolean*/) => this.hide()));
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then((dropdownMenu) => {
                    this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    this._inlinedMenu = this._dropdown._inlineViewRef;
                    this.addBs4Polyfills();
                    if (this._inlinedMenu) {
                        this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, 'open');
                    }
                    this.playAnimation();
                })
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            this.playAnimation();
            return;
        }
        this._state.dropdownMenu.then(dropdownMenu => {
            // check direction in which dropdown should be opened
            const _dropup = this.dropup ||
                (typeof this.dropup !== 'undefined' && this.dropup);
            this._state.direction = _dropup ? 'up' : 'down';
            const _placement = this.placement || (_dropup ? 'top start' : 'bottom start');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            this._state.isOpenChange.emit(true);
        })
            // swallow error
            .catch();
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    toggle(value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    }
    /** @internal */
    _contains(event) {
        // todo: valorkin fix typings
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    }
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    }
    addBs4Polyfills() {
        if (!isBs3()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    }
    playAnimation() {
        if (this._state.isAnimated && this._inlinedMenu) {
            setTimeout(() => {
                if (this._inlinedMenu) {
                    this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play();
                }
            });
        }
    }
    addShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    removeShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    checkRightAlignment() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    }
    addDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    }
    removeDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    }
}
BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) { return new (t || BsDropdownDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.ComponentLoaderFactory), ɵngcc0.ɵɵdirectiveInject(BsDropdownState), ɵngcc0.ɵɵdirectiveInject(BsDropdownConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AnimationBuilder)); };
BsDropdownDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownDirective, selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]], hostVars: 6, hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
    } }, inputs: { dropup: "dropup", autoClose: "autoClose", isAnimated: "isAnimated", insideClick: "insideClick", isDisabled: "isDisabled", isOpen: "isOpen", placement: "placement", triggers: "triggers", container: "container" }, outputs: { onShown: "onShown", onHidden: "onHidden", isOpenChange: "isOpenChange" }, exportAs: ["bs-dropdown"], features: [ɵngcc0.ɵɵProvidersFeature([BsDropdownState])] });
BsDropdownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: BsDropdownState },
    { type: BsDropdownConfig },
    { type: AnimationBuilder }
];
BsDropdownDirective.propDecorators = {
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    dropup: [{ type: Input }],
    autoClose: [{ type: Input }],
    isAnimated: [{ type: Input }],
    insideClick: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isOpen: [{ type: Input }],
    isOpenChange: [{ type: Output }],
    onShown: [{ type: Output }],
    onHidden: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdown], [dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState],
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.dropup]': 'dropup',
                    '[class.open]': 'isOpen',
                    '[class.show]': 'isOpen && isBs4'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc3.ComponentLoaderFactory }, { type: BsDropdownState }, { type: BsDropdownConfig }, { type: ɵngcc1.AnimationBuilder }]; }, { dropup: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isOpenChange: [{
            type: Output
        }], autoClose: [{
            type: Input
        }], isAnimated: [{
            type: Input
        }], insideClick: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }] }); })();

class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(ɵngcc0.ɵɵdirectiveInject(BsDropdownState), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
BsDropdownMenuDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], exportAs: ["bs-dropdown-menu"] });
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ViewContainerRef },
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.TemplateRef }]; }, null); })();

class BsDropdownToggleDirective {
    constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isOpen = false;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (event) => {
                    if (this._state.autoClose && event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target) &&
                        !(this._state.insideClick && this._dropdown._contains(event))) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
            }
            else {
                this._documentClickListener && this._documentClickListener();
                this._escKeyUpListener && this._escKeyUpListener();
            }
        }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange
            .subscribe((value) => this.isDisabled = value || void 0));
    }
    onClick(event) {
        event.stopPropagation();
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(BsDropdownDirective), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(BsDropdownState)); };
BsDropdownToggleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]], hostVars: 3, hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-haspopup", true)("aria-expanded", ctx.isOpen)("disabled", ctx.isDisabled);
    } }, exportAs: ["bs-dropdown-toggle"] });
BsDropdownToggleDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: BsDropdownDirective },
    { type: ElementRef },
    { type: Renderer2 },
    { type: BsDropdownState }
];
BsDropdownToggleDirective.propDecorators = {
    isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
    isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: BsDropdownDirective }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: BsDropdownState }]; }, { isOpen: [{
            type: HostBinding,
            args: ['attr.aria-expanded']
        }], isDisabled: [{
            type: HostBinding,
            args: ['attr.disabled']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class BsDropdownModule {
    static forRoot() {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState
            ]
        };
    }
}
BsDropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BsDropdownModule });
BsDropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BsDropdownModule, { declarations: function () { return [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BsDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective };

//# sourceMappingURL=ngx-bootstrap-dropdown.js.map