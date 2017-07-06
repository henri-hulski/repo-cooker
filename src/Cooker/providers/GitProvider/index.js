import { getCommit } from './getCommit'
import { getHashListFromHash } from './getHashListFromHash'
import { getLatestTagMatchingName } from './getLatestTagMatchingName'

export function GitProvider(config) {
  if (!config || !config.path) {
    throw new Error(`Invalid 'git' configuration: missing path.`)
  }
  return context => {
    context.git = {
      getCommit(hash) {
        return getCommit(config.path, hash)
      },
      getHashListFromHash(hash) {
        return getHashListFromHash(config.path, hash)
      },
      getLatestTagMatchingName(name) {
        return getLatestTagMatchingName(config.path, name)
      },
    }
    return context
  }
}