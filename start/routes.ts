/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router' // Import du service de routage d'AdonisJS
import db from '@adonisjs/lucid/services/db' // Import du service de base de données Lucid d'AdonisJS

// Route GET pour la page d'accueil, qui affiche une liste de tâches
router.get('/', async ({ view }) => {
  try {
    // Récupère toutes les tâches dans la base de données
    const tasks = await db.query().from('tasks').select('*')
    // Rendu de la page 'index.edge' avec la liste des tâches
    return view.render('pages/index.edge', { tasks: tasks })
  } catch (ex) {
    // En cas d'erreur, affichage de l'erreur dans la console et rendu d'une page d'erreur serveur
    console.log(ex)
    return view.render('pages/errors/server_error.edge', { error: { code: 500 } })
  }
})

// Route POST pour ajouter une nouvelle tâche
router.post('/', async ({ request, response, view }) => {
  const currentTime = new Date() // Création de la date actuelle
  const { description } = request.all() // Récupère la description de la tâche depuis le corps de la requête
  try {
    // Insertion d'une nouvelle tâche dans la table 'tasks' avec la description, et les timestamps
    await db.table('tasks').returning('id').insert({
      description: description,
      created_at: currentTime,
      updated_at: currentTime,
    })
    // Réponse JSON avec un message de succès
    response.status(200).json('The task has been added successfully')
  } catch (ex) {
    // Gestion des erreurs, avec un affichage d'erreur serveur
    console.log(ex)
    return view.render('pages/errors/server_error.edge', { error: { code: 500 } })
  }
})

// Route PUT pour mettre à jour une tâche existante
router.put('/:id', async ({ request, response, params, view }) => {
  const currentTime = new Date() // Création de la date actuelle
  const id = Number(params['id']) // Récupère l'ID de la tâche à partir des paramètres de la route
  const { description } = request.all() // Récupère la description depuis la requête
  try {
    // Mise à jour de la tâche avec l'ID correspondant
    await db
      .query()
      .from('tasks')
      .where('id', id)
      .update({ description: description })
      .update({ updated_at: currentTime })
    // Réponse JSON avec un message de succès
    response.status(200).json('The task has been upgraded successfully')
  } catch (ex) {
    // Gestion des erreurs
    console.log(ex)
    return view.render('pages/errors/server_error.edge', { error: { code: 500 } })
  }
})

// Route DELETE pour supprimer une tâche
router.delete('/:id', async ({ response, params, view }) => {
  const id = Number(params['id']) // Récupère l'ID de la tâche à supprimer
  try {
    // Suppression de la tâche dans la base de données
    await db.query().from('tasks').where('id', id).delete()
    // Réponse JSON avec un message de succès
    response.status(200).json('The task has been deleted')
  } catch (ex) {
    // Gestion des erreurs
    console.log(ex)
    return view.render('pages/errors/server_error.edge', { error: { code: 500 } })
  }
})
