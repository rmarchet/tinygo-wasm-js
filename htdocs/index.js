// Imports are from the demo-util folder in the repo
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
import { wasmBrowserInstantiate } from './instantiateWasm.js'

const go = new Go() // Defined in wasm_exec.js.

const runWasmAdd = async () => {
  // Get the importObject from the go instance.
  const importObject = go.importObject

  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate('./main.wasm', importObject)

  // Allow the wasm_exec go instance, bootstrap and execute our wasm module
  go.run(wasmModule.instance)

  const { exports: wasm } = wasmModule.instance
  const result = wasm.concatenate('a', 'b')

  // Set the result onto the body
  const codeContainer = document.getElementById('output')
  const output = []
  output.push(`// wasm.add(2, 6): ${wasm.add(2, 6)}`)
  output.push(`// wasm.multiply(3, 4): ${wasm.multiply(3, 4)}`)
  output.push(`// wasm.concatenate('a', 'b'): ${wasm.concatenate('a', 'b')}`)
  output.push(`// uuidFunc(): ${uuidFunc()}`)
  codeContainer.innerHTML = output.join('<br>')
}

runWasmAdd()
