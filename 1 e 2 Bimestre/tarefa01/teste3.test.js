import assert from 'node:assert/strict';

let melhorRegiaoPokemon = 'Kanto'

Deno.test("Teste do assert match", () => {
    assert.match(melhorRegiaoPokemon, /Kanto/);
})

Deno.test("Teste do assert match", () => {
    assert.match(melhorRegiaoPokemon, /Kalos/);
})