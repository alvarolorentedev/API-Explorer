const coffee = require('coffee'),
    executable = require.resolve('../../bin/api-explorer')
    
describe('cli', () => {
    [
        "/aaa/aa/a"
    ].forEach((path) => {
        it(`should do`, done => {
            coffee.fork(executable, ['api-explorer', path])
                .expect('stdout', "TBD\n")
                .expect('code', 0)
                .end(done)
        })
        
    });
})