export interface Curriculum {
  id: string,
  name: string,
  companyName: string,
  shortDescription: string,
  startDate: string,
  endDate?: string,
}

export interface ModalCurriculum extends Curriculum{
  content: any,
  companySite?: string
}