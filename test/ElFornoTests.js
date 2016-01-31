var assert = require('assert');
var elForno = require('./../ElForno.js');

describe('toBeTested()', function()
{
    it('toBeTested Big Success', function () {

        var message = "A test message";

        assert.equal("A test message", elForno.toBeTested(message));
    });
})
