export interface RGBBaseComponentProps {
  isUsingAlternativeColors?: boolean;
  preferredNormalFallbackColor: string;
  preferredAlternativeFallbackColor?: string;
}

// export interface RGBBaseComponentProps<
//   TAlternativeFlag extends boolean | undefined,
// > {
//   preferredNormalFallbackColor: string;
//   isUsingAlternativeColors: TAlternativeFlag;
//   preferredAlternativeFallbackColor: TAlternativeFlag extends false | undefined
//     ? undefined
//     : string;
// }

// export type RGBBaseComponentProps =
//   (Common & WithoutAlternativeColors) | (Common & WithAlternativeColors);
//
// interface Common {
//   preferredNormalFallbackColor: string;
// }
//
// interface WithAlternativeColors {
//   isUsingAlternativeColors?: boolean;
//   preferredAlternativeFallbackColor: string;
// }
//
// interface WithoutAlternativeColors {
//   isUsingAlternativeColors?: undefined;
//   preferredAlternativeFallbackColor?: undefined;
// }
