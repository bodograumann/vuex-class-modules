import { RegisterOptions } from "./module-factory";

export class VuexModule {
  private __options: RegisterOptions;
  constructor(options: RegisterOptions | ((className: string) => RegisterOptions)) {
    if (typeof options === "function") {
      options = options(this.constructor.name);
    }
    this.__options = options;
  }
}
