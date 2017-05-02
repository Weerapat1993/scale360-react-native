import { asyncActionType } from '../../utils'

export const TODO = {
  FETCH: asyncActionType('FETCH_TODO'),
  CREATE: asyncActionType('CREATE_TODO'),
  UPDATE: asyncActionType('UPDATE_TODO'),
  DELETE: asyncActionType('DELETE_TODO'),
}
