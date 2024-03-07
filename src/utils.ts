import type { ParagraphsStatusMap, } from './index.t'


export const onlyOneTrue = (obj: ParagraphsStatusMap): boolean => {
    let trueCount = 0

    let key: keyof ParagraphsStatusMap
    for (key in obj) {
        if (obj[key] === true) {
            trueCount++
            if (trueCount > 1) {
                return false
            }
        }
    }
    return trueCount === 1
}