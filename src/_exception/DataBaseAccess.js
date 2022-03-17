class DatabaseAccess extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 503
  }

  statusCode() {
    return this.status
  }
}

export default DatabaseAccess
