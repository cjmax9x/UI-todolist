const htmls = ([first, ...strings], ...value) => {
  return value
    .reduce(
      (acc, cur) => {
        return acc.concat(cur, strings.shift());
      },
      [first]
    )
    .filter((item) => (item && item !== true) || item === 0)
    .join("");
};
export default htmls;

export const createStore = (reducer) => {
  let state = reducer();
  const roots = new Map();
  const render = () => {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  };

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
};
