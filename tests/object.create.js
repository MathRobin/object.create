/*globals beforeEach, describe, it, module, inject, expect */

describe('Polyfill : object.create', function () {
    'use strict';

    it('should be defined', function () {
        expect(Object.create).toBeDefined();
    });
});