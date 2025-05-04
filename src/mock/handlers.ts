import { http, HttpResponse } from 'msw';
 
export const handlers = [
  http.put('https://noko_nokono.com/', () => {
    return HttpResponse.json({
      id: 'uid',
      name: 'noko_nokono',
    })
  }),
];