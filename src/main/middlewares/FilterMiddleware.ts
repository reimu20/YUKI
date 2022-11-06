const debug = require('debug')('FilterMiddleware.ts')

export default class FilterMiddleware
  implements yuki.Middleware<yuki.TextOutputObject> {
  public process (
    context: yuki.TextOutputObject,
    next: (newContext: yuki.TextOutputObject) => void
  ) {
    debug('[%d] %s', context.handle, context.text)
    context.code = `/${context.code}`
    next(context)
  }
}
