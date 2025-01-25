// Imports are from the demo-util folder in the repo
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
import { wasmBrowserInstantiate } from "./instantiateWasm.js";

const go = new Go(); // Defined in wasm_exec.js. Don't forget to add this in your index.html.

const runWasmAdd = async () => {
  // Get the importObject from the go instance.
  const importObject = go.importObject;

  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate('./bee-bumper.wasm', importObject);

  // Allow the wasm_exec go instance, bootstrap and execute our wasm module
  go.run(wasmModule.instance);
  console.error('%croblog ::', 'color: #2f0', wasmModule.instance.exports)

  // const result = wasmModule.instance.exports.multiply(5, 6);
  const result = wasmModule.instance.exports.concatenate('a', 'b')
  window.wasm = wasmModule.instance
  // Set the result onto the body
  document.body.textContent = `Hello World! the result: ${result}`;
};
runWasmAdd();
