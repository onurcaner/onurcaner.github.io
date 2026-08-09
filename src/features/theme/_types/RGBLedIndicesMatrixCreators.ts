import { type RGBLedIndicesMatrixCreator } from './RGBLedIndicesMatrixCreator.ts';

export interface RGBLedIndicesMatrixCreators {
  headerBorder: RGBLedIndicesMatrixCreator;

  developerName: RGBLedIndicesMatrixCreator;
  developerJobTitle: RGBLedIndicesMatrixCreator;

  heroSectionBorder: RGBLedIndicesMatrixCreator;
  heroSectionTitle: RGBLedIndicesMatrixCreator;
  heroSectionDescription: RGBLedIndicesMatrixCreator;

  sectionHeadingIcon: RGBLedIndicesMatrixCreator;
  sectionHeadingTitle: RGBLedIndicesMatrixCreator;

  skillBorder: RGBLedIndicesMatrixCreator;
  skillIcon: RGBLedIndicesMatrixCreator;
  skillLabel: RGBLedIndicesMatrixCreator;

  educationSlashWorkExperienceTitle: RGBLedIndicesMatrixCreator;
  educationProviderSlashCompanyName: RGBLedIndicesMatrixCreator;
  educationSlashWorkExperienceDateRange: RGBLedIndicesMatrixCreator;
  educationProviderSlashCompanyLocation: RGBLedIndicesMatrixCreator;
  educationGradeSlashWorkExperienceLevel: RGBLedIndicesMatrixCreator;
  educationSlashWorkExperienceDescriptionListTitle: RGBLedIndicesMatrixCreator;
  educationSlashWorkExperienceDescriptionListItemIcon: RGBLedIndicesMatrixCreator;
  educationSlashWorkExperienceDescriptionListItemText: RGBLedIndicesMatrixCreator;
}
