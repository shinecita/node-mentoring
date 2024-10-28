
class Player {

    constructor() {}

/**
   * Get a list of players
   * @param {string[]} gameIds
   * @param {*} callback
   */

static fetchPlayerByGameIds(gameIds, callback) {
    if (gameIds.length < 1) {
        return callback([]);
      return setImmediate(() => callback(null, { players: [] }));
    }

    return MyService.getPlayerByIds(gameIds, callback);
  }


getPlayerByIds(gameIds, callback) {
    db.find()

    callback(error, players);
}

}