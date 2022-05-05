export function nonEmpty(value?: any): boolean {
    return value !== null && value !== undefined && !!value.length;
}

export const removeEmptyValues: any = (obj: any) => {
    return Object.keys(obj)
        .filter((k) => nonEmpty(obj[k])) // Remove undef. and null.
        .reduce(
            (newObj, k) =>
                typeof obj[k] === 'object'
                    ? {...newObj, [k]: removeEmptyValues(obj[k])} // Recurse.
                    : {...newObj, [k]: obj[k]}, // Copy value.
            {},
        );
};
