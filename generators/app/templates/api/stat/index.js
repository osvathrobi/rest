import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'
import { token } from '../../services/passport'

const router = new Router()

/**
 * @api {get} /stats Retrieve stats
 * @apiName RetrieveStats
 * @apiGroup Stat
 * @apiUse listParams
 * @apiSuccess {Object[]} stats List of stats.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
	//token({ required: true, roles: ['user'] }),
  query(),
  index)

export default router
