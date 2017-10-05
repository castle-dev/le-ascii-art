"use strict";
var chalk_1 = require('chalk');
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
            _this.printLine(line, 'green');
        });
        nameLines.forEach(function (line) {
            _this.printLine(line, 'blue');
        });
    };
    Printer.prototype.printLine = function (text, color) {
        var characters = text.split('');
        var prettyLine = [];
        characters.forEach(function (character) {
            if (character === ' ') {
                prettyLine.push(character);
            }
            else {
                if (process) {
                    if (color === 'blue') {
                        prettyLine.push(chalk_1["default"].blue(character));
                    }
                    else if (color === 'green') {
                        prettyLine.push(chalk_1["default"].green(character));
                    }
                    else {
                        prettyLine.push(character);
                    }
                }
                else {
                    prettyLine.push(character);
                }
            }
        });
        console.log(prettyLine);
    };
    return Printer;
}());
exports.Printer = Printer;
;
