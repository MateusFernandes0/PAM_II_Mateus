import assert from 'node:assert/strict';

let nome = 'Claudia Pinto'

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /Claudia/);
})

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /Pinto/);
})

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /Joao/);
})