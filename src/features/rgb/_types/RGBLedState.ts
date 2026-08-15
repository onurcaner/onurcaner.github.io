export interface RGBLedState {
  normalColor: string;
  alternativeColor: string;

  normalTransitionDuration: string;
  alternativeTransitionDuration: string;

  normalTransitionTimingFunction: string;
  alternativeTransitionTimingFunction: string;

  isNormalColorPreferringFallbackColor: boolean;
  isAlternativeColorPreferringFallbackColor: boolean;
}
