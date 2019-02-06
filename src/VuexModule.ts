import { RegisterOptions } from "./module-factory";
import { WatchOptions } from "vue";

export class VuexModule {
  private __options: RegisterOptions;
  constructor(options: RegisterOptions | ((className: string) => RegisterOptions)) {
    if (typeof options === "function") {
      options = options(this.constructor.name);
    }
    this.__options = options;
  }

  $watch<T>(fn: (arg: this) => T, callback: (newValue: T, oldValue: T) => void, options?: WatchOptions) {}
}
