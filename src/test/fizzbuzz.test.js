import { describe, expect, it } from "vitest";


const fizzbuzz = (number) =>{
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')
}


describe("fizzbuzz", () =>{
  it('should be a function', () =>{
    expect(typeof fizzbuzz).toBe('function')
  })
  it('should throw if not number is provided as parameter', () =>{
    expect(() => fizzbuzz()).toThrow()
  })
})