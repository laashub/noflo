// Manual registration of components to make available for the ComponentLoader
//
// This is an interim solution until https://github.com/component/builder.js/pull/62#issuecomment-16296342 is implemented
exports.register = function (loader) {
  loader.registerComponent('', 'Split', '/noflo/components/Split.js');
  loader.registerComponent('', 'Merge', '/noflo/components/Merge.js');
  loader.registerComponent('', 'Callback', '/noflo/components/Callback.js');
  loader.registerComponent('', 'GetElement', '/noflo/components/GetElement.js');
  loader.registerComponent('', 'MoveElement', '/noflo/components/MoveElement.js');
  loader.registerComponent('', 'ListenTouch', '/noflo/components/ListenTouch.js');
  loader.registerComponent('', 'ListenDrag', '/noflo/components/ListenDrag.js');
  loader.registerComponent('', 'ListenMouse', '/noflo/components/ListenMouse.js');
  loader.registerComponent('', 'Spring', '/noflo/components/Spring.js');
  loader.registerComponent('', 'Kick', '/noflo/components/Kick.js');
  loader.registerComponent('', 'Gate', '/noflo/components/Gate.js');
  loader.registerComponent('', 'Output', '/noflo/components/Output.js');
};
