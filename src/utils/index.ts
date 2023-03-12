export const isValidKey = (key: string, obj: object): key is keyof typeof  obj  => {
    return key in obj
}