
package main

import (
    "strconv"
    "github.com/google/uuid"
    "syscall/js"
)
func addFunction(this js.Value, p []js.Value) interface{} {
    sum := p[0].Int() + p[1].Int()
    str := strconv.Itoa(sum)
    return js.ValueOf("sum is: " + str)
}

// To make functions callable from JavaScript,
// we need to add: "//export xyz" comment above the function
//export add
func add(x int, y int) int {
    return x + y;
}

//export multiply
func multiply(x int, y int) int {
    return x * y;
}

func uuidFunction(this js.Value, p []js.Value) interface{} {
    return js.ValueOf("uuid: " + uuid.NewString())
}

// This one will never work in WASM, because we are returning a string
//export concatenate
func concatenate(a string, b string) string {
    return a + b;
}

func concatenate2(this js.Value, p []js.Value) interface{} {
    concat := p[0].String() + p[1].String()
    return js.ValueOf(concat);
}

// Declare a main function, this is the entrypoint into our go module
// That will be run. In our example, we won't need this
func main() {
    c := make(chan struct{}, 0)
    js.Global().Set("uuidFunc", js.FuncOf(uuidFunction))
    js.Global().Set("concatenateFunc", js.FuncOf(concatenate2))

    <-c
}

