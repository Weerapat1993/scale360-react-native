import { createValidator, required } from '../../utils';

export const coreValidation = createValidator({
  title: [required],
})