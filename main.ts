info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    VENO_US.setPosition(138, 107)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    if (info.score() >= 5) {
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.gameOver(true)
})
let VENO_US: Sprite = null
info.setLife(3)
info.setScore(0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999988999988888888888888889999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998988888888888888888889988999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992229999999999999999999999998988888888888888888888889999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999922222222222222299699999....998888888888888888888888899999966999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992222292929229922229999999.999.998888888888888888888888999996666669
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222222222222222229229999999.9999888888888888888888888889999999996669
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992922222222222222222929999999.9998888888888888888888888889999999996999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999922292922222222222222299999999.988e88888888888888888888889999999996999
    9999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999229222922229222222222229999999988e88888888888888888888e899999999999999
    9999999999999999999999999999999999999999dcb9999999999999999999999999999999999999999999999929222222222292222222922299999999.8888888888888888888888899999999699999
    999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999992222222222222222222292929999999e.8888888888888888888888899999999669999
    999999999999999999999999999999999999999dbcbb9999999999999999999999999999999999999999999999222222222222222222222922299999eee.e88888888888888888888899996999699996
    999999999999999999999999666999999999999dcccc9999999999969999999999999999999999999999999996222222222222222222922222299999999e.88888888888888888888e99999999996999
    99999999999999999999999996699999999999dbccccb999999999999999999999999999999999999999999999992222222922222222922222999999999e.88888888888888888889e99999999699999
    99999999999999999999999996699699999999dbbccbb999999969999999999999999999999999999999999999999292222222222222922929999996999e.88888888888888888889e99999969999966
    9999999999999999966999996699999999999ddcbcccbb99999699999999999999999699999999999999999999999222222222922222222929999999999e.88888888888888888889e99699999999969
    9999999999999999969999999999999999999dbcccccbb99999999999999999999999999969996999999999999999922999222222222222299999999999.9888888888888888888896e9699969999966
    699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb999999969999999999996999999222299922222222299999999999.8888888888888888889999e9969999999996
    999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb999999999999999999999999699999222229922222999999999996.88888888888888888e69999e969999999999
    696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb669699999969999999996999999999699992229922299999999e66888888888888888889e96666e696999699999
    69999699999999999999999999999999669dccccfffbccccb6966dbcbb9dccc9dbcbb669999999999999999999999999999999999992222996666996e68868888888e88888869e96999e669666669996
    6999999999999999999969969999999966bdbbbbbbbfbbbbbb966dbccb9dbbb6dbbcc669999999996699999999999999999999699999966996669966eeeee888888e888888886e999996e99966666666
    9999999999999999999999999999999999dbbcccccccfcbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996e8888888889888888e669666e66666666666
    9999999999999999999699999999999999bcccccccccfcccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999688889.8888888888e666666e66666666666
    999999996699999699999669999999999999ccccccccffcc666666bccbcccccccccbb669666669966666696699699669699969999999999999999999999969988..8888888888e6666666e66666666ff
    999999999969999669966699999999999999ccbbbbbbcffc666666cccbbbbbbcccccc669669999969966699999999999999669969699999999666699999966969.9888988888e86666666e666666ffff
    999999999999669996966996699999999999bbcbbccbbbfb6666666bbbcbbbccbbbb6666666699666996666699966999996669966699999996696699969966996.f888888888888666666e66666fffff
    999996699696669996999999969999999999bbcbbbbbbbfb66666666bccccccccbb66666666666696696696666666966696669669966699966966966699666666.f888888888888666666ee66fffffff
    666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc666666666666666666666666666666666666666666666666966666666666666.88688888888886666666e6ffffffff
    666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc666666666666666666666666666666666669666666666666666666666666666.8888888888e888666666efffffffff
    6666666666666666666669699969999999999cccccccccc966666666dcbbbfcbbc666666666666666666666666666666666666666666666666666666666666666688888888888888666666efffffffff
    66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbfcccc666666666666ff6666666666666666666666666666666666666666666666ff66.88888888886888666ffefffffffff
    666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccfbbbcbb66666666666f66666666666666666666666666666666666666666666666ff6.8888888888888866fffefffffffff
    666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbfbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff.88888888888688fffffefffffffff
    b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbfcbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f688f888888886f88fffeefffffffff
    b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbfcbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f88f88888e888888ffffffffffffff
    bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbfbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666f888888888efffffffffffffffffff
    444466bb44464446fffccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbfcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666f8868888fffffffffffffffffffff
    44b6b4b4b4b6b44fffffcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbfcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666f888888ffffffffffffffffffffff
    444444b44444fffffffffbfbbbbcbbbbbbcb444ccbbfbccc44f44ecbbcbbbfbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff8888ffffffffffffffffffffff
    4f44446ffffffffffffffcfccbbccbbbccc4ff4ccbcfbcc444ff44ccbcbbbfbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff488fffffffffffffffffffffff
    4ffffffffffffffffffffffbbbbbbbbccc4ff46ccbbfbcc444444bdbbccfffbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4f8fffffffffffffffffffffff
    ffffffffffffffffffffffcfcccccccccddddbbccbbfbcc44444dfdbbccfbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
    fffffffffffffffffffffffcfccccccccddbbbbccbbfbcc44bb4dfdbbccfbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
    fffffffffffffffffffffffdfbbbbbbbcbbccccccbfbbbcd44ddffdbbccfbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
    fffffffffffffffffffffffbfbccbbbbcbccccccccfbbccd3ddd4ffbbccfcccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
    ffffffffffffffffffffffdccfccbbcccbcc44ccbbfbbbccdccccccccccfcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
    ffffffffffffffffffffffdbcfbbbbcbbbcc4cccbffcbbcbbcccccccccffbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
    fffffffffffffffffffffffbbbfbcbbbbbbccbffcfccbbcbbbbcbbbcbbfcccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
    fffffffffffffffffffffffbbbbfccbbccbccfffffbbbbcbbcccbccccbfcbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
    fffffffffffffffffffffffbccbffbbbccbbbfbbbbbbbbbbbbccbbbcbbfbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
    fffffffffffffffffffffffbbbbbfffcbbbbbffbccbbcccbbbbbbbbbcfcbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
    fffffffffffffffffffffffbbcbbcccfcbbcccfbccbbccbbbcccbbbcfcccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
    ffffffffffffffffffffffcbbcbbccbcfbbbcbfbbbbbbbbbbcccbcffcbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
    ffffffffffffffffffffffccbcbbcccccfbbbfbbbbbbcccbbbbbbfccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
    ffffffffffffffffffffffccbbbbcccccbfbcfcccbccccccbbbbfbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
    fffffffffffffffffffffffcbcbbcccccbfffbbbbcccbcbccfffbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
    fffffffffffffffffffffffffcbbcccccbbbfffbccbcbcffffbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
    fffffffffffffffffffffffcbbbbcccccbbfccbfccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
    ffffffffffffffffffffffccbccbcccccbfbbbbcfffcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
    ffffffffffffffffffffffccbccbbbbbbffcbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
    ffffffffffffffffffffffccbbbbbbbbbfcfbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    ffffffffffffffffffffffccbbbbbccffbbfbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
    ffffffffffffffffffffffccbcbbcccffbbfbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
    ffffffffffffffffffffffccbccbccbbbbbfbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
    ffffffffffffffffffffffccccbbbbbbbbcfccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
    ffffffffffffffffffffffccccbbbbbcbbcfbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
    fffffffffffffffffffffcccccbbbbbcccbffffcbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
    ffffffffffffffffffffffccccbbccbbccffbccffffcbcbcbcccbccbcccbbcccbccccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
    fffffffffffffffffffffbccbbccbbbbbbffbcccbcbfffbcbccccccbbbbbbbbbbcccbfcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
    fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbffcbcccbcbbbbbbbbbbbcccfccfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
    ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcffbccccccbbbcccbbbbcccfcbfbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
    fffffffffffffffffffccccccbbccbccbcccbcccbcbcbcbffcccbcbbbcccbbbbbcccfccfbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
    ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcffccbbbbbbbbbbbbbccfcccfbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
    bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcfcbbbbbbbbbbbcccffcfffcbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
    bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbccfbbcbbbbbbbbcccffcfffcccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
    bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccfbcbbbbbbccccffffffffcccffffffcccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
    bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbffbbbcccccffffbfffff1ffcccccfcccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
    bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccfbcbbcccccf1ffcffffffb1ffccccfcccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
    bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccf1fff1ffffbccffccccfccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
    bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccf1fccffffcccffccccfcccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
    ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbccccfcffcffff11fffccccfcccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
    ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbcccccfcfffffffccfffccccfccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
    cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccfff2fffff2f2ff2cbcfcbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
    cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbcccccccccccccccccfff2fffff1ffff22ccfccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbffffffffffcfffc2ccfccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbfcffffcffffcfff2ccfcccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
    bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccfcffcfcfffcffff2ccfbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
    bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccfcffcfcfffccfffcccfbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
    bffffddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccfcffffcfffffffffbbfcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
    ffffffffbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbfcffcfffffccf2fcffcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
    fffffffffffffffffffffffffffffffffcccccccccccccccfcccccccccccccccfff2fffff2ff2fccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
    fffffcccfffffffffffffbccccccccccfffffffbccccccccfcbcccccccccccccfffcfffffff2cfccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffccffccbbbbbbbbbfbffffffffccbbbbbbccfffffcccccffcbbbbbbbbbcccccfcccffffcfcccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffbbbffbbffffffffffffffffffffffffffffffffffffcffccccccccccccccccffffcffffccccccffffffffffffcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffbffbfffffffccccccccfffffffffffffb2c2fffffffffffffccccfffffffffffffffffffffffccccccfffffcfffffffffbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
    ffffffbcfcbffffffffbbcccffffffffffbcffffffff222cfffcfffffffffffffffffffffffffcccccccbbbbffbbfffffbbbbbfffbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
    ffffffffffffffffffffffbbfbffffffffffffffbfffff22fffcccccccbffffffffffffcfccbbfffffbbbbbbbbfffbbbbfffbbbbbfffbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
    bfffbfffffffffbbbfffffffbfbbbfffffffffffffffbffffffffcccccccccfffcccfffffbbccffffffffffffffffffffffffffbbbbbffbbbbbbbbbbbbbbbbfffffffbbbbbcccbbbbccbbbbbbbbbbbbb
    bfffbffffffbfffffffffffffffffffffffffffffffffffffffffffffffffccccffccffbfffffffcbbfffffbbbbbbbbbbfffffcccccccfffbbbbbbbbbbffffbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbb
    ffffbffffffffffffffffffffffffffbbffffffffffffffffffffffbfffffffffffffffbfbbbfffffffffffffffffcccccccccfffffcccccffffcccccfccffffffffffffffffffffffbbbbbbbbbbbbbb
    ffffffffffffbffffffffffffffffffffffffffff2fffffffffffffffffbbbbbbbffffffffffffbbbbccccccccccffffffffffffffbfffcccccfffffffffbbbbbfffffffffffffbfffffffffffffffbb
    fffffffffbfffbbfffffffffffffffffffffffffffffffff2fffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbffffffffccbbbbbbbbfbbfffbbbbfffbbbbbbffbbbbbbbbfffbbfff
    fffffcffbffffffffffffffffffffffffffffffffffff22f2fff2ffffffffffbffffffcffffcccffffffffbbbbbffffffffffffffffffffffffffffffbbbfbbbfffffbbbfffffbbbfffbbbbbbbfbbccc
    ffffffffccfffffffffffffffffffffffffffff2fff2f2fffffff2ffffffffffffffbbffffbcccbbbbbffffffffffbbbbbbfffffbbbbbbbbbbbfffffffffffffffbbbffffbbbbffbbbbffbbbbbcfcccf
    fffffffffffffffffccfffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffffccfffffffffffffbbbbbfbbbbbbbbbbbbfffffffbbbbfffffffffffbbffbbbbfffccccfccf
    fffffffffbffffffcfffffffffffffffffffffff22fff2fffffff2cccfffffffffffffffffffffffffffffbbbffffffffbbbbffbbbfffbbbbcccccbbbbbbbbffbbbbbbbbffffbffbbffbbbbbffbcfccf
    ffcffffffffffffffffffffffffffbbfffffffff22ccfffffffff2fffffffffffffffffffffffffffffffffffffffffffffffbbfbbcfcfffccccccffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffff
    fffcfcffcfffffffffffbbbbbbffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccbbbbbffffffffffffffffffffffffffff
    ffffffffffffffffbbffffffbbbbbbbffffffffffffff2ff2f2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffdfdfffffffff4ffffffb44ffffffb444ffffffffffff22ff2ffffffd4fffffffffffffffffffffffffffffffff4ffffffffffcffeeefffffffffffffffffffffffcccbbcccffffffcccccccbfffbff
    ffbfdf44ffffffff4fffffffffffffffffffffffffdffdfffffffffffffffffffddddffffffffff4ffffffffffffffffffffffffffffffffffccffffbbfffcccccccffffffffffffffffffffffbbbfff
    bfffefb44ffffffffffffddfffffffe4dddddddfffffffffffffffffffffffffffffff4dddffffffffffffffffdffffddfffffffffffffffffffffffffffffffbcffffffffffffffffffffbbfffffffb
    bfff3ffffffffffdfff4ffffffffffffffffffffddddffffffffffdddd4ddddffffffffffffdffffddd44dfffffffffffffffffddd4dffffffffffffffffffffffffffddddbbbbffffbbbbffbbbccbbb
    dfdd3dfffffffffffffffffffffffffffffdffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffddddddffffffffffffffffffffffffffffbcbbbb
    dffffffffffffffffffffffffffffffddfffffffddddddddd4fffffffffffffffffffffffffffffffdfddddddddd4ffffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffddd
    ffddddddddddddfdd4ddfffffffffddffffffffffffffffffdd4ddffffffffffffdddddddffffffffffffffff4dddddfffdddddddddd4ddddddffffffffffffffffffdfffffffffffddddfffffffffff
    4fdffffffffffffffffffffffffffffffffffffffddddddddfffffffddddddddddfffffffffffffffffffddd4fffffffffdddddddddddddddddddddd4dddddddddddddddddffffffffffff4ddddddfdd
    dddddddddd4f4ddddd3ddddddddddddd4fffdddddffffffffffffffffffddddddddddddddddddfffffffddddddddddddddfffffffffffffddd44dddddddddddddddddddddddddddddddddd4dddddddff
    `)
let MCPLAYA = sprites.create(img`
    . . . . 2 2 2 5 2 5 2 2 2 2 . . 
    . . . . 2 2 5 2 5 2 5 2 2 2 . . 
    . . 2 2 2 5 2 2 5 2 2 5 2 2 2 2 
    . . . . 8 1 f 8 8 8 f 1 8 . . . 
    . . . . 8 8 8 f f f 8 8 8 . . . 
    . . . . 8 8 f f f f f 8 8 . . . 
    . . . . 8 8 8 f f f 8 8 8 . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 . . 2 2 2 2 2 . . 2 . . 
    . . . 2 . . 2 2 2 2 2 . . 2 . . 
    . . . 2 . . . 2 . 2 . . . 2 . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . 2 2 . 2 2 . . . . . 
    `, SpriteKind.Player)
MCPLAYA.setStayInScreen(true)
controller.moveSprite(MCPLAYA)
MCPLAYA.setPosition(111, 86)
VENO_US = sprites.create(img`
    ........fffff.......
    .......fffffff......
    ......ff11111ff.....
    .....fff11111fff....
    .....fffffffffff....
    .....fffffffffff....
    .....fffffffffff....
    ....ff.1.1.1.1.1....
    ....ff..............
    ....ff..............
    ....ff..............
    ....ff..............
    ....ff1.1.1.1.1.1...
    .....ffffffffffff...
    .....ffffffffffff...
    .....ffffffffffff...
    .....fffff..fffff...
    .....fffff..fffff...
    .....fffff..fffff...
    ......fff....fff....
    `, SpriteKind.Enemy)
VENO_US.setPosition(10, 56)
VENO_US.follow(MCPLAYA, 60)
let Bottle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 . . . . 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 9 9 1 . . . . 
    . . . . 1 1 1 1 1 9 9 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 9 9 1 1 1 1 1 . . . . 
    . . . . 1 9 9 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Food)
Bottle.setPosition(19, 51)
let green_goo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 7 . . . 
    . . . . . . . . . . 7 7 7 7 . . 
    . . . . . . . 7 7 7 7 7 7 7 7 . 
    . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
    . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 . 7 7 7 7 7 7 7 . 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 . . 7 . . . . 
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 . 7 7 7 7 . . . . . . . 
    . 7 . . . 7 . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
green_goo.setPosition(127, 97)
let bloodpotbone = sprites.create(img`
    . . . . . . . . . . 1 1 1 1 1 1 
    . 2 2 2 2 . . . . . 1 1 1 1 1 1 
    . 2 2 2 2 2 . . . . . . 1 1 . . 
    . 2 2 2 2 2 . . . . . . 1 1 . . 
    2 2 2 2 2 2 . . . . . . 1 1 . . 
    2 2 2 2 2 . . . . . . . 1 1 . . 
    . 2 . . . . . b b . . . 1 1 . . 
    . . . . . . . b b . . . 1 1 . . 
    . . . . . . b . . . 1 1 1 1 1 1 
    . . . . . b . . . . 1 1 1 1 1 1 
    e e e e e e e e e e . . . . . . 
    . e e e e e e e e . . . . . . . 
    . e e e e e e e e . . . . . . . 
    . e e e e e e e e . . . . . . . 
    . e e e e e e e e . . . . . . . 
    . . e e e e e e . . . . . . . . 
    `, SpriteKind.Food)
bloodpotbone.setPosition(134, 23)
let candy_and_fries = sprites.create(img`
    b 7 7 7 7 7 b e b e e b b b b b 
    b 7 7 7 7 7 e e 5 e e e b b b b 
    b e b e e e e b b 5 e e e b b b 
    b e b b e e e b b e 5 e 5 e e b 
    b e e e 4 e e b b e e 5 e 5 e e 
    b e e 5 4 5 b b b e e e e e 5 e 
    b b 5 e 4 5 1 b b b b e e e e e 
    b 5 e e 4 5 b b b 5 5 5 5 e e b 
    5 e e e 4 b b b b e e b b e b b 
    b e e e b e e e e e e 5 e e b b 
    b b b b b b 5 e e b e e 5 e e b 
    b b 1 b e b e 5 e e e e e 5 e b 
    b 5 5 5 e e e e 5 b b b e b e b 
    4 4 4 4 4 e b e e 5 e b b b e e 
    e e e e b b b b e e e e e e e b 
    b e e b b b b e b b e e e e b b 
    `, SpriteKind.Food)
candy_and_fries.setPosition(35, 88)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 f f 8 8 f f 8 . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 8 f f f 8 8 8 . . . . . 
    . . 8 8 8 8 8 2 8 8 8 . . . . . 
    . . . . . 1 1 . . . . . . . . . 
    . . . . 1 1 1 1 . . 8 8 8 8 . . 
    . . . . . . . . 1 . 8 . . . . 8 
    . . . . . . . . 1 1 8 8 8 8 8 . 
    . . . . . . . . 1 . 8 . . . . 8 
    . . . . . . . . . . 8 8 8 8 8 . 
    `, SpriteKind.Food)
mySprite.setPosition(73, 37)
