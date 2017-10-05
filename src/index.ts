import chalk from 'chalk';
/**
 * A module for printing pretty stuff
 * @module le-ascii-art
 */
export class Printer {
  getLogoLines () {
    return [

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
  }
  getNameLines () {
   return [
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
  }
  /** Print the Castle logo. */
  printLogo () {
    const logoLines = this.getLogoLines();
    const nameLines = this.getNameLines();
    logoLines.forEach((line) => {
      this.printLine(line, 'green');
    });
    nameLines.forEach((line) => {
      this.printLine(line, 'blue');
    });
  }
  private printLine(text, color) {
    let characters = text.split('');
    let prettyLine = [];
    characters.forEach((character) => {
      if (character === ' ') {
        prettyLine.push(character);
      } else {
        if (process) {
          if (color === 'blue') {
            prettyLine.push(chalk.blue(character));
          } else if (color === 'green') {
            prettyLine.push(chalk.green(character));
          } else {
            prettyLine.push(character);
          }
        } else {
          prettyLine.push(character);
        }
      }
    });
    console.log(prettyLine);
  }
};
