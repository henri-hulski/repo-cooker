/* eslint-env jest */
import { execCommand, logCommand } from './execCommand'

import assert from 'test-utils/assert'
import simple from 'simple-mock'

describe('logCommand', () => {
  const logs = []
  beforeAll(() => {
    simple.mock(console, 'log').callFn((...args) => logs.push(args))
  })

  afterAll(() => simple.restore())

  it('should output commands to console', done => {
    logCommand('hello', ['a', 'b', 'c'], { some: 'option' }).then(() => {
      assert.deepEqual(
        logs,
        [
          [
            '\n\u001b[33mhello\u001b[0m\n    a\n    b\n    c\n    {"some":"option"}',
          ],
        ],
        done
      )
    })
  })
})

describe('execCommand', () => {
  it('should execute command', done => {
    execCommand('node', ['-e', 'console.log("Hello Repo Cooker")'], {}).then(
      out => {
        assert.equal(out, 'Hello Repo Cooker\n', done)
      }
    )
  })
})
