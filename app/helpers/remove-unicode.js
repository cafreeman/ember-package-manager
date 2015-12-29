import Ember from 'ember';

// A template helper for removing the annoying '<U+000a>' code point that gets returned in some of
// the responses from the cranDB API.

// May need to extend this out further if more unicode shenanigans turn up.
export function removeUnicode(params) {
  let str = params[0];
  let re = /<U\+000a>/g;
  return str.replace(re, ' ');
}

export default Ember.Helper.helper(removeUnicode);
