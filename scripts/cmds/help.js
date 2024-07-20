module.exports.config = {
  name: 'help',
  version: '1.0.2',
  hasPermssion: 0,
  credits: 'NtrEms',
  description: "Beginner's Guide",
  commandCategory: 'system',
  usages: '[Name module]',
  usePrefix: true,
  cooldowns: 0,
  envConfig: {
    autoUnsend: false,
    delayUnsend: 120,
  },
}
module.exports.languages = {
  vi: {
    moduleInfo:
      '\u300C %1 \u300D\n%2\n\n\u276F Cách sử dụng: %3\n\u276F Thuộc nhóm: %4\n\u276F Thời gian chờ: %5 giây(s)\n\u276F Quyền hạn: %6\n\n\xBB Module code by %7 \xAB',
    helpList:
      '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
    user: 'Người dùng',
    adminGroup: 'Quản trị viên nhóm',
    adminBot: 'Quản trị viên bot',
  },
  en: {
    moduleInfo:
      '『 %1 』\n%2\n\n\u276F Usage: %3\n\u276F Category: %4\n\u276F Waiting time: %5 seconds(s)\n\u276F Permission: %6\n\n\uD83D\uDEE1 Help command code by NtrEms \uD83D\uDEE1',
    helpList:
      '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
    user: 'User',
    adminGroup: 'Admin group',
    adminBot: 'Admin bot',
  },
}
module.exports.handleEvent = function ({
  api: _0x40cdf9,
  event: _0x4cc36f,
  getText: _0x16ec71,
}) {
  const { commands: _0x61333f } = global.client,
    { threadID: _0x182e5d, messageID: _0x27b7a1, body: _0x45be7a } = _0x4cc36f
  if (
    !_0x45be7a ||
    typeof _0x45be7a == 'undefined' ||
    _0x45be7a.indexOf('help') != 0
  ) {
    return
  }
  const _0x45579a = _0x45be7a
    .slice(_0x45be7a.indexOf('help'))
    .trim()
    .split(/\s+/)
  if (_0x45579a.length == 1 || !_0x61333f.has(_0x45579a[1].toLowerCase())) {
    return
  }
  const _0x4cbcef = global.data.threadData.get(parseInt(_0x182e5d)) || {},
    _0x2a8fa4 = _0x61333f.get(_0x45579a[1].toLowerCase()),
    _0x5c6c39 = _0x4cbcef.hasOwnProperty('PREFIX')
      ? _0x4cbcef.PREFIX
      : global.config.PREFIX
  return _0x40cdf9.sendMessage(
    _0x16ec71(
      'moduleInfo',
      _0x2a8fa4.config.name,
      _0x2a8fa4.config.description,
      '' +
        _0x5c6c39 +
        _0x2a8fa4.config.name +
        ' ' +
        (_0x2a8fa4.config.usages ? _0x2a8fa4.config.usages : ''),
      _0x2a8fa4.config.commandCategory,
      _0x2a8fa4.config.cooldowns,
      _0x2a8fa4.config.hasPermssion == 0
        ? _0x16ec71('user')
        : _0x2a8fa4.config.hasPermssion == 1
        ? _0x16ec71('adminGroup')
        : _0x16ec71('adminBot'),
      _0x2a8fa4.config.credits
    ),
    _0x182e5d,
    _0x27b7a1
  )
}
module.exports.run = function ({
  api: _0x5d54b4,
  event: _0x463780,
  args: _0x219ec9,
  getText: _0x536a73,
}) {
  const { commands: _0x374533 } = global.client,
    { threadID: _0x3ea066, messageID: _0x3d93ef } = _0x463780,
    _0x2f56d3 = _0x374533.get((_0x219ec9[0] || '').toLowerCase()),
    _0x474b3f = global.data.threadData.get(parseInt(_0x3ea066)) || {},
    { autoUnsend: _0x443be2, delayUnsend: _0x577b07 } =
      global.configModule[this.config.name],
    _0x1072cd = _0x474b3f.hasOwnProperty('PREFIX')
      ? _0x474b3f.PREFIX
      : global.config.PREFIX
  if (!_0x2f56d3) {
    const _0x486521 = [],
      _0x28eeac = parseInt(_0x219ec9[0]) || 1
    let _0xa01fd2 = 0,
      _0x47f3d4 = ''
    for (var [_0xe9f629, _0x36d87f] of _0x374533) {
      _0xe9f629 += ''
      _0x486521.push(_0xe9f629)
    }
    _0x486521.sort((_0x425322, _0x4c7714) => _0x425322.data - _0x4c7714.data)
    const _0x45c800 = 20 * _0x28eeac - 20
    _0xa01fd2 = _0x45c800
    const _0x4af5f3 = _0x486521.slice(_0x45c800, _0x45c800 + 20)
    for (let _0x3759aa of _0x4af5f3)
      _0x47f3d4 += '[ ' + ++_0xa01fd2 + ' ] \u27A3 ' + _0x3759aa + '\n'
    const _0x2523d7 =
      'Page (' +
      _0x28eeac +
      '/' +
      Math.ceil(_0x486521.length / 20) +
      ')\nType: "' +
      _0x1072cd +
      'help <command name>"\nor use ' +
      _0x1072cd +
      'help <Number of pages>\n\nCurrently available ' +
      _0x486521.length +
      ' commands.'
    return _0x5d54b4.sendMessage(
      '=======COMMAND LIST======\n\n' +
        _0x47f3d4 +
        '\n============================\n\n' +
        _0x2523d7,
      _0x3ea066,
      async (_0x37f102, _0x44ce0a) => {
        if (_0x443be2) {
          return (
            await new Promise((_0x230087) =>
              setTimeout(_0x230087, _0x577b07 * 120)
            ),
            _0x5d54b4.unsendMessage(_0x44ce0a.messageID)
          )
        } else {
          return
        }
      }
    )
  }
  return _0x5d54b4.sendMessage(
    _0x536a73(
      'moduleInfo',
      _0x2f56d3.config.name,
      _0x2f56d3.config.description,
      '' +
        _0x1072cd +
        _0x2f56d3.config.name +
        ' ' +
        (_0x2f56d3.config.usages ? _0x2f56d3.config.usages : ''),
      _0x2f56d3.config.commandCategory,
      _0x2f56d3.config.cooldowns,
      _0x2f56d3.config.hasPermssion == 0
        ? _0x536a73('user')
        : _0x2f56d3.config.hasPermssion == 1
        ? _0x536a73('adminGroup')
        : _0x536a73('adminBot'),
      _0x2f56d3.config.credits
    ),
    _0x3ea066,
    _0x3d93ef
  )
}
