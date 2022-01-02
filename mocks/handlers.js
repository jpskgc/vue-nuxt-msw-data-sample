import { rest } from 'msw'

export const handlers = [
    rest.get('/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                values: ['test1','test2'],
            }),
        )
    }),
    rest.post('/users', (req, res, ctx) => {
        return res(
            ctx.status(201),
        )
    }),
]