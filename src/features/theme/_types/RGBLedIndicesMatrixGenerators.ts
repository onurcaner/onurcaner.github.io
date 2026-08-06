import { type RGBLedIndicesMatrixGenerator } from '@/features/rgb/_types/RGBLedIndicesMatrixGenerator.ts';

export interface RGBLedIndicesMatrixGenerators {
  headerBorder: RGBLedIndicesMatrixGenerator;
  developerName: RGBLedIndicesMatrixGenerator;
  developerJobTitle: RGBLedIndicesMatrixGenerator;

  heroSectionBorder: RGBLedIndicesMatrixGenerator;
  heroSectionTitle: RGBLedIndicesMatrixGenerator;
  heroSectionDescription: RGBLedIndicesMatrixGenerator;

  skillsSectionHeading: RGBLedIndicesMatrixGenerator;
  skillBorder: RGBLedIndicesMatrixGenerator;
  skillIcon: RGBLedIndicesMatrixGenerator;
  skillLabel: RGBLedIndicesMatrixGenerator;
}
