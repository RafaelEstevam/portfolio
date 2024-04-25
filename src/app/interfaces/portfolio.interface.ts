export interface Portfolio {
  id: string,
  name: string,
  tags: string[]
  bubbleType: 'blob-animation-1' | 'blob-animation-2' | 'blob-animation-3' | string
}

export interface ModalPortfolio extends Portfolio {
  subtitle: string,
  showProject: boolean,
  projectUrl?: string,
  showGit: boolean,
  gitUrl?: string,
  content: any,
  imgUrl: string
}
