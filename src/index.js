var chalk = require('chalk');
/**
 * A module for printing pretty stuff
 * @module le-ascii-art
 */
module.exports = {
  /** Print the Castle logo. */
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
