import _ from 'lodash/lodash';
// deps is an object that follows the following convention:
// {
//   <name>: <version>,
//   <name>: <version>
// }
export default function transformDependency(deps) {
  return _.reduce(deps, (acc, elem, key) => {
    let obj = {
      name: key,
      version: elem
    };
    acc.push(obj);
    return acc;
  }, []);
}
