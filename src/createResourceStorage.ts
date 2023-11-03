import { Signal } from "solid-js";
import { unwrap } from "solid-js/store";

function isCallable<U, T>(
  value: U | ((prev: T) => U),
): value is (prev: T) => U {
  return typeof value === "function";
}

export function createResourceStorage<T>(
  accessor: () => T | undefined,
  setter: (state: T | undefined) => void,
): Signal<T | undefined> {
  const _setter = (
    newValue: T | undefined | ((prev: T | undefined) => T | undefined),
  ) => {
    let updatedValue: T | undefined = undefined;

    if (isCallable(newValue)) {
      updatedValue = newValue(unwrap(accessor()));
    } else {
      updatedValue = newValue;
    }

    setter(updatedValue);
    return updatedValue;
  };

  return [accessor, _setter] as Signal<T | undefined>;
}
