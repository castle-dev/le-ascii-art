"use strict";
/**
 * A module for printing pretty stuff
 * @module le-ascii-art
 */
var Printer = (function () {
    function Printer() {
    }
    Printer.prototype.getLogoLines = function () {
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
    };
    Printer.prototype.getNameLines = function () {
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
    };
    /** Print the Castle logo. */
    Printer.prototype.printLogo = function () {
        var _this = this;
        var logoLines = this.getLogoLines();
        var nameLines = this.getNameLines();
        logoLines.forEach(function (line) {
            _this.printLine(line);
        });
        nameLines.forEach(function (line) {
            _this.printLine(line);
        });
    };
    Printer.prototype.printLine = function (text) {
        console.log(text);
    };
    return Printer;
}());
exports.Printer = Printer;
;
