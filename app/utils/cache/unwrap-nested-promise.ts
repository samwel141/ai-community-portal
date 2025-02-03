export type UnwrapNestedPromise<T> = { [K in keyof T]: Awaited<T[K]> };

export async function unwrapNestedPromise<T>(
    object: UnwrapNestedPromise<T>
): Promise<{
    data: UnwrapNestedPromise<T> | undefined;
    error: unknown | null;
}> {
    try {
        const keys = Object.keys(object) as Array<keyof T>;
        const values = Object.values(object);

        const resolvedValues = await Promise.all(
            values.map((value) =>
                value instanceof Promise ? value : Promise.resolve(value)
            )
        );

        const resolvedObject: UnwrapNestedPromise<T> =
            {} as UnwrapNestedPromise<T>;

        keys.forEach((key, index) => {
            resolvedObject[key] = resolvedValues[index] as Awaited<
                T[typeof key]
            >;
        });

        return { data: resolvedObject, error: null };
    } catch (error) {
        return { data: undefined, error };
    }
}
