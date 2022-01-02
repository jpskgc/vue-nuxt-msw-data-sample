// export default () => {
//     const { worker } = require('../mocks/browser')
//     worker.start()
//     console.log('worker started')
// };

import { factory, primaryKey } from '@mswjs/data'
import {rest, setupWorker} from "msw";

const db = factory({
    value: {
        value : primaryKey(String),
    }
})

db.value.create({value: "test1"})
db.value.create({value: "test2"})

export const handlers = [
    rest.get('/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(db.value.getAll())
        )
    }),
    rest.post('/users', (req, res, ctx) => {
        db.value.create(req.body)

        return res(
            ctx.status(201),
        )
    }),
]

const worker = setupWorker(...handlers)

worker.start()