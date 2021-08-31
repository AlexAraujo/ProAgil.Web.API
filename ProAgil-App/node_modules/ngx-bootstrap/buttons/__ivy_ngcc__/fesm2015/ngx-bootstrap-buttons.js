import { forwardRef, Directive, Input, HostBinding, HostListener, ElementRef, ChangeDetectorRef, Renderer2, Optional, Inject, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

// TODO: config: activeClass - Class to apply to the checked buttons
import * as ɵngcc0 from '@angular/core';
const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.isDisabled = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonCheckboxDirective.ɵfac = function ButtonCheckboxDirective_Factory(t) { return new (t || ButtonCheckboxDirective)(); };
ButtonCheckboxDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonCheckboxDirective, selectors: [["", "btnCheckbox", ""]], hostVars: 3, hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ButtonCheckboxDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-pressed", ctx.state);
        ɵngcc0.ɵɵclassProp("active", ctx.state);
    } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" }, features: [ɵngcc0.ɵɵProvidersFeature([CHECKBOX_CONTROL_VALUE_ACCESSOR])] });
ButtonCheckboxDirective.propDecorators = {
    btnCheckboxTrue: [{ type: Input }],
    btnCheckboxFalse: [{ type: Input }],
    state: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonCheckboxDirective, [{
        type: Directive,
        args: [{
                selector: '[btnCheckbox]',
                providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { btnCheckboxTrue: [{
            type: Input
        }], btnCheckboxFalse: [{
            type: Input
        }], state: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: HostBinding,
            args: ['attr.aria-pressed']
        }], 
    // view -> model
    onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    constructor(el, cdr, renderer, group) {
        this.el = el;
        this.cdr = cdr;
        this.renderer = renderer;
        this.group = group;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        /** If `true` — radio button can be unchecked */
        this.uncheckable = false;
        this.role = 'radio';
        this._disabled = false;
        this._hasFocus = false;
    }
    /** Current value of radio component or group */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
        this._onChange(value);
    }
    /** If `true` — radio button is disabled */
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this.setDisabledState(disabled);
    }
    get controlOrGroupDisabled() {
        return this.disabled || (this.group && this.group.disabled) ? true : undefined;
    }
    get hasDisabledClass() {
        // Although the radio is disabled the active radio should still stand out.
        // The disabled class will prevent this so don't add it on the active radio
        return this.controlOrGroupDisabled && !this.isActive;
    }
    get isActive() {
        return this.btnRadio === this.value;
    }
    get tabindex() {
        if (this.controlOrGroupDisabled) {
            // Disabled radio buttons should not receive focus
            return undefined;
        }
        else if (this.isActive || this.group == null) {
            return 0;
        }
        else {
            return -1;
        }
    }
    get hasFocus() {
        return this._hasFocus;
    }
    toggleIfAllowed() {
        if (!this.canToggle()) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.btnRadio;
        }
    }
    onSpacePressed(event) {
        this.toggleIfAllowed();
        event.preventDefault();
    }
    focus() {
        this.el.nativeElement.focus();
    }
    onFocus() {
        this._hasFocus = true;
    }
    onBlur() {
        this._hasFocus = false;
        this.onTouched();
    }
    canToggle() {
        return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    }
    ngOnChanges(changes) {
        if ('uncheckable' in changes) {
            this.uncheckable = this.uncheckable !== false && typeof this.uncheckable !== 'undefined';
        }
    }
    _onChange(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._disabled = disabled;
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) { return new (t || ButtonRadioDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(forwardRef(() => ButtonRadioGroupDirective), 8)); };
ButtonRadioDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonRadioDirective, selectors: [["", "btnRadio", ""]], hostVars: 8, hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ButtonRadioDirective_click_HostBindingHandler() { return ctx.toggleIfAllowed(); })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) { return ctx.onSpacePressed($event); })("focus", function ButtonRadioDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("tabindex", ctx.tabindex);
        ɵngcc0.ɵɵclassProp("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
    } }, inputs: { uncheckable: "uncheckable", value: "value", disabled: "disabled", btnRadio: "btnRadio" }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ButtonRadioGroupDirective, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => ButtonRadioGroupDirective),] }] }
];
ButtonRadioDirective.propDecorators = {
    btnRadio: [{ type: Input }],
    uncheckable: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    controlOrGroupDisabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    hasDisabledClass: [{ type: HostBinding, args: ['class.disabled',] }],
    isActive: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-checked',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    toggleIfAllowed: [{ type: HostListener, args: ['click',] }],
    onSpacePressed: [{ type: HostListener, args: ['keydown.space', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonRadioDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ButtonRadioGroupDirective, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [forwardRef(() => ButtonRadioGroupDirective)]
            }] }]; }, { uncheckable: [{
            type: Input
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], controlOrGroupDisabled: [{
            type: HostBinding,
            args: ['attr.aria-disabled']
        }], hasDisabledClass: [{
            type: HostBinding,
            args: ['class.disabled']
        }], isActive: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: HostBinding,
            args: ['attr.aria-checked']
        }], tabindex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], toggleIfAllowed: [{
            type: HostListener,
            args: ['click']
        }], onSpacePressed: [{
            type: HostListener,
            args: ['keydown.space', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], btnRadio: [{
            type: Input
        }] }); })();

const RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioGroupDirective),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioGroupDirective {
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
        this._disabled = false;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    get disabled() {
        return this._disabled;
    }
    get tabindex() {
        if (this._disabled) {
            return null;
        }
        else {
            return 0;
        }
    }
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach(buttons => {
                buttons.setDisabledState(disabled);
            });
            this.cdr.markForCheck();
        }
    }
    onFocus() {
        if (this._disabled) {
            return;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
            return;
        }
        if (this.radioButtons) {
            const firstEnabled = this.radioButtons.find(r => !r.disabled);
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    }
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    selectNext(event) {
        this.selectInDirection('next');
        event.preventDefault();
    }
    selectPrevious(event) {
        this.selectInDirection('previous');
        event.preventDefault();
    }
    selectInDirection(direction) {
        if (this._disabled) {
            return;
        }
        function nextIndex(currentIndex, buttonRadioDirectives) {
            const step = direction === 'next' ? 1 : -1;
            let calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio && this.radioButtons) {
            const buttonRadioDirectives = this.radioButtons.toArray();
            const currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (let i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    }
    getActiveOrFocusedRadio() {
        if (!this.radioButtons) {
            return void 0;
        }
        return this.radioButtons.find(button => button.isActive)
            || this.radioButtons.find(button => button.hasFocus);
    }
}
ButtonRadioGroupDirective.ɵfac = function ButtonRadioGroupDirective_Factory(t) { return new (t || ButtonRadioGroupDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ButtonRadioGroupDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonRadioGroupDirective, selectors: [["", "btnRadioGroup", ""]], contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, ButtonRadioDirective, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.radioButtons = _t);
    } }, hostVars: 2, hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.selectPrevious($event); })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) { return ctx.selectPrevious($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex);
    } }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR$1])] });
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ButtonRadioGroupDirective.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    radioButtons: [{ type: ContentChildren, args: [forwardRef(() => ButtonRadioDirective),] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    selectNext: [{ type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
    selectPrevious: [{ type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonRadioGroupDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], tabindex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], selectNext: [{
            type: HostListener,
            args: ['keydown.ArrowRight', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.ArrowDown', ['$event']]
        }], selectPrevious: [{
            type: HostListener,
            args: ['keydown.ArrowLeft', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.ArrowUp', ['$event']]
        }], radioButtons: [{
            type: ContentChildren,
            args: [forwardRef(() => ButtonRadioDirective)]
        }] }); })();

class ButtonsModule {
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonsModule });
ButtonsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonsModule, { declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective], exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonsModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵa, RADIO_CONTROL_VALUE_ACCESSOR$1 as ɵb, RADIO_CONTROL_VALUE_ACCESSOR as ɵc };

//# sourceMappingURL=ngx-bootstrap-buttons.js.map