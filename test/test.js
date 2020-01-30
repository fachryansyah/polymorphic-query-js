'use strict';

var expect = require('chai').expect;
var polyMorphBuilder = require('../index');

describe('#polyMorphBuilder', function() {
    it('should generate query morphTo', function() {
        var result = polyMorphBuilder.morphTo("posts", 1, "comments");
        expect(result).to.equal(`SELECT * FROM posts JOIN comments ON comments.commentable_id = posts.id WHERE commentable_type = 'posts' AND posts.id = '1'`);
    });
});