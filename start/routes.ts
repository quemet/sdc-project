/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

router.get('/', async ({ view }) => {
  const tasks = await db.query().from('tasks').select('*')
  return view.render('pages/index.edge', { tasks: tasks })
})

router.post('/', async ({ request, response }) => {
  const currentTime = new Date()
  const { description } = request.all()
  await db.table('tasks').returning('id').insert({
    description: description,
    created_at: currentTime,
    updated_at: currentTime,
  })
  response.status(200).json('The task has been added successfully')
})

router.put('/:id', async ({ request, response, params }) => {
  const id = Number(params['id'])
  const { description } = request.all()
  await db.query().from('tasks').where('id', id).update({ description: description })
  response.status(200).json('The task has been upgraded sucessfully')
})

router.delete('/:id', async ({ response, params }) => {
  const id = Number(params['id'])
  await db.query().from('tasks').where('id', id).delete()
  response.status(200).json('The task has been deleted')
})
