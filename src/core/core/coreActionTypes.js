import { asyncActionType } from '../../utils'

export const CORE = {
  FETCH: asyncActionType('FETCH_CORE'),
  CREATE: asyncActionType('CREATE_CORE'),
  UPDATE: asyncActionType('UPDATE_CORE'),
  DELETE: asyncActionType('DELETE_CORE'),
}
