import {Component} from "angular2/core"
import {MyModel} from "./model"

//to enable prod mode in angular
import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
    selector: `my-app`,
    template: `<div>Hello from </div>`
})

export class MyApp {
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }
}