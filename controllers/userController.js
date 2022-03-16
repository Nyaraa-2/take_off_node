import express from 'express'
import { getUsersSql } from '../services/userServices.js'
import { ERROR_GET_USER } from '../src/user/constants.js'

/**
 * GET, retourne la liste de tous les utilisateurs
 */
export async function getUsers(req, res) {
  try {
    res.json(await getUsersSql())
  } catch (error) {
    console.log(error)
  }
}
