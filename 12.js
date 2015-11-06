'use strict'

const strum = require('strum')
const fetch = require('isomorphic-fetch')

const API = 'http://www.telize.com/geoip/'

const IPs = [
  '46.19.37.108',
  '172.16.254.1',
  '78.53.251.10',
  '121.230.182.8',
  '97.185.84.162',
  '178.64.181.218',
  '86.165.176.59',
  '73.242.99.56',
  '152.206.66.254',
  '238.145.159.64',
  '250.67.0.145',
  '220.221.137.41'
]

strum(IPs)
  .pipe(strum(ip => fetch(`${API}${ip}`).then(response => response.json())))
  .pipe(strum(data => (data.country || '???') + '\n'))
  .pipe(process.stdout)
