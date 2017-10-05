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
      this.printLine(line);
    });
    nameLines.forEach((line) => {
      this.printLine(line);
    });
  }
  private printLine(text) {
    console.log(text);
  }
};
