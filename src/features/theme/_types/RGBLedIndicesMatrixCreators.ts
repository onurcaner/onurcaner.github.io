import { type RGBLedIndicesMatrixCreator } from './RGBLedIndicesMatrixCreator.ts';

export interface RGBLedIndicesMatrixCreators {
  headerBorder: RGBLedIndicesMatrixCreator;
  developerName: RGBLedIndicesMatrixCreator;
  developerJobTitle: RGBLedIndicesMatrixCreator;

  heroSectionBorder: RGBLedIndicesMatrixCreator;
  heroSectionTitle: RGBLedIndicesMatrixCreator;
  heroSectionDescription: RGBLedIndicesMatrixCreator;

  skillsSectionHeadingIcon: RGBLedIndicesMatrixCreator;
  skillsSectionHeadingText: RGBLedIndicesMatrixCreator;
  skillBorder: RGBLedIndicesMatrixCreator;
  skillIcon: RGBLedIndicesMatrixCreator;
  skillLabel: RGBLedIndicesMatrixCreator;

  educationSectionHeadingIcon: RGBLedIndicesMatrixCreator;
  educationSectionHeadingText: RGBLedIndicesMatrixCreator;
}
