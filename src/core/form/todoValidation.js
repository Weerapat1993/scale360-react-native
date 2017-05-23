import { createValidator, required } from '../../utils';

export const todoValidation = createValidator({
  title: [required],
})