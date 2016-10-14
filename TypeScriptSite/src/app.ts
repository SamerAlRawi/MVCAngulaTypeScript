import {Component} from "angular2/core"
import {MyModel} from "./model"

//to enable prod mode in angular
import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
    selector: `my-app`,
    template: `<div>Hello from Angular2 in TypeScript.</div>`
})

export class MyApp {
    id:number = 3;
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }
}