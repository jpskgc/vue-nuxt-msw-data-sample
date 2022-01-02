import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
    value: {
        value : primaryKey(String),
    }
})