var chalk = require('chalk');
/**
 * A module for printing pretty stuff
 * @module le-ascii-art
 */
module.exports = {
  /** Print the Castle logo. */
  printLogo: function () {
    var logo = [

      '                                                                                ',
      '                                                                                ',
      '                                     `-/+/:.                                    ',
      '                                  .:/++++++++/-`                                ',
      '                              `-/+++++++++++++++/:.                             ',
      '                           .:/++++++++++++++++++++++/-`                         ',
      '                       `-/+++++++++++/-`  .:/+++++++++++:.                      ',
      '                    .:/+++++++++++++-        /+++++++++++++/-`                  ',
      '                  `+++++++++++//++++-        /++++//++++++++++:                 ',
      '                  `++++++++:.  :++++.        :++++. `-/+++++++/                 ',
      '                  `++++++:     :/-.           `.:+.    `++++++/                 ',
      '                  `++++++:                             `++++++/                 ',
      '                  `++++++:                             `++++++/                 ',
      '                  `++++++:                             `++++++/                 ',
      '                  `++++++:              .`             `++++++/                 ',
      '                  `++++++:          `-:+++/:.          `++++++/                 ',
      '                  `++++++:       .:/++++++++++/-`      `++++++/                 ',
      '                  `++++++:   `-:+++++++++++++++++/:.   `++++++/                 ',
      '                  `++++++:   -:+++++++++++++++++++/:`  `++++++/                 ',
      '                  `++++++++:-`  .-/++++++++++++:-`  .-/+++++++/                 ',
      '                  `+++++++++++/-.  `-:+++++/:.  `-:+++++++++++:                 ',
      '                    `-/+++++++++++:-`  .--`  .-/+++++++++++:.`                  ',
      '                        .:+++++++++++/:. `-:+++++++++++/-`                      ',
      '                           `-/++++++++++++++++++++++:.`                         ',
      '                               .:+++++++++++++++/-`                             ',
      '                                  `-/++++++++:.                                 ',
      '                                      .:+/-`                                    ',
      '                                                                                ',
    ];
    var name = [
      '                                                                                ',
      '         `..`          `           `.`                                          ',
      '     -ohdmmmmdy/      :d:       -sdmmmmh. mmmmmmmmmmmm` hmy        ommmmmmmm+   ',
      '   `smdo:.``.:+`     -dmd-     .mmo` `-/  ..../mm/....  hmy        omm......`   ',
      '   ymd.             .dmymd.    .dmy-          -mm:      hmy        omm          ',
      '  .mms             .dm+ ymh.    .ohmdy+.      -mm:      hmy        ommdddddh    ',
      '  `dmh            `hmo  `ymh`      `:ymd:     -mm:      hmy        omm......    ',
      '   :dmy-      .` `hmy    `hmy` `.    `mms     -mm:      hmy        omm          ',
      '    .odmdyssydmo`ymy`     `hmy smdyssdmy.     -mm:      hmdyyyyyy: ommyyyyyy/   ',
      '       -/++++:. .//`       .//. ./+++/.       `//.      :////////. -////////-   ',
      '                                                                                ',
      '                                                                                ',
    ];
    var art = [];
    for (var i = 0; i < logo.length; i++) {
      var prettyLine = [];
      var chars = logo[i].split('');
      for (var j = 0; j < chars.length; j++) {
        if (chars[j] === ' ') { prettyLine.push(chars[j]); }
        else { prettyLine.push(chalk.green(chars[j])); }
      }
      art.push(prettyLine.join(''));
    }
    for (var i = 0; i < name.length; i++) {
      var prettyLine = [];
      var chars = name[i].split('');
      for (var j = 0; j < chars.length; j++) {
        if (chars[j] === ' ') { prettyLine.push(chars[j]); }
        else { prettyLine.push(chalk.blue(chars[j])); }
      }
      art.push(prettyLine.join(''));
    }
    for (var line = 0; line < art.length; line++) {
      console.log(art[line]);
    }
  }
};
