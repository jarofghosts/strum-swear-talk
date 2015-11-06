'use strict'

const swear = require('swear')
const fsp = require('fs-promise')
const fetch = require('isomorphic-fetch')

const URL = 'http://api.zippopotam.us/us/'

const wackyObj = {
  '90210': getInfo(90210),
  '97211': getInfo(97211)
}

swear(wackyObj).then(console.log)

function getInfo (zip) {
  return fetch(`${URL}${zip}`)
    .then(response => response.json())
    .then(data => {
      const stateName = data.places[0].state

      return {
        state: stateName,
        nickname: fsp.readFile(
          `${stateName.toLowerCase()}.txt`,
          {encoding: 'utf8'}
        )
      }
    })
}
