
const SERVER = 'server';
const DEVELOP = 'develop'

const LOCATION = DEVELOP;
module.exports = {
  server(){
    switch(LOCATION){
    case'server':
    return 'http://localhost:8080/hal_shop/API/'
    case'develop':
    return 'http://localhost:3001/'
    }
  },
  path(){
    switch(LOCATION){
      case SERVER:
      return '/hal_shop';
      case DEVELOP:
      return ''
    }

  }
}