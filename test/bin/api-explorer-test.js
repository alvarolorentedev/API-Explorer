jest.mock('commander', () => {
    const jestFn = {
            default: this,
            version: jest.fn(() => jestFn),
            command: jest.fn(() => jestFn),
            description: jest.fn(() => jestFn),
            action: jest.fn(action => {
                let input = ["GOOD","BAD"]
                action(input)
                return jestFn
            }),
            parse: jest.fn(() => jestFn)
        }
    return jestFn
})

jest.mock('../../lib/index', () => {
      return {
      }
})

jest.mock('../../package.json', () => {
    const randomNumber = () => Math.floor((Math.random() * 10) + 1)
    return {
        version: `${randomNumber()}.${randomNumber()}.${randomNumber()}`
    }
})

const commander = require('commander'),
    apiExplorer = require('../../bin/api-explorer'),
    index = require('../../lib/index')
    packageJson = require('../../package.json')

describe('command line', () => {
    it("is version from package.json", () => {
        expect(commander.version.mock.calls[0][0]).toBe(packageJson.version)
    })

    it("is has command to convert from raw with correct description", () => {
        expect(commander.command.mock.calls[0][0]).toBe("api-explorer [pathApiDefinition]")
        expect(commander.description.mock.calls[0][0]).toBe("explores your api to check if there are any unexpected errors")
        expect(commander.action.mock.calls[0][0]).toBeInstanceOf(Function)
    })
})