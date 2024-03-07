export type ParagraphId = '1' | '2' | '3' | '4'

export type ParagraphsStatusMap = {
    [key in ParagraphId]: boolean
}

export interface IStatus {
    paragraphsStatus: ParagraphsStatusMap
    changeParagraphStatus: (e: Event, paragraphId: ParagraphId) => void
}