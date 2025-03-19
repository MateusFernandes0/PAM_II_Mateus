import assert from 'node:assert/strict';

let objeto1 = {
    a: {
        b: 1,
    },
};
let objeto2 = {
    a: {
        b: 1,
    },
};
let objeto3 = {
    a: {
        b: 2,
    },
};

Deno.test("Teste do assert notDeepEqual", () => {
    assert.notDeepEqual(objeto1, objeto2);
})

Deno.test("Teste do assert notDeepEqual", () => {
    assert.notDeepEqual(objeto1, objeto3);
})