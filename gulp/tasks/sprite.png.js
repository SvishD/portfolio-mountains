'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/sprite/*.{png,jpg}').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
        return spriteData.pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
    });
};
