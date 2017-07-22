/* eslint-env mocha */
import assert from 'test-utils/assert'
import { config, runCommandMock } from 'test-utils'
import { publish as publishFactory } from './publish'

it('should execute npm publish command', function(done) {
  const runCommand = runCommandMock()
  const publish = publishFactory({
    runCommand,
    packagesPaths: config.packagesPaths,
  })
  publish('repo-cooker-test', 'TAG').then(() => {
    assert.deepEqual(
      runCommand.commands,
      [
        {
          cmd: 'npm',
          args: ['publish', '--tag', 'TAG', '--access', 'public'],
          options: { cwd: config.packagesPaths['repo-cooker-test'] },
        },
      ],
      done
    )
  })
})
