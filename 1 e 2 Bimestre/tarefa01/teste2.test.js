import assert from 'node:assert';

let lula = 13
let bolsonaro = 22

Deno.test("Teste do assert notEqual", () => {
    assert.notEqual(lula, bolsonaro);
})
