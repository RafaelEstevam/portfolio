interface Resume{
  name: string,
  description: string
}

interface Logo{
  width: number,
  height: number,
  fileName: string,
  url: string,
}

interface MoreInformations{
  html: string,
}

interface Links{
  name: string,
  url: string,
}

interface StartEndDate{
  isCurrent: boolean,
  startDate: string,
  endDate: string
}

interface Category{
  name: string,
}

export interface Curriculum {
  id: string,
  name: string,
  logo: Logo,
  moreInformations: MoreInformations;
  companyPage: string,
  resume: Resume,
  links: Links[]
  startEndDate: StartEndDate,
  categories: Category[]
}

export interface ModalCurriculum extends Curriculum{
  content: any,
  companySite: string
}