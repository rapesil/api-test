const request = require('supertest')
var chai = require('chai')
var expect = chai.expect
var assert = chai.assert

describe('GET returns a valid json', function(){
    it('teste 1', function(done) {
        request('https://jsonplaceholder.typicode.com')
            .get('/posts/1')
            .end(function(err, res) {
                assert.equal(res.body.id, 1)
                expect(res.statusCode).to.equal(200)
                expect(res.body.title).to.be.an('string')
                expect(res.body.id).to.be.a('number')
                expect(res.body.id).to.equal(1)
                done()
            })
    })
})