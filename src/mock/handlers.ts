import { http, HttpResponse, PathParams } from 'msw';

type Request = {
  name: string | null;
}
 
export const handlers = [
  http.put<PathParams, Request>('https://noko_nokono.com/', async ({ request }) => {
    const data = await request.json();
    const name = data.name;

    return HttpResponse.json({
      id: 'uid',
      name: name,
    })
  }),
];