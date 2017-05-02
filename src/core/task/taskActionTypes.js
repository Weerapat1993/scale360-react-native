import { asyncActionType } from '../../utils'

export const TASK = {
  FETCH: asyncActionType('FETCH_TASK'),
  CREATE: asyncActionType('CREATE_TASK'),
  UPDATE: asyncActionType('UPDATE_TASK'),
  DELETE: asyncActionType('DELETE_TASK'),
}
