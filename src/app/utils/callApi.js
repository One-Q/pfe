export default function getUrl() {
  const url = ENV === 'production' ? 'https://ipl-resolver.herokuapp.com/api/' : 'http://localhost:3000/api/'

  return url
  
}