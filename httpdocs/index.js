// wasm_exec.js comes from the targets folder in the TinyGo installation
import './wasm_exec.js'
// instantiateWasm.js comes from
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
import { wasmBrowserInstantiate } from './instantiateWasm.js'

const initWasm = async () => {
  const go = new Go() // Defined in wasm_exec.js
  // override syscall/js.finalizeRef to throw a warning instead of an error
  go.importObject.gojs["syscall/js.finalizeRef"] = (v_ref) => {
    // Note: TinyGo does not support finalizers so this should never be called.
    console.warn('syscall/js.finalizeRef not implemented')
  }

  const wasmModule = await wasmBrowserInstantiate('./main.wasm', go.importObject)

  // Allow the wasm_exec Go instance, bootstrap and execute the WASM module
  go.run(wasmModule.instance)
  return wasmModule.instance
}

const app = (wasmModuleInstance) => {
  const { exports: wasm } = wasmModuleInstance
  // Set the result onto the HTML body
  const codeContainer = document.getElementById('output')
  const output = []
  output.push(`// wasm.add(2, 6): ${wasm.add(2, 6)}`)
  output.push(`// wasm.multiply(3, 4): ${wasm.multiply(3, 4)}`)
  output.push(`// wasm.concatenate('a', 'b'): ${wasm.concatenate('a', 'b')}`)
  output.push('')
  output.push(`// concatenateFunc('a', 'b'): ${concatenateFunc('a', 'b')}`)
  output.push(`// uuidFunc(): ${uuidFunc()}`)
  codeContainer.innerHTML = output.join('<br>')
}

const instance = await initWasm()
app(instance)
