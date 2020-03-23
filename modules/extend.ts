import { ExtendType } from '../types/modules/extend';

const extend = <T1, T2>(defaults: T1, options: T2): ExtendType => {
  let extended: ExtendType = {};
  let prop: string | number;

  for (prop in defaults) {
    if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
      extended[prop] = defaults[prop];
    }
  }
  for (prop in options) {
    if (Object.prototype.hasOwnProperty.call(options, prop)) {
      extended[prop] = options[prop];
    }
  }
  return extended;
};

export default extend;
