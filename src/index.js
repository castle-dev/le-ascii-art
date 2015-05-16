var chalk = require('chalk');

module.exports = {
  printLogo: function () {
    var art = [
      '                                                            ',
      '                                                            ',
      '                           ' + chalk.green('======') + '                           ',
      '                        ' + chalk.green('+===========') + '                        ',
      '                      ' + chalk.green('================,') + '                     ',
      '                  ' + chalk.green('.==========') + chalk.bgWhite('77') + chalk.green('==========') + '                   ',
      '                ' + chalk.green('===========') + chalk.bgWhite('777777') + chalk.green('===========') + '                ',
      '              ' + chalk.green('=============') + chalk.bgWhite('777777') + chalk.green('==============') + '             ',
      '              ' + chalk.green('=======') + chalk.bgWhite('77') + chalk.green('====') + chalk.bgWhite('777777') + chalk.green('====') + chalk.bgWhite('77') + chalk.green('=======+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777') + chalk.green('==') + chalk.bgWhite('7777777777') + chalk.green('==') + chalk.bgWhite('7777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777777777777777777777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777777777777777777777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777777777777777777777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777777777777777777777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('777777777') + chalk.green('====') + chalk.bgWhite('777777777') + chalk.green('+=====') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('777777') + chalk.green('+=========') + chalk.bgWhite('777777') + chalk.green('+====+') +'             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('7777') + chalk.green('==============') + chalk.bgWhite('7777') + chalk.green('+====+') + '             ',
      '              ' + chalk.green('=====') + chalk.bgWhite('777') + chalk.green('================') + chalk.bgWhite('I77') + chalk.green('+=====') + '             ',
      '              ' + chalk.green('=======') + chalk.bgWhite('777?') + chalk.green('===========') + chalk.bgWhite('777?') + chalk.green('======+') + '             ',
      '              ' + chalk.green('=========') + chalk.bgWhite('7777') + chalk.green('======') + chalk.bgWhite('7777') + chalk.green('==========') + '             ',
      '                ' + chalk.green('==========') + chalk.bgWhite('77777777') + chalk.green('==========') + '                ',
      '                  ' + chalk.green(':==========') + chalk.bgWhite('77?') + chalk.green('==========') + '                  ',
      '                     ' + chalk.green('+=================') + '                     ',
      '                        ' + chalk.green('============') + '                        ',
      '                           ' + chalk.green('======:') + '                          ',
      '                             ' + chalk.green('==') + '                             ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '    ' + chalk.blue(':::::::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::::::') + ' ' + chalk.blue(':::::::::') + '  ' + chalk.blue('::') + '      ' + chalk.blue(':::::::') + '   ',
      '  ' + chalk.blue(':::') + '           ' + chalk.blue(':::') + '    ' + chalk.blue('::') + '          ' + chalk.blue('::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::') + '        ',
      '  ' + chalk.blue('::') + '           ' + chalk.blue('::::') + '     ' + chalk.blue('::') + '         ' + chalk.blue('::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::') + '        ',
      '  ' + chalk.blue('::') + '          ' + chalk.blue('::') + '  ' + chalk.blue('::') + '     ' + chalk.blue('::::') + '      ' + chalk.blue('::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::::::,') + '   ',
      '  ' + chalk.blue('::') + '          ' + chalk.blue(':') + '    ' + chalk.blue('::') + '       ' + chalk.blue('::') + '     ' + chalk.blue('::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::') + '        ',
      '   ' + chalk.blue('::') + '     ' + chalk.blue(':') + '  ' + chalk.blue('::') + '    ' + chalk.blue('::') + '  ' + chalk.blue( ':' ) + '    ' + chalk.blue('::') + '     ' + chalk.blue('::') + '     ' + chalk.blue('::') + '      ' + chalk.blue('::') + '        ',
      '    ' + chalk.blue(':::::::') + ' ' + chalk.blue('::') + '      ' + chalk.blue('::') + ' ' + chalk.blue('::::::') + '      ' + chalk.blue('::') + '     ' + chalk.blue('::::::,') + ' ' + chalk.blue(':::::::') + '   ',
      '                                                            ',
      '                                                            '
    ];
    for (var line = 0; line < art.length; line++) {
      console.log(art[line]);
    }
  }
};
