import { resolve, join } from 'path'
export { testAction } from './testAction'

const path = resolve(join(__dirname, '..', 'repo'))

export const config = { git: { path }, npm: { path }, devtools: null }