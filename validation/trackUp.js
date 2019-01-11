const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateTrackUploadInput(data){
  let errors = {};

  data.title =!isEmpty(data.title) ? data.title : '';//make sure the field is a string so Validator's isEmpty func works (requires a string)
  data.length =!isEmpty(data.length) ? data.length: '';
  data.image =!isEmpty(data.image) ? data.length: '';
  data.source = !isEmpty(data.source) ? data.source: '';
  data.available = !isEmpty(data.available) ? data.available: '';

  if(!Validator.isLength(data.title, {min: 2, max: 30})){
    errors.title = "title must be between 2 and 30 characters";
  }
if (Validator.isEmpty(data.title)){
  errors.title = 'title field is required';
}
if (Validator.isEmpty(data.length)){
  errors.length = 'length field is required';
}
if (Validator.isEmpty(data.image)){
  errors.image = 'image field is required';
}
if (Validator.isEmpty(data.source)){
  errors.source = 'source field is required';
}
if (Validator.isEmpty(data.available)){
  errors.available = 'available field is required';
}
return {
  errors, 
  isValid: isEmpty(errors)
};
};