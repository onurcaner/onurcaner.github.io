import { RGBLedType } from '../_constants/RGBLedType.ts';

enum PropertySuffix {
  Color = 'color',
  TransitionDuration = 'transition-duration',
  TransitionTimingFunction = 'transition-timing-function',
  FallbackColorOpacity = 'fallback-color-opacity',
}

export class RGBLedCSSVarAdapter {
  private _rgbLedIndex: string;
  private _rgbLedType: RGBLedType;

  public constructor({
    rgbLedIndex,
    rgbLedType,
  }: {
    rgbLedIndex: number;
    rgbLedType: RGBLedType;
  }) {
    this._rgbLedIndex = rgbLedIndex.toString();
    this._rgbLedType = rgbLedType;
  }

  public generateColorPropertyName(): string {
    return this._generatePrefix() + PropertySuffix.Color;
  }
  public generateTransitionDurationPropertyName(): string {
    return this._generatePrefix() + PropertySuffix.TransitionDuration;
  }
  public generateTransitionTimingFunctionPropertyName(): string {
    return this._generatePrefix() + PropertySuffix.TransitionTimingFunction;
  }
  public generateFallbackColorOpacityPropertyName(): string {
    return this._generatePrefix() + PropertySuffix.FallbackColorOpacity;
  }

  public generateColorCSSVar(): string {
    return this._makeCSSVar(this.generateColorPropertyName());
  }
  public generateTransitionDurationCSSVar(): string {
    return this._makeCSSVar(this.generateTransitionDurationPropertyName());
  }
  public generateTransitionTimingFunctionCSSVar(): string {
    return this._makeCSSVar(
      this.generateTransitionTimingFunctionPropertyName(),
    );
  }
  public generateFallbackColorOpacityCSSVar(): string {
    return this._makeCSSVar(this.generateFallbackColorOpacityPropertyName());
  }

  private _generatePrefix(): string {
    return `--rgb-led-${this._rgbLedIndex}-${this._rgbLedType}-`;
  }

  private _makeCSSVar(propertyName: string): string {
    return `var(${propertyName})`;
  }
}
