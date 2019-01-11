import { Module, VuexModule, RegisterOptions } from "../src";
import Vuex from "vuex";
import Vue from "vue";
import { Container, decorate, injectable, inject } from "inversify";
import "reflect-metadata";

Vue.use(Vuex);
const store = new Vuex.Store<any>({});

decorate(injectable(), VuexModule);

@injectable()
@Module
class MyModule extends VuexModule {
  constructor(
    @inject("Options") options: (className: string) => RegisterOptions
  ) {
    super(options);
  }

  foo = {
    text: "some text"
  };
  bar = 1;
}

const container = new Container();
container
  .bind<(className: string) => RegisterOptions>("Options")
  .toConstantValue((className: string) => ({ store, name: "myModule" }));

const myModule = container.resolve(MyModule);

test("instance of", () => {
  expect(myModule instanceof MyModule).toBe(true);
  expect(myModule instanceof VuexModule).toBe(true);
});
