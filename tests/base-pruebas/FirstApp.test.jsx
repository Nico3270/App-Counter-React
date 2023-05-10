import { render } from "@testing-library/react";
import { App } from "../../src/FirstApp";

describe("Pruebas en componente App desde FirstApp.jsx", () => {
    test("Probando componente App, debe hacer match con snaspshot", () => {
        render (<App />)
    })
})