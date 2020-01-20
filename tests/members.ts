console.log = function() {
  return true;
};

import {
  Drash,
  ServerRequest,
  assertEquals,
  decoder,
  runTests,
  test
} from "../deps.ts";

function runTest(name, testFn) {
  Object.defineProperty(testFn, "name", { value: name });
  return test(testFn);
}

const _fetch = {
  get(url: string, options: any = {}) {
    options = Object.assign(options, {
      method: "GET",
    });
    options.body = JSON.stringify(options.body);
    return fetch(url, options);
  },
  post(url: string, options: any = {}) {
    options = Object.assign(options, {
      method: "POST",
    });
    options.body = JSON.stringify(options.body);
    return fetch(url, options);
  }
};

function responseJsonEquals(actual: any, expected: any) {
  return assertEquals(JSON.parse(actual), expected);
}

export default {
  Drash,
  ServerRequest,
  assert: {
    equals: assertEquals,
    responseJsonEquals: responseJsonEquals
  },
  decoder,
  fetch: _fetch,
  runTests,
  test: runTest,
};
